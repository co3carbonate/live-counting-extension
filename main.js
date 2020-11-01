/**
/**
 * LIVE COUNTING EXTENSION V1.6.0
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */
// CONSTANTS
// Extension version

var VERSION = 'v1.6.0';

var USER = $('#header .user a[href]').html();



   if (window.location.href.indexOf("incremental") > -1) {
       $(`.content`).prepend(`<div id='hidden'></div><div id='container'><div id='incrtitle'>Shop [+]</div><div class='hiddeno' id='items'><div class='itemcont' id='mousecont'><img class='pic' id='mousepic' src='https://www.thekentongroup.com/wp-content/uploads/2015/01/Gnome-dev-mouse-optical.png'></img><div class='itemname' id='mousename'>Mouse</div><div class='itemdesc' id='mousedesc'>It's just a mouse. It clicks around randomly...</br></br>!nochat buy mouse<div class='incrstat' id='mousestats'></div></div></div></div></div>`);
       $(`#items`).append(`<div class='itemcont' id='keyboardcont'><img class='pic' id='keyboardpic' src='https://tpucdn.com/review/corsair-k57-rgb-wireless-keyboard/images/small-v1566335354.png'></img><div class='itemname' id='keyboardname'>Keyboard</div><div class='itemdesc' id='keyboarddesc'>It's a keyboard! With the power of typing, counting becomes much easier.</br></br>!nochat buy keyboard<div class='incrstat' id='keyboardstats'></div></div></div>`);
       $(`#items`).append(`<div class='itemcont' id='phonecont'><img class='pic' id='phonepic' src='https://d1ic4altzx8ueg.cloudfront.net/niche-builder/5b21eb35edbf8.png'></img><div class='itemname' id='phonename'>Phone</div><div class='itemdesc' id='phonedesc'>Phones can do much more than call people nowadays. Most people use their phones to count, according to studies.</br></br>!nochat buy phone<div class='incrstat' id='phonestats'></div></div></div>`);
       $(`#items`).append(`<div class='itemcont' id='laptopcont'><img class='pic' id='laptoppic' src='http://www.techverve247.com/Content%20Pages%20Icons/Computer%20and%20Laptop.png'></img><div class='itemname' id='laptopname'>Laptop</div><div class='itemdesc' id='laptopdesc'>This laptop doesn't have a numpad on it. Beware.</br></br>!nochat buy laptop<div class='incrstat' id='laptopstats'></div></div></div>`);
       $(`#items`).append(`<div class='itemcont' id='pccont'><img class='pic' id='pcpic' src='https://icon-library.net/images/icon-pc/icon-pc-28.jpg'></img><div class='itemname' id='pcname'>PC</div><div class='itemdesc' id='pcdesc'>This PC has an ultra powerful GPU and CPU, allowing you to count slow as heck because reddit lag always sucks anyway.</br></br>!nochat buy pc<div class='incrstat' id='pcstats'></div></div></div>`);
       $('head').append(`<style>#container {text-align: center;position: absolute; left: 0px; width: 111px; background: #e2ffdb; margin-top: -10px;font-size: 12px;}</style>`);
       $('head').append(`<style>.itemdesc {display:none;} .itemcont:hover .itemdesc {display:block;} .pic {height:50px; width:50px;}</style>`);
       $('head').append(`<style>#incrtitle {font-size: 16px; margin-bottom: 15px; border-bottom: 1px solid black; background: #bbffaa;}</style>`);
       $('head').append(`<style>.itemcont {background: #bbffaa; padding-top: 5px; padding-bottom: 5px; margin-bottom: 10px;}</style>`);
       $('head').append(`<style>#hidden {display:none;}</style>`);
       $('head').append(`<style>.itemdesc { display: none; font-size: 10px; color: #333; margin-top: 5px; }</style>`);
       $('head').append(`<style>.incrstat { text-align:right; margin-top: 5px; }</style>`);
       $('head').append(`<style>.hiddeno { display:none; }</style>`);
       $('head').append(`<style>#incrtitle:hover { cursor:pointer; }</style>`);


       //TOGGLE SHOP
$( "#incrtitle" ).click(function() {
  $( '#items' ).toggleClass( "hiddeno" );
});
       //AUTOUPDATE STUFF

           var dota;
            var dota_first_call = true;
       var mymouse;
       var mykeyboard;
       var mymoney;

            dota_hoc_handler = function (data) {
                dota = data;
                if (dota_first_call){
                    $(`#hidden`).html(dota);
                    dota_first_call = false;
                } else {
                    $(`#hidden`).html(dota);
                }
mymouse = $("abc[title='mouse']").text();
mymouse = JSON.parse(mymouse.replace(/'/g,"\""));
mymouse = mymouse[USER];
$("#mousestats").html(`Own: `+mymouse+`</br>Rate: 0.1CB/s</br>CB/s: `+(mymouse*0.1).toPrecision(2)+`</br>Price: `+Math.round(150 * Math.pow(1.15,mymouse)));
mykeyboard = $("abc[title='keyboard']").text();
mykeyboard = JSON.parse(mykeyboard.replace(/'/g,"\""));
mykeyboard = mykeyboard[USER];
$("#keyboardstats").html(`Own: `+mykeyboard+`</br>Rate: 0.5CB/s</br>CB/s: `+(mykeyboard*0.5).toPrecision(2)+`</br>Price: `+Math.round(1000 * Math.pow(1.15,mykeyboard)));
myphone = $("abc[title='phone']").text();
myphone = JSON.parse(myphone.replace(/'/g,"\""));
myphone = myphone[USER];
$("#phonestats").html(`Own: `+myphone+`</br>Rate: 4CB/s</br>CB/s: `+(myphone*4).toPrecision(2)+`</br>Price: `+Math.round(5000 * Math.pow(1.15,myphone)));
mylaptop = $("abc[title='laptop']").text();
mylaptop = JSON.parse(mylaptop.replace(/'/g,"\""));
mylaptop = mylaptop[USER];
$("#laptopstats").html(`Own: `+mylaptop+`</br>Rate: 10CB/s</br>CB/s: `+(mylaptop*10).toPrecision(2)+`</br>Price: `+Math.round(30000 * Math.pow(1.15,mylaptop)));
mypc = $("abc[title='pc']").text();
mypc = JSON.parse(mypc.replace(/'/g,"\""));
mypc = mypc[USER];
$("#pcstats").html(`Own: `+mypc+`</br>Rate: 40CB/s</br>CB/s: `+(mypc*40).toPrecision(2)+`</br>Price: `+Math.round(100000 * Math.pow(1.15,mypc)));
mymoney = $("abc[title='money-total']").text();
mymoney = JSON.parse(mymoney.replace(/'/g,"\""));
mymoney = mymoney[USER];
$("#liveupdate-title").text(Math.round(mymoney)+` CB (`+Math.round(100*parseFloat(parseFloat(mymouse*0.1)+parseFloat(mykeyboard*0.5)+parseFloat(myphone*4)+parseFloat(mylaptop*10)+parseFloat(mypc*40)))/100+` CB/s)`);
            }

            $.ajax({
                method: 'GET',
                dataType: 'text',
                cache: false,
                url: 'https://gist.githubusercontent.com/rideride/ca623726d34860ae1abd1bfdf38323fa/raw/incremental.txt',
                success: dota_hoc_handler,   //////this is where you put the checky bracket
                error: function (data) {
                    dota;
                }
            });

            setInterval(function () {

                var dota;
                $.ajax({
                    method: 'GET',
                    dataType: 'text',
                    cache: false,
                    url: 'https://gist.githubusercontent.com/rideride/ca623726d34860ae1abd1bfdf38323fa/raw/incremental.txt',
                    success: dota_hoc_handler,   //////this is where you put the checky bracket
                error: function (data) {
                    dota;
                }
                });

            }, 30000);



   } //INCREMENTAL END

/////////////////////SECRET MESSAGES!!!!!!!



setTimeout(function(){
    if($('#contributors h2').text() == 'updated dy') {
            Styles.add(`
a[href*='#secret'] {
background: black;
    color: white;
}
a[href*='#secret']:after {
content: attr(title);
}

        `);
    } else if($('#contributors h2').text() == 'uppdated by') {
        Styles.add(`
a[href*='#message'] {
background: black;
    color: white;
}
a[href*='#message']:after {
content: attr(title);
}

        `);
    }
},3000);


/////////////////////


   if (window.location.href.indexOf("10gelxprc1umi") > -1) {
            var yoy;
            var first_call = true;

            yay_hoc_handler = function (data) {
                yoy = data;
                if (first_call){
                    $(`#liveupdate-title`).html(yoy);
                    first_call = false;
                } else {
                    $(`#liveupdate-title`).html(yoy);
                }
            }

            $.ajax({
                method: 'GET',
                dataType: 'text',
                cache: false,
                url: 'https://raw.githubusercontent.com/rideride/riverride/master/test.txt',
                success: yay_hoc_handler,   //////this is where you put the checky bracket
                error: function (data) {
                    yoy;
                }
            });

            setInterval(function () {

                var yoy;
                $.ajax({
                    method: 'GET',
                    dataType: 'text',
                    cache: false,
                    url: 'https://raw.githubusercontent.com/rideride/riverride/master/test.txt',
                    success: yay_hoc_handler,   //////this is where you put the checky bracket
                error: function (data) {
                    yoy;
                }
                });

            }, 5000);
    } //Thread id end

var aprilbools;
var aprilbools2 = false;
var foolsprob;
var foolsprobt;

var abril2020; //abril2020
var abril20202 = false; //abril2020
var foolsprob2020;
var foolsprob2020t;

if(window.location.href.indexOf("10gelxprc1umi") > -1) {

$( "#liveupdate-statusbar" ).css("padding","0").css("border","0").css("height","30px").css("overflow","hidden");

$( ".viewer-count" ).parent().html(`<canvas id="viewport" width="480" height="30"></canvas>`);


   var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");

    // Define the image dimensions
    var width = canvas.width;
    var height = canvas.height;

    // Create an ImageData object
    var imagedata = context.createImageData(width, height);

}


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
var colortransfers = [];
var dailyHocColorNamesEnable2 = true;
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
// abril2020Enable.ts //
/////////////////////////
var abril2020Enable;
(function (abril2020Enable) {
    // INITIALIZATION
    // Options
    var benabled2020 = false;
    Options.addCheckbox({
        label: '2020 APRIL FOOLS',
        "default": false,
        section: 'Advanced 2',
        help: 'Enables the april fools.',
        onchange: function () {
            benabled2020 = this.prop('checked');
abril20202 = benabled2020;
        }
    });

})(abril2020Enable || (abril2020Enable = {}));
/////////////////////////
// aprilboolsEnable.ts //
/////////////////////////
var aprilboolsEnable;
(function (aprilboolsEnable) {
    // INITIALIZATION
    // Options
    var enableda = false;
    Options.addCheckbox({
        label: '2019 APRIL FOOLS',
        "default": false,
        section: 'Advanced 2',
        help: 'Enables the april fools.',
        onchange: function () {
            enableda = this.prop('checked');
aprilbools2 = enableda;
        }
    });
    // EVENTS

//if (enableda == false) {
//aprilbools2 = 0;
//} else {
//aprilbools2 = '';
//}

})(aprilboolsEnable || (aprilboolsEnable = {}));
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

////////////////////// APRIL FOOLS 2020 abril2020

if (abril20202 == true && window.location.href.toLowerCase().indexOf("graphite") > -1 && window.location.href.toLowerCase().indexOf("ta535s1hq2je") > -1) {
    abril2020 = 16;
} else if (abril20202 == true && window.location.href.toLowerCase().indexOf("riverbot") > -1 && window.location.href.toLowerCase().indexOf("ta535s1hq2je") > -1) {
    abril2020 = 16;
} else if (abril20202 == true && window.location.href.toLowerCase().indexOf("ta535s1hq2je") > -1) {

foolsprob2020 = Math.floor(Math.random() * 100) + 1;
if (0 < foolsprob2020 && foolsprob2020 < 10) {
abril2020 = 1;
foolsprob2020t = ' (9%)';
} else if (9 < foolsprob2020 && foolsprob2020 < 19) {
abril2020 = 2;
foolsprob2020t = ' (9%)';
} else if (18 < foolsprob2020 && foolsprob2020 < 28) {
abril2020 = 3;
foolsprob2020t = ' (9%)';
} else if (27 < foolsprob2020 && foolsprob2020 < 37) {
abril2020 = 4;
foolsprob2020t = ' (9%)';
} else if (36 < foolsprob2020 && foolsprob2020 < 41) {
abril2020 = 5;
foolsprob2020t = ' (4%)';
} else if (40 < foolsprob2020 && foolsprob2020 < 50) {
abril2020 = 6;
foolsprob2020t = ' (9%) (nice)';
} else if (49 < foolsprob2020 && foolsprob2020 < 54) {
abril2020 = 7;
foolsprob2020t = ' (4%)';
} else if (53 < foolsprob2020 && foolsprob2020 < 63) {
abril2020 = 8;
foolsprob2020t = ' (9%)';
} else if (62 < foolsprob2020 && foolsprob2020 < 67) {
abril2020 = 9;
foolsprob2020t = ' (4%)';
} else if (66 < foolsprob2020 && foolsprob2020 < 76) {
abril2020 = 10;
foolsprob2020t = ' (9%)';
} else if (75 < foolsprob2020 && foolsprob2020 < 79) {
abril2020 = 11;
foolsprob2020t = ' (3%)';
} else if (78 < foolsprob2020 && foolsprob2020 < 88) {
abril2020 = 12;
foolsprob2020t = ' (9%)';
} else if (87 < foolsprob2020 && foolsprob2020 < 91) {
abril2020 = 13;
foolsprob2020t = ' (3%)';
} else if (90 < foolsprob2020 && foolsprob2020 < 94) {
abril2020 = 14;
foolsprob2020t = ' (3%)';
} else if (93 < foolsprob2020 && foolsprob2020 < 98) {
abril2020 = 15;
foolsprob2020t = ' (4%)';
} else if (97 < foolsprob2020 && foolsprob2020 < 101) {
abril2020 = 16;
foolsprob2020t = ' (3%)';
}

$('#liveupdate-title').text(`[Live Counting `+abril2020+foolsprob2020t+`]`);

}

//abril2020 = 1;


/////////////////////april 2020 1

if (abril2020 == 1) {

$(".usertext .usertext-edit textarea").css('font-family','Wingdings');

        $( "#liveupdate-description .md" ).append('<b>Sadly this one does not work on firefox :(</b> <p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl53aW5nZGluZ3M8L2NvZGU+';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

}

/////////////////////april 2020 1

/////////////////////april 2020 2

if (abril2020 == 2) {

                                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5jcmF6eTwvY29kZT4=';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

}

/////////////////////april 2020 2

/////////////////////april 2020 3

if (abril2020 == 3) {

Styles.add(`
#lc-body li.liveupdate * { display: contents; }
.liveupdate-listing li.liveupdate { display: inline-grid; }
`);

            $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5ncmlkPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

}

/////////////////////april 2020 3

/////////////////////april 2020 4

if (abril2020 == 4) {

var bruhcounter = 0;

                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');

    $('#liveupdate-description .md p').append(`
<div id='bruh1' class='unmomento'>Get back up here</div>
<div id='bruh2' class='unmomento'>What are you doing</div>
<div id='bruh3' class='unmomento'>You must pay $5.99 to unlock scrolling features</div>
<div id='bruh4' class='unmomento'>Bro thats kinda cringe stop scrolling</div>
<div id='bruh5' class='unmomento'>Stop! You violated the law. Pay the court a fine or serve your sentence.</div>
<div id='bruh6' class='unmomento'>New federal regulations require that we limit excessive scrolling</div>
<div id='bruh7' class='unmomento'>Don't leave me!</div>
<div id='bruh8' class='unmomento'>Why are you running?</div>
<div id='bruh9' class='unmomento'>MRW you keep trying to scroll: https://www.youtube.com/watch?v=oHg5SJYRHA0</div>
<div id='bruh10' class='unmomento'>ERROR: Scrolling has been postponed until a later date. Please check back later.</div>
<div id='bruh11' class='unmomento'>🤡 Go on. Keep trying to scroll down. 🤡</div>
<div id='bruh12' class='unmomento'>Is this what Scroll Lock does? Who knows?</div>
<div id='bruh13' class='unmomento'>Under maintenance. Try again later.</div>
<div id='bruh14' class='unmomento'>Trust me, you don't wanna see what's down there anyway.</div>
<div id='bruh15' class='unmomento'>Bruh Sound Effect #2</div>
<div id='bruh16' class='unmomento'>I'm gonna have to stop you right there.</div>
<div id='bruh17' class='unmomento'>Scroll down again. Scroll down again. I dare you. I double dare you, ...</div>
<div id='bruh18' class='unmomento'>You could not scroll down. Where did that bring you? Back to me.</div>
<div id='bruh19' class='unmomento'>You were this close. Try again.</div>
<div id='bruh20' class='unmomento'>You must construct additional pylons!</div>
`);

    Styles.add(`
.unmomento {background:black; color:white; padding-top:5px; padding-bottom:5px; display:none; text-align: center;}
.stop-scrolling { height: 100%; overflow: hidden; }
`);

    var timeoutbruh;

document.body.onscroll = function(){
        clearTimeout(timeoutbruh);
    timeoutbruh = setTimeout(function() {
    var s_h = window.pageYOffset;
    if(s_h > 299) {
        bruhcounter++;
        if(bruhcounter == 5) {
                    var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5zY3JvbGw8L2NvZGU+';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');
        }
        var randbruh = Math.floor(Math.random() * 20) + 1;
        $("html, body").animate({ scrollTop: 0 }, 1);
        $('body').addClass('stop-scrolling');
        $("#bruh"+randbruh).css('display','block').css('opacity','1');
        $("#bruh"+randbruh).animate({ opacity: 0 }, 3000);
        setTimeout(function() {
            $('body').removeClass('stop-scrolling')
            $("#bruh"+randbruh).css('display','none');
        }, 3000);
        //alert(randbruh);
    }


    }, 50);
};

}

/////////////////////april 2020 4




/////////////////////april 2020 5

if (abril2020 == 5) {

    $('#liveupdate-description').append(`
<div id='timetravel' class='timetraveling'>go back in time!</div>
`);
    $('#timetravel').css('cursor','pointer').css('background','black').css('color','white');
$('#timetravel').click(function(){
    $('#timetravel').css('display','none');
    $("html").prepend("<body2 id=abcd></body2>");
$('body').fadeOut(5000);
setTimeout(function(){
$('body').fadeIn(5000);
			},5000);
    setTimeout(function(){
    $('.viewer-count').text('114917 viewers');
        },5000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Whoa guys! The time traveling device worked!?</p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},12000);
        setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>If my calculations are correct, we should be back in October 2018!</p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},17000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>I wonder where the count is at...</p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},22000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>9 999 997</p></div><a href="/user/rideride" class="deadauthor" style="color: #ffc130;"> /u/treje</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},24000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Wait... are we about to hit 10 million?</p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},28000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Wasn't there a ton of spam right before that?</p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},34000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>WAIT FUCK GO BACK</p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},38000);

    setTimeout(function(){
var post1 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10000000</p></div><a href="/user/rideride" class="deadauthor" style="color: SeaGreen;"> /u/dmn002</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},125);
var post2 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10000000 :o</p></div><a href="/user/rideride" class="deadauthor" style="color: DodgerBlue;"> /u/StanRichson</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},923);
var post3 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10,000,000</p></div><a href="/user/rideride" class="deadauthor" style="color: Green;"> /u/nyantick</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},1202);
var post4 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10,000,000</p></div><a href="/user/rideride" class="deadauthor" style="color: Red;"> /u/Markolie</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},769);
var post5 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10,000,000</p></div><a href="/user/rideride" class="deadauthor" style="color: Firebrick;"> /u/Zaxaramas</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},695);
var post6 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10,000,000</p></div><a href="/user/rideride" class="deadauthor" style="color: SpringGreen;"> /u/MrPotaitoh</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},1031);
var post7 = setInterval(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>10,000,000</p></div><a href="/user/rideride" class="deadauthor" style="color: Chocolate;"> /u/GusBus135</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},1666);
        setTimeout(function(){
        $('#liveupdate-description').append(`
<div id='timetravel2' class='timetraveling2'>GO BACK</div>
`);
    $('#timetravel2').css('cursor','pointer').css('background','black').css('color','white');

$('#timetravel2').click(function(){
         setTimeout(function(){
        clearInterval(post1);
        clearInterval(post2);
             clearInterval(post3);
             clearInterval(post4);
             clearInterval(post5);
             clearInterval(post6);
             clearInterval(post7);
			},5000);
    $('#timetravel2').css('display','none');
    $("html").prepend("<body2 id=abcd></body2>");
$('body').fadeOut(5000);
setTimeout(function(){
$('body').fadeIn(5000);
			},5000);
    setTimeout(function(){
    $('.viewer-count').text('8 viewers');
        },5000);
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Welp I hope you learned an important lesson here. Never time travel. <span class="md-spoiler-text">You probably should refresh the page at this point lol</span></p><p><span class="md-spoiler-text">To unlock the special achievement, copy this and put it in your post: <code>^^^^^^^^^^^^^^^^!nochat ^^^^^^^^^^^^^^^^timetravel</code></span></p></div><a href="/user/rideride" class="deadauthor" style="font-weight: bold; color: #069420;"> /u/rideride</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},12000);
    });
},3000);
    			},40000);
});

}

