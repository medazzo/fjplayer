import Logger from './Logger';
require('./player.css');
import * as Const from './constants';
/**
 * @module Overlay
 * @description The Overlays is that manage overlays of a video :
 *     it manage overlays for information ads , media or ovelay on ads video.
 */
function Overlays(video, OverlayDiv) {
    this.logger = new Logger(this);
    this.video = video;
    this.overlays = null;
    this.settled = false;
    this.OverlayDiv = OverlayDiv;
};
/**
 * Function to be called from event 'timeupdate' from video
 * called to check if overlays has to Start
 */
Overlays.prototype.CheckOverlays = function(self, secondes) {
    var i = 0;
    var item = null;
    self.logger.info(secondes, 'is settled ', self.settled, ' cheking overlays .. ', self.overlaysObjs);
    if (self.settled !== true) {
        return;
    }
    for (; i < self.overlaysObjs.length; i++) {
        item = self.overlaysObjs[i];
        self.logger.info(' cheking overlay of url ', item[Const.FJCONFIG_OVER_URL]);
        if (Math.round(secondes) === item[Const.FJCONFIG_OVER_SHOW_AT]) {
            if (self.overlays[i].started === false) {
                self.StartOverlay(i);
            }
        }
    }
};
Overlays.prototype.Setup = function(overlays) {
    this.overlays = overlays;
    this.settled = true;
    this.logger.info('Setup is settled ', self.settled, ' cheking overlays .. ', self.overlaysObjs);
};
Overlays.prototype.clicked = function() {
    window.open(this.overlay[Const.FJCONFIG_OVER_URL], '_blank');
};

Overlays.prototype.StopOverlay = function() {
    // hide the div
    // hide the overlay , empty the div
    this.divElemnt.style.visibility = 'hidden';
    while (this.divElemnt.hasChildNodes()) {
        this.divElemnt.removeChild(this.divElemnt.firstChild);
    }
    this.divElemnt.innerHTML = '';
    this.finished = true;
};

/**
 * Used to show an Overlay
 */
Overlays.prototype.StartOverlay = function(index) {
    self.overlays[index].started = true;
    this.endTimer = setTimeout(this.StopOverlay, this.overlay[Const.FJCONFIG_OVER_DURATION] * 1000);
    // show the div
    this.divElemnt.style.cursor = 'pointer';
    this.divElemnt.onclick = function() { this.clicked(); };
    this.divElemnt.style.visibility = 'visible';
    this.logger.log('you overlay  just and will end in ' + this.overlay[Const.FJCONFIG_OVER_DURATION] + ' sec');
};

export default Overlays;