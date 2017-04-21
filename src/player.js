import Logger from './Logger';
import Overlays from './Overlays';
import * as Const from './constants';
import PlayerMedia from './PlayerMedia';
import PlayerUi from './PlayerUi';
import AdsManager from './AdsManager';
/**
 *  Class player in whinch the player is implemented
 */
function Player(fjID, vidContainerId) {
    var logger = new Logger(this),
        playerPlaylist = null,
        playlistLoaded = false,
        videoContainerId = vidContainerId,
        OverlaysMgr = new Overlays(),
        playerMedia = new PlayerMedia(),
        playerUi = new PlayerUi(videoContainerId),
        // create ads Manager
        AdsMgr = new AdsManager(),
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
     */
    function freezePlayer(pauseIt, stillStarting, isEnding) {
        if (pauseIt === true) {
            // hide the player and pause it
            playerMedia.pause();
            playerUi.hideVideo();
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
                playerUi.ShowVideo();
                playerUi.onplaypauseClick();
                // playerMedia.play();
            }
        }
    };

    function MplayerEventing(e, args) {
        logger.warn(' just a new event from mplayer ', e, args);
        if (e === Const.PlayerEvents.PLAYBACK_ENDED) {
            return AdsMgr.CheckPostAds();
        }
    };
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
            playerUi.initialize(this, playerMedia);
            playerMedia.on(Const.PlayerEvents.STREAM_LOADED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_STARTED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_PAUSED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_ENDED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_SEEKED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_TIME_UPDATE, MplayerEventing);
            playerMedia.initialize(playerUi);
            OverlaysMgr.initialize(document.getElementById(playerUi.getOverlaysContainerDivId()));
            AdsMgr.initialize(document.getElementById(playerUi.getAdsContainerDivId()));
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
        // set thumbs
        // if ((item[Const.FJCONFIG_THUMBS] !== undefined) && (item[Const.FJCONFIG_THUMBS] !== null)) {
        playerMedia.setThumbsUrl(item[Const.FJCONFIG_THUMBS]);
        // }
        /* TODO
        // Set sub, ads and overlays ..
        if ((item[Const.FJCONFIG_SUBTITLES] !== undefined) && (item[Const.FJCONFIG_SUBTITLES] !== null)) {
            subsJsObj = item[Const.FJCONFIG_SUBTITLES];
        }
        // Set overlays
        if ((item[Const.FJCONFIG_OVERLAYS] !== undefined) && (item[Const.FJCONFIG_OVERLAYS] !== null)) {
            overlaysObjs = item[Const.FJCONFIG_OVERLAYS];
            OverlaysMgr.Setup(overlaysObjs);
        }
        */
        // Set Overlays
        OverlaysMgr.Setup(item[Const.FJCONFIG_OVERLAYS]);
        // Set ads
        AdsMgr.Setup(this, item[Const.FJCONFIG_ADS],
            playerUi.getVideo().videoWidth, playerUi.getVideo().videoHeight);

        if (item[Const.FJCONFIG_SRC] !== null || item[Const.FJCONFIG_SRC] !== undefined) {
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
    /**
     * Function to be called when user start play a video
     */
    function startPlayingChecks() {
        return AdsMgr.CheckPreAds();

    };

    function midPlayingChecks(secondes) {
        var ok = OverlaysMgr.CheckOverlays(secondes);
        ok &= AdsMgr.CheckMidAds(secondes);
        return ok;
    };

    function postPlayingChecks() {
        return AdsMgr.CheckPostAds();

    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        duration: duration,
        startPlayingChecks: startPlayingChecks,
        midPlayingChecks: midPlayingChecks,
        postPlayingChecks: postPlayingChecks,
        freezePlayer: freezePlayer,
        loadPlaylist: loadPlaylist,
        playAt: playAt,
        constructor: Player
    };
};
export default Player;