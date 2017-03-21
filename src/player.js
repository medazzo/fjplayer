import Logger from './Logger';
import Playlist from './playlist';
import * as Const from './constants';
require('./player.css');
require('font-awesome/css/font-awesome.css');
/**
 *  Class player in whinch the player is implemented
 */
function Player(fjID, videoContainerId, playerexpandScreen) {
    this.logger = new Logger(this);
    this.expandScreen = playerexpandScreen;
    this.FJid = fjID;
    this.videoContainerId = videoContainerId;
    this.id = new Date().valueOf() + '_' + Math.random();
    this.timerId = 'trd' + this.id;
    this.titleId = 'tld' + this.id;
    this.BigPlayBtnId = 'bp' + this.id;
    this.videoInfoId = 'vi' + this.id;
    this.videoFigureId = 'vf' + this.id;
    this.videoId = 'vo' + this.id;
    this.videoControlsId = 'vc' + this.id;
    this.playpauseBtnId = 'pp' + this.id;
    this.muteBtnId = 'mb' + this.id;
    this.volumeBarId = 'vb' + this.id;
    this.volumeDivId = 'vd' + this.id;
    this.progressDivId = 'pd' + this.id;
    this.progressBarId = 'pb' + this.id;
    this.fullScreenBtnId = 'fs' + this.id;
    this.expandBtnId = 'eb' + this.id;
    this.subtitlesBtnId = 'sb' + this.id;
    this.languagesBtnId = 'lb' + this.id;
    this.thumbsDivId = 'td' + this.id;
    this.thumbsImgId = 'ti' + this.id;
    this.expandDivId = 'ed' + this.id;
    this.languagesDivId = 'ld' + this.id;
    this.subsdMenuContainerDivId = 'smcd' + this.id;
    this.subtitlesDivId = 'sd' + this.id;
    this.subsMenuDivId = 'smmd' + this.id;
    this.subsMenuListId = 'smml' + this.id;
    this.audMenuContainerDivId = 'amcd' + this.id;
    this.audMenuDivId = 'ammd' + this.id;
    this.audMenuListId = 'amml' + this.id;
    // prepare player
    if (!this.uidone) {
        this.setUi();
        // Set components
        this.setComponents();
        // set setCallbacks
        this.setCallbacks();
    }
};
// constantes member of class
Player.prototype.playlistLoaded = false;
Player.prototype.fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled ||
    document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled ||
    document.createElement('video').webkitRequestFullScreen);
Player.prototype.containsSubs = false;
Player.prototype.timeout = null;
Player.prototype.productionMode = false;
if (Player.prototype.productionMode) {
    Player.prototype.HideControlsTimeout = 4000;
} else {
    Player.prototype.HideControlsTimeout = 8000;
}
Player.prototype.thumbsTrackIndex = -1;
Player.prototype.isHidden = false;
Player.prototype.Playerheight = 0;
Player.prototype.PlayerWidth = 0;
Player.prototype.isStarted = false;
Player.prototype.src = null;
Player.prototype.poster = null;
Player.prototype.title = null;
Player.prototype.fullScreenOnStart = false;
Player.prototype.supportsVideo = !!document.createElement('video').canPlayType;
Player.prototype.uidone = false;
/* ****************** P R I V A T E * * * * F U N C T I O N S ****************** */
/**
 * Fonction to prepare the UI and set Html content of player container
 */
