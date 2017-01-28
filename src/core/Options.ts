////////////////
// Options.ts //
////////////////

module Options {

	// INITIALIZATION
	// Initialize new content in the options box
	let $all_heading:JQuery = $(`
		<h1>
			<a href="https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme" target="_blank">Live Counting Extension v1.5</a> 
		</h1>
	`);
	let $options_heading:JQuery = $(`<h2>Options </h2>`);
	let $options_basic_heading:JQuery = $(`<h2>Basic </h2>`);
	let $options_advanced_heading:JQuery = $(`<h2>Advanced </h2>`);

	let $all_toggle:JQuery = $(`<span class="toggle-trigger">[-]</span>`);
	let $options_toggle:JQuery = $(`<span class="toggle-trigger">[-]</span>`);
	let $options_basic_toggle:JQuery = $(`<span class="toggle-trigger">[-]</span>`);
	let $options_advanced_toggle:JQuery = $(`<span class="toggle-trigger">[-]</span>`);

	let $all:JQuery = $(`<div id='live-counting-extension'></div>`);
	let $options:JQuery = $(`<div></div>`);
	let $options_basic:JQuery = $(`<div></div>`);
	let $options_advanced:JQuery = $(`<div></div>`);
	
	$all_heading.append($all_toggle);
	$all.append($options_heading, $options);

	$options_heading.append($options_toggle);
	$options_basic_heading.append($options_basic_toggle);
	$options_advanced_heading.append($options_advanced_toggle);
	$options.append($options_basic_heading, $options_basic,
					$options_advanced_heading, $options_advanced);
	
	Elements.$options.append($all_heading, $all);

	// Handling toggle buttons ([-] and [+])
	function toggle($trigger:JQuery, $change:JQuery, index:number) {
		// bind click event listeners to the trigger
		$trigger.on('click', function() {
			if($change.css('display') == 'none') {
				// show
				$trigger.html('[-]');
				$change.slideDown(500);
				Cookie.save.collapsed[index] = false;
			} else {
				// hide
				$trigger.html('[+]');
				$change.slideUp(500);
				Cookie.save.collapsed[index] = true;
			}
			Cookie.update();
		});

		// immediately trigger the click event if current cookie save is true
		if(Cookie.save.collapsed[index])
			$trigger.trigger('click');
		
	}

	// call
	toggle($all_toggle, $all, 0);
	toggle($options_toggle, $options, 1);
	toggle($options_basic_toggle, $options_basic, 2);
	toggle($options_advanced_toggle, $options_advanced, 3);

	// Styles
	$all_toggle.css('font-size', '15px');

	// css
	Styles.add(`

	/* Main heading */
	#live-counting-extension h1 {
		color: #369;
		font-size: 16px;
		font-weight: bold;
		margin: 10px 0px;
	}

	/* Subheadings */
	#live-counting-extension h2 {
		color: #4F4F4F;
		font-size: 14px;
		font-weight: bold;
		margin: 8px 0px;
	}

	/* Toggle triggers */
	/* Don't specify #live-counting-extension for this, because the first trigger is actually outside the #live-counting-extension element */
	
	.toggle-trigger {
		cursor: pointer;
		color: #656565;
		font-weight: normal;
	}


	/* Labels */
	#live-counting-extension label {
		display: block;
		margin-bottom: 10px;
		line-height: 160%;
	}
	
	`);

