////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////

module RemoveSubmissionLag {

	// INITIALIZATION
	let lastInput:string = '';
	let enabled:boolean = true;
	let previews:{
		html:string;
		elem:JQuery
	}[] = [];
	
	// Options
	Options.addCheckbox({
		label: 'REMOVE SUBMISSION LAG',
		section: 'Basic',
		default: true,
		help: 'Upon submitting a message, the textbox is immediately cleared to allow you to enter new contents without waiting for your previous submission to be processed.',
		onchange: function() {
			enabled = this.prop('checked');
		}
	});

	// Styles
	Styles.add(`

	.liveupdate-listing li.liveupdate.preview {
		opacity: 0.75;
	}
	.liveupdate-listing li.liveupdate.preview .live-timestamp {
		visibility: hidden;
	}

	`);

	// EVENTS
	// When message is submitted
	Elements.$submitBtn.on('click', function(e) {
		if(!enabled) return;

		setTimeout(function() {
			let val:string = Elements.$textarea.val();
			if(val.length == 0) return;

			// Add preview element, a faded message containing the contents of the new message
			// until it has been delivered.
			// Prevents permanent loss of messages if delivery fails
			let html:string = SnuOwnd.getParser().render(val);
			let $buttonRow:JQuery = $(`
				<ul class="buttonrow">
					<li><button>retry</button></li>
					<li><button>cancel</button></li>
				</ul>
			`);
			let $elem:JQuery = $(`
				<li class="liveupdate preview">
					<a href="#"><time class="live-timestamp"></time></a>
					<div class="body">
						<div class="md">
							${html}
						</div>
					</div>
				</li>
			`).append($buttonRow);
			previews.push({
				html: html.trim().replace(/(\r\n|\n|\r)/gm,""),
				elem: $elem
			});
			Elements.$updates.prepend($elem);

			// Setup event listeners for the buttons of the preview message
			let $buttons = $buttonRow.find('button');
			
			// "Retry" button
			$buttons.eq(0).on('click', function() {
				Elements.$textarea.val(val).focus();
			});

			// "Cancel" button
			$buttons.eq(1).on('click', function() {
				for(let i:number = 0; i < previews.length; i++) {
					if($elem == previews[i].elem) {
						$elem.remove();
						previews.splice(i, 1);
						break;
					}
				}
			});

			// Clear textbox
			Elements.$textarea.val('');

			// This is a way to work around the issue where Reddit automatically clears the textbox
			// when the update had been successfully delivered, although we just cleared it here.
			// Call backupInput() whenever the textarea content is changed
			Elements.$textarea.on('keydown keyup input', backupInput);

		}, 0);
	});
	// In backupInput(), keep track of the last backed up textarea content, by storing in lastInput
	function backupInput():void {
		lastInput = Elements.$textarea.val();
	}

	// Use MutationObserver on the 'error message' to detect when Reddit had cleared the textbox.
	// When the error message's style changes from 'display: inline;' to 'display: none;', it
	// is clear that Reddit had cleared the textbox.
	// At this point, use the last backed-up input
	let observer:MutationObserver = new MutationObserver(function(mutations:MutationRecord[]) {
		if(!enabled) return;
		if(mutations.length != 1) return;

		// Exit if we think that Reddit had not cleared the textbox
		let mutation:MutationRecord = mutations[0];
		if(!(mutation.oldValue == 'display: inline;' &&
			 Elements.$submitError.attr('style') == 'display: none;')) return;

		// Use the last backed-up input
		Elements.$textarea.off('keydown keyup input', backupInput);
		Elements.$textarea.val(lastInput);
		lastInput = '';

	});
	observer.observe(Elements.$submitError.get(0), {
		// observe for change in 'style' attribute value
		attributes: true,
		attributeOldValue: true,
		attributeFilter: ['style']
	});

	// When new message is loaded and is by this user, check if we can delete the corresponding 
	// preview message.
	// If it is by another user, push all the preview messages to the front (in the right order), 
	// so that they seem to always be on top.
	Update.loadedNew(function(data:Update.info) {
		if(!enabled) return;

		let l:number = previews.length; // number of preview messages

		if(data.author != USER) {
			// Message not from this user
			// Attempt to bring all the preview messages to the front and exit
			for(let i:number = 0; i < l; i++) {
				Elements.$updates.prepend(previews[i].elem);
			}
			return;
		}

		// Get the contents of the user's message (trimmed and without linebreaks),
		// loop through the preview messages (trimmed and without linebreaks),
		// and if the contents are the same, delete the preview message
		let body:string = data.body_elem.html().replace(/(\r\n|\n|\r)/gm,"").trim();
		//console.log(body);

		let to_delete:number = -1;
		for(let i:number = 0; i < l; i++) {
			//console.log(previews[i].html);
			if(previews[i].html == body) {
				to_delete = i;
				break;
			}
		}

		if(to_delete != -1) previews.splice(to_delete, 1)[0].elem.remove();
		
	});

}