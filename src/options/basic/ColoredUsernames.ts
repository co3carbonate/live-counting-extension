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
		'TheGlobeIsRound': '#0080ff',
		'CarbonSpectre': '#339933'
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
		// Bot-maker privileges (/u/co3_carbonate, /u/rschaosid, /u/piyushsharma301)
		if(data.author == 'co3_carbonate' || data.author == 'rschaosid' || data.author == 'piyushsharma301') {
			data.author_elem.css('font-weight', 'bold');
		}

		// /u/davidjl123 username special (letter spacing + bold + underline + italic + rainbow + rocket emojis)
		if(data.author == 'davidjl123') {
			data.author_elem.css({
				'letter-spacing': '4px', 
				'font-weight': 'bold',
				'text-decoration': 'underline',
				'font-style': 'italic'
			});
			data.author_elem.html('🚀<span style="color:#FF0000">d</span><span style="color:#E2571E">a</span><span style="color:#FF7F00">v</span><span style="color:#E6D300">i</span><span style="color:#FFFF00">d</span><span style="color:#00FF00">j</span><span style="color:#96bf33">l</span><span style="color:#0000FF">1</span><span style="color:#4B0082">2</span><span style="color:#8B00FF">3</span>🚀');
			return;
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
