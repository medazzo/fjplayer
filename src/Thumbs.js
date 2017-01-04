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
function Thumbs(vidElement, vttThumbsTrackIndex, thumbImgElement, thumbDivElement, progressBarElement) {
    let instance,
        thumbsTrackIndex = vttThumbsTrackIndex,
        video = vidElement,
        thumbsDiv = thumbDivElement,
        tumbsImg = thumbImgElement,
        progressBar = progressBarElement,
        logger = new Logger('Thumbs');

    function initialize() {

        progressBar.addEventListener('mousemove', function(e) {
            instance.renderThumbs(e);
        });
        progressBar.addEventListener('mouseleave', function() {
            instance.hideThumbs();
        });
        progressBar.addEventListener('mouseover', function() {
            instance.showThumbs();
        });
    }

    function showThumbs() {
        thumbsDiv.classList.remove('fj-hide');
        thumbsDiv.classList.add('fj-show');
    }

    function hideThumbs() {
        thumbsDiv.classList.remove('fj-show');
        thumbsDiv.classList.add('fj-hide');
    }

    /**
     * Event on mouse
     * * */
    function renderThumbs(event) {
        // first we convert from mouse to time position ..
        var c, i, url, xywh;
        var rect = instance.progressBar.getBoundingClientRect();
        var p = (event.pageX - rect.left) * (instance.video.duration / (rect.right - rect.left));
        if ((p > (instance.video.duration + 2)) || (p < 0)) {
            // some error ?
            console.error(' Position is bigger than duration >>', p, instance.video.duration);
            return;
        }
        // update ui ..then we find the matching cue..
        c = instance.video.textTracks[instance.thumbsTrackIndex].cues;
        if (c == null) {
            // track eleme,t is not supprted : Firefox
            console.error(' cues is null @ ', instance.thumbsTrackIndex, ' not supported , Firefox ?');
            console.error(' Cues are null @', instance.video);
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
        instance.tumbsImg.style.backgroundImage = url;
        instance.tumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
        instance.tumbsImg.style.width = xywh[2] + 'px';
        instance.tumbsImg.style.height = xywh[3] + 'px';

        instance.thumbsDiv.style.left = event.pageX - xywh[2] / 2 + 'px';
        instance.thumbsDiv.style.top = rect.top - (xywh[3] * 1.5) + 'px';
        instance.thumbsDiv.style.width = xywh[2] + 'px';
    };

    instance = {
        initialize: initialize,
        showThumbs: showThumbs,
        hideThumbs: hideThumbs,
        renderThumbs: renderThumbs

    };

    return instance;
};

export default Thumbs;