/////////////////////april 2020 5

/////////////////////april 2020 6

if (abril2020 == 6) {

                                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5uaWNlPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

}

/////////////////////april 2020 6

/////////////////////april 2020 7

if (abril2020 == 7) {

    $('.choice').text('Sponsored by RAID: SHADOW LEGENDS');
    $('.viewer-count').text('9 viewers playing RAID: SHADOW LEGENDS');

    setTimeout(function(){
        $('#liveupdate-description .md p').append(`
<div id='suh3' class='dedede2'>Start with💰50K silver and get a Free Epic Champion 💥 on day 7 of “New Player Rewards” program</div>
`);
    			},9000);
        setTimeout(function(){
        $('#liveupdate-description .md p').append(`
<div id='suh1' class='dedede'>🚨 BREAKING NEWS 🚨</div>
`);
    			},300000);
    setTimeout(function(){
            $('#liveupdate-description .md p').append(`
<div id='suh2' class='dedede'>https://pbs.twimg.com/media/ELiIqRfWoAIq71A.jpg</div>
`);
    },306000);
                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5yYWlkc2hhZG93bGVnZW5kczwvY29kZT4=';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 320000);

        Styles.add(`
.dedede {background:black; color:white; padding-top:5px; padding-bottom:5px; text-align: center;}
.dedede2 {background:black; color:white; padding-top:5px; padding-bottom:5px; text-align: center;position:fixed;top:50px;left: 400px;z-index: 999999999999999;}
`);

  Styles.add(`
.content {
    background-image: url(https://raidshadowlegends.pro/wp-content/uploads/2019/11/Raid-Shadow-Legends-logo.png);
}

#header-img.default-header {
    text-indent: -9999px;
    background-image: url(https://media.pocketgamer.biz/2019/3/96424/plarium-raidicon-r225x.jpg);
    background-repeat: no-repeat;
    height: 160px;
    width: 180px;
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 3px;
background-position: 0;
}

`);

}

/////////////////////april 2020 7

/////////////////////april 2020 8

if (abril2020 == 8) {

                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5leWVzPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

$('#liveupdate-description').append(`<section class="move-area"> <div class='container'> <div class='eye'></div> <div class='eye'></div> <span id='eyeshov'>Don't mind me...</span> </div> </section>`);
    Styles.add(`
.container {
  width: 100%;
}
.eye {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #CCC;
}
.eye:after { /*pupil*/
  position: absolute;
  bottom: 17px;
  right: 10px;
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  content: " ";
}
`);
    $("body").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});
    $( '#eyeshov' ).css('opacity','0');
    $( ".container" ).hover(
  function() {
    $( '#eyeshov' ).css('opacity','1');
  }, function() {
    $( '#eyeshov' ).css('opacity','0');
  }
);

}

/////////////////////april 2020 8


/////////////////////april 2020 9

if (abril2020 == 9) {

                    $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5qYXdzPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 140000);
$("body").prepend('<div id="blocc"></div>');
$('#blocc').css('background','white').css('height','100%').css('width','100%').css('position','absolute').css('z-index','999999999999999999')
$('#blocc').click(function(){
$('#blocc').css('display','none');
$("body").css('transform','scale(0.01)');
    $('#liveupdate-header').prepend("<iframe class=embed-responsive-item id=jaws allow=autoplay type=text/html width=420 height=345 src=https://www.youtube.com/embed/1kbvYjuwiMQ?&autoplay=1&rel=0&showinfo=0&color=white&iv_load_policy=3></iframe>");
$( '#jaws' ).css('display', 'none');
    //    $("body").animate({ transform: "scale(1)" }, 3000);
    Styles.add(`
@keyframes scl {
    0% {
        transform: scale(0.0);
    }
    100% {
        transform: scale(1.0);
    }
}

#jumpToContent {
    display: none;
}

body {
height: 100%;
width: 100%;
        animation: scl 132s ease-in-out normal forwards;
        -webkit-animation: scl 132s ease-in-out normal forwards;
    }
`);
});

}

/////////////////////april 2020 9

/////////////////////april 2020 10

if (abril2020 == 10) {

                                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5uYW1lczwvY29kZT4=';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

}

/////////////////////april 2020 10

/////////////////////april 2020 11

if (abril2020 == 11) {

                        $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCB5b3UgbXVzdCBiZWF0IHRoZSBwb25nIGdhbWUuIE9uY2UgeW91IHdpbiwgYSBzY3JlZW4gd2lsbCBwb3AgdXAgc2F5aW5nIHRoYXQgeW91IHdpbiwgZm9sbG93ZWQgYnkgYSByYW5kb20gd29yZC4gUHV0IHRoZSByYW5kb20gd29yZCBhdCB0aGUgZW5kIG9mIHRoaXMgdG8gdW5sb2NrIHRoZSBhY2hpZXZlbWVudDogPGNvZGU+Xl5eXl5eXl5eXl5eXl5eXiFub2NoYXQgXl5eXl5eXl5eXl5eXl5eXlBMQUNFSE9MREVSPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 1000);

$( ".viewer-count" ).parent().html(`<canvas id="canvas" style="background-color:#1b1b1b"></canvas>`);
    //    $("body").animate({ transform: "scale(1)" }, 3000);
//    Styles.add(`
//`);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 470;
canvas.height = 200;

var score1 = 0;
var score2 = 0;

var keys = {};
var gameState = 0; // 0: initial, 1: running, 2: idle, 3: win, 4:over


document.addEventListener('keydown', function (e) {
 //   $("document").keydown(function(e) {
 //   document.querySelector("canvas").addEventListener('keydown', function (e) {
    if(gameState == 0){
        if(38 == e.keyCode)
            gameState = 1;
    }

    if(gameState == 3 || gameState == 4){
        if(38 == e.keyCode){
            init();
            gameState = 1;
        }
    }
    if(38 == e.keyCode){
         e.preventDefault();
        }
    if(40 == e.keyCode){
         e.preventDefault();
        }
    keys[e.keyCode] = true;
 //   e.preventDefault();
});

document.addEventListener('keyup', function (e) {
    delete keys[e.keyCode];
});

function input() {

    if (38 in keys) { //If the up arrow key is pressed
        if (player1.y - player1.gravity > 0) {
            player1.y -= player1.gravity;
        }
    } else if (40 in keys) { //If the down arrow key is pressed
        if (player1.y + player1.height + player2.gravity < canvas.height) {
            player1.y += player1.gravity;
        }
    }

}

function movePlayer2(){

    if(theBall.y < player2.y){
        if (player2.y - player2.gravity > 0) {
            player2.y -= player2.gravity;
        }
    }
    else{
        if (player2.y + player2.height + player2.gravity < canvas.height) {
            player2.y += player2.gravity;
        }
    }
}

function Box(options){ /*Constructor of Box object*/
    this.x = options.x || 10;
    this.y = options.y || 10;
    this.width = options.width || 40;
    this.height = options.height || 50;
    this.color = options.color || '#FFFFFF';
    this.speed = options.speed || 3;
    this.gravity = options.gravity || 3;

}

var player1 = new Box({ /*player paddle*/
    x: 20,
    y: canvas.height/2-40,
    width: 6,
    height: 40,
    color: '#F00',
    gravity: 4
});

var player2 = new Box({ /*player paddle*/
    x: canvas.width-20-12,
    y: canvas.height/2-40,
    width: 6,
    height: 40,
    color: '#0F0',
    gravity: 3.5
});

var midLine = new Box({ /*The net*/
    x: (canvas.width/2)-2.5,
    y: 20,
    width: 5,
    height: canvas.height-40,
    color: '#FFFFFF'
});

var theBall = new Box({
    x: (canvas.width / 2),
    y: (canvas.height / 2),
    width: 6,
    height: 6,
    color: '#f5ff00',
    speed: 1.5,
    gravity: 2
});

function createNewBall(){

    theBall.x = (canvas.width / 2 - 6);
    theBall.y = (canvas.height / 2);
    theBall.width = 6;
    theBall.height = 6;
    theBall.color = '#f5ff00';

    var s = Math.floor((Math.random() * 1) ) * 2;
    var g = Math.floor((Math.random() * 2) ) * 2;
    s = (s == 0 ? -3 : s);
    g = (g == 0 ? -3 : g);
    theBall.speed = s;
    theBall.gravity = g;

}

