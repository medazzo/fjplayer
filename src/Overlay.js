/**
 * @module Overlay
 * @description The Overlay is the primary Overlay used to set Overlays .
 */
function Overlay(_data, _showAt, _showDuration, _url) {
    let instance,
        adData = _data,
        showAt = _showAt,
        showDuration = _showDuration,
        url = _url,
        started = false,
        finished = false,
        refreshId = null,
        handler = null,
        txtduration;

    function onTmUpdate(e) {
        /*   $apply(function() {
               if ((!started) && (video.currentTime > showAt) && (video.currentTime < (showAt + 1))) {
                   started = true;
                   if (showDuration == -1) // correct duration
                       showDuration = Math.trunc(video.duration);
                   StartAds();
                   // hide ads after timeout
                   refreshId = $interval(upInfo, 1000);
                   logger.info('>> refreshId', refreshId);
                   return;
               }
           });*/
    }

    function trigger() {
        isAdsDataHidden = true;
        isAdsInfoHidden = true;
        txtduration = $filter('duration')(showDuration);
        handler = onTmUpdate.bind(video);
        video.addEventListener('timeupdate', handler, false);
    }

    function upInfo() {
        if (showDuration > 0) {
            AdsInfo = $sce.trustAsHtml('your ads will end in ' + txtduration + ' sec');
            showDuration--;
            txtduration = $filter('duration')(showDuration);
        } else {
            logger.info('Ending @@@ ', showDuration);
            isAdsDataHidden = true;
            isAdsInfoHidden = true;
            finished = true;
            logger.info(' Finishing Overlay >> refreshId', refreshId);
            //finish  
            $interval.cancel(refreshId);
            video.removeEventListener('timeupdate', handler, false);
        }
    }

    function StartAds() {
        var secTimeout = showDuration * 1000;
        txtduration = $filter('duration')(showDuration);
        AdsInfo = $sce.trustAsHtml('you ads will end in ' + txtduration + ' sec');
        // show ads
        if (adData != null) {
            logger.info('Data re not null ! ');
            isAdsDataHidden = false;
            AdsData = $sce.trustAsHtml(adData);
        }
        if (animate == true) {
            logger.info('Animation is  Activated ! ');
            isAdsInfoHidden = false;
        }
        logger.info('you ads will end in ' + txtduration + ' sec', isAdsInfoHidden, '<<>>', isAdsInfoHidden);
    }


    function setup() {
        logger.info('fjOverlays : overlay triggred to start @ ', showAt, ' for ', txtduration, 'sec ');
        trigger();
    }

    function initialize() {}

    instance = {
        StartAds: StartAds,
        upInfo: upInfo
    };

    setup();

    return instance;
};

export default Overlay;