////////////////
// Options.ts //
////////////////

module Options {

	// INITIALIZATION
	// Initialize new content in the options box
	let $heading:JQuery = $(`
		<h1>
			<a href="https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme" target="_blank">Live Counting Extension v1.4</a> 
		</h1>
	`);
	let $toggle:JQuery = $(`<span>[-]</span>`);
	let $options:JQuery = $(`<div></div>`);
	
	$heading.append($toggle);
	Elements.$options.append($heading, $options);

	// When the toggle button is clicked ([-] and [+])
	$toggle.on('click', function() {
		if($options.css('display') == 'none') {
			// show
			$(this).html('[-]');
			$options.slideDown(500);
		} else {
			// hide
			$(this).html('[+]');
			$options.slideUp(500);
		}
	})

	// Styles
	$toggle.css('cursor', 'pointer');
	$heading.css({'font-size': '16px', 'font-weight': 'bold'});

	Styles.add(`

	#lc-body label {
		display: block;
		margin-bottom: 10px;
	}
	
	`);

	// METHODS
	// Add a checkbox option
	// Returns the newly created checkbox
	export function addCheckbox(label:string, 
								checked:boolean = false):JQuery {
		let $elem:JQuery = $(`<input type="checkbox" checked="${checked}"/>`);

		$options.append(
			$(`<label>${label}</label>`).prepend($elem));

		return $elem;
	}

	// Add select option
	// Returns the newly created select
	export function addSelect(label:string, 
							  options:string[], 
							  selectedIndex:number = 0):JQuery {
		let $elem:JQuery = $(`<select></select>`);

		let elem_contents:string = '';
		for(let i:number = 0; i < options.length; i++) {
			elem_contents += 
				`<option value="${options[i]}"${
					(i == selectedIndex) ? ' selected="true"': ''
				}>${options[i]}</option>`;
		}

		$elem.html(elem_contents);
		$options.append(
			$(`<label>${label}: </label>`).append($elem));

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
	let $header:JQuery = $('#liveupdate-header');

	$section.css('display', 'none').css('margin-top', '20px');
	Elements.$sidebar.children('.sidebar-expand').after($section);

	// Window resized
	$(window).on('load resize', function() {
		if(window.innerWidth <= 700) {
			// add the options to '[+] more about this live thread'
			if($section.css('display') == 'none') {
				$section.css('display', '');
				$options.detach().appendTo($section_md);
			}
		} else {
			// remove the options from '[+] more about this live thread'
			if($section.css('display') != 'none') {
				$section.css('display', 'none');
				$options.detach().insertAfter($header);
			}
		}
	});

	// CSS
	Styles.add(`
	
	#lc-body aside.sidebar #liveupdate-options {
		display: block;
		float: none;
		margin: 0;
		margin-top: 20px;
	}	
	`);

};