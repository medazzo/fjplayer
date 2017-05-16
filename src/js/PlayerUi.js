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
        initialized = false,
        HideControlsTimeout = 1500,
        id = Date.now().toString().substr(6),
        timerId = 'trd' + id,
        durationId = 'drd' + id,
        titleId = 'tld' + id,
        spinnerId = 'spin' + id,
        BigPlayBtnId = 'bp' + id,
        videoCaptionId = 'vcp' + id,
        videoInfoId = 'vif' + id,
        videoFigureId = 'vfg' + id,
        videoId = 'voi' + id,
        videoControlsId = 'vct' + id,
        playpauseBtnId = 'ppb' + id,
        muteBtnId = 'mbt' + id,
        volumeBarId = 'vbr' + id,
        volumeDivId = 'vvd' + id,
        progressDivId = 'pgd' + id,
        progressBarId = 'pgb' + id,
        fullScreenBtnId = 'fsb' + id,
        subtitlesDivId = 'sbd' + id,
        subtitlesBtnId = 'sbb' + id,
        thumbsDivId = 'tbd' + id,
        thumbsImgId = 'tbi' + id,
        thumbstimerId = 'tbt' + id,
        expandDivId = 'exd' + id,
        expandBtnId = 'exb' + id,
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
        return ThumbsMgr.reset();

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
        initialized = true;
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
        if (spinner.classList.contains('fj-hide') === false) {
            spinner.classList.add('fj-hide');
        }
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
        if (initialized !== true) {
            console.warn('not yet initialized');
            return;
        }
        console.warn(" >>> Resetting player ui !!");
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

        ThumbsMgr.reset();
        // OverlaysMgr = new Overlays(this.video, document.getElementById(this.overlaysContainerDivId));
        videoControllerFigure.removeEventListener('mouseleave', magicMouseLeave);
        videoControllerFigure.removeEventListener('mouseenter', magicMouseEnter);
        videoControllerFigure.removeEventListener('mousemove', magicMouseMove);

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

        toggleplaypauseBtn();
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
        constructor: PlayerUi
    };
};

export default PlayerUi;