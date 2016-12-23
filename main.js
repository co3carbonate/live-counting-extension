$(document).ready(function() {
	'use strict';

	///////////
	// SETUP //
	///////////

	// ELEMENTS
	var $lc = $('.liveupdate-listing');
	var $options = $('#liveupdate-options');
	var $content = $('div.content');
	
	if($('#new-update-form').length) {
		$('#new-update-form').after('<div style="clear:both;"></div>');
	} else {
		$options.after('<div style="clear:both;"></div>');
	}
	
	// OPTIONS (GENERAL)
	$options.append('<br/><br/>'+
		'<a href="https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme" target="_blank">'+
			'<h1>Live Counting Extension v1.1</h1>'+
		'</a>'
	);

	// COLORED USERNAMES
	$options.append(
		'<label>'+
			'<input type="checkbox" checked="true" id="checkbox-colored-usernames"/>'+
			'COLORED USERNAMES'+
		'</label>'
	);
	var useColoredUsernames = true; // enabled / disabled

	// possible colors for users not in userColors
	var colors = ['Blue', 'Coral', 'DodgerBlue', 'SpringGreen', 'YellowGreen', 'Green', 'OrangeRed', 'Red', 'GoldenRod', 'HotPink', 'CadetBlue', 'SeaGreen', 'Chocolate', 'BlueViolet', 'Firebrick'];
	for(var i = colors.length - 1; i > 0; i--) {
		// Durstenfeld shuffle algorithm on colors
    	var j = Math.floor(Math.random() * (i + 1));
    	var temp = colors[i];
    	colors[i] = colors[j];
    	colors[j] = temp;
    }
    var currentColor = 0; // index of color in colors array to assign

    // specified colors for known users
	var userColors = {
		'/u/SolidGoldMagikarp': '#008080',
		'/u/rschaosid': '#008080',
		'/u/live_mentions': 'Black',
		'/u/joinlivecounting': 'Black',
		'/u/piyushsharma301': 'Red',
		'/u/Tranquilsunrise': 'Orange',
		'/u/dominodan123': 'Blue',
		'/u/co3_carbonate': 'Grey',
		'/u/artbn': '#e66b00',
		'/u/amazingpikachu_38':'#e6e600',
		'/u/qwertylool': "YellowGreen",
		'/u/TOP_20': 'DeepPink',
		'/u/QuestoGuy': 'Purple'
	};

	// DELETE PAST MESSAGES
	var deletePastMessages = true; // enabled / disabled
	var maxMessages = 50; // constant
	$options.append(
		'<br/><br/>'+
		'<label>'+
			'<input type="checkbox" checked="true" id="checkbox-delete-past-messages"/>'+
			'DELETE PAST MESSAGES (REDUCES LAG)'+
		'</label>'
	);

	// CONTENT POSITION
	$options.append(
		'<br/><br/>'+
		'CONTENT POSITION: '+
		'<select id="select-content-position">'+
			'<option value="left">Left</option>'+
			'<option value="center" selected="true">Center</option>'+
			'<option value="right">Right</option>'+
		'</select>'
	);


	////////////
	// EVENTS //
	////////////
	
	// NEW MESSAGE DETECTED
	$lc.on("DOMNodeInserted", function(e) {
		var $node = $(e.target);

		// Must be a .liveupdate element
		if(!$node.hasClass('liveupdate')) {
			return;
		}

		// Check that the new message is at the top
		// (Not loaded from bottom)
		var index = $node.index();
		if(index != 0) {
			// Loaded from bottom,
			// disable deletePastMessages
			$('#checkbox-delete-past-messages').prop('checked', false).change();

			return;
		}
		
		// Colored Usernames
		if(useColoredUsernames) {
	        var author = $node.find('.body a.author').text();
	        if(!userColors.hasOwnProperty(author)) {
				userColors[author] = colors[currentColor];
				currentColor++;
				if(currentColor == colors.length) {
					currentColor = 0;   
				}
			}
			$node.find('.body a.author').css('color', userColors[author]);
		}

		// Delete Past Messages
		if(deletePastMessages) {
			var $messages = $lc.children('.liveupdate');
			if($messages.length > maxMessages) {
				$messages.slice(maxMessages).remove();
			}
		}

	});

	// OPTIONS INPUT CHANGED
	$options.on('change', 'input, select', function() {
		var $this = $(this);

		// Colored Usernames
		if($this.is('#checkbox-colored-usernames')) {
			useColoredUsernames = $this.prop('checked');
		}


		// Delete Past Messages
		if($this.is('#checkbox-delete-past-messages')) {
			deletePastMessages = $this.prop('checked');
		}

		// Content Position
		if($this.is('#select-content-position')) {
			var pos = $this.val();
			if(pos == 'right') $content.css('float', 'right');
			else {
				$content.css('float', 'none');
				if(pos == 'left') $content.css('margin','0');
				else if(pos == 'center') $content.css('margin', '0 auto');
			}
		}

	});




});