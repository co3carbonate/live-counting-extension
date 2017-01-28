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
		help: 'Disables the redirection to a user\'s profile upon clicking on his/her username. This is convenient to prevent yourself from accidentally going to one\'s profile page when trying to strike or delete a message.',
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
