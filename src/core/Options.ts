////////////////
// Options.ts //
////////////////

module Options {

	// INITIALIZATION
	// Add header to $options first
	Elements.$options.append(`
		<a href="https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme" target="_blank">
			<h1>Live Counting Extension v1.2</h1>
		</a>
	`);

	// Styles
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

		Elements.$options.append(
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
		Elements.$options.append(
			$(`<label>${label}: </label>`).append($elem));

		return $elem;
	}


};