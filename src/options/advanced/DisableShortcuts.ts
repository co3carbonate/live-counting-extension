/////////////////////////
// DisableShortcuts.ts //
/////////////////////////

module DisableShortcuts {

	// INITIALIZATION
	// Options
	let enabled:boolean = true;
	Options.addCheckbox({
		label: 'DISABLE OBSTRUCTIVE BROWSER SHORTCUTS',
		default: true,
		section: 'Advanced',
		help: 'Disables certain obstructive browser keyboard shortcuts. This currently disables the following: Ctrl+0 (Zoom Reset)',
		onchange: function() {
			enabled = this.prop('checked');
		}
	})

	// EVENTS
	$(document).on('keydown', function(e) {
		if(!enabled) return;

		// Ctrl+0 (Zoom Reset)
		if(e.ctrlKey && e.keyCode == 48) {
			e.preventDefault();
		}

		
		
	});


}
