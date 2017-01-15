/////////////////////
// DisableCtrl0.ts //
/////////////////////

module DisableCtrl0 {

	// INITIALIZATION
	// Options
	let enabled:boolean = true;
	Options.addCheckbox('DISABLE BROWSER CTRL+0 (ZOOM RESET) SHORTCUT', true, 'Advanced', function() {
		enabled = $(this).prop('checked');
	});

	// EVENTS
	$(document).on('keydown', function(e) {
		if(enabled && e.ctrlKey && e.keyCode == 48) {
			e.preventDefault();
		}
	});


}