Player.prototype.setUi = function() {
    var inHtml = '';
    if (this.uidone) {
        return;
    }
    inHtml =
        '<figure id=\"' + this.videoFigureId + '\" data-fullscreen=\"' + this.fullScreenOnStart + '\">' +
        '<video id=\"' + this.videoId + '\" class=\"divofVideo\" ';
    if (this.vwidth != null) {
        inHtml += 'width=\"' + this.vwidth + '\" ';
    }
    if (this.vwidth != null) {
        inHtml += 'height=\"' + this.vheight + '\" ';
    }
    inHtml += '     >' +
        '</video>' +
        '<div class=\"divInfo\" id=\"' + this.videoInfoId + '\">' +
        '<span class=\" clickable divTspanitle divconeontrolLeft fa fa-arrow-left\"> </span>' +
        '<p class=\" divTspanitleSeparator divconeontrolLeft \"> </p>' +
        '<div id=\"' + this.titleId + '\" class=\"fjcontrols-control-text clickable ' +
        'divTspanitle divconeontrolLeft\"> </div>' +
        '<span class=\" clickable divTspanitle divconeontrolRight fa fa-share-alt \"> </span>' +
        '<p class=\" divTspanitleSeparator divconeontrolRight \"> </p>' +
        '<span class=\" clickable divTspanitle divconeontrolRight  fa  fa-download \"> </span>' +
        '</div>' +
        '<div class=\"divBigPlayBtn\" id=\"' + this.BigPlayBtnId + '\">' +
        '<span class=\" clickable divTspanitle  divconeontrolLeft fa fa-3x fa-play \"> </span>' +
        '</div>' +
        '<div class=\"fjcontrols-panel\" id=\"' + this.videoControlsId + '\">' +
        '<div class=\"fjcontrols-panel-controls\">' +
        '<div class=\"hprogressbar\" id=\"' + this.progressDivId + '\">' +
        '<input class=\"clickable\" id=\"' + this.progressBarId + '\" type=\"range\"  />' +
        '</div>' +
        '</div>' +
        '<div class=\"fjcontrols-control divconeontrolIcon divconeontrolLeft clickable \">' +
        '<span id=\"' + this.playpauseBtnId + '\"  class=\"fa fa-play\" title=\"Play\" ></span>' +
        '</div>' +
        '<div  class=\"fjcontrols-control divconeontrolIcon divconeontrolLeft clickable\">' +
        '<span id=\"' + this.muteBtnId + '\" title=\"volume-full\" class=\"fa fa-volume-up\"></span>' +
        '</div>' +
        '<div class=\"fjcontrols-control\">' +
        '<div class=\"volumebar\" id=\"' + this.volumeDivId + '\">' +
        '<input  class=\"clickable\"  id=\"' + this.volumeBarId + '\" type=\"range\" />' +
        '</div>' +
        '</div>' +
        '<div class=\"fjcontrols-control\">' +
        '<div id=\"' + this.timerId + '\" class=\"fjcontrols-control fjcontrols-control-text\">' +
        '<span>0:00:00</span><span>/</span><span>0:00:00</span>' +
        '</div>' +
        '</div>' +
        '<div class=\"fjcontrols-control divconeontrolIcon fjcontrols-control-right clickable\">' +
        '<span  id=\"' + this.fullScreenBtnId + '\"  title=\"Fullscreen\" class=\"fa fa-arrows-alt\" ></span>' +
        '</div>' +
        '<div id=\"' + this.expandDivId + '\" class=\"fjcontrols-control divconeontrolIcon ' +
        'fjcontrols-control-right clickable\">' +
        '<span id=\"' + this.expandBtnId + '\"  class=\"fa fa-expand\" title=\"Double player size\" ></span>' +
        '</div>' +
        '<div id=\"' + this.subtitlesDivId + '\"  class=\"fjcontrols-control divconeontrolIcon ' +
        'fjcontrols-control-right clickable\">' +
        '<span id=\"' + this.subtitlesBtnId + '\"  class=\"fa fa-audio-description\" title=\"subtitles\" ></span>' +
        '</div>' +
        '<div id=\"' + this.languagesDivId + '\"  class=\"fjcontrols-control divconeontrolIcon ' +
        'fjcontrols-control-right clickable\">' +
        '<span id=\"' + this.languagesBtnId + '\"  class=\"fa fa-language\" title=\"audios\" ></span>' +
        '</div>' +
        '</div>' +
        '<div class=\"thumbsBlockDiv\" id=\"' + this.thumbsDivId + '\" >' +
        '<span class=\"thumbsBlock\" id=\"' + this.thumbsImgId + '\" ></span>' +
        '</div>' +
        '<div id=\"' + this.audMenuContainerDivId + '\" ></div>' +
        '<div id=\"' + this.subsdMenuContainerDivId + '\" ></div>' +
        '</div>' +
        '</figure>';
    this.logger.info(' container if of the player ', this.videoContainerId);
    this.videoContainer = document.getElementById(this.videoContainerId);
    this.videoContainer.className = ' fjPlayer ';
    this.videoContainer.innerHTML = inHtml;
    this.logger.log(' UI is created !! ', this.videoContainer);
    this.uidone = true;
};
/**
 * Set component of player UI
 */
