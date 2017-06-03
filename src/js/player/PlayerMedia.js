'use strict';
var shaka = require('shaka-player');
import Logger from '../utils/Logger';
import Eventing from '../utils/Eventing';
import * as Const from '../defs/constants';
import * as Langs from '../defs/isoLangs';

// import * as Const from '../defs/constants';
/**
 * @module PlayerMedia
 * @description The PlayerMedia is the html video/dash/drm Media player
 *
 */
function PlayerMedia() {
    var video = null,
        initialized = false,
        startingCount = 0,
        thumbsTrackUrl = null,
        thumbsTrackIndex = -1,
        getEndedEvent = false,
        CurrentUrl = null,
        CurrentProtection = null,
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
    function initialize(playerUiVideo) {
        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();

        // Check to see if the browser supports the basic APIs Shaka needs.
        if (!shaka.Player.isBrowserSupported()) {
            // This browser does not have the minimum set of APIs we need.
            logger.error('Browser not supported !');
            return false;
        }

        video = playerUiVideo;
        if (!video) {
            throw new Error('Please call initialize with a valid Player UI having a video html 5 element ');
        }
        //DashPlayer = new shaka.Player(video);
        // done
        initialized = true;
        logger.debug(' Media player just initialized with playerUiVideo');
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
        if (initialized === true) {
            video.play();
        } else {
            logger.warn(' No Media Loaded , nothing to play ');
        }
    };
    /**
     *
     */
    function time() {
        if (initialized === true) {
            return video.currentTime;
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function isPaused() {
        if (initialized === true) {
            return (video.paused);
        }
        logger.warn(' No Media Loaded ! ');
        return true;
    };
    /**
     *
     */
    function isEnded() {
        if (initialized === true) {
            return (video.ended);
        }
        logger.warn(' No Media Loaded ! ');
        return true;
    };
    /**
     *
     */
    function isMuted() {
        if (initialized === true) {
            return (video.muted);
        }
        logger.warn(' No Media Loaded ! ');
        return true;
    };
    /**
     *
     */
    function setVolume(volume) {
        if (initialized === true) {
            video.volume = volume;
        } else {
            logger.warn(' No Media Loaded ! ');
        }
    };
    /**
     *
     */
    function getDuration() {
        if (initialized === true) {
            return video.duration;
        }
        logger.warn(' No Media Loaded ! ');
    };
    /**
     *
     */
    function getVolume() {
        if (initialized === true) {
            return video.volume;
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
    /* ********************************************************************** */
    /*                               TXT TRACKS                               */
    /* ********************************************************************** */
    function setTextTrack(textTrackIndex) {
        var index = parseInt(textTrackIndex);
        var i = 0;
        logger.warn(" Setting text track to index : ", index);
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                for (i = 0; i < video.textTracks.length; i++) {
                    if ((video.textTracks[i].kind === 'captions') ||
                        (video.textTracks[i].kind === 'subtitles') ||
                        (video.textTracks[i].kind === 'subtitle')) {
                        if (index === i) {
                            video.textTracks[i].mode = 'showing';
                        } else {
                            video.textTracks[i].mode = 'hidden';
                        }
                    }
                }
            } else {
                DashPlayer.selectTextTrack(DashPlayer.getTextTracks()[index]);
            }
        }
    };

    function getTextTracks() {
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                return video.textTracks;
            }
            return DashPlayer.getTextTracks();

        }
        logger.warn(' No Media Loaded ! ');
        return [];
    };

    function isTextTrackEnabled(textTrackIndex) {
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                return (video.textTracks[textTrackIndex].enabled === true);
            }
            return (DashPlayer.getTextTracks()[textTrackIndex].active === true);

        }
        logger.warn(' No Media Loaded ! ');
        return false;
    };

    function getTextTrackLabel(textTrackIndex) {
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                return (video.textTracks[textTrackIndex].label);
            }
            return (DashPlayer.getTextTracks()[textTrackIndex].language);
        }
        logger.warn(' No Media Loaded ! ');
        return 'NaN';
    };
    /* ********************************************************************** */
    /*                               AUD LANGS                               */
    /* ********************************************************************** */
    function setAudioLang(AudLangIndex) {
        var index = parseInt(AudLangIndex);
        var i = 0;
        logger.warn(" Setting text track to index : ", index);
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                for (i = 0; i < video.textTracks.length; i++) {
                    if (index === i) {
                        video.audioTracks[i].enabled = true;
                    } else {
                        video.audioTracks[i].enabled = false;
                    }
                }
            } else {
                DashPlayer.selectAudioLanguage(DashPlayer.getAudioLanguages()[index]);
            }
        }
    };

    function getAudioLanguages() {
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                return video.audioTracks;
            }
            return DashPlayer.getAudioLanguages();

        }
        logger.warn(' No Media Loaded ! ');
        return [];
    };

    function isAudioLangEnabled(AudLangIndex) {
        var index = parseInt(AudLangIndex);
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                return (video.audioTracks[index].enabled === true);
            }
            return (DashPlayer.getAudioLanguages()[index].enabled === true);

        }
        logger.warn(' No Media Loaded ! ');
        return false;
    };

    function getAudioLangLabel(AudLangIndex) {
        var index = parseInt(AudLangIndex);
        if (initialized === true) {
            if (CurrentStreamType === StreamTypes.MP4_CLEAR) {
                return (video.audioTracks[index].label);
            }
            return (DashPlayer.getAudioLanguages()[index].label);
        }
        logger.warn(' No Media Loaded ! ');
        return 'NaN';
    };
    /**
     *
     */
    function setMute(mute) {
        if (initialized === true) {
            video.muted = mute;
        } else {
            logger.warn(' No Media Loaded ! ');
        }
    };
    /**
     *
     */
    function pause() {
        if (initialized === true) {
            video.pause();
        } else {
            logger.warn(' No Media Loaded , nothing to pause ');
        }
    };
    /**
     *
     */
    function seek(position) {
        if (initialized === true) {
            video.currentTime = parseFloat(position);
        } else {
            logger.warn(' No Media Loaded , nothing to seek ');
        }
    };
    /**
     * Callbacks
     */
    function onShakaError(e) {
        onShError(e.detail);
    };

    function onShakaEvent(e) {
        logger.warn('Eventing  [', event.type, ']:', event);
    };

    function onShError(error) {
        // Log the error.
        logger.error('Error code', error.code, 'object', error);
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
        if (initialized === true) {
            time = video.currentTime;
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
        var msg = e.event.message;
        if (e.event.message === undefined) {
            msg = e.event;
        }
        var args = {
            'type': e.type,
            'code': e.error,
            'message': msgonStreamInitialized
        };
        logger.error('>>>>>>>>>>>>>>> ERROR !!:', e);
        events.fireEvent(Const.PlayerEvents.PLAYBACK_ERROR, args);
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
        logger.warn(' stream is completly loaded  text tracks are !! ', getTextTracks());

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
        } else {
            // Unsetting Callbacks
            DashPlayer.removeEventListener('error', onShakaError);
            DashPlayer.removeEventListener('adaptation', onShakaEvent);
            DashPlayer.removeEventListener('buffering', onShakaEvent);
            DashPlayer.removeEventListener('emsg', onShakaEvent);
            DashPlayer.removeEventListener('expirationupdated', onShakaEvent);
            DashPlayer.removeEventListener('largegap', onShakaEvent);
            DashPlayer.removeEventListener('loading', onShakaEvent);
            DashPlayer.removeEventListener('texttrackvisibility', onShakaEvent);
            DashPlayer.removeEventListener('timelineregionadded', onShakaEvent);
            DashPlayer.removeEventListener('timelineregionenter', onShakaEvent);
            DashPlayer.removeEventListener('timelineregionexit', onShakaEvent);
            DashPlayer.removeEventListener('trackschanged', onShakaEvent);
            DashPlayer.removeEventListener('unloading', onShakaEvent);
            DashPlayer.destroy();
            DashPlayer = null;
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
     * Used for loading mpeg Dash
     */
    function loadDash(url, poster, subs, videoCaption, autoplay, drm) {
        var track = null,
            k = null;
        if (poster !== null && poster !== undefined && poster !== '') {
            video.setAttribute('poster', poster);
        }
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        if (DashPlayer === null) {
            DashPlayer = new shaka.Player(video);
        }

        // Setting Callbacks
        video.addEventListener('loadedmetadata', onStreamInitialized, false);
        video.addEventListener('play', onPlayStart, false);
        video.addEventListener('pause', onPlaybackPaused, false);
        video.addEventListener('ended', onPlaybackEnded, false);
        video.addEventListener('timeupdate', onPlayTimeUpdate, false);
        video.addEventListener('seeked', onSeeked, false);
        video.addEventListener('seeking', onSeeking, false);
        video.addEventListener('error', onError, false);
        // Setting Callbacks
        DashPlayer.addEventListener('error', onShakaError);
        DashPlayer.addEventListener('adaptation', onShakaEvent);
        DashPlayer.addEventListener('buffering', onShakaEvent);
        DashPlayer.addEventListener('emsg', onShakaEvent);
        DashPlayer.addEventListener('expirationupdated', onShakaEvent);
        DashPlayer.addEventListener('largegap', onShakaEvent);
        DashPlayer.addEventListener('loading', onShakaEvent);
        DashPlayer.addEventListener('texttrackvisibility', onShakaEvent);
        DashPlayer.addEventListener('timelineregionadded', onShakaEvent);
        DashPlayer.addEventListener('timelineregionenter', onShakaEvent);
        DashPlayer.addEventListener('timelineregionexit', onShakaEvent);
        DashPlayer.addEventListener('trackschanged', onShakaEvent);
        DashPlayer.addEventListener('unloading', onShakaEvent);

        CurrentUrl = url;
        if ((drm === undefined) || (drm === null)) {
            CurrentStreamType = StreamTypes.DASH_CLEAR;
            CurrentProtection = null;
            logger.info(' Loading CLEAR Dash @', CurrentUrl);
        } else {
            CurrentStreamType = StreamTypes.DASH_ENCRYPTED;
            CurrentProtection = drm;
            logger.info(' drm are ::: ', drm);
            DashPlayer.configure({
                drm: {
                    servers: {
                        'org.w3.clearkey': drm[Const.FJCONFIG_DRM_LICENSE_SERVER]
                    }
                }
            });
            logger.debug(' To Encrypt : using Forja System Key !.');
            logger.info(' Loading ENCRYPTED Dash @', CurrentUrl);
        }

        DashPlayer.getNetworkingEngine().registerRequestFilter(function(type, request) {
            // Only add headers to license requests:
            if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
                // This is the specific header name and value the server wants:
                request.headers['x-api-app'] = '56789';
            }
            // Only add headers to license requests:
            if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
                // This is the specific parameter name and value the server wants:
                // Note that all network requests can have multiple URIs (for fallback),
                // and therefore this is an array. But there should only be one license
                // server URI in this tutorial.
                // request.uris[0] += '/01234';
            }
        });

        // set thumbs
        if (thumbsTrackUrl !== null && thumbsTrackUrl !== undefined) {
            track = document.createElement('track');
            track.kind = 'metadata';
            track.src = thumbsTrackUrl;
            logger.log(' Appending source thumbs to video', track);
            video.appendChild(track);
        } else {
            logger.debug(' Thumbs was not found .');
        }
        // set subs
        SetManuallysubs(subs, video);

        // Try to load a manifest.
        // This is an asynchronous process.
        DashPlayer.load(url).then(function() {
            // This runs if the asynchronous load is successful.
            logger.log('The video has now been loaded!');
        }).catch(onShError); // onError is executed if the asynchronous load fails.
        logger.info('  DASH stream is loaded @ ', url);
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

        setAudioLang: setAudioLang,
        getAudioLanguages: getAudioLanguages,
        isAudioLangEnabled: isAudioLangEnabled,
        getAudioLangLabel: getAudioLangLabel,

        setTextTrack: setTextTrack,
        getTextTracks: getTextTracks,
        isTextTrackEnabled: isTextTrackEnabled,
        getTextTrackLabel: getTextTrackLabel,

        constructor: PlayerMedia
    };
};
export default PlayerMedia;