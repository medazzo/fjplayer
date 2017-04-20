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
function Thumbs(mplayer, thtimer, vidElement, thumbImgElement, thumbDivElement, progressBarElement) {
    var logger = new Logger(this),
        mediaPlayer = mplayer,
        thumbsTrackIndex = -1,
        video = vidElement,
        thumbstimer = thtimer,
        thumbsDiv = thumbDivElement,
        thumbsImg = thumbImgElement,
        progressBar = progressBarElement;

    function showThumbs() {
        thumbsDiv.classList.remove('fj-hide');
        thumbsDiv.classList.add('fj-show');
    };

    function hideThumbs() {
        thumbsDiv.classList.remove('fj-show');
        thumbsDiv.classList.add('fj-hide');
    };

    function renderThumbs(event) {
        // first we convert from mouse to time position ..
        var c, i, url, xywh;
        var rect = progressBar.getBoundingClientRect();
        var p = (event.pageX - rect.left) * (video.duration / (rect.right - rect.left));
        var dur = mediaPlayer.duration(parseFloat(p));
        if ((p > (video.duration + 2)) || (p < 0)) {
            // some error ?
            logger.error(' Position is bigger than duration >>', p, video.duration);
            return;
        }
        // update ui ..then we find the matching cue..
        c = video.textTracks[thumbsTrackIndex].cues;
        if (c == null) {
            // track eleme,t is not supprted : Firefox
            logger.error(' cues is null @ ', thumbsTrackIndex, ' not supported , Firefox ?');
            logger.error(' Cues are null @', video);
            return;
        }

        for (i = 0; i < c.length; i++) {
            if (c[i].startTime <= p && c[i].endTime > p) {
                break;
            };
        }
        logger.log(' Render Thumbs  @ ', dur);
        // ..next we unravel the JPG url and fragment query..
        xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');

        // ..and last we style the thumbnail overlay
        url = 'url(' + c[i].text.split('#')[0] + ')';
        // logger.log(' fetching thum from ', url);
        thumbsImg.style.backgroundImage = url;
        thumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
        thumbsImg.style.width = xywh[2] + 'px';
        thumbsImg.style.height = xywh[3] + 'px';
        thumbstimer.innerHTML = dur;
        thumbsDiv.style.left = (event.pageX - xywh[2] / 2) + 'px';
        thumbsDiv.style.top = (rect.top - (xywh[3] * 1.5) + 5) + 'px';
        thumbsDiv.style.width = xywh[2] + 'px';
    };

    function Setup(thumbsTrackIndex) {
        thumbsTrackIndex = thumbsTrackIndex;
        //
        progressBar.addEventListener('mousemove', renderThumbs);
        progressBar.addEventListener('mouseleave', hideThumbs);
        progressBar.addEventListener('mouseover', showThumbs);
        if (thumbsTrackIndex !== -1) {
            return true;
        }
        return false;
    };

    function Destroy() {
        thumbsTrackIndex = -1;
        progressBar.removeEventListener('mousemove', renderThumbs);
        progressBar.removeEventListener('mouseleave', hideThumbs);
        progressBar.removeEventListener('mouseover', showThumbs);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        Setup: Setup,
        Destroy: Destroy,
        hideThumbs: hideThumbs,
        showThumbs: showThumbs,
        off: removeEventListener,
        constructor: Thumbs
    };
};
export default Thumbs;