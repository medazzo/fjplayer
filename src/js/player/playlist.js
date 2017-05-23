import Logger from '../utils/Logger';
import * as Const from '../defs/constants';
import * as Langs from '../defs/isoLangs';
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
        logger.info(' Getting item at position ', index);
        if (items.length > index) {
            return items[index];
        }
        logger.error(' No item to play at index ', index,
            ' playlist is sized ', items.length);
        return null;
    };
    /* ** ** ** ** ** ** ** CHECK'S ** ** ** ** ** ** ** */
    /**
     * used to check if an item of subtitle is correct
     */
    function checkSubtitle(subItem) {
        var tmp;
        if (subItem === null || subItem === undefined) {
            return false;
        }
        if (subItem[Const.FJCONFIG_LANG]) {
            tmp = Langs.isoLangs[subItem[Const.FJCONFIG_LANG]];
            logger.log(tmp, ' playlist Subtitle lang is',
                subItem[Const.FJCONFIG_LANG]);
            if (tmp === null || tmp === undefined) {
                logger.error('No ISO code of lang  ', tmp);
                return false;
            }
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
        if (subItem === null || subItem === undefined) {
            return false;
        }
        val = subItem[Const.FJCONFIG_DATA];
        if (val !== undefined && val !== null && val !== '') {
            logger.log(' playlist Overlay data ', val);
        } else {
            logger.error('Empty Overlay data');
            return false;
        }
        val = subItem[Const.FJCONFIG_URL];
        if (val !== undefined && val !== null && val !== '') {
            logger.log(' ok playlist Overlay url ', val);
        } else {
            logger.error('Empty Overlay url');
            return false;
        }
        val = subItem[Const.FJCONFIG_DURATION];
        if (val !== undefined && val !== null && val !== '') {
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
        if (val !== undefined && val !== null && val !== '') {
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
        if (drm === null || drm === undefined) {
            return false;
        }
        logger.debug('Cheking DRM > ', drm);
        for (var k in drm) {
            var item = drm[k];
            logger.info('Cheking DRM  > ', k);
            if (Const.FJCONFIG_DRM_SCHEMES.indexOf(k) === -1) {
                logger.error('BAD DRM Scheme Value ! ', k);
                return false;
            }
            logger.info('Cheking DRM Server > ', item[Const.FJCONFIG_DRM_LICENSE_SERVER]);
            if ((item[Const.FJCONFIG_DRM_LICENSE_SERVER] !== undefined) &&
                (item[Const.FJCONFIG_DRM_LICENSE_SERVER] !== null)) {
                logger.log(' playlist Server License of item  ', item[Const.FJCONFIG_DRM_LICENSE_SERVER]);
            } else {
                logger.error('Empty Server License for  DRM Scheme  ! ');
                return false;
            }
            logger.info(' playlist Drm Headers on Request License  of item  ',
                item[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
            logger.info(' playlist Drm Headers on Request Segments  of item  ',
                item[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
        }
        return true;
    };
    /**
     * used to check if an item of ads is correct
     */
    function checkAds(item) {
        if (item === null || item === undefined) {
            return false;
        }
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
        if (item[Const.FJCONFIG_URL] !== undefined && item[Const.FJCONFIG_URL] !== null && item[Const.FJCONFIG_URL] !== '') {
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
     * used to check if an item is correct
     */
    function checkItem(item) {
        var subItem = {};
        var drm = {};
        var j, list;

        if (item === null || item === undefined) {
            logger.error(' Item is NULL !', item);
            return false;
        }
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
        if (item[Const.FJCONFIG_TITLE] === undefined || item[Const.FJCONFIG_TITLE] === null ||
            item[Const.FJCONFIG_TITLE] === '' || !item[Const.FJCONFIG_TITLE]) {
            logger.error('BAD title Value ! ');
            return false;
        }
        logger.log('  src of item  ', item[Const.FJCONFIG_SRC]);
        if (item[Const.FJCONFIG_SRC] === undefined || item[Const.FJCONFIG_SRC] === null ||
            item[Const.FJCONFIG_SRC] === '' || !item[Const.FJCONFIG_SRC]) {
            logger.error('BAD src Value ! ');
            return false;
        }
        logger.log('  poster of item  ', item[Const.FJCONFIG_POSTER]);
        logger.log('  thumbs of item  ', item[Const.FJCONFIG_THUMBS]);

        // check ads
        list = item[Const.FJCONFIG_ADS];
        if ((list !== null) && (list !== undefined) && (list.length > 0)) {
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
        if ((list !== null) && (list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j++) {
                subItem = list[j];
                if (checkSubtitle(subItem) === false) {
                    return false;
                }
            }
        }
        // check overlays
        list = item[Const.FJCONFIG_OVERLAYS];
        if ((list !== null) && (list !== undefined) && (list.length > 0)) {
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
        addAds: addAds,
        checkSubtitle: checkSubtitle,
        checkOverlay: checkOverlay,
        checkDrm: checkDrm,
        checkAds: checkAds,
        checkItem: checkItem,
        constructor: Playlist
    };
};
export default Playlist;