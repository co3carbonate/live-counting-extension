///////////////////////////
// DeletePastMessages.ts //
///////////////////////////

module DeletePastMessages {

	// INITIALIZATION
	const maxMessages:number = 50;

	// Options
	let enabled:boolean = true;
	let $checkbox:JQuery =
		Options.addCheckbox('DELETE PAST MESSAGES (REDUCES LAG)', true)
		.on('change', function() {
			enabled = $(this).prop('checked');
		});

	// EVENTS
	// New update loaded
	Update.loadedNew(function(data:Update.info) {
		if(!enabled) return;

		let $screenMessages:JQuery = Elements.$updates.children('.liveupdate');
		if($screenMessages.length > maxMessages) {
			$screenMessages.slice(maxMessages).remove();
		}
	});

	// Old update loaded (scrolled to bottom)
	Update.loadedOld(function(data:Update.info) {
		// disable
		if(!enabled) return;
		$checkbox.prop('checked', false).trigger('change');
	});


}