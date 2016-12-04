/**
 * @module Thumbs
 * @description The Thumbs is the primary Thumbs used to set Thumbs .
 */
function Thumbs(vidElement, thumbsTrachindex, thumbImg, thumbDiv, progressBar) {
    let instance,
        indexThumbsTrack = thumbsTrachindex,
        videoElement = vidElement,
        td = thumbDiv,
        t = thumbImg,
        b = progressBar;

    function goShowThumbs() {
        td.style.visibility = 'visible';
    }

    function goHideThumbs() {
        td.style.visibility = 'hidden';
    }
    /**
     * Event on mouse
     * * */
    function goRenderThumbs($event) {
        var rect, p, c, i, url, xywh;
        // first we convert from mouse to time position ..
        rect = b.getBoundingClientRect();
        p = ($event.pageX - rect.left) * (videoElement.duration / (rect.right - rect.left));
        if ((p > (videoElement.duration + 2)) || (p < 0)) {
            // some error ?
            console.error(' Position is bigger than duration >>', p, videoElement.duration);
            return;
        }

        // ..then we find the matching cue..
        c = videoElement.textTracks[indexThumbsTrack].cues;

        // track eleme,t is not supprted : Firefox
        if (c == null) {
            console.error(' cues is null @ ', indexThumbsTrack, ' not supported , Firefox ?');
            return;
        }

        for (i = 0; i < c.length; i++) {
            if (c[i].startTime <= p && c[i].endTime > p) {
                break;
            };
        }

        // ..next we unravel the JPG url and fragment query..
        url = c[i].text.split('#')[0];
        xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');

        // ..and last we style the thumbnail overlay
        t.style.backgroundImage = 'url(' + c[i].text.split('#')[0] + ')';
        t.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
        t.style.width = xywh[2] + 'px';
        t.style.height = xywh[3] + 'px';

        td.style.left = $event.pageX - xywh[2] / 2 + 'px';
        td.style.top = rect.top - (xywh[3] * 1.5) + 'px'
        td.style.width = xywh[2] + 'px';
    }



    instance = {

        goShowThumbs: goShowThumbs,
        goHideThumbs: goHideThumbs,
        goRenderThumbs: goRenderThumbs

    };

    return instance;
};

export default Thumbs;