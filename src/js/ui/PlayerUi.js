const Logger = require('../utils/Logger');
const Thumbs = require('./Thumbs');
const Menus = require('./Menus');
const Utils = require('../utils/Utils');
const PlayerTemplate = require('./fjplayer-tmpl');
require('../../css/player.less');
// require('../css/fjfa.css');

/**
 * @module PlayerUi
 * @description The PlayerUi is the html UI for the player
 *
 */
class PlayerUi {
  constructor(videoContId, VWidth, WHeight) {
    this.logger = new Logger(this);
    this.mediaDuration = 0;
    this.holdWidth = 0;
    this.fjMainPlayer = null;
    this.videoContainerId = videoContId;
    this.fullScreenOnStart = false;
    this.vwidth = VWidth;
    this.vheight = WHeight;
    this.expandScreen = false;
    this.playerMenus = null;
    this.timeout = null;
    this.initialized = false;
    this.HideControlsTimeout = 1500;
    this.id = Date.now().toString().substr(6);
    this.timerId = `trd${this.id}`;
    this.durationId = `drd${this.id}`;
    this.titleId = `tld${this.id}`;
    this.errorDivId = `errd${this.id}`;
    this.spinnerId = `spin${this.id}`;
    this.BigPlayBtnId = `bp${this.id}`;
    this.videoCaptionId = `vcp${this.id}`;
    this.videoInfoId = `vif${this.id}`;
    this.videoFigureId = `vfg${this.id}`;
    this.videoId = `voi${this.id}`;
    this.videoControlsId = `vct${this.id}`;
    this.playpauseBtnId = `ppb${this.id}`;
    this.playpreviousBtnId = `pprb${this.id}`;
    this.playforwardBtnId = `ppfb${this.id}`;
    this.muteBtnId = `mbt${this.id}`;
    this.volumeBarId = `vbr${this.id}`;
    this.volumeDivId = `vvd${this.id}`;
    this.subtitlesBtnId = `subd${this.id}`;
    this.audiosBtnId = `audb${this.id}`;
    this.progressBarId = `pgb${this.id}`;
    this.fullScreenBtnId = `fsb${this.id}`;
    this.thumbsDivId = `tbd${this.id}`;
    this.thumbsImgId = `tbi${this.id}`;
    this.thumbstimerId = `tbt${this.id}`;
    this.adsContainerDivId = `adscd${this.id}`;
    this.overlaysContainerDivId = `ovscd${this.id}`;
    this.menuContainerDivId = `mncd${this.id}`;
    this.descriptionId = `desc${this.id}`;
    this.backId = `backId${this.id}`;
    this.shareId = `shareId${this.id}`;
    this.downloadId = `downloadId${this.id}`;
    this.videoContainer = null;
    this.video = null;
    this.videoController = null;
    this.spinner = null;
    this.videoControllerFigure = null;
    this.playpauseBtn = null;
    this.playpreviousBtn = null;
    this.playforwardBtn = null;
    this.muteBtn = null;
    this.volumeBar = null;
    this.progressBar = null;
    this.fullScreenBtn = null;
    this.timer = null;
    this.durationDisplay = null;
    this.videoFigurev = null;
    this.BigPlayBtn = null;
    this.volumebar = null;
    this.ThumbsMgr = null;
    this.videoControls = null;
    this.videoInfo = null;
    this.fullScreenEnabled = true;
  }

