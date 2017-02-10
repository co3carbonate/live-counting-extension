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
		'amazingpikachu_38':'#F2F209',
		'qwertylool': "YellowGreen",
		'TOP_20': '#FF9A9A',
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
		'o99o99': '#2BBDFF',
		'afaintsmellofcurry': '#6799A0',
		'KingCaspianX': '#191970',
		'MewDP': '#FFFF33',
		'DaveTheDave_': '#00BFFF',
		'Luigi86101': '#006400',
		'thetiredlemur': '#464942',
		'TheGlobeIsRound': '#0080ff'
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
	Options.addCheckbox({
		label: 'COLORED USERNAMES',
		default: true,
		help: 'Makes the username in each message gain a unique color.\n\nCertain users who have specified their preferred username colors to /u/co3_carbonaate get that fixed color all the time. Otherwise, your color will be random and appear differently for everyone using the extension.',
		onchange: function() {
			enabled = this.prop('checked');
		}
	});

	// EVENTS
	// New update loaded
	Update.loadedNew(function(data:Update.info) {
		if(!enabled) return;

		// Special usernames (temp rewards for top in 100k HoC, or other contributions)
		// Bot-maker privileges
		if(data.author == 'co3_carbonate' || data.author == 'rschaosid') {
			data.author_elem.css('font-weight', 'bold');
		}

		// /u/amazingpikachu_38 username special (no username)
		if(data.author == 'amazingpikachu_38') {
			data.author_elem.css('display', 'none');
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
