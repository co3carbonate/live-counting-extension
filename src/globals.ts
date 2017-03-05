/**
 * LIVE COUNTING EXTENSION V1.5.3
 * (THIS CODE WAS GENERATED FROM THE TYPESCRIPT .TS FILES IN THE SRC DIRECTORY)
 */

// CONSTANTS

// Extension version
const VERSION = 'v1.5.3';

// Client's username
const USER = $('#header .user a[href]').html();

// Thread ID
const THREAD = (function() {
	let components:string[] = window.location.pathname.split('/');
	for(let i:number = components.length - 1; i >= 0; i--) {
		let component:string = components[i].trim();
		if(component.length > 0)
			return component.replace(/^.*\/([^/]*)/, "$1");
	}
})();
