import Logger from './Logger';
require('./player.css');
import * as Const from './constants';
/**
 * @module AdsManager
 * @description The AdsManager is the class whinch will manage Ads
 *  on a video
 */
function AdsManager(video, VideoDiv) {
    this.logger = new Logger(this);
    this.video = video;
    this.midAds = null;
    this.postAds = null;
    this.preAds = null;
    this.settled = false;
    this.VideoDiv = VideoDiv;
};

/**
 * Function to be called from event 'timeupdate' from video
 * called to check if overlays has to Start
 */
AdsManager.prototype.CheckMidAds = function(self, secondes) {
    var i = 0;
    var item = null;
    var show = 0;
    if (self.settled !== true) {
        return;
    }
    for (i = 0; i < self.midAds.length; i++) {
        item = self.midAds[i];
        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
        if (secondes === show) {
            self.logger.info(i, ' starting Ads Now .. ');
            if (self.midAds[i].started === false) {
                self.logger.info(i, ' starting a new  Mid Ads .. ');
                self.midAds[i].started = true;
                self.StartMidAds(self, i);
            } else {
                self.logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
                    ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
            }
        }
    }
};

AdsManager.prototype.Setup = function(ads) {
    var i = 0;
    var sz;
    var item;
    var clas;
    for (i = 0; i < this.ads.length; i++) {
        item = ads[i];
        clas = item[Const.FJCONFIG_CLASS];
        if (clas === Const.FJCONFIG_ADS_CLASS_PRE_ROLL) {
            sz = this.preAds.push(item);
            this.preAds[sz - 1].started = false;
        } else if (clas === Const.FJCONFIG_ADS_CLASS_POST_ROLL) {
            sz = this.postAds.push(item);
            this.postAds[sz - 1].started = false;
        } else {
            sz = this.midAds.push(item);
            this.midAds[sz - 1].started = false;
        }
    }
    this.settled = true;
    this.logger.info('Setup is settled ', this.settled, ' cheking Ads .. ', this.overlays);
};

AdsManager.prototype.clicked = function(self, index) {
    var item = self.overlays[index];
    window.open(item[Const.FJCONFIG_URL], '_blank');
};

AdsManager.prototype.StopPreAds = function(self, index) {
    // todo
};

AdsManager.prototype.StartPreAds = function(self, index) {
    // todo
};


AdsManager.prototype.StopMidAds = function(self, index) {
    // todo
};

AdsManager.prototype.StartMidAds = function(self, index) {
    // todo
};


AdsManager.prototype.StopPostAds = function(self, index) {
    // todo
};

AdsManager.prototype.StartPostAds = function(self, index) {
    // todo
};
export default AdsManager;