import Logger from './Logger';
import * as Utils from './Utils';
require('../css/player.less');
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
function Thumbs(thtimer, thumbImgElement, thumbDivElement, progressBarElement) {
    var logger = new Logger(this),
        thumbsTrackIndex = -1,
        video = null,
        vidDuration = 0,
        progressBar = progressBarElement,
        thumbstimer = thtimer,
        thumbsDiv = thumbDivElement,
        thumbsImg = thumbImgElement;

    function showThumbs() {
        thumbsDiv.classList.remove('fj-hide');
        thumbsDiv.classList.add('fj-show');
    };

    function hideThumbs() {
        thumbsDiv.classList.remove('fj-show');
        thumbsDiv.classList.add('fj-hide');
    };

    function renderThumbs(event) {
        logger.warn('eventing Thumbs is', event);
        // first we convert from mouse to time position ..
        var c, i, url, xywh, left;
        var rect = progressBar.getBoundingClientRect();
        var p = (event.pageX - rect.left) * (vidDuration / (rect.right - rect.left));
        var dur = Utils.duration(parseFloat(p));
        if ((p > (vidDuration + 2)) || (p < 0)) {
            // some error ?
            logger.warn(' Position is bigger than duration >>', p, vidDuration);
            return;
        }
        logger.log(' current clicked  ', dur);
        // update ui ..then we find the matching cue..
        c = video.textTracks[thumbsTrackIndex].cues;
        if (c == null) {
            // track eleme,t is not supprted : Firefox
            logger.error(' cues is null @ ', thumbsTrackIndex, ' not supported , Firefox ?');
            return;
        }

        for (i = 0; i < c.length; i++) {
            if (c[i].startTime <= p && c[i].endTime > p) {
                break;
            };
        }
        // ..next we unravel the JPG url and fragment query..
        xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');
        left = -(rect.left - event.pageX + (xywh[2] / 2));
        // logger.log(' Render Thumbs  @ ', p, '#', dur, '  where pgX', event.pageX, ', displayed on left: ', left);
        // ..and last we style the thumbnail overlay
        url = 'url(' + c[i].text.split('#')[0] + ')';
        // logger.log(' fetching thum from ', url);
        thumbsImg.style.backgroundImage = url;
        thumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
        thumbsImg.style.width = xywh[2] + 'px';
        thumbsImg.style.height = xywh[3] + 'px';
        thumbstimer.innerHTML = dur;
        thumbsDiv.style.left = left;
        // thumbsDiv.style.top = top;
        thumbsDiv.style.width = xywh[2] + 'px';
    };

    function reset() {
        thumbsTrackIndex = -1;
        progressBar.removeEventListener('mousemove', renderThumbs);
        progressBar.removeEventListener('mouseleave', hideThumbs);
        progressBar.removeEventListener('mouseover', showThumbs);
    };

    function Setup(vidElement, videoDuration, thumbsTrindex) {
        reset();
        video = vidElement;
        vidDuration = videoDuration;
        thumbsTrackIndex = thumbsTrindex;
        logger.info(' Setting index thumbs tracks on ', thumbsTrackIndex, ' and video duration ', vidDuration);
        if (progressBar && (thumbsTrackIndex !== -1)) {
            progressBar.addEventListener('mousemove', renderThumbs);
            progressBar.addEventListener('mouseleave', hideThumbs);
            progressBar.addEventListener('mouseover', showThumbs);
            return true;
        }
        return false;
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        Setup: Setup,
        reset: reset,
        hideThumbs: hideThumbs,
        showThumbs: showThumbs,
        off: removeEventListener,
        constructor: Thumbs
    };
};
export default Thumbs;