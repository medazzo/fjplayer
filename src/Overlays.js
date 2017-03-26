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
    var show = 0;
    if (self.settled !== true) {
        return;
    }
    for (i = 0; i < self.overlays.length; i++) {
        item = self.overlays[i];
        show = parseInt(item[Const.FJCONFIG_OVER_SHOW_AT], 10);
        if (secondes === show) {
            self.logger.info(i, ' starting overlay .. ');
            if (self.overlays[i].started === false) {
                self.logger.info(i, ' starting a new  overlay .. ');
                self.StartOverlay(i);
            } else {
                self.logger.info(i, ' already started ', item[Const.FJCONFIG_OVER_URL],
                    ' @@ ', item[Const.FJCONFIG_OVER_SHOW_AT]);
            }
        }
    }
};
Overlays.prototype.Setup = function(overlays) {
    var i = 0;
    this.overlays = overlays;
    this.settled = true;
    for (i = 0; i < this.overlays.length; i++) {
        this.overlays[i].started = false;
    }
    this.logger.info('Setup is settled ', this.settled, ' cheking overlays .. ', this.overlays);
};
Overlays.prototype.clicked = function(self, index) {
    var item = self.overlays[index];
    window.open(item[Const.FJCONFIG_OVER_URL], '_blank');
};

Overlays.prototype.StopOverlay = function(self) {
    // hide the div
    this.logger.log('you overlay  is now stopped ');
    // hide the overlay , empty the div
    while (self.OverlayDiv.hasChildNodes()) {
        self.OverlayDiv.removeChild(self.OverlayDiv.firstChild);
    }
    self.OverlayDiv.innerHTML = '';
    self.OverlayDiv.style.display = 'none';
};

/**
 * Used to show an Overlay
 */
Overlays.prototype.StartOverlay = function(index) {
    var self = this;
    var item = self.overlays[index];
    this.overlays[index].started = true;
    this.overlays[index].endTimer =
        setTimeout(function() { self.StopOverlay(self); }, item[Const.FJCONFIG_OVER_DURATION] * 1000);
    // show the div
    this.OverlayDiv.innerHTML = '<p>' + item[Const.FJCONFIG_OVER_DATA] + '</p>';
    this.OverlayDiv.style.cursor = 'pointer';
    this.OverlayDiv.addEventListener('click', function() { self.clicked(self, index); });
    this.OverlayDiv.style.display = 'block';
    this.logger.log('you overlay  just and will end in ' + item[Const.FJCONFIG_OVER_DURATION] + ' sec');
};

export default Overlays;