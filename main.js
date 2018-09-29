/**
/**
 * LIVE COUNTING EXTENSION V1.5.3
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */
// CONSTANTS
// Extension version
var VERSION = 'v1.5.3';
// Client's username
var USER = $('#header .user a[href]').html();
var chu = 0;
var count = 0;
var s = "leinad";

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
	'amazingpiakchu_38': '#FFFF00'
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
	
	function rng(){
        count = Math.floor(Math.random()*20);
        return "";
    }

    function reverser(index){
        if(count != 0){
            if (index == 0){
                return s.charAt(index).toUpperCase();
            } else{
                return s.charAt(index);
            }
        } else{
            if (index == 0){
                return s.charAt(5-index).toUpperCase();
            } else{
                return s.charAt(5-index);
            }
        }
    }
	
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
        if (data.author == 'co3_carbonate' || data.author == 'rschaosid' || data.author == 'piyushsharma301' || data.author == 'rideride' || data.author == 'LeinadSpoon' || data.author == 'artbn') {
            data.author_elem.css('font-weight', 'bold');
        }
		
// /u/MaybeNotWrong username special
if (data.author == 'MaybeNotWrong') {
var mayberand = Math.floor((Math.random() * 2) + 1);
var notrand = Math.floor((Math.random() * 2) + 1);
var wrongrand = Math.floor((Math.random() * 2) + 1);
var colorrand = Math.floor((Math.random() * 2) + 1);
var okcolor = '#e02';
var okmaybe = 'Maybe';
var oknot = 'Not';
var okwrong = 'Wrong';
 if (mayberand == 1) {
      okmaybe = '';
}
if (notrand == 1) {
      oknot = '';
}
if (wrongrand == 1) {
      okwrong = 'Right';
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

return;
        }
	


	    
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
if (lcchats == 'co3_carbonate' || lcchats == 'rschaosid' || lcchats == 'piyushsharma301' || lcchats == 'rideride' || lcchats == 'LeinadSpoon' || lcchats == 'artbn') {
            data.href_elem.css('font-weight', 'bold');
        }
}
    });
if(window.location.href.indexOf("110t4ltqqzi35") > -1) { 
$('a[href*="/u/"]').each(function() {
var thishref = $(this).attr('href');
thishref = thishref.trim().replace('/u/', '');
    $(this).css('color', userColors[thishref]).css('fontStyle','initial').css('fontSize','13px');
if (thishref == 'co3_carbonate' || thishref == 'rschaosid' || thishref == 'piyushsharma301' || thishref == 'rideride' || thishref == 'LeinadSpoon' || thishref == 'artbn') {
            $(this).css('font-weight', 'bold');
        }
});
	Update.loadedOld(function () {
$('a[href*="/u/"]').each(function() {
var thishref2 = $(this).attr('href');
thishref2 = thishref2.trim().replace('/u/', '');
    $(this).css('color', userColors[thishref2]).css('fontStyle','initial').css('fontSize','13px');
if (thishref2 == 'co3_carbonate' || thishref2 == 'rschaosid' || thishref2 == 'piyushsharma301' || thishref2 == 'rideride' || thishref2 == 'LeinadSpoon' || thishref2 == 'artbn') {
            $(this).css('font-weight', 'bold');
        }
});
});
}
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
})(DisplayMode || (DisplayMode = {}));
////////////////////////////
// RemoveSubmissionLag.ts //
////////////////////////////
var RemoveSubmissionLag;
(function (RemoveSubmissionLag) {
    // INITIALIZATION
    var lastInput = '';
    var enabled = true;
    var ghostEnabled = true;
    var previews = [];
    // Options
    Options.addSelect({
        label: 'REMOVE SUBMISSION LAG',
        options: ['Enabled', 'Enabled without Ghost Messages', 'Disabled'],
        "default": 0,
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
        }
    });
})(DisableShortcuts || (DisableShortcuts = {}));
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
