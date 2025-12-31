# Live Counting Extension

Live Counting Extension (LCE) provides various additional client-side features and functionalities for [Live Counting](https://www.reddit.com/live/ta535s1hq2je) to enhance your overall counting experience and performance. It was created by [/u/co3_carbonate](https://www.reddit.com/user/co3_carbonate/) and maintained by [/u/rideride](https://www.reddit.com/user/rideride/).

![Preview Image](https://co3carbonate.github.io/live-counting-extension/preview.png?v=2 'Preview Image')

All the features are displayed on the top-right corner of the page. You can always hide sections of the display by using the collapse button [-].

## Features

Here is a list of features. Besides the 'hidden' features, all of them can be disabled at will.

- Basic
  - Colored Usernames: Makes the username in each message gain a unique color
  - Clear Past Messages: Frequently clears past messages from the page, which drastically negates lag and reduces the need to refresh constantly
  - Display Mode: Changes the display interface of the page to your preference
  - Remove Submission Lag: Upon submitting a message, the textbox is immediately cleared to allow you to enter new contents without waiting for your previous submission to be processed. No Clear stops Reddit from clearing the textbox.

- Advanced
  - Submit Shortcut: Enables the use of a shortcut (Ctrl+Enter or Enter) to conveniently send a message
  - Disable Username Links: Disables the redirection to a user's profile upon clicking on his/her username
  - Make All Links Open In A New Tab: Makes all links on the page open in a new tab
  - Disable Obstructive Browser Shortcuts: Disables certain obstructive browser keyboard shortcuts. This currently disables the following: Ctrl+0 (Zoom Reset), Ctrl+\[1-9\] (Switch Tabs)
  - 100K Username: An option to change whether to display users' special 100K usernames
  - Daily Hall of Counters: Shows a live-updating Daily Hall of Counters on the sidebar
  - Content Position: Adjusts the position of the main content section
  - Standardize Number Format: Standardizes the number count in each message to a format of your choice
  - Option Position: An option to change where the options are positioned
  - Ignore: An option to ignore users while still seeing their counts
  - Emojis: Turns :emojiname: into an emoji. Also turns :emotename: into `emotename` to more easily type image emotes.
  - Textbox Position: An option to change where the text in the textbox is positioned
  - RES Night Mode: An option to enable Night Mode as featured in RES
- Advanced 2
  - Enable Daily HoC Colored Names: Makes the names in the Daily HoC sidebar colored
  - Enable Reply Times: Displays how much time has pasted between messages, in ms
  - Half Reply Time Colors: Halves the reply time color ranges to more precisely display speed
  - Night Mode Reply Times: Changes the background of reply times to better match RES night mode.
  - Clear Reply Times: Automatically clears LCE reply times after a certain amount of time.
  - Custom Stricken: An option to add background color to striked messages and invert text color
  - Disable Special Times: Disables special reply times and only shows exact millisecond time
  - Background Color: Changes the background color of messages to their reply time or custom color
  - Last Count: Tracks recent counts and shows time inbetween hundreds.
  - Unstrike Text: Only strikesthrough the number of striked messages, rather than the accompanying text
  - Latency Check: Displays the median latency of your last 50 messages
  - Rate Limit View: Shows how much time has passed since your last message or the distance to the rate limit (333ms)
  - Image Emotes: Enables image emotes
  - Image Emote Picker: Adds a picker for image emotes
  - Kpart Alert: Sends a notification when a new K is reached. Last Count must be enabled for this to work
  - Collapsible Posts: Displays collapsible posts

- Hidden
  - Keep Focus: Keeps focus on the textbox when clicking the 'make update' button
  - Bars & Slow Time: Shows absolute time on reply times on the Bars sidethread, and displays a 1-hour timer from your last count on the Slow sidethread
  - Test Thread Practice Runner (Experimental): Run with a fake runner with a custom speed on the test thread

## Installation

1. Install any userscript extension for your browser, as listed below:
   - Firefox - install [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).
   - Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome).
   - Opera - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera).
   - Safari - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari).
   - Dolphin - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=dolphin).
   - UC Browser - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=ucweb).

2. **Once you have downloaded one of those extensions, you can install the script through [this link](https://gist.github.com/co3carbonate/cbf781758d12717721dc125a80a5c785/raw/e5eb842297cc76ef66b6b9afca3f02b80b1a701a/client.user.js).** That's it! The latest version of the script will also be fetched and used each time the page is loaded, so there is no need for you to frequently update it manually. If you do not want an automatically updating version, you can make a copy from the current source code [here](https://github.com/co3carbonate/live-counting-extension/blob/master/main.js) or check out [LCE Lite](https://old.reddit.com/r/livecounting/comments/943mv0/live_counting_discussion_thread_23/e4ydisf/) which has all the essential features of LCE in a relatively simple script.

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
  - Feature: Disable browser Ctrl+0 (Zoom Reset) shortcut
  - Changed the element modification detection system to use MutationObserver instead of MutationEvents
  - Feature: Disable username links
- v1.5
  - v1.5.0: Added tooltips to every option for clear information on what they do
  - v1.5.0: Started using minor versioning
  - v1.5.1: Made the "Disable Obstructive Browser Shortcuts" option visible and under Advanced
  - v1.5.2: Added an experimental "Remove Submission Lag" feature
  - v1.5.2: Made the "Disable Obstructive Browser Shortcuts" option disable Ctrl+\[1-9\] (Switch Tabs) shortcut
  - v1.5.3: Added a preview message mechanism for the "Remove Submission Lag" feature, made it "Basic" and no longer experimental
  - v1.5.3: Made the preview message mechanism disableable
- v1.6
  - v1.6.0 Added username colors to LC Chats
  - v1.6.0 Made "Enabled without Ghost Messages" the default option
  - v1.6.0 Fixed "Disable Obstrusive Browser Shortcuts" on Mac (Thanks aRTy42)
  - v1.6.0 Made special 100k usernames disable-able
  - v1.6.0 Added Team Bars support
  - v1.6.0 Made an option to move the options
  - v1.6.0 Added ignore feature
  - v1.6.0 Added "Advanced 2" tab
  - v1.6.0 Added 2019 April Fools mode
  - v1.6.0 Made "Clear Past Messages" auto-enable if scrolled to the top of the page when a new post loads
  - v1.6.0 Live-updating Daily HoC on sidebar, with colors
  - v1.6.0 Added 2020 April Fools mode
- v1.7
  - v1.7.0 Added timestamps (from Response Times Extension)
  - v1.7.0 Added night mode reply time settings (from Response Times Extension)
  - v1.7.0 Added clear reply times setting (from Response Times Extension)
  - v1.7.0 Added custom striken setting (from Response Times Extension)
  - v1.7.0 Added setting to disable custom reply times (from Response Times Extension)
  - v1.7.0 Added post background color feature (from Response Times Extension)
  - v1.7.0 Added last count feature (from Response Times Extension)
  - v1.7.0 Added emojis - enable and type :emoji_name: in the textbox
  - v1.7.0 Added Ctrl+Space shortcut to focus on textbox
  - v1.7.0 Clicking "make update" now maintains focus on textbox
  - v1.7.0 Made "disable obstructive shortcuts" feature work on Macs
  - v1.7.0 Temporarily (?) removed ghost messages
  - v1.7.0 Removed April Fools 2019/2020 modes
  - v1.7.0 Internal improvements, like reducing unnecessary variables
