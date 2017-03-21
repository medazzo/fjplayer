(function() {
    'use strict';
    /**
     *  Fjplayer Namespace
     */
    var fjplayer = fjplayer || {};

    /**
     * Constructor of the player : will prepare ids
     */
    fjplayer = function(videoContainerId, usedSkin, expandScreen, vwidth, vheight) {
        var id = new Date().valueOf() + '_' + Math.random();
        // Check if the browser supports the Fullscreen API
        this.fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled ||
            document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled ||
            document.createElement('video').webkitRequestFullScreen);
        this.expandScreen = expandScreen;
        this.containsSubs = false;
        this.timeout = null;
        this.productionMode = false;
        if (this.productionMode) {
            this.HideControlsTimeout = 4000;
        } else {
            this.HideControlsTimeout = 8000;
        }
        self.thumbsTrackIndex = -1;
        this.isHidden = false;
        this.vheight = vheight;
        this.vwidth = vwidth;
        this.isStarted = false;
        this.src = null;
        this.poster = null;
        this.title = null;
        this.fullScreenOnStart = false;
        this.supportsVideo = !!document.createElement('video').canPlayType;
        this.uidone = false;
        this.videoContainerId = videoContainerId;
        this.playerUsedSkin = usedSkin;
        this.timerId = 'trd' + id;;
        this.BigPlayBtnId = 'bp' + id;;
        this.videoInfoId = 'vi' + id;
        this.videoFigureId = 'vf' + id;
        this.videoId = 'vo' + id;
        this.videoControlsId = 'vc' + id;
        this.playpauseBtnId = 'pp' + id;
        this.muteBtnId = 'mb' + id;
        this.volumeBarId = 'vb' + id;
        this.volumeDivId = 'vd' + id;
        this.progressDivId = 'pd' + id;
        this.progressBarId = 'pb' + id;
        this.fullScreenBtnId = 'fs' + id;
        this.expandBtnId = 'eb' + id;
        this.subtitlesBtnId = 'sb' + id;
        this.languagesBtnId = 'lb' + id;
        this.thumbsDivId = 'td' + id;
        this.thumbsImgId = 'ti' + id;
        this.expandDivId = 'ed' + id;
        this.languagesDivId = 'ld' + id;

        this.subsdMenuContainerDivId = 'smcd' + id;
        this.subtitlesDivId = 'sd' + id;
        this.subsMenuDivId = 'smmd' + id;
        this.subsMenuListId = 'smml' + id;

        this.audMenuContainerDivId = 'amcd' + id;
        this.audMenuDivId = 'ammd' + id;
        this.audMenuListId = 'amml' + id;
        this.aboutMenuId = 'abm' + id;
    };

    /**
     * Fonction to prepare the UI and set Html content of player container
     */
    fjplayer.prototype.setUi = function() {
        if (this.uidone) {
            return;
        }
        var inHtml =
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
            '<p class=\" clickable divTspanitle divconeontrolLeft\">' + this.title + ' </p>' +
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
            '<div id=\"' + this.expandDivId + '\" class=\"fjcontrols-control divconeontrolIcon fjcontrols-control-right clickable\">' +
            '<span id=\"' + this.expandBtnId + '\"  class=\"fa fa-expand\" title=\"Double player size\" ></span>' +
            '</div>' +
            '<div id=\"' + this.subtitlesDivId + '\"  class=\"fjcontrols-control divconeontrolIcon fjcontrols-control-right clickable\">' +
            '<span id=\"' + this.subtitlesBtnId + '\"  class=\"fa fa-audio-description\" title=\"subtitles\" ></span>' +
            '</div>' +
            '<div id=\"' + this.languagesDivId + '\"  class=\"fjcontrols-control divconeontrolIcon fjcontrols-control-right clickable\">' +
            '<span id=\"' + this.languagesBtnId + '\"  class=\"fa fa-language\" title=\"audios\" ></span>' +
            '</div>' +
            '</div>' +
            '<div class=\"thumbsBlockDiv\" id=\"' + this.thumbsDivId + '\" >' +
            '<span class=\"thumbsBlock\" id=\"' + this.thumbsImgId + '\" ></span>' +
            '</div>' +
            '<div id=\"' + this.audMenuContainerDivId + '\" ></div>' +
            '<div id=\"' + this.subsdMenuContainerDivId + '\" ></div>' +
            '<div id=\"' + this.aboutMenuId + '\"  style=\"display:none;\"><ul><li>voila </li><li>voili</li></ul></div>' +
            '</div>' +
            '</figure>';
        this.videoContainer = document.getElementById(this.videoContainerId);
        this.videoContainer.className = ' fjPlayer ' + this.playerUsedSkin;
        this.videoContainer.innerHTML = inHtml;
        // console.log( ' UI is created !! ',this.videoContainer);
        this.uidone = true;
    };

    /**
     * Event CALLBACK ; called when video metadata are loaeded
     */
    fjplayer.prototype.InitPlayer = function(self) {
        var i = 0;
        var track = null;
        var track2 = null;
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
            console.log(' Appending source thumbs to video', track);

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
                console.log('metadata @ ', i, '/', self.video.textTracks.length, ' >>> ', self.video.textTracks[i]);
            } else if ((self.video.textTracks[i].kind === 'captions') ||
                (self.video.textTracks[i].kind === 'subtitles')) {
                self.containsSubs = true;
                console.log('find  soustitres  @ ', i, '/', self.video.textTracks.length,
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
                console.log(' Appending source thumbs to video', track);
                self.video.appendChild(track);
            }
        }
        // Init menus
        self.SetSubsMenu(self);
        self.SetAudioMenu(self);
    };

    /**
     * Event CALLBACK ; called on volume Bar Click
     */
    fjplayer.prototype.OnvbClick = function(e, self) {
        var pos = self.volumeBar.value / 100;
        console.log(' volume from ', self.video.volume, ' to ', pos);
        if (pos > 0.6) {
            self.muteBtn.className = 'fa fa-volume-up';
        } else if (pos > 0) {
            self.muteBtn.className = 'fa fa-volume-down';
        } else {
            self.muteBtn.className = 'fa fa-volume-off';
        }
        self.video.volume = pos;
        console.log(' new volume is ', pos);
    };

    /**
     * Event CALLBACK ; called on play pause button Click
     */
    fjplayer.prototype.onplaypauseClick = function(self) {
        if (!this.isStarted) {
            this.isStarted = true;
        }
        if (self.video.paused || self.video.ended) {
            self.playpauseBtn.className = 'fa  fa-pause';
            self.video.play();
        } else {
            self.playpauseBtn.className = 'fa  fa-play';
            self.video.pause();
        }
        console.log('clicking pause/play !');
    };

    /**
     * Event CALLBACK ; called on menu Click
     */
    fjplayer.prototype.onshowHideMenu = function(menuContainer, ev) {
        menuContainer.style.position = "absolute";
        menuContainer.style.left = (ev.pageX - 20) + 'px';
        menuContainer.style.top = (ev.pageY - 90) + 'px';

        if (menuContainer.style.display === 'none') {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
        console.log(' Showing or Hiding an menu ', menuContainer);
    };

    /**
     * Fonction Called to handle Fullscreen click on button
     */
    fjplayer.prototype.handleFullscreen = function(self) {
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
     * Fonction to return a human redeable duration of secondes
     */
    fjplayer.prototype.duration = function(secDuration) {
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

    /**
     * Set the video container's fullscreen state
     */
    fjplayer.prototype.setFullscreenData = function(state) {
        this.videoFigure.setAttribute('data-fullscreen', !!state);
    };

    /**
     * Checks if the documenplayercontainert is currently in fullscreen mode
     */
    fjplayer.prototype.isFullScreen = function() {
        return !!(document.fullScreen || document.webkitIsFullScreen ||
            document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    };

    /**
     * Manage click for mute button
     */
    fjplayer.prototype.onmuteClick = function(self) {
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
    fjplayer.prototype.onvideoTimeupdate = function(self) {
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
    fjplayer.prototype.onprogressClick = function(e, self) {
        var p = Math.round(self.progressBar.value);
        if (self.progressBar.max !== self.video.duration) {
            self.progressBar.max = self.video.duration;
        }
        console.log(' Seeking from ', self.video.currentTime, ':: ', self.video.duration, 'to ', p, ' sec');
        // change current time
        self.video.currentTime = p;
    };

    /**
     *  hide or show panel controls
     */
    fjplayer.prototype.HideControlsCursor = function(self, hideit) {
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
    fjplayer.prototype.magicMouse = function(self) {
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


    fjplayer.prototype.showThumbs = function(self) {
        self.thumbsDiv.style.visibility = 'visible';
    };

    fjplayer.prototype.hideThumbs = function(self) {
        self.thumbsDiv.style.visibility = 'hidden';
    };

    fjplayer.prototype.renderThumbs = function(event, self) {
        // first we convert from mouse to time position ..
        var c, i, url, xywh;
        var rect = self.progressBar.getBoundingClientRect();
        var p = (event.pageX - rect.left) * (self.video.duration / (rect.right - rect.left));
        if ((p > (self.video.duration + 2)) || (p < 0)) {
            // some error ?
            console.error(' Position is bigger than duration >>', p, self.video.duration);
            return;
        }
        // update ui ..then we find the matching cue..
        c = self.video.textTracks[self.thumbsTrackIndex].cues;
        if (c == null) {
            // track eleme,t is not supprted : Firefox
            console.error(' cues is null @ ', self.thumbsTrackIndex, ' not supported , Firefox ?');
            console.error(' Cues are null @', self.video);
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
        // console.log(' fetching thum from ', url);
        self.tumbsImg.style.backgroundImage = url;
        self.tumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
        self.tumbsImg.style.width = xywh[2] + 'px';
        self.tumbsImg.style.height = xywh[3] + 'px';

        self.thumbsDiv.style.left = event.pageX - xywh[2] / 2 + 'px';
        self.thumbsDiv.style.top = rect.top - (xywh[3] * 1.5) + 'px';
        self.thumbsDiv.style.width = xywh[2] + 'px';
    };
    fjplayer.prototype.activateSubs = function(self, item) {
        var i = 0;
        var k = 0;
        var litem;
        var index = Array.prototype.indexOf.call(self.menuListSubs.childNodes, item);
        var tindex = item.getAttribute('index');
        console.log('clicked is  selected @ index ', index, ' text index ', tindex);
        if (self.video.textTracks) {
            if (self.video.textTracks[tindex].mode === 'showing') {
                console.log('AlREADY  selected @ index ', tindex);
                return;
            }

            for (i = 0; i < self.menuListSubs.children.length; i++) {
                litem = self.menuListSubs.children[i];
                k = litem.getAttribute('index');
                console.log('cheking item @  ', i);
                if (tindex === k) {
                    self.video.textTracks[i].mode = 'showing';
                    litem.className = 'subtitles-menu-item-actif';
                    console.log('Setting item @  ', i);
                } else {
                    self.video.textTracks[i].mode = 'hidden';
                    litem.className = 'subtitles-menu-item';
                    console.log('Unsetting item @  ', i);
                }
            }
        }
        self.subsMenuDiv.style.display = 'none';
    };
    fjplayer.prototype.activateAudio = function(self, item) {
        var i = 0;
        var k = 0;
        var litem;
        var index = Array.prototype.indexOf.call(self.menuListAud.childNodes, item);
        var tindex = item.getAttribute('index');
        console.log('clicked is  selected @ index ', index, ' text index ', tindex);
        if (self.video.audioTracks) {
            if (self.video.audioTracks[index].enabled) {
                console.log('AlREADY  selected @ index ', tindex);
                return;
            }

            for (i = 0; i < self.menuListAud.children.length; i++) {
                litem = self.menuListAud.children[i];
                k = litem.getAttribute('index');
                console.log('cheking item @  ', i);
                if (i === index) {
                    self.video.audioTracks[i].enabled = true;
                    litem.className = 'subtitles-menu-item-actif';
                    console.log('Setting item @  ', i);
                } else {
                    self.video.audioTracks[i].enabled = false;
                    litem.className = 'subtitles-menu-item';
                    console.log('Unsetting item @  ', i);
                }
            }
        }
        self.audMenuDiv.style.display = 'none';
    };
    fjplayer.prototype.SetAudioMenu = function(self) {
        var i = 0;
        var item = null;
        var container = document.getElementById(self.audMenuContainerDivId);
        var id = new Date().valueOf() + '_' + Math.random();
        container.style.display = 'none';
        if ((!self.video.audioTracks) || (self.video.audioTracks.length <= 1)) {
            //hide audio button 
            var btn = document.getElementById(self.languagesDivId);
            btn.style.display = 'none';
            return;
        }
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
        console.log(' Audio Menu created !', self.video.audioTracks.length, '! ', self.menuListAud);
    };
    fjplayer.prototype.SetSubsMenu = function(self) {
        var i = 0;
        var item = null;
        var id = new Date().valueOf() + '_' + Math.random();
        var container = document.getElementById(self.subsdMenuContainerDivId);
        container.className = 'settingMenuDiv';
        container.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + self.subsMenuListId + '\" >' +
            '</ul>	' +
            '</div>';

        // video array
        self.menuListSubs = document.getElementById(self.subsMenuListId);
        for (i = 0; i < self.video.textTracks.length; i++) {
            if ((self.video.textTracks[i].kind === 'captions') ||
                (self.video.textTracks[i].kind === 'subtitles')) {
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
                console.log('Setting Subs List @ ', i, ' item is ', item);
            }
        }
        container.style.display = 'none';
        console.log(' Subs Menu created !! ', self.menuListSubs);
    };

    /**
     * setup the player
     */
    fjplayer.prototype.Setup = function(file, title, poster, vttThumbs, subsJsObj) {
        var self = this;
        var source = null;
        this.subsJsObj = subsJsObj;
        this.src = file;
        this.title = title;
        this.vttThumbs = vttThumbs;
        if (this.supportsVideo) {
            if (!this.uidone) {
                this.setUi();
            }
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
            this.videoInfo = document.getElementById(this.videoInfoId);
            this.videoFigure = document.getElementById(this.videoFigureId);
            this.BigPlayBtn = document.getElementById(this.BigPlayBtnId);
            this.thumbsDiv = document.getElementById(this.thumbsDivId);
            this.tumbsImg = document.getElementById(this.thumbsImgId);
            this.expandDiv = document.getElementById(this.expandDivId);
            this.audMenuDiv = document.getElementById(this.audMenuContainerDivId);
            this.subsMenuDiv = document.getElementById(this.subsdMenuContainerDivId);
            // set expand
            if (!this.expandScreen) {
                this.expandDiv.style.display = 'none';
            }

            // Set Video
            if ((poster !== undefined) && (poster != null)) {
                this.video.setAttribute('poster', poster);
                this.poster = poster;
            }
            if (this.src != null || this.src !== undefined) {
                /* add thumbs */
                source = document.createElement('source');
                source.src = this.src;
                source.type = 'video/mp4';
                console.log(' Appending source to video', source);
                this.video.appendChild(source);
            }

            this.videoControls = document.getElementById(this.videoControlsId);
            self.videoControls.style.display = 'none';
            // Hide the default controls
            this.video.controls = false;
            // Display the user defined video controls
            // this.videoControls.style.display = 'block';

            if (this.fullScreenOnStart === 'true') {
                this.videoFigure.setAttribute('data-fullscreen', 'true');
            }
            // Big play btn
            this.BigPlayBtn.addEventListener('click', function(e) {
                self.BigPlayBtn.style.display = 'none';
                self.videoControls.style.display = 'block';
                self.onplaypauseClick(self);
            });

            // Contextuel menu
            if (this.productionMode) {
                this.videoFigure.addEventListener('contextmenu', function(ev) {
                    ev.preventDefault();
                    console.log('success >> ', ev.pageX, '>>', ev.pageY);
                    var d = document.getElementById(self.aboutMenuId);
                    d.style.position = "absolute";
                    d.style.left = (ev.pageX - 20) + 'px';
                    d.style.top = (ev.pageY - 90) + 'px';
                    return false;
                }, false);
            }

            // video click 
            this.video.addEventListener('click', function(e) {
                self.onplaypauseClick(self);
            });

            // video double click 
            this.video.addEventListener('dblclick', function(e) {
                self.handleFullscreen(self);
            });

            // If the browser doesn't support the Fulscreen API then hide the fullscreen button
            if (!this.fullScreenEnabled) {
                this.progressBar.style.display = 'none';
            }

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
            // Add events for languages button

            this.languagesBtn.addEventListener('click', function(ev) {
                self.onshowHideMenu(self.audMenuDiv, ev);
            });
            // Add events for subtitles button
            this.subtitlesBtn.addEventListener('click', function(ev) {
                self.onshowHideMenu(self.subsMenuDiv, ev);
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
                    this.setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
                });
                document.addEventListener('webkitfullscreenchange', function() {
                    this.setFullscreenData(!!document.webkitIsFullScreen);
                });
                document.addEventListener('mozfullscreenchange', function() {
                    this.setFullscreenData(!!document.mozFullScreen);
                });
                document.addEventListener('msfullscreenchange', function() {
                    this.setFullscreenData(!!document.msFullscreenElement);
                });
            }
        }
    };

    /* **************************************************************************************************** */
    /* _______________________________________________ MAIN _______________________________________________ */
    /* **************************************************************************************************** */
    var player = new fjplayer('playercontainer', 'skin-default', false, '720', '576');
    var subsJsObj = [{
        'src': './files/sintel-de.vtt',
        'srclang': 'de',
        'label': 'deutch'
    }, {
        'src': './files/sintel-en.vtt',
        'srclang': 'en',
        'label': 'english'
    }, {
        'src': './files/sintel-es.vtt',
        'srclang': 'es',
        'label': 'espagnol'
    }];
    player.Setup('https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
        ' title of movie',
        './files/poster.jpg',
        './thumbs.vtt',
        subsJsObj
    );

})();