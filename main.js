/**
/**
 * LIVE COUNTING EXTENSION V1.7.0
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */
// CONSTANTS

// Extension version
var VERSION = 'v1.7.0';

var USER = $('#header .user a[href]').html();

//100k name information
var specialnumber = 1;
var kname1 = 'MaybeNotWrong';
var kname2 = '';
var kname3 = '';
var kname4 = '';
var kname5 = '';
var kname6 = '';
var SpecialUsernamesEnabled;

// Ignore function vars
var ignored = [];
ignored.push(localStorage['ignoredppl']);

//Daily HoC vars
var dailysize = 0;
var dailysizereal = '90px';
var colortransfers = '';
var dailyHocColorNamesEnable2 = true;

//Timestamp vars
var timestampEnable = true;
var darkcheck = 0;
var customClearTime;
var customStrickenColor;
var customBackgroundColor;

//Last count vars (Temporary before I remake it)
var validcount1 = '';
var validcount2 = '';
var validcount3 = '';
var validtimy = '';
var validtimestamp = '';
var vc000t = '';
var vc100t = '';
var vc200t = '';
var vc300t = '';
var vc400t = '';
var vc500t = '';
var vc600t = '';
var vc700t = '';
var vc800t = '';
var vc900t = '';
var vc000s = '';
var vc100s = '';
var vc200s = '';
var vc300s = '';
var vc400s = '';
var vc500s = '';
var vc600s = '';
var vc700s = '';
var vc800s = '';
var vc900s = '';
var fullcount1 = '';
var author1 = '';
var author2 = '';
var authorme = $('#header .user a[href]').html();
var validcountwrong = 0;
var validcountnotme = 0;

// Global Functions
// from https://pastebin.com/KD6gFhAK thanks MNW {:}
function parse_body(text){
    let number = null;
    let separator = null;
    if(text === "")return number;
    var body = tokenize(text);
    var tokens = body['tokens']; // body['comment'] would have the text
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
        for(let i=0; i < tokens.length; i+=2){
            num += tokens[i]['token']
        }
        number = num
    }
    return number;
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
            Cookies.set(cookieName, oldCookie, { expires: 9000, path: '' });
            Cookie.save = Cookies.getJSON(cookieName);
        }
        Cookies.remove('live-counting-extension', { path: '' });
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
        Cookies.set(cookieName, Cookie.save, { expires: 9000, path: '' });
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
    Elements.$submitError.css('display', 'inline');
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
    Styles.add = add;
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
         '777': {user:'artbn', words:'(artbn) 700',bgcolor:'#e66b00',fontcolor:'#000000'},
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
         var threadid = thisTime.substring(thisTime.lastIndexOf("live/") + 5,thisTime.lastIndexOf("/updates"));
         var magin2 = thisTime.substring(thisTime.indexOf("updates/") + 8);
         var permalink = thisTime.substring(thisTime.indexOf("updates/") + 8);
         magin2 = magin2.substring(14, 18) + magin2.substring(9, 13) + magin2.substring(0, 8);
         magin2 = parseInt(magin2, 16);
         var thisTime2 = data.elem.find('.body').parent().nextAll('.liveupdate:first').children().first().attr('href');
         var magin3 = thisTime2.substring(thisTime2.indexOf("updates/") + 8);
         magin3 = magin3.substring(14, 18) + magin3.substring(9, 13) + magin3.substring(0, 8);
         magin3 = parseInt(magin3, 16);
         var timestamp = magin2 - magin3;
         timestamp = timestamp / 1000;
         timestamp = Math.round( timestamp * 10 ) / 10;
         timestamp = timestamp / 10;
         timestamp = Math.round(timestamp);
         //////////Last Count (messy for now)
