/////////////////////////////
// DisableUsernameLinks.ts //
/////////////////////////////

module DisableUsernameLinks {

	// INITIALIZATION
	Elements.$body.attr('data-DisableUsernameLinks', 'false');

	// Options
	Options.addCheckbox({
		label: 'DISABLE USERNAME LINKS',
		section: 'Advanced',
		onchange: function() {
			Elements.$body.attr('data-DisableUsernameLinks', this.prop('checked').toString());
		}
	})

	// Styles
	Styles.add(`

	#lc-body[data-DisableUsernameLinks='true'] li.liveupdate > .body > .author {
		pointer-events: none;
		cursor: auto;
	}

	`);

}
