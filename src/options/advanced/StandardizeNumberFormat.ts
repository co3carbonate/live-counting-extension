////////////////////////////////
// StandardizeNumberFormat.ts //
////////////////////////////////

module StandardizeNumberFormat {

	// UTILITY
	// Format a number string with a character separator (e.g. 1,000,000)
	function delimit(str:string, char:string):string {
		return str.replace(/\B(?=(\d{3})+(?!\d))/g, char);
	}
	// Trim specified leading and trailing characters in a string
	function trim(str:string, chars:string[]):string {
		let i:number = 0;
		let l:number = str.length;
		let start:number = 0;
		let end:number = l - 1;
		for(i = 0; i < l; i++) {
			if(chars.indexOf(str.charAt(i)) == -1) {
				start = i;
				break;
			}
		}
		for(i = l - 1; i >= 0; i--) {
			if(chars.indexOf(str.charAt(i)) == -1) {
				end = i;
				break;
			}
		}
		return str.slice(start, end + 1);
	}

	/**
	 * Get the first element in the body that is either
	 	* a text node
	 	* a node that does not have any children 
	 */
	function first_node(parent:Element):Node {
		let contents:NodeList = parent.childNodes;
		let i:number = 0;
		for(let l = contents.length; i < l; i++) {
			if(contents[i].nodeType == 3) {
				// text node
				// check if empty
				if(contents[i].textContent.trim().length > 0)
					return contents[i];
			}
			if(contents[i].nodeType == 1) {
				// element node
				let elem:Element = contents[i] as Element;
				if(elem.children.length == 0) {
					// no more children
					break;
				}
				// parent node - recurse to return its first node
				return first_node(elem);
			}
		}
		return contents[i];
	}


	// INITIALIZATION
	let enabled:boolean = false;
	let format:Function = function(str:string) { return str; };
	
	// Possible format functions
	// (this is to avoid the use of anonymous functions, improving performance)
	namespace FormatFuncs {
		export function Commas(str:string) {
			return delimit(str, ',');
		}
		export function Spaces(str:string) {
			return delimit(str, ' ');
		}
		export function Periods(str:string) {
			return delimit(str, '.');
		}
		export function None(str:string) {
			return str;
		}
	};

	// Options
	Options.addSelect({
		label: 'STANDARDIZE NUMBER FORMAT',
		options: ['Disable', 'Spaces', 'Periods', 'Commas', 'None'],
		section: 'Advanced',
		help: 'Standardizes the number count in each message to a format of your choice. Also removes special formatting on the number.',
		onchange: function() {
			let val:string = this.val();
			if(val == 'Disable') { enabled = false; return; }

			enabled = true;
			format = FormatFuncs[val];
		}
	});

	// EVENTS
	// New update loaded
	Update.loadedNew(function(data:Update.info) {
		if(!enabled) return;

		let first_elem:Node = first_node(data.body_elem.get(0));
		let $first_elem:JQuery = $(first_elem);
		let body:string = first_elem.textContent;
		if(!body) return;
		
		// Detect number from string
		// (This algorithm has a few problems, such as "2,000 2 GETS today"
		//  producing a detected number of "20002".)
		let l:number = body.length;
		let num:string = '';
		let original_num:string = '';
		let c:string;
		for(let i = 0; i < l; i++) {
			c = body.charAt(i);
			if(c == '0' || c == '1' || c == '2' || c == '3' || c == '4' ||
			   c == '5' || c == '6' || c == '7' || c == '8' || c == '9') {
				num += c;
				original_num += c;
				continue;
			}
			else if(c == ' ' || c == ',' || c == '.') {
				// part of number styling preference
				original_num += c;
				continue;
			}
			else {
				break;
			}
		}
		if(num.length == 0) num = null;

		// Replace original_num in first_elem with num
		if(num == null) return;
		first_elem.textContent = body.replace(
			trim(original_num, [' ', ',', '.']),
			format(num)
		);
		
		// Remove formatting of parents of first_elem by changing into span
		// Also, headers are not wrapped in p, so replace those with p
		let $parents:JQuery = $first_elem.parentsUntil('p, div.md');
		let parentsLen:number = $parents.length;

		if(first_elem.nodeType == 1 && !$first_elem.is('p, div.md')) {
			$parents = $parents.add($first_elem);
			if(parentsLen == 0) {
				// not a paragraph, but still no parent? must be a header (h1)
				// convert to p
				$first_elem.replaceWith('<p>' +first_elem.textContent+ '</p>');
			}
		}
		
		let $this:JQuery;
		$parents.each(function(index:number, element:Element) {
			$this = $(this);
			if($this.parent().is(data.body_elem)) {
				// if the direct parent is the body element,
				// replace to p instead, 
				// since this is definitely not a p itself
				$this.replaceWith('<p>' +this.textContent+ '</p>');
				return;
			}
			$this.replaceWith('<span>' +this.textContent+ '</span>');
		});


	});

}