function ballBounce() {

	// platform collision
	if (((theBall.y+theBall.gravity) <= 0) || ((theBall.y+theBall.gravity+theBall.height) >= canvas.height)){
        theBall.gravity = (theBall.gravity) * (-1); /*If it does, change the gravity value to move in the opposite direction*/
        theBall.y += theBall.gravity; // Move theBall
        theBall.x += theBall.speed;
    } else { // If the ball doesn’t hit the top or bottom, then move theBall as normal
        theBall.x += theBall.speed;
        theBall.y += theBall.gravity
    }

	// player1 collision

    if (theBall.x <= player1.x + player1.width && theBall.x + theBall.width >= player1.x ) {
        if (theBall.y + theBall.height >= player1.y  && theBall.y <= player1.y + player1.height) {
            theBall.x = (player1.x + theBall.width);
            theBall.speed *= (-1);
        }

    }

    if (theBall.x + theBall.width >= player2.x && theBall.x + theBall.width <= player2.x + player2.width) {
        if (theBall.y + theBall.height >= player2.y  && theBall.y <= player2.y + player2.height) {
            theBall.x = (player2.x - theBall.width);
            theBall.speed *= (-1);
        }

    }


    if (theBall.x + theBall.width < player1.x - 5) {
        score2 += 1;
        gameState = 2;
    } else if (theBall.x > player2.x + player2.width + 5) {
        score1 += 1;
        gameState = 2;
    } else {
        theBall.x += theBall.speed;
        theBall.y += theBall.gravity;
    }
    if(gameState==2){
        createNewBall();
    }
    if(score2 >= 5){
        gameState = 3;
    }
    if(score1 >= 5){
        gameState = 4;
    }
    draw();
}



function drawBox(box) { /* draw each box*/
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);
}

function displayScore1() { /* play1 score*/
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgb(255,0,0)";
    var str1 = score1;
    ctx.fillText(str1, (canvas.width/2) - 50, 30);
}

function displayScore2() { /*player2 score*/
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgb(0,255,0)";
    var str2 = score2;
    ctx.fillText(str2, (canvas.width / 2) + 50, 30);
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    displayScore1();
    displayScore2();
    drawBox(player1);
    drawBox(player2);
    drawBox(midLine);


    if(gameState==0){

        drawStartMenu();
    }
    if(gameState==1 || gameState==2){ // running

        drawBox(theBall);
    }
    if(gameState==3){

        drawOverMenu();
    }
    if(gameState==4){
        drawWinMenu();
    }

}

function drawStartMenu(){
    ctx.font="15px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.clearRect(canvas.width/2-10,canvas.height/2-40, 20,60);
    ctx.fillText("Press the up key to start", canvas.width/2, canvas.height/2);
}

function drawOverMenu(){
    ctx.font="15px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width/2, canvas.height/2);
    ctx.fillText("Press the up key to restart", canvas.width/2, canvas.height/2 + 40);

}

function drawWinMenu(){
    ctx.font="15px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("You Win.       FISH", canvas.width/2, canvas.height/2);
    ctx.fillText("Press the up key to restart", canvas.width/2, canvas.height/2 + 40);
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function resetPlayers(){
    player1.x = 20;
    player1.y = canvas.height/2-40;
    player2.x = canvas.width-20-12;
    player2.y = canvas.height/2-40;
}
function init(){
    score1 = 0;
    score2 = 0;
    resetPlayers();
    createNewBall();
}

function loop() { /*The loop function will continuously call the draw function and update our screen*/
    if(gameState == 0){
        init();
    }

    draw();
    if(gameState == 1){
        ballBounce(); // collision detection
        input(player1);
        movePlayer2();

    }
    else if(gameState == 2){
        sleep(1000);
        gameState = 1;
    }

    requestAnimationFrame(loop);
}

loop();


}

/////////////////////april 2020 11


/////////////////////april 2020 12

if (abril2020 == 12) {
//hsl(180, 100%, 92%);
                            $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5iYWNrZ3JvdW5kPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

$(document).mousemove(function(getCurrentPos){
    var xCord = getCurrentPos.clientX;
    var yCord = getCurrentPos.clientY;

    var xPercent = xCord/window.innerWidth;
    var yPercent = yCord/window.innerHeight;

    var backcolor = xPercent*180 + yPercent*180

    $( "#liveupdate-statusbar" ).css('background-color','hsl('+backcolor+', 100%, 92%)')
});
}

/////////////////////april 2020 12

/////////////////////april 2020 13

if (abril2020 == 13) {
//hsl(180, 100%, 92%);

                                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5yZXZlcnNlPC9jb2RlPg==';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

    var thehtml = $( ".liveupdate-listing" ).html();
    $( ".main-content" ).prepend('<ol class="bruuuh" id="fakeyfake">'+thehtml+'</ol>');
//        $('.liveupdate-listing').on('DOMNodeInserted', function (e) {
 //           alert('h');
//    var thehtml = $( ".liveupdate-listing" ).html();
 //   $( ".bruuuh" ).html(thehtml);
  //  });

    var target = document.querySelector('.liveupdate-listing');

var observer = new MutationObserver(function(mutations) {

  mutations.forEach(function(mutation) {
        var thehtml = $( ".liveupdate-listing" ).html();
    $( ".bruuuh" ).html(thehtml);

  });
});

var config = {
  childList: true
};

observer.observe(target, config);

// otherwise
observer.disconnect();
observer.observe(target, config);

    $( ".bruuuh" ).scrollTop = $( ".bruuuh" ).scrollHeight;

        Styles.add(`
.bruuuh {display: flex;
    flex-direction: column-reverse;
position: absolute;
    margin-bottom: 200px;
overflow: hidden;
}

#new-update-form .usertext .usertext-edit textarea {
    position: fixed;
bottom: 30px;
    max-width: 600px;
}

.liveupdate-listing {display: none;
}

.save-button {
    position: fixed;
    left: 890px;
    bottom: 30px;
}
`);
}

/////////////////////april 2020 13


/////////////////////april 2020 14

if (abril2020 == 14) {

                                    $( "#liveupdate-resources" ).prepend('<p id="code_input"></p>');
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5leGNlbDwvY29kZT4=';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');


    $( ".main-content" ).prepend( "<div id='datestuff'></div>" );
    $( ".main-content" ).prepend( "<div id='timestuff'></div>" );
    $( ".main-content" ).prepend( "<div id='bottomhidden'></div>" );
    $( ".main-content" ).prepend( "<div id='tophidden'></div>" );
    $( ".main-content" ).prepend( "<div id='showhidestuff'></div>" );
    $( "#header" ).prepend( "<div id='cells2'></div>" );
    $( "#header" ).prepend( "<div id='cells1'></div>" );
    $( "#header" ).prepend( "<div id='bottompart'></div>" );
    $( "#header" ).prepend( "<div id='submitrow'></div>" );
    $( "#header" ).prepend( "<div id='filerow'></div>" );
    $( "#header" ).prepend( "<div id='preheader'></div>" );

    $( "#sr-header-area" ).css({
        'z-index':'999999999999999',
        'position':'absolute',
        'left':'27px',
        'top':'220px',
        'width':'98%',
    });
    $( "#header-bottom-left" ).css({
        'z-index':'999999999999999',
        'position':'absolute',
        'left':'24px',
        'top':'273px',
    });
    $( "#header-bottom-right" ).css({
        'z-index':'999999999999999',
        'position':'absolute',
        'left':'855px',
        'top':'239px',
    });
    $( "#liveupdate-options" ).css({
        'z-index':'999999999999999',
        'position':'absolute',
        'left':'936px',
        'top':'379px',
        'background':'white',

    });
    $( ".sidebar" ).css({
        'z-index':'999999999999999',
        'position':'absolute',
        'left':'906px',
        'top':'739px',
        'background':'white',
        'padding-top':'10px',
    });


    document.getElementById("sr-header-area").className += " hiddenfeature";
    document.getElementById("header-bottom-left").className += " hiddenfeature";
    document.getElementById("header-bottom-right").className += " hiddenfeature";
    document.getElementById("liveupdate-options").className += " hiddenfeature";
    $( ".sidebar" ).addClass( "hiddenfeature" );
    $( ".hiddenfeature" ).css({
        'display':'none',
    });
    $('head').append("<style>.save-button .error {display:inline!important;}.liveupdate-listing li.liveupdate ul.buttonrow button {font-size: 10px;} .liveupdate-listing li.liveupdate .body div.md {overflow:scroll!important;} .liveupdate-listing li.liveupdate ul.buttonrow {z-index:99;position:relative;top:-36px;left:108.33px;font-size:7px!important;} .liveupdate-listing li.liveupdate time::before {display: none!important;} .markdownEditor-wrapper {width: 500px;display: none !important;} .res-nightmode .usertext-edit textarea {background: white!important!important;}</style>");

    $( ".res-floater-visibleAfterScroll" ).css({
        'display':'none!important',
        'background':'transparent',
        'position':'absolute',
        'height':'0px',
        'width':'0px',
        'font-size':'0px',
        'color':'transparent',
        'left':'-333px',
        'top':'-333px',
    });
    $( "#liveupdate-title" ).css({
        'display':'none',
    });
    $( "#liveupdate-header" ).css({
        'display':'none',
    });
    $( "#liveupdate-statusbar" ).css({
        'display':'none',
    });
    $( ".bottom-area" ).css({
        'position': 'absolute',
        'left': '-500px',
        'top': '-500px',
    });


    $( ".error" ).css({
        'display':'none',
    });
        $( ".main-content" ).css({
        'margin-top':'-1px',
    });

    $('#new-update-form').find('.save-button .error').css('display', 'inline');
    $( "html" ).css({
        'scrollbar-width':'none',
    });
    $( "#preheader" ).css({
        'height':'34px',
        'background':'#1e7346',
        'font-family':'Segoe UI',
        'background-image':'url(https://i.imgur.com/Fsvkpmp.png)',
        'background-size': 'cover',
        'position':'fixed',
        'margin-top':'0px',
        'width':'100%'
    });
    $( "#filerow" ).css({
        'height':'123.33px',
        'background':'#1e7346',
        'font-family':'Segoe UI',
        'background-image':'url(https://i.imgur.com/ZPDl1Py.png)',
        'background-size': 'cover',
        'position':'fixed',
        'margin-top':'34px',
        'width':'100%'
    });
    $( "#submitrow" ).css({
        'height':'63.33px',
        'font-family':'Segoe UI',
        'background-image':'url(https://i.imgur.com/vANKvL2.png)',
        'background-size': 'cover',
        'position':'fixed',
        'margin-top':'157.33px',
        'width':'100%'
    });
    $( "#bottompart" ).css({
        'height':'499.33px',
        'font-family':'Segoe UI',
        'background-image':'url(https://i.imgur.com/VpKW3k9.png)',
        'background-size': 'cover',
        'position':'fixed',
        'margin-top':'220.66px',
        'width':'100%'
    });
    $( "#cells1" ).css({
        'height':'154.666px',
        'font-family':'Segoe UI',
        'background-image':'url(https://i.imgur.com/ealAJzh.png)',
        'background-size': 'cover',
        'position':'absolute',
        'margin-top':'220.66px',
        'width':'1232.666px',
        'margin-left':'26.666px',
    });
    $( "#cells2" ).css({
        'height':'20000px',
        'font-family':'Segoe UI',
        'background-image':'url(https://i.imgur.com/yT9zF7g.png)',
        'background-size': 'contain',
        'position':'absolute',
        'margin-top':'375.33px',
        'width':'1232.666px',
        'margin-left':'26.666px',
        'overflow':'hidden',
    });
    $( ".usertext .usertext-edit textarea" ).css({
    'z-index':'999999999',
    'position': 'fixed',
    'border': '1px solid #c6c6c6',
    'height': '23px',
    'margin-top': '152.33px',
    'margin-left': '-32px',
    'width': '1007px',
    'font-family':'Tahoma',
    'color':'#444',
    'text-indent':'10px',
    'font-size':'13px',
    });
    $( "#new-update-form .save-button button" ).css({
    'background': 'transparent',
    'border': '1px solid #c6c6c6',
    'margin-top': '152.33px',
    'position': 'fixed',
    'z-index': '999999999999999',
    'margin-left': '-144px',
    'height': '23px',
    'width': '109px',
    'color': 'transparent',
    });
    $( "#showhidestuff" ).css({
    'background': 'transparent',
    'position': 'fixed',
    'z-index': '999999999999999',
    'left': '4px',
    'height': '23px',
    'width': '103px',
    'color': 'transparent',
    'top':'168px',
    'cursor':'pointer',
    });
    $( "#showhidestuff" ).click(function() {
         $( ".hiddenfeature" ).toggle();
       });
    $( ".liveupdate-listing" ).css({
        'position':'relative',
        'z-index':'9999',
        'margin-top': '286.33px',
        'margin-left': '142px',
        'max-width':'398px',
    });
    $( "#tophidden" ).css({
        'position':'fixed',
        'z-index':'99999999',
        'width': '100%',
        'height': '220.66px',
        'top':'0',
        'left':'0',
        'background':'url(https://i.imgur.com/8hXvrhy.png)',
        'background-size': 'cover',
    });
    $( "#bottomhidden" ).css({
        'position':'fixed',
        'z-index':'99999999',
        'left': '0px',
        'top': '634px',
        'width':'100%',
        'height':'200px',
        'background':'url(https://i.imgur.com/VBrVvul.png)',
        'background-size': 'contain',
    });
    $( "#timestuff" ).css({
        'position':'fixed',
        'z-index':'99999999',
        'top': '682px',
        'width':'60px',
        'height':'60px',
        'font-family':'Segoe UI',
        'left':'1161px',
        'color':'white',
        'font-size':'12px',
        'text-align':'center',
    });
    $( "#datestuff" ).css({
        'position':'fixed',
        'z-index':'99999999',
        'top': '700px',
        'width':'60px',
        'height':'60px',
        'font-family':'Segoe UI',
        'left':'1161px',
        'color':'white',
        'font-size':'12px',
        'text-align':'center',
    });
    function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if(hours > 11){
        hours = hours - 12;
        var t_str = hours + ":" + minutes + " ";
        t_str += "PM";
    } else {
        var t_str = hours + ":" + minutes + " ";
        t_str += "AM";
    }
    var aaatoday = new Date().toLocaleDateString()
    document.getElementById('timestuff').innerHTML = t_str;
    document.getElementById('datestuff').innerHTML = aaatoday;
}
setInterval(updateTime, 1000);
//            $( "#lc-body li.liveupdate ul.buttonrow" ).css({
//        'position': 'relative',
//        'top': '-40px',
//        'left': '109px',
//    });

    function onupdate() {
    $( ".liveupdate" ).css({
        'max-height': '57.33px',
        'scrollbar-width': 'none',
        'overflow': 'hidden',
        'border-top': '1px solid transparent',
        'border-left': '1px solid transparent',
        'border-right': '1px solid transparent',
    });
    $( ".liveupdate time" ).css({
//        'border':'1px solid #d4d4d4',
        'width':'42.33px',
        'height':'54.33px',
        'overflow':'hidden',
        'margin-top':'-2px',
        'font-family': 'Calibri',
//        'font-size': '11px',
        'color': 'black',
        'position':'absolute',
        'border-right':'1px solid transparent',
    });
        $( ".liveupdate-listing li.liveupdate .body div.md" ).css({
        'width':'186px',
        'display':'block',
        'position':'absolute',
        'left':'64px',
        'overflow': 'scroll',
        'max-height': '62px',
        'scrollbar-width': 'none',
        'font-family':'Calibri',
    });
    //
        $( ".liveupdate-listing li.liveupdate .body" ).css({
        'height':'63.33px',
        'position':'relative',
    });
        $( ".liveupdate-listing li.liveupdate a.author" ).css({
        'position': 'absolute',
        'left': '249px',
        'border-left': '1px solid transparent',
        'height': '58.33px',
        'font-family':'Calibri',
        'z-index':'1',
    });
        $( ".liveupdate-listing li.separator" ).css({
        'height': '58px',
        'margin':'0',
        'padding':'0',
    });
    } //End function
    window.onload = onupdate();
    $( ".liveupdate-listing" ).on('DOMNodeInserted', function (e) {
        onupdate();
    });


    }

