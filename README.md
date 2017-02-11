# Live Counting Extension

Live Counting Extension (LCE) provides various additional client-side features and functionalities for [Live Counting](https://www.reddit.com/live/ta535s1hq2je) to enhance your overall counting experience and performance. It is created and maintained by [/u/co3_carbonate](https://www.reddit.com/user/co3_carbonate/).

![Preview Image](https://co3carbonate.github.io/live-counting-extension/preview.png?v=2 "Preview Image")

All the features are displayed on the top-right corner of the page. You can always hide sections of the display by using the collapse button [-]. 

## Features

Here is a list of features. Besides the 'innate' features, all of them can be disabled at will.

- Basic
 - Colored Usernames: Makes the username in each message gain a unique color
 - Clear Past Messages: Frequently clears past messages from the page, which drastically negates lag and reduces the need to refresh constantly
 - Display Mode: Changes the display interface of the page to your preference

- Advanced 
 - Disable Username Links: Disables the redirection to a user's profile upon clicking on his/her username
 - Make All Links Open In A New Tab: Makes all links on the page open in a new tab
 - Disable Obstructive Browser Shortcuts: Disables certain obstructive browser keyboard shortcuts. This currently disables the following: Ctrl+0 (Zoom Reset)
 - Content Position: Adjusts the position of the main content section
 - Standardize Number Format: Standardizes the number count in each message to a format of your choice
 
- Innate
 - Ctrl+Enter Shortcut: Enables the use of a single shortcut Ctrl+Enter to conveniently send a message

## Installation

1. Install any userscript extension for your browser, as listed below:

	* Firefox - install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
	* Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome) or [NinjaKit](https://chrome.google.com/webstore/detail/gpbepnljaakggeobkclonlkhbdgccfek).
	* Opera - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera) or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/).
	* Safari - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari) or [NinjaKit](http://ss-o.net/safari/extension/NinjaKit.safariextz).
	* Dolphin - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=dolphin).
	* UC Browser - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=ucweb).

2. **Once you have downloaded one of those extensions, you can install the script through [this link](https://gist.github.com/co3carbonate/cbf781758d12717721dc125a80a5c785/raw/e5eb842297cc76ef66b6b9afca3f02b80b1a701a/client.user.js).** That's it! The latest version of the script will also be fetched and used each time the page is loaded, so there is no need for you to frequently update it manually.

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
- v1.5
  - v1.5.0: Added tooltips to every option for clear information on what they do
  - v1.5.0: Started using minor versioning
  - v1.5.1: Made the "Disable Obstructive Browser Shortcuts" option visible and under Advanced
