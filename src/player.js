import Logger from './Logger';
import Overlays from './Overlays';
import * as Const from './constants';
import PlayerMedia from './PlayerMedia';
import PlayerUi from './PlayerUi';
import AdsManager from './AdsManager';
/**
 *  Class player in whinch the player is implemented
 */
function Player(fjID, vidContainerId, vwidth, vheight) {
    var logger = new Logger(this),
        playerPlaylist = null,
        currentPlaying = -1,
        playlistLoaded = false,
        videoWidth = vwidth,
        videoHeight = vheight,
        videoContainerId = vidContainerId,
        OverlaysMgr = new Overlays(),
        playerMedia = new PlayerMedia(),
        playerUi = null,
        // create ads Manager
        AdsMgr = new AdsManager(),
        supportsVideo = !!document.createElement('video').canPlayType;
    if (videoHeight === null) videoHeight = 710;
    if (videoWidth === null) videoWidth = 1280;
    playerUi = new PlayerUi(videoContainerId, videoWidth, videoHeight);
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
            }
        }
    };

    function AdsEventing(e, args) {
        logger.debug(' just a new event from adsmgr ', e, args);
        if (e === Const.AdsEvents.ADS_PLAYBACK_ENDED) {
            if (args === Const.AdsEnum.ADS_PRE_ROLL) {
                freezePlayer(false, true, false);
            } else if (args === Const.AdsEnum.ADS_POST_ROLL) {
                freezePlayer(false, false, true);
            } else if (args === Const.AdsEnum.ADS_MID_ROLL) {
                freezePlayer(false, false, false);
            } else {
                logger.warn(' unknwn Ads type !! ', args);
            }
        }
        if (e === Const.AdsEvents.ADS_PLAYBACK_STARTED) {
            if (args === Const.AdsEnum.ADS_PRE_ROLL) {
                freezePlayer(true, true, false);
            } else if (args === Const.AdsEnum.ADS_POST_ROLL) {
                freezePlayer(true, false, true);
            } else if (args === Const.AdsEnum.ADS_MID_ROLL) {
                freezePlayer(true, false, false);
            } else {
                logger.warn(' unknwn Ads type !! ', args);
            }
        }
    };

    function midPlayingChecks(secondes) {
        var ok;
        logger.warn(' Cheking Mid player overlays and ads @ ', secondes);
        OverlaysMgr.CheckOverlays(secondes);
        ok &= AdsMgr.CheckMidAds(secondes);
        return ok;
    };

    function MplayerEventing(e, args) {
        var item, vid;
        logger.debug(' just a new event from mplayer ', e, args);
        if (e === Const.PlayerEvents.PLAYBACK_STARTED) {
            playerUi.setDuration(playerMedia.getDuration());
            playerUi.show();
        }
        if (e === Const.PlayerEvents.PLAYBACK_TIME_UPDATE) {
            playerUi.UpdateProgress(playerMedia.time());
            midPlayingChecks(Math.round(playerMedia.time()));
        }
        if (e === Const.PlayerEvents.PLAYBACK_ENDED) {
            return AdsMgr.CheckPostAds();
        }
        if (e === Const.PlayerEvents.STREAM_LOADED) {
            // checks thumbs
            if (args !== null) {
                playerUi.SetupThumbsManager(playerMedia.getDuration(), args);
            }
            playerUi.setDuration(playerMedia.getDuration());
            item = playerPlaylist.getItem(currentPlaying);
            // Set Overlays
            OverlaysMgr.Setup(item[Const.FJCONFIG_OVERLAYS]);
            // Set ads
            vid = playerUi.getVideo();
            logger.warn('Video object hXw ', vid.videoWidth, vid.videoHeight);
            AdsMgr.Setup(item[Const.FJCONFIG_ADS], vid.videoWidth, vid.videoHeight);

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
            playerUi.initialize(this);
            playerMedia.on(Const.PlayerEvents.STREAM_LOADED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_STARTED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_PAUSED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_ENDED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_SEEKED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_TIME_UPDATE, MplayerEventing);

            AdsMgr.on(Const.AdsEvents.ADS_PLAYBACK_STARTED, AdsEventing);
            AdsMgr.on(Const.AdsEvents.ADS_PLAYBACK_ERROR, AdsEventing);
            AdsMgr.on(Const.AdsEvents.ADS_PLAYBACK_ENDED, AdsEventing);

            playerMedia.initialize(playerUi.getVideo(), playerUi.getVideoFigure());
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
        currentPlaying = index;
        index;
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
        // settitle
        playerUi.setTitle(item[Const.FJCONFIG_TITLE]);
        // set thumbs
        playerMedia.setThumbsUrl(item[Const.FJCONFIG_THUMBS]);

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

    function postPlayingChecks() {
        return AdsMgr.CheckPostAds();

    };

    function play() {
        playerMedia.play();
    };

    function pause() {
        playerMedia.pause();
    };

    function isPaused() {
        return playerMedia.isPaused();
    };

    function isEnded() {
        return playerMedia.isEnded();
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        duration: duration,
        startPlayingChecks: startPlayingChecks,
        midPlayingChecks: midPlayingChecks,
        postPlayingChecks: postPlayingChecks,
        loadPlaylist: loadPlaylist,
        playAt: playAt,
        play: play,
        pause: pause,
        isPaused: isPaused,
        isEnded: isEnded,
        constructor: Player
    };
};
export default Player;