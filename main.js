/**
/**
* LIVE COUNTING EXTENSION V1.7.0
* (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
*/
// CONSTANTS

var ELEMENTS = require('./src/utils/elements.ts');
var UPDATE_EVENTS = require('./src/events/update-events.ts').UPDATE_EVENTS;

// Extension version
var VERSION = 'v1.7.0';

var USER = $('#header .user a[href]').html();

// Thread ID
var THREAD = (function () {
  var components = window.location.pathname.split('/');
  for (var i = components.length - 1; i >= 0; i--) {
    var component = components[i].trim();
    if (component.length > 0) return component.replace(/^.*\/([^/]*)/, '$1');
  }
})();
// Named Threads

const THREADS = require('./src/data/threads.json');

// 100k name information
const knames = [
  'TOP_20',
  'greenpeppercat',
  'naimagawa',
  'TheMatsValk',
  'cuteballgames',
];
const SpecialUsernamesEnabled = new Array(knames.length).fill(true);

// Bold usernames
const BOLD_USERS = new Set([
  'MaybeNotWrong',
  'co3_carbonate',
  'rschaosid',
  'piyushsharma301',
  'LeinadSpoon',
  'artbn',
]);

// Emote stuff
const imageEmoteData = require('./src/data/image-emotes.json');
const imageEmotes = Object.keys(imageEmoteData);

// Ignore function vars
var ignored = [];
ignored.push(localStorage.getItem('ignoredppl'));

//Daily HoC vars
var dailysize = 0;
var dailysizereal = '90px';
var dailysize2 = -1;
var dailysizereal2 = '90px';
var colortransfers = '';
var currentColor = 0;
var colors = '';
var dailyHocColorNamesEnable2 = true;

//Timestamp vars
var timestampEnable = true;
var darkcheck = 0;
var customClearTime;
var customStrickenColor;
var customBackgroundColor;
var timeCheck = 0;
setTimeout(function () {
  timeCheck = 1;
}, 1000);

// Slow counting special feature
if (THREAD == THREADS.SLOW) {
  $('#liveupdate-description').append(
    "<p style='background:#e2ffdb;font-size:16px;' id=countdownslow></p>"
  );
  document.title = '[live] Slow counting (one count per hour)';
  $('.save-button button.btn').click(function () {
    var countDownDateA = new Date();
    countDownDateA.setHours(countDownDateA.getHours() + 1);
    $('#countdownslow').css('background', '#e2ffdb');
    var tugOfWarWrongDirectionA = setInterval(function () {
      var nowTugA = new Date().getTime();
      var distanceTugA = countDownDateA - nowTugA;
      var minutesTugA = Math.floor(
        (distanceTugA % (1000 * 60 * 60)) / (1000 * 60)
      );
      var secondsTugA = Math.floor((distanceTugA % (1000 * 60)) / 1000);
      document.getElementById('countdownslow').innerHTML =
        minutesTugA + 'm ' + secondsTugA + 's';
      document.title =
        '[' + minutesTugA + 'm] Slow counting (one count per hour)';
      if (distanceTugA < 0) {
        clearInterval(tugOfWarWrongDirectionA);
        document.getElementById('countdownslow').innerHTML =
          'You can post now!';
        $('#countdownslow').css('background', '#ffaeae');
        document.title = '[!!] Slow counting (one count per hour)';
      }
    }, 1000);
  });
}

//Last count vars (Temporary before I remake it)
var current_number = '';
var last_number = '';
var expected_number = '';
var end_of_cur_num = '';
var vc_times = null;
var vc_splits = null;
var update_body = '';
var author_current = '';
var author_last = '';
var validcountwrong = 0;
var all_times = {};
// Last count functions
// Get the Splits for the current thread
function get_splits() {
  let splits;
  switch (THREAD) {
    case THREADS.BACKWARDS:
      splits = [
        '900',
        '800',
        '700',
        '600',
        '500',
        '400',
        '300',
        '200',
        '100',
        '000',
      ];
      break;
    case THREADS.BASE2:
      splits = [
        '0010000000',
        '0100000000',
        '0110000000',
        '1000000000',
        '1010000000',
        '1100000000',
        '1110000000',
        '0000000000',
      ];
      break;
    case THREADS.BASE3:
      splits = [
        '010000',
        '020000',
        '100000',
        '110000',
        '120000',
        '200000',
        '210000',
        '220000',
        '000000',
      ];
      break;
    case THREADS.BASE4:
      splits = [
        '02000',
        '10000',
        '12000',
        '20000',
        '22000',
        '30000',
        '32000',
        '00000',
      ];
      break;
    default:
      splits = [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '000',
      ];
      break;
  }
  return splits;
}
// How many digits are in the split (ex. split X000 requires 3, split X0000 requires 4)
function get_split_digits() {
  let digits;
  switch (THREAD) {
    case THREADS.BASE2:
      digits = 10;
      break;
    case THREADS.BASE3:
      digits = 6;
      break;
    case THREADS.BASE4:
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
  new Notification('New K Alert!', {
    body: 'New K: ' + number,
  });
}

function parse_body(text) {
  let number = null;
  let separator = null;
  if (text === '') return number;
  var body = tokenize(text);
  var tokens = body['tokens'];
  var comment = body['comment'];
  if (tokens.length > 0 && !tokens[0]['is_digit_group']) {
    tokens = tokens.slice(1);
  }
  if (tokens.length > 0 && !tokens[tokens.length - 1]['is_digit_group']) {
    tokens = tokens.slice(0, tokens.length - 1);
  }
  for (let i = 1; i < tokens.length; i += 2) {
    if (separator == null) {
      separator = tokens[i]['token'];
    }
  }
  if (tokens.length > 0 && [null, '.', ',', ', ', ' '].includes(separator)) {
    var num = '';
    var original_number = '';
    for (let i = 0; i < tokens.length; i += 2) {
      num += tokens[i]['token'];
    }
    for (let i = 0; i < tokens.length; i += 1) {
      original_number += tokens[i]['token'];
    }
    number = num;
  }
  return [number, comment, original_number];
}
function tokenize(text) {
  text = text.trim();
  if (text[0] == 'v') {
    text = text.slice(1);
  }
  var tokens = [];
  var token = '';
  var is_digit_group = false;
  var index = 0;
  while (1) {
    if (
      index >= text.length ||
      /[a-zA-Z]/.test(text[index]) ||
      text[index] === '\n' ||
      /[0-9]/.test(text[index]) != is_digit_group
    ) {
      if (token.length > 0) {
        tokens.push({ is_digit_group: is_digit_group, token: token });
        token = '';
      }
      is_digit_group = !is_digit_group;
    }
    if (index >= text.length) {
      return { tokens: tokens, comment: null };
    } else if (
      /[a-zA-Z]/.test(text[index]) ||
      text[index] === '\n' ||
      (!is_digit_group && token.length > 2)
    ) {
      return { tokens: tokens, comment: text.slice(index) };
    }
    token += text[index];
    index++;
  }
}

// Add context button
if (window.location.href.indexOf('updates') > -1) {
  var contex = window.location.href;
  contex = contex.replace('updates\/', '?after=LiveUpdate_');
  $('.liveupdate-listing').prepend('<a id=contexter>context</a>');
  $('#contexter')
    .attr('href', contex)
    .css('text-align', 'center')
    .css('margin-bottom', '15px')
    .css('color', '#369')
    .css('background', '#eee')
    .css('display', 'block');
  //return;
  throw new Error();
}

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
        attributes = extend(
          {
            path: '/',
          },
          api.defaults,
          attributes
        );
        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(
            expires.getMilliseconds() + attributes.expires * 864e5
          );
          attributes.expires = expires;
        }
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          );
        } else {
          value = converter.write(value, key);
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, encodeURI);
        return (document.cookie = [
          key,
          '=',
          value,
          attributes.expires
            ? '; expires=' + attributes.expires.toUTCString()
            : '',
          attributes.path ? '; path=' + attributes.path : '',
          attributes.domain ? '; domain=' + attributes.domain : '',
          attributes.secure ? '; secure' : '',
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
          cookie = converter.read
            ? converter.read(cookie, name)
            : converter(cookie, name) ||
              cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }
      return result;
    };
    api.set = api;
    api.get = function (key) {
      return api.call(api, key);
    };
    api.getJSON = function () {
      return api.apply(
        {
          json: true,
        },
        [].slice.call(arguments)
      );
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(
        key,
        '',
        extend(attributes, {
          expires: -1,
        })
      );
    };
    api.withConverter = init;
    return api;
  }
  return init(function () {});
})();

