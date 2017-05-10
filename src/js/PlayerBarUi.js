import Logger from './Logger';
require('./controlbar.css');
/**
 * @module PlayerBarUi
 * @description The PlayerBarUi is the html UI for the player
 *
 */
function PlayerBarUi(playerMedia) {
    this.logger = new Logger(this);
    this.player = playerMedia;
    this.video = null;
    this.videoContainer = null;
    this.captionMenu = null;
    this.bitrateListMenu = null;
    this.trackSwitchMenu = null;
    this.menuHandlersList = [];
    this.lastVolumeLevel = NaN;
    this.seeking = false;
    this.videoControllerVisibleTimeout = 0;
    this.videoController = document.getElementById('videoController');
    this.playPauseBtn = document.getElementById('playPauseBtn');
    this.bitrateListBtn = document.getElementById('bitrateListBtn');
    this.captionBtn = document.getElementById('captionBtn');
    this.trackSwitchBtn = document.getElementById('trackSwitchBtn');
    this.seekbar = document.getElementById('seekbar');
    this.muteBtn = document.getElementById('muteBtn');
    this.volumebar = document.getElementById('volumebar');
    this.fullscreenBtn = document.getElementById('fullscreenBtn');
    this.timeDisplay = document.getElementById('videoTime');
    this.durationDisplay = document.getElementById('videoDuration');
};
// ************************************************************************************
// PLAYBACK
// ************************************************************************************
PlayerBarUi.prototype = (function() {
    var togglePlayPauseBtnState = function() {
            var span = document.getElementById('iconPlayPause');
            if (this.player.isPaused()) {
                span.classList.remove('icon-pause');
                span.classList.add('icon-play');
            } else {
                span.classList.remove('icon-play');
                span.classList.add('icon-pause');
            }
        },

        onPlayPauseClick = function(e) {
            togglePlayPauseBtnState.call(this);
            this.player.isPaused() ? this.player.play() : this.player.pause();
        },

        /*   onPlaybackPaused = function(e) {
            togglePlayPauseBtnState();
        },

        onPlayStart = function(e) {
            this.setTime(this.player.time());
            this.updateDuration();
            togglePlayPauseBtnState();
        },

        onPlayTimeUpdate = function(e) {
            this.updateDuration();
            if (!this.seeking) {
                this.setTime(this.player.time());
                this.seekbar.value = this.player.time();
            }
        },
*/
        // ************************************************************************************
        // VOLUME
        // ************************************************************************************

        toggleMuteBtnState = function() {
            var span = document.getElementById('iconMute');
            if (this.player.isMuted()) {
                span.classList.remove('icon-mute-off');
                span.classList.add('icon-mute-on');
            } else {
                span.classList.remove('icon-mute-on');
                span.classList.add('icon-mute-off');
            }
        },

        onMuteClick = function(e) {
            if (this.player.isMuted() && !isNaN(this.lastVolumeLevel)) {
                this.setVolume(this.lastVolumeLevel);
            } else {
                this.lastVolumeLevel = parseFloat(this.volumebar.value);
                this.setVolume(0);
            }
            this.player.setMute(this.player.getVolume() === 0);
            toggleMuteBtnState();
        },

        setVolume = function(value) {
            if (typeof value === 'number') {
                this.volumebar.value = value;
            }
            this.player.setVolume(this.volumebar.value);
            this.player.setMute(this.player.getVolume() === 0);
            if (isNaN(this.lastVolumeLevel)) {
                this.lastVolumeLevel = this.player.getVolume();
            }
            toggleMuteBtnState();
        },

        // ************************************************************************************
        // SEEKING
        // ************************************************************************************

        onSeekBarChange = function(e) {
            this.player.seek(parseFloat(this.seekbar.value));
        },

        onSeeking = function(e) {
            // TODO Add call to seek in trick-mode once implemented. Preview Frames.
            this.seeking = true;
            this.setTime(parseFloat(this.seekbar.value));
        },

        /* onSeeked = function(e) {
             this.seeking = false;
         },*/

        // ************************************************************************************
        // TIME/DURATION
        // ************************************************************************************

        setDuration = function(value) {
            if (!isNaN(value)) {
                this.durationDisplay.textContent = this.player.convertToTimeCode(value);
            }
        },

        setTime = function(value) {
            if (!isNaN(value)) {
                this.timeDisplay.textContent = this.player.convertToTimeCode(value);
            }
        },

        /* updateDuration = function() {
            var duration = this.player.duration();
            if (duration !== parseFloat(this.seekbar.max)) {
                // check if duration changes for live streams..
                setDuration(duration);
                this.seekbar.max = duration;
            }
        },*/

        // ************************************************************************************
        // FULLSCREEN
        // ************************************************************************************

        onFullScreenChange = function(e) {
            var icon;
            if (this.isFullscreen()) {
                this.enterFullscreen();
                icon = this.fullscreenBtn.querySelector('.icon-fullscreen-enter');
                icon.classList.remove('icon-fullscreen-enter');
                icon.classList.add('icon-fullscreen-exit');
            } else {
                this.exitFullscreen();
                icon = this.fullscreenBtn.querySelector('.icon-fullscreen-exit');
                icon.classList.remove('icon-fullscreen-exit');
                icon.classList.add('icon-fullscreen-enter');
            }
        },

        isFullscreen = function() {
            return document.fullscreenElement || document.msFullscreenElement ||
                document.mozFullScreen || document.webkitIsFullScreen;
        },

        enterFullscreen = function() {
            var element = this.videoContainer || this.video;

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else {
                element.webkitRequestFullScreen();
            }
            this.videoController.classList.add('video-controller-fullscreen');
            window.addEventListener('mousemove', this.onFullScreenMouseMove);
            this.onFullScreenMouseMove();
        },

        onFullScreenMouseMove = function() {
            this.clearFullscreenState();
            this.videoControllerVisibleTimeout = setTimeout(function() {
                this.videoController.classList.add('hide');
            }, 4000);
        },

        clearFullscreenState = function() {
            clearTimeout(this.videoControllerVisibleTimeout);
            this.videoController.classList.remove('hide');
        },

        exitFullscreen = function() {
            window.removeEventListener('mousemove', onFullScreenMouseMove);
            clearFullscreenState();

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                document.webkitCancelFullScreen();
            }
            this.videoController.classList.remove('video-controller-fullscreen');
        },

        onFullscreenClick = function(e) {
            if (!isFullscreen()) {
                enterFullscreen();
            } else {
                exitFullscreen();
            }
            if (this.captionMenu) {
                this.captionMenu.classList.add('hide');
            }
            if (this.bitrateListMenu) {
                this.bitrateListMenu.classList.add('hide');
            }
            if (this.trackSwitchMenu) {
                this.trackSwitchMenu.classList.add('hide');
            }
        },

        // ************************************************************************************
        // Audio Video MENU
        // ************************************************************************************

        /* onTracksAdded = function(e) {
            // Subtitles/Captions Menu //XXX we need to add two layers for captions & subtitles if present.
            var contentFunc, func;
            if (!this.captionMenu) {
                contentFunc = function(element, index) {
                    return isNaN(index) ? 'OFF' : element.lang + ' : ' + element.kind;
                };
                this.captionMenu = this.createMenu({ menuType: 'caption', arr: e.tracks }, contentFunc);

                func = function() {
                    this.onMenuClick(this.captionMenu, this.captionBtn);
                };
                this.menuHandlersList.push(func);
                this.captionBtn.addEventListener('click', func);
                this.captionBtn.classList.remove('hide');
            }
        },*/

        /* onStreamInitialized = function(e) {
            var func, func2;
            var contentFunc;
            var availableTracks = { menuType: 'track' };
            var availableBitrates = { menuType: 'bitrate' };
            // Bitrate Menu
            if (this.bitrateListBtn) {
                this.destroyBitrateMenu();
                availableBitrates.audio = this.player.getBitrateInfoListFor('audio') || [];
                availableBitrates.video = this.player.getBitrateInfoListFor('video') || [];
                if (availableBitrates.audio.length > 1 || availableBitrates.video.length > 1) {
                    contentFunc = function(element, index) {
                        return isNaN(index) ? ' Auto Switch' : Math.floor(element.bitrate / 1000) + ' kbps';
                    };
                    this.bitrateListMenu = this.createMenu(availableBitrates, contentFunc);
                    func = function() {
                        this.onMenuClick(this.bitrateListMenu, this.bitrateListBtn);
                    };
                    this.menuHandlersList.push(func);
                    this.bitrateListBtn.addEventListener('click', func);
                    this.bitrateListBtn.classList.remove('hide');

                } else {
                    this.bitrateListBtn.classList.add('hide');
                }
            }

            // Track Switch Menu
            if (!this.trackSwitchMenu && this.trackSwitchBtn) {

                availableTracks.audio = this.player.getTracksFor('audio');
                availableTracks.video = this.player.getTracksFor('video');
                // these return empty arrays so no need to cehck for null
                if (availableTracks.audio.length > 1 || availableTracks.video.length > 1) {
                    contentFunc = function(element) {
                        return 'Language: ' + element.lang + ' - Role: ' + element.roles[0];
                    };
                    this.trackSwitchMenu = this.createMenu(availableTracks, contentFunc);
                    func2 = function() {
                        this.onMenuClick(this.trackSwitchMenu, this.trackSwitchBtn);
                    };
                    this.menuHandlersList.push(func2);
                    this.trackSwitchBtn.addEventListener('click', func2);
                    this.trackSwitchBtn.classList.remove('hide');
                }
            }
        },

        createMenu = function(info, contentFunc) {
            var menuType = info.menuType;
            var el = document.createElement('div');
            el.id = menuType + 'Menu';
            el.classList.add('menu');
            el.classList.add('hide');
            el.classList.add('unselectable');
            el.classList.add('menu-item-unselected');
            this.videoController.appendChild(el);
            switch (menuType) {
                case 'caption':
                    el.appendChild(document.createElement('ul'));
                    el = this.createMenuContent(el,
                        this.getMenuContent(menuType, info.arr, contentFunc), 'caption', menuType + '-list');
                    this.setMenuItemsState(this.getMenuInitialIndex(info, menuType), menuType + '-list');
                    break;
                case 'track':
                case 'bitrate':
                    if (info.video.length > 1) {
                        el.appendChild(this.createMediaTypeMenu('video'));
                        el = this.createMenuContent(el,
                            this.getMenuContent(menuType, info.video, contentFunc), 'video', 'video-' +
                            menuType + '-list');
                        this.setMenuItemsState(
                            this.getMenuInitialIndex(info.video, menuType, 'video'), 'video-' + menuType + '-list');
                    }
                    if (info.audio.length > 1) {
                        el.appendChild(this.createMediaTypeMenu('audio'));
                        el = this.createMenuContent(el,
                            this.getMenuContent(menuType, info.audio, contentFunc), 'audio', 'audio-' +
                            menuType + '-list');
                        this.setMenuItemsState(
                            this.getMenuInitialIndex(info.audio, menuType, 'audio'), 'audio-' + menuType + '-list');
                    }
                    break;
            }
            window.addEventListener('resize', this.handleMenuPositionOnResize, true);
            return el;
        },

        getMenuInitialIndex = function(info, menuType, mediaType) {
            var idx = 0,
                mediaInfo;
            if (menuType === 'track') {
                mediaInfo = this.player.getCurrentTrackFor(mediaType);
                info.some(function(element, index) {
                    if (this.isTracksEqual(element, mediaInfo)) {
                        idx = index;
                        return true;
                    }
                });
                return idx;

            } else if (menuType === 'bitrate') {
                return this.player.getAutoSwitchQualityFor(mediaType) ? 0 : this.player.getQualityFor(mediaType);
            } else if (menuType === 'caption') {
                info.arr.some(function(element, index) {
                    if (element.defaultTrack) {
                        idx = index + 1;
                        return true;
                    }
                });
                return idx;
            }
        },

        isTracksEqual = function(t1, t2) {
            var sameId = t1.id === t2.id;
            var sameViewpoint = t1.viewpoint === t2.viewpoint;
            var sameLang = t1.lang === t2.lang;
            var sameRoles = t1.roles.toString() === t2.roles.toString();
            var sameAccessibility = t1.accessibility.toString() === t2.accessibility.toString();
            var sameAudioChannelConfiguration =
                t1.audioChannelConfiguration.toString() === t2.audioChannelConfiguration.toString();
            return (sameId && sameViewpoint && sameLang && sameRoles &&
                sameAccessibility && sameAudioChannelConfiguration);
        },

        getMenuContent = function(type, arr, contentFunc) {

            var content = [];
            arr.forEach(function(element, index) {
                content.push(contentFunc(element, index));
            });
            if (type !== 'track') {
                content.unshift(contentFunc(null, NaN));
            }
            return content;
        },

        createMediaTypeMenu = function(type) {

            var div = document.createElement('div');
            var title = document.createElement('div');
            var content = document.createElement('ul');

            div.id = type;

            title.textContent = type === 'video' ? 'Video' : 'Audio';
            title.classList.add('menu-sub-menu-title');

            content.id = type + 'Content';
            content.classList.add(type + '-menu-content');

            div.appendChild(title);
            div.appendChild(content);

            return div;
        },

        createMenuContent = function(menu, arr, mediaType, name) {
            var i, item, el;
            for (i = 0; i < arr.length; i++) {
                item = document.createElement('li');
                item.id = name + 'Item_' + i;
                item.index = i;
                item.mediaType = mediaType;
                item.name = name;
                item.selected = false;
                item.textContent = arr[i];
                item.onmouseover = function(e) {
                    if (this.selected !== true) {
                        this.classList.add('menu-item-over');
                    }
                };
                item.onmouseout = function(e) {
                    this.classList.remove('menu-item-over');
                };
                item.onclick = this.setMenuItemsState.bind(item);
                if (mediaType === 'caption') {
                    el = menu.querySelector('ul');
                } else {
                    el = menu.querySelector('.' + mediaType + '-menu-content');
                }
                el.appendChild(item);
            }
            return menu;
        },

        onMenuClick = function(menu, btn) {

            if (menu.classList.contains('hide')) {
                menu.classList.remove('hide');
                menu.onmouseleave = function(e) {
                    this.classList.add('hide');
                };
            } else {
                menu.classList.add('hide');
            }
            menu.style.position = isFullscreen() ? 'fixed' : 'absolute';
            this.positionMenu(menu, btn);
        },

        setMenuItemsState = function(value, type) {
            var i;
            var self = typeof value === 'number' ? document.getElementById(type + 'Item_' + value) : this,
                nodes = self.parentElement.children;

            for (i = 0; i < nodes.length; i++) {
                nodes[i].selected = false;
                nodes[i].classList.remove('menu-item-selected');
                nodes[i].classList.add('menu-item-unselected');
            }
            self.selected = true;
            self.classList.remove('menu-item-over');
            self.classList.remove('menu-item-unselected');
            self.classList.add('menu-item-selected');
            if (type === undefined) { // User clicked so type is part of item binding.
                switch (self.name) {
                    case 'video-bitrate-list':
                    case 'audio-bitrate-list':
                        if (self.index > 0) {
                            if (this.player.getAutoSwitchQualityFor(self.mediaType)) {
                                this.player.setAutoSwitchQualityFor(self.mediaType, false);
                            }
                            this.player.setQualityFor(self.mediaType, self.index - 1);
                        } else {
                            this.player.setAutoSwitchQualityFor(self.mediaType, true);
                        }
                        break;
                    case 'caption-list':
                        this.player.setTextTrack(self.index - 1);
                        break;
                    case 'video-track-list':
                    case 'audio-track-list':
                        this.player.setCurrentTrack(this.player.getTracksFor(self.mediaType)[self.index]);
                        break;
                }
            }
        },
*/
        handleMenuPositionOnResize = function(e) {
            if (this.captionMenu) {
                this.positionMenu(this.captionMenu, this.captionBtn);
            }
            if (this.bitrateListMenu) {
                this.positionMenu(this.bitrateListMenu, this.bitrateListBtn);
            }
            if (this.trackSwitchMenu) {
                this.positionMenu(this.trackSwitchMenu, this.trackSwitchBtn);
            }
        },

        /* positionMenu = function(menu, btn) {
            var menuY = this.videoController.offsetTop - menu.offsetHeight;
            menu.style.top = menuY + 'px';
            menu.style.left = btn.offsetLeft + 'px';
        },*/

        destroyBitrateMenu = function() {
            if (this.bitrateListMenu) {
                this.menuHandlersList.forEach(function(item) {
                    this.bitrateListBtn.removeEventListener('click', item);
                });
                this.videoController.removeChild(this.bitrateListMenu);
                this.bitrateListMenu = null;
            }
        },

        // ************************************************************************************
        // IE FIX
        // ************************************************************************************

        /* coerceIEInputAndChangeEvents = function(slider, addChange) {
            var fireChange = function(e) {
                var changeEvent = document.createEvent('Event');
                changeEvent.initEvent('change', true, true);
                changeEvent.forceChange = true;
                slider.dispatchEvent(changeEvent);
            };

            this.addEventListener('change', function(e) {
                var inputEvent;
                if (!e.forceChange && e.target.getAttribute('type') === 'range') {
                    e.stopPropagation();
                    inputEvent = document.createEvent('Event');
                    inputEvent.initEvent('input', true, true);
                    e.target.dispatchEvent(inputEvent);
                    if (addChange) {
                        e.target.removeEventListener('mouseup', fireChange);
                        // TODO can not clean up this event on destroy. refactor needed!
                        e.target.addEventListener('mouseup', fireChange);
                    }
                }

            }, true);
        },
*/
        isIE = function() {
            return !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
        };

    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************

    return {
        setVolume: setVolume,
        setDuration: setDuration,
        setTime: setTime,
        constructor: PlayerBarUi,
        initialize: function() {

            if (!this.player) {
                throw new Error('Please pass an instance of MediaPlayer.js when instantiating the ControlBar Object');
            }
            this.video = this.player.getVideoElement();
            if (!this.video) {
                throw new Error('Please call initialize after you have called attachView on MediaPlayer.js');
            }

            this.video.controls = false;
            this.videoContainer = this.player.getVideoContainer();
            this.captionBtn.classList.add('hide');
            if (this.trackSwitchBtn) {
                this.trackSwitchBtn.classList.add('hide');
            }
            /*
                        this.player.on(dashjs.MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
                        this.player.on(dashjs.MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
                        this.player.on(dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
                        this.player.on(dashjs.MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
                        this.player.on(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
                        this.player.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
            */
            this.playPauseBtn.addEventListener('click', onPlayPauseClick);
            this.muteBtn.addEventListener('click', onMuteClick);
            this.fullscreenBtn.addEventListener('click', onFullscreenClick);
            this.seekbar.addEventListener('change', onSeekBarChange, true);
            this.seekbar.addEventListener('input', onSeeking, true);
            this.volumebar.addEventListener('input', setVolume, true);
            document.addEventListener('fullscreenchange', onFullScreenChange, false);
            document.addEventListener('MSFullscreenChange', onFullScreenChange, false);
            document.addEventListener('mozfullscreenchange', onFullScreenChange, false);
            document.addEventListener('webkitfullscreenchange', onFullScreenChange, false);

            // IE 11 Input Fix.
            if (isIE()) {
                this.coerceIEInputAndChangeEvents(this.seekbar, true);
                this.coerceIEInputAndChangeEvents(this.volumebar, false);
            }
        },

        show: function() {
            this.videoController.classList.remove('hide');
        },

        hide: function() {
            this.videoController.classList.add('hide');
        },

        disable: function() {
            this.videoController.classList.add('disable');
        },

        enable: function() {
            this.videoController.classList.remove('disable');
        },

        reset: function() {
            window.removeEventListener('resize', handleMenuPositionOnResize);
            destroyBitrateMenu();
            this.menuHandlersList.forEach(function(item) {
                if (this.trackSwitchBtn) this.trackSwitchBtn.removeEventListener('click', item);
                if (this.captionBtn) this.captionBtn.removeEventListener('click', item);
            });
            if (this.captionMenu) {
                this.videoController.removeChild(this.captionMenu);
                this.captionMenu = null;
                this.captionBtn.classList.add('hide');
            }
            if (this.trackSwitchMenu) {
                this.videoController.removeChild(this.trackSwitchMenu);
                this.trackSwitchMenu = null;
                this.trackSwitchBtn.classList.add('hide');
            }
            this.menuHandlersList = [];
            this.seeking = false;
        },

        destroy: function() {

            this.reset();

            this.playPauseBtn.removeEventListener('click', onPlayPauseClick);
            this.muteBtn.removeEventListener('click', onMuteClick);
            this.fullscreenBtn.removeEventListener('click', onFullscreenClick);
            this.seekbar.removeEventListener('change', onSeekBarChange);
            this.seekbar.removeEventListener('input', onSeeking);
            this.volumebar.removeEventListener('input', setVolume);
            /*
                        this.player.off(dashjs.MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
                        this.player.off(dashjs.MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
                        this.player.off(dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
                        this.player.off(dashjs.MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
                        this.player.off(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
                        this.player.off(dashjs.MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
            */
            document.removeEventListener('fullscreenchange', onFullScreenChange);
            document.removeEventListener('MSFullscreenChange', onFullScreenChange);
            document.removeEventListener('mozfullscreenchange', onFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
        }
    };
})();

export default PlayerBarUi;