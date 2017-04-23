import Logger from './Logger';
import * as Const from './constants';
/**
 *  Class playlist in whixh all the playliost will be checked and saved
 */
function Playlist() {
    var logger = new Logger(this),
        items = [];

    /**
     * Used to getsize of playlist
     */
    function getSize() {
        return items.length;
    };

    /**
     * Used to get item of playlist at position index
     */
    function getItem(index) {
        var item = items[index];
        logger.info(' Getting item at position ', index, '>> ', items);
        return item;
    };
    /* ** ** ** ** ** ** ** CHECK'S ** ** ** ** ** ** ** */
    /**
     * used to check if an item of subtitle is correct
     */
    function checkSubtitle(subItem) {
        if (subItem[Const.FJCONFIG_LABEL]) {
            logger.log(' playlist Subtitle label is',
                subItem[Const.FJCONFIG_LABEL]);
        } else {
            logger.error('Empty Subtitle label ');
            return false;
        }
        if (subItem[Const.FJCONFIG_LANG]) {
            logger.log(' playlist Subtitle lang is',
                subItem[Const.FJCONFIG_LANG]);
        } else {
            logger.error('Empty Subtitle lang  ');
            return false;
        }
        if (subItem[Const.FJCONFIG_SRC]) {
            logger.log(' playlist Subtitle src is',
                subItem[Const.FJCONFIG_SRC]);
        } else {
            logger.error('Empty Subtitle src ');
            return false;
        }
        return true;
    };
    /**
     * used to check if an item of overlay is correct
     */
    function checkOverlay(subItem) {
        var val = subItem;
        val = subItem[Const.FJCONFIG_DATA];
        if (val !== null && val !== '') {
            logger.log(' playlist Overlay data ', val);
        } else {
            logger.error('Empty Overlay data');
            return false;
        }
        val = subItem[Const.FJCONFIG_URL];
        if (val !== null && val !== '') {
            logger.log(' playlist Overlay url ', subItem[Const.FJCONFIG_URL]);
        } else {
            logger.error('Empty Overlay url');
            return false;
        }
        val = subItem[Const.FJCONFIG_DURATION];
        if (val !== null && val !== '') {
            if ((val === parseInt(val, 10))) {
                logger.log(' integer playlist Overlay duration ', val);
            } else {
                logger.error(val, ':Empty Overlay duration is not integer !');
                return false;
            }
        } else {
            logger.error('Empty Overlay duration ');
            return false;
        }
        val = subItem[Const.FJCONFIG_SHOW_AT];
        if (val !== null && val !== '') {
            if ((val === parseInt(val, 10))) {
                logger.log(' integer playlist Overlay show at ', val);
            } else {
                logger.error(val, ':Empty Overlay show at is not integer !');
                return false;
            }
        } else {
            logger.error('Empty Overlay show at ');
            return false;
        }
        return true;
    };
    /**
     * used to check if an item of drm is correct
     */
    function checkDrm(drm) {
        if (Const.FJCONFIG_DRM_SCHEMES.indexOf(drm[Const.FJCONFIG_DRM_SCHEME]) === -1) {
            logger.error('BAD DRM Scheme Value ! ', drm[Const.FJCONFIG_DRM_SCHEME]);
            return false;
        }
        if (drm[Const.FJCONFIG_DRM_LICENSE_SERVER]) {
            logger.log(' playlist Server License of item  ', drm[Const.FJCONFIG_DRM_LICENSE_SERVER]);
        } else {
            logger.error('Empty Server License for  DRM Scheme  ! ');
            return false;
        }
        logger.log(' playlist Drm Herders on Request License  of item  ',
            drm[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
        logger.log(' playlist Drm Herders on Request Segments  of item  ',
            drm[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
        return true;
    };
    /**
     * used to check if an item of ads is correct
     */
    function checkAds(item) {
        if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
            logger.error('BAD type Value ! ');
            return false;
        }
        if (!item[Const.FJCONFIG_SRC]) {
            logger.error('BAD src Value ! ');
            return false;
        }
        if (Const.FJCONFIG_ADS_CLASSES.indexOf(item[Const.FJCONFIG_CLASS]) === -1) {
            logger.error(item[Const.FJCONFIG_CLASS], ':BAD class Value ! ');
            return false;
        }
        if ((item[Const.FJCONFIG_SRC] === Const.FJCONFIG_ADS_CLASS_MID_ROLL) &&
            (item[Const.FJCONFIG_SHOW_AT] === null || item[Const.FJCONFIG_SHOW_AT] === undefined)) {
            logger.error('Missing Show At for mid Roll Class ! ');
            return false;
        }
        if (item[Const.FJCONFIG_URL] !== null && item[Const.FJCONFIG_URL] !== '') {
            logger.log(' playlist Overlay url ', item[Const.FJCONFIG_URL]);
        } else {
            logger.error('Empty Overlay url');
            return false;
        }
        if (item[Const.FJCONFIG_CAN_ESCAPE] !== 'true' && item[Const.FJCONFIG_CAN_ESCAPE] !== true &&
            item[Const.FJCONFIG_CAN_ESCAPE] !== 'false' && item[Const.FJCONFIG_CAN_ESCAPE] !== false) {
            logger.warn('can Escape is missing , will be set to true ! ');
            item[Const.FJCONFIG_CAN_ESCAPE] = true;
        } else {
            logger.debug('can Escape is already there : ', item[Const.FJCONFIG_CAN_ESCAPE]);
        }
        return true;
    };
    /**
     * used to check if an item of audiois correct
     */
    function checkAudio(item) {
        /* TODO */
        return false;
    };
    /**
     * used to check if an item is correct
     */
    function checkItem(item) {
        var subItem = {};
        var drm = {};
        var j, list;

        if (item === undefined) {
            return false;
        }
        logger.log(' Item is ', item);
        // check item
        logger.log('  class of item  : ', item[Const.FJCONFIG_CLASS]);
        if (Const.FJCONFIG_CLASSES.indexOf(item[Const.FJCONFIG_CLASS]) === -1) {
            logger.error('BAD class Value ! ');
            return false;
        }
        logger.log('  type of item  ', item[Const.FJCONFIG_TYPE]);
        if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
            logger.error('BAD type Value ! ');
            return false;
        }
        logger.log('  title of item  ', item[Const.FJCONFIG_TITLE]);
        if (!item[Const.FJCONFIG_TITLE]) {
            logger.error('BAD title Value ! ');
            return false;
        }
        logger.log('  src of item  ', item[Const.FJCONFIG_SRC]);
        if (!item[Const.FJCONFIG_SRC]) {
            logger.error('BAD src Value ! ');
            return false;
        }
        logger.log('  poster of item  ', item[Const.FJCONFIG_POSTER]);
        logger.log('  thumbs of item  ', item[Const.FJCONFIG_THUMBS]);

        // check audio
        list = item[Const.FJCONFIG_AUDIOS];
        if ((list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j++) {
                subItem = list[j];
                if (checkAudio(subItem) === false) {
                    return false;
                }
            }
        }
        // check ads
        list = item[Const.FJCONFIG_ADS];
        if ((list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j++) {
                subItem = list[j];
                if (checkAds(subItem) === false) {
                    return false;
                }
            }
        }
        // check drm
        drm = item[Const.FJCONFIG_DRM];
        if (drm !== undefined) {
            if (checkDrm(drm) === false) {
                return false;
            }
        }
        // check subtitles
        list = item[Const.FJCONFIG_SUBTITLES];
        if ((list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j++) {
                subItem = list[j];
                if (checkSubtitle(subItem) === false) {
                    return false;
                }
            }
        }
        // check overlays
        list = item[Const.FJCONFIG_OVERLAYS];
        if ((list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j++) {
                subItem = list[j];
                if (checkOverlay(subItem) === false) {
                    return false;
                }
            }
        }
        // done
        return true;
    };

    /**
     * Used to add item to list
     */
    function addItem(item) {
        if (checkItem(item) === true) {
            logger.info('Item is ok ', item);
            items.push(item);
            logger.info('Item added ok ', items.length);
            return true;
        }
        logger.error(' Failed to add item');
        return false;
    };
    /**
     *  used to add an subtitle to item at index in the playlist
     */
    function addSubtitle(index, subtitle) {
        var item = items[index];
        var list = item[Const.FJCONFIG_SUBTITLES];
        if (item === undefined) {
            return false;
        } else if (checkSubtitle(subtitle) === false) {
            return false;
        }
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(subtitle);
        return true;
    };
    /**
     *  used to add an Overlay to item at index in the playlist
     */
    function addOverlay(index, overlay) {
        var item = items[index];
        var list = item[Const.FJCONFIG_OVERLAYS];
        if (item === undefined) {
            return false;
        } else if (checkOverlay(overlay) === false) {
            return false;
        }
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(overlay);
        return true;
    };
    /**
     *  used to add an Drm to item at index in the playlist
     */
    function setDrm(index, drm) {
        var item = items[index];
        var list = item[Const.FJCONFIG_DRM];
        if (item === undefined) {
            return false;
        } else if (checkDrm(drm) === false) {
            return false;
        }
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(drm);
        return true;
    };
    /**
     *  used to add an Audio to item at index in the playlist
     */
    function addAudio(index, audio) {
        var item = items[index];
        var list = item[Const.FJCONFIG_AUDIOS];
        if (item === undefined) {
            return false;
        } else if (checkAudio(audio) === false) {
            return false;
        }
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(audio);
        return true;
    };
    /**
     *  used to add an ads to item at index in the playlist
     */
    function addAds(index, ads) {
        var item = items[index];
        var list = item[Const.FJCONFIG_ADS];
        if (item === undefined) {
            return false;
        } else if (checkAds(ads) === false) {
            return false;
        }
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(ads);
        return true;
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        getSize: getSize,
        getItem: getItem,
        addItem: addItem,
        addSubtitle: addSubtitle,
        addOverlay: addOverlay,
        setDrm: setDrm,
        addAudio: addAudio,
        addAds: addAds,
        checkSubtitle: checkSubtitle,
        checkOverlay: checkOverlay,
        checkDrm: checkDrm,
        checkAds: checkAds,
        checkAudio: checkAudio,
        checkItem: checkItem,
        constructor: Playlist
    };
};
export default Playlist;