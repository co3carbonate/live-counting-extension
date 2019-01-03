/**
/**
 * LIVE COUNTING EXTENSION V1.5.3
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */
// CONSTANTS
// Extension version
var VERSION = 'v1.5.3';


var specialnumber = 6;
var kname1 = 'MaybeNotWrong';
var kname2 = 'amazingpikachu_38';
var kname3 = 'NobodyL0vesMe';
var kname4 = 'noduorg';
var kname5 = 'treje';
var kname6 = 'ItzTaken';

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
        collapsed: [false, false, false, true]
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
    var $all_heading = $("\n\t\t<h1 style=\"font-size:16px;\">\n\t\t\t<a href=\"https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme\" target=\"_blank\">Live Counting Extension " + VERSION + "</a> \n\t\t</h1>\n\t");
    var $options_heading = $("<h2>Options </h2>");
    var $options_basic_heading = $("<h2>Basic </h2>");
    var $options_advanced_heading = $("<h2>Advanced </h2>");
    var $all_toggle = $("<span class=\"toggle-trigger\" style=\"font-size:15px;\">[-]</span>");
    var $options_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $options_basic_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $options_advanced_toggle = $("<span class=\"toggle-trigger\">[-]</span>");
    var $all = $("<div id='live-counting-extension'></div>");
    var $options = $("<div></div>");
    var $options_basic = $("<div></div>");
    var $options_advanced = $("<div></div>");
    $all_heading.append($all_toggle);
    $all.append($options_heading, $options);
    $options_heading.append($options_toggle);
    $options_basic_heading.append($options_basic_toggle);
    $options_advanced_heading.append($options_advanced_toggle);
    $options.append($options_basic_heading, $options_basic, $options_advanced_heading, $options_advanced);
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
	'PaleRepresentative': 'Grey',
	'andrewtheredditor': '#2bdb6c'	 
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
        if (SpecialUsernamesEnabled1 == 'yep lol') {
            // /u/MaybeNotWrong username special
            if (data.author == kname1) {
                let username = "/u/MaybeNotWrong";
                let colorfunc = function(value){
                    let color = "000000";
                    if(value  > 3){
                        let helper = (a,b) => a - (a * (b/3 - 1));
                        let red = Math.round(helper(6,value));
                        let green = Math.round(helper(102,value));
                        red = red < 16 ? "0" + red.toString(16) : red.toString(16);
                        green = green < 16 ? "0" + green.toString(16) : green.toString(16);
                        let blue = green;
                        color = red + green + blue;
                    }
                    else if (value  < 3){
                        let helper = (a,b) => 255 - (a*b)
                        let red = Math.round(helper(83,value));
                        let green = Math.round(helper(63,value));
                        red = red < 16 ? "0" + red.toString(16) : red.toString(16);
                        green = green < 16 ? "0" + green.toString(16) : green.toString(16);
                        let blue = green;
                        color = red + green + blue;
                    }
                    else color = "066666";
                    return color;
                }
                let template = function(color, time, dir, text){
                    let div = `<div class="maybe" style="float:left;color:#`;
                    div += color;
                    if (time > 0){
                        div += `;-webkit-animation: mymove `;
                        div += time;
                        div += `s infinite;animation: mymove `;
                        div += time;
                        div += `s infinite;animation-timing-function: linear;display: inline-table;animation-direction: `
                        div += dir;
                    }
                    div += `;">`
                    div += text
                    div += `</div>`
                    return div
                }
                username = username.split("").map((letter)=>{
                    let rand_rate = Math.floor(Math.random() * 6001) / 1000;
                    let rand_time = rand_rate == 0 ? 0 : 360 / rand_rate;
                    let rand_dir  = Math.floor((Math.random() * 2) + 1);
                    let dir_str   = rand_dir == 1 ? 'initial' : 'reverse';
                    let rand_clr  = colorfunc(rand_rate);
                    return template(rand_clr,rand_time,dir_str,letter);
                }).join("");
                data.author_elem.css({
                    'display': 'inline-table',
                    'font-weight': 'bold'
                });
                let rand_rate = Math.floor(Math.random() * 6001) / 1000;
                let rand_time = rand_rate == 0 ? 0 : 360 / rand_rate;
                let rand_dir  = Math.floor((Math.random() * 2) + 1);
                let dir_str   = rand_dir == 1 ? 'initial' : 'reverse';
                wrapper = `<div class="maybe" style="transform: translateY(-50%);position:absolute`
                let special = Math.floor(Math.random() * 100);
                if (special == 1) {
                    wrapper += `;"><div class="maybe" style="-webkit-animation: mymove2 `;
                    wrapper += rand_time;
                    wrapper += `s infinite;animation: mymove2 `;
                    wrapper += rand_time;
                    wrapper += `s infinite;animation-timing-function: linear;display: inline-table;animation-direction: `;
                    wrapper += dir_str;
                }
                wrapper += `;">`
                wrapper += username
                wrapper += `</div>`;
                if (special < 50) {
                    wrapper += `</div>`;
                }
                data.author_elem.html(wrapper);
            }
        } // SpecialUsernamesEnabled1 ending	
	
if (SpecialUsernamesEnabled2 == 'yep lol') {
	///u/amazingpikachu_38 username special
	if (data.author == kname2) {

var pikarand = Math.floor(Math.random() * 54) + 1;
var recordback = Math.floor(Math.random() * 1000) + 1;


  var count1testlol = data.body_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
if (count1testlol.length == 6) {
count1testlol = count1testlol.substr(count1testlol.length - 1);
} else {
count1testlol = count1testlol.substr(count1testlol.length - 3);
}

if (count1text.includes("hm") || count1text.includes("HM") || count1text.includes("Hm") || count1text.includes("hM") ) {
pikarand = 50;
count1testlol = count1testlol + "yea";
recordback = 'lol';
}
	
if (count1text.includes("spook") && recordback != 'lol') {
var takentotal = ['27','48','50','53'];
pikarand = takentotal[Math.floor(Math.random() * takentotal.length)];
recordback = 'override';
}

var maybename = maybenumbers[count1testlol];
if (maybename != null && recordback != 'override') {
if (maybename == "random123") {var randomx = Math.floor((Math.random() * 2) + 1);if (randomx == 1) {maybename = '/u/davidjl123';} else {maybename = '/u/dominodan123';}}
if (maybename == "random404") {var randomx = Math.floor((Math.random() * 2) + 1);if (randomx == 1) {maybename = '/u/Tranquilsunrise';} else {maybename = '/u/KingCaspianX';}}
var maybenamet = maybename.trim().replace('/u/', '');;
var maybecolor = userColors[maybenamet];
data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'
              });
if (maybename == "/u/amazingpikachu_37") {
maybecolor = 'yellow';
}
data.author_elem.html(`<div style="color:`+maybecolor+`;"><img id="dom1"></img><span id="leinemoji1"></span>`+maybename+`<span id="leinemoji2"></span><img id="dom2"></img></div>`)
if (maybename == "/u/amazingpikachu_37") {
document.getElementById("leinemoji1").innerHTML = '';
document.getElementById("leinemoji2").innerHTML = '';
var pikapic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAACpUlEQVQ4jaXSy08aQRgAcP+O1kvTP8FDT+2h6Z/QQ5u0B6OmtjYi4Gt3TcXER5o2prWXNsYSTLRE6QFNxQcVFRYj72VfIALCLvJckF2oGNidHrZRQRON/TLJzPfl+2UmM9ME/iOaLiYUSUqSdBtcrVYftLSwLHsbbDGv/fz6LJuKXW4SRTGTyXAcJ6fZVCSdjNXhRNBYJGAulz2rnJyUU5Etxq+933zn3t1mO4oCAJjg7/KRKROz1mNqProLZxJYNo7mUkE2ZEl6NDwJz396+vjhIz+GiaIYw+eEwHjpYDLuen+OJUmKk/oyYyhGtEad6hiH0s6+gy11zDPt96ByQ9gzm8cGCxhUxCFmb6BWq/3DZtOCa32sSI+nXP0axZPoSjdjVUZ8hrNzhb2LjFXJ2lTJXXXa0cvi2nOMLmgOUeWsptU805mwqvbVL33fW2lzX6VSAQAk2VBsu4exKhmrMrgJpeO+utvGdF+y7n79WPv6596oReGYeH5g6opaFGwIlW8b3ximTG/CLt2fEt/4VGWed6+8i2x2B1a74zs9jFWJGjrxDXXINlqtVgEAhHPFYtA0vrMkSQHvEuOdPCaQvG8wYVfHd3oOtxS2hXZ67W0egwIeY5h2Ln17ZZobafh/TaIoujcmjpwDAo0UcKhEDxUJuOCHjhy9LKrK+wZzGOJGf+mnXgs837izPNVqNS6bjPoXS/SQPAQKKeIQT8ACCaNGZAp6YVqcuRrLkUvtlwLDAoXwBMwTsEAh8po0dU1/6AeXog7nubQQGBVoRKCQYz9UxCGBRFKOPoehI0i6rsGSJFE7H8MWxZ6hw740src8jOrb7Pq27R+d5XLpGgwAOD09ta1q1wyTclrgMl77sn6q7bK8AgMAKpWTJBO6WNknbDfFN4+/8UMXvJZoC5oAAAAASUVORK5CYII=';
var elem = document.getElementById("dom1");
elem.setAttribute("src", pikapic);
elem.setAttribute("height", "20");
elem.setAttribute("width", "20");
elem.src = pikapic;
var elem2 = document.getElementById("dom2");
elem2.setAttribute("src", pikapic);
elem2.setAttribute("height", "20");
elem2.setAttribute("width", "20");
elem2.src = pikapic;
} else if (maybename == "/u/MewDP") {
document.getElementById("leinemoji1").innerHTML = '&#x1F449';
document.getElementById("leinemoji2").innerHTML = '&#x1F311';
} else if (maybename == "/u/TOP_20") {
document.getElementById("leinemoji1").innerHTML = '&#x1F4D5';
document.getElementById("leinemoji2").innerHTML = '&#x1F4D5';
} else if (maybename == "/u/MaybeNotWrong") {
document.getElementById("leinemoji1").innerHTML = '&#x1F4A4';
document.getElementById("leinemoji2").innerHTML = '&#x2753';
} else if (maybename == "/u/NobodyL0vesMe") {
document.getElementById("leinemoji1").innerHTML = '&#x1F311';
document.getElementById("leinemoji2").innerHTML = '&#x1F4A5';
} else if (maybename == "/u/artbn") {
document.getElementById("leinemoji1").innerHTML = '7️⃣';
document.getElementById("leinemoji2").innerHTML = '7️⃣';
} else if (maybename == "/u/noduorg") {
document.getElementById("leinemoji1").innerHTML = '';
document.getElementById("leinemoji2").innerHTML = '';
var pikapic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAB7UlEQVQ4jWP4jwMsW7bMCQbS09OxqmHAKjp37tz58+cvWbJkKgzMnDnz8ePHRGnOycmZM2fOtWvX9u/ff+HChYMHDyYmJu7cufPWjau3r51/ePviu9fPcGpGdvasWbNOnz597969nJwcV2s9L0OBLE+J9XOb8Wl+9uzZmTNnzpw509bWVlVVdebMmXXr1k1uya0Kk7FV553aVYtPMxwsXLiwtrpq6byphw7s27l25uxaX2M1yf5OvDYjg9vXznsZCmzfsPzKlSvHjh1zc3ObOXMmUZq7qlJCrMWzPCXstQQt9FXd3Nw+ffr0+/dvApo/f3y/al5fbYpdsouYj7FgVW7cxJ72mTNnQnQS0Pz88X0vQ4GyIOmKEBlNCY6jB/agKcCpedW8Pj8TwWwvCXtN3mBXC6xqsGteOKW5Ld8vw0PCQ5+/vjBp3YpFRGn+8P717WvnQ6zFk13EigPlg10tMF2LU/P2tfMhacjHWNDVTAOXNiyau6vTqhKsIGmoKjfuzMmjRGn+8vnj+eP7k7w04h1Fi/ylkkI9Vi2ei18nQjMkDaW7iweaCWlKcHz//p2gTqjmrqqUaHvJrkQFC2WemqJ0InVCNU+sTYyyFYlzEG2tyt25ZT2ROqGaZ7emxjmIakpwPLx/l3id////BwCDpdb/bbAXUwAAAABJRU5ErkJggg==';
var elem = document.getElementById("dom1");
elem.setAttribute("src", pikapic);
elem.setAttribute("height", "20");
elem.setAttribute("width", "20");
elem.src = pikapic;
var elem2 = document.getElementById("dom2");
elem2.setAttribute("src", pikapic);
elem2.setAttribute("height", "20");
elem2.setAttribute("width", "20");
elem2.src = pikapic;
} 
return;
}

if (count1testlol == '037' || count1testlol == '151' || count1testlol == '369' || count1testlol == '373' || count1testlol == '888' || count1testlol == '777' || count1testlol == '845' || count1testlol == '911') {
pikarand = 'Lein';
}


if (recordback == 1) {
pikarand = 'Record';
}

