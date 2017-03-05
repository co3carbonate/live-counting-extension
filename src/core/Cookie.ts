///////////////
// Cookie.ts //
///////////////

// Uses the js-cookie library (lib/cookies.ts) for specialised cookie operations and intialization

module Cookie {

	// INITIALIZATION
	const cookieName = `LCE_${THREAD}`;
	const cookieVersion = '9';

	// Try to load existing cookie save data, or create a cookie with default data
	export let saveDefaultOptions:boolean = true;
	
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
	export let save:save_struct = Cookies.getJSON(cookieName);
	
	// In versions prior to 1.5.3, the extension used the cookie 'live-counting-extension'
	// instead of 'LCE_{THREAD}'.
	// To provide support for clients who had last used the extension at that point in time,
	// we shall copy the contents of the cookie 'live-counting-extension' to 'LCE_{THREAD}'.
	let oldCookie:string = Cookies.get('live-counting-extension');
	if(oldCookie !== undefined && oldCookie !== null) {
		if(save === undefined || save === null) {
			Cookies.set(cookieName, oldCookie, {expires: 9000, path: ''});
			save = Cookies.getJSON(cookieName);
		}
		Cookies.remove('live-counting-extension', {path: ''});
	}


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
		Cookies.set(cookieName, save, {expires: 9000, path: ''});
	}

}

(window as any).Cookies = Cookies;
