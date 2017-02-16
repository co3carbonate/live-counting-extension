////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////

module RemoveSubmissionLag {

	// INITIALIZATION
	let enabled:boolean = false;
	let $textarea:JQuery = $('#new-update-form textarea');
	let $submitBtn:JQuery = $('#new-update-form .save-button button');

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
	$submitBtn.on('click', function(e) {
		if(!enabled) return;

		// Clear textbox
		$textarea.val('');

	});


}