if (pikarand == 1) {
data.author_elem.css({
                 'display': 'inline-block',
	'font-weight': 'bold'
});
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_` + Math.floor((Math.random() * 99) + 1) + `</div>`);
} else if (pikarand == 2) {
data.author_elem.css({
                 'display': 'inline-block',
'letter-spacing': '4px', 
'font-weight': 'bold'
});
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);
} else if (pikarand == 3) {
 data.author_elem.html(`<div style="color:HotPink;">♥ chu ♥</div>`);
             data.author_elem.css({
                 'display': 'inline-block'
             });
} else if (pikarand == 4) {
 data.author_elem.css({
                 'display': 'inline-block'
             });
data.author_elem.html(`<div style="color:yellow;">amazingpikachu_37 {:'-D ` + (Math.floor(Math.random() * 900000) + 100000)+`</div>`);
} else if (pikarand == 5) {
             data.author_elem.css({
                 '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',
                 'display': 'inline-block',
                 'vertical-align': 'middle'
             });
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);
} else if (pikarand == 6) {
data.author_elem.css('display', 'none');
} else if (pikarand == 7) {
 data.author_elem.css({
'font-weight': 'bold',
                 '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',
                 'display': 'inline-block',
                 'vertical-align': 'middle'
             });
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);
} else if (pikarand == 8) {
 data.author_elem.css({
'font-weight': 'bold',
                 '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',
                 'display': 'inline-block',
                 'vertical-align': 'middle'
             });
data.author_elem.html(`<span style='color:blue;'>/u/</span><span style='color:#4852C4;'>a</span><span style='color:#434DBF;'>m</span><span style='color:#3F49BB;'>a</span><span style='color:#3B45B7;'>z</span><span style='color:#3741B3;'>i</span><span style='color:#323CAE;'>n</span><span style='color:#2E38AA;'>g</span><span style='color:#2A34A6;'>p</span><span style='color:#2630A2;'>i</span><span style='color:#212B9D;'>k</span><span style='color:#1D2799;'>a</span><span style='color:#192395;'>c</span><span style='color:#151F91;'>h</span><span style='color:#101A8C;'>u</span><span style='color:#0C1688;'>_</span><span style='color:#081284;'>3</span><span style='color:#040E80;'>7</span>`);
} else if (pikarand == 9) {
 data.author_elem.css({
                fontWeight: 'bold',
                textDecoration: 'line-through',
                fontStyle: 'italic',
'display': 'inline-block',
                verticalAlign: 'super',
                fontSize: '10px'
             });
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);
} else if (pikarand == 10) {
data.author_elem.css({
                 'display': 'inline-block',
});
data.author_elem.addClass('amazingpikachu_38');
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);

