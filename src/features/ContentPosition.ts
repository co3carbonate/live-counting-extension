////////////////////////
// ContentPosition.ts //
////////////////////////

module ContentPosition {

	// INITIALIZATION
	Elements.$body.attr('data-ContentPosition', 'Center');

	// Options
	Options.addSelect('CONTENT POSITION', ['Left', 'Center', 'Right'], 1)
		.on('change', function() {
			Elements.$body.attr('data-ContentPosition', $(this).val());
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