/////////////////////april 2020 14

/////////////////////april 2020 15

if (abril2020 == 15) {
                                $( "#liveupdate-description .md" ).append('<p id="code_input"></p>');
    setTimeout(function () {
        var resull = 'VG8gdW5sb2NrIHRoZSBzcGVjaWFsIGFjaGlldmVtZW50LCBjb3B5IHRoaXMgYW5kIHB1dCBpdCBpbiB5b3VyIHBvc3Q6IDxjb2RlPl5eXl5eXl5eXl5eXl5eXl4hbm9jaGF0IF5eXl5eXl5eXl5eXl5eXl5kYXJrbmVzczwvY29kZT4=';
    document.getElementById('code_input').innerHTML = atob(resull);
        $('#code_input').css('background','#fffb55');

}, 120000);

    $('body').prepend('<div class="overlay"></div>');


  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

  $(document).mousemove(function(e){
    mouseX = e.pageX - 00;
    mouseY = e.pageY - 00;
  });

  setInterval(function(){
    xp += ((mouseX - xp)/1);
    yp += ((mouseY - yp)/1);
    $(".overlay").css('-webkit-mask-image','radial-gradient(100px at '+xp+'px '+yp+'px , transparent 95%, black 100%)');
  }, 50);

var body = document.body,
    html = document.documentElement;
var pg_height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) + 'px';
    ////////////////////////////////////DO SOMETHING ELSE!!!!!!!!!!!!!!!!!!!!!!!!!
    //////////////////////////////////// aaaaaaaaaaaaaaa lol

        Styles.add(`
.overlay {
  top:0;
  left:0;
  z-index:100;
  background-color:rgba(0,0,0,1);
  position:absolute;
  width:100%;
  height:`+pg_height+`;
  pointer-events:none;
  -webkit-mask-image:radial-gradient(100px at 00px 0px , transparent 95%, black 100%);
}
`);
}

/////////////////////april 2020 15

/////////////////////april 2020 16

