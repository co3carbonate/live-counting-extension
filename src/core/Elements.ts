/////////////////
// Elements.ts //
/////////////////

module Elements {

	// PROPERTIES
	// Important elements
	export let $head:JQuery = $('head');
	export let $body:JQuery = $('body');
	export let $content:JQuery = $('div.content');
	export let $updates:JQuery = $('.liveupdate-listing');
	export let $options:JQuery = $('#liveupdate-options');
	export let $sidebar:JQuery = $('aside.sidebar');

	export let $form:JQuery = $('#new-update-form');
	export let $textarea:JQuery = $form.find('textarea');
	export let $submitBtn:JQuery = $form.find('.save-button button');
	export let $submitError:JQuery = $form.find('.save-button .error');

	// INITIALIZATION
	$body.attr('id', 'lc-body');

	// Prevent the larger $options from displacing the sidebar
	// with different behaviour depending on whether or not textbox exists
	if($form.length) {
		$form.after('<div style="clear:both;"></div>');
	} else {
		$options.after('<div style="clear:both;"></div>');
	}

	// Make the submitError display default to none (important in RemoveSubmissionLag)
	$submitError.css('display', 'inline');

};