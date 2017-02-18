////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////

module RemoveSubmissionLag {

	// INITIALIZATION
	let lastInput:string = '';
	let enabled:boolean = false;
	
	// Options
	Options.addCheckbox({
		label: 'REMOVE SUBMISSION LAG [EXPERIMENTAL]',
		section: 'Advanced',
		default: false,
		help: 'When submitting a message, the textbox is immediately cleared to allow you to enter new contents without waiting for the submission to be processed.\n\nNote that this is still in the experimental state, as a mechanism to recover messages that are never processed has yet to be implemented.',
		onchange: function() {
			enabled = this.prop('checked');
		}
	});

	// EVENTS
	// When message is submitted
	Elements.$submitBtn.on('click', function(e) {
		if(!enabled) return;

		// Clear textbox
		Elements.$textarea.val('');

		// This is a way to work around the issue where Reddit automatically clears the textbox
		// when the update had been successfully delivered, although we just cleared it here.
		// Call backupInput() whenever the textarea content is changed
		Elements.$textarea.on('keydown keyup input', backupInput);
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

}