/////////////////
/////////////////YOU NEED TO MAKE SURE YOU GO TO THE BOTTOM OF ColoredUsernames AND ADD THE STYLE THINGY!!!!!
/////////////////

} else if (pikarand == 11) {
data.author_elem.css({
                 'display': 'inline-block',
'letter-spacing': '4px', 
'font-weight': 'bold'
});
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);
} else if (pikarand == 12) {
data.author_elem.css({
                'letter-spacing': '4px',
                'font-weight': 'bold',
                'text-decoration': 'underline',
                'font-style': 'italic'
            });
            data.author_elem.html(`🚀<span style="color:#ff0000;">a</span><span style="color:#ff2a00;">m</span><span style="color:#ff5500;">a</span><span style="color:#ff7f00;">z</span><span style="color:#ffaa00;">i</span><span style="color:#ffd400;">n</span><span style="color:#ffff00;">g</span><span style="color:#bfff00;">p</span><span style="color:#80ff00;">i</span><span style="color:#40ff00;">k</span><span style="color:#00ff00;">a</span><span style="color:#00ff55;">c</span><span style="color:#00ffaa;">h</span><span style="color:#00ffff;">u</span><span style="color:#00aaff;">_</span><span style="color:#0055ff;">3</span><span style="color:#0000ff;">7</span>🚀`);
} else if (pikarand == 13) {
 data.author_elem.css({
                '-moz-transform': 'rotate(-180deg)',
                '-o-transform': 'rotate(-180deg)',
                '-webkit-transform': 'rotate(-180deg)',
                'transform': 'rotate(-180deg)',
                'display': 'inline-block',
                'vertical-align': 'middle'
            });
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`);
} else if (pikarand == 14) {
 data.author_elem.css({
                '-moz-transform': 'rotate(-180deg)',
                '-o-transform': 'rotate(-180deg)',
                '-webkit-transform': 'rotate(-180deg)',
                'transform': 'rotate(-180deg)',
                'display': 'inline-block',
                'vertical-align': 'middle'
            });
 data.author_elem.html(`<font size='1'><span style='color:#CCCCFF;'>/</span><span style='color:#C1C1F4;'>u</span><span style='color:#B7B7EA;'>/</span><span style='color:#ADADE0;'>a</span></font><font size='2'><span style='color:#A3A3D6;'>m</span><span style='color:#9999CC;'>a</span><span style='color:#8E8EC1;'>z</span><span style='color:#8484B7;'>i</span></font><font size='3'><span style='color:#7A7AAD;'>n</span><span style='color:#7070A3;'>g</span><span style='color:#666699;'>p</span><span style='color:#5B5B8E;'>i</span></font><font size='4'><span style='color:#515184;'>k</span><span style='color:#47477A;'>a</span><span style='color:#3D3D70;'>c</span><span style='color:#333366;'>h</span></font><font size='5'><span style='color:#28285B;'>u</span><span style='color:#1E1E51;'>_</span><span style='color:#141447;'>3</span><span style='color:#0A0A3D;'>7</span></font>`)
} else if (pikarand == 15) {
 data.author_elem.css({
                 'letter-spacing': '2px',
                 'font-weight': 'bold',
                 'text-decoration': 'underline',
'display': 'inline-block'
             });
             data.author_elem.html('ஜ۩۞<span><span style="color:#ff0000;">[</span><span style="color:#ff0900;">̅</span><span style="color:#ff1200;">̲</span><span style="color:#ff1b00;">a</span><span style="color:#ff2400;">̅</span><span style="color:#ff2d00;">̲</span><span style="color:#ff3600;">[</span><span style="color:#ff3f00;">̅</span><span style="color:#ff4900;">̲</span><span style="color:#ff5200;">m</span><span style="color:#ff5b00;">̅</span><span style="color:#ff6400;">̲</span><span style="color:#ff6d00;">[</span><span style="color:#ff7600;">̅</span><span style="color:#ff7f00;">̲</span><span style="color:#ff8800;">a</span><span style="color:#ff9100;">̅</span><span style="color:#ff9a00;">̲</span><span style="color:#ffa400;">]</span><span style="color:#ffad00;">̅</span><span style="color:#ffb600;">̲</span><span style="color:#ffbf00;">[</span><span style="color:#ffc800;">z</span><span style="color:#ffd100;">̅</span><span style="color:#ffda00;">̲</span><span style="color:#ffe400;">[</span><span style="color:#ffed00;">̅</span><span style="color:#fff600;">̲</span><span style="color:#ffff00;">i</span><span style="color:#ebff00;">̅</span><span style="color:#d8ff00;">̲</span><span style="color:#c4ff00;">[</span><span style="color:#b1ff00;">̅</span><span style="color:#9dff00;">̲</span><span style="color:#89ff00;">n</span><span style="color:#76ff00;">̅</span><span style="color:#62ff00;">̲</span><span style="color:#4eff00;">]</span><span style="color:#3bff00;">[</span><span style="color:#27ff00;">̅</span><span style="color:#14ff00;">̲</span><span style="color:#00ff00;">g</span><span style="color:#00ff12;">̅</span><span style="color:#00ff24;">̲</span><span style="color:#00ff37;">[</span><span style="color:#00ff49;">̅</span><span style="color:#00ff5b;">̲</span><span style="color:#00ff6d;">p</span><span style="color:#00ff80;">̅</span><span style="color:#00ff92;">̲</span><span style="color:#00ffa4;">]</span><span style="color:#00ffb6;">[</span><span style="color:#00ffc8;">̅</span><span style="color:#00ffdb;">̲</span><span style="color:#00ffed;">i</span><span style="color:#00ffff;">̲</span><span style="color:#00edff;">̅</span><span style="color:#00dbff;">[</span><span style="color:#00c8ff;">̅</span><span style="color:#00b6ff;">̲</span><span style="color:#00a4ff;">k</span><span style="color:#0092ff;">̅</span><span style="color:#007fff;">̲</span><span style="color:#006dff;">[</span><span style="color:#005bff;">̅</span><span style="color:#0049ff;">̲</span><span style="color:#0037ff;">a</span><span style="color:#0024ff;">̅</span><span style="color:#0012ff;">̲</span><span style="color:#0000ff;">]</span></span><span style="color:#ff1493">【𝒄𝒉𝒖】</span><span style="color:#00ff00">③</span><span style="color:#005500">⑦</span>۞۩ஜ🚀🌎');
} else if (pikarand == 16) {
data.author_elem.css({
                'font-weight': 'bold',
                'display': 'inline-block',
                'vertical-align': 'middle',
                'color': 'HotPink',
                fontSize: '15px',
            });
data.author_elem.html('<div style="color:HotPink;"><font face="Lucida Handwriting">🙏 Pikachu worships qwerty 🙏</font></div>');
} else if (pikarand == 17) {
chucount++;
  data.author_elem.css({
                'font-weight': 'bold',
                'display': 'inline-block',
                'vertical-align': 'middle',
                fontSize: '15px',
            });
data.author_elem.html('<span style="color:#FFFF00">/u/amazingpikachu_37 '+chucount+'</span>');

///////////////////////
/////////////////////// ADD CHUCOUNT TO THE TOP!!!!!!!!!!
///////////////////////

} else if (pikarand == 18) {
 data.author_elem.css({
                  'letter-spacing': '2px',
                  'font-weight': 'bold',
              });
              data.author_elem.html('<span style="color:#0000FF;"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</span></font><span style="color:#0000F1;"><font size="'+(Math.floor(Math.random()*6)+1)+'">m</span></font><span style="color:#0000E3;"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</span></font><span style="color:#0000D5;"><font size="'+(Math.floor(Math.random()*6)+1)+'">z</span></font><span style="color:#0000C7;"><font size="'+(Math.floor(Math.random()*6)+1)+'">i</span></font><span style="color:#0000B9;"><font size="'+(Math.floor(Math.random()*6)+1)+'">n</span></font><span style="color:#0000AB;"><font size="'+(Math.floor(Math.random()*6)+1)+'">g</span></font><span style="color:#00009D;"><font size="'+(Math.floor(Math.random()*6)+1)+'">p</span></font><span style="color:#00008F;"><font size="'+(Math.floor(Math.random()*6)+1)+'">i</span></font><span style="color:#000081;"><font size="'+(Math.floor(Math.random()*6)+1)+'">k</span></font><span style="color:#000073;"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</span></font><span style="color:#000065;"><font size="'+(Math.floor(Math.random()*6)+1)+'">c</span></font><span style="color:#000057;"><font size="'+(Math.floor(Math.random()*6)+1)+'">h</span></font><span style="color:#000049;"><font size="'+(Math.floor(Math.random()*6)+1)+'">u</span></font><span style="color:#00003B;"><font size="'+(Math.floor(Math.random()*6)+1)+'">_</span></font><span style="color:#00002D;"><font size="'+(Math.floor(Math.random()*6)+1)+'">3</span></font><span style="color:#00001F;"><font size="'+(Math.floor(Math.random()*6)+1)+'">7</span></font>');
} else if (pikarand == 19) {
              data.author_elem.css({
                  'letter-spacing': '2px',
'display': 'inline-block',
                  'font-weight': 'bold',
              });
              data.author_elem.html('🚀<font face="Bodoni MT"><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">m</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">z</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">i</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">n</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">g</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">p</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">i</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">k</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">c</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">h</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">u</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">_</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">3</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">7</font></span>🚀<span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'">'+ (Math.floor(Math.random()*1000000)+1)+'</span></font>');
} else if (pikarand == 20) {
data.author_elem.css({
                  'letter-spacing': '2px',
'display': 'inline-block',
                  'font-weight': 'bold',
              });
data.author_elem.html('<span style="color:#ff00bf">❤❤❤<font face="Comic Sans"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font><font size="'+(Math.floor(Math.random()*6)+1)+'">m</font><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font><font size="'+(Math.floor(Math.random()*6)+1)+'">z</font><font size="'+(Math.floor(Math.random()*6)+1)+'">i</font><font size="'+(Math.floor(Math.random()*6)+1)+'">n</font><font size="'+(Math.floor(Math.random()*6)+1)+'">g</font><font size="'+(Math.floor(Math.random()*6)+1)+'">p</font><font size="'+(Math.floor(Math.random()*6)+1)+'">i</font><font size="'+(Math.floor(Math.random()*6)+1)+'">k</font><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font><font size="'+(Math.floor(Math.random()*6)+1)+'">c</font><font size="'+(Math.floor(Math.random()*6)+1)+'">h</font><font size="'+(Math.floor(Math.random()*6)+1)+'">u</font><font size="'+(Math.floor(Math.random()*6)+1)+'">_</font><font size="'+(Math.floor(Math.random()*6)+1)+'">3</font><font size="'+(Math.floor(Math.random()*6)+1)+'">7</font></font>❤❤❤</span>');
} else if (pikarand == 21) {
data.author_elem.css({
                  'font-weight': 'bold',
                  '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',                  'display': 'inline-block',
                  'vertical-align': 'middle',
//'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
              });
             data.author_elem.html(`<span style='color:#ccccff;'><font size='1'>/u/</span><span style='color:#B3B3FF;'>a</span></font><font size='2'><span style='color:#A8A8FA;'>m</span><span style='color:#9D9DF6;'>a</span><span style='color:#9393F1;'>z</span><span style='color:#8888ED;'>i</span><span style='color:#7E7EE8;'>n</span></font><font size='3'><span style='color:#7373E4;'>g</span><span style='color:#6969DF;'>p</span><span style='color:#5E5EDB;'>i</span><span style='color:#5454D6;'>k</span><span style='color:#4949D2;'>a</span></font><font size='4'><span style='color:#3F3FCD;'>c</span><span style='color:#3434C9;'>h</span><span style='color:#2A2AC4;'>u</span><span style='color:#1F1FC0;'>_</span></font><font size='5'><span style='color:#1515BB;'>3️</span><span style='color:#0A0AB7;'>7️</span></font>`)
} else if (pikarand == 22) {
data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
                  'vertical-align': 'middle'
              });
             data.author_elem.html(chu_inc22()+`<span style='color:#6E003A;'>A</span><span style='color:#760041;'>M</span><span style='color:#7F0049;'>A</span><span style='color:#870051;'>Z</span><span style='color:#900059;'>I</span><span style='color:#980061;'>N</span><span style='color:#A10068;'>G</span><span style='color:#A90070;'>P</span><span style='color:#B20078;'>I</span><span style='color:#BA0080;'>K</span><span style='color:#C30088;'>A</span><span style='color:#CB0090;'>C</span><span style='color:#D40097;'>H</span><span style='color:#DC009F;'>U</span><span style='color:#E500A7;'>_</span><span style='color:#ED00AF;'>3</span><span style='color:#F600B7;'>7</span>`+chu);

} else if (pikarand == 23) {
            data.author_elem.css({
                'font-weight': 'bold',
                'display': 'inline-block',
                'vertical-align': 'middle',
                fontSize: '15px',
            });
            data.author_elem.html(`<h1 id="foo"><span style='color:red;'>🐬❤</span><font face="Lucida Handwriting"> amazingpikachu_37 </font><span style='color:red;'>❤🐬</span></p> <script text="javascript">function flash() {
    var text = document.getElementById('foo');
    if (text.style.color=='rgb(255, 166, 199)'){
    	text.style.color='rgb(255, 000, 191)'
    }
    else if(text.style.color=='rgb(255, 0, 191)'){
      text.style.color='rgb(224, 0, 138)'
    }
    else{
    text.style.color='rgb(255, 166, 199)'
    }
}
var clr = setInterval(flash, 1000);</script>`);
} else if (pikarand == 24) {
data.author_elem.css({
                  'font-weight': 'bold',
                  '-moz-transform': 'scale(-1, 1)',
                   '-o-transform': 'scale(-1, 1)',
                   '-webkit-transform': 'scale(-1, 1)',
                   'transform': 'scale(-1, 1)',
                  'display': 'inline-block',
                  'vertical-align': 'middle'
              });
             data.author_elem.html(`<span style="color:#FFFF00"><font face='Comic Sans MS' size=4>/u/amazingpikachu_37<sup><sup><sup><sup><sup><sup>PIKACHU IS AMAZING!!!!!!!!!!!!!</sup></sup></sup></sup></sup></sup></font></span>`)
} else if (pikarand == 25) {
 data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
                  'vertical-align': 'middle'
              });
            data.author_elem.html(chu_inc()+`<font face="Gabriola"><span style='color:#6E003A;'>A</span><span style='color:#760041;'>M</span><span style='color:#7F0049;'>A</span><span style='color:#870051;'>Z</span><span style='color:#900059;'>I</span><span style='color:#980061;'>N</span><span style='color:#A10068;'>G</span><span style='color:#A90070;'>P</span><span style='color:#B20078;'>I</span><span style='color:#BA0080;'>K</span><span style='color:#C30088;'>A</span><span style='color:#CB0090;'>C</span><span style='color:#D40097;'>H</span><span style='color:#DC009F;'>U</span><span style='color:#E500A7;'>_</span><span style='color:#ED00AF;'>3</span><span style='color:#F600B7;'>7</span>`+chu) 
} else if (pikarand == 26) {
   data.author_elem.css({
                    'letter-spacing': '2px',
                    'font-weight': 'bold',
                });
            data.author_elem.html('<span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">m</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">z</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">i</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">n</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">g</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">p</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">i</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">k</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">a</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">c</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">h</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">u</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">_</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">3</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'"><font size="'+(Math.floor(Math.random()*6)+1)+'">7</font></span><span style="color:#'+(Math.floor(Math.random()*0xFFFFFF<<0)).toString(16)+'">'+ (Math.floor(Math.random()*1000000)+1)+'</span>'+chu_inc1()+chu_inc1()+chu_inc1()+chu_inc1());

} else if (pikarand == 27) {

var takenname = 'im running to ';
var takencolor = 'yellow';
var takenemoji = '🏃‍';

  var count1testlol = data.body_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
if (count1testlol.length == 6) {
count1testlol = count1testlol.substr(count1testlol.length - 1);
} else {
count1testlol = count1testlol.substr(count1testlol.length - 3);
}
var count1testlolnext = count1testlol.substring(0,1);
count1testlolnext = parseInt(count1testlolnext);
count1testlolnext++;
count1testlolnext = count1testlolnext.toString();
count1testlolnext = count1testlolnext + "00";
if (isNaN(count1testlolnext)) {
count1testlolnext = "∞";
}
if (count1testlol == '666' || count1text.includes("spook")) {
takenemoji = '👻👻👻';
takencolor = '#000000';
count1testlolnext = "666";
}

if (count1testlol == '666' && count1text.includes("spook")) {
takenname = 'SPOOK';
count1testlolnext = "";
}

 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenemoji+takenname+count1testlolnext+takenemoji+`</div>`)

} else if (pikarand == 28) {
        data.author_elem.css({
                    'letter-spacing': '2px',
                    'font-weight': 'bold',
                });
            data.author_elem.html('<span style="color:#00FF00"> a </span><span style="color:#FF0000"> m </span><span style="color:#00FF00"> a </span><span style="color:#FF0000"> z </span><span style="color:#00FF00"> i </span><span style="color:#FF0000"> n </span><span style="color:#00FF00"> g </span><span style="color:#FF0000"> p </span><span style="color:#00FF00"> i </span><span style="color:#FF0000"> k </span><span style="color:#00FF00"> a </span><span style="color:#FF0000"> c </span><span style="color:#00FF00"> h </span><span style="color:#FF0000"> u </span><span style="color:#00FF00"> _ </span><span style="color:#FF0000"> 3 </span><span style="color:#00FF00"> 7 </span>');
          
} else if (pikarand == 29) {
               data.author_elem.css({
                    'letter-spacing': '2px',
                    'font-weight': 'bold',
                    'background-color': 'Black',
                });
            data.author_elem.html('🚔<span style="color:#FF0000">a</span><span style="color:#FFFFFF">m</span><span style="color:#0000FF">a</span><span style="color:#FF0000">z</span><span style="color:#FFFFFF">i</span><span style="color:#0000FF">n</span><span style="color:#FF0000">g</span><span style="color:#FFFFFF">p</span><span style="color:#0000FF">i</span><span style="color:#FF0000">k</span><span style="color:#FFFFFF">a</span><span style="color:#0000FF">c</span><span style="color:#FF0000">h</span><span style="color:#FFFFFF">u</span><span style="color:#0000FF">_</span><span style="color:#FF0000">3</span><span style="color:#FFFFFF">7</span>🚔');

} else if (pikarand == 30) {
      data.author_elem.css({
                    'letter-spacing': '2px',
                    'font-weight': 'bold',
                });
            data.author_elem.html(`<span style ="color:#F5DEB3">━</span><span style ="color:#840D0D">{:'-D🍆{:}🍍{:'D🌰</span><span style ="color:#D4AF37">{amazingpikachu_37}</span><span style ="color:#840d0d">🍥{:'}🍅{:D🌽}:'-D</span><span style ="color:#F5DEB3">━</span>`);

} else if (pikarand == 31) {
		data.author_elem.css({
                      'letter-spacing': '2px',
                      'font-weight': 'bold',
					  'background-color': 'Black',
                  });
				  data.author_elem.html(`🌯🌮🏀<span style="color:#E13A3E">a</span><span style="color:#C4CED4">m</span><span style="color:#E13A3E">a</span><span style="color:#C4CED4">z</span><span style="color:#E13A3E">i</span><span style="color:#C4CED4">n</span><span style="color:#E13A3E">g</span><span style="color:#C4CED4">p</span><span style="color:#E13A3E">i</span><span style="color:#C4CED4">k</span><span style="color:#E13A3E">a</span><span style="color:#C4CED4">c</span><span style="color:#E13A3E">h</span><span style="color:#C4CED4">u</span><span style="color:#E13A3E">_</span><span style="color:#C4CED4">3</span><span style="color:#E13A3E">7</span>`+chu_inc1()+chu_inc1()+chu_inc1()+chu_inc1());
} else if (pikarand == 32) {
 data.author_elem.css({
                'font-weight': 'bold',
                'display': 'inline-block',
                'vertical-align': 'middle'
                });
            data.author_elem.html('<img id=dom1></img>'+rng()+'<span style="color:#515A5A">/u/</span><span style="color:#520063">'+reverser(0)+'</span><span style="color:#515A5A">'+reverser(1)+'</span><span style="color:#520063">'+reverser(2)+'</span><span style="color:#515A5A">'+reverser(3)+'</span><span style="color:#520063">'+reverser(4)+'</span><span style="color:#515A5A">'+reverser(5)+'</span><span style="color:#520063">'+reverser(6)+'</span><span style="color:#515A5A">p</span><span style="color:#520063">i</span><span style="color:#515A5A">k</span><span style="color:#520063">a</span><span style="color:#515A5A">c</span><span style="color:#520063">h</span><span style="color:#515A5A">u</span><span style="color:#520063">_</span><span style="color:#515A5A">3</span><span style="color:#520063">7</span><img id=dom2></img>'); 
var pikapic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAACpUlEQVQ4jaXSy08aQRgAcP+O1kvTP8FDT+2h6Z/QQ5u0B6OmtjYi4Gt3TcXER5o2prWXNsYSTLRE6QFNxQcVFRYj72VfIALCLvJckF2oGNidHrZRQRON/TLJzPfl+2UmM9ME/iOaLiYUSUqSdBtcrVYftLSwLHsbbDGv/fz6LJuKXW4SRTGTyXAcJ6fZVCSdjNXhRNBYJGAulz2rnJyUU5Etxq+933zn3t1mO4oCAJjg7/KRKROz1mNqProLZxJYNo7mUkE2ZEl6NDwJz396+vjhIz+GiaIYw+eEwHjpYDLuen+OJUmKk/oyYyhGtEad6hiH0s6+gy11zDPt96ByQ9gzm8cGCxhUxCFmb6BWq/3DZtOCa32sSI+nXP0axZPoSjdjVUZ8hrNzhb2LjFXJ2lTJXXXa0cvi2nOMLmgOUeWsptU805mwqvbVL33fW2lzX6VSAQAk2VBsu4exKhmrMrgJpeO+utvGdF+y7n79WPv6596oReGYeH5g6opaFGwIlW8b3ximTG/CLt2fEt/4VGWed6+8i2x2B1a74zs9jFWJGjrxDXXINlqtVgEAhHPFYtA0vrMkSQHvEuOdPCaQvG8wYVfHd3oOtxS2hXZ67W0egwIeY5h2Ln17ZZobafh/TaIoujcmjpwDAo0UcKhEDxUJuOCHjhy9LKrK+wZzGOJGf+mnXgs837izPNVqNS6bjPoXS/SQPAQKKeIQT8ACCaNGZAp6YVqcuRrLkUvtlwLDAoXwBMwTsEAh8po0dU1/6AeXog7nubQQGBVoRKCQYz9UxCGBRFKOPoehI0i6rsGSJFE7H8MWxZ6hw740src8jOrb7Pq27R+d5XLpGgwAOD09ta1q1wyTclrgMl77sn6q7bK8AgMAKpWTJBO6WNknbDfFN4+/8UMXvJZoC5oAAAAASUVORK5CYII=';
var elem = document.getElementById("dom1");
elem.setAttribute("src", pikapic);
elem.setAttribute("height", "20");
elem.setAttribute("width", "20");
elem.src = pikapic;
var elem2 = document.getElementById("dom2");
elem2.setAttribute("src", pikapic);
elem2.setAttribute("height", "20");
elem2.setAttribute("width", "20");
elem2.src = pikapic;

//////////////////////////
////////////////////////// CHANGE S VARIABLE AT TOP TO AMAZING, AND CHANGE REVERSER SO THAT IT DOESNT DO UPPERCASE
//////////////////////////

} else if (pikarand == 33) {
 data.author_elem.css({
                'font-weight': 'bold',
                'display': 'inline-block',
                'vertical-align': 'middle'
                });
            if (count2==0){
                data.author_elem.html('🌑💥'+rng2()+'<span style="color:#515A5A">/u/amazingpikachu_37</span>💥🌑');
            } else{
                data.author_elem.html('💔🖤'+rng2()+'<span style="color:#515A5A">/u/amazingpikachu_38</span>💔🖤');
            }

//////////////////////////
////////////////////////// ADD RNG2() FUNCTION AND COUNT2 VARIABLE
//////////////////////////

} else if (pikarand == 34) {
  data.author_elem.css({
                  'font-weight': 'bold',
                  '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',                  'display': 'inline-block',
                  'vertical-align': 'middle'
              });
             data.author_elem.html(`<span style='color:#ccccff;'><font size='1'>/u/</span><span style='color:#B3B3FF;'>a</span></font><font size='2'><span style='color:#A8A8FA;'>m</span><span style='color:#9D9DF6;'>a</span><span style='color:#9393F1;'>z</span><span style='color:#8888ED;'>i</span><span style='color:#7E7EE8;'>n</span></font><font size='3'><span style='color:#7373E4;'>g</span><span style='color:#6969DF;'>p</span><span style='color:#5E5EDB;'>i</span><span style='color:#5454D6;'>k</span><span style='color:#4949D2;'>a</span></font><font size='4'><span style='color:#3F3FCD;'>c</span><span style='color:#3434C9;'>h</span><span style='color:#2A2AC4;'>u</span><span style='color:#1F1FC0;'>_</span></font><font size='4'><span style='color:#1515BB;'>3️</span><span style='color:#0A0AB7;'>7️</span></font>`)
} else if (pikarand == 35) {
        data.author_elem.css({
                  'font-weight': 'bold',
              });
var lonadont1 = 'a ';
var lonadont2 = 'm ';
var lonadont3 = 'a ';
var lonadont4 = 'z ';
var lonadont5 = 'i ';
var lonadont6 = 'n ';
var lonadont7 = 'g ';
var lonadont8 = 'p ';
var lonadont81 = 'i ';
var lonadont82 = 'k ';
var lonadont83 = 'a ';
var lonadont84 = 'c ';
var lonadont85 = 'h ';
var lonadont86 = 'u ';
var lonadont87 = '_ ';
var lonadont88 = '3 ';
var lonadont89 = '7 ';
var lonadont9 = Math.floor((Math.random() * 213) + 1);
if (lonadont9 == 1) {
lonadont1 = '0 ';
} else if (lonadont9 == 2) {
lonadont1 = '4 ';
} else if (lonadont9 == 3) {
lonadont2 = '0 ';
} else if (lonadont9 == 4) {
lonadont2 = '4 ';
} else if (lonadont9 == 5) {
lonadont3 = '0 ';
} else if (lonadont9 == 6) {
lonadont3 = '4 ';
} else if (lonadont9 == 7) {
lonadont4 = '0 ';
} else if (lonadont9 == 8) {
lonadont4 = '4 ';
} else if (lonadont9 == 9) {
lonadont5 = '0 ';
} else if (lonadont9 == 10) {
lonadont5 = '4 ';
} else if (lonadont9 == 11) {
lonadont6 = '0 ';
} else if (lonadont9 == 12) {
lonadont6 = '4 ';
} else if (lonadont9 == 13) {
lonadont7 = '0 ';
} else if (lonadont9 == 14) {
lonadont7 = '4 ';
} else if (lonadont9 == 15) {
lonadont8 = '0 ';
} else if (lonadont9 == 16) {
lonadont8 = '4 ';
} else if (lonadont9 == 17) {
lonadont81 = '0 ';
} else if (lonadont9 == 18) {
lonadont81 = '4 ';
} else if (lonadont9 == 19) {
lonadont82 = '0 ';
} else if (lonadont9 == 20) {
lonadont82 = '4 ';
} else if (lonadont9 == 21) {
lonadont83 = '0 ';
} else if (lonadont9 == 22) {
lonadont83 = '4 ';
} else if (lonadont9 == 23) {
lonadont84 = '0 ';
} else if (lonadont9 == 24) {
lonadont84 = '4 ';
} else if (lonadont9 == 25) {
lonadont85 = '0 ';
} else if (lonadont9 == 26) {
lonadont85 = '4 ';
} else if (lonadont9 == 27) {
lonadont86 = '0 ';
} else if (lonadont9 == 28) {
lonadont86 = '4 ';
} else if (lonadont9 == 29) {
lonadont87 = '0 ';
} else if (lonadont9 == 30) {
lonadont87 = '4 ';
} else if (lonadont9 == 31) {
lonadont88 = '0 ';
} else if (lonadont9 == 32) {
lonadont88 = '4 ';
} else if (lonadont9 == 33) {
lonadont89 = '0 ';
} else if (lonadont9 == 34) {
lonadont89 = '4 ';
}
             data.author_elem.html('<span style="color:yellow">/u/'+lonadont1+lonadont2+lonadont3+lonadont4+lonadont5+lonadont6+lonadont7+lonadont8+lonadont81+lonadont82+lonadont83+lonadont84+lonadont85+lonadont86+lonadont87+lonadont88+lonadont89+'</span>');
} else if (pikarand == 36) {
var pikachurandomcolor = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
 var pikachuchars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz1234567890-_";
 var pikachustring_length = Math.floor(Math.random() * 18) + 3;
 var pikachurandomstring = '';
 for (var i=0; i<pikachustring_length; i++) {
  var pikachurnum = Math.floor(Math.random() * pikachuchars.length);
  pikachurandomstring += pikachuchars.substring(pikachurnum,pikachurnum+1);
}
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'
              });
data.author_elem.html(`<span style='color:` + pikachurandomcolor + `;'>/u/`+ pikachurandomstring +`</span>`)
} else if (pikarand == 37) {
 var mrbar = Math.floor(Math.random() * 10) + 1;
if (mrbar == 1) {
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
'color': 'black',
'font-size': '15px'
              });
             data.author_elem.html(`<span style='color:black'>-MrPikachu-</span>`)
} else {
var randomBahr = ['#ff33cc', '#e60000', '#0000ff', '#00ff00', '#996600', '#008000', '#ff8000'];
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'

              });
             data.author_elem.html(`<span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>/</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>u</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>/</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>a</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>m</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>a</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>z</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>i</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>n</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>g</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>p</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>i</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>k</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>a</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>c</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>h</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>u</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>_</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>3</span><span style='color:` + randomBahr[(Math.floor(Math.random() * randomBahr.length))] + `;'>7</span>`);
}
} else if (pikarand == 38) {
var danSize1 = Math.floor(Math.random() * 16) + 5;
var danSize2 = Math.floor(Math.random() * 16) + 5;
var danSize3 = Math.floor(Math.random() * 16) + 5;
if (danr == 0) {
var rotater = '';
danr++;
} else if (danr == 1) {
var rotater = '-moz-transform: rotate(-90deg);-o-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);'
danr--;
}
var randomDom = ['data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABylJREFUeJzt3VuoXNUdgPEvJtHcqI1VidqqoD5Eqdo0RnO8tT4oYsFUFKUvUgrShxYptoit0mKr4gUtFXxqH9oXW2zrBRSFQrxFDbaCxNqABa1GOGrrLSbRJvH4sOYwx9v/7DlnzVp79nw/GCa3vfhn7/OdmdGZLJAkSZIkSa2woPYAhe0DHA8cCxwALKo7zsjYA7wJ/BPYAnxYdxzldghwM/A6MOVtXrdJ4Ebg4IGugFrrMuBd6n9hde32NvDdAa7DSOr6U6xfA5fP+Pk24I/Ak6TvhD5VaGYhsAqYAC4BDp3xe7cAP6kxlObnF/S/2+0CfgQsrjlQR+xLCuJ9+uf3qqoTaWCnkx4dpoB3gPV1x+mk04DtpHO8Fzi57jgaxNP0v7udV3mWLvs2/fO8qfIsamiC/kW7q/Is4+A++ud7beVZ1MDN9C/YROVZxsE36J/v6+qOoiYeJV2sN+n+f6Vrg4X0X4v8rfIs2e1Te4Ah+Erv/t+ki6bh2ks61wCH1xxkGLoYyJLe/c6qU4yXHb37pVWnGIIuBuLTqno6d+67GIiUjYFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAbdBbocvAV+nv/ffq8A/SP9CvZTVJOlfdX+48hxNnE3aMmB6u7iZt73Ag8BZ1aZr7nHSzNtqD6LZjUIgK4A7ab7l8u+BZVUmbcZARkjbA/kCsJnB9yXfBCyvMG8TnQ3EF+llLSA9Gqybw7ETwO/o4BYDbWYgZV0IbJjH8Rfjrr1FGUg5C4CfZVjnmgxrqCEDKWc1cEKGddYBR2VYRw0YSDk5t6R2e+tCDKScnDvAHpFxLQUMpJyc71rwHRCFGEg5r2VcazLjWgoYSDnPtHQtBQyknCfJ8yiyDfh7hnXUgIGUswe4PcM6t5He3CjNSZvfi7UU2Mrg78Oavm0B9is+9ex8L5ay2AVcALw1h2P/2zv2g6wTKWQg5T0PnAm8OMAxLwBn9O5VkIHUsQU4EbgJ2BH8ue3A9cAa4F8F5tIn+D+c6nkXuBL4FXAu6T1Wh9F/Lr+Z9InCKCBpYG1+kd5VvkiXxpGBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKTAOG3BthQ4v/YQHXE3Y7Lb7jgFsj9wZ+0hOuIgxiQQn2JJgXF6BHkbuKj2EB2xvfYApYxTIO8Df649hEaLT7GkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApMA47TDVViuBbwEnAYf2fu1VYDNwP/BOpbnUUZPAFPBw5TlmsxL4DbCLNO9n3XYCt5J26G2zx0nzbqs9iGY3CoF8DXiFzw/jk7cXga9WmbSZzgbia5Dyjgc2Al8e4JgjgUeA1cMYSJ/PQMpaDvyFuT1lWtk7dknWiRQykLKuAI6ex/GrgR9mmkUNGEg5i4EfZFjncmBhhnXUgIGUsx44KMM6hwFrM6yjBgyknDUtXUsBAynn4Ixrrcq4lgIGUs6ejGvtzriWAgZSzn8yrvVSxrUUMJByNrV0LQUMpJytwDMZ1nmC9NYTFWAgZf0ywxrXZlhDDRlIWfcCf5rH8X8AHso0ixowkLKmgO8Bj83h2I3A9/OOo9kYSHk7gHOA3w5wzB3AuaTPjkjzMgqfB5k2AdwD/J9PfwbkA9K7d9dVm665zn4exI/c1vUEsAFYAZxIep/V9Bfas6RHG1VkIO3wHum7sFrG1yBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkQBcDmao9wBjr3LnvYiDTWwQsqzrFeFnRu99ZdYoh6GIgr/Tuj6Gbf7+2WQQc3fvxyzUHGYYufgFt7t1/kbT/hobrTGB578dP1RxEzZxCfxOav1aeZRw8QP98r6k8ixp6iv5F21B5li67mP55frTyLBrAemAv6cK9B5xRd5xO+iZpB6wpYA+wtu44GtTVfHy/v58CS6pO1A3LgJ8Du+mf3x9XnWiIFtQeYMhuAa6Y8fM3gLtIewNOkh5lNLtFwCrgVOBC4MAZv3cD6ZuPRtSlwFt8ehdZb/O7/Q/4zgDXQS12IHAdaffY2l9Yo357GbgWOGCgKzCiuv4U67McCxxHusCLK88yKnaTHjGeA7ZWnkWSJEmSJI2jjwCyuIPElVrUVQAAAABJRU5ErkJggg=='];
var randomimgDom1 = randomDom[Math.floor(Math.random() * randomDom.length)];
var randomimgDom2 = randomDom[Math.floor(Math.random() * randomDom.length)];
        data.author_elem.css({
                  'font-weight': 'bold',
                  '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',                  'display': 'inline-block',
                  'vertical-align': 'middle'
              });
             data.author_elem.html(`<img id=dom1 style='`+rotater+`'></img><span id=dan1 style='color:yellow; font-size:`+danSize1+`px;'>amazing</span><span id=dan2 style='color:yellow; font-size:`+danSize2+`px;'>pikachu</span><span id=dan3 style='color:yellow; font-size:`+danSize3+`px;'>_37</span><img id=dom2 style='`+rotater+`'></img>`)
var elem = document.getElementById("dom1");
elem.setAttribute("src", randomimgDom1);
elem.setAttribute("height", "20");
elem.setAttribute("width", "20");
elem.src = randomimgDom1;
var elem2 = document.getElementById("dom2");
elem2.setAttribute("src", randomimgDom2);
elem2.setAttribute("height", "20");
elem2.setAttribute("width", "20");
elem2.src = randomimgDom2; 

//////////////////////////
////////////////////////// ADD DANR VARIABLE
//////////////////////////
 
} else if (pikarand == 39) {
var lonaSize = Math.floor(Math.random() * 16) + 5;
var lonaLeft = Math.floor(Math.random() * 20) + 1;
var lonaRight = Math.floor(Math.random() * 20) + 1;
var lonaLeftH = '';
var lonaRightH = '';
if (lonaLeft == 1) {
lonaLeftH = '<img id=lonaimg2></img>';
}
if (lonaRight == 1) {
lonaRightH = '<img id=lonaimg3></img>';
}
var lonaFlag = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAADB0lEQVQ4jX2U60+ScRTHf/+HoakUpqBtAdlkXhAhp5sXTHuTEylMR964+OAtL1zlYjZRX2Reatmcr1JarB5QECF7nGBmQ/+EfLj7TqAXD+NBp55933zOvmc7OzvnAIIEFix7svrghlmkYMRWMGJ7Motk9sGCJQ9BAjfN7TGgr2ga8TQjB00jJnWaTkLTiKBM62ww7rJ0zhLNDkPtYKgdFXon17jLmXSVaZ2lE0764PeQQhPWT53JNZgiiomw7k1EpQUdHzwP5fYXSx663M42uNgGV6HC/nzRTZPbBcse2rj9/qjt/Pw8fjGi0Wg8HgdZkKVv7SgbsjTP7xepHEUqx7N3+9lYUmZtXXCXD5tRMhUlU1EKDaXQ0Hx6AslUoDR5b0st4+venMHNxrm9hlmENGAdX/dmSC1K0zFpwEqRfAv3QphC4v6wCEoiIEhgnfkkXQp3fz4sUjkYakf3ymG6BNabT9KlsHj1D2fSFb8mgMJ0TJRZFBteoszKnUEaZhGizKo2eQkSWGE6zoIslJ4NX3mVj1npL67AVV7lY1WBu/1Wg/mENGDt+HjwSLldqNzuXjnIHbSOrXuzIUvnp9/MkR+BLnHwlSjEa8MUbBH4hb0hXhvgL7pzhzZ5C27y8BZn0lU5+TP/9RZvwZ03tMVfdOcNbT4Ys8XisdRuY7EEApbe1Ty/X6F31U7/YuqcTK2zZnqXpXc2z++zDa76GaRowByoaUyotilQ25REUGdERr9464yIePWo5b27ed4tXj3CkvVGBFr72zazgxfXPb1QfKmT6+JKAwjx2gLCngC/HZ+HQBjskoRaX6ZmAh1dOPLbg53ioEAIfMxKtKLaX8xOyses9FdzcSxho49rUg3+Uo6vmusv4YCbu705QLi3L6mQWJaKYREUFsluMAAfmYoJzadjq59A7AYuZSg0NJ+eLAFXThK7uNRRX/LEYrFoNAoiSm1kyhhR6/BbV+uCKhzP5JqwfipieIsblNqgWh+RawCaRjzNzE19Mf8y76Vi4gfduoPj7cRL+g9Ob/lTEzV1cwAAAABJRU5ErkJggg==';
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
               'vertical-align': 'middle',
                  'position': 'absolute',
                  'margin-left': '5px'
              });
             data.author_elem.html(lonaLeftH+`<span id=lonaname style='color:yellow; font-size:`+lonaSize+`px;'>/u/amazingpikachu_37</span><img id=lonaimg></img>`+lonaRightH)
//var elem = document.createElement("img");
var elem = document.getElementById("lonaimg");
elem.setAttribute("src", lonaFlag);
elem.setAttribute("height", lonaSize);
elem.setAttribute("width", lonaSize);
elem.style.position = "relative";
elem.style.marginLeft = "3px";
elem.style.marginBottom = "1px";
elem.style.verticalAlign = "bottom";
elem.src = lonaFlag;  
if (lonaLeft == 1) {
var elem2 = document.getElementById("lonaimg2");
elem2.setAttribute("src", lonaFlag);
elem2.setAttribute("height", lonaSize);
elem2.setAttribute("width", lonaSize);
elem2.style.position = "relative";
elem2.style.marginLeft = "3px";
elem2.style.marginBottom = "1px";
elem2.style.verticalAlign = "bottom";
elem2.src = lonaFlag;     
}  
if (lonaRight == 1) {
var elem3 = document.getElementById("lonaimg3");
elem3.setAttribute("src", lonaFlag);
elem3.setAttribute("height", lonaSize);
elem3.setAttribute("width", lonaSize);
elem3.style.position = "relative";
elem3.style.marginLeft = "3px";
elem3.style.marginBottom = "1px";
elem3.style.verticalAlign = "bottom";
elem3.src = lonaFlag;    
} 
} else if (pikarand == 40) {
 var whitheart = ['&#x1F49D', '&#x1F498', '&#x1F493', '&#x1F494', '&#x1F495', '&#x1F499', '&#x1F49A', '&#x1F49B', '&#x1F49C'];
var whitSize = Math.floor(Math.random() * 12) + 6;
var whitRandomName = Math.floor(Math.random() * 10) + 1;
whitheart = whitheart[Math.floor(Math.random() * whitheart.length)];
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
                  'vertical-align': 'middle'
              });
             data.author_elem.html(`<span id=totalwhit><span id=whitlessthan3></span><span id=whitname>amazingpikachu_37</span><span id=whitdash> - </span><span id=whitchu></span></span>`)
if (whitRandomName == 1) {
var whitnamer = ['/u/amazingpikachu_37', '/u/TOP_18', '/u/livecounting', '/u/bo3_borate', '/u/99999999999999999988'];
whitnamer = whitnamer[Math.floor(Math.random() * whitnamer.length)];
document.getElementById("whitname").innerHTML = whitnamer;
} else {
document.getElementById("whitname").innerHTML = "amazingpikachu_37";
}
 var pikachuchars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz1234567890-_";
// var pikachuvowels = aeiou";
 var pikachustring_length = Math.floor(Math.random() * 5) + 3;
 var pikachurandomstring = '';
 for (var i=0; i<pikachustring_length; i++) {
   var pikachurnum = Math.floor(Math.random() * pikachuchars.length);
  pikachurandomstring += pikachuchars.substring(pikachurnum,pikachurnum+1);
  var pikacheckvowel = pikachurandomstring.includes("a") || pikachurandomstring.includes("e") || pikachurandomstring.includes("i") || pikachurandomstring.includes("o") || pikachurandomstring.includes("u") || pikachurandomstring.includes("A") || pikachurandomstring.includes("E") || pikachurandomstring.includes("I") || pikachurandomstring.includes("O") || pikachurandomstring.includes("U");
  if ( pikacheckvowel == false) {
 pikachurandomstring = '';
 pikachustring_length = Math.floor(Math.random() * 5) + 3;
 i=0;
// pikachurnum = Math.floor(Math.random() * pikachuchars.length);
pikachurandomstring += pikachuchars.substring(pikachurnum,pikachurnum+1);
//pikacheckvowel = pikachurandomstring.includes("a") || pikachurandomstring.includes("e") || pikachurandomstring.includes("i") || pikachurandomstring.includes("o") || pikachurandomstring.includes("u") || pikachurandomstring.includes("A") || pikachurandomstring.includes("E") || pikachurandomstring.includes("I") || pikachurandomstring.includes("O") || pikachurandomstring.includes("U");
} 
  }

document.getElementById("whitname").style.cssText = 'color: transparent; background: linear-gradient(to right, #660033, #ff33cc); -webkit-background-clip: text!important;';			 
document.getElementById("whitchu").style.cssText = 'color: transparent; background: linear-gradient(to right, #660033, #ff33cc); -webkit-background-clip: text!important;';			 
document.getElementById("whitdash").style.cssText = 'color: black;';		 
document.getElementById("whitlessthan3").innerHTML = whitheart;
document.getElementById("whitchu").innerHTML = pikachurandomstring;
document.getElementById("totalwhit").style.cssText = 'font-size:'+whitSize+'px;';
} else if (pikarand == 'Lein') {
data.author_elem.css({
                  'font-weight': 'bold',
              });
data.author_elem.html(`<span style="color:yellow"><img id=dom1></img><span id=leinemoji1></span><span id=leinname>/u/amazingpikachu_37</span><span id=leinemoji2></span><img id=dom2></img></span>`)

if (count1testlol == '037') {
document.getElementById("leinemoji1").innerHTML = '';
document.getElementById("leinemoji2").innerHTML = '';
var pikapic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAACpUlEQVQ4jaXSy08aQRgAcP+O1kvTP8FDT+2h6Z/QQ5u0B6OmtjYi4Gt3TcXER5o2prWXNsYSTLRE6QFNxQcVFRYj72VfIALCLvJckF2oGNidHrZRQRON/TLJzPfl+2UmM9ME/iOaLiYUSUqSdBtcrVYftLSwLHsbbDGv/fz6LJuKXW4SRTGTyXAcJ6fZVCSdjNXhRNBYJGAulz2rnJyUU5Etxq+933zn3t1mO4oCAJjg7/KRKROz1mNqProLZxJYNo7mUkE2ZEl6NDwJz396+vjhIz+GiaIYw+eEwHjpYDLuen+OJUmKk/oyYyhGtEad6hiH0s6+gy11zDPt96ByQ9gzm8cGCxhUxCFmb6BWq/3DZtOCa32sSI+nXP0axZPoSjdjVUZ8hrNzhb2LjFXJ2lTJXXXa0cvi2nOMLmgOUeWsptU805mwqvbVL33fW2lzX6VSAQAk2VBsu4exKhmrMrgJpeO+utvGdF+y7n79WPv6596oReGYeH5g6opaFGwIlW8b3ximTG/CLt2fEt/4VGWed6+8i2x2B1a74zs9jFWJGjrxDXXINlqtVgEAhHPFYtA0vrMkSQHvEuOdPCaQvG8wYVfHd3oOtxS2hXZ67W0egwIeY5h2Ln17ZZobafh/TaIoujcmjpwDAo0UcKhEDxUJuOCHjhy9LKrK+wZzGOJGf+mnXgs837izPNVqNS6bjPoXS/SQPAQKKeIQT8ACCaNGZAp6YVqcuRrLkUvtlwLDAoXwBMwTsEAh8po0dU1/6AeXog7nubQQGBVoRKCQYz9UxCGBRFKOPoehI0i6rsGSJFE7H8MWxZ6hw740src8jOrb7Pq27R+d5XLpGgwAOD09ta1q1wyTclrgMl77sn6q7bK8AgMAKpWTJBO6WNknbDfFN4+/8UMXvJZoC5oAAAAASUVORK5CYII=';
var elem = document.getElementById("dom1");
elem.setAttribute("src", pikapic);
elem.setAttribute("height", "20");
elem.setAttribute("width", "20");
elem.src = pikapic;
var elem2 = document.getElementById("dom2");
elem2.setAttribute("src", pikapic);
elem2.setAttribute("height", "20");
elem2.setAttribute("width", "20");
elem2.src = pikapic;

} else if (count1testlol == '151') {
document.getElementById("leinemoji1").innerHTML = '&#x1F449';
document.getElementById("leinemoji2").innerHTML = '&#x1F311';
} else if (count1testlol == '369') {
document.getElementById("leinemoji1").innerHTML = '&#x1F4D5';
document.getElementById("leinemoji2").innerHTML = '&#x1F4D5';
} else if (count1testlol == '373') {
document.getElementById("leinemoji1").innerHTML = '&#x1F4A4';
document.getElementById("leinemoji2").innerHTML = '&#x2753';
} else if (count1testlol == '888') {
document.getElementById("leinemoji1").innerHTML = '&#x1F311';
document.getElementById("leinemoji2").innerHTML = '&#x1F4A5';
} else if (count1testlol == '777') {
document.getElementById("leinemoji1").innerHTML = '7️⃣';
document.getElementById("leinemoji2").innerHTML = '7️⃣';
} else if (count1testlol == '845') {
document.getElementById("leinemoji1").innerHTML = '';
document.getElementById("leinemoji2").innerHTML = '';
var pikapic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAB7UlEQVQ4jWP4jwMsW7bMCQbS09OxqmHAKjp37tz58+cvWbJkKgzMnDnz8ePHRGnOycmZM2fOtWvX9u/ff+HChYMHDyYmJu7cufPWjau3r51/ePviu9fPcGpGdvasWbNOnz597969nJwcV2s9L0OBLE+J9XOb8Wl+9uzZmTNnzpw509bWVlVVdebMmXXr1k1uya0Kk7FV553aVYtPMxwsXLiwtrpq6byphw7s27l25uxaX2M1yf5OvDYjg9vXznsZCmzfsPzKlSvHjh1zc3ObOXMmUZq7qlJCrMWzPCXstQQt9FXd3Nw+ffr0+/dvApo/f3y/al5fbYpdsouYj7FgVW7cxJ72mTNnQnQS0Pz88X0vQ4GyIOmKEBlNCY6jB/agKcCpedW8Pj8TwWwvCXtN3mBXC6xqsGteOKW5Ld8vw0PCQ5+/vjBp3YpFRGn+8P717WvnQ6zFk13EigPlg10tMF2LU/P2tfMhacjHWNDVTAOXNiyau6vTqhKsIGmoKjfuzMmjRGn+8vnj+eP7k7w04h1Fi/ylkkI9Vi2ei18nQjMkDaW7iweaCWlKcHz//p2gTqjmrqqUaHvJrkQFC2WemqJ0InVCNU+sTYyyFYlzEG2tyt25ZT2ROqGaZ7emxjmIakpwPLx/l3id////BwCDpdb/bbAXUwAAAABJRU5ErkJggg==';
var elem = document.getElementById("dom1");
elem.setAttribute("src", pikapic);
elem.setAttribute("height", "20");
elem.setAttribute("width", "20");
elem.src = pikapic;
var elem2 = document.getElementById("dom2");
elem2.setAttribute("src", pikapic);
elem2.setAttribute("height", "20");
elem2.setAttribute("width", "20");
elem2.src = pikapic;
} else if (count1testlol == '911') {
document.getElementById("leinemoji1").innerHTML = '&#x1F46E';
document.getElementById("leinemoji2").innerHTML = '&#x1F46E';
}

} else if (pikarand == 41) {
var mayberand = Math.floor((Math.random() * 2) + 1);
var notrand = Math.floor((Math.random() * 2) + 1);
var wrongrand = Math.floor((Math.random() * 2) + 1);
var colorrand = Math.floor((Math.random() * 2) + 1);
var okcolor = '#e02';
var okmaybe = 'amazing';
var oknot = 'pikachu';
var okwrong = '_37';
 if (mayberand == 1) {
      okmaybe = '';
}
if (notrand == 1) {
      oknot = '';
}
if (wrongrand == 1) {
      okwrong = '_38';
}

if (mayberand === 1) {
if (notrand === 2) {
if (wrongrand === 2) {
okcolor = '#0f4';
}}}

if (mayberand === 1 && notrand === 1 && wrongrand === 1) {
okcolor = '#0f4';
}
if (mayberand == 2) {
if (colorrand == 1) {
okcolor = '#0f4';
}
}

 data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'
              });
             data.author_elem.html(`<div style="color:`+okcolor+`;">`+okmaybe+oknot+okwrong+`</div>`)

} else if (pikarand == 42) {

var maybename = 'amazingpikachu_';
var mayberandom = (Math.floor(Math.random() * 1000) + 1000).toString().substring(1);
//This makes it so the random number can be "000" instead of just "0" I think. 
var maybecolor = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
maybename = maybename + mayberandom;
if (mayberandom == count1testlol) {
maybename = 'amazingpikachu_37';
} 
if (mayberandom == "037") {
maybecolor = '#066666';
}
 data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'
              });
data.author_elem.html(`<div style="color:`+maybecolor+`;">`+maybename+`</div>`)
data.author_elem.html(`<div style="color:`+maybecolor+`;">/u/`+maybename+`</div>`)

////////////////////
////////////////////PUT MAYBENAMES VARIABLE ON TOP!!!!!
////////////////////

} else if (pikarand == 43) {
var pikachurandomcolor = '#066666';
var visible = 0;
 var random1 = Math.floor((Math.random() * 2) + 1);
if (random1 == 1) {
random1 = 'a';
visible++;
}
var random2 = Math.floor((Math.random() * 2) + 1);
if (random2 == 1) {
random2 = 'm';
visible++;
}
var random3 = Math.floor((Math.random() * 2) + 1);
if (random3 == 1) {
random3 = 'a';
visible++;
}
var random4 = Math.floor((Math.random() * 2) + 1);
if (random4 == 1) {
random4 = 'z';
visible++;
}
var random5 = Math.floor((Math.random() * 2) + 1);
if (random5 == 1) {
random5 = 'i';
visible++;
}
var random6 = Math.floor((Math.random() * 2) + 1);
if (random6 == 1) {
random6 = 'n';
visible++;
}
var random7 = Math.floor((Math.random() * 2) + 1);
if (random7 == 1) {
random7 = 'g';
visible++;
}
var random8 = Math.floor((Math.random() * 2) + 1);
if (random8 == 1) {
random8 = 'p';
visible++;
}
var random9 = Math.floor((Math.random() * 2) + 1);
if (random9 == 1) {
random9 = 'i';
visible++;
}
var random10 = Math.floor((Math.random() * 2) + 1);
if (random10 == 1) {
random10 = 'k';
visible++;
}
var random11 = Math.floor((Math.random() * 2) + 1);
if (random11 == 1) {
random11 = 'a';
visible++;
}
var random12 = Math.floor((Math.random() * 2) + 1);
if (random12 == 1) {
random12 = 'c';
visible++;
}
var random13 = Math.floor((Math.random() * 2) + 1);
if (random13 == 1) {
random13 = 'h';
visible++;
} 
var random14 = Math.floor((Math.random() * 2) + 1);
if (random14 == 1) {
random14 = 'u';
visible++;
}
var random15 = Math.floor((Math.random() * 2) + 1);
if (random15 == 1) {
random15 = '_';
visible++;
}
var random16 = Math.floor((Math.random() * 2) + 1);
if (random16 == 1) {
random16 = '3';
visible++;
}
var random17 = Math.floor((Math.random() * 2) + 1);
if (random17 == 1) {
random17 = '7';
visible++;
}
if (visible == 1) {
pikachurandomcolor = '#000000';
} else if (visible == 2) {
pikachurandomcolor = '#2e7f7f';
} else if (visible == 3) {
pikachurandomcolor = '#011111';
} else if (visible == 4) {
pikachurandomcolor = '#579898';
} else if (visible == 5) {
pikachurandomcolor = '#022222';
} else if (visible == 6) {
pikachurandomcolor = '#80b1b1';
} else if (visible == 7) {
pikachurandomcolor = '#033333';
} else if (visible == 8) {
pikachurandomcolor = '#a9caca';
} else if (visible == 9) {
pikachurandomcolor = '#044444';
} else if (visible == 10) {
pikachurandomcolor = '#d2e3e3';
} else {
pikachurandomcolor = '#055555';
} 

var maybename = random1.toString() + random2 + random3 + random4 + random5 + random6 + random7 + random8 + random9 + random10 + random11 + random12 + random13 + random14 + random15 + random16 + random17;
maybename = maybename.replace(/0/g, '');
maybename = maybename.replace(/1/g, '');
maybename = maybename.replace(/2/g, '');
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'

              });
             data.author_elem.html(`<span style='color:` + pikachurandomcolor + `;'>/u/`+maybename+`</span>`)
} else if (pikarand == 44) {
var mars1 = Math.floor(Math.random() * 6) + 1;
var mars2 = Math.floor(Math.random() * 6) + 1;
var mars3 = Math.floor(Math.random() * 6) + 1;
var mars4 = Math.floor(Math.random() * 6) + 1;
var mars5 = Math.floor(Math.random() * 6) + 1;
var diceMars = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABNVJREFUeJztnctrHVUcxz8xt6A1bUjWWiJNahNKm0p8VBoXguu6CFSLKaWPjYt24V4siJZuVFCIWFy4UXFRzF9QGmlXtdBFSGmeVJd9QJ82yb0ufrk0zPzOvfM4c+fMzPnAgfBj7u/85jvnznncc34Bj8fj8SSlKwOfg8A4MLzxdz/QA9QyqCsOq8Aj4C5wC5gFZoDFPIMysRs4BywBjYKVReArYJd1VRIwBkwDdfIXJm2pAxeB/VYVikg/cIFyCBks68AU0GdNrTaMA/9keEOulBXgnbjixO2UTgA/At0Rrr2PvPhvAw+QJ58nNaRz3AGMAL0RPrMKnAR+ySKgz2j/VBeAz4F9ZDOCsMULyLvyLO070jpw2nYAJ9pUOg8c3gi0aHQDR2gtbB2YtFXhQWCtRUXngRdtVZYjLwHfYBb1GfB22kr6MXdAj4FDaStwkAngKfo9LxPt3WvkgsHxY+C9NI4d533Mon6f1OkY+jizTjlbZpAJzOPUvUkcThscnrcQbFH4Dl2DP+I62o3eOucpRwcUla3IAF9rpTvjODqnOGkgQ6OqMYmuxRdxnCwrDhYo5jgzLTX0VjoX1cGg8uEGMgOqKl+ia/JK8EKtxY0bnP5pK7oCMm2wh4aOmqDDiu0+cCNNRAXnGvBQsY8EDZqgg4ptFmniVWUduKnYh4IGTdB+xXY7bUQlYEWxhRahNUF7FNuD1OEUH02DbUGDJqj262Tei8MusKbYtgQNVRxXZooX1DJeUMt4QS3jBbWMF9QyXlDLeEEt4wW1TN57NtvRBYxulAZwHVn1cnahxmVB9wA/A28G7FeB48RYMe8krn7l9wB/ERYT4ABwBfkh0TlcFLQLaZmtdmj0AT91Jpx4uCjoKHrLDHIQZcU8b1wVNCq5bN9uhYuCxunBnevtXRT0eoxr/84sioS4KOgNZGjUjks4OHRyUdAGMs681+KaO8CpzoQTDxcFBWl57yJj0SCXkNMZ850MKCouz5TmkF0sI0hv3kDemc59zTfjsqBNZjdKIXD1K19YvKCW8YJaxgtqGS+oZbyglvGCWsYLahkvqGU0QVcVWxFmVFmjaRDSShP0kWLTdjVXjdBuZZRdzZqgdxXbjtThFJ8BxRbSShP0lmIbMVxbFbqB1xV7SCtNJG1lpxfJI1JVxoCXFXtIK03QGYPTD9NEVHBM9345qoNFwucal4iWXqhs1JBzWkE91DVa03vxN8U2QDWPd3+CckgWXSMju9ATECwh2WOqQg9661wHXovr7KLiqIGk4qkKP6Br8HsSZ28gT0JzOGEhWNc5gn7va8juwERMGZw+QVLxlJUPgP/Q7/3bNI770NNDNEUtY0v9GLOYC8D2tBUcQNKUaRU0n9jWtJU4QA/md2YDEXnMVmVHaZ18dRnJHlPEVakacAy9N2+WOvCR7YrP0D6j7QqS8OQt3J4EdCOJAb+mtZBNMT+N6jhujs+jSD680DlxhYdIWokVZJlLO2/eSWrIEtwAstChzc2DPENa76+ZRYU82WVaP9UylAUsvjPb0YtkKTSNU4tc1pCONnVvnoS9SGK9Mgi7jszPEw/abbITyQU3R/7CxC2zSNa02HNzjSwST7/K832dQ8jkYBvROrIsWUU6x83/uuIy8G+eQXk8Ho/nOf8DrPgdcftcrBsAAAAASUVORK5CYII=','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABVNJREFUeJztnd9rXEUUxz91N2Bqaknw0ZRoY61BUtTQarE+CILggxXjjwZblfrkg+IPUAqKStESH1pRoUKffPEXppA/odW3gigYqm2SDdWiD/6gtZvaTXZ9OF1a757Znbk7N/dH5gMDZTL3nLnfO3dm7uzMKQQCgUAgLmsSsDkM7ABuu/zvAaAPKCfgy4UacAH4EzgFzADHgbk0K2ViM3AAmAcaOUtzwLvAJu+qxGAMmAbqpC9Mt6kOHAXu8KqQJQPAEYohZDQtA4eBfm9qdWAH8EuCN5SVtADc7SqO66C0F/gEKFmU/Rvp+M8A55EnnyZlZHDcAIwA6y2uqQHPAZ8mUaFX6PxUZ4E3gS0kM4PwxTVIX/k2nQfSOvCC7wrs7eD0NPDE5YrmjRIwQXth68BuXw7vBZbaOJoErvXlLEV6gYOYRb0EbOvWyQDmAagKPNytgwwyDlxEv+cKdn2vkSMGw1Xgvm4MZ5z7MYv6UVyjY+jzzDrFbJlRxjHPU0fjGJw2GJz0UNm88AG6Bl+5GtqM3jpPU4wByJa1yARfa6UbXQwdUIw0kKnRamM3uhZvuRipKAZmyec8s1vK6K30pK2BYeXiBvIF5Mog8DKy2HAQeBToiWEnbfaja3KjzcXPGi7e4lCBNcA+ZDIctfOTo60ssBVdkwmbiyeVC//C7dt8n6ECzfQHMORgL21KyAJP9D7221w8pVz4rYPzQfSWGU1fONjMAiewuAdtkBlQ8s44OH4Mu37yEWRakhcWlLyWRWhN0D4l77yDY9vfZnqAmxzspo2mwbpohiao9uuky+LwokPZqkPZtFlS8lrexCTmld9YljuLzHcLRRKCTgM/W5R7H+nYC0USgtaAx5ENBSamgA8T8J06SX1Kfg/cBXyJCNzkLPASInjaP9olQpLbYyrIYspaZDSvcmWNoLCsxH6jKvDjCvjJBKtx9ShRgqCeCYJ6JgjqmSCoZ4KgngmCeiYI6pkgqGeCoJ4JgnomCOqZIKhngqCeCYJ6JgjqmSCoZ4KgngmCeibtM+wrQQnZ89qLHOU+l6SzIrfQHuAN4Ddkt/F3yF6BKeDmpJwWVdAeZAfLO8ANV+WXkF1/J4h5NKYTRRX0deDBNn/vRzZheO/yiihoCbvTw7cCD/l2XkRBh/n/a96O7b6da4LWlLw8zQZ6EyqradCilSboBSVP29WcVeaw34hmfdYIZbcyyq5mTVBtG+IGB8dpcw4Z4TtxEfjawe6QkteilSboKSVvxFA2q7yKHAVqx2vA75b2SsggFkXTqoWn0Y/BpBLPqAtGkVc6eh+LyCzA5dzVNsVOA9gVLah1tMcNRnciXxt54QfgdmRqtB0ZgE4ir7lty2yy05B/zNbAHK1PYx678EJFo4yc04rqMaMVNvWLnyt5Q6zO491PoR+S1TQysgk9AME8bnO3vNOH3jqXiXFo7ahiqIEc014tfIzHc6p3Ik9CMzjuobJZZwL93peQwS4Whw1GF5FQPEXlAeBf9Hs/1I3hfvTwEE1Ri9hSd2EWcxa4vlsH99D+/Psh8nVM20Qf5j6zgYg85svZHtoHX60g0WPytCrVpAw8gz6aN1MdeNK34xfpHNF2AQkbsZVsfwSUkM/J92gvZFPM520Nu8b43IPEw7OJ2PAPErBlAVnm0s6bryRlZAluCFnouM7imktI6/0ssVohT7ZC55gieU+zeOwzO7EeiVJomqfmOS0hA23Xo3kcRpHAekUQdhn5Po89affJRiQWnLb+mPU0g0RN8xJQJonA04NIaPYR4Bbk42Ad6YdoqyGD49X/dcUx4Nc0KxUIBAKBK/wHKO9wR2pX8pQAAAAASUVORK5CYII=','data:image/png;base64,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','data:image/png;base64,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','data:image/png;base64,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','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAB15JREFUeJztnWtsVEUUgD/YVh4WaxtiQiJY3lgJKBBeEWKMRI0SUECFCD7wlz80hGAIROMrivjCqAkmROMjihBqrD/85R9A4g8iSoRQoaUNiBoElUcLfez642yl3D337szuzG673C+5gVzmnjN77tyZM2fODBATExMTkyv9PMgcA8wBbkz/vRqoAMo86LKhAzgPnAYOAweBXUBTMSsVxgRgA3AUSPWxqwl4BRjn3Co5MA2oB5IU3zD5XkngK+AWpxYypBrYQmkYMnh1AZuBKmfWysIc4LjHH9RbrhZgpq1xbAellcAHQMKg7D9Ix38MOIu8+WJShgyOI4BaoNLgmQ7gCeATHxVaTfa32gg8B0zGjwfhiv5IX/kC2QfSJPCU6wqszKL0CPBguqJ9jQSwjGjDJoHlrhTeCnRGKNoIDHSlrIgMAt4m3KjtwIx8lVQTPgC1AgvyVdALWQxcQP/NzZj1vaFsCRHcCszNR3Av53bCjfperkKnofuZSUqzZQZZTLifOikXgfUhAjc6qGxf4R10G2y3FTQBvXUeoTQGIFMGIw6+1kpH2wjaoAhJIa7RlcZydFs8byOkWRHQSN/0M/OlDL2VHgorHGQMcINy/2OkG7BhOLAECY21AbuRvrnDUk6uDEAG0FmIn9mA9H/HLWR0Ap8C6wP3xwPXm8h6DL2JT7aoRD9gHeIMB+U0WMrKlanIVxXUfxFYg93UeLoiJ4XMsLKyUXnwb8sKrAupQPd1CqixkGfLWCQ4E1WH1RbyEkiAJyjjZZOH65QHv7dQPhy9ZQavLy1k2vK1gf4LwDALmXsVGRm/QRtkqpV7xywULwHKDcrdh7glrqkE7jUoNwBYZCG3RbmXEYTWDFqh3Dtrodh0baYcGGkh15SRmHsj4y3kajYYEryhKdZGfpvgcJtF2VaLssXW36ncy/gSffiVuw3LnUD8XdccAU4aljWtqzE+DFoP/GpQ7nWkY3dNF/CWQbkDwLeulfswaAfwAJJQEEYd8K4H3d28AXwT8e9/IdNo7TPOC19TyZ8Rx3obl8+KTgCrEIP7XLTrBO4HngF+73G/HdgKTEFaaEH4iUx/a3Me8gYDNyGjbzEW7vqnddeSn5umBdv3BgsVIt+olQK2BoUksgBXEK7E6JFXYoM6JjaoY3z3oWXAbC7FQ/dQwP4szSguj4fuocBpQa5G+bvRI//bgKEuKpqF65D0RG3lYV4O8oxGeQ0XBl2EtIKw0NkB4BpLmTZUI60xTH8nMN9SppFBffSh16aVR8muBV70oLubbBnJCeBDlGhRvvgw6BLEqNl4HLO4qS0DgRUG5YYiMVmn+DDozYblhiADhmvGIgOQCc7Tv30Y1CaC5CPaVFT9Pgy6z7Dcv/hxoQ5jHjj+0bVyHwbdjqxqZmMLftbnLwIfGZT7E3GrnOLDoGeQASfKed6PZSqLJeuR/P4wOpH8g/OuFfuaetYDdyLLET1JAZ8BtwHnPOkG6U7moi9VNwB34CFaD36nnt8hq4rT03+2ItO+3zzq7Mkp4CEkS2QmMvIfQpxx25QiY3zP5ZPAD+mrWBzDLq8gL+Jok2NigzomNqhjCrGmVIkskrUho36htygmkJzXQchW7jM+lflsoWORLLjTyOzpELKku5bCvMhy4Fngj7Tufem61OEnhhCKi3joVKLzM+vxa9RyxM8M038a+60xRYuHXoVE5aN2nM1HEh58sRa4K+Lfq5A6On+pPgy6ALNPapUn/QnMdg+PB+5xrdzHD5ptWG4Y+uaIfBmD+ZqVaV2N0QyqRYBsPg3T4K5t2WLr12yQYSvNoFoERstqDqPBsFw7fvJDmzB3zdS9RiFo608ZWc2aQbU0xBEWircjxspGHX4ymM8gXkQ2LgA7LOTWKPeiUjb/5zUy3YN/sOtv1ygyel4nkd0ivhiF/NioOtgce5FAwo1BGS+ZPPxISAVsFrT6IfuAtD3nvyDpjb6ZhHzSQf1tiDFtUitnKHJSwNJgQa2j3RUidCHm60Up4E3gcyTpoTseuhtxuJ1nDivsByYirtFsLsVDdyDLHzYsDLm/01RAE5lv4yhmxwuVGmVIPDVoD3WJJaxf3Krcq+HK3N79MLJJNohmo1DGoR9AcBQ/vmNvpQK9dXaRw6Y1LXMthRzFc6XwProNctqnOoXwDLrFDirb21lGeObexFyFbg4R2oYcxVOqzEMSJrTfvikfwVXox0N0G7UUW+pSwo3ZiIO81llE73/fhJ9t2oWmgvA+M4UYeZorZSuIPny1GTk9ptjnLOdCGfAo+mjefSWRpAmnPE32E21bkGMjptO7JwEJZDr5KtGG7Dbmk6aCbbcKrkDWVkwyj88hobwWJMxViOlmFGVICK4GmQpfbfBMO9J6v/BWK+TNNhP9VkvhasRhn5mNSuSUwqidHn316kQGWp+7VEKZhASUS8GwXcj8PGen3SWjkQRaLf7Y26+DyLnRTg6U8bF/fThyNHstkj1ShQwGPrbQ2NCBDI49/+uKnRQuXzUmJiYmJgv/AVjtVzMrBrPFAAAAAElFTkSuQmCC'];
var randomimgMars1 = diceMars[mars1 - 1];
var randomimgMars2 = diceMars[mars2 - 1];
var randomimgMars3 = diceMars[mars3 - 1];
var randomimgMars4 = diceMars[mars4 - 1];
var randomimgMars5 = diceMars[mars5 - 1];
var marstotal = [mars1, mars2, mars3, mars4, mars5];
marstotal.sort();
marstotal = marstotal.join("");
var marsy1 = marstotal.replace(/[^1]/g, "").length.toString();
var marsy2 = marstotal.replace(/[^2]/g, "").length.toString();
var marsy3 = marstotal.replace(/[^3]/g, "").length.toString();
var marsy4 = marstotal.replace(/[^4]/g, "").length.toString();
var marsy5 = marstotal.replace(/[^5]/g, "").length.toString();
var marsy6 = marstotal.replace(/[^6]/g, "").length.toString();
var marsytotal = marsy1 + marsy2 + marsy3 + marsy4 + marsy5 + marsy6;
var marscolor = '#A9A9A9';
var marsname = '🎲/u/Spectrum🎲 ';

if (marsytotal.match(/5/)) {
marscolor = '#FF8C00';
marsname = '🔥/u/YAHTZEE!🔥 ';
} else if (marsytotal.match(/20*3|30*2/)) {
marscolor = '#FF4500';
marsname = '💥/u/FullHouse💥 ';
} else if (marsytotal.match(/1{5}/)) {
marscolor = '#FFD700';
marsname = '🌕/u/LongStraight🌕 ';
} else if (marsytotal.match(/[12]{4}/)) {
marscolor = '#CFB53B';
marsname = '🌙/u/ShortStraight🌙 ';
} else if (marsytotal.match(/4/)) {
marscolor = '#9370DB';
marsname = '🎶/u/FourOfAKind🎶 ';
} else if (marsytotal.match(/3/)) {
marscolor = '#8A2BE2';
marsname = '🎵/u/ThreeOfAKind🎵 ';
} else if (marsytotal.match(/2[013]*2/)) {
marscolor = '#87CEFA';
marsname = '💠/u/TwoPair💠 ';
} else if (marsytotal.match(/2/)) {
marscolor = '#ADD8E6';
marsname = '🔹/u/Pair🔹 ';
}


 data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'
              });
data.author_elem.html(`<div style="color:`+marscolor+`;">`+marsname+`<img id=mas1></img><img id=mas2></img><img id=mas3></img><img id=mas4></img><img id=mas5></img></div>`)
document.getElementById("mas1").setAttribute("src", randomimgMars1);
document.getElementById("mas1").setAttribute("height", "24");
document.getElementById("mas1").setAttribute("width", "24");
document.getElementById("mas2").setAttribute("src", randomimgMars2);
document.getElementById("mas2").setAttribute("height", "24");
document.getElementById("mas2").setAttribute("width", "24");
document.getElementById("mas3").setAttribute("src", randomimgMars3);
document.getElementById("mas3").setAttribute("height", "24");
document.getElementById("mas3").setAttribute("width", "24");
document.getElementById("mas4").setAttribute("src", randomimgMars4);
document.getElementById("mas4").setAttribute("height", "24");
document.getElementById("mas4").setAttribute("width", "24");
document.getElementById("mas5").setAttribute("src", randomimgMars5);
document.getElementById("mas5").setAttribute("height", "24");
document.getElementById("mas5").setAttribute("width", "24");
} else if (pikarand == 45) {
var marscolor = '#8B0000';
 var visibley = Math.floor((Math.random() * 9) + 1);
var marsname = '💔/u/amazingpikachu_38💔';
if (visibley == 2) {
marsname = '🌌/u/amazingpikachu_37🌌';
marscolor = '#4169E1';
} else if (visibley == 3) {
marsname = '🌑/u/bo3_borate🌑';
marscolor = '#808080';
} else if (visibley == 4) {
marsname = '💠/u/livecounting💠';
marscolor = '#87CEFA';
} else if (visibley == 5) {
marsname = '🍬/u/TOP_18🍬';
marscolor = '#FF5555';
} else if (visibley == 6) {
marsname = '🍥/u/99999999999999999988🍥';
marscolor = '#DCDCDC';
} else if (visibley == 7) {
marsname = '🖤/u/TOP_22🖤';
marscolor = '#3C3C3C';
} else if (visibley == 8) {
marsname = '💜/u/Iamslow37💜';
marscolor = '#8A2BE2';
} else if (visibley == 9) {
marsname = '💚/u/amazingpikachu_39💚';
marscolor = '#32CD32';
} 

        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'

              });
             data.author_elem.html(`<span style='color:` + marscolor+ `;'>`+marsname+`</span>`)
} else if (pikarand == 46) {
var pikacolor = '#ffff00';
var entirepost = data.body_elem.html();
var entireposttext = data.body_elem.text();
//    var count1testlol = data.body_elem.text();
var count1testlol = entireposttext.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
   var count2testlol = count1testlol.replace(/,/g, '');
    count2testlol = count2testlol.replace(/ /g, '');
    count2testlol = count2testlol.replace(/\./g, '');

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
          var demipunoyletra = teenviopoemas / 1000;
demipunoyletra = Math.round( demipunoyletra * 10 ) / 10;
           demipunoyletra = demipunoyletra / 10;
demipunoyletra = Math.round(demipunoyletra);



//var demipunoyletra = data.author_elem.parent().prev().attr('href');

if (count2testlol.length > 7) {
if (demipunoyletra <= -500 || demipunoyletra == 37) {
entirepost = entirepost.replace(entireposttext.substring(0, 10),`<span id="rainbowtext" style="color: #ffff00;">`+count1testlol+`</span>`);
} else {
entirepost = entirepost.replace(entireposttext.substring(0, 10),`<span id="rainbowtext" style="color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;">`+count1testlol+`</span>`);
}
      } 
data.body_elem.html(entirepost);
//data.body_elem.css('color','transparent').css('background','linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)').css('-webkit-background-clip','text');
 data.author_elem.css({
                  'display': 'inline-block',
                  'font-weight': 'initial'
              });
data.author_elem.html(`<div style="color:`+pikacolor+`;">/u/amazingpikachu_37</div>`)
} else if (pikarand == 47) {
var flake1;
var flake2;
rotater = rotater + 12;
if (flakecount == 1) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 2) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 3) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 4) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 5) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 6) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 7) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount++;
} else if (flakecount == 8) {
flake1 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flake2 = `<span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span><span class=azsenatorjeff  style="display: inline-block; -moz-transform: rotate(`+rotater+`deg);-o-transform:rotate(`+rotater+`deg);-webkit-transform:rotate(`+rotater+`deg);">❄️</span>`;
flakecount = 1;
}

 data.author_elem.css({
                 'font-weight': 'bold',
                 '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:yellow;">`+flake1+`/u/amazingpikachu_37`+flake2+`</div>`)
} else if (pikarand == 48) {
var takenname = '🎃🎃🎃amazingpikachu_37🎃🎃🎃';
var takencolor = '#ff9100';

  var count1text = data.body_elem.text();
if (count1text.includes("spook")) {
takenname = '👻👻👻SPOOK👻👻👻';
takencolor = '#000000';
}

 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenname+`</div>`)
} else if (pikarand == 49) {
var marsname = ['/u/dicecharlie1230000ff', '/u/lamepikachu_38ffff00', '/u/BOTTOM_20ff00bf', '/u/DanielKnife520063', '/u/Chalupa_Sonf08080', '/u/Dumbstocks840d0d', '/u/QuestoGal800080', '/u/Lonadoa35252', '/u/EverybodyL0vesMe730099', '/u/TranquilsundownFFA500', '/u/AngelBurritoDog890003', '/u/CertainlyNotRight066666', '/u/Iamslow3600BFFF', '/u/Pathetic_Bear4682B4', '/u/ItzAvailable32ff95', '/u/LiquidGoldMagikarp008080'];
marsname = marsname[Math.floor(Math.random() * marsname.length)];
var marscolor = '#' + marsname.substr(-6);
marsname = marsname.slice(0, -6);


 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:`+marscolor+`;">`+marsname+`</div>`)
} else if (pikarand == 50) {
count1testlol = count1testlol.slice(0, -3);
var takenname = 'HMM';
var takenname2 = '🎃🎃';
var takencolor = '#ff9100';


var extram = count1testlol.substr(count1testlol.length - 1);
var extrams = 'M'.repeat(extram);

if (count1testlol == '666' || count1text.includes("spook")) {
takenname = 'SPOOK';
takenname2 = '👻👻👻';
takencolor = '#000000';
var extrams = '';
}

if (count1text.includes("hm") || count1text.includes("HM") || count1text.includes("Hm") || count1text.includes("hM") ) {
count1text = count1text.toLowerCase();
takenname = count1text.match(/\bh[m]*/i);
takenname = takenname.toString();
takenname = takenname.toUpperCase();
var extrams = '';
}

if (count1testlol == '999' || count1testlol == '000') {
takenname = 'h<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m<sup>m</sup></sup></sup></sup></sup></sup></sup></sup></sup></sup></sup></sup></sup></sup>';
var extrams = '';
}

 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenname2+takenname+extrams+takenname2+`</div>`)
} else if (pikarand == 51) {
var uchance = Math.floor(Math.random() * 100) + 1;
if (uchance <= 7) {uchance = '/ u / ';} else {uchance = '';}
var gordoncolor = ['#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#00ff00', '#ff00ff']
        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block'

              });
             data.author_elem.html(`<span style="color:red;">`+uchance+` </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">a </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">m </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">a </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">z </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">i </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">n </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">g </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">p </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">i </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">k </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">a </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">c </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">h </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">u </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">_ </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">3 </span><span style="color:` + gordoncolor[(Math.floor(Math.random() * gordoncolor.length))] + `;">7 </span>`);

} else if (pikarand == 52) {
 data.author_elem.css({
                 '-moz-transform': 'rotate(-180deg)',
                 '-o-transform': 'rotate(-180deg)',
                 '-webkit-transform': 'rotate(-180deg)',
                 'transform': 'rotate(-180deg)',
                 'display': 'inline-block'
              });
data.author_elem.html(`<div style="color:yellow;">/u/amazingpikachu_37</div>`)


} else if (pikarand == 53) {
var nextname = data.author_elem.parent().parent().next().find('.body > .author').attr('href');
nextname = nextname.toUpperCase();
nextname = nextname.trim().replace('/USER/', '');


var takenname = 'HI ';
var takenname2 = '👋';
var takencolor = 'yellow';
var takenspooky = '';

  var count1testlol = data.body_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
count1testlol = count1testlol.substr(count1testlol.length - 3);


if (count1testlol == '666' || count1text.includes("spook")) {
takenspooky = 'SPOOKY '
takenname2 = '👻👻👻';
takencolor = '#000000';
}

if (count1testlol == '666' && count1text.includes("spook")) {
takenspooky = 'SPOOK'
takenname2 = '👻👻👻';
takencolor = '#000000';
nextname = '';
takenname = '';
}


 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenname2+takenname+takenspooky+nextname+takenname2+`</div>`)           

} else if (pikarand == 54) {
var conty = Math.floor(Math.random() * 10) + 1;
            data.author_elem.css({
                'font-weight': 'bold',
                'display': 'inline-block',
                'vertical-align': 'middle'
                }); 
            if (conty==1){
                data.author_elem.html('🌑💥<span style="color:#515A5A">/u/amazingpikachu_37</span>💥🌑');
            } else{
                data.author_elem.html('💔🖤<span style="color:#515A5A">/u/amazingpikachu_38</span>🖤💔');
            }
} else if (pikarand == 'Record') {
data.author_elem.css({
                    'letter-spacing': '2px',
                    'font-weight': 'bold',
                });
            data.author_elem.html('<span style="color:#FFFF00">/u/amazingpikachu_37 will get the record back<span>');
} else {
data.author_elem.css({
                 'display': 'inline-block'
});
data.author_elem.html(`<div style="color:grey;">Ok rideride messsed up lol</div>`);
}
} // Ending to pika name	

} // SpecialUsernamesEnabled2 ending	
	// /u/NobodyL0vesMe username special
