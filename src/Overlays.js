import Logger from './Logger';
require('./player.css');
import * as Const from './constants';
/**
 * @module Overlay
 * @description The Overlays is that manage overlays of a video :
 *     it manage overlays for information ads , media or ovelay on ads video.
 */
function Overlays(OverlayDiv) {
    this.logger = new Logger(this);
    this.overlays = null;
    this.settled = false;
    this.OverlayDiv = OverlayDiv;
    this.OverlayInnerDiv = null;
    this.OverlayClosingDiv = null;
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
        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
        if (secondes === show) {
            self.logger.info(i, ' starting overlay .. ');
            if (self.overlays[i].started === false) {
                self.logger.info(i, ' starting a new  overlay .. ');
                self.overlays[i].started = true;
                self.StartOverlay(self, i);
            } else {
                self.logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
                    ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
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
        this.overlays[i].clicked = 0;
    }
    this.logger.info('Setup is settled ', this.settled, ' cheking overlays .. ', this.overlays);
};
Overlays.prototype.clicked = function(self, index) {
    var item = self.overlays[index];
    self.overlays[index].clicked++;
    window.open(item[Const.FJCONFIG_URL], '_blank');
};

Overlays.prototype.StopOverlay = function(self, index) {
    var el = self.OverlayDiv;
    var elClone = null;
    // hide the div
    this.logger.warn(index, 'you overlay  is now stopped ', self.overlays[index].handler);
    // remove the click event
    el = self.OverlayDiv;
    elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
    self.OverlayDiv = elClone;
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
Overlays.prototype.StartOverlay = function(self, index) {
    var url = null;
    var item = self.overlays[index];
    self.overlays[index].started = true;
    self.overlays[index].endTimer =
        setTimeout(function() { self.StopOverlay(self, index); }, item[Const.FJCONFIG_DURATION] * 1000);
    // empty the div && show the div
    while (self.OverlayDiv.hasChildNodes()) {
        self.OverlayDiv.removeChild(self.OverlayDiv.firstChild);
    }
    self.OverlayInnerDiv = document.createElement('div');
    self.OverlayClosingDiv = document.createElement('div');
    self.OverlayInnerDiv.innerHTML = '<p>' + item[Const.FJCONFIG_DATA] + '</p>';
    self.OverlayInnerDiv.style.cursor = 'pointer';

    self.OverlayClosingDiv.innerHTML = '<i onmouseover=\"this.style.opacity = 1;\" ' +
        'onmouseout=\"this.style.opacity = 0.5\" style=\"padding-left: -5px;cursor: pointer; opacity: 0.5;' +
        ' float: right; margin: -5px -10px 10px 10px;\" class="fa fa-2x fa-times" ' +
        'aria-hidden="true"></i><div style=\"color: rgb(119, 255, 119); font-size: ' +
        '0.95em; float: right; text-decoration: none;\">Annonce</div>';
    this.OverlayClosingDiv.addEventListener('click', function() { self.StopOverlay(self, index); });
    self.OverlayDiv.appendChild(self.OverlayClosingDiv);
    self.OverlayDiv.appendChild(self.OverlayInnerDiv);
    self.OverlayDiv.style.display = 'block';
    self.OverlayDiv.classList.add('over-HL');
    // add click
    url = item[Const.FJCONFIG_URL];
    self.logger.info('Setting click on overlay going to  ', url);
    this.OverlayInnerDiv.addEventListener('click', function() { self.clicked(self, index); });
    self.logger.log(index, 'you overlay just started and will end in ' +
        item[Const.FJCONFIG_DURATION] + ' sec', self.overlays[index].handler);
};

export default Overlays;