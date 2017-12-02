import Logger from '../utils/Logger';
import Thumbs from '../ui//Thumbs';
import Menus from '../ui/Menus';
import * as Utils from '../utils/Utils';
import tmpl from '../ui/fjplayer-tmpl';
require('../../css/player.less');
// require('../css/fjfa.css');


/**
 * @module PlayerUi
 * @description The PlayerUi is the html UI for the player
 *
 */
function PlayerUi(videoContId, VWidth, WHeight) {
    var logger = new Logger(this),
        mediaDuration = 0,
        holdWidth = 0,
        fjMainPlayer = null,
        videoContainerId = videoContId,
        fullScreenOnStart = false,
        vwidth = VWidth,
        vheight = WHeight,
        expandScreen = false,
        playerMenus = null,
        timeout = null,
        initialized = false,
        HideControlsTimeout = 1500,
        id = Date.now().toString().substr(6),
        timerId = 'trd' + id,
        durationId = 'drd' + id,
        titleId = 'tld' + id,
        errorDivId = 'errd' + id,
        spinnerId = 'spin' + id,
        BigPlayBtnId = 'bp' + id,
        videoCaptionId = 'vcp' + id,
        videoInfoId = 'vif' + id,
        videoFigureId = 'vfg' + id,
        videoId = 'voi' + id,
        videoControlsId = 'vct' + id,
        playpauseBtnId = 'ppb' + id,
        playpreviousBtnId = 'pprb' + id,
        playforwardBtnId = 'ppfb' + id,
        muteBtnId = 'mbt' + id,
        volumeBarId = 'vbr' + id,
        volumeDivId = 'vvd' + id,
        subtitlesBtnId = 'subd' + id,
        audiosBtnId = 'audb' + id,
        progressBarId = 'pgb' + id,
        fullScreenBtnId = 'fsb' + id,
        thumbsDivId = 'tbd' + id,
        thumbsImgId = 'tbi' + id,
        thumbstimerId = 'tbt' + id,
        adsContainerDivId = 'adscd' + id,
        overlaysContainerDivId = 'ovscd' + id,
        menuContainerDivId = 'mncd' + id,
        descriptionId = 'desc' + id,
        backId = 'backId' + id,
        shareId = 'shareId' + id,
        downloadId = 'downloadId' + id,
        videoContainer,
        video = null,
        videoController,
        spinner = null,
        videoControllerFigure,
        playpauseBtn,
        playpreviousBtn,
        playforwardBtn,
        muteBtn,
        volumeBar,
        progressBar,
        fullScreenBtn,
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
            'videoInfoId': videoInfoId,
            'backId': backId,
            'titleId': titleId,
            'shareId': shareId,
            'downloadId': downloadId,
            'errorDivId': errorDivId,
            'spinnerId': spinnerId,
            'BigPlayBtnId': BigPlayBtnId,
            'videoCaptionId': videoCaptionId,
            'thumbsDivId': thumbsDivId,
            'thumbsImgId': thumbsImgId,
            'thumbstimerId': thumbstimerId,
            'menuContainerDivId': menuContainerDivId,
            'adsContainerDivId': adsContainerDivId,
            'videoControlsId': videoControlsId,
            'progressBarId': progressBarId,
            'playpreviousBtnId': playpreviousBtnId,
            'playpauseBtnId': playpauseBtnId,
            'playforwardBtnId': playforwardBtnId,
            'muteBtnId': muteBtnId,
            'volumeDivId': volumeDivId,
            'volumeBarId': volumeBarId,
            'descriptionId': descriptionId,
            'fullScreenBtnId': fullScreenBtnId,
            'subtitlesBtnId': subtitlesBtnId,
            'audiosBtnId': audiosBtnId,
            'timerId': timerId,
            'durationId': durationId,
            'overlaysContainerDivId': overlaysContainerDivId
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
        playpreviousBtn = document.getElementById(playpreviousBtnId);
        playforwardBtn = document.getElementById(playforwardBtnId);

        muteBtn = document.getElementById(muteBtnId);
        volumeBar = document.getElementById(volumeBarId);
        progressBar = document.getElementById(progressBarId);
        fullScreenBtn = document.getElementById(fullScreenBtnId);
        timer = document.getElementById(timerId);
        durationDisplay = document.getElementById(durationId);

        videoFigure = document.getElementById(videoFigureId);
        BigPlayBtn = document.getElementById(BigPlayBtnId);

        videoControls = document.getElementById(videoControlsId);
        videoInfo = document.getElementById(videoInfoId);
        // Hide the default controls
        video.controls = false;
        // Display the user defined video controls
        videoFigure.setAttribute('controls-hidden', true);
        videoControls.classList.add('fj-hide');
        videoInfo.classList.remove('fj-hide');
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
            BigPlayBtn.classList.add('fj-hide');
            // hide video controls
            videoFigure.setAttribute('controls-hidden', true);
            videoControls.classList.add('fj-hide');
            playerMenus.HideMenus();
        } else {
            if (fjMainPlayer.isPaused() || fjMainPlayer.isEnded()) {
                playpauseBtn.classList.add('fj-icon-play');
                playpauseBtn.classList.remove('fj-icon-pause');
                // show big play button
                BigPlayBtn.classList.remove('fj-hide');
                // hide video controls
                videoFigure.setAttribute('controls-hidden', true);
                videoControls.classList.add('fj-hide');
                playerMenus.HideMenus();
                logger.log('UI is pausing !');
            } else {
                playpauseBtn.classList.remove('fj-icon-play');
                playpauseBtn.classList.add('fj-icon-pause');
                // hide big play button
                BigPlayBtn.classList.add('fj-hide');
                // show video controls
                videoFigure.setAttribute('controls-hidden', false);
                videoControls.classList.remove('fj-hide');
                logger.log('UI is playing !');
            }
        }
    }

    function magicMouseLeave() {
        if (!fjMainPlayer.isPaused() && !fjMainPlayer.isEnded() && !fjMainPlayer.isPlayingAds()) {
            videoFigure.setAttribute('controls-hidden', true);
            // delete fadeIn
            videoControls.classList.remove('m-fadeIn');
            videoInfo.classList.remove('m-fadeIn');
            // add fadeOut
            videoControls.classList.add('m-fadeOut');
            videoInfo.classList.add('m-fadeOut');
            // other
            video.style.cursor = 'none';
            playerMenus.HideMenus();
            ThumbsMgr.hideThumbs(ThumbsMgr);
        }
    }

    function magicMouseEnter() {
        if (!fjMainPlayer.isPaused() && !fjMainPlayer.isEnded() && !fjMainPlayer.isPlayingAds()) {
            videoFigure.setAttribute('controls-hidden', false);
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
        done = playerMenus.SetupAuds(mediaplayer);
        logger.warn(' Will setup Audio menu  ', done);
        if (done !== true) {
            document.getElementById(audiosBtnId).classList.add('fj-hide');
        } else {
            document.getElementById(audiosBtnId).classList.remove('fj-hide');
        }
        done = playerMenus.SetupSubs(mediaplayer);
        logger.warn(' Will setup Subs menu  ', done);
        if (done !== true) {
            document.getElementById(subtitlesBtnId).classList.add('fj-hide');
        } else {
            document.getElementById(subtitlesBtnId).classList.remove('fj-hide');
        }
    };
    // ************************************************************************************
    // VOLUME
    // ************************************************************************************

    function OnvbClick(e) {
        var pos = volumeBar.value / 100;
        logger.log(' volume from ', video.volume, ' to ', pos);
        if (pos > 0.6) {
            muteBtn.classList.remove('fj-icon-mute');
            muteBtn.classList.remove('fj-icon-volDown');
            muteBtn.classList.add('fj-icon-volUp');
        } else if (pos > 0) {
            muteBtn.classList.remove('fj-icon-mute');
            muteBtn.classList.remove('fj-icon-volUp');
            muteBtn.classList.add('fj-icon-volDown');
        } else {
            muteBtn.classList.remove('fj-icon-volDown');
            muteBtn.classList.remove('fj-icon-volUp');
            muteBtn.classList.add('fj-icon-mute');
        }
        video.volume = pos;
        logger.log(' new volume is ', pos);
    };

    function onmuteClick(e) {
        video.muted = !video.muted;
        if (video.muted) {
            volumeBar.value = 0;
            muteBtn.classList.remove('fj-icon-volDown');
            muteBtn.classList.remove('fj-icon-volUp');
            muteBtn.classList.add('fj-icon-mute');
        } else if (video.volume > 0.6) {
            volumeBar.value = video.volume * 100;
            muteBtn.classList.remove('fj-icon-mute');
            muteBtn.classList.remove('fj-icon-volDown');
            muteBtn.classList.add('fj-icon-volUp');
        } else {
            volumeBar.value = video.volume * 100;
            muteBtn.classList.remove('fj-icon-mute');
            muteBtn.classList.remove('fj-icon-volUp');
            muteBtn.classList.add('fj-icon-volDown');
        }
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
    }
    // ************************************************************************************
    // FULLSCREEN
    // ************************************************************************************
    function isFullScreen() {
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
            fullScreenBtn.classList.remove('fj-icon-compressScreen');
            fullScreenBtn.classList.add('fj-icon-fullScreen');
        } else {
            fullScreenBtn.classList.add('fj-icon-compressScreen');
            fullScreenBtn.classList.remove('fj-icon-fullScreen');
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

    function onFullScreenChange(e) {
        if (e.type === 'fullscreenchange') {
            logger.log(" fullscreenchange >>> Full Scren changed Status ", !!(document.fullScreen || document.fullscreenElement));
            setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
        }
        if (e.type === 'webkitfullscreenchange') {
            logger.log(" webkitfullscreenchange >>> Full Scren changed Status ", !!document.webkitIsFullScreen);
            setFullscreenData(!!document.webkitIsFullScreen);
        }
        if (e.type === 'mozfullscreenchange') {
            logger.log(" mozfullscreenchange >>> Full Scren changed Status ", !!document.mozFullScreen);
            setFullscreenData(!!document.mozFullScreen);
        }
        if (e.type === 'msfullscreenchange') {
            logger.log(" msfullscreenchange >>> Full Scren changed Status ", !!document.msFullscreenElement);
            setFullscreenData(!!document.msFullscreenElement);
        }

    }
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    function goForError() {
        // used to prepare to show error
        magicMouseLeave();
        BigPlayBtn.classList.add('fj-hide');

    }

    function setVolume(value) {
        var pos, val;
        if (typeof value === 'number') {
            volumebar.value = value;
        }
        pos = volumeBar.value / 100;
        logger.log(' volume from ', video.volume, ' to ', pos);

        if (pos > 0.6) {
            muteBtn.classList.remove('fj-icon-mute');
            muteBtn.classList.remove('fj-icon-volDown');
            muteBtn.classList.add('fj-icon-volUp');
        } else if (pos > 0) {
            muteBtn.classList.remove('fj-icon-mute');
            muteBtn.classList.remove('fj-icon-volUp');
            muteBtn.classList.add('fj-icon-volDown');
        } else {
            muteBtn.classList.remove('fj-icon-volDown');
            muteBtn.classList.remove('fj-icon-volUp');
            muteBtn.classList.add('fj-icon-mute');
        }

        video.volume = pos;
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
        if (!isNaN(value)) {
            timer.textContent = Utils.duration(value);
            progressBar.value = value;
        }
    }

    // set Sharing icon
    function setShareIcon(shareUrl) {
        if (shareUrl !== null && shareUrl !== undefined && shareUrl !== '') {
            logger.log('Will show Share icon to ' + shareUrl);
            document.getElementById(shareId).style.display = 'block';
            document.getElementById(shareId).addEventListener('click', function() {
                window.open(shareUrl);
            });
        } else {
            logger.log('Will NOT show Share icon');
            document.getElementById(shareId).style.display = 'none';
        }
    }

    // set Downloading icon
    function setDownloadIcon(DownUrl) {
        if (DownUrl !== null && DownUrl !== undefined && DownUrl !== '') {
            logger.log('Will show Download icon to ' + DownUrl);
            document.getElementById(downloadId).style.display = 'block';
            document.getElementById(downloadId).addEventListener('click', function() {
                window.open(DownUrl);
            });
        } else {
            logger.log('Will NOT show Download icon');
            document.getElementById(downloadId).style.display = 'none';
        }
    }

    // set back icon
    function setBackIcon(BackUrl) {
        if (BackUrl !== null && BackUrl !== undefined && BackUrl !== '') {
            logger.log('Will show Back icon to ' + BackUrl);
            document.getElementById(backId).style.display = 'block';
            document.getElementById(backId).addEventListener('click', function() {
                window.location = BackUrl;
            });
        } else {
            logger.log('Will NOT show Back icon');
            document.getElementById(backId).style.display = 'none';
        }
    }

    function setTitle(ltitle, ShowUpTitle) {
        document.getElementById(titleId).innerHTML = ltitle;
        document.getElementById(descriptionId).innerHTML = ltitle;
        if (ShowUpTitle) {
            logger.log('Will  show title Up');
            document.getElementById(titleId).style.display = 'block';
        } else {
            logger.log('Will NOT show title Up');
            document.getElementById(titleId).style.display = 'none';
        }
    }

    function getVideo() {
        return video;
    }

    function getErrorDivId() {
        return errorDivId;
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

    function onResizeWindow() {
        var intViewportWidth = window.innerWidth;
        var intViewportHeight = window.innerHeight;
        var newPercentage = ((intViewportWidth / holdWidth) * 100) + "%";
        var fjplayer = document.getElementById('playercontainer');
        fjplayer.style.fontSize = newPercentage;
        console.error(holdWidth, " RESIED !!!!!!!!!!!!! ", intViewportWidth, '/', holdWidth, '>>>>>', newPercentage);
    }

    function onLoadWindow() {
        console.error(holdWidth, " LOADED ##########################");
        holdWidth = window.innerWidth;
    }

    function initialize(mainPlayer) {
        create(videoContainerId);
        fjMainPlayer = mainPlayer;
        if (!fjMainPlayer) {
            throw new Error('Please pass an instance of player when instantiating');
        }

        playerMenus = new Menus(video, subtitlesBtnId, audiosBtnId, menuContainerDivId);

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
        progressBar.addEventListener('click', onprogressClick);

        // window.addEventListener('resize', onResizeWindow);
        // window.addEventListener('load', onResizeWindow); // too late to catch event

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
        initialized = true;

        // hide some component
        document.getElementById(titleId).display = 'none';
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
            logger.warn('not yet initialized');
            return;
        }
        console.warn(" >>> Resetting player ui !!");
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
        progressBar.removeEventListener('click', onprogressClick);

        /*
        window.removeEventListener('resize', onResizeWindow);
        window.removeEventListener('load', onResizeWindow);
        */

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
        setBackIcon: setBackIcon,
        setDownloadIcon: setDownloadIcon,
        setShareIcon: setShareIcon,
        getVideo: getVideo,
        getAdsContainerDivId: getAdsContainerDivId,
        getErrorDivId: getErrorDivId,
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
        goForError: goForError,
        constructor: PlayerUi
    };
};

export default PlayerUi;