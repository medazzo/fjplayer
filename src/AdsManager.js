import Logger from './Logger';
require('./player.css');
import * as Const from './constants';
/**
 * @module AdsManager
 * @description The AdsManager is the class whinch will manage Ads
 *  on a video.
 *  Ads will be played on a another video html overlaying current video
 */
function AdsManager(player, video, AdsContainerdiv) {
    this.logger = new Logger(this);
    this.player = player;
    this.video = video;
    this.midAds = [];
    this.postAds = [];
    this.preAds = [];
    this.ads = null;
    this.settled = false;
    this.AdsContainerdiv = AdsContainerdiv;
};

AdsManager.prototype.AdsEnum = {
    PRE: 0,
    MID: 1,
    POST: 2,
    properties: {
        0: { name: 'preroll', value: 0, code: 'P' },
        1: { name: 'midroll', value: 1, code: 'M' },
        2: { name: 'postroll', value: 2, code: 'A' }
    }
};
/**
 * Function to be called from event 'timeupdate' from video
 * called to check if ads has to be played
 */
AdsManager.prototype.CheckMidAds = function(secondes) {
    var i = 0;
    var item = null;
    var show = 0;
    if (this.settled !== true) {
        return;
    }
    for (i = 0; i < this.midAds.length; i++) {
        item = this.midAds[i];
        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
        if (secondes === show) {
            this.logger.info(i, ' starting Ads Now .. ');
            if (this.midAds[i].started === false) {
                this.logger.info(i, ' starting a new  Mid Ads .. ');
                this.midAds[i].started = true;
                this.StartAds(this, i, this.AdsEnum.MID);
            } else {
                this.logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
                    ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
            }
        }
    }
};

/**
 * Function to be called just before starting video
 * called to check if ads has to be played
 */
