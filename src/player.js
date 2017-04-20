import Logger from './Logger';
/* import Playlist from './playlist';
import Overlays from './Overlays';'
import AdsManager from './AdsManager';*/
import * as Const from './constants';
import PlayerMedia from './PlayerMedia';
import PlayerUi from './PlayerUi';
/**
 *  Class player in whinch the player is implemented
 */
function Player(fjID, vidContainerId) {
    var logger = new Logger(this),
        playerPlaylist = null,
        playlistLoaded = false,
        videoContainerId = vidContainerId,
        /*  OverlaysMgr = new Overlays(document.getElementById(overlaysContainerDivId)),
        AdsMgr = new AdsManager(this  , document.getElementById(adsContainerDivId) ),*/
        playerMedia = new PlayerMedia(),
        playerUi = new PlayerUi(videoContainerId),
        supportsVideo = !!document.createElement('video').canPlayType;

    /**
     * function  to return a human redeable duration of secondes
     */
    function duration(secDuration) {
        var secNum = parseInt(secDuration, 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (hours === 0) {
            return (minutes + ':' + seconds);
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        return (hours + ':' + minutes + ':' + seconds);
    };
    /**
     * Function Called from AdsManager to
     *  freeze and hide player to show ads
     *
    function freezePlayer(pauseIt, stillStarting, isEnding) {
        if (pauseIt === true) {
            // hide the player and pause it
            playerMedia.pause();
            playerUi.getVideo().style.display = 'none';
            // hide controls
            playerUi.hide();
        } else {
            if (isEnding === true) {
                // still playing pre preroll ads
                if (AdsMgr.CheckPostAds() === true) {
                    return;
                }
                playerUi.getVideo().style.display = 'block';
                // playpauseBtn.className = 'fa  fa-play';
            } else {
                if (stillStarting === true) {
                    // still playing pre preroll ads
                    if (AdsMgr.CheckPreAds() === true) {
                        return;
                    }
                }
                // resume the play and show it
                playerUi.getVideo().style.display = 'block';
                playerMedia.play();
            }
        }
    };*/
    /**
     *
     */
    function loadPlaylist(playlist) {
        logger.log(' start  function ');
        if (!supportsVideo) {
            logger.error(' browser did not support video !');
            return false;
        }
        if (playlist.getSize() > 0) {
            playerPlaylist = playlist;
            playlistLoaded = true;
            playerUi.initialize(playerMedia);
            playerMedia.initialize(playerUi);
            return true;
        }
        logger.error(' playlist is empty: ', playlist.getSize());
        playlistLoaded = false;
        return false;
    };
    /**
     *
     */
    function playAt(index) {
        var item;
        if (!playlistLoaded) {
            logger.error(' No playlist is loaded on player ');
            return false;
        }
        item = playerPlaylist.getItem(index);
        if (item === undefined) {
            logger.error(' No item to play at index ', index,
                ' playlist is sized ', playerPlaylist.getSize());
            return false;
        }

        playerUi.setTitle(item[Const.FJCONFIG_TITLE]);
        /* TODO
        // set thumbs
        if ((item[Const.FJCONFIG_THUMBS] !== undefined) && (item[Const.FJCONFIG_THUMBS] != null)) {
            vttThumbs = item[Const.FJCONFIG_THUMBS];
        }
        // Set sub, ads and overlays ..
        if ((item[Const.FJCONFIG_SUBTITLES] !== undefined) && (item[Const.FJCONFIG_SUBTITLES] != null)) {
            subsJsObj = item[Const.FJCONFIG_SUBTITLES];
        }
        // Set overlays
        if ((item[Const.FJCONFIG_OVERLAYS] !== undefined) && (item[Const.FJCONFIG_OVERLAYS] != null)) {
            overlaysObjs = item[Const.FJCONFIG_OVERLAYS];
            OverlaysMgr.Setup(overlaysObjs);
        }
        // Set ads
        if ((item[Const.FJCONFIG_ADS] !== undefined) && (item[Const.FJCONFIG_ADS] != null)) {
            adsObjs = item[Const.FJCONFIG_ADS];
            AdsMgr.Setup(adsObjs);
        }
 */
        if (item[Const.FJCONFIG_SRC] != null || item[Const.FJCONFIG_SRC] !== undefined) {
            if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
                // clear dash
                playerMedia.loadDash(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_POSTER], false);
            } else {
                playerMedia.load(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_TYPE],
                    item[Const.FJCONFIG_POSTER], false);
            }
            return true;
        }
        logger.error('src of item is not valid , at index ', index);
        return false;
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        duration: duration,
        /* freezePlayer: freezePlayer,*/
        loadPlaylist: loadPlaylist,
        playAt: playAt,
        constructor: Player
    };
};
export default Player;