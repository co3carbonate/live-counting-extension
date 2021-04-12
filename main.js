/**
/**
* LIVE COUNTING EXTENSION V1.7.0
* (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
*/
// CONSTANTS

// Extension version
var VERSION = 'v1.7.0';

var USER = $('#header .user a[href]').html();

// Named Thread

var BACKWARDS = "te287u41qlnw";
var BASE2 = "te1l2lmdxgkq";
var BASE3 = "y29ytkycjdth";
var BASE4 = "xnl0cyj2rdj0";

//100k name information
var specialnumber = 2;
var kname1 = 'TOP_20';
var kname2 = 'ItzTaken';
var kname3 = '';
var kname4 = '';
var kname5 = '';
var kname6 = '';
var SpecialUsernamesEnabled;

// Emote stuff
const imageEmotes = ['pog', 'god', 'monkas', 'omegalul', 'stonks', 'notstonks', 'thonk', 'jesus', 'isagod', 'pensiveloaf', 'cuteballgames', 'habubger', 'angery', 'dad', 'sadge', 'feelslagman', 'catjam', 'peped', 'fortnitecard', 'squidab', 'dab', 'lool', 'karp', 'pants', 'oooh', 'twitter', 'harold', 'david', 'taking', 'baller', 'asa', 'chu', 'respite', 'sink', 'gold', 'trollface', 'kshart', 'widepeepohappy', 'widepeeposad', '5head', 'pepog', 'poggies', 'maybelegend', 'chupixel', 'vulpez', 'sspixel', 'wtfdb', 'notlike', 'talk2hand', 'rivergod', 'whitpixel', 'hmm', 'mario_luigi_dance', 'typefaster', 'lona_dont', 'mersenne', 'daemote', 'happiness', 'facepalm', 'rick', 'byepika', 'itsok', 'thisisfine', 'uhdunno', 'toocool', 'letsgo', 'woohoo', 'bonk', 'eyeroll', 'anicake', 'watching', 'wtfdidyousay', 'letmeout', 'wtfbeek', 'yikes', 'wheredanat', 'ffff', 'gotosleep', 'shake', 'brohug', 'fthis', 'earth', 'chudance', 'spideydance', 'cube', 'gildthis', 'boom', 'oof', 'emergency', 'weeee', 'boom2', 'snipe', 'd20', 'porg', 'slime', 'jebaited','pepemeltdown'];


// Ignore function vars
var ignored = [];
ignored.push(localStorage['ignoredppl']);

//Daily HoC vars
var dailysize = 0;
var dailysizereal = '90px';
var dailysize2 = -1;
var dailysizereal2 = '90px';
var colortransfers = '';
var dailyHocColorNamesEnable2 = true;

//Timestamp vars
var timestampEnable = true;
var darkcheck = 0;
var customClearTime;
var customStrickenColor;
var customBackgroundColor;
var timeCheck = 0;
setTimeout(function(){
    timeCheck = 1;
}, 1000);

// Slow counting special feature
if(window.location.href.indexOf("yrnkgszr6zdu") > -1) { $("#liveupdate-description").append("<p style='background:#e2ffdb;font-size:16px;' id=countdownslow></p>"); document.title = "[live] Slow counting (one count per hour)"; $( ".save-button button.btn" ).click(function() { var countDownDateA = new Date(); countDownDateA.setHours( countDownDateA.getHours() + 1 ); $("#countdownslow").css('background','#e2ffdb'); var tugOfWarWrongDirectionA = setInterval(function() { var nowTugA = new Date().getTime(); var distanceTugA = countDownDateA - nowTugA; var minutesTugA = Math.floor((distanceTugA % (1000 * 60 * 60)) / (1000 * 60)); var secondsTugA = Math.floor((distanceTugA % (1000 * 60)) / 1000); document.getElementById("countdownslow").innerHTML = minutesTugA + "m " + secondsTugA + "s"; document.title = "["+minutesTugA+"m] Slow counting (one count per hour)"; if (distanceTugA < 0) { clearInterval(tugOfWarWrongDirectionA); document.getElementById("countdownslow").innerHTML = "You can post now!"; $("#countdownslow").css('background','#ffaeae'); document.title = "[!!] Slow counting (one count per hour)"; } }, 1000); }); }

//Last count vars (Temporary before I remake it)
var current_number = '';
var last_number = '';
var expected_number = '';
var end_of_cur_num = '';
var validtimestamp = '';
var vc_times = null;
var vc_splits = null;
var update_body = '';
var author_current = '';
var author_last = '';
var authorme = $('#header .user a[href]').html();
var validcountwrong = 0;
var validcountnotme = 0;
var all_times = {};
// Last count functions
// Get the Splits for the current thread
function get_splits(){
    let splits;
    switch(THREAD){
        case BACKWARDS:
            splits = ['900','800','700','600','500','400','300','200','100','000'];
            break;
        case BASE2:
            splits = ['0010000000','0100000000','0110000000','1000000000','1010000000','1100000000','1110000000','0000000000']
            break;
        case BASE3:
            splits = ['010000','020000','100000','110000','120000','200000','210000','220000','000000']
            break;
        case BASE4:
            splits = ['02000','10000','12000','20000','22000','30000','32000','00000']
            break;
        default:
            splits = ['100','200','300','400','500','600','700','800','900','000'];
            break;
    }
    return splits;
}
// How many digits are in the split (ex. split X000 requires 3, split X0000 requires 4)
function get_split_digits(){
    let digits;
    switch(THREAD){
        case BASE2:
            digits = 10;
            break;
        case BASE3:
            digits = 6;
            break;
        case BASE4:
            digits = 5;
            break;
        default:
            digits = 3;
            break;
    }
    return digits;
}

// Global Functions
// from https://pastebin.com/KD6gFhAK thanks MNW {:}

function showNotification(number) {
   const notification = new Notification("New K Alert!", {
      body: "New K: " + number
   });
}

function parse_body(text){
    let number = null;
    let separator = null;
    if(text === "")return number;
    var body = tokenize(text);
    var tokens = body['tokens']; // body['comment'] would have the text
    var comment = body['comment']; // body['comment'] would have the text
    if(tokens.length > 0 && !(tokens[0]['is_digit_group'])){
        tokens = tokens.slice(1);
    }
    if(tokens.length > 0 && !(tokens[tokens.length-1]['is_digit_group'])){
        tokens = tokens.slice(0,tokens.length-1);
    }
    for(let i = 1; i < tokens.length; i+=2){
        if(separator == null){
            separator = tokens[i]['token'];
        }
    }
    if(tokens.length > 0 && [null, '.', ',', ', ', ' '].includes(separator)){
        var num = '';
        var original_number = '';
        for(let i=0; i < tokens.length; i+=2){
            num += tokens[i]['token']
        }
        for(let i=0; i < tokens.length; i+=1){
            original_number += tokens[i]['token']
        }
        number = num
    }
    return [number,comment,original_number];
}
function tokenize(text){
    text = text.trim();
    if(text[0] == 'v'){
        text = text.slice(1);
    }
    var tokens = [];
    var token = '';
    var is_digit_group = false;
    var index = 0
    while(1){
        if(index >= text.length || /[a-zA-Z]/.test(text[index]) || text[index] === "\n" || /[0-9]/.test(text[index]) != is_digit_group){
            if(token.length > 0){
                tokens.push({'is_digit_group':is_digit_group,'token':token});
                token = '';
            }
            is_digit_group = !is_digit_group;
        }
        if(index >= text.length){
            return {'tokens':tokens,'comment':null};
        }
        else if (/[a-zA-Z]/.test(text[index]) || text[index] === "\n" || (!is_digit_group && token.length > 2)){
            return {'tokens':tokens,'comment': text.slice(index)};
        }
        token += text[index];
        index++;
    }
}

// Add context button
if(window.location.href.indexOf("updates") > -1) {
    var contex = window.location.href;
    contex = contex.replace('updates\/', '?after=LiveUpdate_');
    $('.liveupdate-listing').prepend("<a id=contexter>context</a>");
    $("#contexter").attr("href", contex).css("text-align","center").css("margin-bottom","15px").css("color","#369").css("background","#eee").css("display","block");
    //return;
    throw new Error();
}


// Thread ID
var THREAD = (function () {
    var components = window.location.pathname.split('/');
    for (var i = components.length - 1; i >= 0; i--) {
        var component = components[i].trim();
        if (component.length > 0)
            return component.replace(/^.*\/([^/]*)/, "$1");
    }
})();
////////////////
// Cookies.ts //
////////////////
// Adapted TypeScript version of the js-cookie library (https://github.com/js-cookie/js-cookie)
var Cookies = (function () {
    function extend() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var i = 0;
        var result = {};
        for (; i < args.length; i++) {
            var attributes = args[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }
    function init(converter) {
        var api = function (key, value, attributes) {
            var result;
            if (typeof document === 'undefined') {
                return;
            }
            // Write
            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);
                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }
                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                }
                catch (e) { }
                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                }
                else {
                    value = converter.write(value, key);
                }
                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, encodeURI);
                return (document.cookie = [
                    key, '=', value,
                    attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '',
                    attributes.path ? '; path=' + attributes.path : '',
                    attributes.domain ? '; domain=' + attributes.domain : '',
                    attributes.secure ? '; secure' : ''
                ].join(''));
            }
            // Read
            if (!key) {
                result = {};
            }
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;
            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');
                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }
                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                        cookie.replace(rdecode, decodeURIComponent);
                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        }
                        catch (e) { }
                    }
                    if (key === name) {
                        result = cookie;
                        break;
                    }
                    if (!key) {
                        result[name] = cookie;
                    }
                }
                catch (e) { }
            }
            return result;
        };
        api.set = api;
        api.get = function (key) {
            return api.call(api, key);
        };
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};
        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };
        api.withConverter = init;
        return api;
    }
    return init(function () { });
})();

///////////////
// Cookie.ts //
///////////////
// Uses the js-cookie library (lib/cookies.ts) for specialised cookie operations and intialization
var Cookie;
(function (Cookie) {
    // INITIALIZATION
    var cookieName = "LCE_Cookie";
    var cookieVersion = '10';
    // Try to load existing cookie save data, or create a cookie with default data
    Cookie.saveDefaultOptions = true;
    var save_default = {
        version: cookieVersion,
        options: {},
        stats: {},
        collapsed: [false, false, false, true, true],
        customClearTime: 2000,
        customStrickenColor: '#ddd',
        customBackgroundColor: '#ddd'
    };
    Cookie.save = Cookies.getJSON(cookieName);
    // In versions prior to 1.5.3, the extension used the cookie 'live-counting-extension'
    // instead of 'LCE_{THREAD}'.
    // To provide support for clients who had last used the extension at that point in time,
    // we shall copy the contents of the cookie 'live-counting-extension' to 'LCE_{THREAD}'.
    var oldCookie = Cookies.get('live-counting-extension');
    if (oldCookie !== undefined && oldCookie !== null) {
        if (Cookie.save === undefined || Cookie.save === null) {
            Cookies.set(cookieName, oldCookie, { expires: 9000, path: '/live' });
            Cookie.save = Cookies.getJSON(cookieName);
        }
        Cookies.remove('live-counting-extension', { path: '/live' });
    }
    // Create new cookie as it does not exist
    if (Cookie.save === undefined || Cookie.save === null) {
        Cookie.saveDefaultOptions = true;
        Cookie.save = save_default;
        update();
    }
    else if (Cookie.save.version != cookieVersion) {
        Cookie.saveDefaultOptions = true;
        Cookie.save.version = cookieVersion;
        // If the current save is missing a few keys, add these keys, set to the default
        for (var k in save_default) {
            if (!Cookie.save.hasOwnProperty(k))
                Cookie.save[k] = save_default[k];
        }
        update();
    }
    // METHODS
    // Set the cookie value to `save`
    function update() {
        Cookies.set(cookieName, Cookie.save, { expires: 9000, path: '/live' });
    }
    Cookie.update = update;
})(Cookie || (Cookie = {}));




/////////////////
// Elements.ts //
/////////////////
var Elements;
(function (Elements) {
    // PROPERTIES
    // Important elements
    Elements.$head = $('head');
    Elements.$body = $('body');
    Elements.$content = $('div.content');
    Elements.$updates = $('.liveupdate-listing');
    Elements.$options = $('#liveupdate-options');
    Elements.$sidebar = $('aside.sidebar');
    Elements.$form = $('#new-update-form');
    Elements.$textarea = Elements.$form.find('textarea');
    Elements.$submitBtn = Elements.$form.find('.save-button button');
    Elements.$submitError = Elements.$form.find('.save-button .error');
    // INITIALIZATION
    Elements.$body.attr('id', 'lc-body');
    // Prevent the larger $options from displacing the sidebar
    // with different behaviour depending on whether or not textbox exists
    if (Elements.$form.length) {
        Elements.$form.after('<div style="clear:both;"></div>');
    }
    else {
        Elements.$options.after('<div style="clear:both;"></div>');
    }
    // Make the submitError display default to none (important in RemoveSubmissionLag)
    Elements.$submitError.css('display', 'none');
})(Elements || (Elements = {}));
;
///////////////
// Styles.ts //
///////////////
var Styles;
(function (Styles) {
    // STYLESHEET
    var $css = $("<style>\n\n\t/* General styles */\n\t#lc-body, #lc-body .liveupdate-listing {\n\t\tmin-width: 0px;\n\t}\n\n\t/* Prevent the button row from always showing up when screen is small */\n\t#lc-body li.liveupdate ul.buttonrow {\n\t\tdisplay: none !important;\n\t}\n\n\t#lc-body li.liveupdate:hover ul.buttonrow {\n\t\tdisplay: block !important;\n\t}\n\n\t/* Disable the transition entrance fade effect when an update is sent */\n\t#lc-body li.liveupdate * {\n\t\ttransition: none;\n\t}\n\n\t</style>");
    // INITIALIZATION
    $('head').append($css);
    // METHODS
    // Add code to stylesheet
    function add(code) {
        $css.append(code);
    }
    function replace(initial, newcode) {
        var fix = $css.html().replace(initial, newcode);
        $css.html(fix);
    }
    Styles.add = add;
    Styles.replace = replace;
})(Styles || (Styles = {}));
////////////////
// Options.ts //
////////////////
var Options;
(function (Options) {
    // INITIALIZATION
    // Initialize new content in the options box
    // TODO: move the $all to another core file since it will be used for stats as well
    var $all_heading = $("\n\t\t<h1 style=\"font-size:16px;\">\n\t\t\t<a id=\"lceversion\" href=\"https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme\" target=\"_blank\">Live Counting Extension " + VERSION + "</a> \n\t\t</h1>\n\t");
    //    var $options_heading = $("<h2>Options </h2>");
    var $options_basic_heading = $("<h2>Basic </h2>");
    var $options_advanced_heading = $("<h2>Advanced </h2>");
    var $options_advanced2_heading = $("<h2>Advanced 2 </h2>");
    var $all_toggle = $("<span class=\"toggle-trigger\" style=\"font-size:15px;\">[-]</span>");
    var $options_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $options_basic_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $options_advanced_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $options_advanced2_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $all = $("<div id='live-counting-extension'></div>");
    var $options = $("<div></div>");
    var $options_basic = $("<div></div>");
    var $options_advanced = $("<div></div>");
    var $options_advanced2 = $("<div></div>");
    $all_heading.append($all_toggle);
    $all.append($options);
    //    $options_heading.append($options_toggle);
    $options_basic_heading.append($options_basic_toggle);
    $options_advanced_heading.append($options_advanced_toggle);
    $options_advanced2_heading.append($options_advanced2_toggle);
    $options.append($options_basic_heading, $options_basic, $options_advanced_heading, $options_advanced, $options_advanced2_heading, $options_advanced2);
    Elements.$options.append($all_heading, $all);
    var all_innerWidth = $all.innerWidth();
    var all_offsetLeft = $all.offset().left;
    // Handling toggle buttons ([-] and [+])
    function toggle($trigger, $change, index) {
        // bind click event listeners to the trigger
        $trigger.on('click', function () {
            if ($change.css('display') == 'none') {
                // show
                $trigger.html('[-]');
                $change.slideDown(500);
                Cookie.save.collapsed[index] = false;
            }
            else {
                // hide
                $trigger.html('[+]');
                $change.slideUp(500);
                Cookie.save.collapsed[index] = true;
            }
            Cookie.update();
        });
        // immediately trigger the click event if current cookie save is true
        if (Cookie.save.collapsed[index])
            $trigger.trigger('click');
    }
    // call
    toggle($all_toggle, $all, 0);
    toggle($options_toggle, $options, 1);
    toggle($options_basic_toggle, $options_basic, 2);
    toggle($options_advanced_toggle, $options_advanced, 3);
    toggle($options_advanced2_toggle, $options_advanced2, 4);
    // Styles
    Styles.add("\n\n\t/* Subheadings */\n\t#live-counting-extension h2 {\n\t\tcolor: #4F4F4F;\n\t\tfont-size: 14px;\n\t\tfont-weight: bold;\n\t\tmargin: 8px 0px;\n\t}\n\n\t/* Toggle triggers */\n\t/* Don't specify #live-counting-extension for this, because the first trigger is actually outside the #live-counting-extension element */\n\t\n\t.toggle-trigger {\n\t\tcursor: pointer;\n\t\tcolor: #656565;\n\t\tfont-weight: normal;\n\t}\n\n\n\t/* Labels */\n\t#live-counting-extension label {\n\t\tdisplay: block;\n\t\tmargin-bottom: 10px;\n\t\tline-height: 160%;\n\t}\n\t\n\t");
    // METHODS
    // Add a checkbox option
    // Returns the newly created checkbox
    function addCheckbox(properties) {
        // Handling properties
        if (!properties.hasOwnProperty('section'))
            properties.section = 'Basic';
        if (!properties.hasOwnProperty('onchange'))
            properties.onchange = null;
        if (!properties.hasOwnProperty('default'))
            properties["default"] = false;
        if (!properties.hasOwnProperty('help'))
            properties.help = '';
        var label = properties["label"], section = properties["section"], onchange = properties["onchange"], defaultChecked = properties["default"], help = properties["help"];
        // Default value handling (cookie)
        var checked = defaultChecked;
        if (Cookie.saveDefaultOptions && !Cookie.save.options.hasOwnProperty(label)) {
            Cookie.save.options[label] = checked;
            Cookie.update();
        }
        else
            checked = Cookie.save.options[label];
        // Create label and checkbox
        var $elem = $("<input type=\"checkbox\"" + (checked ? ' checked="true"' : '') + "/>");
        // Add option
        var $options_section = $options_basic;
        if (section == 'Basic')
            $options_section = $options_basic;
        else if (section == 'Advanced')
            $options_section = $options_advanced;
        else if (section == 'Advanced 2')
            $options_section = $options_advanced2;
        $options_section.append($("<label>" + label + "</label>")
                                .attr('title', help)
                                .prepend($elem));
        // Handle onchange
        $elem.on('change', function () {
            Cookie.save.options[label] = $elem.prop('checked');
            Cookie.update();
            if (onchange != null)
                onchange.call($elem);
        });
        // Trigger change event if the value != default
        if (defaultChecked != checked)
            $elem.trigger('change');
        return $elem;
    }
    Options.addCheckbox = addCheckbox;
    // Add select option
    // Returns the newly created select
    function addSelect(properties) {
        // Handling properties
        if (!properties.hasOwnProperty('section'))
            properties.section = 'Basic';
        if (!properties.hasOwnProperty('onchange'))
            properties.onchange = null;
        if (!properties.hasOwnProperty('default'))
            properties["default"] = 0;
        if (!properties.hasOwnProperty('help'))
            properties.help = '';
        var label = properties["label"], options = properties["options"], section = properties["section"], onchange = properties["onchange"], selectedIndex = properties["default"], help = properties["help"];
        // Default value handling (cookie)
        var defaultVal = options[selectedIndex];
        var selectedVal = defaultVal;
        if (Cookie.saveDefaultOptions && !Cookie.save.options.hasOwnProperty(label)) {
            Cookie.save.options[label] = selectedVal;
            Cookie.update();
        }
        else
            selectedVal = Cookie.save.options[label];
        // Create label and select
        var $options_section;
        var $elem = $("<select></select>");
        if (section == 'Basic')
            $options_section = $options_basic;
        else if (section == 'Advanced')
            $options_section = $options_advanced;
        else if (section == 'Advanced 2')
            $options_section = $options_advanced2;
        $options_section.append($("<label>" + label + ": </label>")
                                .attr('title', help)
                                .append($elem));
        // Configure the max-width of the select to ensure that it doesn't end up getting wrapped
        // onto the next line
        $elem.css('max-width', all_innerWidth - ($elem.offset().left - all_offsetLeft) + 'px');
        // Set options of select
        var elem_contents = '';
        for (var i = 0; i < options.length; i++) {
            elem_contents +=
                "<option value=\"" + options[i] + "\"" + ((options[i] == selectedVal) ? ' selected="true"' : '') + ">" + options[i] + "</option>";
        }
        $elem.html(elem_contents);
        // Handle onchange
        $elem.on('change', function () {
            Cookie.save.options[label] = $elem.val();
            Cookie.update();
            if (onchange != null)
                onchange.call($elem);
        });
        // Trigger change event if the value != default
        if (defaultVal != selectedVal)
            $elem.trigger('change');
        return $elem;
    }
    Options.addSelect = addSelect;
    // WINDOW SIZE
    // If sidebar turns into '[+] more about this live thread',
    // (or window width < 700px according to CSS),
    // move options to inside .sidebar
    // New section in the sidebar for options
    var $section = $("<section>\n\t\t<h2>options</h2>\n\t\t<div class='md'></div>\n\t</section>");
    var $section_md = $section.children('.md');
    $section.css('display', 'none').css('margin-top', '20px');
    Elements.$sidebar.children('.sidebar-expand').after($section);
    // Window resized
    $(window).on('load resize', function () {
        if (window.innerWidth <= 700) {
            // add the options to '[+] more about this live thread'
            if ($section.css('display') == 'none') {
                $section.css('display', '');
                $all.detach().appendTo($section_md);
            }
        }
        else {
            // remove the options from '[+] more about this live thread'
            if ($section.css('display') != 'none') {
                $section.css('display', 'none');
                $all.detach().insertAfter($all_heading);
            }
        }
    });
})(Options || (Options = {}));


/////////////////////////
// dailyHocColorNames.ts //
/////////////////////////
var dailyHocColorNamesEnable;
(function (dailyHocColorNamesEnable) {
    // INITIALIZATION
    // Options
    var enabledcoloryo = true;
    Options.addCheckbox({
        label: 'ENABLE DAILY HOC COLORED NAMES',
        "default": true,
        section: 'Advanced 2',
        help: 'Enables the daily HoC colored usernames.',
        onchange: function () {
            enabledcoloryo = this.prop('checked');
            dailyHocColorNamesEnable2 = enabledcoloryo;
        }
    });

})(dailyHocColorNamesEnable || (dailyHocColorNamesEnable = {}));

///////////////
// Update.ts //
///////////////
var Update;
(function (Update) {
    // UTILITY
    // Get information about an update node
    function getUpdateInfo($node) {
        var data = {
            elem: $node,
            author: $node.find('.body > .author').text(),
            body_elem: $node.find('.body > .md'),
            author_elem: $node.find('.body > .author'),
            href_elem: $node.find('.body > .md > p > em > a')
        };
        if (data.author)
            data.author = data.author.trim().replace('/u/', '');
        return data;
    }
    // METHODS
    // Bind functions to execute in the following events:
    // - loadedNew(): When a new update is sent
    // - loadedOld(): When an old update is loaded
    // - striked(): When an update is striked
    // - TODO: deleted(): When an update is deleted
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
    // striked
    var funcStriked = [];
    function striked(func) {
        funcStriked.push(func);
    }
    Update.striked = striked;
    // EVENTS
    // Setup MutationObserver on Elements.$updates
    var observer = new MutationObserver(function (mutations) {
        // Loop through MutationRecords and call the functions in various arrays based on .type
        // (Honestly the MutationRecord[] usually only contains one, but whatever)
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
            var mutation = mutations_1[_i];
            // Addition / removal of child elements
            // Executes loadedNew(), loadedOld(), deleted() functions accordingly
            if (mutation.type == 'childList') {
                // Setup variables for new updates or deleted updates
                var $addedNodes = $(mutation.addedNodes).filter('.liveupdate');
                var $removedNodes = $(mutation.removedNodes).filter('.liveupdate');
                // Loop through new updates (if any)
                $addedNodes.each(function (index, element) {
                    var $node = $(element);
                    if ($node.hasClass('preview'))
                        return; // ignore preview messages (RemoveSubmissionLag.ts)
                    // Get data about the new update
                    var data = getUpdateInfo($node);
                    // Check if the update was loaded from top or bottom
                    // Execute loadedNew() or loadedOld() functions accordingly
                    if ($node.index() == 0) {
                        // Loaded from top
                        // Execute loadedNew() functions
                        for (var _i = 0, funcLoadedTop_1 = funcLoadedTop; _i < funcLoadedTop_1.length; _i++) {
                            var func = funcLoadedTop_1[_i];
                            func(data);
                        }
                    }
                    else {
                        // Loaded from bottom
                        // Execute loadedOld() functions
                        for (var _a = 0, funcLoadedBottom_1 = funcLoadedBottom; _a < funcLoadedBottom_1.length; _a++) {
                            var func = funcLoadedBottom_1[_a];
                            func(data);
                        }
                    }
                });
            }
            else if (mutation.type == 'attributes') {
                // Setup
                var $node = $(mutation.target);
                if (!(mutation.oldValue && $node.attr('class')))
                    return;
                var oldClasses = mutation.oldValue.split(' ');
                var newClasses = $node.attr('class').split(' ');
                // Must be a .liveupdate element
                if (!$node.hasClass('liveupdate'))
                    return;
                // Get data about the update
                var data = getUpdateInfo($node);
                // Check if the update had only now been stricken
                if (oldClasses.indexOf('stricken') == -1
                    && newClasses.indexOf('stricken') > -1) {
                    // Execute striked() functions
                    for (var _a = 0, funcStriked_1 = funcStriked; _a < funcStriked_1.length; _a++) {
                        var func = funcStriked_1[_a];
                        func(data);
                    }
                }
            }
        }
    });
    observer.observe(Elements.$updates.get(0), {
        // observe for insertion / removal of children updates
        childList: true,
        // observe for change in the 'class' attribute value
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class'],
        // observe for these changes (particularly attributes changes) in descendants
        subtree: true
    });
})(Update || (Update = {}));