  create() {
    const data = {
      videoFigureId: this.videoFigureId,
      fullScreenOnStart: this.fullScreenOnStart,
      videoId: this.videoId,
      vwidth: this.vwidth,
      videoInfoId: this.videoInfoId,
      backId: this.backId,
      titleId: this.titleId,
      shareId: this.shareId,
      downloadId: this.downloadId,
      errorDivId: this.errorDivId,
      spinnerId: this.spinnerId,
      BigPlayBtnId: this.BigPlayBtnId,
      videoCaptionId: this.videoCaptionId,
      thumbsDivId: this.thumbsDivId,
      thumbsImgId: this.thumbsImgId,
      thumbstimerId: this.thumbstimerId,
      menuContainerDivId: this.menuContainerDivId,
      adsContainerDivId: this.adsContainerDivId,
      videoControlsId: this.videoControlsId,
      progressBarId: this.progressBarId,
      playpreviousBtnId: this.playpreviousBtnId,
      playpauseBtnId: this.playpauseBtnId,
      playforwardBtnId: this.playforwardBtnId,
      muteBtnId: this.muteBtnId,
      volumeDivId: this.volumeDivId,
      volumeBarId: this.volumeBarId,
      descriptionId: this.descriptionId,
      fullScreenBtnId: this.fullScreenBtnId,
      subtitlesBtnId: this.subtitlesBtnId,
      audiosBtnId: this.audiosBtnId,
      timerId: this.timerId,
      durationId: this.durationId,
      overlaysContainerDivId: this.overlaysContainerDivId,
    };

    this.logger.info(' container if of the player ', this.videoContainerId);
    this.videoContainer = document.getElementById(this.videoContainerId);
    if (!this.videoContainer) {
      throw new Error('The this.video container element still null');
    }
    this.videoContainer.classList.add('fjPlayer');
    this.videoContainer.innerHTML = new PlayerTemplate().GetHtml(data);
    this.video = null;
    this.videoContainer = null;
    this.videoController = document.getElementById(this.videoControlsId);
    this.videoControllerFigure = document.getElementById(this.videoFigureId);
    this.spinner = document.getElementById(this.spinnerId);
    this.video = document.getElementById(this.videoId);
    if (!this.video) {
      throw new Error(`The this.video element still null using id${this.videoId}`);
    }
    this.playpauseBtn = document.getElementById(this.playpauseBtnId);
    this.playpreviousBtn = document.getElementById(this.playpreviousBtnId);
    this.playforwardBtn = document.getElementById(this.playforwardBtnId);

    this.muteBtn = document.getElementById(this.muteBtnId);
    this.volumeBar = document.getElementById(this.volumeBarId);
    this.progressBar = document.getElementById(this.progressBarId);
    this.fullScreenBtn = document.getElementById(this.fullScreenBtnId);
    this.timer = document.getElementById(this.timerId);
    this.durationDisplay = document.getElementById(this.durationId);

    this.videoFigure = document.getElementById(this.videoFigureId);
    this.BigPlayBtn = document.getElementById(this.BigPlayBtnId);

    this.videoControls = document.getElementById(this.videoControlsId);
    this.videoInfo = document.getElementById(this.videoInfoId);
    // Hide the default controls
    this.video.controls = false;
    // Display the user defined this.video controls
    this.videoFigure.setAttribute('controls-hidden', true);
    this.videoControls.classList.add('fj-hide');
    this.videoInfo.classList.remove('fj-hide');
    // Create Thumbs Object
    this.ThumbsMgr = new Thumbs(document.getElementById(this.thumbstimerId),
      document.getElementById(this.thumbsImgId),
      document.getElementById(this.thumbsDivId), this.progressBar);

    if (this.fullScreenOnStart === 'true') {
      this.videoFigure.setAttribute('data-fullscreen', 'true');
    }
    // If the browser doesn't support the Fulscreen API then hide the fullscreen button
    if (!this.fullScreenEnabled) {
      this.fullScreenBtn.style.display = 'none';
    }
  }

  // ************************************************************************************
  // PLAYBACK
  // ************************************************************************************
  onplaypauseClick() {
    if (this.fjMainPlayer.isPaused() || this.fjMainPlayer.isEnded()) {
      this.fjMainPlayer.play();
    } else {
      this.fjMainPlayer.pause();
    }
  }

  onperviousClick() {
    this.fjMainPlayer.playPrev();
  }

  onforwardClick() {
    this.fjMainPlayer.playNext();
  }

  toggleplaypauseBtn() {
    if (this.fjMainPlayer.isPlayingAds()) {
      // hide big play button
      this.BigPlayBtn.classList.add('fj-hide');
      // hide this.video controls
      this.videoFigure.setAttribute('controls-hidden', true);
      this.videoControls.classList.add('fj-hide');
      this.playerMenus.HideMenus();
    } else if (this.fjMainPlayer.isPaused() || this.fjMainPlayer.isEnded()) {
      this.playpauseBtn.classList.add('fj-icon-play');
      this.playpauseBtn.classList.remove('fj-icon-pause');
      // show big play button
      this.BigPlayBtn.classList.remove('fj-hide');
      // hide this.video controls
      this.videoFigure.setAttribute('controls-hidden', true);
      this.videoControls.classList.add('fj-hide');
      this.playerMenus.HideMenus();
      this.logger.log('UI is pausing !');
    } else {
      this.playpauseBtn.classList.remove('fj-icon-play');
      this.playpauseBtn.classList.add('fj-icon-pause');
      // hide big play button
      this.BigPlayBtn.classList.add('fj-hide');
      // show this.video controls
      this.videoFigure.setAttribute('controls-hidden', false);
      this.videoControls.classList.remove('fj-hide');
      this.logger.log('UI is playing !');
    }
  }

