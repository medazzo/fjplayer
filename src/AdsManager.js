import Logger from './Logger';
import * as Const from './constants';
import * as Utils from './Utils';
/**
 * @module AdsManager
 * @description The AdsManager is the class whinch will manage Ads
 *  on a video.
 *  Ads will be played on a another video html overlaying current video
 */

function AdsManager() {
    var logger = new Logger(this),
        mediaPlayer = null,
        mainVideoWidth = 0,
        mainVideoHeight = 0,
        midAds = [],
        postAds = [],
        preAds = [],
        localAds = null,
        settled = false,
        AdsContainerdiv = null,
        AdsEnum = {
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
     * Function used to stop Ads
     * @param {*} index index of ads in his arry
     * @param {*} adsType type of ads to look into type array
     */
    function StopAds(index, adsType) {
        var el = AdsContainerdiv;
        var elClone = null;
        var item = midAds[index];
        if (adsType === AdsEnum.PRE) {
            item = preAds[index];
        } else if (adsType === AdsEnum.MID) {
            item = midAds[index];
        } else {
            item = postAds[index];
        }
        logger.info(index, 'stopping  Ads ', item[Const.FJCONFIG_URL],
            ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
        // remove the click event
        el = AdsContainerdiv;
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        AdsContainerdiv = elClone;
        // hide the overlay , empty the div
        while (AdsContainerdiv.hasChildNodes()) {
            AdsContainerdiv.removeChild(AdsContainerdiv.firstChild);
        }
        AdsContainerdiv.innerHTML = '';
        AdsContainerdiv.style.display = 'none';
        // resume current video
        if (adsType === AdsEnum.PRE) {
            mediaPlayer.freezePlayer(false, true, false);
        } else if (adsType === AdsEnum.POST) {
            mediaPlayer.freezePlayer(false, false, true);
        } else {
            mediaPlayer.freezePlayer(false, false, false);
        }
    };

    function StartAds(index, adsType) {
        var done = false;
        var infoDiv = document.createElement('div');
        var infoDiv2 = document.createElement('span');
        var adsvideo = document.createElement('video');
        var source = document.createElement('source');
        var item = midAds[index];
        if (adsType === AdsEnum.PRE) {
            item = preAds[index];
            logger.info(index, 'starting PRE Ads ', preAds);
            logger.info(index, 'starting PRE Ads ', item[Const.FJCONFIG_SRC]);
        } else if (adsType === AdsEnum.MID) {
            item = midAds[index];
            logger.info(index, 'starting MId Ads ', item[Const.FJCONFIG_SRC],
                ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
        } else {
            item = postAds[index];
            logger.info(index, 'starting POST Ads ', item[Const.FJCONFIG_SRC]);
        }
        item.started = true;
        // pause current video and play ads
        if (adsType === AdsEnum.PRE) {
            mediaPlayer.freezePlayer(true, true, false);
        } else if (adsType === AdsEnum.POST) {
            mediaPlayer.freezePlayer(true, false, true);
        } else {
            mediaPlayer.freezePlayer(true, false, false);
        }
        // fill ads container
        adsvideo.preload = true;
        adsvideo.controls = false;
        adsvideo.autoplay = false;
        // setting W/H !
        adsvideo.setAttribute('width', mainVideoWidth);
        adsvideo.setAttribute('height', mainVideoHeight);
        adsvideo.setAttribute('width', '100%');
        adsvideo.setAttribute('height', '100%');
        infoDiv.innerHTML = '<span style=\"color: rgb(119, 255, 119); font-size: 0.95em;\">Annonce</span>' +
            ' This an Ads for <span style=\"color: rgb(255, 255, 0)\">' +
            item[Const.FJCONFIG_URL] + '</span>';
        AdsContainerdiv.style.cursor = 'pointer';
        logger.log(' Can escape this starting Ads ', item[Const.FJCONFIG_CAN_ESCAPE]);
        infoDiv.style.display = 'block';
        infoDiv.classList.add('over-DL');
        source.src = item[Const.FJCONFIG_SRC];
        source.type = item[Const.FJCONFIG_TYPE];
        adsvideo.appendChild(source);
        AdsContainerdiv.appendChild(adsvideo);
        infoDiv.appendChild(infoDiv2);
        AdsContainerdiv.appendChild(infoDiv);
        AdsContainerdiv.style.display = 'block';
        adsvideo.play();
        // events managing
        adsvideo.addEventListener('timeupdate', function(e) {
            if (item[Const.FJCONFIG_CAN_ESCAPE] === 'true' || item[Const.FJCONFIG_CAN_ESCAPE] === true) {
                if (adsvideo.currentTime > 5) {
                    if (!done) {
                        infoDiv2.innerHTML = ', Can be escapped <i class="fa fa-step-forward" ></i>';
                        infoDiv2.addEventListener('click', function() {
                            StopAds(index, adsType);
                        });
                        done = true;
                    }
                } else {
                    infoDiv2.innerHTML = ', Can be escapped in ' + Math.round(5 - adsvideo.currentTime) + ' secondes .';
                }
            } else {
                infoDiv2.innerHTML = ', it ends after ' +
                    Utils.duration(Math.round(adsvideo.duration - adsvideo.currentTime)) + ' .';
            }
        });
        adsvideo.addEventListener('click', function() {
            item.clicked++;
            window.open(item[Const.FJCONFIG_URL], '_blank');
        });
        adsvideo.addEventListener('ended', function(e) {
            StopAds(index, adsType);
        });
        logger.warn('Will set ads video like ', adsvideo);
    };
    /**
     * Function to be called from event 'timeupdate' from video
     * called to check if ads has to be played
     */
    function CheckMidAds(secondes) {
        var i = 0;
        var item = null;
        var show = 0;
        if (settled !== true) {
            return;
        }
        logger.info(secondes, ' Cheking ads midium  .. ');
        for (i = 0; i < midAds.length; i++) {
            item = midAds[i];
            show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
            if (secondes === show) {
                logger.info(i, ' starting Ads Now .. ');
                if (midAds[i].started === false) {
                    logger.info(i, ' starting a new  Mid Ads .. ');
                    midAds[i].started = true;
                    StartAds(i, AdsEnum.MID);
                } else {
                    logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
                        ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
                }
            }
        }
    };

    /**
     * Function to be called just before starting video
     * called to check if ads has to be played
     */
    function CheckPreAds() {
        var i = 0;
        var item = null;
        logger.info(' Cheking Pre Ads Now .. ');
        if (settled !== true) {
            return false;
        }
        for (i = 0; i < preAds.length; i++) {
            item = preAds[i];
            logger.info(i, ' starting Pre Ads Now .. ');
            if (preAds[i].started === false) {
                logger.info(i, ' starting a new Pre Ads .. @', i);
                preAds[i].started = true;
                StartAds(i, AdsEnum.PRE);
                return true;
            }
            logger.info(i, 'Pre already started ', item[Const.FJCONFIG_URL],
                ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
        }
        return false;
    };

    /**
     * Function to be called just before starting video
     * called to check if ads has to be played
     */
    function CheckPostAds() {
        var i = 0;
        var item = null;
        logger.info(' Cheking Post Ads Now .. ');
        if (settled !== true) {
            return false;
        }
        for (i = 0; i < postAds.length; i++) {
            item = postAds[i];
            logger.info(i, ' starting Pre Ads Now .. ');
            if (postAds[i].started === false) {
                logger.info(i, ' starting a new Post Ads .. ');
                postAds[i].started = true;
                StartAds(i, AdsEnum.POST);
                return true;
            }
            logger.info(i, 'Post already started ', item[Const.FJCONFIG_URL],
                ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
        }
        return false;
    };

    function initialize(AdsContainer) {
        AdsContainerdiv = AdsContainer;
    };

    function Setup(player, ads, videoWidth, videoHeight) {
        var i = 0;
        var sz;
        var item;
        var clas;
        if (ads === null | ads === undefined) {
            settled = false;
            return;
        }
        localAds = ads;
        mediaPlayer = player;
        mainVideoWidth = videoWidth;
        mainVideoHeight = videoHeight;
        for (i = 0; i < localAds.length; i++) {
            item = localAds[i];
            clas = item[Const.FJCONFIG_CLASS];
            if (clas === Const.FJCONFIG_ADS_CLASS_PRE_ROLL) {
                logger.debug(' found a pre ads !');
                sz = preAds.push(item);
                preAds[sz - 1].started = false;
                preAds[sz - 1].clicked = 0;
            } else if (clas === Const.FJCONFIG_ADS_CLASS_POST_ROLL) {
                logger.debug(' found a post ads !');
                sz = postAds.push(item);
                postAds[sz - 1].started = false;
                postAds[sz - 1].clicked = 0;
            } else {
                logger.debug(' found a mid ads !');
                sz = midAds.push(item);
                midAds[sz - 1].started = false;
                midAds[sz - 1].clicked = 0;
            }
        }
        settled = true;
        logger.info('Ads Setup is settled ', settled);
        logger.warn('Cheking PRE ROLL Ads .. ', preAds.length);
        logger.warn('Cheking MID ROLL Ads .. ', midAds.length);
        logger.warn('Cheking POST ROLL Ads .. ', postAds.length);
    };

    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        CheckMidAds: CheckMidAds,
        CheckPreAds: CheckPreAds,
        CheckPostAds: CheckPostAds,
        Setup: Setup,
        initialize: initialize,
        constructor: AdsManager
    };
};
export default AdsManager;