///////////////////
// ReplyTimes.ts //
///////////////////
var ReplyTimes;
(function (ReplyTimes) {
    // INITIALIZATION
    // Options
    var enabledrt = true;
    Options.addCheckbox({
        label: 'ENABLE REPLY TIMES',
        "default": true,
        section: 'Advanced 2',
        help: 'Enables LCE reply times.',
        onchange: function () {
            enabledrt = this.prop('checked');
            timestampEnable = enabledrt;
        }
    });
    var specialTimes = {
        '1': {user:'rschaosid', words:'(rschaosid) 1',bgcolor:'#008080',fontcolor:'#ffffff'},
        '8': {user:'gordonpt8', words:'gordonpt8',bgcolor:'#00ff00',fontcolor:'#000000'},
        '15': {user:'TheMatsValk', words:'(TheMatsValk) 15',bgcolor:'#00f5ff',fontcolor:'#000000'},
        '18': {user:'Kris18', words:'Kris18',bgcolor:'#0000ff',fontcolor:'#ffffff'},
        '36': {user:'Iamspeedy36', words:'Iamspeedy36',bgcolor:'#00BFFF',fontcolor:'#000000'},
        '37': {user:'amazingpikachu_38', words:'amazingpikachu_37',bgcolor:'#ffff00',fontcolor:'#000000'},
        '47': {user:'kdiuro13', words:'(kdiuro13) 47',bgcolor:'#191970',fontcolor:'#ffffff'},
        '69': {user:'ddodd69', words:'ddodd69',bgcolor:'#a89332',fontcolor:'#000000'},
        '100': {user:'abplows', words:'(abplows) 100',bgcolor:'#2b0090',fontcolor:'#ffffff'},
        '123': {user:'davidjl123', words:'davidjl123',bgcolor:'#6495ED',fontcolor:'#000000'},
        '123-2': {user:'dominodan123', words:'dominodan123',bgcolor:'#0000ff',fontcolor:'#ffffff'},
        '151': {user:'MewDP', words:'(MewDP) 151',bgcolor:'#FFFF33',fontcolor:'#000000'},
        '191': {user:'PaleRepresentative', words:'(PaleRepresentative) 191',bgcolor:'#8FBC8F',fontcolor:'#000000'},
        '200': {user:'QuestoGuy', words:'(QuestoGuy) 200',bgcolor:'#800080',fontcolor:'#ffffff'},
        '212': {user:'MrBahr12', words:'MrBahr212',bgcolor:'#CC6600',fontcolor:'#ffffff'},
        '217': {user:'Lonadont', words:'(Lonadont) 217',bgcolor:'#a35252',fontcolor:'#ffffff'},
        '220': {user:'Chalupa_Dad', words:'(Chalupa_Dad) 220',bgcolor:'#F08080',fontcolor:'#000000'},
        '222': {user:'treje', words:'(treje) 222',bgcolor:'#ffc130',fontcolor:'#000000'},
        '234': {user:'ElliottB1', words:'(ElliottB1) 234',bgcolor:'#00FFDD',fontcolor:'#000000'},
        '301': {user:'piyushsharma301', words:'piyushsharma301',bgcolor:'#ff0000',fontcolor:'#000000'},
        '333': {user:'Majestic_Bear', words:'(Majestic_Bear) 333',bgcolor:'#8A2BE2',fontcolor:'#ffffff'},
        '360': {user:'NikinCZ', words:'(NikinCZ) 360',bgcolor:'#86D8CA',fontcolor:'#000000'},
        '364': {user:'SecretAsianMa', words:'(SecretAsianMa) 364',bgcolor:'#373267',fontcolor:'#ffffff'},
        '369': {user:'TOP_20', words:'(Whitney) 369',bgcolor:'#D9009C',fontcolor:'#ffffff'},
        '373': {user:'MaybeNotWrong', words:'(MaybeNotWrong) 373',bgcolor:'#066666',fontcolor:'#ffffff'},
        '404': {user:'Tranquilsunrise', words:'(Tranquilsunrise) 404',bgcolor:'#ffa500',fontcolor:'#000000'},
        '404-2': {user:'KingCaspianX', words:'(KingCaspianX) 404',bgcolor:'#191970',fontcolor:'#ffffff'},
        '420': {user:'alienth', words:'420',bgcolor:'#00ff00',fontcolor:'#000000'},
        '471': {user:'albert471', words:'albert471',bgcolor:'#0000ff',fontcolor:'#ffffff'},
        '500': {user:'Rajalaxo', words:'(Rajalaxo) 500',bgcolor:'#f6dec0',fontcolor:'#000000'},
        '501': {user:'LeinadSpoon', words:'(LeinadSpoon) 501',bgcolor:'#520063',fontcolor:'#ffffff'},
        '505': {user:'ItzTaken', words:'(ItzTaken) 505',bgcolor:'#32ff95',fontcolor:'#000000'},
        '555': {user:'PrinceCrinkle', words:'(PrinceCrinkle) 555',bgcolor:'#00FFFF',fontcolor:'#000000'},
        '559': {user:'iwannaplay5050', words:'(iwannaplay5050) 559',bgcolor:'#B22222',fontcolor:'#ffffff'},
        '615': {user:'parker_cube', words:'(parker_cube) 615',bgcolor:'#71589f',fontcolor:'#ffffff'},
        '616': {user:'DemonBurritoCat', words:'(DemonBurritoCat) 616',bgcolor:'#890003',fontcolor:'#ffffff'},
        '639': {user:'MrUnderdawg', words:'(MrUnderdawg) 639',bgcolor:'#35e0cf',fontcolor:'#000000'},
        '666': {user:'rideride', words:'666',bgcolor:'#ff0000',fontcolor:'#000000'},
        '689': {user:'smarvin6689', words:'(smarvin6689) 689',bgcolor:'#060647',fontcolor:'#ffffff'},
        '700': {user:'Noob2137', words:'(Noob2137) 700',bgcolor:'#ff69ff',fontcolor:'#000000'},
        '777': {user:'artbn', words:'(artbn) 777',bgcolor:'#e66b00',fontcolor:'#000000'},
        '845': {user:'noduorg', words:'(noduorg) 845',bgcolor:'#0d2d89',fontcolor:'#ffffff'},
        '888': {user:'NobodyL0vesMe', words:'(NobodyL0vesMe) 888',bgcolor:'#BC12DD',fontcolor:'#000000'},
        '973': {user:'Smartstocks', words:'(Smartstocks) 973',bgcolor:'#840d0d',fontcolor:'#ffffff'},
        '998': {user:'qwertylool', words:'(qwertylool) 998',bgcolor:'#9acd32',fontcolor:'#000000'},
        '1111': {user:'andrewtheredditor', words:'(andrewtheredditor) 1111',bgcolor:'#2cd626',fontcolor:'#ffffff'},
        '1234': {user:'randomusername123458', words:'(randomusername123458) 1234',bgcolor:'#00cc99',fontcolor:'#000000'},
        '1521': {user:'darthvader1521', words:'darthvader1521',bgcolor:'#ffaf47',fontcolor:'#000000'},
        '1616': {user:'VitaminB16', words:'VitaminB1616',bgcolor:'#1affa7',fontcolor:'#000000'},
        '69420': {user:'GrunfTNT', words:'(lol) 69420',bgcolor:'#bb00ff',fontcolor:'#ffff00'},
    };
    Update.loadedNew(function (data) {
        if (!enabledrt)
            return;
        var thisTime = data.elem.find('.body').prev().attr('href');
        var timestamp_current = thisTime.substring(thisTime.indexOf("updates/") + 8);
        timestamp_current = timestamp_current.substring(14, 18) + timestamp_current.substring(9, 13) + timestamp_current.substring(0, 8);
        timestamp_current = parseInt(timestamp_current, 16);
        var thisTime2 = data.elem.find('.body').parent().nextAll('.liveupdate:first').children().first().attr('href');
        var timestamp_last = thisTime2.substring(thisTime2.indexOf("updates/") + 8);
        timestamp_last = timestamp_last.substring(14, 18) + timestamp_last.substring(9, 13) + timestamp_last.substring(0, 8);
        timestamp_last = parseInt(timestamp_last, 16);
        var timestamp = timestamp_current - timestamp_last;
        timestamp = timestamp / 10000;
        timestamp = Math.round(timestamp);
        //////////Last Count (messy for now)
        if(Elements.$body.attr('data-LastCount') != 'Off') {
            if ( isNaN(Number(expected_number)) == true ) {
                last_number = current_number;
            }
            // Predict the next number based on current thread
            function get_expected_low_base(last_num,base){
                let num_str = last_num.toString();
                let num_value = parseInt(num_str,base);
                num_value++;
                num_str = num_value.toString(base);
                let expected_number = BigInt(num_str);
                return expected_number;
            }
            function get_expected(last_num){
                if(last_num === '')return current_number;
                let expected_number;
                switch(THREAD){
                    case BASE2:
                        expected_number = get_expected_low_base(last_num, 2);
                        break;
                    case BASE3:
                        expected_number = get_expected_low_base(last_num, 3);
                        break;
                    case BASE4:
                        expected_number = get_expected_low_base(last_num, 4);
                        break;
                    case BACKWARDS:
                        expected_number = last_num - 1n;
                        break;
                    default:
                        expected_number = last_num + 1n;
                        break;
                }
                return expected_number;
            }
            update_body = data.elem.find('.body > .md').text();
            author_current = data.elem.find('.body > .author').text();
            author_current = author_current.trim().replace('/u/', '');
            let current_number_string = parse_body(update_body)[0];
            current_number = current_number_string === null ? null: BigInt(current_number_string);
            expected_number = get_expected(last_number);
            if (expected_number == current_number && author_last != author_current && expected_number != null || isNaN(Number(expected_number)) == true) {
                $("#lastcountcount").text(current_number.toLocaleString());
                $("#lastcountuser").text(author_current);
                end_of_cur_num = current_number_string.substr(current_number_string.length - get_split_digits());
                // If current number is end of split, update splits
                let splits = get_splits();
                let splits_amount = splits.length;
                // Initialise correct amount of splits
                if(vc_times === null){
                    vc_times  = Array(splits_amount).fill('');
                    vc_splits = Array(splits_amount).fill('');
                }
                if(splits.includes(end_of_cur_num)){
                    let index = splits.indexOf(end_of_cur_num);
                    if(end_of_cur_num == '000' && vc_times[splits.indexOf('000')] != ''){
                        let split_ms = timestamp_current - vc_times[splits.indexOf('000')];
                        let split_s = split_ms / 1000;
                        let split_rounded = Math.round(split_s / 10);
                        $("#lcbot_speed").text(split_rounded);
                    }
                    let prev_index = (index+splits_amount-1)%splits_amount; //Subtracts one with wraparound
                    vc_times[index] = timestamp_current;
                    if(vc_times[prev_index] != ''){
                        let split_ms = vc_times[index] - vc_times[prev_index];
                        let split_s = split_ms / 1000;
                        let split_rounded = Math.round(split_s / 10);
                        vc_splits[index] = split_rounded;
                        $("#split"+index).text(split_rounded);
                        all_times[current_number] = split_rounded;
                        $( "#split69" ).text(JSON.stringify(all_times, null, '\t'));
                    }
                }
                validcountwrong = 0;
                if (author_current == authorme) {
                    validcountnotme = 0;
                } else {
                    validcountnotme = 1;
                }
                author_last = author_current;
                last_number = current_number;
                if(THREAD == 'ta535s1hq2je' && Elements.$body.attr('data-KpartAlert') == 'true') {
                	if (Notification.permission === "granted") {
	    if (current_number.toString().substr(5) == '000' && !document.hasFocus()) {
     	    	showNotification(current_number);
	    }
   	} else if (Notification.permission !== "denied") {
      	    Notification.requestPermission().then(permission => {
        	console.log(permission);
      	    });
   	}
                }
            } else {
                validcountwrong++;
                if (validcountwrong == 30) {
                    document.getElementById("lastcountdesc").innerHTML = 'Click to reset?';
                    document.getElementById("lastcountdesc").style.background = '#ef7070';
                    /*var wrongtimer = setTimeout( function() {
                        document.getElementById("lastcountdesc").innerHTML = 'Last count:';
                        document.getElementById("lastcountdesc").style.background = '';
                        $("#lastcountdesc").click();
                    },15000);*/
                }
            }
        }
        //////////
        var permalink = thisTime.substring(thisTime.indexOf("updates/") + 8);
        var testhref = "https://old.reddit.com/live/" + THREAD + "/updates/" + permalink;
        var colortest = '#7dd4fa';
        var elcolor = '#000000';
        var randomx = '0';
        darkcheck = 0;
        if (Elements.$body.attr('data-darkMode') == 'Default') {
            if ($('#lc-body').hasClass('res-nightmode')) {
                darkcheck = 1;
                elcolor = '#ddd';
            }
        } else if (Elements.$body.attr('data-darkMode') == 'On') {
            darkcheck = 1;
            elcolor = '#ddd';
        } else if (Elements.$body.attr('data-darkMode') == 'Off') {
                darkcheck = 0;
        }
        if (timestamp <= -500) {
            colortest = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)';
        } else if (-499 <= timestamp && timestamp < 1) {
            colortest = '#f2ee0e';
            if (darkcheck == 1) {colortest = '#727200';}
        }
        if(Elements.$body.attr('data-halfColors') == 'true') {
            var dimestamp = timestamp;
            timestamp = timestamp * 2;
        }
        if (1 <= timestamp && timestamp < 100) {
            colortest = '#ef7070';
            if (darkcheck == 1) {colortest = '#4d0000';}
        } else if (100 <= timestamp && timestamp < 200) {
            colortest = '#ffaeae';
            if (darkcheck == 1) {colortest = '#980000';}
        } else if (200 <= timestamp && timestamp < 300) {
            colortest = '#ffebba';
            if (darkcheck == 1) {colortest = '#654700';}
        } else if (300 <= timestamp && timestamp < 400) {
            colortest = '#cfffba';
            if (darkcheck == 1) {colortest = '#216e00';}
        } else if (400 <= timestamp && timestamp < 500) {
            colortest = '#a2e8af';
            if (darkcheck == 1) {colortest = '#003b0b';}
        } else if (500 <= timestamp && timestamp < 600) {
            colortest = '#adffed';
            if (darkcheck == 1) {colortest = '#006b53';}
        } else if (600 <= timestamp && timestamp < 700) {
            colortest = '#add6ff';
            if (darkcheck == 1) {colortest = '#004183';}
        } else if (700 <= timestamp && timestamp < 800) {
            colortest = '#bcadff';
            if (darkcheck == 1) {colortest = '#14006c';}
        } else if (800 <= timestamp && timestamp < 900) {
            colortest = '#e9adff';
            if (darkcheck == 1) {colortest = '#460060';}
        } else if (900 <= timestamp && timestamp < 1000) {
            colortest = '#ffadf8';
            if (darkcheck == 1) {colortest = '#6e0064';}
        } else if (timestamp >= 1000) {
            colortest = '#ededed';
            if (darkcheck == 1) {colortest = '#2a2a2a';}
        }
        if(Elements.$body.attr('data-halfColors') == 'true') {
            timestamp = dimestamp;
        }
        if(timestamp in specialTimes && Elements.$body.attr('data-disableSpecialTimes') == 'false') {
            var postauthor = data.author_elem.text().substring(3);
            if (timestamp == '123') {
                var randomtime = Math.round(Math.random());
                if(randomtime == 1 && postauthor != 'davidjl123' || postauthor == 'dominodan123') {
                    timestamp = '123-2';
                }
            }
            if (timestamp == '404') {
                var randomtime = Math.round(Math.random());
                if(randomtime == 1 && postauthor != 'Tranquilsunrise' || postauthor == 'KingCaspianX') {
                    timestamp = '404-2';
                }
            }
            colortest = specialTimes[timestamp]['bgcolor'];
            elcolor = specialTimes[timestamp]['fontcolor'];
            if (postauthor == specialTimes[timestamp]['user']) {var user2 = data.elem.find('.body > .author').text(); data.elem.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; data.elem.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
            timestamp = specialTimes[timestamp]['words'];
        }
        data.elem.find('.body').prepend("<div onclick=window.open('"+testhref+"'); id=river>"+timestamp+"</div>");
        data.elem.find('#river').css('position', 'absolute').css('background',colortest).css('color',elcolor);
        if(window.location.href.indexOf("10itx") > -1) {
            var barregexy = /\/live\/.............\/updates\//
            var barmagin = data.elem.find('.body').prev().attr('href');
            var barmagin2 = barmagin.replace(barregexy, '');
            var barmagin2p1 = barmagin2.substring(0, 8);
            var barmagin2p11 = barmagin2.substring(9, 13);
            var barmagin2p111 = barmagin2.substring(15, 18);
            var barmagin2p1111 = barmagin2p111 + barmagin2p11 + barmagin2p1;
            var barmagin2p2 = parseInt(barmagin2p1111, 16);
            var mago = barmagin2p2.toString();
            mago = mago.substring(0, 15);
            mago = parseInt(mago);
            mago = Math.round( mago * 10 ) / 10;
            mago = mago / 10;
            mago = Math.round(mago);
            var dateTime = new Date( mago );
            var dateTime2 = dateTime.toISOString();
            var dateTime3 = dateTime2.substring(11, 23);
            document.getElementById("river").innerHTML = dateTime3;
        }
        if(Elements.$body.attr('data-BackgroundColor') == 'Match Reply Time') {
            data.elem.find('.body').parent().css('background', colortest);
        }

        if (window.innerWidth >= 700) {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
        else {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-10px').css('font-size', '9px').css('margin-top', '-16px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
        if ( $('#lc-body[data-DisplayMode="Minimal"] #liveupdate-statusbar').css('display') == 'none') {
            $( 'div#river' ).css('margin-left', '-141px');
        }
        if (Elements.$body.attr('data-automaticallyClearTime') != 'Off') {
            if (Elements.$body.attr('data-automaticallyClearTime') == 'After 60s') {
                customClearTime = 60000;
            } else {
                customClearTime = Elements.$body.attr('data-customClearTime');
            }
            $('#river').delay(customClearTime).hide(500);
        }
        $("#river").mouseover(function() {
            this.style.background = "transparent";
            this.style.color = "transparent";
            this.style.cursor = "pointer";
        });
        $("#river").mouseout(function() {
            this.style.background = colortest;
            this.style.color = elcolor;
        });
    });
    $(window).on('load resize', function () {
        if (window.innerWidth >= 700) {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('width','120px').css('text-align','right').css('max-width','120px');
            $( '#idlecontainer' ).css('position','absolute');
        }
        else {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-10px').css('font-size', '9px').css('margin-top', '-16px').css('width','120px').css('text-align','right').css('max-width','120px');
            $( '#idlecontainer' ).css('position','initial');
        }
    });


})(ReplyTimes || (ReplyTimes = {}));
///////////////////
// HalfColors.ts //
///////////////////
var HalfColors;
(function (HalfColors) {
    // INITIALIZATION
    Elements.$body.attr('data-halfColors', false);
    // Options
    Options.addCheckbox({
        label: 'HALF REPLY TIME COLORS',
        "default": false,
        section: 'Advanced 2',
        help: 'Halves the reply time colors, so they increase by increments of 50 rather than 100.',
        onchange: function () {
            Elements.$body.attr('data-halfColors', this.prop('checked'));
        }
    });
})(HalfColors || (HalfColors = {}));
///////////////////////////
// ReplyTimesDarkMode.ts //
///////////////////////////
var ReplyTimesDarkMode;
(function (ReplyTimesDarkMode) {
    // INITIALIZATION
    Elements.$body.attr('data-darkMode', 'Default');
    // Options
    Options.addSelect({
        label: 'NIGHT MODE REPLY TIMES',
        options: ['Default', 'On', 'Off'],
        section: 'Advanced 2',
        "default": 0,
        help: 'Changes the background of reply times to better match RES night mode. Default = looks at RES, On = forced on, Off = forced off, even if RES night mode enabled',
        onchange: function () {
            Elements.$body.attr('data-darkMode', this.val());
        }
    });
})(ReplyTimesDarkMode || (ReplyTimesDarkMode = {}));
///////////////////////////////
// AutomaticallyClearTime.ts //
///////////////////////////////
var AutomaticallyClearTime;
(function (AutomaticallyClearTime) {
    // INITIALIZATION
    Elements.$body.attr('data-automaticallyClearTime', 'Off');
    Elements.$body.attr('data-customClearTime', Cookie.save.customClearTime);
    // Options
    Options.addSelect({
        label: 'CLEAR REPLY TIMES',
        options: ['Off', 'After 60s', 'Custom'],
        section: 'Advanced 2',
        customClearTime: 2000,
        "default": 0,
        help: 'Automatically clears LCE reply times after a certain amount of time.',
        onchange: function () {
            $(this).click(function(){
                $(this).data('clicked', true);
            });
            Elements.$body.attr('data-automaticallyClearTime', this.val());
            //if (this.val() == 'Custom' && $(this).data('clicked') == true) {
            if (this.val() == 'Custom' && timeCheck == 1) {
                customClearTime = parseInt(window.prompt('Enter your custom time in milliseconds. 60 seconds = 60000 for example'), 10);
                if ( /^[0-9.,]+$/.test(customClearTime)) {
                    Cookie.save.customClearTime = customClearTime;
                    Elements.$body.attr('data-customClearTime', customClearTime);
                    Cookie.update();
                }
            }
        }
    });
})(AutomaticallyClearTime || (AutomaticallyClearTime = {}));
///////////////////////
// CustomStricken.ts //
///////////////////////
var CustomStricken;
(function (CustomStricken) {
    // INITIALIZATION
    Elements.$body.attr('data-customStricken', 'Off');
    Elements.$body.attr('data-customStrickenColor', Cookie.save.customStrickenColor);
    // Options
    Options.addSelect({
        label: 'CUSTOM STRICKEN',
        options: ['Off', 'No Inverse', 'Inverse'],
        section: 'Advanced 2',
        "default": 0,
        help: 'Applies custom styles to stricken counts.',
        onchange: function () {
            $(this).click(function(){
                $(this).data('clicked', true);
            });
            Elements.$body.attr('data-customStricken', this.val());
            //if (this.val() != 'Off' && $(this).data('clicked') == true) {
            if (this.val() != 'Off' && timeCheck == 1) {
                var oldStricken = Elements.$body.attr('data-customStrickenColor');
                customStrickenColor = window.prompt('Enter your custom background color.','#ddd');
                Cookie.save.customStrickenColor = customStrickenColor;
                Elements.$body.attr('data-customStrickenColor', customStrickenColor);
                Cookie.update();
                //Styles.add("\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}");
                Styles.replace("\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:"  + oldStricken + "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:"  + oldStricken + "!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}","\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}");
            }
        }
    });
    // Styles
    Styles.add("\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}");
})(CustomStricken || (CustomStricken = {}));
////////////////////////////
// DisableSpecialTimes.ts //
////////////////////////////
var DisableSpecialTimes;
(function (DisableSpecialTimes) {
    // INITIALIZATION
    Elements.$body.attr('data-disableSpecialTimes', false);
    // Options
    Options.addCheckbox({
        label: 'DISABLE SPECIAL TIMES',
        "default": false,
        section: 'Advanced 2',
        help: 'Disables special reply times, and only shows the exact millisecond time.',
        onchange: function () {
            Elements.$body.attr('data-disableSpecialTimes', this.prop('checked'));
        }
    });
})(DisableSpecialTimes || (DisableSpecialTimes = {}));
////////////////////////
// BackgroundColor.ts //
////////////////////////
var BackgroundColor;
(function (BackgroundColor) {
    // INITIALIZATION
    Elements.$body.attr('data-BackgroundColor', 'Off');
    Elements.$body.attr('data-customBackgroundColor', Cookie.save.customBackgroundColor);
    // Options
    Options.addSelect({
        label: 'BACKGROUND COLOR',
        options: ['Off', 'Match Reply Time', 'Custom'],
        section: 'Advanced 2',
        "default": 0,
        help: 'Changes the background color of new posts.',
        onchange: function () {
            $(this).click(function(){
                $(this).data('clicked', true);
            });
            Elements.$body.attr('data-BackgroundColor', this.val());
            //if (this.val() == 'Custom' && $(this).data('clicked') == true) {
            if (this.val() == 'Custom' && timeCheck == 1) {
                var oldBgColor = Elements.$body.attr('data-customBackgroundColor');
                customBackgroundColor = window.prompt('Enter your custom background color.','#ddd');
                Cookie.save.customBackgroundColor = customBackgroundColor;
                Elements.$body.attr('data-customBackgroundColor', customBackgroundColor);
                //Styles.add("\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:"  + Elements.$body.attr('data-customBackgroundColor') + "!important;\n\t}\n}");
                Styles.replace("\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:"  + oldBgColor + "!important;\n\t}\n}","\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:"  + Elements.$body.attr('data-customBackgroundColor') + "!important;\n\t}\n}");
                Cookie.update();
            }
        }
    });
    // Styles
    Styles.add("\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:"  + Elements.$body.attr('data-customBackgroundColor') + "!important;\n\t}\n}");
})(BackgroundColor || (BackgroundColor = {}));
//////////////////
// LastCount.ts //
//////////////////
var LastCount;
(function (LastCount) {
    // INITIALIZATION
    Elements.$body.attr('data-LastCount', 'Off');
    var dumpy = 0;
    // Gets the splits for the current thread
    let splits = get_splits();
    let live_update_header_text = "<div id=idlecontainer><div id=statsplace><p id=lastcountdesc>Last count:<p id=lastcountcount></p><p>/u/<span id=lastcountuser></span></p><div id=splits>"
    for(let i=0; i<splits.length;i++){
        live_update_header_text+="<p>"+splits[i]+":<span id=split"+i+"></span></p>"
    }
    live_update_header_text+="<p>Last K:<span id=lcbot_speed></span></p><p><span id=dumptoggle>Dump [+]:</span><div id=split69></div></p></div></div></div>"
    $('#liveupdate-header').prepend(live_update_header_text);
    $('#idlecontainer').css({'display': 'none', 'position': 'absolute', 'left': '1%', 'top': '20%', 'width': '115px', 'background': 'transparent'});
    $("#split69").css({'display': 'none',});
    $( "#lastcountdesc" ).hover(function() {
        document.getElementById("lastcountdesc").innerHTML = 'Click to reset';
        document.getElementById("lastcountdesc").style.cursor = 'pointer';
    }, function() {
        document.getElementById("lastcountdesc").innerHTML = 'Last count:';
    });
    $( "#lastcountdesc" ).click(function() {
        current_number = '';
        last_number = '';
        expected_number = '';
        update_body = '';
        author_current = '';
        author_last = '';
        document.getElementById("lastcountdesc").innerHTML = 'Last count:';
        document.getElementById("lastcountdesc").style.background = '';
    });
    $( "#split69" ).click(function() {
        $( "#split69" ).text(JSON.stringify(all_times, null, '\t'));
    });
    $("#dumptoggle").on('click', function () {
        if (dumpy == 0) {
            dumpy++;
            document.getElementById("dumptoggle").innerHTML = "Dump [-]:";
            $("#split69").css({
                'display': 'initial',
            });
        } else {
            dumpy--;
            document.getElementById("dumptoggle").innerHTML = "Dump [+]:";
            $("#split69").css({
                'display': 'none',
            });
        }
    });
    // Options
    Options.addSelect({
        label: 'LAST COUNT',
        options: ['Off', 'On', 'On + Splits'],
        section: 'Advanced 2',
        "default": 0,
        help: 'Tracks recent counts and can show speedrun splits by hundreds. Not perfectly accurate.',
        onchange: function () {
            Elements.$body.attr('data-LastCount', this.val());
            if(Elements.$body.attr('data-LastCount') == 'On') {
                $('#idlecontainer').css('display','initial');
                $('#splits').css('display','none');
            }
            if(Elements.$body.attr('data-LastCount') == 'On + Splits') {
                $('#idlecontainer').css('display','initial');
                $('#splits').css('display','initial');
            }
            if(Elements.$body.attr('data-LastCount') == 'Off') {
                $('#idlecontainer').css('display','none');
            }
        }
    });

    if(Elements.$body.attr('data-LastCount') == 'On') {
        $('#idlecontainer').css('display','initial');
        $('#splits').css('display','none');
    }
    if(Elements.$body.attr('data-LastCount') == 'On + Splits') {
        $('#idlecontainer').css('display','initial');
    }
})(BackgroundColor || (BackgroundColor = {}));
//////////////////
// CtrlEnter.ts //
//////////////////
var CtrlEnter;
(function (CtrlEnter) {
    // INITIALIZATION
    Elements.$body.attr('data-submitShortcut', 'Ctrl+Enter');
    var $textarea = $('#new-update-form textarea');
    var $resVersion = $('#RESConsoleVersion');
    var $submitBtn = $('#new-update-form .save-button button');
    // Options
    Options.addSelect({
        label: 'SUBMIT SHORTCUT',
        //options: ['Off', 'Ctrl+Enter', 'Enter', 'Custom'],
        options: ['Off', 'Ctrl+Enter', 'Enter'],
        section: 'Advanced',
        "default": 1,
        help: 'Changes the submit shortcut. May not work well with RES.',
        onchange: function () {
            Elements.$body.attr('data-submitShortcut', this.val());
            /*if(Elements.$body.attr('data-submitShortcut') == "Custom") {
                var customShortcut = window.prompt('Enter the js keycodes, separated by a comma Go to keycode.info to see keycodes easily.','13,17');
                Elements.$body.attr('data-submitShortcut', customShortcut);
            }*/
        }
    });
        $textarea.on('keydown', function (e) {
            if(Elements.$body.attr('data-submitShortcut') == "Off") {
                return;
            }
            if(Elements.$body.attr('data-submitShortcut') == "Ctrl+Enter") {
                if ($resVersion.length > 0 && +($resVersion.text().replace(/\D/g, '')) >= 478) {
                    return;
                }
                if (e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    $submitBtn.trigger('click');
                }
            }
            if(Elements.$body.attr('data-submitShortcut') == "Enter") {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    $submitBtn.trigger('click');
                }
            }
            /*
            else {
                var keycodeArray = Elements.$body.attr('data-submitShortcut').split(",");
                var keycodeCheck = keycodeArray.length;
                var keycodeIncrement = 0;
                for(keycode in keycodeArray) {
                    if(e.keyCode == keycodeArray[keycode].toString()) {
                        keycodeIncrement++;
                    }
                }
                if (keycodeIncrement == keycodeCheck) {
                    e.preventDefault();
                    $submitBtn.trigger('click');
                }
            }
            */
        });
})(CtrlEnter || (CtrlEnter = {}));
//////////////////
// CtrlSpace.ts //
//////////////////
var CtrlSpace;
(function (CtrlSpace) {
    // INITIALIZATION
    var enabled = true;
    var $textarea = $('#new-update-form textarea');
    // Bind keydown event to the textarea
    if (enabled) {
        $('body').on('keydown', function (e) {
            if (e.keyCode == 32 && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                $textarea.focus();
            }
        });
    }
})(CtrlSpace || (CtrlSpace = {}));

//////////////////
// KeepFocus.ts //
//////////////////
var KeepFocus;
(function (KeepFocus) {
    // INITIALIZATION
    var enabled = true;
    var $submitBtn = $('#new-update-form .save-button button');
    if (enabled) {
        $submitBtn.mousedown(function(e) {
            e.preventDefault();
        });
    }
})(KeepFocus || (KeepFocus = {}));
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
        'livecounting_sidebar': 'Black',
        'live_lc_bot': 'Black',
        'Riverbot': 'Black',
        'Graphite_bot': 'Black',
        'b66b': 'Black',
        'piyushsharma301': '#FF0F19',
        'Tranquilsunrise': 'Orange',
        'dominodan123': 'Blue',
        'smarvin6689':'#060647',
        'rideride':'#B22222',
        'nomaur2':'#8A2BE2',
        'VitaminB16': '#75CEAF',
        'LeinadSpoon': '#520063',
        'co3_carbonate': 'Grey',
        'artbn': '#e66b00',
        'amazingpikachu_38': '#FFFF00',
        'qwertylool': "YellowGreen",
        'TOP_20': '#ff00bf',
        '80sFan02': '#0505BB',
        'AstroMagician': '#2d8bff',
        'NobodyL0vesMe': '#730099',
        'PrinceCrinkle': '#0d2d89',
        'noduorg':'#0d2d89',
        'MrBahr12': '#00f20a',
        'parker_cube': '#FF69B4',
        'QuestoGuy': 'Purple',
        'Smartstocks': '#840d0d',
        'DemonBurritoCat':'#890003',
        'gordonpt8': '#00FF00',
        'Mooraell': '#DAA520',
        'randomusername123458': '#00CC99',
        'TheNitromeFan': '#fb72b0',
        'Capitanbublo' : '#ff531a',
        'davidjl123': '#6495ED',
        'abplows':'#2B0090',
        'Iamspeedy36': '#00BFFF',
        'Phoenixness': '#ff0000',
        'jillis6': '#ffd700',
        'Kris18': '#0000ff',
        'Chalupa_Dad':'#F08080',
        'Majestic_Bear':'#4682B4',
        'Flat-Mars-Society':'#00FF7F',
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
        'CarbonSpectre': '#339933',
        'Lonadont': '#a35252',
        'TehVulpez': '#c42c0a',
        'LC_Chats': '#dddddd',
        'LC-3P0': 'Black',
        'MaybeNotWrong': '#066666',
        'ElliottB1': '#00FFDD',
        'treje': '#ffc130',
        'sakima11': '#0cd1ad',
        'amazingpiakchu_38': '#FFFF00',
        'royalpurplesky': '#800080',
        'Mac_cy': '#FF8C00',
        'iwannaplay5050': '#B22222',
        'ludrol': '#191970',
        'thegreatestminer': '#4F9D82',
        'dogcatcowpig': '#1162f9',
        'ItzTaken': '#32ff95',
        'Noob2137': '#ff69ff',
        'PaleRepresentative': '#2F4F4F',
        'andrewtheredditor': '#2bdb6c',
        'Whit4You': '#ff99ff',
        'Rajalaxo': '#485432',
        'NikinCZ': '#86D8CA',
        'SecretAsianMa': '#373267',
        'srmpass': '#ffeed6',
        'MrUnderdawg': '#35e0cf',
        'SsPincus': '#840d0d',
        'amazingpikachu_37': '#FFFF00',
        'basskro': '#346cd1',
        'Chalupa_Grandpa': '#f69220',
        'TOP_6689': '#006689',
        'lyeinfyer': '#ccff99',
        'Zaajdaeon': '#1776BF',
        'Adventium_': '#228B22',
        'NeonL1vesMatter': '#730099',
        'Trial-Name': '#008080',
        'TheMatsValk': '#00f5ff',
        'supersammy00': '#28ad3c',
        'ddodd69': '#a89332',
        'NeitherLi2ardMisses': '#32ff94',
        '----Redditisgood----': '#327aff',
    };
    if (USER == 'VitaminB16') {
        userColors.b66b = 'white';
    }
    colortransfers = userColors;
    // Possible colors for other users
    var colors = ['Blue', 'Coral', 'DodgerBlue', 'SpringGreen', 'YellowGreen', 'Green', 'OrangeRed', 'Red', 'GoldenRod', 'CadetBlue', 'SeaGreen', 'Chocolate', 'BlueViolet', 'Firebrick'];
    for (var i = colors.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
    }

    function Shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    // index of next color to assign from colors array
    var currentColor = 0;



    // Options
    var enabled = true;
    Options.addCheckbox({
        label: 'COLORED USERNAMES',
        "default": true,
        help: 'Makes the username in each message gain a unique color.\n\nCertain users who have specified their preferred username colors to /u/co3_carbonaate get that fixed color all the time. Otherwise, your color will be random and appear differently for everyone using the extension.',
        onchange: function () {
            enabled = this.prop('checked');
        }
    });
    // EVENTS
    // New update loaded
    Update.loadedNew(function (data) {

        if (!enabled)
            return;
        // Special usernames (temp rewards for top in 100k HoC, or other contributions)
        // Bot-maker privileges
        if (data.author == 'MaybeNotWrong' || data.author == 'co3_carbonate' || data.author == 'rschaosid' || data.author == 'piyushsharma301' || data.author == 'LeinadSpoon' || data.author == 'artbn') {
            data.author_elem.css('font-weight', 'bold');
        }


        if (IgnoreEnabled == true) {
            var ignoretest = document.getElementById("ignorebox2").innerHTML;

            if (ignoretest.includes(data.author)) {
                var entirepost = data.body_elem.html();
                var entireposttext = data.body_elem.text();
                var count1testlol = entireposttext.substring(0, 10);
                count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
                entirepost = entirepost.replace(count1testlol,`<p id="counttext" style="font-size: 14px; display:inline;">`+count1testlol+` ​</p>`);
                entirepost = entirepost.replace(`p>`, `span>`);
                data.body_elem.html(`<span class="ignoredpost" style="font-size: 0px;">`+entirepost+`</span>`);
            }
        }//IgnoreEnabled ending



        // 100K usernames

         if (SpecialUsernamesEnabled1 == true) {
            if (data.author == kname1) {
                data.author_elem.html(`/u/T<span style="font-weight:bold;">O</span>P_20`)
            }
        } // SpecialUsernamesEnabled1 ending


        if (SpecialUsernamesEnabled2 == true) {
            if (data.author == kname2) {
      var takentext = '';
var takenemoji = '';
var takenname = true;
var takencolor = '#32ff95';

var magin = data.author_elem.parent().prev().attr('href');
    var threadid = magin.substring(magin.lastIndexOf("live/") + 5,magin.lastIndexOf("/updates"));
           var magin2 = magin.substring(magin.indexOf("updates/") + 8);
           var magin2p1 = magin2.substring(0, 8);
    var magin2p11 = magin2.substring(9, 13);
    var magin2p111 = magin2.substring(15, 18);
    var magin2p1111 = magin2p111 + magin2p11 + magin2p1;

           var magin2p2 = parseInt(magin2p1111, 16);
           var magin3 = data.author_elem.parent().parent().next().children().first().attr('href');
    if (magin3 == "#") {
  var magin3 = data.author_elem.parent().parent().next().next().children().first().attr('href');
}
    if (magin3 == undefined) {
  var magin3 = data.author_elem.parent().parent().next().next().children().first().attr('href');
}
    if (data.author_elem.parent().parent().next().hasClass( "stricken" ) == true ) {
       var magin3 = data.author_elem.parent().parent().next().next().children().first().attr('href');
    }
         if (data.author_elem.parent().parent().next().next().hasClass( "stricken" ) == true && data.author_elem.parent().parent().next().hasClass( "stricken" ) == true ) {
       var magin3 = data.author_elem.parent().parent().next().next().next().children().first().attr('href');
     }
if (data.author_elem.parent().parent().next().next().next().hasClass( "stricken" ) == true && data.author_elem.parent().parent().next().next().hasClass( "stricken" ) == true && data.author_elem.parent().parent().next().hasClass( "stricken" ) == true ) {
       var magin3 = data.author_elem.parent().parent().next().next().next().next().children().first().attr('href');
     }

           var magin4 = magin3.substring(magin.indexOf("updates/") + 8);
           var magin4p1 = magin4.substring(0, 8);
    var magin4p11 = magin4.substring(9, 13);
     var magin4p111 = magin4.substring(15, 18);
    var magin4p1111 = magin4p111 + magin4p11 + magin4p1;
           var magin4p2 = parseInt(magin4p1111, 16);
           var teenviopoemas = magin2p2 - magin4p2;
//          var demipunoyletra = teenviopoemas / 1000;
          var demipunoyletra = teenviopoemas;
demipunoyletra = Math.round( demipunoyletra / 10 ) * 10;
           demipunoyletra = demipunoyletra / 10;
demipunoyletra = demipunoyletra / 1000;
if (demipunoyletra >= 1 || demipunoyletra <= 0) {
                    demipunoyletra = Math.round(demipunoyletra);
                }
                if (demipunoyletra < 0) {
                    takentext = 'I time travelled ';
                    takenemoji = '🚀';
                    takenname = false;
                    takencolor = '#fcb03f';
                } else if (demipunoyletra < 1) {
takentext = 'WOW! That reply was only ';
takenemoji = '😲';
takenname = false;
takencolor = '#ffff00';
} else if (1 <= demipunoyletra && demipunoyletra < 50) {
takentext = 'quick reply';
takenemoji = '💨';
takencolor = '#000000';
} else if (50 <= demipunoyletra && demipunoyletra < 150) {
takentext = 'speedy reply';
takenemoji = '🐇';
	takencolor = '#ff0000';
} else if (150 <= demipunoyletra && demipunoyletra < 400) {
takentext = 'fast reply';
takenemoji = '🏃';
	takencolor = '#ff9600';
} else if (400 <= demipunoyletra && demipunoyletra < 1000) {
takentext = 'normal reply';
takenemoji = '🚶';
	takencolor = '#00ff00';
} else if (1000 <= demipunoyletra && demipunoyletra < 5000) {
takentext = 'slow reply';
takenemoji = '🐢';
	takencolor = '#00beff';
} else if (5000 <= demipunoyletra && demipunoyletra < 15000) {
takentext = 'extremely slow reply';
takenemoji = '🐌';
	takencolor = '#0a00ff';
} else if (15000 <= demipunoyletra) {
takentext = 'no counts here for ';
takenemoji = '🛑';
takenname = false;
	takencolor = '#32ff95';
}
  var count1testlol = data.body_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
count1testlol = count1testlol.substr(count1testlol.length - 3);


if (count1testlol == '666' || count1text.includes("spook")) {
takenemoji = '👻';
}

if (count1testlol == '666' && count1text.includes("spook")) {
takentext = 'SPOOK'
takenemoji = '👻';
takencolor = '#000000';
takenname = 'spook';
}



 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });
if (takenname == false) {
data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenemoji+takentext+demipunoyletra+`ms`+takenemoji+`</div>`);
} else if (takenname == 'spook') {
data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenemoji+takentext+takenemoji+`</div>`);
} else {
data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenemoji+takentext+takenemoji+` <sup>`+demipunoyletra+`ms</sup></div>`);
}

            }
        } // SpecialUsernamesEnabled2 ending



    // Set username color
    if (!userColors.hasOwnProperty(data.author)) {
        userColors[data.author] = colors[currentColor];
        currentColor++;
        if (currentColor == colors.length) {
            currentColor = 0;
        }
    }
    data.author_elem.css('color', userColors[data.author]);



    if(window.location.href.indexOf("110t4ltqqzi35") > -1 || window.location.href.indexOf("14ny3ur3axhd4") > -1) {
        var lcchats = data.href_elem.attr('href');
        lcchats = lcchats.trim().replace('/u/', '');
        data.href_elem.css('color', userColors[lcchats]).css('fontStyle','initial').css('fontSize','13px');
        if (lcchats == 'MaybeNotWrong' || lcchats == 'co3_carbonate' || lcchats == 'rschaosid' || lcchats == 'piyushsharma301' || lcchats == 'LeinadSpoon' || lcchats == 'artbn') {
            data.href_elem.css('font-weight', 'bold');
        }
    }
});
    if(window.location.href.indexOf("110t4ltqqzi35") > -1 || window.location.href.indexOf("14ny3ur3axhd4") > -1) {
        $('a[href*="/u/"]').each(function() {
            var thishref = $(this).attr('href');
            thishref = thishref.trim().replace('/u/', '');
            $(this).css('color', userColors[thishref]).css('fontStyle','initial').css('fontSize','13px');
            if (thishref == 'MaybeNotWrong' || thishref == 'co3_carbonate' || thishref == 'rschaosid' || thishref == 'piyushsharma301' || thishref == 'LeinadSpoon' || thishref == 'artbn') {
                $(this).css('font-weight', 'bold');
            }
        });
        Update.loadedOld(function () {
            $('a[href*="/u/"]').each(function() {
                var thishref2 = $(this).attr('href');
                thishref2 = thishref2.trim().replace('/u/', '');
                $(this).css('color', userColors[thishref2]).css('fontStyle','initial').css('fontSize','13px');
                if (thishref2 == 'MaybeNotWrong' || thishref2 == 'co3_carbonate' || thishref2 == 'rschaosid' || thishref2 == 'piyushsharma301' || thishref2 == 'LeinadSpoon' || thishref2 == 'artbn') {
                    $(this).css('font-weight', 'bold');
                }
            });
        });
    }

    var burrentbolor = 0;
        $('.author').each(function() {
            var thisauthor = $(this).text().trim().replace('/u/', '');
            //$(this).css('color', userColors[thisauthor]).css('fontStyle','initial').css('fontSize','13px');
            if (!userColors.hasOwnProperty(thisauthor)) {
        userColors[thisauthor] = colors[burrentbolor];
        burrentbolor++;
        if (burrentbolor == colors.length) {
            burrentbolor = 0;
        }
    }
    $(this).css('color', userColors[thisauthor]);
            if (thisauthor == 'MaybeNotWrong' || thisauthor == 'co3_carbonate' || thisauthor == 'rschaosid' || thisauthor == 'piyushsharma301' || thisauthor == 'LeinadSpoon' || thisauthor == 'artbn') {
                $(this).css('font-weight', 'bold');
            }
        });
        Update.loadedOld(function () {
            $('.author').each(function() {
            var thisauthor = $(this).text().trim().replace('/u/', '');
            //$(this).css('color', userColors[thisauthor]).css('fontStyle','initial').css('fontSize','13px');
            if (!userColors.hasOwnProperty(thisauthor)) {
        userColors[thisauthor] = colors[burrentbolor];
        burrentbolor++;
        if (burrentbolor == colors.length) {
            burrentbolor = 0;
        }
    }
    $(this).css('color', userColors[thisauthor]);
            if (thisauthor == 'MaybeNotWrong' || thisauthor == 'co3_carbonate' || thisauthor == 'rschaosid' || thisauthor == 'piyushsharma301' || thisauthor == 'LeinadSpoon' || thisauthor == 'artbn') {
                $(this).css('font-weight', 'bold');
            }
        });
        });

    //Styles
    Styles.add(`li.stricken > div > div > span > p #counttext {text-decoration: line-through;} .liveupdate-listing li.liveupdate.stricken div.md .ignoredpost p:last-of-type {text-decoration: none;}  `);
    Styles.add(`@font-face {font-family: "Freude";src: url("https://files.catbox.moe/d77nk6.otf");} @font-face {font-family: "Waker";src: url("https://files.catbox.moe/f7fzxk.otf");} .waker {font-family: Waker;} .freude {font-family: Freude; color:red; background:yellow;} .goudy {font-family: Goudy Stout;} .forfeited {font-family: Comic Sans MS; color: fuchsia; background:black;}`);
    Styles.add(`.stricken .rainbowtext {text-decoration:line-through!important;}`);