  magicMouseLeave() {
    if (!this.fjMainPlayer.isPaused()
    && !this.fjMainPlayer.isEnded()
    && !this.fjMainPlayer.isPlayingAds()) {
      this.videoFigure.setAttribute('controls-hidden', true);
      // delete fadeIn
      this.videoControls.classList.remove('m-fadeIn');
      this.videoInfo.classList.remove('m-fadeIn');
      // add fadeOut
      this.videoControls.classList.add('m-fadeOut');
      this.videoInfo.classList.add('m-fadeOut');
      // other
      this.video.style.cursor = 'none';
      this.playerMenus.HideMenus();
      this.ThumbsMgr.hideThumbs(this.ThumbsMgr);
    }
  }

  magicMouseEnter() {
    if (!this.fjMainPlayer.isPaused()
    && !this.fjMainPlayer.isEnded()
    && !this.fjMainPlayer.isPlayingAds()) {
      this.videoFigure.setAttribute('controls-hidden', false);
      // delete fadeOut
      this.videoControls.classList.remove('m-fadeOut');
      this.videoInfo.classList.remove('m-fadeOut');
      // add fadein
      this.videoControls.classList.add('m-fadeIn');
      this.videoInfo.classList.add('m-fadeIn');
      // other
      this.video.style.cursor = 'auto';
    }
  }