///////////////
// Cookie.ts //
///////////////
// Uses the js-cookie library (lib/cookies.ts) for specialised cookie operations and intialization
var Cookie;
(function (Cookie) {
  // INITIALIZATION
  var cookieName = 'LCE_Cookie';
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
    customBackgroundColor: '#ddd',
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
  } else if (Cookie.save.version != cookieVersion) {
    Cookie.saveDefaultOptions = true;
    Cookie.save.version = cookieVersion;
    // If the current save is missing a few keys, add these keys, set to the default
    for (var k in save_default) {
      if (!Cookie.save.hasOwnProperty(k)) Cookie.save[k] = save_default[k];
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
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('id', 'lc-body');
  // Make the submitError display default to none (important in RemoveSubmissionLag)
  ELEMENTS.SUBMIT_ERROR.css('display', 'none');
})(Elements || (Elements = {}));
///////////////
// Styles.ts //
///////////////
var Styles;
(function (Styles) {
  // STYLESHEET
  var $css = $(
    '<style>\n\n\t/* General styles */\n\t#lc-body, #lc-body .liveupdate-listing {\n\t\tmin-width: 0px;\n\t}\n\n\t/* Prevent the button row from always showing up when screen is small */\n\t#lc-body li.liveupdate ul.buttonrow {\n\t\tdisplay: none !important;\n\t}\n\n\t#lc-body li.liveupdate:hover ul.buttonrow {\n\t\tdisplay: block !important;\n\t}\n\n\t/* Disable the transition entrance fade effect when an update is sent */\n\t#lc-body li.liveupdate * {\n\t\ttransition: none;\n\t}\n\n\t</style>'
  );
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
  // Styles
  if (THREAD == '14ny3ur3axhd4') {
    Styles.add(`.river {display:none!important;}`);
  }
})(Styles || (Styles = {}));
////////////////
// Options.ts //
////////////////
var Options;
(function (Options) {
  // INITIALIZATION
  // Initialize new content in the options box
  // TODO: move the $all to another core file since it will be used for stats as well
  var $all_heading = $(
    '\n\t\t<h1 style="font-size:16px;">\n\t\t\t<a id="lceversion" href="https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme" target="_blank">Live Counting Extension ' +
      VERSION +
      '</a> \n\t\t</h1>\n\t'
  );
  //    var $options_heading = $("<h2>Options </h2>");
  var $options_basic_heading = $('<h2>Basic </h2>');
  var $options_advanced_heading = $('<h2>Advanced </h2>');
  var $options_advanced2_heading = $('<h2>Advanced 2 </h2>');
  var $all_toggle = $(
    '<span class="toggle-trigger" style="font-size:15px;">[-]</span>'
  );
  var $options_toggle = $('<span class="toggle-trigger">[-]</span>');
  var $options_basic_toggle = $('<span class="toggle-trigger">[-]</span>');
  var $options_advanced_toggle = $('<span class="toggle-trigger">[-]</span>');
  var $options_advanced2_toggle = $('<span class="toggle-trigger">[-]</span>');
  var $all = $("<div id='live-counting-extension'></div>");
  var $options = $('<div></div>');
  var $options_basic = $('<div></div>');
  var $options_advanced = $('<div></div>');
  var $options_advanced2 = $('<div></div>');
  $all_heading.append($all_toggle);
  $all.append($options);
  //    $options_heading.append($options_toggle);
  $options_basic_heading.append($options_basic_toggle);
  $options_advanced_heading.append($options_advanced_toggle);
  $options_advanced2_heading.append($options_advanced2_toggle);
  $options.append(
    $options_basic_heading,
    $options_basic,
    $options_advanced_heading,
    $options_advanced,
    $options_advanced2_heading,
    $options_advanced2
  );
  ELEMENTS.OPTIONS_ELEMENT.append($all_heading, $all);
  ELEMENTS.OPTIONS_ELEMENT.detach().prependTo(ELEMENTS.SIDEBAR_ELEMENT);
  ELEMENTS.SIDEBAR_ELEMENT.insertAfter('#new-update-form');
  ELEMENTS.SIDEBAR_ELEMENT.addClass('large-sidebar');
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
      } else {
        // hide
        $trigger.html('[+]');
        $change.slideUp(500);
        Cookie.save.collapsed[index] = true;
      }
      Cookie.update();
    });
    // immediately trigger the click event if current cookie save is true
    if (Cookie.save.collapsed[index]) $trigger.trigger('click');
  }
  // call
  toggle($all_toggle, $all, 0);
  toggle($options_toggle, $options, 1);
  toggle($options_basic_toggle, $options_basic, 2);
  toggle($options_advanced_toggle, $options_advanced, 3);
  toggle($options_advanced2_toggle, $options_advanced2, 4);
  // Styles
  Styles.add(
    "\n\n\t/* Subheadings */\n\t#live-counting-extension h2 {\n\t\tcolor: #4F4F4F;\n\t\tfont-size: 14px;\n\t\tfont-weight: bold;\n\t\tmargin: 8px 0px;\n\t}\n\n\t/* Toggle triggers */\n\t/* Don't specify #live-counting-extension for this, because the first trigger is actually outside the #live-counting-extension element */\n\t\n\t.toggle-trigger {\n\t\tcursor: pointer;\n\t\tcolor: #656565;\n\t\tfont-weight: normal;\n\t}\n\n\n\t/* Labels */\n\t#live-counting-extension label {\n\t\tdisplay: block;\n\t\tmargin-bottom: 10px;\n\t\tline-height: 160%;\n\t}\n\t\n\t"
  );
  // METHODS
  // Add a checkbox option
  // Returns the newly created checkbox
  function addCheckbox(properties) {
    // Handling properties
    if (!properties.hasOwnProperty('section')) properties.section = 'Basic';
    if (!properties.hasOwnProperty('onchange')) properties.onchange = null;
    if (!properties.hasOwnProperty('default')) properties['default'] = false;
    if (!properties.hasOwnProperty('help')) properties.help = '';
    var label = properties['label'],
      section = properties['section'],
      onchange = properties['onchange'],
      defaultChecked = properties['default'],
      help = properties['help'];
    // Default value handling (cookie)
    var checked = defaultChecked;
    if (
      Cookie.saveDefaultOptions &&
      !Cookie.save.options.hasOwnProperty(label)
    ) {
      Cookie.save.options[label] = checked;
      Cookie.update();
    } else checked = Cookie.save.options[label];
    // Create label and checkbox
    var $elem = $(
      '<input type="checkbox"' + (checked ? ' checked="true"' : '') + '/>'
    );
    // Add option
    var $options_section = $options_basic;
    if (section == 'Basic') $options_section = $options_basic;
    else if (section == 'Advanced') $options_section = $options_advanced;
    else if (section == 'Advanced 2') $options_section = $options_advanced2;
    $options_section.append(
      $('<label>' + label + '</label>')
        .attr('title', help)
        .prepend($elem)
    );
    // Handle onchange
    $elem.on('change', function () {
      Cookie.save.options[label] = $elem.prop('checked');
      Cookie.update();
      if (onchange != null) onchange.call($elem);
    });
    // Trigger change event if the value != default
    if (defaultChecked != checked) $elem.trigger('change');
    return $elem;
  }
  Options.addCheckbox = addCheckbox;
  // Add select option
  // Returns the newly created select
  function addSelect(properties) {
    // Handling properties
    if (!properties.hasOwnProperty('section')) properties.section = 'Basic';
    if (!properties.hasOwnProperty('onchange')) properties.onchange = null;
    if (!properties.hasOwnProperty('default')) properties['default'] = 0;
    if (!properties.hasOwnProperty('help')) properties.help = '';
    var label = properties['label'],
      options = properties['options'],
      section = properties['section'],
      onchange = properties['onchange'],
      selectedIndex = properties['default'],
      help = properties['help'];
    // Default value handling (cookie)
    var defaultVal = options[selectedIndex];
    var selectedVal = defaultVal;
    if (
      Cookie.saveDefaultOptions &&
      !Cookie.save.options.hasOwnProperty(label)
    ) {
      Cookie.save.options[label] = selectedVal;
      Cookie.update();
    } else selectedVal = Cookie.save.options[label];
    // Create label and select
    var $options_section;
    var $elem = $('<select></select>');
    if (section == 'Basic') $options_section = $options_basic;
    else if (section == 'Advanced') $options_section = $options_advanced;
    else if (section == 'Advanced 2') $options_section = $options_advanced2;
    $options_section.append(
      $('<label>' + label + ': </label>')
        .attr('title', help)
        .append($elem)
    );
    // Configure the max-width of the select to ensure that it doesn't end up getting wrapped
    // onto the next line
    $elem.css(
      'max-width',
      all_innerWidth - ($elem.offset().left - all_offsetLeft) + 'px'
    );
    // Set options of select
    var elem_contents = '';
    for (var i = 0; i < options.length; i++) {
      elem_contents +=
        '<option value="' +
        options[i] +
        '"' +
        (options[i] == selectedVal ? ' selected="true"' : '') +
        '>' +
        options[i] +
        '</option>';
    }
    $elem.html(elem_contents);
    // Handle onchange
    $elem.on('change', function () {
      Cookie.save.options[label] = $elem.val();
      Cookie.update();
      if (onchange != null) onchange.call($elem);
    });
    // Trigger change event if the value != default
    if (defaultVal != selectedVal) $elem.trigger('change');
    return $elem;
  }
  Options.addSelect = addSelect;
  // WINDOW SIZE
  // If sidebar turns into '[+] more about this live thread',
  // (or window width < 700px according to CSS),
  // move options to inside .sidebar
  // New section in the sidebar for options
  var $section = $(
    "<section>\n\t\t<h2>options</h2>\n\t\t<div class='md'></div>\n\t</section>"
  );
  var $section_md = $section.children('.md');
  $section.css('display', 'none').css('margin-top', '20px');
  ELEMENTS.SIDEBAR_ELEMENT.children('.sidebar-expand').after($section);
  // Window resized
  $(window).on('load resize', function () {
    if (window.innerWidth <= 700) {
      ELEMENTS.SIDEBAR_ELEMENT.removeClass('large-sidebar');
      // add the options to '[+] more about this live thread'
      if ($section.css('display') == 'none') {
        $section.css('display', '');
        $all.detach().appendTo($section_md);
      }
    } else {
      ELEMENTS.SIDEBAR_ELEMENT.addClass('large-sidebar');
      // remove the options from '[+] more about this live thread'
      if ($section.css('display') != 'none') {
        $section.css('display', 'none');
        $all.detach().insertAfter($all_heading);
      }
    }
  });

  // Styles
  Styles.add(
    '.large-sidebar {margin-top: -25%!important;} #liveupdate-options { font-size: 10px!important; margin-top: 0px;} aside.sidebar section { border-top: none; } '
  );
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
    default: true,
    section: 'Advanced 2',
    help: 'Enables the daily HoC colored usernames.',
    onchange: function () {
      enabledcoloryo = this.prop('checked');
      dailyHocColorNamesEnable2 = enabledcoloryo;
    },
  });
})(dailyHocColorNamesEnable || (dailyHocColorNamesEnable = {}));

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
    default: true,
    section: 'Advanced 2',
    help: 'Enables LCE reply times.',
    onchange: function () {
      enabledrt = this.prop('checked');
      timestampEnable = enabledrt;
    },
  });

  var specialTimes = require('./src/data/special-times.json');
  UPDATE_EVENTS.addListener('new', (data) => {
    if (!enabledrt) return;
    var thisTime = data.node.find('.body').prev().attr('href');
    var timestamp_current = thisTime.substring(
      thisTime.indexOf('updates/') + 8
    );
    timestamp_current =
      timestamp_current.substring(15, 18) +
      timestamp_current.substring(9, 13) +
      timestamp_current.substring(0, 8);
    timestamp_current = parseInt(timestamp_current, 16);
    var thisTime2 = data.node
      .find('.body')
      .parent()
      .nextAll('.liveupdate:first')
      .children()
      .first()
      .attr('href');
    var timestamp_last = thisTime2.substring(thisTime2.indexOf('updates/') + 8);
    timestamp_last =
      timestamp_last.substring(15, 18) +
      timestamp_last.substring(9, 13) +
      timestamp_last.substring(0, 8);
    timestamp_last = parseInt(timestamp_last, 16);
    var timestamp = timestamp_current - timestamp_last;
    timestamp = timestamp / 10000;
    timestamp = Math.round(timestamp);
    //////////Last Count (messy for now)
    if (ELEMENTS.BODY_ELEMENT.attr('data-LastCount') != 'Off') {
      if (isNaN(Number(expected_number)) == true) {
        last_number = current_number;
      }
      // Predict the next number based on current thread
      function get_expected_low_base(last_num, base) {
        let num_str = last_num.toString();
        let num_value = parseInt(num_str, base);
        num_value++;
        num_str = num_value.toString(base);
        let expected_number = BigInt(num_str);
        return expected_number;
      }
      function get_expected(last_num) {
        if (last_num === '') return current_number;
        let expected_number;
        switch (THREAD) {
          case THREADS.BASE2:
            expected_number = get_expected_low_base(last_num, 2);
            break;
          case THREADS.BASE3:
            expected_number = get_expected_low_base(last_num, 3);
            break;
          case THREADS.BASE4:
            expected_number = get_expected_low_base(last_num, 4);
            break;
          case THREADS.BACKWARDS:
            expected_number = last_num - 1n;
            break;
          default:
            expected_number = last_num + 1n;
            break;
        }
        return expected_number;
      }
      update_body = data.node.find('.body > .md').text();
      author_current = data.node.find('.body > .author').text();
      author_current = author_current.trim().replace('/u/', '');
      if (THREAD == THREADS.DOUBLE_COUNTING) {
        author_last = '';
      } //ignore author logic on multiple in a row
      let current_number_string = parse_body(update_body)[0];
      current_number =
        current_number_string === null ? null : BigInt(current_number_string);
      expected_number = get_expected(last_number);
      if (
        (expected_number == current_number &&
          author_last != author_current &&
          expected_number != null) ||
        isNaN(Number(expected_number)) == true
      ) {
        $('#lastcountcount').text(current_number.toLocaleString());
        $('#lastcountuser').text(author_current);
        end_of_cur_num = current_number_string.substr(
          current_number_string.length - get_split_digits()
        );
        // If current number is end of split, update splits
        let splits = get_splits();
        let splits_amount = splits.length;
        // Initialise correct amount of splits
        if (vc_times === null) {
          vc_times = Array(splits_amount).fill('');
          vc_splits = Array(splits_amount).fill('');
        }
        if (splits.includes(end_of_cur_num)) {
          let index = splits.indexOf(end_of_cur_num);
          if (index == splits_amount - 1 && vc_times[index] != '') {
            let split_ms = timestamp_current - vc_times[index];
            let split_s = split_ms / 1000;
            let split_rounded = Math.round(split_s / 10);
            $('#lcbot_speed').text(split_rounded);
          }
          let prev_index = (index + splits_amount - 1) % splits_amount; //Subtracts one with wraparound
          vc_times[index] = timestamp_current;
          if (vc_times[prev_index] != '') {
            let split_ms = vc_times[index] - vc_times[prev_index];
            let split_s = split_ms / 1000;
            let split_rounded = Math.round(split_s / 10);
            vc_splits[index] = split_rounded;
            $('#split' + index).text(split_rounded);
            all_times[current_number] = split_rounded;
            $('#split69').text(JSON.stringify(all_times, null, '\t'));
          }
        }
        validcountwrong = 0;
        author_last = author_current;
        last_number = current_number;
        if (
          THREAD == THREADS.MAIN &&
          ELEMENTS.BODY_ELEMENT.attr('data-KpartAlert') == 'true'
        ) {
          if (Notification.permission === 'granted') {
            if (
              current_number.toString().substr(5) == '000' &&
              !document.hasFocus()
            ) {
              showNotification(current_number);
            }
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
              console.log(permission);
            });
          }
        }
      } else {
        validcountwrong++;
        if (validcountwrong == 30) {
          document.getElementById('lastcountdesc').innerHTML =
            'Click to reset?';
          document.getElementById('lastcountdesc').style.background = '#ef7070';
          /*var wrongtimer = setTimeout( function() {
                        document.getElementById("lastcountdesc").innerHTML = 'Last count:';
                        document.getElementById("lastcountdesc").style.background = '';
                        $("#lastcountdesc").click();
                    },15000);*/
        }
      }
    }
    //////////
    var permalink = thisTime.substring(thisTime.indexOf('updates/') + 8);
    var testhref =
      'https://old.reddit.com/live/' + THREAD + '/updates/' + permalink;
    var colortest = '#7dd4fa';
    var elcolor = '#000000';
    var randomx = '0';
    // Check for Darkmode
    darkcheck = 0;
    if (ELEMENTS.BODY_ELEMENT.attr('data-darkMode') == 'Default') {
      if ($('#lc-body').hasClass('res-nightmode')) {
        darkcheck = 1;
        elcolor = '#ddd';
      }
    } else if (ELEMENTS.BODY_ELEMENT.attr('data-darkMode') == 'On') {
      darkcheck = 1;
      elcolor = '#ddd';
    } else if (ELEMENTS.BODY_ELEMENT.attr('data-darkMode') == 'Off') {
      darkcheck = 0;
    }
    // Choose Colors
    let timestamp_positive = timestamp;
    if (ELEMENTS.BODY_ELEMENT.attr('data-halfColors') == 'true') {
      // Half reply times -> Choose color as if reply time was 2x
      timestamp_positive = timestamp * 2;
    }
    if (timestamp <= -500) {
      colortest =
        'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)';
    } else if (timestamp < 1) {
      colortest = darkcheck ? '#727200' : '#f2ee0e';
    } else if (timestamp_positive < 100) {
      colortest = darkcheck ? '#4d0000' : '#ef7070';
    } else if (timestamp_positive < 200) {
      colortest = darkcheck ? '#980000' : '#ffaeae';
    } else if (timestamp_positive < 300) {
      colortest = darkcheck ? '#654700' : '#ffebba';
    } else if (timestamp_positive < 400) {
      colortest = darkcheck ? '#216e00' : '#cfffba';
    } else if (timestamp_positive < 500) {
      colortest = darkcheck ? '#003b0b' : '#a2e8af';
    } else if (timestamp_positive < 600) {
      colortest = darkcheck ? '#006b53' : '#adffed';
    } else if (timestamp_positive < 700) {
      colortest = darkcheck ? '#004183' : '#add6ff';
    } else if (timestamp_positive < 800) {
      colortest = darkcheck ? '#14006c' : '#bcadff';
    } else if (timestamp_positive < 900) {
      colortest = darkcheck ? '#460060' : '#e9adff';
    } else if (timestamp_positive < 1000) {
      colortest = darkcheck ? '#6e0064' : '#ffadf8';
    } else if (timestamp_positive >= 1000) {
      colortest = darkcheck ? '#2a2a2a' : '#ededed';
    }
    // Overwrite timestamp if it is a special time
    if (
      timestamp in specialTimes &&
      ELEMENTS.BODY_ELEMENT.attr('data-disableSpecialTimes') == 'false'
    ) {
      var postauthor = data.authorNode.text().substring(3);
      if (timestamp == '123') {
        var randomtime = Math.round(Math.random());
        if (
          (randomtime == 1 && postauthor != 'davidjl123') ||
          postauthor == 'dominodan123'
        ) {
          timestamp = '123-2';
        }
      }
      if (timestamp == '404') {
        var randomtime = Math.round(Math.random());
        if (
          (randomtime == 1 && postauthor != 'Tranquilsunrise') ||
          postauthor == 'KingCaspianX'
        ) {
          timestamp = '404-2';
        }
      }
      colortest = specialTimes[timestamp]['bgcolor'];
      elcolor = specialTimes[timestamp]['fontcolor'];
      if (postauthor == specialTimes[timestamp]['user']) {
        var user2 = data.node.find('.body > .author').text();
        data.node.find('.body').append('<span id=fakeauthor></span>');
        document.getElementById('fakeauthor').innerHTML = user2;
        data.node.find('.body > .author').css('fontSize', '0px');
        document.getElementById('fakeauthor').style.cssText =
          'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';
      }
      timestamp = specialTimes[timestamp]['words'];
    }
    var thisriver = data.node
      .find('.body')
      .prepend(
        "<div colortest='" +
          colortest +
          "' elcolor='" +
          elcolor +
          "' id='" +
          permalink +
          "' style='position:absolute;background:" +
          colortest +
          ';color:' +
          elcolor +
          ";' onclick=window.open('" +
          testhref +
          "'); class=river>" +
          timestamp +
          '</div>'
      );
    if (THREAD == THREADS.BARS || THREAD == THREADS.ONE_PER_MINUTE) {
      let mago = Math.round(timestamp_current / 10000);
      var dateTime = new Date(mago).toISOString().substring(11, 23);
      $('#' + permalink).text(dateTime);
    }
    if (
      ELEMENTS.BODY_ELEMENT.attr('data-BackgroundColor') == 'Match Reply Time'
    ) {
      data.node.find('.body').parent().css('background', colortest);
    }

    if (window.innerWidth >= 700) {
      $('.river')
        .css('position', 'absolute')
        .css('margin-left', '-135px')
        .css('font-size', '9px')
        .css('margin-top', '4px')
        .css('width', '120px')
        .css('text-align', 'right')
        .css('max-width', '120px');
    } else {
      $('.river')
        .css('position', 'absolute')
        .css('margin-left', '-10px')
        .css('font-size', '9px')
        .css('margin-top', '-16px')
        .css('width', '120px')
        .css('text-align', 'right')
        .css('max-width', '120px');
    }
    if (
      $('#lc-body[data-DisplayMode="Minimal"] #liveupdate-statusbar').css(
        'display'
      ) == 'none'
    ) {
      $('.river').css('margin-left', '-141px');
    }
    if (ELEMENTS.BODY_ELEMENT.attr('data-automaticallyClearTime') != 'Off') {
      if (
        ELEMENTS.BODY_ELEMENT.attr('data-automaticallyClearTime') == 'After 60s'
      ) {
        customClearTime = 60000;
      } else {
        customClearTime = ELEMENTS.BODY_ELEMENT.attr('data-customClearTime');
      }
      $('.river').delay(customClearTime).hide(500);
    }
    $('.river').mouseover(function () {
      this.style.background = 'transparent';
      this.style.color = 'transparent';
      this.style.cursor = 'pointer';
    });
    $('.river').mouseout(function () {
      $(this).css('background', $(this).attr('colortest'));
      $(this).css('color', $(this).attr('elcolor'));
    });
  });
  $(window).on('load resize', function () {
    if (window.innerWidth >= 700) {
      $('div.river')
        .css('position', 'absolute')
        .css('margin-left', '-135px')
        .css('font-size', '9px')
        .css('margin-top', '4px')
        .css('width', '120px')
        .css('text-align', 'right')
        .css('max-width', '120px');
      $('#idlecontainer').css('position', 'absolute');
    } else {
      $('div.river')
        .css('position', 'absolute')
        .css('margin-left', '-10px')
        .css('font-size', '9px')
        .css('margin-top', '-16px')
        .css('width', '120px')
        .css('text-align', 'right')
        .css('max-width', '120px');
      $('#idlecontainer').css('position', 'initial');
    }
  });
})(ReplyTimes || (ReplyTimes = {}));
///////////////////
// HalfColors.ts //
///////////////////
var HalfColors;
(function (HalfColors) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-halfColors', false);
  // Options
  Options.addCheckbox({
    label: 'HALF REPLY TIME COLORS',
    default: false,
    section: 'Advanced 2',
    help: 'Halves the reply time colors, so they increase by increments of 50 rather than 100.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-halfColors', this.prop('checked'));
    },
  });
})(HalfColors || (HalfColors = {}));
///////////////////////////
// ReplyTimesDarkMode.ts //
///////////////////////////
var ReplyTimesDarkMode;
(function (ReplyTimesDarkMode) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-darkMode', 'Default');
  // Options
  Options.addSelect({
    label: 'NIGHT MODE REPLY TIMES',
    options: ['Default', 'On', 'Off'],
    section: 'Advanced 2',
    default: 0,
    help: 'Changes the background of reply times to better match RES night mode. Default = looks at RES, On = forced on, Off = forced off, even if RES night mode enabled',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-darkMode', this.val());
    },
  });
})(ReplyTimesDarkMode || (ReplyTimesDarkMode = {}));
///////////////////////////////
// AutomaticallyClearTime.ts //
///////////////////////////////
var AutomaticallyClearTime;
(function (AutomaticallyClearTime) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-automaticallyClearTime', 'Off');
  ELEMENTS.BODY_ELEMENT.attr(
    'data-customClearTime',
    Cookie.save.customClearTime
  );
  // Options
  Options.addSelect({
    label: 'CLEAR REPLY TIMES',
    options: ['Off', 'After 60s', 'Custom'],
    section: 'Advanced 2',
    customClearTime: 2000,
    default: 0,
    help: 'Automatically clears LCE reply times after a certain amount of time.',
    onchange: function () {
      $(this).click(function () {
        $(this).data('clicked', true);
      });
      ELEMENTS.BODY_ELEMENT.attr('data-automaticallyClearTime', this.val());
      //if (this.val() == 'Custom' && $(this).data('clicked') == true) {
      if (this.val() == 'Custom' && timeCheck == 1) {
        customClearTime = parseInt(
          window.prompt(
            'Enter your custom time in milliseconds. 60 seconds = 60000 for example'
          ),
          10
        );
        if (/^[0-9.,]+$/.test(customClearTime)) {
          Cookie.save.customClearTime = customClearTime;
          ELEMENTS.BODY_ELEMENT.attr('data-customClearTime', customClearTime);
          Cookie.update();
        }
      }
    },
  });
})(AutomaticallyClearTime || (AutomaticallyClearTime = {}));
///////////////////////
// CustomStricken.ts //
///////////////////////
var CustomStricken;
(function (CustomStricken) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-customStricken', 'Off');
  ELEMENTS.BODY_ELEMENT.attr(
    'data-customStrickenColor',
    Cookie.save.customStrickenColor
  );
  // Options
  Options.addSelect({
    label: 'CUSTOM STRICKEN',
    options: ['Off', 'No Inverse', 'Inverse'],
    section: 'Advanced 2',
    default: 0,
    help: 'Applies custom styles to stricken counts.',
    onchange: function () {
      $(this).click(function () {
        $(this).data('clicked', true);
      });
      ELEMENTS.BODY_ELEMENT.attr('data-customStricken', this.val());
      if (this.val() != 'Off' && timeCheck == 1) {
        var oldStricken = ELEMENTS.BODY_ELEMENT.attr(
          'data-customStrickenColor'
        );
        customStrickenColor = window.prompt(
          'Enter your custom background color.',
          '#ddd'
        );
        Cookie.save.customStrickenColor = customStrickenColor;
        ELEMENTS.BODY_ELEMENT.attr(
          'data-customStrickenColor',
          customStrickenColor
        );
        Cookie.update();
        Styles.replace(
          "\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:" +
            oldStricken +
            "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:" +
            oldStricken +
            '!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}',
          "\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:" +
            ELEMENTS.BODY_ELEMENT.attr('data-customStrickenColor') +
            "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:" +
            ELEMENTS.BODY_ELEMENT.attr('data-customStrickenColor') +
            '!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}'
        );
      }
    },
  });
  // Styles
  Styles.add(
    "\n\n\t/* Custom Stricken */\n\t#lc-body[data-customStricken='No Inverse'] .liveupdate.stricken{\n\tbackground:" +
      ELEMENTS.BODY_ELEMENT.attr('data-customStrickenColor') +
      "!important;\n\t}\n#lc-body[data-customStricken='Inverse'] .liveupdate.stricken{\n\tbackground:" +
      ELEMENTS.BODY_ELEMENT.attr('data-customStrickenColor') +
      '!important;-webkit-filter: invert(100%);filter: invert(100%);\n\t}'
  );
})(CustomStricken || (CustomStricken = {}));
////////////////////////////
// DisableSpecialTimes.ts //
////////////////////////////
var DisableSpecialTimes;
(function (DisableSpecialTimes) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-disableSpecialTimes', false);
  // Options
  Options.addCheckbox({
    label: 'DISABLE SPECIAL TIMES',
    default: false,
    section: 'Advanced 2',
    help: 'Disables special reply times, and only shows the exact millisecond time.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr(
        'data-disableSpecialTimes',
        this.prop('checked')
      );
    },
  });
})(DisableSpecialTimes || (DisableSpecialTimes = {}));
////////////////////////
// BackgroundColor.ts //
////////////////////////
var BackgroundColor;
(function (BackgroundColor) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-BackgroundColor', 'Off');
  ELEMENTS.BODY_ELEMENT.attr(
    'data-customBackgroundColor',
    Cookie.save.customBackgroundColor
  );
  // Options
  Options.addSelect({
    label: 'BACKGROUND COLOR',
    options: ['Off', 'Match Reply Time', 'Custom'],
    section: 'Advanced 2',
    default: 0,
    help: 'Changes the background color of new posts.',
    onchange: function () {
      $(this).click(function () {
        $(this).data('clicked', true);
      });
      ELEMENTS.BODY_ELEMENT.attr('data-BackgroundColor', this.val());
      if (this.val() == 'Custom' && timeCheck == 1) {
        var oldBgColor = ELEMENTS.BODY_ELEMENT.attr(
          'data-customBackgroundColor'
        );
        customBackgroundColor = window.prompt(
          'Enter your custom background color.',
          '#ddd'
        );
        Cookie.save.customBackgroundColor = customBackgroundColor;
        ELEMENTS.BODY_ELEMENT.attr(
          'data-customBackgroundColor',
          customBackgroundColor
        );
        Styles.replace(
          "\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:" +
            oldBgColor +
            '!important;\n\t}\n}',
          "\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:" +
            ELEMENTS.BODY_ELEMENT.attr('data-customBackgroundColor') +
            '!important;\n\t}\n}'
        );
        Cookie.update();
      }
    },
  });
  // Styles
  Styles.add(
    "\n\n\t/* Custom Background */\n\t#lc-body[data-BackgroundColor='Custom'] .liveupdate{\n\tbackground:" +
      ELEMENTS.BODY_ELEMENT.attr('data-customBackgroundColor') +
      '!important;\n\t}\n}'
  );
})(BackgroundColor || (BackgroundColor = {}));
//////////////////
// LastCount.ts //
//////////////////
var LastCount;
(function (LastCount) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-LastCount', 'Off');
  var dumpy = 0;
  // Gets the splits for the current thread
  let splits = get_splits();
  let live_update_header_text =
    '<div id=idlecontainer><div id=statsplace><p id=lastcountdesc>Last count:<p id=lastcountcount></p><p>/u/<span id=lastcountuser></span></p><div id=splits>';
  for (let i = 0; i < splits.length; i++) {
    live_update_header_text +=
      '<p>' + splits[i] + ':<span id=split' + i + '></span></p>';
  }
  live_update_header_text +=
    '<p>Last K:<span id=lcbot_speed></span></p><p><span id=dumptoggle>Dump [+]:</span><div id=split69></div></p></div></div></div>';
  $(
    '<div id="idlecontainercontainer" style="position:relative;">' +
      live_update_header_text +
      '</div>'
  ).insertBefore('#liveupdate-header');
  $('#idlecontainer').css({
    display: 'none',
    position: 'absolute',
    left: '1%',
    width: '115px',
    background: 'transparent',
  });
  $('#split69').css({ display: 'none' });
  $('#lastcountdesc').hover(
    function () {
      document.getElementById('lastcountdesc').innerHTML = 'Click to reset';
      document.getElementById('lastcountdesc').style.cursor = 'pointer';
    },
    function () {
      document.getElementById('lastcountdesc').innerHTML = 'Last count:';
    }
  );
  $('#lastcountdesc').click(function () {
    current_number = '';
    last_number = '';
    expected_number = '';
    update_body = '';
    author_current = '';
    author_last = '';
    document.getElementById('lastcountdesc').innerHTML = 'Last count:';
    document.getElementById('lastcountdesc').style.background = '';
  });
  $('#split69').click(function () {
    $('#split69').text(JSON.stringify(all_times, null, '\t'));
  });
  $('#dumptoggle').on('click', function () {
    if (dumpy == 0) {
      dumpy++;
      document.getElementById('dumptoggle').innerHTML = 'Dump [-]:';
      $('#split69').css({
        display: 'initial',
      });
    } else {
      dumpy--;
      document.getElementById('dumptoggle').innerHTML = 'Dump [+]:';
      $('#split69').css({
        display: 'none',
      });
    }
  });
  // Options
  Options.addSelect({
    label: 'LAST COUNT',
    options: ['Off', 'On', 'On + Splits'],
    section: 'Advanced 2',
    default: 0,
    help: 'Tracks recent counts and can show speedrun splits by hundreds. Not perfectly accurate.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-LastCount', this.val());
      if (ELEMENTS.BODY_ELEMENT.attr('data-LastCount') == 'On') {
        $('#idlecontainer').css('display', 'initial');
        $('#splits').css('display', 'none');
      }
      if (ELEMENTS.BODY_ELEMENT.attr('data-LastCount') == 'On + Splits') {
        $('#idlecontainer').css('display', 'initial');
        $('#splits').css('display', 'initial');
      }
      if (ELEMENTS.BODY_ELEMENT.attr('data-LastCount') == 'Off') {
        $('#idlecontainer').css('display', 'none');
      }
    },
  });

  if (ELEMENTS.BODY_ELEMENT.attr('data-LastCount') == 'On') {
    $('#idlecontainer').css('display', 'initial');
    $('#splits').css('display', 'none');
  }
  if (ELEMENTS.BODY_ELEMENT.attr('data-LastCount') == 'On + Splits') {
    $('#idlecontainer').css('display', 'initial');
  }
})(BackgroundColor || (BackgroundColor = {}));
//////////////////
// CtrlEnter.ts //
//////////////////
var CtrlEnter;
(function (CtrlEnter) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut', 'Ctrl+Enter');
  var $textarea = $('#new-update-form textarea');
  var $resVersion = $('#RESConsoleVersion');
  var $submitBtn = $('#new-update-form .save-button button');
  // Options
  Options.addSelect({
    label: 'SUBMIT SHORTCUT',
    //options: ['Off', 'Ctrl+Enter', 'Enter', 'Custom'],
    options: ['Off', 'Ctrl+Enter', 'Enter'],
    section: 'Advanced',
    default: 1,
    help: 'Changes the submit shortcut. May not work well with RES.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut', this.val());
      /*if(ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == "Custom") {
                var customShortcut = window.prompt('Enter the js keycodes, separated by a comma Go to keycode.info to see keycodes easily.','13,17');
                ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut', customShortcut);
            }*/
    },
  });
  $textarea.on('keydown', function (e) {
    if (ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == 'Off') {
      return;
    }
    if (ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == 'Ctrl+Enter') {
      if (
        $resVersion.length > 0 &&
        +$resVersion.text().replace(/\D/g, '') >= 478
      ) {
        return;
      }
      if (e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        $submitBtn.trigger('click');
      }
    }
    if (ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == 'Enter') {
      if (e.keyCode == 13) {
        e.preventDefault();
        $submitBtn.trigger('click');
      }
    }
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
    $submitBtn.mousedown(function (e) {
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
  var allUserColors = require('./src/data/user-colors.json');

  var userColors = allUserColors.overrides;
  if (USER == 'VitaminB16') {
    userColors.b66b = 'white';
  }
  colortransfers = userColors;
  // Possible colors for other users
  colors = allUserColors.defaults;
  for (var i = colors.length - 1; i > 0; i--) {
    // use Durstenfeld shuffle algorithm on colors array
    var j = Math.floor(Math.random() * (i + 1));
    var temp = colors[i];
    colors[i] = colors[j];
    colors[j] = temp;
  }

  function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  // index of next color to assign from colors array
  var currentColor = 0;

  // 100k name functions
  let specialUsernamesRainbowCycleIndex;
  /**
   * Description:
   *	Over N updates the username cycles through the colors of the rainbow.
   *	Each individual update has a fixed color.
   * @param {int} countsPerCycle Length of cycle
   * @param update Object for update
   * @param {string} username User whose username color should cycle
   */
  function specialUsernameRainbowCycle(countsPerCycle, username) {
    // Initialize randomly
    if (specialUsernamesRainbowCycleIndex === undefined) {
      specialUsernamesRainbowCycleIndex = Math.floor(
        Math.random() * countsPerCycle
      );
    }
    // Get Color from current index
    const deg = (specialUsernamesRainbowCycleIndex / countsPerCycle) * 360;
    const colorText = 'hsl(' + deg + 'deg, 100%, 50%)';
    userColors[username] = colorText;
    // Update index
    specialUsernamesRainbowCycleIndex += 1;
    specialUsernamesRainbowCycleIndex %= countsPerCycle;
  }

  // Options
  var enabled = true;
  Options.addCheckbox({
    label: 'COLORED USERNAMES',
    default: true,
    help: 'Makes the username in each message gain a unique color.\n\nCertain users who have specified their preferred username colors to /u/co3_carbonaate get that fixed color all the time. Otherwise, your color will be random and appear differently for everyone using the extension.',
    onchange: function () {
      enabled = this.prop('checked');
    },
  });
  // EVENTS
  // New update loaded
  UPDATE_EVENTS.addListener('new', (data) => {
    if (!enabled) return;
    // Special usernames (temp rewards for top in 100k HoC, or other contributions)
    // Bot-maker privileges
    if (BOLD_USERS.has(thisauthor)) $(this).css('font-weight', 'bold');

    // 100K usernames

    if (SpecialUsernamesEnabled[0]) {
      // /u/TOP_20 username special
      if (data.author == knames[0]) {
        data.authorNode.html(
          `<span style="color:brickred;">/</span><span style="color:#a35252;">u</span><span style="color:#FFFF00;">/</span>T<span style="color:#6495ED;">O</span><span style="color:#800080;">P</span><span style="color:#0000FF;">_</span><span style="color:#000000;">20</span>`
        );
      }
    } // /u/TOP_20 username special ending

    if (SpecialUsernamesEnabled[1]) {
      // /u/greenpeppercat username special
      if (data.author == knames[1]) {
        if (Math.random() * 2000 < 1) {
          data.authorNode.html(
            `<span class="gpc" style="animation: blinkerm cubic-bezier(0,1,0,1) 1s infinite;font-size: 100px;animation-delay:-1s">meow!</span>`
          );
        }
      }
    } // /u/greenpeppercat username special ending

    if (SpecialUsernamesEnabled[2]) {
      // /u/naiwagama username special
      if (data.author == knames[2]) {
        data.authorNode.html(`nai`);
      }
    } // /u/naiwagama username special ending

    if (SpecialUsernamesEnabled[3]) {
      // /u/TheMatsValk username special
      if (data.author == knames[3]) {
        specialUsernameRainbowCycle(176, 'TheMatsValk');
      }
    } // /u/TheMatsValk username special ending

    if (SpecialUsernamesEnabled[4]) {
      // /u/cuteballgames username special
      if (data.author == knames[4]) {
        data.authorNode.html(`134`);
      }
    } // /u/cuteballgames username special ending

    // Set username color
    if (!userColors.hasOwnProperty(data.author)) {
      userColors[data.author] = colors[currentColor];
      currentColor++;
      if (currentColor == colors.length) {
        currentColor = 0;
      }
    }
    data.authorNode.css('color', userColors[data.author]);

    if ([THREADS.LC_CHATS_OLD, THREADS.LC_CHATS].includes(THREAD)) {
      var lcchats = data.hrefNode.attr('href');
      lcchats = lcchats.trim().replace('/u/', '');
      data.hrefNode
        .css('color', userColors[lcchats])
        .css('fontStyle', 'initial')
        .css('fontSize', '13px');
      if (BOLD_USERS.has(lcchats)) data.hrefNode.css('font-weight', 'bold');
    }
  });
  if ([THREADS.LC_CHATS_OLD, THREADS.LC_CHATS].includes(THREAD)) {
    $('a[href*="/u/"]').each(function () {
      var thishref = $(this).attr('href');
      thishref = thishref.trim().replace('/u/', '');
      $(this)
        .css('color', userColors[thishref])
        .css('fontStyle', 'initial')
        .css('fontSize', '13px');
      if (BOLD_USERS.has(thishref)) $(this).css('font-weight', 'bold');
    });
    UPDATE_EVENTS.addListener('loaded', () => {
      $('a[href*="/u/"]').each(function () {
        var thishref2 = $(this).attr('href');
        thishref2 = thishref2.trim().replace('/u/', '');
        $(this)
          .css('color', userColors[thishref2])
          .css('fontStyle', 'initial')
          .css('fontSize', '13px');
        if (BOLD_USERS.has(thishref2)) $(this).css('font-weight', 'bold');
      });
    });
  }

  var burrentbolor = 0;
  $('.author').each(function () {
    var thisauthor = $(this).text().trim().replace('/u/', '');
    if (!userColors.hasOwnProperty(thisauthor)) {
      userColors[thisauthor] = colors[burrentbolor];
      burrentbolor++;
      if (burrentbolor == colors.length) {
        burrentbolor = 0;
      }
    }
    $(this).css('color', userColors[thisauthor]);
    if (BOLD_USERS.has(thisauthor)) $(this).css('font-weight', 'bold');
  });
  UPDATE_EVENTS.addListener('loaded', () => {
    $('.author').each(function () {
      var thisauthor = $(this).text().trim().replace('/u/', '');
      if (!userColors.hasOwnProperty(thisauthor)) {
        userColors[thisauthor] = colors[burrentbolor];
        burrentbolor++;
        if (burrentbolor == colors.length) {
          burrentbolor = 0;
        }
      }
      $(this).css('color', userColors[thisauthor]);
      if (BOLD_USERS.has(thisauthor)) $(this).css('font-weight', 'bold');
    });
  });

  //Styles
  Styles.add(
    `li > div > a[href="/user/greenpeppercat"].author.blink {animation: blinkerm linear 2;} @keyframes blinkerm {50% { opacity:0; } 100%{ opacity:1; } }`
  );
  Styles.add(
    `li > div > a[href="/user/ItzTaken"].author.takenblink {animation: takenblinkerm linear 2;} @keyframes takenblinkerm {50% { opacity:0; } 100%{ opacity:1; } }`
  );
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
    default: true,
    help: 'Frequently clears past messages from the page, which drastically negates lag and reduces the need to refresh constantly.',
    onchange: function () {
      enabled = this.prop('checked');
    },
  });
  $checkbox.click(function () {
    enTimeout = true;
    setTimeout(function () {
      enTimeout = false;
    }, 5000);
  });
  // EVENTS
  // New update loaded
  UPDATE_EVENTS.addListener('new', () => {
    if (window.scrollY == 0 && enTimeout == false) {
      if (!enabled) {
        $checkbox.prop('checked', true).trigger('change');
      }
    }
    if (!enabled) return;
    var $screenMessages = ELEMENTS.UPDATES_ELEMENT.children('.liveupdate');
    if ($screenMessages.length > maxMessages) {
      $screenMessages.slice(maxMessages).remove();
    }
  });
  // Old update loaded (scrolled to bottom)
  UPDATE_EVENTS.addListener('loaded', () => {
    // disable
    if (!enabled) return;
    $checkbox.prop('checked', false).trigger('change');
  });
})(ClearPastMessages || (ClearPastMessages = {}));
////////////////////
// DisplayMode.ts //
////////////////////
var DisplayMode;
(function (DisplayMode) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-DisplayMode', 'Normal');
  // "Return to Normal Display" button
  var $returnBtn = $('<input type="button" value="Return to Normal Display"/>');
  $returnBtn.on('click', function () {
    $select
      .children('option[value="Normal"]')
      .prop('selected', true)
      .trigger('change');
  });
  $returnBtn.css({
    marginBottom: '20px',
    display: 'none',
    margin: '0 auto',
  });
  ELEMENTS.CONTENT_ELEMENT.prepend($returnBtn);

  // Options
  var $select = Options.addSelect({
    label: 'DISPLAY MODE',
    options: ['Normal', 'Minimal'],
    help: 'Changes the display interface of the page to your preference.',
    onchange: function () {
      var display = this.val();
      $returnBtn.css('display', display == 'Normal' ? 'none' : 'block');
      ELEMENTS.BODY_ELEMENT.attr('data-DisplayMode', display);
    },
  });
  // Styles
  Styles.add(
    "\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Minimal'] #idlecontainer {left: -40%!important;} #lc-body[data-DisplayMode='Minimal'] #header,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] div.content {\n\t\tmax-width: " +
      Math.max(450, $('#new-update-form textarea').outerWidth()) +
      'px;\n\t}\n\n\t'
  );
})(DisplayMode || (DisplayMode = {}));
////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////
var RemoveSubmissionLag;
var clearCount = 0;
function noClear() {
  if (clearCount == 0) {
    //$('.status').remove();
    $.ajaxSetup({
      dataFilter: function (data, type) {
        if (
          data ==
          `{"jquery": [[0, 1, "call", ["#new-update-form"]], [1, 2, "attr", "find"], [2, 3, "call", [".status"]], [3, 4, "attr", "hide"], [4, 5, "call", []], [5, 6, "attr", "html"], [6, 7, "call", [""]], [7, 8, "attr", "end"], [8, 9, "call", []], [1, 10, "attr", "find"], [10, 11, "call", ["textarea"]], [11, 12, "attr", "attr"], [12, 13, "call", ["rows", 3]], [13, 14, "attr", "html"], [14, 15, "call", [""]], [15, 16, "attr", "val"], [16, 17, "call", [""]]], "success": true}`
        ) {
          data = `{"jquery": [[0, 1, "call", ["#new-update-form"]], [1, 2, "attr", "find"], [2, 3, "call", [".status"]], [3, 4, "attr", "hide"], [4, 5, "call", []], [5, 6, "attr", "html"] ], "success": true}`;
        }
        return data;
      },
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
    default: 0,
    help: 'Upon submitting a message, the textbox is immediately cleared to allow you to enter new contents without waiting for your previous submission to be processed.\n\nYou can also stop Reddit from clearing the textbox.',
    onchange: function () {
      display = this.val();
      enabled = display == 'Enabled';
      if (display == 'No Clear') {
        noClear();
      }
    },
  });
  // Styles
  Styles.add(
    '\n\n\t.liveupdate-listing li.liveupdate.preview {\n\t\topacity: 0.75;\n\t}\n\t.liveupdate-listing li.liveupdate.preview .live-timestamp {\n\t\tvisibility: hidden;\n\t}\n\n\t'
  );
  // EVENTS
  // When message is submitted
  ELEMENTS.SUBMIT_BUTTON.on('click', function (e) {
    if (!enabled) return;
    setTimeout(function () {
      var val = ELEMENTS.UPDATE_TEXTAREA.val();
      if (val.length == 0) return;
      // Clear textbox
      ELEMENTS.UPDATE_TEXTAREA.val('');
      // leinpilled
      lastInput = '';
      // This is a way to work around the issue where Reddit automatically clears the textbox
      // when the update had been successfully delivered, although we just cleared it here.
      // Call backupInput() whenever the textarea content is changed
      ELEMENTS.UPDATE_TEXTAREA.on('keydown keyup input', backupInput);
    }, 0);
  });
  // In backupInput(), keep track of the last backed up textarea content, by storing in lastInput
  function backupInput() {
    lastInput = ELEMENTS.UPDATE_TEXTAREA.val();
  }
  // Use MutationObserver on the 'error message' to detect when Reddit had cleared the textbox.
  // When the error message's style changes from 'display: inline;' to 'display: none;', it
  // is clear that Reddit had cleared the textbox.
  // At this point, use the last backed-up input
  var observer = new MutationObserver(function (mutations) {
    if (!enabled) return;
    if (mutations.length != 1) return;
    // Exit if we think that Reddit had not cleared the textbox
    var mutation = mutations[0];
    if (
      !(
        mutation.oldValue == 'display: inline;' &&
        ELEMENTS.SUBMIT_ERROR.attr('style') == 'display: none;'
      )
    )
      return;
    // Use the last backed-up input
    ELEMENTS.UPDATE_TEXTAREA.off('keydown keyup input', backupInput);
    ELEMENTS.UPDATE_TEXTAREA.val(lastInput);
    lastInput = '';
  });
  if (ELEMENTS.SUBMIT_ERROR.length > 0) {
    observer.observe(ELEMENTS.SUBMIT_ERROR.get(0), {
      // observe for change in 'style' attribute value
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['style'],
    });
  }
})(RemoveSubmissionLag || (RemoveSubmissionLag = {}));
/////////////////////////////
// DisableUsernameLinks.ts //
/////////////////////////////
var DisableUsernameLinks;
(function (DisableUsernameLinks) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-DisableUsernameLinks', 'false');
  // Options
  Options.addCheckbox({
    label: 'DISABLE USERNAME LINKS',
    section: 'Advanced',
    help: "Disables the redirection to a user's profile upon clicking on his/her username. This is convenient to prevent yourself from accidentally going to one's profile page when trying to strike or delete a message.",
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr(
        'data-DisableUsernameLinks',
        this.prop('checked').toString()
      );
    },
  });
  // Styles
  Styles.add(
    "\n\n\t#lc-body[data-DisableUsernameLinks='true'] li.liveupdate > .body > .author {\n\t\tpointer-events: none;\n\t\tcursor: auto;\n\t}\n\n\t"
  );
})(DisableUsernameLinks || (DisableUsernameLinks = {}));
////////////////////////
// LinksOpenNewTab.ts //
////////////////////////
var LinksOpenNewTab;
(function (LinksOpenNewTab) {
  // INITIALIZATION
  var $base = $('<base target="_blank">');
  ELEMENTS.HEAD_ELEMENT.append($base);
  // Options
  var enabled = true;
  Options.addCheckbox({
    label: 'MAKE ALL LINKS OPEN IN A NEW TAB',
    default: true,
    section: 'Advanced',
    help: 'Makes all links on the page open in a new tab.',
    onchange: function () {
      enabled = this.prop('checked');
      if (enabled) $base.attr('target', '_blank');
      else $base.attr('target', '_self');
    },
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
    default: true,
    section: 'Advanced',
    help: 'Disables certain obstructive browser keyboard shortcuts. This currently disables the following: Ctrl+0 (Zoom Reset), Ctrl+[1-9] (Switch Tabs)',
    onchange: function () {
      enabled = this.prop('checked');
    },
  });
  // EVENTS
  $(document).on('keydown', function (e) {
    if (!enabled) return;
    // Ctrl Hotkeys
    if (e.ctrlKey || e.metaKey) {
      // Ctrl+0 (Zoom Reset)
      if (e.keyCode == 48) e.preventDefault();
      // Ctrl+[1-9] (Switch Tabs)
      if (e.keyCode >= 49 && e.keyCode <= 57) e.preventDefault();
      // Ctrl+[numpad0-9] (as above)
      if (e.keyCode >= 96 && e.keyCode <= 105) e.preventDefault();
    }
  });
})(DisableShortcuts || (DisableShortcuts = {}));
//////////////////////////
// SpecialUsernames.ts //
//////////////////////////
for (let i = 0; i < knames.length; i++) {
  SpecialUsernamesEnabled[i] = true;
  (function (SpecialUsername) {
    // Options
    Options.addCheckbox({
      label: knames[i] + ' 100K USERNAME',
      section: 'Advanced',
      default: true,
      help: 'Enable or disable the special 100k usernames.',
      onchange: function () {
        SpecialUsernamesEnabled[i] = this.prop('checked');
      },
    });
  })();
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
    default: true,
    help: 'Enable or disable the daily Hall of Counters.',
    onchange: function () {
      enabled = this.prop('checked');
    },
  });
  if (enabled == true) {
    TeamBarsEnabled = true;
  } else {
    TeamBarsEnabled = false;
  }

  //////////////////////////////////Daily HoC Auto-updater
  if (THREAD == THREADS.MAIN) {
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
        hmmyy = data['day']['hoc'];
        checky = data['day']['hoc'];
        the100k = data['100k']['hoc'];
        checky2 = data['100k']['hoc'];
        dayhoc_last_count = data['latest_count'];
        dayhoc_day_counts = data['day']['total_counts'];
        the100khoc_counts = data['100k']['total_counts'];
        if (first_call) {
          first_call = false;
          $(
            `<div id=wholetable><table id="mini"><tr class="tablenames"><td id="dailyenabler">Daily [+]</td><td id="dailyenabler2">100k [+]</td></tr></table><table id=loadtest><tr class="tablenames"><td>#</td><td>User</td><td>Counts</td></tr></table><table id=loadtest2><tr class="tablenames2"><td>#</td><td>User</td><td>Counts</td></tr></table></div>`
          ).insertBefore('#liveupdate-resources .md');
        } else {
          $(`#wholetable`).html(
            `<table id="mini"><tr class="tablenames"><td id="dailyenabler">Daily [+]</td><td id="dailyenabler2">100k [+]</td></tr></table><table id=loadtest><tr class="tablenames"><td>#</td><td>User</td><td>Counts</td></tr></table><table id=loadtest2><tr class="tablenames2"><td>#</td><td>User</td><td>Counts</td></tr></table>`
          );
        }

        function getTableRow(item, index) {
          let res = "<tr style='font-size:inherit;'";
          if (index >= 3) {
            res += ' class=collapsedo';
          }
          var hocname = [item.author, item.counts].join('</a></td><td>');
          var wrcer = '';
          if (item.has_wrc_req == true) {
            wrcer = " title='Has WRC requirements' style='font-style:italic;'";
          }
          res +=
            '><td' +
            wrcer +
            '>' +
            (index + 1) +
            '</td><td><a class=authoro>/u/' +
            hocname +
            '</td></tr>';
          return res;
        }
        function getTableRow2(item, index) {
          let res = "<tr style='font-size:inherit;'";
          if (index >= 3) {
            res += ' class=collapsedo2';
          }
          var hocname = [item.author, item.counts].join('</a></td><td>');
          var wrcer = '';
          if (item.has_wrc_req == true) {
            wrcer = " title='Has WRC requirements' style='font-style:italic;'";
          }
          res +=
            '><td' +
            wrcer +
            '>' +
            (index + 1) +
            '</td><td><a class=authoro>/u/' +
            hocname +
            '</td></tr>';
          return res;
        }
        function jsonCheck(item) {
          var hocnamd = [item.author, item.counts].join('');
          return hocnamd;
        }

        hmmyy = hmmyy.map(getTableRow);
        hmmyy.push(
          `<tr style='font-size:inherit;' class=collapsedo><td></td><td>Counts today:</td><td>` +
            dayhoc_day_counts.toLocaleString() +
            `</td></tr>`
        );
        hmmyy.push(
          `<tr style='font-size:inherit;' class=collapsedo><td></td><td>Latest count:</td><td>` +
            dayhoc_last_count.toLocaleString() +
            `</td></tr>`
        );
        checky = checky.map(jsonCheck);
        the100k = the100k.map(getTableRow2);
        the100k.push(
          `<tr style='font-size:inherit;' class=collapsedo2><td></td><td>Counts:</td><td>` +
            the100khoc_counts.toLocaleString() +
            `</td></tr>`
        );
        the100k.push(
          `<tr style='font-size:inherit;' class=collapsedo2><td></td><td>Latest count:</td><td>` +
            dayhoc_last_count.toLocaleString() +
            `</td></tr>`
        );
        checky2 = checky2.map(jsonCheck);

        checky = checky.join('');
        checky = checky.replace(/[A-Za-z]/g, ``);
        checky = checky.replace(/[-]/g, ``);
        checky = checky.replace(/[_]/g, ``);
        checky = checky.replace(/[0-9]+/g, '');
        checky2 = checky2.join('');
        checky2 = checky2.replace(/[A-Za-z]/g, ``);
        checky2 = checky2.replace(/[-]/g, ``);
        checky2 = checky2.replace(/[_]/g, ``);
        checky2 = checky2.replace(/[0-9]+/g, '');
        if (
          checky.length == 0 &&
          checky2.length == 0 &&
          typeof the100khoc_counts == 'number' &&
          typeof dayhoc_last_count == 'number' &&
          typeof dayhoc_day_counts == 'number'
        ) {
          $('#loadtest').append(hmmyy.join(''));
          $('#loadtest2').append(the100k.join(''));
          $('#loadtest tbody:nth-child(5)').append(`<tr><td>divide</td></tr>`);
          $('.authoro').each(function () {
            $(this).attr('href', 'https://reddit.com' + $(this).text());
            if (dailyHocColorNamesEnable2 == true) {
              var thishref = $(this).attr('href');
              thishref = thishref.trim().replace('https://reddit.com/u/', '');
              if (!colortransfers.hasOwnProperty(thishref)) {
                colortransfers[thishref] = colors[currentColor];
                currentColor++;
                if (currentColor == colors.length) {
                  currentColor = 0;
                }
              }
              $(this).css('color', colortransfers[thishref]);
              if ($(this).text() == `/u/` + USER) {
                $(this).parent().parent().css('font-weight', 'bold');
              }
            }
          });

          if (dailysize == 0) {
            $('#loadtest').css('display', 'inline-table');
            document.getElementById('dailyenabler').innerHTML = 'Daily [+]';
            $('.collapsedo').css({
              display: 'none',
            });
          } else if (dailysize == 1) {
            $('#loadtest').css('display', 'inline-table');
            document.getElementById('dailyenabler').innerHTML = 'Daily [-]';
            $('.collapsedo').css({
              display: 'table-row',
            });
          } else if (dailysize == -1) {
            document.getElementById('dailyenabler').innerHTML = 'Daily';
            $('#loadtest').css('display', 'none');
          }
          if (dailysize2 == 0) {
            $('#loadtest2').css('display', 'inline-table');
            document.getElementById('dailyenabler2').innerHTML = '100k [+]';
            $('.collapsedo2').css({
              display: 'none',
            });
          } else if (dailysize2 == 1) {
            $('#loadtest2').css('display', 'inline-table');
            document.getElementById('dailyenabler2').innerHTML = '100k [-]';
            $('.collapsedo2').css({
              display: 'table-row',
            });
          } else if (dailysize2 == -1) {
            document.getElementById('dailyenabler2').innerHTML = '100k';
            $('#loadtest2').css('display', 'none');
          }
          $('#dailyenabler').on('click', function () {
            if (dailysize == -1) {
              dailysize = 1;
              document.getElementById('dailyenabler2').innerHTML = '100k';
              $('#loadtest2').css('display', 'none');
            }
            if (dailysize == 0) {
              dailysize++;
              dailysize2 = -1;
              $('#loadtest').css('display', 'inline-table');
              $('#loadtest2').css('display', 'none');
              document.getElementById('dailyenabler').innerHTML = 'Daily [-]';
              $('.collapsedo').css({
                display: 'table-row',
              });
            } else if (dailysize == 1) {
              dailysize--;
              dailysize2 = -1;
              $('#loadtest').css('display', 'inline-table');
              $('#loadtest2').css('display', 'none');
              document.getElementById('dailyenabler').innerHTML = 'Daily [+]';
              $('.collapsedo').css({
                display: 'none',
              });
            }
          });
          $('#dailyenabler2').on('click', function () {
            if (dailysize2 == -1) {
              dailysize2 = 1;
              document.getElementById('dailyenabler').innerHTML = 'Daily';
              $('#loadtest').css('display', 'none');
            }
            if (dailysize2 == 0) {
              dailysize2++;
              dailysize = -1;
              $('#loadtest2').css('display', 'inline-table');
              $('#loadtest').css('display', 'none');
              document.getElementById('dailyenabler2').innerHTML = '100k [-]';
              $('.collapsedo2').css({
                display: 'table-row',
              });
            } else if (dailysize2 == 1) {
              dailysize2--;
              dailysize = -1;
              $('#loadtest2').css('display', 'inline-table');
              $('#loadtest').css('display', 'none');
              document.getElementById('dailyenabler2').innerHTML = '100k [+]';
              $('.collapsedo2').css({
                display: 'none',
              });
            }
          });
        } else {
          //checky length check
          $('#loadtest').append(
            '<tr><td>Error verifying data, please PM /u/rideride</td></tr>'
          );
        }
      };

      $.ajax({
        method: 'GET',
        dataType: 'json',
        cache: false,
        url: 'https://raw.githubusercontent.com/MaybeNotWrong/lc-sep/master/data.txt',
        success: day_hoc_handler,
        error: function (data) {
          hmmyy;
        },
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
          success: day_hoc_handler, //////this is where you put the checky bracket
          error: function (data) {
            hmmyy;
          },
        });
      }, 15000);
      Styles.add(
        `                    #loadtest tbody tr:nth-child(2) td:nth-child(1){background: gold;color: black;}#loadtest tbody tr:nth-child(3) td:nth-child(1){background: silver;color: black;}#loadtest tbody tr:nth-child(4) td:nth-child(1){background: #cd7f32;color: black;}#loadtest{border: 1px solid black;width: 100%;text-align: center;}#loadtest tr td{border: 1px solid black;max-width: 223px;}#loadtest{overflow: hidden;height: 100%;}#loadtest{color: #000;font-size: inherit;font-weight: normal;}#dailyenabler{cursor: pointer;color: #000;font-size: 14px;font-weight: bold;margin-bottom: 3px;}.tablenames{font-weight: bold;}`
      );
      Styles.add(
        `                    #loadtest2 tbody tr:nth-child(2) td:nth-child(1){background: gold;color: black;}#loadtest2 tbody tr:nth-child(3) td:nth-child(1){background: silver;color: black;}#loadtest2 tbody tr:nth-child(4) td:nth-child(1){background: #cd7f32;color: black;}#loadtest2{border: 1px solid black;width: 100%;text-align: center;}#loadtest2 tr td{border: 1px solid black;max-width: 223px;}#loadtest2{overflow: hidden;height: 100%;}#loadtest2{color: #000;font-size: inherit;font-weight: normal;}#dailyenabler2{cursor: pointer;color: #000;font-size: 14px;font-weight: bold;margin-bottom: 3px;}.tablenames2{font-weight: bold;}`
      );
      Styles.add(
        `#mini{border: 1px solid black;width: 100%;text-align: center;}#mini tr td{border: 1px solid black;max-width: 223px;}#mini{overflow: hidden;height: 100%;}#mini{color: #000;font-size: inherit;font-weight: normal;}`
      );
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
  ELEMENTS.BODY_ELEMENT.attr('data-ContentPosition', 'Center');
  // Options
  Options.addSelect({
    label: 'CONTENT POSITION',
    options: ['Left', 'Center', 'Right'],
    section: 'Advanced',
    default: 1,
    help: 'Adjusts the position of the main content section.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-ContentPosition', this.val());
    },
  });
  // Styles
  Styles.add(
    "\n\n\t#lc-body[data-ContentPosition='Left'] div.content {\n\t\tmargin: 0;\n\t}\n\t#lc-body[data-ContentPosition='Center'] div.content {\n\t\tmargin: 0 auto;\n\t}\n\t#lc-body[data-ContentPosition='Right'] div.content {\n\t\tfloat: right;\n\t}\n\n\t"
  );
})(ContentPosition || (ContentPosition = {}));

