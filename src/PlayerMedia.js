import Logger from './Logger';
import Eventing from './Eventing';
import { MediaPlayer } from 'dashjs';
// import * as Const from './constants';
/**
 * @module PlayerMedia
 * @description The PlayerMedia is the html video/dash/drm Media player
 *
 */
function PlayerMedia() {
    var CurrentPlayerUi = null,
        video = null,
        videoFigure = null,
        getEndedEvent = false,
        CurrentStreamType = PlayerMedia.UNKNOWN,
        DashPlayer = MediaPlayer().create(),
        logger = new Logger(this),
        events = new Eventing(),
        StreamTypes = {
            UNKNOWN: 0,
            MP4_CLEAR: 1,
            DASH_CLEAR: 2,
            DASH_ENCRYPTED: 3,
            properties: {
                0: { name: 'UNKNOWN', value: 0, code: 'U' },
                1: { name: 'MP4_CLEAR', value: 1, code: 'M' },
                2: { name: 'DASH_CLEAR', value: 2, code: 'D' },
                3: { name: 'DASH_ENCRYPTED', value: 3, code: 'E' }
            }
        },
        PlayerEvents = {
            STREAM_LOADED: 'STREAM_LOADED',
            PLAYBACK_STARTED: 'PLAYBACK_STARTED',
            PLAYBACK_PAUSED: 'PLAYBACK_PAUSED',
            PLAYBACK_SEEKED: 'PLAYBACK_SEEKED',
            PLAYBACK_TIME_UPDATE: 'PLAYBACK_TIME_UPDATE'
        };
    /**
     *
     */
    function initialize(playerUi) {
        CurrentPlayerUi = playerUi;
        if (!CurrentPlayerUi) {
            throw new Error('Please call initialize with a valid Player UI object');
        }
        video = CurrentPlayerUi.getVideo();
        if (!video) {
            throw new Error('Please call initialize with a valid Player UI having a video html 5 element ');
        }
        videoFigure = CurrentPlayerUi.getVideoFigure();
        logger.warn(' Media player juste initilized with CurrentPlayerUi');
    };
    /**
     *
     */
    function on(name, handler) {
        return addEventListener(name, handler);
    };
    /**
     *
     */
    function off(name, handler) {
        return removeEventListener(name, handler);
    };
    /**
     *
     */
    function play() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.play();
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            DashPlayer.play();
        } else {
            logger.warn(' No Media Loaded , nothing to play ');
        }
    };
    /**
     *
     */
    function time() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            return video.currentTime;
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            return DashPlayer.time();
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function isPaused() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            return (video.paused);
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            return DashPlayer.isPaused();
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function isEnded() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            return (video.ended);
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            return getEndedEvent;
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function isMuted() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            return (video.muted);
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            return DashPlayer.isMuted();
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function setVolume(volume) {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.volume = volume;
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            DashPlayer.setVolume(volume);
        } else {
            logger.warn(' No Media Loaded ! ');
        }
    };
    /**
     *
     */
    function getDuration() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            return video.duration;
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) || (
                CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            return DashPlayer.duration();
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function getVolume() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            return video.volume;
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            return DashPlayer.getVolume();
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function setMute(mute) {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.muted = mute;
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            DashPlayer.setMute(mute);
        } else {
            logger.warn(' No Media Loaded ! ');
        }
    };
    /**
     *
     */
    function pause() {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.pause();
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) || (
                CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            DashPlayer.pause();
        } else {
            logger.warn(' No Media Loaded , nothing to pause ');
        }
    };
    /**
     *
     */
    function seek(position) {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.currentTime = parseFloat(position);
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            DashPlayer.seek(parseFloat(position));
        } else {
            logger.warn(' No Media Loaded , nothing to seek ');
        }
    };
    /**
     * Callbacks
     */
    function onQualityChangeRequested(e) {
        // TODO
    };

    function onQualityChangeRendered(e) {
        // TODO
    };

    function onSwitchCompleted(e) {
        // TODO
    };

    function onPlayStart(e) {
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            CurrentPlayerUi.setTime(video.currentTime);
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            CurrentPlayerUi.setTime(DashPlayer.time());
        } else {
            logger.warn(' Internal error !');
            return;
        }
        CurrentPlayerUi.setDuration(getDuration());
        CurrentPlayerUi.setTime(time());
        CurrentPlayerUi.show();
        getEndedEvent = false;
        events.fireEvent(PlayerEvents.PLAYBACK_STARTED);
    };

    function onPlaybackPaused(e) {
        events.fireEvent(PlayerEvents.PLAYBACK_PAUSED);
    };

    function onPlaybackEnded(e) {
        getEndedEvent = true;
        events.fireEvent(PlayerEvents.PLAYBACK_ENDED);
    };

    function onPlayTimeUpdate(e) {
        var time = 0;
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            time = video.currentTime;
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            time = DashPlayer.time();
        } else {
            logger.warn(' Internal error !');
            return;
        }
        CurrentPlayerUi.setTime(time);
        events.fireEvent(PlayerEvents.PLAYBACK_TIME_UPDATE, time);
    };

    function onSeeked(e) {
        events.fireEvent(PlayerEvents.PLAYBACK_SEEKED);
    };

    function onError(e) {
        throw new Error('error : ', e);
    };

    function onTracksAdded(e) {
        logger.warn(' Adding new  track :', e);
        // USED To inform ui and add entry on subtitles menu list
        /* if (!captionMenu) {
            var contentFunc = function(element, index) {
                return isNaN(index) ? "OFF" : element.lang + " : " + element.kind;
            }
            captionMenu = createMenu({ menuType: 'caption', arr: e.tracks }, contentFunc);

            var func = function() {
                onMenuClick(captionMenu, captionBtn);
            }
            menuHandlersList.push(func);
            captionBtn.addEventListener("click", func);
            captionBtn.classList.remove("hide");
        }*/
    };

    function onStreamInitialized() {
        // USED To inform ui and add entry on bitrates menu list and aud tracks
        // Bitrate Menu
        /* var contentFunc;
           if (bitrateListBtn) {
            destroyBitrateMenu();
            var availableBitrates = { menuType: 'bitrate' };
            availableBitrates.audio = DashPlayer.getBitrateInfoListFor("audio") || [];
            availableBitrates.video = DashPlayer.getBitrateInfoListFor("video") || [];
            if (availableBitrates.audio.length > 1 || availableBitrates.video.length > 1) {
                contentFunc = function(element, index) {
                    return isNaN(index) ? " Auto Switch" : Math.floor(element.bitrate / 1000) + " kbps";
                }
                bitrateListMenu = createMenu(availableBitrates, contentFunc);
                var func = function() {
                    onMenuClick(bitrateListMenu, bitrateListBtn);
                };
                menuHandlersList.push(func);
                bitrateListBtn.addEventListener("click", func);
                bitrateListBtn.classList.remove("hide");

            } else {
                bitrateListBtn.classList.add("hide");
            }
        } */
        // Track Switch Menu
        /* if (!trackSwitchMenu && trackSwitchBtn) {
            var availableTracks = { menuType: "track" };
            availableTracks.audio = DashPlayer.getTracksFor("audio");
            availableTracks.video = DashPlayer.getTracksFor("video");
            // these return empty arrays so no need to cehck for null

            if (availableTracks.audio.length > 1 || availableTracks.video.length > 1) {
                contentFunc = function(element) {
                    return 'Language: ' + element.lang + ' - Role: ' + element.roles[0];
                }
                trackSwitchMenu = createMenu(availableTracks, contentFunc);
                var func = function() {
                    onMenuClick(trackSwitchMenu, trackSwitchBtn);
                };
                menuHandlersList.push(func);
                trackSwitchBtn.addEventListener("click", func);
                trackSwitchBtn.classList.remove("hide");
            }
        }*/
        logger.info(' stream is completly loaded  ');
        events.fireEvent(PlayerEvents.STREAM_LOADED);
    };
    /**
     * Used to Clean loaded data video
     */
    function Unload() {
        var el = video;
        var elClone = null;
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        video = elClone;
        // hide the overlay , empty the div
        while (video.hasChildNodes()) {
            video.removeChild(video.firstChild);
        }
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.removeEventListener('loadedmetadata', onStreamInitialized);
            video.removeEventListener('play', onPlayStart);
            video.removeEventListener('pause', onPlaybackPaused);
            video.removeEventListener('ended', onPlaybackEnded);
            video.removeEventListener('timeupdate', onPlayTimeUpdate);
            video.removeEventListener('seeked', onSeeked);
            video.removeEventListener('error', onError);
        } else if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {} else {
            DashPlayer.reset();
            // Unsetting Callbacks
            DashPlayer.off(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
            DashPlayer.off(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
            DashPlayer.off(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
            DashPlayer.off(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
            DashPlayer.off(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
            DashPlayer.off(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
            DashPlayer.off(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
            DashPlayer.off(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
            DashPlayer.off(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
            DashPlayer.off(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
            DashPlayer.off(MediaPlayer.events.ERROR, onError, this);
        }
        CurrentStreamType = PlayerMedia.UNKNOWN;
    };
    /**
     * Used for clear video/mp4
     */
    function load(url, type, poster, autoplay) {
        var source = document.createElement('source');
        source.type = type;
        source.src = url;
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        video.appendChild(source);
        video.setAttribute('poster', poster);
        CurrentStreamType = StreamTypes.MP4_CLEAR;
        // Setting Callbacks
        video.addEventListener('loadedmetadata', onStreamInitialized, false);
        video.addEventListener('play', onPlayStart, false);
        video.addEventListener('pause', onPlaybackPaused, false);
        video.addEventListener('ended', onPlaybackEnded, false);
        video.addEventListener('timeupdate', onPlayTimeUpdate, false);
        video.addEventListener('seeked', onSeeked, false);
        video.addEventListener('error', onError, false);

        logger.info(' Clear MP4 stream is loaded @ ', url);
    };
    /**
     * Used for clear mpeg Dash
     */
    function loadDash(url, poster, autoplay) {
        video.setAttribute('poster', poster);
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        DashPlayer = MediaPlayer().create();
        DashPlayer.initialize(video, url, autoplay);
        DashPlayer.attachVideoContainer(videoFigure);
        CurrentStreamType = StreamTypes.DASH_CLEAR;
        // Setting Callbacks
        DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
        DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
        DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
        DashPlayer.on(MediaPlayer.events.ERROR, onError, this);
    };
    /**
     * Used for Encrypted mpeg Dash
     */
    function loadDashDrm(url, poster, autoplay, drm) {
        video.setAttribute('poster', poster);
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        DashPlayer.initialize(video, url, autoplay);
        DashPlayer.attachVideoContainer(videoFigure);
        // TODO : set Drm
        CurrentStreamType = StreamTypes.DASH_ENCRYPTED;
        // Setting Callbacks
        DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
        DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
        DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
        DashPlayer.on(MediaPlayer.events.ERROR, onError, this);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        initialize: initialize,
        on: on,
        off: off,
        StreamTypes: StreamTypes,
        PlayerEvents: PlayerEvents,
        CurrentStreamType: CurrentStreamType,
        play: play,
        pause: pause,
        isPaused: isPaused,
        isEnded: isEnded,
        isMuted: isMuted,
        setMute: setMute,
        setVolume: setVolume,
        getVolume: getVolume,
        getDuration: getDuration,
        time: time,
        seek: seek,
        Unload: Unload,
        load: load,
        loadDash: loadDash,
        loadDashDrm: loadDashDrm,
        constructor: PlayerMedia
    };
};
export default PlayerMedia;