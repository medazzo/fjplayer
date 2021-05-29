const Logger = require('../utils/Logger');
const Const = require('../defs/constants');
const IsoLangs = require('../defs/isoLangs');
/**
 *  Class playlist in whixh all the playliost will be checked and saved
 */
class Playlist {
    /**
     *
     */
    constructor() {
        this.logger = new Logger(this);
        this.items = [];
    }

    /**
     * Used to getsize of playlist
     */
    getSize() {
        return this.items.length;
    }

    /**
     * Used  to get  some information about the playlist content
     */
    getInfo() {
        const info = {};
        info.size = this.items.length;
        info.items = this.items;
        return info;
    }

    /**
     * Used to get item of playlist at position index
     */
    getItem(index) {
        this.logger.info(' Getting item at position ', index);
        if (this.items.length > index) {
            return this.items[index];
        }
        this.logger.error(' No item to play at index ', index,
            ' playlist is sized ', this.items.length);
        return null;
    }

    /* ** ** ** ** ** ** ** CHECK'S ** ** ** ** ** ** ** */
    /**
     * used to check if an item of subtitle is correct
     */
    checkSubtitle(subItem) {
        let tmp;
        if (subItem === null || subItem === undefined) {
            return false;
        }
        if (subItem[Const.FJCONFIG_LANG]) {
            tmp = IsoLangs[subItem[Const.FJCONFIG_LANG]];
            this.logger.log(tmp, ' playlist Subtitle lang is',
                subItem[Const.FJCONFIG_LANG]);
            if (tmp === null || tmp === undefined) {
                this.logger.error('No ISO code of lang  ', tmp);
                return false;
            }
        } else {
            this.logger.error('Empty Subtitle lang  ');
            return false;
        }
        if (subItem[Const.FJCONFIG_SRC]) {
            this.logger.log(' playlist Subtitle src is',
                subItem[Const.FJCONFIG_SRC]);
        } else {
            this.logger.error('Empty Subtitle src ');
            return false;
        }
        if (subItem[Const.FJCONFIG_LABEL]) {
            this.logger.log(' playlist Subtitle label is',
                subItem[Const.FJCONFIG_LABEL]);
        } else {
            this.logger.error('Empty Subtitle label ');
            return false;
        }
        return true;
    }

    /**
     * used to check if an item of overlay is correct
     */
    checkOverlay(subItem) {
        let val = subItem;
        if (subItem === null || subItem === undefined) {
            return false;
        }
        val = subItem[Const.FJCONFIG_DATA];
        if (val !== undefined && val !== null && val !== '') {
            this.logger.log(' playlist Overlay data ', val);
        } else {
            this.logger.error('Empty Overlay data');
            return false;
        }
        val = subItem[Const.FJCONFIG_URL];
        if (val !== undefined && val !== null && val !== '') {
            this.logger.log(' ok playlist Overlay url ', val);
        } else {
            this.logger.error('Empty Overlay url');
            return false;
        }
        val = subItem[Const.FJCONFIG_DURATION];
        if (val !== undefined && val !== null && val !== '') {
            if ((val === parseInt(val, 10))) {
                this.logger.log(' integer playlist Overlay duration ', val);
            } else {
                this.logger.error(val, ':Empty Overlay duration is not integer !');
                return false;
            }
        } else {
            this.logger.error('Empty Overlay duration ');
            return false;
        }
        val = subItem[Const.FJCONFIG_SHOW_AT];
        if (val !== undefined && val !== null && val !== '') {
            if ((val === parseInt(val, 10))) {
                this.logger.log(' integer playlist Overlay show at ', val);
            } else {
                this.logger.error(val, ':Empty Overlay show at is not integer !');
                return false;
            }
        } else {
            this.logger.error('Empty Overlay show at ');
            return false;
        }
        return true;
    }