const STANDARDIZE_NUMBER_FORMAT =
  require('./src/standardize-number-format/standardize-number-format').StandardizeNumberFormat;
new STANDARDIZE_NUMBER_FORMAT(Options);

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
    default: false,
    help: 'Adjusts the position of the options.',
    onchange: function () {
      enabled7 = this.prop('checked');
      if (enabled7 == true) {
        IgnoreEnabled = true;
        $('#ignorestuff').css('display', 'initial');
      } else {
        IgnoreEnabled = false;
        $('#ignorestuff').css('display', 'none');
      }
    },
  });

  $(
    `<script>var ignored = []; ignored.push(localStorage.getItem('ignoredppl')); function addIgnore() {var ignoreinp = document.getElementById('ignorebox');ignored.push(ignoreinp.value);ignoreinp.value = "";document.getElementById("ignorebox2").innerHTML = ignored;localStorage.setItem('ignoredppl', ignored);}function displayIgnore() {document.getElementById("ignorebox2").innerHTML = ignored;}function deleteIgnore() {ignored = []; localStorage.setItem('ignoredppl', []); document.getElementById("ignorebox2").innerHTML = '';}</script><span id=ignorestuff><input id=ignorebox style="position: absolute;margin-top: -25px;margin-left: 65px;"></input><span style="position: absolute;margin-top: -26px;margin-left: 210px;font-size: 9px !important;"><button type="button" id="ignoreadd" onclick="addIgnore()" style="font-size: 12px;padding: 0;margin-right: 3px;">ADD</button><button type="button" id="ignoredelete" onclick="deleteIgnore()" style="font-size: 12px;padding: 0;">DELETE ALL</button></span><div>Ignored users: <span id=ignorebox2></span></div></span><script>document.getElementById('ignorebox2').innerHTML = ignored;</script>`
  ).insertAfter(
    `#live-counting-extension div div:nth-child(4) label:nth-last-child(1)`
  );
  if (enabled7 == true) {
    IgnoreEnabled = true;
    $('#ignorestuff').css('display', 'initial');
  } else {
    IgnoreEnabled = false;
    $('#ignorestuff').css('display', 'none');
  }
  UPDATE_EVENTS.addListener('new', (data) => {
    if (IgnoreEnabled == true) {
      var ignoretest = document.getElementById('ignorebox2').innerHTML;

      if (ignoretest.includes(data.author)) {
        var entirepost = data.node.find('.body > .md').html();
        var entireposttext = data.node.find('.body > .md').text();
        var count1testlol = parse_body(entireposttext)[2];
        if (count1testlol == null) {
          count1testlol = '';
        }
        var count1testcomment = parse_body(entireposttext)[1];
        if (count1testcomment == null) {
          count1testcomment = '';
        }
        if (count1testcomment.length < 1) {
          return;
        }
        entirepost = '<p>' + count1testlol + '</p>';
        data.node.find('.body > .md').html(entirepost);
      }
    } //IgnoreEnabled ending
  });
})(Ignore || (Ignore = {}));
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
    default: false,
    help: 'Changes emojis. Type :emoji: in the textbox. Please note that this feature sucks.',
    onchange: function () {
      enabled = this.prop('checked');
    },
  });
  if (enabled) {
    const emojiLib = require('./src/data/emojis.json');
    const regExpression = /:([^\s]+):/g;
    const emojiIt = (re, text) => {
      if ((result = re.exec(text))) {
        const emoji = emojiLib[result[1]];
        if (emoji) {
          text = text.replace(result[0], emoji);
        }
        if (imageEmotes.includes(result[1])) {
          text = text.replace(
            result[0],
            '`' + result[0].trim().replace(/:/g, '') + '`'
          );
        }
      }
      return text;
    };
    function Inputty() {
      var selection = document.querySelector('textarea').selectionStart;
      document.querySelector('.md textarea').value = emojiIt(
        regExpression,
        document.querySelector('.md textarea').value
      );
      document
        .querySelector('textarea')
        .setSelectionRange(selection, selection);
    }
    try {
      document.querySelector('.md textarea').addEventListener('input', Inputty);
    } catch (err) {
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
  ELEMENTS.BODY_ELEMENT.attr('data-unstrikeText', false);
  // Options
  Options.addCheckbox({
    label: 'UNSTRIKE TEXT',
    default: false,
    section: 'Advanced 2',
    help: 'Makes striken posts only strike the number rather than the accompanying text.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-unstrikeText', this.prop('checked'));
    },
  });
  UPDATE_EVENTS.addListener('new', (data) => {
    if (ELEMENTS.BODY_ELEMENT.attr('data-unstrikeText') == 'false') {
      return;
    } else {
      var ustHtml = data.node.find('.body > .md').html();
      var ustPost = data.node.find('.body > .md').text();
      var ustNumber = parse_body(ustPost)[2];
      if (ustNumber == null) {
        ustNumber = '';
      }
      if (ustNumber.length < 1) {
        return;
      }
      var replacedhtml = ustHtml.replace(
        ustNumber,
        "<span class='countms'>" + ustNumber + '</span>'
      );
      data.node.find('.body > .md').html(replacedhtml);
    }
  });
  // Styles
  Styles.add(
    "\n #lc-body[data-unstrikeText='true'] .stricken .countms{ text-decoration: line-through!important;} #lc-body[data-unstrikeText='true'] .liveupdate-listing li.liveupdate.stricken:not([data-fullname]) div.md {text-decoration: none!important; } #lc-body[data-unstrikeText='true'] .liveupdate-listing li.liveupdate.stricken:not([data-fullname]) div.md p {text-decoration: none!important; } \n"
  );
})(UnstrikeText || (UnstrikeText = {}));