Player.prototype.setComponents = function() {
    var item = null;
    // Obtain handles to main elements
    this.video = document.getElementById(this.videoId);
    this.playpauseBtn = document.getElementById(this.playpauseBtnId);
    this.subtitlesBtn = document.getElementById(this.subtitlesBtnId);
    this.languagesBtn = document.getElementById(this.languagesBtnId);
    this.muteBtn = document.getElementById(this.muteBtnId);
    this.volumeBar = document.getElementById(this.volumeBarId);
    this.progressDiv = document.getElementById(this.progressDivId);
    this.progressBar = document.getElementById(this.progressBarId);
    this.fullScreenBtn = document.getElementById(this.fullScreenBtnId);
    this.timer = document.getElementById(this.timerId);
    this.title = document.getElementById(this.titleId);
    this.logger.info(' here is the title ', this.title);
    this.videoInfo = document.getElementById(this.videoInfoId);
    this.videoFigure = document.getElementById(this.videoFigureId);
    this.BigPlayBtn = document.getElementById(this.BigPlayBtnId);

    this.thumbsDiv = document.getElementById(this.thumbsDivId);
    this.thumbsDiv.style.visibility = 'hidden';
    this.tumbsImg = document.getElementById(this.thumbsImgId);
    this.expandDiv = document.getElementById(this.expandDivId);
    this.expandDiv.style.visibility = 'hidden';
    this.audMenuDiv = document.getElementById(this.audMenuContainerDivId);
    this.audMenuDiv.style.visibility = 'hidden';
    this.subsMenuDiv = document.getElementById(this.subsdMenuContainerDivId);
    this.subsMenuDiv.style.visibility = 'hidden';

    this.videoControls = document.getElementById(this.videoControlsId);
    this.videoControls.style.display = 'none';
    // Hide the default controls
    this.video.controls = false;
    // hide subs  and aud btns
    item = document.getElementById(this.subtitlesDivId);
    item.style.visibility = 'hidden';
    item = document.getElementById(this.languagesDivId);
    item.style.visibility = 'hidden';

    // Display the user defined video controls
    // this.videoControls.style.display = 'block';
    if (this.fullScreenOnStart === 'true') {
        this.videoFigure.setAttribute('data-fullscreen', 'true');
    }
    // If the browser doesn't support the Fulscreen API then hide the fullscreen button
    if (!this.fullScreenEnabled) {
        this.fullScreenBtn.style.display = 'none';
    }
    // set expand
    if (!this.expandScreen) {
        this.expandDiv.style.display = 'none';
    }
};
/**
 * Set Callbacks of the player
 */
