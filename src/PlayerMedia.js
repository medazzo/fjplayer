import Logger from './Logger';
import Eventing from './Eventing';
import { MediaPlayer } from 'dashjs';
// import * as Const from './constants';
/**
 * @module PlayerMedia
 * @description The PlayerMedia is the html video/dash/drm Media player
 *
 */
function PlayerMedia(playerUi) {
    this.playerUi = null;
    this.video = null;
    this.videoFigure = null;
    this.types = PlayerMedia.UNKNOWN;
    this.DashPlayer = MediaPlayer().create();
    this.logger = new Logger(this);
    this.events = new Eventing();
};
PlayerMedia.prototype = (function() {
    var types = {
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
        events = {
            STREAM_LOADED: 0,
            STREAM_STARTED: 1,
            PLAYBACK_PAUSED: 2,
            PLAYBACK_SEEKED: 3,
            properties: {
                0: { name: 'STREAM_LOADED', value: 0, code: 'L' },
                1: { name: 'STREAM_STARTED', value: 1, code: 'S' },
                2: { name: 'PLAYBACK_PAUSED', value: 2, code: 'P' },
                3: { name: 'PLAYBACK_SEEKED', value: 3, code: 'S' }
            }
        },
        /**
         *
         */
        initialize = function(playerUi) {
            this.playerUi = playerUi;
            if (!this.playerUi) {
                throw new Error('Please call initialize with a valid Player UI object');
            }
            this.video = this.playerUi.getVideo();
            if (!this.video) {
                throw new Error('Please call initialize with a valid Player UI having a video html 5 element ');
            }
            this.videoFigure = this.playerUi.getVideoFigure();
        },
        /**
         *
         */
        on = function(name, handler) {
            return this.addEventListener(name, handler);
        },
        /**
         *
         */
        off = function(name, handler) {
            return this.removeEventListener(name, handler);
        },
        /**
         *
         */
        play = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                this.video.play();
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                this.DashPlayer.play();
            } else {
                this.logger.warn(' No Media Loaded , nothing to play ');
            }
        },
        /**
         *
         */
        time = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                return this.video.currentTime;
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                return this.DashPlayer.time();
            }
            this.logger.warn(' No Media Loaded ! ');
        },
        /**
         *
         */
        isPaused = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                return (self.video.paused);
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                return this.DashPlayer.isPaused();
            }
            this.logger.warn(' No Media Loaded ! ');
        },
        /**
         *
         */
        isMuted = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                return (self.video.muted);
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                return this.DashPlayer.isMuted();
            }
            this.logger.warn(' No Media Loaded ! ');
        },
        /**
         *
         */
        setVolume = function(volume) {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                self.video.volume = volume;
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                this.DashPlayer.setVolume(volume);
            } else {
                this.logger.warn(' No Media Loaded ! ');
            }
        },
        /**
         *
         */
        getDuration = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                return self.video.duration;
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                return this.DashPlayer.duration();
            }
            this.logger.warn(' No Media Loaded ! ');
        },
        /**
         *
         */
        getVolume = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                return self.video.volume;
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                return this.DashPlayer.getVolume();
            }
            this.logger.warn(' No Media Loaded ! ');
        },
        /**
         *
         */
        setMute = function(mute) {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                self.video.muted = mute;
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                this.DashPlayer.setMute(mute);
            } else {
                this.logger.warn(' No Media Loaded ! ');
            }
        },
        /**
         *
         */
        pause = function() {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                this.video.pause();
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                this.DashPlayer.pause();
            } else {
                this.logger.warn(' No Media Loaded , nothing to pause ');
            }
        },
        /**
         *
         */
        seek = function(position) {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                this.video.currentTime = parseFloat(position);
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                this.DashPlayer.seek(parseFloat(position));
            } else {
                this.logger.warn(' No Media Loaded , nothing to seek ');
            }
        },
        /**
         * Callbacks
         */
        onQualityChangeRequested = function(e) {},
        onQualityChangeRendered = function(e) {},
        onSwitchCompleted = function(e) {},
        onPlayStart = function(e) {
            if (this.types === PlayerMedia.MP4_CLEAR) {
                this.playerUi.setTime(this.video.currentTime);
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                this.playerUi.setTime(this.DashPlayer.time());
            } else {
                this.logger.warn(' Internal error !');
                return;
            }
            this.playerUi.updateDuration();
            this.playerUi.updateProgressBar();
            this.playerUi.togglePlayPauseBtnState();
            this.events.fireEvent(PlayerMedia.events.STARTED);
        },

        onPlaybackPaused = function(e) {
            this.playerUi.togglePlayPauseBtnState();
            this.events.fireEvent(PlayerMedia.events.PLAYBACK_PAUSED);
        },
        onPlaybackEnded = function(e) {
            this.playerUi.togglePlayPauseBtnState();
            this.events.fireEvent(PlayerMedia.events.PLAYBACK_ENDED);
        },
        onPlayTimeUpdate = function(e) {
            var time = 0;
            if (this.types === PlayerMedia.MP4_CLEAR) {
                time = this.video.currentTime;
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {
                time = this.DashPlayer.time();
            } else {
                this.logger.warn(' Internal error !');
                return;
            }
            this.playerUi.setTime(time);
            this.playerUi.updateProgress(time);
        },

        onSeeked = function(e) {
            this.events.fireEvent(PlayerMedia.events.PLAYBACK_SEEKED);
        },
        onError = function(e) {
            throw new Error('error : ', e);
        },
        onTracksAdded = function(e) {
            this.logger.warn(' Adding new  track :', e);
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
        },
        onStreamInitialized = function(self) {
            // USED To inform ui and add entry on bitrates menu list and aud tracks
            // Bitrate Menu
            /* var contentFunc;
               if (bitrateListBtn) {
                destroyBitrateMenu();
                var availableBitrates = { menuType: 'bitrate' };
                availableBitrates.audio = this.DashPlayer.getBitrateInfoListFor("audio") || [];
                availableBitrates.video = this.DashPlayer.getBitrateInfoListFor("video") || [];
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
                availableTracks.audio = this.DashPlayer.getTracksFor("audio");
                availableTracks.video = this.DashPlayer.getTracksFor("video");
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
            self.logger.info(' stream is completly loaded  ');
        },
        /**
         * Used to Clean loaded data video
         */
        Unload = function() {
            var el = this.video;
            var elClone = null;
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);
            this.video = elClone;
            // hide the overlay , empty the div
            while (this.video.hasChildNodes()) {
                this.video.removeChild(this.video.firstChild);
            }
            if (this.types === PlayerMedia.MP4_CLEAR) {
                this.video.removeEventListener('loadedmetadata', onStreamInitialized);
                this.video.removeEventListener('play', onPlayStart);
                this.video.removeEventListener('pause', onPlaybackPaused);
                this.video.removeEventListener('ended', onPlaybackEnded);
                this.video.removeEventListener('timeupdate', onPlayTimeUpdate);
                this.video.removeEventListener('seeked', onSeeked);
                this.video.removeEventListener('error', onError);
            } else if ((this.types === PlayerMedia.DASH_CLEAR) || (this.types === PlayerMedia.DASH_ENCRYPTED)) {} else {
                this.DashPlayer.reset();
                // Unsetting Callbacks
                this.DashPlayer.off(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
                this.DashPlayer.off(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
                this.DashPlayer.off(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
                this.DashPlayer.off(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
                this.DashPlayer.off(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
                this.DashPlayer.off(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
                this.DashPlayer.off(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
                this.DashPlayer.off(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
                this.DashPlayer.off(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
                this.DashPlayer.off(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
                this.DashPlayer.off(MediaPlayer.events.ERROR, onError, this);
            }
            this.types = PlayerMedia.UNKNOWN;
        },
        /**
         * Used for clear video/mp4
         */
        load = function(url, type, poster, autoplay) {
            var self = this;
            var source = document.createElement('source');
            source.type = type;
            source.src = url;
            this.video.preload = true;
            this.video.controls = false;
            this.video.autoplay = autoplay;
            this.video.appendChild(source);
            this.video.setAttribute('poster', poster);
            this.types = PlayerMedia.MP4_CLEAR;
            // Setting Callbacks
            this.video.addEventListener('loadedmetadata', onStreamInitialized(self), false);
            this.video.addEventListener('play', onPlayStart, false);
            this.video.addEventListener('pause', onPlaybackPaused, false);
            this.video.addEventListener('ended', onPlaybackEnded, false);
            this.video.addEventListener('timeupdate', onPlayTimeUpdate, false);
            this.video.addEventListener('seeked', onSeeked, false);
            this.video.addEventListener('error', onError, false);

            this.logger.info(' Clear MP4 stream is loaded @ ', url);
        },
        /**
         * Used for clear mpeg Dash
         */
        loadDash = function(url, poster, autoplay) {
            this.video.setAttribute('poster', poster);
            this.video.preload = true;
            this.video.controls = false;
            this.video.autoplay = autoplay;
            this.DashPlayer = MediaPlayer().create();
            this.DashPlayer.initialize(this.video, url, autoplay);
            this.DashPlayer.attachVideoContainer(this.videoFigure);
            this.types = PlayerMedia.DASH_CLEAR;
            // Setting Callbacks
            this.DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
            this.DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
            this.DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
            this.DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
            this.DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
            this.DashPlayer.on(MediaPlayer.events.ERROR, onError, this);
        },
        /**
         * Used for Encrypted mpeg Dash
         */
        loadDashDrm = function(url, poster, autoplay, drm) {
            this.video.setAttribute('poster', poster);
            this.video.preload = true;
            this.video.controls = false;
            this.video.autoplay = autoplay;
            this.DashPlayer.initialize(this.video, url, autoplay);
            this.DashPlayer.attachVideoContainer(this.videoFigure);
            // TODO : set Drm
            this.types = PlayerMedia.DASH_ENCRYPTED;
            // Setting Callbacks
            this.DashPlayer.on(MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
            this.DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_REQUESTED, onQualityChangeRequested, this);
            this.DashPlayer.on(MediaPlayer.events.QUALITY_CHANGE_RENDERED, onQualityChangeRendered, this);
            this.DashPlayer.on(MediaPlayer.events.PERIOD_SWITCH_COMPLETED, onSwitchCompleted, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_ENDED, onPlaybackEnded, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
            this.DashPlayer.on(MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
            this.DashPlayer.on(MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
            this.DashPlayer.on(MediaPlayer.events.ERROR, onError, this);
        };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************

    return {
        initialize: initialize,
        on: on,
        off: off,
        event: events,
        types: types,
        play: play,
        pause: pause,
        isPaused: isPaused,
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
})();
export default PlayerMedia;