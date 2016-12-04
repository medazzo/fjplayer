import * as Const from './constants';
import Logger from './Logger';

/**
 * @module Configuration
 * @description The Configuration is the primary module used to set configuration and .
 */
function Configuration() {
    let instance,
        playlist,
        appid,
        screenMode,
        autoStart,
        loop,
        logger,
        backLink;

    function setup() {
        playlist = [];
        appid = '';
        logger = new Logger();
        screenMode = false;
        autoStart = false;
        loop = false;
        backLink = false;
    }

    function checkPlaylist() {
        var item = {};
        var i = 0;
        if (playlist === undefined) {
            return false;
        }
        if (playlist.length <= 0) {
            return false;
        }
        logger.warn('Cheking playlist ...', playlist);
        logger.log(' playlist count ', playlist.length);
        for (i = 0; i < playlist.length; i++) {
            item = playlist[i];
            // check item
            console.info(' playlist class of item  ', i, item[Const.FJCONFIG_CLASS]);
            if (Const.FJCONFIG_CLASSES.indexOf(item[Const.FJCONFIG_CLASS]) === -1) {
                logger.error('BAD class Value ! ');
                return false;
            }
            console.info(' playlist type of item  ', i, item[Const.FJCONFIG_TYPE]);
            if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
                logger.error('BAD type Value ! ');
                return false;
            }
            console.info(' playlist title of item  ', i, item[Const.FJCONFIG_TITLE]);
            if (!item[Const.FJCONFIG_TITLE]) {
                logger.error('BAD title Value ! ');
                return false;
            }
            console.info(' playlist src of item  ', i, item[Const.FJCONFIG_SRC]);
            if (!item[Const.FJCONFIG_SRC]) {
                logger.error('BAD src Value ! ');
                return false;
            }
            logger.log(' playlist poster of item  ', i, item[Const.FJCONFIG_POSTER]);
            logger.log(' playlist thumbs of item  ', i, item[Const.FJCONFIG_THUMBS]);
        }
        // check subtitles
        // check overlays
        // check drm
        return true;
    }

    function initialize(fjplaylist, fjappid, fjscreenMode, fjbackLink, fjloop, fjautoStart) {
        if (fjautoStart === true || fjautoStart === false) {
            autoStart = fjautoStart;
        } else {
            autoStart = false;
        }
        if (fjloop === true || fjloop === false) {
            loop = fjloop;
        } else {
            loop = false;
        }
        if (fjbackLink === true || fjbackLink === false) {
            backLink = fjbackLink;
        } else {
            backLink = false;
        }
        playlist = fjplaylist;
        screenMode = fjscreenMode;
        appid = fjappid;
        return checkPlaylist();
    }

    function toString() {
        return 'loop:' + loop + ', autostart:' + autoStart +
            ', appid:' + appid + ', screenMode:' + screenMode + ', backLink:' + backLink;
    }

    function getItemsNbr() {
        return playlist.length;
    }

    instance = {
        initialize: initialize,
        toString: toString,
        getItemsNbr: getItemsNbr
    };

    setup();

    return instance;
};
// let configuration = Configuration();

export default Configuration;