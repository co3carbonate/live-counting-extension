/////////////////////////
// ColoredUsernames.ts //
/////////////////////////

module ColoredUsernames {

	// INITIALIZATION
	// Specified colors for known users
	let userColors:any = {
		'SolidGoldMagikarp': '#008080',
		'rschaosid': '#008080',
		'live_mentions': 'Black',
		'joinlivecounting': 'Black',
		'livecounting_sidebar': 'Black',
		'piyushsharma301': 'Red',
		'Tranquilsunrise': 'Orange',
		'dominodan123': 'Blue',
		'co3_carbonate': 'Grey',
		'artbn': '#e66b00',
		'amazingpikachu_38':'#e6e600',
		'qwertylool': "YellowGreen",
		'TOP_20': '#FFBDD8',
		'QuestoGuy': 'Purple',
		'Smartstocks': '#840d0d',
		'gordonpt8': '#00FF00',
		'Mooraell': '#DAA520',
		'randomusername123458': '#00CC99',
		'davidjl123': '#6495ED',
		'Iamspeedy36': '#00BFFF',
		'Phoenixness': '#ff0000',
		'jillis6': '#ffd700',
		'xHOCKEYx12': 'Lime',
		'_ntrpy': '#FF6600',
		'o99o99': '#2BBDFF'
	};

	// Possible colors for other users
	let colors:string[] = ['Blue', 'Coral', 'DodgerBlue', 'SpringGreen', 'YellowGreen', 'Green', 'OrangeRed', 'Red', 'GoldenRod', 'CadetBlue', 'SeaGreen', 'Chocolate', 'BlueViolet', 'Firebrick'];
	
	for(let i:number = colors.length - 1; i > 0; i--) {
		// use Durstenfeld shuffle algorithm on colors array
		let j:number = Math.floor(Math.random() * (i + 1));
		let temp:string = colors[i];
		colors[i] = colors[j];
		colors[j] = temp;
	}

	// index of next color to assign from colors array
	let currentColor:number = 0;

	// Options
	let enabled:boolean = true;
	Options.addCheckbox('COLORED USERNAMES', true, function() {
		enabled = $(this).prop('checked');
	});

	// EVENTS
	// New update loaded
	Update.loadedNew(function(data:Update.info) {
		if(!enabled) return;

		// Special usernames (temp rewards for top in 100k HoC, or other contributions)
		// creator privileges
		if(data.author == 'co3_carbonate') {
			data.author_elem.css('font-weight', 'bold');
		}

		// /u/TOP_20 username special
		if(data.author == 'TOP_20') {
			data.author_elem.html('\u2764 Whitney \u2764');
			data.author_elem.css('color', 'HotPink');
			return; // since we manually set the colour here, prevent script from resetting it
		}

		// Set username colour
	    if(!userColors.hasOwnProperty(data.author)) {
			userColors[data.author] = colors[currentColor];
			currentColor++;
			if(currentColor == colors.length) {
				currentColor = 0;   
			}
		}
		data.author_elem.css('color', userColors[data.author]);
	});

}