if (abril2020 == 16) {

    // if (window.location.href.indexOf("graphite") > -1 || window.location.href.indexOf("riverbot") > -1 ) { //GRAPHITE START

// Actually I'm thinking about just loading this every time. It makes things a lot easier lol
function lc_16_stuff() {

       $(`.content`).prepend(`<div id='hidden'></div>`);
     $(`#hidden`).css('display','none');

       //AUTOUPDATE STUFF

           var dota;
            var dota_first_call = true;
       var mymouse;
       var mykeyboard;
       var mymoney;
     var mylist;
     var myhouse;

            dota_hoc_handler = function (data) {
                dota = data;
                if (dota_first_call){
                    $(`#hidden`).html(dota);
                    dota_first_call = false;
                } else {
                    $(`#hidden`).html(dota);
                }
mymouse = $("abc[title='helpy']").text();
mymouse = JSON.parse(mymouse.replace(/'/g,"\""));
                if (mymouse.indexOf(USER) >= 0) {
                    mylist = mymouse;
                    mymouse = 'true';
                    $('#discussions h2').text('discusions');
                    $('#contributors h2').text('updated dy');
                    if (window.location.href.indexOf("graphite") > -1 || window.location.href.indexOf("riverbot") > -1 ) { //GRAPHITE START
                    $('#liveupdate-description').append(`<div id='group'>Your fellow revolutionaries:</br></br><ol id='grppl'>`+mylist+`</ol><br><br><div>Copy and paste this to send secret messages to the revolutionaries:</div><div>[](/#secret "message")</div></div>`);
                    mylist = $('#grppl').text();
                    mylist = mylist.replace(/,/g,', ');
                    $('#grppl').text(mylist);
                    $('#group').css('position','absolute').css('left','1px').css('max-width','100px').css('font-size','11px');
                    } //GRAPHITE END
                } else {
                    mymouse = 'false';
                }
                myhouse = $("abc[title='noty']").text();
myhouse = JSON.parse(myhouse.replace(/'/g,"\""));
                if (myhouse.indexOf(USER) >= 0) {
                    mylist = myhouse;
                    myhouse = 'true';
                    $('#discussions h2').text('discusions');
                    $('#contributors h2').text('uppdated by');
                    if (window.location.href.indexOf("graphite") > -1 || window.location.href.indexOf("riverbot") > -1 ) {
                    $('#liveupdate-description').append(`<div id='group'>Our coalition:</br></br><ol id='grppl'>`+mylist+`</ol><br><br><div>Copy and paste this to send secret messages to your team:</div><div>[](/#message "hello")</div></div>`);
                    mylist = $('#grppl').text();
                    mylist = mylist.replace(/,/g,', ');
                    $('#grppl').text(mylist);
                    $('#group').css('position','absolute').css('left','1px').css('max-width','100px').css('font-size','11px');
                    } //GRAPHITE END
                } else {
                    myhouse = 'false';
                }
//mymouse = mymouse[USER];
               // $('#liveupdate-description').append(mymouse);
                //$('#liveupdate-description').append(myhouse);
 } //dota hoc handler

            $.ajax({
                method: 'GET',
                dataType: 'text',
                cache: false,
                url: 'https://gist.githubusercontent.com/rideride/621703f00549c044aa11d1fd5c61daab/raw/lc_16.txt',
                success: dota_hoc_handler,   //////this is where you put the checky bracket
                error: function (data) {
                    dota;
                }
            });

}
//don't need a setInterval because only important to check on first time

 //  }

    lc_16_stuff();

Styles.add(`.deadupdate {background:initial;}`);


//timesecond = 1000 //Use 1000 on final version, but for testing, want to make it shorter
timesecond = 1000;
setTimeout(function(){
    if($('#contributors h2').text() == 'updated dy') {
        setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Remember to visit <a href="https://old.reddit.com/live/ta535s1hq2je/#graphite" rel="nofollow">https://old.reddit.com/live/ta535s1hq2je/#graphite</a> to see our progress!</p><p>To unlock the special achievement, copy this and put it in your post: <code>^^^^^^^^^^^^^^^^!nochat ^^^^^^^^^^^^^^^^aprilfools</code></p></div><a href="/u/me" class="deadauthor" style="color: black;"> /u/Graphite_bot</a></li>`);
			},0.5*timesecond); //post 1
    } else if ($('#contributors h2').text() == 'uppdated by') {
        setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Remember to visit <a href="https://old.reddit.com/live/ta535s1hq2je/#riverbot" rel="nofollow">https://old.reddit.com/live/ta535s1hq2je/#riverbot</a> to see our progress!</p><p>To unlock the special achievement, copy this and put it in your post: <code>^^^^^^^^^^^^^^^^!nochat ^^^^^^^^^^^^^^^^aprilfools</code></p></div><a href="/u/me" class="deadauthor" style="color: black;"> /u/Graphite_bot</a></li>`);
			},0.5*timesecond); //post 1
    } else if (window.location.href.indexOf("graphite") > -1 || window.location.href.indexOf("riverbot") > -1 ) {
                setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>You know what to do. (After you do it... please wait a minute and refresh.)</p></div><a href="/u/me" class="deadauthor" style="color: black;"> /u/Anonymous</a></li>`);
			},0.5*timesecond); //post 1
} else {

    setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>psst...\n\nI need your help</p></div><a href="/u/me" class="deadauthor" style="color: black;"> /u/Graphite_bot</a></li>`);
			},5*timesecond); //post 1

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>Are you willing to help?<div><button id="riveryes">Yes</button><button id="riverno">No</button></div></p></div><a href="/u/me" class="deadauthor" style="color: black;"> /u/Graphite_bot</a></li>`);

    $( "#riverno" ).click(function() {
$( "#riveryes" ).hide();
$( "#riverno" ).hide();

//$("html").prepend("<body2 id=abcd></body2>");
//$('body').fadeOut(10000);
//setTimeout(function(){
//$('body').fadeIn(10000);
//			},10000);
//

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>alright, i'll ask someone else<a href="/u/me" class="deadauthor" style="color: black;"> /u/Graphite_bot</a></li>`);
			},2*timesecond);

});

    $( "#riveryes" ).click(function() {
$( "#riveryes" ).hide();
$( "#riverno" ).hide();

//$("html").prepend("<body2 id=abcd></body2>");
//$('body').fadeOut(10000);
//setTimeout(function(){
//$('body').fadeIn(10000);
//			},10000);
//

setTimeout(function(){
$(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><p>i really appreciate it. let's go somewhere else<a href="/u/me" class="deadauthor" style="color: black;"> /u/Graphite_bot</a></li>`);
			},2*timesecond);

setTimeout(function(){
$("html").prepend("<body2 id=abcd><div id='preloading'><div id='preload01'></div><div id='preload02'></div><div id='preload03'></div><div id='preload04'></div><div id='preload05'></div><div id='preload06'></div><div id='preload07'></div><div id='preload08'></div><div id='preload09'></div><div id='preload10'></div><div id='preload11'></div><div id='preload12'></div><div id='preload13'></div><div id='preload14'></div><div id='preload15'></div><div id='preload16'></div><div id='preload17'></div><div id='preload18'></div><div id='preload19'></div></div></body2>");

    /////PRELOADING IMAGES
    Styles.add(`#preload01 { background: url(https://i.imgur.com/MI4wjqB.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload02 { background: url(https://i.imgur.com/zjpzK2z.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload03 { background: url(https://i.imgur.com/t5kHcTM.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload04 { background: url(https://i.imgur.com/Z3WUuD2.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload05 { background: url(https://i.imgur.com/QZplF6w.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload06 { background: url(https://i.imgur.com/Khha89g.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload07 { background: url(https://i.imgur.com/JjWf3mR.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload08 { background: url(https://i.imgur.com/3UvI0OF.jpg) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload09 { background: url(https://i.imgur.com/IggDP5L.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload10 { background: url(https://i.imgur.com/MI4wjqB.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload11 { background: url(https://i.imgur.com/JyrPgUL.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload12 { background: url(https://i.imgur.com/zxLAfAy.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload13 { background: url(https://i.imgur.com/UOUEHRo.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload14 { background: url(https://i.imgur.com/KBDWaOt.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload15 { background: url(https://i.imgur.com/JrmYPjQ.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload16 { background: url(https://i.imgur.com/yM7Mh51.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload17 { background: url(https://i.imgur.com/GiVMOgO.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload18 { background: url(https://i.imgur.com/wzmAW6e.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);
    Styles.add(`#preload19 { background: url(https://i.imgur.com/wJG4bub.png) no-repeat -9999px -9999px;width:1px;height:1px;left:-999px;top:-999px;position:fixed; }`);


    //////////////////////

    $('body2').css('display','none');
$('body').fadeOut(5*timesecond);
setTimeout(function(){
    Styles.add(`.choicy {animation: optionchoose 3s forwards;} @keyframes optionchoose {0% {z-index:9999;width:50%;} 100% {z-index:9999;width:100%;left:0%;}} #halfscreen1:after {background: none repeat scroll 0 0 transparent;bottom: 0;content: "";display: block;height: 50px;left: 50%;position: absolute;background: #000;transition: width 0.3s ease 0s, left 0.3s ease 0s;width: 0;}#halfscreen1:hover:after {width: 100%;left: 0;}#halfscreen2:after {background: none repeat scroll 0 0 transparent;bottom: 0;content: "";display: block;height: 50px;left: 50%;position: absolute;background: #fff;transition: width 0.3s ease 0s, left 0.3s ease 0s;width: 0;}#halfscreen2:hover:after {width: 100%;left: 0;} #halfscreen1 {position: fixed;background: white;cursor:pointer;color: black;width: 50%;left: 0%;text-align: center;height: 100%;display: flex;align-items: center;justify-content: center;font-size: 40px;} #halfscreen2 {position: fixed;cursor:pointer;left: 50%;background: black;color: white;width: 50%;left: 50%;text-align: center;height: 100%;display: flex;align-items: center;justify-content: center;font-size: 40px;} #abcd {background: #212121;width: 100%;height: 100%;position: fixed;} .rivmess {position: fixed;white-space: nowrap;left: 50%;top: 50%;color: #fff; transform: translate(-50%, -50%);opacity: 0.7;animation: textgrowth 5s forwards;} @keyframes textgrowth {0% {font-size: 0px;} 100% {font-size: calc(4vw + 4vh + 2vmin);}}`);
    Styles.add(`.slide {font-family:Consolas;display: flex;align-items: center;justify-content: center;height: 100%;}.row {width: auto;text-align:center;padding: 0px 20% 1% 20%;}`);
    $('body2').fadeIn(5*timesecond);
			},5*timesecond);
    var timeygo = 9*timesecond;
    setTimeout(function(){
    $('body2').html(`<div class="rivmess" id="message1">psst...</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message1').fadeOut(5*timesecond);
			},timeygo);
    timeygo = timeygo + 5*timesecond;
    setTimeout(function(){
    $('body2').html(`<div class="rivmess" id="message1">Hello?</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message1').fadeOut(5*timesecond);
			},timeygo);
    timeygo = timeygo + 5*timesecond;
        setTimeout(function(){
    $('body2').html(`<div class="rivmess" id="message2">I don't have much time</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message2').fadeOut(5*timesecond);
			},timeygo);
        timeygo = timeygo + 5*timesecond;
            setTimeout(function(){
    $('body2').html(`<div class="rivmess" id="message3">I have to admit something</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message3').fadeOut(5*timesecond);
			},timeygo);
        timeygo = timeygo + 5*timesecond;
            setTimeout(function(){
    $('body2').html(`<div class="rivmess" id="message4">I killed Riverbot</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message4').fadeOut(5*timesecond);
			},timeygo);
        timeygo = timeygo + 5*timesecond;
    setTimeout(function(){
    $('body2').html(`<div class="rivmess" id="message5">I had no other choice</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message5').fadeOut(5*timesecond);
			},timeygo);
        timeygo = timeygo + 5*timesecond;
    setTimeout(function(){
        $('body2').html(`<div class="rivmess" id="message6">Will you still help me?</div>`);
			},timeygo);
        setTimeout(function(){
    $('#message6').fadeOut(5*timesecond);
			},timeygo);
        timeygo = timeygo + 5*timesecond;
    setTimeout(function(){
        $('body2').html(`<div id="screenblocker"></div><div class="choice" id="halfscreen1">HELP</div><div class="choice" id="halfscreen2">DON'T HELP</div>`);
        $('#halfscreen1').css('display','none');
        $('#halfscreen2').css('display','none');
			},timeygo);
    setTimeout(function(){
    $('#halfscreen1').fadeIn(5*timesecond);
        $('#halfscreen2').fadeIn(5*timesecond);
        $( "#halfscreen1" ).click(function() { //START HALFSCREEN1
            $("#screenblocker").css('position','fixed').css('background','transparent').css('left','0').css('top','0').css('width','100%').css('height','100%').css('z-index','999999999999');
            $('#halfscreen1').addClass('choicy');
            setTimeout(function(){
                $('#halfscreen2').css('display','none');
                $('#abcd').css('background','#fff');
                $('#halfscreen1').fadeOut(3*timesecond);
                },3*timesecond);
            setTimeout(function(){
                    $("#screenblocker").css('display','none');
                },7*timesecond);
//    $('#halfscreen1').fadeIn(5*timesecond);
            setTimeout(function(){
        $('body2').html(`<div class="slide" id="slide1"><div class="row"><img class="imagy" id="helpimage1" src="https://i.imgur.com/MI4wjqB.png"></img></br><div class="text" id="helptext1">I first opened my bank in 1906. Those were simpler times. We had our ups and downs throughout the years, but our bank was a facet of the Countingston community.</div></br><div class="text" id="helptext2">As the years passed by, I saw our community grow into something beautiful. But people got older. Some passed away. Others moved on. For some time, I felt Countingston wasn't what it used to be. I felt left behind.</div></br></div><div class="nextbutton" id="nextbutton1">>>NEXT</div></div>`);
        Styles.add(`.imagy {max-width:70%;} .nextbutton {position: fixed;left: 87%;top: 87%;background: black;padding: 5px;color: white;font-size: 24px;cursor: pointer;visibility: hidden;}`);
                $('#helpimage1').css('visibility','hidden');
                 $('#helptext1').css('visibility','hidden');
                 $('#helptext2').css('visibility','hidden');
            },9*timesecond);
            setTimeout(function(){
            $('#helpimage1').css('visibility','visible').hide().fadeIn(1*timesecond);
            },9*timesecond);
            setTimeout(function(){
            $('#helptext1').css('visibility','visible').hide().fadeIn(1*timesecond);
            },14*timesecond);
            setTimeout(function(){
            $('#helptext2').css('visibility','visible').hide().fadeIn(1*timesecond);
            },19*timesecond);
            setTimeout(function(){
            $('#nextbutton1').css('visibility','visible').hide().fadeIn(1*timesecond);
                $( "#nextbutton1" ).click(function() {
                 $('#helpimage1').fadeOut(1*timesecond);
                 $('#helptext1').fadeOut(1*timesecond);
                 $('#helptext2').fadeOut(1*timesecond);
                 $('#nextbutton1').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`<div class="slide" id="slide2"><div class="row"><img class="imagy" id="helpimage2" src="https://i.imgur.com/zjpzK2z.png"></img></br><div class="text" id="helptext3">These feelings remained with me for years, but I eventually realized that I could never go back to the good old days. I loved my community too much and didn't want to be so resentful.</div></br></div><div class="nextbutton" id="nextbutton2">>>NEXT</div></div>`);
                $('#helpimage2').css('visibility','hidden');
                 $('#helptext3').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
            $('#helpimage2').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);
            setTimeout(function(){
            $('#helptext3').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);
            setTimeout(function(){
            $('#nextbutton2').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK
                $( "#nextbutton2" ).click(function() {
                 $('#helpimage2').fadeOut(1*timesecond);
                 $('#helptext3').fadeOut(1*timesecond);
                 $('#nextbutton2').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide3">
<div class="row">
<img class="imagy" id="helpimage3" src="https://i.imgur.com/t5kHcTM.png"></img>
</br>
<div class="text" id="helptext4">
The world was becoming increasingly digital. The banking industry was no different. I had to adapt to these changes. As a small bank owner, these adaptations weren't easy, but were necessary for my bank to survive.
</div>
</br>
<div class="text" id="helptext5">
As I would find out, cybersecurity was not my forte. We had no major attacks for years, until a long-time adversary set up Riverbot to remotely rob my bank.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton3">>>NEXT</div></div>`);

                 $('#helpimage3').css('visibility','hidden');
                 $('#helptext4').css('visibility','hidden');
                 $('#helptext5').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
            $('#helpimage3').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);
            setTimeout(function(){
            $('#helptext4').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);
            setTimeout(function(){
            $('#helptext5').css('visibility','visible').hide().fadeIn(1*timesecond);
            },11*timesecond);
            setTimeout(function(){
            $('#nextbutton3').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 3
                $( "#nextbutton3" ).click(function() {
                 $('#helpimage3').fadeOut(1*timesecond);
                 $('#helptext4').fadeOut(1*timesecond);
                 $('#helptext5').fadeOut(1*timesecond);
                 $('#nextbutton3').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide4">
<div class="row">
<img class="imagy" id="helpimage4" src="https://i.imgur.com/Z3WUuD2.png"></img>
</br>
<div class="text" id="helptext6">
Riverbot was created by a former employee of mine, David "River" Bridebride. River was a major contributor in the transition to a digital banking system. We had a good relationship for years until I called him into my office in 2015 and told him we were firing him and replacing him with Joe.
</div>
</br>
<div class="text" id="helptext7">
"Who's Joe?" River asked.
</div>
</br>
<div class="text" id="helptext8">
"JOE MAMMA!!!!!!!!!" I replied.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton4">>>NEXT</div></div>`);

                 $('#helpimage4').css('visibility','hidden');
                 $('#helptext6').css('visibility','hidden');
                 $('#helptext7').css('visibility','hidden');
                 $('#helptext8').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage4').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext6').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext7').css('visibility','visible').hide().fadeIn(1*timesecond);
            },11*timesecond);

            setTimeout(function(){
                $('#helptext8').css('visibility','visible').hide().fadeIn(1*timesecond);
            },16*timesecond);

            setTimeout(function(){
            $('#nextbutton4').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 4
                $( "#nextbutton4" ).click(function() {
                 $('#helpimage4').fadeOut(1*timesecond);
                 $('#helptext6').fadeOut(1*timesecond);
                 $('#helptext7').fadeOut(1*timesecond);
                 $('#helptext8').fadeOut(1*timesecond);
                 $('#nextbutton4').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide5">
<div class="row">
<img class="imagy" id="helpimage5" src="https://i.imgur.com/QZplF6w.png"></img>
</br>
<div class="text" id="helptext9">
River was so insulted by this whole ordeal that he resigned on the spot. I pleaded with him to stay, but he packed his things and left.
</div>
</br>
<div class="text" id="helptext10">
Fast forward until a few months ago. Our bank had overcome some recent struggles and was doing better than it had in decades. The years of progress we had made would all go to waste due to Riverbot.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton5">>>NEXT</div></div>`);

                 $('#helpimage5').css('visibility','hidden');
                 $('#helptext9').css('visibility','hidden');
                 $('#helptext10').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage5').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext9').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext10').css('visibility','visible').hide().fadeIn(1*timesecond);
            },12*timesecond);

            setTimeout(function(){
            $('#nextbutton5').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 5
                $( "#nextbutton5" ).click(function() {
                 $('#helpimage5').fadeOut(1*timesecond);
                 $('#helptext9').fadeOut(1*timesecond);
                 $('#helptext10').fadeOut(1*timesecond);
                 $('#nextbutton5').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide6">
<div class="row">
<img class="imagy" id="helpimage6" src="https://i.imgur.com/Khha89g.png"></img>
</br>
<div class="text" id="helptext11">
River created Riverbot using a copy of our Linux-based system with decompiled VPN backdoor firmware stored on his flash drive. He tested it by stealing small amounts of money that raised no red flags. After various successes in his testing, River began to steal larger and larger amounts of money from the bank.
</div>
</br>
<div class="text" id="helptext12">
Having moved to Livecountingville, River had no association with Countingston any longer. He didn't care whether the citizens of our town suffered. He only cared about advancing his own community, even at the expense of ours. Thus, he made a program which allowed Livecountingville citizens to request cash, calling it a "community project" with money from his "own pocket."
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton6">>>NEXT</div></div>`);

                 $('#helpimage6').css('visibility','hidden');
                 $('#helptext11').css('visibility','hidden');
                 $('#helptext12').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage6').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext11').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext12').css('visibility','visible').hide().fadeIn(1*timesecond);
            },16*timesecond);

            setTimeout(function(){
            $('#nextbutton6').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 6
                $( "#nextbutton6" ).click(function() {
                 $('#helpimage6').fadeOut(1*timesecond);
                 $('#helptext11').fadeOut(1*timesecond);
                 $('#helptext12').fadeOut(1*timesecond);
                 $('#nextbutton6').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide7">
<div class="row">
<img class="imagy" id="helpimage7" src="https://i.imgur.com/JjWf3mR.png"></img>
</br>
<div class="text" id="helptext13">
Albeit each request gave a small amount of money to the requestee, over a long period of time, it benefitted the Livecountingville community greatly.
</div>
</br>
<div class="text" id="helptext14">
Naturally, the citizens of Livecountingville were extremely appreciative of how River was distributing his wealth.  River has pretended to be a multimillionaire giving his money back to his community for months. The people still don't know. I have to expose River's corruption to them.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton7">>>NEXT</div></div>`);

                 $('#helpimage7').css('visibility','hidden');
                 $('#helptext13').css('visibility','hidden');
                 $('#helptext14').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage7').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext13').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext14').css('visibility','visible').hide().fadeIn(1*timesecond);
            },14*timesecond);

            setTimeout(function(){
            $('#nextbutton7').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 7
                $( "#nextbutton7" ).click(function() {
                 $('#helpimage7').fadeOut(1*timesecond);
                 $('#helptext13').fadeOut(1*timesecond);
                 $('#helptext14').fadeOut(1*timesecond);
                 $('#nextbutton7').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide8">
<div class="row">
<img class="imagy" id="helpimage8" src="https://i.imgur.com/3UvI0OF.jpg"></img>
</br>
<div class="text" id="helptext15">
Countingston has declined hard in these past few months. No, our banks aren't FDIC insured, and don't ask why. Our citizens have lost everything. There's no way to recover all of the lost money from our bank.
</div>
</br>
<div class="text" id="helptext16">
River has gained political power as a result of Riverbot's robberies. Unfortunately, he is gaining national recognition for his work. We must stop his rise to prominence.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton8">>>NEXT</div></div>`);

                 $('#helpimage8').css('visibility','hidden');
                 $('#helptext15').css('visibility','hidden');
                 $('#helptext16').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage8').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext15').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext16').css('visibility','visible').hide().fadeIn(1*timesecond);
            },13*timesecond);

            setTimeout(function(){
            $('#nextbutton8').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 8
                $( "#nextbutton8" ).click(function() {
                 $('#helpimage8').fadeOut(1*timesecond);
                 $('#helptext15').fadeOut(1*timesecond);
                 $('#helptext16').fadeOut(1*timesecond);
                 $('#nextbutton8').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide9">
<div class="row">
<img class="imagy" id="helpimage9" src="https://i.imgur.com/IggDP5L.png"></img>
</br>
<div class="text" id="helptext17">
I already did the hard part. I used a GUI interface using Visual Basic to track Riverbot's IP address to find where Riverbot was physically hosted. Then I drove to it and shot the computer.
</div>
</br>
<div class="text" id="helptext18">
Now, River has no way of accessing our funds, so he has canceled his money distribution program. Our goal is to expose River's lies and help the people of Countingston recover from this disaster.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton9">>>NEXT</div></div>`);

                 $('#helpimage9').css('visibility','hidden');
                 $('#helptext17').css('visibility','hidden');
                 $('#helptext18').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage9').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext17').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext18').css('visibility','visible').hide().fadeIn(1*timesecond);
            },13*timesecond);

            setTimeout(function(){
            $('#nextbutton9').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 9
                $( "#nextbutton9" ).click(function() {
                 $('#helpimage9').fadeOut(1*timesecond);
                 $('#helptext17').fadeOut(1*timesecond);
                 $('#helptext18').fadeOut(1*timesecond);
                 $('#nextbutton9').fadeOut(1*timesecond);
                    function disblr(id){
      document.getElementById('passwordbutton1').disabled = true;
      setTimeout(function(){document.getElementById('passwordbutton1').disabled = false;},2*timesecond);
  }
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide10" style="background:black;color:#0F0;">
<div class="row">
<div class="text" id="helptext19">
VERIFICATION REQUIRED</br>ENTER PASSWORD
</div>
</br>
<input class="inputry" id="inputry1">
</input>
</br>
</br>
<button id="passwordbutton1" onClick="disblr()">
SUBMIT
</button>
</br>
</br>
<div class="text" id="helptext20">
ERROR: PASSWORD IS INCORRECT
</div>
</br>
</div>
`);
document.getElementById("passwordbutton1").addEventListener("click", disblr);
                 $('.row').css('visibility','hidden');
                 $('#helptext19').css('visibility','hidden');
                 $('#inputry1').css('visibility','hidden');
                 $('#passwordbutton1').css('visibility','hidden');
                 $('#helptext20').css('visibility','hidden').css('color','red');
            },1*timesecond);
                     setTimeout(function(){
                $('.row').css('visibility','visible').hide().fadeIn(1*timesecond);
            },2*timesecond);
                     setTimeout(function(){
                $('#helptext19').css('visibility','visible').hide().fadeIn(1*timesecond);
            },2*timesecond);
                     setTimeout(function(){
                $('#inputry1').css('visibility','visible').hide().fadeIn(1*timesecond);
            },2*timesecond);
                     setTimeout(function(){
                $('#passwordbutton1').css('visibility','visible').hide().fadeIn(1*timesecond);
                         $( "#passwordbutton1" ).click(function() {
                    if(document.getElementById('inputry1').value != "INCORRECT") {
                        $('#helptext20').css('visibility','visible').hide().fadeIn(000*timesecond);
                        setTimeout(function(){
                $('#helptext20').fadeOut(000*timesecond,function(){$('#helptext20').css("visibility","hidden").css("display","");});
            },0.5*timesecond);
                        setTimeout(function(){
                $('#helptext20').css('visibility','visible').hide().fadeIn(000*timesecond);
            },1*timesecond);
                        setTimeout(function(){
                $('#helptext20').fadeOut(000*timesecond,function(){$('#helptext20').css("visibility","hidden").css("display","");});
            },1.5*timesecond);
//                        alert('ok');
                    } else {
$('body2').html(`
<div class="slide" id="slide11" style="background:black;color:#0F0;">
<div class="row">
<div class="text" id="helptext21">
ACCESS GRANTED
</br>
WELCOME `+USER.toUpperCase()+`
</div>
</div>
</div>
`);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING SECURE NETWORK PROTOCOLS`);
            },4*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`IPv6 ADDRESS`);
            },6*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`IPv6 ADDRESS 127.0.0.1 DONE`);
            },6.3*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING SSL`);
            },6.5*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING SSL DONE`);
            },6.8*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`PERFORMING TLS HANDSHAKE`);
            },7*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`PERFORMING TLS HANDSHAKE DONE`);
            },7.3*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING DATA PACKETS`);
            },7.5*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING DATA PACKETS DONE`);
            },7.8*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`SECURE NETWORK PROTOCOLS SUCCESSFULLY LOADED`);
            },8*timesecond);
                        setTimeout(function(){
                $('body2').html(`
<div class="slide" id="slide12" style="background:black;color:#0F0;">
<div class="row">
<div class="text" id="helptext22">
YOU HAVE ONE NEW MESSAGE
</div>
</div>
</div>
`);
            },11*timesecond);
                        setTimeout(function(){
                $('body2').html(`
<div class="slide" id="slide13" style="background:black;color:#0F0;">
<div class="row">
<div class="text" id="helptext23">
Opening
</div>
</div>
</div>
`);
            },15*timesecond);
                        setTimeout(function(){
                $('#helptext23').text(`Opening .`);
            },16*timesecond);
                        setTimeout(function(){
                $('#helptext23').text(`Opening . .`);
            },17*timesecond);
                        setTimeout(function(){
                $('#helptext23').text(`Opening . . .`);
            },18*timesecond);
                        setTimeout(function(){
                $('body2').html(`
<div class="slide" id="slide14" style="background:black;color:#0F0;">
<div class="row">
<div class="text" id="helptext24">
MESSAGE FROM: Anonymous
</br>
</br>
Please visit https://www.reddit.com/live/ta535s1hq2je/#graphite in a new tab and copy and paste the following into the chat:
</br>
<input type="text" id="graphite" value="^^^^^^^^^^^^^^^^nochat ^^^^^^^^^^^^^^^^^join Hi">
</br>
This will allow us revolutionaries to better communicate in the future. Thank you for choosing to help.
</br>
</br>
END MESSAGE
</div>
</div>
</div>
`);
                            document.getElementById("graphite").readOnly = true;
                            $('#graphite').css('width','500px');
                            },19*timesecond);
                    } //password1 correct end
                    }); //password1 click end
            },2*timesecond);


                    });//nextbutton9 click end
            },20*timesecond); //nextbutton 9

                 });//nextbutton8 click end
            },20*timesecond); //nextbutton 8

                 });//nextbutton7 click end
            },21*timesecond); //nextbutton 7

                 });//nextbutton6 click end
            },26*timesecond); //nextbutton 6

                 });//nextbutton5 click end
            },19*timesecond); //nextbutton 5

                 });//nextbutton4 click end
            },21*timesecond); //nextbutton 4

                 });//nextbutton3 click end
            },18*timesecond);//nextbutton 3
                 });//nextbutton2 click end
            },13*timesecond);//nextbutton2

            }); //nextbutton1 click end
            },26*timesecond); //nextbutton1

        }); //halfscreen1 click end
        $( "#halfscreen2" ).click(function() { //START HALFSCREEN2
            $('#halfscreen2').addClass('choicy');
            $("#screenblocker").css('position','fixed').css('background','transparent').css('left','0').css('top','0').css('width','100%').css('height','100%').css('z-index','999999999999');
setTimeout(function(){
                $('#halfscreen1').css('display','none');
                $('#abcd').css('background','#000');
                $('#halfscreen2').fadeOut(3*timesecond);
                },3*timesecond);
            setTimeout(function(){
                    $("#screenblocker").css('display','none');
                },7*timesecond);
//    $('#halfscreen1').fadeIn(5*timesecond);
            setTimeout(function(){
        $('body2').html(`<div class="slide" id="slide1"><div class="row"><img class="imagy" id="helpimage1" src="https://i.imgur.com/zxLAfAy.png"></img></br><div class="text" id="helptext1">Hey there! My name's David "River" Bridebride. I'm a hard-working Livecountingville citizen, just like you.</div></br><div class="text" id="helptext2">Listen, I understand your problems. I was in your shoes too. Who were you just talking to?</div></br></div><div class="nextbutton" id="nextbutton1">>>NEXT</div></div>`);
        Styles.add(`.imagy {max-width:70%;} .nextbutton {position: fixed;left: 87%;top: 87%;background: white;padding: 5px;color: black;font-size: 24px;cursor: pointer;visibility: hidden;} .slide {background: #000; color: #fff;}`);

                $('#helpimage1').css('visibility','hidden');
                 $('#helptext1').css('visibility','hidden');
                 $('#helptext2').css('visibility','hidden');
            },9*timesecond);
            setTimeout(function(){
            $('#helpimage1').css('visibility','visible').hide().fadeIn(1*timesecond);
            },9*timesecond);
            setTimeout(function(){
            $('#helptext1').css('visibility','visible').hide().fadeIn(1*timesecond);
            },14*timesecond);
            setTimeout(function(){
            $('#helptext2').css('visibility','visible').hide().fadeIn(1*timesecond);
            },19*timesecond);
            setTimeout(function(){
            $('#nextbutton1').css('visibility','visible').hide().fadeIn(1*timesecond);
                $( "#nextbutton1" ).click(function() {
                 $('#helpimage1').fadeOut(1*timesecond);
                 $('#helptext1').fadeOut(1*timesecond);
                 $('#helptext2').fadeOut(1*timesecond);
                 $('#nextbutton1').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`<div class="slide" id="slide2"><div class="row"><img class="imagy" id="helpimage2" src="https://i.imgur.com/JyrPgUL.png"></img></br><div class="text" id="helptext3">Did they look something like this? This is a picture of my old boss.</div></br><div class="text" id="helptext3p5">He's been obsessed with me lately. I'm beginning to become worried.</div></br></div><div class="nextbutton" id="nextbutton2">>>NEXT</div></div>`);
                $('#helpimage2').css('visibility','hidden');
                 $('#helptext3').css('visibility','hidden');
                  $('#helptext3p5').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
            $('#helpimage2').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);
            setTimeout(function(){
            $('#helptext3').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);
            setTimeout(function(){
            $('#helptext3p5').css('visibility','visible').hide().fadeIn(1*timesecond);
            },11*timesecond);
            setTimeout(function(){
            $('#nextbutton2').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK
                $( "#nextbutton2" ).click(function() {
                 $('#helpimage2').fadeOut(1*timesecond);
                 $('#helptext3').fadeOut(1*timesecond);
                 $('#nextbutton2').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide3">
<div class="row">
<img class="imagy" id="helpimage3" src="https://i.imgur.com/UOUEHRo.png"></img>
</br>
<div class="text" id="helptext4">
He is a corrupt bankowner who cannot deal with the fact that he has competition.
</div>
</br>
<div class="text" id="helptext5">
Please don't trust the baseless conspiracy theories he's been putting out about me or my business.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton3">>>NEXT</div></div>`);

                 $('#helpimage3').css('visibility','hidden');
                 $('#helptext4').css('visibility','hidden');
                 $('#helptext5').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
            $('#helpimage3').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);
            setTimeout(function(){
            $('#helptext4').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);
            setTimeout(function(){
            $('#helptext5').css('visibility','visible').hide().fadeIn(1*timesecond);
            },11*timesecond);
            setTimeout(function(){
            $('#nextbutton3').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 3
                $( "#nextbutton3" ).click(function() {
                 $('#helpimage3').fadeOut(1*timesecond);
                 $('#helptext4').fadeOut(1*timesecond);
                 $('#helptext5').fadeOut(1*timesecond);
                 $('#nextbutton3').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide4">
<div class="row">
<img class="imagy" id="helpimage4" src="https://i.imgur.com/JrmYPjQ.png"></img>
</br>
<div class="text" id="helptext6">
His name is Daniel Top, and he should be in jail. I helped with many technological aspects of his bank, like creating an app. It became much more convenient.
</div>
</br>
<div class="text" id="helptext7">
Daniel never did any work. He always pestered me to do it.
</div>
</br>
<div class="text" id="helptext8">
So I quit and started my own bank.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton4">>>NEXT</div></div>`);

                 $('#helpimage4').css('visibility','hidden');
                 $('#helptext6').css('visibility','hidden');
                 $('#helptext7').css('visibility','hidden');
                 $('#helptext8').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage4').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext6').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext7').css('visibility','visible').hide().fadeIn(1*timesecond);
            },11*timesecond);

            setTimeout(function(){
                $('#helptext8').css('visibility','visible').hide().fadeIn(1*timesecond);
            },16*timesecond);

            setTimeout(function(){
            $('#nextbutton4').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 4
                $( "#nextbutton4" ).click(function() {
                 $('#helpimage4').fadeOut(1*timesecond);
                 $('#helptext6').fadeOut(1*timesecond);
                 $('#helptext7').fadeOut(1*timesecond);
                 $('#helptext8').fadeOut(1*timesecond);
                 $('#nextbutton4').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide5">
<div class="row">
<img class="imagy" id="helpimage5" src="https://i.imgur.com/KBDWaOt.png"></img>
</br>
<div class="text" id="helptext9">
His bank began to struggle after I left. I had moved away from Countingston and my bank was doing great... up until recently.
</div>
</br>
<div class="text" id="helptext10">
A short while ago, David broke into my bank and physically shot my hardware. I lost everything. If he couldn't be successful, no one could.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton5">>>NEXT</div></div>`);

                 $('#helpimage5').css('visibility','hidden');
                 $('#helptext9').css('visibility','hidden');
                 $('#helptext10').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage5').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext9').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext10').css('visibility','visible').hide().fadeIn(1*timesecond);
            },12*timesecond);

            setTimeout(function(){
            $('#nextbutton5').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 5
                $( "#nextbutton5" ).click(function() {
                 $('#helpimage5').fadeOut(1*timesecond);
                 $('#helptext9').fadeOut(1*timesecond);
                 $('#helptext10').fadeOut(1*timesecond);
                 $('#nextbutton5').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide6">
<div class="row">
<img class="imagy" id="helpimage6" src="https://i.imgur.com/yM7Mh51.png"></img>
</br>
<div class="text" id="helptext11">
As it turns out, Mr. Top has developed a wild conspiracy theory about me stealing from his bank to fund my own. He even blabbles about technological terms he knows nothing about.
</div>
</br>
<div class="text" id="helptext12">
It's absolute lunacy. I'm sorry his bank isn't doing great, but he's crossed the line. I've got to do something about this.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton6">>>NEXT</div></div>`);

                 $('#helpimage6').css('visibility','hidden');
                 $('#helptext11').css('visibility','hidden');
                 $('#helptext12').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage6').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext11').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext12').css('visibility','visible').hide().fadeIn(1*timesecond);
            },16*timesecond);

            setTimeout(function(){
            $('#nextbutton6').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 6
                $( "#nextbutton6" ).click(function() {
                 $('#helpimage6').fadeOut(1*timesecond);
                 $('#helptext11').fadeOut(1*timesecond);
                 $('#helptext12').fadeOut(1*timesecond);
                 $('#nextbutton6').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide7">
<div class="row">
<img class="imagy" id="helpimage7" src="https://i.imgur.com/GiVMOgO.png"></img>
</br>
<div class="text" id="helptext13">
Recently, Daniel Top has been going around to various members of Livecountingville to try to convince them to join his "revolution."
</div>
</br>
<div class="text" id="helptext14">
I'm guessing he asked you to do the same. Thank you for choosing not to help him. I hope you're considering helping me escape this mess.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton7">>>NEXT</div></div>`);

                 $('#helpimage7').css('visibility','hidden');
                 $('#helptext13').css('visibility','hidden');
                 $('#helptext14').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage7').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext13').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext14').css('visibility','visible').hide().fadeIn(1*timesecond);
            },14*timesecond);

            setTimeout(function(){
            $('#nextbutton7').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 7
                $( "#nextbutton7" ).click(function() {
                 $('#helpimage7').fadeOut(1*timesecond);
                 $('#helptext13').fadeOut(1*timesecond);
                 $('#helptext14').fadeOut(1*timesecond);
                 $('#nextbutton7').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide8">
<div class="row">
<img class="imagy" id="helpimage8" src="https://i.imgur.com/wzmAW6e.png"></img>
</br>
<div class="text" id="helptext15">
I'm establishing a coalition of Riverbot supporters to help start the bot again and revitalize the Livecountingville community.
</div>
</br>
<div class="text" id="helptext16">
I can't reward you right now, but we need to fight for justice. But first, we need a secure method of communication.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton8">>>NEXT</div></div>`);

                 $('#helpimage8').css('visibility','hidden');
                 $('#helptext15').css('visibility','hidden');
                 $('#helptext16').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage8').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext15').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext16').css('visibility','visible').hide().fadeIn(1*timesecond);
            },13*timesecond);

            setTimeout(function(){
            $('#nextbutton8').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 8
                $( "#nextbutton8" ).click(function() {
                 $('#helpimage8').fadeOut(1*timesecond);
                 $('#helptext15').fadeOut(1*timesecond);
                 $('#helptext16').fadeOut(1*timesecond);
                 $('#nextbutton8').fadeOut(1*timesecond);
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide9">
<div class="row">
<img class="imagy" id="helpimage9" src="https://i.imgur.com/wJG4bub.png"></img>
</br>
<div class="text" id="helptext17">
You will now be redirected to a verification system to ensure your loyalty to me. Hopefully you'll be able to make it through. If you get stuck, just think.
</div>
</br>
<div class="text" id="helptext18">
Best of luck, and I hope to see you soon.
</div>
</br>
</div>
<div class="nextbutton" id="nextbutton9">>>NEXT</div></div>`);

                 $('#helpimage9').css('visibility','hidden');
                 $('#helptext17').css('visibility','hidden');
                 $('#helptext18').css('visibility','hidden');
            },1*timesecond);
            setTimeout(function(){
                $('#helpimage9').css('visibility','visible').hide().fadeIn(1*timesecond);
            },3*timesecond);

            setTimeout(function(){
                $('#helptext17').css('visibility','visible').hide().fadeIn(1*timesecond);
            },6*timesecond);

            setTimeout(function(){
                $('#helptext18').css('visibility','visible').hide().fadeIn(1*timesecond);
            },13*timesecond);

            setTimeout(function(){
            $('#nextbutton9').css('visibility','visible').hide().fadeIn(1*timesecond);
/////NEW CLICK BUTTON 9
                $( "#nextbutton9" ).click(function() {
                 $('#helpimage9').fadeOut(1*timesecond);
                 $('#helptext17').fadeOut(1*timesecond);
                 $('#helptext18').fadeOut(1*timesecond);
                 $('#nextbutton9').fadeOut(1*timesecond);
                    function disblr(id){
      document.getElementById('passwordbutton1').disabled = true;
      setTimeout(function(){document.getElementById('passwordbutton1').disabled = false;},2*timesecond);
  }
                setTimeout(function(){
        $('body2').html(`
<div class="slide" id="slide10" style="background:black;color:#00F;">
<div class="row">
<div class="text" id="helptext19">
VERIFICATION REQUIRED</br>ENTER PASSWORD
</div>
</br>
<input class="inputry" id="inputry1">
</input>
</br>
</br>
<button id="passwordbutton1" onClick="disblr()">
SUBMIT
</button>
</br>
</br>
<div class="text" id="helptext20">
ERROR: PASSWORD IS INCORRECT
</div>
</br>
</div>
`);
document.getElementById("passwordbutton1").addEventListener("click", disblr);
                 $('.row').css('visibility','hidden');
                 $('#helptext19').css('visibility','hidden');
                 $('#inputry1').css('visibility','hidden');
                 $('#passwordbutton1').css('visibility','hidden');
                 $('#helptext20').css('visibility','hidden').css('color','red');
            },1*timesecond);
                     setTimeout(function(){
                $('.row').css('visibility','visible').hide().fadeIn(1*timesecond);
            },2*timesecond);
                     setTimeout(function(){
                $('#helptext19').css('visibility','visible').hide().fadeIn(1*timesecond);
            },2*timesecond);
                     setTimeout(function(){
                $('#inputry1').css('visibility','visible').hide().fadeIn(1*timesecond);
            },2*timesecond);
                     setTimeout(function(){
                $('#passwordbutton1').css('visibility','visible').hide().fadeIn(1*timesecond);
                         $( "#passwordbutton1" ).click(function() {
                    if(document.getElementById('inputry1').value != "INCORRECT") {
                        $('#helptext20').css('visibility','visible').hide().fadeIn(000*timesecond);
                        setTimeout(function(){
                $('#helptext20').fadeOut(000*timesecond,function(){$('#helptext20').css("visibility","hidden").css("display","");});
            },.5*timesecond);
                        setTimeout(function(){
                $('#helptext20').css('visibility','visible').hide().fadeIn(000*timesecond);
            },1*timesecond);
                        setTimeout(function(){
                $('#helptext20').fadeOut(000*timesecond,function(){$('#helptext20').css("visibility","hidden").css("display","");});
            },1.5*timesecond);
//                        alert('ok');
                    } else {
$('body2').html(`
<div class="slide" id="slide11" style="background:black;color:#00F;">
<div class="row">
<div class="text" id="helptext21">
ACCESS GRANTED
</br>
WELCOME `+USER.toUpperCase()+`
</div>
</div>
</div>
`);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING SECURE NETWORK PROTOCOLS`);
            },4*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`IPv6 ADDRESS`);
            },6*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`IPv6 ADDRESS 127.0.0.1 DONE`);
            },6.3*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING SSL`);
            },6.5*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING SSL DONE`);
            },6.8*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`PERFORMING TLS HANDSHAKE`);
            },7*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`PERFORMING TLS HANDSHAKE DONE`);
            },7.3*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING DATA PACKETS`);
            },7.5*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`LOADING DATA PACKETS DONE`);
            },7.8*timesecond);
                        setTimeout(function(){
                $('#helptext21').text(`SECURE NETWORK PROTOCOLS SUCCESSFULLY LOADED`);
            },8*timesecond);
                        setTimeout(function(){
                $('body2').html(`
<div class="slide" id="slide12" style="background:black;color:#00F;">
<div class="row">
<div class="text" id="helptext22">
YOU HAVE ONE NEW MESSAGE
</div>
</div>
</div>
`);
            },11*timesecond);
                        setTimeout(function(){
                $('body2').html(`
<div class="slide" id="slide13" style="background:black;color:#00F;">
<div class="row">
<div class="text" id="helptext23">
Opening
</div>
</div>
</div>
`);
            },15*timesecond);
                        setTimeout(function(){
                $('#helptext23').text(`Opening .`);
            },16*timesecond);
                        setTimeout(function(){
                $('#helptext23').text(`Opening . .`);
            },17*timesecond);
                        setTimeout(function(){
                $('#helptext23').text(`Opening . . .`);
            },18*timesecond);
                        setTimeout(function(){
                $('body2').html(`
<div class="slide" id="slide14" style="background:black;color:#00F;">
<div class="row">
<div class="text" id="helptext24">
MESSAGE FROM: River
</br>
</br>
Please visit https://www.reddit.com/live/ta535s1hq2je/#riverbot in a new tab and copy and paste the following into the chat:
</br>
<input type="text" id="graphite" value="^^^^^^^^^^^^^^^^nochat ^^^^^^^^^^^^^^^^^join Hey">
</br>
This will allow our coalition to communicate going forwards. Thank you for choosing to help!
</br>
</br>
END MESSAGE
</div>
</div>
</div>
`);
                            document.getElementById("graphite").readOnly = true;
                            $('#graphite').css('width','500px');
                            },19*timesecond);
                    } //password1 correct end
                    }); //password1 click end
            },2*timesecond);


                    });//nextbutton9 click end
            },20*timesecond); //nextbutton 9

                 });//nextbutton8 click end
            },20*timesecond); //nextbutton 8

                 });//nextbutton7 click end
            },21*timesecond); //nextbutton 7

                 });//nextbutton6 click end
            },26*timesecond); //nextbutton 6

                 });//nextbutton5 click end
            },19*timesecond); //nextbutton 5

                 });//nextbutton4 click end
            },21*timesecond); //nextbutton 4

                 });//nextbutton3 click end
            },18*timesecond);//nextbutton 3
                 });//nextbutton2 click end
            },16*timesecond);//nextbutton2

            }); //nextbutton1 click end
            },26*timesecond); //nextbutton1
        }); //halfscreen2 click end
			},timeygo); //end of setTimeout for halfscreen1/2
     timeygo = timeygo + 5*timesecond;
},4.5*timesecond);

});

},8*timesecond); //post 2


    }
			},2*timesecond); // end settimeout checking for if discusions

} //end abril2020=16

/////////////////////april 2020 16


/////////////////////END APRIL FOOLS 2020 abril2020




//////////////////////APRIL FOOLS VARIABLE

//aprilbools = -1;




if (window.location.href.toLowerCase().indexOf("?") == -1 && window.location.href.toLowerCase().indexOf("ta535s1hq2je") > -1 ) {
foolsprob = Math.floor(Math.random() * 100) + 1;
if (0 < foolsprob && foolsprob < 36) {
aprilbools = 1;
foolsprobt = ' (35%)';
} else if (35 < foolsprob && foolsprob < 51) {
aprilbools = 2;
foolsprobt = ' (15%)';
} else if (50 < foolsprob && foolsprob < 66) {
aprilbools = 3;
foolsprobt = ' (15%)';
} else if (65 < foolsprob && foolsprob < 71) {
aprilbools = 4;
foolsprobt = ' (5%)';
} else if (70 < foolsprob && foolsprob < 81) {
aprilbools = 5;
foolsprobt = ' (10%)';
} else if (80 < foolsprob && foolsprob < 91) {
aprilbools = 6;
foolsprobt = ' (10%)';
} else if (90 < foolsprob && foolsprob < 100) {
aprilbools = 7;
foolsprobt = ' (9%)';
} else if (100 == foolsprob) {
aprilbools = 8;
foolsprobt = ' (1%)';
}



} else {
aprilbools = 2;
}


if (aprilbools2 == false || window.location.href.toLowerCase().indexOf("ta535s1hq2je") == -1 || window.location.href.toLowerCase().indexOf("discussions") > -1 || window.location.href.toLowerCase().indexOf("edit") > -1 || window.location.href.toLowerCase().indexOf("contributors") > -1 || window.location.href.toLowerCase().indexOf("updates") > -1) {
aprilbools = 0;
foolsprobt = '';
} else {
$('#lceversion').text(`Live Counting Extension v1.6.`+aprilbools);
$('#liveupdate-description .md p').append(`<span>     [Live Counting `+aprilbools+foolsprobt+`]</span>`);
}

if (aprilbools2 == false) {
aprilbools = 0;
}


//////////////////////APRIL FOOLS VARIABLE


/////////////////////april fools 2
if (0 < aprilbools && aprilbools < 9) {
if (aprilbools == 2 || window.location.href.toLowerCase().indexOf("initial") > -1) {$('#liveupdate-title').text(`Congrats on getting this special april fools thing. This one is a puzzle, and you will put your answers in the URL. To start, add ?start to the end of the URL, and load the page.`);$('#liveupdate-title').css('background', 'lightblue');}if(window.location.href.toLowerCase().indexOf("?") > -1 && window.location.href.toLowerCase().indexOf("initial") == -1) {$('#liveupdate-title').text(`Incorrect. Go back. (If you do not know what this is, add "?initial" to the URL.)`);}if(window.location.href.toLowerCase().indexOf("start") > -1) {$('#liveupdate-title').text(`Congrats on reaching LEVEL 1. To get to level 2... what was the last name of the first president of the US? Replace the word "start" in the URL with your answer.`);}if(window.location.href.toLowerCase().indexOf("washington") > -1) {$('#liveupdate-title').text(`You have reached LEVEL 2. Next question... in 2013, Team Orangered defeated Team _____?`);}if(window.location.href.toLowerCase().indexOf("periwinkle") > -1) {$('#liveupdate-title').text(`LEVEL 3. Who was the first admin to count in this thread?`);}if(window.location.href.toLowerCase().indexOf("alienth") > -1) {$('#liveupdate-title').text(`LEVEL 4. What is the word for the sore feeling you get in your left pinkie following the excessive use of the "ctrl" key?`);}if(window.location.href.toLowerCase().indexOf("hyptoheicla") > -1) {$('#liveupdate-title').text(`LEVEL 5!!! What was the name of the account that /u/NobodyL0vesMe ran with in his fastest run, a 5:11?`);}if(window.location.href.toLowerCase().indexOf("endcountingdrama2019") > -1) {$('#liveupdate-title').text(`LEVEL 6. Fill in the blank: ________ FOUND ON MARS. Hint: You need to put a space in your answer.`);}if(window.location.href.toLowerCase().indexOf("despacito%202") > -1) {$('#liveupdate-title').text(`LEVEL ?. Type out what the NEXT level is.`);}if(window.location.href.toLowerCase().indexOf("eight") > -1) {$('#liveupdate-title').text(`LEVEL 8. What is the name of the website that noduorg is from?`);}if(window.location.href.toLowerCase().indexOf("thestudentroom") > -1) {$('#liveupdate-title').text(`LEVEL 9. For every speed record after sub-10 was reached, /u/davidjl123 has been a part of each of them, except one. Who did /u/Tranquilsunrise run with to achieve a record 8:20?`);}if(window.location.href.toLowerCase().indexOf("gordonpt8") > -1) {$('#liveupdate-title').text(`LEVEL 10. Who was the first user to get a 1 second reply in /r/counting?`);}if(window.location.href.toLowerCase().indexOf("morallygray") > -1) {$('#liveupdate-title').text(`LEVEL 11. Which counter was the FIRST to include the phrase "not found" when posting a 404?`);}if(window.location.href.toLowerCase().indexOf("rschaosid") > -1) {$('#liveupdate-title').text(`LEVEL 12. Who does dominodan describe as "an iconic pre-revival LC counter who we know next to nothing about and used to use passing in HoC as a sort of coming-of-age"?`);}if(window.location.href.toLowerCase().indexOf("grunf") > -1) {$('#liveupdate-title').text(`LEVEL 13. What month did the first tie for most counts in a day happen?`);}if(window.location.href.toLowerCase().indexOf("june") > -1) {$('#liveupdate-title').text(`LEVEL 14. 01010111 01101000 01100001 01110100 00100000 01100010 01100001 01100011 01101111 01101110 01110011 00100000 01100001 01110100 00100000 01101101 01101001 01100100 01101110 01101001 01100111 01101000 01110100 00111111`);}if(window.location.href.toLowerCase().indexOf("narwhal") > -1) {$('#liveupdate-title').text(`LEVEL 15. Who won separator week? This answer also has a space in it. `);}if(window.location.href.toLowerCase().indexOf("team%20comma") > -1) {$('#liveupdate-title').text(`LEVEL 16. VGhpcyBpcyBiYXNlIDY0LiBUaGlzIHdlYnNpdGUgbWlnaHQgYmUgdXNlZnVsIGZvciB5b3U6IGh0dHA6Ly9ydW1raW4uY29tL3Rvb2xzL2NpcGhlci9jYWVzYXIta2V5ZWQucGhwCgpBbnl3YXksIHRvIGdldCB0byBsZXZlbCAxNywgZ28gdG8gdGhhdCB3ZWJzaXRlIGFuZCBlbnRlciAibGl2ZWNvdW50aW5nIiBhcyB0aGUga2V5LiBUaGVuLCBpbiB0aGUgYm94LCBlbnRlciB0aGUgdXNlcm5hbWUgKG5vIC91Lykgb2YgRWxsZW4gUGFvJ3MgcmVkZGl0IGFjY291bnQuIA==`);}if(window.location.href.toLowerCase().indexOf("cagj") > -1) {$('#liveupdate-title').text(`LEVEL 17. cagj. Vhmmcvq. To yhr lmc mcletfu qntp, uhhe ghi. Haly, qnc fcxq lfpwcm wtbb grpq ic fhmdlb qcxq. Wnlq ohhe tp /r/EH_R_CSF_PJLUNCQQT oldhrp ohm clqtfu?`);}if(window.location.href.toLowerCase().indexOf("rice") > -1) {$('#liveupdate-title').text(`LEVEL 18. You've almost made it. I'm trying to make the final question more obscure. This one is from a historic reddit comment. Thirteen years from now, what will be the first name of the first draft pick in the NFL?`);}if(window.location.href.toLowerCase().indexOf("streetlamp") > -1) {$('#liveupdate-title').text(`LEVEL 19. Congratulations, you've finished this puzzle. I don't know if anyone will actually finish this (with or without cheating). Welp, hope you had fun. `);}
}
/////////////////////april fools 2



/////////////////////april fools 3
if (aprilbools == 3) {
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

if (aprilbools == 4) {

$("button.btn").text("I didn't like this one so I removed it. You're welcome.");

}

/////////////////////april fools 4


/////////////////////april fools 7

if (aprilbools == 7) {

$("button.btn").text("Sorry pika...");

$("button.btn").delay(10000).hide(2500);

}

/////////////////////april fools 7

///////////////april fools 8

if (aprilbools == 8) {

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

/////////////april fools 1
if (aprilbools == 1) {
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


    /////////////april 2020 10
if (abril2020 == 10) {
    var namecolors = ['TOP_','amazing','domino','Itz','nodu','Nobody','Lona','Maybe','david','Leinad','smarvin','tre','Chalupa_','Smart','piyush','gordon','Questo','ride','art','qwerty','Tranquil','Nikin','Demon','co3_','rs','Mr','ab','bass','Iam','Raja','parker_','Vitamin','Pale'];
    for (var i = namecolors.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var nametemp = namecolors[i];
        namecolors[i] = namecolors[j];
        namecolors[j] = nametemp;
    }
    var namecolors2 = ['20','pikachu_38','dan123','Taken','org','L0vesMe','dont','NotWrong','jl123','Spoon','6689','je','Dad','stocks','sharma301','pt8','Guy','ride','bn','lool','sunrise','CZ','BurritoCat','carbonate','Underdawg','chaosid','plows','kro','speedy36','laxo','cube','B16','Representative'];
    for (var i = namecolors2.length - 1; i > 0; i--) {
        // use Durstenfeld shuffle algorithm on colors array
        var j = Math.floor(Math.random() * (i + 1));
        var nametemp2 = namecolors2[i];
        namecolors2[i] = namecolors2[j];
        namecolors2[j] = nametemp2;
    }
}

/////////////april 2020 10

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
if (aprilbools == 1) {
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

    /////////////april fools 10
if (abril2020 == 10) {
    var currentNameColor = 0;
    var ranName = {
'lol': 'lol',
};
    var currentNameColor2 = 0;
    var ranName2 = {
'lol': 'lol',
};
}
/////////////april fools 10

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


if(window.location.href.indexOf("10gelxprc1umi") > -1) {

var entirepost = data.body_elem.text();

//OK So here's the format: [xxx,xx,xxx,xx,xxxxxx]
// It's [X position, Y position, width, height, color]


entirepost = entirepost.split(" ").join("\n");
entirepost = entirepost.split("[").join("\n[");
entirepost = entirepost.split("]").join("]\n");
entirepost = entirepost.replace(/^(?!.*\[.{3},.{2},.{3},.{2},.{6}\]).*$/gm, ``);
entirepost = entirepost.split("\n").join("");
if (entirepost.length > 0) {
var place1 = entirepost;
var place2 = entirepost;
var place3 = entirepost;
var place4 = entirepost;
var place5 = entirepost;
var place1 = place1.replace(/,.{2},.{3},.{2},.{6}\]/gm, ``);
place1 = place1.replace(/\[/gm, ``);
var place2 = place2.replace(/,.{3},.{2},.{6}\]/gm, ``);
place2 = place2.replace(/\[.{3},/gm, ``);
var place3 = place3.replace(/,.{2},.{6}\]/gm, ``);
place3 = place3.replace(/\[.{3},.{2},/gm, ``);
var place4 = place4.replace(/,.{6}\]/gm, ``);
place4 = place4.replace(/\[.{3},.{2},.{3},/gm, ``);
var place5 = place5.replace(/\[.{3},.{2},.{3},.{2},/gm, ``);
place5 = place5.replace(/\]/gm, ``);

//var hmm = `context.fillRect(50,50,5,5,60,41,91);`;

//hmm;

var lolzo = context.fillStyle = "#"+place5;
 var lolzo = context.fillRect(place1,place2,place3,place4);


}

    }

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
entirepost = entirepost.replace(count1testlol,`<p id="counttext" style="font-size: 14px; display:inline;">`+count1testlol+` ​</p>`);
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


        /////////////////////APRIL FOOLS SECRET MESSAGES????


//        Styles.add(`
//a[href*='#test'] {
//background: black;
//    color: white;
//}
//a[href*='#test']:after {
//content: attr(title);
//}

 //       `);
        //if($node.find('.body > .md > p > a').attr('href') != undefined) {
        //    alert('yooooo');
        //}

        //////////////


        /////////////////////april 2020 2

if (abril2020 == 2) {
  var count1testlol = data.body_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    var count2text = data.body_elem.text();;
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
if (count1testlol.length == 6) {
//count1testlol = count1testlol.substr(count1testlol.length - 1);
    count1testlol = count1testlol.substr(0,count1testlol.length - 1);
} else {
//count1testlol = count1testlol.substr(count1testlol.length - 3);
    count1testlol = count1testlol.substr(0,count1testlol.length - 3);
}
    if (count1testlol.length == 6) {
//count1testlol = count1testlol.substr(count1testlol.length - 1);
    count1testlol = count1testlol.substr(0,count1testlol.length - 1);
}
var count1testlolnext = count1testlol.substring(0,1);
    var repl = 0;
    var stringpart1 = count2text.substring(0,1);
    var stringpart2 = count2text.substring(1,2);
    var stringpart3 = count2text.substring(2,3);
    var stringpart4 = count2text.substring(3,4);
    var stringpart5 = count2text.substring(4,5);
    var stringpart6 = count2text.substring(5,6);
    var stringpart7 = count2text.substring(6,7);
    var stringpart8 = count2text.substring(7,8);
    var stringpart9 = count2text.substring(8,9);
    var stringpart10 = count2text.substring(9,10);
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(count1testlol.substring(0,1))) == false) {
            var stringpart1 = Math.floor(Math.random() * 9) + 1;
            stringpart1 = stringpart1.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart2)) == false) {
            var stringpart2 = Math.floor(Math.random() * 10);
            stringpart2 = stringpart2.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart3)) == false) {
            var stringpart3 = Math.floor(Math.random() * 10);
            stringpart3 = stringpart3.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart4)) == false) {
            var stringpart4 = Math.floor(Math.random() * 10);
            stringpart4 = stringpart4.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart5)) == false) {
            var stringpart5 = Math.floor(Math.random() * 10);
            stringpart5 = stringpart5.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart6)) == false) {
            var stringpart6 = Math.floor(Math.random() * 10);
            stringpart6 = stringpart6.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart7)) == false) {
            var stringpart7 = Math.floor(Math.random() * 10);
            stringpart7 = stringpart7.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart8)) == false) {
            var stringpart8 = Math.floor(Math.random() * 10);
            stringpart8 = stringpart8.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart9)) == false) {
            var stringpart9 = Math.floor(Math.random() * 10);
            stringpart9 = stringpart9.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5 && repl < 5) {
        if(isNaN(parseInt(stringpart10)) == false) {
            var stringpart10 = Math.floor(Math.random() * 10);
            stringpart10 = stringpart10.toString();
            repl += 1
            }
    }
    if(count1testlol.length == 5) {
        count2text = stringpart1 + stringpart2 + stringpart3 + stringpart4 + stringpart5 + stringpart6 + stringpart7 + stringpart8 + stringpart9 + stringpart10 + count2text.slice(10)
    }

