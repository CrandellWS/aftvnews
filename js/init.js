(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "AFTVnews",
        devKey: "AIzaSyBfvEuCSKw9KpYACEMhiRoiEz507WMSoX0",
        channels: [
            {
                type: "multiPlaylists",
                ids: ["PLnleSo_KL0pXdy2IhAuxE5XO5ylOh8JK9"],
                title: "AFTVnews.com"
            }
        ],
        displayButtons: true
    };

    exports.app = new App(settings);
}(window));
