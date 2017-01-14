/////////////////
// Elements.ts //
/////////////////

module Elements {

	// PROPERTIES
	export let $head:JQuery = $('head');
	export let $body:JQuery = $('body');
	export let $content:JQuery = $('div.content');
	export let $updates:JQuery = $('.liveupdate-listing');
	export let $options:JQuery = $('#liveupdate-options');
	export let $sidebar:JQuery = $('aside.sidebar');

	// INITIALIZATION
	$body.attr('id', 'lc-body');

	// Prevent the larger $options from displacing the sidebar
	// with different behaviour depending on whether or not textbox exists
	if($('#new-update-form').length) {
		$('#new-update-form').after('<div style="clear:both;"></div>');
	} else {
		$options.after('<div style="clear:both;"></div>');
	}

};