/////////////////////
// LatencyCheck.ts //
/////////////////////
var LatencyCheck;
(function (LatencyCheck) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-latencyCheck', false);
  $(
    '<span id=latencymed class=latency>Median: <span id=latmed></span></span><span id=latency class=latency>Latency: <span id=lat></span></span>'
  ).insertAfter('.reddiquette');
  $('.latency').css({
    display: 'none',
    'font-size': 'smaller',
    float: 'right',
    'margin-top': '5px',
    'margin-left': '10px',
    background: 'transparent',
  });
  var latencyText = {};
  var lat50 = [];
  function calcMedian(ar1) {
    var temporary = ar1.slice(0).sort(function (a, b) {
      return a - b;
    });
    let lowMiddle = Math.floor((temporary.length - 1) / 2);
    let highMiddle = Math.ceil((temporary.length - 1) / 2);
    let median = (temporary[lowMiddle] + temporary[highMiddle]) / 2;
    return Math.round(median);
  }
  // Options
  Options.addCheckbox({
    label: 'LATENCY CHECK',
    default: false,
    section: 'Advanced 2',
    help: 'Latency Check. Median is last 50 posts.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-latencyCheck', this.prop('checked'));
      if (ELEMENTS.BODY_ELEMENT.attr('data-latencyCheck') == 'true') {
        $('.latency').css('display', 'initial');
        $("a[href$='/help/contentpolicy']").css('display', 'none');
        $('#new-update-form .save-button button').click(function () {
          var d = new Date();
          latencyText[document.querySelector('.md textarea').value.trim()] =
            d.getTime();
        });
      }
      if (ELEMENTS.BODY_ELEMENT.attr('data-latencyCheck') == 'false') {
        $('.latency').css('display', 'none');
        $("a[href$='/help/contentpolicy']").css('display', 'initial');
      }
    },
  });
  UPDATE_EVENTS.addListener('new', (data) => {
    if (ELEMENTS.BODY_ELEMENT.attr('data-latencyCheck') == 'false') {
      return;
    } else {
      var latPost = data.node.find('.body > .md').text().trim();
      var author = data.authorNode.attr('href').substring(6);
      if (author == USER) {
        if (latPost in latencyText) {
          var e = new Date();
          var latency = e.getTime() - latencyText[latPost];
          $('#lat').text(latency + 'ms');
          if (lat50.length > 49) {
            lat50.shift();
          }
          lat50.push(latency);
          var latmedian = calcMedian(lat50);
          $('#latmed').text(latmedian + 'ms');
        }
      }
    }
  });
  if (ELEMENTS.BODY_ELEMENT.attr('data-latencyCheck') == 'true') {
    $('.latency').css('display', 'initial');
    $('#lat').css('display', 'initial');
    $('#latmed').css('display', 'initial');
    $("a[href$='/help/contentpolicy']").css('display', 'none');
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
    default: 0,
    help: 'Adjusts the position of the text in the textbox. this SUCKS!',
    onchange: function () {
      $('.usertext-edit textarea').attr('data-TextboxPosition', this.val());
    },
  });
  // Styles
  Styles.add(
    "\n\n\t.usertext-edit textarea[data-TextboxPosition='Lower'] {padding-top: 76px;}\n\n\t"
  );
})(TextboxPosition || (TextboxPosition = {}));

const RATE_LIMIT_VIEW =
  require('./src/rate-limit-view/rate-limit-view').RateLimitView;
new RATE_LIMIT_VIEW(Options);

/////////////////////////
// ImageEmotePicker.ts //
/////////////////////////
var ImageEmotePicker;
(function (ImageEmotePicker) {
  ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotePicker', true);
  // Options
  Options.addCheckbox({
    label: 'Image Emote Picker',
    default: true,
    section: 'Advanced 2',
    help: 'Adds a selector for image emotes.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotePicker', this.prop('checked'));
    },
  });
})(ImageEmotePicker || (ImageEmotePicker = {}));

////////////////////////
// EmoteOrder.ts      //
////////////////////////

var EmoteOrder;
(function (EmoteOrder) {
  // Options
  Options.addSelect({
    label: 'Emote Picker Order',
    options: ['Alphabetical', 'Date Added', 'Usage'],
    section: 'Advanced 2',
    default: 'Alphabetical',
    help: 'Changes the order of emotes in the Emote Picker. Changes upon refresh.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-EmoteOrder', this.val());
    },
  });
})(EmoteOrder || (EmoteOrder = {}));

