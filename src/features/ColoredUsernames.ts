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
		'TOP_20': 'DeepPink',
		'QuestoGuy': 'Purple',
		'Smartstocks': 'MediumSeaGreen',
		'gordonpt8': '#00FF00'
	};

	// Possible colors for other users
	let colors:string[] = ['Blue', 'Coral', 'DodgerBlue', 'SpringGreen', 'YellowGreen', 'Green', 'OrangeRed', 'Red', 'GoldenRod', 'HotPink', 'CadetBlue', 'SeaGreen', 'Chocolate', 'BlueViolet', 'Firebrick'];
	
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
	Options.addCheckbox('COLORED USERNAMES', true)
		.on('change', function() {
			enabled = $(this).prop('checked');
		});

	// EVENTS
	// New update loaded
	Update.loadedNew(function(data:Update.info) {
		if(!enabled) return;

	    if(!userColors.hasOwnProperty(data.author)) {
			userColors[data.author] = colors[currentColor];
			currentColor++;
			if(currentColor == colors.length) {
				currentColor = 0;   
			}
		}
		data.elem.find('.body a.author').css('color', userColors[data.author]);
	});

}