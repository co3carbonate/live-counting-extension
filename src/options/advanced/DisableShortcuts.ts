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
		help: 'Disables certain obstructive browser keyboard shortcuts. This currently disables the following: Ctrl+0 (Zoom Reset), Ctrl+[1-9] (Switch Tabs)',
		onchange: function() {
			enabled = this.prop('checked');
		}
	})

	// EVENTS
	$(document).on('keydown', function(e) {
		if(!enabled) return;

		// Ctrl / Meta Hotkeys
		if(e.ctrlKey || e.metaKey) {
			
			// Ctrl+0 / Meta+0 (Zoom Reset)
			if(e.keyCode == 48) e.preventDefault();

			// Ctrl+[1-9] / Meta+[1-9] (Switch Tabs)
			if(e.keyCode >= 49 && e.keyCode <= 57) e.preventDefault();
		}

		
		
	});


}