AdsManager.prototype.CheckPreAds = function() {
    var i = 0;
    var item = null;
    this.logger.info(' Cheking Pre Ads Now .. ');
    if (this.settled !== true) {
        return false;
    }
    for (i = 0; i < this.preAds.length; i++) {
        item = this.preAds[i];
        this.logger.info(i, ' starting Pre Ads Now .. ');
        if (this.preAds[i].started === false) {
            this.logger.info(i, ' starting a new Pre Mid Ads .. ');
            this.preAds[i].started = true;
            this.StartAds(this, i, this.AdsEnum.PRE);
            return true;
        }
        this.logger.info(i, 'Pre already started ', item[Const.FJCONFIG_URL],
            ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    }
    return false;
};

/**
 * Function to be called just before starting video
 * called to check if ads has to be played
 */
AdsManager.prototype.CheckPostAds = function() {
    var i = 0;
    var item = null;
    this.logger.info(' Cheking Post Ads Now .. ');
    if (this.settled !== true) {
        return false;
    }
    for (i = 0; i < this.postAds.length; i++) {
        item = this.postAds[i];
        this.logger.info(i, ' starting Pre Ads Now .. ');
        if (this.postAds[i].started === false) {
            this.logger.info(i, ' starting a new Post Ads .. ');
            this.postAds[i].started = true;
            this.StartAds(this, i, this.AdsEnum.POST);
            return true;
        }
        this.logger.info(i, 'Post already started ', item[Const.FJCONFIG_URL],
            ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    }
    return false;
};
AdsManager.prototype.Setup = function(ads) {
    var i = 0;
    var sz;
    var item;
    var clas;
    this.ads = ads;
    for (i = 0; i < this.ads.length; i++) {
        item = ads[i];
        clas = item[Const.FJCONFIG_CLASS];
        if (clas === Const.FJCONFIG_ADS_CLASS_PRE_ROLL) {
            sz = this.preAds.push(item);
            this.preAds[sz - 1].started = false;
            this.preAds[sz - 1].clicked = 0;
        } else if (clas === Const.FJCONFIG_ADS_CLASS_POST_ROLL) {
            sz = this.postAds.push(item);
            this.postAds[sz - 1].started = false;
            this.postAds[sz - 1].clicked = 0;
        } else {
            sz = this.midAds.push(item);
            this.midAds[sz - 1].started = false;
            this.midAds[sz - 1].clicked = 0;
        }
    }
    this.settled = true;
    this.logger.info('Ads Setup is settled ', this.settled);
    this.logger.warn('Cheking PRE ROLL Ads .. ', this.preAds.length);
    this.logger.warn('Cheking MID ROLL Ads .. ', this.midAds.length);
    this.logger.warn('Cheking POST ROLL Ads .. ', this.postAds.length);
};

AdsManager.prototype.clicked = function(self, index) {
    var item = self.overlays[index];
    window.open(item[Const.FJCONFIG_URL], '_blank');
};

AdsManager.prototype.StopAds = function(self, index, adsType) {
    var el = self.AdsContainerdiv;
    var elClone = null;
    var item = self.midAds[index];
    if (adsType === self.AdsEnum.PRE) {
        item = self.preAds[index];
    } else if (adsType === self.AdsEnum.MID) {
        item = self.midAds[index];
    } else {
        item = self.postAds[index];
    }
    self.logger.info(index, 'stopping  Ads ', item[Const.FJCONFIG_URL],
        ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    // remove the click event
    el = self.AdsContainerdiv;
    elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
    self.AdsContainerdiv = elClone;
    // hide the overlay , empty the div
    while (self.AdsContainerdiv.hasChildNodes()) {
        self.AdsContainerdiv.removeChild(self.AdsContainerdiv.firstChild);
    }
    self.AdsContainerdiv.innerHTML = '';
    self.AdsContainerdiv.style.display = 'none';
    // resume current video
    if (adsType === self.AdsEnum.PRE) {
        self.player.freezePlayer(false, true, false);
    } else if (adsType === self.AdsEnum.POST) {
        self.player.freezePlayer(false, false, true);
    } else {
        self.player.freezePlayer(false, false, false);
    }
};

AdsManager.prototype.StartAds = function(self, index, adsType) {
    var done = false;
    var infoDiv = document.createElement('div');
    var infoDiv2 = document.createElement('span');
    var adsvideo = document.createElement('video');
    var source = document.createElement('source');
    var item = self.midAds[index];
    if (adsType === self.AdsEnum.PRE) {
        item = self.preAds[index];
        self.logger.info(index, 'starting PRE Ads ', item[Const.FJCONFIG_SRC]);
    } else if (adsType === self.AdsEnum.MID) {
        item = self.midAds[index];
        self.logger.info(index, 'starting MId Ads ', item[Const.FJCONFIG_SRC],
            ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    } else {
        item = self.postAds[index];
        self.logger.info(index, 'starting POST Ads ', item[Const.FJCONFIG_SRC]);
    }
    item.started = true;
    // pause current video and play ads
    if (adsType === self.AdsEnum.PRE) {
        self.player.freezePlayer(true, true, false);
    } else if (adsType === self.AdsEnum.POST) {
        self.player.freezePlayer(true, false, true);
    } else {
        self.player.freezePlayer(true, false, false);
    }
    // hide all div ads content
    self.AdsContainerdiv.style.display = 'none';
    // fill ads container
    adsvideo.preload = true;
    adsvideo.controls = false;
    adsvideo.autoplay = false;
    // setting W/H !
    adsvideo.setAttribute('width', self.video.videoWidth);
    adsvideo.setAttribute('height', self.video.videoHeight);
    //
    infoDiv.innerHTML = '<span style=\"color: rgb(119, 255, 119); font-size: 0.95em;\">Annonce</span>' +
        ' This an Ads for <span style=\"color: rgb(255, 255, 0)\">' +
        item[Const.FJCONFIG_URL] + '</span>';
    self.AdsContainerdiv.style.cursor = 'pointer';
    self.logger.log(' Can escape this starting Ads ', item[Const.FJCONFIG_CAN_ESCAPE]);
    infoDiv.style.display = 'block';
    infoDiv.classList.add('over-DL');
    source.src = item[Const.FJCONFIG_SRC];
    source.type = item[Const.FJCONFIG_TYPE];
    adsvideo.appendChild(source);
    self.AdsContainerdiv.appendChild(adsvideo);
    infoDiv.appendChild(infoDiv2);
    self.AdsContainerdiv.appendChild(infoDiv);
    self.AdsContainerdiv.style.display = 'block';
    adsvideo.play();
    // events managing
    adsvideo.addEventListener('timeupdate', function(e) {
        if (item[Const.FJCONFIG_CAN_ESCAPE] === 'true' || item[Const.FJCONFIG_CAN_ESCAPE] === true) {
            if (adsvideo.currentTime > 5) {
                if (!done) {
                    infoDiv2.innerHTML = ', Can be escapped <i class="fa fa-step-forward" ></i>';
                    infoDiv2.addEventListener('click', function() {
                        self.StopAds(self, index, adsType);
                    });
                    done = true;
                }
            } else {
                infoDiv2.innerHTML = ', Can be escapped in ' + Math.round(5 - adsvideo.currentTime) + ' secondes .';
            }
        } else {
            infoDiv2.innerHTML = ', it ends after ' +
                self.player.duration(Math.round(adsvideo.duration - adsvideo.currentTime)) + ' .';
        }
    });
    adsvideo.addEventListener('click', function() {
        item.clicked++;
        window.open(item[Const.FJCONFIG_URL], '_blank');
    });
    adsvideo.addEventListener('ended', function(e) {
        self.StopAds(self, index, adsType);
    });
};

export default AdsManager;