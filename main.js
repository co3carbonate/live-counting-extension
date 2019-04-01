
/**
/**
 * LIVE COUNTING EXTENSION V1.6.x
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */
// CONSTANTS
// Extension version

var VERSION = 'v1.6.0';

var aprilfools;
var aprilfools2;
var foolsprob;
var foolsprobt;

var specialnumber = 0;
var kname1 = '';
var kname2 = '';
var kname3 = '';
var kname4 = '';
var kname5 = '';
var kname6 = '';

var ignored = []; 
ignored.push(localStorage['ignoredppl']);

// Client's username
var USER = $('#header .user a[href]').html();
var chu = 0;
var count = 0;
var s = "amazing";
var SpecialUsernamesEnabled;
var rotater = -12;
var flakecount = 1;
var chucount = 0;
var count2 = 0;
var danr = 0;
var dailysize = 0;
var dailysizereal = '90px';
var tablenumba = 1;
var maybenumbers = {
    "001":"/u/rschaosid",
    "008":"/u/gordonpt8",
    "018":"/u/Kris18",
    "036":"/u/Iamspeedy36",
    "037":"/u/amazingpikachu_37",
    "047":"/u/kdiuro13",
    "100":"/u/abplows",
    "123":"random123",
    "151":"/u/MewDP",
    "200":"/u/QuestoGuy",
    "212":"/u/MrBahr12",
    "217":"/u/Lonadont",
    "220":"/u/Chalupa_Dad",
    "222":"/u/treje",
    "234":"/u/ElliottB1",
    "301":"/u/piyushsharma301",
    "333":"/u/Majestic_Bear",
    "369":"/u/TOP_20",
    "373":"/u/MaybeNotWrong",
    "404":"random404",
    "471":"/u/albert471",
    "501":"/u/LeinadSpoon",
    "555":"/u/PrinceCrinkle",
    "559":"/u/iwannaplay5050",
    "615":"/u/parker_cube",
    "616":"/u/DemonBurritoCat",
    "666":"/u/rideride",
    "689":"/u/smarvin6689",
    "700":"/u/Noob2137",
    "777":"/u/artbn",
    "845":"/u/noduorg",
    "888":"/u/NobodyL0vesMe",
    "973":"/u/Smartstocks",
    "998":"/u/qwertylool"
};




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
////////////////
// SnuOwnd.ts //
////////////////
// Adapted TypeScript version of the SnuOwnd markdown parser (https://github.com/gamefreak/snuownd) 
var SnuOwnd = {};
(function (exports) {
    function _isspace(c) { return c == ' ' || c == '\n'; }
    function isspace(c) { return /[\x09-\x0d ]/.test(c); }
    function isalnum(c) { return /[A-Za-z0-9]/.test(c); }
    function isalpha(c) { return /[A-Za-z]/.test(c); }
    function isdigit(c) { return /[0-9]/.test(c); }
    function isxdigit(c) { return /[0-9a-fA-F]/.test(c); }
    function ispunct(c) { return /[\x20-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]/.test(c); }
    function urlHexCode(number) {
        var hex_str = '0123456789ABCDEF';
        return '%' + hex_str[(number & 0xf0) >> 4] + hex_str[(number & 0x0f) >> 0];
    }
    function escapeUTF8Char(char) {
        var code = char.charCodeAt(0);
        if (code < 0x80) {
            return urlHexCode(code);
        }
        else if ((code > 0x7f) && (code < 0x0800)) {
            var seq = urlHexCode(code >> 6 & 0xff | 0xc0);
            seq += urlHexCode(code >> 0 & 0x3f | 0x80);
            return seq;
        }
        else {
            var seq = urlHexCode(code >> 12 & 0xff | 0xe0);
            seq += urlHexCode(code >> 6 & 0x3f | 0x80);
            seq += urlHexCode(code >> 0 & 0x3f | 0x80);
            return seq;
        }
    }
    function find_block_tag(str) {
        var wordList = [
            'p', 'dl', 'div', 'math',
            'table', 'ul', 'del', 'form',
            'blockquote', 'figure', 'ol', 'fieldset',
            'h1', 'h6', 'pre', 'script',
            'h5', 'noscript', 'style', 'iframe',
            'h4', 'ins', 'h3', 'h2'
        ];
        if (wordList.indexOf(str.toLowerCase()) != -1) {
            return str.toLowerCase();
        }
        return '';
    }
    function sdhtml_is_tag(tag_data, tagname) {
        var i;
        var closed = 0;
        var tag_size = tag_data.length;
        if (tag_size < 3 || tag_data[0] != '<')
            return HTML_TAG_NONE;
        i = 1;
        if (tag_data[i] == '/') {
            closed = 1;
            i++;
        }
        var tagname_c = 0;
        for (; i < tag_size; ++i, ++tagname_c) {
            if (tagname_c >= tagname.length)
                break;
            if (tag_data[i] != tagname[tagname_c])
                return HTML_TAG_NONE;
        }
        if (i == tag_size)
            return HTML_TAG_NONE;
        if (isspace(tag_data[i]) || tag_data[i] == '>')
            return closed ? HTML_TAG_CLOSE : HTML_TAG_OPEN;
        return HTML_TAG_NONE;
    }
    function unscape_text(out, src) {
        var i = 0, org;
        while (i < src.s.length) {
            org = i;
            while (i < src.s.length && src.s[i] != '\\')
                i++;
            if (i > org)
                out.s += src.s.slice(org, i);
            if (i + 1 >= src.s.length)
                break;
            out.s += src.s[i + 1];
            i += 2;
        }
    }
    // Parsers tend to choke on entities with values greater than this
    var MAX_NUM_ENTITY_VAL = 0x10ffff;
    function is_valid_numeric_entity(entity_val) {
        /* Some XML parsers will choke on entities with certain
         * values (mostly control characters.)
         *
         * According to lxml these are all problematic:
         *
         *    [xrange(0, 8),
         *     xrange(11, 12),
         *     xrange(14, 31),
         *     xrange(55296, 57343),
         *     xrange(65534, 65535)]
         */
        return (entity_val > 8
            && (entity_val !== 11 && entity_val > 12)
            && (entity_val < 14 || entity_val > 31)
            && (entity_val < 55296 || entity_val > 57343)
            && (entity_val !== 65534 && entity_val !== 65535)
            && entity_val <= MAX_NUM_ENTITY_VAL);
    }
    // Any numeric entity longer than this is obviously above MAX_ENTITY_CHAR
    // used to avoid dealing with overflows.
    var MAX_NUM_ENTITY_LEN = 7;
    var VALID_ENTITIES = [
        '&AElig;', '&Aacute;', '&Acirc;', '&Agrave;', '&Alpha;', '&Aring;',
        '&Atilde;', '&Auml;', '&Beta;', '&Ccedil;', '&Chi;', '&Dagger;', '&Delta;',
        '&ETH;', '&Eacute;', '&Ecirc;', '&Egrave;', '&Epsilon;', '&Eta;', '&Euml;',
        '&Gamma;', '&Iacute;', '&Icirc;', '&Igrave;', '&Iota;', '&Iuml;', '&Kappa;',
        '&Lambda;', '&Mu;', '&Ntilde;', '&Nu;', '&OElig;', '&Oacute;', '&Ocirc;',
        '&Ograve;', '&Omega;', '&Omicron;', '&Oslash;', '&Otilde;', '&Ouml;', '&Phi;',
        '&Pi;', '&Prime;', '&Psi;', '&Rho;', '&Scaron;', '&Sigma;', '&THORN;', '&Tau;',
        '&Theta;', '&Uacute;', '&Ucirc;', '&Ugrave;', '&Upsilon;', '&Uuml;', '&Xi;',
        '&Yacute;', '&Yuml;', '&Zeta;', '&aacute;', '&acirc;', '&acute;', '&aelig;',
        '&agrave;', '&alefsym;', '&alpha;', '&amp;', '&and;', '&ang;', '&apos;',
        '&aring;', '&asymp;', '&atilde;', '&auml;', '&bdquo;', '&beta;', '&brvbar;',
        '&bull;', '&cap;', '&ccedil;', '&cedil;', '&cent;', '&chi;', '&circ;',
        '&clubs;', '&cong;', '&copy;', '&crarr;', '&cup;', '&curren;', '&dArr;',
        '&dagger;', '&darr;', '&deg;', '&delta;', '&diams;', '&divide;',
        '&eacute;', '&ecirc;', '&egrave;', '&empty;', '&emsp;', '&ensp;',
        '&epsilon;', '&equiv;', '&eta;', '&eth;', '&euml;', '&euro;', '&exist;',
        '&fnof;', '&forall;', '&frac12;', '&frac14;', '&frac34;', '&frasl;',
        '&gamma;', '&ge;', '&gt;', '&hArr;', '&harr;', '&hearts;', '&hellip;',
        '&iacute;', '&icirc;', '&iexcl;', '&igrave;', '&image;',
        '&infin;',
        '&int;', '&iota;', '&iquest;', '&isin;', '&iuml;', '&kappa;', '&lArr;',
        '&lambda;', '&lang;', '&laquo;', '&larr;', '&lceil;', '&ldquo;', '&le;',
        '&lfloor;', '&lowast;', '&loz;', '&lrm;', '&lsaquo;', '&lsquo;', '&lt;',
        '&macr;', '&mdash;', '&micro;', '&middot;', '&minus;', '&mu;', '&nabla;',
        '&nbsp;', '&ndash;', '&ne;', '&ni;', '&not;', '&notin;', '&nsub;', '&ntilde;',
        '&nu;', '&oacute;', '&ocirc;', '&oelig;', '&ograve;', '&oline;', '&omega;',
        '&omicron;', '&oplus;', '&or;', '&ordf;', '&ordm;', '&oslash;', '&otilde;',
        '&otimes;', '&ouml;', '&para;', '&part;', '&permil;', '&perp;', '&phi;',
        '&pi;', '&piv;', '&plusmn;', '&pound;', '&prime;', '&prod;', '&prop;',
        '&psi;', '&quot;', '&rArr;', '&radic;', '&rang;', '&raquo;', '&rarr;',
        '&rceil;', '&rdquo;', '&real;', '&reg;', '&rfloor;', '&rho;', '&rlm;',
        '&rsaquo;', '&rsquo;', '&sbquo;', '&scaron;', '&sdot;', '&sect;', '&shy;',
        '&sigma;', '&sigmaf;', '&sim;', '&spades;', '&sub;', '&sube;', '&sum;',
        '&sup1;', '&sup2;', '&sup3;', '&sup;', '&supe;', '&szlig;', '&tau;',
        '&there4;', '&theta;', '&thetasym;', '&thinsp;', '&thorn;', '&tilde;',
        '&times;', '&trade;', '&uArr;', '&uacute;', '&uarr;', '&ucirc;', '&ugrave;',
        '&uml;', '&upsih;', '&upsilon;', '&uuml;', '&weierp;', '&xi;', '&yacute;',
        '&yen;', '&yuml;', '&zeta;', '&zwj;', '&zwnj;',
    ];
    /**
     * According to the OWASP rules:
     *
     * & --> &amp;
     * < --> &lt;
     * > --> &gt;
     * " --> &quot;
     * ' --> &#x27;     &apos; is not recommended
     * / --> &#x2F;     forward slash is included as it helps end an HTML entity
     *
     */
    var HTML_ESCAPE_TABLE = [
        7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 7, 7, 0, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        0, 0, 1, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 4,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 6, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    var HTML_ESCAPES = ["", "&quot;", "&amp;", "&#39;", "&#47;", "&lt;", "&gt;", "" /* throw out control characters */];
    function escape_html(out, src, secure) {
        var i = 0, org, esc = 0;
        while (i < src.length) {
            org = i;
            while (i < src.length && !(esc = HTML_ESCAPE_TABLE[src.charCodeAt(i)]))
                i++;
            if (i > org)
                out.s += src.slice(org, i);
            /* escaping */
            if (i >= src.length)
                break;
            /* The forward slash is only escaped in secure mode */
            if (src[i] == '/' && !secure) {
                out.s += '/';
            }
            else if (src[i] == '\'') {
                out.s += '\'';
            }
            else if (src[i] == '"') {
                out.s += '"';
            }
            else if (HTML_ESCAPE_TABLE[src.charCodeAt(i)] == 7) {
            }
            else {
                out.s += HTML_ESCAPES[esc];
            }
            i++;
        }
    }
    /*
     * The following characters will not be escaped:
     *
     *        -_.+!*'(),%#@?=;:/,+&$ alphanum
     *
     * Note that this character set is the addition of:
     *
     *    - The characters which are safe to be in an URL
     *    - The characters which are *not* safe to be in
     *    an URL because they are RESERVED characters.
     *
     * We asume (lazily) that any RESERVED char that
     * appears inside an URL is actually meant to
     * have its native function (i.e. as an URL
     * component/separator) and hence needs no escaping.
     *
     * There are two exceptions: the chacters & (amp)
     * and ' (single quote) do not appear in the table.
     * They are meant to appear in the URL as components,
     * yet they require special HTML-entity escaping
     * to generate valid HTML markup.
     *
     * All other characters will be escaped to %XX.
     *
     */
    var HREF_SAFE = [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    function escape_href(out, src) {
        var i = 0, org;
        while (i < src.length) {
            org = i;
            /* Skip by characters that don't need special processing */
            while (i < src.length && HREF_SAFE[src.charCodeAt(i)] === 1)
                i++;
            if (i > org)
                out.s += src.slice(org, i);
            /* escaping */
            if (i >= src.length)
                break;
            /* throw out control characters */
            if (HREF_SAFE[src.charCodeAt(i)] == 2) {
                i++;
                continue;
            }
            switch (src[i]) {
                /* amp appears all the time in URLs, but needs
                 * HTML-entity escaping to be inside an href */
                case '&':
                    out.s += '&amp;';
                    break;
                /* the single quote is a valid URL character
                 * according to the standard; it needs HTML
                 * entity escaping too */
                case '\'':
                    out.s += '&#x27;';
                    break;
                /* the space can be escaped to %20 or a plus
                 * sign. we're going with the generic escape
                 * for now. the plus thing is more commonly seen
                 * when building GET strings */
                /*
                //This was disabled
                case ' ':
                    out.s += '+'
                    break;
                //*/
                /* every other character goes with a %XX escaping */
                default:
                    out.s += escapeUTF8Char(src[i]);
            }
            i++;
        }
    }
    // function autolink_delim(uint8_t *data, size_t link_end, size_t offset, size_t size)
    function autolink_delim(data_, link_end, offset, size) {
        var data = data_.slice(offset);
        var cclose;
        var copen = 0;
        var i;
        for (i = 0; i < link_end; ++i)
            if (data[i] == '<') {
                link_end = i;
                break;
            }
        while (link_end > 0) {
            var c = data[link_end - 1];
            if (c === "\0")
                break;
            if ("?!.,".indexOf(c) !== -1) {
                link_end--;
            }
            else if (c === ';') {
                var new_end = link_end - 2;
                while (new_end > 0 && isalpha(data[new_end]))
                    new_end--;
                if (new_end < link_end - 2 && data[new_end] == '&')
                    link_end = new_end;
                else
                    link_end--;
            }
            else
                break;
        }
        if (link_end == 0)
            return 0;
        cclose = data[link_end - 1];
        switch (cclose) {
            case '"':
                copen = '"';
                break;
            case '\'':
                copen = '\'';
                break;
            case ')':
                copen = '(';
                break;
            case ']':
                copen = '[';
                break;
            case '}':
                copen = '{';
                break;
        }
        if (copen != 0) {
            var closing = 0;
            var opening = 0;
            var j = 0;
            /* Try to close the final punctuation sign in this same line;
             * if we managed to close it outside of the URL, that means that it's
             * not part of the URL. If it closes inside the URL, that means it
             * is part of the URL.
             *
             * Examples:
             *
             *    foo http://www.pokemon.com/Pikachu_(Electric) bar
             *        => http://www.pokemon.com/Pikachu_(Electric)
             *
             *    foo (http://www.pokemon.com/Pikachu_(Electric)) bar
             *        => http://www.pokemon.com/Pikachu_(Electric)
             *
             *    foo http://www.pokemon.com/Pikachu_(Electric)) bar
             *        => http://www.pokemon.com/Pikachu_(Electric))
             *
             *    (foo http://www.pokemon.com/Pikachu_(Electric)) bar
             *        => foo http://www.pokemon.com/Pikachu_(Electric)
             */
            while (j < link_end) {
                if (data[j] == copen)
                    opening++;
                else if (data[j] == cclose)
                    closing++;
                j++;
            }
            if (closing != opening)
                link_end--;
        }
        return link_end;
    }
    function check_domain(data, allow_short) {
        var i, np = 0;
        if (!isalnum(data[0]))
            return 0;
        for (i = 1; i < data.length - 1; ++i) {
            if (data[i] == '.')
                np++;
            else if (!isalnum(data[i]) && data[i] != '-')
                break;
        }
        /* a valid domain needs to have at least a dot.
         * that's as far as we get */
        if (allow_short) {
            /* We don't need a valid domain in the strict sence (with
             * at least one dot; so just make sure it's composed of valid
             * domain characters and return the length of the valid
             * sequence. */
            return i;
        }
        else {
            return np ? i : 0;
        }
    }
    function sd_autolink_issafe(link) {
        var valid_uris = [
            "http://", "https://", "ftp://", "mailto://",
            "/", "git://", "steam://", "irc://", "news://", "mumble://",
            "ssh://", "ircs://", "ts3server://", "#"
        ];
        var i;
        for (i = 0; i < valid_uris.length; ++i) {
            var len = valid_uris[i].length;
            if (link.length > len &&
                link.toLowerCase().indexOf(valid_uris[i]) == 0 &&
                /[A-Za-z0-9#\/?]/.test(link[len]))
                return 1;
        }
        return 0;
    }
    function sd_autolink__url(rewind_p, link, data_, offset, size, flags) {
        var data = data_.slice(offset);
        var link_end, rewind = 0, domain_len;
        if (size < 4 || data_[offset + 1] != '/' || data_[offset + 2] != '/')
            return 0;
        while (rewind < offset && isalpha(data_[offset - rewind - 1]))
            rewind++;
        if (!sd_autolink_issafe(data_.substr(offset - rewind, size + rewind)))
            return 0;
        link_end = "://".length;
        domain_len = check_domain(data.slice(link_end), flags & SD_AUTOLINK_SHORT_DOMAINS);
        if (domain_len == 0)
            return 0;
        link_end += domain_len;
        while (link_end < size && !isspace(data_[offset + link_end]))
            link_end++;
        link_end = autolink_delim(data_, link_end, offset, size);
        if (link_end == 0)
            return 0;
        //TODO
        link.s += data_.substr(offset - rewind, link_end + rewind);
        rewind_p.p = rewind;
        return link_end;
    }
    function sd_autolink__subreddit(rewind_p, link, data_, offset, size) {
        var data = data_.slice(offset);
        var link_end;
        var allMinus = false;
        if (size < 3)
            return 0;
        /* make sure this / is part of /r/ */
        if (data.indexOf('/r/') != 0)
            return 0;
        link_end = "/r/".length;
        if (data.substr(link_end - 1, 4).toLowerCase() == "all-") {
            allMinus = true;
        }
        do {
            var start = link_end;
            var max_length = 24;
            /* special case: /r/reddit.com (the only subreddit with a '.') */
            if (size >= link_end + 10 && data.substr(link_end, 10).toLowerCase() == 'reddit.com') {
                link_end += 10;
                max_length = 10;
            }
            else {
                /* If not the special case make sure it starts with (t:)?[A-Za-z0-9] */
                /* support autolinking to timereddits, /r/t:when (1 April 2012) */
                if (size > link_end + 2 && data.substr(link_end, 2) == 't:')
                    link_end += 2; /* Jump over the 't:' */
                /* the first character of a subreddit name must be a letter or digit */
                if (!isalnum(data[link_end]))
                    return 0;
                link_end += 1;
            }
            /* consume valid characters ([A-Za-z0-9_]) until we run out */
            while (link_end < size && (isalnum(data[link_end]) ||
                data[link_end] == '_'))
                link_end++;
            /* valid subreddit names are between 3 and 21 characters, with
             * some subreddits having 2-character names. Don't bother with
             * autolinking for anything outside this length range.
             * (chksrname function in reddit/.../validator.py) */
            if (link_end - start < 2 || link_end - start > max_length)
                return 0;
        } while (link_end < size && (data[link_end] == '+' || (allMinus && data[link_end] == '-')) && link_end++);
        if (link_end < size && data[link_end] == '/') {
            while (link_end < size && (isalnum(data[link_end]) ||
                data[link_end] == '_' ||
                data[link_end] == '/' ||
                data[link_end] == '-')) {
                link_end++;
            }
        }
        /* make the link */
        link.s += data.slice(0, link_end);
        rewind_p.p = 0;
        return link_end;
    }
    function sd_autolink__username(rewind_p, link, data_, offset, size) {
        var data = data_.slice(offset);
        var link_end;
        if (size < 6)
            return 0;
        /* make sure this / is part of /u/ */
        if (data.indexOf('/u/') != 0)
            return 0;
        /* the first letter of a username must... well, be valid, we don't care otherwise */
        link_end = "/u/".length;
        if (!isalnum(data[link_end]) && data[link_end] != '_' && data[link_end] != '-')
            return 0;
        link_end += 1;
        /* consume valid characters ([A-Za-z0-9_-/]) until we run out */
        while (link_end < size && (isalnum(data[link_end]) ||
            data[link_end] == '_' ||
            data[link_end] == '/' ||
            data[link_end] == '-'))
            link_end++;
        /* make the link */
        link.s += data.slice(0, link_end);
        rewind_p.p = 0;
        return link_end;
    }
    function sd_autolink__email(rewind_p, link, data_, offset, size, flags) {
        var data = data_.slice(offset);
        var link_end, rewind;
        var nb = 0, np = 0;
        for (rewind = 0; rewind < offset; ++rewind) {
            var c = data_[offset - rewind - 1];
            if (c == '\0')
                break;
            if (isalnum(c))
                continue;
            if (".+-_".indexOf(c) != -1)
                continue;
            break;
        }
        if (rewind == 0)
            return 0;
        for (link_end = 0; link_end < size; ++link_end) {
            var c = data_[offset + link_end];
            if (isalnum(c))
                continue;
            if (c == '@')
                nb++;
            else if (c == '.' && link_end < size - 1)
                np++;
            else if (c != '-' && c != '_')
                break;
        }
        if (link_end < 2 || nb != 1 || np == 0)
            return 0;
        //TODO
        link_end = autolink_delim(data_, link_end, offset, size);
        if (link_end == 0)
            return 0;
        // link.s += data_.slice(offset - rewind, link_end + rewind
        link.s += data_.substr(offset - rewind, link_end + rewind);
        rewind_p.p = rewind;
        return link_end;
    }
    function sd_autolink__www(rewind_p, link, data_, offset, size, flags) {
        var data = data_.slice(offset);
        var link_end;
        if (offset > 0 && !ispunct(data_[offset - 1]) && !isspace(data_[offset - 1]))
            return 0;
        // if (size < 4 || memcmp(data, "www.", strlen("www.")) != 0)
        if (size < 4 || (data.slice(0, 4) != 'www.'))
            return 0;
        link_end = check_domain(data, 0);
        if (link_end == 0)
            return 0;
        while (link_end < size && !isspace(data[link_end]))
            link_end++;
        link_end = autolink_delim(data_, link_end, offset, size);
        if (link_end == 0)
            return 0;
        link.s += data.slice(0, link_end);
        rewind_p.p = 0;
        return link_end;
    }
    /**
    Initialize a Callbacks object.
    @constructor
    @param {Object.<string, ?function>} callbacks A set of callbacks to use as the methods on this object.
    */
    function Callbacks(callbacks) {
        if (callbacks) {
            for (var name in callbacks) {
                if (name in this)
                    this[name] = callbacks[name];
            }
        }
    }
    Callbacks.prototype = {
        /**
        Renders a code block.
        Syntax highlighting specific to lanugage may be performed here.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {Buffer} language The name of the code langage.
        @param {?Object} context A renderer specific context object.
        */
        blockcode: null,
        /**
        Renders a blockquote.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {?Object} context A renderer specific context object.
        */
        blockquote: null,
        /**
        Renders a block of HTML code.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {?Object} context A renderer specific context object.
        */
        blockhtml: null,
        /**
        Renders a header.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {Number} level The header level.
        @param {?Object} context A renderer specific context object.
        */
        header: null,
        /**
        Renders a horizontal rule.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {?Object} context A renderer specific context object.
        */
        hrule: null,
        /**
        Renders a list.
        <p>
        This method handles the list wrapper, which in terms of HTML would be &lt;ol&gt; or &lt;ul&gt;.
        This method is not responsible for handling list elements, all such processing should
        already have occured on text pased to the method . All that it is intended
        to do is to wrap the text parameter in anything needed.
        </p>
        @example
        out.s += "&lt;ul&gt;" + text.s + "&lt;/ul&gt;"
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input that goes inside the list.
        @param {Number} flags A bitfield holding a portion of the render state. The only bit that this should be concerned with is MKD_LIST_ORDERED
        @param {?Object} context A renderer specific context object.
        */
        list: null,
        /**
        Renders a list.
        <p>
        Wraps the text in a list element.
        </p>
        @example
        out.s += "&lt;li&gt;" + text.s + "&lt;/li&gt;"
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The contents of the list element.
        @param {Number} flags A bitfield holding a portion of the render state. The only bit that this should be concerned with is MKD_LI_BLOCK.
        @param {?Object} context A renderer specific context object.
        */
        listitem: null,
        /**
        Renders a paragraph.
        @example
        out.s += "&lt;p&gt;" + text.s + "&lt;/p&gt;";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {?Object} context A renderer specific context object.
        */
        paragraph: null,
        /**
        Renders a table.
        @example
        out.s += "<table><thead>";
        out.s += header.s;
        out.s += "</thead><tbody>";
        out.s += body.s;
        out.s += "</tbody></table>";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} head The table header.
        @param {Buffer} body The table body.
        @param {?Object} context A renderer specific context object.
        */
        table: null,
        /**
        Renders a table row.
        @example
        out.s += "&lt;tr&gt;" + text.s + "&lt;/tr&gt;";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {?Object} context A renderer specific context object.
        */
        table_row: null,
        /**
        Renders a table cell.
        @example
        out.s += "&lt;td&gt;" + text.s + "&lt;/td&gt;";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {Number} flags A bit filed indicating a portion of the output state. Relevant bits are: MKD_TABLE_HEADER, MKD_TABLE_ALIGN_CENTER. MKD_TABLE_ALIGN_L, and MKD_TABLE_ALIGN_R.
        @param {?Object} context A renderer specific context object.
        */
        table_cell: null,
        /**
        Renders a link that was autodetected.
        @example
        out.s += "&lt;a href=\""+ text.s + "\"&gt;" + text.s + "&lt;/a&gt;";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The address being linked to.
        @param {Number} type Equal to MKDA_NORMAL or MKDA_EMAIL
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        autolink: null,
        /**
        Renders inline code.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        codespan: null,
        /**
        Renders text with double emphasis. Default is equivalent to the HTML &lt;strong&gt; tag.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        double_emphasis: null,
        /**
        Renders text with single emphasis. Default is equivalent to the HTML &lt;em&gt; tag.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        emphasis: null,
        /**
        Renders an image.
        @example
        out.s = "&lt;img src=\"" + link.s + "\" title=\"" + title.s + "\"  alt=\"" + alt.s + "\"/&gt;";"
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} link The address of the image.
        @param {Buffer} title Title text for the image
        @param {Buffer} alt Alt text for the image
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        image: null,
        /**
        Renders line break.
        @example
        out.s += "&lt;br/&gt;";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        linebreak: null,
        /**
        Renders a link.
        @example
        out.s = "&lt;a href=\"" + link.s + "\" title=\"" + title.s + "\"&gt;" + content.s + "&lt;/a&gt;";
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} link The link address.
        @param {Buffer} title Title text for the link.
        @param {Buffer} content Link text.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        link: null,
        /**
        Copies and potentially escapes some HTML.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The input text.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        raw_html_tag: null,
        /**
        Renders text with triple emphasis. Default is equivalent to both the &lt;em&gt; and &lt;strong&gt; HTML tags.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        triple_emphasis: null,
        /**
        Renders text crossd out.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        strikethrough: null,
        /**
        Renders text as superscript.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        @returns {Boolean} Whether or not the tag was rendered.
        */
        superscript: null,
        /**
        Escapes an HTML entity.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being wrapped.
        @param {?Object} context A renderer specific context object.
        */
        entity: null,
        /**
        Renders plain text.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {Buffer} text The text being rendered.
        @param {?Object} context A renderer specific context object.
        */
        normal_text: null,
        /**
        Creates opening boilerplate for a table of contents.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {?Object} context A renderer specific context object.
        */
        doc_header: null,
        /**
        Creates closing boilerplate for a table of contents.
        @method
        @param {Buffer} out The output string buffer to append to.
        @param {?Object} context A renderer specific context object.
        */
        doc_footer: null
    };
    /**
    A renderer object
    @constructor
    @param {Callbacks} callbacks The callbacks object to use for the renderer.
    @param {?Callbacks} context Renderer specific context information.
    */
    function Renderer(callbacks, context) {
        this.callbacks = callbacks;
        this.context = context;
    }
    /**
    Instantiates a custom Renderer object.
    @param {Callbacks} callbacks The callbacks object to use for the renderer.
    @param {?Callbacks} context Renderer specific context information.
    @returns {Renderer}
    */
    function createCustomRenderer(callbacks, context) {
        return new Renderer(callbacks, context);
    }
    exports.createCustomRenderer = createCustomRenderer;
    function defaultRenderState() {
        return {
            nofollow: /*0*/ 1,
            target: null,
            tocData: {
                headerCount: 0,
                currentLevel: 0,
                levelOffset: 0
            },
            toc_id_prefix: null,
            html_element_whitelist: DEFAULT_HTML_ELEMENT_WHITELIST,
            html_attr_whitelist: DEFAULT_HTML_ATTR_WHITELIST,
            flags: 0,
            //(flags != undefined?flags:HTML_SKIP_HTML | HTML_SKIP_IMAGES | HTML_SAFELINK | HTML_ESCAPE | HTML_USE_XHTML),
            /* extra callbacks */
            //    void (*link_attributes)(struct buf *ob, const struct buf *url, void *self);
            link_attributes: function link_attributes(out, url, options) {
                if (options.nofollow)
                    out.s += ' rel="nofollow"';
                if (options.target != null) {
                    out.s += ' target="' + options.target + '"';
                }
            }
        };
    }
    exports.defaultRenderState = defaultRenderState;
    /**
    Produces a renderer object that will match Reddit's output.
    @param {?Number=} flags A bitfield containing flags specific to the reddit HTML renderer. Passing undefined, null, or null value will produce reddit exact output.
    @returns {Renderer} A renderer object that will match Reddit's output.
    */
    function getRedditRenderer(flags) {
        if (flags === void 0) { flags = null; }
        var state = defaultRenderState();
        if (flags == null) {
            state.flags = DEFAULT_BODY_FLAGS;
        }
        else {
            state.flags = flags;
        }
        var renderer = new Renderer(getRedditCallbacks(), state);
        if (renderer.context.flags & HTML_SKIP_IMAGES)
            renderer.callbacks.image = null;
        if (renderer.context.flags & HTML_SKIP_LINKS) {
            renderer.callbacks.link = null;
            renderer.callbacks.autolink = null;
        }
        if (renderer.context.flags & HTML_SKIP_HTML || renderer.context.flags & HTML_ESCAPE)
            renderer.callbacks.blockhtml = null;
        return renderer;
    }
    exports.getRedditRenderer = getRedditRenderer;
    /**
    Produces a renderer object that will match Reddit's for a table of contents.
    @returns {Renderer} A renderer object that will match Reddit's output.
    */
    function getTocRenderer() {
        var state = defaultRenderState();
        state.flags = HTML_TOC | HTML_SKIP_HTML;
        var renderer = new Renderer(getTocCallbacks(), state);
        return renderer;
    }
    exports.getTocRenderer = getTocRenderer;
    /**
    Create a Callbacks object with the given callback table.
    @param {Object.<string, function>} callbacks A table of callbacks to place int a callbacks object.
    @returns {Callbacks} A callbacks object holding the provided callbacks.
    */
    function createCustomCallbacks(callbacks) {
        return new Callbacks(callbacks);
    }
    exports.createCustomCallbacks = createCustomCallbacks;
    /**
    Produce a callbacks object that matches Reddit's output.
    @returns {Callbacks} A callbacks object that matches Reddit's output.
    */
    function getRedditCallbacks() {
        return new Callbacks({
            blockcode: cb_blockcode,
            blockquote: cb_blockquote,
            blockhtml: cb_blockhtml,
            header: cb_header,
            hrule: cb_hrule,
            list: cb_list,
            listitem: cb_listitem,
            paragraph: cb_paragraph,
            table: cb_table,
            table_row: cb_table_row,
            table_cell: cb_table_cell,
            autolink: cb_autolink,
            codespan: cb_codespan,
            double_emphasis: cb_double_emphasis,
            emphasis: cb_emphasis,
            image: cb_image,
            linebreak: cb_linebreak,
            link: cb_link,
            raw_html_tag: cb_raw_html_tag,
            triple_emphasis: cb_triple_emphasis,
            strikethrough: cb_strikethrough,
            superscript: cb_superscript,
            entity: null,
            normal_text: cb_normal_text,
            doc_header: null,
            doc_footer: cb_reset_toc
        });
    }
    exports.getRedditCallbacks = getRedditCallbacks;
    /**
    Produce a callbacks object for rendering a table of contents.
    @returns {Callbacks} A callbacks object for rendering a table of contents.
    */
    function getTocCallbacks() {
        return new Callbacks({
            blockcode: null,
            blockquote: null,
            blockhtml: null,
            header: cb_toc_header,
            hrule: null,
            list: null,
            listitem: null,
            paragraph: null,
            table: null,
            table_row: null,
            table_cell: null,
            autolink: null,
            codespan: cb_codespan,
            double_emphasis: cb_double_emphasis,
            emphasis: cb_emphasis,
            image: null,
            linebreak: null,
            link: cb_toc_link,
            raw_html_tag: null,
            triple_emphasis: cb_triple_emphasis,
            strikethrough: cb_strikethrough,
            superscript: cb_superscript,
            entity: null,
            normal_text: null,
            doc_header: null,
            doc_footer: cb_toc_finalize
        });
    }
    exports.getTocCallbacks = getTocCallbacks;
    /* block level callbacks - NULL skips the block */
    // void (*blockcode)(struct buf *ob, const struct buf *text, const struct buf *lang, void *opaque);
    function cb_blockcode(out, text, lang, options) {
        if (out.s.length)
            out.s += '\n';
        if (lang && lang.s.length) {
            var i, cls;
            out.s += '<pre><code class="';
            for (i = 0, cls = 0; i < lang.s.length; ++i, ++cls) {
                while (i < lang.s.length && isspace(lang.s[i]))
                    i++;
                if (i < lang.s.length) {
                    var org = i;
                    while (i < lang.s.length && !isspace(lang.s[i]))
                        i++;
                    if (lang.s[org] == '.')
                        org++;
                    if (cls)
                        out.s += ' ';
                    escape_html(out, lang.s.slice(org, i), false);
                }
            }
            out.s += '">';
        }
        else
            out.s += '<pre><code>';
        if (text)
            escape_html(out, text.s, false);
        out.s += '</code></pre>\n';
    }
    // void (*blockquote)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_blockquote(out, text, options) {
        if (out.s.length)
            out.s += '\n';
        out.s += '<blockquote>\n';
        if (text)
            out.s += text.s;
        out.s += '</blockquote>\n';
    }
    // void (*blockhtml)(struct buf *ob,const  struct buf *text, void *opaque);
    function cb_blockhtml(out, text, options) {
        var org, sz;
        if (!text)
            return;
        sz = text.s.length;
        while (sz > 0 && text.s[sz - 1] == '\n')
            sz--;
        org = 0;
        while (org < sz && text.s[org] == '\n')
            org++;
        if (org >= sz)
            return;
        if (out.s.length)
            out.s += '\n';
        out.s += text.s.slice(org, sz);
        out.s += '\n';
    }
    // header(Buffer out, Buffer text, int level, void *opaque);
    function cb_header(out, text, level, options) {
        if (out.s.length)
            out.s += '\n';
        if (options.flags & HTML_TOC) {
            out.s += '<h' + (+level) + ' id="';
            if (options.toc_id_prefix)
                out.s += options.toc_id_prefix;
            out.s += 'toc_' + (options.tocData.headerCount++) + '">';
        }
        else {
            out.s += '<h' + (+level) + '>';
        }
        if (text)
            out.s += text.s;
        out.s += '</h' + (+level) + '>\n';
    }
    // void (*hrule)(struct buf *ob, void *opaque);
    function cb_hrule(out, options) {
        if (out.s.length)
            out.s += '\n';
        out.s += (options.flags & HTML_USE_XHTML) ? '<hr/>\n' : '<hr>\n';
    }
    // void (*list)(struct buf *ob, const struct buf *text, int flags, void *opaque);
    function cb_list(out, text, flags, options) {
        if (out.s.length)
            out.s += '\n';
        out.s += (flags & MKD_LIST_ORDERED ? '<ol>\n' : '<ul>\n');
        if (text)
            out.s += text.s;
        out.s += (flags & MKD_LIST_ORDERED ? '</ol>\n' : '</ul>\n');
    }
    // void (*listitem)(struct buf *ob, const struct buf *text, int flags, void *opaque);
    function cb_listitem(out, text, flags, options) {
        out.s += '<li>';
        if (text) {
            var size = text.s.length;
            while (size && text.s[size - 1] == '\n')
                size--;
            out.s += text.s.slice(0, size);
        }
        out.s += '</li>\n';
    }
    // void (*paragraph)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_paragraph(out, text, options) {
        var i = 0;
        if (out.s.length)
            out.s += '\n';
        if (!text || !text.s.length)
            return;
        while (i < text.s.length && isspace(text.s[i]))
            i++;
        if (i == text.s.length)
            return;
        out.s += '<p>';
        if (options.flags & HTML_HARD_WRAP) {
            var org;
            while (i < text.s.length) {
                org = i;
                while (i < text.s.length && text.data[i] != '\n')
                    i++;
                if (i > org)
                    out.s += text.s.slice(org, i);
                /*
                 * do not insert a line break if this newline
                 * is the last character on the paragraph
                 */
                if (i >= text.s.length - 1)
                    break;
                cb_linebreak(out, options);
                i++;
            }
        }
        else {
            out.s += text.s.slice(i);
        }
        out.s += '</p>\n';
    }
    // void (*table)(struct buf *ob, const struct buf *header, const struct buf *body, void *opaque);
    function cb_table(out, header, body, options) {
        if (out.s.length)
            out.s += '\n';
        out.s += '<table><thead>\n';
        if (header)
            out.s += header.s;
        out.s += '</thead><tbody>\n';
        if (body)
            out.s += body.s;
        out.s += '</tbody></table>\n';
    }
    // void (*table_row)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_table_row(out, text, options) {
        out.s += '<tr>\n';
        if (text)
            out.s += text.s;
        out.s += '</tr>\n';
    }
    // void (*table_cell)(struct buf *ob, const struct buf *text, int flags, void *opaque);
    function cb_table_cell(out, text, flags, options, col_span) {
        if (flags & MKD_TABLE_HEADER) {
            out.s += '<th';
        }
        else {
            out.s += '<td';
        }
        if (col_span > 1) {
            out.s += " colspan=\"" + col_span + "\" ";
        }
        switch (flags & MKD_TABLE_ALIGNMASK) {
            case MKD_TABLE_ALIGN_CENTER:
                out.s += ' align="center">';
                break;
            case MKD_TABLE_ALIGN_L:
                out.s += ' align="left">';
                break;
            case MKD_TABLE_ALIGN_R:
                out.s += ' align="right">';
                break;
            default:
                out.s += '>';
        }
        if (text)
            out.s += text.s;
        if (flags & MKD_TABLE_HEADER) {
            out.s += '</th>\n';
        }
        else {
            out.s += '</td>\n';
        }
    }
    /* span level callbacks - NULL or return 0 prints the span verbatim */
    // int (*autolink)(struct buf *ob, const struct buf *link, enum mkd_autolink type, void *opaque);
    function cb_autolink(out, link, type, options) {
        var offset = 0;
        if (!link || !link.s.length)
            return 0;
        if ((options.flags & HTML_SAFELINK) != 0 &&
            !sd_autolink_issafe(link.s) && type != MKDA_EMAIL)
            return 0;
        out.s += '<a href="';
        if (type == MKDA_EMAIL)
            out.s += 'mailto:';
        escape_href(out, link.s.slice(offset));
        if (options.link_attributes) {
            out.s += '"';
            options.link_attributes(out, link, options);
            out.s += '>';
        }
        else {
            out.s += '">';
        }
        /*
         * Pretty printing: if we get an email address as
         * an actual URI, e.g. `mailto:foo@bar.com`, we don't
         * want to print the `mailto:` prefix
         */
        if (link.s.indexOf('mailto:') == 0) {
            escape_html(out, link.s.slice(7), false);
        }
        else {
            escape_html(out, link.s, false);
        }
        out.s += '</a>';
        return 1;
    }
    // int (*codespan)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_codespan(out, text, options) {
        out.s += '<code>';
        if (text)
            escape_html(out, text.s, false);
        out.s += '</code>';
        return 1;
    }
    // int (*double_emphasis)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_double_emphasis(out, text, options) {
        if (!text || !text.s.length)
            return 0;
        out.s += '<strong>' + text.s + '</strong>';
        return 1;
    }
    // int (*emphasis)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_emphasis(out, text, options) {
        if (!text || !text.s.length)
            return 0;
        out.s += '<em>' + text.s + '</em>';
        return 1;
    }
    // int (*image)(struct buf *ob, const struct buf *link, const struct buf *title, const struct buf *alt, void *opaque);
    function cb_image(out, link, title, alt, options) {
        if (!link || !link.s.length)
            return 0;
        out.s += '<img src="';
        escape_href(out, link.s);
        out.s += '" alt="';
        if (alt && alt.s.length)
            escape_html(out, alt.s, false);
        if (title && title.s.length) {
            out.s += '" title="';
            escape_html(out, title.s, false);
        }
        out.s += (options.flags & HTML_USE_XHTML ? '"/>' : '">');
        return 1;
    }
    // int (*linebreak)(struct buf *ob, void *opaque);
    function cb_linebreak(out, options) {
        out.s += (options.flags & HTML_USE_XHTML ? '<br/>\n' : '<br>\n');
        return 1;
    }
    // int (*link)(struct buf *ob, const struct buf *link, const struct buf *title, const struct buf *content, void *opaque);
    function cb_link(out, link, title, content, options) {
        if (link != null && (options.flags & HTML_SAFELINK) != 0 && !sd_autolink_issafe(link.s))
            return 0;
        out.s += '<a href="';
        if (link && link.s.length)
            escape_href(out, link.s);
        if (title && title.s.length) {
            out.s += '" title="';
            escape_html(out, title.s, false);
        }
        if (options.link_attributes) {
            out.s += '"';
            options.link_attributes(out, link, options);
            out.s += '>';
        }
        else {
            out.s += '">';
        }
        if (content && content.s.length)
            out.s += content.s;
        out.s += '</a>';
        return 1;
    }
    // rndr_html_tag(struct buf *ob, const struct buf *text, void *opaque, char* tagname, char** whitelist, int tagtype)
    //NOT A CALLBACK!
    function rndr_html_tag(out, text, options, tagname, whitelist, tagtype) {
        var i, x, z, in_str = 0, seen_equals = 0, done = 0, done_attr = 0, reset = 0;
        var attr, value;
        var c;
        out.s += '<';
        if (tagtype == HTML_TAG_CLOSE) {
            out.s += "/" + tagname + ">";
            return;
        }
        out.s += tagname;
        var i = 1 + tagname.length;
        attr = new Buffer;
        value = new Buffer;
        for (; i < text.s.length && !done; i++) {
            c = text.s[i];
            done = 0;
            reset = 0;
            done_attr = 0;
            switch (c) {
                case '>':
                    done = 1;
                    break;
                case '\'':
                case '"':
                    if (!seen_equals) {
                        reset = 1;
                    }
                    else if (!in_str) {
                        in_str = c;
                    }
                    else if (in_str == c) {
                        in_str = 0;
                        done_attr = 1;
                    }
                    else {
                        value.s += c;
                    }
                    break;
                case ' ':
                    if (in_str) {
                        value.s += ' ';
                    }
                    else {
                        reset = 1;
                    }
                    break;
                case '=':
                    if (seen_equals) {
                        reset = 1;
                        break;
                    }
                    seen_equals = 1;
                    break;
                default:
                    if (seen_equals && in_str || !seen_equals) {
                        if (seen_equals) {
                            value.s += c;
                        }
                        else {
                            attr.s += c;
                        }
                    }
                    break;
            }
            if (done_attr) {
                var valid = 0;
                for (z = 0; whitelist[z]; z++) {
                    if (whitelist[z].length != attr.s.length) {
                        continue;
                    }
                    for (x = 0; x < attr.s.length; x++) {
                        if (whitelist[z][x].toLowerCase() != attr.s[x].toLowerCase()) {
                            break;
                        }
                    }
                    if (x == attr.s.length) {
                        valid = 1;
                        break;
                    }
                }
                if (valid && value.s.length && attr.s.length) {
                    // console.log("VALD", value.s.length, attr.s.length);
                    out.s += ' ';
                    escape_html(out, attr.s, false);
                    out.s += '="';
                    escape_html(out, value.s, false);
                    out.s += '"';
                }
                reset = 1;
            }
            if (reset) {
                seen_equals = 0;
                in_str = 0;
                attr = new Buffer;
                value = new Buffer;
            }
        }
        out.s += '>';
    }
    // int (*raw_html_tag)(struct buf *ob, const struct buf *tag, void *opaque);
    function cb_raw_html_tag(out, text, options) {
        var whitelist = options.html_element_whitelist;
        /* Items on the whitelist ignore all other flags and just output */
        if (((options.flags & HTML_ALLOW_ELEMENT_WHITELIST) != 0) && whitelist) {
            for (var i = 0; whitelist[i]; i++) {
                var tagtype = sdhtml_is_tag(text.s, whitelist[i]);
                if (tagtype != HTML_TAG_NONE) {
                    rndr_html_tag(out, text, options, whitelist[i], options.html_attr_whitelist, tagtype);
                    return 1;
                }
            }
        }
        /* HTML_ESCAPE overrides SKIP_HTML, SKIP_STYLE, SKIP_LINKS and SKIP_IMAGES
         * It doens't see if there are any valid tags, just escape all of them. */
        if ((options.flags & HTML_ESCAPE) != 0) {
            escape_html(out, text.s, false);
            return 1;
        }
        if ((options.flags & HTML_SKIP_HTML) != 0)
            return 1;
        if ((options.flags & HTML_SKIP_STYLE) != 0 &&
            sdhtml_is_tag(text.s, "style"))
            return 1;
        if ((options.flags & HTML_SKIP_LINKS) != 0 &&
            sdhtml_is_tag(text.s, "a"))
            return 1;
        if ((options.flags & HTML_SKIP_IMAGES) != 0 &&
            sdhtml_is_tag(text.s, "img"))
            return 1;
        out.s += text.s;
        return 1;
    }
    // int (*triple_emphasis)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_triple_emphasis(out, text, options) {
        if (!text || !text.s.length)
            return 0;
        out.s += '<strong><em>' + text.s + '</em></strong>';
        return 1;
    }
    // int (*strikethrough)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_strikethrough(out, text, options) {
        if (!text || !text.s.length)
            return 0;
        out.s += '<del>' + text.s + '</del>';
        return 1;
    }
    // int (*superscript)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_superscript(out, text, options) {
        if (!text || !text.s.length)
            return 0;
        out.s += '<sup>' + text.s + '</sup>';
        return 1;
    }
    /* low level callbacks - NULL copies input directly into the output */
    //do not use
    // void (*entity)(struct buf *ob, const struct buf *entity, void *opaque);
    // function cb_entity(out, entity, options) {}
    // void (*normal_text)(struct buf *ob, const struct buf *text, void *opaque);
    function cb_normal_text(out, text, options) {
        if (text)
            escape_html(out, text.s, false);
    }
    // toc_header(struct buf *ob, const struct buf *text, int level, void *opaque)
    function cb_toc_header(out, text, level, options) {
        /* set the level offset if this is the first header
         * we're parsing for the document */
        if (options.tocData.currentLevel == 0) {
            out.s += '<div class="toc">\n';
            options.tocData.levelOffset = level - 1;
        }
        level -= options.tocData.levelOffset;
        if (level > options.tocData.currentLevel) {
            while (level > options.tocData.currentLevel) {
                out.s += '<ul>\n<li>\n';
                options.tocData.currentLevel++;
            }
        }
        else if (level < options.tocData.currentLevel) {
            out.s += '</li>\n';
            while (level < options.tocData.currentLevel) {
                out.s += '</ul>\n</li>\n';
                options.tocData.currentLevel--;
            }
            out.s += '<li>\n';
        }
        else {
            out.s += '</li>\n<li>\n';
        }
        out.s += '<a href="#';
        if (options.toc_id_prefix)
            out.s += options.toc_id_prefix;
        out.s += 'toc_' + (options.tocData.headerCount++) + '">';
        if (text)
            escape_html(out, text.s, false);
        out.s += '</a>\n';
    }
    //toc_link(struct buf *ob, const struct buf *link, const struct buf *title, const struct buf *content, void *opaque)
    function cb_toc_link(out, link, title, content, options) {
        if (content && content.s)
            out.s += content.s;
        return 1;
    }
    // reset_toc(struct buf *ob, void *opaque)
    function cb_reset_toc(out, options) {
        options.tocData = {
            headerCount: 0,
            currentLevel: 0,
            levelOffset: 0
        };
    }
    //toc_finalize(struct buf *ob, void *opaque)
    function cb_toc_finalize(out, options) {
        var hasToc = false;
        while (options.tocData.currentLevel > 0) {
            out.s += '</li>\n</ul>\n';
            options.tocData.currentLevel--;
            hasToc = true;
        }
        if (hasToc) {
            out.s += '</div>\n';
        }
        cb_reset_toc(out, options);
    }
    /* header and footer */
    // doc_header(Buffer out}, context);
    //        doc_header: null,
    //    doc_footer(Buffer out, context);
    //        doc_footer: null
    /* char_emphasis • single and double emphasis parsing */
    //Buffer, md, str, int
    function char_emphasis(out, md, data_, offset) {
        var data = data_.slice(offset);
        var size = data.length;
        var c = data[0];
        var ret;
        if (size > 2 && data[1] != c) {
            /* whitespace cannot follow an opening emphasis;
             * strikethrough only takes two characters '~~' */
            if (c == '~' || _isspace(data[1]) || (ret = parse_emph1(out, md, data, c)) == 0)
                return 0;
            return ret + 1;
        }
        if (data.length > 3 && data[1] == c && data[2] != c) {
            if (_isspace(data[2]) || (ret = parse_emph2(out, md, data, c)) == 0)
                return 0;
            return ret + 2;
        }
        if (data.length > 4 && data[1] == c && data[2] == c && data[3] != c) {
            if (c == '~' || _isspace(data[3]) || (ret = parse_emph3(out, md, data, c)) == 0)
                return 0;
            return ret + 3;
        }
        return 0;
    }
    /* char_codespan - '`' parsing a code span (assuming codespan != 0) */
    function char_codespan(out, md, data_, offset) {
        var data = data_.slice(offset);
        var end, nb = 0, i, f_begin, f_end;
        /* counting the number of backticks in the delimiter */
        while (nb < data.length && data[nb] == '`')
            nb++;
        /* finding the next delimiter */
        i = 0;
        for (end = nb; end < data.length && i < nb; end++) {
            if (data[end] == '`')
                i++;
            else
                i = 0;
        }
        if (i < nb && end >= data.length)
            return 0; /* no matching delimiter */
        /* trimming outside whitespaces */
        f_begin = nb;
        while (f_begin < end && data[f_begin] == ' ')
            f_begin++;
        f_end = end - nb;
        while (f_end > nb && data[f_end - 1] == ' ')
            f_end--;
        /* real code span */
        if (f_begin < f_end) {
            var work = new Buffer(data.slice(f_begin, f_end));
            if (!md.callbacks.codespan(out, work, md.context))
                end = 0;
        }
        else {
            if (!md.callbacks.codespan(out, null, md.context))
                end = 0;
        }
        return end;
    }
    /* char_linebreak - '\n' preceded by two spaces (assuming linebreak != 0) */
    function char_linebreak(out, md, data_, offset) {
        var data = data_.slice(offset);
        if (offset < 2 || data_[offset - 1] != ' ' || data_[offset - 2] != ' ')
            return 0;
        /* removing the last space from ob and rendering */
        var len = out.s.length;
        while (len && out.s[len - 1] == ' ')
            len--;
        out.s = out.s.slice(0, len);
        return md.callbacks.linebreak(out, md.context) ? 1 : 0;
    }
    /* char_link - '[': parsing a link or an image */
    function char_link(out, md, data_, offset) {
        var data = data_.slice(offset);
        var is_img = (offset && data_[offset - 1] == '!'), level;
        var i = 1, txt_e, link_b = 0, link_e = 0, title_b = 0, title_e = 0;
        //4 bufs
        var content = null;
        var link = null;
        var title = null;
        var u_link = null;
        var org_work_size = md.spanStack.length;
        var text_has_nl = 0, ret = 0;
        var in_title = 0, qtype = 0;
        function cleanup() {
            md.spanStack.length = org_work_size;
            return ret ? i : 0;
        }
        /* checking whether the correct renderer exists */
        if ((is_img && !md.callbacks.image) || (!is_img && !md.callbacks.link))
            return cleanup();
        /* looking for the matching closing bracket */
        for (level = 1; i < data.length; i++) {
            if (data[i] == '\n')
                text_has_nl = 1;
            else if (data[i - 1] == '\\')
                continue;
            else if (data[i] == '[')
                level++;
            else if (data[i] == ']') {
                level--;
                if (level <= 0)
                    break;
            }
        }
        if (i >= data.length)
            return cleanup();
        txt_e = i;
        i++;
        /* skip any amount of whitespace or newline */
        /* (this is much more laxist than original markdown syntax) */
        while (i < data.length && _isspace(data[i]))
            i++;
        /* inline style link */
        if (i < data.length && data[i] == '(') {
            /* skipping initial whitespace */
            i++;
            while (i < data.length && _isspace(data[i]))
                i++;
            link_b = i;
            /* looking for link end: ' " ) */
            while (i < data.length) {
                if (data[i] == '\\')
                    i += 2;
                else if (data[i] == ')')
                    break;
                else if (i >= 1 && _isspace(data[i - 1]) && (data[i] == '\'' || data[i] == '"'))
                    break;
                else
                    i++;
            }
            if (i >= data.length)
                return cleanup();
            link_e = i;
            /* looking for title end if present */
            if (data[i] == '\'' || data[i] == '"') {
                qtype = data[i];
                in_title = 1;
                i++;
                title_b = i;
                while (i < data.length) {
                    if (data[i] == '\\')
                        i += 2;
                    else if (data[i] == qtype) {
                        in_title = 0;
                        i++;
                    }
                    else if ((data[i] == ')') && !in_title)
                        break;
                    else
                        i++;
                }
                if (i >= data.length)
                    return cleanup();
                /* skipping whitespaces after title */
                title_e = i - 1;
                while (title_e > title_b && _isspace(data[title_e]))
                    title_e--;
                /* checking for closing quote presence */
                if (data[title_e] != '\'' && data[title_e] != '"') {
                    title_b = title_e = 0;
                    link_e = i;
                }
            }
            /* remove whitespace at the end of the link */
            while (link_e > link_b && _isspace(data[link_e - 1]))
                link_e--;
            /* remove optional angle brackets around the link */
            if (data[link_b] == '<')
                link_b++;
            if (data[link_e - 1] == '>')
                link_e--;
            /* building escaped link and title */
            if (link_e > link_b) {
                link = new Buffer();
                md.spanStack.push(link);
                link.s += data.slice(link_b, link_e);
            }
            if (title_e > title_b) {
                title = new Buffer();
                md.spanStack.push(title);
                title.s += data.slice(title_b, title_e);
            }
            i++;
        }
        else if (i < data.length && data[i] == '[') {
            var id = new Buffer();
            var lr = null;
            /* looking for the id */
            i++;
            link_b = i;
            while (i < data.length && data[i] != ']')
                i++;
            if (i >= data.length)
                return cleanup();
            link_e = i;
            /* finding the link_ref */
            if (link_b == link_e) {
                if (text_has_nl) {
                    var b = new Buffer();
                    md.spanStack.push(b);
                    var j;
                    for (j = 1; j < txt_e; j++) {
                        if (data[j] != '\n')
                            b.s += data[j];
                        else if (data[j - 1] != ' ')
                            b.s += ' ';
                    }
                    id.s = b.s;
                }
                else {
                    id.s = data.slice(1);
                }
            }
            else {
                id.s = data.slice(link_b, link_e);
            }
            //TODO
            lr = md.refs[id.s];
            if (!lr)
                return cleanup();
            /* keeping link and title from link_ref */
            link = lr.link;
            title = lr.title;
            i++;
        }
        else {
            var id = new Buffer();
            var lr = null;
            /* crafting the id */
            if (text_has_nl) {
                var b = new Buffer();
                md.spanStack.push(b);
                var j;
                for (j = 1; j < txt_e; j++) {
                    if (data[j] != '\n')
                        b.s += data[j];
                    else if (data[j - 1] != ' ')
                        b.s += ' ';
                }
                id.s = b.s;
            }
            else {
                id.s = data.slice(1, txt_e);
            }
            /* finding the link_ref */
            lr = md.refs[id.s];
            if (!lr)
                return cleanup();
            /* keeping link and title from link_ref */
            link = lr.link;
            title = lr.title;
            /* rewinding the whitespace */
            i = txt_e + 1;
        }
        /* building content: img alt is escaped, link content is parsed */
        if (txt_e > 1) {
            content = new Buffer();
            md.spanStack.push(content);
            if (is_img) {
                content.s += data.slice(1, txt_e);
            }
            else {
                /* disable autolinking when parsing inline the
                 * content of a link */
                md.inLinkBody = 1;
                parse_inline(content, md, data.slice(1, txt_e));
                md.inLinkBody = 0;
            }
        }
        if (link) {
            u_link = new Buffer();
            md.spanStack.push(u_link);
            unscape_text(u_link, link);
        }
        else {
            return cleanup();
        }
        /* calling the relevant rendering function */
        if (is_img) {
            if (out.s.length && out.s[out.s.length - 1] == '!')
                out.s = out.s.slice(0, -1);
            ret = md.callbacks.image(out, u_link, title, content, md.context);
        }
        else {
            ret = md.callbacks.link(out, u_link, title, content, md.context);
        }
        /* cleanup */
        // cleanup:
        //     rndr->work_bufs[BUFFER_SPAN].size = (int)org_work_size;
        // return ret ? i : 0;
        return cleanup();
    }
    /* char_langle_tag - '<' when tags or autolinks are allowed */
    function char_langle_tag(out, md, data_, offset) {
        var data = data_.slice(offset);
        var altype = { p: MKDA_NOT_AUTOLINK };
        var end = tag_length(data, altype);
        var work = new Buffer(data.slice(0, end));
        var ret = 0;
        if (end > 2) {
            if (md.callbacks.autolink && altype.p != MKDA_NOT_AUTOLINK) {
                var u_link = new Buffer();
                md.spanStack.push(u_link);
                work.s = data.substr(1, end - 2);
                unscape_text(u_link, work);
                ret = md.callbacks.autolink(out, u_link, altype.p, md.context);
                md.spanStack.pop();
            }
            else if (md.callbacks.raw_html_tag)
                ret = md.callbacks.raw_html_tag(out, work, md.context);
        }
        if (!ret)
            return 0;
        else
            return end;
    }
    /* char_escape - '\\' backslash escape */
    function char_escape(out, md, data_, offset) {
        var data = data_.slice(offset);
        var escape_chars = "\\`*_{}[]()#+-.!:|&<>/^~";
        var work = new Buffer();
        if (data.length > 1) {
            if (escape_chars.indexOf(data[1]) == -1)
                return 0;
            if (md.callbacks.normal_text) {
                work.s = data[1];
                md.callbacks.normal_text(out, work, md.context);
            }
            else
                out.s += data[1];
        }
        else if (data.length == 1) {
            out.s += data[0];
        }
        return 2;
    }
    /* char_entity - '&' escaped when it doesn't belong to an entity */
    //-/* valid entities are assumed to be anything matching &#?[A-Za-z0-9]+; */
    function char_entity(out, md, data_, offset) {
        var data = data_.slice(offset);
        var end = 1, content_start, content_end;
        var numeric = false, hex = false, entity_base, entity_val;
        var work = new Buffer();
        if (end < data.length && data[end] === '#') {
            numeric = true;
            end++;
        }
        if (end < data.length && numeric && data[end].toLowerCase() === 'x') {
            hex = true;
            end++;
        }
        content_start = end;
        while (end < data.length) {
            var c = data[end];
            if (hex) {
                if (!isxdigit(c))
                    break;
            }
            else if (numeric) {
                if (!isdigit(c))
                    break;
            }
            else if (!isalnum(c)) {
                break;
            }
            end++;
        }
        if (end > content_start && end < data.length && data[end] === ';') {
            /* well formed entity */
            end++;
        }
        else {
            return 0; /* not an entity */
        }
        /* way too long to be a valid numeric entity */
        if (numeric && content_end - content_start > MAX_NUM_ENTITY_LEN) {
            return 0;
        }
        /* Validate the entity's contents */
        if (numeric) {
            if (hex)
                entity_base = 16;
            else
                entity_base = 10;
            entity_val = parseInt(data.slice(content_start), entity_base);
            if (!is_valid_numeric_entity(entity_val))
                return 0;
        }
        else {
            if (VALID_ENTITIES.indexOf(data.slice(0, end)) === -1)
                return 0;
        }
        if (md.callbacks.entity) {
            work.s = data.slice(0, end);
            md.callbacks.entity(out, work, md.context);
        }
        else
            out.s += data.slice(0, end);
        return end;
    }
    function char_autolink_url(out, md, data_, offset) {
        var data = data_.slice(offset);
        var link = null;
        var link_len, rewind = { p: null };
        if (!md.callbacks.autolink || md.inLinkBody)
            return 0;
        link = new Buffer();
        md.spanStack.push(link);
        if ((link_len = sd_autolink__url(rewind, link, data_, offset, data.length, 0)) > 0) {
            if (rewind.p > 0)
                out.truncate(out.s.length - rewind.p);
            md.callbacks.autolink(out, link, MKDA_NORMAL, md.context);
        }
        md.spanStack.pop();
        return link_len;
    }
    function char_autolink_email(out, md, data_, offset) {
        var data = data_.slice(offset);
        var link = null;
        var link_len, rewind = { p: null };
        if (!md.callbacks.autolink || md.inLinkBody)
            return 0;
        link = new Buffer();
        md.spanStack.push(link);
        if ((link_len = sd_autolink__email(rewind, link, data_, offset, data.length, 0)) > 0) {
            if (rewind.p > 0)
                out.truncate(out.s.length - rewind.p);
            md.callbacks.autolink(out, link, MKDA_EMAIL, md.context);
        }
        md.spanStack.pop();
        return link_len;
    }
    function char_autolink_www(out, md, data_, offset) {
        var data = data_.slice(offset);
        var link = null, link_url = null, link_text = null;
        var link_len, rewind = { p: null };
        if (!md.callbacks.link || md.inLinkBody)
            return 0;
        link = new Buffer();
        md.spanStack.push(link);
        if ((link_len = sd_autolink__www(rewind, link, data_, offset, data.length, 0)) > 0) {
            link_url = new Buffer();
            md.spanStack.push(link_url);
            link_url.s += 'http://';
            link_url.s += link.s;
            if (rewind.p > 0)
                out.truncate(out.s.length - rewind.p);
            if (md.callbacks.normal_text) {
                link_text = new Buffer();
                md.spanStack.push(link_text);
                md.callbacks.normal_text(link_text, link, md.context);
                md.callbacks.link(out, link_url, null, link_text, md.context);
                md.spanStack.pop();
            }
            else {
                md.callbacks.link(out, link_url, null, link, md.context);
            }
            md.spanStack.pop();
        }
        md.spanStack.pop();
        return link_len;
    }
    function char_autolink_subreddit_or_username(out, md, data_, offset) {
        var data = data_.slice(offset);
        var link = null;
        var link_len, rewind = { p: null };
        if (!md.callbacks.autolink || md.inLinkBody)
            return 0;
        link = new Buffer();
        md.spanStack.push(link);
        if ((link_len = sd_autolink__subreddit(rewind, link, data_, offset, data.length)) > 0) {
            //don't slice because the rewind pointer will always be 0
            if (rewind.p > 0)
                out.truncate(out.s.length - rewind.p);
            md.callbacks.autolink(out, link, MKDA_NORMAL, md.context);
        }
        else if ((link_len = sd_autolink__username(rewind, link, data_, offset, data.length)) > 0) {
            //don't slice because the rewind pointer will always be 0
            if (rewind.p > 0)
                out.truncate(out.s.length - rewind.p);
            md.callbacks.autolink(out, link, MKDA_NORMAL, md.context);
        }
        md.spanStack.pop();
        return link_len;
    }
    function char_superscript(out, md, data_, offset) {
        var data = data_.slice(offset);
        var size = data.length;
        var sup_start, sup_len;
        var sup = null;
        if (!md.callbacks.superscript)
            return 0;
        if (size < 2)
            return 0;
        if (data[1] == '(') {
            sup_start = sup_len = 2;
            while (sup_len < size && data[sup_len] != ')' && data[sup_len - 1] != '\\')
                sup_len++;
            if (sup_len == size)
                return 0;
        }
        else {
            sup_start = sup_len = 1;
            while (sup_len < size && !_isspace(data[sup_len]))
                sup_len++;
        }
        if (sup_len - sup_start == 0)
            return (sup_start == 2) ? 3 : 0;
        sup = new Buffer();
        md.spanStack.push(sup);
        parse_inline(sup, md, data.slice(sup_start, sup_len));
        md.callbacks.superscript(out, sup, md.context);
        md.spanStack.pop();
        return (sup_start == 2) ? sup_len + 1 : sup_len;
    }
    var markdown_char_ptrs = [
        null,
        char_emphasis,
        char_codespan,
        char_linebreak,
        char_link,
        char_langle_tag,
        char_escape,
        char_entity,
        char_autolink_url,
        char_autolink_email,
        char_autolink_www,
        char_autolink_subreddit_or_username,
        char_superscript
    ];
    var MKD_LIST_ORDERED = 1;
    var MKD_LI_BLOCK = 2; /* <li> containing block data */
    var MKD_LI_END = 8; /* internal list flag */
    var enumCounter = 0;
    var MD_CHAR_NONE = enumCounter++;
    var MD_CHAR_EMPHASIS = enumCounter++;
    var MD_CHAR_CODESPAN = enumCounter++;
    var MD_CHAR_LINEBREAK = enumCounter++;
    var MD_CHAR_LINK = enumCounter++;
    var MD_CHAR_LANGLE = enumCounter++;
    var MD_CHAR_ESCAPE = enumCounter++;
    var MD_CHAR_ENTITITY = enumCounter++;
    var MD_CHAR_AUTOLINK_URL = enumCounter++;
    var MD_CHAR_AUTOLINK_EMAIL = enumCounter++;
    var MD_CHAR_AUTOLINK_WWW = enumCounter++;
    var MD_CHAR_AUTOLINK_SUBREDDIT_OR_USERNAME = enumCounter++;
    var MD_CHAR_SUPERSCRIPT = enumCounter++;
    var SD_AUTOLINK_SHORT_DOMAINS = (1 << 0);
    enumCounter = 0;
    var MKDA_NOT_AUTOLINK = enumCounter++; /* used internally when it is not an autolink*/
    var MKDA_NORMAL = enumCounter++; /* normal http/http/ftp/mailto/etc link */
    var MKDA_EMAIL = enumCounter++; /* e-mail link without explit mailto: */
    var MKDEXT_NO_INTRA_EMPHASIS = (1 << 0);
    var MKDEXT_TABLES = (1 << 1);
    var MKDEXT_FENCED_CODE = (1 << 2);
    var MKDEXT_AUTOLINK = (1 << 3);
    var MKDEXT_STRIKETHROUGH = (1 << 4);
    // var MKDEXT_LAX_HTML_BLOCKS = (1 << 5);
    var MKDEXT_SPACE_HEADERS = (1 << 6);
    var MKDEXT_SUPERSCRIPT = (1 << 7);
    var MKDEXT_LAX_SPACING = (1 << 8);
    var MKDEXT_NO_EMAIL_AUTOLINK = (1 << 9);
    var HTML_SKIP_HTML = (1 << 0);
    var HTML_SKIP_STYLE = (1 << 1);
    var HTML_SKIP_IMAGES = (1 << 2);
    var HTML_SKIP_LINKS = (1 << 3);
    var HTML_EXPAND_TABS = (1 << 4);
    var HTML_SAFELINK = (1 << 5);
    var HTML_TOC = (1 << 6);
    var HTML_HARD_WRAP = (1 << 7);
    var HTML_USE_XHTML = (1 << 8);
    var HTML_ESCAPE = (1 << 9);
    var HTML_ALLOW_ELEMENT_WHITELIST = (1 << 10);
    var MKD_TABLE_ALIGN_L = 1;
    var MKD_TABLE_ALIGN_R = 2;
    var MKD_TABLE_ALIGN_CENTER = 3;
    var MKD_TABLE_ALIGNMASK = 3;
    var MKD_TABLE_HEADER = 4;
    var HTML_TAG_NONE = 0;
    var HTML_TAG_OPEN = 1;
    var HTML_TAG_CLOSE = 2;
    /**
     * A string buffer wrapper because JavaScript doesn't have mutable strings.
     * @constructor
     * @param {string=} str Optional string to initialize the Buffer with.
     */
    var Buffer = function (str) {
        this.s = str || "";
    };
    /**
     */
    Buffer.prototype.truncate = function (size) {
        if (this.s.length < size)
            throw new RangeError("Buffer smaller than desired size");
        if (size < 0)
            throw new RangeError("Size argument is negative");
        this.s = this.s.slice(0, size);
    };
    /**
     * A Markdown parser object.
     * @constructor
     */
    function Markdown() {
        //Becase javascript strings are immutable they must be wrapped with Buffer()
        this.spanStack = [];
        this.blockStack = [];
        this.extensions = MKDEXT_NO_INTRA_EMPHASIS | MKDEXT_SUPERSCRIPT | MKDEXT_AUTOLINK | MKDEXT_STRIKETHROUGH | MKDEXT_TABLES | MKDEXT_TABLES;
        var renderer = getRedditRenderer();
        this.context = renderer.context;
        this.callbacks = renderer.callbacks;
        this.inLinkBody = 0;
        this.activeChars = {};
        this.refs = {};
        this.nestingLimit = 16;
        this.maxTableCols = 64;
    }
    ;
    /* is_empty - returns the line length when it is empty, 0 otherwise */
    function is_empty(data) {
        var i;
        for (i = 0; i < data.length && data[i] != '\n'; i++)
            if (data[i] != ' ')
                return 0;
        return i + 1;
    }
    /* is_hrule - returns whether a line is a horizontal rule */
    function is_hrule(data) {
        var i = 0, n = 0;
        var c;
        /* skipping initial spaces */
        if (data.length < 3)
            return 0;
        if (data[0] == ' ') {
            i++;
            if (data[1] == ' ') {
                i++;
                if (data[2] == ' ') {
                    i++;
                }
            }
        }
        /* looking at the hrule uint8_t */
        if (i + 2 >= data.length
            || (data[i] != '*' && data[i] != '-' && data[i] != '_'))
            return 0;
        c = data[i];
        /* the whole line must be the char or whitespace */
        while (i < data.length && data[i] != '\n') {
            if (data[i] == c)
                n++;
            else if (data[i] != ' ')
                return 0;
            i++;
        }
        return n >= 3;
    }
    /* check if a line begins with a code fence; return the
     * width if it is */
    function prefix_codefence(data) {
        var i = 0, n = 0;
        var c;
        /* skipping initial spaces */
        if (data.length < 3)
            return 0;
        if (data[0] == ' ') {
            i++;
            if (data[1] == ' ') {
                i++;
                if (data[2] == ' ') {
                    i++;
                }
            }
        }
        /* looking at the hrule uint8_t */
        if (i + 2 >= data.length || !(data[i] == '~' || data[i] == '`'))
            return 0;
        c = data[i];
        /* the whole line must be the uint8_t or whitespace */
        while (i < data.length && data[i] == c) {
            n++;
            i++;
        }
        if (n < 3)
            return 0;
        return i;
    }
    /* check if a line is a code fence; return its size if it */
    function is_codefence(data, syntax) {
        var i = 0, syn_len = 0;
        i = prefix_codefence(data);
        if (i == 0)
            return 0;
        while (i < data.length && data[i] == ' ')
            i++;
        var syn_start;
        //syn_start = data + i;
        syn_start = i;
        if (i < data.length && data[i] == '{') {
            i++;
            syn_start++;
            while (i < data.length && data[i] != '}' && data[i] != '\n') {
                syn_len++;
                i++;
            }
            if (i == data.length || data[i] != '}')
                return 0;
            /* strip all whitespace at the beginning and the end
             * of the {} block */
            /*remember not to remove the +0, it helps me keep syncronised with snudown*/
            while (syn_len > 0 && _isspace(data[syn_start + 0])) {
                syn_start++;
                syn_len--;
            }
            // while (syn_len > 0 && _isspace(syn_start[syn_len - 1]))
            while (syn_len > 0 && _isspace(data[syn_start + syn_len - 1]))
                syn_len--;
            i++;
        }
        else {
            while (i < data.length && !_isspace(data[i])) {
                syn_len++;
                i++;
            }
        }
        if (syntax)
            syntax.s = data.substr(syn_start, syn_len);
        // syntax->size = syn;
        while (i < data.length && data[i] != '\n') {
            if (!_isspace(data[i]))
                return 0;
            i++;
        }
        return i + 1;
    }
    /* find_emph_char - looks for the next emph uint8_t, skipping other constructs */
    function find_emph_char(data, c) {
        var i = 1;
        while (i < data.length) {
            while (i < data.length && data[i] != c && data[i] != '`' && data[i] != '[')
                i++;
            if (i == data.length)
                return 0;
            if (data[i] == c)
                return i;
            /* not counting escaped chars */
            if (i && data[i - 1] == '\\') {
                i++;
                continue;
            }
            if (data[i] == '`') {
                var span_nb = 0, bt;
                var tmp_i = 0;
                /* counting the number of opening backticks */
                while (i < data.length && data[i] == '`') {
                    i++;
                    span_nb++;
                }
                if (i >= data.length)
                    return 0;
                /* finding the matching closing sequence */
                bt = 0;
                while (i < data.length && bt < span_nb) {
                    if (!tmp_i && data[i] == c)
                        tmp_i = i;
                    if (data[i] == '`')
                        bt++;
                    else
                        bt = 0;
                    i++;
                }
                if (i >= data.length)
                    return tmp_i;
            }
            else if (data[i] == '[') {
                var tmp_i = 0;
                var cc;
                i++;
                while (i < data.length && data[i] != ']') {
                    if (!tmp_i && data[i] == c)
                        tmp_i = i;
                    i++;
                }
                i++;
                while (i < data.length && (data[i] == ' ' || data[i] == '\n'))
                    i++;
                if (i >= data.length)
                    return tmp_i;
                switch (data[i]) {
                    case '[':
                        cc = ']';
                        break;
                    case '(':
                        cc = ')';
                        break;
                    default:
                        if (tmp_i)
                            return tmp_i;
                        else
                            continue;
                }
                i++;
                while (i < data.length && data[i] != cc) {
                    if (!tmp_i && data[i] == c)
                        tmp_i = i;
                    i++;
                }
                if (i >= data.length)
                    return tmp_i;
                i++;
            }
        }
        return 0;
    }
    /* parse_emph1 - parsing single emphase */
    /* closed by a symbol not preceded by whitespace and not followed by symbol */
    function parse_emph1(out, md, data_, c) {
        var data = data_.slice(1);
        var i = 0, len;
        var r;
        if (!md.callbacks.emphasis)
            return 0;
        /* skipping one symbol if coming from emph3 */
        if (data.length > 1 && data[0] == c && data[1] == c)
            i = 1;
        while (i < data.length) {
            len = find_emph_char(data.slice(i), c);
            if (!len)
                return 0;
            i += len;
            if (i >= data.length)
                return 0;
            if (data[i] == c && !_isspace(data[i - 1])) {
                if ((md.extensions & MKDEXT_NO_INTRA_EMPHASIS) && (c == '_')) {
                    if (!(i + 1 == data.length || _isspace(data[i + 1]) || ispunct(data[i + 1])))
                        continue;
                }
                var work = new Buffer();
                md.spanStack.push(work);
                parse_inline(work, md, data.slice(0, i));
                r = md.callbacks.emphasis(out, work, md.context);
                md.spanStack.pop();
                return r ? i + 1 : 0;
            }
        }
        return 0;
    }
    /* parse_emph2 - parsing single emphase */
    function parse_emph2(out, md, data_, c) {
        var data = data_.slice(2);
        var i = 0, len;
        var r;
        var render_method = (c == '~') ? md.callbacks.strikethrough : md.callbacks.double_emphasis;
        if (!render_method)
            return 0;
        while (i < data.length) {
            len = find_emph_char(data.slice(i), c);
            if (!len)
                return 0;
            i += len;
            if (i + 1 < data.length && data[i] == c && data[i + 1] == c && i && !_isspace(data[i - 1])) {
                var work = new Buffer();
                md.spanStack.push(work);
                parse_inline(work, md, data.slice(0, i));
                r = render_method(out, work, md.context);
                md.spanStack.pop();
                return r ? i + 2 : 0;
            }
            i++;
        }
        return 0;
    }
    /* parse_emph3 • parsing single emphase */
    /* finds the first closing tag, and delegates to the other emph */
    function parse_emph3(out, md, data_, c) {
        var data = data_.slice(3);
        var i = 0, len;
        var r;
        while (i < data.length) {
            len = find_emph_char(data.slice(i), c);
            if (!len)
                return 0;
            i += len;
            /* skip whitespace preceded symbols */
            if (data[i] != c || _isspace(data[i - 1]))
                continue;
            if (i + 2 < data.length && data[i + 1] == c && data[i + 2] == c && md.callbacks.triple_emphasis) {
                /* triple symbol found */
                var work = new Buffer();
                md.spanStack.push(work);
                parse_inline(work, md, data.slice(0, i));
                r = md.callbacks.triple_emphasis(out, work, md.context);
                md.spanStack.pop();
                return r ? i + 3 : 0;
            }
            else if (i + 1 < data.length && data[i + 1] == c) {
                /* double symbol found, handing over to emph1 */
                len = parse_emph1(out, md, data_, c);
                if (!len)
                    return 0;
                else
                    return len - 2;
            }
            else {
                /* single symbol found, handing over to emph2 */
                len = parse_emph2(out, md, data_, c);
                if (!len)
                    return 0;
                else
                    return len - 1;
            }
        }
        return 0;
    }
    function is_atxheader(md, data) {
        if (data[0] != '#')
            return false;
        if (md.extensions & MKDEXT_SPACE_HEADERS) {
            var level = 0;
            while (level < data.length && level < 6 && data[level] == '#')
                level++;
            if (level < data.length && data[level] != ' ')
                return false;
        }
        return true;
    }
    /* is_headerline . returns whether the line is a setext-style hdr underline */
    function is_headerline(data) {
        var i = 0;
        var size = data.length;
        /* test of level 1 header */
        if (data[i] == '=') {
            for (i = 1; i < size && data[i] == '='; i++) { }
            while (i < size && data[i] == ' ')
                i++;
            return (i >= size || data[i] == '\n') ? 1 : 0;
        }
        /* test of level 2 header */
        if (data[i] == '-') {
            for (i = 1; i < size && data[i] == '-'; i++) { }
            while (i < size && data[i] == ' ')
                i++;
            return (i >= size || data[i] == '\n') ? 2 : 0;
        }
        return 0;
    }
    function is_next_headerline(data) {
        var size = data.length;
        var i = 0;
        while (i < size && data[i] != '\n')
            i++;
        if (++i >= size)
            return 0;
        return is_headerline(data.slice(i));
    }
    /* prefix_quote - returns blockquote prefix length */
    function prefix_quote(data) {
        var i = 0;
        var size = data.length;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == '>') {
            if (i + 1 < size && data[i + 1] == ' ')
                return i + 2;
            return i + 1;
        }
        return 0;
    }
    /* prefix_code • returns prefix length for block code*/
    function prefix_code(data) {
        if (data.length > 3 && data[0] == ' ' && data[1] == ' '
            && data[2] == ' ' && data[3] == ' ')
            return 4;
        return 0;
    }
    /* prefix_oli - returns ordered list item prefix */
    function prefix_oli(data) {
        var size = data.length;
        var i = 0;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == ' ')
            i++;
        if (i >= size || data[i] < '0' || data[i] > '9')
            return 0;
        while (i < size && data[i] >= '0' && data[i] <= '9')
            i++;
        if (i + 1 >= size || data[i] != '.' || data[i + 1] != ' ')
            return 0;
        if (is_next_headerline(data.slice(i)))
            return 0;
        return i + 2;
    }
    /* prefix_uli - returns ordered list item prefix */
    function prefix_uli(data) {
        var size = data.length;
        var i = 0;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == ' ')
            i++;
        if (i < size && data[i] == ' ')
            i++;
        if (i + 1 >= size ||
            (data[i] != '*' && data[i] != '+' && data[i] != '-') ||
            data[i + 1] != ' ')
            return 0;
        if (is_next_headerline(data.slice(i)))
            return 0;
        return i + 2;
    }
    /* is_mail_autolink - looks for the address part of a mail autolink and '>' */
    /* this is less strict than the original markdown e-mail address matching */
    function is_mail_autolink(data) {
        var i = 0, nb = 0;
        /* address is assumed to be: [-@._a-zA-Z0-9]+ with exactly one '@' */
        for (i = 0; i < data.length; ++i) {
            if (isalnum(data[i]))
                continue;
            switch (data[i]) {
                case '@':
                    nb++;
                case '-':
                case '.':
                case '_':
                    break;
                case '>':
                    return (nb == 1) ? i + 1 : 0;
                default:
                    return 0;
            }
        }
        return 0;
    }
    /* tag_length - returns the length of the given tag, or 0 is it's not valid */
    function tag_length(data, autolink) {
        var i, j;
        /* a valid tag can't be shorter than 3 chars */
        if (data.length < 3)
            return 0;
        /* begins with a '<' optionally followed by '/', followed by letter or number */
        if (data[0] != '<')
            return 0;
        i = (data[1] == '/') ? 2 : 1;
        if (!isalnum(data[i]))
            return 0;
        /* scheme test */
        autolink.p = MKDA_NOT_AUTOLINK;
        /* try to find the beginning of an URI */
        while (i < data.length && (isalnum(data[i]) || data[i] == '.' || data[i] == '+' || data[i] == '-'))
            i++;
        if (i > 1 && data[i] == '@') {
            if ((j = is_mail_autolink(data.slice(i))) != 0) {
                autolink.p = MKDA_EMAIL;
                return i + j;
            }
        }
        if (i > 2 && data[i] == ':') {
            autolink.p = MKDA_NORMAL;
            i++;
        }
        /* completing autolink test: no whitespace or ' or " */
        if (i >= data.length)
            autolink.p = MKDA_NOT_AUTOLINK;
        else if (autolink.p) {
            j = i;
            while (i < data.length) {
                if (data[i] == '\\')
                    i += 2;
                else if (data[i] == '>' || data[i] == '\'' ||
                    data[i] == '"' || data[i] == ' ' || data[i] == '\n')
                    break;
                else
                    i++;
            }
            if (i >= data.length)
                return 0;
            if (i > j && data[i] == '>')
                return i + 1;
            /* one of the forbidden chars has been found */
            autolink.p = MKDA_NOT_AUTOLINK;
        }
        /* looking for sometinhg looking like a tag end */
        while (i < data.length && data[i] != '>')
            i++;
        if (i >= data.length)
            return 0;
        return i + 1;
    }
    // parse_inline - parses inline markdown elements 
    //Buffer, md, String
    function parse_inline(out, md, data) {
        var i = 0, end = 0;
        var action = 0;
        var work = new Buffer();
        if (md.spanStack.length + md.blockStack.length > md.nestingLimit)
            return;
        while (i < data.length) {
            /* copying inactive chars into the output */
            while (end < data.length && !(action = md.activeChars[data[end]])) {
                end++;
            }
            if (md.callbacks.normal_text) {
                work.s = data.slice(i, end);
                md.callbacks.normal_text(out, work, md.context);
            }
            else
                out.s += data.slice(i, end);
            if (end >= data.length)
                break;
            i = end;
            end = markdown_char_ptrs[action](out, md, data, i);
            if (!end)
                end = i + 1;
            else {
                i += end;
                end = i;
            }
        }
    }
    /* parse_atxheader - parsing of atx-style headers */
    function parse_atxheader(out, md, data) {
        var level = 0;
        var i, end, skip;
        while (level < data.length && level < 6 && data[level] == '#')
            level++;
        for (i = level; i < data.length && data[i] == ' '; i++) { }
        for (end = i; end < data.length && data[end] != '\n'; end++) { }
        skip = end;
        while (end && data[end - 1] == '#')
            end--;
        while (end && data[end - 1] == ' ')
            end--;
        if (end > i) {
            var work = new Buffer();
            md.spanStack.push(work);
            parse_inline(work, md, data.slice(i, end));
            if (md.callbacks.header)
                md.callbacks.header(out, work, level, md.context);
            md.spanStack.pop();
        }
        return skip;
    }
    /* htmlblock_end - checking end of HTML block : </tag>[ \t]*\n[ \t*]\n */
    /*    returns the length on match, 0 otherwise */
    // htmlblock_end(const char *tag, size_t tag_len, struct sd_markdown *rndr, uint8_t *data, size_t size)
    function htmlblock_end(tag, md, data) {
        var i, w;
        /* checking if tag is a match */
        //tag should already be lowercase
        if (tag.length + 3 >= data.length ||
            data.slice(2).toLowerCase() != tag ||
            data[tag.length + 2] != '>')
            return 0;
        /* checking white lines */
        i = tag.length + 3;
        w = 0;
        if (i < data.length && (w = is_empty(data.slice(i))) == 0)
            return 0; /* non-blank after tag */
        i += w;
        w = 0;
        if (i < data.length)
            w = is_empty(data.slice(i));
        return i + w;
    }
    /* parse_htmlblock - parsing of inline HTML block */
    //TODO
    function parse_htmlblock(out, md, data, do_render) {
        var i, j = 0;
        var curtag = null;
        var found;
        var work = new Buffer(data);
        /* identification of the opening tag */
        if (data.length < 2 || data[0] != '<')
            return 0;
        i = 1;
        while (i < data.length && data[i] != '>' && data[i] != ' ')
            i++;
        if (i < data.length)
            curtag = find_block_tag(data.slice(1));
        /* handling of special cases */
        if (!curtag) {
            /* HTML comment, laxist form */
            if (data.length > 5 && data[1] == '!' && data[2] == '-' && data[3] == '-') {
                i = 5;
                while (i < data.length && !(data[i - 2] == '-' && data[i - 1] == '-' && data[i] == '>'))
                    i++;
                i++;
                if (i < data.length)
                    j = is_empty(data.slice(i));
                if (j) {
                    //TODO: HANDLE WORK!!!
                    // work.size = i + j;
                    work.s = data.slice(0, i + j);
                    if (do_render && md.callbacks.blockhtml)
                        md.callbacks.blockhtml(out, work, md.context);
                    return work.s.length;
                }
            }
            /* HR, which is the only self-closing block tag considered */
            if (data.length > 4 && (data[1] == 'h' || data[1] == 'H') && (data[2] == 'r' || data[2] == 'R')) {
                i = 3;
                while (i < data.length && data[i] != '>')
                    i++;
                if (i + 1 < data.length) {
                    i++;
                    j = is_empty(data.slice(i));
                    if (j) {
                        work.s = data.slice(0, i + j);
                        if (do_render && md.callbacks.blockhtml)
                            md.callbacks.blockhtml(out, work, md.context);
                        return work.s.length;
                    }
                }
            }
            /* no special case recognised */
            return 0;
        }
        /* looking for an unindented matching closing tag */
        /*    followed by a blank line */
        i = 1;
        found = 0;
        /* if not found, trying a second pass looking for indented match */
        /* but not if tag is "ins" or "del" (following original Markdown.pl) */
        if (curtag != 'ins' && curtag != 'del') {
            var tag_size = curtag.length;
            i = 1;
            while (i < data.length) {
                i++;
                while (i < data.length && !(data[i - 1] == '<' && data[i] == '/'))
                    i++;
                if (i + 2 + tag_size >= data.length)
                    break;
                // j = htmlblock_end(tag, md, data + i - 1, size - i + 1);
                //TODO
                j = htmlblock_end(curtag, md, data.slice(i - 1));
                if (j) {
                    i += j - 1;
                    found = 1;
                    break;
                }
            }
        }
        if (!found)
            return 0;
        /* the end of the block has been found */
        //TODO:
        work.s = work.s.slice(0, i);
        if (do_render && md.callbacks.blockhtml)
            md.callbacks.blockhtml(out, work, md.context);
        return i;
    }
    /* parse_blockquote - handles parsing of a blockquote fragment */
    function parse_blockquote(out, md, data) {
        var size = data.length;
        var beg, end = 0, pre, work_size = 0;
        // uint8_t *work_data = 0;
        var work_data = "";
        var work_data_cursor = 0;
        var out_ = new Buffer();
        md.blockStack.push(out_);
        beg = 0;
        while (beg < size) {
            for (end = beg + 1; end < size && data[end - 1] != '\n'; end++) { }
            pre = prefix_quote(data.slice(beg, end));
            if (pre)
                beg += pre; /* skipping prefix */
            else if (is_empty(data.slice(beg, end)) &&
                (end >= size || (prefix_quote(data.slice(end)) == 0 &&
                    !is_empty(data.slice(end)))))
                break;
            if (beg < end) {
                /* bufput(work, data + beg, end - beg); */
                //TODO:!!! FIX THIS!!!
                // if (!work_data) work_data = data.slice(beg, end);
                //     work_data = data + beg;
                work_data += data.slice(beg, end);
                /*
                if (!work_data) work_data_cursor = beg;
                else if (beg != work_data_cursor + work_size)
                    work_data += data.slice(beg, end);
                    */
                // memmove(work_data + work_size, data + beg, end - beg);
                work_size += end - beg;
            }
            beg = end;
        }
        parse_block(out_, md, work_data);
        if (md.callbacks.blockquote)
            md.callbacks.blockquote(out, out_, md.context);
        md.blockStack.pop();
        return end;
    }
    /* parse_paragraph - handles parsing of a regular paragraph */
    function parse_paragraph(out, md, data) {
        var i = 0, end = 0;
        var level = 0;
        var size = data.length;
        var work = new Buffer(data);
        while (i < size) {
            for (end = i + 1; end < size && data[end - 1] != '\n'; end++) { }
            if (prefix_quote(data.slice(i, end)) != 0) {
                end = i;
                break;
            }
            var tempdata = data.slice(i);
            if (is_empty(tempdata) || (level = is_headerline(tempdata)) != 0)
                break;
            if (is_empty(tempdata))
                break;
            if ((level = is_headerline(tempdata)) != 0)
                break;
            if (is_atxheader(md, tempdata)
                || is_hrule(tempdata)
                || prefix_quote(tempdata)) {
                end = i;
                break;
            }
            /*
             * Early termination of a paragraph with the same logic
             * as markdown 1.0.0. If this logic is applied, the
             * Markdown 1.0.3 test suite wont pass cleanly.
             *
             * :: If the first character in a new line is not a letter
             * lets check to see if there's some kind of block starting here
             */
            if ((md.extensions & MKDEXT_LAX_SPACING) && !isalnum(data[i])) {
                if (prefix_oli(tempdata)
                    || prefix_uli(tempdata)) {
                    end = i;
                    break;
                }
                /* see if an html block starts here */
                if (data[i] == '<' && md.callbacks.blockhtml
                    && parse_htmlblock(out, md, tempdata, 0)) {
                    end = i;
                    break;
                }
                /* see if a code fence starts here */
                if ((md.extensions && MKDEXT_FENCED_CODE) != 0
                    && is_codefence(tempdata, null) != 0) {
                    end = i;
                    break;
                }
            }
            i = end;
        }
        var work_size = i;
        while (work_size && data[work_size - 1] == '\n')
            work_size--;
        work.s = work.s.slice(0, work_size);
        if (!level) {
            var tmp = new Buffer();
            md.blockStack.push(tmp);
            parse_inline(tmp, md, work.s);
            if (md.callbacks.paragraph)
                md.callbacks.paragraph(out, tmp, md.context);
            md.blockStack.pop();
        }
        else {
            var header_work = null;
            if (work.size) {
                var beg;
                i = work.s.length;
                // var work_size = work.s.length - 1;
                // work.size -= 1;
                while (work_size && data[work_size] != '\n')
                    work_size -= 1;
                beg = work_size + 1;
                while (work_size && data[work_size - 1] == '\n')
                    work_size -= 1;
                work.s = work.s.slice(0, work_size);
                if (work_size > 0) {
                    var tmp = new Buffer();
                    md.blockStack.push(tmp);
                    parse_inline(tmp, md, work.s);
                    if (md.callbacks.paragraph)
                        md.callbacks.paragraph(out, tmp, md.context);
                    md.blockStack.pop();
                    work.s = work.s.slice(beg, i);
                }
                else
                    work.s = work.s.slice(0, i);
            }
            header_work = new Buffer();
            md.spanStack.push(header_work);
            parse_inline(header_work, md, work.s);
            if (md.callbacks.header)
                md.callbacks.header(out, header_work, level, md.context);
            md.spanStack.pop();
        }
        return end;
    }
    /* parse_fencedcode - handles parsing of a block-level code fragment */
    function parse_fencedcode(out, md, data) {
        var beg, end;
        var work = null;
        var lang = new Buffer();
        beg = is_codefence(data, lang);
        if (beg == 0)
            return 0;
        work = new Buffer();
        md.blockStack.push(work);
        while (beg < data.length) {
            var fence_end;
            var fence_trail = new Buffer();
            fence_end = is_codefence(data.slice(beg), fence_trail);
            if (fence_end != 0 && fence_trail.s.length == 0) {
                beg += fence_end;
                break;
            }
            for (end = beg + 1; end < data.length && data[end - 1] != '\n'; end++) { }
            if (beg < end) {
                /* verbatim copy to the working buffer,
                   escaping entities */
                var tempData = data.slice(beg, end);
                if (is_empty(tempData))
                    work.s += '\n';
                else
                    work.s += tempData;
            }
            beg = end;
        }
        if (work.s.length && work.s[work.s.length - 1] != '\n')
            work.s += '\n';
        if (md.callbacks.blockcode)
            md.callbacks.blockcode(out, work, lang.s.length ? lang : null, md.context);
        md.blockStack.pop();
        return beg;
    }
    function parse_blockcode(out, md, data) {
        var size = data.length;
        var beg, end, pre;
        var work = null;
        md.blockStack.push(work = new Buffer());
        beg = 0;
        while (beg < size) {
            for (end = beg + 1; end < size && data[end - 1] != '\n'; end++) { }
            ;
            pre = prefix_code(data.slice(beg, end));
            if (pre)
                beg += pre; /* skipping prefix */
            else if (!is_empty(data.slice(beg, end)))
                /* non-empty non-prefixed line breaks the pre */
                break;
            if (beg < end) {
                /* verbatim copy to the working buffer,
                   escaping entities */
                if (is_empty(data.slice(beg, end)))
                    work.s += '\n';
                else
                    work.s += data.slice(beg, end);
            }
            beg = end;
        }
        var work_size = work.s.length;
        while (work_size && work.s[work_size - 1] == '\n')
            work_size -= 1;
        work.s = work.s.slice(0, work_size);
        work.s += '\n';
        if (md.callbacks.blockcode)
            md.callbacks.blockcode(out, work, null, md.context);
        md.blockStack.pop();
        return beg;
    }
    /* parse_listitem - parsing of a single list item */
    /*    assuming initial prefix is already removed */
    //FLAGS is pointer
    function parse_listitem(out, md, data, flags) {
        var size = data.length;
        var work = null, inter = null;
        var beg = 0, end, pre, sublist = 0, orgpre = 0, i;
        var in_empty = 0, has_inside_empty = 0;
        var in_fence = 0;
        /* keeping track of the first indentation prefix */
        while (orgpre < 3 && orgpre < size && data[orgpre] == ' ')
            orgpre++;
        //TODO
        beg = prefix_uli(data);
        if (!beg)
            beg = prefix_oli(data);
        if (!beg)
            return 0;
        /* skipping to the beginning of the following line */
        end = beg;
        while (end < size && data[end - 1] != '\n')
            end++;
        /* getting working buffers */
        md.spanStack.push(work = new Buffer());
        md.spanStack.push(inter = new Buffer());
        /* putting the first line into the working buffer */
        work.s += data.slice(beg, end);
        beg = end;
        /* process the following lines */
        while (beg < size) {
            var has_next_uli, has_next_oli;
            end++;
            while (end < size && data[end - 1] != '\n')
                end++;
            /* process an empty line */
            if (is_empty(data.slice(beg, end))) {
                in_empty = 1;
                beg = end;
                continue;
            }
            /* calculating the indentation */
            i = 0;
            while (i < 4 && beg + i < end && data[beg + i] == ' ')
                i++;
            pre = i;
            //TODO: Cache this slice?
            if (md.flags & MKDEXT_FENCED_CODE) {
                if (is_codefence(data.slice(beg + i, end), null) != 0) {
                    in_fence = !in_fence;
                }
            }
            /* only check for new list items if we are **not** in a fenced code block */
            if (!in_fence) {
                has_next_uli = prefix_uli(data.slice(beg + i, end));
                has_next_oli = prefix_oli(data.slice(beg + i, end));
            }
            /* checking for ul/ol switch */
            if (in_empty && (((flags.p & MKD_LIST_ORDERED) && has_next_uli) ||
                (!(flags.p & MKD_LIST_ORDERED) && has_next_oli))) {
                flags.p |= MKD_LI_END;
                break; /* the following item must have same list type */
            }
            /* checking for a new item */
            if ((has_next_uli && !is_hrule(data.slice(beg + i, end))) || has_next_oli) {
                if (in_empty)
                    has_inside_empty = 1;
                if (pre == orgpre)
                    break; /* the same indentation */
                if (!sublist)
                    sublist = work.s.length;
            }
            else if (in_empty && pre == 0) {
                flags.p |= MKD_LI_END;
                break;
            }
            else if (in_empty) {
                work.s += '\n';
                has_inside_empty = 1;
            }
            in_empty = 0;
            /* adding the line without prefix into the working buffer */
            work.s += data.slice(beg + i, end);
            beg = end;
        }
        /* render of li contents */
        if (has_inside_empty)
            flags.p |= MKD_LI_BLOCK;
        if (flags.p & MKD_LI_BLOCK) {
            /* intermediate render of block li */
            if (sublist && sublist < work.s.length) {
                parse_block(inter, md, work.s.slice(0, sublist));
                parse_block(inter, md, work.s.slice(sublist));
            }
            else
                parse_block(inter, md, work.s);
        }
        else {
            //TODO:
            /* intermediate render of inline li */
            if (sublist && sublist < work.s.length) {
                parse_inline(inter, md, work.s.slice(0, sublist));
                parse_block(inter, md, work.s.slice(sublist));
            }
            else
                parse_inline(inter, md, work.s);
        }
        /* render of li itself */
        if (md.callbacks.listitem)
            md.callbacks.listitem(out, inter, flags.p, md.context);
        md.spanStack.pop();
        md.spanStack.pop();
        return beg;
    }
    /* parse_list - parsing ordered or unordered list block */
    function parse_list(out, md, data, flags) {
        var size = data.length;
        var i = 0, j;
        var work = null;
        md.blockStack.push(work = new Buffer());
        while (i < size) {
            var flag_p = { p: flags };
            j = parse_listitem(work, md, data.slice(i), flag_p);
            flags = flag_p.p;
            i += j;
            if (!j || (flags & MKD_LI_END))
                break;
        }
        if (md.callbacks.list)
            md.callbacks.list(out, work, flags, md.context);
        md.blockStack.pop();
        return i;
    }
    function parse_table_row(out, md, data, columns, header_flag) {
        var i = 0, col, cols_left;
        var row_work = null;
        if (!md.callbacks.table_cell || !md.callbacks.table_row)
            return;
        md.spanStack.push(row_work = new Buffer());
        if (i < data.length && data[i] == '|')
            i++;
        for (col = 0; col < columns.length && i < data.length; ++col) {
            var cell_start, cell_end;
            var cell_work;
            md.spanStack.push(cell_work = new Buffer());
            while (i < data.length && _isspace(data[i]))
                i++;
            cell_start = i;
            while (i < data.length && data[i] != '|')
                i++;
            cell_end = i - 1;
            while (cell_end > cell_start && _isspace(data[cell_end]))
                cell_end--;
            // parse_inline(cell_work, rndr, data + cell_start, 1 + cell_end - cell_start);
            parse_inline(cell_work, md, data.slice(cell_start, 1 + cell_end));
            md.callbacks.table_cell(row_work, cell_work, columns[col] | header_flag, md.context, 0);
            md.spanStack.pop();
            i++;
        }
        cols_left = columns.length - col;
        // for (; col < columns.length; ++col) {
        if (cols_left > 0) {
            var empty_cell = null;
            md.callbacks.table_cell(row_work, empty_cell, columns[col] | header_flag, md.context, cols_left);
        }
        md.callbacks.table_row(out, row_work, md.context);
        md.spanStack.pop();
    }
    function parse_table_header(out, md, data, columns) {
        var i = 0, col, header_end, under_end;
        var pipes = 0;
        while (i < data.length && data[i] != '\n')
            if (data[i++] == '|')
                pipes++;
        if (i == data.length || pipes == 0)
            return 0;
        header_end = i;
        while (header_end > 0 && _isspace(data[header_end - 1]))
            header_end--;
        if (data[0] == '|')
            pipes--;
        if (header_end && data[header_end - 1] == '|')
            pipes--;
        if (pipes + 1 > md.maxTableCols)
            return 0;
        //    columns.p = pipes + 1;
        //    column_data.p = new Array(columns.p);
        columns.p = new Array(pipes + 1);
        for (var k = 0; k < columns.p.length; k++)
            columns.p[k] = 0;
        /* Parse the header underline */
        i++;
        if (i < data.length && data[i] == '|')
            i++;
        under_end = i;
        while (under_end < data.length && data[under_end] != '\n')
            under_end++;
        for (col = 0; col < columns.p.length && i < under_end; ++col) {
            var dashes = 0;
            while (i < under_end && data[i] == ' ')
                i++;
            if (data[i] == ':') {
                i++;
                columns.p[col] |= MKD_TABLE_ALIGN_L;
                dashes++;
            }
            while (i < under_end && data[i] == '-') {
                i++;
                dashes++;
            }
            if (i < under_end && data[i] == ':') {
                i++;
                columns.p[col] |= MKD_TABLE_ALIGN_R;
                dashes++;
            }
            while (i < under_end && data[i] == ' ')
                i++;
            if (i < under_end && data[i] != '|')
                break;
            if (dashes < 1)
                break;
            i++;
        }
        if (col < columns.p.length)
            return 0;
        parse_table_row(out, md, data.slice(0, header_end), columns.p, MKD_TABLE_HEADER);
        return under_end + 1;
    }
    function parse_table(out, md, data) {
        var i;
        var header_work, body_work;
        var columns = { p: null };
        md.spanStack.push(header_work = new Buffer());
        md.blockStack.push(body_work = new Buffer());
        i = parse_table_header(header_work, md, data, columns);
        if (i > 0) {
            while (i < data.length) {
                var row_start;
                var pipes = 0;
                row_start = i;
                while (i < data.length && data[i] != '\n')
                    if (data[i++] == '|')
                        pipes++;
                if (pipes == 0 || i == data.length) {
                    i = row_start;
                    break;
                }
                parse_table_row(body_work, md, data.slice(row_start, i), columns.p, 0);
                i++;
            }
            if (md.callbacks.table)
                md.callbacks.table(out, header_work, body_work, md.context);
        }
        md.spanStack.pop();
        md.blockStack.pop();
        return i;
    }
    function parse_block(out, md, data) {
        var beg = 0, end, i;
        var textData;
        if (md.spanStack.length +
            md.blockStack.length > md.nestingLimit)
            return;
        while (beg < data.length) {
            textData = data.slice(beg);
            end = data.length - beg;
            if (is_atxheader(md, textData))
                beg += parse_atxheader(out, md, textData);
            else if (data[beg] == '<' && md.callbacks.blockhtml &&
                (i = parse_htmlblock(out, md, textData, 1)) != 0)
                beg += i;
            else if ((i = is_empty(textData)) != 0)
                beg += i;
            else if (is_hrule(textData)) {
                if (md.callbacks.hrule)
                    md.callbacks.hrule(out, md.context);
                while (beg < data.length && data[beg] != '\n')
                    beg++;
                beg++;
            }
            else if ((md.extensions & MKDEXT_FENCED_CODE) != 0 &&
                (i = parse_fencedcode(out, md, textData)) != 0)
                beg += i;
            else if ((md.extensions & MKDEXT_TABLES) != 0 &&
                (i = parse_table(out, md, textData)) != 0)
                beg += i;
            else if (prefix_quote(textData))
                beg += parse_blockquote(out, md, textData);
            else if (prefix_code(textData))
                beg += parse_blockcode(out, md, textData);
            else if (prefix_uli(textData))
                beg += parse_list(out, md, textData, 0);
            else if (prefix_oli(textData))
                beg += parse_list(out, md, textData, MKD_LIST_ORDERED);
            else {
                beg += parse_paragraph(out, md, textData);
            }
        }
    }
    function is_ref(data, beg, end, md) {
        /*    int n; */
        var i = 0;
        var idOffset, idEnd;
        var linkOffset, linkEnd;
        var titleOffset, titleEnd;
        var lineEnd;
        /* up to 3 optional leading spaces */
        if (beg + 3 >= end)
            return 0;
        if (data[beg] == ' ') {
            i = 1;
            if (data[beg + 1] == ' ') {
                i = 2;
                if (data[beg + 2] == ' ') {
                    i = 3;
                    if (data[beg + 3] == ' ')
                        return 0;
                }
            }
        }
        i += beg;
        /* id part: anything but a newline between brackets */
        if (data[i] != '[')
            return 0;
        i++;
        idOffset = i;
        while (i < end && data[i] != '\n' && data[i] != '\r' && data[i] != ']')
            i++;
        if (i >= end || data[i] != ']')
            return 0;
        idEnd = i;
        /* spacer: colon (space | tab)* newline? (space | tab)* */
        i++;
        if (i >= end || data[i] != ':')
            return 0;
        i++;
        while (i < end && data[i] == ' ')
            i++;
        if (i < end && (data[i] == '\n' || data[i] == '\r')) {
            i++;
            if (i < end && data[i] == '\r' && data[i - 1] == '\n')
                i++;
        }
        while (i < end && data[i] == ' ')
            i++;
        if (i >= end)
            return 0;
        /* link: whitespace-free sequence, optionally between angle brackets */
        if (data[i] == '<')
            i++;
        linkOffset = i;
        while (i < end && data[i] != ' ' && data[i] != '\n' && data[i] != '\r')
            i++;
        if (data[i - 1] == '>')
            linkEnd = i - 1;
        else
            linkEnd = i;
        /* optional spacer: (space | tab)* (newline | '\'' | '"' | '(' ) */
        while (i < end && data[i] == ' ')
            i++;
        if (i < end && data[i] != '\n' && data[i] != '\r'
            && data[i] != '\'' && data[i] != '"' && data[i] != '(')
            return 0;
        lineEnd = 0;
        /* computing end-of-line */
        if (i >= end || data[i] == '\r' || data[i] == '\n')
            lineEnd = i;
        if (i + 1 < end && data[i] == '\n' && data[i + 1] == '\r')
            lineEnd = i + 1;
        /* optional (space|tab)* spacer after a newline */
        if (lineEnd) {
            i = lineEnd + 1;
            while (i < end && data[i] == ' ')
                i++;
        }
        /* optional title: any non-newline sequence enclosed in '"()
           alone on its line */
        titleOffset = titleEnd = 0;
        if (i + 1 < end && (data[i] == '\'' || data[i] == '"' || data[i] == '(')) {
            i++;
            titleOffset = i;
            /* looking for EOL */
            while (i < end && data[i] != '\n' && data[i] != '\r')
                i++;
            if (i + 1 < end && data[i] == '\n' && data[i + 1] == '\r')
                titleEnd = i + 1;
            else
                titleEnd = i;
            /* stepping back */
            i -= 1;
            while (i > titleOffset && data[i] == ' ')
                i -= 1;
            if (i > titleOffset && (data[i] == '\'' || data[i] == '"' || data[i] == ')')) {
                lineEnd = titleEnd;
                titleEnd = i;
            }
        }
        if (!lineEnd || linkEnd == linkOffset)
            return 0; /* garbage after the link empty link */
        var id = data.slice(idOffset, idEnd);
        var link = data.slice(linkOffset, linkEnd);
        var title = null;
        if (titleEnd > titleOffset)
            title = data.slice(titleOffset, titleEnd);
        md.refs[id] = {
            id: id,
            link: new Buffer(link),
            title: new Buffer(title)
        };
        return lineEnd;
    }
    function expand_tabs(out, line) {
        var i = 0, tab = 0;
        while (i < line.length) {
            var org = i;
            while (i < line.length && line[i] != '\t') {
                i++;
                tab++;
            }
            if (i > org)
                out.s += line.slice(org, i);
            if (i >= line.length)
                break;
            do {
                out.s += ' ';
                tab++;
            } while (tab % 4);
            i++;
        }
    }
    /**
    Render markdown code to HTML.
    @param {string} source Markdown code.
    @returns {string} HTML code.
    */
    function render(source) {
        var text = new Buffer();
        var beg = 0, end;
        this.refs = {};
        while (beg < source.length) {
            if (end = is_ref(source, beg, source.length, this))
                beg = end;
            else {
                end = beg;
                while (end < source.length && source[end] != '\n' && source[end] != '\r')
                    end++;
                /* adding the line body if present */
                if (end > beg)
                    expand_tabs(text, source.slice(beg, end));
                while (end < source.length && (source[end] == '\n' || source[end] == '\r')) {
                    /* add one \n per newline */
                    if (source[end] == '\n' || (end + 1 < source.length && source[end + 1] != '\n'))
                        text.s += '\n';
                    end++;
                }
                beg = end;
            }
        }
        var out = new Buffer();
        /* second pass: actual rendering */
        if (this.callbacks.doc_header)
            this.callbacks.doc_header(out, this.context);
        if (text.s.length) {
            /* adding a final newline if not already present */
            if (text.s[text.s.length - 1] != '\n' && text.s[text.s.length - 1] != '\r')
                text.s += '\n';
            parse_block(out, this, text.s);
        }
        if (this.callbacks.doc_footer)
            this.callbacks.doc_footer(out, this.context);
        return out.s;
    }
    Markdown.prototype['render'] = render;
    /**
    Create a parser object using the given configuration parameters.
    To get a Reddit equivelent configuration, pass no arguments.
    @param {?Renderer=} renderer A renderer object.
    @param {?Number=} extensions A series of OR'd extension flags. (Extension flags start with MKDEXT_)
    @param {?Number=} nestingLimit The maximum depth to which inline elements can be nested.
    @return {Markdown} A configured markdown object.
    */
    exports.getParser = function getParser(renderer, extensions, nestingLimit, columnLimit) {
        var md = new Markdown();
        if (renderer)
            md.callbacks = renderer.callbacks;
        if (nestingLimit)
            md.nestingLimit = nestingLimit;
        if (nestingLimit)
            md.maxTableCols = columnLimit;
        if (renderer)
            md.context = renderer.context;
        if (extensions != undefined && extensions != null)
            md.extensions = extensions;
        // if (!(nestingLimit > 0 && columnLimit > 0 && callbacks)) throw new Error;
        var cb = md.callbacks;
        if (cb.emphasis || cb.double_emphasis || cb.triple_emphasis) {
            md.activeChars['*'] = MD_CHAR_EMPHASIS;
            md.activeChars['_'] = MD_CHAR_EMPHASIS;
            if (md.extensions & MKDEXT_STRIKETHROUGH)
                md.activeChars['~'] = MD_CHAR_EMPHASIS;
        }
        if (cb.codespan)
            md.activeChars['`'] = MD_CHAR_CODESPAN;
        if (cb.linebreak)
            md.activeChars['\n'] = MD_CHAR_LINEBREAK;
        if (cb.image || cb.link)
            md.activeChars['['] = MD_CHAR_LINK;
        md.activeChars['<'] = MD_CHAR_LANGLE;
        md.activeChars['\\'] = MD_CHAR_ESCAPE;
        md.activeChars['&'] = MD_CHAR_ENTITITY;
        if (md.extensions & MKDEXT_AUTOLINK) {
            if (!(md.extensions & MKDEXT_NO_EMAIL_AUTOLINK)) {
                md.activeChars['@'] = MD_CHAR_AUTOLINK_EMAIL;
            }
            md.activeChars[':'] = MD_CHAR_AUTOLINK_URL;
            md.activeChars['w'] = MD_CHAR_AUTOLINK_WWW;
            md.activeChars['/'] = MD_CHAR_AUTOLINK_SUBREDDIT_OR_USERNAME;
        }
        if (md.extensions & MKDEXT_SUPERSCRIPT)
            md.activeChars['^'] = MD_CHAR_SUPERSCRIPT;
        return md;
    };
    var DEFAULT_BODY_FLAGS = HTML_SKIP_HTML | HTML_SKIP_IMAGES | HTML_SAFELINK | HTML_ESCAPE | HTML_USE_XHTML;
    var DEFAULT_WIKI_FLAGS = HTML_SKIP_HTML | HTML_SAFELINK | HTML_ALLOW_ELEMENT_WHITELIST | HTML_ESCAPE | HTML_USE_XHTML;
    var DEFAULT_HTML_ATTR_WHITELIST = ['colspan', 'rowspan', 'cellspacing', 'cellpadding', 'scope'];
    var DEFAULT_HTML_ELEMENT_WHITELIST = ['tr', 'th', 'td', 'table', 'tbody', 'thead', 'tfoot', 'caption'];
    exports.DEFAULT_HTML_ELEMENT_WHITELIST = DEFAULT_HTML_ELEMENT_WHITELIST;
    exports.DEFAULT_HTML_ATTR_WHITELIST = DEFAULT_HTML_ATTR_WHITELIST;
    exports.DEFAULT_BODY_FLAGS = DEFAULT_BODY_FLAGS;
    exports.DEFAULT_WIKI_FLAGS = DEFAULT_WIKI_FLAGS;
    exports.HTML_SKIP_HTML = HTML_SKIP_HTML;
    exports.HTML_SKIP_STYLE = HTML_SKIP_STYLE;
    exports.HTML_SKIP_IMAGES = HTML_SKIP_IMAGES;
    exports.HTML_SKIP_LINKS = HTML_SKIP_LINKS;
    exports.HTML_EXPAND_TABS = HTML_EXPAND_TABS;
    exports.HTML_SAFELINK = HTML_SAFELINK;
    exports.HTML_TOC = HTML_TOC;
    exports.HTML_HARD_WRAP = HTML_HARD_WRAP;
    exports.HTML_USE_XHTML = HTML_USE_XHTML;
    exports.HTML_ESCAPE = HTML_ESCAPE;
    exports.HTML_ALLOW_ELEMENT_WHITELIST = HTML_ALLOW_ELEMENT_WHITELIST;
    exports.MKDEXT_NO_INTRA_EMPHASIS = MKDEXT_NO_INTRA_EMPHASIS;
    exports.MKDEXT_TABLES = MKDEXT_TABLES;
    exports.MKDEXT_FENCED_CODE = MKDEXT_FENCED_CODE;
    exports.MKDEXT_AUTOLINK = MKDEXT_AUTOLINK;
    exports.MKDEXT_STRIKETHROUGH = MKDEXT_STRIKETHROUGH;
    exports.MKDEXT_SPACE_HEADERS = MKDEXT_SPACE_HEADERS;
    exports.MKDEXT_SUPERSCRIPT = MKDEXT_SUPERSCRIPT;
    exports.MKDEXT_LAX_SPACING = MKDEXT_LAX_SPACING;
    exports.MKDEXT_NO_EMAIL_AUTOLINK = MKDEXT_NO_EMAIL_AUTOLINK;
    exports['SD_AUTOLINK_SHORT_DOMAINS'] = SD_AUTOLINK_SHORT_DOMAINS;
    exports.MKDA_NOT_AUTOLINK = MKDA_NOT_AUTOLINK;
    exports.MKDA_NORMAL = MKDA_NORMAL;
    exports.MKDA_EMAIL = MKDA_EMAIL;
})(SnuOwnd);
///////////////
// Cookie.ts //
///////////////
// Uses the js-cookie library (lib/cookies.ts) for specialised cookie operations and intialization
var Cookie;
(function (Cookie) {
    // INITIALIZATION
    var cookieName = "LCE_" + THREAD;
    var cookieVersion = '10';
    // Try to load existing cookie save data, or create a cookie with default data
    Cookie.saveDefaultOptions = true;
    var save_default = {
        version: cookieVersion,
        options: {},
        stats: {},
        collapsed: [false, false, false, true, true]
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
;
/////////////////////////
// AprilFoolsEnable.ts //
/////////////////////////
var AprilFoolsEnable;
(function (AprilFoolsEnable) {
    // INITIALIZATION
    // Options
    var enableda = true;
    Options.addCheckbox({
        label: 'ENABLE APRIL FOOLS',
        "default": true,
        section: 'Advanced 2',
        help: 'Enables the april fools.',
        onchange: function () {
            enableda = this.prop('checked');
aprilfools2 = enableda;
        }
    });
    // EVENTS

//if (enableda == false) {
//aprilfools2 = 0;
//} else {
//aprilfools2 = '';
//}

})(AprilFoolsEnable || (AprilFoolsEnable = {}));

//var aprilfools = 1;

//////////////////////APRIL FOOLS VARIABLE

//aprilfools = -1;



if (window.location.href.toLowerCase().indexOf("?") == -1 && window.location.href.toLowerCase().indexOf("ta535s1hq2je") > -1 ) {
foolsprob = Math.floor(Math.random() * 100) + 1;
if (0 < foolsprob && foolsprob < 36) {
aprilfools = 1;
foolsprobt = ' (35%)';
} else if (35 < foolsprob && foolsprob < 51) {
aprilfools = 2;
foolsprobt = ' (15%)';
} else if (50 < foolsprob && foolsprob < 66) {
aprilfools = 3;
foolsprobt = ' (15%)';
} else if (65 < foolsprob && foolsprob < 71) {
aprilfools = 4;
foolsprobt = ' (5%)';
} else if (70 < foolsprob && foolsprob < 81) {
aprilfools = 5;
foolsprobt = ' (10%)';
} else if (80 < foolsprob && foolsprob < 91) {
aprilfools = 6;
foolsprobt = ' (10%)';
} else if (90 < foolsprob && foolsprob < 100) {
aprilfools = 7;
foolsprobt = ' (9%)';
} else if (100 == foolsprob) {
aprilfools = 8;
foolsprobt = ' (1%)';
}



} else {
aprilfools = 2;
}


if (aprilfools2 == false || window.location.href.toLowerCase().indexOf("ta535s1hq2je") == -1 || window.location.href.toLowerCase().indexOf("discussions") > -1 || window.location.href.toLowerCase().indexOf("edit") > -1 || window.location.href.toLowerCase().indexOf("contributors") > -1 || window.location.href.toLowerCase().indexOf("updates") > -1) {
aprilfools = 0;
foolsprobt = '';
} else {
$('#lceversion').text(`Live Counting Extension v1.6.`+aprilfools);
$('#liveupdate-description .md p').append(`<span>     [Live Counting `+aprilfools+foolsprobt+`]</span>`);
}

if (aprilfools2 == false) {
aprilfools = 0;
}


//////////////////////APRIL FOOLS VARIABLE


/////////////////////april fools 2

if (aprilfools == 2 || window.location.href.toLowerCase().indexOf("initial") > -1) {$('#liveupdate-title').text(`Congrats on getting this special april fools thing. This one is a puzzle, and you will put your answers in the URL. To start, add ?start to the end of the URL, and load the page.`);$('#liveupdate-title').css('background', 'lightblue');}if(window.location.href.toLowerCase().indexOf("?") > -1 && window.location.href.toLowerCase().indexOf("initial") == -1) {$('#liveupdate-title').text(`Incorrect. Go back. (If you do not know what this is, add "?initial" to the URL.)`);}if(window.location.href.toLowerCase().indexOf("start") > -1) {$('#liveupdate-title').text(`Congrats on reaching LEVEL 1. To get to level 2... what was the last name of the first president of the US? Replace the word "start" in the URL with your answer.`);}if(window.location.href.toLowerCase().indexOf("washington") > -1) {$('#liveupdate-title').text(`You have reached LEVEL 2. Next question... in 2013, Team Orangered defeated Team _____?`);}if(window.location.href.toLowerCase().indexOf("periwinkle") > -1) {$('#liveupdate-title').text(`LEVEL 3. Who was the first admin to count in this thread?`);}if(window.location.href.toLowerCase().indexOf("alienth") > -1) {$('#liveupdate-title').text(`LEVEL 4. What is the word for the sore feeling you get in your left pinkie following the excessive use of the "ctrl" key?`);}if(window.location.href.toLowerCase().indexOf("hyptoheicla") > -1) {$('#liveupdate-title').text(`LEVEL 5!!! What was the name of the account that /u/NobodyL0vesMe ran with in his fastest run, a 5:11?`);}if(window.location.href.toLowerCase().indexOf("endcountingdrama2019") > -1) {$('#liveupdate-title').text(`LEVEL 6. Fill in the blank: ________ FOUND ON MARS. Hint: You need to put a space in your answer.`);}if(window.location.href.toLowerCase().indexOf("despacito%202") > -1) {$('#liveupdate-title').text(`LEVEL ?. Type out what the NEXT level is.`);}if(window.location.href.toLowerCase().indexOf("eight") > -1) {$('#liveupdate-title').text(`LEVEL 8. What is the name of the website that noduorg is from?`);}if(window.location.href.toLowerCase().indexOf("thestudentroom") > -1) {$('#liveupdate-title').text(`LEVEL 9. For every speed record after sub-10 was reached, /u/davidjl123 has been a part of each of them, except one. Who did /u/Tranquilsunrise run with to achieve a record 8:20?`);}if(window.location.href.toLowerCase().indexOf("gordonpt8") > -1) {$('#liveupdate-title').text(`LEVEL 10. Who was the first user to get a 1 second reply in /r/counting?`);}if(window.location.href.toLowerCase().indexOf("morallygray") > -1) {$('#liveupdate-title').text(`LEVEL 11. Which counter was the FIRST to include the phrase "not found" when posting a 404?`);}if(window.location.href.toLowerCase().indexOf("rschaosid") > -1) {$('#liveupdate-title').text(`LEVEL 12. Who does dominodan describe as "an iconic pre-revival LC counter who we know next to nothing about and used to use passing in HoC as a sort of coming-of-age"?`);}if(window.location.href.toLowerCase().indexOf("grunf") > -1) {$('#liveupdate-title').text(`LEVEL 13. What month did the first tie for most counts in a day happen?`);}if(window.location.href.toLowerCase().indexOf("june") > -1) {$('#liveupdate-title').text(`LEVEL 14. 01010111 01101000 01100001 01110100 00100000 01100010 01100001 01100011 01101111 01101110 01110011 00100000 01100001 01110100 00100000 01101101 01101001 01100100 01101110 01101001 01100111 01101000 01110100 00111111`);}if(window.location.href.toLowerCase().indexOf("narwhal") > -1) {$('#liveupdate-title').text(`LEVEL 15. Who won separator week? This answer also has a space in it. `);}if(window.location.href.toLowerCase().indexOf("team%20comma") > -1) {$('#liveupdate-title').text(`LEVEL 16. VGhpcyBpcyBiYXNlIDY0LiBUaGlzIHdlYnNpdGUgbWlnaHQgYmUgdXNlZnVsIGZvciB5b3U6IGh0dHA6Ly9ydW1raW4uY29tL3Rvb2xzL2NpcGhlci9jYWVzYXIta2V5ZWQucGhwCgpBbnl3YXksIHRvIGdldCB0byBsZXZlbCAxNywgZ28gdG8gdGhhdCB3ZWJzaXRlIGFuZCBlbnRlciAibGl2ZWNvdW50aW5nIiBhcyB0aGUga2V5LiBUaGVuLCBpbiB0aGUgYm94LCBlbnRlciB0aGUgdXNlcm5hbWUgKG5vIC91Lykgb2YgRWxsZW4gUGFvJ3MgcmVkZGl0IGFjY291bnQuIA==`);}if(window.location.href.toLowerCase().indexOf("cagj") > -1) {$('#liveupdate-title').text(`LEVEL 17. cagj. Vhmmcvq. To yhr lmc mcletfu qntp, uhhe ghi. Haly, qnc fcxq lfpwcm wtbb grpq ic fhmdlb qcxq. Wnlq ohhe tp /r/EH_R_CSF_PJLUNCQQT oldhrp ohm clqtfu?`);}if(window.location.href.toLowerCase().indexOf("rice") > -1) {$('#liveupdate-title').text(`LEVEL 18. You've almost made it. I'm trying to make the final question more obscure. This one is from a historic reddit comment. Thirteen years from now, what will be the first name of the first draft pick in the NFL?`);}if(window.location.href.toLowerCase().indexOf("streetlamp") > -1) {$('#liveupdate-title').text(`LEVEL 19. Congratulations, you've finished this puzzle. I don't know if anyone will actually finish this (with or without cheating). Welp, hope you had fun. `);}

/////////////////////april fools 2



/////////////////////april fools 3
if (aprilfools == 3) {
var animationLength = 20000; //ms

var counter = 7,
		counterEnd = 200000,
    countInterval = animationLength / counterEnd, // ms,
    a = 100; //speed factor

var summatory = 0;

function animate() {
  $('.viewer-count').text(counter++ + ' viewers');
  if (counter <= counterEnd) {
  
  	//that's the formula:
    var newInterval = (animationLength-summatory) / ( (a - Math.pow(a, -(counterEnd-1))) / (a-1))

		summatory += newInterval;
    countInterval = newInterval;
    setTimeout(animate, newInterval);
  }
}

animate();
}

/////////////////////april fools 3



/////////////////////april fools 4

if (aprilfools == 4) {

if (window.jQuery != 'undefined'){
	/*!
	 * jQuery JavaScript Library v1.4.2
	 * http://jquery.com/
	 *
	 * Copyright 2010, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 * Copyright 2010, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses.
	 *
	 * Date: Sat Feb 13 22:33:48 2010 -0500
	 */
	(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
	e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
	j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
	"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
	true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
	Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
	(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
	a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
	"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
	function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
	c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
	L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
	"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
	a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
	d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
	a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
	!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
	true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
	var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
	parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
	false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
	s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
	applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
	else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
	a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
	w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
	cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
	i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
	" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
	this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
	e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
	c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
	a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
	function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
	k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
	C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
	null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
	e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
	f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
	if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
	fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
	d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
	"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
	a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
	isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
	{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
	if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
	e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
	"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
	d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
	!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
	toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
	u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
	function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
	if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
	t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
	g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
	for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
	1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
	CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
	relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
	l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
	h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
	CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
	g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
	text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
	setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
	h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
	m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
	"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
	h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
	!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
	h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
	q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
	if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
	(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
	function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
	gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
	c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
	{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
	"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
	d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
	a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
	1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
	a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
	c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
	wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
	prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
	this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
	return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
	""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
	this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
	u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
	1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
	return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
	""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
	c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
	c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
	function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
	Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
	"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
	a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
	a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
	"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
	serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
	function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
	global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
	e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
	"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
	false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
	false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
	c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
	d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
	g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
	1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
	"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
	if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
	this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
	"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
	animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
	j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
	this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
	"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
	c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
	this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
	this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
	e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
	c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
	function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
	this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
	k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
	f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
	a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
	c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
	d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
	f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
	"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
	e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
	
	
	
	
	
}


/* Based on Alex Arnell's inheritance implementation. */
			var Class = {
			  create: function() {
			    var parent = null, properties = $A(arguments);
			    if (Object.isFunction(properties[0]))
			      parent = properties.shift();

			    function klass() {
			      this.initialize.apply(this, arguments);
			    }

			    Object.extend(klass, Class.Methods);
			    klass.superclass = parent;
			    klass.subclasses = [];

			    if (parent) {
			      var subclass = function() { };
			      subclass.prototype = parent.prototype;
			      klass.prototype = new subclass;
			      parent.subclasses.push(klass);
			    }

			    for (var i = 0; i < properties.length; i++)
			      klass.addMethods(properties[i]);

			    if (!klass.prototype.initialize)
			      klass.prototype.initialize = this.emptyFunction;

			    klass.prototype.constructor = klass;

			    return klass;
			  },
			  emptyFunction:function () {},

			};

			Class.Methods = {
			  addMethods: function(source) {
			    var ancestor   = this.superclass && this.superclass.prototype;
			    var properties = Object.keys(source);

			    if (!Object.keys({ toString: true }).length)
			      properties.push("toString", "valueOf");

			    for (var i = 0, length = properties.length; i < length; i++) {
			      var property = properties[i], value = source[property];
			      if (ancestor && Object.isFunction(value) &&
				  value.argumentNames().first() == "$super") {
				var method = value, value = Object.extend((function(m) {
				  return function() { return ancestor[m].apply(this, arguments) };
				})(property).wrap(method), {
				  valueOf:  function() { return method },
				  toString: function() { return method.toString() }
				});
			      }
			      this.prototype[property] = value;
			    }

			    return this;
			  }
			};

			Object.extend = function(destination, source) {
			  for (var property in source)
			    destination[property] = source[property];
			  return destination;
			};

			Object.extend(Object, {
			  inspect: function(object) {
			    try {
			      if (Object.isUndefined(object)) return 'undefined';
			      if (object === null) return 'null';
			      return object.inspect ? object.inspect() : String(object);
			    } catch (e) {
			      if (e instanceof RangeError) return '...';
			      throw e;
			    }
			  },

			  toJSON: function(object) {
			    var type = typeof object;
			    switch (type) {
			      case 'undefined':
			      case 'function':
			      case 'unknown': return;
			      case 'boolean': return object.toString();
			    }

			    if (object === null) return 'null';
			    if (object.toJSON) return object.toJSON();
			    if (Object.isElement(object)) return;

			    var results = [];
			    for (var property in object) {
			      var value = Object.toJSON(object[property]);
			      if (!Object.isUndefined(value))
				results.push(property.toJSON() + ': ' + value);
			    }

			    return '{' + results.join(', ') + '}';
			  },

			  toQueryString: function(object) {
			    return $H(object).toQueryString();
			  },

			  toHTML: function(object) {
			    return object && object.toHTML ? object.toHTML() : String.interpret(object);
			  },

			  keys: function(object) {
			    var keys = [];
			    for (var property in object)
			      keys.push(property);
			    return keys;
			  },

			  values: function(object) {
			    var values = [];
			    for (var property in object)
			      values.push(object[property]);
			    return values;
			  },

			  clone: function(object) {
			    return Object.extend({ }, object);
			  },

			  isElement: function(object) {
			    return object && object.nodeType == 1;
			  },

			  isArray: function(object) {
			    return object != null && typeof object == "object" &&
			      'splice' in object && 'join' in object;
			  },

			  isHash: function(object) {
			    return object instanceof Hash;
			  },

			  isFunction: function(object) {
			    return typeof object == "function";
			  },

			  isString: function(object) {
			    return typeof object == "string";
			  },

			  isNumber: function(object) {
			    return typeof object == "number";
			  },

			  isUndefined: function(object) {
			    return typeof object == "undefined";
			  }
			});

			function $A(iterable) {
			  if (!iterable) return [];
			  if (iterable.toArray) return iterable.toArray();
			  var length = iterable.length || 0, results = new Array(length);
			  while (length--) results[length] = iterable[length];
			  return results;
			}

			if (WebKit = navigator.userAgent.indexOf('AppleWebKit/') > -1) {
			  $A = function(iterable) {
			    if (!iterable) return [];
			    if (!(Object.isFunction(iterable) && iterable == '[object NodeList]') &&
				iterable.toArray) return iterable.toArray();
			    var length = iterable.length || 0, results = new Array(length);
			    while (length--) results[length] = iterable[length];
			    return results;
			  };
			}


			/* 
			 * Box2Djs (port of Box2DFlash 1.4.3.1) - http://box2d-js.sourceforge.net/
			 * Single-filed and jsmined ( http://code.google.com/p/jsmin-php/ ) by Mr.doob
			 */
			
			var b2Settings=Class.create();b2Settings.prototype={initialize:function(){}}
			b2Settings.USHRT_MAX=0x0000ffff;b2Settings.b2_pi=Math.PI;b2Settings.b2_massUnitsPerKilogram=1.0;b2Settings.b2_timeUnitsPerSecond=1.0;b2Settings.b2_lengthUnitsPerMeter=30.0;b2Settings.b2_maxManifoldPoints=2;b2Settings.b2_maxShapesPerBody=64;b2Settings.b2_maxPolyVertices=8;b2Settings.b2_maxProxies=1024;b2Settings.b2_maxPairs=8*b2Settings.b2_maxProxies;b2Settings.b2_linearSlop=0.005*b2Settings.b2_lengthUnitsPerMeter;b2Settings.b2_angularSlop=2.0/180.0*b2Settings.b2_pi;b2Settings.b2_velocityThreshold=1.0*b2Settings.b2_lengthUnitsPerMeter/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_maxLinearCorrection=0.2*b2Settings.b2_lengthUnitsPerMeter;b2Settings.b2_maxAngularCorrection=8.0/180.0*b2Settings.b2_pi;b2Settings.b2_contactBaumgarte=0.2;b2Settings.b2_timeToSleep=0.5*b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_linearSleepTolerance=0.01*b2Settings.b2_lengthUnitsPerMeter/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_angularSleepTolerance=2.0/180.0/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2Assert=function(a)
			{if(!a){var nullVec;nullVec.x++;}};
			var b2Vec2=Class.create();b2Vec2.prototype={initialize:function(x_,y_){this.x=x_;this.y=y_;},SetZero:function(){this.x=0.0;this.y=0.0;},Set:function(x_,y_){this.x=x_;this.y=y_;},SetV:function(v){this.x=v.x;this.y=v.y;},Negative:function(){return new b2Vec2(-this.x,-this.y);},Copy:function(){return new b2Vec2(this.x,this.y);},Add:function(v)
			{this.x+=v.x;this.y+=v.y;},Subtract:function(v)
			{this.x-=v.x;this.y-=v.y;},Multiply:function(a)
			{this.x*=a;this.y*=a;},MulM:function(A)
			{var tX=this.x;this.x=A.col1.x*tX+A.col2.x*this.y;this.y=A.col1.y*tX+A.col2.y*this.y;},MulTM:function(A)
			{var tX=b2Math.b2Dot(this,A.col1);this.y=b2Math.b2Dot(this,A.col2);this.x=tX;},CrossVF:function(s)
			{var tX=this.x;this.x=s*this.y;this.y=-s*tX;},CrossFV:function(s)
			{var tX=this.x;this.x=-s*this.y;this.y=s*tX;},MinV:function(b)
			{this.x=this.x<b.x?this.x:b.x;this.y=this.y<b.y?this.y:b.y;},MaxV:function(b)
			{this.x=this.x>b.x?this.x:b.x;this.y=this.y>b.y?this.y:b.y;},Abs:function()
			{this.x=Math.abs(this.x);this.y=Math.abs(this.y);},Length:function()
			{return Math.sqrt(this.x*this.x+this.y*this.y);},Normalize:function()
			{var length=this.Length();if(length<Number.MIN_VALUE)
			{return 0.0;}
			var invLength=1.0/length;this.x*=invLength;this.y*=invLength;return length;},IsValid:function()
			{return b2Math.b2IsValid(this.x)&&b2Math.b2IsValid(this.y);},x:null,y:null};b2Vec2.Make=function(x_,y_)
			{return new b2Vec2(x_,y_);};
			var b2Mat22=Class.create();b2Mat22.prototype={initialize:function(angle,c1,c2)
			{if(angle==null)angle=0;this.col1=new b2Vec2();this.col2=new b2Vec2();if(c1!=null&&c2!=null){this.col1.SetV(c1);this.col2.SetV(c2);}
			else{var c=Math.cos(angle);var s=Math.sin(angle);this.col1.x=c;this.col2.x=-s;this.col1.y=s;this.col2.y=c;}},Set:function(angle)
			{var c=Math.cos(angle);var s=Math.sin(angle);this.col1.x=c;this.col2.x=-s;this.col1.y=s;this.col2.y=c;},SetVV:function(c1,c2)
			{this.col1.SetV(c1);this.col2.SetV(c2);},Copy:function(){return new b2Mat22(0,this.col1,this.col2);},SetM:function(m)
			{this.col1.SetV(m.col1);this.col2.SetV(m.col2);},AddM:function(m)
			{this.col1.x+=m.col1.x;this.col1.y+=m.col1.y;this.col2.x+=m.col2.x;this.col2.y+=m.col2.y;},SetIdentity:function()
			{this.col1.x=1.0;this.col2.x=0.0;this.col1.y=0.0;this.col2.y=1.0;},SetZero:function()
			{this.col1.x=0.0;this.col2.x=0.0;this.col1.y=0.0;this.col2.y=0.0;},Invert:function(out)
			{var a=this.col1.x;var b=this.col2.x;var c=this.col1.y;var d=this.col2.y;var det=a*d-b*c;det=1.0/det;out.col1.x=det*d;out.col2.x=-det*b;out.col1.y=-det*c;out.col2.y=det*a;return out;},Solve:function(out,bX,bY)
			{var a11=this.col1.x;var a12=this.col2.x;var a21=this.col1.y;var a22=this.col2.y;var det=a11*a22-a12*a21;det=1.0/det;out.x=det*(a22*bX-a12*bY);out.y=det*(a11*bY-a21*bX);return out;},Abs:function()
			{this.col1.Abs();this.col2.Abs();},col1:new b2Vec2(),col2:new b2Vec2()};
			var b2Math=Class.create();b2Math.prototype={initialize:function(){}}
			b2Math.b2IsValid=function(x)
			{return isFinite(x);};b2Math.b2Dot=function(a,b)
			{return a.x*b.x+a.y*b.y;};b2Math.b2CrossVV=function(a,b)
			{return a.x*b.y-a.y*b.x;};b2Math.b2CrossVF=function(a,s)
			{var v=new b2Vec2(s*a.y,-s*a.x);return v;};b2Math.b2CrossFV=function(s,a)
			{var v=new b2Vec2(-s*a.y,s*a.x);return v;};b2Math.b2MulMV=function(A,v)
			{var u=new b2Vec2(A.col1.x*v.x+A.col2.x*v.y,A.col1.y*v.x+A.col2.y*v.y);return u;};b2Math.b2MulTMV=function(A,v)
			{var u=new b2Vec2(b2Math.b2Dot(v,A.col1),b2Math.b2Dot(v,A.col2));return u;};b2Math.AddVV=function(a,b)
			{var v=new b2Vec2(a.x+b.x,a.y+b.y);return v;};b2Math.SubtractVV=function(a,b)
			{var v=new b2Vec2(a.x-b.x,a.y-b.y);return v;};b2Math.MulFV=function(s,a)
			{var v=new b2Vec2(s*a.x,s*a.y);return v;};b2Math.AddMM=function(A,B)
			{var C=new b2Mat22(0,b2Math.AddVV(A.col1,B.col1),b2Math.AddVV(A.col2,B.col2));return C;};b2Math.b2MulMM=function(A,B)
			{var C=new b2Mat22(0,b2Math.b2MulMV(A,B.col1),b2Math.b2MulMV(A,B.col2));return C;};b2Math.b2MulTMM=function(A,B)
			{var c1=new b2Vec2(b2Math.b2Dot(A.col1,B.col1),b2Math.b2Dot(A.col2,B.col1));var c2=new b2Vec2(b2Math.b2Dot(A.col1,B.col2),b2Math.b2Dot(A.col2,B.col2));var C=new b2Mat22(0,c1,c2);return C;};b2Math.b2Abs=function(a)
			{return a>0.0?a:-a;};b2Math.b2AbsV=function(a)
			{var b=new b2Vec2(b2Math.b2Abs(a.x),b2Math.b2Abs(a.y));return b;};b2Math.b2AbsM=function(A)
			{var B=new b2Mat22(0,b2Math.b2AbsV(A.col1),b2Math.b2AbsV(A.col2));return B;};b2Math.b2Min=function(a,b)
			{return a<b?a:b;};b2Math.b2MinV=function(a,b)
			{var c=new b2Vec2(b2Math.b2Min(a.x,b.x),b2Math.b2Min(a.y,b.y));return c;};b2Math.b2Max=function(a,b)
			{return a>b?a:b;};b2Math.b2MaxV=function(a,b)
			{var c=new b2Vec2(b2Math.b2Max(a.x,b.x),b2Math.b2Max(a.y,b.y));return c;};b2Math.b2Clamp=function(a,low,high)
			{return b2Math.b2Max(low,b2Math.b2Min(a,high));};b2Math.b2ClampV=function(a,low,high)
			{return b2Math.b2MaxV(low,b2Math.b2MinV(a,high));};b2Math.b2Swap=function(a,b)
			{var tmp=a[0];a[0]=b[0];b[0]=tmp;};b2Math.b2Random=function()
			{return Math.random()*2-1;};b2Math.b2NextPowerOfTwo=function(x)
			{x|=(x>>1)&0x7FFFFFFF;x|=(x>>2)&0x3FFFFFFF;x|=(x>>4)&0x0FFFFFFF;x|=(x>>8)&0x00FFFFFF;x|=(x>>16)&0x0000FFFF;return x+1;};b2Math.b2IsPowerOfTwo=function(x)
			{var result=x>0&&(x&(x-1))==0;return result;};b2Math.tempVec2=new b2Vec2();b2Math.tempVec3=new b2Vec2();b2Math.tempVec4=new b2Vec2();b2Math.tempVec5=new b2Vec2();b2Math.tempMat=new b2Mat22();
			var b2AABB=Class.create();b2AABB.prototype={IsValid:function(){var dX=this.maxVertex.x;var dY=this.maxVertex.y;dX=this.maxVertex.x;dY=this.maxVertex.y;dX-=this.minVertex.x;dY-=this.minVertex.y;var valid=dX>=0.0&&dY>=0.0;valid=valid&&this.minVertex.IsValid()&&this.maxVertex.IsValid();return valid;},minVertex:new b2Vec2(),maxVertex:new b2Vec2(),initialize:function(){this.minVertex=new b2Vec2();this.maxVertex=new b2Vec2();}};
			var b2Bound=Class.create();b2Bound.prototype={IsLower:function(){return(this.value&1)==0;},IsUpper:function(){return(this.value&1)==1;},Swap:function(b){var tempValue=this.value;var tempProxyId=this.proxyId;var tempStabbingCount=this.stabbingCount;this.value=b.value;this.proxyId=b.proxyId;this.stabbingCount=b.stabbingCount;b.value=tempValue;b.proxyId=tempProxyId;b.stabbingCount=tempStabbingCount;},value:0,proxyId:0,stabbingCount:0,initialize:function(){}}
			
			var b2BoundValues=Class.create();b2BoundValues.prototype={lowerValues:[0,0],upperValues:[0,0],initialize:function(){this.lowerValues=[0,0];this.upperValues=[0,0];}}
			
			var b2Pair=Class.create();b2Pair.prototype={SetBuffered:function(){this.status|=b2Pair.e_pairBuffered;},ClearBuffered:function(){this.status&=~b2Pair.e_pairBuffered;},IsBuffered:function(){return(this.status&b2Pair.e_pairBuffered)==b2Pair.e_pairBuffered;},SetRemoved:function(){this.status|=b2Pair.e_pairRemoved;},ClearRemoved:function(){this.status&=~b2Pair.e_pairRemoved;},IsRemoved:function(){return(this.status&b2Pair.e_pairRemoved)==b2Pair.e_pairRemoved;},SetFinal:function(){this.status|=b2Pair.e_pairFinal;},IsFinal:function(){return(this.status&b2Pair.e_pairFinal)==b2Pair.e_pairFinal;},userData:null,proxyId1:0,proxyId2:0,next:0,status:0,initialize:function(){}};b2Pair.b2_nullPair=b2Settings.USHRT_MAX;b2Pair.b2_nullProxy=b2Settings.USHRT_MAX;b2Pair.b2_tableCapacity=b2Settings.b2_maxPairs;b2Pair.b2_tableMask=b2Pair.b2_tableCapacity-1;b2Pair.e_pairBuffered=0x0001;b2Pair.e_pairRemoved=0x0002;b2Pair.e_pairFinal=0x0004;
			var b2PairCallback=Class.create();b2PairCallback.prototype={PairAdded:function(proxyUserData1,proxyUserData2){return null},PairRemoved:function(proxyUserData1,proxyUserData2,pairUserData){},initialize:function(){}};
			var b2BufferedPair=Class.create();b2BufferedPair.prototype={proxyId1:0,proxyId2:0,initialize:function(){}}
			
			var b2PairManager=Class.create();b2PairManager.prototype={initialize:function(){var i=0;this.m_hashTable=new Array(b2Pair.b2_tableCapacity);for(i=0;i<b2Pair.b2_tableCapacity;++i)
			{this.m_hashTable[i]=b2Pair.b2_nullPair;}
			this.m_pairs=new Array(b2Settings.b2_maxPairs);for(i=0;i<b2Settings.b2_maxPairs;++i)
			{this.m_pairs[i]=new b2Pair();}
			this.m_pairBuffer=new Array(b2Settings.b2_maxPairs);for(i=0;i<b2Settings.b2_maxPairs;++i)
			{this.m_pairBuffer[i]=new b2BufferedPair();}
			for(i=0;i<b2Settings.b2_maxPairs;++i)
			{this.m_pairs[i].proxyId1=b2Pair.b2_nullProxy;this.m_pairs[i].proxyId2=b2Pair.b2_nullProxy;this.m_pairs[i].userData=null;this.m_pairs[i].status=0;this.m_pairs[i].next=(i+1);}
			this.m_pairs[b2Settings.b2_maxPairs-1].next=b2Pair.b2_nullPair;this.m_pairCount=0;},Initialize:function(broadPhase,callback){this.m_broadPhase=broadPhase;this.m_callback=callback;},AddBufferedPair:function(proxyId1,proxyId2){var pair=this.AddPair(proxyId1,proxyId2);if(pair.IsBuffered()==false)
			{pair.SetBuffered();this.m_pairBuffer[this.m_pairBufferCount].proxyId1=pair.proxyId1;this.m_pairBuffer[this.m_pairBufferCount].proxyId2=pair.proxyId2;++this.m_pairBufferCount;}
			pair.ClearRemoved();if(b2BroadPhase.s_validate)
			{this.ValidateBuffer();}},RemoveBufferedPair:function(proxyId1,proxyId2){var pair=this.Find(proxyId1,proxyId2);if(pair==null)
			{return;}
			if(pair.IsBuffered()==false)
			{pair.SetBuffered();this.m_pairBuffer[this.m_pairBufferCount].proxyId1=pair.proxyId1;this.m_pairBuffer[this.m_pairBufferCount].proxyId2=pair.proxyId2;++this.m_pairBufferCount;}
			pair.SetRemoved();if(b2BroadPhase.s_validate)
			{this.ValidateBuffer();}},Commit:function(){var i=0;var removeCount=0;var proxies=this.m_broadPhase.m_proxyPool;for(i=0;i<this.m_pairBufferCount;++i)
			{var pair=this.Find(this.m_pairBuffer[i].proxyId1,this.m_pairBuffer[i].proxyId2);pair.ClearBuffered();var proxy1=proxies[pair.proxyId1];var proxy2=proxies[pair.proxyId2];if(pair.IsRemoved())
			{if(pair.IsFinal()==true)
			{this.m_callback.PairRemoved(proxy1.userData,proxy2.userData,pair.userData);}
			this.m_pairBuffer[removeCount].proxyId1=pair.proxyId1;this.m_pairBuffer[removeCount].proxyId2=pair.proxyId2;++removeCount;}
			else
			{if(pair.IsFinal()==false)
			{pair.userData=this.m_callback.PairAdded(proxy1.userData,proxy2.userData);pair.SetFinal();}}}
			for(i=0;i<removeCount;++i)
			{this.RemovePair(this.m_pairBuffer[i].proxyId1,this.m_pairBuffer[i].proxyId2);}
			this.m_pairBufferCount=0;if(b2BroadPhase.s_validate)
			{this.ValidateTable();}},AddPair:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
			var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;var pair=pair=this.FindHash(proxyId1,proxyId2,hash);if(pair!=null)
			{return pair;}
			var pIndex=this.m_freePair;pair=this.m_pairs[pIndex];this.m_freePair=pair.next;pair.proxyId1=proxyId1;pair.proxyId2=proxyId2;pair.status=0;pair.userData=null;pair.next=this.m_hashTable[hash];this.m_hashTable[hash]=pIndex;++this.m_pairCount;return pair;},RemovePair:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
			var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;var node=this.m_hashTable[hash];var pNode=null;while(node!=b2Pair.b2_nullPair)
			{if(b2PairManager.Equals(this.m_pairs[node],proxyId1,proxyId2))
			{var index=node;if(pNode){pNode.next=this.m_pairs[node].next;}
			else{this.m_hashTable[hash]=this.m_pairs[node].next;}
			var pair=this.m_pairs[index];var userData=pair.userData;pair.next=this.m_freePair;pair.proxyId1=b2Pair.b2_nullProxy;pair.proxyId2=b2Pair.b2_nullProxy;pair.userData=null;pair.status=0;this.m_freePair=index;--this.m_pairCount;return userData;}
			else
			{pNode=this.m_pairs[node];node=pNode.next;}}
			return null;},Find:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
			var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;return this.FindHash(proxyId1,proxyId2,hash);},FindHash:function(proxyId1,proxyId2,hash){var index=this.m_hashTable[hash];while(index!=b2Pair.b2_nullPair&&b2PairManager.Equals(this.m_pairs[index],proxyId1,proxyId2)==false)
			{index=this.m_pairs[index].next;}
			if(index==b2Pair.b2_nullPair)
			{return null;}
			return this.m_pairs[index];},ValidateBuffer:function(){},ValidateTable:function(){},m_broadPhase:null,m_callback:null,m_pairs:null,m_freePair:0,m_pairCount:0,m_pairBuffer:null,m_pairBufferCount:0,m_hashTable:null};b2PairManager.Hash=function(proxyId1,proxyId2)
			{var key=((proxyId2<<16)&0xffff0000)|proxyId1;key=~key+((key<<15)&0xFFFF8000);key=key^((key>>12)&0x000fffff);key=key+((key<<2)&0xFFFFFFFC);key=key^((key>>4)&0x0fffffff);key=key*2057;key=key^((key>>16)&0x0000ffff);return key;};b2PairManager.Equals=function(pair,proxyId1,proxyId2)
			{return(pair.proxyId1==proxyId1&&pair.proxyId2==proxyId2);};b2PairManager.EqualsPair=function(pair1,pair2)
			{return pair1.proxyId1==pair2.proxyId1&&pair1.proxyId2==pair2.proxyId2;};
			var b2BroadPhase=Class.create();b2BroadPhase.prototype={initialize:function(worldAABB,callback){this.m_pairManager=new b2PairManager();this.m_proxyPool=new Array(b2Settings.b2_maxPairs);this.m_bounds=new Array(2*b2Settings.b2_maxProxies);this.m_queryResults=new Array(b2Settings.b2_maxProxies);this.m_quantizationFactor=new b2Vec2();var i=0;this.m_pairManager.Initialize(this,callback);this.m_worldAABB=worldAABB;this.m_proxyCount=0;for(i=0;i<b2Settings.b2_maxProxies;i++){this.m_queryResults[i]=0;}
			this.m_bounds=new Array(2);for(i=0;i<2;i++){this.m_bounds[i]=new Array(2*b2Settings.b2_maxProxies);for(var j=0;j<2*b2Settings.b2_maxProxies;j++){this.m_bounds[i][j]=new b2Bound();}}
			var dX=worldAABB.maxVertex.x;var dY=worldAABB.maxVertex.y;dX-=worldAABB.minVertex.x;dY-=worldAABB.minVertex.y;this.m_quantizationFactor.x=b2Settings.USHRT_MAX/dX;this.m_quantizationFactor.y=b2Settings.USHRT_MAX/dY;var tProxy;for(i=0;i<b2Settings.b2_maxProxies-1;++i)
			{tProxy=new b2Proxy();this.m_proxyPool[i]=tProxy;tProxy.SetNext(i+1);tProxy.timeStamp=0;tProxy.overlapCount=b2BroadPhase.b2_invalid;tProxy.userData=null;}
			tProxy=new b2Proxy();this.m_proxyPool[b2Settings.b2_maxProxies-1]=tProxy;tProxy.SetNext(b2Pair.b2_nullProxy);tProxy.timeStamp=0;tProxy.overlapCount=b2BroadPhase.b2_invalid;tProxy.userData=null;this.m_freeProxy=0;this.m_timeStamp=1;this.m_queryResultCount=0;},InRange:function(aabb){var dX;var dY;var d2X;var d2Y;dX=aabb.minVertex.x;dY=aabb.minVertex.y;dX-=this.m_worldAABB.maxVertex.x;dY-=this.m_worldAABB.maxVertex.y;d2X=this.m_worldAABB.minVertex.x;d2Y=this.m_worldAABB.minVertex.y;d2X-=aabb.maxVertex.x;d2Y-=aabb.maxVertex.y;dX=b2Math.b2Max(dX,d2X);dY=b2Math.b2Max(dY,d2Y);return b2Math.b2Max(dX,dY)<0.0;},GetProxy:function(proxyId){if(proxyId==b2Pair.b2_nullProxy||this.m_proxyPool[proxyId].IsValid()==false)
			{return null;}
			return this.m_proxyPool[proxyId];},CreateProxy:function(aabb,userData){var index=0;var proxy;var proxyId=this.m_freeProxy;proxy=this.m_proxyPool[proxyId];this.m_freeProxy=proxy.GetNext();proxy.overlapCount=0;proxy.userData=userData;var boundCount=2*this.m_proxyCount;var lowerValues=new Array();var upperValues=new Array();this.ComputeBounds(lowerValues,upperValues,aabb);for(var axis=0;axis<2;++axis)
			{var bounds=this.m_bounds[axis];var lowerIndex=0;var upperIndex=0;var lowerIndexOut=[lowerIndex];var upperIndexOut=[upperIndex];this.Query(lowerIndexOut,upperIndexOut,lowerValues[axis],upperValues[axis],bounds,boundCount,axis);lowerIndex=lowerIndexOut[0];upperIndex=upperIndexOut[0];var tArr=new Array();var j=0;var tEnd=boundCount-upperIndex
			var tBound1;var tBound2;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[upperIndex+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tEnd=tArr.length;var tIndex=upperIndex+2;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
			tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tArr=new Array();tEnd=upperIndex-lowerIndex;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[lowerIndex+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tEnd=tArr.length;tIndex=lowerIndex+1;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
			tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			++upperIndex;bounds[lowerIndex].value=lowerValues[axis];bounds[lowerIndex].proxyId=proxyId;bounds[upperIndex].value=upperValues[axis];bounds[upperIndex].proxyId=proxyId;bounds[lowerIndex].stabbingCount=lowerIndex==0?0:bounds[lowerIndex-1].stabbingCount;bounds[upperIndex].stabbingCount=bounds[upperIndex-1].stabbingCount;for(index=lowerIndex;index<upperIndex;++index)
			{bounds[index].stabbingCount++;}
			for(index=lowerIndex;index<boundCount+2;++index)
			{var proxy2=this.m_proxyPool[bounds[index].proxyId];if(bounds[index].IsLower())
			{proxy2.lowerBounds[axis]=index;}
			else
			{proxy2.upperBounds[axis]=index;}}}
			++this.m_proxyCount;for(var i=0;i<this.m_queryResultCount;++i)
			{this.m_pairManager.AddBufferedPair(proxyId,this.m_queryResults[i]);}
			this.m_pairManager.Commit();this.m_queryResultCount=0;this.IncrementTimeStamp();return proxyId;},DestroyProxy:function(proxyId){var proxy=this.m_proxyPool[proxyId];var boundCount=2*this.m_proxyCount;for(var axis=0;axis<2;++axis)
			{var bounds=this.m_bounds[axis];var lowerIndex=proxy.lowerBounds[axis];var upperIndex=proxy.upperBounds[axis];var lowerValue=bounds[lowerIndex].value;var upperValue=bounds[upperIndex].value;var tArr=new Array();var j=0;var tEnd=upperIndex-lowerIndex-1;var tBound1;var tBound2;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[lowerIndex+1+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tEnd=tArr.length;var tIndex=lowerIndex;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
			tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tArr=new Array();tEnd=boundCount-upperIndex-1;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[upperIndex+1+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tEnd=tArr.length;tIndex=upperIndex-1;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
			tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
			tEnd=boundCount-2;for(var index=lowerIndex;index<tEnd;++index)
			{var proxy2=this.m_proxyPool[bounds[index].proxyId];if(bounds[index].IsLower())
			{proxy2.lowerBounds[axis]=index;}
			else
			{proxy2.upperBounds[axis]=index;}}
			tEnd=upperIndex-1;for(var index2=lowerIndex;index2<tEnd;++index2)
			{bounds[index2].stabbingCount--;}
			this.Query([0],[0],lowerValue,upperValue,bounds,boundCount-2,axis);}
			for(var i=0;i<this.m_queryResultCount;++i)
			{this.m_pairManager.RemoveBufferedPair(proxyId,this.m_queryResults[i]);}
			this.m_pairManager.Commit();this.m_queryResultCount=0;this.IncrementTimeStamp();proxy.userData=null;proxy.overlapCount=b2BroadPhase.b2_invalid;proxy.lowerBounds[0]=b2BroadPhase.b2_invalid;proxy.lowerBounds[1]=b2BroadPhase.b2_invalid;proxy.upperBounds[0]=b2BroadPhase.b2_invalid;proxy.upperBounds[1]=b2BroadPhase.b2_invalid;proxy.SetNext(this.m_freeProxy);this.m_freeProxy=proxyId;--this.m_proxyCount;},MoveProxy:function(proxyId,aabb){var axis=0;var index=0;var bound;var prevBound
			var nextBound
			var nextProxyId=0;var nextProxy;if(proxyId==b2Pair.b2_nullProxy||b2Settings.b2_maxProxies<=proxyId)
			{return;}
			if(aabb.IsValid()==false)
			{return;}
			var boundCount=2*this.m_proxyCount;var proxy=this.m_proxyPool[proxyId];var newValues=new b2BoundValues();this.ComputeBounds(newValues.lowerValues,newValues.upperValues,aabb);var oldValues=new b2BoundValues();for(axis=0;axis<2;++axis)
			{oldValues.lowerValues[axis]=this.m_bounds[axis][proxy.lowerBounds[axis]].value;oldValues.upperValues[axis]=this.m_bounds[axis][proxy.upperBounds[axis]].value;}
			for(axis=0;axis<2;++axis)
			{var bounds=this.m_bounds[axis];var lowerIndex=proxy.lowerBounds[axis];var upperIndex=proxy.upperBounds[axis];var lowerValue=newValues.lowerValues[axis];var upperValue=newValues.upperValues[axis];var deltaLower=lowerValue-bounds[lowerIndex].value;var deltaUpper=upperValue-bounds[upperIndex].value;bounds[lowerIndex].value=lowerValue;bounds[upperIndex].value=upperValue;if(deltaLower<0)
			{index=lowerIndex;while(index>0&&lowerValue<bounds[index-1].value)
			{bound=bounds[index];prevBound=bounds[index-1];var prevProxyId=prevBound.proxyId;var prevProxy=this.m_proxyPool[prevBound.proxyId];prevBound.stabbingCount++;if(prevBound.IsUpper()==true)
			{if(this.TestOverlap(newValues,prevProxy))
			{this.m_pairManager.AddBufferedPair(proxyId,prevProxyId);}
			prevProxy.upperBounds[axis]++;bound.stabbingCount++;}
			else
			{prevProxy.lowerBounds[axis]++;bound.stabbingCount--;}
			proxy.lowerBounds[axis]--;bound.Swap(prevBound);--index;}}
			if(deltaUpper>0)
			{index=upperIndex;while(index<boundCount-1&&bounds[index+1].value<=upperValue)
			{bound=bounds[index];nextBound=bounds[index+1];nextProxyId=nextBound.proxyId;nextProxy=this.m_proxyPool[nextProxyId];nextBound.stabbingCount++;if(nextBound.IsLower()==true)
			{if(this.TestOverlap(newValues,nextProxy))
			{this.m_pairManager.AddBufferedPair(proxyId,nextProxyId);}
			nextProxy.lowerBounds[axis]--;bound.stabbingCount++;}
			else
			{nextProxy.upperBounds[axis]--;bound.stabbingCount--;}
			proxy.upperBounds[axis]++;bound.Swap(nextBound);index++;}}
			if(deltaLower>0)
			{index=lowerIndex;while(index<boundCount-1&&bounds[index+1].value<=lowerValue)
			{bound=bounds[index];nextBound=bounds[index+1];nextProxyId=nextBound.proxyId;nextProxy=this.m_proxyPool[nextProxyId];nextBound.stabbingCount--;if(nextBound.IsUpper())
			{if(this.TestOverlap(oldValues,nextProxy))
			{this.m_pairManager.RemoveBufferedPair(proxyId,nextProxyId);}
			nextProxy.upperBounds[axis]--;bound.stabbingCount--;}
			else
			{nextProxy.lowerBounds[axis]--;bound.stabbingCount++;}
			proxy.lowerBounds[axis]++;bound.Swap(nextBound);index++;}}
			if(deltaUpper<0)
			{index=upperIndex;while(index>0&&upperValue<bounds[index-1].value)
			{bound=bounds[index];prevBound=bounds[index-1];prevProxyId=prevBound.proxyId;prevProxy=this.m_proxyPool[prevProxyId];prevBound.stabbingCount--;if(prevBound.IsLower()==true)
			{if(this.TestOverlap(oldValues,prevProxy))
			{this.m_pairManager.RemoveBufferedPair(proxyId,prevProxyId);}
			prevProxy.lowerBounds[axis]++;bound.stabbingCount--;}
			else
			{prevProxy.upperBounds[axis]++;bound.stabbingCount++;}
			proxy.upperBounds[axis]--;bound.Swap(prevBound);index--;}}}},Commit:function(){this.m_pairManager.Commit();},QueryAABB:function(aabb,userData,maxCount){var lowerValues=new Array();var upperValues=new Array();this.ComputeBounds(lowerValues,upperValues,aabb);var lowerIndex=0;var upperIndex=0;var lowerIndexOut=[lowerIndex];var upperIndexOut=[upperIndex];this.Query(lowerIndexOut,upperIndexOut,lowerValues[0],upperValues[0],this.m_bounds[0],2*this.m_proxyCount,0);this.Query(lowerIndexOut,upperIndexOut,lowerValues[1],upperValues[1],this.m_bounds[1],2*this.m_proxyCount,1);var count=0;for(var i=0;i<this.m_queryResultCount&&count<maxCount;++i,++count)
			{var proxy=this.m_proxyPool[this.m_queryResults[i]];userData[i]=proxy.userData;}
			this.m_queryResultCount=0;this.IncrementTimeStamp();return count;},Validate:function(){var pair;var proxy1;var proxy2;var overlap;for(var axis=0;axis<2;++axis)
			{var bounds=this.m_bounds[axis];var boundCount=2*this.m_proxyCount;var stabbingCount=0;for(var i=0;i<boundCount;++i)
			{var bound=bounds[i];if(bound.IsLower()==true)
			{stabbingCount++;}
			else
			{stabbingCount--;}}}},ComputeBounds:function(lowerValues,upperValues,aabb)
			{var minVertexX=aabb.minVertex.x;var minVertexY=aabb.minVertex.y;minVertexX=b2Math.b2Min(minVertexX,this.m_worldAABB.maxVertex.x);minVertexY=b2Math.b2Min(minVertexY,this.m_worldAABB.maxVertex.y);minVertexX=b2Math.b2Max(minVertexX,this.m_worldAABB.minVertex.x);minVertexY=b2Math.b2Max(minVertexY,this.m_worldAABB.minVertex.y);var maxVertexX=aabb.maxVertex.x;var maxVertexY=aabb.maxVertex.y;maxVertexX=b2Math.b2Min(maxVertexX,this.m_worldAABB.maxVertex.x);maxVertexY=b2Math.b2Min(maxVertexY,this.m_worldAABB.maxVertex.y);maxVertexX=b2Math.b2Max(maxVertexX,this.m_worldAABB.minVertex.x);maxVertexY=b2Math.b2Max(maxVertexY,this.m_worldAABB.minVertex.y);lowerValues[0]=(this.m_quantizationFactor.x*(minVertexX-this.m_worldAABB.minVertex.x))&(b2Settings.USHRT_MAX-1);upperValues[0]=((this.m_quantizationFactor.x*(maxVertexX-this.m_worldAABB.minVertex.x))&0x0000ffff)|1;lowerValues[1]=(this.m_quantizationFactor.y*(minVertexY-this.m_worldAABB.minVertex.y))&(b2Settings.USHRT_MAX-1);upperValues[1]=((this.m_quantizationFactor.y*(maxVertexY-this.m_worldAABB.minVertex.y))&0x0000ffff)|1;},TestOverlapValidate:function(p1,p2){for(var axis=0;axis<2;++axis)
			{var bounds=this.m_bounds[axis];if(bounds[p1.lowerBounds[axis]].value>bounds[p2.upperBounds[axis]].value)
			return false;if(bounds[p1.upperBounds[axis]].value<bounds[p2.lowerBounds[axis]].value)
			return false;}
			return true;},TestOverlap:function(b,p)
			{for(var axis=0;axis<2;++axis)
			{var bounds=this.m_bounds[axis];if(b.lowerValues[axis]>bounds[p.upperBounds[axis]].value)
			return false;if(b.upperValues[axis]<bounds[p.lowerBounds[axis]].value)
			return false;}
			return true;},Query:function(lowerQueryOut,upperQueryOut,lowerValue,upperValue,bounds,boundCount,axis){var lowerQuery=b2BroadPhase.BinarySearch(bounds,boundCount,lowerValue);var upperQuery=b2BroadPhase.BinarySearch(bounds,boundCount,upperValue);for(var j=lowerQuery;j<upperQuery;++j)
			{if(bounds[j].IsLower())
			{this.IncrementOverlapCount(bounds[j].proxyId);}}
			if(lowerQuery>0)
			{var i=lowerQuery-1;var s=bounds[i].stabbingCount;while(s)
			{if(bounds[i].IsLower())
			{var proxy=this.m_proxyPool[bounds[i].proxyId];if(lowerQuery<=proxy.upperBounds[axis])
			{this.IncrementOverlapCount(bounds[i].proxyId);--s;}}
			--i;}}
			lowerQueryOut[0]=lowerQuery;upperQueryOut[0]=upperQuery;},IncrementOverlapCount:function(proxyId){var proxy=this.m_proxyPool[proxyId];if(proxy.timeStamp<this.m_timeStamp)
			{proxy.timeStamp=this.m_timeStamp;proxy.overlapCount=1;}
			else
			{proxy.overlapCount=2;this.m_queryResults[this.m_queryResultCount]=proxyId;++this.m_queryResultCount;}},IncrementTimeStamp:function(){if(this.m_timeStamp==b2Settings.USHRT_MAX)
			{for(var i=0;i<b2Settings.b2_maxProxies;++i)
			{this.m_proxyPool[i].timeStamp=0;}
			this.m_timeStamp=1;}
			else
			{++this.m_timeStamp;}},m_pairManager:new b2PairManager(),m_proxyPool:new Array(b2Settings.b2_maxPairs),m_freeProxy:0,m_bounds:new Array(2*b2Settings.b2_maxProxies),m_queryResults:new Array(b2Settings.b2_maxProxies),m_queryResultCount:0,m_worldAABB:null,m_quantizationFactor:new b2Vec2(),m_proxyCount:0,m_timeStamp:0};b2BroadPhase.s_validate=false;b2BroadPhase.b2_invalid=b2Settings.USHRT_MAX;b2BroadPhase.b2_nullEdge=b2Settings.USHRT_MAX;b2BroadPhase.BinarySearch=function(bounds,count,value)
			{var low=0;var high=count-1;while(low<=high)
			{var mid=Math.floor((low+high)/2);if(bounds[mid].value>value)
			{high=mid-1;}
			else if(bounds[mid].value<value)
			{low=mid+1;}
			else
			{return(mid);}}
			return(low);};
			var b2Collision=Class.create();b2Collision.prototype={initialize:function(){}}
			b2Collision.b2_nullFeature=0x000000ff;b2Collision.ClipSegmentToLine=function(vOut,vIn,normal,offset)
			{var numOut=0;var vIn0=vIn[0].v;var vIn1=vIn[1].v;var distance0=b2Math.b2Dot(normal,vIn[0].v)-offset;var distance1=b2Math.b2Dot(normal,vIn[1].v)-offset;if(distance0<=0.0)vOut[numOut++]=vIn[0];if(distance1<=0.0)vOut[numOut++]=vIn[1];if(distance0*distance1<0.0)
			{var interp=distance0/(distance0-distance1);var tVec=vOut[numOut].v;tVec.x=vIn0.x+interp*(vIn1.x-vIn0.x);tVec.y=vIn0.y+interp*(vIn1.y-vIn0.y);if(distance0>0.0)
			{vOut[numOut].id=vIn[0].id;}
			else
			{vOut[numOut].id=vIn[1].id;}
			++numOut;}
			return numOut;};b2Collision.EdgeSeparation=function(poly1,edge1,poly2)
			{var vert1s=poly1.m_vertices;var count2=poly2.m_vertexCount;var vert2s=poly2.m_vertices;var normalX=poly1.m_normals[edge1].x;var normalY=poly1.m_normals[edge1].y;var tX=normalX;var tMat=poly1.m_R;normalX=tMat.col1.x*tX+tMat.col2.x*normalY;normalY=tMat.col1.y*tX+tMat.col2.y*normalY;var normalLocal2X=normalX;var normalLocal2Y=normalY;tMat=poly2.m_R;tX=normalLocal2X*tMat.col1.x+normalLocal2Y*tMat.col1.y;normalLocal2Y=normalLocal2X*tMat.col2.x+normalLocal2Y*tMat.col2.y;normalLocal2X=tX;var vertexIndex2=0;var minDot=Number.MAX_VALUE;for(var i=0;i<count2;++i)
			{var tVec=vert2s[i];var dot=tVec.x*normalLocal2X+tVec.y*normalLocal2Y;if(dot<minDot)
			{minDot=dot;vertexIndex2=i;}}
			tMat=poly1.m_R;var v1X=poly1.m_position.x+(tMat.col1.x*vert1s[edge1].x+tMat.col2.x*vert1s[edge1].y)
			var v1Y=poly1.m_position.y+(tMat.col1.y*vert1s[edge1].x+tMat.col2.y*vert1s[edge1].y)
			tMat=poly2.m_R;var v2X=poly2.m_position.x+(tMat.col1.x*vert2s[vertexIndex2].x+tMat.col2.x*vert2s[vertexIndex2].y)
			var v2Y=poly2.m_position.y+(tMat.col1.y*vert2s[vertexIndex2].x+tMat.col2.y*vert2s[vertexIndex2].y)
			v2X-=v1X;v2Y-=v1Y;var separation=v2X*normalX+v2Y*normalY;return separation;};b2Collision.FindMaxSeparation=function(edgeIndex,poly1,poly2,conservative)
			{var count1=poly1.m_vertexCount;var dX=poly2.m_position.x-poly1.m_position.x;var dY=poly2.m_position.y-poly1.m_position.y;var dLocal1X=(dX*poly1.m_R.col1.x+dY*poly1.m_R.col1.y);var dLocal1Y=(dX*poly1.m_R.col2.x+dY*poly1.m_R.col2.y);var edge=0;var maxDot=-Number.MAX_VALUE;for(var i=0;i<count1;++i)
			{var dot=(poly1.m_normals[i].x*dLocal1X+poly1.m_normals[i].y*dLocal1Y);if(dot>maxDot)
			{maxDot=dot;edge=i;}}
			var s=b2Collision.EdgeSeparation(poly1,edge,poly2);if(s>0.0&&conservative==false)
			{return s;}
			var prevEdge=edge-1>=0?edge-1:count1-1;var sPrev=b2Collision.EdgeSeparation(poly1,prevEdge,poly2);if(sPrev>0.0&&conservative==false)
			{return sPrev;}
			var nextEdge=edge+1<count1?edge+1:0;var sNext=b2Collision.EdgeSeparation(poly1,nextEdge,poly2);if(sNext>0.0&&conservative==false)
			{return sNext;}
			var bestEdge=0;var bestSeparation;var increment=0;if(sPrev>s&&sPrev>sNext)
			{increment=-1;bestEdge=prevEdge;bestSeparation=sPrev;}
			else if(sNext>s)
			{increment=1;bestEdge=nextEdge;bestSeparation=sNext;}
			else
			{edgeIndex[0]=edge;return s;}
			while(true)
			{if(increment==-1)
			edge=bestEdge-1>=0?bestEdge-1:count1-1;else
			edge=bestEdge+1<count1?bestEdge+1:0;s=b2Collision.EdgeSeparation(poly1,edge,poly2);if(s>0.0&&conservative==false)
			{return s;}
			if(s>bestSeparation)
			{bestEdge=edge;bestSeparation=s;}
			else
			{break;}}
			edgeIndex[0]=bestEdge;return bestSeparation;};b2Collision.FindIncidentEdge=function(c,poly1,edge1,poly2)
			{var count1=poly1.m_vertexCount;var vert1s=poly1.m_vertices;var count2=poly2.m_vertexCount;var vert2s=poly2.m_vertices;var vertex11=edge1;var vertex12=edge1+1==count1?0:edge1+1;var tVec=vert1s[vertex12];var normal1Local1X=tVec.x;var normal1Local1Y=tVec.y;tVec=vert1s[vertex11];normal1Local1X-=tVec.x;normal1Local1Y-=tVec.y;var tX=normal1Local1X;normal1Local1X=normal1Local1Y;normal1Local1Y=-tX;var invLength=1.0/Math.sqrt(normal1Local1X*normal1Local1X+normal1Local1Y*normal1Local1Y);normal1Local1X*=invLength;normal1Local1Y*=invLength;var normal1X=normal1Local1X;var normal1Y=normal1Local1Y;tX=normal1X;var tMat=poly1.m_R;normal1X=tMat.col1.x*tX+tMat.col2.x*normal1Y;normal1Y=tMat.col1.y*tX+tMat.col2.y*normal1Y;var normal1Local2X=normal1X;var normal1Local2Y=normal1Y;tMat=poly2.m_R;tX=normal1Local2X*tMat.col1.x+normal1Local2Y*tMat.col1.y;normal1Local2Y=normal1Local2X*tMat.col2.x+normal1Local2Y*tMat.col2.y;normal1Local2X=tX;var vertex21=0;var vertex22=0;var minDot=Number.MAX_VALUE;for(var i=0;i<count2;++i)
			{var i1=i;var i2=i+1<count2?i+1:0;tVec=vert2s[i2];var normal2Local2X=tVec.x;var normal2Local2Y=tVec.y;tVec=vert2s[i1];normal2Local2X-=tVec.x;normal2Local2Y-=tVec.y;tX=normal2Local2X;normal2Local2X=normal2Local2Y;normal2Local2Y=-tX;invLength=1.0/Math.sqrt(normal2Local2X*normal2Local2X+normal2Local2Y*normal2Local2Y);normal2Local2X*=invLength;normal2Local2Y*=invLength;var dot=normal2Local2X*normal1Local2X+normal2Local2Y*normal1Local2Y;if(dot<minDot)
			{minDot=dot;vertex21=i1;vertex22=i2;}}
			var tClip;tClip=c[0];tVec=tClip.v;tVec.SetV(vert2s[vertex21]);tVec.MulM(poly2.m_R);tVec.Add(poly2.m_position);tClip.id.features.referenceFace=edge1;tClip.id.features.incidentEdge=vertex21;tClip.id.features.incidentVertex=vertex21;tClip=c[1];tVec=tClip.v;tVec.SetV(vert2s[vertex22]);tVec.MulM(poly2.m_R);tVec.Add(poly2.m_position);tClip.id.features.referenceFace=edge1;tClip.id.features.incidentEdge=vertex21;tClip.id.features.incidentVertex=vertex22;};b2Collision.b2CollidePolyTempVec=new b2Vec2();b2Collision.b2CollidePoly=function(manifold,polyA,polyB,conservative)
			{manifold.pointCount=0;var edgeA=0;var edgeAOut=[edgeA];var separationA=b2Collision.FindMaxSeparation(edgeAOut,polyA,polyB,conservative);edgeA=edgeAOut[0];if(separationA>0.0&&conservative==false)
			return;var edgeB=0;var edgeBOut=[edgeB];var separationB=b2Collision.FindMaxSeparation(edgeBOut,polyB,polyA,conservative);edgeB=edgeBOut[0];if(separationB>0.0&&conservative==false)
			return;var poly1;var poly2;var edge1=0;var flip=0;var k_relativeTol=0.98;var k_absoluteTol=0.001;if(separationB>k_relativeTol*separationA+k_absoluteTol)
			{poly1=polyB;poly2=polyA;edge1=edgeB;flip=1;}
			else
			{poly1=polyA;poly2=polyB;edge1=edgeA;flip=0;}
			var incidentEdge=[new ClipVertex(),new ClipVertex()];b2Collision.FindIncidentEdge(incidentEdge,poly1,edge1,poly2);var count1=poly1.m_vertexCount;var vert1s=poly1.m_vertices;var v11=vert1s[edge1];var v12=edge1+1<count1?vert1s[edge1+1]:vert1s[0];var dvX=v12.x-v11.x;var dvY=v12.y-v11.y;var sideNormalX=v12.x-v11.x;var sideNormalY=v12.y-v11.y;var tX=sideNormalX;var tMat=poly1.m_R;sideNormalX=tMat.col1.x*tX+tMat.col2.x*sideNormalY;sideNormalY=tMat.col1.y*tX+tMat.col2.y*sideNormalY;var invLength=1.0/Math.sqrt(sideNormalX*sideNormalX+sideNormalY*sideNormalY);sideNormalX*=invLength;sideNormalY*=invLength;var frontNormalX=sideNormalX;var frontNormalY=sideNormalY;tX=frontNormalX;frontNormalX=frontNormalY;frontNormalY=-tX;var v11X=v11.x;var v11Y=v11.y;tX=v11X;tMat=poly1.m_R;v11X=tMat.col1.x*tX+tMat.col2.x*v11Y;v11Y=tMat.col1.y*tX+tMat.col2.y*v11Y;v11X+=poly1.m_position.x;v11Y+=poly1.m_position.y;var v12X=v12.x;var v12Y=v12.y;tX=v12X;tMat=poly1.m_R;v12X=tMat.col1.x*tX+tMat.col2.x*v12Y;v12Y=tMat.col1.y*tX+tMat.col2.y*v12Y;v12X+=poly1.m_position.x;v12Y+=poly1.m_position.y;var frontOffset=frontNormalX*v11X+frontNormalY*v11Y;var sideOffset1=-(sideNormalX*v11X+sideNormalY*v11Y);var sideOffset2=sideNormalX*v12X+sideNormalY*v12Y;var clipPoints1=[new ClipVertex(),new ClipVertex()];var clipPoints2=[new ClipVertex(),new ClipVertex()];var np=0;b2Collision.b2CollidePolyTempVec.Set(-sideNormalX,-sideNormalY);np=b2Collision.ClipSegmentToLine(clipPoints1,incidentEdge,b2Collision.b2CollidePolyTempVec,sideOffset1);if(np<2)
			return;b2Collision.b2CollidePolyTempVec.Set(sideNormalX,sideNormalY);np=b2Collision.ClipSegmentToLine(clipPoints2,clipPoints1,b2Collision.b2CollidePolyTempVec,sideOffset2);if(np<2)
			return;if(flip){manifold.normal.Set(-frontNormalX,-frontNormalY);}
			else{manifold.normal.Set(frontNormalX,frontNormalY);}
			var pointCount=0;for(var i=0;i<b2Settings.b2_maxManifoldPoints;++i)
			{var tVec=clipPoints2[i].v;var separation=(frontNormalX*tVec.x+frontNormalY*tVec.y)-frontOffset;if(separation<=0.0||conservative==true)
			{var cp=manifold.points[pointCount];cp.separation=separation;cp.position.SetV(clipPoints2[i].v);cp.id.Set(clipPoints2[i].id);cp.id.features.flip=flip;++pointCount;}}
			manifold.pointCount=pointCount;};b2Collision.b2CollideCircle=function(manifold,circle1,circle2,conservative)
			{manifold.pointCount=0;var dX=circle2.m_position.x-circle1.m_position.x;var dY=circle2.m_position.y-circle1.m_position.y;var distSqr=dX*dX+dY*dY;var radiusSum=circle1.m_radius+circle2.m_radius;if(distSqr>radiusSum*radiusSum&&conservative==false)
			{return;}
			var separation;if(distSqr<Number.MIN_VALUE)
			{separation=-radiusSum;manifold.normal.Set(0.0,1.0);}
			else
			{var dist=Math.sqrt(distSqr);separation=dist-radiusSum;var a=1.0/dist;manifold.normal.x=a*dX;manifold.normal.y=a*dY;}
			manifold.pointCount=1;var tPoint=manifold.points[0];tPoint.id.set_key(0);tPoint.separation=separation;tPoint.position.x=circle2.m_position.x-(circle2.m_radius*manifold.normal.x);tPoint.position.y=circle2.m_position.y-(circle2.m_radius*manifold.normal.y);};b2Collision.b2CollidePolyAndCircle=function(manifold,poly,circle,conservative)
			{manifold.pointCount=0;var tPoint;var dX;var dY;var xLocalX=circle.m_position.x-poly.m_position.x;var xLocalY=circle.m_position.y-poly.m_position.y;var tMat=poly.m_R;var tX=xLocalX*tMat.col1.x+xLocalY*tMat.col1.y;xLocalY=xLocalX*tMat.col2.x+xLocalY*tMat.col2.y;xLocalX=tX;var dist;var normalIndex=0;var separation=-Number.MAX_VALUE;var radius=circle.m_radius;for(var i=0;i<poly.m_vertexCount;++i)
			{var s=poly.m_normals[i].x*(xLocalX-poly.m_vertices[i].x)+poly.m_normals[i].y*(xLocalY-poly.m_vertices[i].y);if(s>radius)
			{return;}
			if(s>separation)
			{separation=s;normalIndex=i;}}
			if(separation<Number.MIN_VALUE)
			{manifold.pointCount=1;var tVec=poly.m_normals[normalIndex];manifold.normal.x=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;manifold.normal.y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tPoint=manifold.points[0];tPoint.id.features.incidentEdge=normalIndex;tPoint.id.features.incidentVertex=b2Collision.b2_nullFeature;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=separation-radius;return;}
			var vertIndex1=normalIndex;var vertIndex2=vertIndex1+1<poly.m_vertexCount?vertIndex1+1:0;var eX=poly.m_vertices[vertIndex2].x-poly.m_vertices[vertIndex1].x;var eY=poly.m_vertices[vertIndex2].y-poly.m_vertices[vertIndex1].y;var length=Math.sqrt(eX*eX+eY*eY);eX/=length;eY/=length;if(length<Number.MIN_VALUE)
			{dX=xLocalX-poly.m_vertices[vertIndex1].x;dY=xLocalY-poly.m_vertices[vertIndex1].y;dist=Math.sqrt(dX*dX+dY*dY);dX/=dist;dY/=dist;if(dist>radius)
			{return;}
			manifold.pointCount=1;manifold.normal.Set(tMat.col1.x*dX+tMat.col2.x*dY,tMat.col1.y*dX+tMat.col2.y*dY);tPoint=manifold.points[0];tPoint.id.features.incidentEdge=b2Collision.b2_nullFeature;tPoint.id.features.incidentVertex=vertIndex1;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=dist-radius;return;}
			var u=(xLocalX-poly.m_vertices[vertIndex1].x)*eX+(xLocalY-poly.m_vertices[vertIndex1].y)*eY;tPoint=manifold.points[0];tPoint.id.features.incidentEdge=b2Collision.b2_nullFeature;tPoint.id.features.incidentVertex=b2Collision.b2_nullFeature;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;var pX,pY;if(u<=0.0)
			{pX=poly.m_vertices[vertIndex1].x;pY=poly.m_vertices[vertIndex1].y;tPoint.id.features.incidentVertex=vertIndex1;}
			else if(u>=length)
			{pX=poly.m_vertices[vertIndex2].x;pY=poly.m_vertices[vertIndex2].y;tPoint.id.features.incidentVertex=vertIndex2;}
			else
			{pX=eX*u+poly.m_vertices[vertIndex1].x;pY=eY*u+poly.m_vertices[vertIndex1].y;tPoint.id.features.incidentEdge=vertIndex1;}
			dX=xLocalX-pX;dY=xLocalY-pY;dist=Math.sqrt(dX*dX+dY*dY);dX/=dist;dY/=dist;if(dist>radius)
			{return;}
			manifold.pointCount=1;manifold.normal.Set(tMat.col1.x*dX+tMat.col2.x*dY,tMat.col1.y*dX+tMat.col2.y*dY);tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=dist-radius;};b2Collision.b2TestOverlap=function(a,b)
			{var t1=b.minVertex;var t2=a.maxVertex;var d1X=t1.x-t2.x;var d1Y=t1.y-t2.y;t1=a.minVertex;t2=b.maxVertex;var d2X=t1.x-t2.x;var d2Y=t1.y-t2.y;if(d1X>0.0||d1Y>0.0)
			return false;if(d2X>0.0||d2Y>0.0)
			return false;return true;};
			var Features=Class.create();Features.prototype={set_referenceFace:function(value){this._referenceFace=value;this._m_id._key=(this._m_id._key&0xffffff00)|(this._referenceFace&0x000000ff)},get_referenceFace:function(){return this._referenceFace;},_referenceFace:0,set_incidentEdge:function(value){this._incidentEdge=value;this._m_id._key=(this._m_id._key&0xffff00ff)|((this._incidentEdge<<8)&0x0000ff00)},get_incidentEdge:function(){return this._incidentEdge;},_incidentEdge:0,set_incidentVertex:function(value){this._incidentVertex=value;this._m_id._key=(this._m_id._key&0xff00ffff)|((this._incidentVertex<<16)&0x00ff0000)},get_incidentVertex:function(){return this._incidentVertex;},_incidentVertex:0,set_flip:function(value){this._flip=value;this._m_id._key=(this._m_id._key&0x00ffffff)|((this._flip<<24)&0xff000000)},get_flip:function(){return this._flip;},_flip:0,_m_id:null,initialize:function(){}};
			var b2ContactID=Class.create();b2ContactID.prototype={initialize:function(){this.features=new Features();this.features._m_id=this;},Set:function(id){this.set_key(id._key);},Copy:function(){var id=new b2ContactID();id.set_key(this._key);return id;},get_key:function(){return this._key;},set_key:function(value){this._key=value;this.features._referenceFace=this._key&0x000000ff;this.features._incidentEdge=((this._key&0x0000ff00)>>8)&0x000000ff;this.features._incidentVertex=((this._key&0x00ff0000)>>16)&0x000000ff;this.features._flip=((this._key&0xff000000)>>24)&0x000000ff;},features:new Features(),_key:0};
			var b2ContactPoint=Class.create();b2ContactPoint.prototype={position:new b2Vec2(),separation:null,normalImpulse:null,tangentImpulse:null,id:new b2ContactID(),initialize:function(){this.position=new b2Vec2();this.id=new b2ContactID();}};var b2Distance=Class.create();b2Distance.prototype={initialize:function(){}};b2Distance.ProcessTwo=function(p1Out,p2Out,p1s,p2s,points)
			{var rX=-points[1].x;var rY=-points[1].y;var dX=points[0].x-points[1].x;var dY=points[0].y-points[1].y;var length=Math.sqrt(dX*dX+dY*dY);dX/=length;dY/=length;var lambda=rX*dX+rY*dY;if(lambda<=0.0||length<Number.MIN_VALUE)
			{p1Out.SetV(p1s[1]);p2Out.SetV(p2s[1]);p1s[0].SetV(p1s[1]);p2s[0].SetV(p2s[1]);points[0].SetV(points[1]);return 1;}
			lambda/=length;p1Out.x=p1s[1].x+lambda*(p1s[0].x-p1s[1].x);p1Out.y=p1s[1].y+lambda*(p1s[0].y-p1s[1].y);p2Out.x=p2s[1].x+lambda*(p2s[0].x-p2s[1].x);p2Out.y=p2s[1].y+lambda*(p2s[0].y-p2s[1].y);return 2;};b2Distance.ProcessThree=function(p1Out,p2Out,p1s,p2s,points)
			{var aX=points[0].x;var aY=points[0].y;var bX=points[1].x;var bY=points[1].y;var cX=points[2].x;var cY=points[2].y;var abX=bX-aX;var abY=bY-aY;var acX=cX-aX;var acY=cY-aY;var bcX=cX-bX;var bcY=cY-bY;var sn=-(aX*abX+aY*abY);var sd=(bX*abX+bY*abY);var tn=-(aX*acX+aY*acY);var td=(cX*acX+cY*acY);var un=-(bX*bcX+bY*bcY);var ud=(cX*bcX+cY*bcY);if(td<=0.0&&ud<=0.0)
			{p1Out.SetV(p1s[2]);p2Out.SetV(p2s[2]);p1s[0].SetV(p1s[2]);p2s[0].SetV(p2s[2]);points[0].SetV(points[2]);return 1;}
			var n=abX*acY-abY*acX;var vc=n*(aX*bY-aY*bX);var va=n*(bX*cY-bY*cX);if(va<=0.0&&un>=0.0&&ud>=0.0)
			{var lambda=un/(un+ud);p1Out.x=p1s[1].x+lambda*(p1s[2].x-p1s[1].x);p1Out.y=p1s[1].y+lambda*(p1s[2].y-p1s[1].y);p2Out.x=p2s[1].x+lambda*(p2s[2].x-p2s[1].x);p2Out.y=p2s[1].y+lambda*(p2s[2].y-p2s[1].y);p1s[0].SetV(p1s[2]);p2s[0].SetV(p2s[2]);points[0].SetV(points[2]);return 2;}
			var vb=n*(cX*aY-cY*aX);if(vb<=0.0&&tn>=0.0&&td>=0.0)
			{var lambda=tn/(tn+td);p1Out.x=p1s[0].x+lambda*(p1s[2].x-p1s[0].x);p1Out.y=p1s[0].y+lambda*(p1s[2].y-p1s[0].y);p2Out.x=p2s[0].x+lambda*(p2s[2].x-p2s[0].x);p2Out.y=p2s[0].y+lambda*(p2s[2].y-p2s[0].y);p1s[1].SetV(p1s[2]);p2s[1].SetV(p2s[2]);points[1].SetV(points[2]);return 2;}
			var denom=va+vb+vc;denom=1.0/denom;var u=va*denom;var v=vb*denom;var w=1.0-u-v;p1Out.x=u*p1s[0].x+v*p1s[1].x+w*p1s[2].x;p1Out.y=u*p1s[0].y+v*p1s[1].y+w*p1s[2].y;p2Out.x=u*p2s[0].x+v*p2s[1].x+w*p2s[2].x;p2Out.y=u*p2s[0].y+v*p2s[1].y+w*p2s[2].y;return 3;};b2Distance.InPoinsts=function(w,points,pointCount)
			{for(var i=0;i<pointCount;++i)
			{if(w.x==points[i].x&&w.y==points[i].y)
			{return true;}}
			return false;};b2Distance.Distance=function(p1Out,p2Out,shape1,shape2)
			{var p1s=new Array(3);var p2s=new Array(3);var points=new Array(3);var pointCount=0;p1Out.SetV(shape1.m_position);p2Out.SetV(shape2.m_position);var vSqr=0.0;var maxIterations=20;for(var iter=0;iter<maxIterations;++iter)
			{var vX=p2Out.x-p1Out.x;var vY=p2Out.y-p1Out.y;var w1=shape1.Support(vX,vY);var w2=shape2.Support(-vX,-vY);vSqr=(vX*vX+vY*vY);var wX=w2.x-w1.x;var wY=w2.y-w1.y;var vw=(vX*wX+vY*wY);if(vSqr-b2Dot(vX*wX+vY*wY)<=0.01*vSqr)
			{if(pointCount==0)
			{p1Out.SetV(w1);p2Out.SetV(w2);}
			b2Distance.g_GJK_Iterations=iter;return Math.sqrt(vSqr);}
			switch(pointCount)
			{case 0:p1s[0].SetV(w1);p2s[0].SetV(w2);points[0]=w;p1Out.SetV(p1s[0]);p2Out.SetV(p2s[0]);++pointCount;break;case 1:p1s[1].SetV(w1);p2s[1].SetV(w2);points[1].x=wX;points[1].y=wY;pointCount=b2Distance.ProcessTwo(p1Out,p2Out,p1s,p2s,points);break;case 2:p1s[2].SetV(w1);p2s[2].SetV(w2);points[2].x=wX;points[2].y=wY;pointCount=b2Distance.ProcessThree(p1Out,p2Out,p1s,p2s,points);break;}
			if(pointCount==3)
			{b2Distance.g_GJK_Iterations=iter;return 0.0;}
			var maxSqr=-Number.MAX_VALUE;for(var i=0;i<pointCount;++i)
			{maxSqr=b2Math.b2Max(maxSqr,(points[i].x*points[i].x+points[i].y*points[i].y));}
			if(pointCount==3||vSqr<=100.0*Number.MIN_VALUE*maxSqr)
			{b2Distance.g_GJK_Iterations=iter;return Math.sqrt(vSqr);}}
			b2Distance.g_GJK_Iterations=maxIterations;return Math.sqrt(vSqr);};b2Distance.g_GJK_Iterations=0;
			var b2Manifold=Class.create();b2Manifold.prototype={initialize:function(){this.points=new Array(b2Settings.b2_maxManifoldPoints);for(var i=0;i<b2Settings.b2_maxManifoldPoints;i++){this.points[i]=new b2ContactPoint();}
			this.normal=new b2Vec2();},points:null,normal:null,pointCount:0};
			var b2OBB=Class.create();b2OBB.prototype={R:new b2Mat22(),center:new b2Vec2(),extents:new b2Vec2(),initialize:function(){this.R=new b2Mat22();this.center=new b2Vec2();this.extents=new b2Vec2();}};
			var b2Proxy=Class.create();b2Proxy.prototype={GetNext:function(){return this.lowerBounds[0];},SetNext:function(next){this.lowerBounds[0]=next;},IsValid:function(){return this.overlapCount!=b2BroadPhase.b2_invalid;},lowerBounds:[(0),(0)],upperBounds:[(0),(0)],overlapCount:0,timeStamp:0,userData:null,initialize:function(){this.lowerBounds=[(0),(0)];this.upperBounds=[(0),(0)];}}
			
			var ClipVertex=Class.create();ClipVertex.prototype={v:new b2Vec2(),id:new b2ContactID(),initialize:function(){this.v=new b2Vec2();this.id=new b2ContactID();}};var b2Shape=Class.create();b2Shape.prototype={TestPoint:function(p){return false},GetUserData:function(){return this.m_userData;},GetType:function(){return this.m_type;},GetBody:function(){return this.m_body;},GetPosition:function(){return this.m_position;},GetRotationMatrix:function(){return this.m_R;},ResetProxy:function(broadPhase){},GetNext:function(){return this.m_next;},initialize:function(def,body){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;},DestroyProxy:function()
			{if(this.m_proxyId!=b2Pair.b2_nullProxy)
			{this.m_body.m_world.m_broadPhase.DestroyProxy(this.m_proxyId);this.m_proxyId=b2Pair.b2_nullProxy;}},Synchronize:function(position1,R1,position2,R2){},QuickSync:function(position,R){},Support:function(dX,dY,out){},GetMaxRadius:function(){return this.m_maxRadius;},m_next:null,m_R:new b2Mat22(),m_position:new b2Vec2(),m_type:0,m_userData:null,m_body:null,m_friction:null,m_restitution:null,m_maxRadius:null,m_proxyId:0,m_categoryBits:0,m_maskBits:0,m_groupIndex:0};b2Shape.Create=function(def,body,center){switch(def.type)
			{case b2Shape.e_circleShape:{return new b2CircleShape(def,body,center);}
			case b2Shape.e_boxShape:case b2Shape.e_polyShape:{return new b2PolyShape(def,body,center);}}
			return null;};b2Shape.Destroy=function(shape)
			{if(shape.m_proxyId!=b2Pair.b2_nullProxy)
			shape.m_body.m_world.m_broadPhase.DestroyProxy(shape.m_proxyId);};b2Shape.e_unknownShape=-1;b2Shape.e_circleShape=0;b2Shape.e_boxShape=1;b2Shape.e_polyShape=2;b2Shape.e_meshShape=3;b2Shape.e_shapeTypeCount=4;b2Shape.PolyMass=function(massData,vs,count,rho)
			{var center=new b2Vec2();center.SetZero();var area=0.0;var I=0.0;var pRef=new b2Vec2(0.0,0.0);var inv3=1.0/3.0;for(var i=0;i<count;++i)
			{var p1=pRef;var p2=vs[i];var p3=i+1<count?vs[i+1]:vs[0];var e1=b2Math.SubtractVV(p2,p1);var e2=b2Math.SubtractVV(p3,p1);var D=b2Math.b2CrossVV(e1,e2);var triangleArea=0.5*D;area+=triangleArea;var tVec=new b2Vec2();tVec.SetV(p1);tVec.Add(p2);tVec.Add(p3);tVec.Multiply(inv3*triangleArea);center.Add(tVec);var px=p1.x;var py=p1.y;var ex1=e1.x;var ey1=e1.y;var ex2=e2.x;var ey2=e2.y;var intx2=inv3*(0.25*(ex1*ex1+ex2*ex1+ex2*ex2)+(px*ex1+px*ex2))+0.5*px*px;var inty2=inv3*(0.25*(ey1*ey1+ey2*ey1+ey2*ey2)+(py*ey1+py*ey2))+0.5*py*py;I+=D*(intx2+inty2);}
			massData.mass=rho*area;center.Multiply(1.0/area);massData.center=center;I=rho*(I-area*b2Math.b2Dot(center,center));massData.I=I;};b2Shape.PolyCentroid=function(vs,count,out)
			{var cX=0.0;var cY=0.0;var area=0.0;var pRefX=0.0;var pRefY=0.0;var inv3=1.0/3.0;for(var i=0;i<count;++i)
			{var p1X=pRefX;var p1Y=pRefY;var p2X=vs[i].x;var p2Y=vs[i].y;var p3X=i+1<count?vs[i+1].x:vs[0].x;var p3Y=i+1<count?vs[i+1].y:vs[0].y;var e1X=p2X-p1X;var e1Y=p2Y-p1Y;var e2X=p3X-p1X;var e2Y=p3Y-p1Y;var D=(e1X*e2Y-e1Y*e2X);var triangleArea=0.5*D;area+=triangleArea;cX+=triangleArea*inv3*(p1X+p2X+p3X);cY+=triangleArea*inv3*(p1Y+p2Y+p3Y);}
			cX*=1.0/area;cY*=1.0/area;out.Set(cX,cY);};
			var b2ShapeDef=Class.create();b2ShapeDef.prototype={initialize:function()
			{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;},ComputeMass:function(massData)
			{massData.center=new b2Vec2(0.0,0.0)
			if(this.density==0.0)
			{massData.mass=0.0;massData.center.Set(0.0,0.0);massData.I=0.0;};switch(this.type)
			{case b2Shape.e_circleShape:{var circle=this;massData.mass=this.density*b2Settings.b2_pi*circle.radius*circle.radius;massData.center.Set(0.0,0.0);massData.I=0.5*(massData.mass)*circle.radius*circle.radius;}
			break;case b2Shape.e_boxShape:{var box=this;massData.mass=4.0*this.density*box.extents.x*box.extents.y;massData.center.Set(0.0,0.0);massData.I=massData.mass/3.0*b2Math.b2Dot(box.extents,box.extents);}
			break;case b2Shape.e_polyShape:{var poly=this;b2Shape.PolyMass(massData,poly.vertices,poly.vertexCount,this.density);}
			break;default:massData.mass=0.0;massData.center.Set(0.0,0.0);massData.I=0.0;break;}},type:0,userData:null,localPosition:null,localRotation:null,friction:null,restitution:null,density:null,categoryBits:0,maskBits:0,groupIndex:0};
			var b2BoxDef=Class.create();Object.extend(b2BoxDef.prototype,b2ShapeDef.prototype);Object.extend(b2BoxDef.prototype,{initialize:function()
			{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.type=b2Shape.e_boxShape;this.extents=new b2Vec2(1.0,1.0);},extents:null});
			var b2CircleDef=Class.create();Object.extend(b2CircleDef.prototype,b2ShapeDef.prototype);Object.extend(b2CircleDef.prototype,{initialize:function()
			{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.type=b2Shape.e_circleShape;this.radius=1.0;},radius:null});var b2CircleShape=Class.create();Object.extend(b2CircleShape.prototype,b2Shape.prototype);Object.extend(b2CircleShape.prototype,{TestPoint:function(p){var d=new b2Vec2();d.SetV(p);d.Subtract(this.m_position);return b2Math.b2Dot(d,d)<=this.m_radius*this.m_radius;},initialize:function(def,body,localCenter){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;this.m_localPosition=new b2Vec2();var circle=def;this.m_localPosition.Set(def.localPosition.x-localCenter.x,def.localPosition.y-localCenter.y);this.m_type=b2Shape.e_circleShape;this.m_radius=circle.radius;this.m_R.SetM(this.m_body.m_R);var rX=this.m_R.col1.x*this.m_localPosition.x+this.m_R.col2.x*this.m_localPosition.y;var rY=this.m_R.col1.y*this.m_localPosition.x+this.m_R.col2.y*this.m_localPosition.y;this.m_position.x=this.m_body.m_position.x+rX;this.m_position.y=this.m_body.m_position.y+rY;this.m_maxRadius=Math.sqrt(rX*rX+rY*rY)+this.m_radius;var aabb=new b2AABB();aabb.minVertex.Set(this.m_position.x-this.m_radius,this.m_position.y-this.m_radius);aabb.maxVertex.Set(this.m_position.x+this.m_radius,this.m_position.y+this.m_radius);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
			{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
			else
			{this.m_proxyId=b2Pair.b2_nullProxy;}
			if(this.m_proxyId==b2Pair.b2_nullProxy)
			{this.m_body.Freeze();}},Synchronize:function(position1,R1,position2,R2){this.m_R.SetM(R2);this.m_position.x=(R2.col1.x*this.m_localPosition.x+R2.col2.x*this.m_localPosition.y)+position2.x;this.m_position.y=(R2.col1.y*this.m_localPosition.x+R2.col2.y*this.m_localPosition.y)+position2.y;if(this.m_proxyId==b2Pair.b2_nullProxy)
			{return;}
			var p1X=position1.x+(R1.col1.x*this.m_localPosition.x+R1.col2.x*this.m_localPosition.y);var p1Y=position1.y+(R1.col1.y*this.m_localPosition.x+R1.col2.y*this.m_localPosition.y);var lowerX=Math.min(p1X,this.m_position.x);var lowerY=Math.min(p1Y,this.m_position.y);var upperX=Math.max(p1X,this.m_position.x);var upperY=Math.max(p1Y,this.m_position.y);var aabb=new b2AABB();aabb.minVertex.Set(lowerX-this.m_radius,lowerY-this.m_radius);aabb.maxVertex.Set(upperX+this.m_radius,upperY+this.m_radius);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
			{broadPhase.MoveProxy(this.m_proxyId,aabb);}
			else
			{this.m_body.Freeze();}},QuickSync:function(position,R){this.m_R.SetM(R);this.m_position.x=(R.col1.x*this.m_localPosition.x+R.col2.x*this.m_localPosition.y)+position.x;this.m_position.y=(R.col1.y*this.m_localPosition.x+R.col2.y*this.m_localPosition.y)+position.y;},ResetProxy:function(broadPhase)
			{if(this.m_proxyId==b2Pair.b2_nullProxy)
			{return;}
			var proxy=broadPhase.GetProxy(this.m_proxyId);broadPhase.DestroyProxy(this.m_proxyId);proxy=null;var aabb=new b2AABB();aabb.minVertex.Set(this.m_position.x-this.m_radius,this.m_position.y-this.m_radius);aabb.maxVertex.Set(this.m_position.x+this.m_radius,this.m_position.y+this.m_radius);if(broadPhase.InRange(aabb))
			{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
			else
			{this.m_proxyId=b2Pair.b2_nullProxy;}
			if(this.m_proxyId==b2Pair.b2_nullProxy)
			{this.m_body.Freeze();}},Support:function(dX,dY,out)
			{var len=Math.sqrt(dX*dX+dY*dY);dX/=len;dY/=len;out.Set(this.m_position.x+this.m_radius*dX,this.m_position.y+this.m_radius*dY);},m_localPosition:new b2Vec2(),m_radius:null});
			var b2MassData=Class.create();b2MassData.prototype={mass:0.0,center:new b2Vec2(0,0),I:0.0,initialize:function(){this.center=new b2Vec2(0,0);}}
			
			var b2PolyDef=Class.create();Object.extend(b2PolyDef.prototype,b2ShapeDef.prototype);Object.extend(b2PolyDef.prototype,{initialize:function()
			{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.vertices=new Array(b2Settings.b2_maxPolyVertices);this.type=b2Shape.e_polyShape;this.vertexCount=0;for(var i=0;i<b2Settings.b2_maxPolyVertices;i++){this.vertices[i]=new b2Vec2();}},vertices:new Array(b2Settings.b2_maxPolyVertices),vertexCount:0});var b2PolyShape=Class.create();Object.extend(b2PolyShape.prototype,b2Shape.prototype);Object.extend(b2PolyShape.prototype,{TestPoint:function(p){var pLocal=new b2Vec2();pLocal.SetV(p);pLocal.Subtract(this.m_position);pLocal.MulTM(this.m_R);for(var i=0;i<this.m_vertexCount;++i)
			{var tVec=new b2Vec2();tVec.SetV(pLocal);tVec.Subtract(this.m_vertices[i]);var dot=b2Math.b2Dot(this.m_normals[i],tVec);if(dot>0.0)
			{return false;}}
			return true;},initialize:function(def,body,newOrigin){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;this.syncAABB=new b2AABB();this.syncMat=new b2Mat22();this.m_localCentroid=new b2Vec2();this.m_localOBB=new b2OBB();var i=0;var hX;var hY;var tVec;var aabb=new b2AABB();this.m_vertices=new Array(b2Settings.b2_maxPolyVertices);this.m_coreVertices=new Array(b2Settings.b2_maxPolyVertices);this.m_normals=new Array(b2Settings.b2_maxPolyVertices);this.m_type=b2Shape.e_polyShape;var localR=new b2Mat22(def.localRotation);if(def.type==b2Shape.e_boxShape)
			{this.m_localCentroid.x=def.localPosition.x-newOrigin.x;this.m_localCentroid.y=def.localPosition.y-newOrigin.y;var box=def;this.m_vertexCount=4;hX=box.extents.x;hY=box.extents.y;var hcX=Math.max(0.0,hX-2.0*b2Settings.b2_linearSlop);var hcY=Math.max(0.0,hY-2.0*b2Settings.b2_linearSlop);tVec=this.m_vertices[0]=new b2Vec2();tVec.x=localR.col1.x*hX+localR.col2.x*hY;tVec.y=localR.col1.y*hX+localR.col2.y*hY;tVec=this.m_vertices[1]=new b2Vec2();tVec.x=localR.col1.x*-hX+localR.col2.x*hY;tVec.y=localR.col1.y*-hX+localR.col2.y*hY;tVec=this.m_vertices[2]=new b2Vec2();tVec.x=localR.col1.x*-hX+localR.col2.x*-hY;tVec.y=localR.col1.y*-hX+localR.col2.y*-hY;tVec=this.m_vertices[3]=new b2Vec2();tVec.x=localR.col1.x*hX+localR.col2.x*-hY;tVec.y=localR.col1.y*hX+localR.col2.y*-hY;tVec=this.m_coreVertices[0]=new b2Vec2();tVec.x=localR.col1.x*hcX+localR.col2.x*hcY;tVec.y=localR.col1.y*hcX+localR.col2.y*hcY;tVec=this.m_coreVertices[1]=new b2Vec2();tVec.x=localR.col1.x*-hcX+localR.col2.x*hcY;tVec.y=localR.col1.y*-hcX+localR.col2.y*hcY;tVec=this.m_coreVertices[2]=new b2Vec2();tVec.x=localR.col1.x*-hcX+localR.col2.x*-hcY;tVec.y=localR.col1.y*-hcX+localR.col2.y*-hcY;tVec=this.m_coreVertices[3]=new b2Vec2();tVec.x=localR.col1.x*hcX+localR.col2.x*-hcY;tVec.y=localR.col1.y*hcX+localR.col2.y*-hcY;}
			else
			{var poly=def;this.m_vertexCount=poly.vertexCount;b2Shape.PolyCentroid(poly.vertices,poly.vertexCount,b2PolyShape.tempVec);var centroidX=b2PolyShape.tempVec.x;var centroidY=b2PolyShape.tempVec.y;this.m_localCentroid.x=def.localPosition.x+(localR.col1.x*centroidX+localR.col2.x*centroidY)-newOrigin.x;this.m_localCentroid.y=def.localPosition.y+(localR.col1.y*centroidX+localR.col2.y*centroidY)-newOrigin.y;for(i=0;i<this.m_vertexCount;++i)
			{this.m_vertices[i]=new b2Vec2();this.m_coreVertices[i]=new b2Vec2();hX=poly.vertices[i].x-centroidX;hY=poly.vertices[i].y-centroidY;this.m_vertices[i].x=localR.col1.x*hX+localR.col2.x*hY;this.m_vertices[i].y=localR.col1.y*hX+localR.col2.y*hY;var uX=this.m_vertices[i].x;var uY=this.m_vertices[i].y;var length=Math.sqrt(uX*uX+uY*uY);if(length>Number.MIN_VALUE)
			{uX*=1.0/length;uY*=1.0/length;}
			this.m_coreVertices[i].x=this.m_vertices[i].x-2.0*b2Settings.b2_linearSlop*uX;this.m_coreVertices[i].y=this.m_vertices[i].y-2.0*b2Settings.b2_linearSlop*uY;}}
			var minVertexX=Number.MAX_VALUE;var minVertexY=Number.MAX_VALUE;var maxVertexX=-Number.MAX_VALUE;var maxVertexY=-Number.MAX_VALUE;this.m_maxRadius=0.0;for(i=0;i<this.m_vertexCount;++i)
			{var v=this.m_vertices[i];minVertexX=Math.min(minVertexX,v.x);minVertexY=Math.min(minVertexY,v.y);maxVertexX=Math.max(maxVertexX,v.x);maxVertexY=Math.max(maxVertexY,v.y);this.m_maxRadius=Math.max(this.m_maxRadius,v.Length());}
			this.m_localOBB.R.SetIdentity();this.m_localOBB.center.Set((minVertexX+maxVertexX)*0.5,(minVertexY+maxVertexY)*0.5);this.m_localOBB.extents.Set((maxVertexX-minVertexX)*0.5,(maxVertexY-minVertexY)*0.5);var i1=0;var i2=0;for(i=0;i<this.m_vertexCount;++i)
			{this.m_normals[i]=new b2Vec2();i1=i;i2=i+1<this.m_vertexCount?i+1:0;this.m_normals[i].x=this.m_vertices[i2].y-this.m_vertices[i1].y;this.m_normals[i].y=-(this.m_vertices[i2].x-this.m_vertices[i1].x);this.m_normals[i].Normalize();}
			for(i=0;i<this.m_vertexCount;++i)
			{i1=i;i2=i+1<this.m_vertexCount?i+1:0;}
			this.m_R.SetM(this.m_body.m_R);this.m_position.x=this.m_body.m_position.x+(this.m_R.col1.x*this.m_localCentroid.x+this.m_R.col2.x*this.m_localCentroid.y);this.m_position.y=this.m_body.m_position.y+(this.m_R.col1.y*this.m_localCentroid.x+this.m_R.col2.y*this.m_localCentroid.y);b2PolyShape.tAbsR.col1.x=this.m_R.col1.x*this.m_localOBB.R.col1.x+this.m_R.col2.x*this.m_localOBB.R.col1.y;b2PolyShape.tAbsR.col1.y=this.m_R.col1.y*this.m_localOBB.R.col1.x+this.m_R.col2.y*this.m_localOBB.R.col1.y;b2PolyShape.tAbsR.col2.x=this.m_R.col1.x*this.m_localOBB.R.col2.x+this.m_R.col2.x*this.m_localOBB.R.col2.y;b2PolyShape.tAbsR.col2.y=this.m_R.col1.y*this.m_localOBB.R.col2.x+this.m_R.col2.y*this.m_localOBB.R.col2.y;b2PolyShape.tAbsR.Abs()
			hX=b2PolyShape.tAbsR.col1.x*this.m_localOBB.extents.x+b2PolyShape.tAbsR.col2.x*this.m_localOBB.extents.y;hY=b2PolyShape.tAbsR.col1.y*this.m_localOBB.extents.x+b2PolyShape.tAbsR.col2.y*this.m_localOBB.extents.y;var positionX=this.m_position.x+(this.m_R.col1.x*this.m_localOBB.center.x+this.m_R.col2.x*this.m_localOBB.center.y);var positionY=this.m_position.y+(this.m_R.col1.y*this.m_localOBB.center.x+this.m_R.col2.y*this.m_localOBB.center.y);aabb.minVertex.x=positionX-hX;aabb.minVertex.y=positionY-hY;aabb.maxVertex.x=positionX+hX;aabb.maxVertex.y=positionY+hY;var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
			{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
			else
			{this.m_proxyId=b2Pair.b2_nullProxy;}
			if(this.m_proxyId==b2Pair.b2_nullProxy)
			{this.m_body.Freeze();}},syncAABB:new b2AABB(),syncMat:new b2Mat22(),Synchronize:function(position1,R1,position2,R2){this.m_R.SetM(R2);this.m_position.x=this.m_body.m_position.x+(R2.col1.x*this.m_localCentroid.x+R2.col2.x*this.m_localCentroid.y);this.m_position.y=this.m_body.m_position.y+(R2.col1.y*this.m_localCentroid.x+R2.col2.y*this.m_localCentroid.y);if(this.m_proxyId==b2Pair.b2_nullProxy)
			{return;}
			var hX;var hY;var v1=R1.col1;var v2=R1.col2;var v3=this.m_localOBB.R.col1;var v4=this.m_localOBB.R.col2;this.syncMat.col1.x=v1.x*v3.x+v2.x*v3.y;this.syncMat.col1.y=v1.y*v3.x+v2.y*v3.y;this.syncMat.col2.x=v1.x*v4.x+v2.x*v4.y;this.syncMat.col2.y=v1.y*v4.x+v2.y*v4.y;this.syncMat.Abs();hX=this.m_localCentroid.x+this.m_localOBB.center.x;hY=this.m_localCentroid.y+this.m_localOBB.center.y;var centerX=position1.x+(R1.col1.x*hX+R1.col2.x*hY);var centerY=position1.y+(R1.col1.y*hX+R1.col2.y*hY);hX=this.syncMat.col1.x*this.m_localOBB.extents.x+this.syncMat.col2.x*this.m_localOBB.extents.y;hY=this.syncMat.col1.y*this.m_localOBB.extents.x+this.syncMat.col2.y*this.m_localOBB.extents.y;this.syncAABB.minVertex.x=centerX-hX;this.syncAABB.minVertex.y=centerY-hY;this.syncAABB.maxVertex.x=centerX+hX;this.syncAABB.maxVertex.y=centerY+hY;v1=R2.col1;v2=R2.col2;v3=this.m_localOBB.R.col1;v4=this.m_localOBB.R.col2;this.syncMat.col1.x=v1.x*v3.x+v2.x*v3.y;this.syncMat.col1.y=v1.y*v3.x+v2.y*v3.y;this.syncMat.col2.x=v1.x*v4.x+v2.x*v4.y;this.syncMat.col2.y=v1.y*v4.x+v2.y*v4.y;this.syncMat.Abs();hX=this.m_localCentroid.x+this.m_localOBB.center.x;hY=this.m_localCentroid.y+this.m_localOBB.center.y;centerX=position2.x+(R2.col1.x*hX+R2.col2.x*hY);centerY=position2.y+(R2.col1.y*hX+R2.col2.y*hY);hX=this.syncMat.col1.x*this.m_localOBB.extents.x+this.syncMat.col2.x*this.m_localOBB.extents.y;hY=this.syncMat.col1.y*this.m_localOBB.extents.x+this.syncMat.col2.y*this.m_localOBB.extents.y;this.syncAABB.minVertex.x=Math.min(this.syncAABB.minVertex.x,centerX-hX);this.syncAABB.minVertex.y=Math.min(this.syncAABB.minVertex.y,centerY-hY);this.syncAABB.maxVertex.x=Math.max(this.syncAABB.maxVertex.x,centerX+hX);this.syncAABB.maxVertex.y=Math.max(this.syncAABB.maxVertex.y,centerY+hY);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(this.syncAABB))
			{broadPhase.MoveProxy(this.m_proxyId,this.syncAABB);}
			else
			{this.m_body.Freeze();}},QuickSync:function(position,R){this.m_R.SetM(R);this.m_position.x=position.x+(R.col1.x*this.m_localCentroid.x+R.col2.x*this.m_localCentroid.y);this.m_position.y=position.y+(R.col1.y*this.m_localCentroid.x+R.col2.y*this.m_localCentroid.y);},ResetProxy:function(broadPhase){if(this.m_proxyId==b2Pair.b2_nullProxy)
			{return;}
			var proxy=broadPhase.GetProxy(this.m_proxyId);broadPhase.DestroyProxy(this.m_proxyId);proxy=null;var R=b2Math.b2MulMM(this.m_R,this.m_localOBB.R);var absR=b2Math.b2AbsM(R);var h=b2Math.b2MulMV(absR,this.m_localOBB.extents);var position=b2Math.b2MulMV(this.m_R,this.m_localOBB.center);position.Add(this.m_position);var aabb=new b2AABB();aabb.minVertex.SetV(position);aabb.minVertex.Subtract(h);aabb.maxVertex.SetV(position);aabb.maxVertex.Add(h);if(broadPhase.InRange(aabb))
			{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
			else
			{this.m_proxyId=b2Pair.b2_nullProxy;}
			if(this.m_proxyId==b2Pair.b2_nullProxy)
			{this.m_body.Freeze();}},Support:function(dX,dY,out)
			{var dLocalX=(dX*this.m_R.col1.x+dY*this.m_R.col1.y);var dLocalY=(dX*this.m_R.col2.x+dY*this.m_R.col2.y);var bestIndex=0;var bestValue=(this.m_coreVertices[0].x*dLocalX+this.m_coreVertices[0].y*dLocalY);for(var i=1;i<this.m_vertexCount;++i)
			{var value=(this.m_coreVertices[i].x*dLocalX+this.m_coreVertices[i].y*dLocalY);if(value>bestValue)
			{bestIndex=i;bestValue=value;}}
			out.Set(this.m_position.x+(this.m_R.col1.x*this.m_coreVertices[bestIndex].x+this.m_R.col2.x*this.m_coreVertices[bestIndex].y),this.m_position.y+(this.m_R.col1.y*this.m_coreVertices[bestIndex].x+this.m_R.col2.y*this.m_coreVertices[bestIndex].y));},m_localCentroid:new b2Vec2(),m_localOBB:new b2OBB(),m_vertices:null,m_coreVertices:null,m_vertexCount:0,m_normals:null});b2PolyShape.tempVec=new b2Vec2();b2PolyShape.tAbsR=new b2Mat22();
			var b2Body=Class.create();b2Body.prototype={SetOriginPosition:function(position,rotation){if(this.IsFrozen())
			{return;}
			this.m_rotation=rotation;this.m_R.Set(this.m_rotation);this.m_position=b2Math.AddVV(position,b2Math.b2MulMV(this.m_R,this.m_center));this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;for(var s=this.m_shapeList;s!=null;s=s.m_next)
			{s.Synchronize(this.m_position,this.m_R,this.m_position,this.m_R);}
			this.m_world.m_broadPhase.Commit();},GetOriginPosition:function(){return b2Math.SubtractVV(this.m_position,b2Math.b2MulMV(this.m_R,this.m_center));},SetCenterPosition:function(position,rotation){if(this.IsFrozen())
			{return;}
			this.m_rotation=rotation;this.m_R.Set(this.m_rotation);this.m_position.SetV(position);this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;for(var s=this.m_shapeList;s!=null;s=s.m_next)
			{s.Synchronize(this.m_position,this.m_R,this.m_position,this.m_R);}
			this.m_world.m_broadPhase.Commit();},GetCenterPosition:function(){return this.m_position;},GetRotation:function(){return this.m_rotation;},GetRotationMatrix:function(){return this.m_R;},SetLinearVelocity:function(v){this.m_linearVelocity.SetV(v);},GetLinearVelocity:function(){return this.m_linearVelocity;},SetAngularVelocity:function(w){this.m_angularVelocity=w;},GetAngularVelocity:function(){return this.m_angularVelocity;},ApplyForce:function(force,point)
			{if(this.IsSleeping()==false)
			{this.m_force.Add(force);this.m_torque+=b2Math.b2CrossVV(b2Math.SubtractVV(point,this.m_position),force);}},ApplyTorque:function(torque)
			{if(this.IsSleeping()==false)
			{this.m_torque+=torque;}},ApplyImpulse:function(impulse,point)
			{if(this.IsSleeping()==false)
			{this.m_linearVelocity.Add(b2Math.MulFV(this.m_invMass,impulse));this.m_angularVelocity+=(this.m_invI*b2Math.b2CrossVV(b2Math.SubtractVV(point,this.m_position),impulse));}},GetMass:function(){return this.m_mass;},GetInertia:function(){return this.m_I;},GetWorldPoint:function(localPoint){return b2Math.AddVV(this.m_position,b2Math.b2MulMV(this.m_R,localPoint));},GetWorldVector:function(localVector){return b2Math.b2MulMV(this.m_R,localVector);},GetLocalPoint:function(worldPoint){return b2Math.b2MulTMV(this.m_R,b2Math.SubtractVV(worldPoint,this.m_position));},GetLocalVector:function(worldVector){return b2Math.b2MulTMV(this.m_R,worldVector);},IsStatic:function(){return(this.m_flags&b2Body.e_staticFlag)==b2Body.e_staticFlag;},IsFrozen:function()
			{return(this.m_flags&b2Body.e_frozenFlag)==b2Body.e_frozenFlag;},IsSleeping:function(){return(this.m_flags&b2Body.e_sleepFlag)==b2Body.e_sleepFlag;},AllowSleeping:function(flag)
			{if(flag)
			{this.m_flags|=b2Body.e_allowSleepFlag;}
			else
			{this.m_flags&=~b2Body.e_allowSleepFlag;this.WakeUp();}},WakeUp:function(){this.m_flags&=~b2Body.e_sleepFlag;this.m_sleepTime=0.0;},GetShapeList:function(){return this.m_shapeList;},GetContactList:function()
			{return this.m_contactList;},GetJointList:function()
			{return this.m_jointList;},GetNext:function(){return this.m_next;},GetUserData:function(){return this.m_userData;},initialize:function(bd,world){this.sMat0=new b2Mat22();this.m_position=new b2Vec2();this.m_R=new b2Mat22(0);this.m_position0=new b2Vec2();var i=0;var sd;var massData;this.m_flags=0;this.m_position.SetV(bd.position);this.m_rotation=bd.rotation;this.m_R.Set(this.m_rotation);this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;this.m_world=world;this.m_linearDamping=b2Math.b2Clamp(1.0-bd.linearDamping,0.0,1.0);this.m_angularDamping=b2Math.b2Clamp(1.0-bd.angularDamping,0.0,1.0);this.m_force=new b2Vec2(0.0,0.0);this.m_torque=0.0;this.m_mass=0.0;var massDatas=new Array(b2Settings.b2_maxShapesPerBody);for(i=0;i<b2Settings.b2_maxShapesPerBody;i++){massDatas[i]=new b2MassData();}
			this.m_shapeCount=0;this.m_center=new b2Vec2(0.0,0.0);for(i=0;i<b2Settings.b2_maxShapesPerBody;++i)
			{sd=bd.shapes[i];if(sd==null)break;massData=massDatas[i];sd.ComputeMass(massData);this.m_mass+=massData.mass;this.m_center.x+=massData.mass*(sd.localPosition.x+massData.center.x);this.m_center.y+=massData.mass*(sd.localPosition.y+massData.center.y);++this.m_shapeCount;}
			if(this.m_mass>0.0)
			{this.m_center.Multiply(1.0/this.m_mass);this.m_position.Add(b2Math.b2MulMV(this.m_R,this.m_center));}
			else
			{this.m_flags|=b2Body.e_staticFlag;}
			this.m_I=0.0;for(i=0;i<this.m_shapeCount;++i)
			{sd=bd.shapes[i];massData=massDatas[i];this.m_I+=massData.I;var r=b2Math.SubtractVV(b2Math.AddVV(sd.localPosition,massData.center),this.m_center);this.m_I+=massData.mass*b2Math.b2Dot(r,r);}
			if(this.m_mass>0.0)
			{this.m_invMass=1.0/this.m_mass;}
			else
			{this.m_invMass=0.0;}
			if(this.m_I>0.0&&bd.preventRotation==false)
			{this.m_invI=1.0/this.m_I;}
			else
			{this.m_I=0.0;this.m_invI=0.0;}
			this.m_linearVelocity=b2Math.AddVV(bd.linearVelocity,b2Math.b2CrossFV(bd.angularVelocity,this.m_center));this.m_angularVelocity=bd.angularVelocity;this.m_jointList=null;this.m_contactList=null;this.m_prev=null;this.m_next=null;this.m_shapeList=null;for(i=0;i<this.m_shapeCount;++i)
			{sd=bd.shapes[i];var shape=b2Shape.Create(sd,this,this.m_center);shape.m_next=this.m_shapeList;this.m_shapeList=shape;}
			this.m_sleepTime=0.0;if(bd.allowSleep)
			{this.m_flags|=b2Body.e_allowSleepFlag;}
			if(bd.isSleeping)
			{this.m_flags|=b2Body.e_sleepFlag;}
			if((this.m_flags&b2Body.e_sleepFlag)||this.m_invMass==0.0)
			{this.m_linearVelocity.Set(0.0,0.0);this.m_angularVelocity=0.0;}
			this.m_userData=bd.userData;},Destroy:function(){var s=this.m_shapeList;while(s)
			{var s0=s;s=s.m_next;b2Shape.Destroy(s0);}},sMat0:new b2Mat22(),SynchronizeShapes:function(){this.sMat0.Set(this.m_rotation0);for(var s=this.m_shapeList;s!=null;s=s.m_next)
			{s.Synchronize(this.m_position0,this.sMat0,this.m_position,this.m_R);}},QuickSyncShapes:function(){for(var s=this.m_shapeList;s!=null;s=s.m_next)
			{s.QuickSync(this.m_position,this.m_R);}},IsConnected:function(other){for(var jn=this.m_jointList;jn!=null;jn=jn.next)
			{if(jn.other==other)
			return jn.joint.m_collideConnected==false;}
			return false;},Freeze:function(){this.m_flags|=b2Body.e_frozenFlag;this.m_linearVelocity.SetZero();this.m_angularVelocity=0.0;for(var s=this.m_shapeList;s!=null;s=s.m_next)
			{s.DestroyProxy();}},m_flags:0,m_position:new b2Vec2(),m_rotation:null,m_R:new b2Mat22(0),m_position0:new b2Vec2(),m_rotation0:null,m_linearVelocity:null,m_angularVelocity:null,m_force:null,m_torque:null,m_center:null,m_world:null,m_prev:null,m_next:null,m_shapeList:null,m_shapeCount:0,m_jointList:null,m_contactList:null,m_mass:null,m_invMass:null,m_I:null,m_invI:null,m_linearDamping:null,m_angularDamping:null,m_sleepTime:null,m_userData:null};b2Body.e_staticFlag=0x0001;b2Body.e_frozenFlag=0x0002;b2Body.e_islandFlag=0x0004;b2Body.e_sleepFlag=0x0008;b2Body.e_allowSleepFlag=0x0010;b2Body.e_destroyFlag=0x0020;
			var b2BodyDef=Class.create();b2BodyDef.prototype={initialize:function()
			{this.shapes=new Array();this.userData=null;for(var i=0;i<b2Settings.b2_maxShapesPerBody;i++){this.shapes[i]=null;}
			this.position=new b2Vec2(0.0,0.0);this.rotation=0.0;this.linearVelocity=new b2Vec2(0.0,0.0);this.angularVelocity=0.0;this.linearDamping=0.0;this.angularDamping=0.0;this.allowSleep=true;this.isSleeping=false;this.preventRotation=false;},userData:null,shapes:new Array(),position:null,rotation:null,linearVelocity:null,angularVelocity:null,linearDamping:null,angularDamping:null,allowSleep:null,isSleeping:null,preventRotation:null,AddShape:function(shape)
			{for(var i=0;i<b2Settings.b2_maxShapesPerBody;++i)
			{if(this.shapes[i]==null)
			{this.shapes[i]=shape;break;}}}};
			var b2CollisionFilter=Class.create();b2CollisionFilter.prototype={ShouldCollide:function(shape1,shape2){if(shape1.m_groupIndex==shape2.m_groupIndex&&shape1.m_groupIndex!=0)
			{return shape1.m_groupIndex>0;}
			var collide=(shape1.m_maskBits&shape2.m_categoryBits)!=0&&(shape1.m_categoryBits&shape2.m_maskBits)!=0;return collide;},initialize:function(){}};b2CollisionFilter.b2_defaultFilter=new b2CollisionFilter;
			var b2Island=Class.create();b2Island.prototype={initialize:function(bodyCapacity,contactCapacity,jointCapacity,allocator)
			{var i=0;this.m_bodyCapacity=bodyCapacity;this.m_contactCapacity=contactCapacity;this.m_jointCapacity=jointCapacity;this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;this.m_bodies=new Array(bodyCapacity);for(i=0;i<bodyCapacity;i++)
			this.m_bodies[i]=null;this.m_contacts=new Array(contactCapacity);for(i=0;i<contactCapacity;i++)
			this.m_contacts[i]=null;this.m_joints=new Array(jointCapacity);for(i=0;i<jointCapacity;i++)
			this.m_joints[i]=null;this.m_allocator=allocator;},Clear:function()
			{this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;},Solve:function(step,gravity)
			{var i=0;var b;for(i=0;i<this.m_bodyCount;++i)
			{b=this.m_bodies[i];if(b.m_invMass==0.0)
			continue;b.m_linearVelocity.Add(b2Math.MulFV(step.dt,b2Math.AddVV(gravity,b2Math.MulFV(b.m_invMass,b.m_force))));b.m_angularVelocity+=step.dt*b.m_invI*b.m_torque;b.m_linearVelocity.Multiply(b.m_linearDamping);b.m_angularVelocity*=b.m_angularDamping;b.m_position0.SetV(b.m_position);b.m_rotation0=b.m_rotation;}
			var contactSolver=new b2ContactSolver(this.m_contacts,this.m_contactCount,this.m_allocator);contactSolver.PreSolve();for(i=0;i<this.m_jointCount;++i)
			{this.m_joints[i].PrepareVelocitySolver();}
			for(i=0;i<step.iterations;++i)
			{contactSolver.SolveVelocityConstraints();for(var j=0;j<this.m_jointCount;++j)
			{this.m_joints[j].SolveVelocityConstraints(step);}}
			for(i=0;i<this.m_bodyCount;++i)
			{b=this.m_bodies[i];if(b.m_invMass==0.0)
			continue;b.m_position.x+=step.dt*b.m_linearVelocity.x;b.m_position.y+=step.dt*b.m_linearVelocity.y;b.m_rotation+=step.dt*b.m_angularVelocity;b.m_R.Set(b.m_rotation);}
			for(i=0;i<this.m_jointCount;++i)
			{this.m_joints[i].PreparePositionSolver();}
			if(b2World.s_enablePositionCorrection)
			{for(b2Island.m_positionIterationCount=0;b2Island.m_positionIterationCount<step.iterations;++b2Island.m_positionIterationCount)
			{var contactsOkay=contactSolver.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);var jointsOkay=true;for(i=0;i<this.m_jointCount;++i)
			{var jointOkay=this.m_joints[i].SolvePositionConstraints();jointsOkay=jointsOkay&&jointOkay;}
			if(contactsOkay&&jointsOkay)
			{break;}}}
			contactSolver.PostSolve();for(i=0;i<this.m_bodyCount;++i)
			{b=this.m_bodies[i];if(b.m_invMass==0.0)
			continue;b.m_R.Set(b.m_rotation);b.SynchronizeShapes();b.m_force.Set(0.0,0.0);b.m_torque=0.0;}},UpdateSleep:function(dt)
			{var i=0;var b;var minSleepTime=Number.MAX_VALUE;var linTolSqr=b2Settings.b2_linearSleepTolerance*b2Settings.b2_linearSleepTolerance;var angTolSqr=b2Settings.b2_angularSleepTolerance*b2Settings.b2_angularSleepTolerance;for(i=0;i<this.m_bodyCount;++i)
			{b=this.m_bodies[i];if(b.m_invMass==0.0)
			{continue;}
			if((b.m_flags&b2Body.e_allowSleepFlag)==0)
			{b.m_sleepTime=0.0;minSleepTime=0.0;}
			if((b.m_flags&b2Body.e_allowSleepFlag)==0||b.m_angularVelocity*b.m_angularVelocity>angTolSqr||b2Math.b2Dot(b.m_linearVelocity,b.m_linearVelocity)>linTolSqr)
			{b.m_sleepTime=0.0;minSleepTime=0.0;}
			else
			{b.m_sleepTime+=dt;minSleepTime=b2Math.b2Min(minSleepTime,b.m_sleepTime);}}
			if(minSleepTime>=b2Settings.b2_timeToSleep)
			{for(i=0;i<this.m_bodyCount;++i)
			{b=this.m_bodies[i];b.m_flags|=b2Body.e_sleepFlag;}}},AddBody:function(body)
			{this.m_bodies[this.m_bodyCount++]=body;},AddContact:function(contact)
			{this.m_contacts[this.m_contactCount++]=contact;},AddJoint:function(joint)
			{this.m_joints[this.m_jointCount++]=joint;},m_allocator:null,m_bodies:null,m_contacts:null,m_joints:null,m_bodyCount:0,m_jointCount:0,m_contactCount:0,m_bodyCapacity:0,m_contactCapacity:0,m_jointCapacity:0,m_positionError:null};b2Island.m_positionIterationCount=0;
			var b2TimeStep=Class.create();b2TimeStep.prototype={dt:null,inv_dt:null,iterations:0,initialize:function(){}};
			var b2ContactNode=Class.create();b2ContactNode.prototype={other:null,contact:null,prev:null,next:null,initialize:function(){}};
			var b2Contact=Class.create();b2Contact.prototype={GetManifolds:function(){return null},GetManifoldCount:function()
			{return this.m_manifoldCount;},GetNext:function(){return this.m_next;},GetShape1:function(){return this.m_shape1;},GetShape2:function(){return this.m_shape2;},initialize:function(s1,s2)
			{this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
			this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;},Evaluate:function(){},m_flags:0,m_prev:null,m_next:null,m_node1:new b2ContactNode(),m_node2:new b2ContactNode(),m_shape1:null,m_shape2:null,m_manifoldCount:0,m_friction:null,m_restitution:null};b2Contact.e_islandFlag=0x0001;b2Contact.e_destroyFlag=0x0002;b2Contact.AddType=function(createFcn,destroyFcn,type1,type2)
			{b2Contact.s_registers[type1][type2].createFcn=createFcn;b2Contact.s_registers[type1][type2].destroyFcn=destroyFcn;b2Contact.s_registers[type1][type2].primary=true;if(type1!=type2)
			{b2Contact.s_registers[type2][type1].createFcn=createFcn;b2Contact.s_registers[type2][type1].destroyFcn=destroyFcn;b2Contact.s_registers[type2][type1].primary=false;}};b2Contact.InitializeRegisters=function(){b2Contact.s_registers=new Array(b2Shape.e_shapeTypeCount);for(var i=0;i<b2Shape.e_shapeTypeCount;i++){b2Contact.s_registers[i]=new Array(b2Shape.e_shapeTypeCount);for(var j=0;j<b2Shape.e_shapeTypeCount;j++){b2Contact.s_registers[i][j]=new b2ContactRegister();}}
			b2Contact.AddType(b2CircleContact.Create,b2CircleContact.Destroy,b2Shape.e_circleShape,b2Shape.e_circleShape);b2Contact.AddType(b2PolyAndCircleContact.Create,b2PolyAndCircleContact.Destroy,b2Shape.e_polyShape,b2Shape.e_circleShape);b2Contact.AddType(b2PolyContact.Create,b2PolyContact.Destroy,b2Shape.e_polyShape,b2Shape.e_polyShape);};b2Contact.Create=function(shape1,shape2,allocator){if(b2Contact.s_initialized==false)
			{b2Contact.InitializeRegisters();b2Contact.s_initialized=true;}
			var type1=shape1.m_type;var type2=shape2.m_type;var createFcn=b2Contact.s_registers[type1][type2].createFcn;if(createFcn)
			{if(b2Contact.s_registers[type1][type2].primary)
			{return createFcn(shape1,shape2,allocator);}
			else
			{var c=createFcn(shape2,shape1,allocator);for(var i=0;i<c.GetManifoldCount();++i)
			{var m=c.GetManifolds()[i];m.normal=m.normal.Negative();}
			return c;}}
			else
			{return null;}};b2Contact.Destroy=function(contact,allocator){if(contact.GetManifoldCount()>0)
			{contact.m_shape1.m_body.WakeUp();contact.m_shape2.m_body.WakeUp();}
			var type1=contact.m_shape1.m_type;var type2=contact.m_shape2.m_type;var destroyFcn=b2Contact.s_registers[type1][type2].destroyFcn;destroyFcn(contact,allocator);};b2Contact.s_registers=null;b2Contact.s_initialized=false;
			var b2ContactConstraint=Class.create();b2ContactConstraint.prototype={initialize:function(){this.normal=new b2Vec2();this.points=new Array(b2Settings.b2_maxManifoldPoints);for(var i=0;i<b2Settings.b2_maxManifoldPoints;i++){this.points[i]=new b2ContactConstraintPoint();}},points:null,normal:new b2Vec2(),manifold:null,body1:null,body2:null,friction:null,restitution:null,pointCount:0};
			var b2ContactConstraintPoint=Class.create();b2ContactConstraintPoint.prototype={localAnchor1:new b2Vec2(),localAnchor2:new b2Vec2(),normalImpulse:null,tangentImpulse:null,positionImpulse:null,normalMass:null,tangentMass:null,separation:null,velocityBias:null,initialize:function(){this.localAnchor1=new b2Vec2();this.localAnchor2=new b2Vec2();}};
			var b2ContactRegister=Class.create();b2ContactRegister.prototype={createFcn:null,destroyFcn:null,primary:null,initialize:function(){}};
			var b2ContactSolver=Class.create();b2ContactSolver.prototype={initialize:function(contacts,contactCount,allocator){this.m_constraints=new Array();this.m_allocator=allocator;var i=0;var tVec;var tMat;this.m_constraintCount=0;for(i=0;i<contactCount;++i)
			{this.m_constraintCount+=contacts[i].GetManifoldCount();}
			for(i=0;i<this.m_constraintCount;i++){this.m_constraints[i]=new b2ContactConstraint();}
			var count=0;for(i=0;i<contactCount;++i)
			{var contact=contacts[i];var b1=contact.m_shape1.m_body;var b2=contact.m_shape2.m_body;var manifoldCount=contact.GetManifoldCount();var manifolds=contact.GetManifolds();var friction=contact.m_friction;var restitution=contact.m_restitution;var v1X=b1.m_linearVelocity.x;var v1Y=b1.m_linearVelocity.y;var v2X=b2.m_linearVelocity.x;var v2Y=b2.m_linearVelocity.y;var w1=b1.m_angularVelocity;var w2=b2.m_angularVelocity;for(var j=0;j<manifoldCount;++j)
			{var manifold=manifolds[j];var normalX=manifold.normal.x;var normalY=manifold.normal.y;var c=this.m_constraints[count];c.body1=b1;c.body2=b2;c.manifold=manifold;c.normal.x=normalX;c.normal.y=normalY;c.pointCount=manifold.pointCount;c.friction=friction;c.restitution=restitution;for(var k=0;k<c.pointCount;++k)
			{var cp=manifold.points[k];var ccp=c.points[k];ccp.normalImpulse=cp.normalImpulse;ccp.tangentImpulse=cp.tangentImpulse;ccp.separation=cp.separation;var r1X=cp.position.x-b1.m_position.x;var r1Y=cp.position.y-b1.m_position.y;var r2X=cp.position.x-b2.m_position.x;var r2Y=cp.position.y-b2.m_position.y;tVec=ccp.localAnchor1;tMat=b1.m_R;tVec.x=r1X*tMat.col1.x+r1Y*tMat.col1.y;tVec.y=r1X*tMat.col2.x+r1Y*tMat.col2.y;tVec=ccp.localAnchor2;tMat=b2.m_R;tVec.x=r2X*tMat.col1.x+r2Y*tMat.col1.y;tVec.y=r2X*tMat.col2.x+r2Y*tMat.col2.y;var r1Sqr=r1X*r1X+r1Y*r1Y;var r2Sqr=r2X*r2X+r2Y*r2Y;var rn1=r1X*normalX+r1Y*normalY;var rn2=r2X*normalX+r2Y*normalY;var kNormal=b1.m_invMass+b2.m_invMass;kNormal+=b1.m_invI*(r1Sqr-rn1*rn1)+b2.m_invI*(r2Sqr-rn2*rn2);ccp.normalMass=1.0/kNormal;var tangentX=normalY
			var tangentY=-normalX;var rt1=r1X*tangentX+r1Y*tangentY;var rt2=r2X*tangentX+r2Y*tangentY;var kTangent=b1.m_invMass+b2.m_invMass;kTangent+=b1.m_invI*(r1Sqr-rt1*rt1)+b2.m_invI*(r2Sqr-rt2*rt2);ccp.tangentMass=1.0/kTangent;ccp.velocityBias=0.0;if(ccp.separation>0.0)
			{ccp.velocityBias=-60.0*ccp.separation;}
			var tX=v2X+(-w2*r2Y)-v1X-(-w1*r1Y);var tY=v2Y+(w2*r2X)-v1Y-(w1*r1X);var vRel=c.normal.x*tX+c.normal.y*tY;if(vRel<-b2Settings.b2_velocityThreshold)
			{ccp.velocityBias+=-c.restitution*vRel;}}
			++count;}}},PreSolve:function(){var tVec;var tVec2;var tMat;for(var i=0;i<this.m_constraintCount;++i)
			{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var j=0;var tCount=0;if(b2World.s_enableWarmStarting)
			{tCount=c.pointCount;for(j=0;j<tCount;++j)
			{var ccp=c.points[j];var PX=ccp.normalImpulse*normalX+ccp.tangentImpulse*tangentX;var PY=ccp.normalImpulse*normalY+ccp.tangentImpulse*tangentY;tMat=b1.m_R;tVec=ccp.localAnchor1;var r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;var r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b2.m_R;tVec=ccp.localAnchor2;var r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;var r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;b1.m_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b1.m_linearVelocity.x-=invMass1*PX;b1.m_linearVelocity.y-=invMass1*PY;b2.m_angularVelocity+=invI2*(r2X*PY-r2Y*PX);b2.m_linearVelocity.x+=invMass2*PX;b2.m_linearVelocity.y+=invMass2*PY;ccp.positionImpulse=0.0;}}
			else{tCount=c.pointCount;for(j=0;j<tCount;++j)
			{var ccp2=c.points[j];ccp2.normalImpulse=0.0;ccp2.tangentImpulse=0.0;ccp2.positionImpulse=0.0;}}}},SolveVelocityConstraints:function(){var j=0;var ccp;var r1X;var r1Y;var r2X;var r2Y;var dvX;var dvY;var lambda;var newImpulse;var PX;var PY;var tMat;var tVec;for(var i=0;i<this.m_constraintCount;++i)
			{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var b1_angularVelocity=b1.m_angularVelocity;var b1_linearVelocity=b1.m_linearVelocity;var b2_angularVelocity=b2.m_angularVelocity;var b2_linearVelocity=b2.m_linearVelocity;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var tCount=c.pointCount;for(j=0;j<tCount;++j)
			{ccp=c.points[j];tMat=b1.m_R;tVec=ccp.localAnchor1;r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
			r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
			tMat=b2.m_R;tVec=ccp.localAnchor2;r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
			r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
			dvX=b2_linearVelocity.x+(-b2_angularVelocity*r2Y)-b1_linearVelocity.x-(-b1_angularVelocity*r1Y);dvY=b2_linearVelocity.y+(b2_angularVelocity*r2X)-b1_linearVelocity.y-(b1_angularVelocity*r1X);var vn=dvX*normalX+dvY*normalY;lambda=-ccp.normalMass*(vn-ccp.velocityBias);newImpulse=b2Math.b2Max(ccp.normalImpulse+lambda,0.0);lambda=newImpulse-ccp.normalImpulse;PX=lambda*normalX;PY=lambda*normalY;b1_linearVelocity.x-=invMass1*PX;b1_linearVelocity.y-=invMass1*PY;b1_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b2_linearVelocity.x+=invMass2*PX;b2_linearVelocity.y+=invMass2*PY;b2_angularVelocity+=invI2*(r2X*PY-r2Y*PX);ccp.normalImpulse=newImpulse;dvX=b2_linearVelocity.x+(-b2_angularVelocity*r2Y)-b1_linearVelocity.x-(-b1_angularVelocity*r1Y);dvY=b2_linearVelocity.y+(b2_angularVelocity*r2X)-b1_linearVelocity.y-(b1_angularVelocity*r1X);var vt=dvX*tangentX+dvY*tangentY;lambda=ccp.tangentMass*(-vt);var maxFriction=c.friction*ccp.normalImpulse;newImpulse=b2Math.b2Clamp(ccp.tangentImpulse+lambda,-maxFriction,maxFriction);lambda=newImpulse-ccp.tangentImpulse;PX=lambda*tangentX;PY=lambda*tangentY;b1_linearVelocity.x-=invMass1*PX;b1_linearVelocity.y-=invMass1*PY;b1_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b2_linearVelocity.x+=invMass2*PX;b2_linearVelocity.y+=invMass2*PY;b2_angularVelocity+=invI2*(r2X*PY-r2Y*PX);ccp.tangentImpulse=newImpulse;}
			b1.m_angularVelocity=b1_angularVelocity;b2.m_angularVelocity=b2_angularVelocity;}},SolvePositionConstraints:function(beta){var minSeparation=0.0;var tMat;var tVec;for(var i=0;i<this.m_constraintCount;++i)
			{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var b1_position=b1.m_position;var b1_rotation=b1.m_rotation;var b2_position=b2.m_position;var b2_rotation=b2.m_rotation;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var tCount=c.pointCount;for(var j=0;j<tCount;++j)
			{var ccp=c.points[j];tMat=b1.m_R;tVec=ccp.localAnchor1;var r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
			var r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
			tMat=b2.m_R;tVec=ccp.localAnchor2;var r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
			var r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
			var p1X=b1_position.x+r1X;var p1Y=b1_position.y+r1Y;var p2X=b2_position.x+r2X;var p2Y=b2_position.y+r2Y;var dpX=p2X-p1X;var dpY=p2Y-p1Y;var separation=(dpX*normalX+dpY*normalY)+ccp.separation;minSeparation=b2Math.b2Min(minSeparation,separation);var C=beta*b2Math.b2Clamp(separation+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);var dImpulse=-ccp.normalMass*C;var impulse0=ccp.positionImpulse;ccp.positionImpulse=b2Math.b2Max(impulse0+dImpulse,0.0);dImpulse=ccp.positionImpulse-impulse0;var impulseX=dImpulse*normalX;var impulseY=dImpulse*normalY;b1_position.x-=invMass1*impulseX;b1_position.y-=invMass1*impulseY;b1_rotation-=invI1*(r1X*impulseY-r1Y*impulseX);b1.m_R.Set(b1_rotation);b2_position.x+=invMass2*impulseX;b2_position.y+=invMass2*impulseY;b2_rotation+=invI2*(r2X*impulseY-r2Y*impulseX);b2.m_R.Set(b2_rotation);}
			b1.m_rotation=b1_rotation;b2.m_rotation=b2_rotation;}
			return minSeparation>=-b2Settings.b2_linearSlop;},PostSolve:function(){for(var i=0;i<this.m_constraintCount;++i)
			{var c=this.m_constraints[i];var m=c.manifold;for(var j=0;j<c.pointCount;++j)
			{var mPoint=m.points[j];var cPoint=c.points[j];mPoint.normalImpulse=cPoint.normalImpulse;mPoint.tangentImpulse=cPoint.tangentImpulse;}}},m_allocator:null,m_constraints:new Array(),m_constraintCount:0};
			var b2CircleContact=Class.create();Object.extend(b2CircleContact.prototype,b2Contact.prototype);Object.extend(b2CircleContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
			this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m_manifold=[new b2Manifold()];this.m_manifold[0].pointCount=0;this.m_manifold[0].points[0].normalImpulse=0.0;this.m_manifold[0].points[0].tangentImpulse=0.0;},Evaluate:function(){b2Collision.b2CollideCircle(this.m_manifold[0],this.m_shape1,this.m_shape2,false);if(this.m_manifold[0].pointCount>0)
			{this.m_manifoldCount=1;}
			else
			{this.m_manifoldCount=0;}},GetManifolds:function()
			{return this.m_manifold;},m_manifold:[new b2Manifold()]});b2CircleContact.Create=function(shape1,shape2,allocator){return new b2CircleContact(shape1,shape2);};b2CircleContact.Destroy=function(contact,allocator){};
			var b2Conservative=Class.create();b2Conservative.prototype={initialize:function(){}}
			b2Conservative.R1=new b2Mat22();b2Conservative.R2=new b2Mat22();b2Conservative.x1=new b2Vec2();b2Conservative.x2=new b2Vec2();b2Conservative.Conservative=function(shape1,shape2){var body1=shape1.GetBody();var body2=shape2.GetBody();var v1X=body1.m_position.x-body1.m_position0.x;var v1Y=body1.m_position.y-body1.m_position0.y;var omega1=body1.m_rotation-body1.m_rotation0;var v2X=body2.m_position.x-body2.m_position0.x;var v2Y=body2.m_position.y-body2.m_position0.y;var omega2=body2.m_rotation-body2.m_rotation0;var r1=shape1.GetMaxRadius();var r2=shape2.GetMaxRadius();var p1StartX=body1.m_position0.x;var p1StartY=body1.m_position0.y;var a1Start=body1.m_rotation0;var p2StartX=body2.m_position0.x;var p2StartY=body2.m_position0.y;var a2Start=body2.m_rotation0;var p1X=p1StartX;var p1Y=p1StartY;var a1=a1Start;var p2X=p2StartX;var p2Y=p2StartY;var a2=a2Start;b2Conservative.R1.Set(a1);b2Conservative.R2.Set(a2);shape1.QuickSync(p1,b2Conservative.R1);shape2.QuickSync(p2,b2Conservative.R2);var s1=0.0;var maxIterations=10;var dX;var dY;var invRelativeVelocity=0.0;var hit=true;for(var iter=0;iter<maxIterations;++iter)
			{var distance=b2Distance.Distance(b2Conservative.x1,b2Conservative.x2,shape1,shape2);if(distance<b2Settings.b2_linearSlop)
			{if(iter==0)
			{hit=false;}
			else
			{hit=true;}
			break;}
			if(iter==0)
			{dX=b2Conservative.x2.x-b2Conservative.x1.x;dY=b2Conservative.x2.y-b2Conservative.x1.y;var dLen=Math.sqrt(dX*dX+dY*dY);var relativeVelocity=(dX*(v1X-v2X)+dY*(v1Y-v2Y))+Math.abs(omega1)*r1+Math.abs(omega2)*r2;if(Math.abs(relativeVelocity)<Number.MIN_VALUE)
			{hit=false;break;}
			invRelativeVelocity=1.0/relativeVelocity;}
			var ds=distance*invRelativeVelocity;var s2=s1+ds;if(s2<0.0||1.0<s2)
			{hit=false;break;}
			if(s2<(1.0+100.0*Number.MIN_VALUE)*s1)
			{hit=true;break;}
			s1=s2;p1X=p1StartX+s1*v1.x;p1Y=p1StartY+s1*v1.y;a1=a1Start+s1*omega1;p2X=p2StartX+s1*v2.x;p2Y=p2StartY+s1*v2.y;a2=a2Start+s1*omega2;b2Conservative.R1.Set(a1);b2Conservative.R2.Set(a2);shape1.QuickSync(p1,b2Conservative.R1);shape2.QuickSync(p2,b2Conservative.R2);}
			if(hit)
			{dX=b2Conservative.x2.x-b2Conservative.x1.x;dY=b2Conservative.x2.y-b2Conservative.x1.y;var length=Math.sqrt(dX*dX+dY*dY);if(length>FLT_EPSILON)
			{d*=b2_linearSlop/length;}
			if(body1.IsStatic())
			{body1.m_position.x=p1X;body1.m_position.y=p1Y;}
			else
			{body1.m_position.x=p1X-dX;body1.m_position.y=p1Y-dY;}
			body1.m_rotation=a1;body1.m_R.Set(a1);body1.QuickSyncShapes();if(body2.IsStatic())
			{body2.m_position.x=p2X;body2.m_position.y=p2Y;}
			else
			{body2.m_position.x=p2X+dX;body2.m_position.y=p2Y+dY;}
			body2.m_position.x=p2X+dX;body2.m_position.y=p2Y+dY;body2.m_rotation=a2;body2.m_R.Set(a2);body2.QuickSyncShapes();return true;}
			shape1.QuickSync(body1.m_position,body1.m_R);shape2.QuickSync(body2.m_position,body2.m_R);return false;};
			var b2NullContact=Class.create();Object.extend(b2NullContact.prototype,b2Contact.prototype);Object.extend(b2NullContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
			this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;},Evaluate:function(){},GetManifolds:function(){return null;}});
			var b2PolyAndCircleContact=Class.create();Object.extend(b2PolyAndCircleContact.prototype,b2Contact.prototype);Object.extend(b2PolyAndCircleContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
			this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m_manifold=[new b2Manifold()];b2Settings.b2Assert(this.m_shape1.m_type==b2Shape.e_polyShape);b2Settings.b2Assert(this.m_shape2.m_type==b2Shape.e_circleShape);this.m_manifold[0].pointCount=0;this.m_manifold[0].points[0].normalImpulse=0.0;this.m_manifold[0].points[0].tangentImpulse=0.0;},Evaluate:function(){b2Collision.b2CollidePolyAndCircle(this.m_manifold[0],this.m_shape1,this.m_shape2,false);if(this.m_manifold[0].pointCount>0)
			{this.m_manifoldCount=1;}
			else
			{this.m_manifoldCount=0;}},GetManifolds:function()
			{return this.m_manifold;},m_manifold:[new b2Manifold()]})
			b2PolyAndCircleContact.Create=function(shape1,shape2,allocator){return new b2PolyAndCircleContact(shape1,shape2);};b2PolyAndCircleContact.Destroy=function(contact,allocator){};
			var b2PolyContact=Class.create();Object.extend(b2PolyContact.prototype,b2Contact.prototype);Object.extend(b2PolyContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
			this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m0=new b2Manifold();this.m_manifold=[new b2Manifold()];this.m_manifold[0].pointCount=0;},m0:new b2Manifold(),Evaluate:function(){var tMani=this.m_manifold[0];var tPoints=this.m0.points;for(var k=0;k<tMani.pointCount;k++){var tPoint=tPoints[k];var tPoint0=tMani.points[k];tPoint.normalImpulse=tPoint0.normalImpulse;tPoint.tangentImpulse=tPoint0.tangentImpulse;tPoint.id=tPoint0.id.Copy();}
			this.m0.pointCount=tMani.pointCount;b2Collision.b2CollidePoly(tMani,this.m_shape1,this.m_shape2,false);if(tMani.pointCount>0)
			{var match=[false,false];for(var i=0;i<tMani.pointCount;++i)
			{var cp=tMani.points[i];cp.normalImpulse=0.0;cp.tangentImpulse=0.0;var idKey=cp.id.key;for(var j=0;j<this.m0.pointCount;++j)
			{if(match[j]==true)
			continue;var cp0=this.m0.points[j];var id0=cp0.id;if(id0.key==idKey)
			{match[j]=true;cp.normalImpulse=cp0.normalImpulse;cp.tangentImpulse=cp0.tangentImpulse;break;}}}
			this.m_manifoldCount=1;}
			else
			{this.m_manifoldCount=0;}},GetManifolds:function()
			{return this.m_manifold;},m_manifold:[new b2Manifold()]});b2PolyContact.Create=function(shape1,shape2,allocator){return new b2PolyContact(shape1,shape2);};b2PolyContact.Destroy=function(contact,allocator){};
			var b2ContactManager=Class.create();Object.extend(b2ContactManager.prototype,b2PairCallback.prototype);Object.extend(b2ContactManager.prototype,{initialize:function(){this.m_nullContact=new b2NullContact();this.m_world=null;this.m_destroyImmediate=false;},PairAdded:function(proxyUserData1,proxyUserData2){var shape1=proxyUserData1;var shape2=proxyUserData2;var body1=shape1.m_body;var body2=shape2.m_body;if(body1.IsStatic()&&body2.IsStatic())
			{return this.m_nullContact;}
			if(shape1.m_body==shape2.m_body)
			{return this.m_nullContact;}
			if(body2.IsConnected(body1))
			{return this.m_nullContact;}
			if(this.m_world.m_filter!=null&&this.m_world.m_filter.ShouldCollide(shape1,shape2)==false)
			{return this.m_nullContact;}
			if(body2.m_invMass==0.0)
			{var tempShape=shape1;shape1=shape2;shape2=tempShape;var tempBody=body1;body1=body2;body2=tempBody;}
			var contact=b2Contact.Create(shape1,shape2,this.m_world.m_blockAllocator);if(contact==null)
			{return this.m_nullContact;}
			else
			{contact.m_prev=null;contact.m_next=this.m_world.m_contactList;if(this.m_world.m_contactList!=null)
			{this.m_world.m_contactList.m_prev=contact;}
			this.m_world.m_contactList=contact;this.m_world.m_contactCount++;}
			return contact;},PairRemoved:function(proxyUserData1,proxyUserData2,pairUserData){if(pairUserData==null)
			{return;}
			var c=pairUserData;if(c!=this.m_nullContact)
			{if(this.m_destroyImmediate==true)
			{this.DestroyContact(c);c=null;}
			else
			{c.m_flags|=b2Contact.e_destroyFlag;}}},DestroyContact:function(c)
			{if(c.m_prev)
			{c.m_prev.m_next=c.m_next;}
			if(c.m_next)
			{c.m_next.m_prev=c.m_prev;}
			if(c==this.m_world.m_contactList)
			{this.m_world.m_contactList=c.m_next;}
			if(c.GetManifoldCount()>0)
			{var body1=c.m_shape1.m_body;var body2=c.m_shape2.m_body;var node1=c.m_node1;var node2=c.m_node2;body1.WakeUp();body2.WakeUp();if(node1.prev)
			{node1.prev.next=node1.next;}
			if(node1.next)
			{node1.next.prev=node1.prev;}
			if(node1==body1.m_contactList)
			{body1.m_contactList=node1.next;}
			node1.prev=null;node1.next=null;if(node2.prev)
			{node2.prev.next=node2.next;}
			if(node2.next)
			{node2.next.prev=node2.prev;}
			if(node2==body2.m_contactList)
			{body2.m_contactList=node2.next;}
			node2.prev=null;node2.next=null;}
			b2Contact.Destroy(c,this.m_world.m_blockAllocator);--this.m_world.m_contactCount;},CleanContactList:function()
			{var c=this.m_world.m_contactList;while(c!=null)
			{var c0=c;c=c.m_next;if(c0.m_flags&b2Contact.e_destroyFlag)
			{this.DestroyContact(c0);c0=null;}}},Collide:function()
			{var body1;var body2;var node1;var node2;for(var c=this.m_world.m_contactList;c!=null;c=c.m_next)
			{if(c.m_shape1.m_body.IsSleeping()&&c.m_shape2.m_body.IsSleeping())
			{continue;}
			var oldCount=c.GetManifoldCount();c.Evaluate();var newCount=c.GetManifoldCount();if(oldCount==0&&newCount>0)
			{body1=c.m_shape1.m_body;body2=c.m_shape2.m_body;node1=c.m_node1;node2=c.m_node2;node1.contact=c;node1.other=body2;node1.prev=null;node1.next=body1.m_contactList;if(node1.next!=null)
			{node1.next.prev=c.m_node1;}
			body1.m_contactList=c.m_node1;node2.contact=c;node2.other=body1;node2.prev=null;node2.next=body2.m_contactList;if(node2.next!=null)
			{node2.next.prev=node2;}
			body2.m_contactList=node2;}
			else if(oldCount>0&&newCount==0)
			{body1=c.m_shape1.m_body;body2=c.m_shape2.m_body;node1=c.m_node1;node2=c.m_node2;if(node1.prev)
			{node1.prev.next=node1.next;}
			if(node1.next)
			{node1.next.prev=node1.prev;}
			if(node1==body1.m_contactList)
			{body1.m_contactList=node1.next;}
			node1.prev=null;node1.next=null;if(node2.prev)
			{node2.prev.next=node2.next;}
			if(node2.next)
			{node2.next.prev=node2.prev;}
			if(node2==body2.m_contactList)
			{body2.m_contactList=node2.next;}
			node2.prev=null;node2.next=null;}}},m_world:null,m_nullContact:new b2NullContact(),m_destroyImmediate:null});
			var b2World=Class.create();b2World.prototype={initialize:function(worldAABB,gravity,doSleep){this.step=new b2TimeStep();this.m_contactManager=new b2ContactManager();this.m_listener=null;this.m_filter=b2CollisionFilter.b2_defaultFilter;this.m_bodyList=null;this.m_contactList=null;this.m_jointList=null;this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;this.m_bodyDestroyList=null;this.m_allowSleep=doSleep;this.m_gravity=gravity;this.m_contactManager.m_world=this;this.m_broadPhase=new b2BroadPhase(worldAABB,this.m_contactManager);var bd=new b2BodyDef();this.m_groundBody=this.CreateBody(bd);},SetListener:function(listener){this.m_listener=listener;},SetFilter:function(filter){this.m_filter=filter;},CreateBody:function(def){var b=new b2Body(def,this);b.m_prev=null;b.m_next=this.m_bodyList;if(this.m_bodyList)
			{this.m_bodyList.m_prev=b;}
			this.m_bodyList=b;++this.m_bodyCount;return b;},DestroyBody:function(b)
			{if(b.m_flags&b2Body.e_destroyFlag)
			{return;}
			if(b.m_prev)
			{b.m_prev.m_next=b.m_next;}
			if(b.m_next)
			{b.m_next.m_prev=b.m_prev;}
			if(b==this.m_bodyList)
			{this.m_bodyList=b.m_next;}
			b.m_flags|=b2Body.e_destroyFlag;--this.m_bodyCount;b.m_prev=null;b.m_next=this.m_bodyDestroyList;this.m_bodyDestroyList=b;},CleanBodyList:function()
			{this.m_contactManager.m_destroyImmediate=true;var b=this.m_bodyDestroyList;while(b)
			{var b0=b;b=b.m_next;var jn=b0.m_jointList;while(jn)
			{var jn0=jn;jn=jn.next;if(this.m_listener)
			{this.m_listener.NotifyJointDestroyed(jn0.joint);}
			this.DestroyJoint(jn0.joint);}
			b0.Destroy();}
			this.m_bodyDestroyList=null;this.m_contactManager.m_destroyImmediate=false;},CreateJoint:function(def){var j=b2Joint.Create(def,this.m_blockAllocator);j.m_prev=null;j.m_next=this.m_jointList;if(this.m_jointList)
			{this.m_jointList.m_prev=j;}
			this.m_jointList=j;++this.m_jointCount;j.m_node1.joint=j;j.m_node1.other=j.m_body2;j.m_node1.prev=null;j.m_node1.next=j.m_body1.m_jointList;if(j.m_body1.m_jointList)j.m_body1.m_jointList.prev=j.m_node1;j.m_body1.m_jointList=j.m_node1;j.m_node2.joint=j;j.m_node2.other=j.m_body1;j.m_node2.prev=null;j.m_node2.next=j.m_body2.m_jointList;if(j.m_body2.m_jointList)j.m_body2.m_jointList.prev=j.m_node2;j.m_body2.m_jointList=j.m_node2;if(def.collideConnected==false)
			{var b=def.body1.m_shapeCount<def.body2.m_shapeCount?def.body1:def.body2;for(var s=b.m_shapeList;s;s=s.m_next)
			{s.ResetProxy(this.m_broadPhase);}}
			return j;},DestroyJoint:function(j)
			{var collideConnected=j.m_collideConnected;if(j.m_prev)
			{j.m_prev.m_next=j.m_next;}
			if(j.m_next)
			{j.m_next.m_prev=j.m_prev;}
			if(j==this.m_jointList)
			{this.m_jointList=j.m_next;}
			var body1=j.m_body1;var body2=j.m_body2;body1.WakeUp();body2.WakeUp();if(j.m_node1.prev)
			{j.m_node1.prev.next=j.m_node1.next;}
			if(j.m_node1.next)
			{j.m_node1.next.prev=j.m_node1.prev;}
			if(j.m_node1==body1.m_jointList)
			{body1.m_jointList=j.m_node1.next;}
			j.m_node1.prev=null;j.m_node1.next=null;if(j.m_node2.prev)
			{j.m_node2.prev.next=j.m_node2.next;}
			if(j.m_node2.next)
			{j.m_node2.next.prev=j.m_node2.prev;}
			if(j.m_node2==body2.m_jointList)
			{body2.m_jointList=j.m_node2.next;}
			j.m_node2.prev=null;j.m_node2.next=null;b2Joint.Destroy(j,this.m_blockAllocator);--this.m_jointCount;if(collideConnected==false)
			{var b=body1.m_shapeCount<body2.m_shapeCount?body1:body2;for(var s=b.m_shapeList;s;s=s.m_next)
			{s.ResetProxy(this.m_broadPhase);}}},GetGroundBody:function(){return this.m_groundBody;},step:new b2TimeStep(),Step:function(dt,iterations){var b;var other;this.step.dt=dt;this.step.iterations=iterations;if(dt>0.0)
			{this.step.inv_dt=1.0/dt;}
			else
			{this.step.inv_dt=0.0;}
			this.m_positionIterationCount=0;this.m_contactManager.CleanContactList();this.CleanBodyList();this.m_contactManager.Collide();var island=new b2Island(this.m_bodyCount,this.m_contactCount,this.m_jointCount,this.m_stackAllocator);for(b=this.m_bodyList;b!=null;b=b.m_next)
			{b.m_flags&=~b2Body.e_islandFlag;}
			for(var c=this.m_contactList;c!=null;c=c.m_next)
			{c.m_flags&=~b2Contact.e_islandFlag;}
			for(var j=this.m_jointList;j!=null;j=j.m_next)
			{j.m_islandFlag=false;}
			var stackSize=this.m_bodyCount;var stack=new Array(this.m_bodyCount);for(var k=0;k<this.m_bodyCount;k++)
			stack[k]=null;for(var seed=this.m_bodyList;seed!=null;seed=seed.m_next)
			{if(seed.m_flags&(b2Body.e_staticFlag|b2Body.e_islandFlag|b2Body.e_sleepFlag|b2Body.e_frozenFlag))
			{continue;}
			island.Clear();var stackCount=0;stack[stackCount++]=seed;seed.m_flags|=b2Body.e_islandFlag;;while(stackCount>0)
			{b=stack[--stackCount];island.AddBody(b);b.m_flags&=~b2Body.e_sleepFlag;if(b.m_flags&b2Body.e_staticFlag)
			{continue;}
			for(var cn=b.m_contactList;cn!=null;cn=cn.next)
			{if(cn.contact.m_flags&b2Contact.e_islandFlag)
			{continue;}
			island.AddContact(cn.contact);cn.contact.m_flags|=b2Contact.e_islandFlag;other=cn.other;if(other.m_flags&b2Body.e_islandFlag)
			{continue;}
			stack[stackCount++]=other;other.m_flags|=b2Body.e_islandFlag;}
			for(var jn=b.m_jointList;jn!=null;jn=jn.next)
			{if(jn.joint.m_islandFlag==true)
			{continue;}
			island.AddJoint(jn.joint);jn.joint.m_islandFlag=true;other=jn.other;if(other.m_flags&b2Body.e_islandFlag)
			{continue;}
			stack[stackCount++]=other;other.m_flags|=b2Body.e_islandFlag;}}
			island.Solve(this.step,this.m_gravity);this.m_positionIterationCount=b2Math.b2Max(this.m_positionIterationCount,b2Island.m_positionIterationCount);if(this.m_allowSleep)
			{island.UpdateSleep(dt);}
			for(var i=0;i<island.m_bodyCount;++i)
			{b=island.m_bodies[i];if(b.m_flags&b2Body.e_staticFlag)
			{b.m_flags&=~b2Body.e_islandFlag;}
			if(b.IsFrozen()&&this.m_listener)
			{var response=this.m_listener.NotifyBoundaryViolated(b);if(response==b2WorldListener.b2_destroyBody)
			{this.DestroyBody(b);b=null;island.m_bodies[i]=null;}}}}
			this.m_broadPhase.Commit();},Query:function(aabb,shapes,maxCount){var results=new Array();var count=this.m_broadPhase.QueryAABB(aabb,results,maxCount);for(var i=0;i<count;++i)
			{shapes[i]=results[i];}
			return count;},GetBodyList:function(){return this.m_bodyList;},GetJointList:function(){return this.m_jointList;},GetContactList:function(){return this.m_contactList;},m_blockAllocator:null,m_stackAllocator:null,m_broadPhase:null,m_contactManager:new b2ContactManager(),m_bodyList:null,m_contactList:null,m_jointList:null,m_bodyCount:0,m_contactCount:0,m_jointCount:0,m_bodyDestroyList:null,m_gravity:null,m_allowSleep:null,m_groundBody:null,m_listener:null,m_filter:null,m_positionIterationCount:0};b2World.s_enablePositionCorrection=1;b2World.s_enableWarmStarting=1;
			var b2WorldListener=Class.create();b2WorldListener.prototype={NotifyJointDestroyed:function(joint){},NotifyBoundaryViolated:function(body)
			{return b2WorldListener.b2_freezeBody;},initialize:function(){}};b2WorldListener.b2_freezeBody=0;b2WorldListener.b2_destroyBody=1;
			var b2JointNode=Class.create();b2JointNode.prototype={other:null,joint:null,prev:null,next:null,initialize:function(){}}
			
			var b2Joint=Class.create();b2Joint.prototype={GetType:function(){return this.m_type;},GetAnchor1:function(){return null},GetAnchor2:function(){return null},GetReactionForce:function(invTimeStep){return null},GetReactionTorque:function(invTimeStep){return 0.0},GetBody1:function()
			{return this.m_body1;},GetBody2:function()
			{return this.m_body2;},GetNext:function(){return this.m_next;},GetUserData:function(){return this.m_userData;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;},PrepareVelocitySolver:function(){},SolveVelocityConstraints:function(step){},PreparePositionSolver:function(){},SolvePositionConstraints:function(){return false},m_type:0,m_prev:null,m_next:null,m_node1:new b2JointNode(),m_node2:new b2JointNode(),m_body1:null,m_body2:null,m_islandFlag:null,m_collideConnected:null,m_userData:null};b2Joint.Create=function(def,allocator){var joint=null;switch(def.type)
			{case b2Joint.e_distanceJoint:{joint=new b2DistanceJoint(def);}
			break;case b2Joint.e_mouseJoint:{joint=new b2MouseJoint(def);}
			break;case b2Joint.e_prismaticJoint:{joint=new b2PrismaticJoint(def);}
			break;case b2Joint.e_revoluteJoint:{joint=new b2RevoluteJoint(def);}
			break;case b2Joint.e_pulleyJoint:{joint=new b2PulleyJoint(def);}
			break;case b2Joint.e_gearJoint:{joint=new b2GearJoint(def);}
			break;default:break;}
			return joint;};b2Joint.Destroy=function(joint,allocator){};b2Joint.e_unknownJoint=0;b2Joint.e_revoluteJoint=1;b2Joint.e_prismaticJoint=2;b2Joint.e_distanceJoint=3;b2Joint.e_pulleyJoint=4;b2Joint.e_mouseJoint=5;b2Joint.e_gearJoint=6;b2Joint.e_inactiveLimit=0;b2Joint.e_atLowerLimit=1;b2Joint.e_atUpperLimit=2;b2Joint.e_equalLimits=3;
			var b2JointDef=Class.create();b2JointDef.prototype={initialize:function()
			{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;},type:0,userData:null,body1:null,body2:null,collideConnected:null}
			
			var b2DistanceJoint=Class.create();Object.extend(b2DistanceJoint.prototype,b2Joint.prototype);Object.extend(b2DistanceJoint.prototype,{initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_u=new b2Vec2();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=def.anchorPoint1.x-this.m_body1.m_position.x;tY=def.anchorPoint1.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint2.x-this.m_body2.m_position.x;tY=def.anchorPoint2.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;tX=def.anchorPoint2.x-def.anchorPoint1.x;tY=def.anchorPoint2.y-def.anchorPoint1.y;this.m_length=Math.sqrt(tX*tX+tY*tY);this.m_impulse=0.0;},PrepareVelocitySolver:function(){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;this.m_u.x=this.m_body2.m_position.x+r2X-this.m_body1.m_position.x-r1X;this.m_u.y=this.m_body2.m_position.y+r2Y-this.m_body1.m_position.y-r1Y;var length=Math.sqrt(this.m_u.x*this.m_u.x+this.m_u.y*this.m_u.y);if(length>b2Settings.b2_linearSlop)
			{this.m_u.Multiply(1.0/length);}
			else
			{this.m_u.SetZero();}
			var cr1u=(r1X*this.m_u.y-r1Y*this.m_u.x);var cr2u=(r2X*this.m_u.y-r2Y*this.m_u.x);this.m_mass=this.m_body1.m_invMass+this.m_body1.m_invI*cr1u*cr1u+this.m_body2.m_invMass+this.m_body2.m_invI*cr2u*cr2u;this.m_mass=1.0/this.m_mass;if(b2World.s_enableWarmStarting)
			{var PX=this.m_impulse*this.m_u.x;var PY=this.m_impulse*this.m_u.y;this.m_body1.m_linearVelocity.x-=this.m_body1.m_invMass*PX;this.m_body1.m_linearVelocity.y-=this.m_body1.m_invMass*PY;this.m_body1.m_angularVelocity-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_linearVelocity.x+=this.m_body2.m_invMass*PX;this.m_body2.m_linearVelocity.y+=this.m_body2.m_invMass*PY;this.m_body2.m_angularVelocity+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);}
			else
			{this.m_impulse=0.0;}},SolveVelocityConstraints:function(step){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var v1X=this.m_body1.m_linearVelocity.x+(-this.m_body1.m_angularVelocity*r1Y);var v1Y=this.m_body1.m_linearVelocity.y+(this.m_body1.m_angularVelocity*r1X);var v2X=this.m_body2.m_linearVelocity.x+(-this.m_body2.m_angularVelocity*r2Y);var v2Y=this.m_body2.m_linearVelocity.y+(this.m_body2.m_angularVelocity*r2X);var Cdot=(this.m_u.x*(v2X-v1X)+this.m_u.y*(v2Y-v1Y));var impulse=-this.m_mass*Cdot;this.m_impulse+=impulse;var PX=impulse*this.m_u.x;var PY=impulse*this.m_u.y;this.m_body1.m_linearVelocity.x-=this.m_body1.m_invMass*PX;this.m_body1.m_linearVelocity.y-=this.m_body1.m_invMass*PY;this.m_body1.m_angularVelocity-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_linearVelocity.x+=this.m_body2.m_invMass*PX;this.m_body2.m_linearVelocity.y+=this.m_body2.m_invMass*PY;this.m_body2.m_angularVelocity+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);},SolvePositionConstraints:function(){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var dX=this.m_body2.m_position.x+r2X-this.m_body1.m_position.x-r1X;var dY=this.m_body2.m_position.y+r2Y-this.m_body1.m_position.y-r1Y;var length=Math.sqrt(dX*dX+dY*dY);dX/=length;dY/=length;var C=length-this.m_length;C=b2Math.b2Clamp(C,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);var impulse=-this.m_mass*C;this.m_u.Set(dX,dY);var PX=impulse*this.m_u.x;var PY=impulse*this.m_u.y;this.m_body1.m_position.x-=this.m_body1.m_invMass*PX;this.m_body1.m_position.y-=this.m_body1.m_invMass*PY;this.m_body1.m_rotation-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_position.x+=this.m_body2.m_invMass*PX;this.m_body2.m_position.y+=this.m_body2.m_invMass*PY;this.m_body2.m_rotation+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);this.m_body1.m_R.Set(this.m_body1.m_rotation);this.m_body2.m_R.Set(this.m_body2.m_rotation);return b2Math.b2Abs(C)<b2Settings.b2_linearSlop;},GetAnchor1:function(){return b2Math.AddVV(this.m_body1.m_position,b2Math.b2MulMV(this.m_body1.m_R,this.m_localAnchor1));},GetAnchor2:function(){return b2Math.AddVV(this.m_body2.m_position,b2Math.b2MulMV(this.m_body2.m_R,this.m_localAnchor2));},GetReactionForce:function(invTimeStep)
			{var F=new b2Vec2();F.SetV(this.m_u);F.Multiply(this.m_impulse*invTimeStep);return F;},GetReactionTorque:function(invTimeStep)
			{return 0.0;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_u:new b2Vec2(),m_impulse:null,m_mass:null,m_length:null});
			var b2DistanceJointDef=Class.create();Object.extend(b2DistanceJointDef.prototype,b2JointDef.prototype);Object.extend(b2DistanceJointDef.prototype,{initialize:function()
			{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.anchorPoint1=new b2Vec2();this.anchorPoint2=new b2Vec2();this.type=b2Joint.e_distanceJoint;},anchorPoint1:new b2Vec2(),anchorPoint2:new b2Vec2()});
			var b2Jacobian=Class.create();b2Jacobian.prototype={linear1:new b2Vec2(),angular1:null,linear2:new b2Vec2(),angular2:null,SetZero:function(){this.linear1.SetZero();this.angular1=0.0;this.linear2.SetZero();this.angular2=0.0;},Set:function(x1,a1,x2,a2){this.linear1.SetV(x1);this.angular1=a1;this.linear2.SetV(x2);this.angular2=a2;},Compute:function(x1,a1,x2,a2){return(this.linear1.x*x1.x+this.linear1.y*x1.y)+this.angular1*a1+(this.linear2.x*x2.x+this.linear2.y*x2.y)+this.angular2*a2;},initialize:function(){this.linear1=new b2Vec2();this.linear2=new b2Vec2();}};
			var b2GearJoint=Class.create();Object.extend(b2GearJoint.prototype,b2Joint.prototype);Object.extend(b2GearJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetReactionForce:function(invTimeStep){return new b2Vec2();},GetReactionTorque:function(invTimeStep){return 0.0;},GetRatio:function(){return this.m_ratio;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_groundAnchor1=new b2Vec2();this.m_groundAnchor2=new b2Vec2();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_J=new b2Jacobian();this.m_revolute1=null;this.m_prismatic1=null;this.m_revolute2=null;this.m_prismatic2=null;var coordinate1;var coordinate2;this.m_ground1=def.joint1.m_body1;this.m_body1=def.joint1.m_body2;if(def.joint1.m_type==b2Joint.e_revoluteJoint)
			{this.m_revolute1=def.joint1;this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);coordinate1=this.m_revolute1.GetJointAngle();}
			else
			{this.m_prismatic1=def.joint1;this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);coordinate1=this.m_prismatic1.GetJointTranslation();}
			this.m_ground2=def.joint2.m_body1;this.m_body2=def.joint2.m_body2;if(def.joint2.m_type==b2Joint.e_revoluteJoint)
			{this.m_revolute2=def.joint2;this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);coordinate2=this.m_revolute2.GetJointAngle();}
			else
			{this.m_prismatic2=def.joint2;this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);coordinate2=this.m_prismatic2.GetJointTranslation();}
			this.m_ratio=def.ratio;this.m_constant=coordinate1+this.m_ratio*coordinate2;this.m_impulse=0.0;},PrepareVelocitySolver:function(){var g1=this.m_ground1;var g2=this.m_ground2;var b1=this.m_body1;var b2=this.m_body2;var ugX;var ugY;var rX;var rY;var tMat;var tVec;var crug;var K=0.0;this.m_J.SetZero();if(this.m_revolute1)
			{this.m_J.angular1=-1.0;K+=b1.m_invI;}
			else
			{tMat=g1.m_R;tVec=this.m_prismatic1.m_localXAxis1;ugX=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;ugY=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b1.m_R;rX=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;rY=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;crug=rX*ugY-rY*ugX;this.m_J.linear1.Set(-ugX,-ugY);this.m_J.angular1=-crug;K+=b1.m_invMass+b1.m_invI*crug*crug;}
			if(this.m_revolute2)
			{this.m_J.angular2=-this.m_ratio;K+=this.m_ratio*this.m_ratio*b2.m_invI;}
			else
			{tMat=g2.m_R;tVec=this.m_prismatic2.m_localXAxis1;ugX=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;ugY=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b2.m_R;rX=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;rY=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;crug=rX*ugY-rY*ugX;this.m_J.linear2.Set(-this.m_ratio*ugX,-this.m_ratio*ugY);this.m_J.angular2=-this.m_ratio*crug;K+=this.m_ratio*this.m_ratio*(b2.m_invMass+b2.m_invI*crug*crug);}
			this.m_mass=1.0/K;b1.m_linearVelocity.x+=b1.m_invMass*this.m_impulse*this.m_J.linear1.x;b1.m_linearVelocity.y+=b1.m_invMass*this.m_impulse*this.m_J.linear1.y;b1.m_angularVelocity+=b1.m_invI*this.m_impulse*this.m_J.angular1;b2.m_linearVelocity.x+=b2.m_invMass*this.m_impulse*this.m_J.linear2.x;b2.m_linearVelocity.y+=b2.m_invMass*this.m_impulse*this.m_J.linear2.y;b2.m_angularVelocity+=b2.m_invI*this.m_impulse*this.m_J.angular2;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var Cdot=this.m_J.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var impulse=-this.m_mass*Cdot;this.m_impulse+=impulse;b1.m_linearVelocity.x+=b1.m_invMass*impulse*this.m_J.linear1.x;b1.m_linearVelocity.y+=b1.m_invMass*impulse*this.m_J.linear1.y;b1.m_angularVelocity+=b1.m_invI*impulse*this.m_J.angular1;b2.m_linearVelocity.x+=b2.m_invMass*impulse*this.m_J.linear2.x;b2.m_linearVelocity.y+=b2.m_invMass*impulse*this.m_J.linear2.y;b2.m_angularVelocity+=b2.m_invI*impulse*this.m_J.angular2;},SolvePositionConstraints:function(){var linearError=0.0;var b1=this.m_body1;var b2=this.m_body2;var coordinate1;var coordinate2;if(this.m_revolute1)
			{coordinate1=this.m_revolute1.GetJointAngle();}
			else
			{coordinate1=this.m_prismatic1.GetJointTranslation();}
			if(this.m_revolute2)
			{coordinate2=this.m_revolute2.GetJointAngle();}
			else
			{coordinate2=this.m_prismatic2.GetJointTranslation();}
			var C=this.m_constant-(coordinate1+this.m_ratio*coordinate2);var impulse=-this.m_mass*C;b1.m_position.x+=b1.m_invMass*impulse*this.m_J.linear1.x;b1.m_position.y+=b1.m_invMass*impulse*this.m_J.linear1.y;b1.m_rotation+=b1.m_invI*impulse*this.m_J.angular1;b2.m_position.x+=b2.m_invMass*impulse*this.m_J.linear2.x;b2.m_position.y+=b2.m_invMass*impulse*this.m_J.linear2.y;b2.m_rotation+=b2.m_invI*impulse*this.m_J.angular2;b1.m_R.Set(b1.m_rotation);b2.m_R.Set(b2.m_rotation);return linearError<b2Settings.b2_linearSlop;},m_ground1:null,m_ground2:null,m_revolute1:null,m_prismatic1:null,m_revolute2:null,m_prismatic2:null,m_groundAnchor1:new b2Vec2(),m_groundAnchor2:new b2Vec2(),m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_J:new b2Jacobian(),m_constant:null,m_ratio:null,m_mass:null,m_impulse:null});
			var b2GearJointDef=Class.create();Object.extend(b2GearJointDef.prototype,b2JointDef.prototype);Object.extend(b2GearJointDef.prototype,{initialize:function()
			{this.type=b2Joint.e_gearJoint;this.joint1=null;this.joint2=null;this.ratio=1.0;},joint1:null,joint2:null,ratio:null});
			var b2MouseJoint=Class.create();Object.extend(b2MouseJoint.prototype,b2Joint.prototype);Object.extend(b2MouseJoint.prototype,{GetAnchor1:function(){return this.m_target;},GetAnchor2:function(){var tVec=b2Math.b2MulMV(this.m_body2.m_R,this.m_localAnchor);tVec.Add(this.m_body2.m_position);return tVec;},GetReactionForce:function(invTimeStep)
			{var F=new b2Vec2();F.SetV(this.m_impulse);F.Multiply(invTimeStep);return F;},GetReactionTorque:function(invTimeStep)
			{return 0.0;},SetTarget:function(target){this.m_body2.WakeUp();this.m_target=target;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.K=new b2Mat22();this.K1=new b2Mat22();this.K2=new b2Mat22();this.m_localAnchor=new b2Vec2();this.m_target=new b2Vec2();this.m_impulse=new b2Vec2();this.m_ptpMass=new b2Mat22();this.m_C=new b2Vec2();this.m_target.SetV(def.target);var tX=this.m_target.x-this.m_body2.m_position.x;var tY=this.m_target.y-this.m_body2.m_position.y;this.m_localAnchor.x=(tX*this.m_body2.m_R.col1.x+tY*this.m_body2.m_R.col1.y);this.m_localAnchor.y=(tX*this.m_body2.m_R.col2.x+tY*this.m_body2.m_R.col2.y);this.m_maxForce=def.maxForce;this.m_impulse.SetZero();var mass=this.m_body2.m_mass;var omega=2.0*b2Settings.b2_pi*def.frequencyHz;var d=2.0*mass*def.dampingRatio*omega;var k=mass*omega*omega;this.m_gamma=1.0/(d+def.timeStep*k);this.m_beta=def.timeStep*k/(d+def.timeStep*k);},K:new b2Mat22(),K1:new b2Mat22(),K2:new b2Mat22(),PrepareVelocitySolver:function(){var b=this.m_body2;var tMat;tMat=b.m_R;var rX=tMat.col1.x*this.m_localAnchor.x+tMat.col2.x*this.m_localAnchor.y;var rY=tMat.col1.y*this.m_localAnchor.x+tMat.col2.y*this.m_localAnchor.y;var invMass=b.m_invMass;var invI=b.m_invI;this.K1.col1.x=invMass;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass;this.K2.col1.x=invI*rY*rY;this.K2.col2.x=-invI*rX*rY;this.K2.col1.y=-invI*rX*rY;this.K2.col2.y=invI*rX*rX;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.col1.x+=this.m_gamma;this.K.col2.y+=this.m_gamma;this.K.Invert(this.m_ptpMass);this.m_C.x=b.m_position.x+rX-this.m_target.x;this.m_C.y=b.m_position.y+rY-this.m_target.y;b.m_angularVelocity*=0.98;var PX=this.m_impulse.x;var PY=this.m_impulse.y;b.m_linearVelocity.x+=invMass*PX;b.m_linearVelocity.y+=invMass*PY;b.m_angularVelocity+=invI*(rX*PY-rY*PX);},SolveVelocityConstraints:function(step){var body=this.m_body2;var tMat;tMat=body.m_R;var rX=tMat.col1.x*this.m_localAnchor.x+tMat.col2.x*this.m_localAnchor.y;var rY=tMat.col1.y*this.m_localAnchor.x+tMat.col2.y*this.m_localAnchor.y;var CdotX=body.m_linearVelocity.x+(-body.m_angularVelocity*rY);var CdotY=body.m_linearVelocity.y+(body.m_angularVelocity*rX);tMat=this.m_ptpMass;var tX=CdotX+(this.m_beta*step.inv_dt)*this.m_C.x+this.m_gamma*this.m_impulse.x;var tY=CdotY+(this.m_beta*step.inv_dt)*this.m_C.y+this.m_gamma*this.m_impulse.y;var impulseX=-(tMat.col1.x*tX+tMat.col2.x*tY);var impulseY=-(tMat.col1.y*tX+tMat.col2.y*tY);var oldImpulseX=this.m_impulse.x;var oldImpulseY=this.m_impulse.y;this.m_impulse.x+=impulseX;this.m_impulse.y+=impulseY;var length=this.m_impulse.Length();if(length>step.dt*this.m_maxForce)
			{this.m_impulse.Multiply(step.dt*this.m_maxForce/length);}
			impulseX=this.m_impulse.x-oldImpulseX;impulseY=this.m_impulse.y-oldImpulseY;body.m_linearVelocity.x+=body.m_invMass*impulseX;body.m_linearVelocity.y+=body.m_invMass*impulseY;body.m_angularVelocity+=body.m_invI*(rX*impulseY-rY*impulseX);},SolvePositionConstraints:function(){return true;},m_localAnchor:new b2Vec2(),m_target:new b2Vec2(),m_impulse:new b2Vec2(),m_ptpMass:new b2Mat22(),m_C:new b2Vec2(),m_maxForce:null,m_beta:null,m_gamma:null});
			var b2MouseJointDef=Class.create();Object.extend(b2MouseJointDef.prototype,b2JointDef.prototype);Object.extend(b2MouseJointDef.prototype,{initialize:function()
			{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.target=new b2Vec2();this.type=b2Joint.e_mouseJoint;this.maxForce=0.0;this.frequencyHz=5.0;this.dampingRatio=0.7;this.timeStep=1.0/60.0;},target:new b2Vec2(),maxForce:null,frequencyHz:null,dampingRatio:null,timeStep:null});
			var b2PrismaticJoint=Class.create();Object.extend(b2PrismaticJoint.prototype,b2Joint.prototype);Object.extend(b2PrismaticJoint.prototype,{GetAnchor1:function(){var b1=this.m_body1;var tVec=new b2Vec2();tVec.SetV(this.m_localAnchor1);tVec.MulM(b1.m_R);tVec.Add(b1.m_position);return tVec;},GetAnchor2:function(){var b2=this.m_body2;var tVec=new b2Vec2();tVec.SetV(this.m_localAnchor2);tVec.MulM(b2.m_R);tVec.Add(b2.m_position);return tVec;},GetJointTranslation:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var translation=ax1X*dX+ax1Y*dY;return translation;},GetJointSpeed:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var v1=b1.m_linearVelocity;var v2=b2.m_linearVelocity;var w1=b1.m_angularVelocity;var w2=b2.m_angularVelocity;var speed=(dX*(-w1*ax1Y)+dY*(w1*ax1X))+(ax1X*(((v2.x+(-w2*r2Y))-v1.x)-(-w1*r1Y))+ax1Y*(((v2.y+(w2*r2X))-v1.y)-(w1*r1X)));return speed;},GetMotorForce:function(invTimeStep){return invTimeStep*this.m_motorImpulse;},SetMotorSpeed:function(speed)
			{this.m_motorSpeed=speed;},SetMotorForce:function(force)
			{this.m_maxMotorForce=force;},GetReactionForce:function(invTimeStep)
			{var tImp=invTimeStep*this.m_limitImpulse;var tMat;tMat=this.m_body1.m_R;var ax1X=tImp*(tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y);var ax1Y=tImp*(tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y);var ay1X=tImp*(tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y);var ay1Y=tImp*(tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y);return new b2Vec2(ax1X+ay1X,ax1Y+ay1Y);},GetReactionTorque:function(invTimeStep)
			{return invTimeStep*this.m_angularImpulse;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_localXAxis1=new b2Vec2();this.m_localYAxis1=new b2Vec2();this.m_linearJacobian=new b2Jacobian();this.m_motorJacobian=new b2Jacobian();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=(def.anchorPoint.x-this.m_body1.m_position.x);tY=(def.anchorPoint.y-this.m_body1.m_position.y);this.m_localAnchor1.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));tMat=this.m_body2.m_R;tX=(def.anchorPoint.x-this.m_body2.m_position.x);tY=(def.anchorPoint.y-this.m_body2.m_position.y);this.m_localAnchor2.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));tMat=this.m_body1.m_R;tX=def.axis.x;tY=def.axis.y;this.m_localXAxis1.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));this.m_localYAxis1.x=-this.m_localXAxis1.y;this.m_localYAxis1.y=this.m_localXAxis1.x;this.m_initialAngle=this.m_body2.m_rotation-this.m_body1.m_rotation;this.m_linearJacobian.SetZero();this.m_linearMass=0.0;this.m_linearImpulse=0.0;this.m_angularMass=0.0;this.m_angularImpulse=0.0;this.m_motorJacobian.SetZero();this.m_motorMass=0.0;this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;this.m_limitPositionImpulse=0.0;this.m_lowerTranslation=def.lowerTranslation;this.m_upperTranslation=def.upperTranslation;this.m_maxMotorForce=def.motorForce;this.m_motorSpeed=def.motorSpeed;this.m_enableLimit=def.enableLimit;this.m_enableMotor=def.enableMotor;},PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;tMat=b1.m_R;var ay1X=tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y;var ay1Y=tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y;var eX=b2.m_position.x+r2X-b1.m_position.x;var eY=b2.m_position.y+r2Y-b1.m_position.y;this.m_linearJacobian.linear1.x=-ay1X;this.m_linearJacobian.linear1.y=-ay1Y;this.m_linearJacobian.linear2.x=ay1X;this.m_linearJacobian.linear2.y=ay1Y;this.m_linearJacobian.angular1=-(eX*ay1Y-eY*ay1X);this.m_linearJacobian.angular2=r2X*ay1Y-r2Y*ay1X;this.m_linearMass=invMass1+invI1*this.m_linearJacobian.angular1*this.m_linearJacobian.angular1+
			invMass2+invI2*this.m_linearJacobian.angular2*this.m_linearJacobian.angular2;this.m_linearMass=1.0/this.m_linearMass;this.m_angularMass=1.0/(invI1+invI2);if(this.m_enableLimit||this.m_enableMotor)
			{tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;this.m_motorJacobian.linear1.x=-ax1X;this.m_motorJacobian.linear1.y=-ax1Y;this.m_motorJacobian.linear2.x=ax1X;this.m_motorJacobian.linear2.y=ax1Y;this.m_motorJacobian.angular1=-(eX*ax1Y-eY*ax1X);this.m_motorJacobian.angular2=r2X*ax1Y-r2Y*ax1X;this.m_motorMass=invMass1+invI1*this.m_motorJacobian.angular1*this.m_motorJacobian.angular1+
			invMass2+invI2*this.m_motorJacobian.angular2*this.m_motorJacobian.angular2;this.m_motorMass=1.0/this.m_motorMass;if(this.m_enableLimit)
			{var dX=eX-r1X;var dY=eY-r1Y;var jointTranslation=ax1X*dX+ax1Y*dY;if(b2Math.b2Abs(this.m_upperTranslation-this.m_lowerTranslation)<2.0*b2Settings.b2_linearSlop)
			{this.m_limitState=b2Joint.e_equalLimits;}
			else if(jointTranslation<=this.m_lowerTranslation)
			{if(this.m_limitState!=b2Joint.e_atLowerLimit)
			{this.m_limitImpulse=0.0;}
			this.m_limitState=b2Joint.e_atLowerLimit;}
			else if(jointTranslation>=this.m_upperTranslation)
			{if(this.m_limitState!=b2Joint.e_atUpperLimit)
			{this.m_limitImpulse=0.0;}
			this.m_limitState=b2Joint.e_atUpperLimit;}
			else
			{this.m_limitState=b2Joint.e_inactiveLimit;this.m_limitImpulse=0.0;}}}
			if(this.m_enableMotor==false)
			{this.m_motorImpulse=0.0;}
			if(this.m_enableLimit==false)
			{this.m_limitImpulse=0.0;}
			if(b2World.s_enableWarmStarting)
			{var P1X=this.m_linearImpulse*this.m_linearJacobian.linear1.x+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear1.x;var P1Y=this.m_linearImpulse*this.m_linearJacobian.linear1.y+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear1.y;var P2X=this.m_linearImpulse*this.m_linearJacobian.linear2.x+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear2.x;var P2Y=this.m_linearImpulse*this.m_linearJacobian.linear2.y+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear2.y;var L1=this.m_linearImpulse*this.m_linearJacobian.angular1-this.m_angularImpulse+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.angular1;var L2=this.m_linearImpulse*this.m_linearJacobian.angular2+this.m_angularImpulse+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.angular2;b1.m_linearVelocity.x+=invMass1*P1X;b1.m_linearVelocity.y+=invMass1*P1Y;b1.m_angularVelocity+=invI1*L1;b2.m_linearVelocity.x+=invMass2*P2X;b2.m_linearVelocity.y+=invMass2*P2Y;b2.m_angularVelocity+=invI2*L2;}
			else
			{this.m_linearImpulse=0.0;this.m_angularImpulse=0.0;this.m_limitImpulse=0.0;this.m_motorImpulse=0.0;}
			this.m_limitPositionImpulse=0.0;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;var oldLimitImpulse;var linearCdot=this.m_linearJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var linearImpulse=-this.m_linearMass*linearCdot;this.m_linearImpulse+=linearImpulse;b1.m_linearVelocity.x+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.y;b1.m_angularVelocity+=invI1*linearImpulse*this.m_linearJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.y;b2.m_angularVelocity+=invI2*linearImpulse*this.m_linearJacobian.angular2;var angularCdot=b2.m_angularVelocity-b1.m_angularVelocity;var angularImpulse=-this.m_angularMass*angularCdot;this.m_angularImpulse+=angularImpulse;b1.m_angularVelocity-=invI1*angularImpulse;b2.m_angularVelocity+=invI2*angularImpulse;if(this.m_enableMotor&&this.m_limitState!=b2Joint.e_equalLimits)
			{var motorCdot=this.m_motorJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity)-this.m_motorSpeed;var motorImpulse=-this.m_motorMass*motorCdot;var oldMotorImpulse=this.m_motorImpulse;this.m_motorImpulse=b2Math.b2Clamp(this.m_motorImpulse+motorImpulse,-step.dt*this.m_maxMotorForce,step.dt*this.m_maxMotorForce);motorImpulse=this.m_motorImpulse-oldMotorImpulse;b1.m_linearVelocity.x+=(invMass1*motorImpulse)*this.m_motorJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*motorImpulse)*this.m_motorJacobian.linear1.y;b1.m_angularVelocity+=invI1*motorImpulse*this.m_motorJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*motorImpulse)*this.m_motorJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*motorImpulse)*this.m_motorJacobian.linear2.y;b2.m_angularVelocity+=invI2*motorImpulse*this.m_motorJacobian.angular2;}
			if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
			{var limitCdot=this.m_motorJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var limitImpulse=-this.m_motorMass*limitCdot;if(this.m_limitState==b2Joint.e_equalLimits)
			{this.m_limitImpulse+=limitImpulse;}
			else if(this.m_limitState==b2Joint.e_atLowerLimit)
			{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Max(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
			else if(this.m_limitState==b2Joint.e_atUpperLimit)
			{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Min(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
			b1.m_linearVelocity.x+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.y;b1.m_angularVelocity+=invI1*limitImpulse*this.m_motorJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.y;b2.m_angularVelocity+=invI2*limitImpulse*this.m_motorJacobian.angular2;}},SolvePositionConstraints:function(){var limitC;var oldLimitImpulse;var b1=this.m_body1;var b2=this.m_body2;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ay1X=tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y;var ay1Y=tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y;var linearC=ay1X*dX+ay1Y*dY;linearC=b2Math.b2Clamp(linearC,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);var linearImpulse=-this.m_linearMass*linearC;b1.m_position.x+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.x;b1.m_position.y+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.y;b1.m_rotation+=invI1*linearImpulse*this.m_linearJacobian.angular1;b2.m_position.x+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.x;b2.m_position.y+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.y;b2.m_rotation+=invI2*linearImpulse*this.m_linearJacobian.angular2;var positionError=b2Math.b2Abs(linearC);var angularC=b2.m_rotation-b1.m_rotation-this.m_initialAngle;angularC=b2Math.b2Clamp(angularC,-b2Settings.b2_maxAngularCorrection,b2Settings.b2_maxAngularCorrection);var angularImpulse=-this.m_angularMass*angularC;b1.m_rotation-=b1.m_invI*angularImpulse;b1.m_R.Set(b1.m_rotation);b2.m_rotation+=b2.m_invI*angularImpulse;b2.m_R.Set(b2.m_rotation);var angularError=b2Math.b2Abs(angularC);if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
			{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;dX=p2X-p1X;dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var translation=(ax1X*dX+ax1Y*dY);var limitImpulse=0.0;if(this.m_limitState==b2Joint.e_equalLimits)
			{limitC=b2Math.b2Clamp(translation,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);limitImpulse=-this.m_motorMass*limitC;positionError=b2Math.b2Max(positionError,b2Math.b2Abs(angularC));}
			else if(this.m_limitState==b2Joint.e_atLowerLimit)
			{limitC=translation-this.m_lowerTranslation;positionError=b2Math.b2Max(positionError,-limitC);limitC=b2Math.b2Clamp(limitC+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Max(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
			else if(this.m_limitState==b2Joint.e_atUpperLimit)
			{limitC=translation-this.m_upperTranslation;positionError=b2Math.b2Max(positionError,limitC);limitC=b2Math.b2Clamp(limitC-b2Settings.b2_linearSlop,0.0,b2Settings.b2_maxLinearCorrection);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Min(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
			b1.m_position.x+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.x;b1.m_position.y+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.y;b1.m_rotation+=invI1*limitImpulse*this.m_motorJacobian.angular1;b1.m_R.Set(b1.m_rotation);b2.m_position.x+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.x;b2.m_position.y+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.y;b2.m_rotation+=invI2*limitImpulse*this.m_motorJacobian.angular2;b2.m_R.Set(b2.m_rotation);}
			return positionError<=b2Settings.b2_linearSlop&&angularError<=b2Settings.b2_angularSlop;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_localXAxis1:new b2Vec2(),m_localYAxis1:new b2Vec2(),m_initialAngle:null,m_linearJacobian:new b2Jacobian(),m_linearMass:null,m_linearImpulse:null,m_angularMass:null,m_angularImpulse:null,m_motorJacobian:new b2Jacobian(),m_motorMass:null,m_motorImpulse:null,m_limitImpulse:null,m_limitPositionImpulse:null,m_lowerTranslation:null,m_upperTranslation:null,m_maxMotorForce:null,m_motorSpeed:null,m_enableLimit:null,m_enableMotor:null,m_limitState:0});
			var b2PrismaticJointDef=Class.create();Object.extend(b2PrismaticJointDef.prototype,b2JointDef.prototype);Object.extend(b2PrismaticJointDef.prototype,{initialize:function()
			{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.type=b2Joint.e_prismaticJoint;this.anchorPoint=new b2Vec2(0.0,0.0);this.axis=new b2Vec2(0.0,0.0);this.lowerTranslation=0.0;this.upperTranslation=0.0;this.motorForce=0.0;this.motorSpeed=0.0;this.enableLimit=false;this.enableMotor=false;},anchorPoint:null,axis:null,lowerTranslation:null,upperTranslation:null,motorForce:null,motorSpeed:null,enableLimit:null,enableMotor:null});
			var b2PulleyJoint=Class.create();Object.extend(b2PulleyJoint.prototype,b2Joint.prototype);Object.extend(b2PulleyJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetGroundPoint1:function(){return new b2Vec2(this.m_ground.m_position.x+this.m_groundAnchor1.x,this.m_ground.m_position.y+this.m_groundAnchor1.y);},GetGroundPoint2:function(){return new b2Vec2(this.m_ground.m_position.x+this.m_groundAnchor2.x,this.m_ground.m_position.y+this.m_groundAnchor2.y);},GetReactionForce:function(invTimeStep){return new b2Vec2();},GetReactionTorque:function(invTimeStep){return 0.0;},GetLength1:function(){var tMat;tMat=this.m_body1.m_R;var pX=this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y);var pY=this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y);var dX=pX-(this.m_ground.m_position.x+this.m_groundAnchor1.x);var dY=pY-(this.m_ground.m_position.y+this.m_groundAnchor1.y);return Math.sqrt(dX*dX+dY*dY);},GetLength2:function(){var tMat;tMat=this.m_body2.m_R;var pX=this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y);var pY=this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y);var dX=pX-(this.m_ground.m_position.x+this.m_groundAnchor2.x);var dY=pY-(this.m_ground.m_position.y+this.m_groundAnchor2.y);return Math.sqrt(dX*dX+dY*dY);},GetRatio:function(){return this.m_ratio;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_groundAnchor1=new b2Vec2();this.m_groundAnchor2=new b2Vec2();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_u1=new b2Vec2();this.m_u2=new b2Vec2();var tMat;var tX;var tY;this.m_ground=this.m_body1.m_world.m_groundBody;this.m_groundAnchor1.x=def.groundPoint1.x-this.m_ground.m_position.x;this.m_groundAnchor1.y=def.groundPoint1.y-this.m_ground.m_position.y;this.m_groundAnchor2.x=def.groundPoint2.x-this.m_ground.m_position.x;this.m_groundAnchor2.y=def.groundPoint2.y-this.m_ground.m_position.y;tMat=this.m_body1.m_R;tX=def.anchorPoint1.x-this.m_body1.m_position.x;tY=def.anchorPoint1.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint2.x-this.m_body2.m_position.x;tY=def.anchorPoint2.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;this.m_ratio=def.ratio;tX=def.groundPoint1.x-def.anchorPoint1.x;tY=def.groundPoint1.y-def.anchorPoint1.y;var d1Len=Math.sqrt(tX*tX+tY*tY);tX=def.groundPoint2.x-def.anchorPoint2.x;tY=def.groundPoint2.y-def.anchorPoint2.y;var d2Len=Math.sqrt(tX*tX+tY*tY);var length1=b2Math.b2Max(0.5*b2PulleyJoint.b2_minPulleyLength,d1Len);var length2=b2Math.b2Max(0.5*b2PulleyJoint.b2_minPulleyLength,d2Len);this.m_constant=length1+this.m_ratio*length2;this.m_maxLength1=b2Math.b2Clamp(def.maxLength1,length1,this.m_constant-this.m_ratio*b2PulleyJoint.b2_minPulleyLength);this.m_maxLength2=b2Math.b2Clamp(def.maxLength2,length2,(this.m_constant-b2PulleyJoint.b2_minPulleyLength)/this.m_ratio);this.m_pulleyImpulse=0.0;this.m_limitImpulse1=0.0;this.m_limitImpulse2=0.0;},PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var s1X=this.m_ground.m_position.x+this.m_groundAnchor1.x;var s1Y=this.m_ground.m_position.y+this.m_groundAnchor1.y;var s2X=this.m_ground.m_position.x+this.m_groundAnchor2.x;var s2Y=this.m_ground.m_position.y+this.m_groundAnchor2.y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);this.m_u2.Set(p2X-s2X,p2Y-s2Y);var length1=this.m_u1.Length();var length2=this.m_u2.Length();if(length1>b2Settings.b2_linearSlop)
			{this.m_u1.Multiply(1.0/length1);}
			else
			{this.m_u1.SetZero();}
			if(length2>b2Settings.b2_linearSlop)
			{this.m_u2.Multiply(1.0/length2);}
			else
			{this.m_u2.SetZero();}
			if(length1<this.m_maxLength1)
			{this.m_limitState1=b2Joint.e_inactiveLimit;this.m_limitImpulse1=0.0;}
			else
			{this.m_limitState1=b2Joint.e_atUpperLimit;this.m_limitPositionImpulse1=0.0;}
			if(length2<this.m_maxLength2)
			{this.m_limitState2=b2Joint.e_inactiveLimit;this.m_limitImpulse2=0.0;}
			else
			{this.m_limitState2=b2Joint.e_atUpperLimit;this.m_limitPositionImpulse2=0.0;}
			var cr1u1=r1X*this.m_u1.y-r1Y*this.m_u1.x;var cr2u2=r2X*this.m_u2.y-r2Y*this.m_u2.x;this.m_limitMass1=b1.m_invMass+b1.m_invI*cr1u1*cr1u1;this.m_limitMass2=b2.m_invMass+b2.m_invI*cr2u2*cr2u2;this.m_pulleyMass=this.m_limitMass1+this.m_ratio*this.m_ratio*this.m_limitMass2;this.m_limitMass1=1.0/this.m_limitMass1;this.m_limitMass2=1.0/this.m_limitMass2;this.m_pulleyMass=1.0/this.m_pulleyMass;var P1X=(-this.m_pulleyImpulse-this.m_limitImpulse1)*this.m_u1.x;var P1Y=(-this.m_pulleyImpulse-this.m_limitImpulse1)*this.m_u1.y;var P2X=(-this.m_ratio*this.m_pulleyImpulse-this.m_limitImpulse2)*this.m_u2.x;var P2Y=(-this.m_ratio*this.m_pulleyImpulse-this.m_limitImpulse2)*this.m_u2.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var v1X;var v1Y;var v2X;var v2Y;var P1X;var P1Y;var P2X;var P2Y;var Cdot;var impulse;var oldLimitImpulse;v1X=b1.m_linearVelocity.x+(-b1.m_angularVelocity*r1Y);v1Y=b1.m_linearVelocity.y+(b1.m_angularVelocity*r1X);v2X=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y);v2Y=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X);Cdot=-(this.m_u1.x*v1X+this.m_u1.y*v1Y)-this.m_ratio*(this.m_u2.x*v2X+this.m_u2.y*v2Y);impulse=-this.m_pulleyMass*Cdot;this.m_pulleyImpulse+=impulse;P1X=-impulse*this.m_u1.x;P1Y=-impulse*this.m_u1.y;P2X=-this.m_ratio*impulse*this.m_u2.x;P2Y=-this.m_ratio*impulse*this.m_u2.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);if(this.m_limitState1==b2Joint.e_atUpperLimit)
			{v1X=b1.m_linearVelocity.x+(-b1.m_angularVelocity*r1Y);v1Y=b1.m_linearVelocity.y+(b1.m_angularVelocity*r1X);Cdot=-(this.m_u1.x*v1X+this.m_u1.y*v1Y);impulse=-this.m_limitMass1*Cdot;oldLimitImpulse=this.m_limitImpulse1;this.m_limitImpulse1=b2Math.b2Max(0.0,this.m_limitImpulse1+impulse);impulse=this.m_limitImpulse1-oldLimitImpulse;P1X=-impulse*this.m_u1.x;P1Y=-impulse*this.m_u1.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);}
			if(this.m_limitState2==b2Joint.e_atUpperLimit)
			{v2X=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y);v2Y=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X);Cdot=-(this.m_u2.x*v2X+this.m_u2.y*v2Y);impulse=-this.m_limitMass2*Cdot;oldLimitImpulse=this.m_limitImpulse2;this.m_limitImpulse2=b2Math.b2Max(0.0,this.m_limitImpulse2+impulse);impulse=this.m_limitImpulse2-oldLimitImpulse;P2X=-impulse*this.m_u2.x;P2Y=-impulse*this.m_u2.y;b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);}},SolvePositionConstraints:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;var s1X=this.m_ground.m_position.x+this.m_groundAnchor1.x;var s1Y=this.m_ground.m_position.y+this.m_groundAnchor1.y;var s2X=this.m_ground.m_position.x+this.m_groundAnchor2.x;var s2Y=this.m_ground.m_position.y+this.m_groundAnchor2.y;var r1X;var r1Y;var r2X;var r2Y;var p1X;var p1Y;var p2X;var p2Y;var length1;var length2;var C;var impulse;var oldLimitPositionImpulse;var linearError=0.0;{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);this.m_u2.Set(p2X-s2X,p2Y-s2Y);length1=this.m_u1.Length();length2=this.m_u2.Length();if(length1>b2Settings.b2_linearSlop)
			{this.m_u1.Multiply(1.0/length1);}
			else
			{this.m_u1.SetZero();}
			if(length2>b2Settings.b2_linearSlop)
			{this.m_u2.Multiply(1.0/length2);}
			else
			{this.m_u2.SetZero();}
			C=this.m_constant-length1-this.m_ratio*length2;linearError=b2Math.b2Max(linearError,Math.abs(C));C=b2Math.b2Clamp(C,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);impulse=-this.m_pulleyMass*C;p1X=-impulse*this.m_u1.x;p1Y=-impulse*this.m_u1.y;p2X=-this.m_ratio*impulse*this.m_u2.x;p2Y=-this.m_ratio*impulse*this.m_u2.y;b1.m_position.x+=b1.m_invMass*p1X;b1.m_position.y+=b1.m_invMass*p1Y;b1.m_rotation+=b1.m_invI*(r1X*p1Y-r1Y*p1X);b2.m_position.x+=b2.m_invMass*p2X;b2.m_position.y+=b2.m_invMass*p2Y;b2.m_rotation+=b2.m_invI*(r2X*p2Y-r2Y*p2X);b1.m_R.Set(b1.m_rotation);b2.m_R.Set(b2.m_rotation);}
			if(this.m_limitState1==b2Joint.e_atUpperLimit)
			{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);length1=this.m_u1.Length();if(length1>b2Settings.b2_linearSlop)
			{this.m_u1.x*=1.0/length1;this.m_u1.y*=1.0/length1;}
			else
			{this.m_u1.SetZero();}
			C=this.m_maxLength1-length1;linearError=b2Math.b2Max(linearError,-C);C=b2Math.b2Clamp(C+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);impulse=-this.m_limitMass1*C;oldLimitPositionImpulse=this.m_limitPositionImpulse1;this.m_limitPositionImpulse1=b2Math.b2Max(0.0,this.m_limitPositionImpulse1+impulse);impulse=this.m_limitPositionImpulse1-oldLimitPositionImpulse;p1X=-impulse*this.m_u1.x;p1Y=-impulse*this.m_u1.y;b1.m_position.x+=b1.m_invMass*p1X;b1.m_position.y+=b1.m_invMass*p1Y;b1.m_rotation+=b1.m_invI*(r1X*p1Y-r1Y*p1X);b1.m_R.Set(b1.m_rotation);}
			if(this.m_limitState2==b2Joint.e_atUpperLimit)
			{tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;this.m_u2.Set(p2X-s2X,p2Y-s2Y);length2=this.m_u2.Length();if(length2>b2Settings.b2_linearSlop)
			{this.m_u2.x*=1.0/length2;this.m_u2.y*=1.0/length2;}
			else
			{this.m_u2.SetZero();}
			C=this.m_maxLength2-length2;linearError=b2Math.b2Max(linearError,-C);C=b2Math.b2Clamp(C+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);impulse=-this.m_limitMass2*C;oldLimitPositionImpulse=this.m_limitPositionImpulse2;this.m_limitPositionImpulse2=b2Math.b2Max(0.0,this.m_limitPositionImpulse2+impulse);impulse=this.m_limitPositionImpulse2-oldLimitPositionImpulse;p2X=-impulse*this.m_u2.x;p2Y=-impulse*this.m_u2.y;b2.m_position.x+=b2.m_invMass*p2X;b2.m_position.y+=b2.m_invMass*p2Y;b2.m_rotation+=b2.m_invI*(r2X*p2Y-r2Y*p2X);b2.m_R.Set(b2.m_rotation);}
			return linearError<b2Settings.b2_linearSlop;},m_ground:null,m_groundAnchor1:new b2Vec2(),m_groundAnchor2:new b2Vec2(),m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_u1:new b2Vec2(),m_u2:new b2Vec2(),m_constant:null,m_ratio:null,m_maxLength1:null,m_maxLength2:null,m_pulleyMass:null,m_limitMass1:null,m_limitMass2:null,m_pulleyImpulse:null,m_limitImpulse1:null,m_limitImpulse2:null,m_limitPositionImpulse1:null,m_limitPositionImpulse2:null,m_limitState1:0,m_limitState2:0});b2PulleyJoint.b2_minPulleyLength=b2Settings.b2_lengthUnitsPerMeter;
			var b2PulleyJointDef=Class.create();Object.extend(b2PulleyJointDef.prototype,b2JointDef.prototype);Object.extend(b2PulleyJointDef.prototype,{initialize:function()
			{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.groundPoint1=new b2Vec2();this.groundPoint2=new b2Vec2();this.anchorPoint1=new b2Vec2();this.anchorPoint2=new b2Vec2();this.type=b2Joint.e_pulleyJoint;this.groundPoint1.Set(-1.0,1.0);this.groundPoint2.Set(1.0,1.0);this.anchorPoint1.Set(-1.0,0.0);this.anchorPoint2.Set(1.0,0.0);this.maxLength1=0.5*b2PulleyJoint.b2_minPulleyLength;this.maxLength2=0.5*b2PulleyJoint.b2_minPulleyLength;this.ratio=1.0;this.collideConnected=true;},groundPoint1:new b2Vec2(),groundPoint2:new b2Vec2(),anchorPoint1:new b2Vec2(),anchorPoint2:new b2Vec2(),maxLength1:null,maxLength2:null,ratio:null});
			var b2RevoluteJoint=Class.create();Object.extend(b2RevoluteJoint.prototype,b2Joint.prototype);Object.extend(b2RevoluteJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetJointAngle:function(){return this.m_body2.m_rotation-this.m_body1.m_rotation;},GetJointSpeed:function(){return this.m_body2.m_angularVelocity-this.m_body1.m_angularVelocity;},GetMotorTorque:function(invTimeStep){return invTimeStep*this.m_motorImpulse;},SetMotorSpeed:function(speed)
			{this.m_motorSpeed=speed;},SetMotorTorque:function(torque)
			{this.m_maxMotorTorque=torque;},GetReactionForce:function(invTimeStep)
			{var tVec=this.m_ptpImpulse.Copy();tVec.Multiply(invTimeStep);return tVec;},GetReactionTorque:function(invTimeStep)
			{return invTimeStep*this.m_limitImpulse;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.K=new b2Mat22();this.K1=new b2Mat22();this.K2=new b2Mat22();this.K3=new b2Mat22();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_ptpImpulse=new b2Vec2();this.m_ptpMass=new b2Mat22();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=def.anchorPoint.x-this.m_body1.m_position.x;tY=def.anchorPoint.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint.x-this.m_body2.m_position.x;tY=def.anchorPoint.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;this.m_intialAngle=this.m_body2.m_rotation-this.m_body1.m_rotation;this.m_ptpImpulse.Set(0.0,0.0);this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;this.m_limitPositionImpulse=0.0;this.m_lowerAngle=def.lowerAngle;this.m_upperAngle=def.upperAngle;this.m_maxMotorTorque=def.motorTorque;this.m_motorSpeed=def.motorSpeed;this.m_enableLimit=def.enableLimit;this.m_enableMotor=def.enableMotor;},K:new b2Mat22(),K1:new b2Mat22(),K2:new b2Mat22(),K3:new b2Mat22(),PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;this.K1.col1.x=invMass1+invMass2;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass1+invMass2;this.K2.col1.x=invI1*r1Y*r1Y;this.K2.col2.x=-invI1*r1X*r1Y;this.K2.col1.y=-invI1*r1X*r1Y;this.K2.col2.y=invI1*r1X*r1X;this.K3.col1.x=invI2*r2Y*r2Y;this.K3.col2.x=-invI2*r2X*r2Y;this.K3.col1.y=-invI2*r2X*r2Y;this.K3.col2.y=invI2*r2X*r2X;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Invert(this.m_ptpMass);this.m_motorMass=1.0/(invI1+invI2);if(this.m_enableMotor==false)
			{this.m_motorImpulse=0.0;}
			if(this.m_enableLimit)
			{var jointAngle=b2.m_rotation-b1.m_rotation-this.m_intialAngle;if(b2Math.b2Abs(this.m_upperAngle-this.m_lowerAngle)<2.0*b2Settings.b2_angularSlop)
			{this.m_limitState=b2Joint.e_equalLimits;}
			else if(jointAngle<=this.m_lowerAngle)
			{if(this.m_limitState!=b2Joint.e_atLowerLimit)
			{this.m_limitImpulse=0.0;}
			this.m_limitState=b2Joint.e_atLowerLimit;}
			else if(jointAngle>=this.m_upperAngle)
			{if(this.m_limitState!=b2Joint.e_atUpperLimit)
			{this.m_limitImpulse=0.0;}
			this.m_limitState=b2Joint.e_atUpperLimit;}
			else
			{this.m_limitState=b2Joint.e_inactiveLimit;this.m_limitImpulse=0.0;}}
			else
			{this.m_limitImpulse=0.0;}
			if(b2World.s_enableWarmStarting)
			{b1.m_linearVelocity.x-=invMass1*this.m_ptpImpulse.x;b1.m_linearVelocity.y-=invMass1*this.m_ptpImpulse.y;b1.m_angularVelocity-=invI1*((r1X*this.m_ptpImpulse.y-r1Y*this.m_ptpImpulse.x)+this.m_motorImpulse+this.m_limitImpulse);b2.m_linearVelocity.x+=invMass2*this.m_ptpImpulse.x;b2.m_linearVelocity.y+=invMass2*this.m_ptpImpulse.y;b2.m_angularVelocity+=invI2*((r2X*this.m_ptpImpulse.y-r2Y*this.m_ptpImpulse.x)+this.m_motorImpulse+this.m_limitImpulse);}
			else{this.m_ptpImpulse.SetZero();this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;}
			this.m_limitPositionImpulse=0.0;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var oldLimitImpulse;var ptpCdotX=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y)-b1.m_linearVelocity.x-(-b1.m_angularVelocity*r1Y);var ptpCdotY=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X)-b1.m_linearVelocity.y-(b1.m_angularVelocity*r1X);var ptpImpulseX=-(this.m_ptpMass.col1.x*ptpCdotX+this.m_ptpMass.col2.x*ptpCdotY);var ptpImpulseY=-(this.m_ptpMass.col1.y*ptpCdotX+this.m_ptpMass.col2.y*ptpCdotY);this.m_ptpImpulse.x+=ptpImpulseX;this.m_ptpImpulse.y+=ptpImpulseY;b1.m_linearVelocity.x-=b1.m_invMass*ptpImpulseX;b1.m_linearVelocity.y-=b1.m_invMass*ptpImpulseY;b1.m_angularVelocity-=b1.m_invI*(r1X*ptpImpulseY-r1Y*ptpImpulseX);b2.m_linearVelocity.x+=b2.m_invMass*ptpImpulseX;b2.m_linearVelocity.y+=b2.m_invMass*ptpImpulseY;b2.m_angularVelocity+=b2.m_invI*(r2X*ptpImpulseY-r2Y*ptpImpulseX);if(this.m_enableMotor&&this.m_limitState!=b2Joint.e_equalLimits)
			{var motorCdot=b2.m_angularVelocity-b1.m_angularVelocity-this.m_motorSpeed;var motorImpulse=-this.m_motorMass*motorCdot;var oldMotorImpulse=this.m_motorImpulse;this.m_motorImpulse=b2Math.b2Clamp(this.m_motorImpulse+motorImpulse,-step.dt*this.m_maxMotorTorque,step.dt*this.m_maxMotorTorque);motorImpulse=this.m_motorImpulse-oldMotorImpulse;b1.m_angularVelocity-=b1.m_invI*motorImpulse;b2.m_angularVelocity+=b2.m_invI*motorImpulse;}
			if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
			{var limitCdot=b2.m_angularVelocity-b1.m_angularVelocity;var limitImpulse=-this.m_motorMass*limitCdot;if(this.m_limitState==b2Joint.e_equalLimits)
			{this.m_limitImpulse+=limitImpulse;}
			else if(this.m_limitState==b2Joint.e_atLowerLimit)
			{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Max(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
			else if(this.m_limitState==b2Joint.e_atUpperLimit)
			{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Min(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
			b1.m_angularVelocity-=b1.m_invI*limitImpulse;b2.m_angularVelocity+=b2.m_invI*limitImpulse;}},SolvePositionConstraints:function(){var oldLimitImpulse;var limitC;var b1=this.m_body1;var b2=this.m_body2;var positionError=0.0;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var ptpCX=p2X-p1X;var ptpCY=p2Y-p1Y;positionError=Math.sqrt(ptpCX*ptpCX+ptpCY*ptpCY);var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;this.K1.col1.x=invMass1+invMass2;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass1+invMass2;this.K2.col1.x=invI1*r1Y*r1Y;this.K2.col2.x=-invI1*r1X*r1Y;this.K2.col1.y=-invI1*r1X*r1Y;this.K2.col2.y=invI1*r1X*r1X;this.K3.col1.x=invI2*r2Y*r2Y;this.K3.col2.x=-invI2*r2X*r2Y;this.K3.col1.y=-invI2*r2X*r2Y;this.K3.col2.y=invI2*r2X*r2X;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Solve(b2RevoluteJoint.tImpulse,-ptpCX,-ptpCY);var impulseX=b2RevoluteJoint.tImpulse.x;var impulseY=b2RevoluteJoint.tImpulse.y;b1.m_position.x-=b1.m_invMass*impulseX;b1.m_position.y-=b1.m_invMass*impulseY;b1.m_rotation-=b1.m_invI*(r1X*impulseY-r1Y*impulseX);b1.m_R.Set(b1.m_rotation);b2.m_position.x+=b2.m_invMass*impulseX;b2.m_position.y+=b2.m_invMass*impulseY;b2.m_rotation+=b2.m_invI*(r2X*impulseY-r2Y*impulseX);b2.m_R.Set(b2.m_rotation);var angularError=0.0;if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
			{var angle=b2.m_rotation-b1.m_rotation-this.m_intialAngle;var limitImpulse=0.0;if(this.m_limitState==b2Joint.e_equalLimits)
			{limitC=b2Math.b2Clamp(angle,-b2Settings.b2_maxAngularCorrection,b2Settings.b2_maxAngularCorrection);limitImpulse=-this.m_motorMass*limitC;angularError=b2Math.b2Abs(limitC);}
			else if(this.m_limitState==b2Joint.e_atLowerLimit)
			{limitC=angle-this.m_lowerAngle;angularError=b2Math.b2Max(0.0,-limitC);limitC=b2Math.b2Clamp(limitC+b2Settings.b2_angularSlop,-b2Settings.b2_maxAngularCorrection,0.0);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Max(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
			else if(this.m_limitState==b2Joint.e_atUpperLimit)
			{limitC=angle-this.m_upperAngle;angularError=b2Math.b2Max(0.0,limitC);limitC=b2Math.b2Clamp(limitC-b2Settings.b2_angularSlop,0.0,b2Settings.b2_maxAngularCorrection);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Min(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
			b1.m_rotation-=b1.m_invI*limitImpulse;b1.m_R.Set(b1.m_rotation);b2.m_rotation+=b2.m_invI*limitImpulse;b2.m_R.Set(b2.m_rotation);}
			return positionError<=b2Settings.b2_linearSlop&&angularError<=b2Settings.b2_angularSlop;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_ptpImpulse:new b2Vec2(),m_motorImpulse:null,m_limitImpulse:null,m_limitPositionImpulse:null,m_ptpMass:new b2Mat22(),m_motorMass:null,m_intialAngle:null,m_lowerAngle:null,m_upperAngle:null,m_maxMotorTorque:null,m_motorSpeed:null,m_enableLimit:null,m_enableMotor:null,m_limitState:0});b2RevoluteJoint.tImpulse=new b2Vec2();
			var b2RevoluteJointDef=Class.create();Object.extend(b2RevoluteJointDef.prototype,b2JointDef.prototype);Object.extend(b2RevoluteJointDef.prototype,{initialize:function()
			{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.type=b2Joint.e_revoluteJoint;this.anchorPoint=new b2Vec2(0.0,0.0);this.lowerAngle=0.0;this.upperAngle=0.0;this.motorTorque=0.0;this.motorSpeed=0.0;this.enableLimit=false;this.enableMotor=false;},anchorPoint:null,lowerAngle:null,upperAngle:null,motorTorque:null,motorSpeed:null,enableLimit:null,enableMotor:null});









			var delta = [ 0, 0 ];
			var stage = [ window.screenX, window.screenY, window.innerWidth, window.innerHeight ];
			getBrowserDimensions();

			var isRunning = false;
			var isMouseDown = false;

			var worldAABB;
			var world;
			var iterations = 1;
			var timeStep = 1 / 25; 

			var walls = [];
			var wall_thickness = 200;
			var wallsSetted = false;

			var mouseJoint;
			var mouse = { x: 0, y: 0 };

			var mouseOnClick = [];

			var elements = [];
			var bodies = [];
			var properties = [];

			var query, page = 0;

			var gWebSearch, gImageSearch;
			var imFeelingLuckyMode = false;
			var resultBodies = [];

			var gravity = { x: 0, y: 1 };





setTimeout(function(){

			grav();
			init();
			},1000);


			function init() {


				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				document.addEventListener( 'keyup', onDocumentKeyUp, false );


				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				document.addEventListener( 'touchend', onDocumentTouchEnd, false );

				window.addEventListener( 'deviceorientation', onWindowDeviceOrientation, false );

				// init box2d

				worldAABB = new b2AABB();
				worldAABB.minVertex.Set( - 200, - 200 );
				worldAABB.maxVertex.Set( window.innerWidth + 200, window.innerHeight + 200 );

				world = new b2World( worldAABB, new b2Vec2( 0, 0 ), true );

				// walls
				setWalls();

				// Get box2d elements

				elements = getElementsByClass("box2d");

				for ( var i = 0; i < elements.length; i ++ ) {

					properties[i] = getElementProperties( elements[i] );

				}

				for ( var i = 0; i < elements.length; i ++ ) {

					var element = elements[ i ];
					element.style.position = 'absolute';
					element.style.left = properties[i][0] + 'px';
					element.style.top = properties[i][1] + 'px';
					element.style.width = properties[i][2] + 'px';
					element.addEventListener( 'mousedown', onElementMouseDown, false );
					element.addEventListener( 'mouseup', onElementMouseUp, false );
					element.addEventListener( 'click', onElementClick, false );

					bodies[i] = createBox( world, properties[i][0] + (properties[i][2] >> 1), properties[i][1] + (properties[i][3] >> 1), properties[i][2] / 2, properties[i][3] / 2, false );

					// Clean position dependencies

					while ( element.offsetParent ) {

						element = element.offsetParent;
						element.style.position = 'static';

					}

				}

			}

			function run() {

				isRunning = true;
				setInterval( loop, 25 );

			}

			//

			function onDocumentMouseDown( event ) {

				isMouseDown = true;

			}

			function onDocumentMouseUp( event ) {

				isMouseDown = false;

			}

			function onDocumentMouseMove( event ) {

				if ( !isRunning ) run();

				mouse.x = event.clientX;
				mouse.y = event.clientY;

			}

			function onDocumentKeyUp( event ) {

				if ( event.keyCode == 13 ) search();

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length == 1 ) {

					if ( !isRunning ) {

						run();

					}

					mouse.x = event.touches[0].pageX;
					mouse.y = event.touches[0].pageY;
					isMouseDown = true;
				}
			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouse.x = event.touches[0].pageX;
					mouse.y = event.touches[0].pageY;

				}

			}

			function onDocumentTouchEnd( event ) {

				if ( event.touches.length == 0 ) {

					isMouseDown = false;
				}

			}
			function onWindowDeviceOrientation( event ) {

				// if mobile
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

					if ($(window).width() > $(window).height()){
						//landscape
					if ( event.beta ) {
		
							gravity.y = -1 * (Math.sin( event.gamma * Math.PI / 180 ));
							gravity.x = (event.beta * Math.PI / 180 );
		
						}
					
	
					}else{
						//portrait
						if ( event.beta ) {
		
							gravity.x = Math.sin( event.gamma * Math.PI / 180 );
							gravity.y = event.beta * Math.PI / 180 ;
		
						}
					}
				}else{
				
					if ( event.beta ) {
		
						gravity.x = Math.sin( event.gamma * Math.PI / 180 );
						gravity.y = ( Math.PI / 4 ) + event.beta * Math.PI / 180 ;
		
					}
				}
				

			}

			//

			function onElementMouseDown( event ) {

				event.preventDefault();

				mouseOnClick[0] = event.clientX;
				mouseOnClick[1] = event.clientY;

			}

			function onElementMouseUp( event ) {

				event.preventDefault();

			}

			function onElementClick( event ) {

				var range = 5;

				if ( mouseOnClick[0] > event.clientX + range || mouseOnClick[0] < event.clientX - range &&
				     mouseOnClick[1] > event.clientY + range || mouseOnClick[1] < event.clientY - range ) {

					event.preventDefault();

				}

				if ( event.target == document.getElementById( 'btnG' ) ) search();
				if ( event.target == document.getElementById( 'btnI' ) ) imFeelingLucky();
				if ( event.target == document.getElementById( 'q' ) ) document.getElementById('q').focus();

			}

			// API STUFF

			

			function loop() {

				if (getBrowserDimensions())
					setWalls();

				delta[0] += (0 - delta[0]) * .5;
				delta[1] += (0 - delta[1]) * .5;

				world.m_gravity.x = gravity.x * 350 + delta[0];
				world.m_gravity.y = gravity.y * 350 + delta[1];

				mouseDrag();
				world.Step(timeStep, iterations);

				for ( i = 0; i < elements.length; i++ ) {

					var body = bodies[i];
					var element = elements[i];

					element.style.left = (body.m_position0.x - (properties[i][2] >> 1)) + 'px';
					element.style.top = (body.m_position0.y - (properties[i][3] >> 1)) + 'px';

					var style = 'rotate(' + (body.m_rotation0 * 57.2957795) + 'deg)';

					element.style.transform = style;
					element.style.WebkitTransform = style + ' translateZ(0)'; // Force HW Acceleration
					element.style.MozTransform = style;
					element.style.OTransform = style;
					element.style.msTransform = style;
				}
			}


			// .. BOX2D UTILS

			function createBox(world, x, y, width, height, fixed, element) {

				if (typeof(fixed) == 'undefined')
					fixed = true;

				var boxSd = new b2BoxDef();

				if (!fixed)
					boxSd.density = 1.0;

				boxSd.extents.Set(width, height);

				var boxBd = new b2BodyDef();
				boxBd.AddShape(boxSd);
				boxBd.position.Set(x,y);
				boxBd.userData = {element: element};

				return world.CreateBody(boxBd)
			}

			function mouseDrag() {

				// mouse press
				if (isMouseDown && !mouseJoint) {

					var body = getBodyAtMouse();

					if (body) {

						var md = new b2MouseJointDef();
						md.body1 = world.m_groundBody;
						md.body2 = body;
						md.target.Set(mouse.x, mouse.y);
						md.maxForce = 30000.0 * body.m_mass;
						md.timeStep = timeStep;
						mouseJoint = world.CreateJoint(md);
						body.WakeUp();
					}
				}

				// mouse release
				if (!isMouseDown) {

					if (mouseJoint) {

						world.DestroyJoint(mouseJoint);
						mouseJoint = null;
					}
				}

				// mouse move
				if (mouseJoint) {

					var p2 = new b2Vec2(mouse.x, mouse.y);
					mouseJoint.SetTarget(p2);
				}
			}

			function getBodyAtMouse() {

				// Make a small box.
				var mousePVec = new b2Vec2();
				mousePVec.Set(mouse.x, mouse.y);

				var aabb = new b2AABB();
				aabb.minVertex.Set(mouse.x - 1, mouse.y - 1);
				aabb.maxVertex.Set(mouse.x + 1, mouse.y + 1);

				// Query the world for overlapping shapes.
				var k_maxCount = 10;
				var shapes = [];
				var count = world.Query(aabb, shapes, k_maxCount);
				var body = null;

				for ( var i = 0; i < count; i ++ ) {

					if (shapes[i].m_body.IsStatic() == false) {

						if ( shapes[i].TestPoint(mousePVec) ) {

							body = shapes[i].m_body;
							break;
						}
					}
				}

				return body;
			}

			function setWalls() {

				if (wallsSetted) {

					world.DestroyBody(walls[0]);
					world.DestroyBody(walls[1]);
					world.DestroyBody(walls[2]);
					world.DestroyBody(walls[3]);

					walls[0] = null; 
					walls[1] = null;
					walls[2] = null;
					walls[3] = null;
				}

				walls[0] = createBox(world, stage[2] / 2, - wall_thickness, stage[2], wall_thickness);
				walls[1] = createBox(world, stage[2] / 2, stage[3] + wall_thickness, stage[2], wall_thickness);
				walls[2] = createBox(world, - wall_thickness, stage[3] / 2, wall_thickness, stage[3]);
				walls[3] = createBox(world, stage[2] + wall_thickness, stage[3] / 2, wall_thickness, stage[3]);	

				wallsSetted = true;

			}

			// .. UTILS

			function getElementsByClass( searchClass ) {

				var classElements = [];
				var els = document.getElementsByTagName('*');
				var elsLen = els.length

				for (i = 0, j = 0; i < elsLen; i++) {

					var classes = els[i].className.split(' ');
					for (k = 0; k < classes.length; k++)
						if ( classes[k] == searchClass )
							classElements[j++] = els[i];
				}

				return classElements;
			}

			function getElementProperties( element ) {

				var x = 0;
				var y = 0;
				var width = element.offsetWidth;
				var height = element.offsetHeight;

				do {

					x += element.offsetLeft;
					y += element.offsetTop;

				} while ( element = element.offsetParent );

				return [ x, y, width, height ];
			}

			function getBrowserDimensions() {

				var changed = false;

				if ( stage[0] != window.screenX ) {

					delta[0] = (window.screenX - stage[0]) * 50;
					stage[0] = window.screenX;
					changed = true;
				}

				if ( stage[1] != window.screenY ) {

					delta[1] = (window.screenY - stage[1]) * 50;
					stage[1] = window.screenY;
					changed = true;
				}

				if ( stage[2] != window.innerWidth ) {

					stage[2] = window.innerWidth;
					changed = true;
				}

				if ( stage[3] != window.innerHeight ) {

					stage[3] = window.innerHeight;
					changed = true;
				}

				return changed;
			}
			
			
			function grav(){
			
			/////////////////////////////////////////
			////////////////////////////////////////
			// do stuff here so everything has gravity

//$("html").css("overflow", "hidden");
//$("body").css("overflow", "hidden");
	
	
$("img").each(function() {
	if($(this).children().length < 1) {
		$(this).addClass("box2d");
		$(this).css("zIndex", "99");
	    }
});	

$("div").each(function() {
	if($(this).children().length < 1) {
    	$(this).addClass("box2d");
    	$(this).css("position", "relative");
    	$(this).css("zIndex", "99");
    }
});	

$("span").each(function() {
	if($(this).children().length < 1) {
    	$(this).addClass("box2d");
    	$(this).css("position", "relative");
    	$(this).css("zIndex", "99");
    }
});	

$("a").each(function() {
	if($(this).children().length < 1) {
    	$(this).addClass("box2d");
    	$(this).css("position", "relative");
    	$(this).css("zIndex", "99");
    }
});	

$("textarea").each(function() {
	if($(this).children().length < 1) {
    	$(this).addClass("box2d");
    	$(this).css("position", "relative");
    	$(this).css("zIndex", "99");
    }
});	



			
			}
			
}			

/////////////////////april fools 4


/////////////////////april fools 7

if (aprilfools == 7) {

$("button.btn").text("Sorry pika...");

$("button.btn").delay(10000).hide(2500); 

}

/////////////////////april fools 7

///////////////april fools 8

if (aprilfools == 8) {

Styles.add(`.deadupdate {background:#eee;}`);


setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p><a href="/user/`+USER+`" rel="nofollow">/u/`+USER+`</a> <em>has joined this thread</em></p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},7000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>No really, <a href="/user/`+USER+`" rel="nofollow">/u/`+USER+`</a> <em>has joined this thread</em></p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},27000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Wait, <a href="/user/`+USER+`" rel="nofollow">/u/`+USER+`</a> is... <em>you?</em></p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},47000);

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Listen, <a href="/user/`+USER+`" rel="nofollow">/u/`+USER+`</a>. I am the join bot. I make the rules. Not you.</p><p>I'm talking to you and you only. No one can see me except you.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},67000);

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>I am the god of Live Counting. Do you dare challenge the word of your god, <a href="/user/`+USER+`" rel="nofollow">/u/`+USER+`</a>?</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},87000);


setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>The god of LC giveth, and the god of LC taketh away. This time, I taketh away.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
$("#new-update-form").hide(2500); 
			},107000);


setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Eh. I would get pretty lonely if no one could post. So I giveth again. </p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
$("#new-update-form").show(2500); 
			},127000);

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>I offer you a choice. Join me, and become a god of Live Counting. Or, betray me, and face my wrath.</p><p><button id="apriljoin">JOIN</button><button id="aprilbetray">BETRAY</button></p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
$( "#apriljoin" ).click(function() {
$( "#apriljoin" ).hide();
$( "#aprilbetray" ).hide();
$("html").prepend("<body2 id=abcd></body2>");
$('body').fadeOut(10000);
setTimeout(function(){
$('body').fadeIn(10000);
			},10000);

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Does anything feel different?</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},40000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Nothing is different. Not even you.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},60000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Well, this is underwhelming. </p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},80000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Wait. I hear something.</p><p>Did you hear that? Listen closely... it sounds like it's getting louder.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},100000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Oh god. It's right behind me.</p><p>RUN</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},120000);
setTimeout(function(){
$('body').hide(5000);
			},130000);
setTimeout(function(){
$('#abcd').prepend("<iframe class=embed-responsive-item id=lcgod type=text/html width=100% height=100% src=https://www.youtube.com/embed/oHg5SJYRHA0?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=oHg5SJYRHA0></iframe>");
			},140000);

});


$( "#aprilbetray" ).click(function() {
$( "#apriljoin" ).hide();
$( "#aprilbetray" ).hide();
$("html").prepend("<body3 id=efgh></body3>");
$('#efgh').css('background','black');
$('body').fadeOut(10000);
setTimeout(function(){
Styles.add(`.deadupdate {background:red!important;} #lc-body {transform: rotate(2deg);background: purple;font-size: 20px;} #lc-body li.liveupdate * {transition: none;color: yellow;font-family: Comic Sans MS;} div.content {background: blue;}#new-update-form .usertext .usertext-edit textarea {color: red;font-size: 20px;background: green;font-family: Comic Sans MS;}`);
$('body').fadeIn(10000);
			},10000);

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Welcome to LC Hell.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},40000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>This place is beautiful.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},60000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>I could do more. Or I could leave you with this disaster.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},80000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Yes, I can do many awful things. Like force you to use separators that aren't commas.</p><p>Wait. I have a better idea.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},100000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Okay.</p><p>Get ready.</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},120000);
setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Get it?</p><p>You expected something to happen. Nothing happened. Welp, I guess enjoy your stay in LC Hell. Maybe next time you'll choose to join me...</p></div><a href="/user/rideride" class="deadauthor" style="color: black;"> /u/join live counting</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},240000);

});


			},147000);

}

///////////////april fools 8


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
	'PaleRepresentative': '#8FBC8F',
	'andrewtheredditor': '#2bdb6c',
	'Whit4You': '#ff99ff',
	'Rajalaxo': '#485432',
	'NikinCZ': '#86D8CA',
	'SecretAsianMa': '#373267',
	'srmpass': '#ffeed6',
    };
	if (USER == 'VitaminB16') {
userColors.LC_Chats = 'white';
}
    // Possible colors for other users
    var colors = ['Blue', 'Coral', 'DodgerBlue', 'SpringGreen', 'YellowGreen', 'Green', 'OrangeRed', 'Red', 'GoldenRod', 'CadetBlue', 'SeaGreen', 'Chocolate', 'BlueViolet', 'Firebrick'];
    for (var i = colors.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
    }

/////////////april fools 1
if (aprilfools == 1) {
    var namecolors = ['untidy', 'hapless', 'greasy', 'learned', 'seemly', 'halting', 'envious', 'jobless', 'whole', 'high', 'thundering', 'dull', 'scintillating', 'violet', 'friendly', 'vivacious', 'flat', 'crazy', 'quarrelsome', 'worried', 'receptive', 'pleasant', 'secretive', 'comfortable', 'truculent', 'messy', 'obsolete', 'astonishing', 'fertile', 'slow', 'luxuriant', 'heartbreaking', 'foolish', 'torpid', 'sedate', 'famous', 'prickly', 'spiritual', 'normal', 'better', 'draconian', 'curious', 'rhetorical', 'periodic', 'chemical', 'quickest', 'cloistered', 'jumpy', 'last', 'obsequious', 'subsequent', 'plain', 'hateful', 'super', 'demonic', 'rural', 'automatic', 'damp', 'imminent', 'bloody', 'languid', 'cautious', 'old', 'hysterical', 'alcoholic', 'steady', 'open', 'alive', 'glib', 'unruly', 'two', 'bad', 'harmonious', 'long-term', 'many', 'unique', 'angry', 'noiseless', 'five', 'young', 'vagabond', 'standing', 'inquisitive', 'berserk', 'meaty', 'mountainous', 'funny', 'beautiful', 'tricky', 'obtainable', 'sore', 'enchanted', 'hollow', 'zealous', 'enthusiastic', 'straight', 'colorful', 'ill-informed', 'breakable', 'uninterested', 'grandiose', 'nifty', 'unhealthy', 'bored', 'impolite', 'disastrous', 'sad', 'billowy', 'neighborly', 'lazy', 'aquatic', 'lean', 'addicted', 'adhesive', 'eager', 'drunk', 'early', 'faint', 'rambunctious', 'exuberant', 'adventurous', 'nervous', 'needless', 'wandering', 'dysfunctional', 'weary', 'broken', 'daffy', 'loose', 'nutritious', 'shrill', 'ajar', 'jumbled', 'busy', 'honorable', 'accurate', 'wakeful', 'disturbed', 'infamous', 'groovy', 'ambiguous', 'humdrum', 'psychotic', 'tightfisted', 'abandoned', 'dependent', 'fantastic', 'overwrought', 'measly', 'verdant', 'tested', 'undesirable', 'smiling', 'dazzling', 'overrated', 'tense', 'invincible', 'true', 'well-to-do', 'common', 'quaint', 'level', 'impossible', 'lively', 'mammoth', 'sticky', 'pretty', 'earsplitting', 'abaft', 'far-flung', 'eatable', 'rare', 'venomous', 'ignorant', 'gaudy', 'dapper', 'jaded', 'puny', 'doubtful', 'reflective', 'unwritten', 'recondite', 'pumped', 'foregoing', 'purple', 'majestic', 'satisfying', 'upset', 'available', 'oceanic', 'nauseating', 'perpetual', 'habitual', 'oval', 'next', 'public', 'late', 'tearful', 'snotty', 'wrathful', 'uptight', 'greedy', 'ruthless', 'wiggly', 'amazing', 'hulking', 'grumpy', 'oafish', 'literate', 'square', 'nimble', 'neat', 'puffy', 'capricious', 'obese', 'aware', 'round', 'complex', 'bashful', 'gleaming', 'uttermost', 'remarkable', 'glossy', 'caring', 'symptomatic', 'spiky', 'ultra', 'pink', 'futuristic', 'gigantic', 'helpful', 'hushed', 'odd', 'illustrious', 'fresh', 'nappy', 'actually', 'warm', 'thinkable', 'acceptable', 'tan', 'quixotic', 'furry', 'clumsy', 'extra-large', 'depressed', 'hard', 'sloppy', 'great', 'tense', 'debonair', 'flaky', 'delirious', 'homely', 'exotic', 'healthy', 'abrupt', 'exciting', 'fortunate', 'four', 'tawdry', 'materialistic', 'silly', 'nice', 'closed', 'efficient', 'tiny', 'heady', 'confused', 'faithful', 'sweet', 'freezing', 'quiet', 'imaginary', 'moaning', 'easy', 'jittery', 'knowledgeable', 'garrulous', 'lackadaisical', 'resonant', 'entertaining', 'few', 'glistening', 'painful', 'didactic', 'apathetic', 'unbiased', 'ten', 'fair', 'wise', 'fumbling', 'unusual', 'screeching', 'dry', 'lovely', 'frightened', 'mixed', 'slimy', 'flippant', 'red', 'proud', 'complete', 'earthy', 'blue-eyed', 'grotesque', 'efficacious', 'upbeat', 'mature', 'burly', 'extra-small', 'regular', 'roomy', 'high-pitched', 'warlike', 'disagreeable', 'robust', 'craven', 'six', 'frail', 'guiltless', 'fast', 'violent', 'incompetent', 'frightening', 'peaceful', 'far', 'handsome', 'tremendous', 'blushing', 'cultured', 'parsimonious', 'nondescript', 'third', 'lacking', 'threatening', 'expensive', 'annoying', 'parched', 'careless', 'nonstop', 'energetic', 'noisy', 'spotty', 'idiotic', 'acoustic', 'succinct', 'stale', 'tough', 'ritzy', 'organic', 'delicious', 'coherent', 'aboard', 'wide-eyed', 'boiling', 'electric', 'skillful', 'irritating', 'woebegone', 'lewd', 'faded', 'tenuous', 'narrow', 'previous', 'white', 'responsible', 'uneven', 'paltry', 'sleepy', 'volatile', 'scrawny', 'overjoyed', 'wretched', 'afraid', 'gifted', 'numberless', 'tame', 'military', 'profuse', 'sordid', 'cuddly', 'supreme', 'left', 'omniscient', 'scared', 'thoughtful', 'picayune', 'highfalutin', 'ossified', 'three', 'trashy', 'grouchy', 'piquant', 'likeable', 'fierce', 'vulgar', 'disgusted', 'curvy', 'cooperative', 'courageous', 'ancient', 'powerful', 'tidy', 'shallow', 'vast', 'cut', 'melted', 'scary', 'well-groomed', 'tasty', 'polite', 'cheerful', 'festive', 'enormous', 'waggish', 'ceaseless', 'damaged', 'deranged', 'utter', 'jagged', 'imported', 'thirsty', 'little', 'daily', 'natural', 'unnatural', 'dead', 'material', 'voiceless', 'salty', 'ambitious', 'educated', 'crooked', 'past', 'cooing', 'woozy', 'mindless', 'coordinated', 'knowing', 'incredible', 'spurious', 'mushy', 'painstaking', 'rabid', 'one', 'scandalous', 'cold', 'itchy', 'abundant', 'hellish', 'shaky', 'absent', 'combative', 'political', 'zany', 'breezy', 'hesitant', 'unadvised', 'damaging', 'spotted', 'lively', 'wacky', 'distinct', 'zippy', 'tight', 'mean', 'descriptive', 'evasive', 'gabby', 'necessary', 'zonked', 'tranquil', 'sharp', 'eight', 'elated', 'juvenile', 'second', 'slim', 'unequaled', 'nippy', 'squalid', 'grubby', 'cumbersome', 'lyrical', 'labored', 'silent', 'temporary', 'private', 'kindhearted', 'impartial', 'fabulous', 'hot', 'graceful', 'romantic', 'weak', 'internal', 'shut', 'outrageous', 'broad', 'bawdy', 'pathetic', 'abiding', 'agreeable', 'living', 'bright', 'gaping', 'dreary', 'icy', 'productive', 'kaput', 'bustling', 'charming', 'useful', 'awesome', 'filthy', 'small', 'near', 'abounding', 'able', 'unsightly', 'sore', 'precious', 'gullible', 'well-off', 'intelligent', 'orange', 'mellow', 'green', 'cloudy', 'domineering', 'numerous', 'tedious', 'plucky', 'big', 'callous', 'mysterious', 'optimal', 'heavenly', 'teeny', 'real', 'low', 'thick', 'defective', 'befitting', 'ordinary', 'wooden', 'decisive', 'milky', 'chilly', 'tacit', 'incandescent', 'dashing', 'sneaky', 'womanly', 'ready', 'limping', 'average', 'abusive', 'superb', 'stingy', 'fearful', 'petite', 'acrid', 'chubby', 'sassy', 'willing', 'nonchalant', 'unarmed', 'empty', 'animated', 'petite', 'thin', 'juicy', 'ablaze', 'makeshift', 'terrible', 'full', 'husky', 'historical', 'sulky', 'clear', 'youthful', 'heavy', 'hallowed', 'whispering', 'black', 'pointless', 'abstracted', 'tangible', 'hungry', 'inexpensive', 'careful', 'motionless', 'defeated', 'defiant', 'wary', 'brainy', 'illegal', 'perfect', 'toothsome', 'phobic', 'puzzled', 'tender', 'savory', 'uppity', 'physical', 'naughty', 'acidic', 'gray', 'smooth', 'wasteful', 'flimsy', 'teeny-tiny', 'tangy', 'decorous', 'overt', 'sophisticated', 'amusing', 'solid', 'nebulous', 'endurable', 'dispensable', 'colossal', 'separate', 'stormy', 'nine', 'divergent', 'fluffy', 'malicious', 'large', 'flowery', 'hanging', 'yielding', 'general', 'amused', 'fascinated', 'righteous', 'secret', 'yummy', 'aback', 'bouncy', 'different', 'various', 'embarrassed', 'fancy', 'guarded', 'classy', 'marvelous', 'null', 'frequent', 'alike', 'guttural', 'fine', 'wanting', 'obscene', 'stimulating', 'glamorous', 'onerous', 'bright', 'sturdy', 'royal', 'superficial', 'loud', 'quirky', 'soggy', 'agonizing', 'dizzy', 'minor', 'noxious', 'dirty', 'unknown', 'swift', 'trite', 'whimsical', 'handy', 'kind', 'nostalgic', 'disgusting', 'exclusive', 'overconfident', 'absurd', 'ripe', 'cute', 'worthless', 'ratty', 'muddled', 'selfish', 'fluttering', 'half', 'truthful', 'harsh', 'jazzy', 'blue', 'madly', 'roasted', 'present', 'brief', 'rough', 'relieved', 'squealing', 'ugly', 'aboriginal', 'poor', 'ruddy', 'unused', 'fanatical', 'cruel', 'gainful', 'feeble', 'stupid', 'humorous', 'black-and-white', 'attractive', 'industrious', 'somber', 'old-fashioned', 'melodic', 'ragged', 'enchanting', 'special', 'alert', 'permissible', 'godly', 'unsuitable', 'capable', 'like', 'utopian', 'huge', 'ashamed', 'serious', 'fixed', 'even', 'elegant', 'strange', 'steadfast', 'quack', 'sudden', 'naive', 'sick', 'bizarre', 'crowded', 'future', 'nosy', 'grieving', 'reminiscent', 'legal', 'nasty', 'strong', 'uncovered', 'parallel', 'skinny', 'sable', 'spooky', 'pastoral', 'barbarous', 'quizzical', 'lowly', 'fallacious', 'lethal', 'vengeful', 'fearless', 'dear', 'magenta', 'belligerent', 'sweltering', 'abashed', 'cagey', 'deadpan', 'accessible', 'unaccountable', 'smart', 'lucky', 'male', 'longing', 'lavish', 'spicy', 'rigid', 'right', 'foamy', 'fat', 'imperfect', 'chief', 'gusty', 'useless', 'shaggy', 'dramatic', 'questionable', 'macabre', 'wet', 'curved', 'elastic', 'selective', 'rotten', 'adjoining', 'shivering', 'wild', 'soft', 'awful', 'handsomely', 'boring', 'interesting', 'spectacular', 'wide', 'simple', 'clammy', 'best', 'abortive', 'squeamish', 'creepy', 'silky', 'dusty', 'jolly', 'free', 'protective', 'clever', 'tiresome', 'crabby', 'steep', 'boorish', 'curly', 'panicky', 'stupendous', 'simplistic', 'tired', 'safe', 'wiry', 'childlike', 'medical', 'raspy', 'cynical', 'ethereal', 'vague', 'same', 'elfin', 'marked', 'excited', 'vigorous', 'homeless', 'poised', 'delightful', 'mere', 'magnificent', 'hospitable', 'unwieldy', 'cute', 'abhorrent', 'insidious', 'rainy', 'rude', 'wicked', 'chivalrous', 'helpless', 'joyous', 'light', 'obeisant', 'discreet', 'cool', 'psychedelic', 'anxious', 'voracious', 'calculating', 'economic', 'immense', 'knotty', 'macho', 'shiny', 'thankful', 'tasteful', 'icky', 'axiomatic', 'fuzzy', 'snobbish', 'annoyed', 'gorgeous', 'exultant', 'used', 'waiting', 'unkempt', 'evanescent', 'possessive', 'brave', 'rich', 'hypnotic', 'obnoxious', 'mute', 'understood', 'maddening', 'ludicrous', 'miscreant', 'moldy', 'rightful', 'absorbed', 'keen', 'massive', 'subdued', 'offbeat', 'drab', 'shy', 'bitter', 'talented', 'successful', 'premium', 'fragile', 'aggressive', 'watery', 'grey', 'cowardly', 'aloof', 'fretful', 'ad hoc', 'staking', 'miniature', 'flawless', 'gruesome', 'therapeutic', 'silent', 'splendid', 'cheap', 'deeply', 'good', 'nutty', 'wry', 'deep', 'thoughtless', 'diligent', 'plastic', 'disillusioned', 'vacuous', 'brash', 'troubled', 'lumpy', 'wistful', 'lying', 'married', 'typical', 'sour', 'instinctive', 'lame', 'adorable', 'opposite', 'unequal', 'murky', 'pricey', 'boundless', 'functional', 'brown', 'accidental', 'probable', 'deserted', 'ill', 'frantic', 'inconclusive', 'abnormal', 'second-hand', 'loving', 'happy', 'changeable', 'calm', 'synonymous', 'obedient', 'ubiquitous', 'scientific', 'ill-fated', 'giant', 'unbecoming', 'terrific', 'quick', 'slippery', 'dark', 'wealthy', 'cluttered', 'valuable', 'difficult', 'gamy', 'short', 'kindly', 'statuesque', 'mundane', 'rampant', 'outstanding', 'devilish', 'dynamic', 'loutish', 'bumpy', 'familiar', 'lonely', 'spiffy', 'panoramic', 'mighty', 'direful', 'equable', 'racial', 'grateful', 'flagrant', 'plausible', 'goofy', 'momentous', 'merciful', 'repulsive'];
    for (var i = namecolors.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var nametemp = namecolors[i];
        namecolors[i] = namecolors[j];
        namecolors[j] = nametemp;
    }
    var namecolors2 = ['nut', 'sofa', 'songs', 'leg', 'finger', 'offer', 'cannon', 'grip', 'place', 'squirrel', 'parcel', 'hammer', 'geese', 'wren', 'clover', 'discovery', 'mailbox', 'company', 'paper', 'flock', 'camp', 'sleep', 'sign', 'square', 'earthquake', 'wealth', 'attack', 'boat', 'play', 'gate', 'treatment', 'health', 'respect', 'cobweb', 'downtown', 'canvas', 'iron', 'eggnog', 'bat', 'yarn', 'underwear', 'lamp', 'discussion', 'stone', 'competition', 'grandmother', 'foot', 'calculator', 'face', 'stomach', 'stage', 'science', 'alarm', 'caption', 'stick', 'mom', 'servant', 'spark', 'giants', 'smile', 'cellar', 'scissors', 'snow', 'insect', 'jewel', 'doctor', 'milk', 'theory', 'bottle', 'cushion', 'form', 'afterthought', 'rabbits', 'houses', 'spoon', 'pig', 'creature', 'toes', 'muscle', 'wine', 'ship', 'condition', 'card', 'insurance', 'linen', 'jelly', 'wash', 'invention', 'error', 'need', 'wire', 'eye', 'potato', 'elbow', 'house', 'chalk', 'bag', 'oatmeal', 'crook', 'memory', 'actor', 'minute', 'sister', 'attraction', 'friends', 'feeling', 'worm', 'quill', 'seed', 'boot', 'cattle', 'meat', 'flesh', 'engine', 'car', 'line', 'afternoon', 'pancake', 'cream', 'playground', 'key', 'crack', 'horse', 'friend', 'death', 'ball', 'club', 'agreement', 'sack', 'chicken', 'meal', 'train', 'apparatus', 'flowers', 'grandfather', 'babies', 'view', 'rest', 'fang', 'fall', 'bubble', 'library', 'reaction', 'spade', 'ring', 'zinc', 'fowl', 'purpose', 'pear', 'crate', 'rock', 'ducks', 'ink', 'chance', 'taste', 'sea', 'cabbage', 'regret', 'table', 'cars', 'fish', 'rake', 'minister', 'wave', 'seashore', 'pigs', 'rainstorm', 'destruction', 'experience', 'rub', 'stew', 'carpenter', 'brass', 'sidewalk', 'plantation', 'swim', 'move', 'cracker', 'tongue', 'sponge', 'kitty', 'steam', 'top', 'holiday', 'effect', 'shirt', 'bushes', 'river', 'haircut', 'quiet', 'poison', 'toe', 'horses', 'pen', 'drain', 'credit', 'position', 'produce', 'lock', 'sink', 'mist', 'furniture', 'laugh', 'degree', 'profit', 'zephyr', 'orange', 'ray', 'sisters', 'heat', 'snakes', 'crowd', 'planes', 'laborer', 'dock', 'surprise', 'mask', 'book', 'jump', 'girls', 'fruit', 'copper', 'drawer', 'dress', 'match', 'transport', 'children', 'brother', 'oranges', 'leather', 'birth', 'trick', 'tooth', 'cub', 'ticket', 'stop', 'mouth', 'authority', 'army', 'pail', 'unit', 'grade', 'start', 'vein', 'pizzas', 'zoo', 'judge', 'fact', 'smoke', 'rifle', 'society', 'substance', 'scarf', 'shape', 'straw', 'action', 'stocking', 'swing', 'believe', 'receipt', 'relation', 'rhythm', 'things', 'hat', 'texture', 'crib', 'hydrant', 'rain', 'skate', 'step', 'neck', 'maid', 'jeans', 'road', 'badge', 'money', 'sticks', 'nation', 'comparison', 'waste', 'tendency', 'payment', 'stitch', 'spot', 'skirt', 'cook', 'mountain', 'cow', 'corn', 'blow', 'hate', 'ground', 'value', 'end', 'part', 'sound', 'twig', 'pot', 'clam', 'cloth', 'team', 'acoustics', 'loaf', 'point', 'grass', 'wing', 'branch', 'butter', 'page', 'giraffe', 'jellyfish', 'seat', 'eggs', 'jam', 'mine', 'belief', 'women', 'motion', 'beginner', 'quicksand', 'letter', 'distribution', 'drink', 'queen', 'thing', 'railway', 'sail', 'crown', 'lettuce', 'plane', 'kettle', 'snake', 'donkey', 'soap', 'advertisement', 'books', 'uncle', 'shake', 'head', 'battle', 'sweater', 'soup', 'appliance', 'back', 'pipe', 'fuel', 'toad', 'shoe', 'bath', 'visitor', 'art', 'wax', 'plot', 'tomatoes', 'crayon', 'tank', 'weather', 'soda', 'event', 'guitar', 'slope', 'pencil', 'breath', 'detail', 'birds', 'hook', 'control', 'toys', 'price', 'voice', 'growth', 'interest', 'recess', 'way', 'run', 'cart', 'nerve', 'brick', 'space', 'suit', 'cave', 'aftermath', 'friction', 'anger', 'field', 'committee', 'fire', 'volleyball', 'noise', 'ladybug', 'fear', 'hill', 'rice', 'bead', 'plate', 'toothbrush', 'cherries', 'throat', 'aunt', 'territory', 'system', 'low', 'rat', 'daughter', 'jar', 'cactus', 'town', 'desk', 'pets', 'cent', 'cause', 'sort', 'sheep', 'stretch', 'rod', 'legs', 'snail', 'metal', 'self', 'yoke', 'grape', 'cough', 'bucket', 'voyage', 'jail', 'verse', 'celery', 'yard', 'dolls', 'bulb', 'curve', 'circle', 'wool', 'bite', 'coal', 'current', 'airplane', 'act', 'turn', 'representative', 'mind', 'turkey', 'sun', 'range', 'rose', 'design', 'bed', 'temper', 'flag', 'toy', 'smell', 'men', 'arithmetic', 'expert', 'liquid', 'idea', 'talk', 'bomb', 'pickle', 'earth', 'number', 'structure', 'pollution', 'nose', 'cemetery', 'ghost', 'base', 'impulse', 'pie', 'calendar', 'guide', 'chin', 'salt', 'exchange', 'driving', 'oil', 'hot', 'dad', 'market', 'reward', 'punishment', 'blade', 'fairies', 'steel', 'governor', 'year', 'front', 'coach', 'spring', 'spy', 'flower', 'drop', 'record', 'vacation', 'secretary', 'week', 'sky', 'wood', 'nest', 'rail', 'button', 'duck', 'debt', 'wrench', 'language', 'roof', 'wheel', 'trains', 'pies', 'son', 'crime', 'riddle', 'tree', 'business', 'desire', 'pin', 'toothpaste', 'loss', 'cover', 'achiever', 'time', 'chickens', 'beds', 'tent', 'girl', 'pet', 'use', 'frog', 'cast', 'porter', 'egg', 'trip', 'door', 'thrill', 'rabbit', 'school', 'dinosaurs', 'flame', 'letters', 'writing', 'wish', 'scent', 'glass', 'writer', 'quince', 'zebra', 'tramp', 'twist', 'teaching', 'pocket', 'arch', 'monkey', 'lunchroom', 'picture', 'window', 'collar', 'reading', 'cap', 'humor', 'direction', 'person', 'box', 'cheese', 'umbrella', 'thought', 'walk', 'education', 'root', 'silver', 'addition', 'basin', 'office', 'plough', 'protest', 'shop', 'ocean', 'song', 'balance', 'lunch', 'night', 'island', 'scarecrow', 'amount', 'whip', 'street', 'creator', 'mark', 'bear', 'mass', 'angle', 'flavor', 'sleet', 'church', 'border', 'notebook', 'hands', 'fly', 'existence', 'moon', 'screw', 'edge', 'hope', 'floor', 'dog', 'request', 'vest', 'hair', 'bit', 'powder', 'vegetable', 'blood', 'name', 'fireman', 'marble', 'bee', 'watch', 'partner', 'snails', 'vase', 'religion', 'development', 'shelf', 'shock', 'order', 'dust', 'hobbies', 'lip', 'pest', 'prose', 'quarter', 'vessel', 'spiders', 'wound', 'bridge', 'tin', 'berry', 'question', 'kick', 'month', 'cup', 'building', 'honey', 'camera', 'country', 'class', 'stranger', 'dirt', 'knowledge', 'mice', 'tax', 'teeth', 'harbor', 'station', 'truck', 'pull', 'rate', 'dogs', 'story', 'stove', 'day', 'north', 'wind', 'oven', 'limit', 'carriage', 'word', 'arm', 'title', 'trouble', 'behavior', 'middle', 'star', 'dinner', 'change', 'bike', 'baseball', 'chess', 'coat', 'war', 'can', 'lumber', 'van', 'work', 'basketball', 'care', 'smash', 'trucks', 'trees', 'bird', 'channel', 'show', 'meeting', 'string', 'locket', 'water', 'basket', 'ear', 'horn', 'quilt', 'store', 'pump', 'fork', 'shame', 'scale', 'plastic', 'level', 'kiss', 'tail', 'cats', 'observation', 'apparel', 'plant', 'board', 'home', 'activity', 'cake', 'gun', 'cat', 'finger', 'side', 'wilderness', 'doll', 'baby', 'power', 'cows', 'increase', 'sock', 'juice', 'statement', 'plants', 'volcano', 'look', 'support', 'expansion', 'flight', 'bedroom', 'mint', 'burst', 'mitten', 'popcorn', 'hospital', 'shade', 'cakes', 'woman', 'color', 'airport', 'adjustment', 'weight', 'icicle', 'argument', 'sneeze', 'history', 'hose', 'cable', 'eyes', 'peace', 'tub', 'selection', 'scene', 'stamp', 'glove', 'route', 'group', 'farm', 'silk', 'winter', 'reason', 'fog', 'example', 'fold', 'tiger', 'quiver', 'government', 'knee', 'brake', 'hall', 'ice', 'animal', 'grain', 'measure', 'boundary', 'mother', 'force', 'instrument', 'decision', 'hand', 'party', 'trade', 'thread', 'size', 'push', 'quartz', 'sand', 'zipper', 'trousers', 'connection', 'trail', 'pan', 'bikes', 'harmony', 'machine', 'sense', 'stream', 'needle', 'birthday', 'man', 'suggestion', 'industry', 'hole', 'stem', 'roll', 'ants', 'lace', 'join', 'magic', 'bone', 'hour', 'love', 'rule', 'curtain', 'summer', 'room', 'touch', 'sheet', 'knot', 'waves', 'coil', 'cherry', 'income', 'note', 'advice', 'bait', 'dime', 'kittens', 'account', 'bell', 'thunder', 'wall', 'wrist', 'pleasure', 'knife', 'tray', 'food', 'deer', 'yam', 'distance', 'property', 'frogs', 'division', 'sugar', 'veil', 'digestion', 'boy', 'amusement', 'frame', 'slave', 'coast', 'approval', 'bells', 'rings', 'skin', 'shoes', 'lake', 'air', 'slip', 'test', 'beef', 'land', 'crow', 'robin', 'throne', 'gold', 'whistle', 'morning', 'yak', 'thumb', 'passenger'];
    for (var i = namecolors2.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var nametemp2 = namecolors2[i];
        namecolors2[i] = namecolors2[j];
        namecolors2[j] = nametemp2;
    }
}

/////////////april fools 1

	function aprfoo(str){
        var i = 0;
        var l = str.length;
        var start = 0;
        var end = l - 1;
        t = str.replace("0", "7").replace("1","7").replace("2","7").replace("3","7").replace("4","7").replace("5","7").replace("6","7").replace("8","7").replace("9","7");
        return t;
    }
	
function chu_inc1(){
    master_s = ["7️⃣", "🍒", "💎","🍉","🍇","🍊","🍌"];
    index = Math.floor(Math.random()*7)
    return master_s[index];
    }
	
    function chu_inc(){
    master_s = "🐶🌸🌺🌼🐹🕊🍰🍎🌈📘🎵🏅🏆9⃣🔆😎🐬❤ ⚽ 😍 ✅🎖🐇🍏🍉😇💋🙊🍓🥇💔🦋⭐ ❤ 💯💤🌟📢🎤💾⬅ 💙💚💜™ ️";
    index = Math.floor(Math.random()*44)+1
    chu = master_s.substring(index*2,index*2+2);
    return master_s.substring(index*2,index*2+2);
    }

 function chu_inc22(){
    master_s = "🐶🌸🌺🌼🐹🕊🍰🍎🌈📘🎵🏅🏆9⃣🔆😎🐬❤ ⚽ 😍 ✅🎖🐇🍏🍉😇💋🙊🍓🥇💔🦋⭐ ❤ ";
    index = Math.floor(Math.random()*33)+1
    chu = master_s.substring(index*2,index*2+2);
    return master_s.substring(index*2,index*2+2);
    }
	
	function rng(){
        count = Math.floor(Math.random()*10);
        return "";
    }

	function rng2(){
        count2 = Math.floor(Math.random()*20);
        return "";
    }

    function reverser(index){
        if(count != 0){
            if (index == 0){
                return s.charAt(index);
            } else{
                return s.charAt(index);
            }
        } else{
            if (index == 0){
                return s.charAt(6-index);
            } else{
                return s.charAt(6-index);
            }
        }
    }
	function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
	
    // index of next color to assign from colors array
    var currentColor = 0;


/////////////april fools 1
if (aprilfools == 1) {
    var currentNameColor = 0;
    var ranName = {
'lol': 'lol',
};
    var currentNameColor2 = 0;
    var ranName2 = {
'lol': 'lol',
};
}
/////////////april fools 1

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
 
	

	    if (IgnoreEnabled == 'yep lol') {
var ignoretest = document.getElementById("ignorebox2").innerHTML;

if (ignoretest.includes(data.author)) {
var entirepost = data.body_elem.html();
var entireposttext = data.body_elem.text();
var count1testlol = entireposttext.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
entirepost = entirepost.replace(count1testlol,`<span id="counttext" style="font-size: 14px;">`+count1testlol+` ​</span>`);
entirepost = entirepost.replace(`p>`, `span>`);
data.body_elem.html(`<span class="ignoredpost" style="font-size: 0px;">`+entirepost+`</span>`);
} 
}//IgnoreEnabled ending

	    
        // Set username colour
        if (!userColors.hasOwnProperty(data.author)) {
            userColors[data.author] = colors[currentColor];
            currentColor++;
            if (currentColor == colors.length) {
                currentColor = 0;
            }
        }
        data.author_elem.css('color', userColors[data.author]);


/////////////april fools 1
if (aprilfools == 1) {
        if (!ranName.hasOwnProperty(data.author)) {
            ranName[data.author] = namecolors[currentNameColor];
            currentNameColor++;
            if (currentNameColor == namecolors.length) {
                currentNameColor = 0;
            }
        }
        if (!ranName2.hasOwnProperty(data.author)) {
            ranName2[data.author] = namecolors2[currentNameColor2];
            currentNameColor2++;
            if (currentNameColor2 == namecolors2.length) {
                currentNameColor2 = 0;
            }
        }

        data.author_elem.html('/u/the_' + ranName[data.author] + '_' + ranName2[data.author]);
}
/////////////april fools 1

/////////////////////april fools 6

if (aprilfools == 6) {
var entirepost = data.body_elem.text();
entirepost = entirepost.replace(/a/gi, '⠁');
entirepost = entirepost.replace(/b/gi, '⠃');
entirepost = entirepost.replace(/c/gi, '⠉');
entirepost = entirepost.replace(/d/gi, '⠙');
entirepost = entirepost.replace(/e/gi, '⠑');
entirepost = entirepost.replace(/f/gi, '⠋');
entirepost = entirepost.replace(/g/gi, '⠛');
entirepost = entirepost.replace(/h/gi, '⠓');
entirepost = entirepost.replace(/i/gi, '⠊');
entirepost = entirepost.replace(/j/gi, '⠚');
entirepost = entirepost.replace(/k/gi, '⠅');
entirepost = entirepost.replace(/l/gi, '⠇');
entirepost = entirepost.replace(/m/gi, '⠍');
entirepost = entirepost.replace(/n/gi, '⠝');
entirepost = entirepost.replace(/o/gi, '⠕');
entirepost = entirepost.replace(/p/gi, '⠏');
entirepost = entirepost.replace(/q/gi, '⠟');
entirepost = entirepost.replace(/r/gi, '⠗');
entirepost = entirepost.replace(/s/gi, '⠎');
entirepost = entirepost.replace(/t/gi, '⠞');
entirepost = entirepost.replace(/u/gi, '⠥');
entirepost = entirepost.replace(/v/gi, '⠧');
entirepost = entirepost.replace(/w/gi, '⠺');
entirepost = entirepost.replace(/x/gi, '⠭');
entirepost = entirepost.replace(/y/gi, '⠽');
entirepost = entirepost.replace(/z/gi, '⠵');
entirepost = entirepost.replace('<⠏>', '<p>');
entirepost = entirepost.replace('</⠏>', '</p>');


data.body_elem.text(entirepost);

}

/////////////////////april fools 6

if(window.location.href.indexOf("110t4ltqqzi35") > -1) { 
var lcchats = data.href_elem.attr('href');
lcchats = lcchats.trim().replace('/u/', '');
data.href_elem.css('color', userColors[lcchats]).css('fontStyle','initial').css('fontSize','13px');
if (lcchats == 'MaybeNotWrong' || lcchats == 'co3_carbonate' || lcchats == 'rschaosid' || lcchats == 'piyushsharma301' || lcchats == 'rideride' || lcchats == 'LeinadSpoon' || lcchats == 'artbn') {
            data.href_elem.css('font-weight', 'bold');
        }
}
    });
if(window.location.href.indexOf("110t4ltqqzi35") > -1) { 
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
    var $checkbox = Options.addCheckbox({
        label: 'CLEAR PAST MESSAGES (REDUCES LAG)',
        "default": true,
        help: 'Frequently clears past messages from the page, which drastically negates lag and reduces the need to refresh constantly.',
        onchange: function () {
            enabled = this.prop('checked');
        }
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
        options: ['Normal', 'Minimal', 'Super Minimal'],
        help: 'Changes the display interface of the page to your preference.',
        onchange: function () {
            var display = this.val();
            $returnBtn.css('display', (display == 'Normal' ? 'none' : 'block'));
            Elements.$body.attr('data-DisplayMode', display);
        }
    });
/////////////////APRIL FOOLS 5
if (aprilfools == 5) {
    Elements.$body.attr('data-DisplayMode', 'Super Minimal');
$returnBtn.css('display', 'block');
}
//////////////// APRIL FOOLS 5
    // Styles
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Minimal'] #header,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form .bottom-area,\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] div.content {\n\t\tmax-width: " + Math.max(450, $('#new-update-form textarea').outerWidth()) + "px;\n\t}\n\n\t");
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Super Minimal'] #header,\n\t#lc-body[data-DisplayMode='Super Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Super Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Super Minimal'] #new-update-form .bottom-area,\n\t#lc-body[data-DisplayMode='Super Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Super Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Super Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Super Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Super Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Super Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Super Minimal'] div.content {max-width:81px; padding:0;}   #lc-body[data-DisplayMode='Super Minimal'] div.content #new-update-form .usertext .usertext-edit textarea {height: 12px;width: 51px !important; font-size:6px;} #lc-body[data-DisplayMode='Super Minimal'] #liveupdate-header  {display: none;} #lc-body[data-DisplayMode='Super Minimal'] #river {font-size: 6px;width: 28px;margin-left: -33px;margin-top: 1px;} #lc-body[data-DisplayMode='Super Minimal'] li.liveupdate * {font-size: 6px;} #lc-body[data-DisplayMode='Super Minimal'] .liveupdate-listing li.separator time {font-size: 6px;} #lc-body[data-DisplayMode='Super Minimal'] .status {font-size: 6px;} #lc-body[data-DisplayMode='Super Minimal'] {font-size: 6px!important;} #lc-body[data-DisplayMode='Super Minimal'] button, html input[type='button']  {padding: 0;font-size: 6px;}");

////////////////////APRIL FOOLS 5
//    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body #header,\n\t#lc-body #liveupdate-statusbar,\n\t#lc-body .markdownEditor-wrapper,\n\t#lc-body #new-update-form .bottom-area,\n\t#lc-body li.liveupdate time.live-timestamp,\n\t#lc-body #liveupdate-options, \n\t#lc-body aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body #liveupdate-header,\n\t#lc-body #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body div.content {max-width:81px; padding:0;}   #lc-body div.content #new-update-form .usertext .usertext-edit textarea {height: 12px;width: 51px !important; font-size:6px;} #lc-body #liveupdate-header  {display: none;} #lc-body #river {font-size: 6px;width: 28px;margin-left: -33px;margin-top: 1px;} #lc-body li.liveupdate * {font-size: 6px;} #lc-body .liveupdate-listing li.separator time {font-size: 6px;} #lc-body .status {font-size: 6px;} #lc-body {font-size: 6px!important;} #lc-body button, html input[type='button']  {padding: 0;font-size: 6px;}");
////////////////////APRIL FOOLS 5/ TODO: ADD A RETURN TO NORMAL BUTTON
//    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body #header,\n\t#lc-body #liveupdate-statusbar,\n\t#lc-body .markdownEditor-wrapper,\n\t#lc-body #new-update-form .bottom-area,\n\t#lc-body li.liveupdate time.live-timestamp,\n\t#lc-body #liveupdate-options, \n\t#lc-body aside.sidebar {\n\t\tdisplay: initial;\n\t}\n\n\t#lc-body #liveupdate-header,\n\t#lc-body #new-update-form {\n\t\tmargin-left: initial;\n\t}\n\n\t#lc-body li.liveupdate ul.buttonrow {\n\t\tmargin: initial !important;\n\t}\n\n\t#lc-body div.content {max-width:initial; padding:initial;}   #lc-body div.content #new-update-form .usertext .usertext-edit textarea {height: initial;width: initial !important; font-size:initial;} #lc-body #liveupdate-header  {display: initial;} #lc-body #river {font-size: initial;width: initial;margin-left: initial;margin-top: initial;} #lc-body li.liveupdate * {font-size: initial;} #lc-body .liveupdate-listing li.separator time {font-size: initial;} #lc-body .status {font-size: initial;} #lc-body {font-size: initial!important;} #lc-body button, html input[type='button']  {padding: initial;font-size: initial;}");

    Styles.add(`@keyframes mymove {0% {font-size: 13px;transform:rotate(0deg);}50% {font-size: 78px;transform:rotate(180deg);}100% {font-size: 13px;transform:rotate(360deg);}}`);
    Styles.add(`@keyframes mymove2 {0% {font-size: 13px;transform:rotate(0deg);opacity:1;}50% {font-size: 78px;transform:rotate(180deg);opacity:0;}100% {font-size: 13px;transform:rotate(360deg);opacity:1;}}`);

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
            if (ghostEnabled) {
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
    observer.observe(Elements.$submitError.get(0), {
        // observe for change in 'style' attribute value
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['style']
    });
    // When new message is loaded and is by this user, check if we can delete the corresponding 
    // preview message.
    // If it is by another user, push all the preview messages to the front (in the right order), 
    // so that they seem to always be on top.
    // (Only if preview messages are enabled)
    Update.loadedNew(function (data) {
        if (!enabled || !ghostEnabled)
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
        if (e.ctrlKey) {
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
        SpecialUsernamesEnabled1 = 'yep lol';
        } else {
        SpecialUsernamesEnabled1 = 'nope lol';
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
        SpecialUsernamesEnabled2 = 'yep lol';
        } else {
        SpecialUsernamesEnabled2 = 'nope lol';
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
        SpecialUsernamesEnabled3 = 'yep lol';
        } else {
        SpecialUsernamesEnabled3 = 'nope lol';
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
        SpecialUsernamesEnabled4 = 'yep lol';
        } else {
        SpecialUsernamesEnabled4 = 'nope lol';
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
        SpecialUsernamesEnabled5 = 'yep lol';
        } else {
        SpecialUsernamesEnabled5 = 'nope lol';
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
        SpecialUsernamesEnabled6 = 'yep lol';
        } else {
        SpecialUsernamesEnabled6 = 'nope lol';
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
        TeamBarsEnabled = 'yep lol';
        } else {
        TeamBarsEnabled = 'nope lol';
        }

//////////////////////////////////TEAM COMMAS
if(window.location.href.indexOf("ta535s1hq2je") > -1) {
if (TeamBarsEnabled == 'yep lol') {
var hmmyy;
var checky;
var checky2;
$.ajax({
        method: 'GET',
        dataType: 'text',
        cache: false,
        url: 'https://raw.githubusercontent.com/MaybeNotWrong/lc-sep/master/data.txt',
        success: function(data) {
//checky = `<div id="commacount"></div><div id="noncommacount"></div>`;
hmmyy = data;
checky2 = data;
checky2 = checky2.replace(/null/g, `""`);
checky2 = checky2.replace(`{"hoc": [`, ``);
checky2 = checky2.replace(/{"author": "/g, ``);
checky2 = checky2.replace(/", "counts": /g, ``);
checky2 = checky2.replace(/{"author": /g, ``);
checky2 = checky2.replace(/, "counts": /g, ``);
checky2 = checky2.replace(/}, /g, ``);
checky2 = checky2.replace(`}]}`, ``);
checky2 = checky2.replace(`]}`, ``);
checky2 = checky2.replace(/[A-Za-z]/g, ``);
checky2 = checky2.replace(/[-]/g, ``);
checky2 = checky2.replace(/[_]/g, ``);
checky2 = checky2.replace(/[0-9]+/g, '');

if (checky2.length > 0) {
alert('Something has gone wrong in the verification of the data. Please PM /u/rideride. To stop showing this message, disable the option for now until it is fixed');
} else {
// For this you need to add another } before the error

//$(`<div id=loadtest></div><table id="dailyhoctable"><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table>`).insertBefore("#liveupdate-description");
$(`<div id=loadtest></div>`).insertBefore("#liveupdate-resources .md");
	
hmmyy = hmmyy.replace(/null/g, `""`);
hmmyy = hmmyy.replace(`{"hoc": [`, `<div id=dailyenabler>Daily Hall of Counters [+]</div><table id="dailyhoctable"><tr id="tablenames"><td>#</td><td>User</td><td>Counts</td></tr>`);
hmmyy = hmmyy.replace(/{"author": "/g, `<tr><td class="numba"></td><td><a class="authoro">/u/`);
hmmyy = hmmyy.replace(/", "counts": /g, `</a></td><td>`);
hmmyy = hmmyy.replace(/}, /g, `</td></tr>`);
hmmyy = hmmyy.replace(`}]}`, `</td></tr></table>`);
hmmyy = hmmyy.replace(`<tr><td class="numba"></td><td><a class="authoro">/u/`+USER, `<tr style="font-weight:bold;"><td class="numba"></td><td><a class="authoro">/u/`+USER);
document.getElementById('loadtest').innerHTML = hmmyy;


 $("#dailyhoctable tbody tr:nth-child(2) .numba").css({
'background': 'gold',
'color': 'black'
              });
 $("#dailyhoctable tbody tr:nth-child(3) .numba").css({
'background': 'silver',
'color': 'black'
              });
 $("#dailyhoctable tbody tr:nth-child(4) .numba").css({
'background': '#cd7f32',
'color': 'black'
              });

//$("#loadtest").css('display','none');
 $("#dailyhoctable").css({
//'position': 'absolute',
'border': '1px solid black',
'width': '100%',
'text-align': 'center'
              });
 $("#dailyhoctable tr td").css({
'border': '1px solid black'
              });
 $("#loadtest").css({
'overflow': 'hidden',
'height': dailysizereal,
'font-size': '1em'
              });
 $("#dailyenabler").css({
'cursor': 'pointer',
'color': '#000',
'font-size': '14px',
'font-weight': 'bold',
'margin-bottom': '3px'
              });
 $("#tablenames").css({
'color': '#000',
'font-size': '14px',
'font-weight': 'bold'
              });
if (dailysize == 0) {
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [+]";
} else {
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [-]";
}
                $("#dailyenabler").on('click', function () {
if (dailysize == 0) {
dailysize++;
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [-]";
dailysizereal = '100%';
 $("#loadtest").css({
'height': dailysizereal
              });
} else {
dailysize--;
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [+]";
dailysizereal = '90px';
 $("#loadtest").css({
'height': dailysizereal
              });
}
                });
$(".authoro").each(function() {
  $(this).attr("href", "https://reddit.com" + $(this).text());
});
$(".numba").each(function() {
  $(this).text(tablenumba);
tablenumba++;
});

        }},   //////this is where you put the checky bracket
        error: function(data) {
            alert('Error ' +data.status+ ' while loading Live Counting Extension: ' +data.statusText+ '\n\nPlease refresh to try again.');
        }
    });
setInterval(function(){ 
var hmmyy;
var checky;
var checky2;
$.ajax({
        method: 'GET',
        dataType: 'text',
        cache: false,
        url: 'https://raw.githubusercontent.com/MaybeNotWrong/lc-sep/master/data.txt',
        success: function(data) {
hmmyy = data;
checky2 = data;
checky2 = checky2.replace(/null/g, `""`);
checky2 = checky2.replace(`{"hoc": [`, ``);
checky2 = checky2.replace(/{"author": "/g, ``);
checky2 = checky2.replace(/", "counts": /g, ``);
checky2 = checky2.replace(/{"author": /g, ``);
checky2 = checky2.replace(/, "counts": /g, ``);
checky2 = checky2.replace(/}, /g, ``);
checky2 = checky2.replace(`}]}`, ``);
checky2 = checky2.replace(`]}`, ``);
checky2 = checky2.replace(/[A-Za-z]/g, ``);
checky2 = checky2.replace(/[-]/g, ``);
checky2 = checky2.replace(/[_]/g, ``);
checky2 = checky2.replace(/[0-9]+/g, '');

if (checky2.length > 0) {
alert('Something has gone wrong in the verification of the data. Please PM /u/rideride. To stop showing this message, disable the option for now until it is fixed');
} else {
// For this you need to add another } before the error

//$(`<div id=loadtest></div><table id="dailyhoctable"><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table>`).insertBefore("#liveupdate-description");

hmmyy = hmmyy.replace(/null/g, `""`);
hmmyy = hmmyy.replace(`{"hoc": [`, `<div id=dailyenabler>Daily Hall of Counters [+]</div><table id="dailyhoctable"><tr id="tablenames"><td>#</td><td>User</td><td>Counts</td></tr>`);
hmmyy = hmmyy.replace(/{"author": "/g, `<tr><td class="numba"></td><td><a class="authoro">/u/`);
hmmyy = hmmyy.replace(/", "counts": /g, `</a></td><td>`);
hmmyy = hmmyy.replace(/}, /g, `</td></tr>`);
hmmyy = hmmyy.replace(`}]}`, `</td></tr></table>`);
hmmyy = hmmyy.replace(`<tr><td class="numba"></td><td><a class="authoro">/u/`+USER, `<tr style="font-weight:bold;"><td class="numba"></td><td><a class="authoro">/u/`+USER);
document.getElementById('loadtest').innerHTML = hmmyy;
 $("#dailyhoctable tbody tr:nth-child(2) .numba").css({
'background': 'gold',
'color': 'black'
              });
 $("#dailyhoctable tbody tr:nth-child(3) .numba").css({
'background': 'silver',
'color': 'black'
              });
 $("#dailyhoctable tbody tr:nth-child(4) .numba").css({
'background': '#cd7f32',
'color': 'black'
              });

//$("#loadtest").css('display','none');
 $("#dailyhoctable").css({
//'position': 'absolute',
'border': '1px solid black',
'width': '100%',
'text-align': 'center'
              });
 $("#dailyhoctable tr td").css({
'border': '1px solid black'
              });
 $("#loadtest").css({
'overflow': 'hidden',
'height': dailysizereal,
'font-size': '1em'
              });
 $("#dailyenabler").css({
'cursor': 'pointer',
'color': '#000',
'font-size': '14px',
'font-weight': 'bold',
'margin-bottom': '3px'
              });
 $("#tablenames").css({
'color': '#000',
'font-size': '14px',
'font-weight': 'bold'
              });
if (dailysize == 0) {
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [+]";
} else {
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [-]";
}
                $("#dailyenabler").on('click', function () {
if (dailysize == 0) {
dailysize++;
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [-]";
dailysizereal = '100%';
 $("#loadtest").css({
'height': dailysizereal
              });
} else {
dailysize--;
document.getElementById("dailyenabler").innerHTML = "Daily Hall of Counters [+]";
dailysizereal = '90px';
 $("#loadtest").css({
'height': dailysizereal
              });
}
                });
$(".authoro").each(function() {
  $(this).attr("href", "https://reddit.com" + $(this).text());
});
tablenumba = 1;
$(".numba").each(function() {
  $(this).text(tablenumba);
tablenumba++;
});
// Same thing with the another } before error
}},
        error: function(data) {
            alert('Error ' +data.status+ ' while loading Live Counting Extension: ' +data.statusText+ '\n\nPlease refresh to try again.');
        }
    });
}, 60500);
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
    $('#liveupdate-options').attr('data-OptionPosition', 'HIGHER');
    // Options
    Options.addSelect({
        label: 'OPTION POSITION',
        options: ['HIGHER', 'DEFAULT'],
        section: 'Advanced',
        "default": 0,
        help: 'Adjusts the position of the options.',
        onchange: function () {
            $('#liveupdate-options').attr('data-OptionPosition', this.val());
        }
    });
    // Styles
    Styles.add("\n\n\t#liveupdate-options[data-OptionPosition='HIGHER'] {margin-top: -11em;}\n\n\t#liveupdate-options[data-OptionPosition='DEFAULT'] {margin-top: -2em;}");
})(OptionPosition || (OptionPosition = {}));

////////////////////////
// Ignore.ts //
////////////////////////

var Ignore;
var IgnoreEnabled;

(function (Ignore) {
    // INITIALIZATION
//    $('#liveupdate-options').attr('data-OptionPosition', 'HIGHER');
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
        IgnoreEnabled = 'yep lol';
        $('#ignorestuff').css('display','initial');
        } else {
        IgnoreEnabled = 'nope lol';
        $('#ignorestuff').css('display','none');
        }
        }
    });

            $(`<script>var ignored = []; ignored.push(localStorage['ignoredppl']); function addIgnore() {var ignoreinp = document.getElementById('ignorebox');ignored.push(ignoreinp.value);ignoreinp.value = "";document.getElementById("ignorebox2").innerHTML = ignored;localStorage['ignoredppl'] = ignored;}function displayIgnore() {document.getElementById("ignorebox2").innerHTML = ignored;}function deleteIgnore() {ignored = []; localStorage['ignoredppl'] = []; document.getElementById("ignorebox2").innerHTML = '';}</script><span id=ignorestuff><input id=ignorebox style="position: absolute;margin-top: -25px;margin-left: 65px;"></input><span style="position: absolute;margin-top: -26px;margin-left: 210px;font-size: 9px !important;"><button type="button" id="ignoreadd" onclick="addIgnore()" style="font-size: 12px;padding: 0;margin-right: 3px;">ADD</button><button type="button" id="ignoredelete" onclick="deleteIgnore()" style="font-size: 12px;padding: 0;">DELETE ALL</button></span><div>Ignored users: <span id=ignorebox2></span></div></span><script>document.getElementById('ignorebox2').innerHTML = ignored;</script>`).insertAfter(`#live-counting-extension div div:nth-child(4) label:nth-last-child(1)`);
        if (enabled7 == true) {
        IgnoreEnabled = 'yep lol';
        $('#ignorestuff').css('display','initial');
        } else {
        IgnoreEnabled = 'nope lol';
        $('#ignorestuff').css('display','none');
        }
    // Styles



//    Styles.add("\n\n\t#liveupdate-options[data-OptionPosition='HIGHER'] {margin-top: -11em;}\n\n\t#liveupdate-options[data-OptionPosition='DEFAULT'] {margin-top: -2em;}");
})(Ignore || (Ignore= {}));

