const Logger = require('../utils/Logger');
const Utils = require('../utils/Utils');
require('../../css/player.less');
/**
 * @module Thumbs
 * @description The Thumbs module is responsible for rendering
 *  showing and hiding vtt pictures based on mousing mouse on progress bar.
 * @param vidElement the this.video element
 * @param vttThumbsTrackIndex the index of Vtt thumbs track in textTracks list of this.video
 * @param thumbImgElement the img element used for thumbs
 * @param thumbImgElement the div element used for thumbs
 * @param progressBarElement the progress element used for thumbs
 */
class Thumbs {
  constructor(thtimer, thumbImgElement, thumbDivElement, progressBarElement) {
    this.logger = new Logger(this);
    this.thumbsTrackIndex = -1;
    this.video = null;
    this.vidDuration = 0;
    this.progressBar = progressBarElement;
    this.thumbstimer = thtimer;
    this.thumbsDiv = thumbDivElement;
    this.thumbsImg = thumbImgElement;
  }

  showThumbs() {
    this.thumbsDiv.classList.remove('fj-hide');
    this.thumbsDiv.classList.add('fj-show');
  }

  hideThumbs() {
    this.thumbsDiv.classList.remove('fj-show');
    this.thumbsDiv.classList.add('fj-hide');
  }

  renderThumbs(event) {
    this.logger.warn('eventing Thumbs is', event);
    // first we convert from mouse to time position ..
    let i;
    const rect = this.progressBar.getBoundingClientRect();
    const p = (event.pageX - rect.left) * (this.vidDuration / (rect.right - rect.left));
    const dur = Utils.duration(parseFloat(p));
    if ((p > (this.vidDuration + 2)) || (p < 0)) {
      // some error ?
      this.logger.warn(' Position is bigger than duration >>', p, this.vidDuration);
      return;
    }
    this.logger.log(' current clicked  ', dur);
    // update ui ..then we find the matching cue..
    const c = this.video.textTracks[this.thumbsTrackIndex].cues;
    if (c === null) {
      // track eleme,t is not supprted : Firefox
      this.logger.error(' cues is null @ ', this.thumbsTrackIndex, ' not supported , Firefox ?');
      return;
    }

    for (i = 0; i < c.length; i += 1) {
      if (c[i].startTime <= p && c[i].endTime > p) {
        break;
      }
    }
    // ..next we unravel the JPG url and fragment query..
    const xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');
    const left = -(rect.left - event.pageX + (xywh[2] / 2));
    // this.logger.log(' Render Thumbs  @ ', p, '#', dur,
    // '  where pgX', event.pageX, ', displayed on left: ', left);
    // ..and last we style the thumbnail overlay
    const url = `url(${c[i].text.split('#')[0]})`;
    // this.logger.log(' fetching thum from ', url);
    this.thumbsImg.style.backgroundImage = url;
    this.thumbsImg.style.backgroundPosition = `-${xywh[0]}px -${xywh[1]}px`;
    this.thumbsImg.style.width = `${xywh[2]}px`;
    this.thumbsImg.style.height = `${xywh[3]}px`;
    this.thumbstimer.innerHTML = dur;
    this.thumbsDiv.style.left = left;
    // this.thumbsDiv.style.top = top;
    this.thumbsDiv.style.width = `${xywh[2]}px`;
  }

  reset() {
    this.thumbsTrackIndex = -1;
    this.progressBar.removeEventListener('mousemove', this.renderThumbs);
    this.progressBar.removeEventListener('mouseleave', this.hideThumbs);
    this.progressBar.removeEventListener('mouseover', this.showThumbs);
  }

  Setup(vidElement, videoDuration, thumbsTrindex) {
    this.reset();
    this.video = vidElement;
    this.vidDuration = videoDuration;
    this.thumbsTrackIndex = thumbsTrindex;
    this.logger.info(' Setting index thumbs tracks on ', this.thumbsTrackIndex, ' and this.video duration ', this.vidDuration);
    if (this.progressBar && (this.thumbsTrackIndex !== -1)) {
      this.progressBar.addEventListener('mousemove', () => this.renderThumbs());
      this.progressBar.addEventListener('mouseleave', () => this.hideThumbs());
      this.progressBar.addEventListener('mouseover', () => this.showThumbs());
      return true;
    }
    return false;
  }
}

module.exports = Thumbs;
