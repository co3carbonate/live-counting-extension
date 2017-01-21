///////////////
// Update.ts //
///////////////

module Update {

	// PROPERTIES
	// Information about each update
	export interface info {
		elem:JQuery;
		author:string;
		body_elem:JQuery;
		author_elem:JQuery;
	}

	// UTILITY
	// Get information about an update node
	function getUpdateInfo($node:JQuery):info {
		let data:info = {
			elem: $node,
			author: $node.find('.body > .author').text(),
			author_elem: $node.find('.body > .author'),
			body_elem: $node.find('.body > .md')
		};

		if(data.author) data.author = data.author.trim().replace('/u/', '');
		
		return data;
	}

	// METHODS
	// Bind functions to execute in the following events:
	// - loadedNew(): When a new update is sent
	// - loadedOld(): When an old update is loaded
	// - striked(): When an update is striked 
	// - TODO: deleted(): When an update is deleted

	// loaded from top (new updates sent)
	let funcLoadedTop:Function[] = [];
	export function loadedNew(func:Function):void {
		funcLoadedTop.push(func);
	}

	// loaded from bottom (scrolled down to load old updates)
	let funcLoadedBottom:Function[] = [];
	export function loadedOld(func:Function):void {
		funcLoadedBottom.push(func);
	}

	// striked
	let funcStriked:Function[] = [];
	export function striked(func:Function):void {
		funcStriked.push(func);
	}

	// EVENTS
	// Setup MutationObserver on Elements.$updates
	let observer:MutationObserver = new MutationObserver(function(mutations:MutationRecord[]) {
		// Loop through MutationRecords and call the functions in various arrays based on .type
		for(let mutation of mutations) {

			// Addition / removal of child elements
			// Executes loadedNew(), loadedOld(), deleted() functions accordingly
			if(mutation.type == 'childList') {
				
				// Setup variables for new updates or deleted updates
				let $addedNodes:JQuery = $(mutation.addedNodes).filter('.liveupdate');
				let $removedNodes:JQuery = $(mutation.removedNodes).filter('.liveupdate');
				
				// Loop through new updates (if any)
				$addedNodes.each(function(index, element) {
					let $node:JQuery = $(element);

					// Get data about the new update
					let data:info = getUpdateInfo($node);

					// Check if the update was loaded from top or bottom
					// Execute loadedNew() or loadedOld() functions accordingly
					if($node.index() == 0) {
						// Loaded from top
						// Execute loadedNew() functions
						for(let func of funcLoadedTop) {
							func(data);
						}
					} else {
						// Loaded from bottom
						// Execute loadedOld() functions
						for(let func of funcLoadedBottom) {
							func(data);
						}
					}

				});

				// TODO: handle deleted updates $removedNodes
				// Loop through deleted updates (if any)

			}

			// Change in attribute values
			// The attributeFilter is specified to only look out for changes in the attributes ["class"]
			// Executes striked() functions accordingly
			else if(mutation.type == 'attributes') {
				
				// Setup
				let $node:JQuery = $(mutation.target);
				if(!(mutation.oldValue && $node.attr('class'))) return;

				let oldClasses:string[] = mutation.oldValue.split(' ');
				let newClasses:string[] = $node.attr('class').split(' ');

				// Must be a .liveupdate element
				if(!$node.hasClass('liveupdate')) return;
				
				// Get data about the update
				let data:info = getUpdateInfo($node);

				// Check if the update had only now been stricken
				if(oldClasses.indexOf('stricken') == -1 
				&& newClasses.indexOf('stricken') > -1) {
					// Execute striked() functions
					for(let func of funcStriked) {
						func(data);
					}
				}
			}
		}
	});
	observer.observe(Elements.$updates.get(0), {
		// observe for insertion / removal of children updates
		childList: true,

		// observe for change in the 'class' attribute value
		attributes: true,
		attributeOldValue: true,
		attributeFilter: ['class'],

		// observe for these changes (particularly attributes changes) in descendants 
		subtree: true
	});


}