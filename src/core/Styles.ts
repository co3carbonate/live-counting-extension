///////////////
// Styles.ts //
///////////////

module Styles {

	// STYLESHEET
	let $css:JQuery = $(`<style>

	/* General styles */
	#lc-body .liveupdate-listing {
		min-width: 0px;
	}

	/* Prevent the button row from always showing up when screen is small */
	#lc-body li.liveupdate ul.buttonrow {
		display: none !important;
	}

	#lc-body li.liveupdate:hover ul.buttonrow {
		display: block !important;
	}

	/* Disable the transition entrance fade effect when an update is sent */
	#lc-body li.liveupdate * {
		transition: none;
	}

	</style>`);

	// INITIALIZATION
	$('head').append($css);

	// METHODS
	// Add code to stylesheet
	export function add(code:string):void {
		$css.append(code);
	}

}