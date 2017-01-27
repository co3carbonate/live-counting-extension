////////////////////////
// ContentPosition.ts //
////////////////////////

module ContentPosition {

	// INITIALIZATION
	Elements.$body.attr('data-ContentPosition', 'Center');

	// Options
	Options.addSelect({
		label: 'CONTENT POSITION',
		options: ['Left', 'Center', 'Right'],
		section: 'Advanced',
		default: 1,
		onchange: function(){
			Elements.$body.attr('data-ContentPosition', this.val());
		}
	});

	// Styles
	Styles.add(`

	#lc-body[data-ContentPosition='Left'] div.content {
		margin: 0;
	}
	#lc-body[data-ContentPosition='Center'] div.content {
		margin: 0 auto;
	}
	#lc-body[data-ContentPosition='Right'] div.content {
		float: right;
	}

	`);
}