Player.prototype.setCallbacks = function() {
    var self = this;
    // Big play btn
    this.BigPlayBtn.addEventListener('click', Player.prototype.BigPlayBtnCbx);

    // video click
    this.video.addEventListener('click', function(e) {
        self.onplaypauseClick(self);
    });

    // video double click
    this.video.addEventListener('dblclick', function(e) {
        self.handleFullscreen(self);
    });

    // React to the user clicking within the volume bar
    this.volumeBar.addEventListener('click', function(e) {
        self.OnvbClick(e, self);
    });
    // Wait for the video's meta data to be loaded, then set the
    // progress bar's max value to the duration of the video
    this.video.addEventListener('loadedmetadata', function(e) {
        self.InitPlayer(self);
    });
    // Add events for play button
    this.playpauseBtn.addEventListener('click', function(e) {
        self.onplaypauseClick(self);
    });
    // add event for mute
    this.muteBtn.addEventListener('click', function(e) {
        self.onmuteClick(self);
    });
    // add event for fullscreen
    this.fullScreenBtn.addEventListener('click', function(e) {
        self.handleFullscreen(self);
    });
    // As the video is playing, update the progress bar
    this.video.addEventListener('timeupdate', function(e) {
        self.onvideoTimeupdate(self);
    });
    // React to the user clicking within the progress bar
    this.progressBar.addEventListener('click', function(e) {
        self.onprogressClick(e, self);
    });
    // listen to mouse moving to hide or show panel
    this.video.addEventListener('mousemove', function(e) {
        self.magicMouse(self);
    });

    // Only add the events if addEventListener is supported
    // (IE8 and less don't support it, but that will use Flash anyway)
    if (document.addEventListener) {
        // Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
        document.addEventListener('fullscreenchange', function(e) {
            self.setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
        });
        document.addEventListener('webkitfullscreenchange', function() {
            self.setFullscreenData(!!document.webkitIsFullScreen);
        });
        document.addEventListener('mozfullscreenchange', function() {
            self.setFullscreenData(!!document.mozFullScreen);
        });
        document.addEventListener('msfullscreenchange', function() {
            self.setFullscreenData(!!document.msFullscreenElement);
        });
    }
};
/**
 * Fonction to return a human redeable duration of secondes
 */