////////////////////
// ImageEmotes.ts //
////////////////////
var ImageEmotes;
var emoteCount = 0;
var stringy = '';
(function (ImageEmotes) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes', true);
  var emoteimages = {};
  var emotefunccheck = 0;
  var the_emote = '';
  var emoteUses = [];
  // Check/Update emoteUses when emotes are added or removed
  if (localStorage.getItem('emoteUses') != null) {
    emoteUses = JSON.parse(localStorage.getItem('emoteUses'));
    // Check for old emote ids
    if (emoteUses[0][0] == 0) {
      for (var emote in emoteUses) {
        emoteUses[emote][0] = imageEmotes[emote];
      }
    }
  }
  for (var emote in emoteUses) {
    if (imageEmotes.includes(emoteUses[emote][0]) == false) {
      emoteUses.splice(emote, 1);
    }
  }
  for (var emote in imageEmotes) {
    if (emoteUses.flat().includes(imageEmotes[emote]) == false) {
      emoteUses.push([imageEmotes[emote], 0]);
    }
  }
  localStorage.setItem('emoteUses', JSON.stringify(emoteUses));
  // Options
  Options.addCheckbox({
    label: 'IMAGE EMOTES',
    default: true,
    section: 'Advanced 2',
    help: 'Enables image emotes. Requires refresh probably',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes', this.prop('checked'));
      if (ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes') == 'true') {
        emotes_load();
      }
    },
  });

  function toDataURL(url, callback) {
    callback(url);
    if (Object.keys(emoteimages).length == imageEmotes.length) {
      if (ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes') == 'true') {
        $('code').each(function () {
          var thistext = $(this).text();
          if (imageEmotes.indexOf(thistext.toLowerCase()) > -1) {
            var this_new_html =
              '<img title=' +
              thistext +
              " style='height:26px;vertical-align:top;' src=" +
              emoteimages['<code>' + thistext.toLowerCase() + '</code>'] +
              '></img>';
            $(this).replaceWith(this_new_html);
          }
        });
      }
      UPDATE_EVENTS.addListener('loaded', (data) => {
        if (ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes') == 'true') {
          var emotes_post = data.bodyNode.html();
          the_emote = emotes_post.match(/<code>(.*?)<\/code>/gm);
          for (var emote in the_emote) {
            if (the_emote[emote].toLowerCase() in emoteimages) {
              var emotename = the_emote[emote];
              emotename = emotename
                .replace('<code>', '')
                .replace('</code>', '');
              emotes_post = emotes_post.replace(
                the_emote[emote],
                '<img title=' +
                  emotename +
                  " style='height:26px;vertical-align:top;' src=" +
                  emoteimages[the_emote[emote].toLowerCase()] +
                  '></img>'
              );
            }
          }
          data.bodyNode.html(emotes_post);
        }
      });
    }
    if (
      Object.keys(emoteimages).length == imageEmotes.length &&
      ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotePicker') == 'true'
    ) {
      var sorted = [];
      if (
        ELEMENTS.BODY_ELEMENT.attr('data-EmoteOrder') == 'Alphabetical' ||
        ELEMENTS.BODY_ELEMENT.attr('data-EmoteOrder') == undefined
      ) {
        sorted = [...imageEmotes].sort();
      } else if (
        ELEMENTS.BODY_ELEMENT.attr('data-EmoteOrder') == 'Date Added'
      ) {
        sorted = [...imageEmotes];
      } else if (ELEMENTS.BODY_ELEMENT.attr('data-EmoteOrder') == 'Usage') {
        emoteUses = JSON.parse(localStorage.getItem('emoteUses'));
        var sortedUses = [...emoteUses];
        sortedUses.sort(function (a, b) {
          return b[1] - a[1];
        });
        sortedUses.forEach((emote) => sorted.push(emote[0]));
      }

      for (var i = 0; i < Object.keys(sorted).length; i++) {
        stringy = stringy.concat(
          '<img src="' +
            emoteimages['<code>' + sorted[i] + '</code>'] +
            '" class="img img-responsive emoji-btn" id="' +
            sorted[i] +
            '" style="height:26px;vertical-align:top;">'
        );
      }
      $('.bottom-area').append(
        '<script>function myFunction() {var x = document.querySelectorAll(".emoji-picker")[0];if (x.style.display == "block") {$("#emotespicker").text(" Emotes [+]"); x.style.display = "none";} else {$("#emotespicker").text(" Emotes [-]");x.style.display = "block";}}</script>'
      );
      $(`.error`).wrap(`<span class="muherror"></span>`);
      Styles.add(
        `.muherror {display:block;text-align: right;width: 480px;position: absolute;} .NO_TEXT{margin-left: -230px;margin-top: 20px;}`
      );
      $('.usertext-buttons').before(
        '<span id="emotespicker" onclick="myFunction()" style="font-size:smaller;float: right; margin-top: 5px;cursor:pointer;"> Emotes [+]</span>'
      );
      $(
        '<div style="display: none;max-width:480px;" class="emoji-picker"></div>'
      ).insertAfter('.save-button .btn');
      $('.emoji-picker').append(stringy);
      $('.emoji-btn').click(function () {
        // find selection range and insert emote text into the selection
        var select_start = document.querySelector('textarea').selectionStart;
        var select_end = document.querySelector('textarea').selectionEnd;
        document.querySelector('textarea').value =
          document.querySelector('textarea').value.substring(0, select_start) +
          '`' +
          this.id +
          '`' +
          document.querySelector('textarea').value.substring(select_end);
        document
          .querySelector('textarea')
          .setSelectionRange(
            select_end + this.id.length + 2,
            select_end + this.id.length + 2
          );
        document.querySelector('textarea').focus();
      });
    }
    emoteCount++;
  }
  function emotes_load() {
    emotefunccheck++;
    if (emotefunccheck > 1) return;

    for (var i = 0; i < imageEmotes.length; i++) {
      var code = imageEmotes[i];
      var url = imageEmoteData[code];

      toDataURL(url, function (dataUrl) {
        emoteimages['<code>' + code + '</code>'] = dataUrl;
      });
    }

    UPDATE_EVENTS.addListener('new', (data) => {
      if (ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes') == 'true') {
        var emotes_post = data.bodyNode.html();
        var emote_author = data.authorNode.attr('href').substring(6);
        var emotes_text = data.bodyNode.text();
        var unique_emotes = [];
        the_emote = emotes_post.match(/<code>(.*?)<\/code>/gm);
        for (var emote in the_emote) {
          if (the_emote[emote].toLowerCase() in emoteimages) {
            var emotename = the_emote[emote];
            emotename = emotename.replace('<code>', '').replace('</code>', '');
            if (
              emote_author == USER &&
              unique_emotes.includes(emotename) == false
            ) {
              unique_emotes.push(emotename);
            }
            emotes_post = emotes_post.replace(
              the_emote[emote],
              '<img title=' +
                emotename +
                " style='height:26px;vertical-align:top;' src=" +
                emoteimages[the_emote[emote].toLowerCase()] +
                '></img>'
            );
          }
        }
        data.bodyNode.html(emotes_post);
        for (var unique in unique_emotes) {
          //finds the index of emote code by flattening
          emoteUses[emoteUses.flat().indexOf(unique_emotes[unique]) / 2][1]++;
        }
      }
      if (unique_emotes.length > 0) {
        localStorage.setItem('emoteUses', JSON.stringify(emoteUses));
      }
    });
  }

  if (ELEMENTS.BODY_ELEMENT.attr('data-ImageEmotes') == 'true') {
    emotes_load();
  }
})(ImageEmotes || (ImageEmotes = {}));

/////////////////////
// KpartAlert.ts //
/////////////////////
var KpartAlert;
(function (KpartAlert) {
  // INITIALIZATION
  ELEMENTS.BODY_ELEMENT.attr('data-KpartAlert', false);
  // Options
  Options.addCheckbox({
    label: 'KPART ALERT',
    default: false,
    section: 'Advanced 2',
    help: 'Sends a notification when a new K is reached. Last count must be on for this to work.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-KpartAlert', this.prop('checked'));
    },
  });
})(KpartAlert || (KpartAlert = {}));