  magicMouseMove() {
    if (!this.fjMainPlayer.isPaused()
    && !this.fjMainPlayer.isEnded()
     && !this.fjMainPlayer.isPlayingAds()) {
      if (this.video.style.cursor === 'none') {
        this.magicMouseEnter();
      } else {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.magicMouseLeave();
        }, this.HideControlsTimeout);
      }
    }
  }

  SetupSubsAudsManager(mediaplayer) {
    let done = false;
    done = this.playerMenus.SetupAuds(mediaplayer);
    this.logger.warn(' Will setup Audio menu  ', done);
    if (done !== true) {
      document.getElementById(this.audiosBtnId).classList.add('fj-hide');
    } else {
      document.getElementById(this.audiosBtnId).classList.remove('fj-hide');
    }
    done = this.playerMenus.SetupSubs(mediaplayer);
    this.logger.warn(' Will setup Subs menu  ', done);
    if (done !== true) {
      document.getElementById(this.subtitlesBtnId).classList.add('fj-hide');
    } else {
      document.getElementById(this.subtitlesBtnId).classList.remove('fj-hide');
    }
  }
  // ************************************************************************************
  // VOLUME
  // ************************************************************************************

  OnvbClick() {
    const pos = this.volumeBar.value / 100;
    this.logger.log(' volume from ', this.video.volume, ' to ', pos);
    if (pos > 0.6) {
      this.muteBtn.classList.remove('fj-icon-mute');
      this.muteBtn.classList.remove('fj-icon-volDown');
      this.muteBtn.classList.add('fj-icon-volUp');
    } else if (pos > 0) {
      this.muteBtn.classList.remove('fj-icon-mute');
      this.muteBtn.classList.remove('fj-icon-volUp');
      this.muteBtn.classList.add('fj-icon-volDown');
    } else {
      this.muteBtn.classList.remove('fj-icon-volDown');
      this.muteBtn.classList.remove('fj-icon-volUp');
      this.muteBtn.classList.add('fj-icon-mute');
    }
    this.video.volume = pos;
    this.logger.log(' new volume is ', pos);
  }

  onmuteClick() {
    this.video.muted = !this.video.muted;
    if (this.video.muted) {
      this.volumeBar.value = 0;
      this.muteBtn.classList.remove('fj-icon-volDown');
      this.muteBtn.classList.remove('fj-icon-volUp');
      this.muteBtn.classList.add('fj-icon-mute');
    } else if (this.video.volume > 0.6) {
      this.volumeBar.value = this.video.volume * 100;
      this.muteBtn.classList.remove('fj-icon-mute');
      this.muteBtn.classList.remove('fj-icon-volDown');
      this.muteBtn.classList.add('fj-icon-volUp');
    } else {
      this.volumeBar.value = this.video.volume * 100;
      this.muteBtn.classList.remove('fj-icon-mute');
      this.muteBtn.classList.remove('fj-icon-volUp');
      this.muteBtn.classList.add('fj-icon-volDown');
    }
  }

  // ************************************************************************************
  // SEEKING
  // ************************************************************************************
  onprogressClick(event) {
    // var p = this.progressBar.value;
    this.logger.info(' onprogressClick event ', event);
    const rect = this.progressBar.getBoundingClientRect();
    this.logger.info(' onprogressClick mediaDuration ', this.mediaDuration);
    this.logger.info(' onprogressClick rect ', rect);
    const p = (event.pageX - rect.left) * (this.mediaDuration / (rect.right - rect.left));
    this.logger.log(' Seeking from ', Utils.duration(p), '/',
      Utils.duration(this.mediaDuration), 'to', Utils.duration(p), ' sec');
    this.fjMainPlayer.seek(p);
  }

  // ************************************************************************************
  // FULLSCREEN
  // ************************************************************************************
  static isFullScreen() {
    return document.fullscreenElement || document.msFullscreenElement
            || document.mozFullScreen || document.webkitIsFullScreen;
  }

  setFullscreenData(state) {
    this.videoFigure.setAttribute('data-fullscreen', !!state);
  }

  handleFullscreen() {
    // If fullscreen mode is active...
    if (this.constructor.isFullScreen()) {
      // ...exit fullscreen mode
      // (Note: this can only be called on document)
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      this.setFullscreenData(false);
      this.fullScreenBtn.classList.remove('fj-icon-compressScreen');
      this.fullScreenBtn.classList.add('fj-icon-fullScreen');
    } else {
      this.fullScreenBtn.classList.add('fj-icon-compressScreen');
      this.fullScreenBtn.classList.remove('fj-icon-fullScreen');
      // ...otherwise enter fullscreen mode
      // (Note: can be called on document, but here the specific element is used as
      // it will also ensure that the element's
      // children, e.g. the custom controls, go fullscreen also)
      if (this.videoFigure.requestFullscreen) this.videoFigure.requestFullscreen();
      else if (this.videoFigure.mozRequestFullScreen) this.videoFigure.mozRequestFullScreen();
      else if (this.videoFigure.webkitRequestFullScreen) {
        // Safari 5.1 only allows proper fullscreen on the this.video element.
        // This also works fine on other WebKit
        // Zbrowsers as the following CSS (set in styles.css) hides the default
        // controls that appear again, and
        // ensures that our custom controls are visible:
        // figure[data-fullscreen=true]
        // this.video::-webkit-media-controls { display:none !important; }
        // figure[data-fullscreen=true] .controls { z-index:2147483647; }
        this.video.webkitRequestFullScreen();
      } else if (this.videoFigure.msRequestFullscreen) this.videoFigure.msRequestFullscreen();
      this.setFullscreenData(true);
    }
  }

  onFullScreenChange(e) {
    if (e.type === 'fullscreenchange') {
      this.logger.log(' fullscreenchange >>> Full Scren changed Status ', !!(document.fullScreen || document.fullscreenElement));
      this.setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
    }
    if (e.type === 'webkitfullscreenchange') {
      this.logger.log(' webkitfullscreenchange >>> Full Scren changed Status ', !!document.webkitIsFullScreen);
      this.setFullscreenData(!!document.webkitIsFullScreen);
    }
    if (e.type === 'mozfullscreenchange') {
      this.logger.log(' mozfullscreenchange >>> Full Scren changed Status ', !!document.mozFullScreen);
      this.setFullscreenData(!!document.mozFullScreen);
    }
    if (e.type === 'msfullscreenchange') {
      this.logger.log(' msfullscreenchange >>> Full Scren changed Status ', !!document.msFullscreenElement);
      this.setFullscreenData(!!document.msFullscreenElement);
    }
  }

  // ************************************************************************************
  // PUBLIC API
  // ************************************************************************************
  goForError() {
    // used to prepare to show error
    this.magicMouseLeave();
    this.BigPlayBtn.classList.add('fj-hide');
  }

  setVolume(value) {
    if (typeof value === 'number') {
      this.volumebar.value = value;
    }
    const pos = this.volumeBar.value / 100;
    this.logger.log(' volume from ', this.video.volume, ' to ', pos);

    if (pos > 0.6) {
      this.muteBtn.classList.remove('fj-icon-mute');
      this.muteBtn.classList.remove('fj-icon-volDown');
      this.muteBtn.classList.add('fj-icon-volUp');
    } else if (pos > 0) {
      this.muteBtn.classList.remove('fj-icon-mute');
      this.muteBtn.classList.remove('fj-icon-volUp');
      this.muteBtn.classList.add('fj-icon-volDown');
    } else {
      this.muteBtn.classList.remove('fj-icon-volDown');
      this.muteBtn.classList.remove('fj-icon-volUp');
      this.muteBtn.classList.add('fj-icon-mute');
    }

    this.video.volume = pos;
    this.logger.log(' new volume is ', pos);
  }

  setDuration(value) {
    // this.logger.log(`Will setDuration to ${value}`);
    if (!Number.isNaN(value)) {
      this.mediaDuration = value;
      this.durationDisplay.textContent = Utils.duration(value);
      this.progressBar.max = value;
    }
  }

  UpdateProgress(value) {
    if (!Number.isNaN(value)) {
      this.timer.textContent = Utils.duration(value);
      this.progressBar.value = value;
    }
  }

  // set Sharing icon
  setShareIcon(shareUrl) {
    if (shareUrl !== null && shareUrl !== undefined && shareUrl !== '') {
      this.logger.log(`Will show Share icon to ${shareUrl}`);
      document.getElementById(this.shareId).style.display = 'block';
      document.getElementById(this.shareId).addEventListener('click', () => {
        window.open(shareUrl);
      });
    } else {
      this.logger.log('Will NOT show Share icon');
      document.getElementById(this.shareId).style.display = 'none';
    }
  }

  // set Downloading icon
  setDownloadIcon(DownUrl) {
    if (DownUrl !== null && DownUrl !== undefined && DownUrl !== '') {
      this.logger.log(`Will show Download icon to ${DownUrl}`);
      document.getElementById(this.downloadId).style.display = 'block';
      document.getElementById(this.downloadId).addEventListener('click', () => {
        window.open(DownUrl);
      });
    } else {
      this.logger.log('Will NOT show Download icon');
      document.getElementById(this.downloadId).style.display = 'none';
    }
  }

  // set back icon
  setBackIcon(BackUrl) {
    if (BackUrl !== null && BackUrl !== undefined && BackUrl !== '') {
      this.logger.log(`Will show Back icon to ${BackUrl}`);
      document.getElementById(this.backId).style.display = 'block';
      document.getElementById(this.backId).addEventListener('click', () => {
        window.location = BackUrl;
      });
    } else {
      this.logger.log('Will NOT show Back icon');
      document.getElementById(this.backId).style.display = 'none';
    }
  }

  setTitle(ltitle, ShowUpTitle) {
    document.getElementById(this.titleId).innerHTML = ltitle;
    document.getElementById(this.descriptionId).innerHTML = ltitle;
    if (ShowUpTitle) {
      this.logger.log('Will  show title Up');
      document.getElementById(this.titleId).style.display = 'block';
    } else {
      this.logger.log('Will NOT show title Up');
      document.getElementById(this.titleId).style.display = 'none';
    }
  }

  getVideo() {
    return this.video;
  }

  getErrorDivId() {
    return this.errorDivId;
  }

  getAdsContainerDivId() {
    return this.adsContainerDivId;
  }

  getOverlaysContainerDivId() {
    return this.overlaysContainerDivId;
  }

  SetupThumbsManager(videoDuration, thumbsTrackIndex) {
    if (thumbsTrackIndex !== null) {
      return this.ThumbsMgr.Setup(this.getVideo(), videoDuration, thumbsTrackIndex);
    }
    return this.ThumbsMgr.reset();
  }

  getVideoFigure() {
    return this.videoControllerFigure;
  }

  onResizeWindow() {
    const intViewportWidth = window.innerWidth;
    // const intViewportHeight = window.innerHeight;
    const newPercentage = `${(intViewportWidth / this.holdWidth) * 100}%`;
    const fjplayer = document.getElementById('playercontainer');
    fjplayer.style.fontSize = newPercentage;
    this.logger.log(this.holdWidth, ' RESIED !!!!!!!!!!!!! ', intViewportWidth, '/', this.holdWidth, '>>>>>', newPercentage);
  }

  onLoadWindow() {
    this.logger.log(this.holdWidth, ' LOADED ##########################');
    this.holdWidth = window.innerWidth;
  }

  initialize(mainPlayer) {
    this.create(this.videoContainerId);
    this.fjMainPlayer = mainPlayer;
    if (!this.fjMainPlayer) {
      throw new Error('Please pass an instance of player when instantiating');
    }

    this.playerMenus = new Menus(
      this.video,
      this.subtitlesBtnId,
      this.audiosBtnId,
      this.menuContainerDivId,
    );

    // OverlaysMgr = new Overlays(this.video,
    //    document.getElementById(this.overlaysContainerDivId));
    this.videoControllerFigure.addEventListener('mouseleave', () => this.magicMouseLeave());
    this.videoControllerFigure.addEventListener('mouseenter', () => this.magicMouseEnter());
    this.videoControllerFigure.addEventListener('mousemove', () => this.magicMouseMove());
    this.BigPlayBtn.addEventListener('click', () => this.onplaypauseClick());
    this.video.addEventListener('click', () => this.onplaypauseClick());
    this.video.addEventListener('dblclick', () => this.handleFullscreen());
    this.volumeBar.addEventListener('click', () => this.OnvbClick());
    this.playpauseBtn.addEventListener('click', () => this.onplaypauseClick());
    this.playpreviousBtn.addEventListener('click', () => this.onperviousClick());
    this.playforwardBtn.addEventListener('click', () => this.onforwardClick());
    this.muteBtn.addEventListener('click', () => this.onmuteClick());
    this.fullScreenBtn.addEventListener('click', () => this.handleFullscreen());
    this.progressBar.addEventListener('click', (event) => this.onprogressClick(event));

    // window.addEventListener('resize', () => onResizeWindow());
    // window.addEventListener('load', v onResizeWindow()); // too late to catch event

    document.addEventListener('fullscreenchange', (event) => this.onFullScreenChange(event));
    document.addEventListener('MSFullscreenChange', (event) => this.onFullScreenChange(event));
    document.addEventListener('mozfullscreenchange', (event) => this.onFullScreenChange(event));
    document.addEventListener('webkitfullscreenchange', (event) => this.onFullScreenChange(event));

    // progress bar
    this.progressBar.min = 0;
    this.progressBar.step = 0.01;
    this.progressBar.value = 0;
    // volume bar
    this.volumeBar.min = 0;
    this.volumeBar.step = 1;
    this.volumeBar.max = 100;
    this.volumeBar.value = 100;
    this.initialized = true;

    // hide some component
    document.getElementById(this.titleId).display = 'none';
  }

  hideVideo() {
    this.BigPlayBtn.style.display = 'none';
    this.videoInfo.style.display = 'none';
    this.video.style.display = 'none';
    this.videoController.style.display = 'none';
  }

  ShowVideo() {
    this.BigPlayBtn.style.display = 'block';
    this.videoInfo.style.display = 'block';
    this.video.style.display = 'block';
    this.videoController.style.display = 'block';
  }

  ShowSpinner() {
    this.spinner.classList.remove('fj-hide');
  }

  HideSpinner() {
    if (this.spinner.classList.contains('fj-hide') === false) {
      this.spinner.classList.add('fj-hide');
    }
  }

  disable() {
    this.videoController.classList.add('disable');
  }

  enable() {
    this.videoController.classList.remove('disable');
  }

  getVideoCaption() {
    const ele = document.getElementById(this.videoCaptionId);
    return ele;
  }

  reset() {
    if (this.initialized !== true) {
      this.logger.warn('not yet this.initialized');
      return;
    }
    this.logger.warn(' >>> Resetting player ui !!');
    this.ThumbsMgr.reset();
    // OverlaysMgr = new Overlays(this.video,
    //    document.getElementById(this.overlaysContainerDivId));
    this.videoControllerFigure.removeEventListener('mouseleave', this.magicMouseLeave);
    this.videoControllerFigure.removeEventListener('mouseenter', this.magicMouseEnter);
    this.videoControllerFigure.removeEventListener('mousemove', this.magicMouseMove);

    this.BigPlayBtn.removeEventListener('click', this.onplaypauseClick);
    this.video.removeEventListener('click', this.onplaypauseClick);
    this.video.removeEventListener('dblclick', this.handleFullscreen);
    this.volumeBar.removeEventListener('click', this.OnvbClick);
    this.playpauseBtn.removeEventListener('click', this.onplaypauseClick);
    this.muteBtn.removeEventListener('click', this.onmuteClick);
    this.fullScreenBtn.removeEventListener('click', this.handleFullscreen);
    this.progressBar.removeEventListener('click', this.onprogressClick);

    /*
        window.removeEventListener('resize', onResizeWindow);
        window.removeEventListener('load', onResizeWindow);
        */

    document.removeEventListener('fullscreenchange', this.onFullScreenChange);
    document.removeEventListener('MSFullscreenChange', this.onFullScreenChange);
    document.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);

    this.toggleplaypauseBtn();
  }
}

module.exports = PlayerUi;