if(Elements.$body.attr('data-LastCount') != 'Off') {
if ( isNaN(validcount2) == true ) {
validcount2 = validcount1;
}
 fullcount1 = data.elem.find('.body > .md').text();
author1 = data.elem.find('.body > .author').text();
author1 = author1.trim().replace('/u/', '');
 validcount1 = parse_body(fullcount1);
validcount2 = parseInt(validcount2);
validcount1 = parseInt(validcount1);
validcount2++;
if (validcount2 == validcount1 && author2 != author1 || isNaN(validcount2) == true) {
validcount3 = validcount1;
$("#lastcountcount").text(validcount3.toLocaleString());
$("#lastcountuser").text(author1);
validtimy = validcount3.toString();
validtimy = validtimy.substr(validtimy.length - 3);
 if (validtimy == '000') {
vc900t = magin2;
if (vc800t != '') {
           vc900s = vc900t - vc800t;
           vc900s = vc900s / 1000;
           vc900s = (Math.round(vc900s / 10) * 10) / 10;
           $("#split9").text(vc900s);
}
} else if (validtimy == '900') {
vc800t = magin2;
if (vc700t != '') {
           vc800s = vc800t - vc700t;
           vc800s = vc800s / 1000;
           vc800s = (Math.round(vc800s / 10) * 10) / 10;
           $("#split8").text(vc800s);
}
} else if (validtimy == '800') {
vc700t = magin2;
if (vc600t != '') {
           vc700s = vc700t - vc600t;
           vc700s = vc700s / 1000;
           vc700s = (Math.round(vc700s / 10) * 10) / 10;
           $("#split7").text(vc700s);
}
}  else if (validtimy == '700') {
vc600t = magin2;
if (vc500t != '') {
           vc600s = vc600t - vc500t;
           vc600s = vc600s / 1000;
           vc600s = (Math.round(vc600s / 10) * 10) / 10;
           $("#split6").text(vc600s);
}
} else if (validtimy == '600') {
vc500t = magin2;
if (vc400t != '') {
           vc500s = vc500t - vc400t;
           vc500s = vc500s / 1000;
           vc500s = (Math.round(vc500s / 10) * 10) / 10;
           $("#split5").text(vc500s);
}

} else if (validtimy == '500') {
vc400t = magin2;
if (vc300t != '') {
           vc400s = vc400t - vc300t;
           vc400s = vc400s / 1000;
           vc400s = (Math.round(vc400s / 10) * 10) / 10;
           $("#split4").text(vc400s);
}
}  else if (validtimy == '400') {
vc300t = magin2;
if (vc200t != '') {
           vc300s = vc300t - vc200t;
           vc300s = vc300s / 1000;
           vc300s = (Math.round(vc300s / 10) * 10) / 10;
           $("#split3").text(vc300s);
}
}  else if (validtimy == '300') {
vc200t = magin2;
if (vc100t != '') {
           vc200s = vc200t - vc100t;
           vc200s = vc200s / 1000;
           vc200s = (Math.round(vc200s / 10) * 10) / 10;
           $("#split2").text(vc200s);
}
}  else if (validtimy == '200') {
vc100t = magin2;
if (vc000t != '') {
           vc100s = vc100t - vc000t;
           vc100s = vc100s / 1000;
           vc100s = (Math.round(vc100s / 10) * 10) / 10;
           $("#split1").text(vc100s);
}
}  else if (validtimy == '100') {
vc000t = magin2;
if (vc900t != '') {
           vc000s = vc000t - vc900t;
           vc000s = vc000s / 1000;
           vc000s = (Math.round(vc000s / 10) * 10) / 10;
           $("#split0").text(vc000s);
}
}
validcountwrong = 0;
if (author1 == authorme) {
validcountnotme = 0;
} else {
validcountnotme = 1;
}
author2 = author1;
} else {
validcount2--;
validcount3 = validcount2;
validcountwrong++;
if (validcountwrong == 10) {
document.getElementById("lastcountdesc").innerHTML = 'Click to reset?';
document.getElementById("lastcountdesc").style.background = '#ef7070';
var wrongtimer = setTimeout( function() {
         document.getElementById("lastcountdesc").innerHTML = 'Last count:';
document.getElementById("lastcountdesc").style.background = '';
      },15000);
}
}
$( "#lastcountdesc" ).hover(function() {
         document.getElementById("lastcountdesc").innerHTML = 'Click to reset';
document.getElementById("lastcountdesc").style.cursor = 'pointer';
       }, function() {
    document.getElementById("lastcountdesc").innerHTML = 'Last count:';
  });
$( "#lastcountdesc" ).click(function() {
validcount1 = '';
validcount2 = '';
validcount3 = '';
fullcount1 = '';
author1 = '';
author2 = '';
});
}
//////////
         var testhref = "https://old.reddit.com/live/" + threadid + "/updates/" + permalink;
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
         } else if (1 <= timestamp && timestamp < 100) {
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
         } else {
             colortest = '#ededed';
             if (darkcheck == 1) {colortest = '#2a2a2a';}
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
         data.elem.find('.body').prepend("<div onclick=window.open('"+testhref+"'); id=river></div>");
         data.elem.find('.river').css('position', 'absolute');
         document.getElementById("river").innerHTML = timestamp;
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
         document.getElementById("river").style.background = colortest;
         document.getElementById("river").style.color = elcolor;
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
        }
        else {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-10px').css('font-size', '9px').css('margin-top', '-16px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
    });


})(ReplyTimes || (ReplyTimes = {}));

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
            if (this.val() == 'Custom' && $(this).data('clicked') == true) {
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
            if (this.val() != 'Off' && $(this).data('clicked') == true) {
                customStrickenColor = window.prompt('Enter your custom background color.','#ddd');
                Cookie.save.customStrickenColor = customStrickenColor;
                Elements.$body.attr('data-customStrickenColor', customStrickenColor);
                Cookie.update();
                Styles.add("\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:"  + Elements.$body.attr('data-customStrickenColor') + "!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}");
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
            if (this.val() == 'Custom' && $(this).data('clicked') == true) {
                customBackgroundColor = window.prompt('Enter your custom background color.','#ddd');
                Cookie.save.customBackgroundColor = customBackgroundColor;
                Elements.$body.attr('data-customBackgroundColor', customBackgroundColor);
                Styles.add("\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:"  + Elements.$body.attr('data-customBackgroundColor') + "!important;\n\t}\n}");
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
    $('#liveupdate-header').prepend("<div id=idlecontainer><div id=statsplace><p id=lastcountdesc>Last count:<p id=lastcountcount></p><p>/u/<span id=lastcountuser></span></p></p><div id=splits><p>000s:<span id=split0></span></p><p>100s:<span id=split1></span></p><p>200s:<span id=split2></span></p><p>300s:<span id=split3></span></p><p>400s:<span id=split4></span></p><p>500s:<span id=split5></span></p><p>600s:<span id=split6></span></p><p>700s:<span id=split7></span></p><p>800s:<span id=split8></span></p><p>900s:<span id=split9></span></p></div></div></div>");
    $('#idlecontainer').css({'display': 'none', 'position': 'absolute', 'left': '130px', 'top': '75px', 'width': '115px', 'background': 'transparent', 'height': '70px'});
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
    var enabled = true;
    var $textarea = $('#new-update-form textarea');
    var $submitBtn = $('#new-update-form .save-button button');
    // RES already has a ctrl-enter feature since v4.7.8
    // Skip remaining actions if using a version higher than that
    var $resVersion = $('#RESConsoleVersion');
    if ($resVersion.length > 0 && +($resVersion.text().replace(/\D/g, '')) >= 478)
        enabled = false;
    // Bind keydown event to the textarea
    if (enabled) {
        $textarea.on('keydown', function (e) {
            if (e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                $submitBtn.trigger('click');
            }
        });
    }
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
		'rideride':'#069420',
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
	'MaybeNotWrong': '#077055',
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
    };
	if (USER == 'VitaminB16') {
userColors.LC_Chats = 'white';
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
        // Bot-maker privileges (/u/co3_carbonate, /u/rschaosid, /u/piyushsharma301,/u/rideride)
        if (data.author == 'MaybeNotWrong' || data.author == 'co3_carbonate' || data.author == 'rschaosid' || data.author == 'piyushsharma301' || data.author == 'rideride' || data.author == 'LeinadSpoon' || data.author == 'artbn') {
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



// /u/MaybeNotWrong username special
    if (SpecialUsernamesEnabled1 == true) {
if (data.author == kname1) {

var testArray = ['M','a','y','b','e','N','o','t','W','r','o','n','g'];
     var pseudoRandomness = data.elem.find('.body').prev().attr('href');
    pseudoRandomness = pseudoRandomness.substring(pseudoRandomness.indexOf("updates/") + 8).substring(0, 8).split("").reverse().join("");
    pseudoRandomness = parseInt(pseudoRandomness, 16);
    pseudoRandomness = pseudoRandomness / 4294967295;
    pseudoRandomness = String(pseudoRandomness);
        function bhuffle(o) {
        for(var j, x, i = o.length, stroq; stroq = pseudoRandomness.slice(0,2) + pseudoRandomness.slice(i+2), stroq = stroq.replace(/ /g, ""), i; j = parseInt(stroq * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
        }
bhuffle(testArray);

        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
              });

             data.author_elem.html(`<div style='color:#077055'>/u/<span id=shuffled>`+testArray.join("")+`</span></div>`)
	var testArray2 = testArray.join("");
if (testArray2 == 'MaybeNotWrong') {
             data.author_elem.html(`<span id="rainbowtext" style="color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;">/u/MaybeNotWrong</span>`);
}
}
} // SpecialUsernamesEnabled1 ending


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
if (lcchats == 'MaybeNotWrong' || lcchats == 'co3_carbonate' || lcchats == 'rschaosid' || lcchats == 'piyushsharma301' || lcchats == 'rideride' || lcchats == 'LeinadSpoon' || lcchats == 'artbn') {
            data.href_elem.css('font-weight', 'bold');
        }
}
    });
if(window.location.href.indexOf("110t4ltqqzi35") > -1 || window.location.href.indexOf("14ny3ur3axhd4") > -1) {
$('a[href*="/u/"]').each(function() {
var thishref = $(this).attr('href');
thishref = thishref.trim().replace('/u/', '');
    $(this).css('color', userColors[thishref]).css('fontStyle','initial').css('fontSize','13px');
if (thishref == 'MaybeNotWrong' || thishref == 'co3_carbonate' || thishref == 'rschaosid' || thishref == 'piyushsharma301' || thishref == 'rideride' || thishref == 'LeinadSpoon' || thishref == 'artbn') {
            $(this).css('font-weight', 'bold');
        }
});
	Update.loadedOld(function () {
$('a[href*="/u/"]').each(function() {
var thishref2 = $(this).attr('href');
thishref2 = thishref2.trim().replace('/u/', '');
    $(this).css('color', userColors[thishref2]).css('fontStyle','initial').css('fontSize','13px');
if (thishref2 == 'MaybeNotWrong' || thishref2 == 'co3_carbonate' || thishref2 == 'rschaosid' || thishref2 == 'piyushsharma301' || thishref2 == 'rideride' || thishref2 == 'LeinadSpoon' || thishref2 == 'artbn') {
            $(this).css('font-weight', 'bold');
        }
});
});
}
	    Styles.add("\n\n\t.amazingpikachu_38 {\n\t\tanimation: blinker 1s linear infinite;\n\t}\n\t@keyframes blinker {\n\t\t50% { opacity: 0; }\n\t}\n\n\t");
    Styles.add(`li.stricken > div > a[href="/user/MaybeNotWrong"].author.flipped {animation: flippa 1s linear infinite;} @keyframes flippa {50% { float:initial;position:absolute; } 100%{ float:left; } }}`);
    Styles.add(`li > div > a[href="/user/MaybeNotWrong"].author.blink {animation: blinkerm 1s linear infinite;} @keyframes blinkerm {50% { opacity:0; } 100%{ opacity:1; } }`);
    Styles.add(`li.stricken > div > div > span > p #counttext {text-decoration: line-through;} .liveupdate-listing li.liveupdate.stricken div.md .ignoredpost p:last-of-type {text-decoration: none;}  `);


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
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Minimal'] #header,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form .bottom-area,\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] div.content {\n\t\tmax-width: " + Math.max(450, $('#new-update-form textarea').outerWidth()) + "px;\n\t}\n\n\t");


})(DisplayMode || (DisplayMode = {}));
////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////
var RemoveSubmissionLag;
(function (RemoveSubmissionLag) {
    // INITIALIZATION
    var lastInput = '';
    var enabled = true;
    var ghostEnabled = false;
    var previews = [];
    // Options
    Options.addSelect({
        label: 'REMOVE SUBMISSION LAG',
        options: ['Enabled', 'Enabled without Ghost Messages', 'Disabled'],
        "default": 1,
        help: 'Upon submitting a message, the textbox is immediately cleared to allow you to enter new contents without waiting for your previous submission to be processed.\n\nThe ghost messages are to prevent messages from being permanently lost if they had failed to deliver. You can enable the feature without ghost messages if you find them too distracting.',
        onchange: function () {
            var display = this.val();
            enabled = display == 'Enabled' || display == 'Enabled without Ghost Messages';
            ghostEnabled = display == 'Enabled';
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
            // Add preview element, a "ghost" message containing the contents of the new message
            // until it has been delivered.
            // Prevents permanent loss of messages if delivery fails
            if (ghostEnabled && 1==2) { //Temporarily disabled ghost messages. May add them back later idk
                var html = SnuOwnd.getParser().render(val);
                var $buttonRow = $("\n\t\t\t\t\t<ul class=\"buttonrow\">\n\t\t\t\t\t\t<li><button>retry</button></li>\n\t\t\t\t\t\t<li><button>cancel</button></li>\n\t\t\t\t\t</ul>\n\t\t\t\t");
                var $elem_1 = $("\n\t\t\t\t\t<li class=\"liveupdate preview\">\n\t\t\t\t\t\t<a href=\"#\"><time class=\"live-timestamp\"></time></a>\n\t\t\t\t\t\t<div class=\"body\">\n\t\t\t\t\t\t\t<div class=\"md\">\n\t\t\t\t\t\t\t\t" + html + "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t").append($buttonRow);
                previews.push({
                    html: html.trim().replace(/(\r\n|\n|\r)/gm, ""),
                    elem: $elem_1
                });
                Elements.$updates.prepend($elem_1);
                // Setup event listeners for the buttons of the preview message
                var $buttons = $buttonRow.find('button');
                // "Retry" button
                $buttons.eq(0).on('click', function () {
                    Elements.$textarea.val(val).focus();
                });
                // "Cancel" button
                $buttons.eq(1).on('click', function () {
                    for (var i = 0; i < previews.length; i++) {
                        if ($elem_1 == previews[i].elem) {
                            $elem_1.remove();
                            previews.splice(i, 1);
                            break;
                        }
                    }
                });
            }
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
    // When new message is loaded and is by this user, check if we can delete the corresponding
    // preview message.
    // If it is by another user, push all the preview messages to the front (in the right order),
    // so that they seem to always be on top.
    // (Only if preview messages are enabled)
    Update.loadedNew(function (data) {
        if (!enabled || !ghostEnabled || 1==2)
            return;
        var l = previews.length; // number of preview messages
        if (data.author != USER) {
            // Message not from this user
            // Attempt to bring all the preview messages to the front and exit
            for (var i = 0; i < l; i++) {
                Elements.$updates.prepend(previews[i].elem);
            }
            return;
        }
        // Get the contents of the user's message (trimmed and without linebreaks),
        // loop through the preview messages (trimmed and without linebreaks),
        // and if the contents are the same, delete the preview message
        var body = data.body_elem.html().replace(/(\r\n|\n|\r)/gm, "").trim();
        //console.log(body);
        var to_delete = -1;
        for (var i = 0; i < l; i++) {
            //console.log(previews[i].html);
            if (previews[i].html == body) {
                to_delete = i;
                break;
            }
        }
        if (to_delete != -1)
            previews.splice(to_delete, 1)[0].elem.remove();
    });
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

//////////////////////////
// TeamBars.ts //
//////////////////////////
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
            var first_call = true;

            day_hoc_handler = function (data) {
                hmmyy = data["hoc"];
                checky = data["hoc"];
                if (first_call){
                    $(`<div id=wholetable><table id=loadtest><caption id=dailyenabler>Daily Hall of Counters [+]</caption><tr id="tablenames"><td>#</td><td>User</td><td>Counts</td></tr></table></div>`).insertBefore("#liveupdate-resources .md");
                    first_call = false;
                } else {
                    $(`#wholetable`).html(`<table id=loadtest><caption id=dailyenabler>Daily Hall of Counters [+]</caption><tr id="tablenames"><td>#</td><td>User</td><td>Counts</td></tr></table>`);
                }
                function getTableRow(item, index) {
                    let res = "<tr style='font-size:inherit;'";
                    if (index >= 3){
                        res += " class=collapsedo";
                    }
                    var hocname = [item.author, item.counts].join("</a></td><td>");
                    res += "><td>" + (index + 1) + "</td><td><a class=authoro>/u/" + hocname + "</td></tr>";
                    return res;
                }
                function jsonCheck(item) {
                    var hocnamd = [item.author, item.counts].join("");
                    return hocnamd;
                }

                hmmyy = hmmyy.map(getTableRow);
                checky = checky.map(jsonCheck);

                checky = checky.join("");
                checky = checky.replace(/[A-Za-z]/g, ``);
                checky = checky.replace(/[-]/g, ``);
                checky = checky.replace(/[_]/g, ``);
                checky = checky.replace(/[0-9]+/g, '');
                if (checky.length == 0) {
                    $('#loadtest').append(hmmyy.join(""));
                    $("#loadtest tbody:nth-child(5)").append(`<tr><td>divide</td></tr>`);
                    $(".authoro").each(function () {
                        //    $(this).prepend(`<a href=` + $(this).text() + `>`);
                        //        $(this).append(`</a>`);
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
                        document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [+]";
                        $(".collapsedo").css({
                            'display': 'none',
                        });
                    } else {
                        document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [-]";
                        $(".collapsedo").css({
                            'display': 'table-row',
                        });
                    }
                    $("#dailyenabler").on('click', function () {
                        if (dailysize == 0) {
                            dailysize++;
                            document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [-]";
                            $(".collapsedo").css({
                                'display': 'table-row',
                            });
                        } else {
                            dailysize--;
                            document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [+]";
                            $(".collapsedo").css({
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
                success: day_hoc_handler,   //////this is where you put the checky bracket
                error: function (data) {
                    hmmyy;
                }
            });

            setInterval(function () {

                var hmmyy;
                var checky;
                var checky2;
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
Styles.add(`                    #loadtest tbody tr:nth-child(2) td:nth-child(1){background: gold;color: black;}#loadtest tbody tr:nth-child(3) td:nth-child(1){background: silver;color: black;}#loadtest tbody tr:nth-child(4) td:nth-child(1){background: #cd7f32;color: black;}#loadtest{border: 1px solid black;width: 100%;text-align: center;}#loadtest tr td{border: 1px solid black;max-width: 223px;}#loadtest{overflow: hidden;height: 100%;}#loadtest{color: #000;font-size: inherit;font-weight: normal;}#dailyenabler{cursor: pointer;color: #000;font-size: 14px;font-weight: bold;margin-bottom: 3px;}#tablenames{font-weight: bold;}`);
            //document.getElementById("team1").style.cssText = 'background:#0000cf;color:white;z-index: 99999;min-width: 14px;max-width: 14px;height: 14px;line-height: 14px;border-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 11px !important;position: relative;text-indent: 12px;-webkit-transition: all 0.3s;transition: all 0.3s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor:help;';
        } //TeamBarsEnabled end
    }
    //////////////////////////////////
})(TeamBars || (TeamBars = {}));


//////////////////////////
// TeamBarsRevival.ts //
//////////////////////////
var TeamBarsRevival;
var TeamBarsRevivalEnabled;
(function (TeamBarsRevival) {
    // Options
    var enabled = true;
    var $checkbox = Options.addCheckbox({
        label: 'TEAM BARS',
        section: 'Advanced 2',
        "default": true,
        help: 'Enable or disable the team bars.',
        onchange: function () {
            enabled = this.prop('checked');
        }
    });
        if (enabled == true) {
        TeamBarsRevivalEnabled = true;
        } else {
        TeamBarsRevivalEnabled = false;
        }

//////////////////////////////////TEAM COMMAS

    var thingycheck = false;

setTimeout(function(){
if(window.location.href.indexOf("ta535s1hq2je") > -1 && thingycheck == true) {
if (TeamBarsRevivalEnabled == true) {
var hmmyyTeamBarsRevival;
var checkyTeamBarsRevival;
var checky2TeamBarsRevival;
$.ajax({
        method: 'GET',
        dataType: 'text',
        cache: false,
        url: 'https://gist.githubusercontent.com/rideride/83689b8fe63efbbba0d68dd2494a3b2a/raw/teambars_revival.txt',
        success: function(data) {
checkyTeamBarsRevival = `<div id="commacount"></div><div id="noncommacount"></div>`;
hmmyyTeamBarsRevival = data;
checky2TeamBarsRevival = data;
checky2TeamBarsRevival = checky2TeamBarsRevival.replace(/[0-9]+/g, '');
if (checkyTeamBarsRevival != checky2TeamBarsRevival) {
//alert('Something has gone wrong in the verification of the data. Please PM /u/rideride. To stop showing this message, disable the option for now until it is fixed');
} else {
$("<div id=loadtestTeamBarsRevival></div><div id=teamdisplay><div id=team1>The Revolutionaries</div><div id=team1count></div><div id=team2count></div><div id=team2>The Coalition</div></div>").insertBefore("#liveupdate-description");
document.getElementById('loadtestTeamBarsRevival').innerHTML = hmmyyTeamBarsRevival;
$("#loadtestTeamBarsRevival").css('display','none');
var commacountsTeamBarsRevival = parseInt(document.getElementById('commacount').innerHTML);
var noncommacountsTeamBarsRevival = parseInt(document.getElementById('noncommacount').innerHTML);
var totalcountsTeamBarsRevival = commacountsTeamBarsRevival + noncommacountsTeamBarsRevival;
var commapercentTeamBarsRevival = (commacountsTeamBarsRevival / totalcountsTeamBarsRevival) * 100;
commapercentTeamBarsRevival = Math.round( commapercentTeamBarsRevival * 10 ) / 10;
var noncommapercentTeamBarsRevival = (noncommacountsTeamBarsRevival / totalcountsTeamBarsRevival) * 100;
noncommapercentTeamBarsRevival = Math.round( noncommapercentTeamBarsRevival * 10 ) / 10;
document.getElementById('team1count').innerHTML = commacountsTeamBarsRevival;
document.getElementById('team2count').innerHTML = noncommacountsTeamBarsRevival;
$("#teamdisplay").css('display','flex').css('font-size','14px');
$("#team1count").css('flex',commapercentTeamBarsRevival + '0 1 0px').css('background','blue').css('text-align','center').css('color','transparent').css('padding-top','3px');
$("#team2count").css('flex',noncommapercentTeamBarsRevival + '0 1 0px').css('background','green').css('text-align','center').css('color','transparent').css('padding-top','3px');
$( "#teamdisplay" ).hover(function() {
         document.getElementById("team1count").style.color = 'white';
         document.getElementById("team2count").style.color = 'white';
       }, function() {
         document.getElementById("team1count").style.color = 'transparent';
         document.getElementById("team2count").style.color = 'transparent';
  });
$("#team1").css('padding','3px 3px 3px 3px').css('background','#0000cf').css('color','white');
$("#team2").css('padding','3px 3px 3px 3px').css('background','#006000').css('color','white');
    var cssheadTeamBarsRevival = $(`<style>#team1:before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0.3s;-webkit-transition-delay: 0.3s;transition-delay: 0.3s;content: attr(data-before);width: 10px;height: 12px;display: inline-block;position: absolute;left: 0px;text-align: center;top: 3px;text-indent: 3px;font-size: 14px;} #team1:hover::before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.0s;transition-delay: 0.0s;font-size:0px;} #team2:before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0.3s;-webkit-transition-delay: 0.3s;transition-delay: 0.3s;content:attr(data-before);width: 10px;height: 12px;display: inline-block;position: absolute;left: 0px;text-align: center;top: 3px;text-indent: 3px;font-size: 14px;} #team2:hover::before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.0s;transition-delay: 0.0s;font-size:0px;} #team1 {background: #0000cf;color: white;z-index: 99;min-width: 45px;max-width: 45px;height: 17px;line-height: 14px;border-top-left-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 0px;position: relative;text-indent: 0px;-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor: help;border-bottom-left-radius: 14px;} #team1:hover {font-size: 14px;max-width: 500px;padding: 0 5px;color: #fff} #team2 {background: #0000cf;color: white;z-index: 99;min-width: 45px;max-width: 45px;height: 17px;line-height: 14px;border-top-right-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 0px;position: relative;text-indent: 0px;-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor: help;border-bottom-right-radius: 14px;} #team2:hover {font-size: 14px;max-width: 500px;padding: 0 5px;color: #fff}</style>`);
$("#team1").attr('data-before',commapercentTeamBarsRevival+"%");
$("#team2").attr('data-before',noncommapercentTeamBarsRevival+"%");
    // INITIALIZATION
    $('head').append(cssheadTeamBarsRevival);
        }},
        error: function(data) {
            //alert('Error ' +data.status+ ' while loading Live Counting Extension: ' +data.statusText+ '\n\nPlease refresh to try again.');
        }
    });
setInterval(function(){
var hmmyyTeamBarsRevival;
var checkyTeamBarsRevival;
var checky2TeamBarsRevival;
$.ajax({
        method: 'GET',
        dataType: 'text',
        cache: false,
        url: 'https://gist.githubusercontent.com/rideride/83689b8fe63efbbba0d68dd2494a3b2a/raw/teambars_revival.txt',
        success: function(data) {
checkyTeamBarsRevival = `<div id="commacount"></div><div id="noncommacount"></div>`;
hmmyyTeamBarsRevival = data;
checky2TeamBarsRevival = data;
checky2TeamBarsRevival = checky2TeamBarsRevival.replace(/[0-9]+/g, '');
if (checkyTeamBarsRevival != checky2TeamBarsRevival) {
//alert('Something has gone wrong in the verification of the data. Please PM /u/rideride. To stop showing this message, disable the option for now until it is fixed');
} else {
document.getElementById('loadtestTeamBarsRevival').innerHTML = hmmyyTeamBarsRevival;
var commacountsTeamBarsRevival = parseInt(document.getElementById('commacount').innerHTML);
var noncommacountsTeamBarsRevival = parseInt(document.getElementById('noncommacount').innerHTML);
var totalcountsTeamBarsRevival = commacountsTeamBarsRevival + noncommacountsTeamBarsRevival;
var commapercentTeamBarsRevival = (commacountsTeamBarsRevival / totalcountsTeamBarsRevival) * 100;
commapercentTeamBarsRevival = Math.round( commapercentTeamBarsRevival * 10 ) / 10;
var noncommapercentTeamBarsRevival = (noncommacountsTeamBarsRevival / totalcountsTeamBarsRevival) * 100;
noncommapercentTeamBarsRevival = Math.round( noncommapercentTeamBarsRevival * 10 ) / 10;
document.getElementById('team1count').innerHTML = commacountsTeamBarsRevival;
document.getElementById('team2count').innerHTML = noncommacountsTeamBarsRevival;
$("#team1count").css('flex',commapercentTeamBarsRevival + '0 1 0px');
$("#team2count").css('flex',noncommapercentTeamBarsRevival + '0 1 0px');
$("#team1").attr('data-before',commapercentTeamBarsRevival+"%");
$("#team2").attr('data-before',noncommapercentTeamBarsRevival+"%");
}},
        error: function(data) {
            //alert('Error ' +data.status+ ' while loading Live Counting Extension: ' +data.statusText+ '\n\nPlease refresh to try again.');
        }
    });
}, 60500);
//document.getElementById("team1").style.cssText = 'background:#0000cf;color:white;z-index: 99999;min-width: 14px;max-width: 14px;height: 14px;line-height: 14px;border-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 11px !important;position: relative;text-indent: 12px;-webkit-transition: all 0.3s;transition: all 0.3s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor:help;';
} //TeamBarsEnabled end
}
    },3000);
//////////////////////////////////
})(TeamBarsRevival || (TeamBarsRevival = {}));
////////////////////////


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
            if (val == 'Disable') {
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

////////////////////////
// Ignore.ts //
////////////////////////

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
               black_medium_square:"",eight:"8️⃣",leftwards_arrow_with_hook:"↩",radio:"📻",triangular_ruler:"📐",black_nib:"✒",eight_pointed_black_star:"✴",lemon:"🍋",radio_button:"🔘",trident:"🔱",black_small_square:"",eight_spoked_asterisk:"✳",leo:"♌",rage:"😡",black_square_button:"🔲",electric_plug:"🔌",rage1:"",trolleybus:"🚎",libra:"♎",rage2:"",trollface:"",email:"✉",light_rail:"🚈",rage3:"",trophy:"🏆",blue_book:"📘",end:"🔚",link:"🔗",rage4:"",tropical_drink:"🍹",blue_car:"🚙",envelope:"✉",railway_car:"🚃",envelope_with_arrow:"",truck:"🚚",es:"🇪🇸",lock:"🔒",trumpet:"🎺",euro:"💶",lock_with_ink_pen:"🔏",boat:"⛵",european_castle:"🏰",lollipop:"🍭",raising_hand:"",bomb:"💣",european_post_office:"🏤",loop:"➿",book:"",loudspeaker:"📢",ramen:"🍜",tv:"📺",bookmark:"🔖",exclamation:"❗",love_hotel:"🏩",twisted_rightwards_arrows:"🔀",bookmark_tabs:"📑",recycle:"♻",two:"2️⃣",books:"📚",low_brightness:"🔅",red_car:"🚗",m:"Ⓜ",red_circle:"🔴",mag:"🔍",registered:"®",factory:"🏭",mag_right:"🔎",u5272:"🈹",mahjong:"🀄",u5408:"🈴",bowling:"🎳",mailbox:"📫",repeat:"🔁",u55b6:"🈺",bowtie:"",fast_forward:"⏩",mailbox_closed:"📪",repeat_one:"🔂",u6307:"🈯",fax:"📠",mailbox_with_mail:"📬",restroom:"🚻",u6708:"🈷",bread:"🍞",mailbox_with_no_mail:"📭",u6709:"🈶",feelsgood:"",rewind:"⏪",u6e80:"🈵",bridge_at_night:"🌉",feet:"👣",u7121:"🈚",ferris_wheel:"🎡",rice:"🍚",u7533:"🈸",file_folder:"📁",rice_ball:"🍙",u7981:"🈲",finnadie:"",rice_cracker:"🍘",u7a7a:"🈳",bulb:"💡",rice_scene:"🎑",uk:"🇬🇧",bullettrain_front:"🚅",fire_engine:"🚒",bullettrain_side:"🚄",fireworks:"🎆",meat_on_bone:"🍖",rocket:"🚀",bus:"🚌",mega:"📣",roller_coaster:"🎢",underage:"🔞",busstop:"🚏",melon:"🍈",memo:"📝",unlock:"🔓",fish_cake:"🍥",mens:"🚹",rotating_light:"🚨",
               up:"🆙",fishing_pole_and_fish:"🎣",metal:"",round_pushpin:"📍",us:"🇺🇸",cake:"🍰",metro:"🚇",rowboat:"🚣",calendar:"📆",five:"5️⃣",microphone:"🎤",ru:"🇷🇺",vertical_traffic_light:"🚦",calling:"📲",flags:"🎏",microscope:"🔬",rugby_football:"🏉",vhs:"📼",flashlight:"🔦",vibration_mode:"📳",camera:"📷",floppy_disk:"💾",minibus:"🚐",video_camera:"📹",cancer:"♋",flower_playing_cards:"🎴",minidisc:"💽",video_game:"🎮",candy:"🍬",mobile_phone_off:"📴",sa:"🈂",violin:"🎻",capital_abcd:"🔠",money_with_wings:"💸",sagittarius:"♐",virgo:"♍",capricorn:"♑",football:"🏈",moneybag:"💰",sailboat:"⛵",car:"🚗",sake:"🍶",vs:"🆚",card_index:"📇",fork_and_knife:"🍴",carousel_horse:"🎠",fountain:"⛲",monorail:"🚝",santa:"🎅",four:"4️⃣",satellite:"📡",mortar_board:"🎓",warning:"⚠",cd:"💿",fr:"🇫🇷",mount_fuji:"🗻",saxophone:"🎷",watch:"⌚",chart:"💹",free:"🆓",mountain_bicyclist:"🚵",school:"🏫",chart_with_downwards_trend:"📉",fried_shrimp:"🍤",mountain_cableway:"🚠",school_satchel:"🎒",watermelon:"🍉",chart_with_upwards_trend:"📈",fries:"🍟",mountain_railway:"🚞",scissors:"✂",checkered_flag:"🏁",scorpius:"♏",wavy_dash:"〰",cherries:"🍒",fuelpump:"⛽",movie_camera:"🎥",waxing_gibbous_moon:"🌔",moyai:"🗿",scroll:"📜",wc:"🚾",seat:"💺",children_crossing:"🚸",game_die:"🎲",secret:"㊙",wedding:"💒",chocolate_bar:"🍫",gb:"🇬🇧",musical_keyboard:"🎹",musical_note:"🎵",church:"⛪",gemini:"♊",musical_score:"🎼",seven:"7️⃣",wheelchair:"♿",cinema:"🎦",ghost:"👻",mute:"🔇",shaved_ice:"🍧",white_check_mark:"✅",circus_tent:"🎪",gift:"🎁",white_circle:"⚪",city_sunrise:"🌇",gift_heart:"💝",name_badge:"📛",white_flower:"💮",city_sunset:"🌆",neckbeard:"",ship:"🚢",white_large_square:"",cl:"🆑",shipit:"",white_medium_small_square:"",
               negative_squared_cross_mark:"❎",thinking:"🤔",clapper:"🎬",goberserk:"",tag:"🏷️",clipboard:"📋",godmode:"",new:"🆕",white_square_button:"🔳",clock1:"🕐",golf:"⛳",shower:"🚿",wind_chime:"🎐",clock10:"🕙",grapes:"🍇",signal_strength:"📶",wine_glass:"🍷",clock1030:"🕥",green_apple:"🍏",newspaper:"📰",six:"6️⃣",clock11:"🕚",green_book:"📗",ng:"🆖",six_pointed_star:"🔯",clock1130:"🕦",nine:"9️⃣",ski:"🎿",clock12:"🕛",grey_exclamation:"❕",no_bell:"🔕",clock1230:"🕧",grey_question:"❔",no_bicycles:"🚳",clock130:"🕜",no_entry:"⛔",womens:"🚺",clock2:"🕑",no_entry_sign:"🚫",slot_machine:"🎰",clock230:"🕝",small_blue_diamond:"🔹",wrench:"🔧",clock3:"🕒",no_mobile_phones:"📵",small_orange_diamond:"🔸",x:"❌",clock330:"🕞",guitar:"🎸",small_red_triangle:"🔺",clock4:"🕓",gun:"🔫",no_pedestrians:"🚷",small_red_triangle_down:"🔻",yen:"💴",clock430:"🕟",no_smoking:"🚭",clock5:"🕔",hamburger:"🍔",nonpotable_water:"🚱",clock530:"🕠",hammer:"🔨",zero:"0️⃣",clock6:"🕕",notebook:"📓",clock630:"🕡",notebook_with_decorative_cover:"📔",horse_racing:"🏇",christmas_tree:"🎄"
           }
           const regExpression = /:([^\s]+):/g
           const emojiIt = (re, text) => {
               while (result = re.exec(text)) {
                   var temptext = text;
                   if(!(result[1] in emojiMap)) {
                       text = text.replace(result[0], '`'+result[1]+'`')
                   } else {
                       text = text.replace(result[0], emojiMap[result[1]]);
                   }
               }
               return text
           }
           function Inputty() {
               document.querySelector('.md textarea').value = emojiIt(regExpression, document.querySelector('.md textarea').value );
           }
           document.querySelector('.md textarea').addEventListener('input', Inputty);
    }
})(Emojis || (Emojis = {}));