if (SpecialUsernamesEnabled3 == 'yep lol') {
if (data.author == kname3) {
var marscolor = '#616161';
var entirepost = data.body_elem.html();
var entireposttext = data.body_elem.text();
var count1testlol = entireposttext.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
var count2testlol = count1testlol.replace(/,/g, '');
    count2testlol = count2testlol.replace(/ /g, '');
    count2testlol = count2testlol.replace(/\./g, '');
var count3testlol = count2testlol.replace(/[^8]/g, "").length;
var textcolor;

if (count2testlol.length > 7) {
if (count3testlol == 1) {
textcolor = '#D1C4E9';
} else if (count3testlol == 2) {
textcolor = '#B39DDB';
} else if (count3testlol == 3) {
textcolor = '#9575CD';
} else if (count3testlol == 4) {
textcolor = '#7E57C2';
} else if (count3testlol > 4) {
textcolor = 'transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';
} else {
textcolor = '';
}

entirepost = entirepost.replace(entireposttext.substring(0, count1testlol.length),`<span id="rainbowtext" style="color: `+textcolor+`;">`+count1testlol+`</span>`);
      } 
data.body_elem.html(entirepost);
 data.author_elem.css({
                  'display': 'inline-block',
                  'font-weight': 'bold'
              });
data.author_elem.html(`<div style="color:`+marscolor+`;">🖤/u/NobodyL0vesMe🖤</div>`)
} 
} // SpecialUsernamesEnabled3 ending	
// /u/noduorg username special
    if (SpecialUsernamesEnabled4 == 'yep lol') {
if (data.author == kname4) {
//var nodutime = new Date().getTime();
var nodutime = new Date();
nodutime = nodutime.getUTCHours();
var noduname = ' n o d u o r g ';
var noduemoji = '💎💎';
var noduprst = Math.floor(Math.random() * 400) + 1;
if (noduprst == 1) {
noduname = ' n o d p r s t ';
} else if (noduprst == 2) {
noduname = ' n o p r s t g ';
} else if (noduprst == 3) {
noduname = ' n p r s t r g ';
} else if (noduprst == 4) {
noduname = ' p r s t o r g ';
}
 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block',
                 'font-family': 'Arial',
                 'text-decoration': 'underline',
                 'font-size': '15px'
              });

