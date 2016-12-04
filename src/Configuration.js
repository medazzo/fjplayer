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
        validConf,
        logger,
        backLink;

    function setup() {
        playlist = [];
        appid = '';
        logger = new Logger('Configuration');
        screenMode = false;
        autoStart = false;
        loop = false;
        backLink = false;
        validConf = false;
    }

    function checkPlaylist() {
        var item = {};
        var subItem = {};
        var drm = {};
        var i, j, list;
        if (playlist === undefined) {
            return false;
        }
        if (playlist.length <= 0) {
            return false;
        }
        logger.log(' playlist count ', playlist.length);
        for (i = 0; i < playlist.length; i++) {
            item = playlist[i];
            // check item
            logger.log(' playlist class of item  ', i, 'is', item[Const.FJCONFIG_CLASS]);
            if (Const.FJCONFIG_CLASSES.indexOf(item[Const.FJCONFIG_CLASS]) === -1) {
                logger.error('BAD class Value ! ');
                return false;
            }
            logger.log(' playlist type of item  ', i, 'is', item[Const.FJCONFIG_TYPE]);
            if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
                logger.error('BAD type Value ! ');
                return false;
            }
            logger.log(' playlist title of item  ', i, 'is', item[Const.FJCONFIG_TITLE]);
            if (!item[Const.FJCONFIG_TITLE]) {
                logger.error('BAD title Value ! ');
                return false;
            }
            logger.log(' playlist src of item  ', i, 'is', item[Const.FJCONFIG_SRC]);
            if (!item[Const.FJCONFIG_SRC]) {
                logger.error('BAD src Value ! ');
                return false;
            }
            logger.log(' playlist poster of item  ', i, 'is', item[Const.FJCONFIG_POSTER]);
            logger.log(' playlist thumbs of item  ', i, 'is', item[Const.FJCONFIG_THUMBS]);

            // check drm
            drm = playlist[Const.FJCONFIG_DRM];
            if (drm !== undefined) {
                if (Const.FJCONFIG_DRM_SCHEMES.indexOf(drm[Const.FJCONFIG_DRM_SCHEME]) === -1) {
                    logger.error('BAD DRM Scheme Value ! ', drm[Const.FJCONFIG_DRM_SCHEME]);
                    return false;
                }
                if (drm[Const.FJCONFIG_DRM_LICENSE_SERVER]) {
                    logger.log(' playlist Server License of item  ', i, 'is', drm[Const.FJCONFIG_DRM_LICENSE_SERVER]);
                } else {
                    logger.error('Empty Server License for  DRM Scheme  ! ');
                    return false;
                }
                logger.log(' playlist Drm Herders on Request License  of item  ',
                    i, drm[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
                logger.log(' playlist Drm Herders on Request Segments  of item  ',
                    i, drm[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
            }
            // check subtitles
            list = item[Const.FJCONFIG_SUBTITLES];
            if ((list !== undefined) && (list.length > 0)) {
                for (j = 0; j < list.length; j++) {
                    subItem = list[j];
                    if (subItem[Const.FJCONFIG_SUB_LABEL]) {
                        logger.log(' playlist Subtitle label ', j, ' of item  ', i, 'is',
                            subItem[Const.FJCONFIG_SUB_LABEL]);
                    } else {
                        logger.error('Empty Subtitle label ', j, ' of item ! ', i);
                        return false;
                    }
                    if (subItem[Const.FJCONFIG_SUB_LANG]) {
                        logger.log(' playlist Subtitle lang ', j, ' of item  ', i, 'is',
                            subItem[Const.FJCONFIG_SUB_LANG]);
                    } else {
                        logger.error('Empty Subtitle lang ', j, ' of item ! ', i);
                        return false;
                    }
                    if (subItem[Const.FJCONFIG_SUB_SRC]) {
                        logger.log(' playlist Subtitle src ', j, ' of item  ', i, 'is',
                            subItem[Const.FJCONFIG_SUB_SRC]);
                    } else {
                        logger.error('Empty Subtitle src ', j, ' of item ! ', i);
                        return false;
                    }
                }
            }

            // check overlays
            list = item[Const.FJCONFIG_OVERLAYS];
            if ((list !== undefined) && (list.length > 0)) {
                for (j = 0; j < list.length; j++) {
                    subItem = list[j];
                    if (subItem[Const.FJCONFIG_OVER_DATA]) {
                        logger.log(' playlist Overlay data ', j, ' of item  ', i, 'is',
                            subItem[Const.FJCONFIG_OVER_DATA]);
                    } else {
                        logger.error('Empty Overlay data', j, ' of item ! ', i);
                        return false;
                    }
                    if (subItem[Const.FJCONFIG_OVER_URL]) {
                        logger.log(' playlist Overlay url ', j, ' of item  ', i, 'is',
                            subItem[Const.FJCONFIG_OVER_URL]);
                    } else {
                        logger.error('Empty Overlay url', j, ' of item ! ', i);
                        return false;
                    }
                    if (subItem[Const.FJCONFIG_OVER_DURATION]) {
                        if ((subItem[Const.FJCONFIG_OVER_DURATION] ===
                                parseInt(subItem[Const.FJCONFIG_OVER_DURATION], 10))) {
                            logger.log(' playlist Overlay duration ', j, ' of item  ', i, 'is',
                                subItem[Const.FJCONFIG_OVER_DURATION]);
                        } else {
                            logger.error('Empty Overlay duration ', j, ' of item ! ', i, 'is not integer !');
                            return false;
                        }
                    } else {
                        logger.error('Empty Overlay duration ', j, ' of item ! ', i);
                        return false;
                    }
                    if (subItem[Const.FJCONFIG_OVER_SHOW_AT]) {
                        if ((subItem[Const.FJCONFIG_OVER_SHOW_AT] ===
                                parseInt(subItem[Const.FJCONFIG_OVER_SHOW_AT], 10))) {
                            logger.log(' playlist Overlay show at ', j, ' of item  ', i, 'is',
                                subItem[Const.FJCONFIG_OVER_SHOW_AT]);
                        } else {
                            logger.error('Empty Overlay show at ', j, ' of item ! ', i, 'is not integer !');
                            return false;
                        }
                    } else {
                        logger.error('Empty Overlay show at ', j, ' of item ! ', i);
                        return false;
                    }
                }
            }
        }
        logger.log('playlist cofiguration is ok ');
        return true;
    }

    function checkAppId(appid) {
        // todo
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
        if (fjappid) {
            logger.log(' Forja App Id is ', fjappid);
            if (checkAppId(fjappid)) {
                logger.log(' Forja App Id  ', fjappid, ' checked .');
            } else {
                logger.error('Forja App Id is not Acceptable ! ');
                return false;
            }
        } else {
            logger.error('Forja App Id is empty ! ');
            return false;
        }
        appid = fjappid;
        validConf = checkPlaylist();
        return validConf;
    }

    function isValid() {
        return validConf;
    }

    function toString() {
        return 'loop:' + loop + ', autostart:' + autoStart +
            ', appid:' + appid + ', screenMode:' + screenMode + ', backLink:' + backLink;
    }

    function getItemConfAt(index) {
        var item = null;
        if (index < playlist.length) {
            item = playlist[index];
        } else {
            logger.error(' bad index to ask for ', index);
        }
        return item;
    }

    function getItemsNbr() {
        return playlist.length;
    }

    instance = {
        initialize: initialize,
        toString: toString,
        isValid: isValid,
        getItemConfAt: getItemConfAt,
        getItemsNbr: getItemsNbr
    };

    setup();

    return instance;
};
// let configuration = Configuration();

export default Configuration;