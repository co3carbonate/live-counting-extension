///////////////
// Cookie.ts //
///////////////

// Uses the js-cookie library (lib/cookies.ts) for specialised cookie operations and intialization

module Cookie {

	// INITIALIZATION
	const cookieVersion = 'A';

	// Try to load existing cookie save data, or create a cookie with default data
	export let saveDefaultOptions:boolean = false;
	export let save:{
		version:string;
		options:any;
		stats:any;
	} = Cookies.getJSON('live-counting-extension');

	// Create new cookie as it does not exist
	if(save === undefined || save === null) {
		saveDefaultOptions = true;
		save = {
			version: cookieVersion,
			options: {},
			stats: {}
		};
		//Cookies.set('live-counting-extension', save, {expires: 9000});
		update();
	}

	// If the cookie is for an older version
	else if(save.version != cookieVersion) {
		saveDefaultOptions = true;
		save.version = cookieVersion;
	}

	// METHODS
	// Set the cookie value to `save`
	export function update() {
		Cookies.set('live-counting-extension', save, {expires: 9000});
	}


}

(window as any).Cookie = Cookie;