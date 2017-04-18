import Logger from './Logger';
require('./player.css');
/**
 * @module Thumbs
 * @description The Thumbs module is responsible for rendering
 *  showing and hiding vtt pictures based on mousing mouse on progress bar.
 * @param vidElement the video element
 * @param vttThumbsTrackIndex the index of Vtt thumbs track in textTracks list of video
 * @param thumbImgElement the img element used for thumbs
 * @param thumbImgElement the div element used for thumbs
 * @param progressBarElement the progress element used for thumbs
 */
function Thumbs(player, thumbstimer, vidElement, thumbImgElement, thumbDivElement, progressBarElement) {
    var self = this;
    this.logger = new Logger(this);
    this.player = player;
    this.thumbsTrackIndex = -1;
    this.video = vidElement;
    this.thumbstimer = thumbstimer;
    this.thumbsDiv = thumbDivElement;
    this.thumbsImg = thumbImgElement;
    this.progressBar = progressBarElement;
    // initilize
    this.progressBar.addEventListener('mousemove', function(event) {
        self.renderThumbs(self, event);
    });
    this.progressBar.addEventListener('mouseleave', function(event) {
        self.hideThumbs(self);
    });
    this.progressBar.addEventListener('mouseover', function(event) {
        self.showThumbs(self);
    });
};
Thumbs.prototype.Setup = function(thumbsTrackIndex) {
    this.thumbsTrackIndex = thumbsTrackIndex;
    if (this.thumbsTrackIndex !== -1) {
        return true;
    }
    return false;
};
Thumbs.prototype.showThumbs = function(self) {
    self.thumbsDiv.classList.remove('fj-hide');
    self.thumbsDiv.classList.add('fj-show');
};
Thumbs.prototype.hideThumbs = function(self) {
    self.thumbsDiv.classList.remove('fj-show');
    self.thumbsDiv.classList.add('fj-hide');
};

/**
 * Event on mouse
 * * */
Thumbs.prototype.renderThumbs = function(self, event) {
    // first we convert from mouse to time position ..
    var c, i, url, xywh;
    var rect = self.progressBar.getBoundingClientRect();
    var p = (event.pageX - rect.left) * (self.video.duration / (rect.right - rect.left));
    var dur = self.player.duration(parseFloat(p));
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
    self.logger.log(' Render Thumbs  @ ', dur);
    // ..next we unravel the JPG url and fragment query..
    xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');

    // ..and last we style the thumbnail overlay
    url = 'url(' + c[i].text.split('#')[0] + ')';
    // self.logger.log(' fetching thum from ', url);
    self.thumbsImg.style.backgroundImage = url;
    self.thumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
    self.thumbsImg.style.width = xywh[2] + 'px';
    self.thumbsImg.style.height = xywh[3] + 'px';
    self.thumbstimer.innerHTML = dur;
    self.thumbsDiv.style.left = (event.pageX - xywh[2] / 2) + 'px';
    self.thumbsDiv.style.top = (rect.top - (xywh[3] * 1.5) + 5) + 'px';
    self.thumbsDiv.style.width = xywh[2] + 'px';
};

export default Thumbs;