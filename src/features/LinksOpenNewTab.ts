////////////////////////
// LinksOpenNewTab.ts //
////////////////////////

module LinksOpenNewTab {

	// INITIALIZATION
	let $base:JQuery = $('<base target="_blank">');
	Elements.$head.append($base);

	// Options
	let enabled:boolean = true;
	Options.addCheckbox('LINKS OPEN IN A NEW TAB', true, 'Advanced', function() {
		enabled = $(this).prop('checked');
		
		if(enabled) $base.attr('target', '_blank');
		else $base.attr('target', '_self');
	});


}