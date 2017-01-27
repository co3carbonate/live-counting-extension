# Live Counting Extension

Live Counting Extension provides various additional client-side features and functionalities for [Live Counting](https://www.reddit.com/live/ta535s1hq2je) to enhance your overall counting experience and performance. It is created and maintained by [/u/co3_carbonate](https://www.reddit.com/user/co3_carbonate/).

## Features

Here is a list of features. Most of them can be disabled at will.

- Basic
 - Ctrl+Enter shortcut to submit message
 - Colored Usernames
 - Clear Past Messages
 - Minimal Display Mode option
- Advanced 
 - Disable username links
 - Make all links open in a new tab
 - Disable obstructive browser shortcuts (Ctrl+0)
 - Specify Content Position (left, center, right)
 - Standardize format of numbers from all messages (commas, spaces, etc.)

## Installation

1. Install any userscript extension for your browser, as listed below:

	* Firefox - install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
	* Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome) or [NinjaKit](https://chrome.google.com/webstore/detail/gpbepnljaakggeobkclonlkhbdgccfek).
	* Opera - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera) or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/).
	* Safari - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari) or [NinjaKit](http://ss-o.net/safari/extension/NinjaKit.safariextz).
	* Dolphin - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=dolphin).
	* UC Browser - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=ucweb).

2. Once you have downloaded one of those extensions, you can install the script through [this link](https://gist.github.com/co3carbonate/cbf781758d12717721dc125a80a5c785/raw/bd3a0f9926dc17a2bb3e33fc8084dae43d1cb15b/client.user.js). That's it!

## Changelog

- v1.0
  - Feature: Colored usernames
- v1.1
  - Feature: Specify position of main content (left, center, right)
  - Feature: Automatically clear past messages to mitigate lag, and reduce the need to constantly refresh
- v1.2
  - Feature: Choose to set display mode to 'Minimal'
- v1.3
  - Feature: Choose to standardize the formats of numbers from all messages (commas, spaces, etc.)
- v1.4
  - Support to save options from previously with cookies
  - Options can be collapsed/expanded to save space
  - Classified options into 'Basic' and 'Advanced'
  - Feature: Use Ctrl+Enter in the textarea to submit a message
  - Feature: Make all links open in a new tab
  - Feature: Disable browser Ctrl+0 (zoom reset) shortcut
  - Changed the element modification detection system to use MutationObserver instead of MutationEvents
  - Feature: Disable username links