///////////////
// Styles.ts //
///////////////

module Styles {

	// STYLESHEET
	let $css:JQuery = $('<style></style>');

	// INITIALIZATION
	$('head').append($css);

	// METHODS
	// Add code to stylesheet
	export function add(code:string):void {
		$css.append(code);
	}

}