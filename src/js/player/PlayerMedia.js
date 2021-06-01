const shaka = require('shaka-player');
const Logger = require('../utils/Logger');
const Eventing = require('../utils/Eventing');
const Const = require('../defs/constants');
const IsoLangs = require('../defs/isoLangs');

/**
 * @module PlayerMedia
 * @description The PlayerMedia is the html video/dash/drm Media player
 *
 */
class PlayerMedia {
    constructor(fjPlayerId) {
        this.video = null;
        this.FjPlayerId = fjPlayerId;
        this.FjSessionToken = 'notSettled';
        this.initialized = false;
        this.startingCount = 0;
        this.thumbsTrackUrl = null;
        this.thumbsTrackIndex = -1;
        this.CurrentUrl = false;
        this.CurrentUrl = null;
        this.CurrentProtection = null;
        this.CurrentStreamType = PlayerMedia.UNKNOWN;
        this.DashPlayer = null;
        this.logger = new Logger(this);
        this.events = new Eventing();
        this.StreamTypes = {
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
    }

    /**
     *
     */
    initialize(playerUiVideo) {
    // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();
        // Debug logs, when the default of INFO isn't enough:
        // shaka.log.setLevel(shaka.log.Level.DEBUG);
        // Check to see if the browser supports the basic APIs Shaka needs.
        if (!shaka.Player.isBrowserSupported()) {
            // This browser does not have the minimum set of APIs we need.
            this.logger.error('Browser not supported !');
            return false;
        }

        this.video = playerUiVideo;
        if (!this.video) {
            throw new Error('Please call initialize with a valid Player UI having a this.videohtml 5 element ');
        }
        // this.DashPlayer= new shaka.Player(video);
        // done
        this.initialized = true;
        this.logger.debug(' Media player just this.initializedwith playerUiVideo');
        return true;
    }

    /**
     *
     */
    on(name, handler) {
        return this.events.on(name, handler);
    }

    /**
     *
     */
    off(name, handler) {
        return this.events.off(name, handler);
    }

    /**
     *
     */
    play() {
        if (this.initialized === true) {
            this.video.play();
        } else {
            this.logger.warn(' No Media Loaded , nothing to play ');
        }
    }

    /**
     *
     */
    time() {
        if (this.initialized === true) {
            return this.video.currentTime;
        }
        this.logger.warn(' No Media Loaded ! ');
        return null;
    }

    /**
     *
     */
    isPaused() {
        if (this.initialized === true) {
            return (this.video.paused);
        }
        this.logger.warn(' No Media Loaded ! ');
        return true;
    }

    /**
     *
     */
    isEnded() {
        if (this.initialized === true) {
            return (this.video.ended);
        }
        this.logger.warn(' No Media Loaded ! ');
        return true;
    }

    /**
     *
     */
    isMuted() {
        if (this.initialized === true) {
            return (this.video.muted);
        }
        this.logger.warn(' No Media Loaded ! ');
        return true;
    }

    /**
     *
     */
    setVolume(volume) {
        if (this.initialized === true) {
            this.video.volume = volume;
        } else {
            this.logger.warn(' No Media Loaded ! ');
        }
    }

    /**
     *
     */
    getDuration() {
        if (this.initialized === true) {
            return this.video.duration;
        }
        this.logger.warn(' No Media Loaded ! ');
        return null;
    }

    /**
     *
     */
    getVolume() {
        if (this.initialized === true) {
            return this.video.volume;
        }
        this.logger.warn(' No Media Loaded ! ');
        return null;
    }

    setThumbsUrl(url) {
        if (url !== null && url !== undefined && url !== '') {
            this.thumbsTrackUrl = url;
            this.logger.debug(' Setting url for thumbs @', url);
        } else {
            this.thumbsTrackUrl = null;
            this.logger.debug(' No Setting url for thumbs ');
        }
    }

    /* ********************************************************************** */
    /*                               TXT TRACKS                               */
    /* ********************************************************************** */
    setTextTrack(textTrackIndex) {
        const index = this.parseInt(textTrackIndex);
        this.logger.warn(' Setting text track to index : ', index);
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                for (let i = 0; i < this.video.textTracks.length; i += 1) {
                    if ((this.video.textTracks[i].kind === 'captions') ||
                        (this.video.textTracks[i].kind === 'subtitles') ||
                        (this.video.textTracks[i].kind === 'subtitle')) {
                        if (index === i) {
                            this.video.textTracks[i].mode = 'showing';
                        } else {
                            this.video.textTracks[i].mode = 'hidden';
                        }
                    }
                }
            } else {
                this.DashPlayer.selectTextTrack(this.DashPlayer.getTextTracks()[index]);
            }
        }
    }

    getTextTracks() {
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                return this.video.textTracks;
            }
            return this.DashPlayer.getTextTracks();
        }
        this.logger.warn(' No Media Loaded ! ');
        return [];
    }

    isTextTrackEnabled(textTrackIndex) {
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                return (this.video.textTracks[textTrackIndex].enabled === true);
            }
            return (this.DashPlayer.getTextTracks()[textTrackIndex].active === true);
        }
        this.logger.warn(' No Media Loaded ! ');
        return false;
    }

    getTextTrackLabel(textTrackIndex) {
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                return (this.video.textTracks[textTrackIndex].label);
            }
            return (this.DashPlayer.getTextTracks()[textTrackIndex].language);
        }
        this.logger.warn(' No Media Loaded ! ');
        return 'NaN';
    }

    /* ********************************************************************** */
    /*                               AUD LANGS                               */
    /* ********************************************************************** */
    setAudioLang(AudLangIndex) {
        const index = this.parseInt(AudLangIndex);
        this.logger.warn(' Setting text track to index : ', index);
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                for (let i = 0; i < this.video.textTracks.length; i += 1) {
                    if (index === i) {
                        this.video.audioTracks[i].enabled = true;
                    } else {
                        this.video.audioTracks[i].enabled = false;
                    }
                }
            } else {
                this.DashPlayer.selectAudioLanguage(this.DashPlayer.getAudioLanguages()[index]);
            }
        }
    }

    getAudioLanguages() {
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                return this.video.audioTracks;
            }
            return this.DashPlayer.getAudioLanguages();
        }
        this.logger.warn(' No Media Loaded ! ');
        return [];
    }

    isAudioLangEnabled(AudLangIndex) {
        const index = this.parseInt(AudLangIndex);
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                return (this.video.audioTracks[index].enabled === true);
            }
            return (this.DashPlayer.getAudioLanguages()[index].enabled === true);
        }
        this.logger.warn(' No Media Loaded ! ');
        return false;
    }

    getAudioLangLabel(AudLangIndex) {
        const index = this.parseInt(AudLangIndex);
        if (this.initialized === true) {
            if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
                return (this.video.audioTracks[index].label);
            }
            return (this.DashPlayer.getAudioLanguages()[index].label);
        }
        this.logger.warn(' No Media Loaded ! ');
        return 'NaN';
    }

    /**
     *
     */
    setMute(mute) {
        if (this.initialized === true) {
            this.video.muted = mute;
        } else {
            this.logger.warn(' No Media Loaded ! ');
        }
    }

    /**
     *
     */
    pause() {
        if (this.initialized === true) {
            this.video.pause();
        } else {
            this.logger.warn(' No Media Loaded , nothing to pause ');
        }
    }

    /**
     *
     */
    seek(position) {
        if (this.initialized === true) {
            this.video.currentTime = parseFloat(position);
        } else {
            this.logger.warn(' No Media Loaded , nothing to seek ');
        }
    }

    /**
     * Callbacks
     */
    onShakaError(e) {
        this.onShError(e.detail);
    }

    onShakaEvent(event) {
        this.logger.warn('Eventing  [', event.type, ']:', event);
    }

    onShError(error) {
        this.logger.error('Error code', error.code, 'object', error);
    }

    onPlayStart() {
        this.startingCount += 1;
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_STARTED, this.startingCount);
    }

    onPlaybackPaused() {
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_PAUSED);
    }

    onPlaybackEnded() {
        this.getEndedEvent = true;
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_ENDED);
    }

    onPlayTimeUpdate() {
        let time = 0;
        if (this.initialized === true) {
            time = this.video.currentTime;
        } else {
            this.logger.warn(' Internal error !');
            return;
        }
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_TIME_UPDATE, time);
    }

    onSeeked() {
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_SEEKED);
    }

    onSeeking() {
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_SEEKING);
    }

    onError(e) {
        let msg = e.event.message;
        if (e.event.message === undefined) {
            msg = e.event;
        }
        const args = {
            type: e.type,
            code: e.error,
            message: msg
        };
        this.logger.error('>>>>>>>>>>>>>>> ERROR !!:', e);
        this.events.fireEvent(Const.PlayerEvents.PLAYBACK_ERROR, args);
    }

    onStreamInitialized() {
        this.thumbsTrackIndex = -1;
        if (this.thumbsTrackUrl !== null) {
            for (let i = 0; i < this.video.textTracks.length; i += 1) {
                if (this.video.textTracks[i].kind === 'metadata') {
                    this.thumbsTrackIndex = i;
                    this.video.textTracks[i].mode = 'hidden'; // thanks Firefox
                    this.logger.warn('find  metadata tumbs  @ ', this.thumbsTrackIndex,
                        '/', this.video.textTracks.length, ' >>> and this.videoduration ;;; ', this.getDuration());
                } else if ((this.video.textTracks[i].kind === 'captions') ||
                    (this.video.textTracks[i].kind === 'subtitles')) {
                    // SubsTrackIndex = i;
                    this.logger.warn('find  soustitres  @ ', this.thumbsTrackIndex,
                        '/', this.video.textTracks.length, ' >>> ', this.video.textTracks[i]);

                    break;
                }
            }
        }
        this.logger.info('Stream is completly loaded.');

        if ((this.thumbsTrackIndex !== -1) && (this.thumbsTrackUrl !== -1)) {
            this.events.fireEvent(Const.PlayerEvents.STREAM_LOADED, this.thumbsTrackIndex);
        } else {
            this.events.fireEvent(Const.PlayerEvents.STREAM_LOADED, null);
        }
    }

    SetManuallysubs(subs, video) {
        let track = null;
        let item = null;
        let tmp = null;
        let label = null;
        let i = 0;
        let n = 0;
        // set subs
        if (subs !== null && subs !== undefined) {
            for (i = 0; i < subs.length; i += 1) {
                item = subs[i];
                track = document.createElement('track');
                track.kind = 'subtitles';
                track.src = item[Const.FJCONFIG_SRC];
                track.srclang = item[Const.FJCONFIG_LANG];
                tmp = IsoLangs[item[Const.FJCONFIG_LANG]];
                this.logger.log(' Appending track substitles with Label', tmp.name);
                n = tmp.name.indexOf(',');
                if (n === -1) {
                    n = tmp.name.indexOf(';');
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
            this.logger.debug('no vtt Subs are found in config.');
        }
    }

    doesTimeMarchesOn() {
        let version;
        const REQUIRED_VERSION = 49.0;

        if (typeof navigator !== 'undefined') {
            if (!navigator.userAgent.match(/Firefox/)) {
                return true;
            }

            version = this.parseFloat(navigator.userAgent.match(/rv:([0-9.]+)/)[1]);

            if (!Number.isNaN(version) && version >= REQUIRED_VERSION) {
                return true;
            }
        }

        return false;
    }

    /**
     * Used to Clean loaded data video
     */
    Unload() {
        const el = this.video;
        let elClone = null;
        if (this.initialized !== true) {
            this.logger.warn('not yet this.initialized!');
            return;
        }
        // remove all this.videochild
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        this.video = elClone;

        // hide the overlay , empty the div
        while (this.video.hasChildNodes()) {
            this.video.removeChild(this.video.firstChild);
        }
        // unset attr
        this.video.removeAttribute('poster');

        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
            this.video.removeEventListener('loadedmetadata', this.onStreamInitialized);
            this.video.removeEventListener('play', this.onPlayStart);
            this.video.removeEventListener('pause', this.onPlaybackPaused);
            this.video.removeEventListener('ended', this.onPlaybackEnded);
            this.video.removeEventListener('timeupdate', this.onPlayTimeUpdate);
            this.video.removeEventListener('seeking', this.onSeeking);
            this.video.removeEventListener('seeked', this.onSeeked);
            this.video.removeEventListener('error', this.onError);
        } else {
            // Unsetting Callbacks
            this.DashPlayer.removeEventListener('error', this.onShakaError);
            this.DashPlayer.removeEventListener('adaptation', this.onShakaEvent);
            this.DashPlayer.removeEventListener('buffering', this.onShakaEvent);
            this.DashPlayer.removeEventListener('emsg', this.onShakaEvent);
            this.DashPlayer.removeEventListener('expirationupdated', this.onShakaEvent);
            this.DashPlayer.removeEventListener('largegap', this.onShakaEvent);
            this.DashPlayer.removeEventListener('loading', this.onShakaEvent);
            this.DashPlayer.removeEventListener('texttrackvisibility', this.onShakaEvent);
            this.DashPlayer.removeEventListener('timelineregionadded', this.onShakaEvent);
            this.DashPlayer.removeEventListener('timelineregionenter', this.onShakaEvent);
            this.DashPlayer.removeEventListener('timelineregionexit', this.onShakaEvent);
            this.DashPlayer.removeEventListener('trackschanged', this.onShakaEvent);
            this.DashPlayer.removeEventListener('unloading', this.onShakaEvent);
            this.DashPlayer.destroy();
            this.DashPlayer = null;
        }
        this.CurrentStreamType = PlayerMedia.UNKNOWN;
    }

    /**
     * Used for clear video/mp4
     */
    load(url, type, poster, subs, autoplay) {
        let track = null;
        const source = document.createElement('source');
        source.type = type;
        source.src = url;
        this.video.preload = true;
        this.video.controls = false;
        this.video.autoplay = autoplay;
        this.video.appendChild(source);
        if (poster !== null && poster !== undefined && poster !== '') {
            this.video.setAttribute('poster', poster);
        }
        this.CurrentStreamType = this.StreamTypes.MP4_CLEAR;
        // set thumbs
        if (this.thumbsTrackUrl !== null && this.thumbsTrackUrl !== undefined) {
            track = document.createElement('track');
            track.kind = 'metadata';
            track.src = this.thumbsTrackUrl;
            this.logger.log(' Appending source thumbs to video', track);
            this.video.appendChild(track);
        } else {
            this.logger.warn(' Thumbs was not found .');
        }
        // set subs
        this.SetManuallysubs(subs, this.video);
        // Setting Callbacks
        this.video.addEventListener('loadedmetadata', () => this.onStreamInitialized(), false);
        this.video.addEventListener('play', () => this.onPlayStart(), false);
        this.video.addEventListener('pause', () => this.onPlaybackPaused(), false);
        this.video.addEventListener('ended', () => this.onPlaybackEnded(), false);
        this.video.addEventListener('timeupdate', () => this.onPlayTimeUpdate(), false);
        this.video.addEventListener('seeked', () => this.onSeeked(), false);
        this.video.addEventListener('seeking', () => this.onSeeking(), false);
        this.video.addEventListener('error', (e) => this.onError(e), false);

        this.logger.info(' Clear MP4 stream is loaded @ ', url);
    }

    responsefilerCbx(type, response) {
        if ((type === shaka.net.NetworkingEngine.RequestType.MANIFEST)) {
            this.FjSessionToken = response.headers['session-token'];
            this.logger.warn(' UPDATING Session Token  : ', this.FjSessionToken);
        }
    }

    /**
     * Used for loading mpeg Dash
     */
    loadDash(url, poster, subs, videoCaption, autoplay, drm) {
        let track = null;
        if (poster !== null && poster !== undefined && poster !== '') {
            this.video.setAttribute('poster', poster);
        }
        this.video.preload = true;
        this.video.controls = false;
        this.video.autoplay = autoplay;
        if (this.DashPlayer === null) {
            this.DashPlayer = new shaka.Player(this.video);
        }

        // Setting Callbacks
        this.video.addEventListener('loadedmetadata', () => this.onStreamInitialized(), false);
        this.video.addEventListener('play', () => this.onPlayStart(), false);
        this.video.addEventListener('pause', () => this.onPlaybackPaused(), false);
        this.video.addEventListener('ended', () => this.onPlaybackEnded(), false);
        this.video.addEventListener('timeupdate', () => this.onPlayTimeUpdate(), false);
        this.video.addEventListener('seeked', () => this.onSeeked(), false);
        this.video.addEventListener('seeking', () => this.onSeeking(), false);
        this.video.addEventListener('error', (e) => this.onError(e), false);
        // Setting Callbacks
        this.DashPlayer.addEventListener('error', (e) => this.onShakaError(e));
        this.DashPlayer.addEventListener('adaptation', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('buffering', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('emsg', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('expirationupdated', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('largegap', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('loading', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('texttrackvisibility', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('timelineregionadded', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('timelineregionenter', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('timelineregionexit', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('trackschanged', (e) => this.onShakaEvent(e));
        this.DashPlayer.addEventListener('unloading', (e) => this.onShakaEvent(e));

        this.CurrentUrl = url;
        if ((drm === undefined) || (drm === null)) {
            this.CurrentStreamType = this.StreamTypes.DASH_CLEAR;
            this.CurrentProtection = null;
            this.logger.info(' Loading CLEAR Dash @', this.CurrentUrl);
        } else {
            this.CurrentStreamType = this.StreamTypes.DASH_ENCRYPTED;
            this.CurrentProtection = drm;
            this.logger.info(' drm are ::: ', drm);
            this.DashPlayer.configure({
                drm: {
                    servers: {
                        'org.w3.clearkey': drm[Const.FJCONFIG_DRM_LICENSE_SERVER]
                    }
                }
            });
            this.logger.debug(' To Encrypt : using Forja System Key !.');
            this.logger.info(' Loading ENCRYPTED Dash @', this.CurrentUrl);
        }

        this.DashPlayer.getNetworkingEngine().registerRequestFilter((type, request) => {
            if ((type === shaka.net.NetworkingEngine.RequestType.MANIFEST) ||
                (type === shaka.net.NetworkingEngine.RequestType.LICENSE)) {
                request.headers['Player-Key'] = this.FjPlayerId;
            }
            if (type === shaka.net.NetworkingEngine.RequestType.SEGMENT) {
                request.headers['Player-Key'] = this.FjPlayerId;
                request.headers['Session-Token'] = this.FjSessionToken;
            }
        });

        this.DashPlayer.getNetworkingEngine().registerResponseFilter(this.responsefilerCbx);

        // set thumbs
        if (this.thumbsTrackUrl !== null && this.thumbsTrackUrl !== undefined) {
            track = document.createElement('track');
            track.kind = 'metadata';
            track.src = this.thumbsTrackUrl;
            this.logger.log(' Appending source thumbs to video', track);
            this.video.appendChild(track);
        } else {
            this.logger.debug(' Thumbs was not found .');
        }
        // set subs
        this.SetManuallysubs(subs, this.video);

        // Try to load a manifest.
        // This is an asynchronous process.
        this.DashPlayer.load(url).then(() => {
            // This runs if the asynchronous load is successful.
            this.logger.log('The this.videohas now been loaded!');
        }).catch(this.onShError); // onError is executed if the asynchronous load fails.
        this.logger.info('  DASH stream is loaded @ ', url);
    }
}

module.exports = PlayerMedia;
