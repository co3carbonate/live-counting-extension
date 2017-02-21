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
		// Bot-maker privileges
		if(data.author == 'co3_carbonate' || data.author == 'rschaosid') {
			data.author_elem.css('font-weight', 'bold');
		}

		// /u/dominodan123 username special (upside down and bold)
		//if(data.author == 'dominodan123') {
		if(data.author == 'co3_carbonate') {
			data.author_elem.css({
				'font-weight': 'bold',
				'-moz-transform': 'rotate(-180deg)',
				 '-o-transform': 'rotate(-180deg)',
				 '-webkit-transform': 'rotate(-180deg)',
				 'transform': 'rotate(-180deg)',
				 'display': 'inline-block',
				 'vertical-align': 'middle'
			});
			data.author_elem.html(`<span style='color:blue;'>/u/</span><span style='color:#4852c4;'>d</span><span style='color:#3f4acc;'>o</span><span style='color:#3d49d3;'>m</span><span style='color:#3a47d8;'>i</span><span style='color:#2e3cdd;'>n</span><span style='color:#2131e0;'>o</span><span style='color:#1d2de0;'>d</span><span style='color:#1828dd;'>a</span><span style='color:#0717c4;'>n</span><span style='color:#0512aa;'>1</span><span style='color:#010d93;'>2</span><span style='color:#000a7c;'>3</span>`);
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