	// METHODS
	// Add a checkbox option
	// Returns the newly created checkbox
	export function addCheckbox(properties: {
		label:string;
		section?:string;
		onchange?:Function;
		default?:boolean;
		help?:string;
	}):JQuery {
		// Handling properties
		if(!properties.hasOwnProperty('section')) properties.section = 'Basic';
		if(!properties.hasOwnProperty('onchange')) properties.onchange = null;
		if(!properties.hasOwnProperty('default')) properties.default = false;
		if(!properties.hasOwnProperty('help')) properties.help = '';
		const {
			'label': label,
			'section': section,
			'onchange': onchange,
			'default': defaultChecked,
			'help': help
		} = properties;

		// Default value handling (cookie)
		let checked:boolean = defaultChecked; 
		if(Cookie.saveDefaultOptions && !Cookie.save.options.hasOwnProperty(label))
			Cookie.save.options[label] = checked;
		else
			checked = Cookie.save.options[label] as boolean;

		// Create label and checkbox
		let $elem:JQuery = $(`<input type="checkbox"${checked ? ' checked="true"' : ''}/>`);
		
		// Add option
		let $options_section:JQuery = $options_basic;
		if(section == 'Basic') $options_section = $options_basic;
		else if(section == 'Advanced') $options_section = $options_advanced;
		
		$options_section.append(
			$(`<label>${label}</label>`)
				.attr('title', help)
				.prepend($elem)
		);

		// Handle onchange
		$elem.on('change', function() {
			Cookie.save.options[label] = $elem.prop('checked');
			Cookie.update();
			if(onchange != null) onchange.call($elem);
		});

		// Trigger change event if the value != default
		if(defaultChecked != checked) $elem.trigger('change');

		return $elem;
	}

	// Add select option
	// Returns the newly created select
	export function addSelect(properties: {
		label:string;
		options:string[];
		section?:string;
		default?:number;
		onchange?:Function;
		help?:string;
	}):JQuery {
		// Handling properties
		if(!properties.hasOwnProperty('section')) properties.section = 'Basic';
		if(!properties.hasOwnProperty('onchange')) properties.onchange = null;
		if(!properties.hasOwnProperty('default')) properties.default = 0;
		if(!properties.hasOwnProperty('help')) properties.help = '';
		const {
			'label': label,
			'options': options,
			'section': section,
			'onchange': onchange,
			'default': selectedIndex,
			'help': help
		} = properties;

		// Default value handling (cookie)
		let defaultVal:string = options[selectedIndex];
		let selectedVal:string = defaultVal;
		if(Cookie.saveDefaultOptions && !Cookie.save.options.hasOwnProperty(label))
			Cookie.save.options[label] = selectedVal;
		else
			selectedVal = Cookie.save.options[label] as string;

		// Create label, select, and options
		let $elem:JQuery = $(`<select></select>`);

		let elem_contents:string = '';
		for(let i:number = 0; i < options.length; i++) {
			elem_contents += 
				`<option value="${options[i]}"${
					(options[i] == selectedVal) ? ' selected="true"': ''
				}>${options[i]}</option>`;
		}

		$elem.html(elem_contents);

		// Add option
		let $options_section:JQuery;
		if(section == 'Basic') $options_section = $options_basic;
		else if(section == 'Advanced') $options_section = $options_advanced;
		
		$options_section.append(
			$(`<label>${label}: </label>`)
				.attr('title', help)
				.append($elem)
		);

		// Handle onchange
		$elem.on('change', function() {
			Cookie.save.options[label] = $elem.val();
			Cookie.update();
			if(onchange != null) onchange.call($elem);
		});

		// Trigger change event if the value != default
		if(defaultVal != selectedVal) $elem.trigger('change');

		return $elem;
	}

	// WINDOW SIZE
	// If sidebar turns into '[+] more about this live thread',
	// (or window width < 700px according to CSS),
	// move options to inside .sidebar

	// New section in the sidebar for options
	let $section:JQuery = $(
	`<section>
		<h2>options</h2>
		<div class='md'></div>
	</section>`);
	let $section_md:JQuery = $section.children('.md');

	$section.css('display', 'none').css('margin-top', '20px');
	Elements.$sidebar.children('.sidebar-expand').after($section);

	// Window resized
	$(window).on('load resize', function() {
		if(window.innerWidth <= 700) {
			// add the options to '[+] more about this live thread'
			if($section.css('display') == 'none') {
				$section.css('display', '');
				$all.detach().appendTo($section_md);
			}
		} else {
			// remove the options from '[+] more about this live thread'
			if($section.css('display') != 'none') {
				$section.css('display', 'none');
				$all.detach().insertAfter($all_heading);
			}
		}
	});

};