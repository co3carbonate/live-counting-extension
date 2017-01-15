////////////////////
// DisplayMode.ts //
////////////////////

module DisplayMode {

	// INITIALIZATION
	Elements.$body.attr('data-DisplayMode', 'Normal');

	// "Return to Normal Display" button
	let $returnBtn:JQuery = $('<input type="button" value="&lt; Return to Normal Display"/>');
	$returnBtn.on('click', function() {
		$select.children('option[value="Normal"]').prop('selected', true).trigger('change');
	});
	$returnBtn
		.css('margin-bottom', '20px')
		.css('display', 'none');

	Elements.$content.prepend($returnBtn);


	// Options
	let $select:JQuery =
		Options.addSelect('DISPLAY MODE', ['Normal', 'Minimal'], function() {
			let display:string = $(this).val();
			$returnBtn.css('display', (display == 'Normal' ? 'none' : 'block'));
			Elements.$body.attr('data-DisplayMode', display);
		});

	// Styles
	Styles.add(`

	/* Display Minimal */
	#lc-body[data-DisplayMode='Minimal'] #header,
	#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,
	#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,
	#lc-body[data-DisplayMode='Minimal'] #new-update-form .bottom-area,
	#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,
	#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, 
	#lc-body[data-DisplayMode='Minimal'] aside.sidebar {
		display: none;
	}

	#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,
	#lc-body[data-DisplayMode='Minimal'] #new-update-form {
		margin-left: 0px;
	}

	#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {
		margin: 0 0 2em 0px !important;
	}

	#lc-body[data-DisplayMode='Minimal'] div.content {
		max-width: ${
			Math.max(450, $('#new-update-form textarea').outerWidth())
		}px;
	}

	`);

}