////////////////////
// RESDarkMode.ts //
////////////////////
var RESDarkMode;
(function (RESDarkMode) {
  // Options
  ELEMENTS.BODY_ELEMENT.attr('data-RESDarkMode', false);
  var resTest = 0;
  function resAdda() {
    resTest = 1;
    Styles.add(
      `.res-nightmode #liveupdate-options select {color:black;} .res-nightmode #fakerunner {color:black;} .res-nightmode #liveupdate-resources h5 {color: #ccc;} .res-nightmode #liveupdate-resources h3 {color: #ccc;} .res-nightmode #dailyenabler2 {color: #ccc;} .res-nightmode #dailyenabler {color: #ccc;} .res-nightmode .toggle-trigger {color: #ccc;} .res-nightmode #live-counting-extension h2 {color: #ccc;} .res-nightmode #liveupdate-options {color:#ccc;} body.res-nightmode {background-color: #262626!important} html.res-nightmode, .res-nightmode body, .res-nightmode body .content, .res-nightmode .modal-body, .res-nightmode .side, .res-nightmode .icon-menu a, .res-nightmode .side .leavemoderator, .res-nightmode .side .leavecontributor-button, .res-nightmode .side .titlebox, .res-nightmode .side .spacer .titlebox .redditname, .res-nightmode .side .titlebox .flairtoggle, .res-nightmode .side .usertext-body .md ol, .res-nightmode .side .usertext-body .md ol ol, .res-nightmode .side .usertext-body .md ol ol li, .res-nightmode .modactionlisting table *, .res-nightmode .side .recommend-box .rec-item, .res-nightmode .crosspost-preview, .res-nightmode .crosspost-thing-preview, .res-nightmode .admin_takedown, .res-nightmode .happening-now {   background-color: #262626!important;   border-color: #777!important; } .res-nightmode .embedded-page .content > .sitetable, .res-nightmode .embedded-page.helpcenter-page .content, .res-nightmode .embedded-page.compose-page .content, .res-nightmode .embedded-page .content > .sitetable > div:nth-of-type(4n+1), .res-nightmode .embedded-page.helpcenter-page .content > div:nth-of-type(4n+1), .res-nightmode .embedded-page.compose-page .content > div:nth-of-type(4n+1) {   background-color: #262626;   color: #aaa; } .res-nightmode .link, .res-nightmode .helpcenter-form .section-content {   background-color: #262626; } .res-nightmode .helpcenter-form .helpcenter-bottom-panel .helpcenter-content-policy p {   color: #aaa; } .res-nightmode .popup, .res-nightmode .guider, .res-nightmode .guider p {   background-color: #262626;   color: #aaa; } .res-nightmode #login_login {   background-color: #333;   color: #bbb; } .res-nightmode .RESCloseButton::after, .res-nightmode .message.new > .entry, .res-nightmode .read-next, .res-nightmode .drop-choices {   border-color: #4d4d4d;   background-color: #333; } .res-nightmode .drop-choices {   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3); } .res-nightmode .read-next .read-next-header, .res-nightmode .flairselector h2, .res-nightmode .flairselector li:hover {   border-color: transparent;   background-color: #3e3e3e; } .res-nightmode .flairselector li.selected, .res-nightmode .RESNotification {   border-color: #787878; } .res-nightmode .RESCloseButton:hover::after {   background-color: #333; } .res-nightmode #RESHoverContainer::after {   border-color: transparent #262626; } .res-nightmode.liveupdate-app .content {   background-color: #161616; } .res-nightmode .entry .morecomments .gray, .res-nightmode .markdownEditor .RESCharCounter {   color: rgba(221, 221, 221, 0.8); } .res-nightmode #BigEditor .markdownEditor .RESMacroDropdownList li:hover a {   color: #bbb; } .res-nightmode .trophy-info .trophy-name {   color: #eee !important; } .res-nightmode .sidecontentbox .content {   border-color: rgba(234, 234, 234, 0.1); } .res-nightmode .RESUserTagImage::after {   color: #758ea8; } .res-nightmode #DonateRES {   background: #ccc; } .res-nightmode #progressIndicator, .res-nightmode .hover-bubble, .res-nightmode .side .side-message, .res-nightmode #editShortcutDialog, .res-nightmode #RESShortcutsAddFormContainer {   color: #ddd;   border-color: #4d4d4d;   background-color: #333; } .res-nightmode .login-form-side {   background-color: #888;   color: #eee; } .res-nightmode .login-form-side .error {   color: #cd5a5a; } .res-nightmode #header, .res-nightmode .liveupdate-home .content {   background-color: dimgrey; } .res-nightmode #jumpToContent {   color: #ddd;   border: 1px solid;   padding: 0 2px; } .res-nightmode #sr-header-area, .res-nightmode #sr-more-link {   background-color: #ccc;   color: #000; } .res-nightmode .usertable tr .user .userkarma {   color: #aa9; } .res-nightmode .thing.spam {   background-color: #3d2929; } .res-nightmode .content .pretty-form * {   box-shadow: none; } .res-nightmode .RESDashboardComponentContainer {   padding: 0; } .res-nightmode .RESDashboardComponentContainer .linklisting {   padding: 5px; } .res-nightmode .new-comment .usertext-body {   border-color: #242b3f;   background-color: #1a2135; } .res-nightmode .RESDropdownList.RESMacroDropdownList a:hover, .res-nightmode .RESDropdownList.RESMacroDropdownList li:hover {   background-color: #777;   color: #aaa; } .res-nightmode .wiki-page .pageactions .wikiaction-current {   background-color: #777; } .res-nightmode .contact-us-page .button {   background: #777;   color: #ddd; } .res-nightmode .contact-us-page .button:hover {   background: #666; } .res-nightmode .message .subject .correspondent {   background: #212f46;   color: #1496dc; } .res-nightmode .moderator .linefield {   background: #1a1a1a; } .res-nightmode .wiki-page .wiki-page-content .md.wiki > .toc ul, .res-nightmode .tabmenu li a, .res-nightmode .tabmenu li.selected a, .res-nightmode #report form {   background-color: #262626; } .res-nightmode .tabmenu li.selected a {   color: #d25a32;   border-bottom-color: #262626; } .res-nightmode .tabmenu.formtab a {   color: white;   border-color: #505050; } .res-nightmode .tabmenu.formtab .selected a {   color: white;   background-color: #5f99cf; } .res-nightmode #RESDashboardAddComponent, .res-nightmode .dashboardPane > .RESDashboardComponent {   background-color: gray; } .res-nightmode #RESDashboard .RESDashboardComponentHeader {   background-color: #848484; } .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul li.active, .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul li:hover {   background-color: #ccc; } .res-nightmode .side .titlebox form.flairtoggle, .res-nightmode .trophy-area .content, .res-nightmode .side .md ol, .res-nightmode .side .md ul {   background-color: #262626;   color: #ddd; } .res-nightmode .organic-listing {   border-color: #505050;   background-color: transparent !important; } .res-nightmode .organic-listing .nextprev {   opacity: 0.5; } .res-nightmode .organic-listing .link, .res-nightmode .link.promotedlink {   background-color: transparent;   border-color: #505050; } .res-nightmode .arrow.up, .res-nightmode .arrow.upmod, .res-nightmode .arrow.down, .res-nightmode .arrow.downmod {   background-image: url('../images/nightmode/arrows.png');   background-repeat: no-repeat; } .res-nightmode .arrow.up {   background-position: -15px 0; } .res-nightmode .arrow.up:hover {   background-position: -30px 0; } .res-nightmode .arrow.upmod {   background-position: 0 0; } .res-nightmode .arrow.down {   background-position: -15px -14px; } .res-nightmode .arrow.down:hover {   background-position: -30px -14px; } .res-nightmode .arrow.downmod {   background-position: 0 -14px; } .res-nightmode .subredditbox li {   font-weight: 700;   text-transform: lowercase; } .res-nightmode .subredditbox li a::before {   content: '#'; } .res-nightmode .dropdown.lightdrop a.choice:hover {   background-color: #1a1a1a; } .res-nightmode .sidebox, .res-nightmode .subreddit-info, .res-nightmode .raisedbox, .res-nightmode .login-form-side, .res-nightmode .interstitial-subreddit-description {   background-color: #393939;   border-color: #151515;   color: #aaa; } .res-nightmode .subreddit-info .spacer a {   background-color: #262626; } .res-nightmode .morelink {   background: #444;   border-color: #444; } .res-nightmode .morelink:hover {   border-color: #333;   background: #333; } .res-nightmode .morelink:hover a {   color: #1496dc; } .res-nightmode .morelink .nub {   display: none; } .res-nightmode .sidebox .spacer, .res-nightmode .side .linkinfo {   background-color: #393939; } .res-nightmode .commentbody.border {   background-color: #369; } .res-nightmode input[type='number'], .res-nightmode input[type='text'], .res-nightmode input[type='password'], .res-nightmode .c-form-control {   color: #ccc;   border: 1px solid #4d4d4d;   background-color: #333; } .res-nightmode .content textarea {   background-color: #333;   color: #eee; } .res-nightmode .rulespage .example, .res-nightmode #userTaggerTable th, .res-nightmode #newCommentsTable th, .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul .updateTime:hover, .res-nightmode .instructions .preftable th, .res-nightmode .instructions .pretty-form, .res-nightmode .remove-self .option, .res-nightmode .unfriend-button .option, .res-nightmode .RESDashboardComponent .widgetPath, .res-nightmode .entry .buttons li.reported-stamp, .res-nightmode .pretty-button, .res-nightmode .report-reasons {   color: #000; } .res-nightmode .viewSource textarea[readonly] {   background: #666; } .res-nightmode .reported {   border-color: #daa520; } .res-nightmode .nextprev a {   background: #777;   border-color: #333;   color: #ddd; } .res-nightmode .nextprev img:hover {   opacity: 0.85; } .res-nightmode #ad-frame {   opacity: 0.8; } .res-nightmode .comment.unread {   background-color: #4a473b; } .res-nightmode .raisedbox .flat-list a {   background-color: #262626; } .res-nightmode .raisedbox .flat-list a:hover {   background-color: #369;   color: #fff; } .res-nightmode .instructions {   background: #fff; } .res-nightmode #siteTable .link .title.loggedin.click, .res-nightmode #BigEditor .markdownEditor .RESMacroDropdownList a {   color: gray; } .res-nightmode .markhelp.md tr td {   background-color: #36c; } .res-nightmode .mail .havemail img, .res-nightmode .mail .nohavemail img {   visibility: hidden; } .res-nightmode .expando-button {   background-color: transparent; } .res-nightmode #sr-autocomplete-area {   z-index: 1; } .res-nightmode button, .res-nightmode input[type='button'], .res-nightmode input[type='submit'], .res-nightmode input[type='reset'] {   color: #fff;   border: 1px outset grey;   background-color: #4d4d4d; } .res-nightmode .create-reddit .title {   background-color: rgba(24, 24, 24, 0.2);   color: #8AD; } .res-nightmode .linefield, .res-nightmode .linefield .linefield-content, .res-nightmode .linefield.mobile {   border-color: #1a1a1a;   background-color: #4d4d4d; } .res-nightmode #RESShortcutsEditContainer, .res-nightmode #RESShortcutsSort, .res-nightmode #RESShortcutsRight, .res-nightmode #RESShortcutsLeft, .res-nightmode #RESShortcutsAdd {   background: #ccc; } .res-nightmode .content .roundfield, .res-nightmode .content.submit .roundfield, .res-nightmode .traffic-table tr:nth-of-type(even) {   background-color: #181818; } .res-nightmode .traffic-table tr:nth-of-type(odd).promo-traffic-live {   color: #181818; } .res-nightmode .traffic-table.promocampaign-table tr.active {   background-color: #6d2f39;   border: 2px dotted #a70000; } .res-nightmode .sponsored-page .dashboard {   color: #dedede; } .res-nightmode .sponsored-page .campaign-editor .editor-group, .res-nightmode .sponsored-page .editor-group {   background-color: #151515; } .res-nightmode .sponsored-page .campaign-editor .campaign-set {   background-color: #666; } .res-nightmode .sponsored-page .linefield-content textarea, .res-nightmode .sponsored-page .linefield-content input {   color: #181818; } .res-nightmode .linefield .markhelp table {   background-color: inherit; } .res-nightmode .content .sponsored-page textarea, .res-nightmode .content .sponsored-page input {   background-color: #fcfcfc; } .res-nightmode .md code, .res-nightmode .md pre, .res-nightmode .link .md pre, .res-nightmode .content .md pre, .res-nightmode .new-comment .md pre, .res-nightmode .usertext.border .md pre, .res-nightmode .link .md :not(pre) > code, .res-nightmode .new-comment .md :not(pre) > code, .res-nightmode .usertext.border .md :not(pre) > code {   color: inherit;   border-color: #58697b;   background-color: #2a3340; } .res-nightmode .comment .md p a[href='/spoiler'], .res-nightmode .comment .md p a[href='#spoiler'] {   background-color: #000;   color: #000; } .res-nightmode .usertable tr:hover, .res-nightmode .moderator-table tr:hover, .res-nightmode .usertext.border .usertext-body, .res-nightmode .usertext.grayed .usertext-body {   background-color: #444; } .res-nightmode .login-form, .res-nightmode .login-form-side .submit, .res-nightmode #header-bottom-right, .res-nightmode #srList, .res-nightmode .dropdown.lightdrop .drop-choices {   background-color: #333; } .res-nightmode #srList tr {   border-bottom-color: #646464; } .res-nightmode #srList tr:hover {   background-color: #3e3e3e; } .res-nightmode #quickMessage textarea, .res-nightmode #quickMessage select {   background-color: #aaa; } .res-nightmode #search input[type='text'] {   color: white !important; } .res-nightmode #search select, .res-nightmode #search option {   color: #1a1a1a; } .res-nightmode ul.res-search-tabs li a {   background-color: #393939; } .res-nightmode.res-searchHelper-searchPageTabs ul.res-search-tabs li.res-search-tab-active a, .res-nightmode.res-searchHelper-searchPageTabs .combined-search-page #previoussearch .res-search-pane, .res-nightmode #RESConsoleContainer, .res-nightmode #SearchRES-results-container li, .res-nightmode #SearchRES-results-container li:hover, .res-nightmode #REScommentSubToggle {   background-color: #222; } .res-nightmode #searchexpando, .res-nightmode .post-sharing {   background: #303030;   border-color: #444; } .res-nightmode.res-searchHelper-searchPageTabs .combined-search-page .search-result .search-expando.collapsed::before {   background: linear-gradient(to bottom, rgba(34, 34, 34, 0) 0%, #222 100%); } .res-nightmode.res-searchHelper-searchPageTabs .combined-search-page .search-result-group .search-result-group-header {   border-bottom-color: grey; } .res-nightmode a, .res-nightmode .md a, .res-nightmode .share-button .option, .res-nightmode #subscribe a, .res-nightmode .share .option, .res-nightmode .wired a, .res-nightmode .side a, .res-nightmode .link .score.dislikes, .res-nightmode .linkcompressed .score.dislikes, .res-nightmode a[rel='tag'], .res-nightmode .dsq-help, .res-nightmode #authorInfoToolTip h3 a, .res-nightmode .reddiquette, .res-nightmode .parent .author, .res-nightmode .parent .subreddit, .res-nightmode .combined-search-page .search-result a, .res-nightmode .combined-search-page .search-result a > mark, .res-nightmode .hoverHelp, .res-nightmode .deepthread a, .res-nightmode .policy-page .md h1 a, .res-nightmode .policy-page .md h3 a {   color: #8cb3d9; } .res-nightmode .flairselector li a {   color: #85b3e0 !important; } .res-nightmode .thing .title {   color: #dedede; } .res-nightMode-coloredLinks .res-nightmode .thing .title {   color: #5c99d6; } .res-nightmode .thing .source-url {   color: #ccc; } .res-nightMode-coloredLinks .res-nightmode .thing .source-url {   color: #3380cc; } .res-nightmode .tagline a {   color: #6a98af; } .res-nightmode .morecomments a {   color: #999; } .res-nightmode .thing .title:visited, .res-nightmode .thing.visited .title, .res-nightmode .combined-search-page .search-result.visited a, .res-nightmode .combined-search-page .search-result a:visited, .res-nightmode .combined-search-page .search-result a:visited > mark {   color: #a6a6a6; } .res-nightMode-coloredLinks .res-nightmode .thing .title:visited, .res-nightMode-coloredLinks .res-nightmode .thing.visited .title, .res-nightMode-coloredLinks .res-nightmode .combined-search-page .search-result.visited a, .res-nightMode-coloredLinks .res-nightmode .combined-search-page .search-result a:visited, .res-nightMode-coloredLinks .res-nightmode .combined-search-page .search-result a:visited > mark {   color: #a679d2; } .res-nightmode .thing .source-url:visited {   color: #999; } .res-nightMode-coloredLinks .res-nightmode .thing .source-url:visited {   color: #945ec9; } .res-nightmode .flair-settings ~ .tabpane-content {   border-color: #1a1a1a; } .res-nightmode .flaircell input[type='text'] {   border: 1px solid #555; } .res-nightmode .md blockquote {   color: #a0a0a0;   border-left-color: #646464; } .res-nightmode .infobar:not(.newsletterbar), .res-nightmode .reddit-infobar {   border-color: #2966a3;   background-color: #264d73; } .res-nightmode .infobar:not(.newsletterbar) .md, .res-nightmode .reddit-infobar .md {   color: white; } .res-nightmode .rank .star, .res-nightmode .link .score.likes, .res-nightmode .linkcompressed .score.likes {   color: #ff4500; } .res-nightmode .linkcompressed .entry .buttons li a, .res-nightmode .link .usertext-body .md, .res-nightmode .thing .compressed, .res-nightmode .link.promotedlink, .res-nightmode .link.promotedlink.promoted, .res-nightmode .subreddit .usertext .md, .res-nightmode .commentreply .help tr {   background: none; } .res-nightmode .link .usertext-body .md, .res-nightmode .side .linkinfo {   border-color: #666; } .res-nightmode .subreddit-info .label, .res-nightmode .sidebox .subtitle, .res-nightmode .modactionlisting .description, .res-nightmode .modactionlisting .timestamp time, .res-nightmode .modactionlisting .timestamp {   color: #aaa; } .res-nightmode .submit textarea, .res-nightmode .submit #url, .res-nightmode .submit #sr-autocomplete, .res-nightmode .usertext-edit textarea, .res-nightmode .RESDialogSmall, .res-nightmode .c-close, .res-nightmode #BigEditor #BigText, .res-nightmode #liveupdate-statusbar, .res-nightmode #liveupdate-statusbar.complete, .res-nightmode #alert_message input {   color: #ccc;   border-color: #4d4d4d;   background-color: #333; } .res-nightmode #liveupdate-statusbar.live.connected {   background-color: #344b4e;   border: 1px solid #38585f;   color: inherit; } .res-nightmode .RESHoverInfoCard::before {   border-right-color: #4d4d4d; } .res-nightmode .RESHoverInfoCard::after {   border-right-color: #333; } .res-nightmode .RESHoverInfoCard.right::before {   border-left-color: #4d4d4d; } .res-nightmode .RESHoverInfoCard.right::after {   border-left-color: #333; } .res-nightmode .RESDialogSmall > h3, .res-nightmode .NERPageMarker {   color: inherit;   border-color: #4d4d4d;   background-color: transparent; } .res-nightmode.res-commentBoxes .comment, .res-nightmode.res-commentBoxes .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment .comment {   background-color: #161616 !important; } .res-nightmode.res-commentBoxes .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment, .res-nightmode.res-commentBoxes .comment .comment .comment .comment .comment .comment .comment .comment .comment .comment {   background-color: #121212 !important; } .res-nightmode.res-commentBoxes .comment {   border-color: #333 !important; } .res-nightmode.res-commentBoxes .comment.spam {   background-image: linear-gradient(#633636, #633636); } .res-nightmode.res-commentBoxes.res-commentHoverBorder .comment:hover {   border-color: #555 !important; } .res-nightmode .RESDropdownList, .res-nightmode #RESPrefsDropdown {   border-color: gray; } .res-nightmode .RESDropdownList li, .res-nightmode .RESDropdownList li a {   background: #444;   color: gray; } .res-nightmode .RESDropdownList li {   border-bottom-color: gray; } .res-nightmode .RESDropdownList li:hover, .res-nightmode .RESDropdownList li:hover a {   background-color: #555;   color: #bbb; } .res-nightmode > .content > .spacer > .sitetable::before, .res-nightmode > .content > .sharelink ~ .sitetable::before, .res-nightmode .side .age, .res-nightmode .trophy-info *, .res-nightmode .golddvertisement, .res-nightmode .flair-jump .title, .res-nightmode .savedComment, .res-nightmode .md, .res-nightmode .md h2, .res-nightmode .content .sitetable .thing .md, .res-nightmode .side .usertext-body ol, .res-nightmode .side .redditname a, .res-nightmode .side h1, .res-nightmode .side h2, .res-nightmode .side h3, .res-nightmode .side h4, .res-nightmode .side h5, .res-nightmode .side h6, .res-nightmode .content .wiki-page-content .md.wiki h1, .res-nightmode .content .wiki-page-content .md.wiki h2, .res-nightmode .content .wiki-page-content .md.wiki h3, .res-nightmode .content .wiki-page-content .md.wiki h4, .res-nightmode .content .wiki-page-content .md.wiki h5, .res-nightmode .content .wiki-page-content .md.wiki h6, .res-nightmode .content .wiki-page-content .md.wiki p, .res-nightmode .wiki-page .wiki-page-content .pagelisting, .res-nightmode .RESUserTag, .res-nightmode .sidebar h1, .res-nightmode .sidebar h2, .res-nightmode .sidebar h3, .res-nightmode .sidebar h4, .res-nightmode .sidebar h5, .res-nightmode .sidebar h6, .res-nightmode .flairselector h2, .res-nightmode .wiki-page .wiki-page-content .description h2 {   color: #ddd; } .res-nightmode .voteWeight, .res-nightmode .nextprev img {   opacity: 0.7; } .res-nightmode .searchfacets {   background-color: #2c2c2c;   box-shadow: none; } .res-nightmode .combined-search-page .search-result .search-result-body, .res-nightmode .generic-table, .res-nightmode .message.message-reply.recipient > .entry .head, .res-nightmode .message.message-parent.recipient > .entry .head, .res-nightmode .linefield .title, .res-nightmode .liveupdate-listing li.liveupdate:hover time, .res-nightmode .spam .domain, .res-nightmode .spam .domain a, .res-nightmode .hover-bubble.multi-selector strong, .res-nightmode .subreddit-rules-page .md-container .md .subreddit-rule-description {   color: inherit; } .res-nightmode .comment.spam > .child, .res-nightmode .message.spam > .child {   background-color: transparent; } .res-nightmode .nextprev a:hover, .res-nightmode .next-suggestions a:hover {   border-color: transparent;   background-color: #777; } .res-nightmode .modactionlisting + #progressIndicator {   width: auto;   margin: 20px 310px 0 0; } .res-nightmode body.with-listing-chooser .listing-chooser, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser {   background-color: #262626; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy {   background-color: #262626;   border: none;   outline: none; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy::after, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy::after {   background-color: #2f2f2f;   border-right-color: #444; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy:hover, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy:hover, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy:hover, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy:hover {   background-color: #262626;   border-left-color: #333; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy:hover::before, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy:hover::before, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy:hover::before, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy:hover::before {   background-color: #262626; } .res-nightmode body.with-listing-chooser .listing-chooser .grippy:hover::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser .grippy:hover::after, .res-nightmode body.with-listing-chooser .listing-chooser.initialized .grippy:hover::after, .res-nightmode body.with-listing-chooser.listing-chooser-collapsed .listing-chooser.initialized .grippy:hover::after {   border-right-color: #777; } .res-nightmode .listing-chooser li, .res-nightmode .listing-chooser li.selected {   background-color: #393939;   color: #ccc;   border-color: #000;   box-shadow: none; } .res-nightmode .listing-chooser li a, .res-nightmode .listing-chooser li.selected a {   color: #8AD; } .res-nightmode .listing-chooser .intro {   background-color: #444;   border-color: #262626;   color: #ccc; } .res-nightmode .listing-chooser .create button {   color: #eee;   background-color: #777; } .res-nightmode .subreddits .remove-sr, .res-nightmode .add-sr .add {   filter: invert(80%); } .res-nightmode .with-listing-chooser.multi-page .footer-parent {   background: url('../images/nightmode/snooBalloons.png') no-repeat 49% 0; } .res-nightmode #about-main #history .events.timeline .event:hover .event-content {   box-shadow: 1px 0 3px 2px #aaa; } .res-nightmode #about-main .statsgrid .stat .value {   text-shadow: 0 3px 5px #1a1a1a; } .res-nightmode .about-page .abouttitle h1, .res-nightmode .create .morelink, .res-nightmode .permission-summary, .res-nightmode .flairselector li, .res-nightmode .subreddit .usertext .md {   border-color: transparent; } .res-nightmode .about-page .about-menu {   background: #ddd; } .res-nightmode .about-page h2, .res-nightmode .md del {   color: #777; } .res-nightmode .about-page .about-menu li.selected a, .res-nightmode .about-page .about-menu li:hover a, .res-nightmode #about-main #history .events.timeline .event-content {   background: #aaa; } .res-nightmode .about-page .abouttitle {   background-image: url('../images/nightmode/aboutHeader.png'); } .res-nightmode .policy-page .md p {   color: #eee; } .res-nightmode .policy-page .md p em {   background-color: #dad0b3;   color: #000; } .res-nightmode body, .res-nightmode .sidebar .md, .res-nightmode .side, .res-nightmode .side *, .res-nightmode .side .spacer, .res-nightmode .content, .res-nightmode .traffic-tables .traffic-table tr, .res-nightmode .parentComment .md, .res-nightmode .post-body.entry-content, .res-nightmode .dsq-auth-header, .res-nightmode .instructions .preftable th, .res-nightmode #BigEditor .markdownEditor a, .res-nightmode #BigEditor .markdownEditor .RESMacroDropdownTitle, .res-nightmode #REScommentSubToggle, .res-nightmode #alert_message, .res-nightmode #report-action-form {   color: #ccc; } .res-nightmode .titlebox form.toggle, .res-nightmode .leavemoderator {   background-color: inherit; } .res-nightmode .server-seconds {   background: #333;   border-color: #1a1a1a; } .res-nightmode .snoovatar-page footer .inputs, .res-nightmode .guider, .res-nightmode aside.sidebar #discussions li {   background: #262626; } .res-nightmode .snoovatar-page .checkbox-label [type='checkbox'] + .proxy-checkbox {   background: #f00; } .res-nightmode .snoovatar-page .checkbox-label [type='checkbox']:checked + .proxy-checkbox {   background: #0a802e; } .res-nightmode .tagline .friend {   color: #d25a32; } .res-nightmode .tagline .submitter {   color: #0af; } .res-nightmode .tagline .moderator {   color: #282; } .res-nightmode .tagline .admin, .res-nightmode .user-distinction .admin {   color: #c81414; } .res-nightmode hr, .res-nightmode .md hr, .res-nightmode .message.gold-auto blockquote {   border-color: #3c3c3c;   background-color: #3c3c3c; } .res-nightmode #RESSubredditGroupDropdown {   background-color: #ccc; } .res-nightmode #RESSubredditGroupDropdown a, .res-nightmode .RESNotificationContent, .res-nightmode .RESNotificationFooter, .res-nightmode .sr-bar a {   color: black; } .res-nightmode .goldvertisement, .res-nightmode .goldvertisement .inner {   border-color: rgba(196, 180, 135, 0.5); } .res-nightmode .goldvertisement .inner h2, .res-nightmode .goldvertisement .progress p {   color: #c4b487; } .res-nightmode .goldvertisement a, .res-nightmode .goldvertisement a:hover {   background-color: #4d4d4d;   border-color: black;   color: white; } .res-nightmode .letter-body p, .res-nightmode #gold-letter h1, .res-nightmode #about-gold h1, .res-nightmode #about-gold footer > p, .res-nightmode .RESDashboardComponentScrim span, .res-nightmode .RESDashboardComponent .RESDashboardComponentHeader ul .updateTime, .res-nightmode .remove-self .option, .res-nightmode .moderator.remove-self .option, .res-nightmode .message-count, .res-nightmode .usertable > .toggle {   color: #262626; } .res-nightmode .gold-accent {   color: #e6daae;   background-color: #837854;   border-color: #ac9c68; } .res-nightmode .side .gold-accent *, .res-nightmode .gold-accent .details, .res-nightmode .gold-accent h1, .res-nightmode .gold-accent th {   color: #e6daae; } .res-nightmode .hover-bubble.anchor-top-centered::after, .res-nightmode #about-main #history .events.timeline .event-marker.top, .res-nightmode #about-main #history .events.timeline .event-marker.bottom {   border-bottom-color: #aaa; } .res-nightmode .guiders_arrow {   opacity: 0.5; } .res-nightmode .white-field, .res-nightmode .delete-field, .res-nightmode .RESDialogSmall.livePreview .md.RESDialogContents, .res-nightmode .moderator .traffic-table tbody tr:nth-child(even), .res-nightmode .instructions, .res-nightmode .linefield .delete-field, .res-nightmode #pref-delete .delete-field, .res-nightmode .contact-us-page .details li, .res-nightmode .subreddit-report-form input:disabled, .res-nightmode .action-form input:disabled {   background-color: transparent; } .res-nightmode .message.message-reply .entry, .res-nightmode .message.message-parent .entry, .res-nightmode .flairselector.drop-choices.active, .res-nightmode .message.threaded .child, .res-nightmode .comment .child, .res-nightmode .comment .showreplies, .res-nightmode .message.message-reply:not(.threaded) .entry, .res-nightmode .message.message-parent:not(.threaded) .entry, .res-nightmode.liveupdate-app .content, .res-nightmode .liveupdate-listing li.separator::before, .res-nightmode .md td, .res-nightmode .md th, .res-nightmode .footer, .res-nightmode .footer .col, .res-nightmode .userTagLink.hasTag, .res-nightmode #userTaggerPreview {   border-color: #4d4d4d; } .res-nightmode .comment .md p a[href='/spoiler']:hover, .res-nightmode .comment .md p a[href='/spoiler']:active, .res-nightmode .comment .md p a[href='#spoiler']:hover, .res-nightmode .comment .md p a[href='#spoiler']:active, .res-nightmode .addNewWidget, .res-nightmode .editWidget, .res-nightmode #authorInfoToolTip .option, .res-nightmode .updateTime, .res-nightmode #RESSubmitOptions ~ div a, .res-nightmode #shortlink-text, .res-nightmode .guiders_button, .res-nightmode .blueButton, .res-nightmode .gold-accent a, .res-nightmode .snoovatar-page .gold-accent a, .res-nightmode .combined-search-page .search-result-subreddit .search-subscribe-button .add.active, .res-nightmode .combined-search-page .search-result-subreddit .search-subscribe-button .remove.active, .res-nightmode .fancy-toggle-button a, .res-nightmode .fancy-toggle-button .multi-count {   color: white; } .res-nightmode .markhelp table tr:first-child {   background-color: #4d4d4d !important; } .res-nightmode .usertext .markhelp .spaces, .res-nightmode .liveupdate-listing li.separator time, .res-nightmode .diff_header, .res-nightmode .diff_next, .res-nightmode .hover-bubble.multi-selector label:hover {   background-color: #4d4d4d; } .res-nightmode .flair, .res-nightmode .linkflairlabel {   color: #c8c8c8;   background-color: #404040;   border-color: #4d4d4d; } .res-nightmode .flairrichtext[style*='color'] {   color: #c8c8c8 !important;   background-color: #404040 !important;   border-color: #4d4d4d; } .res-nightmode #NERContent {   background-color: #a0a0a0; } .res-nightmode .RESNotification {   background-color: #d2d2d2; } .res-nightmode .RESNotificationContent {   border-color: #b4b4b4; } .res-nightmode #modalOverlay.fadeIn {   background-color: rgba(0, 0, 0, 0.7); } .res-nightmode #RESConsoleTopBar, .res-nightmode .RESDonateButton {   color: #e6e6e6;   border-color: #4d4d4d;   background-color: #3c3c3c; } .res-nightmode .res-logo {   filter: invert(79%) grayscale(100%); } .res-nightmode .optionContainer {   border-color: transparent;   background-color: #282828; } .res-nightmode .optionContainer:not(.table):not(.specialOptionType) .optionSetting, .res-nightmode #SearchRES-results-container li, .res-nightmode #RESConfigPanelModulesList > ul, .res-nightmode #RESConfigPanelModulesList li h3, .res-nightmode #RESConfigPanelModulesList li.active h3 {   border-color: #3c3c3c; } .res-nightmode #RESConsoleContainer input[type='text'], .res-nightmode #RESConsoleContainer input[type='password'], .res-nightmode #RESConsoleContainer .c-form-control, .res-nightmode ul.token-input-list-facebook, .res-nightmode #RESConsoleContainer textarea {   padding: 2px 3px;   border: 1px solid #3c3c3c;   background-color: #222;   color: #ddd; } .res-nightmode #RESConfigPanelModulesList {   color: #a0a0a0; } .res-nightmode #RESConfigPanelModulesList li.active h3 {   background-color: #141414; } .res-nightmode #RESConsoleContainer, .res-nightmode .moduleButton.enabled, .res-nightmode .optionsTable th, .res-nightmode .tagline .score {   color: #b4b4b4; } .res-nightmode #moduleOptionsScrim {   background-color: rgba(34, 34, 34, 0.7); } .res-nightmode .optionsTable th {   background-color: #3c3c3c; } .res-nightmode .optionsTable tr:nth-child(2n) {   background-color: #1d1d1d; } .res-nightmode #moduleOptionsSaveStatus {   background-color: #323232;   color: #969696; } .res-nightmode .toggleButton .toggleOff, .res-nightmode .toggleButton .toggleOn, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOff, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOn {   color: rgba(255, 255, 255, 0.8);   border-color: #3c3c3c; } .res-nightmode .toggleButton:not(.enabled) .toggleOn, .res-nightmode .toggleButton.enabled .toggleOff, .res-nightmode .toggleButton.reverseToggleButton.enabled .toggleOn, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOff {   color: #3c3c3c;   border-color: #3c3c3c;   background: #282828; } .res-nightmode .toggleButton.enabled .toggleOn, .res-nightmode .toggleButton.reverseToggleButton:not(.enabled) .toggleOn {   background: linear-gradient(to right, #25456b, #282828); } .res-nightmode .toggleButton:not(.enabled) .toggleOff, .res-nightmode .toggleButton.reverseToggleButton.enabled .toggleOff {   background: linear-gradient(to left, #882626, #282828); } .res-nightmode .link .rank {   color: #505050; } .res-nightmode .midcol .score, .res-nightmode .moduleButton:not(.enabled) {   color: #646464; } .res-nightmode .tagline, .res-nightmode .entry .buttons li a, .res-nightmode .trending-subreddits strong {   color: #828282; } .res-nightmode .res-hasNewComments .newComments {   color: #d25a32; } .res-nightmode .nsfw-stamp {   color: #bf4040; } .res-nightmode .spoiler-stamp {   color: #ff8200; } .res-nightmode .diff_sub {   background-color: rgba(240, 128, 128, 0.5); } .res-nightmode .diff_add {   background-color: rgba(144, 238, 144, 0.4); } .res-nightmode .diff_chg {   background-color: rgba(255, 255, 0, 0.4); } .res-nightmode .hover-bubble.multi-selector .create-multi input[type='text'] {   color: #c04e51;   background-color: inherit; } .res-nightmode #alert_message, .res-nightmode #report-action-form {   border-color: #404040;   background-color: #262626; } .res-nightmode .sr-interest-bar {   border-color: transparent;   background-color: #29333d; } .res-nightmode .sr-interest-bar .bubble {   background-color: black; } .res-nightmode .sr-interest-bar .bubble::after {   border-right-color: black; } .res-nightmode .subreddit-rule-item:hover {   background-color: #2b2b2b; } .res-nightmode #keyHelp {   border-color: #999;   background-color: #aaa;   color: #333; } .res-nightmode #keyHelp td {   border-color: #999; } .res-nightmode .res-filterline {   background-color: rgba(38, 38, 38, 0.9); } .res-nightmode .res-filterline-filter {   border-bottom-color: #383838; } .res-nightmode .res-filterline-filter-hiding, .res-nightmode .res-filterline-filter-hiding:hover {   border-bottom-color: #e4e4e4;   color: #e4e4e4; } .res-nightmode .res-filterline-dropdown {   background-color: #313131;   box-shadow: #3c3c3c 2px 2px 2px; } .res-nightmode .res-filterline-dropdown-action {   border-bottom-color: #404040; } .res-nightmode #REScommentNavBox #commentNavUp, .res-nightmode #REScommentNavBox #commentNavDown {   color: #434343; } .res-nightmode #REScommentNavBox #commentNavPostCount {   color: #9f9f9f; } .res-nightmode .res-commentNavToggle-choices {   background-color: rgba(0, 0, 0, 0.9);   box-shadow: #313131 1px 2px 4px; } .res-nightmode .subreddit .usertext .md {   background-color: #333;   border-color: #777; } .res-nightmode .user-subreddit .path {   color: #8cb3d9; } .res-nightmode .modal .modal-header-title {   color: #aaa; } .res-nightmode .modal .modal-header, .res-nightmode .modal .field-otp, .res-nightmode .modal .modal-content {   background-color: #333;   border-color: #777;   color: #aaa; } .res-nightmode .modal .c-close {   background-color: inherit;   filter: invert(100%); } .res-nightmode .report-modal .report-form-bottom-panel .report-form-content-policy a, .res-nightmode .report-modal .report-form-action-desc {   color: #8cb3d9; } .res-nightmode .report-modal .report-form-bottom-panel .report-form-content-policy p, .res-nightmode .report-modal .report-reason-item .report-reason-display, .res-nightmode .report-modal .report-form-last-step-text, .res-nightmode .report-modal .report-form-last-step-text-custom-rules, .res-nightmode .report-modal .report-form-big-content-policy {   color: #aaa; } .res-nightmode .report-modal .c-close {   background-color: inherit; } .res-nightmode .report-modal .report-form-block-user img, .res-nightmode .report-modal .report-form-blocked-user img {   filter: invert(100%); } .res-nightmode .crossposting-modal .crosspost-header-title, .res-nightmode .crossposting-modal .crosspost-label, .res-nightmode .crossposting-modal .crosspost-sublabel {   color: #aaa; } .res-nightmode .crossposting-modal .crosspost-description {   background-color: #333;   border-color: #777; } .res-nightmode .crossposting-modal .modal-body, .res-nightmode .crossposting-modal .modal-content, .res-nightmode .crossposting-modal .crosspost-field, .res-nightmode .crossposting-modal .crosspost-preview, .res-nightmode .crossposting-modal .crosspost-thing-preview {   background-color: #262626;   color: #aaa; } .res-nightmode .tfa-login-modal .tfa-login-caption {   color: #aaa; } .res-nightmode .tfa-login-modal .tfa-switch-type-of-code {   color: #8cb3d9; } .res-nightmode .tfa-login-modal .tfa-login-bottom-panel .tfa-login-having-trouble a {   color: #8cb3d9; } .res-nightmode .enable-tfa-modal .enable-tfa-caption, .res-nightmode .enable-tfa-modal .pref-otp-qr li {   color: #aaa; } .res-nightmode .enable-tfa-modal .otp-secret-info canvas {   border: solid 5mm white; } .res-nightmode .enable-tfa-modal .switch-barcode-and-code {   color: #8cb3d9; } .res-nightmode .enable-tfa-modal .enable-tfa-bottom-panel .enable-tfa-learn-more a, .res-nightmode .enable-tfa-modal .enable-tfa-bottom-panel .switch-barcode-and-code a {   color: #8cb3d9; } .res-nightmode .disable-tfa-modal .disable-tfa-caption {   color: #aaa; } .res-nightmode .disable-tfa-modal .disable-tfa-bottom-panel .disable-tfa-learn-more a {   color: #8cb3d9; } .res-nightmode .backup-codes-modal .backup-codes-caption {   color: #aaa; } .res-nightmode .pinnable-content.pinned {   background-color: #262626 !important; } .res-nightmode .pinnable-content.pinned .c-close {   background-color: dimgrey; } .res-nightmode .author-tooltip__head {   background-color: #262626;   border-color: #777; } .res-nightmode .author-tooltip__credentials-list strong, .res-nightmode .author-tooltip__head h3, .res-nightmode .author-tooltip__description {   color: #aaa; } .res-nightmode .author-tooltip__link-list a, .res-nightmode .author-tooltip__head a {   color: #8cb3d9; } .res-nightmode .author-tooltip__link-list a:hover, .res-nightmode .author-tooltip__head a:hover {   color: #8cb3d9; } .res-nightmode .desktop-onboarding__description, .res-nightmode .desktop-onboarding-sign-up__form-note, .res-nightmode .desktop-onboarding-step_sign-up footer, .res-nightmode .subreddit-picker__subreddit-name strong {   color: #aaa; } .res-nightmode .desktop-onboarding-step_sign-up footer a {   color: #8cb3d9; } .res-nightmode .desktop-onboarding__col_sign-up_image {   opacity: 0.7; } .res-nightmode .subreddit-picker, .res-nightmode .c-username-picker-shown .desktop-onboarding__col_username_picker {   background-color: #262626;   border-color: #777; } .res-nightmode .subreddit-picker__category_selected {   background-color: #333; } .res-nightmode .api-help .overview h2, .res-nightmode .api-help .contents .introduction strong {   color: #aaa; } .res-nightmode .api-help .contents .overview code, .res-nightmode .api-help .parameters {   background-color: #333; } .res-d2x-nightmode #container > .App .ProfileTemplate.m-updated, .res-d2x-nightmode #container > .App .ProfileBarDropdown__list, .res-d2x-nightmode #container > .App .ProfileSidebar__counterInfo, .res-d2x-nightmode #container > .App .ProfileBetaConfirmationPage {   background-color: #262626;   border-color: #777;   color: #aaa; } .res-d2x-nightmode #container > .App .SubredditListExpander__more, .res-d2x-nightmode #container > .App .SubredditListItem__subredditLink, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__profileName, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__link, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__more, .res-d2x-nightmode #container > .App .BlueBar__logout, .res-d2x-nightmode #container > .App .BlueBar__username, .res-d2x-nightmode #container > .App .BlueBar__prefs, .res-d2x-nightmode #container > .App .TabMenu__tab.m-active, .res-d2x-nightmode #container > .App .TabMenu__tab, .res-d2x-nightmode #container > .App .ProfileBarDropdown__title.m-opened, .res-d2x-nightmode #container > .App .ProfileBarDropdown__title, .res-d2x-nightmode #container > .App .ProfileBarDropdown__listItem, .res-d2x-nightmode #container > .App .ProfileSidebar__reportUserLink, .res-d2x-nightmode #container > .App .ProfileSidebar__nameTitleLink, .res-d2x-nightmode #container > .App .Footer__link, .res-d2x-nightmode #container > .App .Footer__userAgreementLink, .res-d2x-nightmode #container > .App .Footer__privacyLink, .res-d2x-nightmode #container > .App .Post__origin .Post__username, .res-d2x-nightmode #container > .App .Post__authorComment .Post__username, .res-d2x-nightmode #container > .App .Post__subredditLink, .res-d2x-nightmode #container > .App .CommentTitle__postAuthor, .res-d2x-nightmode #container > .App .CommentTitle__subredditName, .res-d2x-nightmode #container > .App .Comment.m-op .Comment__author {   color: #8cb3d9; } .res-d2x-nightmode #container > .App .Post__titleLink, .res-d2x-nightmode #container > .App .CommentTitle__postTitle {   color: #dedede; } .res-d2x-nightmode #container > .App .Post__flatListItem, .res-d2x-nightmode #container > .App .Post__titleLink:visited, .res-d2x-nightmode #container > .App .CommentTitle__postTitle {   color: #a6a6a6; } .res-d2x-nightmode #container > .App .ProfileBarDropdown__list:hover, .res-d2x-nightmode #container > .App .ProfileBarDropdown__listItem:hover {   background-color: dimgrey; } .res-d2x-nightmode #container > .App .UserTopSubredditsSidebar__header, .res-d2x-nightmode #container > .App .SubredditListItem__subscribers, .res-d2x-nightmode #container > .App .UserModeratedSubredditsSidebar__header, .res-d2x-nightmode #container > .App .UserSpecialsListSidebar__header, .res-d2x-nightmode #container > .App .UserSpecialsListSidebar__title, .res-d2x-nightmode #container > .App .UserSpecialsListSidebar__date, .res-d2x-nightmode #container > .App .TrophyCaseSidebar__header, .res-d2x-nightmode #container > .App .TrophyCaseSidebar__trophyTitle, .res-d2x-nightmode #container > .App .TrophyCaseSidebar__trophyDescription, .res-d2x-nightmode #container > .App .TrendingProfilesSidebar__header, .res-d2x-nightmode #container > .App .BlueBar__karma, .res-d2x-nightmode #container > .App .ProfileSidebar__displayName, .res-d2x-nightmode #container > .App .ProfileSidebar__description, .res-d2x-nightmode #container > .App .ProfileSidebar__counters, .res-d2x-nightmode #container > .App .ProfileSidebar__followDescription, .res-d2x-nightmode #container > .App .Post__score, .res-d2x-nightmode #container > .App .StyledHtml, .res-d2x-nightmode #container > .App .Post__authorComment .StyledHtml, .res-d2x-nightmode #container > .App .Post__prominentComment .StyledHtml, .res-d2x-nightmode #container > .App .Post__commentContainer, .res-d2x-nightmode #container > .App .ProfileVoiceAd__title, .res-d2x-nightmode #container > .App .ProfileVoiceAd__description, .res-d2x-nightmode #container > .App .ProfileVoiceAd__button {   color: #aaa; } .res-d2x-nightmode #container > .App .BlueBar {   background: dimgrey; } .res-d2x-nightmode #container > .App .BlueBar__account, .res-d2x-nightmode #container > .App .ProfileSidebar__titleContainer, .res-d2x-nightmode #container > .App .Post, .res-d2x-nightmode #container > .App .CommentListing__comment {   background-color: #333;   border-color: #777;   color: #aaa; } .res-d2x-nightmode #container > .App .SubscriptionBar {   background-color: #ccc; } .res-d2x-nightmode #container > .App .SubscriptionBar__subredditListTarget {   color: #000 !important; } .res-d2x-nightmode #container > .App .SubredditListItem__subscribe, .res-d2x-nightmode #container > .App .SubredditListItem__unsubscribe, .res-d2x-nightmode #container > .App .Post__crosspostExpando .Media.m-embed, .res-d2x-nightmode #container > .App .Post__crosspostExpando .Media.m-image, .res-d2x-nightmode #container > .App .Post__crosspostExpando .Media.m-video, .res-d2x-nightmode #container > .App .Media.m-profile.m-embed, .res-d2x-nightmode #container > .App .Media.m-profile.m-image, .res-d2x-nightmode #container > .App .Media.m-profile.m-video, .res-d2x-nightmode #container > .App .StyledHtml pre {   background-color: #262626; } .res-d2x-nightmode #container > .App .SubredditListDropdown, .res-d2x-nightmode #container > .App .SubredditListDropdown__listItem, .res-d2x-nightmode #container > .App .SubredditListDropdown__listMore {   background-color: #333;   color: #aaa;   border-color: #777; } .res-d2x-nightmode #container > .App .SubredditListDropdown__listItem:hover, .res-d2x-nightmode #container > .App .Post__comment:hover {   background-color: #3e3e3e; } .res-d2x-nightmode #container > .App .ProfileVoiceAd {   background-color: #202020; } `
    );
  }
  Options.addCheckbox({
    label: 'RES Night Mode',
    default: false,
    section: 'Advanced',
    help: 'RES Night Mode.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-RESDarkMode', this.prop('checked'));
      if (ELEMENTS.BODY_ELEMENT.attr('data-RESDarkMode') == 'true') {
        document.body.classList.add('res-nightmode');
        if (resTest == 0) {
          resAdda();
        }
      }
      if (ELEMENTS.BODY_ELEMENT.attr('data-RESDarkMode') == 'false') {
        document.body.classList.remove('res-nightmode');
      }
    },
  });
  if (ELEMENTS.BODY_ELEMENT.attr('data-RESDarkMode') == 'true') {
    if (resTest == 0) {
      resAdda();
    }
    document.body.classList.add('res-nightmode');
  }
})(RESDarkMode || (RESDarkMode = {}));

