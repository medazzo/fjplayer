'use strict';
import Logger from './Logger';
import Overlays from './Overlays';
import Eventing from './Eventing';
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
        playingList = false,
        loopingList = false,
        currentPlaying = -1,
        playlistLoaded = false,
        playingAds = false,
        videoWidth = vwidth,
        videoHeight = vheight,
        events = new Eventing(),
        videoContainerId = vidContainerId,
        OverlaysMgr = new Overlays(),
        playerMedia = new PlayerMedia(),
        playerUi = null,
        // create ads Manager
        AdsMgr = new AdsManager(),
        supportsVideo = !!document.createElement('video').canPlayType;
    if (videoHeight === null || videoHeight === undefined) {
        videoHeight = 480;
    }
    if (videoWidth === null || videoWidth === undefined) {
        videoWidth = 720;
    }
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
    }

    function playItem(itemPosition, autostart) {
        var item;
        var start = true;
        if (autostart !== true) {
            start = false;
        }
        currentPlaying = itemPosition;
        if (!playlistLoaded) {
            logger.error(' No playlist is loaded on player ');
            return false;
        }
        item = playerPlaylist.getItem(itemPosition);
        if (item === null) {
            logger.error(' No item to play at index ', currentPlaying,
                ' playlist is sized ', playerPlaylist.getSize());
            return false;
        }
        // set title
        playerUi.setTitle(item[Const.FJCONFIG_TITLE]);
        // set thumbs
        playerMedia.setThumbsUrl(item[Const.FJCONFIG_THUMBS]);
        // unload old
        playerMedia.Unload();
        // load new item
        if (item[Const.FJCONFIG_SRC] !== null || item[Const.FJCONFIG_SRC] !== undefined) {
            if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
                // clear dash
                logger.warn(' will play a clear dash on caption obect ', playerUi.getVideoCaption());
                playerMedia.loadDash(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_POSTER],
                    item[Const.FJCONFIG_SUBTITLES], playerUi.getVideoCaption(), start);
            } else {
                playerMedia.load(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_TYPE],
                    item[Const.FJCONFIG_POSTER], item[Const.FJCONFIG_SUBTITLES], start);
            }
            return true;
        }
        logger.error('src of item is not valid , at index ', currentPlaying);
        return false;
    }

    function playNext() {
        if (!playlistLoaded) {
            logger.error(' No playlist is loaded on player ');
            return false;
        }
        // set playlist again
        playingList = true;
        currentPlaying++;
        logger.log(' will play next', currentPlaying, ' in playlist is loaded on player ');
        if (playerPlaylist.getSize() < currentPlaying) {
            if (loopingList === true) {
                currentPlaying = 0;
            }
            // playlist if ended
            return false;
        }
        // play next
        playItem(currentPlaying);
        // auto play it
        playerUi.ShowVideo();
        playerUi.onplaypauseClick();
        return true;
    }

    function AdsEventing(e, args) {
        logger.debug(' just a new event from adsmgr ', e, args);
        // send Event to listener
        logger.warn('Sending Ads Event >>>>>>>>>>>>>>>>>   ', e);
        events.fireEvent(e);
        if (e === Const.AdsEvents.ADS_PLAYBACK_ENDED) {
            playingAds = false;
            if (args === Const.AdsEnum.ADS_PRE_ROLL) {
                if (AdsMgr.CheckPreAds() === true) {
                    return;
                }
                playerUi.ShowVideo();
                playerMedia.play();
                playerUi.toggleplaypauseBtn();
                return;
                // freezePlayer(false, true, false);
            } else if (args === Const.AdsEnum.ADS_POST_ROLL) {
                if (AdsMgr.CheckPostAds() === true) {
                    return;
                }
                // check if in playlist then play list
                if (playingList === true) {
                    playerUi.toggleplaypauseBtn();
                    playerUi.ShowVideo();
                    playNext();
                }
                // freezePlayer(false, false, true);
            } else if (args === Const.AdsEnum.ADS_MID_ROLL) {
                playerUi.ShowVideo();
                playerMedia.play();
                playerUi.toggleplaypauseBtn();
                // freezePlayer(false, false, false);
            } else {
                logger.warn(' unknown Ads type !! ', args);
            }
        }
        if (e === Const.AdsEvents.ADS_PLAYBACK_STARTED) {
            playingAds = true;
            // hide the player and pause it
            playerMedia.pause();
            playerUi.hideVideo();
        }
    }

    function midPlayingChecks(secondes) {
        var ok;
        OverlaysMgr.CheckOverlays(secondes);
        ok &= AdsMgr.CheckMidAds(secondes);
        return ok;
    }



    function playPrev() {
        if (!playlistLoaded) {
            logger.error(' No playlist is loaded on player ');
            return false;
        }
        // set playlist again
        playingList = true;
        currentPlaying--;
        logger.log(' will play next', currentPlaying, ' in playlist is loaded on player ');
        if (currentPlaying < 0) {
            if (loopingList === true) {
                currentPlaying = playerPlaylist.getSize() - 1;
            }
            // playlist if ended
            return false;
        }
        // play next
        playItem(currentPlaying);
        // auto play it
        playerUi.ShowVideo();
        playerUi.onplaypauseClick();
        return true;
    }

    function MplayerEventing(e, args) {
        var item, vid;
        if (e === Const.PlayerEvents.PLAYBACK_TIME_UPDATE) {
            playerUi.UpdateProgress(playerMedia.time());
            vid = playerUi.getVideo();
            playerUi.setDuration(playerMedia.getDuration());
            midPlayingChecks(Math.round(playerMedia.time()));
        } else {
            if (e === Const.PlayerEvents.PLAYBACK_ENDED) {
                if (AdsMgr.CheckPostAds() === true) {
                    logger.debug('starting  post ads !!');
                } else {
                    // check if in playlist then play list
                    if (playingList === true) {
                        playNext();
                    }
                }
            }
            if (e === Const.PlayerEvents.PLAYBACK_STARTED) {
                // first starting  only
                if (args === 1) {
                    if (AdsMgr.CheckPreAds() === false) {
                        playerMedia.play();
                    } else {
                        playerMedia.pause();
                    }
                }
                playerUi.HideSpinner();
                playerUi.toggleplaypauseBtn();
                playerUi.setDuration(playerMedia.getDuration());
            }
            if (e === Const.PlayerEvents.TRACKS_ADDED) {
                logger.warn(' Eventing TRACKS _ADDED !! ');
                // this a specific dahs event so pass playerMedia
                playerUi.SetupSubsAudsManager(playerMedia);
            }

            if (e === Const.PlayerEvents.STREAM_LOADED) {
                playerUi.ShowSpinner();
                // checks thumbs
                playerUi.SetupThumbsManager(playerMedia.getDuration(), args);
                playerUi.SetupSubsAudsManager(playerMedia);
                playerUi.setDuration(playerMedia.getDuration());
                item = playerPlaylist.getItem(currentPlaying);
                // Set Overlays
                OverlaysMgr.Setup(item[Const.FJCONFIG_OVERLAYS]);
                // Set ads
                vid = playerUi.getVideo();
                vid.width = videoWidth;
                vid.height = videoHeight;
                logger.warn('Video  dimensions ', vid.videoWidth, 'X', vid.videoHeight,
                    ' while asked are ', videoWidth, 'X', videoHeight);
                AdsMgr.Setup(item[Const.FJCONFIG_ADS], videoWidth, videoHeight);
                //  vid.videoWidth, vid.videoHeight);

            }
            if (e === Const.PlayerEvents.PLAYBACK_SEEKING) {
                playerUi.ShowSpinner();
            }
            if (e === Const.PlayerEvents.PLAYBACK_SEEKED) {
                playerUi.HideSpinner();
            }


            // send Event to listener
            logger.warn('Sending Event >>>>>>>>>>>>>>>>>   ', e);
            events.fireEvent(e);
        }

    }
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
            playerMedia.on(Const.PlayerEvents.TRACKS_ADDED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.STREAM_LOADED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_STARTED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_PAUSED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_ENDED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_SEEKED, MplayerEventing);
            playerMedia.on(Const.PlayerEvents.PLAYBACK_SEEKING, MplayerEventing);
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
    }
    /**
     *
     */
    function playAt(index, autostart) {
        var start = true;
        if (autostart !== true) {
            start = false;
        }
        playingList = false;
        return playItem(index, start);
    };

    function startPlaylist(positionToStartFrom, loop, randomPlay, autostart) {
        var item;
        var start = true;
        if (autostart !== true) {
            start = false;
        }
        currentPlaying = positionToStartFrom;
        if (!playlistLoaded) {
            logger.error(' No playlist is loaded on player ');
            return false;
        }
        item = playerPlaylist.getItem(currentPlaying);
        if (item === undefined) {
            logger.error(' No item to play at index ', currentPlaying,
                ' playlist is sized ', playerPlaylist.getSize());
            return false;
        }
        playingList = true;
        loopingList = loop;
        // settitle
        playerUi.setTitle(item[Const.FJCONFIG_TITLE]);
        // set thumbs
        playerMedia.setThumbsUrl(item[Const.FJCONFIG_THUMBS]);
        // play item
        if (item[Const.FJCONFIG_SRC] !== null || item[Const.FJCONFIG_SRC] !== undefined) {
            if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
                // clear dash
                playerMedia.loadDash(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_POSTER],
                    item[Const.FJCONFIG_SUBTITLES], playerUi.getVideoCaption(), start);
            } else {
                playerMedia.load(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_TYPE],
                    item[Const.FJCONFIG_POSTER], item[Const.FJCONFIG_SUBTITLES], start);
            }
            return true;
        }
        logger.error('src of item is not valid , at index ', currentPlaying);
        return false;
    }

    function seek(time) {
        playerMedia.seek(time);
    }

    function reset() {
        playerMedia.Unload();
        playerUi.reset();
    }

    function play() {
        playerMedia.pause();
        if (AdsMgr.CheckPreAds() === false) {
            playerMedia.play();
        }
        playerUi.toggleplaypauseBtn();
    }

    function pause() {
        playerMedia.pause();
        playerUi.toggleplaypauseBtn();
    }

    function isPlayingAds() {
        return playingAds;
    }

    function isReady() {
        return playlistLoaded;
    }

    function isPaused() {
        return playerMedia.isPaused();
    }

    function isEnded() {
        return playerMedia.isEnded();
    }
    /**
     *
     */
    function on(name, handler) {
        return events.on(name, handler);
    };
    /**
     *
     */
    function off(name, handler) {
        return events.off(name, handler);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        duration: duration,
        loadPlaylist: loadPlaylist,
        playAt: playAt,
        startPlaylist: startPlaylist,
        play: play,
        reset: reset,
        seek: seek,
        playNext: playNext,
        playPrev: playPrev,
        pause: pause,
        isPaused: isPaused,
        isPlayingAds: isPlayingAds,
        isReady: isReady,
        isEnded: isEnded,
        on: on,
        off: off,
        constructor: Player
    };
};
export default Player;