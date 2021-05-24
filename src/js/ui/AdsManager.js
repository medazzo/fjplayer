const Logger = require('../utils/Logger');
const Const = require('../defs/constants');
const Utils = require('../utils/Utils');
const Eventing = require('../utils/Eventing');
/**
 * @module AdsManager
 * @description The AdsManager is the class whinch will manage Ads
 *  on a video.
 *  Ads will be played on a another video html overlaying current video
 */

class AdsManager {
  constructor() {
    this.logger = new Logger(this);
    this.settled = false;
    this.events = new Eventing();
    this.mainVideoWidth = 0;
    this.mainVideoHeight = 0;
    this.midAds = [];
    this.postAds = [];
    this.preAds = [];
    this.localAds = null;
    this.AdsContainerdiv = null;
  }

  /**
     * Function used to stop Ads
     * @param {*} index index of ads in his arry
     * @param {*} adsType type of ads to look into type array
     */
  StopAds(index, adsType) {
    let el = this.AdsContainerdiv;
    let elClone = null;
    let item = this.midAds[index];
    if (this.settled !== true) {
      this.logger.warn(' AdsMgr is not yet this.settled!');
      return;
    }
    if (adsType === Const.AdsEnum.ADS_PRE_ROLL) {
      item = this.preAds[index];
    } else if (adsType === Const.AdsEnum.ADS_MID_ROLL) {
      item = this.midAds[index];
    } else {
      item = this.postAds[index];
    }
    this.logger.info(index, 'stopping  Ads ', item[Const.FJCONFIG_URL],
      ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    // remove the click event
    el = this.AdsContainerdiv;
    elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
    this.AdsContainerdiv = elClone;
    // hide the overlay , empty the div
    while (this.AdsContainerdiv.hasChildNodes()) {
      this.AdsContainerdiv.removeChild(this.AdsContainerdiv.firstChild);
    }
    this.AdsContainerdiv.innerHTML = '';
    this.AdsContainerdiv.style.display = 'none';
    this.events.fireEvent(Const.AdsEvents.ADS_PLAYBACK_ENDED, adsType);
  }

  StartAds(index, adsType) {
    let done = false;
    const infoDiv = document.createElement('div');
    const infoDiv2 = document.createElement('span');
    const adsvideo = document.createElement('video');
    const source = document.createElement('source');
    let item = this.midAds[index];
    if (this.settled !== true) {
      this.logger.warn(' AdsMgr is not yet cettled !');
      return;
    }
    if (adsType === Const.AdsEnum.ADS_PRE_ROLL) {
      item = this.preAds[index];
      this.logger.info(index, 'starting PRE Ads ', this.preAds);
      this.logger.info(index, 'starting PRE Ads ', item[Const.FJCONFIG_SRC]);
    } else if (adsType === Const.AdsEnum.ADS_MID_ROLL) {
      item = this.midAds[index];
      this.logger.info(index, 'starting MId Ads ', item[Const.FJCONFIG_SRC],
        ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    } else {
      item = this.postAds[index];
      this.logger.info(index, 'starting POST Ads ', item[Const.FJCONFIG_SRC]);
    }
    item.started = true;
    // pause current video and play ads
    this.events.fireEvent(Const.AdsEvents.ADS_PLAYBACK_STARTED, adsType);
    // fill ads container
    adsvideo.preload = true;
    adsvideo.controls = false;
    adsvideo.autoplay = false;
    // setting W/H !
    adsvideo.setAttribute('width', this.mainVideoWidth);
    adsvideo.setAttribute('height', this.mainVideoHeight);
    this.logger.warn(' ads video width/height is ', this.mainVideoWidth, this.mainVideoHeight);
    infoDiv.innerHTML = `${'<span style="color: rgb(119, 255, 119); font-size: 0.95em;">Annonce</span>'
            + ' This an Ads for <span style="color: rgb(255, 255, 0)">'}${
      item[Const.FJCONFIG_URL]}</span>`;
    this.AdsContainerdiv.style.cursor = 'pointer';
    this.logger.log(' Can escape this starting Ads ', item[Const.FJCONFIG_CAN_ESCAPE]);
    infoDiv.style.display = 'block';
    infoDiv.classList.add('over-DL');
    source.src = item[Const.FJCONFIG_SRC];
    source.type = item[Const.FJCONFIG_TYPE];
    adsvideo.appendChild(source);
    this.AdsContainerdiv.appendChild(adsvideo);
    infoDiv.appendChild(infoDiv2);
    this.AdsContainerdiv.appendChild(infoDiv);
    this.AdsContainerdiv.style.display = 'block';
    adsvideo.play();
    // this.eventsmanaging
    adsvideo.addEventListener('timeupdate', () => {
      if (item[Const.FJCONFIG_CAN_ESCAPE] === 'true' || item[Const.FJCONFIG_CAN_ESCAPE] === true) {
        if (adsvideo.currentTime > 5) {
          if (!done) {
            infoDiv2.innerHTML = ', Can be escapped <span class="fj-icon-playNext" ></span>';
            infoDiv2.addEventListener('click', () => {
              this.StopAds(index, adsType);
            });
            done = true;
          }
        } else {
          infoDiv2.innerHTML = `, Can be escapped in ${Math.round(5 - adsvideo.currentTime)} secondes .`;
        }
      } else {
        infoDiv2.innerHTML = `, it ends after ${
          Utils.duration(Math.round(adsvideo.duration - adsvideo.currentTime))} .`;
      }
    });
    adsvideo.addEventListener('click', () => {
      item.clicked += 1;
      this.events.fireEvent(Const.AdsEvents.ADS_USER_CLICKED);
      window.open(item[Const.FJCONFIG_URL], '_blank');
    });
    adsvideo.addEventListener('ended', () => {
      this.StopAds(index, adsType);
    });
  }

  /**
     * Function to be called from event 'timeupdate' from video
     * called to check if ads has to be played
     */
  CheckMidAds(secondes) {
    let i = 0;
    let item = null;
    let show = 0;
    if (this.settled !== true) {
      return;
    }
    for (i = 0; i < this.midAds.length; i += 1) {
      item = this.midAds[i];
      show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
      if (secondes === show) {
        this.logger.info(i, ' starting Ads Now .. ');
        if (this.midAds[i].started === false) {
          this.logger.info(i, ' starting a new  Mid Ads .. ');
          this.midAds[i].started = true;
          this.StartAds(i, Const.AdsEnum.ADS_MID_ROLL);
        } else {
          this.logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
            ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
        }
      }
    }
  }

  /**
     * Function to be called just before starting video
     * called to check if ads has to be played
     */
  CheckPreAds() {
    let i = 0;
    let item = null;
    this.logger.info(' Checking Pre Ads Now .. ');
    if (this.settled !== true) {
      this.logger.warn('not yet Settled !');
      return false;
    }
    for (i = 0; i < this.preAds.length; i += 1) {
      item = this.preAds[i];
      this.logger.info(i, ' starting Pre Ads Now .. ');
      if (this.preAds[i].started === false) {
        this.logger.info(i, ' starting a new Pre Ads .. @', i);
        this.preAds[i].started = true;
        this.StartAds(i, Const.AdsEnum.ADS_PRE_ROLL);
        return true;
      }
      this.logger.info(i, 'Pre already started ', item[Const.FJCONFIG_URL],
        ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    }
    return false;
  }

  /**
     * Function to be called just before starting video
     * called to check if ads has to be played
     */
  CheckPostAds() {
    let i = 0;
    let item = null;
    this.logger.info(' Checking Post Ads Now .. ');
    if (this.settled !== true) {
      this.logger.warn(' AdsMgr is not yet this.settled!');
      return false;
    }
    for (i = 0; i < this.postAds.length; i += 1) {
      item = this.postAds[i];
      this.logger.info(i, ' starting Pre Ads Now .. ');
      if (this.postAds[i].started === false) {
        this.logger.info(i, ' starting a new Post Ads .. ');
        this.postAds[i].started = true;
        this.StartAds(i, Const.AdsEnum.ADS_POST_ROLL);
        return true;
      }
      this.logger.info(i, 'Post already started ', item[Const.FJCONFIG_URL],
        ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
    }
    return false;
  }

  initialize(AdsContainer) {
    this.AdsContainerdiv = AdsContainer;
  }

  Setup(ads, videoWidth, videoHeight) {
    let i = 0;
    let sz;
    let item;
    let clas;
    if (ads === null || ads === undefined) {
      this.settled = false;
      return;
    }
    this.localAds = ads;
    this.mainVideoWidth = videoWidth;
    this.mainVideoHeight = videoHeight;
    for (i = 0; i < this.localAds.length; i += 1) {
      item = this.localAds[i];
      clas = item[Const.FJCONFIG_CLASS];
      if (clas === Const.FJCONFIG_ADS_CLASS_PRE_ROLL) {
        this.logger.debug(' found a pre ads !');
        sz = this.preAds.push(item);
        this.preAds[sz - 1].started = false;
        this.preAds[sz - 1].clicked = 0;
      } else if (clas === Const.FJCONFIG_ADS_CLASS_POST_ROLL) {
        this.logger.debug(' found a post ads !');
        sz = this.postAds.push(item);
        this.postAds[sz - 1].started = false;
        this.postAds[sz - 1].clicked = 0;
      } else {
        this.logger.debug(' found a mid ads !');
        sz = this.midAds.push(item);
        this.midAds[sz - 1].started = false;
        this.midAds[sz - 1].clicked = 0;
      }
    }
    this.settled = true;
    this.logger.info('Ads Setup is this.settled', this.settled);
    this.logger.warn('Checking PRE ROLL Ads .. ', this.preAds.length);
    this.logger.warn('Checking MID ROLL Ads .. ', this.midAds.length);
    this.logger.warn('Checking POST ROLL Ads .. ', this.postAds.length);
  }

  /**
     *
     */
  on(name, handler) {
    return this.events.on(name, handler);
  }

  /**
     *
     */
  off(name, handler) {
    return this.events.off(name, handler);
  }
}

module.exports = AdsManager;
