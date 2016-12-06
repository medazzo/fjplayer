 import Logger from './Logger';
 /**
  * @module Overlay
  * @description The Overlay is the primary Overlay used to set Overlays :
  *     it manage overlay for information ads on media or ovelay on ads video.
  */
 function Overlay(_vidElement, _divElemnt, _data, _showAt, _showDuration, _url) {
     let instance,
         videoDivElement = _vidElement,
         divElemnt = _divElemnt,
         adData = _data,
         showAt = _showAt,
         overDuration = _showDuration,
         url = _url,
         startTimer,
         endTimer,
         countDownTimer,
         isItAds = false,
         started = false,
         finished = false,
         blocked = false,
         shownduration = _showDuration,
         logger = new Logger('Overlay');

     function Escape() {
         // todo notify the video player to go to next video
         logger.error(' must escape the ads ');
     }

     function countDownAds() {
         if (shownduration > 0) {
             shownduration--;
             divElemnt.innerHTML = 'you ads will end in ' + shownduration + ' sec';
             countDownTimer = setTimeout(countDownAds, 1000);
         } else {
             divElemnt.innerHTML = 'you ads is done, click to Escape';
             divElemnt.onclick = function() { Escape(); };
             finished = true;
         }

     }

     function StopOverlay() {
         // hide the div
         // hide the overlay , empty the div
         divElemnt.style.visibility = 'hidden';
         while (divElemnt.hasChildNodes()) {
             divElemnt.removeChild(divElemnt.firstChild);
         }
         divElemnt.innerHTML = '';
         finished = true;
     }

     function StartOverlay() {
         started = true;
         endTimer = setTimeout(StopOverlay, overDuration * 1000);
         // show the div
         divElemnt.style.visibility = 'visible';
         logger.log('you overlay  just and will end in ' + overDuration + ' sec');
     }

     function clicked() {
         window.open(url, '_blank');
     }

     function Launch() {
         if (!blocked) {
             logger.log('you overlay ADS and will end in ' + overDuration + ' sec');
             videoDivElement.onclick = function() { clicked(); };
             videoDivElement.style.cursor = 'pointer';
             divElemnt.style.cursor = 'pointer';
             if (isItAds) {
                 divElemnt.style.visibility = 'visible';
                 started = true;
                 countDownTimer = setTimeout(countDownAds, 1000);
             } else {
                 startTimer = setTimeout(StartOverlay, showAt * 1000);
             }
         } else {
             logger.error(' Blocked overlay !');
         }
     }

     function Cancel() {
         if (!blocked) {
             logger.log('fjOverlays : Cancel overlay was to be triggred to start @ ',
                 showAt, ' for ', overDuration, 'sec ');
             // stop timers
             if (isItAds) {
                 clearTimeout(countDownTimer);
             } else {
                 clearTimeout(startTimer);
                 clearTimeout(endTimer);
             }
             // hide the overlay , empty the div
             divElemnt.style.visibility = 'hidden';
             while (divElemnt.hasChildNodes()) {
                 divElemnt.removeChild(divElemnt.firstChild);
             }
             divElemnt.innerHTML = '';
         }
     }

     function setup() {
         logger.log('fjOverlays : overlay will triggred to start @ ', showAt, ' for ',
             overDuration, 'sec , ang go for ', url);
         if (divElemnt === null || divElemnt === undefined) {
             logger.error('invalid div used for overlay ! will be blocked');
             blocked = true;
         } else {
             // set div info
             if (adData != null) {
                 divElemnt.innerHTML = adData;
                 isItAds = false;
             } else {
                 isItAds = true;
                 divElemnt.innerHTML = 'you ads will end in ' + shownduration + ' sec';
             }
             if (url.substring(0, 7) !== 'http://' && url.substring(0, 8) !== 'https://') {
                 url = 'http://' + url;
             }
             divElemnt.style.visibility = 'hidden';
         }
     }

     function isStarted() {
         return started;
     }

     function isFinished() {
         return finished;
     }

     function isBlocked() {
         return blocked;
     }
     instance = {
         Launch: Launch,
         Cancel: Cancel,
         isFinished: isFinished,
         isStarted: isStarted,
         isBlocked: isBlocked
     };

     setup();

     return instance;
 };

 export default Overlay;