Player.prototype.duration = function(secDuration) {
    var secNum = parseInt(secDuration, 10); // don't forget the second param
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
    var seconds = secNum - (hours * 3600) - (minutes * 60);

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (hours === 0) {
        return (minutes + ':' + seconds);
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    return (hours + ':' + minutes + ':' + seconds);
};
/* ****************** C A L L B A C K S * * * * F U N C T I O N S ****************** */
Player.prototype.BigPlayBtnCbx = function(event) {
    self.BigPlayBtn.style.display = 'none';
    self.videoControls.style.display = 'block';
    self.onplaypauseClick(self);
};
/**
 * Event CALLBACK ; called on play pause button Click
 */
Player.prototype.onplaypauseClick = function(self) {
    if (!self.isStarted) {
        self.isStarted = true;
    }
    if (self.video.paused || self.video.ended) {
        self.playpauseBtn.className = 'fa  fa-pause';
        self.video.play();
    } else {
        self.playpauseBtn.className = 'fa  fa-play';
        self.video.pause();
    }
    self.logger.log('clicking pause/play !');
};
/**
 * Set the video container's fullscreen state
 */
Player.prototype.setFullscreenData = function(state) {
    this.videoFigure.setAttribute('data-fullscreen', !!state);
};
/**
 * Checks if the documenplayercontainert is currently in fullscreen mode
 */
Player.prototype.isFullScreen = function() {
    return !!(document.fullScreen || document.webkitIsFullScreen ||
        document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
};
/**
 * Fonction Called to handle Fullscreen click on button
 */
Player.prototype.handleFullscreen = function(self) {
    // If fullscreen mode is active...
    if (self.isFullScreen()) {
        // ...exit fullscreen mode
        // (Note: this can only be called on document)
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        self.setFullscreenData(false);
        self.fullScreenBtn.className = 'fa fa-arrows-alt';
    } else {
        self.fullScreenBtn.className = 'fa  fa-compress';
        // ...otherwise enter fullscreen mode
        // (Note: can be called on document, but here the specific element is used as
        // it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
        if (self.videoFigure.requestFullscreen) this.videoFigure.requestFullscreen();
        else if (self.videoFigure.mozRequestFullScreen) this.videoFigure.mozRequestFullScreen();
        else if (self.videoFigure.webkitRequestFullScreen) {
            // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit
            // Zbrowsers as the following CSS (set in styles.css) hides the default controls that appear again, and
            // ensures that our custom controls are visible:
            // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
            // figure[data-fullscreen=true] .controls { z-index:2147483647; }
            self.video.webkitRequestFullScreen();
        } else if (self.videoFigure.msRequestFullscreen) self.videoFigure.msRequestFullscreen();
        self.setFullscreenData(true);

    }
};
/**
 * Event CALLBACK ; called on volume Bar Click
 */
Player.prototype.OnvbClick = function(e, self) {
    var pos = self.volumeBar.value / 100;
    self.logger.log(' volume from ', self.video.volume, ' to ', pos);
    if (pos > 0.6) {
        self.muteBtn.className = 'fa fa-volume-up';
    } else if (pos > 0) {
        self.muteBtn.className = 'fa fa-volume-down';
    } else {
        self.muteBtn.className = 'fa fa-volume-off';
    }
    self.video.volume = pos;
    self.logger.log(' new volume is ', pos);
};
/**
 * Event CALLBACK ; called when video metadata are loaeded
 */
Player.prototype.InitPlayer = function(self) {
    var i = 0;
    var track = null;
    // progress bar
    self.progressBar.max = Math.round(self.video.duration);
    self.progressBar.min = 0;
    self.progressBar.step = 1;
    self.progressBar.value = 0;
    // volume bar
    self.volumeBar.min = 0;
    self.volumeBar.step = 1;
    self.volumeBar.max = 100;
    self.volumeBar.value = 100;
    // timer
    self.timer.innerHTML = ' <span>' + self.duration(self.video.currentTime) +
        '</span><span>/</span><span>' + self.duration(self.video.duration) + '</span>';
    // thumbs
    if (self.vttThumbs != null || self.vttThumbs !== undefined) {
        /* add thumbs */
        track = document.createElement('track');
        track.kind = 'metadata';
        track.src = self.vttThumbs;
        self.logger.log(' Appending source thumbs to video', track);

        self.video.appendChild(track);

        self.progressBar.addEventListener('mousemove', function(e) {
            self.renderThumbs(e, self);
        });
        self.progressBar.addEventListener('mouseleave', function() {
            self.hideThumbs(self);
        });
        self.progressBar.addEventListener('mouseover', function() {
            self.showThumbs(self);
        });
    }
    // video tracks
    for (i = 0; i < self.video.textTracks.length; i++) {
        if (self.video.textTracks[i].kind === 'metadata') {
            self.thumbsTrackIndex = i;
            self.video.textTracks[i].mode = 'hidden'; // thanks Firefox
            self.logger.log('metadata @ ', i, '/', self.video.textTracks.length, ' >>> ', self.video.textTracks[i]);
        } else if ((self.video.textTracks[i].kind === 'captions') ||
            (self.video.textTracks[i].kind === 'subtitles')) {
            self.containsSubs = true;
            self.logger.log('find  soustitres  @ ', i, '/', self.video.textTracks.length,
                ' >>> ', self.video.textTracks[i]);
        }
    }
    // subs track
    if (self.subsJsObj) {
        for (i = 0; i < self.subsJsObj.length; i++) {
            /* add thumbs */
            track = document.createElement('track');
            track.kind = 'subtitles';
            track.src = self.subsJsObj[i].src;
            track.srclang = self.subsJsObj[i].srclang;
            track.label = self.subsJsObj[i].label;
            self.logger.log(' Appending source thumbs to video', track);
            self.video.appendChild(track);
        }
    }
    // Init menus
    self.SetSubsMenu(self);
    self.SetAudioMenu(self);
};
/**
 * Event CALLBACK ; called on menu Click
 */
Player.prototype.onshowHideMenu = function(self, menuContainer, ev) {
    menuContainer.style.position = 'absolute';
    menuContainer.style.left = (ev.pageX - 20) + 'px';
    menuContainer.style.top = (ev.pageY - 90) + 'px';

    if (menuContainer.style.display === 'none') {
        menuContainer.style.display = 'block';
    } else {
        menuContainer.style.display = 'none';
    }
    self.logger.log(' Showing or Hiding an menu ', menuContainer);
};
/**
 * Manage click for mute button
 */
Player.prototype.onmuteClick = function(self) {
    self.video.muted = !self.video.muted;
    if (self.video.muted) {
        self.muteBtn.className = 'fa fa-volume-off';
        self.volumeBar.value = 0;
    } else if (self.video.volume > 0.6) {
        self.volumeBar.value = self.video.volume * 100;
        self.muteBtn.className = 'fa fa-volume-up';
    } else {
        self.volumeBar.value = self.video.volume * 100;
        self.muteBtn.className = 'fa fa-volume-down';
    }
};
/**
 *  As the video is playing, update the progress bar
 */
Player.prototype.onvideoTimeupdate = function(self) {
    // For mobile browsers, ensure that the progress element's max attribute is set
    if (self.progressBar.max !== self.video.duration) {
        self.progressBar.max = self.video.duration;
    }
    self.progressBar.value = self.video.currentTime;
    self.timer.innerHTML = ' <span>' + self.duration(self.video.currentTime) +
        '</span><span>/</span><span>' + self.duration(self.video.duration) + '</span>';
};
/**
 *  React to the user clicking within the progress bar
 */
Player.prototype.onprogressClick = function(e, self) {
    var p = Math.round(self.progressBar.value);
    if (self.progressBar.max !== self.video.duration) {
        self.progressBar.max = self.video.duration;
    }
    self.logger.log(' Seeking from ', self.video.currentTime, ':: ', self.video.duration, 'to ', p, ' sec');
    // change current time
    self.video.currentTime = p;
};
/**
 *  hide or show panel controls
 */
Player.prototype.HideControlsCursor = function(self, hideit) {
    if (self.isStarted) {
        if (hideit) {
            self.videoControls.classList.toggle('m-fadeOut');
            self.videoInfo.classList.toggle('m-fadeOut');
            document.body.style.cursor = 'none';
            self.audMenuDiv.style.display = 'none';
            self.subsMenuDiv.style.display = 'none';
            self.isHidden = true;
        } else {
            self.videoControls.classList.toggle('m-fadeIn');
            self.videoInfo.classList.toggle('m-fadeIn');
            document.body.style.cursor = 'auto';
            self.isHidden = false;
        }
    } else {
        self.videoControls.classList.toggle('m-fadeOut');
        self.videoInfo.classList.toggle('m-fadeOut');
        document.body.style.cursor = 'none';
        self.audMenuDiv.style.display = 'none';
        self.subsMenuDiv.style.display = 'none';
        self.isHidden = true;
    }
};
/**
 * Function to manage hiding controls when no activity
 */
Player.prototype.magicMouse = function(self) {
    if (self.timeout) {
        clearTimeout(self.timeout);
    }
    self.timeout = setTimeout(function() {
        if (!self.isHidden) {
            self.HideControlsCursor(self, true);
        }
    }, this.HideControlsTimeout);
    if (self.isHidden) {
        self.HideControlsCursor(self, false);
    }
};
/**
 * Thumbs event Mgt
 */
Player.prototype.showThumbs = function(self) {
    self.thumbsDiv.style.visibility = 'visible';
};
/**
 * Thumbs event Mgt
 */
Player.prototype.hideThumbs = function(self) {
    self.thumbsDiv.style.visibility = 'hidden';
};
/**
 * Thumbs event Mgt
 */
Player.prototype.renderThumbs = function(event, self) {
    // first we convert from mouse to time position ..
    var c, i, url, xywh;
    var rect = self.progressBar.getBoundingClientRect();
    var p = (event.pageX - rect.left) * (self.video.duration / (rect.right - rect.left));
    if ((p > (self.video.duration + 2)) || (p < 0)) {
        // some error ?
        self.logger.error(' Position is bigger than duration >>', p, self.video.duration);
        return;
    }
    // update ui ..then we find the matching cue..
    c = self.video.textTracks[self.thumbsTrackIndex].cues;
    if (c == null) {
        // track eleme,t is not supprted : Firefox
        self.logger.error(' cues is null @ ', self.thumbsTrackIndex, ' not supported , Firefox ?');
        self.logger.error(' Cues are null @', self.video);
        return;
    }

    for (i = 0; i < c.length; i++) {
        if (c[i].startTime <= p && c[i].endTime > p) {
            break;
        };
    }
    // ..next we unravel the JPG url and fragment query..
    xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');

    // ..and last we style the thumbnail overlay
    url = 'url(' + c[i].text.split('#')[0] + ')';
    // self.logger.log(' fetching thum from ', url);
    self.tumbsImg.style.backgroundImage = url;
    self.tumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
    self.tumbsImg.style.width = xywh[2] + 'px';
    self.tumbsImg.style.height = xywh[3] + 'px';

    self.thumbsDiv.style.left = event.pageX - xywh[2] / 2 + 'px';
    self.thumbsDiv.style.top = rect.top - (xywh[3] * 1.5) + 'px';
    self.thumbsDiv.style.width = xywh[2] + 'px';
};
/**
 * cbx Subs Mgt
 */
Player.prototype.activateSubs = function(self, item) {
    var i = 0;
    var k = 0;
    var litem;
    var index = Array.prototype.indexOf.call(self.menuListSubs.childNodes, item);
    var tindex = item.getAttribute('index');
    self.logger.log('clicked is  selected @ index ', index, ' text index ', tindex);
    if (self.video.textTracks) {
        if (self.video.textTracks[tindex].mode === 'showing') {
            self.logger.log('AlREADY  selected @ index ', tindex);
            return;
        }

        for (i = 0; i < self.menuListSubs.children.length; i++) {
            litem = self.menuListSubs.children[i];
            k = litem.getAttribute('index');
            self.logger.log('cheking item @  ', i);
            if (tindex === k) {
                self.video.textTracks[i].mode = 'showing';
                litem.className = 'subtitles-menu-item-actif';
                self.logger.log('Setting item @  ', i);
            } else {
                self.video.textTracks[i].mode = 'hidden';
                litem.className = 'subtitles-menu-item';
                self.logger.log('Unsetting item @  ', i);
            }
        }
    }
    self.subsMenuDiv.style.display = 'none';
};
/**
 * Aubs cbx Mgt
 */
Player.prototype.activateAudio = function(self, item) {
    var i = 0;
    var litem;
    var index = Array.prototype.indexOf.call(self.menuListAud.childNodes, item);
    var tindex = item.getAttribute('index');
    self.logger.log('clicked is  selected @ index ', index, ' text index ', tindex);
    if (self.video.audioTracks) {
        if (self.video.audioTracks[index].enabled) {
            self.logger.log('AlREADY  selected @ index ', tindex);
            return;
        }

        for (i = 0; i < self.menuListAud.children.length; i++) {
            litem = self.menuListAud.children[i];
            self.logger.log('cheking item @  ', i);
            if (i === index) {
                self.video.audioTracks[i].enabled = true;
                litem.className = 'subtitles-menu-item-actif';
                self.logger.log('Setting item @  ', i);
            } else {
                self.video.audioTracks[i].enabled = false;
                litem.className = 'subtitles-menu-item';
                self.logger.log('Unsetting item @  ', i);
            }
        }
    }
    self.audMenuDiv.style.display = 'none';
};
/**
 * Aubs cbx Mgt
 */
Player.prototype.SetAudioMenu = function(self) {
    var i = 0;
    var item = null;
    var btn = null;
    var container = document.getElementById(self.audMenuContainerDivId);
    container.style.display = 'none';
    if ((!self.video.audioTracks) || (self.video.audioTracks.length <= 1)) {
        // hide audio button
        btn = document.getElementById(self.languagesDivId);
        btn.style.display = 'none';
        self.logger.log(' Audio Menu not created !');
        return;
    }
    // Add events for languages button
    self.languagesBtn.addEventListener('click', function(ev) {
        self.onshowHideMenu(self, self.audMenuDiv, ev);
    });

    container.className = 'settingMenuDiv';
    container.innerHTML =
        '<div class=\"settingMenuSubMenuLeft\" >' +
        '<ul class=\"subtitles-menu\" id=\"' + self.audMenuListId + '\" >' +
        '</ul>	' +
        '</div>';

    // video array
    self.menuListAud = document.getElementById(self.audMenuListId);
    if (self.video.audioTracks) {
        for (i = 0; i < self.video.audioTracks.length; i++) {
            item = document.createElement('li');
            if (self.video.audioTracks[i].enabled) {
                item.className = 'subtitles-menu-item-actif';
            } else {
                item.className = 'subtitles-menu-item';
            }
            item.innerHTML = self.video.audioTracks[i].language + '::' + self.video.audioTracks[i].label;
            self.menuListAud.appendChild(item);
            item.addEventListener('click', function(ev) {
                self.activateAudio(self, this);
            });
        }
    }
    self.logger.log(' Audio Menu created !', self.video.audioTracks.length, '! ', self.menuListAud);
};
/**
 * Subs cbx Mgt
 */
Player.prototype.SetSubsMenu = function(self) {
    var i = 0;
    var item = null;
    var foundsubs = false;
    var container = document.getElementById(self.subsdMenuContainerDivId);

    // video array
    self.menuListSubs = document.getElementById(self.subsMenuListId);
    for (i = 0; i < self.video.textTracks.length; i++) {
        if ((self.video.textTracks[i].kind === 'captions') ||
            (self.video.textTracks[i].kind === 'subtitles')) {
            foundsubs = true;
            item = document.createElement('li');
            if (self.video.textTracks[i].mode === 'showing') {
                item.className = 'subtitles-menu-item-actif';
            } else {
                item.className = 'subtitles-menu-item';
            }
            item.setAttribute('index', i);
            item.innerHTML = self.video.textTracks[i].label;
            self.menuListSubs.appendChild(item);
            item.addEventListener('click', function(ev) {
                self.activateSubs(self, this);
            });
            self.logger.log('Setting Subs List @ ', i, ' item is ', item);
        }
    }
    if (foundsubs === true) {
        // Add events for subtitles button
        self.subtitlesBtn.addEventListener('click', function(ev) {
            self.onshowHideMenu(self, self.subsMenuDiv, ev);
        });

        container.className = 'settingMenuDiv';
        container.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + self.subsMenuListId + '\" >' +
            '</ul>	' +
            '</div>';
        container.style.display = 'none';
        self.logger.log(' Subs Menu  created !! ', self.menuListSubs);
    } else {
        self.logger.log(' Subs Menu Not created !! ');
    }
};

/* ****************** P U B L I C S * * * * F U N C T I O N S ****************** */
/**
 *
 */
Player.prototype.setdimension = function(width, height) {
    this.PlayerWidth = width;
    this.playerHeight = height;
    // todo
};
/**
 *
 */
Player.prototype.loadPlaylist = function(playlist) {
    this.logger.log(' start  function ');
    if (!this.supportsVideo) {
        this.logger.error(' browser did not support video !');
        return false;
    }
    if (playlist instanceof Playlist) {
        this.Playlist = playlist;
        this.playlistLoaded = true;
        return true;
    }
    this.playlistLoaded = false;
    return false;
};
/**
 *
 */
Player.prototype.playAt = function(index) {
    var item;
    var source;
    if (!this.playlistLoaded) {
        this.logger.error(' No playlist is loaded on player ');
        return false;
    }
    item = this.Playlist.getItem(index);
    if (item === undefined) {
        this.logger.error(' No item to play at index ', index,
            ' playlist is sized ', this.Playlist.getSize());
        return false;
    }
    /* Set UI */
    this.title.innerHTML = item[Const.FJCONFIG_TITLE];
    /* Set Video */
    if ((item[Const.FJCONFIG_POSTER] !== undefined) && (item[Const.FJCONFIG_POSTER] != null)) {
        this.video.setAttribute('poster', item[Const.FJCONFIG_POSTER]);
        this.poster = item[Const.FJCONFIG_POSTER];
    }
    if (item[Const.FJCONFIG_SRC] != null || item[Const.FJCONFIG_SRC] !== undefined) {
        source = document.createElement('source');
        source.src = item[Const.FJCONFIG_SRC];
        if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
            // TODO
        }
        source.type = item[Const.FJCONFIG_TYPE]; // 'video/mp4';
        this.logger.log(' Appending source to video', source);
        this.video.appendChild(source);

        // play
        this.BigPlayBtn.style.display = 'none';
        this.videoControls.style.display = 'block';
        this.onplaypauseClick(this);
        return true;
    }
    this.logger.error('src of item is not valid , at index ', index);
    return false;
};

export default Player;