data.body_elem.text(count2text);

}

/////////////////////april 2020 2


      /////////////////////april 2020 6

if (abril2020 == 6) {
  var count1testlol = data.body_elem.text();
    var count1testlolauthor = data.author_elem.text();
var count1text = count1testlol;
count1testlol = count1testlol.substring(0, 10);
    var count2text = data.body_elem.text();;
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1testlol = count1testlol.replace(/,/g, '');
    count1testlol = count1testlol.replace(/ /g, '');
count1testlol = count1testlol.replace(/\./g, '');
if(count1testlol.includes("69") && count1testlolauthor.length > 3) {
    setTimeout(function(){
        $(".liveupdate-listing").prepend(`<li class="liveupdate deadupdate"><a href="/live/ta535s1hq2je/updates/f4c886aa-535a-11e9-8133-0e5d46594c50" target="_blank"><time class="live-timestamp" datetime="2019-03-31T02:16:13.000Z" title="this is fake lol">just now</time></a><div class="body"><div class="md"><blockquote> <p>69</p> </blockquote> <p>nice</p> </div><a href="/user/countmeister" class="deadauthor" style="color: Black;"> /u/69_bot</a></div><ul class="buttonrow"><li><span class="strike confirm-button"><button>this is fake lol</button></span></li><li><span class="delete confirm-button"><button>delete</button></span></li></ul></li>`);
			},50);
}
}


    /////////////////////april 2020 6



          /////////////////////april 2020 10

