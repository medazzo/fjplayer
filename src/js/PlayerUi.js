import Logger from './Logger';
import Thumbs from './Thumbs';
import SubsMenu from './SubsMenu';
import AudsMenu from './AudsMenu';
import * as Utils from './Utils';
import tmpl from './fjplayer-tmpl';
require('../css/player.css');
require('../css/fjfa.css');


/**
 * @module PlayerUi
 * @description The PlayerUi is the html UI for the player
 *
 */
function PlayerUi(videoContId, VWidth, WHeight) {
    var logger = new Logger(this),
        mediaDuration = 0,
        fjMainPlayer = null,
        videoContainerId = videoContId,
        fullScreenOnStart = false,
        vwidth = VWidth,
        vheight = WHeight,
        expandScreen = false,
        AudiosMenu = null,
        SubMenu = null,
        timeout = null,
        HideControlsTimeout = 1500,
        id = Date.now().toString().substr(6),
        timerId = 'trd' + id,
        durationId = 'drd' + id,
        titleId = 'tld' + id,
        spinnerId = 'spin' + id,
        BigPlayBtnId = 'bp' + id,
        videoCaptionId = 'vc' + id,
        videoInfoId = 'vi' + id,
        videoFigureId = 'vf' + id,
        videoId = 'vo' + id,
        videoControlsId = 'vc' + id,
        playpauseBtnId = 'pp' + id,
        muteBtnId = 'mb' + id,
        volumeBarId = 'vb' + id,
        volumeDivId = 'vd' + id,
        progressDivId = 'pd' + id,
        progressBarId = 'pb' + id,
        fullScreenBtnId = 'fs' + id,
        subtitlesDivId = 'sd' + id,
        subtitlesBtnId = 'sb' + id,
        thumbsDivId = 'td' + id,
        thumbsImgId = 'ti' + id,
        thumbstimerId = 'tt' + id,
        expandDivId = 'ed' + id,
        expandBtnId = 'eb' + id,
        adsContainerDivId = 'adscd' + id,
        overlaysContainerDivId = 'ovscd' + id,
        subsdMenuContainerDivId = 'smcd' + id,
        audMenuContainerDivId = 'amcd' + id,
        videoContainer,
        video = null,
        videoController,
        spinner = null,
        videoControllerFigure,
        playpauseBtn,
        muteBtn,
        volumeBar,
        progressBar,
        fullScreenBtn,
        expandBtn,
        timer,
        durationDisplay,
        videoFigure,
        BigPlayBtn,
        volumebar,
        ThumbsMgr = null,
        videoControls,
        videoInfo,
        fullScreenEnabled = true;

    function create() {
        var data = {
            'videoFigureId': videoFigureId,
            'fullScreenOnStart': fullScreenOnStart,
            'videoId': videoId,
            'vwidth': vwidth,
            'vheight': vheight,
            'videoCaptionId': videoCaptionId,
            'videoInfoId': videoInfoId,
            'titleId': titleId,
            'spinnerId': spinnerId,
            'BigPlayBtnId': BigPlayBtnId,
            'videoControlsId': videoControlsId,
            'progressDivId': progressDivId,
            'progressBarId': progressBarId,
            'playpauseBtnId': playpauseBtnId,
            'muteBtnId': muteBtnId,
            'volumeDivId': volumeDivId,
            'volumeBarId': volumeBarId,
            'timerId': timerId,
            'durationId': durationId,
            'fullScreenBtnId': fullScreenBtnId,
            'expandDivId': expandDivId,
            'expandBtnId': expandBtnId,
            'subtitlesDivId': subtitlesDivId,
            'subtitlesBtnId': subtitlesBtnId,
            'thumbsDivId': thumbsDivId,
            'thumbsImgId': thumbsImgId,
            'thumbstimerId': thumbstimerId,
            'audMenuContainerDivId': audMenuContainerDivId,
            'subsdMenuContainerDivId': subsdMenuContainerDivId,
            'overlaysContainerDivId': overlaysContainerDivId,
            'adsContainerDivId': adsContainerDivId
        };

        logger.info(' container if of the player ', videoContainerId);
        videoContainer = document.getElementById(videoContainerId);
        if (!videoContainer) {
            throw new Error('The video container element still null');
        }
        videoContainer.classList.add('fjPlayer');
        videoContainer.innerHTML = new tmpl().GetHtml(data);
        video = null;
        videoContainer = null;
        videoController = document.getElementById(videoControlsId);
        videoControllerFigure = document.getElementById(videoFigureId);
        spinner = document.getElementById(spinnerId);
        video = document.getElementById(videoId);
        if (!video) {
            throw new Error('The video element still null');
        }
        playpauseBtn = document.getElementById(playpauseBtnId);
        muteBtn = document.getElementById(muteBtnId);
        volumeBar = document.getElementById(volumeBarId);
        progressBar = document.getElementById(progressBarId);
        fullScreenBtn = document.getElementById(fullScreenBtnId);
        expandBtn = document.getElementById(expandBtnId);
        timer = document.getElementById(timerId);
        durationDisplay = document.getElementById(durationId);

        videoFigure = document.getElementById(videoFigureId);
        BigPlayBtn = document.getElementById(BigPlayBtnId);

        videoControls = document.getElementById(videoControlsId);
        videoInfo = document.getElementById(videoInfoId);
        // Hide the default controls
        video.controls = false;
        // Display the user defined video controls
        videoControls.style.display = 'none';
        videoInfo.style.display = 'block';
        // Create Thumbs Object
        ThumbsMgr = new Thumbs(document.getElementById(thumbstimerId),
            document.getElementById(thumbsImgId), document.getElementById(thumbsDivId), progressBar);

        if (fullScreenOnStart === 'true') {
            videoFigure.setAttribute('data-fullscreen', 'true');
        }
        // If the browser doesn't support the Fulscreen API then hide the fullscreen button
        if (!fullScreenEnabled) {
            fullScreenBtn.style.display = 'none';
        }
    }
    // ************************************************************************************
    // PLAYBACK
    // ************************************************************************************
    function onplaypauseClick() {
        if (fjMainPlayer.isPaused() || fjMainPlayer.isEnded()) {
            fjMainPlayer.play();
        } else {
            fjMainPlayer.pause();
        }
    }

    function toggleplaypauseBtn() {
        if (fjMainPlayer.isPlayingAds()) {
            // hide big play button
            BigPlayBtn.style.display = 'none';
            // hide video controls
            videoControls.style.display = 'none';
            SubMenu.HideMenu();
            AudiosMenu.HideMenu();
        } else {
            if (fjMainPlayer.isPaused() || fjMainPlayer.isEnded()) {
                playpauseBtn.className = 'fa  fa-play';
                // show big play button
                BigPlayBtn.style.display = 'block';
                // hide video controls
                videoControls.style.display = 'none';
                SubMenu.HideMenu();
                AudiosMenu.HideMenu();
                logger.log('UI is pausing !');
            } else {
                playpauseBtn.className = 'fa  fa-pause';
                // hide big play button
                BigPlayBtn.style.display = 'none';
                // show video controls
                videoControls.style.display = 'block';
                logger.log('UI is playing !');
            }
        }
    }

    function magicMouseLeave() {
        if (!fjMainPlayer.isPaused() && !fjMainPlayer.isEnded() && !fjMainPlayer.isPlayingAds()) {
            // delete fadeIn
            videoControls.classList.remove('m-fadeIn');
            videoInfo.classList.remove('m-fadeIn');
            // add fadeOut
            videoControls.classList.add('m-fadeOut');
            videoInfo.classList.add('m-fadeOut');
            // other
            video.style.cursor = 'none';
            SubMenu.HideMenu();
            AudiosMenu.HideMenu();
            ThumbsMgr.hideThumbs(ThumbsMgr);
        }
    }

    function magicMouseEnter() {
        if (!fjMainPlayer.isPaused() && !fjMainPlayer.isEnded() && !fjMainPlayer.isPlayingAds()) {
            // delete fadeOut
            videoControls.classList.remove('m-fadeOut');
            videoInfo.classList.remove('m-fadeOut');
            // add fadein
            videoControls.classList.add('m-fadeIn');
            videoInfo.classList.add('m-fadeIn');
            // other
            video.style.cursor = 'auto';
        }
    }

    function magicMouseMove() {
        if (!fjMainPlayer.isPaused() && !fjMainPlayer.isEnded() && !fjMainPlayer.isPlayingAds()) {
            if (video.style.cursor === 'none') {
                magicMouseEnter();
            } else {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(function() {
                    magicMouseLeave();
                }, HideControlsTimeout);
            }
        }
    }

    function SetupSubsAudsManager(mediaplayer) {
        var done = false;
        logger.warn(' Will setup Audio and subs menus !!!!!!!');
        done = AudiosMenu.Setup(mediaplayer) !== true;
        logger.warn(' Will setup Audio >>>>>  ', done);
        if (done === true) {
            document.getElementById(subtitlesBtnId).style.display = 'none';
        } else {
            document.getElementById(subtitlesBtnId).style.display = 'block';
        }
        done = SubMenu.Setup(mediaplayer);
        logger.warn(' Will setup Subs >>>>>  ', done);
        if (done !== true) {
            document.getElementById(subtitlesBtnId).style.display = 'none';
        } else {
            document.getElementById(subtitlesBtnId).style.display = 'block';
        }
    };

    // ************************************************************************************
    // Audio Video MENU
    // ************************************************************************************
    /*
        function onTracksAdded(e) {
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
        };

        function onStreamInitialized(e) {
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
        };

        function createMenu(info, contentFunc) {
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
        };

        function getMenuInitialIndex(info, menuType, mediaType) {
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
        };

        function isTracksEqual(t1, t2) {
            var sameId = t1.id === t2.id;
            var sameViewpoint = t1.viewpoint === t2.viewpoint;
            var sameLang = t1.lang === t2.lang;
            var sameRoles = t1.roles.toString() === t2.roles.toString();
            var sameAccessibility = t1.accessibility.toString() === t2.accessibility.toString();
            var sameAudioChannelConfiguration =
                t1.audioChannelConfiguration.toString() === t2.audioChannelConfiguration.toString();
            return (sameId && sameViewpoint && sameLang && sameRoles &&
                sameAccessibility && sameAudioChannelConfiguration);
        };

        function getMenuContent(type, arr, contentFunc) {

            var content = [];
            arr.forEach(function(element, index) {
                content.push(contentFunc(element, index));
            });
            if (type !== 'track') {
                content.unshift(contentFunc(null, NaN));
            }
            return content;
        };

        function createMediaTypeMenu(type) {

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
        };

        function createMenuContent(menu, arr, mediaType, name) {
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
        };

        function onMenuClick(menu, btn) {

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
        };

        function setMenuItemsState(value, type) {
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
        };
        */
    // ************************************************************************************
    // VOLUME
    // ************************************************************************************

    function OnvbClick(e) {
        var val = 0;
        var pos = volumeBar.value / 100;
        logger.log(' volume from ', video.volume, ' to ', pos);
        if (pos > 0.6) {
            muteBtn.className = 'fa fa-volume-up';
        } else if (pos > 0) {
            muteBtn.className = 'fa fa-volume-down';
        } else {
            muteBtn.className = 'fa fa-volume-off';
        }
        video.volume = pos;
        val = (volumeBar.value - volumeBar.min) / (volumeBar.max - volumeBar.min);
        volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #FF0000), ' +
            'color-stop(' + val + ', #8F9B9E)' +
            ')';
        logger.log(' new volume is ', pos);
    };

    function onmuteClick(e) {
        var val = 0;
        video.muted = !video.muted;
        if (video.muted) {
            muteBtn.className = 'fa fa-volume-off';
            volumeBar.value = 0;
        } else if (video.volume > 0.6) {
            volumeBar.value = video.volume * 100;
            muteBtn.className = 'fa fa-volume-up';
        } else {
            volumeBar.value = video.volume * 100;
            muteBtn.className = 'fa fa-volume-down';
        }

        val = (volumeBar.value - volumeBar.min) / (volumeBar.max - volumeBar.min);
        volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #FF0000), ' +
            'color-stop(' + val + ', #8F9B9E)' +
            ')';
    }

    // ************************************************************************************
    // SEEKING
    // ************************************************************************************
    function onprogressClick(event) {
        var val = 0;
        // var p = progressBar.value;
        var rect = progressBar.getBoundingClientRect();
        var p = (event.pageX - rect.left) * (mediaDuration / (rect.right - rect.left));
        logger.log(' Seeking from ', Utils.duration(p), '/',
            Utils.duration(mediaDuration), 'to', Utils.duration(p), ' sec');
        fjMainPlayer.seek(p);
        val = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min);
        progressBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #FF0000), ' +
            'color-stop(' + val + ', #8F9B9E)' +
            ')';
    }
    // ************************************************************************************
    // FULLSCREEN
    // ************************************************************************************
    function isFullScreen(g) {
        return document.fullscreenElement || document.msFullscreenElement ||
            document.mozFullScreen || document.webkitIsFullScreen;
    }

    function setFullscreenData(state) {
        videoFigure.setAttribute('data-fullscreen', !!state);
    }

    function handleFullscreen() {
        // If fullscreen mode is active...
        if (isFullScreen()) {
            // ...exit fullscreen mode
            // (Note: this can only be called on document)
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            setFullscreenData(false);
            fullScreenBtn.className = 'fa fa-arrows-alt';
        } else {
            fullScreenBtn.className = 'fa  fa-compress';
            // ...otherwise enter fullscreen mode
            // (Note: can be called on document, but here the specific element is used as
            // it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
            if (videoFigure.requestFullscreen) videoFigure.requestFullscreen();
            else if (videoFigure.mozRequestFullScreen) videoFigure.mozRequestFullScreen();
            else if (videoFigure.webkitRequestFullScreen) {
                // Safari 5.1 only allows proper fullscreen on the video element.
                // This also works fine on other WebKit
                // Zbrowsers as the following CSS (set in styles.css) hides the default
                // controls that appear again, and
                // ensures that our custom controls are visible:
                // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
                // figure[data-fullscreen=true] .controls { z-index:2147483647; }
                video.webkitRequestFullScreen();
            } else if (videoFigure.msRequestFullscreen) videoFigure.msRequestFullscreen();
            setFullscreenData(true);

        }
    }

    function handleExpand() {
        if (isFullScreen()) {
            handleFullscreen();
        }
        if (expandScreen === true) {
            videoContainer.classList.remove('fjPlayerExpand');
            expandBtn.className = 'fa fa-expand';
            expandScreen = false;
        } else {
            videoContainer.classList.add('fjPlayerExpand');
            expandBtn.className = 'fa fa-compress';
            expandScreen = true;
        }
    }

    function onFullScreenChange(e) {
        if (e.event === 'fullscreenchange') {
            setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
        }
        if (e.event === 'webkitfullscreenchange') {
            setFullscreenData(!!document.webkitIsFullScreen);
        }
        if (e.event === 'mozfullscreenchange') {
            setFullscreenData(!!document.mozFullScreen);
        }
        if (e.event === 'msfullscreenchange') {
            setFullscreenData(!!document.msFullscreenElement);
        }

    }
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    function setVolume(value) {
        var pos, val;
        if (typeof value === 'number') {
            volumebar.value = value;
        }
        pos = volumeBar.value / 100;
        logger.log(' volume from ', video.volume, ' to ', pos);
        if (pos > 0.6) {
            muteBtn.className = 'fa fa-volume-up';
        } else if (pos > 0) {
            muteBtn.className = 'fa fa-volume-down';
        } else {
            muteBtn.className = 'fa fa-volume-off';
        }
        video.volume = pos;
        val = (volumeBar.value - volumeBar.min) / (volumeBar.max - volumeBar.min);
        volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #FF0000), ' +
            'color-stop(' + val + ', #8F9B9E)' +
            ')';
        logger.log(' new volume is ', pos);
    };

    function setDuration(value) {
        if (!isNaN(value)) {
            mediaDuration = value;
            durationDisplay.textContent = Utils.duration(value);
            progressBar.max = value;
        }
    }

    function UpdateProgress(value) {
        var val = 0.0;
        if (!isNaN(value)) {
            timer.textContent = Utils.duration(value);
            progressBar.value = value;
            val = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min);
            progressBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
                'color-stop(' + val + ', #FF0000), ' +
                'color-stop(' + val + ', #8F9B9E)' +
                ')';
        }
    }

    function setTitle(ltitle) {
        document.getElementById(titleId).innerHTML = ltitle;
    }

    function getVideo() {
        return video;
    }

    function getAdsContainerDivId() {
        return adsContainerDivId;
    }

    function getOverlaysContainerDivId() {
        return overlaysContainerDivId;
    }

    function SetupThumbsManager(videoDuration, thumbsTrackIndex) {
        if (thumbsTrackIndex !== null) {
            return ThumbsMgr.Setup(getVideo(), videoDuration, thumbsTrackIndex);
        }
        return ThumbsMgr.Reset();

    }

    function getVideoFigure() {
        return videoControllerFigure;
    }

    function initialize(mainPlayer) {
        create(videoContainerId);
        fjMainPlayer = mainPlayer;
        if (!fjMainPlayer) {
            throw new Error('Please pass an instance of player when instantiating');
        }

        AudiosMenu = new AudsMenu(video, id, audMenuContainerDivId);
        SubMenu = new SubsMenu(video, subtitlesBtnId, subsdMenuContainerDivId);

        // OverlaysMgr = new Overlays(this.video, document.getElementById(this.overlaysContainerDivId));
        videoControllerFigure.addEventListener('mouseleave', magicMouseLeave);
        videoControllerFigure.addEventListener('mouseenter', magicMouseEnter);
        videoControllerFigure.addEventListener('mousemove', magicMouseMove);
        BigPlayBtn.addEventListener('click', onplaypauseClick);
        video.addEventListener('click', onplaypauseClick);
        video.addEventListener('dblclick', handleFullscreen);
        volumeBar.addEventListener('click', OnvbClick);
        playpauseBtn.addEventListener('click', onplaypauseClick);
        muteBtn.addEventListener('click', onmuteClick);
        fullScreenBtn.addEventListener('click', handleFullscreen);
        expandBtn.addEventListener('click', handleExpand);
        progressBar.addEventListener('click', onprogressClick);

        document.addEventListener('fullscreenchange', onFullScreenChange);
        document.addEventListener('MSFullscreenChange', onFullScreenChange);
        document.addEventListener('mozfullscreenchange', onFullScreenChange);
        document.addEventListener('webkitfullscreenchange', onFullScreenChange);

        // progress bar
        progressBar.min = 0;
        progressBar.step = 0.01;
        progressBar.value = 0;
        // volume bar
        volumeBar.min = 0;
        volumeBar.step = 1;
        volumeBar.max = 100;
        volumeBar.value = 100;
        volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(1, #FF0000), ' +
            'color-stop(1, #8F9B9E)' +
            ')';
    }

    function hideVideo() {
        BigPlayBtn.style.display = 'none';
        videoInfo.style.display = 'none';
        video.style.display = 'none';
        videoController.style.display = 'none';
    }

    function ShowVideo() {
        BigPlayBtn.style.display = 'block';
        videoInfo.style.display = 'block';
        video.style.display = 'block';
        videoController.style.display = 'block';
    }


    function ShowSpinner() {
        spinner.classList.remove('fj-hide');
    }

    function HideSpinner() {
        spinner.classList.add('fj-hide');
    }

    function disable() {
        videoController.classList.add('disable');
    }

    function enable() {
        videoController.classList.remove('disable');
    }

    function getVideoCaption() {
        var ele = document.getElementById(videoCaptionId);
        return ele;
    }

    function reset() {
        /* window.removeEventListener('resize', handleMenuPositionOnResize);
        destroyBitrateMenu();
        menuHandlersList.forEach(function(item) {
            if (trackSwitchBtn) trackSwitchBtn.removeEventListener('click', item);
            if (captionBtn) captionBtn.removeEventListener('click', item);
        });
        if (captionMenu) {
            videoController.removeChild(captionMenu);
            captionMenu = null;
            captionBtn.classList.add('hide');
        }
        if (trackSwitchMenu) {
            videoController.removeChild(trackSwitchMenu);
            trackSwitchMenu = null;
            trackSwitchBtn.classList.add('hide');
        }
        menuHandlersList = [];
        seeking = false;*/
    }

    function destroy() {

        this.reset();

        BigPlayBtn.removeEventListener('click', onplaypauseClick);
        video.removeEventListener('click', onplaypauseClick);
        video.removeEventListener('dblclick', handleFullscreen);
        volumeBar.removeEventListener('click', OnvbClick);
        playpauseBtn.removeEventListener('click', onplaypauseClick);
        muteBtn.removeEventListener('click', onmuteClick);
        fullScreenBtn.removeEventListener('click', handleFullscreen);
        expandBtn.removeEventListener('click', handleExpand);
        progressBar.removeEventListener('click', onprogressClick);
        document.removeEventListener('fullscreenchange', onFullScreenChange);
        document.removeEventListener('MSFullscreenChange', onFullScreenChange);
        document.removeEventListener('mozfullscreenchange', onFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    }
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        setVolume: setVolume,
        setDuration: setDuration,
        UpdateProgress: UpdateProgress,
        setTitle: setTitle,
        getVideo: getVideo,
        getAdsContainerDivId: getAdsContainerDivId,
        getOverlaysContainerDivId: getOverlaysContainerDivId,
        SetupThumbsManager: SetupThumbsManager,
        SetupSubsAudsManager: SetupSubsAudsManager,
        getVideoFigure: getVideoFigure,
        initialize: initialize,
        toggleplaypauseBtn: toggleplaypauseBtn,
        getVideoCaption: getVideoCaption,
        hideVideo: hideVideo,
        ShowVideo: ShowVideo,
        disable: disable,
        enable: enable,
        reset: reset,
        ShowSpinner: ShowSpinner,
        HideSpinner: HideSpinner,
        onplaypauseClick: onplaypauseClick,
        destroy: destroy,
        constructor: PlayerUi
    };
};

export default PlayerUi;