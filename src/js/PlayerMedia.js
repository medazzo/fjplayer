'use strict';
import Logger from './Logger';
import Eventing from './Eventing';
import { MediaPlayer } from 'dashjs';
import * as Const from './constants';
import * as Langs from './isoLangs';
// import * as Const from './constants';
/**
 * @module PlayerMedia
 * @description The PlayerMedia is the html video/dash/drm Media player
 *
 */
function PlayerMedia() {
    var video = null,
        self = this,
        initialized = false,
        videoFigure = null,
        startingCount = 0,
        thumbsTrackUrl = null,
        thumbsTrackIndex = -1,
        getEndedEvent = false,
        CurrentStreamType = PlayerMedia.UNKNOWN,
        DashPlayer = null,
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
        };
    /**
     *
     */
    function initialize(playerUiVideo, playerUiVideoFigure) {
        video = playerUiVideo;
        DashPlayer = MediaPlayer().create();
        DashPlayer.initialize();
        if (!video) {
            throw new Error('Please call initialize with a valid Player UI having a video html 5 element ');
        }
        initialized = true;
        videoFigure = playerUiVideoFigure;
        logger.debug(' Media player juste initilized with playerUiVideo');
    };
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
        return true;
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
        return true;
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
        return true;
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

    function setThumbsUrl(url) {
        if (url !== null && url !== undefined && url !== '') {
            thumbsTrackUrl = url;
            logger.debug(' Setting url for thumbs @', url);
        } else {
            thumbsTrackUrl = null;
            logger.debug(' No Setting url for thumbs ');
        }
    };

    function setTextTrack(textTrackIndex) {
        var index = parseInt(textTrackIndex);
        var i = 0;
        logger.warn(" Setting text track to index : ", index);
        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            for (i = 0; i < video.textTracks.length; i++) {
                if ((video.textTracks[i].kind === 'captions') ||
                    (video.textTracks[i].kind === 'subtitles')) {
                    if (index === i) {
                        video.textTracks[i].mode = 'showing';
                    } else {
                        video.textTracks[i].mode = 'hidden';
                    }
                }
            }
        } else {
            DashPlayer.setTextTrack(index);
        }
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
        startingCount++;
        events.fireEvent(Const.PlayerEvents.PLAYBACK_STARTED, startingCount);
    };

    function onPlaybackPaused(e) {
        events.fireEvent(Const.PlayerEvents.PLAYBACK_PAUSED);
    };

    function onPlaybackEnded(e) {
        getEndedEvent = true;
        events.fireEvent(Const.PlayerEvents.PLAYBACK_ENDED);
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
        events.fireEvent(Const.PlayerEvents.PLAYBACK_TIME_UPDATE, time);
    };

    function onSeeked(e) {
        events.fireEvent(Const.PlayerEvents.PLAYBACK_SEEKED);
    };

    function onSeeking(e) {
        events.fireEvent(Const.PlayerEvents.PLAYBACK_SEEKING);
    }

    function onError(e) {
        var args = {
            'type': e.type,
            'code': e.error,
            'message': e.event.message
        };
        logger.error('>>>>>>>>>>>>>>> ERROR !!:', e);
        events.fireEvent(Const.PlayerEvents.PLAYBACK_ERROR, args);
    };

    function onTracksAdded(e) {
        logger.debug('Eventing ## Adding new  track :', e);
        events.fireEvent(Const.PlayerEvents.TRACKS_ADDED);
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
        var i = 0;
        var availableTracks = null;
        // video tracks
        thumbsTrackIndex = -1;
        if (thumbsTrackUrl !== null) {
            for (i = 0; i < video.textTracks.length; i++) {
                if (video.textTracks[i].kind === 'metadata') {
                    thumbsTrackIndex = i;
                    video.textTracks[i].mode = 'hidden'; // thanks Firefox
                    logger.warn('find  metadata tumbs  @ ', thumbsTrackIndex,
                        '/', video.textTracks.length, ' >>> and video duration ;;; ', getDuration());
                } else if ((video.textTracks[i].kind === 'captions') ||
                    (video.textTracks[i].kind === 'subtitles')) {
                    // SubsTrackIndex = i;
                    logger.warn('find  soustitres  @ ', thumbsTrackIndex,
                        '/', video.textTracks.length, ' >>> ', video.textTracks[i]);

                    break;
                }
            }
        }
        /*
        if ((CurrentStreamType === StreamTypes.DASH_CLEAR) ||
            (CurrentStreamType === StreamTypes.DASH_ENCRYPTED)) {
            // add dash subtitles to menu
            availableTracks = DashPlayer.getTracksFor('captions');
            availableTracks.concat(DashPlayer.getTracksFor('subtitles'));
            logger.warn(' Find subtitles track on dash Stream !! : ', availableTracks);
        } */

        logger.info(' stream is completly loaded  ');
        if ((thumbsTrackIndex !== -1) && (thumbsTrackUrl !== -1)) {
            events.fireEvent(Const.PlayerEvents.STREAM_LOADED, thumbsTrackIndex);
        } else {
            events.fireEvent(Const.PlayerEvents.STREAM_LOADED, null);
        }
    };

    function SetManuallysubs(subs, video) {
        var track = null,
            item = null,
            tmp = null,
            label = null,
            i = 0,
            n = 0;
        // set subs
        if (subs !== null && subs !== undefined) {
            for (i = 0; i < subs.length; i++) {
                item = subs[i];
                track = document.createElement('track');
                track.kind = 'subtitles';
                track.src = item[Const.FJCONFIG_SRC];
                track.srclang = item[Const.FJCONFIG_LANG];
                tmp = Langs.isoLangs[item[Const.FJCONFIG_LANG]];
                logger.log(' Appending track substitles with Label', tmp.name);
                n = tmp.name.indexOf(",");
                if (n === -1) {
                    n = tmp.name.indexOf(";");
                }
                if (n === -1) {
                    label = tmp.name;
                } else {
                    label = tmp.name.substr(0, n);
                }
                track.label = label;
                video.appendChild(track);
            }
        } else {
            logger.debug('no vtt Subs are found in config.');
        }
    };

    function doesTimeMarchesOn() {
        var version;
        var REQUIRED_VERSION = 49.0;

        if (typeof navigator !== 'undefined') {
            if (!navigator.userAgent.match(/Firefox/)) {
                return true;
            }

            version = parseFloat(navigator.userAgent.match(/rv:([0-9.]+)/)[1]);

            if (!isNaN(version) && version >= REQUIRED_VERSION) {
                return true;
            }
        }
    };
    /**
     * Used to Clean loaded data video
     */
    function Unload() {
        var el = video;
        var elClone = null;
        if (initialized !== true) {
            logger.warn('not yet initialized !');
            return;
        }
        // remove all video child
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        video = elClone;

        // hide the overlay , empty the div
        while (video.hasChildNodes()) {
            video.removeChild(video.firstChild);
        }
        // unset attr
        video.removeAttribute('poster');

        if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
            video.removeEventListener('loadedmetadata', onStreamInitialized);
            video.removeEventListener('play', onPlayStart);
            video.removeEventListener('pause', onPlaybackPaused);
            video.removeEventListener('ended', onPlaybackEnded);
            video.removeEventListener('timeupdate', onPlayTimeUpdate);
            video.removeEventListener('seeking', onSeeking);
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
            DashPlayer.off(MediaPlayer.events.PLAYBACK_SEEKING, onSeeking, this);
            DashPlayer.off(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
            DashPlayer.off(MediaPlayer.events.TEXT_TRACK_ADDED, onTracksAdded, this);
            DashPlayer.off(MediaPlayer.events.ERROR, onError, this);
        }
        CurrentStreamType = PlayerMedia.UNKNOWN;
    }

    /**
     * Used for clear video/mp4
     */
    function load(url, type, poster, subs, autoplay) {
        var track = null;
        var source = document.createElement('source');
        source.type = type;
        source.src = url;
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        video.appendChild(source);
        if (poster !== null && poster !== undefined && poster !== '') {
            video.setAttribute('poster', poster);
        }
        CurrentStreamType = StreamTypes.MP4_CLEAR;
        // set thumbs
        if (thumbsTrackUrl !== null && thumbsTrackUrl !== undefined) {
            track = document.createElement('track');
            track.kind = 'metadata';
            track.src = thumbsTrackUrl;
            logger.log(' Appending source thumbs to video', track);
            video.appendChild(track);
        } else {
            logger.warn(' Thumbs was not found .');
        }
        // set subs
        SetManuallysubs(subs, video);
        // Setting Callbacks
        video.addEventListener('loadedmetadata', onStreamInitialized, false);
        video.addEventListener('play', onPlayStart, false);
        video.addEventListener('pause', onPlaybackPaused, false);
        video.addEventListener('ended', onPlaybackEnded, false);
        video.addEventListener('timeupdate', onPlayTimeUpdate, false);
        video.addEventListener('seeked', onSeeked, false);
        video.addEventListener('seeking', onSeeking, false);
        video.addEventListener('error', onError, false);

        logger.info(' Clear MP4 stream is loaded @ ', url);
    };
    /**
     * Used for clear mpeg Dash
     */
    function loadDash(url, poster, subs, videoCaption, autoplay) {
        var track = null;
        if (poster !== null && poster !== undefined && poster !== '') {
            video.setAttribute('poster', poster);
        }
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        if (DashPlayer === null) {
            DashPlayer = MediaPlayer().create();
            DashPlayer.initialize();
        }
        DashPlayer.attachView(video);
        DashPlayer.attachSource(url);
        DashPlayer.setAutoPlay(autoplay);
        DashPlayer.setFastSwitchEnabled(true);
        DashPlayer.attachVideoContainer(videoFigure);
        // Add HTML-rendered TTML subtitles except for Firefox < v49 (issue #1164)
        if (doesTimeMarchesOn()) {
            DashPlayer.attachTTMLRenderingDiv(videoCaption);
        }

        CurrentStreamType = StreamTypes.DASH_CLEAR;
        // set thumbs
        if (thumbsTrackUrl !== null && thumbsTrackUrl !== undefined) {
            track = document.createElement('track');
            track.kind = 'metadata';
            track.src = thumbsTrackUrl;
            logger.log(' Appending source thumbs to video', track);
            video.appendChild(track);
        } else {
            logger.debug('No Thumbs vtt file is found on config.');
        }
        // set subs
        SetManuallysubs(subs, video);
        // Setting Callbacks
        DashPlayer.on(MediaPlayer.events.PLAYBACK_METADATA_LOADED, onStreamInitialized, this);
        // next is commented because it trigger spinner on change text track !
        // DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_PLAYING, onPlayStart, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, self);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, self);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, self);
        DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKING, onSeeking, self);
        DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
        DashPlayer.on(MediaPlayer.events.ERROR, onError, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ERROR, onError, this);
        // attach to play url
        DashPlayer.attachSource(url);
        logger.info(' Clear DASH stream is loaded @ ', url);
    };
    /**
     * Used for Encrypted mpeg Dash
     */
    function loadDashDrm(url, poster, subs, videoCaption, autoplay, drm) {
        var track = null;
        if (poster !== null && poster !== undefined && poster !== '') {
            video.setAttribute('poster', poster);
        }
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        if (DashPlayer === null) {
            DashPlayer = MediaPlayer().create();
            DashPlayer.initialize();
        }
        DashPlayer.attachView(video);
        DashPlayer.attachSource(url);
        DashPlayer.setAutoPlay(autoplay);
        DashPlayer.setFastSwitchEnabled(true);
        DashPlayer.attachVideoContainer(videoFigure);
        // Add HTML-rendered TTML subtitles except for Firefox < v49 (issue #1164)
        if (doesTimeMarchesOn()) {
            DashPlayer.attachTTMLRenderingDiv(videoCaption);
        }
        // TODO : set Drm
        CurrentStreamType = StreamTypes.DASH_ENCRYPTED;
        // set thumbs
        if (thumbsTrackUrl !== null && thumbsTrackUrl !== undefined) {
            track = document.createElement('track');
            track.kind = 'metadata';
            track.src = thumbsTrackUrl;
            logger.log(' Appending source thumbs to video', track);
            video.appendChild(track);
        } else {
            logger.warn(' Thumbs was not found .');
        }
        // set subs
        SetManuallysubs(subs, video);
        // Setting Callbacks
        DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, self);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, self);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, self);
        DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, self);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKING, onSeeking, self);
        DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
        DashPlayer.on(MediaPlayer.events.ERROR, onError, self);
        // attach to play url
        DashPlayer.attachSource(url);
        logger.info(' Clear ENC DASH stream is loaded @ ', url);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        initialize: initialize,
        on: on,
        off: off,
        StreamTypes: StreamTypes,
        CurrentStreamType: CurrentStreamType,
        play: play,
        stop: stop,
        pause: pause,
        setTextTrack: setTextTrack,
        isPaused: isPaused,
        isEnded: isEnded,
        isMuted: isMuted,
        setMute: setMute,
        setVolume: setVolume,
        getVolume: getVolume,
        setThumbsUrl: setThumbsUrl,
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