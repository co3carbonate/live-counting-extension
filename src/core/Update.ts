///////////////
// Update.ts //
///////////////

module Update {
	
	// PROPERTIES
	// Information about each update
	export interface info {
		elem:JQuery;
		author:string;
	}

	// METHODS
	// Bind function to execute when a new update is made

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

	// EVENTS
	// Mutation observer on list of updates
	Elements.$updates.on("DOMNodeInserted", function(e) {
		let $node:JQuery = $(e.target);

		// Must be a .liveupdate element
		if(!$node.hasClass('liveupdate')) {
			return;
		}

		// Get data about the new update
		// Note: For now we only need information about the author
		let data:info = {
			elem: $node,
			author: $node.find('.body > .author').text()
		};

		if(data.author) data.author = data.author.trim().replace('/u/', '');

		// Check if the new message from the top or bottom
		let index = $node.index();
		if(index == 0) {
			// Loaded from top
			for(var func of funcLoadedTop) {
				func(data);
			}
		} else {
			// Loaded from bottom
			for(var func of funcLoadedBottom) {
				func(data);
			}
		}
		

	});


}