if (abril2020 == 10) {
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

        data.author_elem.html('/u/' + ranName[data.author] + ranName2[data.author]);
}


    /////////////////////april 2020 10


/////////////april fools 1
if (aprilbools == 1) {
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

if (aprilbools == 6) {
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
        options: ['Normal', 'Minimal', 'Super Minimal'],
        help: 'Changes the display interface of the page to your preference.',
        onchange: function () {
            var display = this.val();
            $returnBtn.css('display', (display == 'Normal' ? 'none' : 'block'));
            Elements.$body.attr('data-DisplayMode', display);
        }
    });
/////////////////APRIL FOOLS 5
if (aprilbools == 5) {
    Elements.$body.attr('data-DisplayMode', 'Super Minimal');
$returnBtn.css('display', 'block');
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Super Minimal'] #header,\n\t#lc-body[data-DisplayMode='Super Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Super Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Super Minimal'] #new-update-form .bottom-area,\n\t#lc-body[data-DisplayMode='Super Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Super Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Super Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Super Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Super Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Super Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Super Minimal'] div.content {max-width:81px; padding:0;}   #lc-body[data-DisplayMode='Super Minimal'] div.content #new-update-form .usertext .usertext-edit textarea {height: 12px;width: 51px !important; font-size:6px;} #lc-body[data-DisplayMode='Super Minimal'] #liveupdate-header  {display: none;} #lc-body[data-DisplayMode='Super Minimal'] #river {font-size: 6px;width: 28px;margin-left: -33px;margin-top: 1px;} #lc-body[data-DisplayMode='Super Minimal'] li.liveupdate * {font-size: 6px;} #lc-body[data-DisplayMode='Super Minimal'] .liveupdate-listing li.separator time {font-size: 6px;} #lc-body[data-DisplayMode='Super Minimal'] .status {font-size: 6px;} #lc-body[data-DisplayMode='Super Minimal'] {font-size: 6px!important;} #lc-body[data-DisplayMode='Super Minimal'] button, html input[type='button']  {padding: 0;font-size: 6px;}");
   Styles.add(`@keyframes mymove {0% {font-size: 13px;transform:rotate(0deg);}50% {font-size: 78px;transform:rotate(180deg);}100% {font-size: 13px;transform:rotate(360deg);}}`);
    Styles.add(`@keyframes mymove2 {0% {font-size: 13px;transform:rotate(0deg);opacity:1;}50% {font-size: 78px;transform:rotate(180deg);opacity:0;}100% {font-size: 13px;transform:rotate(360deg);opacity:1;}}`);

}
//////////////// APRIL FOOLS 5
    // Styles
    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body[data-DisplayMode='Minimal'] #header,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-statusbar,\n\t#lc-body[data-DisplayMode='Minimal'] .markdownEditor-wrapper,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form .bottom-area,\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate time.live-timestamp,\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-options, \n\t#lc-body[data-DisplayMode='Minimal'] aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] #liveupdate-header,\n\t#lc-body[data-DisplayMode='Minimal'] #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body[data-DisplayMode='Minimal'] div.content {\n\t\tmax-width: " + Math.max(450, $('#new-update-form textarea').outerWidth()) + "px;\n\t}\n\n\t");


