'use strict';
import Logger from '../utils/Logger';
import Eventing from '../utils/Eventing';
import FjProtectionController from '../protection/FjProtectionController';
import { MediaPlayer } from 'dashjs';
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
        activateDashLog = true,
        videoFigure = null,
        startingCount = 0,
        thumbsTrackUrl = null,
        thumbsTrackIndex = -1,
        getEndedEvent = false,
        CurrentUrl = null,
        CurrentProtection = null,
        CurrentStreamType = PlayerMedia.UNKNOWN,
        DashPlayer = null,
        drmData = [],
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
        DashPlayer.getDebug().setLogToBrowserConsole(activateDashLog);
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
        var msg = e.event.message;
        if (e.event.message === undefined) {
            msg = e.event;
        }
        var args = {
            'type': e.type,
            'code': e.error,
            'message': msg
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
        } else {
            DashPlayer.reset();
            // Unsetting Callbacks
            DashPlayer.off(MediaPlayer.events.METADATA_LOADED, onStreamInitialized, this);
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
            DashPlayer.off(MediaPlayer.events.PLAYBACK_ERROR, onError, this);
            DashPlayer.off(MediaPlayer.events.PROTECTION_CREATED, this);
            DashPlayer.off(MediaPlayer.events.PROTECTION_DESTROYED, this);
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
        var forjaDrmKeySystemFound = false;
        if (poster !== null && poster !== undefined && poster !== '') {
            video.setAttribute('poster', poster);
        }
        video.preload = true;
        video.controls = false;
        video.autoplay = autoplay;
        if (DashPlayer === null) {
            DashPlayer = MediaPlayer().create();
            DashPlayer.getDebug().setLogToBrowserConsole(activateDashLog);
            DashPlayer.initialize();
        }
        CurrentUrl = url;
        if ((drm === undefined) || (drm === null)) {
            CurrentStreamType = StreamTypes.DASH_CLEAR;
            CurrentProtection = null;
            logger.info(' Loading CLEAR Dash @', CurrentUrl);
        } else {
            CurrentStreamType = StreamTypes.DASH_ENCRYPTED;
            CurrentProtection = drm;
            logger.info(' Loading ENCRYPTED Dash @', CurrentUrl);
            // check if drm object contains  forja drm system , then to add forja  attachProtectionController(value)
            for (k in drm) {
                logger.info('Cheking DRM  > ', k);
                if (Const.FJCONFIG_DRM_SCHEME_FORJA === k) {
                    logger.log(Const.FJCONFIG_DRM_SCHEME_FORJA, ' is found !! ');
                    forjaDrmKeySystemFound = true;
                    break;
                }
            }



            if (forjaDrmKeySystemFound === true) {
                let protectionKeyController = new FjProtectionController();
                protectionKeyController.setConfig({ log: logger.warn });
                protectionKeyController.initialize();
                DashPlayer.setProtectionData(drm);
                DashPlayer.attachProtectionController(protectionKeyController);
                logger.debug(' To Encrypt : using Forja System Key !.');
            } else {
                logger.debug(' To Encrypt : using Default System Key .');
            }
        }

        DashPlayer.setAutoPlay(autoplay);
        DashPlayer.setFastSwitchEnabled(true);
        DashPlayer.attachView(video);
        DashPlayer.attachVideoContainer(videoFigure);
        // Add HTML-rendered TTML subtitles except for Firefox < v49 (issue #1164)
        if (doesTimeMarchesOn()) {
            DashPlayer.attachTTMLRenderingDiv(videoCaption);
        }
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
        // Setting Callbacks
        DashPlayer.on(MediaPlayer.events.PLAYBACK_METADATA_LOADED, onStreamInitialized, this);
        // next is commented because it trigger spinner on change text track !
        // DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);        
        DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
        DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
        DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKING, onSeeking, this);
        DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
        DashPlayer.on(MediaPlayer.events.ERROR, onError, this);
        DashPlayer.on(MediaPlayer.events.PLAYBACK_ERROR, onError, this);
        DashPlayer.on(MediaPlayer.events.PROTECTION_CREATED, onProtectionCreated, this);
        DashPlayer.on(MediaPlayer.events.PROTECTION_DESTROYED, onProtectionDestroyed, this);

        // attach to play url
        DashPlayer.attachSource(url);
        logger.info('  DASH stream is loaded @ ', url);
    };
    //*************************************************************************************
    // PROTECTION MANAGMENT
    //*************************************************************************************

    // Listen for protection system creation/destruction by the Dashplayer itthis.  This will
    // only happen in the case where we do not not provide a ProtectionController
    // to the Dashplayer via dashjs.MediaPlayer.attachSource()

    function onProtectionCreated(e) {
        var data = addDRMData(e.manifest, e.controller);
        data.isPlaying = true;
        for (var i = 0; i < drmData.length; i++) {
            if (drmData[i] !== data) {
                drmData[i].isPlaying = false;
            }
        }
    };

    function onProtectionDestroyed(e) {
        for (var i = 0; i < drmData.length; i++) {
            if (drmData[i].manifest.url === e.data) {
                drmData.splice(i, 1);
                break;
            }
        }
    };


    function addDRMData(manifest, protCtrl) {

        // Assign the session type to be used for this controller
        logger.warn(' Used protection controller >> ', protCtrl);

        var data = {
            manifest: manifest,
            protCtrl: protCtrl,
            licenseReceived: false,
            sessions: []
        };
        var findSession = function(sessionID) {
            for (var i = 0; i < data.sessions.length; i++) {
                if (data.sessions[i].sessionID === sessionID)
                    return data.sessions[i];
            }
            return null;
        };
        drmData.push(data);

        DashPlayer.on(MediaPlayer.events.KEY_SYSTEM_SELECTED, function(e) {
            if (!e.error) {
                data.ksconfig = e.data.ksConfiguration;
            } else {
                data.error = e.error;
            }
        });

        DashPlayer.on(MediaPlayer.events.KEY_SESSION_CREATED, function(e) {
            if (!e.error) {
                var persistedSession = findSession(e.data.getSessionID());
                if (persistedSession) {
                    persistedSession.isLoaded = true;
                    persistedSession.sessionToken = e.data;
                } else {
                    var sessionToken = e.data;
                    data.sessions.push({
                        sessionToken: sessionToken,
                        sessionID: e.data.getSessionID(),
                        isLoaded: true
                    });
                }
            } else {
                data.error = e.error;
            }

        });


        DashPlayer.on(MediaPlayer.events.KEY_SESSION_REMOVED, function(e) {
            if (!e.error) {
                var session = findSession(e.data);
                if (session) {
                    session.isLoaded = false;
                    session.sessionToken = null;
                }
            } else {
                data.error = e.error;
            }
        });


        DashPlayer.on(MediaPlayer.events.KEY_SESSION_CLOSED, function(e) {
            if (!e.error) {
                for (var i = 0; i < data.sessions.length; i++) {
                    if (data.sessions[i].sessionID === e.data) {
                        data.sessions.splice(i, 1);
                        break;
                    }
                }
            } else {
                data.error = e.error;
            }
        });

        DashPlayer.on(MediaPlayer.events.KEY_STATUSES_CHANGED, function(e) {
            var session = findSession(e.data.getSessionID());
            if (session) {
                var toGUID = function(uakey) {
                    var keyIdx = 0,
                        retVal = "",
                        i, zeroPad = function(str) {
                            return (str.length === 1) ? "0" + str : str;
                        };
                    for (i = 0; i < 4; i++, keyIdx++)
                        retVal += zeroPad(uakey[keyIdx].toString(16));
                    retVal += "-";
                    for (i = 0; i < 2; i++, keyIdx++)
                        retVal += zeroPad(uakey[keyIdx].toString(16));
                    retVal += "-";
                    for (i = 0; i < 2; i++, keyIdx++)
                        retVal += zeroPad(uakey[keyIdx].toString(16));
                    retVal += "-";
                    for (i = 0; i < 2; i++, keyIdx++)
                        retVal += zeroPad(uakey[keyIdx].toString(16));
                    retVal += "-";
                    for (i = 0; i < 6; i++, keyIdx++)
                        retVal += zeroPad(uakey[keyIdx].toString(16));
                    return retVal;
                };
                session.keystatus = [];
                e.data.getKeyStatuses().forEach(function(status, key) {
                    session.keystatus.push({
                        key: toGUID(new Uint8Array(key)),
                        status: status
                    });
                });
            }
        });

        DashPlayer.on(MediaPlayer.events.KEY_MESSAGE, function(e) {
            logger.warn(' Received message key from server ', e)
            var session = findSession(e.data.sessionToken.getSessionID());
            if (session) {
                session.lastMessage = "Last Message: " + e.data.message.byteLength + " bytes";
                if (e.data.messageType) {
                    session.lastMessage += " (" + e.data.messageType + "). ";
                } else {
                    session.lastMessage += ". ";
                }
                session.lastMessage += "Waiting for response from license server...";
            }
        });

        DashPlayer.on(MediaPlayer.events.LICENSE_REQUEST_COMPLETE, function(e) {
            logger.warn(' The license request is complete event : ', e)
            if (!e.error) {
                var session = findSession(e.data.sessionToken.getSessionID());
                if (session) {
                    session.lastMessage = "Successful response received from license server for message type '" + e.data.messageType + "'!";
                    data.licenseReceived = true;
                }
            } else {
                data.error = "License request failed for message type '" + e.data.messageType + "'! " + e.error;
            }
        });

        return data;
    };

    function deleteDrmdata(data) {
        for (var i = 0; i < drmData.length; i++) {
            if (drmData[i] === data) {
                drmData.splice(i, 1);
                data.protCtrl.reset();
            }
        }
    };

    function doLicenseFetch() {
        DashPlayer.retrieveManifest(CurrentUrl, function(manifest) {
            if (manifest) {
                var found = false;
                for (var i = 0; i < drmData.length; i++) {
                    if (manifest.url === drmData[i].manifest.url) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    var protCtrl = DashPlayer.getProtectionController();
                    if (CurrentProtection !== null) {
                        protCtrl.setProtectionData(CurrentProtection);
                    }
                    addDRMData(manifest, protCtrl);
                    protCtrl.initialize(manifest);
                }
            } else {
                // Log error here
            }
        });
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
        constructor: PlayerMedia
    };
};
export default PlayerMedia;