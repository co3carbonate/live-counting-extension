///////////////
// Cookie.ts //
///////////////

// Uses the js-cookie library (lib/cookies.ts) for specialised cookie operations and intialization

module Cookie {

	// INITIALIZATION
	const cookieVersion = '4';

	// Try to load existing cookie save data, or create a cookie with default data
	export let saveDefaultOptions:boolean = false;
	
	interface save_struct {
		version:string;
		options:{ [k:string]: boolean | string };
		stats:{ [k:string]: any };
		collapsed:boolean[];
	}
	let save_default:save_struct = {
		version: cookieVersion,
		options: {},
		stats: {},
		collapsed: [false, false, false, true]
	}
	export let save:save_struct = Cookies.getJSON('live-counting-extension');

	// Create new cookie as it does not exist
	if(save === undefined || save === null) {
		saveDefaultOptions = true;
		save = save_default;
		update();
	}

	// If the cookie is for an older version
	else if(save.version != cookieVersion) {
		saveDefaultOptions = true;
		save.version = cookieVersion;

		// If the current save is missing a few keys, add these keys, set to the default
		for(let k in save_default) {
			if(!save.hasOwnProperty(k)) save[k] = save_default[k];
		}

		update();
	}

	// METHODS
	// Set the cookie value to `save`
	export function update() {
		Cookies.set('live-counting-extension', save, {expires: 9000});
	}


}

(window as any).Cookies = Cookies;
(window as any).Cookie = Cookie;