////////////////////APRIL FOOLS 5
//    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body #header,\n\t#lc-body #liveupdate-statusbar,\n\t#lc-body .markdownEditor-wrapper,\n\t#lc-body #new-update-form .bottom-area,\n\t#lc-body li.liveupdate time.live-timestamp,\n\t#lc-body #liveupdate-options, \n\t#lc-body aside.sidebar {\n\t\tdisplay: none;\n\t}\n\n\t#lc-body #liveupdate-header,\n\t#lc-body #new-update-form {\n\t\tmargin-left: 0px;\n\t}\n\n\t#lc-body li.liveupdate ul.buttonrow {\n\t\tmargin: 0 0 2em 0px !important;\n\t}\n\n\t#lc-body div.content {max-width:81px; padding:0;}   #lc-body div.content #new-update-form .usertext .usertext-edit textarea {height: 12px;width: 51px !important; font-size:6px;} #lc-body #liveupdate-header  {display: none;} #lc-body #river {font-size: 6px;width: 28px;margin-left: -33px;margin-top: 1px;} #lc-body li.liveupdate * {font-size: 6px;} #lc-body .liveupdate-listing li.separator time {font-size: 6px;} #lc-body .status {font-size: 6px;} #lc-body {font-size: 6px!important;} #lc-body button, html input[type='button']  {padding: 0;font-size: 6px;}");
////////////////////APRIL FOOLS 5/ TODO: ADD A RETURN TO NORMAL BUTTON
//    Styles.add("\n\n\t/* Display Minimal */\n\t#lc-body #header,\n\t#lc-body #liveupdate-statusbar,\n\t#lc-body .markdownEditor-wrapper,\n\t#lc-body #new-update-form .bottom-area,\n\t#lc-body li.liveupdate time.live-timestamp,\n\t#lc-body #liveupdate-options, \n\t#lc-body aside.sidebar {\n\t\tdisplay: initial;\n\t}\n\n\t#lc-body #liveupdate-header,\n\t#lc-body #new-update-form {\n\t\tmargin-left: initial;\n\t}\n\n\t#lc-body li.liveupdate ul.buttonrow {\n\t\tmargin: initial !important;\n\t}\n\n\t#lc-body div.content {max-width:initial; padding:initial;}   #lc-body div.content #new-update-form .usertext .usertext-edit textarea {height: initial;width: initial !important; font-size:initial;} #lc-body #liveupdate-header  {display: initial;} #lc-body #river {font-size: initial;width: initial;margin-left: initial;margin-top: initial;} #lc-body li.liveupdate * {font-size: initial;} #lc-body .liveupdate-listing li.separator time {font-size: initial;} #lc-body .status {font-size: initial;} #lc-body {font-size: initial!important;} #lc-body button, html input[type='button']  {padding: initial;font-size: initial;}");


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
    if (window.location.href.indexOf("ta535s1hq2je") > -1) {
        if (TeamBarsEnabled == 'yep lol') {
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
        TeamBarsRevivalEnabled = 'yep lol';
        } else {
        TeamBarsRevivalEnabled = 'nope lol';
        }

//////////////////////////////////TEAM COMMAS

    var thingycheck = false;

setTimeout(function(){
    if($('#discussions h2').text() == 'discusions') {
        if (window.location.href.indexOf("graphite") > -1 || window.location.href.indexOf("riverbot") > -1 ) {
        thingycheck = true;
    }
        if (abril2020 == 16 ) {
        thingycheck = true;
    }
    }
},2000);

setTimeout(function(){
if(window.location.href.indexOf("ta535s1hq2je") > -1 && thingycheck == true) {
if (TeamBarsRevivalEnabled == 'yep lol') {
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