/////////////////////////
// CollapsiblePosts.ts //
/////////////////////////
var CollapsiblePosts;
var collapseCount = 0;
(function (CollapsiblePosts) {
  // Options
  ELEMENTS.BODY_ELEMENT.attr('data-CollapsiblePosts', true);

  Options.addCheckbox({
    label: 'Collapsible Posts',
    default: true,
    section: 'Advanced 2',
    help: 'yeah.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-CollapsiblePosts', this.prop('checked'));
    },
  });
  UPDATE_EVENTS.addListener('new', (data) => {
    // steal from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible lol
    if (ELEMENTS.BODY_ELEMENT.attr('data-CollapsiblePosts') == 'true') {
      var collapse_html = data.bodyNode.html();
      var regexcollapse = collapse_html.match(
        /<a href="#start"(.*?)<\/a>(.*?)<a href="#end"(.*?)<\/a>/gms
      );
      for (var matchcol in regexcollapse) {
        collapseCount++;
        var newcol = regexcollapse[matchcol].trim();
        newcol = newcol.replace(
          /<a href="#start"(.*?)<\/a>/gms,
          '<button type="button" id="LCE_Collapse_' +
            collapseCount +
            '" class="LCE_Collapse">[+] Toggle</button><div class="LCE_Content" id="LCE_Content_' +
            collapseCount +
            '">'
        );
        newcol = newcol.replace(/<a href="#end"(.*?)<\/a>/gms, '</div>');
        collapse_html = collapse_html.replace(regexcollapse[matchcol], newcol);
      }
      data.bodyNode.html(collapse_html);
    }
  });
  Styles.add(
    `.LCE_Collapse { background-color: #777; color: white; cursor: pointer; padding: 3px; border: none; text-align: left; outline: none; } .LCE_Collapse_Active, .LCE_Collapse:hover { background-color: #555; } .LCE_Content { display: none; overflow: hidden;}`
  );

  $(document).on('click', '.LCE_Collapse', function () {
    var collapse_id = $(this).attr('id').replace('LCE_Collapse_', '');
    this.classList.toggle('LCE_Collapse_Active');
    var content = $('#LCE_Content_' + collapse_id);
    if (content.css('display') === 'block') {
      content.css('display', 'none');
      $(this).text('[+] Toggle');
    } else {
      content.css('display', 'block');
      $(this).text('[-] Toggle');
    }
  });
})(CollapsiblePosts || (CollapsiblePosts = {}));

if (THREAD == THREADS.MAIN) {
  // Main thread special feature

  //////////////////////
  // LC_Chats_View.ts //
  //////////////////////
  var LC_Chats_View;
  (function (LC_Chats_View) {
    // Options
    ELEMENTS.BODY_ELEMENT.attr('data-LC_Chats_View', false);
    var lccTest = 0;
    function lccAdda(h, thread) {
      if (h == 'yeah bro' && lccTest < 1) {
        if (lccTest == 0) {
          var resversion = $('#RESConsoleVersion');
          Styles.add(
            `#lc-body[data-LC_Chats_View='true'] div.content { padding-left: 19%; } #lc_chats_iframe #idlecontainer {display:none!important;}`
          );
          $(
            `<iframe class="lciframe" id="lc_chats_iframe" src="/live/14ny3ur3axhd4" style="border:none; position: absolute; left: 1%; width: 18%; top: 12%; height: 85%; "></iframe>`
          ).insertAfter('.main-content');
          $(
            `<select style="position: absolute;left: 9%;width: 10%;top: 97%;border: none;max-width: 10%;" id="iframe_loader"></select>`
          ).insertAfter('#lc_chats_iframe');
          $(`#iframe_loader`).append(
            new Option('LC_CHATS', THREADS['LC_CHATS'])
          );
          for (var threadname in THREADS) {
            if (threadname == 'MAIN') {
              continue;
            } else if (threadname == 'LC_CHATS') {
              continue;
            } else {
              $(`#iframe_loader`).append(
                new Option(threadname, THREADS[threadname])
              );
            }
          }
          $(document).on('change', '#iframe_loader', function (e) {
            lccTest = -1;
            lccAdda('yeah bro', document.getElementById('iframe_loader').value);
          });
          $(
            `<div class="prettyform lciframe" style="display:none;position: absolute;left: 1%;width: 18%;top: 91%;border: none;max-width: 18%;" id="sidebar-update-form"><div class="usertext"><input type="hidden" name="thing_id" value=""><div style="" class=""><div class="md"><textarea rows="1" cols="1" name="body" class="" data-textboxposition="Default" style="height:22px!important; width: 90%;"></textarea></div></div></div><div class="save-button"><button id="sidebar_submit" class="btn" type="button" onclick="return post_pseudo_form('#sidebar-update-form', 'live/14ny3ur3axhd4/update')">make update</button> <span class="status error" style="display: none;"></span></div></div>`
          ).insertAfter('#lc_chats_iframe');
          $('#sidebar-update-form textarea').on('keydown', function (e) {
            if (ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == 'Off') {
              return;
            }
            if (
              ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == 'Ctrl+Enter'
            ) {
              if (
                resversion.length > 0 &&
                +resversion.text().replace(/\D/g, '') >= 478
              ) {
                return;
              }
              if (e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                $('#sidebar-update-form .save-button button').trigger('click');
              }
            }
            if (ELEMENTS.BODY_ELEMENT.attr('data-submitShortcut') == 'Enter') {
              if (e.keyCode == 13) {
                e.preventDefault();
                $('#sidebar-update-form .save-button button').trigger('click');
              }
            }
          });
        } else {
          document.getElementById('lc_chats_iframe').src = `/live/` + thread;
          document
            .getElementById('sidebar_submit')
            .setAttribute(
              'onClick',
              `return post_pseudo_form('#sidebar-update-form', 'live/` +
                thread +
                `/update');`
            );
          $('#sidebar-update-form').css('display', 'none');
        }
        $('#lc_chats_iframe').on('load', function () {
          var embed = $('#lc_chats_iframe').contents();
          embed.find('#idlecontainercontainer').css('display', 'none');
          embed.find('#header').css('display', 'none');
          embed.find('#liveupdate-statusbar').css('display', 'none');
          embed.find('#new-update-form').css('display', 'none');
          if (embed.find('#new-update-form').length > 0) {
            $('#sidebar-update-form').css('display', 'initial');
          } else {
            $('#sidebar-update-form').css('display', 'none');
          }
          embed.find('.sidebar').css('display', 'none');
        });
        lccTest = 1;
      } else if (h == 'yeah bro' && lccTest == 2) {
        lccTest = 1;
        $('#lc_chats_iframe').css('display', 'initial');
        $('#iframe_loader').css('display', 'initial');
        $('#sidebar-update-form').css('display', 'initial');
      } else if (
        h ==
          'nuh uh bro, also does this piss you off that im using strings like this? GOOD.' &&
        lccTest == 1
      ) {
        lccTest = 2;
        $('#lc_chats_iframe').css('display', 'none');
        $('#iframe_loader').css('display', 'none');
        $('#sidebar-update-form').css('display', 'none');
      }
    }
    Options.addCheckbox({
      label: 'LC Chats View',
      default: false,
      section: 'Advanced',
      help: 'Puts a small lil lc chats on da left side {:}',
      onchange: function () {
        ELEMENTS.BODY_ELEMENT.attr('data-LC_Chats_View', this.prop('checked'));
        if (ELEMENTS.BODY_ELEMENT.attr('data-LC_Chats_View') == 'true') {
          lccAdda('yeah bro');
        }
        if (ELEMENTS.BODY_ELEMENT.attr('data-LC_Chats_View') == 'false') {
          lccAdda(
            'nuh uh bro, also does this piss you off that im using strings like this? GOOD.'
          );
        }
      },
    });
  })(LC_Chats_View || (LC_Chats_View = {}));
} // End main thread special feature.

