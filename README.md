# What is it?
[JellyfinSkipButtons](https://github.com/Jaakurin/JellyfinSkipButtons) is a simple JavaScript function written for [JS Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector) that replaces the existing Fast-Forward and Rewind buttons in the Jellyfin Web playback interface with Skip Forward and Skip Back functionality. 

This is accomplished by a simple remapping of the existing buttons to behave like the left and right arrow keys on your keyboard. This makes it so that the existing Jellyfin user settings for configuring skip durations apply to both the clickable buttons and the arrow keys.

# How do I use it?

You will first need to install and configure the [JS Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector) plugin. Once that is done, do this:
- Open the JS Injector settings in your Jellyfin admin dashboard.
- Click Add Script.
- Name it whatever makes sense to you.
- Click on this link and paste the code into the JavaScript field: [JellyfinSkipButtons.js](https://github.com/Jaakurin/JellyfinSkipButtons/blob/main/JellyfinSkipButtons.js)
- Click save, clear your browser cache, and you're done!
