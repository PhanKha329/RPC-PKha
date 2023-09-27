module.exports = {
    // spotify/game/twitch
    "mode": "twitch", 
    // dnd/online/idle
    "status": "",

    "game": {
        "applicationID": "",

        "name": "", // title
        "details": "", // first row below title
        "state": "", // row below first row

        "largeImageKey": "", // Large Image
        "largeImageText": "", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "", // Small Image
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "", //client ID Bot
        "url": "https://www.twitch.tv/nocopyrightsounds", // twitch channel link

        "details": "", // title
        "state": "", // first row below title (playing ...)

        "largeImageKey": "", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "", // for exemple listening to {name} instead of listening to spotify
        "details": "", // title
        "state": "", // row below title

        "largeImageKey": "", 
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "",
        "endTimestamp": "",
    }
}
