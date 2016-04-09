(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "AFTVnews.com",
        devKey: "AIzaSyBfvEuCSKw9KpYACEMhiRoiEz507WMSoX0",
        channels: [
            {
                type: "multiPlaylists",
                ids: ["UC05u3RftzcDWquz9j3FiNtg"],
                title: "AFTVnews"
            }
        ],
        displayButtons: true
    };

    exports.app = new App(settings);
}(window));