    /**
     * used to check if an item of drm is correct
     */
    checkDrm(drm) {
        let tmp = null;
        if (drm === null || drm === undefined) {
            return false;
        }
        this.logger.debug('Cheking DRM > ', drm);

        tmp = drm[Const.FJCONFIG_DRM_SCHEME];
        this.logger.info('Cheking DRM scheme > ', tmp);
        if ((tmp !== undefined) && (tmp !== null) && (tmp === Const.FJCONFIG_DRM_SCHEME_FORJA)) {
            this.logger.log(' Supported DRM scheme   ', tmp);
        } else {
            this.logger.error('Unsupported DRM Scheme ! ');
            return false;
        }

        tmp = drm[Const.FJCONFIG_DRM_LICENSE_SERVER];
        this.logger.info('Cheking DRM LA Server > ', tmp);
        if ((tmp !== undefined) && (tmp !== null) && (tmp !== '')) {
            this.logger.log(' playlist LA Server is  ', tmp);
        } else {
            this.logger.error('Empty LA Server  ! ');
            return false;
        }
        return true;
    }

    /**
     * used to check if an item of ads is correct
     */
    checkAds(item) {
        if (item === null || item === undefined) {
            return false;
        }
        if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
            this.logger.error('BAD type Value ! ');
            return false;
        }
        if (!item[Const.FJCONFIG_SRC]) {
            this.logger.error('BAD src Value ! ');
            return false;
        }
        if (Const.FJCONFIG_ADS_CLASSES.indexOf(item[Const.FJCONFIG_CLASS]) === -1) {
            this.logger.error(item[Const.FJCONFIG_CLASS], ':BAD class Value ! ');
            return false;
        }
        if ((item[Const.FJCONFIG_CLASS] === Const.FJCONFIG_ADS_CLASS_MID_ROLL) &&
            (item[Const.FJCONFIG_SHOW_AT] === null ||
                item[Const.FJCONFIG_SHOW_AT] === undefined)) {
            this.logger.error('Missing Show At for mid Roll Class ! ');
            return false;
        }
        if (item[Const.FJCONFIG_URL] !== undefined && item[Const.FJCONFIG_URL] !== null && item[Const.FJCONFIG_URL] !== '') {
            this.logger.log(' playlist Overlay url ', item[Const.FJCONFIG_URL]);
        } else {
            this.logger.error('Empty Overlay url');
            return false;
        }
        if (item[Const.FJCONFIG_CAN_ESCAPE] !== 'true' && item[Const.FJCONFIG_CAN_ESCAPE] !== true &&
            item[Const.FJCONFIG_CAN_ESCAPE] !== 'false' && item[Const.FJCONFIG_CAN_ESCAPE] !== false) {
            this.logger.warn('can Escape is missing , will be set to true ! ');
            item[Const.FJCONFIG_CAN_ESCAPE] = true;
        } else {
            this.logger.debug('can Escape is already there : ', item[Const.FJCONFIG_CAN_ESCAPE]);
        }
        return true;
    }

    /**
     * used to check if an item is correct
     */
    checkItem(item) {
        let subItem = {};
        let drm = {};
        let j; let
            list;

        if (item === null || item === undefined) {
            this.logger.error(' Item is NULL !', item);
            return false;
        }
        // check item
        this.logger.log('  class of item  : ', item[Const.FJCONFIG_CLASS]);
        if (Const.FJCONFIG_CLASSES.indexOf(item[Const.FJCONFIG_CLASS]) === -1) {
            this.logger.error('BAD class Value ! ');
            return false;
        }
        this.logger.log('  type of item  ', item[Const.FJCONFIG_TYPE]);
        if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
            this.logger.error('BAD type Value ! ');
            return false;
        }
        this.logger.log('  title of item  ', item[Const.FJCONFIG_TITLE]);
        if (item[Const.FJCONFIG_TITLE] === undefined || item[Const.FJCONFIG_TITLE] === null ||
            item[Const.FJCONFIG_TITLE] === '' || !item[Const.FJCONFIG_TITLE]) {
            this.logger.error('BAD title Value ! ');
            return false;
        }
        this.logger.log('  src of item  ', item[Const.FJCONFIG_SRC]);
        if (item[Const.FJCONFIG_SRC] === undefined || item[Const.FJCONFIG_SRC] === null ||
            item[Const.FJCONFIG_SRC] === '' || !item[Const.FJCONFIG_SRC]) {
            this.logger.error('BAD src Value ! ');
            return false;
        }
        this.logger.log('  poster of item  ', item[Const.FJCONFIG_POSTER]);
        this.logger.log('  thumbs of item  ', item[Const.FJCONFIG_THUMBS]);
        this.logger.log('  download icon  ', item[Const.FJCONFIG_DOWNLOAD]);
        this.logger.log('  share icon  ', item[Const.FJCONFIG_SHARE]);
        this.logger.log('  Back icon  ', item[Const.FJCONFIG_BACK]);
        this.logger.log('  UP TITLE  ', item[Const.FJCONFIG_SHOW_UP_TITLE]);

        // check ads
        list = item[Const.FJCONFIG_ADS];
        if ((list !== null) && (list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j += 1) {
                subItem = list[j];
                if (this.checkAds(subItem) === false) {
                    return false;
                }
            }
        }
        // check drm
        drm = item[Const.FJCONFIG_DRM];
        if ((drm !== null) && (drm !== undefined)) {
            if (this.checkDrm(drm) === false) {
                return false;
            }
        }
        // check subtitles
        list = item[Const.FJCONFIG_SUBTITLES];
        if ((list !== null) && (list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j += 1) {
                subItem = list[j];
                if (this.checkSubtitle(subItem) === false) {
                    return false;
                }
            }
        }
        // check overlays
        list = item[Const.FJCONFIG_OVERLAYS];
        if ((list !== null) && (list !== undefined) && (list.length > 0)) {
            for (j = 0; j < list.length; j += 1) {
                subItem = list[j];
                if (this.checkOverlay(subItem) === false) {
                    return false;
                }
            }
        }
        // done
        return true;
    }

    /**
     * Used to add item to list
     */
    addItem(item) {
        if (this.checkItem(item) === true) {
            this.items.push(item);
            this.logger.info('Item added ok ', this.items.length);
            return true;
        }
        this.logger.error(' Failed to add item');
        return false;
    }

    /**
     * Used to remove item by index from playlist
     * @param {*} index
     */
    rmItemIndex(index) {
        const item = this.items[index];
        if (item === undefined || index < 0) {
            this.logger.error(' Failed to remove item');
            return false;
        }
        this.items.splice(index, 1);
        this.logger.info('Item removed ok ', this.items.length);
        return true;
    }

    /**
     * Used to remove item from playlist
     * @param {*} item
     */
    rmItem(item) {
        const index = this.items.indexOf(item);
        if (index < 0) {
            this.logger.error(' Failed to remove item');
            return false;
        }
        this.items.splice(index, 1);
        this.logger.info('Item removed ok ', this.items.length);
        return true;
    }

    /**
     *  used to add an subtitle to item at index in the playlist
     *  TODO lock this function  when playlist start to play !
     */
    addSubtitle(index, subtitle) {
        const item = this.items[index];
        if (item === undefined) {
            return false;
        } if (this.checkSubtitle(subtitle) === false) {
            return false;
        }
        let list = item[Const.FJCONFIG_SUBTITLES];
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(subtitle);
        return true;
    }

    /**
     *  used to add an Overlay to item at index in the playlist
     *  TODO lock this function  when playlist start to play !
     */
    addOverlay(index, overlay) {
        const item = this.items[index];
        if (item === undefined) {
            return false;
        } if (this.checkOverlay(overlay) === false) {
            return false;
        }
        let list = item[Const.FJCONFIG_OVERLAYS];
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(overlay);
        return true;
    }

    /**
     *  used to add an Drm to item at index in the playlist
     *  TODO lock this function  when playlist start to play !
     */
    setDrm(index, drm) {
        const item = this.items[index];
        if (item === undefined) {
            return false;
        } if (this.checkDrm(drm) === false) {
            return false;
        }
        let list = item[Const.FJCONFIG_DRM];
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(drm);
        return true;
    }

    /**
     *  used to add an ads to item at index in the playlist
     *  TODO lock this function  when playlist start to play !
     */
    addAds(index, ads) {
        const item = this.items[index];
        if (item === undefined) {
            return false;
        } if (this.checkAds(ads) === false) {
            return false;
        }
        let list = item[Const.FJCONFIG_ADS];
        if ((list === undefined) || (list.length === 0)) {
            list = [];
        }
        list.push(ads);
        return true;
    }
}

module.exports = Playlist;
