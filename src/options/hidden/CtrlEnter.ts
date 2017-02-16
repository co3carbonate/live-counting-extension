//////////////////
// CtrlEnter.ts //
//////////////////

module CtrlEnter {

	// INITIALIZATION
	let enabled:boolean = true;
	let $textarea:JQuery = $('#new-update-form textarea');
	let $submitBtn:JQuery = $('#new-update-form .save-button button');

	// RES already has a ctrl-enter feature since v4.7.8
	// Skip remaining actions if using a version higher than that
	let $resVersion:JQuery = $('#RESConsoleVersion');
	if($resVersion.length > 0 && +($resVersion.text().replace(/\D/g,'')) >= 478) enabled = false;

	// Bind keydown event to the textarea
	if(enabled) {
		$textarea.on('keydown', function(e) {
			if(e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
				e.preventDefault();
				$submitBtn.trigger('click');
			}
		});
	}

}