if (nodutime < 5) {
noduemoji = '💤💤';
} 

data.author_elem.html(`<span>`+noduemoji+`</span><span style="color:#0d2d89;font-style:italic;">`+noduname+`</span><span>`+noduemoji+`</span>`);
           
}    
} // SpecialUsernamesEnabled4 ending		
	    // /u/treje username special
    if (SpecialUsernamesEnabled5 == 'yep lol') {
if (data.author == kname5) {

var testArray = ['t','r','e','j','e'];
Shuffle(testArray);

        data.author_elem.css({
                  'font-weight': 'bold',
                  'display': 'inline-block',
'font-size': '15px'
              });

             data.author_elem.html(`<div style='color:#ffc130'>¡<span id=shuffled>`+testArray.join("")+`</span>!</div>`)
	var testArray2 = testArray.join("");
if (testArray2 == 'treje') {
             data.author_elem.html(`<span id="rainbowtext" style="color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;">¡ t r e j e !</span>`);
}
}
} // SpecialUsernamesEnabled5 ending	
	    
	    	    // /u/ItzTaken username special
    if (SpecialUsernamesEnabled6 == 'yep lol') {
if (data.author == kname6) {
	var takenname = 'im running to ';
var takencolor = '#32ff95';
var takenemoji = '🏃‍';

  var count1testlol = data.body_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
if (count1testlol.length == 6) {
count1testlol = count1testlol.substr(count1testlol.length - 1);
} else {
count1testlol = count1testlol.substr(count1testlol.length - 3);
}
var count1testlolnext = count1testlol.substring(0,1);
count1testlolnext = parseInt(count1testlolnext);
count1testlolnext++;
count1testlolnext = count1testlolnext.toString();
count1testlolnext = count1testlolnext + "00";
if (isNaN(count1testlolnext)) {
count1testlolnext = "∞";
}
if (count1testlol == '666' || count1text.includes("spook")) {
takenemoji = '👻👻👻';
takencolor = '#000000';
count1testlolnext = "666";
}

if (count1testlol == '666' && count1text.includes("spook")) {
takenname = 'SPOOK';
count1testlolnext = "";
}

 data.author_elem.css({
                 'font-weight': 'bold',
                 'display': 'inline-block'
              });

data.author_elem.html(`<div style="color:`+takencolor+`;">`+takenemoji+takenname+count1testlolnext+takenemoji+`</div>`)
	
}
} // SpecialUsernamesEnabled6 ending	
        // Set username colour
        if (!userColors.hasOwnProperty(data.author)) {
            userColors[data.author] = colors[currentColor];
            currentColor++;
            if (currentColor == colors.length) {
                currentColor = 0;
            }
        }
        data.author_elem.css('color', userColors[data.author]);
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
/*
//////////////////////////
// TeamBars.ts //
//////////////////////////
var TeamBars;
var TeamBarsEnabled;
(function (TeamBars) {
    // Options
    var enabled = true;
    var $checkbox = Options.addCheckbox({
        label: 'TEAM BARS',
        section: 'Advanced',
        "default": true,
        help: 'Enable or disable the team bars.',
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
checky = `<div id="commacount"></div><div id="noncommacount"></div>`;
hmmyy = data;
checky2 = data;
checky2 = checky2.replace(/[0-9]+/g, '');
if (checky != checky2) {
alert('Something has gone wrong in the verification of the data. Please PM /u/rideride. To stop showing this message, disable the option for now until it is fixed');
} else {
$("<div id=loadtest></div><div id=teamdisplay><div id=team1>Team Commas</div><div id=team1count></div><div id=team2count></div><div id=team2>Team Noncommas</div></div>").insertBefore("#liveupdate-description");
document.getElementById('loadtest').innerHTML = hmmyy;
$("#loadtest").css('display','none');
var commacounts = parseInt(document.getElementById('commacount').innerHTML);
var noncommacounts = parseInt(document.getElementById('noncommacount').innerHTML);
var totalcounts = commacounts + noncommacounts;
var commapercent = (commacounts / totalcounts) * 100;
commapercent = Math.round( commapercent * 10 ) / 10;
var noncommapercent = (noncommacounts / totalcounts) * 100;
noncommapercent = Math.round( noncommapercent * 10 ) / 10;
document.getElementById('team1count').innerHTML = commacounts;
document.getElementById('team2count').innerHTML = noncommacounts;
$("#teamdisplay").css('display','flex').css('font-size','14px');
$("#team1count").css('flex',commapercent + '0 1 0px').css('background','blue').css('text-align','center').css('color','transparent').css('padding-top','3px');
$("#team2count").css('flex',noncommapercent + '0 1 0px').css('background','green').css('text-align','center').css('color','transparent').css('padding-top','3px');
$( "#teamdisplay" ).hover(function() {
         document.getElementById("team1count").style.color = 'white';
         document.getElementById("team2count").style.color = 'white';
       }, function() {
         document.getElementById("team1count").style.color = 'transparent';
         document.getElementById("team2count").style.color = 'transparent';
  });
$("#team1").css('padding','3px 3px 3px 3px').css('background','#0000cf').css('color','white');
$("#team2").css('padding','3px 3px 3px 3px').css('background','#006000').css('color','white');
    var csshead = $(`<style>#team1:before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0.3s;-webkit-transition-delay: 0.3s;transition-delay: 0.3s;content: attr(data-before);width: 10px;height: 12px;display: inline-block;position: absolute;left: 0px;text-align: center;top: 3px;text-indent: 3px;font-size: 14px;} #team1:hover::before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.0s;transition-delay: 0.0s;font-size:0px;} #team2:before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0.3s;-webkit-transition-delay: 0.3s;transition-delay: 0.3s;content:attr(data-before);width: 10px;height: 12px;display: inline-block;position: absolute;left: 0px;text-align: center;top: 3px;text-indent: 3px;font-size: 14px;} #team2:hover::before {-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.0s;transition-delay: 0.0s;font-size:0px;} #team1 {background: #0000cf;color: white;z-index: 99999;min-width: 45px;max-width: 45px;height: 17px;line-height: 14px;border-top-left-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 0px;position: relative;text-indent: 0px;-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor: help;border-bottom-left-radius: 14px;} #team1:hover {font-size: 14px;max-width: 500px;padding: 0 5px;color: #fff} #team2 {background: #0000cf;color: white;z-index: 99999;min-width: 45px;max-width: 45px;height: 17px;line-height: 14px;border-top-right-radius: 14px;border: none;overflow: hidden;padding: 0;vertical-align: middle;font-size: 0px;position: relative;text-indent: 0px;-webkit-transition: all 0.3s;transition: all 0.3s;transition-delay: 0s;-webkit-transition-delay: 0.1s;transition-delay: 0.1s;cursor: help;border-bottom-right-radius: 14px;} #team2:hover {font-size: 14px;max-width: 500px;padding: 0 5px;color: #fff}</style>`);
$("#team1").attr('data-before',commapercent+"%");
$("#team2").attr('data-before',noncommapercent+"%");
    // INITIALIZATION
    $('head').append(csshead);
        }},
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
checky = `<div id="commacount"></div><div id="noncommacount"></div>`;
hmmyy = data;
checky2 = data;
checky2 = checky2.replace(/[0-9]+/g, '');
if (checky != checky2) {
alert('Something has gone wrong in the verification of the data. Please PM /u/rideride. To stop showing this message, disable the option for now until it is fixed');
} else {
document.getElementById('loadtest').innerHTML = hmmyy;
var commacounts = parseInt(document.getElementById('commacount').innerHTML);
var noncommacounts = parseInt(document.getElementById('noncommacount').innerHTML);
var totalcounts = commacounts + noncommacounts;
var commapercent = (commacounts / totalcounts) * 100;
commapercent = Math.round( commapercent * 10 ) / 10;
var noncommapercent = (noncommacounts / totalcounts) * 100;
noncommapercent = Math.round( noncommapercent * 10 ) / 10;
document.getElementById('team1count').innerHTML = commacounts;
document.getElementById('team2count').innerHTML = noncommacounts;
$("#team1count").css('flex',commapercent + '0 1 0px');
$("#team2count").css('flex',noncommapercent + '0 1 0px');
$("#team1").attr('data-before',commapercent+"%");
$("#team2").attr('data-before',noncommapercent+"%");
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
*/


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

