'use strict';
import Logger from './Logger';
import Thumbs from './Thumbs';
import SubsMenu from './SubsMenu';
import AudsMenu from './AudsMenu';
// import Overlays from './Overlays';
import * as Utils from './Utils';

var ejsContent = require('ejs!./fjplayer-tmpl.ejs');
require('./player.css');
require('font-awesome/css/font-awesome.css');

/**
 * @module PlayerUi
 * @description The PlayerUi is the html UI for the player
 *
 */
function PlayerUi(mainPlayer, videoContId) {
    var logger = new Logger(this),
        fjMainPlayer = mainPlayer,
        videoContainerId = videoContId,
        fullScreenOnStart = false,
        vwidth, vheight,
        expandScreen = false,
        isStarted = false,
        AudiosMenu = null,
        SubMenu = null,
        timeout = null,
        HideControlsTimeout = 1500,
        id = Date.now().toString().substr(6),
        timerId = 'trd' + id,
        durationId = 'drd' + id,
        titleId = 'tld' + id,
        BigPlayBtnId = 'bp' + id,
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
        player = null,
        video = null,
        // OverlaysMgr = null,
        /* videoContainer = null,
        captionMenu = null,
         bitrateListMenu = null,
        trackSwitchMenu = null,
        menuHandlersList = [],
        lastVolumeLevel = NaN,
        seeking = false,
        videoControllerVisibleTimeout = 0,*/
        videoController,
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
            'videoInfoId': videoInfoId,
            'titleId': titleId,
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
        videoContainer.innerHTML = ejsContent(data);
        video = null;
        videoContainer = null;
        /* captionMenu = null;
         bitrateListMenu = null;
        trackSwitchMenu = null;
        menuHandlersList = [];
         lastVolumeLevel = NaN;
        seeking = false;
        videoControllerVisibleTimeout = 0; */

        videoController = document.getElementById(videoFigureId);
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
    };
    // ************************************************************************************
    // PLAYBACK
    // ************************************************************************************
    function onplaypauseClick(e) {
        if (!isStarted) {
            isStarted = true;
            fjMainPlayer.startPlay();
        }
        if (player.isPaused() || player.isEnded()) {
            playpauseBtn.className = 'fa  fa-pause';
            // hide big play button
            BigPlayBtn.style.display = 'none';
            // show video controls
            videoControls.style.display = 'block';
            player.play();
        } else {
            playpauseBtn.className = 'fa  fa-play';
            player.pause();
            // show big play button
            BigPlayBtn.style.display = 'block';
            // hide video controls
            videoControls.style.display = 'none';
            SubMenu.HideMenu();
            AudiosMenu.HideMenu();
        }
        logger.log('clicking pause/play !');
    };

    function magicMouseLeave() {
        if (isStarted) {
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
    };

    function magicMouseEnter() {
        if (isStarted) {
            // delete fadeOut
            videoControls.classList.remove('m-fadeOut');
            videoInfo.classList.remove('m-fadeOut');
            // add fadein
            videoControls.classList.add('m-fadeIn');
            videoInfo.classList.add('m-fadeIn');
            // other
            video.style.cursor = 'auto';
        }
    };

    function magicMouseMove() {
        if (isStarted) {
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
    };

    function InitPlayer(e) {
        //  var item = null;
        // progress bar
        progressBar.max = video.duration;
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
        // timer
        timer.innerHTML = ' <span>' + Utils.duration(video.currentTime) +
            '</span><span>/</span><span>' + Utils.duration(video.duration) + '</span>';
        /* To be moved to PlayerMedia
            // thumbs
            if (vttThumbs !== null || vttThumbs !== undefined) {
                track = document.createElement('track');
                track.kind = 'metadata';
                track.src = vttThumbs;
                logger.log(' Appending source thumbs to video', track);
                video.appendChild(track);
            } else {
                logger.warn(' Thumbs was not found .');
            }
            // video tracks
            thumbsTrackIndex = -1;
            for (i = 0; i < video.textTracks.length; i++) {
                if (video.textTracks[i].kind === 'metadata') {
                    thumbsTrackIndex = i;
                    video.textTracks[i].mode = 'hidden'; // thanks Firefox
                } else if ((video.textTracks[i].kind === 'captions') ||
                    (video.textTracks[i].kind === 'subtitles')) {
                    containsSubs = true;
                    logger.log('find  soustitres  @ ', i, '/', video.textTracks.length,
                        ' >>> ', video.textTracks[i]);
                }
            }
            // subs track
            if (subsJsObj) {
                for (i = 0; i < subsJsObj.length; i++) {
                    item = subsJsObj[i];
                    track = document.createElement('track');
                    track.kind = 'subtitles';
                    track.src = item[Const.FJCONFIG_SRC];
                    track.srclang = item[Const.FJCONFIG_LANG];
                    track.label = item[Const.FJCONFIG_LABEL];
                    video.appendChild(track);
                }
            }
            // Init Thumbs
            if (ThumbsMgr.Setup(thumbsTrackIndex) !== true) {
                logger.info('No thumbs will be displayed !');
            }
            // Init menus for subs and audio
            // AudiosMenu.Setup(extraDiv1Id);
            if (SubMenu.Setup() !== true) {
                document.getElementById(subtitlesBtnId).style.display = 'none';
            }
        */
    };

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
    };

    // ************************************************************************************
    // SEEKING
    // ************************************************************************************
    function onprogressClick(event) {
        var val = 0;
        // var p = progressBar.value;
        var rect = progressBar.getBoundingClientRect();
        var p = (event.pageX - rect.left) * (video.duration / (rect.right - rect.left));
        if (progressBar.max !== video.duration) {
            progressBar.max = video.duration;
        }
        logger.log(' Seeking from ', Utils.duration(video.currentTime), '/',
            Utils.duration(video.duration), 'to', Utils.duration(p), ' sec');
        // change current time
        video.currentTime = parseFloat(p);
        val = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min);
        progressBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #FF0000), ' +
            'color-stop(' + val + ', #8F9B9E)' +
            ')';
        // set timer
        timer.innerHTML = ' <span>' + Utils.duration(p) +
            '</span><span>/</span><span>' + Utils.duration(video.duration) + '</span>';
    };
    // ************************************************************************************
    // TIME/DURATION
    // ************************************************************************************
    function onvideoTimeupdate() {
        var val = 0.0;
        // For mobile browsers, ensure that the progress element's max attribute is set
        if (progressBar.max !== video.duration) {
            progressBar.max = video.duration;
        }
        // set progress
        progressBar.value = video.currentTime;
        val = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min);
        progressBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #FF0000), ' +
            'color-stop(' + val + ', #8F9B9E)' +
            ')';
        // set timer
        timer.innerHTML = ' <span>' + Utils.duration(progressBar.value) +
            '</span><span>/</span><span>' + Utils.duration(video.duration) + '</span>';
    };

    // ************************************************************************************
    // FULLSCREEN
    // ************************************************************************************
    function isFullScreen(g) {
        return document.fullscreenElement || document.msFullscreenElement ||
            document.mozFullScreen || document.webkitIsFullScreen;
    };

    function setFullscreenData(state) {
        videoFigure.setAttribute('data-fullscreen', !!state);
    };

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
    };

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
    };

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

    };
    /*
            onFullscreenClick = function(e) {
                if (!isFullscreen()) {
                    enterFullscreen();
                } else {
                    exitFullscreen();
                }
                if (captionMenu) {
                    captionMenu.classList.add('hide');
                }
                if (bitrateListMenu) {
                    bitrateListMenu.classList.add('hide');
                }
                if (trackSwitchMenu) {
                    trackSwitchMenu.classList.add('hide');
                }
            }, */
    // ************************************************************************************
    // Audio Video MENU
    // ************************************************************************************

    /* onTracksAdded = function(e) {
        // Subtitles/Captions Menu //XXX we need to add two layers for captions & subtitles if present.
        var contentFunc, func;
        if (!captionMenu) {
            contentFunc = function(element, index) {
                return isNaN(index) ? 'OFF' : element.lang + ' : ' + element.kind;
            };
            captionMenu = createMenu({ menuType: 'caption', arr: e.tracks }, contentFunc);

            func = function() {
                onMenuClick(captionMenu, captionBtn);
            };
            menuHandlersList.push(func);
            captionBtn.addEventListener('click', func);
            captionBtn.classList.remove('hide');
        }
    },*/

    /* onStreamInitialized = function(e) {
                    var func, func2;
                    var contentFunc;
                    var availableTracks = { menuType: 'track' };
                    var availableBitrates = { menuType: 'bitrate' };
                    // Bitrate Menu
                    if (bitrateListBtn) {
                        destroyBitrateMenu();
                        availableBitrates.audio = player.getBitrateInfoListFor('audio') || [];
                        availableBitrates.video = player.getBitrateInfoListFor('video') || [];
                        if (availableBitrates.audio.length > 1 || availableBitrates.video.length > 1) {
                            contentFunc = function(element, index) {
                                return isNaN(index) ? ' Auto Switch' : Math.floor(element.bitrate / 1000) + ' kbps';
                            };
                            bitrateListMenu = createMenu(availableBitrates, contentFunc);
                            func = function() {
                                onMenuClick(bitrateListMenu, bitrateListBtn);
                            };
                            menuHandlersList.push(func);
                            bitrateListBtn.addEventListener('click', func);
                            bitrateListBtn.classList.remove('hide');

                        } else {
                            bitrateListBtn.classList.add('hide');
                        }
                    }

                    // Track Switch Menu
                    if (!trackSwitchMenu && trackSwitchBtn) {

                        availableTracks.audio = player.getTracksFor('audio');
                        availableTracks.video = player.getTracksFor('video');
                        // these return empty arrays so no need to cehck for null
                        if (availableTracks.audio.length > 1 || availableTracks.video.length > 1) {
                            contentFunc = function(element) {
                                return 'Language: ' + element.lang + ' - Role: ' + element.roles[0];
                            };
                            trackSwitchMenu = createMenu(availableTracks, contentFunc);
                            func2 = function() {
                                onMenuClick(trackSwitchMenu, trackSwitchBtn);
                            };
                            menuHandlersList.push(func2);
                            trackSwitchBtn.addEventListener('click', func2);
                            trackSwitchBtn.classList.remove('hide');
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
                    videoController.appendChild(el);
                    switch (menuType) {
                        case 'caption':
                            el.appendChild(document.createElement('ul'));
                            el = createMenuContent(el,
                                getMenuContent(menuType, info.arr, contentFunc),
                                'caption', menuType + '-list');
                            setMenuItemsState(getMenuInitialIndex(info, menuType), menuType + '-list');
                            break;
                        case 'track':
                        case 'bitrate':
                            if (info.video.length > 1) {
                                el.appendChild(createMediaTypeMenu('video'));
                                el = createMenuContent(el,
                                    getMenuContent(menuType, info.video, contentFunc), 'video', 'video-' +
                                    menuType + '-list');
                                setMenuItemsState(
                                    getMenuInitialIndex(info.video,
                                    menuType, 'video'), 'video-' + menuType + '-list');
                            }
                            if (info.audio.length > 1) {
                                el.appendChild(createMediaTypeMenu('audio'));
                                el = createMenuContent(el,
                                    getMenuContent(menuType, info.audio, contentFunc), 'audio', 'audio-' +
                                    menuType + '-list');
                                setMenuItemsState(
                                    getMenuInitialIndex(info.audio, menuType, 'audio'),
                                     'audio-' + menuType + '-list');
                            }
                            break;
                    }
                    window.addEventListener('resize', handleMenuPositionOnResize, true);
                    return el;
                },

                getMenuInitialIndex = function(info, menuType, mediaType) {
                    var idx = 0,
                        mediaInfo;
                    if (menuType === 'track') {
                        mediaInfo = player.getCurrentTrackFor(mediaType);
                        info.some(function(element, index) {
                            if (isTracksEqual(element, mediaInfo)) {
                                idx = index;
                                return true;
                            }
                        });
                        return idx;

                    } else if (menuType === 'bitrate') {
                        return player.getAutoSwitchQualityFor(mediaType) ? 0 :
                         player.getQualityFor(mediaType);
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
                            if (selected !== true) {
                                classList.add('menu-item-over');
                            }
                        };
                        item.onmouseout = function(e) {
                            classList.remove('menu-item-over');
                        };
                        item.onclick = setMenuItemsState.bind(item);
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
                            classList.add('hide');
                        };
                    } else {
                        menu.classList.add('hide');
                    }
                    menu.style.position = isFullscreen() ? 'fixed' : 'absolute';
                    positionMenu(menu, btn);
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
                                    if (player.getAutoSwitchQualityFor(self.mediaType)) {
                                        player.setAutoSwitchQualityFor(self.mediaType, false);
                                    }
                                    player.setQualityFor(self.mediaType, self.index - 1);
                                } else {
                                    player.setAutoSwitchQualityFor(self.mediaType, true);
                                }
                                break;
                            case 'caption-list':
                                player.setTextTrack(self.index - 1);
                                break;
                            case 'video-track-list':
                            case 'audio-track-list':
                                player.setCurrentTrack(player.getTracksFor(self.mediaType)[self.index]);
                                break;
                        }
                    }
                },
        handleMenuPositionOnResize = function(e) {
                if (captionMenu) {
                    positionMenu(captionMenu, captionBtn);
                }
                if (bitrateListMenu) {
                    positionMenu(bitrateListMenu, bitrateListBtn);
                }
                if (trackSwitchMenu) {
                    positionMenu(trackSwitchMenu, trackSwitchBtn);
                }
            },

            /* positionMenu = function(menu, btn) {
                var menuY = videoController.offsetTop - menu.offsetHeight;
                menu.style.top = menuY + 'px';
                menu.style.left = btn.offsetLeft + 'px';
            },

            destroyBitrateMenu = function() {
                if (bitrateListMenu) {
                    menuHandlersList.forEach(function(item) {
                        bitrateListBtn.removeEventListener('click', item);
                    });
                    videoController.removeChild(bitrateListMenu);
                    bitrateListMenu = null;
                }
            };
    */

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
            durationDisplay.textContent = Utils.duration(value);
        }
    }

    function setTime(value) {
        if (!isNaN(value)) {
            timer.textContent = Utils.duration(value);
        }
    };

    function setTitle(ltitle) {
        document.getElementById(titleId).innerHTML = ltitle;
    };

    function getVideo() {
        return video;
    };

    function getAdsContainerDivId() {
        return adsContainerDivId;
    };

    function SetupThumbsManager(videoDuration, thumbsTrackIndex) {
        return ThumbsMgr.Setup(getVideo(), videoDuration, thumbsTrackIndex);
    };

    function getVideoFigure() {
        return videoController;
    };

    function initialize(playerMedia) {
        create(videoContainerId);
        player = playerMedia;
        if (!player) {
            throw new Error('Please pass an instance of player when instantiating');
        }

        AudiosMenu = new AudsMenu(video, id, audMenuContainerDivId);
        SubMenu = new SubsMenu(video, subtitlesBtnId, subsdMenuContainerDivId);

        // OverlaysMgr = new Overlays(this.video, document.getElementById(this.overlaysContainerDivId));
        videoController.addEventListener('mouseleave', magicMouseLeave);
        videoController.addEventListener('mouseenter', magicMouseEnter);
        videoController.addEventListener('mousemove', magicMouseMove);
        BigPlayBtn.addEventListener('click', onplaypauseClick);
        video.addEventListener('click', onplaypauseClick);
        video.addEventListener('dblclick', handleFullscreen);
        volumeBar.addEventListener('click', OnvbClick);
        video.addEventListener('loadedmetadata', InitPlayer);
        playpauseBtn.addEventListener('click', onplaypauseClick);
        muteBtn.addEventListener('click', onmuteClick);
        fullScreenBtn.addEventListener('click', handleFullscreen);
        expandBtn.addEventListener('click', handleExpand);
        video.addEventListener('timeupdate', onvideoTimeupdate);
        progressBar.addEventListener('click', onprogressClick);

        document.addEventListener('fullscreenchange', onFullScreenChange);
        document.addEventListener('MSFullscreenChange', onFullScreenChange);
        document.addEventListener('mozfullscreenchange', onFullScreenChange);
        document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    };

    function show() {
        videoController.classList.remove('hide');
    };

    function hide() {
        videoController.classList.add('hide');
    };

    function disable() {
        videoController.classList.add('disable');
    };

    function enable() {
        videoController.classList.remove('disable');
    };

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
    };

    function destroy() {

        this.reset();

        BigPlayBtn.removeEventListener('click', onplaypauseClick);
        video.removeEventListener('click', onplaypauseClick);
        video.removeEventListener('dblclick', handleFullscreen);
        volumeBar.removeEventListener('click', OnvbClick);
        video.removeEventListener('loadedmetadata', InitPlayer);
        playpauseBtn.removeEventListener('click', onplaypauseClick);
        muteBtn.removeEventListener('click', onmuteClick);
        fullScreenBtn.removeEventListener('click', handleFullscreen);
        expandBtn.removeEventListener('click', handleExpand);
        video.removeEventListener('timeupdate', onvideoTimeupdate);
        progressBar.removeEventListener('click', onprogressClick);
        /*
                    player.off(dashjs.MediaPlayer.events.PLAYBACK_STARTED, onPlayStart, this);
                    player.off(dashjs.MediaPlayer.events.PLAYBACK_PAUSED, onPlaybackPaused, this);
                    player.off(dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED, onPlayTimeUpdate, this);
                    player.off(dashjs.MediaPlayer.events.PLAYBACK_SEEKED, onSeeked, this);
                    player.off(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, onTracksAdded, this);
                    player.off(dashjs.MediaPlayer.events.STREAM_INITIALIZED, onStreamInitialized, this);
        */
        document.removeEventListener('fullscreenchange', onFullScreenChange);
        document.removeEventListener('MSFullscreenChange', onFullScreenChange);
        document.removeEventListener('mozfullscreenchange', onFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        setVolume: setVolume,
        setDuration: setDuration,
        setTime: setTime,
        setTitle: setTitle,
        getVideo: getVideo,
        getAdsContainerDivId: getAdsContainerDivId,
        SetupThumbsManager: SetupThumbsManager,
        getVideoFigure: getVideoFigure,
        initialize: initialize,
        show: show,
        hide: hide,
        disable: disable,
        enable: enable,
        reset: reset,
        destroy: destroy,
        constructor: PlayerUi
    };
};

export default PlayerUi;