//////////////////////
// DisableEmbeds.ts //
//////////////////////
var DisableEmbeds;
(function (DisableEmbeds) {
  // Options
  ELEMENTS.BODY_ELEMENT.attr('data-DisableEmbeds', true);
  var embedTest = 0;
  function embedKiller() {
    embedTest = 1;
    r.liveupdate.embeds.EmbedViewer.prototype.update = function () {
      return;
    };
  }
  Options.addCheckbox({
    label: 'Disable Embeds',
    default: true,
    section: 'Advanced',
    help: 'Stops LC from automatically embedding images, videos, etc.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-DisableEmbeds', this.prop('checked'));
      if (ELEMENTS.BODY_ELEMENT.attr('data-DisableEmbeds') == 'true') {
        if (embedTest == 0) {
          embedKiller();
        }
      }
    },
  });
  if (ELEMENTS.BODY_ELEMENT.attr('data-DisableEmbeds') == 'true') {
    if (embedTest == 0) {
      embedKiller();
    }
  }
})(DisableEmbeds || (DisableEmbeds = {}));

////////////////////
// FixFavicon.ts //
////////////////////
var FixFavicon;
(function (FixFavicon) {
  // Options
  if (Math.ceil(window.devicePixelRatio) == window.devicePixelRatio) {
    return;
  }
  ELEMENTS.BODY_ELEMENT.attr('data-FixFavicon', true);
  var faviconTest = 0;
  function faviconFixer() {
    faviconTest = 1; // non-compressed is here: https://pastebin.com/KLnWZmX6 lol
    function bruhbruh() {
      function i() {
        var e;
        return (
          (r && a) ||
            ((e = (function () {
              for (
                var e = document.getElementsByTagName('link'),
                  t = 0,
                  n = e.length;
                t < n;
                t++
              )
                if ((e[t].getAttribute('rel') || '').match(/\bicon\b/))
                  return e[t];
              return !1;
            })()),
            (r = e ? e.getAttribute('href') : '/favicon.ico'),
            (a = a || r)),
          a
        );
      }
      function o() {
        return (
          u ||
            (((u = document.createElement('canvas')).width = g),
            (u.height = g)),
          u
        );
      }
      function e(e) {
        !(function () {
          for (
            var e = document.getElementsByTagName('link'),
              t = document.getElementsByTagName('head')[0],
              n = 0,
              a = e.length;
            n < a;
            n++
          )
            void 0 !== e[n] &&
              (e[n].getAttribute('rel') || '').match(/\bicon\b/) &&
              t.removeChild(e[n]);
        })();
        var t = document.createElement('link');
        ((t.type = 'image/x-icon'),
          (t.rel = 'icon'),
          (t.href = e),
          document.getElementsByTagName('head')[0].appendChild(t));
      }
      var t,
        n = {},
        a = null,
        r = null,
        c = null,
        u = null,
        l = {},
        f = Math.ceil(window.devicePixelRatio) || 1,
        g = 16 * f,
        d = {
          width: 7,
          height: 9,
          font: 10 * f + 'px arial',
          colour: '#ffffff',
          background: '#F03D25',
          fallback: !0,
          crossOrigin: !0,
          abbreviate: !0,
        },
        s =
          ((t = navigator.userAgent.toLowerCase()),
          function (e) {
            return -1 !== t.indexOf(e);
          }),
        m = s('msie'),
        h = (s('chrome'), s('chrome') || s('safari')),
        b = s('safari') && !s('chrome'),
        v = s('mozilla') && !s('chrome') && !s('safari'),
        p = function (e) {
          var t;
          l.fallback &&
            ('(' === (t = document.title)[0] && (t = t.slice(t.indexOf(' '))),
            (document.title = 0 < (e + '').length ? '(' + e + ') ' + t : t));
        },
        A = function (e, t, n) {
          'number' == typeof t && 99 < t && l.abbreviate && (t = T(t));
          var a = (t + '').length - 1,
            i = l.width * f + 6 * f * a,
            o = l.height * f,
            r = g - o,
            c = g - i - f,
            a = 16 * f,
            o = 16 * f,
            i = 2 * f;
          ((e.font = (h ? 'bold ' : '') + l.font),
            (e.fillStyle = l.background),
            (e.strokeStyle = l.background),
            (e.lineWidth = f),
            e.beginPath(),
            e.moveTo(c + i, r),
            e.quadraticCurveTo(c, r, c, r + i),
            e.lineTo(c, a - i),
            e.quadraticCurveTo(c, a, c + i, a),
            e.lineTo(o - i, a),
            e.quadraticCurveTo(o, a, o, a - i),
            e.lineTo(o, r + i),
            e.quadraticCurveTo(o, r, o - i, r),
            e.closePath(),
            e.fill(),
            e.beginPath(),
            (e.strokeStyle = 'rgba(0,0,0,0.3)'),
            e.moveTo(c + i / 2, a),
            e.lineTo(o - i / 2, a),
            e.stroke(),
            (e.fillStyle = l.colour),
            (e.textAlign = 'right'),
            (e.textBaseline = 'top'),
            e.fillText(t, 2 === f ? 29 : 15, v ? 7 * f : 6 * f));
        },
        w = function () {
          o().getContext && e(o().toDataURL());
        },
        T = function (e) {
          for (
            var t = [
                ['G', 1e9],
                ['M', 1e6],
                ['k', 1e3],
              ],
              n = 0;
            n < t.length;
            ++n
          )
            if (e >= t[n][1]) {
              e = k(e / t[n][1]) + t[n][0];
              break;
            }
          return e;
        },
        k = function (e, t) {
          return new Number(e).toFixed(t);
        };
      ((n.setOptions = function (e) {
        for (var t in ((l = {}), d)) l[t] = (e.hasOwnProperty(t) ? e : d)[t];
        return this;
      }),
        (n.setImage = function (e) {
          return ((a = e), w(), this);
        }),
        (n.setBubble = function (e, t) {
          return (
            (function (e, t) {
              if (!o().getContext || m || b || 'force' === l.fallback)
                return p(e);
              var n = o().getContext('2d'),
                t = t || '#000000',
                a = i();
              (((c = document.createElement('img')).onload = function () {
                (n.clearRect(0, 0, g, g),
                  n.drawImage(c, 0, 0, c.width, c.height, 0, 0, g, g),
                  0 < (e + '').length && A(n, e, t),
                  w());
              }),
                !a.match(/^data/) &&
                  l.crossOrigin &&
                  (c.crossOrigin = 'anonymous'),
                (c.src = a));
            })((e = e || ''), t),
            this
          );
        }),
        (n.reset = function () {
          e(r);
        }),
        n.setOptions(d),
        (window.Tinycon = n),
        'function' == typeof define && define.amd && define(n));
    }
    (bruhbruh(),
      (favicon_data =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/1BMVEUpLzY+PDpGSk5HR0dKTlNSW2VTXGVVXmdWWl5bYWZdZGtfanVfbHpgXVtianNjbXhkZWdkam1lcX1nc4BpdYJqa2xscHZucHJueYRvfoxwfIhxcG93e4B3h5h4iJh5ipt7gIB8ipl+fn6BgYGImKOJh4aKjY2Mna6NobSOn7CQo7iar8Wfnp2juM6lo6Gmuc6mu8moqaqsw9etwcmurq6vrauxyN2xyN+0s7K+u7m/1u7C2vPF3fbI4PrJ4fvJ4/7Ly8vPzMnP6P7S0tLT0c/W8P/Z19Xd9/7d+P7e3Nrw8PDz9vT69/T+EA/+MjD+pqT+srD+w8H+zsz+/v7///9fla50AAAAuElEQVR42l2P2RaBUBhGT0WZ54jIPM8h0zE7SBL97/8uYoXFvtwXe30fIn8ggn94i8XMGSkFQvmPwFXvwOe/OGyx3OJYF+OUq26LcS2LMs05Xj0bPY+QDFc6k1bOnRQ8PYLiKlXW4IlWptQ4QWlxCIZ+h7tuwFBME9RgAG5XE8zrDYBpWNEEfElY0RO7Aejvzrs+wIa1xFGmp7AuFoprmNLya4fC8aP9YT/iOeX9pS1Fg1GpbZ/74wFo2jf64C4agwAAAABJRU5ErkJggg=='),
      (r.liveupdate.app.websocket._socket.onmessage = function (e) {
        e = JSON.parse(e.data);
        (r.debug('websocket: received "' + e.type + '" message'),
          r.liveupdate.app.websocket.trigger(
            'message message:' + e.type,
            e.payload
          ),
          Tinycon.setBubble(r.liveupdate.app.faviconUpdater.unreadItemCount),
          Tinycon.setImage(favicon_data));
      }));
  }
  Options.addCheckbox({
    label: 'Fix Favicon',
    default: true,
    section: 'Advanced',
    help: 'Fixes the favicon.',
    onchange: function () {
      ELEMENTS.BODY_ELEMENT.attr('data-FixFavicon', this.prop('checked'));
      if (ELEMENTS.BODY_ELEMENT.attr('data-FixFavicon') == 'true') {
        if (faviconTest == 0) {
          faviconFixer();
        }
      }
    },
  });
  if (ELEMENTS.BODY_ELEMENT.attr('data-FixFavicon') == 'true') {
    if (faviconTest == 0) {
      faviconFixer();
    }
  }
})(FixFavicon || (FixFavicon = {}));

///////////////////////
// FixEditButtons.ts //
///////////////////////
var FixEditButtons;
(function (FixEditButtons) {
  // Options
  if (
    r.liveupdate.app.permissions._permissions.all == true ||
    r.liveupdate.app.permissions.allow('edit') ==
      r.liveupdate.app.permissions._permissions.edit
  ) {
    return;
  }
  r.liveupdate.app.permissions.allow = function (e) {
    return this.isSuperUser() ? !0 : this._permissions[e] == true;
  }; //intended feature
})(FixEditButtons || (FixEditButtons = {})); // doesn't fix pre-loaded messages, sadly :/

// Test thread special feature (Always at the bottom, because it will be messy lol)
if (THREAD == THREADS.TEST || window.location.href.indexOf('testing') > -1) {
  // Experiment picker

  $('#liveupdate-description').append(
    `<p style='background:#e2ffdb;color:black!important;font-size:16px;' id=experiment>Tests: <a style='color:#0258ab!important' href=https://old.reddit.com/live/${THREADS.TEST}?fakerunner>Fake Runner</a> | <a style='color:#0258ab!important' href=https://old.reddit.com/live/${THREADS.TEST}?whiteboard>Whiteboard</a> | <a style='color:#0258ab!important' href=https://old.reddit.com/live/${THREADS.TEST}?latency>Expanded Latency (see console)</a></p>`
  );

  if (window.location.href.indexOf('whiteboard') > -1) {
    // Whiteboard start
    $('#liveupdate-description').append(
      `<iframe src="https://socketio-whiteboard-zmx4.herokuapp.com/" width="100%" height="480" scrolling="no" class="iframe-class" frameborder="0"></iframe>`
    );
  } // Whiteboard end
  if (window.location.href.indexOf('fakerunner') > -1) {
    // Fake runner start
    $('#experiment').css('display', 'none');
    $('#liveupdate-description').append(
      "<p style='background:#e2ffdb;font-size:16px;' id=fakerunner>Hi am fake runner. This feature SUCKS but maybe it could be useful to someone some day. Reply times may be slightly inaccurate but I really tried lol. Increment:<input id='fakeruntime'></input> <button id='this_sucks'>Press to run.</button><button id='fuck_it'>Click to stop.</button><button id='sink'>Sync time</button>Sync in ms:<input id='sinker'></input><button id='hide_a_mf'>Hide</button></p>"
    );

    var fake_count = 10000000;
    var fake_count_2 = 0;
    var fake_count_author = '';
    var strikechecky = '';
    var sinky = 0;
    function poster() {
      try {
        fake_count_2 = $('#lastcountcount').text();
        fake_count_author = $('#lastcountuser').text();
        fake_count_2 = fake_count_2.replace(/[A-Za-z]/g, '');
        fake_count_2 = fake_count_2.replace(/,/g, '');
        fake_count_2 = fake_count_2.replace(/ /g, '');
        fake_count_2 = fake_count_2.replace(/\./g, '');
        fake_count_2 = parseFloat(fake_count_2);
        if (fake_count_author != 'Riverbot') {
          fake_count = fake_count_2 + 1;
          strikechecky = '';
        } else {
          fake_count = fake_count_2 + 2;
          strikechecky = ' stricken';
        }
      } catch (err) {
        fake_count = 10000000;
      }
      fake_count = fake_count.toLocaleString();
      var time_fake = new Date();
      var time_lake = time_fake.toISOString();
      time_fake = time_fake.getTime();
      var d = '2040-01-03T00:00:00.500Z';
      d = new Date(d).valueOf();
      d += sinky;
      time_fake = time_fake + d;
      time_fake = time_fake / 1000;
      time_fake = time_fake + 10010131200;
      time_fake = time_fake * 10 ** 7;
      time_fake = time_fake.toString(16);
      var t1 = time_fake.substring(0, 3);
      var t2 = time_fake.substring(3, 7);
      var t3 = time_fake.substring(7, 15);
      $('.liveupdate-listing').prepend(
        `<li class="liveupdate deadupdate` +
          strikechecky +
          `"><a href="/live/ta535s1hq2je/updates/` +
          t3 +
          `-` +
          t2 +
          `-1` +
          t1 +
          `-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="` +
          time_lake +
          `" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>` +
          fake_count +
          `</p></div><a href="/user/Riverbot" class="author" style="color: black;"> /u/Riverbot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`
      );
    }
    $('#this_sucks').click(function () {
      var increment_timey = $('#fakeruntime').val();
      sinky = parseFloat($('#sinker').val()) * -1;
      if (isNaN(sinky)) {
        sinky = 0;
      }
      if (isNaN(increment_timey)) {
        increment_timey = 1000;
      }
      var post1 = setInterval(poster, increment_timey);
      $('#fuck_it').click(function () {
        clearInterval(post1);
      });
      $('#hide_a_mf').click(function () {
        clearInterval(post1);
        $('#fakerunner').css('display', 'none');
      });
    });

    var synccheck = 0;
    $('#sink').click(function () {
      synccheck = 1;
    });
    //            $( "#sink" ).click(function() {
    UPDATE_EVENTS.addListener('new', (data) => {
      if (data.authorNode.text() != ' /u/Riverbot' && synccheck == 1) {
        synccheck = 0;
        sinky = parseFloat($('#sinker').val()) * -1;
        if (isNaN(sinky)) {
          sinky = 0;
        }
        var time_fake = new Date();
        var time_lake = time_fake.toISOString();
        time_fake = time_fake.getTime();
        var d = '2040-01-03T00:00:00.500Z';
        d = new Date(d).valueOf();
        d += sinky;
        time_fake = time_fake + d;
        time_fake = time_fake / 1000;
        time_fake = time_fake + 10010131200;
        time_fake = time_fake * 10 ** 7;
        time_fake = time_fake.toString(16);
        var t1 = time_fake.substring(0, 3);
        var t2 = time_fake.substring(3, 7);
        var t3 = time_fake.substring(7, 15);
        $('.liveupdate-listing').prepend(
          `<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/` +
            t3 +
            `-` +
            t2 +
            `-1` +
            t1 +
            `-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="` +
            time_lake +
            `" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Check the timestamp on this post. Put it in the 2nd input box (or if you already put something there, add the current timestamp to it). Then try running? Hopefully this works. lol</p></div><a href="/user/Riverbot" class="author" style="color: black;"> /u/Riverbot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`
        );
      }
    });
    //         });

    $('#hide_a_mf').click(function () {
      $('#fakerunner').css('display', 'none');
    });
  } // Fake runner end

  // Latency testing stuff
  if (window.location.href.indexOf('latency') > -1) {
    // Latency start
    $('#new-update-form .save-button button').click(function () {
      console.log('pressed submit:' + Date.now());
    });
    r.liveupdate.app.websocket._events['message:update'][0].callback =
      function (t) {
        console.log('message:update start:' + Date.now());
        var n = r.liveupdate.listings.LiveUpdate.prototype.parse(t);
        this.listing.add(n, { at: 0 });
        console.log('message:update end:' + Date.now());
      };
    function s(t) {
      return function (t) {
        if (t.jquery) {
          var n = {};
          ((n[0] = jQuery),
            e.map(t.jquery, function (t) {
              var r = t[0],
                i = t[1],
                s = t[2],
                o = t[3];
              if (typeof o == 'string') o = e.unsafe(o);
              else
                for (var u = 0; o.length && u < o.length; u++)
                  o[u] = e.unsafe(o[u]);
              s == 'call'
                ? (n[i] = n[r].apply(n[r]._obj, o))
                : s == 'attr'
                  ? (o == 'redirect' && e(window).off('beforeunload'),
                    (n[i] = n[r][o]),
                    n[i] ? (n[i]._obj = n[r]) : e.debug('unrecognized'))
                  : s == 'refresh'
                    ? e.refresh()
                    : e.debug('unrecognized');
            }));
        }
      };
    }
    var o = '/api/';
    $.request = function (t, u, a, f, l, c, h) {
      console.log('request start:' + Date.now());
      var p = t,
        d = a;
      if (rate_limit(t)) {
        h && h('ratelimit');
        return;
      }
      if (window != window.top && !r.config.external_frame) return;
      var v = !$.with_default(f, !1) || n(p);
      ((u = $.with_default(u, {})),
        (a = $.with_default(a, s(p))),
        (l = $.with_default(l, 'json')));
      var m = $('form.warn-on-unload');
      typeof a != 'function' && (a = s(p));
      var d = function (t) {
        return (
          i(p),
          $(m).length && t.success && $(window).off('beforeunload'),
          a(t)
        );
      };
      ((errorhandler_in = $.with_default(h, function () {})),
        (h = function (e) {
          return (i(p), errorhandler_in(e));
        }),
        (c = $.with_default(c, !1)),
        r.config.post_site && u.r === undefined && (u.r = r.config.post_site),
        r.config.logged && (u.uh = r.config.modhash),
        (u.renderstyle = r.config.renderstyle),
        v &&
          ((t = o + t),
          r.commentsPreview &&
            r.commentsPreview.visible &&
            r.utils &&
            (t = r.utils.replaceUrlParams(t, { comments_preview_enabled: !0 })),
          console.log('request ajax start:' + Date.now()),
          $.ajax({
            type: c ? 'GET' : 'POST',
            url: t,
            data: u,
            success: d,
            error: h,
            dataType: l,
          })));
      console.log('request ajax end:' + Date.now());
    };
    r.liveupdate.app.websocket._socket.onmessage = function (e) {
      console.log('socket onmessage start:' + Date.now());
      var t = JSON.parse(e.data);
      (r.debug('websocket: received "' + t.type + '" message'),
        r.liveupdate.app.websocket.trigger(
          'message message:' + t.type,
          t.payload
        ));
      console.log('socket onmessage finish:' + Date.now());
    };
    UPDATE_EVENTS.addListener('new', () => {
      console.log('LCE finished:' + Date.now());
    });
  } // Latency testing stuff end

  // Random tests
  if (window.location.href.indexOf('reddit_tests') > -1) {
    r.config.status_msg.submitting = 'dumbass...';
    console.log(
      'Your reddit account is ' + r.config.user_age / 1000 + ' seconds old. lol'
    );
    console.log('are u over 18? hmm... ' + r.config.over_18 + '. lol');
  } // Latency testing stuff end
}
// End test thread special feature

UPDATE_EVENTS.handleExisting();
