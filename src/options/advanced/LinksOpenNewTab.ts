////////////////////////
// LinksOpenNewTab.ts //
////////////////////////

module LinksOpenNewTab {

	// INITIALIZATION
	let $base:JQuery = $('<base target="_blank">');
	Elements.$head.append($base);

	// Options
	let enabled:boolean = true;
	Options.addCheckbox({
		label: 'MAKE ALL LINKS OPEN IN A NEW TAB',
		default: true,
		section: 'Advanced',
		help: 'Makes all links on the page open in a new tab.',
		onchange: function() {
			enabled = this.prop('checked');
			
			if(enabled) $base.attr('target', '_blank');
			else $base.attr('target', '_self');
		}
	});


}