Styles.add(`@keyframes mymove {0% {font-size: 13px;transform:rotate(0deg);}50% {font-size: 78px;transform:rotate(180deg);}100% {font-size: 13px;transform:rotate(360deg);}}`);
    Styles.add(`@keyframes mymove2 {0% {font-size: 13px;transform:rotate(0deg);opacity:1;}50% {font-size: 78px;transform:rotate(180deg);opacity:0;}100% {font-size: 13px;transform:rotate(360deg);opacity:1;}}`);
	    Styles.add("\n\n\t.amazingpikachu_38 {\n\t\tanimation: blinker 1s linear infinite;\n\t}\n\t@keyframes blinker {\n\t\t50% { opacity: 0; }\n\t}\n\n\t");
    Styles.add(`li.stricken > div > a[href="/user/amazingpikachu_38"].author.flipped {animation: flippa 1s linear infinite;} @keyframes flippa {50% { float:initial; } 100%{ float:left; } }}`);
    Styles.add(`li > div > a[href="/user/amazingpikachu_38"].author.blink {animation: blinkerm 1s linear infinite;} @keyframes blinkerm {50% { opacity:0; } 100%{ opacity:1; } }`);

})(ColoredUsernames || (ColoredUsernames = {}));
//////////////////////////
// ClearPastMessages.ts //
//////////////////////////
var ClearPastMessages;
(function (ClearPastMessages) {
    // INITIALIZATION
    var maxMessages = 50;
    // Options
    var enabled = true;
    var enTimeout = false;
    var $checkbox = Options.addCheckbox({
        label: 'CLEAR PAST MESSAGES (REDUCES LAG)',
        "default": true,
        help: 'Frequently clears past messages from the page, which drastically negates lag and reduces the need to refresh constantly.',
        onchange: function () {
            enabled = this.prop('checked');
        }
    });
    $checkbox.click(function() {
        enTimeout = true;
        setTimeout(function(){ enTimeout = false; }, 5000);
    });
    // EVENTS
    // New update loaded
    Update.loadedNew(function (data) {
        if(window.scrollY==0 && enTimeout==false) {
            if (!enabled) {
                $checkbox.prop('checked', true).trigger('change');
            }
        }
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
})(ClearPastMessages || (ClearPastMessages = {}));
////////////////////
// DisplayMode.ts //
////////////////////
var DisplayMode;
(function (DisplayMode) {
    // INITIALIZATION
    Elements.$body.attr('data-DisplayMode', 'Normal');
    // "Return to Normal Display" button
    var $returnBtn = $('<input type="button" value="Return to Normal Display"/>');
    $returnBtn.on('click', function () {
        $select.children('option[value="Normal"]').prop('selected', true).trigger('change');
    });
    $returnBtn.css({
        marginBottom: '20px',
        display: 'none',
        margin: '0 auto'
    });
    Elements.$content.prepend($returnBtn);

    // Options
    var $select = Options.addSelect({
        label: 'DISPLAY MODE',
        options: ['Normal', 'Minimal'],
        help: 'Changes the display interface of the page to your preference.',
        onchange: function () {
            var display = this.val();
            $returnBtn.css('display', (display == 'Normal' ? 'none' : 'block'));
            Elements.$body.attr('data-DisplayMode', display);
        }
    });
    // Styles
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Minimal'] #header,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] div.content {\n\t\tmax-width: " + Math.max(450, $('#new-update-form textarea').outerWidth()) + "px;\n\t}\n\n\t");


})(DisplayMode || (DisplayMode = {}));
////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////
var RemoveSubmissionLag;
var clearCount = 0;
function noClear() {
    if(clearCount == 0) {
        //$('.status').remove();
$.ajaxSetup({
        dataFilter: function (data, type) {
            if(data == `{"jquery": [[0, 1, "call", ["#new-update-form"]], [1, 2, "attr", "find"], [2, 3, "call", [".status"]], [3, 4, "attr", "hide"], [4, 5, "call", []], [5, 6, "attr", "html"], [6, 7, "call", [""]], [7, 8, "attr", "end"], [8, 9, "call", []], [1, 10, "attr", "find"], [10, 11, "call", ["textarea"]], [11, 12, "attr", "attr"], [12, 13, "call", ["rows", 3]], [13, 14, "attr", "html"], [14, 15, "call", [""]], [15, 16, "attr", "val"], [16, 17, "call", [""]]], "success": true}`) {
                data = `{"jquery": [[0, 1, "call", ["#new-update-form"]], [1, 2, "attr", "find"], [2, 3, "call", [".status"]], [3, 4, "attr", "hide"], [4, 5, "call", []], [5, 6, "attr", "html"] ], "success": true}`;
            }
            return data;
        }
    });
    }
    clearCount++;
}
(function (RemoveSubmissionLag) {
    // INITIALIZATION
    var lastInput = '';
    var enabled = true;
    var ghostEnabled = false;
    var previews = [];
    var display = '';
    // Options
    Options.addSelect({
        label: 'REMOVE SUBMISSION LAG',
        options: ['Enabled', 'No Clear', 'Disabled'],
        "default": 0,
        help: 'Upon submitting a message, the textbox is immediately cleared to allow you to enter new contents without waiting for your previous submission to be processed.\n\nYou can also stop Reddit from clearing the textbox.',
        onchange: function () {
            display = this.val();
            enabled = display == 'Enabled';
            if(display == 'No Clear') {
                noClear();
            }
        }
    });
    // Styles
    Styles.add("\n\n\t.liveupdate-listing li.liveupdate.preview {\n\t\topacity: 0.75;\n\t}\n\t.liveupdate-listing li.liveupdate.preview .live-timestamp {\n\t\tvisibility: hidden;\n\t}\n\n\t");
    // EVENTS
    // When message is submitted
    Elements.$submitBtn.on('click', function (e) {
        if (!enabled)
            return;
        setTimeout(function () {
            var val = Elements.$textarea.val();
            if (val.length == 0)
                return;
            // Clear textbox
            Elements.$textarea.val('');
            // This is a way to work around the issue where Reddit automatically clears the textbox
            // when the update had been successfully delivered, although we just cleared it here.
            // Call backupInput() whenever the textarea content is changed
            Elements.$textarea.on('keydown keyup input', backupInput);
        }, 0);
    });
    // In backupInput(), keep track of the last backed up textarea content, by storing in lastInput
    function backupInput() {
        lastInput = Elements.$textarea.val();
    }
    // Use MutationObserver on the 'error message' to detect when Reddit had cleared the textbox.
    // When the error message's style changes from 'display: inline;' to 'display: none;', it
    // is clear that Reddit had cleared the textbox.
    // At this point, use the last backed-up input
    var observer = new MutationObserver(function (mutations) {
        if (!enabled)
            return;
        if (mutations.length != 1)
            return;
        // Exit if we think that Reddit had not cleared the textbox
        var mutation = mutations[0];
        if (!(mutation.oldValue == 'display: inline;' &&
              Elements.$submitError.attr('style') == 'display: none;'))
            return;
        // Use the last backed-up input
        Elements.$textarea.off('keydown keyup input', backupInput);
        Elements.$textarea.val(lastInput);
        lastInput = '';
    });
    if (Elements.$submitError.length > 0) {
        observer.observe(Elements.$submitError.get(0), {
            // observe for change in 'style' attribute value
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['style']
        });
    }
})(RemoveSubmissionLag || (RemoveSubmissionLag = {}));
/////////////////////////////
// DisableUsernameLinks.ts //
/////////////////////////////
var DisableUsernameLinks;
(function (DisableUsernameLinks) {
    // INITIALIZATION
    Elements.$body.attr('data-DisableUsernameLinks', 'false');
    // Options
    Options.addCheckbox({
        label: 'DISABLE USERNAME LINKS',
        section: 'Advanced',
        help: 'Disables the redirection to a user\'s profile upon clicking on his/her username. This is convenient to prevent yourself from accidentally going to one\'s profile page when trying to strike or delete a message.',
        onchange: function () {
            Elements.$body.attr('data-DisableUsernameLinks', this.prop('checked').toString());
        }
    });
    // Styles
    Styles.add("\n\n\t#lc-body[data-DisableUsernameLinks='true'] li.liveupdate > .body > .author {\n\t\tpointer-events: none;\n\t\tcursor: auto;\n\t}\n\n\t");
})(DisableUsernameLinks || (DisableUsernameLinks = {}));
////////////////////////
// LinksOpenNewTab.ts //
////////////////////////
var LinksOpenNewTab;
(function (LinksOpenNewTab) {
    // INITIALIZATION
    var $base = $('<base target="_blank">');
    Elements.$head.append($base);
    // Options
    var enabled = true;
    Options.addCheckbox({
        label: 'MAKE ALL LINKS OPEN IN A NEW TAB',
        "default": true,
        section: 'Advanced',
        help: 'Makes all links on the page open in a new tab.',
        onchange: function () {
            enabled = this.prop('checked');
            if (enabled)
                $base.attr('target', '_blank');
            else
                $base.attr('target', '_self');
        }
    });
})(LinksOpenNewTab || (LinksOpenNewTab = {}));
/////////////////////////
// DisableShortcuts.ts //
/////////////////////////
var DisableShortcuts;
(function (DisableShortcuts) {
    // INITIALIZATION
    // Options
    var enabled = true;
    Options.addCheckbox({
        label: 'DISABLE OBSTRUCTIVE BROWSER SHORTCUTS',
        "default": true,
        section: 'Advanced',
        help: 'Disables certain obstructive browser keyboard shortcuts. This currently disables the following: Ctrl+0 (Zoom Reset), Ctrl+[1-9] (Switch Tabs)',
        onchange: function () {
            enabled = this.prop('checked');
        }
    });
    // EVENTS
    $(document).on('keydown', function (e) {
        if (!enabled)
            return;
        // Ctrl Hotkeys
        if (e.ctrlKey || e.metaKey) {
            // Ctrl+0 (Zoom Reset)
            if (e.keyCode == 48)
                e.preventDefault();
            // Ctrl+[1-9] (Switch Tabs)
            if (e.keyCode >= 49 && e.keyCode <= 57)
                e.preventDefault();
            // Ctrl+[numpad0-9] (as above)
            if (e.keyCode >= 96 && e.keyCode <= 105)
                e.preventDefault();
        }
    });
})(DisableShortcuts || (DisableShortcuts = {}));
//////////////////////////
// SpecialUsernames.ts //
//////////////////////////
if (specialnumber > 0) {
    var SpecialUsernames1;
    var SpecialUsernamesEnabled1;
    (function (SpecialUsernames1) {
        // Options
        var enabled1 = true;
        var $checkbox = Options.addCheckbox({
            label: kname1 + ' 100K USERNAME',
            section: 'Advanced',
            "default": true,
            help: 'Enable or disable the special 100k usernames.',
            onchange: function () {
                enabled1 = this.prop('checked');
            }
        });
        if (enabled1 == true) {
            SpecialUsernamesEnabled1 = true;
        } else {
            SpecialUsernamesEnabled1 = false;
        }
    })(SpecialUsernames1 || (SpecialUsernames1 = {}));
}
if (specialnumber > 1) {
    var SpecialUsernames2;
    var SpecialUsernamesEnabled2;
    (function (SpecialUsernames2) {
        // Options
        var enabled2 = true;
        var $checkbox = Options.addCheckbox({
            label: kname2 + ' 100K USERNAME',
            section: 'Advanced',
            "default": true,
            help: 'Enable or disable the special 100k usernames.',
            onchange: function () {
                enabled2 = this.prop('checked');
            }
        });
        if (enabled2 == true) {
            SpecialUsernamesEnabled2 = true;
        } else {
            SpecialUsernamesEnabled2 = false;
        }
    })(SpecialUsernames2 || (SpecialUsernames2 = {}));
}
if (specialnumber > 2) {
    var SpecialUsernames3;
    var SpecialUsernamesEnabled3;
    (function (SpecialUsernames3) {
        // Options
        var enabled3 = true;
        var $checkbox = Options.addCheckbox({
            label: kname3 + ' 100K USERNAME',
            section: 'Advanced',
            "default": true,
            help: 'Enable or disable the special 100k usernames.',
            onchange: function () {
                enabled3 = this.prop('checked');
            }
        });
        if (enabled3 == true) {
            SpecialUsernamesEnabled3 = true;
        } else {
            SpecialUsernamesEnabled3 = false;
        }
    })(SpecialUsernames3 || (SpecialUsernames3 = {}));
}
if (specialnumber > 3) {
    var SpecialUsernames4;
    var SpecialUsernamesEnabled4;
    (function (SpecialUsernames2) {
        // Options
        var enabled4 = true;
        var $checkbox = Options.addCheckbox({
            label: kname4 + ' 100K USERNAME',
            section: 'Advanced',
            "default": true,
            help: 'Enable or disable the special 100k usernames.',
            onchange: function () {
                enabled4 = this.prop('checked');
            }
        });
        if (enabled4 == true) {
            SpecialUsernamesEnabled4 = true;
        } else {
            SpecialUsernamesEnabled4 = false;
        }
    })(SpecialUsernames4 || (SpecialUsernames4 = {}));
}
if (specialnumber > 4) {
    var SpecialUsernames5;
    var SpecialUsernamesEnabled5;
    (function (SpecialUsernames5) {
        // Options
        var enabled5 = true;
        var $checkbox = Options.addCheckbox({
            label: kname5 + ' 100K USERNAME',
            section: 'Advanced',
            "default": true,
            help: 'Enable or disable the special 100k usernames.',
            onchange: function () {
                enabled5 = this.prop('checked');
            }
        });
        if (enabled5 == true) {
            SpecialUsernamesEnabled5 = true;
        } else {
            SpecialUsernamesEnabled5 = false;
        }
    })(SpecialUsernames5 || (SpecialUsernames5 = {}));
}
if (specialnumber > 5) {
    var SpecialUsernames6;
    var SpecialUsernamesEnabled6;
    (function (SpecialUsernames6) {
        // Options
        var enabled6 = true;
        var $checkbox = Options.addCheckbox({
            label: kname6 + ' 100K USERNAME',
            section: 'Advanced',
            "default": true,
            help: 'Enable or disable the special 100k usernames.',
            onchange: function () {
                enabled6 = this.prop('checked');
            }
        });
        if (enabled6 == true) {
            SpecialUsernamesEnabled6 = true;
        } else {
            SpecialUsernamesEnabled6 = false;
        }
    })(SpecialUsernames6 || (SpecialUsernames6 = {}));
}

/////////////////
// TeamBars.ts //
/////////////////
var TeamBars;
var TeamBarsEnabled;
(function (TeamBars) {
    // Options
    var enabled = true;
    var $checkbox = Options.addCheckbox({
        label: 'DAILY HALL OF COUNTERS',
        section: 'Advanced',
        "default": true,
        help: 'Enable or disable the daily Hall of Counters.',
        onchange: function () {
            enabled = this.prop('checked');
        }
    });
    if (enabled == true) {
        TeamBarsEnabled = true;
    } else {
        TeamBarsEnabled = false;
    }

    //////////////////////////////////Daily HoC Auto-updater
    if (window.location.href.indexOf("ta535s1hq2je") > -1) {
        if (TeamBarsEnabled == true) {
            var hmmyy;
            var checky;
            var checky2;
            var the100k;
            var first_call = true;
            var first_call2 = true;
            var dayhoc_last_count = 0;
            var dayhoc_day_counts = 0;
            var the100khoc_counts = 0;

            var day_hoc_handler = function (data) {
                hmmyy = data["day"]["hoc"];
                checky = data["day"]["hoc"];
                the100k = data["100k"]["hoc"];
                checky2 = data["100k"]["hoc"];
                dayhoc_last_count = data["latest_count"];
                dayhoc_day_counts = data["day"]["total_counts"];
                the100khoc_counts = data["100k"]["total_counts"];
                if (first_call){
                    first_call = false;
                    $(`<div id=wholetable><table id="mini"><tr class="tablenames"><td id="dailyenabler">Daily [+]</td><td id="dailyenabler2">100k [+]</td></tr></table><table id=loadtest><tr class="tablenames"><td>#</td><td>User</td><td>Counts</td></tr></table><table id=loadtest2><tr class="tablenames2"><td>#</td><td>User</td><td>Counts</td></tr></table></div>`).insertBefore("#liveupdate-resources .md");
                } else {
                    $(`#wholetable`).html(`<table id="mini"><tr class="tablenames"><td id="dailyenabler">Daily [+]</td><td id="dailyenabler2">100k [+]</td></tr></table><table id=loadtest><tr class="tablenames"><td>#</td><td>User</td><td>Counts</td></tr></table><table id=loadtest2><tr class="tablenames2"><td>#</td><td>User</td><td>Counts</td></tr></table>`);
                }

                function getTableRow(item, index) {
                    let res = "<tr style='font-size:inherit;'";
                    if (index >= 3){
                        res += " class=collapsedo";
                    }
                    var hocname = [item.author, item.counts].join("</a></td><td>");
                    var wrcer = "";
                    if(item.has_wrc_req == true) {wrcer = " title='Has WRC requirements' style='font-style:italic;'"}
                    res += "><td"+wrcer+">" + (index + 1) + "</td><td><a class=authoro>/u/" + hocname + "</td></tr>";
                    return res;
                }
                function getTableRow2(item, index) {
                    let res = "<tr style='font-size:inherit;'";
                    if (index >= 3){
                        res += " class=collapsedo2";
                    }
                    var hocname = [item.author, item.counts].join("</a></td><td>");
                    var wrcer = "";
                    if(item.has_wrc_req == true) {wrcer = " title='Has WRC requirements' style='font-style:italic;'"}
                    res += "><td"+wrcer+">" + (index + 1) + "</td><td><a class=authoro>/u/" + hocname + "</td></tr>";
                    return res;
                }
                function jsonCheck(item) {
                    var hocnamd = [item.author, item.counts].join("");
                    return hocnamd;
                }

                hmmyy = hmmyy.map(getTableRow);
                hmmyy.push(`<tr style='font-size:inherit;' class=collapsedo><td></td><td>Counts today:</td><td>`+dayhoc_day_counts.toLocaleString()+`</td></tr>`);
                hmmyy.push(`<tr style='font-size:inherit;' class=collapsedo><td></td><td>Latest count:</td><td>`+dayhoc_last_count.toLocaleString()+`</td></tr>`);
                checky = checky.map(jsonCheck);
                the100k = the100k.map(getTableRow2);
                the100k.push(`<tr style='font-size:inherit;' class=collapsedo2><td></td><td>Counts:</td><td>`+the100khoc_counts.toLocaleString()+`</td></tr>`);
                the100k.push(`<tr style='font-size:inherit;' class=collapsedo2><td></td><td>Latest count:</td><td>`+dayhoc_last_count.toLocaleString()+`</td></tr>`);
                checky2 = checky2.map(jsonCheck);

                checky = checky.join("");
                checky = checky.replace(/[A-Za-z]/g, ``);
                checky = checky.replace(/[-]/g, ``);
                checky = checky.replace(/[_]/g, ``);
                checky = checky.replace(/[0-9]+/g, '');
                checky2 = checky2.join("");
                checky2 = checky2.replace(/[A-Za-z]/g, ``);
                checky2 = checky2.replace(/[-]/g, ``);
                checky2 = checky2.replace(/[_]/g, ``);
                checky2 = checky2.replace(/[0-9]+/g, '');
                if (checky.length == 0 && checky2.length == 0 && typeof(the100khoc_counts) == "number" && typeof(dayhoc_last_count) == "number" && typeof(dayhoc_day_counts) == "number") {
                    $('#loadtest').append(hmmyy.join(""));
                    $('#loadtest2').append(the100k.join(""));
                    $("#loadtest tbody:nth-child(5)").append(`<tr><td>divide</td></tr>`);
                    $(".authoro").each(function () {
                        $(this).attr("href", "https://reddit.com" + $(this).text());
                        if (dailyHocColorNamesEnable2 == true) {
                            var thishref = $(this).attr('href');
                            thishref = thishref.trim().replace('https://reddit.com/u/', '');
                            $(this).css('color', colortransfers[thishref]);
                            if ($(this).text() == `/u/` + USER) {
                                $(this).parent().parent().css('font-weight', 'bold');
                            }
                        }
                    });

                    if (dailysize == 0) {
                        $("#loadtest").css('display','inline-table');
                        document.getElementById("dailyenabler").innerHTML = "Daily [+]";
                        $(".collapsedo").css({
                            'display': 'none',
                        });
                    } else if (dailysize == 1) {
                        $("#loadtest").css('display','inline-table');
                        document.getElementById("dailyenabler").innerHTML = "Daily [-]";
                        $(".collapsedo").css({
                            'display': 'table-row',
                        });
                    }
                    else if (dailysize == -1) {
                        document.getElementById("dailyenabler").innerHTML = "Daily";
                        $("#loadtest").css('display','none');
                    }
                    if (dailysize2 == 0) {
                        $("#loadtest2").css('display','inline-table');
                        document.getElementById("dailyenabler2").innerHTML = "100k [+]";
                        $(".collapsedo2").css({
                            'display': 'none',
                        });
                    } else if (dailysize2 == 1) {
                        $("#loadtest2").css('display','inline-table');
                        document.getElementById("dailyenabler2").innerHTML = "100k [-]";
                        $(".collapsedo2").css({
                            'display': 'table-row',
                        });
                    } else if (dailysize2 == -1) {
                        document.getElementById("dailyenabler2").innerHTML = "100k";
                        $("#loadtest2").css('display','none');
                    }
                    $("#dailyenabler").on('click', function () {
                        if (dailysize == -1) {
                            dailysize = 1;
                            document.getElementById("dailyenabler2").innerHTML = "100k"
                            $("#loadtest2").css('display','none');
                        }
                        if (dailysize == 0) {
                            dailysize++;
                            dailysize2 = -1;
                            $("#loadtest").css('display','inline-table');
                            $("#loadtest2").css('display','none');
                            document.getElementById("dailyenabler").innerHTML = "Daily [-]";
                            $(".collapsedo").css({
                                'display': 'table-row',
                            });
                        } else if (dailysize == 1) {
                            dailysize--;
                            dailysize2 = -1;
                            $("#loadtest").css('display','inline-table');
                            $("#loadtest2").css('display','none');
                            document.getElementById("dailyenabler").innerHTML = "Daily [+]";
                            $(".collapsedo").css({
                                'display': 'none',
                            });
                        }
                    });
                        $("#dailyenabler2").on('click', function () {
                            if (dailysize2 == -1) {
                            dailysize2 = 1;
                            document.getElementById("dailyenabler").innerHTML = "Daily"
                            $("#loadtest").css('display','none');
                        }
                        if (dailysize2 == 0) {
                            dailysize2++;
                            dailysize = -1;
                            $("#loadtest2").css('display','inline-table');
                            $("#loadtest").css('display','none');
                            document.getElementById("dailyenabler2").innerHTML = "100k [-]";
                            $(".collapsedo2").css({
                                'display': 'table-row',
                            });
                        } else if (dailysize2 == 1) {
                            dailysize2--;
                            dailysize = -1;
                            $("#loadtest2").css('display','inline-table');
                            $("#loadtest").css('display','none');
                            document.getElementById("dailyenabler2").innerHTML = "100k [+]";
                            $(".collapsedo2").css({
                                'display': 'none',
                            });
                        }
                    });
                } else { //checky length check
                    $('#loadtest').append("<tr><td>Error verifying data, please PM /u/rideride</td></tr>");
                }
            }

            $.ajax({
                method: 'GET',
                dataType: 'json',
                cache: false,
                url: 'https://raw.githubusercontent.com/MaybeNotWrong/lc-sep/master/data.txt',
                success: day_hoc_handler,
                error: function (data) {
                    hmmyy;
                }
            });

            setInterval(function () {

                var hmmyy;
                var checky;
                var checky2;
                var the100k;
                $.ajax({
                    method: 'GET',
                    dataType: 'json',
                    cache: false,
                    url: 'https://raw.githubusercontent.com/MaybeNotWrong/lc-sep/master/data.txt',
                    success: day_hoc_handler,   //////this is where you put the checky bracket
                    error: function (data) {
                        hmmyy;
                    }
                });

            }, 15000);
            Styles.add(`                    #loadtest tbody tr:nth-child(2) td:nth-child(1){background: gold;color: black;}#loadtest tbody tr:nth-child(3) td:nth-child(1){background: silver;color: black;}#loadtest tbody tr:nth-child(4) td:nth-child(1){background: #cd7f32;color: black;}#loadtest{border: 1px solid black;width: 100%;text-align: center;}#loadtest tr td{border: 1px solid black;max-width: 223px;}#loadtest{overflow: hidden;height: 100%;}#loadtest{color: #000;font-size: inherit;font-weight: normal;}#dailyenabler{cursor: pointer;color: #000;font-size: 14px;font-weight: bold;margin-bottom: 3px;}.tablenames{font-weight: bold;}`);
            Styles.add(`                    #loadtest2 tbody tr:nth-child(2) td:nth-child(1){background: gold;color: black;}#loadtest2 tbody tr:nth-child(3) td:nth-child(1){background: silver;color: black;}#loadtest2 tbody tr:nth-child(4) td:nth-child(1){background: #cd7f32;color: black;}#loadtest2{border: 1px solid black;width: 100%;text-align: center;}#loadtest2 tr td{border: 1px solid black;max-width: 223px;}#loadtest2{overflow: hidden;height: 100%;}#loadtest2{color: #000;font-size: inherit;font-weight: normal;}#dailyenabler2{cursor: pointer;color: #000;font-size: 14px;font-weight: bold;margin-bottom: 3px;}.tablenames2{font-weight: bold;}`);
            Styles.add(`#mini{border: 1px solid black;width: 100%;text-align: center;}#mini tr td{border: 1px solid black;max-width: 223px;}#mini{overflow: hidden;height: 100%;}#mini{color: #000;font-size: inherit;font-weight: normal;}`);
            //document.getElementById("team1").style.cssText = 'background:#0000cf;color:white;z-index: 99999;min-width: 14px;max-width: 14px;height: 14px;line-height: 14px;border-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 11px !important;position: relative;text-indent: 12px;-webkit-transition: all 0.3s;transition: all 0.3s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor:help;';
        } //TeamBarsEnabled end
    }
    //////////////////////////////////
})(TeamBars || (TeamBars = {}));

////////////////////////
// ContentPosition.ts //
////////////////////////
var ContentPosition;
(function (ContentPosition) {
    // INITIALIZATION
    Elements.$body.attr('data-ContentPosition', 'Center');
    // Options
    Options.addSelect({
        label: 'CONTENT POSITION',
        options: ['Left', 'Center', 'Right'],
        section: 'Advanced',
        "default": 1,
        help: 'Adjusts the position of the main content section.',
        onchange: function () {
            Elements.$body.attr('data-ContentPosition', this.val());
        }
    });
    // Styles
    Styles.add("\n\n\t#lc-body[data-ContentPosition='Left'] div.content {\n\t\tmargin: 0;\n\t}\n\t#lc-body[data-ContentPosition='Center'] div.content {\n\t\tmargin: 0 auto;\n\t}\n\t#lc-body[data-ContentPosition='Right'] div.content {\n\t\tfloat: right;\n\t}\n\n\t");
})(ContentPosition || (ContentPosition = {}));
////////////////////////////////
// StandardizeNumberFormat.ts //
////////////////////////////////
var StandardizeNumberFormat;
(function (StandardizeNumberFormat) {
    // UTILITY
    // Format a number string with a character separator (e.g. 1,000,000)
    function delimit(str, char) {
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, char);
    }
    // Trim specified leading and trailing characters in a string
    function trim(str, chars) {
        var i = 0;
        var l = str.length;
        var start = 0;
        var end = l - 1;
        for (i = 0; i < l; i++) {
            if (chars.indexOf(str.charAt(i)) == -1) {
                start = i;
                break;
            }
        }
        for (i = l - 1; i >= 0; i--) {
            if (chars.indexOf(str.charAt(i)) == -1) {
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
    function first_node(parent) {
        var contents = parent.childNodes;
        var i = 0;
        for (var l = contents.length; i < l; i++) {
            if (contents[i].nodeType == 3) {
                // text node
                // check if empty
                if (contents[i].textContent.trim().length > 0)
                    return contents[i];
            }
            if (contents[i].nodeType == 1) {
                // element node
                var elem = contents[i];
                if (elem.children.length == 0) {
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
    var enabled = false;
    var format = function (str) { return str; };
    // Possible format functions
    // (this is to avoid the use of anonymous functions, improving performance)
    var FormatFuncs;
    (function (FormatFuncs) {
        function Commas(str) {
            return delimit(str, ',');
        }
        FormatFuncs.Commas = Commas;
        function Spaces(str) {
            return delimit(str, ' ');
        }
        FormatFuncs.Spaces = Spaces;
        function Periods(str) {
            return delimit(str, '.');
        }
        FormatFuncs.Periods = Periods;
        function None(str) {
            return str;
        }
        FormatFuncs.None = None;
    })(FormatFuncs || (FormatFuncs = {}));
    ;
    // Options
    Options.addSelect({
        label: 'STANDARDIZE NUMBER FORMAT',
        options: ['Disabled', 'Spaces', 'Periods', 'Commas', 'None'],
        section: 'Advanced',
        help: 'Standardizes the number count in each message to a format of your choice. Also removes special formatting on the number.',
        onchange: function () {
            var val = this.val();
            if (val == 'Disabled') {
                enabled = false;
                return;
            }
            enabled = true;
            format = FormatFuncs[val];
        }
    });
    // EVENTS
    // New update loaded
    Update.loadedNew(function (data) {
        if (!enabled)
            return;
        var first_elem = first_node(data.body_elem.get(0));
        var $first_elem = $(first_elem);
        var body = first_elem.textContent;
        if (!body)
            return;
        // Detect number from string
        // (This algorithm has a few problems, such as "2,000 2 GETS today"
        //  producing a detected number of "20002".)
        var l = body.length;
        var num = '';
        var original_num = '';
        var c;
        for (var i = 0; i < l; i++) {
            c = body.charAt(i);
            if (c == '0' || c == '1' || c == '2' || c == '3' || c == '4' ||
                c == '5' || c == '6' || c == '7' || c == '8' || c == '9') {
                num += c;
                original_num += c;
                continue;
            }
            else if (c == ' ' || c == ',' || c == '.') {
                // part of number styling preference
                original_num += c;
                continue;
            }
            else {
                break;
            }
        }
        if (num.length == 0)
            num = null;
        // Replace original_num in first_elem with num
        if (num == null)
            return;
        first_elem.textContent = body.replace(trim(original_num, [' ', ',', '.']), format(num));
        // Remove formatting of parents of first_elem by changing into span
        // Also, headers are not wrapped in p, so replace those with p
        var $parents = $first_elem.parentsUntil('p, div.md');
        var parentsLen = $parents.length;
        if (first_elem.nodeType == 1 && !$first_elem.is('p, div.md')) {
            $parents = $parents.add($first_elem);
            if (parentsLen == 0) {
                // not a paragraph, but still no parent? must be a header (h1)
                // convert to p
                $first_elem.replaceWith('<p>' + first_elem.textContent + '</p>');
            }
        }
        var $this;
        $parents.each(function (index, element) {
            $this = $(this);
            if ($this.parent().is(data.body_elem)) {
                // if the direct parent is the body element,
                // replace to p instead,
                // since this is definitely not a p itself
                $this.replaceWith('<p>' + this.textContent + '</p>');
                return;
            }
            $this.replaceWith('<span>' + this.textContent + '</span>');
        });
    });
})(StandardizeNumberFormat || (StandardizeNumberFormat = {}));
////////////////////////
// OptionPosition.ts //
////////////////////////

var OptionPosition;
(function (OptionPosition) {
    // INITIALIZATION
    $('#liveupdate-options').attr('data-OptionPosition', 'Higher');
    // Options
    Options.addSelect({
        label: 'OPTION POSITION',
        options: ['Higher', 'Default'],
        section: 'Advanced',
        "default": 0,
        help: 'Adjusts the position of the options.',
        onchange: function () {
            $('#liveupdate-options').attr('data-OptionPosition', this.val());
        }
    });
    // Styles
    Styles.add("\n\n\t#liveupdate-options[data-OptionPosition='Higher'] {margin-top: -11em;}\n\n\t#liveupdate-options[data-OptionPosition='Default'] {margin-top: -2em;}");
})(OptionPosition || (OptionPosition = {}));

////////////////
// Ignore.ts //
///////////////

var Ignore;
var IgnoreEnabled;

(function (Ignore) {
    // Options
    var enabled7 = false;

    Options.addCheckbox({
        label: 'IGNORE',
        section: 'Advanced',
        "default": false,
        help: 'Adjusts the position of the options.',
        onchange: function () {
            enabled7 = this.prop('checked');
            if (enabled7 == true) {
                IgnoreEnabled = true;
                $('#ignorestuff').css('display','initial');
            } else {
                IgnoreEnabled = false;
                $('#ignorestuff').css('display','none');
            }
        }
    });

    $(`<script>var ignored = []; ignored.push(localStorage['ignoredppl']); function addIgnore() {var ignoreinp = document.getElementById('ignorebox');ignored.push(ignoreinp.value);ignoreinp.value = "";document.getElementById("ignorebox2").innerHTML = ignored;localStorage['ignoredppl'] = ignored;}function displayIgnore() {document.getElementById("ignorebox2").innerHTML = ignored;}function deleteIgnore() {ignored = []; localStorage['ignoredppl'] = []; document.getElementById("ignorebox2").innerHTML = '';}</script><span id=ignorestuff><input id=ignorebox style="position: absolute;margin-top: -25px;margin-left: 65px;"></input><span style="position: absolute;margin-top: -26px;margin-left: 210px;font-size: 9px !important;"><button type="button" id="ignoreadd" onclick="addIgnore()" style="font-size: 12px;padding: 0;margin-right: 3px;">ADD</button><button type="button" id="ignoredelete" onclick="deleteIgnore()" style="font-size: 12px;padding: 0;">DELETE ALL</button></span><div>Ignored users: <span id=ignorebox2></span></div></span><script>document.getElementById('ignorebox2').innerHTML = ignored;</script>`).insertAfter(`#live-counting-extension div div:nth-child(4) label:nth-last-child(1)`);
    if (enabled7 == true) {
        IgnoreEnabled = true;
        $('#ignorestuff').css('display','initial');
    } else {
        IgnoreEnabled = false;
        $('#ignorestuff').css('display','none');
    }
})(Ignore || (Ignore= {}));
///////////////
// Emojis.ts //
///////////////

var Emojis;

(function (Emojis) {
    // Options
    var enabled = false;


    Options.addCheckbox({
        label: 'Emojis',
        section: 'Advanced',
        "default": false,
        help: 'Changes emojis. Type :emoji: in the textbox. Please note that this feature sucks.',
        onchange: function () {
            enabled = this.prop('checked');
        }
    });
    if(enabled) {
        const emojiMap = { //source: https://github.com/lifmus/emoji/blob/gh-pages/emoji_dictionary.json
            100:"💯",1234:"🔢",smile:"😄",grinning:"😀",smiley:"😃",blush:"😊",relaxed:"☺",wink:"😉",heart_eyes:"😍",kissing_heart:"😘",kissing_closed_eyes:"😚",kissing:"😗",kissing_smiling_eyes:"😙",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue:"😛",flushed:"😳",grin:"😁",pensive:"😔",relieved:"😥",unamused:"😒",disappointed:"😞",persevere:"😣",cry:"😢",joy:"😂",sob:"😭",sleepy:"😪",disappointed_relieved:"",cold_sweat:"😰",sweat_smile:"😅",sweat:"😓",weary:"😩",tired_face:"😫",fearful:"😨",scream:"😱",angry:"😠",triumph:"😤",confounded:"😖",satisfied:"😌",yum:"😋",mask:"😷",sunglasses:"😎",sleeping:"😴",dizzy_face:"😵",astonished:"😲",worried:"😟",frowning:"😦",anguished:"😧",smiling_imp:"😈",imp:"👿",open_mouth:"😮",grimacing:"😬",neutral_face:"😐",confused:"😕",hushed:"😯",no_mouth:"😶",innocent:"😇",smirk:"😏",expressionless:"😑",man_with_gua_pi_mao:"👲",man_with_turban:"👳",cop:"👮",construction_worker:"👷",guardsman:"💂",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",older_man:"👴",older_woman:"👵",person_with_blond_hair:"👱",angel:"👼",princess:"👸",smile_cat:"😸",heart_eyes_cat:"😻",kissing_cat:"😽",smirk_cat:"😼",scream_cat:"🙀",crying_cat_face:"😿",joy_cat:"😹",pouting_cat:"😾",smiley_cat:"😺",japanese_goblin:"👺",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",skull:"💀",alien:"👽",hankey:"💩",poop:"💩",shit:"💩",fire:"🔥",sparkles:"✨",star2:"🌟",dizzy:"💫",boom:"💥",collision:"💥",anger:"💢",sweat_drops:"💦",droplet:"💧",zzz:"💤",ear:"👂",eyes:"👀",nose:"👃",tongue:"👅",lips:"👄",plusone:"👍",thumbsup:"👍",minusone:"👎",thumbsdown:"👎",ok_hand:"👌",punch:"👊",facepunch:"👊",fist:"✊",v:"✌",wave:"👋",hand:"✋",open_hands:"👐",point_up:"☝",
            point_down:"👇",point_right:"👉",point_left:"👈",raised_hands:"🙌",pray:"🙏",point_up_2:"👆",clap:"👏",muscle:"💪",walking:"🚶",runner:"🏃",running:"🏃",dancer:"💃",couple:"👫",family:"👪",two_men_holding_hands:"👬",two_women_holding_hands:"👭",couplekiss:"💏",couple_with_heart:"💑",dancers:"👯",ok_woman:"🙆",no_good:"🙅",information_desk_person:"💁",raised_hand:"🙋",massage:"💆",haircut:"💇",nail_care:"💅",bride_with_veil:"👰",person_with_pouting_face:"🙎",person_frowning:"🙍",bow:"🙇",tophat:"🎩",crown:"👑",womans_hat:"👒",athletic_shoe:"",shoe:"👞",mans_shoe:"👞",sandal:"👡",high_heel:"👠",boot:"👢",tshirt:"👕",shirt:"👕",necktie:"👔",womans_clothes:"👚",dress:"👗",running_shirt_with_sash:"🎽",jeans:"👖",kimono:"👘",bikini:"👙",briefcase:"💼",handbag:"👜",pouch:"👝",purse:"👛",eyeglasses:"👓",ribbon:"🎀",closed_umbrella:"🌂",lipstick:"💄",yellow_heart:"💛",blue_heart:"💙",purple_heart:"💜",green_heart:"💚",heart:"❤",broken_heart:"💔",heartpulse:"💗",heartbeat:"💓",two_hearts:"💕",sparkling_heart:"💖",revolving_hearts:"💞",cupid:"💘",love_letter:"💌",kiss:"💋",ring:"💍",gem:"💎",bust_in_silhouette:"👤",busts_in_silhouette:"👥",speech_balloon:"💬",footprints:"",thought_balloon:"💭",dog:"🐶",wolf:"🐺",cat:"🐱",mouse:"🐭",hamster:"🐹",rabbit:"🐰",frog:"🐸",tiger:"🐯",koala:"🐨",bear:"🐻",pig:"🐷",pig_nose:"🐽",cow:"🐮",boar:"🐗",monkey:"🐒",monkey_face:"🐵",horse:"🐴",sheep:"🐑",elephant:"🐘",panda_face:"🐼",penguin:"🐧",bird:"🐦",baby_chick:"🐤",hatched_chick:"🐥",hatching_chick:"🐣",chicken:"🐔",snake:"🐍",turtle:"🐢",bug:"🐛",honeybee:"🐝",bee:"",ant:"🐜",beetle:"🐞",snail:"🐌",octopus:"🐙",shell:"🐚",tropical_fish:"🐠",fish:"🐟",dolphin:"🐬",whale:"🐳",whale2:"🐋",cow2:"🐄",ram:"🐏",rat:"🐀",
            water_buffalo:"🐃",tiger2:"🐅",rabbit2:"🐇",dragon:"🐉",racehorse:"🐎",goat:"🐐",rooster:"🐓",dog2:"🐕",pig2:"🐖",mouse2:"🐁",ox:"🐂",dragon_face:"🐲",blowfish:"🐡",crocodile:"🐊",camel:"🐫",dromedary_camel:"🐪",leopard:"🐆",cat2:"🐈",poodle:"🐩",paw_prints:"🐾",bouquet:"💐",cherry_blossom:"🌸",tulip:"🌷",four_leaf_clover:"🍀",rose:"🌹",sunflower:"🌻",hibiscus:"🌺",maple_leaf:"🍁",leaves:"🍃",fallen_leaf:"🍂",herb:"🌿",ear_of_rice:"🌾",mushroom:"🍄",cactus:"🌵",palm_tree:"🌴",evergreen_tree:"🌲",deciduous_tree:"🌳",chestnut:"🌰",seedling:"🌱",blossom:"🌼",globe_with_meridians:"🌐",sun_with_face:"🌞",full_moon_with_face:"🌝",new_moon_with_face:"🌚",new_moon:"🌑",waxing_crescent_moon:"🌒",first_quarter_moon:"🌓",moon:"🌙",full_moon:"🌕",waning_gibbous_moon:"🌖",last_quarter_moon:"🌗",waning_crescent_moon:"🌘",last_quarter_moon_with_face:"🌜",first_quarter_moon_with_face:"🌛",crescent_moon:"",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",volcano:"🌋",milky_way:"🌌",stars:"🌃",star:"⭐",sunny:"☀",partly_sunny:"⛅",cloud:"☁",zap:"⚡",umbrella:"☔",snowflake:"❄",snowman:"⛄",cyclone:"🌀",foggy:"🌁",rainbow:"🌈",ocean:"🌊",eightball:"🎱",a:"🅰",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈",alarm_clock:"⏰",ambulance:"🚑",anchor:"⚓",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",clubs:"♣",cn:"🇨🇳",cocktail:"🍸",coffee:"☕",computer:"💻",confetti_ball:"🎊",hash:"#️⃣",headphones:"🎧",heart_decoration:"💟",hearts:"♥",heavy_check_mark:"✔",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_exclamation_mark:"",heavy_minus_sign:"➖",heavy_multiplication_x:"✖",notes:"🎶",nut_and_bolt:"🔩",o:"⭕",o2:"🅾",
            octocat:"",oden:"🍢",office:"🏢",ok:"🆗",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",one:"1️⃣",smoking:"🚬",snowboarder:"🏂",soccer:"⚽",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠",spaghetti:"🍝",sparkle:"",sparkler:"🎇",congratulations:"㊗",heavy_plus_sign:"➕",open_book:"",apple:"🍎",construction:"🚧",helicopter:"🚁",open_file_folder:"📂",speaker:"🔊",aquarius:"♒",aries:"♈",convenience_store:"🏪",speedboat:"🚤",arrow_backward:"◀",cookie:"🍪",high_brightness:"🔆",ophiuchus:"⛎",squirrel:"",arrow_double_down:"⏬",cool:"🆒",orange_book:"📙",arrow_double_up:"⏫",hocho:"🔪",outbox_tray:"📤",arrow_down:"⬇",copyright:"©",honey_pot:"🍯",arrow_down_small:"🔽",corn:"🌽",package:"",station:"🚉",arrow_forward:"▶",page_facing_up:"📄",statue_of_liberty:"🗽",arrow_heading_down:"⤵",page_with_curl:"📃",steam_locomotive:"🚂",arrow_heading_up:"⤴",hospital:"🏥",pager:"📟",stew:"🍲",arrow_left:"⬅",hotel:"🏨",straight_ruler:"📏",arrow_lower_left:"↙",hotsprings:"♨",strawberry:"🍓",arrow_lower_right:"↘",credit_card:"💳",hourglass:"⌛",paperclip:"📎",arrow_right:"➡",hourglass_flowing_sand:"⏳",parking:"🅿",arrow_right_hook:"↪",house:"🏠",part_alternation_mark:"〽",arrow_up:"⬆",crossed_flags:"🎌",house_with_garden:"🏡",arrow_up_down:"↕",hurtrealbad:"",passport_control:"🛂",arrow_up_small:"🔼",arrow_upper_left:"↖",ice_cream:"🍨",peach:"🍑",arrow_upper_right:"↗",crystal_ball:"🔮",icecream:"🍦",pear:"🍐",sunrise:"🌅",arrows_clockwise:"🔃",id:"🆔",pencil:"📝",sunrise_over_mountains:"🌄",arrows_counterclockwise:"🔄",curly_loop:"➰",ideograph_advantage:"🉐",pencil2:"✏",surfer:"🏄",art:"🎨",currency_exchange:"💱",sushi:"🍣",articulated_lorry:"🚛",curry:"🍛",
            inbox_tray:"📥",crab:"🦀",custard:"🍮",flan:"🍮",incoming_envelope:"📨",performing_arts:"🎭",suspension_railway:"🚟",customs:"🛃",atm:"🏧",information_source:"ℹ",b:"🅱",interrobang:"⁉",sweet_potato:"🍠",baby_bottle:"🍼",dango:"🍡",iphone:"📱",phone:"☎",swimmer:"🏊",dart:"🎯",it:"🇮🇹",symbols:"🔣",baby_symbol:"🚼",dash:"💨",izakaya_lantern:"",syringe:"💉",back:"",date:"📅",jack_o_lantern:"🎃",tada:"🎉",baggage_claim:"🛄",de:"🇩🇪",japan:"🗾",pill:"💊",tanabata_tree:"🎋",balloon:"🎈",japanese_castle:"🏯",pineapple:"🍍",tangerine:"🍊",ballot_box_with_check:"☑",department_store:"🏬",pisces:"♓",taurus:"♉",bamboo:"🎍",diamond_shape_with_a_dot_inside:"💠",japanese_ogre:"👹",pizza:"🍕",taxi:"🚕",banana:"🍌",diamonds:"♦",tea:"🍵",bangbang:"‼",telephone:"☎",bank:"🏦",telephone_receiver:"📞",bar_chart:"📊",jp:"🇯🇵",telescope:"🔭",barber:"💈",key:"🔑",tennis:"🎾",baseball:"⚾",do_not_litter:"🚯",keycap_ten:"🔟",police_car:"🚓",tent:"⛺",basketball:"🏀",bath:"🛀",three:"3️⃣",bathtub:"🛁",dollar:"💵",post_office:"🏣",battery:"🔋",dolls:"🎎",postal_horn:"📯",postbox:"📮",ticket:"🎫",door:"🚪",potable_water:"🚰",beer:"🍺",doughnut:"🍩",beers:"🍻",poultry_leg:"🍗",koko:"🈁",pound:"💷",tm:"™",beginner:"🔰",kr:"🇰🇷",toilet:"🚽",bell:"🔔",lantern:"",tokyo_tower:"🗼",bento:"🍱",large_blue_circle:"🔵",tomato:"🍅",bicyclist:"🚴",dvd:"📀",large_blue_diamond:"🔷",bike:"🚲",email:"📧",large_orange_diamond:"🔶",top:"🔝",pushpin:"📌",tractor:"🚜",birthday:"🎂",laughing:"😆",put_litter_in_its_place:"🚮",traffic_light:"🚥",black_circle:"⚫",question:"❓",train:"🚃",black_joker:"🃏",ledger:"📒",train2:"🚆",black_large_square:"",egg:"🍳",left_luggage:"🛅",tram:"🚊",black_medium_small_square:"",eggplant:"🍆",left_right_arrow:"↔",triangular_flag_on_post:"🚩",
            black_medium_square:"",eight:"8️⃣",leftwards_arrow_with_hook:"↩",radio:"📻",triangular_ruler:"📐",black_nib:"✒",eight_pointed_black_star:"✴",lemon:"🍋",radio_button:"🔘",trident:"🔱",black_small_square:"",eight_spoked_asterisk:"✳",leo:"♌",rage:"😡",black_square_button:"🔲",electric_plug:"🔌",rage1:"",trolleybus:"🚎",libra:"♎",rage2:"",email:"✉",light_rail:"🚈",rage3:"",trophy:"🏆",blue_book:"📘",end:"🔚",link:"🔗",rage4:"",tropical_drink:"🍹",blue_car:"🚙",envelope:"✉",railway_car:"🚃",envelope_with_arrow:"",truck:"🚚",es:"🇪🇸",lock:"🔒",trumpet:"🎺",euro:"💶",lock_with_ink_pen:"🔏",boat:"⛵",european_castle:"🏰",lollipop:"🍭",raising_hand:"",bomb:"💣",european_post_office:"🏤",loop:"➿",book:"",loudspeaker:"📢",ramen:"🍜",tv:"📺",bookmark:"🔖",exclamation:"❗",love_hotel:"🏩",twisted_rightwards_arrows:"🔀",bookmark_tabs:"📑",recycle:"♻",two:"2️⃣",books:"📚",low_brightness:"🔅",red_car:"🚗",m:"Ⓜ",red_circle:"🔴",mag:"🔍",registered:"®",factory:"🏭",mag_right:"🔎",u5272:"🈹",mahjong:"🀄",u5408:"🈴",bowling:"🎳",mailbox:"📫",repeat:"🔁",u55b6:"🈺",bowtie:"",fast_forward:"⏩",mailbox_closed:"📪",repeat_one:"🔂",u6307:"🈯",fax:"📠",mailbox_with_mail:"📬",restroom:"🚻",u6708:"🈷",bread:"🍞",mailbox_with_no_mail:"📭",u6709:"🈶",feelsgood:"",rewind:"⏪",u6e80:"🈵",bridge_at_night:"🌉",feet:"👣",u7121:"🈚",ferris_wheel:"🎡",rice:"🍚",u7533:"🈸",file_folder:"📁",rice_ball:"🍙",u7981:"🈲",finnadie:"",rice_cracker:"🍘",u7a7a:"🈳",bulb:"💡",rice_scene:"🎑",uk:"🇬🇧",bullettrain_front:"🚅",fire_engine:"🚒",bullettrain_side:"🚄",fireworks:"🎆",meat_on_bone:"🍖",rocket:"🚀",bus:"🚌",mega:"📣",roller_coaster:"🎢",underage:"🔞",busstop:"🚏",melon:"🍈",memo:"📝",unlock:"🔓",fish_cake:"🍥",mens:"🚹",rotating_light:"🚨",
            up:"🆙",fishing_pole_and_fish:"🎣",metal:"",round_pushpin:"📍",us:"🇺🇸",cake:"🍰",metro:"🚇",rowboat:"🚣",calendar:"📆",five:"5️⃣",microphone:"🎤",ru:"🇷🇺",vertical_traffic_light:"🚦",calling:"📲",flags:"🎏",microscope:"🔬",rugby_football:"🏉",vhs:"📼",flashlight:"🔦",vibration_mode:"📳",camera:"📷",floppy_disk:"💾",minibus:"🚐",video_camera:"📹",cancer:"♋",flower_playing_cards:"🎴",minidisc:"💽",video_game:"🎮",candy:"🍬",mobile_phone_off:"📴",sa:"🈂",violin:"🎻",capital_abcd:"🔠",money_with_wings:"💸",sagittarius:"♐",virgo:"♍",capricorn:"♑",football:"🏈",moneybag:"💰",sailboat:"⛵",car:"🚗",sake:"🍶",vs:"🆚",card_index:"📇",fork_and_knife:"🍴",carousel_horse:"🎠",fountain:"⛲",monorail:"🚝",santa:"🎅",four:"4️⃣",satellite:"📡",mortar_board:"🎓",warning:"⚠",cd:"💿",fr:"🇫🇷",mount_fuji:"🗻",saxophone:"🎷",watch:"⌚",chart:"💹",free:"🆓",mountain_bicyclist:"🚵",school:"🏫",chart_with_downwards_trend:"📉",fried_shrimp:"🍤",mountain_cableway:"🚠",school_satchel:"🎒",watermelon:"🍉",chart_with_upwards_trend:"📈",fries:"🍟",mountain_railway:"🚞",scissors:"✂",checkered_flag:"🏁",scorpius:"♏",wavy_dash:"〰",cherries:"🍒",fuelpump:"⛽",movie_camera:"🎥",waxing_gibbous_moon:"🌔",moyai:"🗿",scroll:"📜",wc:"🚾",seat:"💺",children_crossing:"🚸",game_die:"🎲",secret:"㊙",wedding:"💒",chocolate_bar:"🍫",gb:"🇬🇧",musical_keyboard:"🎹",musical_note:"🎵",church:"⛪",gemini:"♊",musical_score:"🎼",seven:"7️⃣",wheelchair:"♿",cinema:"🎦",ghost:"👻",mute:"🔇",shaved_ice:"🍧",white_check_mark:"✅",circus_tent:"🎪",gift:"🎁",white_circle:"⚪",city_sunrise:"🌇",gift_heart:"💝",name_badge:"📛",white_flower:"💮",city_sunset:"🌆",neckbeard:"",ship:"🚢",white_large_square:"",cl:"🆑",shipit:"",white_medium_small_square:"",
            negative_squared_cross_mark:"❎",thinking:"🤔",clapper:"🎬",goberserk:"",tag:"🏷️",clipboard:"📋",godmode:"",new:"🆕",white_square_button:"🔳",clock1:"🕐",golf:"⛳",shower:"🚿",wind_chime:"🎐",clock10:"🕙",grapes:"🍇",signal_strength:"📶",wine_glass:"🍷",clock1030:"🕥",green_apple:"🍏",newspaper:"📰",six:"6️⃣",clock11:"🕚",green_book:"📗",ng:"🆖",six_pointed_star:"🔯",clock1130:"🕦",nine:"9️⃣",ski:"🎿",clock12:"🕛",grey_exclamation:"❕",no_bell:"🔕",clock1230:"🕧",grey_question:"❔",no_bicycles:"🚳",clock130:"🕜",no_entry:"⛔",womens:"🚺",clock2:"🕑",no_entry_sign:"🚫",slot_machine:"🎰",clock230:"🕝",small_blue_diamond:"🔹",wrench:"🔧",clock3:"🕒",no_mobile_phones:"📵",small_orange_diamond:"🔸",x:"❌",clock330:"🕞",guitar:"🎸",small_red_triangle:"🔺",clock4:"🕓",gun:"🔫",no_pedestrians:"🚷",small_red_triangle_down:"🔻",yen:"💴",clock430:"🕟",no_smoking:"🚭",clock5:"🕔",hamburger:"🍔",nonpotable_water:"🚱",clock530:"🕠",hammer:"🔨",zero:"0️⃣",clock6:"🕕",notebook:"📓",clock630:"🕡",notebook_with_decorative_cover:"📔",horse_racing:"🏇",christmas_tree:"🎄"
        }
        const regExpression = /:([^\s]+):/g
        const emojiIt = (re, text) => {
            if (result = re.exec(text)) {
                var temptext = text;
                if((result[1] in emojiMap)) {
                    text = text.replace(result[0], emojiMap[result[1]]);
                }
                if(imageEmotes.indexOf(result[1]) > -1) {
                    text = text.replace(result[0], "`"+result[0].trim().replace(/:/g,"")+"`");
                }
            }
            return text
        }
        function Inputty() {
            document.querySelector('.md textarea').value = emojiIt(regExpression, document.querySelector('.md textarea').value );
        }
        try {
            document.querySelector('.md textarea').addEventListener('input', Inputty);
        }
        catch(err) {
            console.log("You probably don't have posting permissions on this page.");
        }
    }
})(Emojis || (Emojis = {}));

/////////////////////
// UnstrikeText.ts //
/////////////////////
var UnstrikeText;
(function (UnstrikeText) {
    // INITIALIZATION
    Elements.$body.attr('data-unstrikeText', false);
    // Options
    Options.addCheckbox({
        label: 'UNSTRIKE TEXT',
        "default": false,
        section: 'Advanced 2',
        help: 'Makes striken posts only strike the number rather than the accompanying text.',
        onchange: function () {
            Elements.$body.attr('data-unstrikeText', this.prop('checked'));
        }
    });
    Update.loadedNew(function (data) {
        if(Elements.$body.attr('data-unstrikeText') == 'false') {
            return;
        } else {
            var ustHtml = data.elem.find('.body > .md').html();
            var ustPost = data.elem.find('.body > .md').text();
            var ustNumber = parse_body(ustPost)[2];
            if(ustNumber == null) {ustNumber = ''};
            var ustComment = parse_body(ustPost)[1];
            if(ustNumber.length < 1) {return;}
            var replacedhtml = data.elem.find('.body > .md').html().replace(ustNumber,"<span class='countms'>"+ustNumber+"</span>");
            data.elem.find('.body > .md').html(replacedhtml);
        }
    });
    // Styles
    Styles.add("\n #lc-body[data-unstrikeText='true'] .stricken .countms{ text-decoration: line-through!important;} #lc-body[data-unstrikeText='true'] .liveupdate-listing li.liveupdate.stricken:not([data-fullname]) div.md {text-decoration: none!important; } #lc-body[data-unstrikeText='true'] .liveupdate-listing li.liveupdate.stricken:not([data-fullname]) div.md p {text-decoration: none!important; } \n");

})(UnstrikeText || (UnstrikeText = {}));

/////////////////////
// LatencyCheck.ts //
/////////////////////
var LatencyCheck;
(function (LatencyCheck) {
    // INITIALIZATION
    Elements.$body.attr('data-latencyCheck', false);
    $("<span id=latencymed class=latency>Median: <span id=latmed></span></span><span id=latency class=latency>Latency: <span id=lat></span></span>").insertAfter('.reddiquette');
    $('.latency').css({'display': 'none', 'font-size': 'smaller', 'float': 'right', 'margin-top': '5px', 'margin-left': '10px', 'background': 'transparent'});
    var latencyText = {};
    var lat50 = [];
    function calcMedian(ar1) {
        var half = Math.floor(ar1.length / 2);
        var temporary = ar1.slice(0).sort(function(a, b) { return a - b;});
        let lowMiddle = Math.floor( (temporary.length - 1) / 2);
        let highMiddle = Math.ceil( (temporary.length - 1) / 2);
        let median = ( temporary[lowMiddle] + temporary[highMiddle]) / 2;
        return Math.round(median);
    }
    // Options
    Options.addCheckbox({
        label: 'LATENCY CHECK',
        "default": false,
        section: 'Advanced 2',
        help: 'Latency Check. Median is last 50 posts.',
        onchange: function () {
            Elements.$body.attr('data-latencyCheck', this.prop('checked'));
            if(Elements.$body.attr('data-latencyCheck') == 'true') {
                $('.latency').css('display','initial');
                $("a[href$='/help/contentpolicy']").css('display','none');
                $('#new-update-form .save-button button').click(function(){
                    var d = new Date();
                    latencyText[document.querySelector('.md textarea').value.trim()] = d.getTime();
                });
            }
            if(Elements.$body.attr('data-latencyCheck') == 'false') {
                $('.latency').css('display','none');
                $("a[href$='/help/contentpolicy']").css('display','initial');
            }
        }
    });
    Update.loadedNew(function (data) {
        if(Elements.$body.attr('data-latencyCheck') == 'false') {
            return;
        } else {
            var latPost = data.elem.find('.body > .md').text().trim();
            var author = data.author_elem.attr('href').substring(6);
            if(author == USER) {
                if(latPost in latencyText) {
                    var e = new Date();
                    var latency = e.getTime() - latencyText[latPost];
                    $('#lat').text(latency+'ms');
                    if(lat50.length > 49) {
                        lat50.shift();
                    }
                    lat50.push(latency);
                    var latmedian = calcMedian(lat50);
                    $('#latmed').text(latmedian+'ms');
                }
            }
        }
    });
    if(Elements.$body.attr('data-latencyCheck') == 'true') {
        $('.latency').css('display','initial');
        $('#lat').css('display','initial');
        $('#latmed').css('display','initial');
        $("a[href$='/help/contentpolicy']").css('display','none');
    }
})(LatencyCheck || (LatencyCheck = {}));

////////////////////////
// TextboxPosition.ts //
////////////////////////

var TextboxPosition;
(function (TextboxPosition) {
    // INITIALIZATION
    $('.usertext-edit textarea').attr('data-TextboxPosition', 'Default');
    // Options
    Options.addSelect({
        label: 'TEXTBOX POSITION',
        options: ['Default', 'Lower'],
        section: 'Advanced',
        "default": 0,
        help: 'Adjusts the position of the text in the textbox. this SUCKS!',
        onchange: function () {
            $('.usertext-edit textarea').attr('data-TextboxPosition', this.val());
        }
    });
    // Styles
    Styles.add("\n\n\t.usertext-edit textarea[data-TextboxPosition='Lower'] {padding-top: 76px;}\n\n\t");
})(TextboxPosition || (TextboxPosition = {}));

//////////////////////
// RateLimitView.ts //
//////////////////////
var RateLimitView;
(function (RateLimitView) {
    // INITIALIZATION
    Elements.$body.attr('data-RateLimitView', 'Disabled');
    $("<span id=ratelim class=ratelimit>RL: <span id=rate></span><span id=ratedelta></span></span>").insertBefore('.CANT_REPLY');
    $('.ratelimit').css({'display': 'none', 'font-size': 'smaller', 'float': 'right', 'margin-top': '5px', 'margin-left': '10px', 'background': 'transparent'});
    var oldtime = new Date();
    var newtime = new Date();
    var oldtimea = new Date();
    var newtimea = new Date();
    var egregious_dumbassery = 0;
    var egregious_dumbassery_2 = 0;
    var ratecolor = "";
    var ratetext = "";
    // Options
    Options.addSelect({
        label: 'RATE LIMIT VIEW',
        section: 'Advanced 2',
        options: ['Disabled', 'Normal', 'Delta'],
        "default": 0,
        help: 'Rate limit viewer by post. Not real, just estimate lol',
        onchange: function () {
            Elements.$body.attr('data-RateLimitView', this.val());
            if(Elements.$body.attr('data-RateLimitView') == 'Normal') {
                egregious_dumbassery++;
                $('.ratelimit').css('display','initial');
                $('#ratedelta').css('display','none');
                $('#rate').css('display','initial');
                $(".help-toggle").css('display','none');
                if(egregious_dumbassery > 1)
                    return;
                $('#new-update-form .save-button button').click(function(){
                    oldtime = newtime
                    newtime = new Date();
                    ratetext = "#000";
                    if(newtime - oldtime - 333 < 0) {
                        ratecolor = '#f2ee0e';
                    } else if(newtime - oldtime - 333 < 20) {
                        ratecolor = '#ef7070';
                    } else if(newtime - oldtime - 333 < 40) {
                        ratecolor = '#ffaeae';
                    } else if(newtime - oldtime - 333 < 60) {
                        ratecolor = '#ffebba';
                    } else if(newtime - oldtime - 333 < 80) {
                        ratecolor = '#cfffba';
                    } else if(newtime - oldtime - 333 < 100) {
                        ratecolor = '#a2e8af';
                    } else if(newtime - oldtime - 333 < 120) {
                        ratecolor = '#adffed';
                    } else {
                        ratecolor = 'transparent';
                        ratetext = "";
                    }
                    $('#rate').text(newtime - oldtime + "ms");
                    $('.bottom-area').css('background',ratecolor);
                    $('.bottom-area').css('color',ratetext);
                });
            }
            if(Elements.$body.attr('data-RateLimitView') == 'Delta') {
                egregious_dumbassery_2++;
                $('.ratelimit').css('display','initial');
                $('#ratedelta').css('display','initial');
                $('#rate').css('display','none');
                $(".help-toggle").css('display','none');
                if(egregious_dumbassery_2 > 1)
                    return;
                $('#new-update-form .save-button button').click(function(){
                    oldtimea = newtimea
                    newtimea = new Date();
                    ratetext = "#000";
                    if(newtimea - oldtimea - 333 < 0) {
                        ratecolor = '#f2ee0e';
                    } else if(newtimea - oldtimea - 333 < 20) {
                        ratecolor = '#ef7070';
                    } else if(newtimea - oldtimea - 333 < 40) {
                        ratecolor = '#ffaeae';
                    } else if(newtimea - oldtimea - 333 < 60) {
                        ratecolor = '#ffebba';
                    } else if(newtimea - oldtimea - 333 < 80) {
                        ratecolor = '#cfffba';
                    } else if(newtimea - oldtimea - 333 < 100) {
                        ratecolor = '#a2e8af';
                    } else if(newtimea - oldtimea - 333 < 120) {
                        ratecolor = '#adffed';
                    } else {
                        ratecolor = 'transparent';
                        ratetext = "";
                    }
                    $('#ratedelta').text(newtimea - oldtimea - 333 + "ms");
                    $('.bottom-area').css('background',ratecolor);
                    $('.bottom-area').css('color',ratetext);
                });
            }
            if(Elements.$body.attr('data-RateLimitView') == 'Disabled') {
                $('.ratelimit').css('display','none');
                $(".help-toggle").css('display','initial');
            }
        }
    });
})(RateLimitView || (RateLimitView = {}));


////////////////////
// ImageEmotes.ts //
////////////////////
var ImageEmotes;
var emoteCount = 0;
var stringy = '';
(function (ImageEmotes) {
    // INITIALIZATION
    Elements.$body.attr('data-ImageEmotes', false);
    var emoteimages = {};
    var emotefunccheck = 0;
    var the_emote = "";
    // Options
    Options.addCheckbox({
        label: 'IMAGE EMOTES',
        "default": false,
        section: 'Advanced 2',
        help: 'Enables image emotes. Requires refresh probably',
        onchange: function () {
            Elements.$body.attr('data-ImageEmotes', this.prop('checked'));
            if(Elements.$body.attr('data-ImageEmotes') == 'true') {
                emotes_load();
            }
        }
    });

    function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
                if(Object.keys(emoteimages).length == imageEmotes.length) {
                    if(Elements.$body.attr('data-ImageEmotes') == 'true') {
        $('code').each(function() {
            var thistext = $(this).text();
            if(imageEmotes.indexOf(thistext.toLowerCase()) > -1) {
                var this_new_html = "<img title="+thistext+" style='height:26px;vertical-align:top;' src="+emoteimages['<code>'+thistext.toLowerCase()+'</code>']+"></img>";
                $(this).replaceWith(this_new_html);
            }
        });
        }
        Update.loadedOld(function () {
            if(Elements.$body.attr('data-ImageEmotes') == 'true') {
            var emotes_post = data.body_elem.html();
                var emotes_text = data.body_elem.text();
                the_emote = emotes_post.match(/<code>(.*?)<\/code>/gm);
                for(var emote in the_emote) {
                    if(the_emote[emote].toLowerCase() in emoteimages) {
                        var emotename = the_emote[emote];
                        emotename = emotename.replace('<code>','').replace('</code>','');
                        emotes_post = emotes_post.replace(the_emote[emote], "<img title="+emotename+" style='height:26px;vertical-align:top;' src="+emoteimages[the_emote[emote].toLowerCase()]+"></img>");
                    }
                }
                data.body_elem.html(emotes_post);
            }
        });
                }
                if(Object.keys(emoteimages).length == imageEmotes.length && Elements.$body.attr('data-ImageEmotePicker') == 'true') {
                    var sorted = Object.keys(emoteimages).sort().reduce(function (acc, key) {
        acc[key] = emoteimages[key];
        return acc;
    }, {});
                                                for(var i=0;i < Object.keys(sorted).length;i++) {
  stringy = stringy.concat('<img src="'+sorted[Object.keys(sorted)[i]]+'" class="img img-responsive emoji-btn" id="'+Object.keys(sorted)[i].replace('<code>','').replace('</code>','')+'" style="height:26px;vertical-align:top;">');
}
    $('.bottom-area').append('<script>function myFunction() {var x = document.querySelectorAll(".emoji-picker")[0];if (x.style.display == "block") {$("#emotespicker").text(" Emotes [+]"); x.style.display = "none";} else {$("#emotespicker").text(" Emotes [-]");x.style.display = "block";}}</script>');
                    $(`.error`).wrap(`<span class="muherror"></span>`);
                    Styles.add(`.muherror {display:block;text-align: right;width: 480px;position: absolute;} .NO_TEXT{margin-left: -230px;margin-top: 20px;}`);
    $('.usertext-buttons').before('<span id="emotespicker" onclick="myFunction()" style="font-size:smaller;float: right; margin-top: 5px;cursor:pointer;"> Emotes [+]</span>')
    $('<div style="display: none;max-width:480px;" class="emoji-picker"></div>').insertAfter('.save-button .btn');
    $('.emoji-picker').append(stringy);
                       $('.emoji-btn').click(function() {
        document.querySelector('textarea').value = document.querySelector('textarea').value + "`"+this.id+"`";
        document.querySelector('textarea').focus();
    });
                }
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
        emoteCount++;
    }
    function emotes_load() {
        emotefunccheck++;
        if(emotefunccheck > 1)
            return;
        toDataURL('https://cdn.frankerfacez.com/emoticon/210748/1', function(dataUrl) {
            emoteimages['<code>pog</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/Q5MeKh3.png', function(dataUrl) {
            emoteimages['<code>god</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/9DMJWrS.png', function(dataUrl) {
            emoteimages['<code>monkas</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/cRiGdb9.png', function(dataUrl) {
            emoteimages['<code>omegalul</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/NdcmxXi.png', function(dataUrl) {
            emoteimages['<code>stonks</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/lAkxroK.png', function(dataUrl) {
            emoteimages['<code>notstonks</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/nivf93z.png', function(dataUrl) {
            emoteimages['<code>thonk</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/PM2ExKS.png', function(dataUrl) {
            emoteimages['<code>jesus</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/lyazIO3.png', function(dataUrl) {
            emoteimages['<code>isagod</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/hqemSbF.png', function(dataUrl) {
            emoteimages['<code>pensiveloaf</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/m2DVbIn.png', function(dataUrl) {
            emoteimages['<code>cuteballgames</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/5pRiH59.png', function(dataUrl) {
            emoteimages['<code>habubger</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/lfKGTik.png', function(dataUrl) {
            emoteimages['<code>angery</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/b2dbpI7.png', function(dataUrl) {
            emoteimages['<code>dad</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/8nEZcC5.png', function(dataUrl) {
            emoteimages['<code>sadge</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/nsQOa63.gif', function(dataUrl) {
            emoteimages['<code>feelslagman</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/nZVYFFr.gif', function(dataUrl) {
            emoteimages['<code>catjam</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/PxwMgsk.gif', function(dataUrl) {
            emoteimages['<code>peped</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/ijKqqHa.gif', function(dataUrl) {
            emoteimages['<code>fortnitecard</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/Wj1pxHY.png', function(dataUrl) {
            emoteimages['<code>squidab</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/pvkuV6V.png', function(dataUrl) {
            emoteimages['<code>dab</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/j7JMdUI.png', function(dataUrl) {
            emoteimages['<code>lool</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/2Xpecxt.png', function(dataUrl) {
            emoteimages['<code>karp</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/YDNriLs.gif', function(dataUrl) {
            emoteimages['<code>pants</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/t3WIdOs.jpg', function(dataUrl) {
            emoteimages['<code>oooh</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/Ou8bqZz.png', function(dataUrl) {
            emoteimages['<code>twitter</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/0pTsciz.png', function(dataUrl) {
            emoteimages['<code>harold</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/bq5Y3Ik.png', function(dataUrl) {
            emoteimages['<code>david</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/GtSEKSA.png', function(dataUrl) {
            emoteimages['<code>taking</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/nyMBdj0.gif', function(dataUrl) {
            emoteimages['<code>baller</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/B8C4ooW.png', function(dataUrl) {
            emoteimages['<code>asa</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/ddmEh3J.png', function(dataUrl) {
            emoteimages['<code>chu</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/r2ysQSj.png', function(dataUrl) {
            emoteimages['<code>respite</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/H8fyjWw.png', function(dataUrl) {
            emoteimages['<code>sink</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/YFYEpAV.png', function(dataUrl) {
            emoteimages['<code>gold</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/Gj363IU.png', function(dataUrl) {
            emoteimages['<code>trollface</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/X42KsOb.png', function(dataUrl) {
            emoteimages['<code>kshart</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/3fr9M0n.png', function(dataUrl) {
            emoteimages['<code>widepeepohappy</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/qoNYaHj.png', function(dataUrl) {
            emoteimages['<code>widepeeposad</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/PdlFz24.png', function(dataUrl) {
            emoteimages['<code>5head</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/QPhZRMm.png', function(dataUrl) {
            emoteimages['<code>pepog</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/iCt7LEW.png', function(dataUrl) {
            emoteimages['<code>poggies</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/6G7CKqJ.png', function(dataUrl) {
            emoteimages['<code>maybelegend</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/cGeuJpL.png', function(dataUrl) {
            emoteimages['<code>chupixel</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/VWh5qJc.png', function(dataUrl) {
            emoteimages['<code>vulpez</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/AYhoI48.png', function(dataUrl) {
            emoteimages['<code>sspixel</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/1MhfdJK.png', function(dataUrl) {
            emoteimages['<code>wtfdb</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/AN0pJBv.png', function(dataUrl) {
            emoteimages['<code>notlike</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/oXKv3jo.png', function(dataUrl) {
            emoteimages['<code>talk2hand</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/MkMaG2g.png', function(dataUrl) {
            emoteimages['<code>rivergod</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/PQn8Kyd.png', function(dataUrl) {
            emoteimages['<code>whitpixel</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/h9C2kA8.png', function(dataUrl) {
            emoteimages['<code>hmm</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/Ar2kwD3.gif', function(dataUrl) {
            emoteimages['<code>mario_luigi_dance</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/XVzyN4r.gif', function(dataUrl) {
            emoteimages['<code>typefaster</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/EOp5edi.png', function(dataUrl) {
            emoteimages['<code>lona_dont</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/9XgmFLB.png', function(dataUrl) {
            emoteimages['<code>mersenne</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/KgjFXN2.png', function(dataUrl) {
            emoteimages['<code>daemote</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/kc7PIRu.gif', function(dataUrl) {
            emoteimages['<code>happiness</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/tpNMYMn.gif', function(dataUrl) {
            emoteimages['<code>facepalm</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/tck38bm.gif', function(dataUrl) {
            emoteimages['<code>rick</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/d1WX4wa.gif', function(dataUrl) {
            emoteimages['<code>byepika</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/tFo3RDF.gif', function(dataUrl) {
            emoteimages['<code>itsok</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/lIhn2jQ.gif', function(dataUrl) {
            emoteimages['<code>thisisfine</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/w7AxAaY.gif', function(dataUrl) {
            emoteimages['<code>uhdunno</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/SdrEJxi.gif', function(dataUrl) {
            emoteimages['<code>toocool</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/eKvKaSh.gif', function(dataUrl) {
            emoteimages['<code>letsgo</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/YaRoHKs.gif', function(dataUrl) {
            emoteimages['<code>woohoo</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/EcHB23J.gif', function(dataUrl) {
            emoteimages['<code>bonk</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/yIzUyLY.gif', function(dataUrl) {
            emoteimages['<code>eyeroll</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/LYMjUFG.gif', function(dataUrl) {
            emoteimages['<code>anicake</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/DzorFPT.gif', function(dataUrl) {
            emoteimages['<code>watching</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/2v84XUV.png', function(dataUrl) {
            emoteimages['<code>wtfdidyousay</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/VIgstwm.gif', function(dataUrl) {
            emoteimages['<code>letmeout</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/abXyvkn.gif', function(dataUrl) {
            emoteimages['<code>wtfbeek</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/jyHNUsl.png', function(dataUrl) {
            emoteimages['<code>yikes</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/7BEIsXJ.gif', function(dataUrl) {
            emoteimages['<code>wheredanat</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/GU7Iz4X.png', function(dataUrl) {
            emoteimages['<code>ffff</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/pwPWT4N.png', function(dataUrl) {
            emoteimages['<code>gotosleep</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/SrfFgpz.png', function(dataUrl) {
            emoteimages['<code>shake</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/nTSxFGt.png', function(dataUrl) {
            emoteimages['<code>brohug</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/oxWcf3e.png', function(dataUrl) {
            emoteimages['<code>fthis</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/wqEOmyc.png', function(dataUrl) {
            emoteimages['<code>earth</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/WMR7Uwq.gif', function(dataUrl) {
            emoteimages['<code>chudance</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/HVf2M9j.gif', function(dataUrl) {
            emoteimages['<code>spideydance</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/VFxjXSl.png', function(dataUrl) {
            emoteimages['<code>cube</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/CuoMlVM.png', function(dataUrl) {
            emoteimages['<code>gildthis</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/pQcgaQX.gif', function(dataUrl) {
            emoteimages['<code>boom</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/BlkDC5c.png', function(dataUrl) {
            emoteimages['<code>oof</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/jQJk1Kv.gif', function(dataUrl) {
            emoteimages['<code>emergency</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/64JkvEm.png', function(dataUrl) {
            emoteimages['<code>weeee</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/UOuLbBV.png', function(dataUrl) {
            emoteimages['<code>boom2</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/FqTrDtK.png', function(dataUrl) {
            emoteimages['<code>snipe</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/WNb50Nm.png', function(dataUrl) {
            emoteimages['<code>d20</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/EY5CUlu.png', function(dataUrl) {
            emoteimages['<code>porg</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/J7fzDTG.png', function(dataUrl) {
            emoteimages['<code>slime</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/NyxERLp.png', function(dataUrl) {
            emoteimages['<code>jebaited</code>'] = dataUrl;
        })
        toDataURL('https://i.imgur.com/wiHrESi.gif', function(dataUrl) {
            emoteimages['<code>pepemeltdown</code>'] = dataUrl;
        })

        Update.loadedNew(function (data) {
            if(Elements.$body.attr('data-ImageEmotes') == 'true') {
                var emotes_post = data.body_elem.html();
                var emotes_text = data.body_elem.text();
                the_emote = emotes_post.match(/<code>(.*?)<\/code>/gm);
                for(var emote in the_emote) {
                    if(the_emote[emote].toLowerCase() in emoteimages) {
                        var emotename = the_emote[emote];
                        emotename = emotename.replace('<code>','').replace('</code>','');
                        emotes_post = emotes_post.replace(the_emote[emote], "<img title="+emotename+" style='height:26px;vertical-align:top;' src="+emoteimages[the_emote[emote].toLowerCase()]+"></img>");
                    }
                }
                data.body_elem.html(emotes_post);
            }
        });
    }

    if(Elements.$body.attr('data-ImageEmotes') == 'true') {
        emotes_load();
    }

})(ImageEmotes || (ImageEmotes = {}));
/////////////////////////
// ImageEmotePicker.ts //
/////////////////////////
var ImageEmotePicker;
(function (ImageEmotePicker) {
    // Options
    Elements.$body.attr('data-ImageEmotePicker', false);
    Options.addCheckbox({
        label: 'Image Emote Picker',
        "default": false,
        section: 'Advanced 2',
        help: 'Adds a selector for image emotes. Makes the page laggier so does not work well if RSL is set to "Enabled" but works okay for me if on No Clear.',
        onchange: function () {
            Elements.$body.attr('data-ImageEmotePicker', this.prop('checked'));
        }
    });
})(ImageEmotePicker || (ImageEmotePicker = {}));

/////////////////////
// KpartAlert.ts //
/////////////////////
var KpartAlert;
(function (KpartAlert) {
    // INITIALIZATION
    Elements.$body.attr('data-KpartAlert', false);
    // Options
    Options.addCheckbox({
        label: 'KPART ALERT',
        "default": false,
        section: 'Advanced 2',
        help: 'Sends a notification when a new K is reached. Last count must be on for this to work.',
        onchange: function () {
            Elements.$body.attr('data-KpartAlert', this.prop('checked'));
        }
    });
})(KpartAlert || (KpartAlert = {}));

// Test thread special feature
if(window.location.href.indexOf("15jj2286nsulu") > -1) {
    $("#liveupdate-description").append("<p style='background:#e2ffdb;font-size:16px;' id=fakerunner>Hi am fake runner. This feature SUCKS but maybe it could be useful to someone some day. Reply times may be slightly inaccurate but I really tried lol. Increment:<input id='fakeruntime'></input> <button id='this_sucks'>Press to run.</button><button id='fuck_it'>Click to stop.</button><button id='sink'>Sync time</button>Sync in ms:<input id='sinker'></input><button id='hide_a_mf'>Hide</button></p>");

var fake_count = 10000000;
    var fake_lol = 0;
    var fake_count_2 = 0;
    var fake_count_author = '';
    var strikechecky = '';
    var sinky = 0;
//var post1 = setInterval(function(){
function poster(){
    //fake_lol++;
    try{
        fake_count_2 = $('#lastcountcount').text();
        fake_count_author = $('#lastcountuser').text();
                    //fake_count = $('#lastcountcount').text();
            //fake_count = parseFloat(fake_count.replace(/,/g, ''));
                fake_count_2 = fake_count_2.replace(/[A-Za-z]/g, '');
    fake_count_2 = fake_count_2.replace(/,/g, '');
    fake_count_2 = fake_count_2.replace(/ /g, '');
fake_count_2 = fake_count_2.replace(/\./g, '');
            fake_count_2 = parseFloat(fake_count_2);
        //if(fake_lol % 2 == 0) {
        if(fake_count_author != 'Riverbot') {
            fake_count = fake_count_2 + 1;
            strikechecky = '';
        } else {
            fake_count = fake_count_2 + 2;
            strikechecky = ' stricken';
        }
        //} else {
        //            if(fake_count_author != 'Graphite_bot') {
       //     fake_count = fake_count_2 + 1;
       // } else {
       //     fake_count = fake_count_2 + 2;
      //  }
      // }
    }
    catch(err) {
        fake_count = 10000000;
    }
    fake_count = fake_count.toLocaleString();
var time_fake = new Date();
    var time_lake = time_fake.toISOString();
    time_fake = time_fake.getTime();
    //var d = '2040-01-03T00:00:00.500Z';
    var d = '2040-01-03T00:00:00.500Z';
    //d = new Date(d).valueOf();
    d = new Date(d).valueOf();
    d += sinky;
    time_fake = time_fake + d;
    time_fake = time_fake / 1000;
    time_fake = time_fake + 10010131200;
    time_fake = time_fake * 10**7;
    time_fake = time_fake.toString(16);
    var t1 = time_fake.substring(0,3);
    var t2 = time_fake.substring(3,7);
    var t3 = time_fake.substring(7,15);
//if(fake_lol % 2 == 0) {
    $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate`+strikechecky+`"><a href="/live/ta535s1hq2je/updates/`+t3+`-`+t2+`-1`+t1+`-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="`+time_lake+`" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>`+fake_count+`</p></div><a href="/user/Riverbot" class="author" style="color: black;"> /u/Riverbot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
//} else {
  //  $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/`+t3+`-`+t2+`-1`+t1+`-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>`+fake_count+`</p></div><a href="/user/Graphite_bot" class="author" style="color: black;"> /u/Graphite_bot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
//}
    //    $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10000000</p></div><a href="/user/Riverbot" class="author" style="color: black;"> /u/Riverbot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			//},increment_timey);
}
        $( "#this_sucks" ).click(function() {
        var increment_timey = $('#fakeruntime').val();
                sinky = parseFloat($('#sinker').val()) * -1;
            if(isNaN(sinky)) {sinky = 0;}
        if(isNaN(increment_timey)) {increment_timey = 1000;}
        var post1 = setInterval(poster, increment_timey);
                    $( "#fuck_it" ).click(function() {
            clearInterval(post1);
                });
            $( "#hide_a_mf" ).click(function() {
            clearInterval(post1);
                $("#fakerunner").css('display','none');
                });
    });

    var synccheck = 0;
                $( "#sink" ).click(function() {
                    synccheck = 1;
                });
    //            $( "#sink" ).click(function() {
        Update.loadedNew(function (data) {
            if(data.author_elem.text() != ' /u/Riverbot' && synccheck == 1) {
                synccheck = 0;
                sinky = parseFloat($('#sinker').val()) * -1;
                if(isNaN(sinky)) {sinky = 0;}
var time_fake = new Date();
    var time_lake = time_fake.toISOString();
    time_fake = time_fake.getTime();
    var d = '2040-01-03T00:00:00.500Z';
    d = new Date(d).valueOf();
    d += sinky;
    time_fake = time_fake + d;
    time_fake = time_fake / 1000;
    time_fake = time_fake + 10010131200;
    time_fake = time_fake * 10**7;
    time_fake = time_fake.toString(16);
    var t1 = time_fake.substring(0,3);
    var t2 = time_fake.substring(3,7);
    var t3 = time_fake.substring(7,15);
    $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/`+t3+`-`+t2+`-1`+t1+`-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="`+time_lake+`" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Check the timestamp on this post. Put it in the 2nd input box (or if you already put something there, add the current timestamp to it). Then try running? Hopefully this works. lol</p></div><a href="/user/Riverbot" class="author" style="color: black;"> /u/Riverbot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
            }
            });
       //         });

           $( "#hide_a_mf" ).click(function() {
              $("#fakerunner").css('display','none');
                });
}
// End test thread special feature

////////////////////
// RESDarkMode.ts //
////////////////////
var RESDarkMode;
(function (RESDarkMode) {
    // Options
    Elements.$body.attr('data-RESDarkMode', false);
    var resTest = 0;
    function resAdda() {
        resTest = 1;
        Styles.add(`.res-nightmode #fakerunner {color:black;} .res-nightmode #liveupdate-resources h5 {color: #ccc;} .res-nightmode #liveupdate-resources h3 {color: #ccc;} .res-nightmode #dailyenabler2 {color: #ccc;} .res-nightmode #dailyenabler {color: #ccc;} .res-nightmode .toggle-trigger {color: #ccc;} .res-nightmode #live-counting-extension h2 {color: #ccc;} .res-nightmode #liveupdate-options {color:#ccc;} body.res-nightmode {background-color: #262626!important} html.res-nightmode, .res-nightmode body, .res-nightmode body .content, .res-nightmode .modal-body, .res-nightmode .side, .res-nightmode .icon-menu a, .res-nightmode .side .leavemoderator, .res-nightmode .side .leavecontributor-button, .res-nightmode .side .titlebox, .res-nightmode .side .spacer .titlebox .redditname, .res-nightmode .side .titlebox .flairtoggle, .res-nightmode .side .usertext-body .md ol, .res-nightmode .side .usertext-body .md ol ol, .res-nightmode .side .usertext-body .md ol ol li, .res-nightmode .modactionlisting table *, .res-nightmode .side .recommend-box .rec-item, .res-nightmode .crosspost-preview, .res-nightmode .crosspost-thing-preview, .res-nightmode .admin_takedown, .res-nightmode .happening-now {   background-color: #262626!important;   border-color: #777!important; } .res-nightmode .embedded-page .content > .sitetable, .res-nightmode .embedded-page.helpcenter-page .content, .res-nightmode .embedded-page.compose-page .content, .res-nightmode .embedded-page .content > .sitetable > div:nth-of-type(4n+1), .res-nightmode .embedded-page.helpcenter-page .content > div:nth-of-type(4n+1), .res-nightmode .embedded-page.compose-page .content > div:nth-of-type(4n+1) {   background-color: #262626;   color: #aaa; } .res-nightmode .link, .res-nightmode .helpcenter-form .section-content {   background-color: #262626; } .res-nightmode .helpcenter-form .helpcenter-bottom-panel .helpcenter-content-policy p {   color: #aaa; } .res-nightmode .popup, .res-nightmode .guider, .res-nightmode .guider p {   background-color: #262626;   color: #aaa; } .res-nightmode #login_login {   background-color: #333;   color: #bbb; } .res-nightmode .RESCloseButton::after, .res-nightmode .message.new > .entry, .res-nightmode .read-next, .res-nightmode .drop-choices {   border-color: #4d4d4d;   background-color: #333; } .res-nightmode .drop-choices {   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3); } .res-nightmode .read-next .read-next-header, .res-nightmode .flairselector h2, .res-nightmode .flairselector li:hover {   border-color: transparent;   background-color: #3e3e3e; } .res-nightmode .flairselector li.selected, .res-nightmode .RESNotification {   border-color: #787878; } .res-nightmode .RESCloseButton:hover::after {   background-color: #333; } .res-nightmode #RESHoverContainer::after {   border-color: transparent #262626; } .res-nightmode.liveupdate-app .content {   background-color: #161616; } .res-nightmode .entry .morecomments .gray, .res-nightmode .markdownEditor .RESCharCounter {   color: rgba(221, 221, 221, 0.8); } .res-nightmode #BigEditor .markdownEditor .RESMacroDropdownList li:hover a {   color: #bbb; } .res-nightmode .trophy-info .trophy-name {   color: #eee !important; } .res-nightmode .sidecontentbox .content {   border-color: rgba(234, 234, 234, 0.1); } .res-nightmode .RESUserTagImage::after {   color: #758ea8; } .res-nightmode #DonateRES {   background: #ccc; } .res-nightmode #progressIndicator, .res-nightmode .hover-bubble, .res-nightmode .side .side-message, .res-nightmode #editShortcutDialog, .res-nightmode #RESShortcutsAddFormContainer {   color: #ddd;   border-color: #4d4d4d;   background-color: #333; } .res-nightmode .login-form-side {   background-color: #888;   color: #eee; } .res-nightmode .login-form-side .error {   color: #cd5a5a; } .res-nightmode #header, .res-nightmode .liveupdate-home .content {   background-color: dimgrey; } .res-nightmode #jumpToContent {   color: #ddd;   border: 1px solid;   padding: 0 2px; } .res-nightmode #sr-header-area, .res-nightmode #sr-more-link {   background-color: #ccc;   color: #000; } .res-nightmode .usertable tr .user .userkarma {   color: #aa9; } .res-nightmode .thing.spam {   background-color: #3d2929; } .res-nightmode .content .pretty-form * {   box-shadow: none; } .res-nightmode .RESDashboardComponentContainer {   padding: 0; } .res-nightmode .RESDashboardComponentContainer .linklisting {   padding: 5px; } .res-nightmode .new-comment .usertext-body {   border-color: #242b3f;   background-color: #1a2135; } .res-nightmode .RESDropdownList.RESMacroDropdownList a:hover, .res-nightmode .RESDropdownList.RESMacroDropdownList li:hover {   background-color: #777;   color: #aaa; } .res-nightmode .wiki-page .pageactions .wikiaction-current {   background-color: #777; } .res-nightmode .contact-us-page .button {   background: #777;   color: #ddd; } .res-nightmode .contact-us-page .button:hover {   background: #666; } .res-nightmode .message .subject .correspondent {   background: #212f46;   color: #1496dc; } .res-nightmode .moderator .linefield {   background: #1a1a1a; } .res-nightmode .wiki-page .wiki-page-content .md.wiki > .toc ul, .res-nightmode .tabmenu li a, .res-nightmode .tabmenu li.selected a, .res-nightmode #report form {   background-color: #262626; } .res-nightmode .tabmenu li.selected a {   color: #d25a32;   border-bottom-color: #262626; } .res-nightmode .tabmenu.formtab a {   color: white;   border-color: #505050; } .res-nightmode .tabmenu.formtab .selected a {   color: white;   background-color: #5f99cf; } .res-nightmode #RESDashboardAddComponent, .res-nightmode .dashboardPane > .RESDashboardComponent {   background-color: gray; } .res-nightmode #RESDashboard .RESDashboardComponentHeader {   background-color: #848484; } .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul li.active, .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul li:hover {   background-color: #ccc; } .res-nightmode .side .titlebox form.flairtoggle, .res-nightmode .trophy-area .content, .res-nightmode .side .md ol, .res-nightmode .side .md ul {   background-color: #262626;   color: #ddd; } .res-nightmode .organic-listing {   border-color: #505050;   background-color: transparent !important; } .res-nightmode .organic-listing .nextprev {   opacity: 0.5; } .res-nightmode .organic-listing .link, .res-nightmode .link.promotedlink {   background-color: transparent;   border-color: #505050; } .res-nightmode .arrow.up, .res-nightmode .arrow.upmod, .res-nightmode .arrow.down, .res-nightmode .arrow.downmod {   background-image: url('../images/nightmode/arrows.png');   background-repeat: no-repeat; } .res-nightmode .arrow.up {   background-position: -15px 0; } .res-nightmode .arrow.up:hover {   background-position: -30px 0; } .res-nightmode .arrow.upmod {   background-position: 0 0; } .res-nightmode .arrow.down {   background-position: -15px -14px; } .res-nightmode .arrow.down:hover {   background-position: -30px -14px; } .res-nightmode .arrow.downmod {   background-position: 0 -14px; } .res-nightmode .subredditbox li {   font-weight: 700;   text-transform: lowercase; } .res-nightmode .subredditbox li a::before {   content: '#'; } .res-nightmode .dropdown.lightdrop a.choice:hover {   background-color: #1a1a1a; } .res-nightmode .sidebox, .res-nightmode .subreddit-info, .res-nightmode .raisedbox, .res-nightmode .login-form-side, .res-nightmode .interstitial-subreddit-description {   background-color: #393939;   border-color: #151515;   color: #aaa; } .res-nightmode .subreddit-info .spacer a {   background-color: #262626; } .res-nightmode .morelink {   background: #444;   border-color: #444; } .res-nightmode .morelink:hover {   border-color: #333;   background: #333; } .res-nightmode .morelink:hover a {   color: #1496dc; } .res-nightmode .morelink .nub {   display: none; } .res-nightmode .sidebox .spacer, .res-nightmode .side .linkinfo {   background-color: #393939; } .res-nightmode .commentbody.border {   background-color: #369; } .res-nightmode input[type='number'], .res-nightmode input[type='text'], .res-nightmode input[type='password'], .res-nightmode .c-form-control {   color: #ccc;   border: 1px solid #4d4d4d;   background-color: #333; } .res-nightmode .content textarea {   background-color: #333;   color: #eee; } .res-nightmode .rulespage .example, .res-nightmode #userTaggerTable th, .res-nightmode #newCommentsTable th, .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul .updateTime:hover, .res-nightmode .instructions .preftable th, .res-nightmode .instructions .pretty-form, .res-nightmode .remove-self .option, .res-nightmode .unfriend-button .option, .res-nightmode .RESDashboardComponent .widgetPath, .res-nightmode .entry .buttons li.reported-stamp, .res-nightmode .pretty-button, .res-nightmode .report-reasons {   color: #000; } .res-nightmode .viewSource textarea[readonly] {   background: #666; } .res-nightmode .reported {   border-color: #daa520; } .res-nightmode .nextprev a {   background: #777;   border-color: #333;   color: #ddd; } .res-nightmode .nextprev img:hover {   opacity: 0.85; } .res-nightmode #ad-frame {   opacity: 0.8; } .res-nightmode .comment.unread {   background-color: #4a473b; } .res-nightmode .raisedbox .flat-list a {   background-color: #262626; } .res-nightmode .raisedbox .flat-list a:hover {   background-color: #369;   color: #fff; } .res-nightmode .instructions {   background: #fff; } .res-nightmode #siteTable .link .title.loggedin.click, .res-nightmode #BigEditor .markdownEditor .RESMacroDropdownList a {   color: gray; } .res-nightmode .markhelp.md tr td {   background-color: #36c; } .res-nightmode .mail .havemail img, .res-nightmode .mail .nohavemail img {   visibility: hidden; } .res-nightmode .expando-button {   background-color: transparent; } .res-nightmode #sr-autocomplete-area {   z-index: 1; } .res-nightmode button, .res-nightmode input[type='button'], .res-nightmode input[type='submit'], .res-nightmode input[type='reset'] {   color: #fff;   border: 1px outset grey;   background-color: #4d4d4d; } .res-nightmode .create-reddit .title {   background-color: rgba(24, 24, 24, 0.2);   color: #8AD; } .res-nightmode .linefield, .res-nightmode .linefield .linefield-content, .res-nightmode .linefield.mobile {   border-color: #1a1a1a;   background-color: #4d4d4d; } .res-nightmode #RESShortcutsEditContainer, .res-nightmode #RESShortcutsSort, .res-nightmode #RESShortcutsRight, .res-nightmode #RESShortcutsLeft, .res-nightmode #RESShortcutsAdd {   background: #ccc; } .res-nightmode .content .roundfield, .res-nightmode .content.submit .roundfield, .res-nightmode .traffic-table tr:nth-of-type(even) {   background-color: #181818; } .res-nightmode .traffic-table tr:nth-of-type(odd).promo-traffic-live {   color: #181818; } .res-nightmode .traffic-table.promocampaign-table tr.active {   background-color: #6d2f39;   border: 2px dotted #a70000; } .res-nightmode .sponsored-page .dashboard {   color: #dedede; } .res-nightmode .sponsored-page .campaign-editor .editor-group, .res-nightmode .sponsored-page .editor-group {   background-color: #151515; } .res-nightmode .sponsored-page .campaign-editor .campaign-set {   background-color: #666; } .res-nightmode .sponsored-page .linefield-content textarea, .res-nightmode .sponsored-page .linefield-content input {   color: #181818; } .res-nightmode .linefield .markhelp table {   background-color: inherit; } .res-nightmode .content .sponsored-page textarea, .res-nightmode .content .sponsored-page input {   background-color: #fcfcfc; } .res-nightmode .md code, .res-nightmode .md pre, .res-nightmode .link .md pre, .res-nightmode .content .md pre, .res-nightmode .new-comment .md pre, .res-nightmode .usertext.border .md pre, .res-nightmode .link .md :not(pre) > code, .res-nightmode .new-comment .md :not(pre) > code, .res-nightmode .usertext.border .md :not(pre) > code {   color: inherit;   border-color: #58697b;   background-color: #2a3340; } .res-nightmode .comment .md p a[href='/spoiler'], .res-nightmode .comment .md p a[href='#spoiler'] {   background-color: #000;   color: #000; } .res-nightmode .usertable tr:hover, .res-nightmode .moderator-table tr:hover, .res-nightmode .usertext.border .usertext-body, .res-nightmode .usertext.grayed .usertext-body {   background-color: #444; } .res-nightmode .login-form, .res-nightmode .login-form-side .submit, .res-nightmode #header-bottom-right, .res-nightmode #srList, .res-nightmode .dropdown.lightdrop .drop-choices {   background-color: #333; } .res-nightmode #srList tr {   border-bottom-color: #646464; } .res-nightmode #srList tr:hover {   background-color: #3e3e3e; } .res-nightmode #quickMessage textarea, .res-nightmode #quickMessage select {   background-color: #aaa; } .res-nightmode #search input[type='text'] {   color: white !important; } .res-nightmode #search select, .res-nightmode #search option {   color: #1a1a1a; } .res-nightmode ul.res-search-tabs li a {   background-color: #393939; } .res-nightmode.res-searchHelper-searchPageTabs ul.res-search-tabs li.res-search-tab-active a, .res-nightmode.res-searchHelper-searchPageTabs .combined-search-page #previoussearch .res-search-pane, .res-nightmode #RESConsoleContainer, .res-nightmode #SearchRES-results-container li, .res-nightmode #SearchRES-results-container li:hover, .res-nightmode #REScommentSubToggle {   background-color: #222; } .res-nightmode #searchexpando, .res-nightmode .post-sharing {   background: #303030;   border-color: #444; } .res-nightmode.res-searchHelper-searchPageTabs .combined-search-page .search-result .search-expando.collapsed::before {   background: linear-gradient(to bottom, rgba(34, 34, 34, 0) 0%, #222 100%); } .res-nightmode.res-searchHelper-searchPageTabs .combined-search-page .search-result-group .search-result-group-header {   border-bottom-color: grey; } .res-nightmode a, .res-nightmode .md a, .res-nightmode .share-button .option, .res-nightmode #subscribe a, .res-nightmode .share .option, .res-nightmode .wired a, .res-nightmode .side a, .res-nightmode .link .score.dislikes, .res-nightmode .linkcompressed .score.dislikes, .res-nightmode a[rel='tag'], .res-nightmode .dsq-help, .res-nightmode #authorInfoToolTip h3 a, .res-nightmode .reddiquette, .res-nightmode .parent .author, .res-nightmode .parent .subreddit, .res-nightmode .combined-search-page .search-result a, .res-nightmode .combined-search-page .search-result a > mark, .res-nightmode .hoverHelp, .res-nightmode .deepthread a, .res-nightmode .policy-page .md h1 a, .res-nightmode .policy-page .md h3 a {   color: #8cb3d9; } .res-nightmode .flairselector li a {   color: #85b3e0 !important; } .res-nightmode .thing .title {   color: #dedede; } .res-nightMode-coloredLinks .res-nightmode .thing .title {   color: #5c99d6; } .res-nightmode .thing .source-url {   color: #ccc; } .res-nightMode-coloredLinks .res-nightmode .thing .source-url {   color: #3380cc; } .res-nightmode .tagline a {   color: #6a98af; } .res-nightmode .morecomments a {   color: #999; } .res-nightmode .thing .title:visited, .res-nightmode .thing.visited .title, .res-nightmode .combined-search-page .search-result.visited a, .res-nightmode .combined-search-page .search-result a:visited, .res-nightmode .combined-search-page .search-result a:visited > mark {   color: #a6a6a6; } .res-nightMode-coloredLinks .res-nightmode .thing .title:visited, .res-nightMode-coloredLinks .res-nightmode .thing.visited .title, .res-nightMode-coloredLinks .res-nightmode .combined-search-page .search-result.visited a, .res-nightMode-coloredLinks .res-nightmode .combined-search-page .search-result a:visited, .res-nightMode-coloredLinks .res-nightmode .combined-search-page .search-result a:visited > mark {   color: #a679d2; } .res-nightmode .thing .source-url:visited {   color: #999; } .res-nightMode-coloredLinks .res-nightmode .thing .source-url:visited {   color: #945ec9; } .res-nightmode .flair-settings ~ .tabpane-content {   border-color: #1a1a1a; } .res-nightmode .flaircell input[type='text'] {   border: 1px solid #555; } .res-nightmode .md blockquote {   color: #a0a0a0;   border-left-color: #646464; } .res-nightmode .infobar:not(.newsletterbar), .res-nightmode .reddit-infobar {   border-color: #2966a3;   background-color: #264d73; } .res-nightmode .infobar:not(.newsletterbar) .md, .res-nightmode .reddit-infobar .md {   color: white; } .res-nightmode .rank .star, .res-nightmode .link .score.likes, .res-nightmode .linkcompressed .score.likes {   color: #ff4500; } .res-nightmode .linkcompressed .entry .buttons li a, .res-nightmode .link .usertext-body .md, .res-nightmode .thing .compressed, .res-nightmode .link.promotedlink, .res-nightmode .link.promotedlink.promoted, .res-nightmode .subreddit .usertext .md, .res-nightmode .commentreply .help tr {   background: none; } .res-nightmode .link .usertext-body .md, .res-nightmode .side .linkinfo {   border-color: #666; } .res-nightmode .subreddit-info .label, .res-nightmode .sidebox .subtitle, .res-nightmode .modactionlisting .description, .res-nightmode .modactionlisting .timestamp time, .res-nightmode .modactionlisting .timestamp {   color: #aaa; } .res-nightmode .submit textarea, .res-nightmode .submit #url, .res-nightmode .submit #sr-autocomplete, .res-nightmode .usertext-edit textarea, .res-nightmode .RESDialogSmall, .res-nightmode .c-close, .res-nightmode #BigEditor #BigText, .res-nightmode #liveupdate-statusbar, .res-nightmode #liveupdate-statusbar.complete, .res-nightmode #alert_message input {   color: #ccc;   border-color: #4d4d4d;   background-color: #333; } .res-nightmode #liveupdate-statusbar.live.connected {   background-color: #344b4e;   border: 1px solid #38585f;   color: inherit; } .res-nightmode .RESHoverInfoCard::before {   border-right-color: #4d4d4d; } .res-nightmode .RESHoverInfoCard::after {   border-right-color: #333; } .res-nightmode .RESHoverInfoCard.right::before {   border-left-color: #4d4d4d; } .res-nightmode .RESHoverInfoCard.right::after {   border-left-color: #333; } .res-nightmode .RESDialogSmall > h3, .res-nightmode .NERPageMarker {   color: inherit;   border-color: #4d4d4d;   background-color: transparent; } .res-nightmode.res-commentBoxes .comment, .res-nightmode.res-commentBoxes .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment .comment {   background-color: #161616 !important; } .res-nightmode.res-commentBoxes .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment .comment .comment {   background-color: #121212 !important; } .res-nightmode.res-commentBoxes .comment {   border-color: #333 !important; } .res-nightmode.res-commentBoxes .comment.spam {   background-image: linear-gradient(#633636, #633636); } .res-nightmode.res-commentBoxes.res-commentHoverBorder .comment:hover {   border-color: #555 !important; } .res-nightmode .RESDropdownList, .res-nightmode #RESPrefsDropdown {   border-color: gray; } .res-nightmode .RESDropdownList li, .res-nightmode .RESDropdownList li a {   background: #444;   color: gray; } .res-nightmode .RESDropdownList li {   border-bottom-color: gray; } .res-nightmode .RESDropdownList li:hover, .res-nightmode .RESDropdownList li:hover a {   background-color: #555;   color: #bbb; } .res-nightmode > .content > .spacer > .sitetable::before, .res-nightmode > .content > .sharelink ~ .sitetable::before, .res-nightmode .side .age, .res-nightmode .trophy-info *, .res-nightmode .golddvertisement, .res-nightmode .flair-jump .title, .res-nightmode .savedComment, .res-nightmode .md, .res-nightmode .md h2, .res-nightmode .content .sitetable .thing .md, .res-nightmode .side .usertext-body ol, .res-nightmode .side .redditname a, .res-nightmode .side h1, .res-nightmode .side h2, .res-nightmode .side h3, .res-nightmode .side h4, .res-nightmode .side h5, .res-nightmode .side h6, .res-nightmode .content .wiki-page-content .md.wiki h1, .res-nightmode .content .wiki-page-content .md.wiki h2, .res-nightmode .content .wiki-page-content .md.wiki h3, .res-nightmode .content .wiki-page-content .md.wiki h4, .res-nightmode .content .wiki-page-content .md.wiki h5, .res-nightmode .content .wiki-page-content .md.wiki h6, .res-nightmode .content .wiki-page-content .md.wiki p, .res-nightmode .wiki-page .wiki-page-content .pagelisting, .res-nightmode .RESUserTag, .res-nightmode .sidebar h1, .res-nightmode .sidebar h2, .res-nightmode .sidebar h3, .res-nightmode .sidebar h4, .res-nightmode .sidebar h5, .res-nightmode .sidebar h6, .res-nightmode .flairselector h2, .res-nightmode .wiki-page .wiki-page-content .description h2 {   color: #ddd; } .res-nightmode .voteWeight, .res-nightmode .nextprev img {   opacity: 0.7; } .res-nightmode .searchfacets {   background-color: #2c2c2c;   box-shadow: none; } .res-nightmode .combined-search-page .search-result .search-result-body, .res-nightmode .generic-table, .res-nightmode .message.message-reply.recipient > .entry .head, .res-nightmode .message.message-parent.recipient > .entry .head, .res-nightmode .linefield .title, .res-nightmode .liveupdate-listing li.liveupdate:hover time, .res-nightmode .spam .domain, .res-nightmode .spam .domain a, .res-nightmode .hover-bubble.multi-selector strong, .res-nightmode .subreddit-rules-page .md-container .md .subreddit-rule-description {   color: inherit; } .res-nightmode .comment.spam > .child, .res-nightmode .message.spam > .child {   background-color: transparent; } .res-nightmode .nextprev a:hover, .res-nightmode .next-suggestions a:hover {   border-color: transparent;   background-color: #777; } .res-nightmode .modactionlisting + #progressIndicator {   width: auto;   margin: 20px 310px 0 0; } .res-nightmode body.with-listing-chooser .listing-chooser, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser {   background-color: #262626; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy {   background-color: #262626;   border: none;   outline: none; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy::after, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy::after {   background-color: #2f2f2f;   border-right-color: #444; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy:hover, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy:hover, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy:hover, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy:hover {   background-color: #262626;   border-left-color: #333; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy:hover::before, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy:hover::before, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy:hover::before, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy:hover::before {   background-color: #262626; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy:hover::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy:hover::after, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy:hover::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy:hover::after {   border-right-color: #777; } .res-nightmode .listing-chooser li, .res-nightmode .listing-chooser li.selected {   background-color: #393939;   color: #ccc;   border-color: #000;   box-shadow: none; } .res-nightmode .listing-chooser li a, .res-nightmode .listing-chooser li.selected a {   color: #8AD; } .res-nightmode .listing-chooser .intro {   background-color: #444;   border-color: #262626;   color: #ccc; } .res-nightmode .listing-chooser .create button {   color: #eee;   background-color: #777; } .res-nightmode .subreddits .remove-sr, .res-nightmode .add-sr .add {   filter: invert(80%); } .res-nightmode .with-listing-chooser.multi-page .footer-parent {   background: url('../images/nightmode/snooBalloons.png') no-repeat 49% 0; } .res-nightmode #about-main #history .events.timeline .event:hover .event-content {   box-shadow: 1px 0 3px 2px #aaa; } .res-nightmode #about-main .statsgrid .stat .value {   text-shadow: 0 3px 5px #1a1a1a; } .res-nightmode .about-page .abouttitle h1, .res-nightmode .create .morelink, .res-nightmode .permission-summary, .res-nightmode .flairselector li, .res-nightmode .subreddit .usertext .md {   border-color: transparent; } .res-nightmode .about-page .about-menu {   background: #ddd; } .res-nightmode .about-page h2, .res-nightmode .md del {   color: #777; } .res-nightmode .about-page .about-menu li.selected a, .res-nightmode .about-page .about-menu li:hover a, .res-nightmode #about-main #history .events.timeline .event-content {   background: #aaa; } .res-nightmode .about-page .abouttitle {   background-image: url('../images/nightmode/aboutHeader.png'); } .res-nightmode .policy-page .md p {   color: #eee; } .res-nightmode .policy-page .md p em {   background-color: #dad0b3;   color: #000; } .res-nightmode body, .res-nightmode .sidebar .md, .res-nightmode .side, .res-nightmode .side *, .res-nightmode .side .spacer, .res-nightmode .content, .res-nightmode .traffic-tables .traffic-table tr, .res-nightmode .parentComment .md, .res-nightmode .post-body.entry-content, .res-nightmode .dsq-auth-header, .res-nightmode .instructions .preftable th, .res-nightmode #BigEditor .markdownEditor a, .res-nightmode #BigEditor .markdownEditor .RESMacroDropdownTitle, .res-nightmode #REScommentSubToggle, .res-nightmode #alert_message, .res-nightmode #report-action-form {   color: #ccc; } .res-nightmode .titlebox form.toggle, .res-nightmode .leavemoderator {   background-color: inherit; } .res-nightmode .server-seconds {   background: #333;   border-color: #1a1a1a; } .res-nightmode .snoovatar-page footer .inputs, .res-nightmode .guider, .res-nightmode aside.sidebar #discussions li {   background: #262626; } .res-nightmode .snoovatar-page .checkbox-label [type='checkbox'] + .proxy-checkbox {   background: #f00; } .res-nightmode .snoovatar-page .checkbox-label [type='checkbox']:checked + .proxy-checkbox {   background: #0a802e; } .res-nightmode .tagline .friend {   color: #d25a32; } .res-nightmode .tagline .submitter {   color: #0af; } .res-nightmode .tagline .moderator {   color: #282; } .res-nightmode .tagline .admin, .res-nightmode .user-distinction .admin {   color: #c81414; } .res-nightmode hr, .res-nightmode .md hr, .res-nightmode .message.gold-auto blockquote {   border-color: #3c3c3c;   background-color: #3c3c3c; } .res-nightmode #RESSubredditGroupDropdown {   background-color: #ccc; } .res-nightmode #RESSubredditGroupDropdown a, .res-nightmode .RESNotificationContent, .res-nightmode .RESNotificationFooter, .res-nightmode .sr-bar a {   color: black; } .res-nightmode .goldvertisement, .res-nightmode .goldvertisement .inner {   border-color: rgba(196, 180, 135, 0.5); } .res-nightmode .goldvertisement .inner h2, .res-nightmode .goldvertisement .progress p {   color: #c4b487; } .res-nightmode .goldvertisement a, .res-nightmode .goldvertisement a:hover {   background-color: #4d4d4d;   border-color: black;   color: white; } .res-nightmode .letter-body p, .res-nightmode #gold-letter h1, .res-nightmode #about-gold h1, .res-nightmode #about-gold footer > p, .res-nightmode .RESDashboardComponentScrim span, .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul .updateTime, .res-nightmode .remove-self .option, .res-nightmode .moderator.remove-self .option, .res-nightmode .message-count, .res-nightmode .usertable > .toggle {   color: #262626; } .res-nightmode .gold-accent {   color: #e6daae;   background-color: #837854;   border-color: #ac9c68; } .res-nightmode .side .gold-accent *, .res-nightmode .gold-accent .details, .res-nightmode .gold-accent h1, .res-nightmode .gold-accent th {   color: #e6daae; } .res-nightmode .hover-bubble.anchor-top-centered::after, .res-nightmode #about-main #history .events.timeline .event-marker.top, .res-nightmode #about-main #history .events.timeline .event-marker.bottom {   border-bottom-color: #aaa; } .res-nightmode .guiders_arrow {   opacity: 0.5; } .res-nightmode .white-field, .res-nightmode .delete-field, .res-nightmode .RESDialogSmall.livePreview .md.RESDialogContents, .res-nightmode .moderator .traffic-table tbody tr:nth-child(even), .res-nightmode .instructions, .res-nightmode .linefield .delete-field, .res-nightmode #pref-delete .delete-field, .res-nightmode .contact-us-page .details li, .res-nightmode .subreddit-report-form input:disabled, .res-nightmode .action-form input:disabled {   background-color: transparent; } .res-nightmode .message.message-reply .entry, .res-nightmode .message.message-parent .entry, .res-nightmode .flairselector.drop-choices.active, .res-nightmode .message.threaded .child, .res-nightmode .comment .child, .res-nightmode .comment .showreplies, .res-nightmode .message.message-reply:not(.threaded) .entry, .res-nightmode .message.message-parent:not(.threaded) .entry, .res-nightmode.liveupdate-app .content, .res-nightmode .liveupdate-listing li.separator::before, .res-nightmode .md td, .res-nightmode .md th, .res-nightmode .footer, .res-nightmode .footer .col, .res-nightmode .userTagLink.hasTag, .res-nightmode #userTaggerPreview {   border-color: #4d4d4d; } .res-nightmode .comment .md p a[href='/spoiler']:hover, .res-nightmode .comment .md p a[href='/spoiler']:active, .res-nightmode .comment .md p a[href='#spoiler']:hover, .res-nightmode .comment .md p a[href='#spoiler']:active, .res-nightmode .addNewWidget, .res-nightmode .editWidget, .res-nightmode #authorInfoToolTip .option, .res-nightmode .updateTime, .res-nightmode #RESSubmitOptions ~ div a, .res-nightmode #shortlink-text, .res-nightmode .guiders_button, .res-nightmode .blueButton, .res-nightmode .gold-accent a, .res-nightmode .snoovatar-page .gold-accent a, .res-nightmode .combined-search-page .search-result-subreddit .search-subscribe-button .add.active, .res-nightmode .combined-search-page .search-result-subreddit .search-subscribe-button .remove.active, .res-nightmode .fancy-toggle-button a, .res-nightmode .fancy-toggle-button .multi-count {   color: white; } .res-nightmode .markhelp table tr:first-child {   background-color: #4d4d4d !important; } .res-nightmode .usertext .markhelp .spaces, .res-nightmode .liveupdate-listing li.separator time, .res-nightmode .diff_header, .res-nightmode .diff_next, .res-nightmode .hover-bubble.multi-selector label:hover {   background-color: #4d4d4d; } .res-nightmode .flair, .res-nightmode .linkflairlabel {   color: #c8c8c8;   background-color: #404040;   border-color: #4d4d4d; } .res-nightmode .flairrichtext[style*='color'] {   color: #c8c8c8 !important;   background-color: #404040 !important;   border-color: #4d4d4d; } .res-nightmode #NERContent {   background-color: #a0a0a0; } .res-nightmode .RESNotification {   background-color: #d2d2d2; } .res-nightmode .RESNotificationContent {   border-color: #b4b4b4; } .res-nightmode #modalOverlay.fadeIn {   background-color: rgba(0, 0, 0, 0.7); } .res-nightmode #RESConsoleTopBar, .res-nightmode .RESDonateButton {   color: #e6e6e6;   border-color: #4d4d4d;   background-color: #3c3c3c; } .res-nightmode .res-logo {   filter: invert(79%) grayscale(100%); } .res-nightmode .optionContainer {   border-color: transparent;   background-color: #282828; } .res-nightmode .optionContainer:not(.table):not(.specialOptionType) .optionSetting, .res-nightmode #SearchRES-results-container li, .res-nightmode #RESConfigPanelModulesList > ul, .res-nightmode #RESConfigPanelModulesList li h3, .res-nightmode #RESConfigPanelModulesList li.active h3 {   border-color: #3c3c3c; } .res-nightmode #RESConsoleContainer input[type='text'], .res-nightmode #RESConsoleContainer input[type='password'], .res-nightmode #RESConsoleContainer .c-form-control, .res-nightmode ul.token-input-list-facebook, .res-nightmode #RESConsoleContainer textarea {   padding: 2px 3px;   border: 1px solid #3c3c3c;   background-color: #222;   color: #ddd; } .res-nightmode #RESConfigPanelModulesList {   color: #a0a0a0; } .res-nightmode #RESConfigPanelModulesList li.active h3 {   background-color: #141414; } .res-nightmode #RESConsoleContainer, .res-nightmode .moduleButton.enabled, .res-nightmode .optionsTable th, .res-nightmode .tagline .score {   color: #b4b4b4; } .res-nightmode #moduleOptionsScrim {   background-color: rgba(34, 34, 34, 0.7); } .res-nightmode .optionsTable th {   background-color: #3c3c3c; } .res-nightmode .optionsTable tr:nth-child(2n) {   background-color: #1d1d1d; } .res-nightmode #moduleOptionsSaveStatus {   background-color: #323232;   color: #969696; } .res-nightmode .toggleButton .toggleOff, .res-nightmode .toggleButton .toggleOn, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOff, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOn {   color: rgba(255, 255, 255, 0.8);   border-color: #3c3c3c; } .res-nightmode .toggleButton:not(.enabled) .toggleOn, .res-nightmode .toggleButton.enabled .toggleOff, .res-nightmode .toggleButton.reverseToggleButton.enabled .toggleOn, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOff {   color: #3c3c3c;   border-color: #3c3c3c;   background: #282828; } .res-nightmode .toggleButton.enabled .toggleOn, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOn {   background: linear-gradient(to right, #25456b, #282828); } .res-nightmode .toggleButton:not(.enabled) .toggleOff, .res-nightmode .toggleButton.reverseToggleButton.enabled .toggleOff {   background: linear-gradient(to left, #882626, #282828); } .res-nightmode .link .rank {   color: #505050; } .res-nightmode .midcol .score, .res-nightmode .moduleButton:not(.enabled) {   color: #646464; } .res-nightmode .tagline, .res-nightmode .entry .buttons li a, .res-nightmode .trending-subreddits strong {   color: #828282; } .res-nightmode .res-hasNewComments .newComments {   color: #d25a32; } .res-nightmode .nsfw-stamp {   color: #bf4040; } .res-nightmode .spoiler-stamp {   color: #ff8200; } .res-nightmode .diff_sub {   background-color: rgba(240, 128, 128, 0.5); } .res-nightmode .diff_add {   background-color: rgba(144, 238, 144, 0.4); } .res-nightmode .diff_chg {   background-color: rgba(255, 255, 0, 0.4); } .res-nightmode .hover-bubble.multi-selector .create-multi input[type='text'] {   color: #c04e51;   background-color: inherit; } .res-nightmode #alert_message, .res-nightmode #report-action-form {   border-color: #404040;   background-color: #262626; } .res-nightmode .sr-interest-bar {   border-color: transparent;   background-color: #29333d; } .res-nightmode .sr-interest-bar .bubble {   background-color: black; } .res-nightmode .sr-interest-bar .bubble::after {   border-right-color: black; } .res-nightmode .subreddit-rule-item:hover {   background-color: #2b2b2b; } .res-nightmode #keyHelp {   border-color: #999;   background-color: #aaa;   color: #333; } .res-nightmode #keyHelp td {   border-color: #999; } .res-nightmode .res-filterline {   background-color: rgba(38, 38, 38, 0.9); } .res-nightmode .res-filterline-filter {   border-bottom-color: #383838; } .res-nightmode .res-filterline-filter-hiding, .res-nightmode .res-filterline-filter-hiding:hover {   border-bottom-color: #e4e4e4;   color: #e4e4e4; } .res-nightmode .res-filterline-dropdown {   background-color: #313131;   box-shadow: #3c3c3c 2px 2px 2px; } .res-nightmode .res-filterline-dropdown-action {   border-bottom-color: #404040; } .res-nightmode #REScommentNavBox #commentNavUp, .res-nightmode #REScommentNavBox #commentNavDown {   color: #434343; } .res-nightmode #REScommentNavBox #commentNavPostCount {   color: #9f9f9f; } .res-nightmode .res-commentNavToggle-choices {   background-color: rgba(0, 0, 0, 0.9);   box-shadow: #313131 1px 2px 4px; } .res-nightmode .subreddit .usertext .md {   background-color: #333;   border-color: #777; } .res-nightmode .user-subreddit .path {   color: #8cb3d9; } .res-nightmode .modal .modal-header-title {   color: #aaa; } .res-nightmode .modal .modal-header, .res-nightmode .modal .field-otp, .res-nightmode .modal .modal-content {   background-color: #333;   border-color: #777;   color: #aaa; } .res-nightmode .modal .c-close {   background-color: inherit;   filter: invert(100%); } .res-nightmode .report-modal .report-form-bottom-panel .report-form-content-policy a, .res-nightmode .report-modal .report-form-action-desc {   color: #8cb3d9; } .res-nightmode .report-modal .report-form-bottom-panel .report-form-content-policy p, .res-nightmode .report-modal .report-reason-item .report-reason-display, .res-nightmode .report-modal .report-form-last-step-text, .res-nightmode .report-modal .report-form-last-step-text-custom-rules, .res-nightmode .report-modal .report-form-big-content-policy {   color: #aaa; } .res-nightmode .report-modal .c-close {   background-color: inherit; } .res-nightmode .report-modal .report-form-block-user img, .res-nightmode .report-modal .report-form-blocked-user img {   filter: invert(100%); } .res-nightmode .crossposting-modal .crosspost-header-title, .res-nightmode .crossposting-modal .crosspost-label, .res-nightmode .crossposting-modal .crosspost-sublabel {   color: #aaa; } .res-nightmode .crossposting-modal .crosspost-description {   background-color: #333;   border-color: #777; } .res-nightmode .crossposting-modal .modal-body, .res-nightmode .crossposting-modal .modal-content, .res-nightmode .crossposting-modal .crosspost-field, .res-nightmode .crossposting-modal .crosspost-preview, .res-nightmode .crossposting-modal .crosspost-thing-preview {   background-color: #262626;   color: #aaa; } .res-nightmode .tfa-login-modal .tfa-login-caption {   color: #aaa; } .res-nightmode .tfa-login-modal .tfa-switch-type-of-code {   color: #8cb3d9; } .res-nightmode .tfa-login-modal .tfa-login-bottom-panel .tfa-login-having-trouble a {   color: #8cb3d9; } .res-nightmode .enable-tfa-modal .enable-tfa-caption, .res-nightmode .enable-tfa-modal .pref-otp-qr li {   color: #aaa; } .res-nightmode .enable-tfa-modal .otp-secret-info canvas {   border: solid 5mm white; } .res-nightmode .enable-tfa-modal .switch-barcode-and-code {   color: #8cb3d9; } .res-nightmode .enable-tfa-modal .enable-tfa-bottom-panel .enable-tfa-learn-more a, .res-nightmode .enable-tfa-modal .enable-tfa-bottom-panel .switch-barcode-and-code a {   color: #8cb3d9; } .res-nightmode .disable-tfa-modal .disable-tfa-caption {   color: #aaa; } .res-nightmode .disable-tfa-modal .disable-tfa-bottom-panel .disable-tfa-learn-more a {   color: #8cb3d9; } .res-nightmode .backup-codes-modal .backup-codes-caption {   color: #aaa; } .res-nightmode .pinnable-content.pinned {   background-color: #262626 !important; } .res-nightmode .pinnable-content.pinned .c-close {   background-color: dimgrey; } .res-nightmode .author-tooltip__head {   background-color: #262626;   border-color: #777; } .res-nightmode .author-tooltip__credentials-list strong, .res-nightmode .author-tooltip__head h3, .res-nightmode .author-tooltip__description {   color: #aaa; } .res-nightmode .author-tooltip__link-list a, .res-nightmode .author-tooltip__head a {   color: #8cb3d9; } .res-nightmode .author-tooltip__link-list a:hover, .res-nightmode .author-tooltip__head a:hover {   color: #8cb3d9; } .res-nightmode .desktop-onboarding__description, .res-nightmode .desktop-onboarding-sign-up__form-note, .res-nightmode .desktop-onboarding-step_sign-up footer, .res-nightmode .subreddit-picker__subreddit-name strong {   color: #aaa; } .res-nightmode .desktop-onboarding-step_sign-up footer a {   color: #8cb3d9; } .res-nightmode .desktop-onboarding__col_sign-up_image {   opacity: 0.7; } .res-nightmode .subreddit-picker, .res-nightmode .c-username-picker-shown .desktop-onboarding__col_username_picker {   background-color: #262626;   border-color: #777; } .res-nightmode .subreddit-picker__category_selected {   background-color: #333; } .res-nightmode .api-help .overview h2, .res-nightmode .api-help .contents .introduction strong {   color: #aaa; } .res-nightmode .api-help .contents .overview code, .res-nightmode .api-help .parameters {   background-color: #333; } .res-d2x-nightmode #container > .App .ProfileTemplate.m-updated, .res-d2x-nightmode #container > .App .ProfileBarDropdown__list, .res-d2x-nightmode #container > .App .ProfileSidebar__counterInfo, .res-d2x-nightmode #container > .App .ProfileBetaConfirmationPage {   background-color: #262626;   border-color: #777;   color: #aaa; } .res-d2x-nightmode #container > .App .SubredditListExpander__more, .res-d2x-nightmode #container > .App .SubredditListItem__subredditLink, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__profileName, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__link, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__more, .res-d2x-nightmode #container > .App .BlueBar__logout, .res-d2x-nightmode #container > .App .BlueBar__username, .res-d2x-nightmode #container > .App .BlueBar__prefs, .res-d2x-nightmode #container > .App .TabMenu__tab.m-active, .res-d2x-nightmode #container > .App .TabMenu__tab, .res-d2x-nightmode #container > .App .ProfileBarDropdown__title.m-opened, .res-d2x-nightmode #container > .App .ProfileBarDropdown__title, .res-d2x-nightmode #container > .App .ProfileBarDropdown__listItem, .res-d2x-nightmode #container > .App .ProfileSidebar__reportUserLink, .res-d2x-nightmode #container > .App .ProfileSidebar__nameTitleLink, .res-d2x-nightmode #container > .App .Footer__link, .res-d2x-nightmode #container > .App .Footer__userAgreementLink, .res-d2x-nightmode #container > .App .Footer__privacyLink, .res-d2x-nightmode #container > .App .Post__origin .Post__username, .res-d2x-nightmode #container > .App .Post__authorComment .Post__username, .res-d2x-nightmode #container > .App .Post__subredditLink, .res-d2x-nightmode #container > .App .CommentTitle__postAuthor, .res-d2x-nightmode #container > .App .CommentTitle__subredditName, .res-d2x-nightmode #container > .App .Comment.m-op .Comment__author {   color: #8cb3d9; } .res-d2x-nightmode #container > .App .Post__titleLink, .res-d2x-nightmode #container > .App .CommentTitle__postTitle {   color: #dedede; } .res-d2x-nightmode #container > .App .Post__flatListItem, .res-d2x-nightmode #container > .App .Post__titleLink:visited, .res-d2x-nightmode #container > .App .CommentTitle__postTitle {   color: #a6a6a6; } .res-d2x-nightmode #container > .App .ProfileBarDropdown__list:hover, .res-d2x-nightmode #container > .App .ProfileBarDropdown__listItem:hover {   background-color: dimgrey; } .res-d2x-nightmode #container > .App .UserTopSubredditsSidebar__header, .res-d2x-nightmode #container > .App .SubredditListItem__subscribers, .res-d2x-nightmode #container > .App .UserModeratedSubredditsSidebar__header, .res-d2x-nightmode #container > .App .UserSpecialsListSidebar__header, .res-d2x-nightmode #container > .App .UserSpecialsListSidebar__title, .res-d2x-nightmode #container > .App .UserSpecialsListSidebar__date, .res-d2x-nightmode #container > .App .TrophyCaseSidebar__header, .res-d2x-nightmode #container > .App .TrophyCaseSidebar__trophyTitle, .res-d2x-nightmode #container > .App .TrophyCaseSidebar__trophyDescription, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__header, .res-d2x-nightmode #container > .App .BlueBar__karma, .res-d2x-nightmode #container > .App .ProfileSidebar__displayName, .res-d2x-nightmode #container > .App .ProfileSidebar__description, .res-d2x-nightmode #container > .App .ProfileSidebar__counters, .res-d2x-nightmode #container > .App .ProfileSidebar__followDescription, .res-d2x-nightmode #container > .App .Post__score, .res-d2x-nightmode #container > .App .StyledHtml, .res-d2x-nightmode #container > .App .Post__authorComment .StyledHtml, .res-d2x-nightmode #container > .App .Post__prominentComment .StyledHtml, .res-d2x-nightmode #container > .App .Post__commentContainer, .res-d2x-nightmode #container > .App .ProfileVoiceAd__title, .res-d2x-nightmode #container > .App .ProfileVoiceAd__description, .res-d2x-nightmode #container > .App .ProfileVoiceAd__button {   color: #aaa; } .res-d2x-nightmode #container > .App .BlueBar {   background: dimgrey; } .res-d2x-nightmode #container > .App .BlueBar__account, .res-d2x-nightmode #container > .App .ProfileSidebar__titleContainer, .res-d2x-nightmode #container > .App .Post, .res-d2x-nightmode #container > .App .CommentListing__comment {   background-color: #333;   border-color: #777;   color: #aaa; } .res-d2x-nightmode #container > .App .SubscriptionBar {   background-color: #ccc; } .res-d2x-nightmode #container > .App .SubscriptionBar__subredditListTarget {   color: #000 !important; } .res-d2x-nightmode #container > .App .SubredditListItem__subscribe, .res-d2x-nightmode #container > .App .SubredditListItem__unsubscribe, .res-d2x-nightmode #container > .App .Post__crosspostExpando .Media.m-embed, .res-d2x-nightmode #container > .App .Post__crosspostExpando .Media.m-image, .res-d2x-nightmode #container > .App .Post__crosspostExpando .Media.m-video, .res-d2x-nightmode #container > .App .Media.m-profile.m-embed, .res-d2x-nightmode #container > .App .Media.m-profile.m-image, .res-d2x-nightmode #container > .App .Media.m-profile.m-video, .res-d2x-nightmode #container > .App .StyledHtml pre {   background-color: #262626; } .res-d2x-nightmode #container > .App .SubredditListDropdown, .res-d2x-nightmode #container > .App .SubredditListDropdown__listItem, .res-d2x-nightmode #container > .App .SubredditListDropdown__listMore {   background-color: #333;   color: #aaa;   border-color: #777; } .res-d2x-nightmode #container > .App .SubredditListDropdown__listItem:hover, .res-d2x-nightmode #container > .App .Post__comment:hover {   background-color: #3e3e3e; } .res-d2x-nightmode #container > .App .ProfileVoiceAd {   background-color: #202020; } `);
    }
    Options.addCheckbox({
        label: 'RES Night Mode',
        "default": false,
        section: 'Advanced',
        help: 'RES Night Mode.',
        onchange: function () {
            Elements.$body.attr('data-RESDarkMode', this.prop('checked'));
            if(Elements.$body.attr('data-RESDarkMode') == 'true') {
                document.body.classList.add("res-nightmode");
                if (resTest == 0) {
                    resAdda();
                }
            }
            if (Elements.$body.attr('data-RESDarkMode') == 'false') {
                document.body.classList.remove("res-nightmode");
            }
        }
    });
    if(Elements.$body.attr('data-RESDarkMode') == 'true') {
        if(resTest == 0) {
            resAdda();
        }
        document.body.classList.add("res-nightmode");
    }
})(RESDarkMode || (RESDarkMode = {}));

/////////////////////////
// CollapsiblePosts.ts //
/////////////////////////
var CollapsiblePosts;
var collapseCount = 0;
(function (CollapsiblePosts) {
    // Options
    Elements.$body.attr('data-CollapsiblePosts', true);

    Options.addCheckbox({
        label: 'Collapsible Posts',
        "default": true,
        section: 'Advanced 2',
        help: 'yeah.',
        onchange: function () {
            Elements.$body.attr('data-CollapsiblePosts', this.prop('checked'));
        }
    });
Update.loadedNew(function (data) {
    // steal from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible lol
    if(Elements.$body.attr('data-CollapsiblePosts') == 'true') {
                     var collapse_html = data.body_elem.html();
                var collapse_text = data.body_elem.text();
                var regexcollapse = collapse_html.match(/<a href="#start"(.*?)<\/a>(.*?)<a href="#end"(.*?)<\/a>/gms);
                for(var matchcol in regexcollapse) {
                    collapseCount++;
                    var newcol = regexcollapse[matchcol].trim();
                    newcol = newcol.replace(/<a href="#start"(.*?)<\/a>/gms, '<button type="button" id="LCE_Collapse_'+collapseCount+'" class="LCE_Collapse">[+] Toggle</button><div class="LCE_Content" id="LCE_Content_'+collapseCount+'">');
                    newcol = newcol.replace(/<a href="#end"(.*?)<\/a>/gms, '</div>');
                    collapse_html = collapse_html.replace(regexcollapse[matchcol], newcol);
                }
                data.body_elem.html(collapse_html);
    }
            });
    Styles.add(`.LCE_Collapse { background-color: #777; color: white; cursor: pointer; padding: 3px; border: none; text-align: left; outline: none; } .LCE_Collapse_Active, .LCE_Collapse:hover { background-color: #555; } .LCE_Content { display: none; overflow: hidden;}`);

    $(document).on('click', '.LCE_Collapse', function(){
        var collapse_id = $(this).attr('id').replace('LCE_Collapse_','');
    this.classList.toggle("LCE_Collapse_Active");
        var content = $('#LCE_Content_'+collapse_id);
    if (content.css('display') === 'block') {
      content.css('display','none');
        $(this).text('[+] Toggle');
    } else {
      content.css('display','block');
        $(this).text('[-] Toggle');
    }
    });

})(CollapsiblePosts || (CollapsiblePosts = {}));
