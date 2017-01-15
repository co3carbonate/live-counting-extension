/////////////////////////
// DisableShortcuts.ts //
/////////////////////////

// Disabling of certain obstructive browser keyboard shortcuts

module DisableShortcuts {

	// EVENTS
	$(document).on('keydown', function(e) {

		// Ctrl+0 Zoom Reset
		if(e.ctrlKey && e.keyCode == 48) {
			e.preventDefault();
		}

		
		
	});


}
