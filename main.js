/**
 * LIVE COUNTING EXTENSION V1.2
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */
$(document).ready(function() {


/////////////////
// Elements.ts //
/////////////////
var Elements;
(function (Elements) {
    // PROPERTIES
    Elements.$body = $('body');
    Elements.$content = $('div.content');
    Elements.$updates = $('.liveupdate-listing');
    Elements.$options = $('#liveupdate-options');
    // INITIALIZATION
    Elements.$body.attr('id', 'lc-body');
    // Prevent the larger $options from displacing the sidebar
    // with different behaviour depending on whether or not textbox exists
    if ($('#new-update-form').length) {
        $('#new-update-form').after('<div style="clear:both;"></div>');
    }
    else {
        Elements.$options.after('<div style="clear:both;"></div>');
    }
})(Elements || (Elements = {}));
;
///////////////
// Styles.ts //
///////////////
var Styles;
(function (Styles) {
    // STYLESHEET
    var $css = $('<style></style>');
    // INITIALIZATION
    $('head').append($css);
    // METHODS
    // Add code to stylesheet
    function add(code) {
        $css.append(code);
    }
    Styles.add = add;
})(Styles || (Styles = {}));
////////////////
// Options.ts //
////////////////
var Options;
(function (Options) {
    // INITIALIZATION
    // Add header to $options first
    Elements.$options.append("\n\t\t<a href=\"https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme\" target=\"_blank\">\n\t\t\t<h1>Live Counting Extension v1.2</h1>\n\t\t</a>\n\t");
    // Styles
    Styles.add("\n\n\t#lc-body label {\n\t\tdisplay: block;\n\t\tmargin-bottom: 10px;\n\t}\n\t\n\t");
    // METHODS
    // Add a checkbox option
    // Returns the newly created checkbox
    function addCheckbox(label, checked) {
        if (checked === void 0) { checked = false; }
        var $elem = $("<input type=\"checkbox\" checked=\"" + checked + "\"/>");
        Elements.$options.append($("<label>" + label + "</label>").prepend($elem));
        return $elem;
    }
    Options.addCheckbox = addCheckbox;
    // Add select option
    // Returns the newly created select
    function addSelect(label, options, selectedIndex) {
        if (selectedIndex === void 0) { selectedIndex = 0; }
        var $elem = $("<select></select>");
        var elem_contents = '';
        for (var i = 0; i < options.length; i++) {
            elem_contents +=
                "<option value=\"" + options[i] + "\"" + ((i == selectedIndex) ? ' selected="true"' : '') + ">" + options[i] + "</option>";
        }
        $elem.html(elem_contents);
        Elements.$options.append($("<label>" + label + ": </label>").append($elem));
        return $elem;
    }
    Options.addSelect = addSelect;
})(Options || (Options = {}));
;
///////////////
// Update.ts //
///////////////
var Update;
(function (Update) {
    // METHODS
    // Bind function to execute when a new update is made
    // loaded from top (new updates sent)
    var funcLoadedTop = [];
    function loadedNew(func) {
        funcLoadedTop.push(func);
    }
    Update.loadedNew = loadedNew;
    // loaded from bottom (scrolled down to load old updates)
    var funcLoadedBottom = [];
    function loadedOld(func) {
        funcLoadedBottom.push(func);
    }
    Update.loadedOld = loadedOld;
    // EVENTS
    // Mutation observer on list of updates
    Elements.$updates.on("DOMNodeInserted", function (e) {
        var $node = $(e.target);
        // Must be a .liveupdate element
        if (!$node.hasClass('liveupdate')) {
            return;
        }
        // Get data about the new update
        // Note: For now we only need information about the author
        var data = {
            elem: $node,
            author: $node.find('.body > .author').text()
        };
        if (data.author)
            data.author = data.author.trim().replace('/u/', '');
        // Check if the new message from the top or bottom
        var index = $node.index();
        if (index == 0) {
            // Loaded from top
            for (var _i = 0, funcLoadedTop_1 = funcLoadedTop; _i < funcLoadedTop_1.length; _i++) {
                var func = funcLoadedTop_1[_i];
                func(data);
            }
        }
        else {
            // Loaded from bottom
            for (var _a = 0, funcLoadedBottom_1 = funcLoadedBottom; _a < funcLoadedBottom_1.length; _a++) {
                var func = funcLoadedBottom_1[_a];
                func(data);
            }
        }
    });
})(Update || (Update = {}));
/////////////////////////
// ColoredUsernames.ts //
/////////////////////////
var ColoredUsernames;
(function (ColoredUsernames) {
    // INITIALIZATION
    // Specified colors for known users
    var userColors = {
        'SolidGoldMagikarp': '#008080',
        'rschaosid': '#008080',
        'live_mentions': 'Black',
        'joinlivecounting': 'Black',
        'piyushsharma301': 'Red',
        'Tranquilsunrise': 'Orange',
        'dominodan123': 'Blue',
        'co3_carbonate': 'Grey',
        'artbn': '#e66b00',
        'amazingpikachu_38': '#e6e600',
        'qwertylool': "YellowGreen",
        'TOP_20': 'DeepPink',
        'QuestoGuy': 'Purple',
        'Smartstocks': 'Cyan'
    };
    // Possible colors for other users
    var colors = ['Blue', 'Coral', 'DodgerBlue', 'SpringGreen', 'YellowGreen', 'Green', 'OrangeRed', 'Red', 'GoldenRod', 'HotPink', 'CadetBlue', 'SeaGreen', 'Chocolate', 'BlueViolet', 'Firebrick'];
    for (var i = colors.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
    }
    // index of next color to assign from colors array
    var currentColor = 0;
    // Options
    var enabled = true;
    Options.addCheckbox('COLORED USERNAMES', true)
        .on('change', function () {
        enabled = $(this).prop('checked');
    });
    // EVENTS
    // New update loaded
    Update.loadedNew(function (data) {
        if (!enabled)
            return;
        if (!userColors.hasOwnProperty(data.author)) {
            userColors[data.author] = colors[currentColor];
            currentColor++;
            if (currentColor == colors.length) {
                currentColor = 0;
            }
        }
        data.elem.find('.body a.author').css('color', userColors[data.author]);
    });
})(ColoredUsernames || (ColoredUsernames = {}));
///////////////////////////
// DeletePastMessages.ts //
///////////////////////////
var DeletePastMessages;
(function (DeletePastMessages) {
    // INITIALIZATION
    var maxMessages = 50;
    // Options
    var enabled = true;
    var $checkbox = Options.addCheckbox('DELETE PAST MESSAGES (REDUCES LAG)', true)
        .on('change', function () {
        enabled = $(this).prop('checked');
    });
    // EVENTS
    // New update loaded
    Update.loadedNew(function (data) {
        if (!enabled)
            return;
        var $screenMessages = Elements.$updates.children('.liveupdate');
        if ($screenMessages.length > maxMessages) {
            $screenMessages.slice(maxMessages).remove();
        }
    });
    // Old update loaded (scrolled to bottom)
    Update.loadedOld(function (data) {
        // disable
        if (!enabled)
            return;
        $checkbox.prop('checked', false).trigger('change');
    });
})(DeletePastMessages || (DeletePastMessages = {}));
////////////////////////
// ContentPosition.ts //
////////////////////////
var ContentPosition;
(function (ContentPosition) {
    // INITIALIZATION
    Elements.$body.attr('data-ContentPosition', 'Center');
    // Options
    Options.addSelect('CONTENT POSITION', ['Left', 'Center', 'Right'], 1)
        .on('change', function () {
        Elements.$body.attr('data-ContentPosition', $(this).val());
    });
    // Styles
    Styles.add("\n\n\t#lc-body[data-ContentPosition='Left'] div.content {\n\t\tmargin: 0;\n\t}\n\t#lc-body[data-ContentPosition='Center'] div.content {\n\t\tmargin: 0 auto;\n\t}\n\t#lc-body[data-ContentPosition='Right'] div.content {\n\t\tfloat: right;\n\t}\n\n\t");
})(ContentPosition || (ContentPosition = {}));
////////////////////
// DisplayMode.ts //
////////////////////
var DisplayMode;
(function (DisplayMode) {
    // INITIALIZATION
    Elements.$body.attr('data-DisplayMode', 'Normal');
    // "Return to Normal Display" button
    var $returnBtn = $('<input type="button" value="&lt; Return to Normal Display"/>');
    $returnBtn.on('click', function () {
        $select.children('option[value="Normal"]').prop('selected', true).trigger('change');
    });
    $returnBtn
        .css('margin-bottom', '20px')
        .css('display', 'none');
    Elements.$content.prepend($returnBtn);
    // Options
    var $select = Options.addSelect('DISPLAY MODE', ['Normal', 'Minimal'])
        .on('change', function () {
        var pos = $(this).val();
        $returnBtn.css('display', (pos == 'Normal' ? 'none' : 'block'));
        Elements.$body.attr('data-DisplayMode', pos);
    });
    // Styles
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Minimal'] #header,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form .bottom-area,\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] div.content {\n\t\twidth: " + $('#new-update-form textarea').outerWidth() + "px;\n\t}\n\n\t");
})(DisplayMode || (DisplayMode = {}));



});