(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fjplayer", [], factory);
	else if(typeof exports === 'object')
		exports["Fjplayer"] = factory();
	else
		root["Fjplayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Configuration = undefined;
	
	var _Configuration = __webpack_require__(1);
	
	var _Configuration2 = _interopRequireDefault(_Configuration);
	
	var _Player = __webpack_require__(4);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Version = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Shove both of these into the global scope
	var context = typeof window !== 'undefined' && window || global; /**
	                                                                  * The entry point for the library FJplayer.JS
	                                                                  */
	
	
	var fjplayer = context.fjplayer;
	
	if (!fjplayer) {
	  fjplayer = context.fjplayer = {};
	}
	
	fjplayer.Configuration = _Configuration2.default;
	fjplayer.Player = _Player2.default;
	fjplayer.Version = (0, _Version.getVersionString)();
	
	exports.default = fjplayer;
	exports.Configuration = _Configuration2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _constants = __webpack_require__(2);
	
	var Const = _interopRequireWildcard(_constants);
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @module Configuration
	 * @description The Configuration is the primary module used to set configuration and .
	 */
	function Configuration() {
	    var instance = void 0,
	        playlist = void 0,
	        appid = void 0,
	        screenMode = void 0,
	        autoStart = void 0,
	        loop = void 0,
	        validConf = void 0,
	        logger = void 0,
	        backLink = void 0;
	
	    function setup() {
	        playlist = [];
	        appid = '';
	        logger = new _Logger2.default('Configuration');
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
	
	            // check ads
	            if (item[Const.FJCONFIG_CLASS] === Const.FJCONFIG_CLASS_ADS) {
	                if (item[Const.FJCONFIG_ADS_LINK_URL] === null || item[Const.FJCONFIG_ADS_LINK_URL] === undefined) {
	                    logger.error('Ads: BAD  or missing link url Value ! ');
	                    return false;
	                }
	            }
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
	                logger.log(' playlist Drm Herders on Request License  of item  ', i, drm[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
	                logger.log(' playlist Drm Herders on Request Segments  of item  ', i, drm[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
	            }
	            // check subtitles
	            list = item[Const.FJCONFIG_SUBTITLES];
	            if (list !== undefined && list.length > 0) {
	                for (j = 0; j < list.length; j++) {
	                    subItem = list[j];
	                    if (subItem[Const.FJCONFIG_SUB_LABEL]) {
	                        logger.log(' playlist Subtitle label ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_SUB_LABEL]);
	                    } else {
	                        logger.error('Empty Subtitle label ', j, ' of item ! ', i);
	                        return false;
	                    }
	                    if (subItem[Const.FJCONFIG_SUB_LANG]) {
	                        logger.log(' playlist Subtitle lang ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_SUB_LANG]);
	                    } else {
	                        logger.error('Empty Subtitle lang ', j, ' of item ! ', i);
	                        return false;
	                    }
	                    if (subItem[Const.FJCONFIG_SUB_SRC]) {
	                        logger.log(' playlist Subtitle src ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_SUB_SRC]);
	                    } else {
	                        logger.error('Empty Subtitle src ', j, ' of item ! ', i);
	                        return false;
	                    }
	                }
	            }
	
	            // check overlays
	            list = item[Const.FJCONFIG_OVERLAYS];
	            if (list !== undefined && list.length > 0) {
	                for (j = 0; j < list.length; j++) {
	                    subItem = list[j];
	                    if (subItem[Const.FJCONFIG_OVER_DATA]) {
	                        logger.log(' playlist Overlay data ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_OVER_DATA]);
	                    } else {
	                        logger.error('Empty Overlay data', j, ' of item ! ', i);
	                        return false;
	                    }
	                    if (subItem[Const.FJCONFIG_OVER_URL]) {
	                        logger.log(' playlist Overlay url ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_OVER_URL]);
	                    } else {
	                        logger.error('Empty Overlay url', j, ' of item ! ', i);
	                        return false;
	                    }
	                    if (subItem[Const.FJCONFIG_OVER_DURATION]) {
	                        if (subItem[Const.FJCONFIG_OVER_DURATION] === parseInt(subItem[Const.FJCONFIG_OVER_DURATION], 10)) {
	                            logger.log(' playlist Overlay duration ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_OVER_DURATION]);
	                        } else {
	                            logger.error('Empty Overlay duration ', j, ' of item ! ', i, 'is not integer !');
	                            return false;
	                        }
	                    } else {
	                        logger.error('Empty Overlay duration ', j, ' of item ! ', i);
	                        return false;
	                    }
	                    if (subItem[Const.FJCONFIG_OVER_SHOW_AT]) {
	                        if (subItem[Const.FJCONFIG_OVER_SHOW_AT] === parseInt(subItem[Const.FJCONFIG_OVER_SHOW_AT], 10)) {
	                            logger.log(' playlist Overlay show at ', j, ' of item  ', i, 'is', subItem[Const.FJCONFIG_OVER_SHOW_AT]);
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
	
	        if (Const.FJCONFIG_SCREEN_MODES.indexOf(screenMode) === -1) {
	            logger.error('BAD SCREEN MODE Value ! ', screenMode);
	            return false;
	        }
	
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
	        return 'loop:' + loop + ', autostart:' + autoStart + ', appid:' + appid + ', screenMode:' + screenMode + ', backLink:' + backLink;
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
	
	    function getPlayerScreenMode() {
	        return screenMode;
	    }
	
	    instance = {
	        initialize: initialize,
	        toString: toString,
	        isValid: isValid,
	        getItemConfAt: getItemConfAt,
	        getItemsNbr: getItemsNbr,
	        getPlayerScreenMode: getPlayerScreenMode
	    };
	
	    setup();
	
	    return instance;
	};
	// let configuration = Configuration();
	
	exports.default = Configuration;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @module Constants
	 */
	var FJCONFIG_LOOP = exports.FJCONFIG_LOOP = 'FJLoop';
	var FJCONFIG_START_PLAYING = exports.FJCONFIG_START_PLAYING = 'FJStartplaying';
	var FJCONFIG_ENABLE_BACK_LINK = exports.FJCONFIG_ENABLE_BACK_LINK = 'FJEnableFullScreenBackLink';
	var FJCONFIG_APP_ID = exports.FJCONFIG_APP_ID = 'FJAppId';
	var FJCONFIG_CLASS = exports.FJCONFIG_CLASS = 'FJClass';
	var FJCONFIG_TYPE = exports.FJCONFIG_TYPE = 'FJType';
	var FJCONFIG_TITLE = exports.FJCONFIG_TITLE = 'FJTitle';
	var FJCONFIG_SRC = exports.FJCONFIG_SRC = 'FJSrc';
	var FJCONFIG_POSTER = exports.FJCONFIG_POSTER = 'FJPoster';
	var FJCONFIG_ADS_LINK_URL = exports.FJCONFIG_ADS_LINK_URL = 'FJAdsLinkUrl';
	var FJCONFIG_ADS_ESCAPE_AT = exports.FJCONFIG_ADS_ESCAPE_AT = 'FJAdsEscapeAt';
	var FJCONFIG_THUMBS = exports.FJCONFIG_THUMBS = 'FJThumbs';
	var FJCONFIG_SUBTITLES = exports.FJCONFIG_SUBTITLES = 'FJSubtitles';
	var FJCONFIG_OVERLAYS = exports.FJCONFIG_OVERLAYS = 'FJOverlays';
	var FJCONFIG_DRM = exports.FJCONFIG_DRM = 'FJDrm';
	var FJCONFIG_SUB_LABEL = exports.FJCONFIG_SUB_LABEL = 'FJSubLabel';
	var FJCONFIG_SUB_SRC = exports.FJCONFIG_SUB_SRC = 'FJSubSrc';
	var FJCONFIG_SUB_LANG = exports.FJCONFIG_SUB_LANG = 'FJSubLang';
	var FJCONFIG_OVER_DATA = exports.FJCONFIG_OVER_DATA = 'FJOverData';
	var FJCONFIG_OVER_URL = exports.FJCONFIG_OVER_URL = 'FJOverUrl';
	var FJCONFIG_OVER_DURATION = exports.FJCONFIG_OVER_DURATION = 'FJOverDuration';
	var FJCONFIG_OVER_SHOW_AT = exports.FJCONFIG_OVER_SHOW_AT = 'FJOverShowAt';
	var FJCONFIG_DRM_SCHEME = exports.FJCONFIG_DRM_SCHEME = 'FJDrmScheme';
	var FJCONFIG_DRM_LICENSE_SERVER = exports.FJCONFIG_DRM_LICENSE_SERVER = 'FJLicenceServer';
	var FJCONFIG_DRM_HEADER_LICENSE_REQUEST = exports.FJCONFIG_DRM_HEADER_LICENSE_REQUEST = 'FJHeadersOnLicenseRequest';
	var FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST = exports.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST = 'FJHeadersOnSegmentsRequest';
	
	var FJCONFIG_TRUE = exports.FJCONFIG_TRUE = 'true';
	var FJCONFIG_FALSE = exports.FJCONFIG_FALSE = 'false';
	var FJCONFIG_BOOLEAN = exports.FJCONFIG_BOOLEAN = { FJCONFIG_TRUE: FJCONFIG_TRUE, FJCONFIG_FALSE: FJCONFIG_FALSE };
	
	var FJCONFIG_CLASS_ADS = exports.FJCONFIG_CLASS_ADS = 'ads';
	var FJCONFIG_CLASS_VOD = exports.FJCONFIG_CLASS_VOD = 'vod';
	var FJCONFIG_CLASS_LIVE = exports.FJCONFIG_CLASS_LIVE = 'live';
	var FJCONFIG_CLASSES = exports.FJCONFIG_CLASSES = [FJCONFIG_CLASS_ADS, FJCONFIG_CLASS_LIVE, FJCONFIG_CLASS_VOD];
	
	var FJCONFIG_SCREEN_MODE_MINIMAL = exports.FJCONFIG_SCREEN_MODE_MINIMAL = 'minimal';
	var FJCONFIG_SCREEN_MODE_CINEMA = exports.FJCONFIG_SCREEN_MODE_CINEMA = 'cinema';
	var FJCONFIG_SCREEN_MODE_MAXIMAL = exports.FJCONFIG_SCREEN_MODE_MAXIMAL = 'maximal';
	var FJCONFIG_SCREEN_MODES = exports.FJCONFIG_SCREEN_MODES = [FJCONFIG_SCREEN_MODE_MINIMAL, FJCONFIG_SCREEN_MODE_CINEMA, FJCONFIG_SCREEN_MODE_MAXIMAL];
	
	var FJCONFIG_TYPE_MP4 = exports.FJCONFIG_TYPE_MP4 = 'video/mp4';
	var FJCONFIG_TYPE_DASH = exports.FJCONFIG_TYPE_DASH = 'dash';
	var FJCONFIG_TYPES = exports.FJCONFIG_TYPES = [FJCONFIG_TYPE_MP4, FJCONFIG_TYPE_DASH];
	
	var FJCONFIG_DRM_SCHEME_FORJA = exports.FJCONFIG_DRM_SCHEME_FORJA = 'forja';
	var FJCONFIG_DRM_SCHEME_CLEARKEY = exports.FJCONFIG_DRM_SCHEME_CLEARKEY = 'clearKey';
	var FJCONFIG_DRM_SCHEME_WIDEVINE = exports.FJCONFIG_DRM_SCHEME_WIDEVINE = 'widevine';
	var FJCONFIG_DRM_SCHEME_PLAYREADY = exports.FJCONFIG_DRM_SCHEME_PLAYREADY = 'playReady';
	var FJCONFIG_DRM_SCHEMES = exports.FJCONFIG_DRM_SCHEMES = [FJCONFIG_DRM_SCHEME_FORJA, FJCONFIG_DRM_SCHEME_CLEARKEY, FJCONFIG_DRM_SCHEME_WIDEVINE, FJCONFIG_DRM_SCHEME_PLAYREADY];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @module Logger
	 * @description The Configuration is the primary module used to set configuration and .
	 */
	
	function Logger(moduleName) {
	
	    var instance = void 0,
	        userServer = void 0,
	        serverLogger = void 0,
	        method = void 0,
	        request = void 0,
	        modName = '[' + moduleName + ']',
	        useConsole = void 0;
	
	    function setup(debug) {
	        useConsole = debug;
	        userServer = false;
	    }
	
	    function initialize(serverUrl, serverMethod) {
	        serverLogger = serverUrl;
	        method = serverMethod;
	        request = new XMLHttpRequest();
	        userServer = true;
	    }
	
	    function error() {
	        var msg;
	        var i;
	        var args;
	        var params;
	        args = Array.prototype.slice.call(arguments);
	        args.splice(0, 0, modName);
	        if (useConsole) {
	            console.error.apply(console, args);
	        }
	        if (userServer) {
	            for (i = 0; i < arguments.length; i++) {
	                msg = msg + arguments[i];
	            }
	            params = 'msg=' + modName + ' ERROR: ' + encodeURIComponent(msg);
	            request.open(method, serverLogger);
	            request.send(params);
	        }
	    }
	
	    function warn() {
	        var msg;
	        var i;
	        var args;
	        var params;
	        args = Array.prototype.slice.call(arguments);
	        args.splice(0, 0, modName);
	        if (useConsole) {
	            console.warn.apply(console, args);
	        }
	        if (userServer) {
	            for (i = 0; i < arguments.length; i++) {
	                msg = msg + arguments[i];
	            }
	            params = 'msg=' + modName + ' WARN: ' + encodeURIComponent(msg);
	            request.open(method, serverLogger);
	            request.send(params);
	        }
	    }
	
	    function log() {
	        var msg;
	        var i;
	        var args;
	        var params;
	        args = Array.prototype.slice.call(arguments);
	        args.splice(0, 0, modName);
	        if (useConsole) {
	            console.log.apply(console, args);
	        }
	        if (userServer) {
	            for (i = 0; i < arguments.length; i++) {
	                msg = msg + arguments[i];
	            }
	            params = 'msg=' + modName + ' LOG: ' + encodeURIComponent(msg);
	            request.open(method, serverLogger);
	            request.send(params);
	        }
	    }
	    instance = {
	        initialize: initialize,
	        error: error,
	        warn: warn,
	        log: log
	    };
	
	    setup(true);
	
	    return instance;
	};
	
	exports.default = Logger;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _constants = __webpack_require__(2);
	
	var Const = _interopRequireWildcard(_constants);
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	var _Video = __webpack_require__(5);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	__webpack_require__(7);
	
	/**
	 * @module Player
	 * @description The Player is the player module used to play items.
	 */
	
	/* import Menu from './Menu';
	import Thumbs from './Thumbs';
	import Volume from './Volume'; */
	function Player() {
	    var instance = void 0,
	        logger = void 0,
	        initialized = void 0,
	        divid = void 0,
	        conf = void 0,
	        mainDivElement = void 0,
	        videoDivElement = void 0,
	        overlaysDivElement = void 0,
	        video = void 0,
	
	    /* menu,
	     thumbMgr,
	    VolumeMgr,*/
	    itemPlaying = void 0,
	        started = void 0;
	
	    function setup() {
	        video = null;
	        conf = null;
	        videoDivElement = null;
	        mainDivElement = null;
	        started = false;
	        initialized = false;
	        divid = '';
	        itemPlaying = 0;
	        overlaysDivElement = null;
	        logger = new _Logger2.default('Player');
	        /* menu = new Menu('menuObj', 'videoElement', 'menuTracksArray', 'settingBtnOb');
	        thumbMgr = new Thumbs('tiObj', 'tdObj', 'pbObj');
	        VolumeMgr = new Volume(); */
	        itemPlaying = 0;
	    }
	
	    function prepareUI() {
	        logger.log(' Preparing UI ..');
	        // creating video
	        videoDivElement = document.createElement('video');
	        mainDivElement.appendChild(videoDivElement);
	        if (conf.getPlayerScreenMode() === Const.FJCONFIG_SCREEN_MODE_MINIMAL) {
	            videoDivElement.className += ' mainVideoSmall';
	        } else if (conf.getPlayerScreenMode() === Const.FJCONFIG_SCREEN_MODE_CINEMA) {
	            videoDivElement.className += ' mainVideoCinema';
	        } else {
	            videoDivElement.className += ' mainVideoBig';
	        }
	        // overlay
	        overlaysDivElement = document.createElement('div');
	        mainDivElement.appendChild(overlaysDivElement);
	        // VolumeMgr.setVolume(videoElement.volume * 100);
	        video = new _Video2.default();
	        // menu.setSubs(0);
	        return true;
	    }
	
	    function goNext() {
	        // go next cbx
	        logger.log(' We are asked to go next !!!');
	        itemPlaying++;
	        if (itemPlaying < conf.getItemsNbr()) {
	            video.initialize(conf.getItemConfAt(itemPlaying), videoDivElement, goNext);
	            video.setTracks(overlaysDivElement);
	            video.View();
	        } else {
	            logger.log(' no next to play , so we loop again ');
	            // todo
	        }
	    }
	
	    function initialize(fjconf, fjdivid) {
	        mainDivElement = document.getElementById(fjdivid);
	        if (mainDivElement === null) {
	            logger.error('BAD div ID Element ! ', fjdivid);
	            return false;
	        }
	        logger.log(' div Element is found ', fjdivid);
	        if (fjconf === null || fjconf.isValid() === 0) {
	            logger.error('BAD configuration object ! ');
	            return false;
	        }
	        conf = fjconf;
	        divid = fjdivid;
	        initialized = true;
	        logger.log(' used configuration was found and its valid, has items:  ', conf.getItemsNbr());
	        return prepareUI();
	    }
	
	    function toString() {
	        return 'divid:' + divid + ', itemPlaying:' + itemPlaying + ', divElement:' + mainDivElement + ', initialized:' + initialized + ', started:' + started + ', conf:' + conf.toString();
	    }
	
	    function playAt(itemnbr) {
	        var ok = true;
	        if (itemnbr < conf.getItemsNbr()) {
	            video.initialize(conf.getItemConfAt(itemnbr), videoDivElement, goNext);
	            video.setTracks(overlaysDivElement);
	            video.View();
	            itemPlaying = itemnbr;
	        } else {
	            logger.error(' item nubmerasked to play do not exist ', itemnbr);
	            ok = false;
	        }
	        return ok;
	    }
	
	    instance = {
	        initialize: initialize,
	        toString: toString,
	        playAt: playAt
	    };
	
	    setup();
	
	    return instance;
	};
	
	exports.default = Player;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _constants = __webpack_require__(2);
	
	var Const = _interopRequireWildcard(_constants);
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	var _Overlay = __webpack_require__(6);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @module Video
	 * @description The Video is the video module used to play item:
	 *    it's only concernedabout setting tracks of items and preparing video contextes..
	 */
	function Video() {
	
	    var instance = void 0,
	        logger = void 0,
	        mediaConf = void 0,
	        vidElement = void 0,
	        videoGoNextCbx = void 0,
	        tracksArray = void 0,
	        overlaysArray = void 0,
	        indexThumbsTrack = void 0,
	        isVideoisAds = void 0,
	        isContainsSubs = void 0,
	        isContainsLangs = void 0,
	        overlaysDivElement = void 0,
	
	    /* dashContext,
	     dashPlayer,*/
	    isContainsThumbs = void 0;
	
	    function setup() {
	        indexThumbsTrack = 0;
	        mediaConf = null;
	        /*  dashContext = null;
	          dashPlayer = null;*/
	        vidElement = null;
	        isContainsLangs = false;
	        isVideoisAds = false;
	        isContainsSubs = false;
	        isContainsLangs = false;
	        isContainsThumbs = false;
	        overlaysDivElement = null;
	        videoGoNextCbx = null;
	        overlaysArray = [];
	        tracksArray = { 'subs': [], 'audio': [] };
	        logger = new _Logger2.default('Video');
	    }
	
	    function initialize(fjmediaConf, videoElement, vidGoNextCbx) {
	        var source;
	        videoGoNextCbx = vidGoNextCbx;
	        mediaConf = fjmediaConf;
	        vidElement = videoElement;
	        logger.log('Initiliazing for  ', mediaConf);
	        if (mediaConf[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
	            logger.log('Startup for Dash ');
	            // DASH TODO !!
	            // dashContext = new Dash.di.DashContext();
	            // dashPlayer = new MediaPlayer(dashContext);
	            // dashPlayer.startup();
	        } else if (mediaConf[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_MP4) {
	            logger.log('Startup for NON Dash ');
	            source = document.createElement('source');
	            source.src = mediaConf[Const.FJCONFIG_SRC];
	            source.type = mediaConf[Const.FJCONFIG_TYPE];
	            vidElement.appendChild(source);
	        } else {
	            logger.error('NON Managed Type ! ', mediaConf[Const.FJCONFIG_TYPE]);
	            return false;
	        }
	        return true;
	    }
	
	    function View() {
	        var i;
	        if (mediaConf[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
	            logger.log('View for Dash ');
	            /* dashPlayer.attachView(vidElement);
	            dashPlayer.setAutoPlay(true);
	            dashPlayer.attachSource(mediaConf[Const.FJCONFIG_SRC]);
	            dashPlayer.setAutoSwitchQuality(true);*/
	        } else {
	            logger.log('View for NON Dash ');
	            vidElement.play();
	        }
	        // launch Overlays
	        logger.log('Launching overlays : ', overlaysArray.length);
	        for (i = 0; i < overlaysArray.length; i++) {
	            overlaysArray[i].Launch();
	        }
	    }
	
	    function setTracks(overdivElement) {
	        var newObj, subs, overs, i, item, track;
	        overlaysDivElement = overdivElement;
	        // setoverlays
	        // check : if Ads ; show bar info with countdown and hide controls
	        if (mediaConf[Const.FJCONFIG_CLASS] === Const.FJCONFIG_CLASS_ADS) {
	            isVideoisAds = true;
	            logger.log('setTracks : Setting overlays  class > ADS >');
	            overlaysArray[0] = new _Overlay2.default(vidElement, overlaysDivElement, videoGoNextCbx, null, 0, mediaConf[Const.FJCONFIG_ADS_ESCAPE_AT], mediaConf[Const.FJCONFIG_ADS_LINK_URL]);
	        } else {
	            isVideoisAds = false;
	            overs = mediaConf[Const.FJCONFIG_OVERLAYS];
	            if (overs) {
	                logger.log('setTracks : Setting overlays  class > Movie ', overs.length);
	                for (i = 0; i < overs.length; i++) {
	                    item = overs[i];
	                    overlaysArray[i] = new _Overlay2.default(vidElement, overlaysDivElement, videoGoNextCbx, item[Const.FJCONFIG_OVER_DATA], item[Const.FJCONFIG_OVER_SHOW_AT], item[Const.FJCONFIG_OVER_DURATION], item[Const.FJCONFIG_OVER_URL]);
	                }
	            }
	
	            logger.log(' Video is an ADS >', isVideoisAds);
	
	            // set  thumbs
	            if (mediaConf[Const.FJCONFIG_THUMBS]) {
	                logger.log('setTracks : Setting thumbs ');
	                track = document.createElement('track');
	                track.src = mediaConf[Const.FJCONFIG_THUMBS];
	                track.kind = 'metadata';
	                vidElement.appendChild(track);
	            }
	            // set  subs
	            subs = mediaConf[Const.FJCONFIG_SUBTITLES];
	            if (subs) {
	                logger.log('setTracks : Setting substitles  ', subs.length);
	                for (i = 0; i < subs.length; i++) {
	                    track = document.createElement('track');
	                    item = subs[i];
	                    track.kind = 'subtitles';
	                    track.src = item[Const.FJCONFIG_SUB_SRC];
	                    track.srclang = item[Const.FJCONFIG_SUB_LANG];
	                    track.label = item[Const.FJCONFIG_SUB_LABEL];
	                    vidElement.appendChild(track);
	                }
	            }
	            vidElement.load();
	            logger.log('after inserting tracks in video , we have > ', vidElement);
	            // looking for audio tracks
	            if (vidElement.audioTracks) {
	                logger.log('setTracks : Setting audioTracks  ', vidElement.audioTracks.length);
	                for (i = 0; i < vidElement.audioTracks.length; i++) {
	                    isContainsLangs = true;
	                    newObj = { 'label': vidElement.audioTracks[i].language, 'index': i, 'actif': true };
	                    tracksArray.audio.push(newObj);
	                }
	            }
	            // looking for metadata  & subtitles tracks
	            if (vidElement.textTracks) {
	                newObj = { 'label': 'off', 'index': -1, 'actif': true };
	                tracksArray.subs.push(newObj);
	                for (i = 0; i < vidElement.textTracks.length; i++) {
	                    if (vidElement.textTracks[i].kind === 'metadata') {
	                        indexThumbsTrack = i;
	                        logger.log('>>>> thumb track found @ ', i, '>> ', vidElement.textTracks[i]);
	                        isContainsThumbs = true;
	                    } else if (vidElement.textTracks[i].kind === 'subtitles') {
	                        newObj = { 'label': vidElement.textTracks[i].label, 'index': i, 'actif': false };
	                        tracksArray.subs.push(newObj);
	                        isContainsSubs = true;
	                    } else {
	                        logger.log('unknown type of tracks ', vidElement.textTracks[i].kind);
	                    }
	                }
	            }
	        }
	    }
	
	    function getThumbsTrackIndex() {
	        return indexThumbsTrack;
	    }
	
	    function containsThumbs() {
	        return isContainsThumbs;
	    }
	
	    function containsSubs() {
	        return isContainsSubs;
	    }
	
	    function containsLangs() {
	        return isContainsLangs;
	    }
	
	    instance = {
	        initialize: initialize,
	        setTracks: setTracks,
	        getThumbsTrackIndex: getThumbsTrackIndex,
	        containsThumbs: containsThumbs,
	        containsSubs: containsSubs,
	        containsLangs: containsLangs,
	        View: View
	    };
	
	    setup();
	
	    return instance;
	};
	
	exports.default = Video;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(7);
	
	/**
	 * @module Overlay
	 * @description The Overlay is the primary Overlay used to set Overlays :
	 *     it manage overlay for information ads on media or ovelay on ads video.
	 */
	function Overlay(_vidElement, _divElemnt, _vidGoNextCbx, _data, _showAt, _showDuration, _url) {
	    var instance = void 0,
	        videoGoNectCbx = _vidGoNextCbx,
	        videoDivElement = _vidElement,
	        divElemnt = _divElemnt,
	        adData = _data,
	        showAt = _showAt,
	        overDuration = _showDuration,
	        url = _url,
	        startTimer = void 0,
	        endTimer = void 0,
	        countDownTimer = void 0,
	        isItAds = false,
	        started = false,
	        finished = false,
	        blocked = false,
	        shownduration = _showDuration,
	        logger = new _Logger2.default('Overlay');
	
	    function Escape() {
	        // todo notify the video player to go to next video
	        logger.error(' must escape the ads ');
	        videoGoNectCbx();
	    }
	
	    function countDownAds() {
	        if (shownduration > 0) {
	            shownduration--;
	            divElemnt.innerHTML = 'your ads will end in ' + shownduration + ' sec';
	            countDownTimer = setTimeout(countDownAds, 1000);
	        } else {
	            divElemnt.innerHTML = 'you ads is done, click to Escape';
	            divElemnt.onclick = function () {
	                Escape();
	            };
	            finished = true;
	        }
	    }
	
	    function clicked() {
	        window.open(url, '_blank');
	    }
	
	    function StopOverlay() {
	        // hide the div
	        // hide the overlay , empty the div
	        divElemnt.style.visibility = 'hidden';
	        while (divElemnt.hasChildNodes()) {
	            divElemnt.removeChild(divElemnt.firstChild);
	        }
	        divElemnt.innerHTML = '';
	        finished = true;
	    }
	
	    function StartOverlay() {
	        started = true;
	        endTimer = setTimeout(StopOverlay, overDuration * 1000);
	        // show the div
	        divElemnt.style.cursor = 'pointer';
	        divElemnt.onclick = function () {
	            clicked();
	        };
	        divElemnt.style.visibility = 'visible';
	        logger.log('you overlay  just and will end in ' + overDuration + ' sec');
	    }
	
	    function Launch() {
	        if (!blocked) {
	            logger.log('you overlay ADS and will end in ' + overDuration + ' sec');
	            divElemnt.style.cursor = 'pointer';
	            if (isItAds) {
	                videoDivElement.style.cursor = 'pointer';
	                videoDivElement.onclick = function () {
	                    clicked();
	                };
	                divElemnt.style.visibility = 'visible';
	                started = true;
	                countDownTimer = setTimeout(countDownAds, 1000);
	            } else {
	                startTimer = setTimeout(StartOverlay, showAt * 1000);
	            }
	        } else {
	            logger.error(' Blocked overlay !');
	        }
	    }
	
	    function Cancel() {
	        if (!blocked) {
	            logger.log('fjOverlays : Cancel overlay was to be triggred to start @ ', showAt, ' for ', overDuration, 'sec ');
	            // stop timers
	            if (isItAds) {
	                clearTimeout(countDownTimer);
	            } else {
	                clearTimeout(startTimer);
	                clearTimeout(endTimer);
	            }
	            // hide the overlay , empty the div
	            divElemnt.style.visibility = 'hidden';
	            while (divElemnt.hasChildNodes()) {
	                divElemnt.removeChild(divElemnt.firstChild);
	            }
	            divElemnt.innerHTML = '';
	        }
	    }
	
	    function setup() {
	        logger.log('fjOverlays : overlay will triggred to start @ ', showAt, ' for ', overDuration, 'sec , ang go for ', url);
	        if (divElemnt === null || divElemnt === undefined) {
	            logger.error('invalid div used for overlay ! will be blocked');
	            blocked = true;
	        } else {
	            // set div info
	            if (adData != null) {
	                divElemnt.innerHTML = adData;
	                divElemnt.className += ' adDataBlock';
	                isItAds = false;
	            } else {
	                isItAds = true;
	                divElemnt.innerHTML = 'you ads will end in ' + shownduration + ' sec';
	                divElemnt.className += ' adInfoBlock';
	            }
	            if (url.substring(0, 7) !== 'http://' && url.substring(0, 8) !== 'https://') {
	                url = 'http://' + url;
	            }
	            divElemnt.style.visibility = 'hidden';
	        }
	    }
	
	    function isStarted() {
	        return started;
	    }
	
	    function isFinished() {
	        return finished;
	    }
	
	    function isBlocked() {
	        return blocked;
	    }
	    instance = {
	        Launch: Launch,
	        Cancel: Cancel,
	        isFinished: isFinished,
	        isStarted: isStarted,
	        isBlocked: isBlocked
	    };
	
	    setup();
	
	    return instance;
	};
	
	exports.default = Overlay;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".mainVideosmall {\n    background-color: black;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n    overflow: hidden;\n    margin: -8px;\n}\n\n.mainVideoCinema {\n    background-color: black;\n    margin-left: auto;\n    margin-right: auto;\n    width: 70%;\n    overflow: hidden;\n    margin: -8px;\n}\n\n.mainVideoBig {\n    background: black;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    margin: -8px;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n    /*dim the background*/\n}\n\n\n/* ---------------------- ADS style ------------------- */\n\n.adInfoBlockold {\n    position: absolute;\n    color: #f1c40f;\n    font-weight: bold;\n    top: 11px;\n    text-align: center;\n    font-size: 15px;\n    background: rgba(42, 42, 42, 0.75);\n    box-shadow: 3px 2px 2px #888888;\n    width: 100%;\n    z-index: 2147483647;\n}\n\n.adInfoBlock {\n    margin-right: 10%;\n    margin-left: 10%;\n    position: absolute;\n    color: #ffffff;\n    text-align: center;\n    background: rgba(75, 75, 75, 0.7);\n    width: 80%;\n    border: 1px solid;\n    border-color: #ffffff;\n    border-radius: 1px;\n    z-index: 2147483647\n}\n\n.adDataBlock {\n    position: absolute;\n    border: 1px;\n    top: 100px;\n    left: 100px;\n    color: #FFF;\n    text-align: center;\n    font-size: 20px;\n    background: rgba(42, 42, 42, 0.75);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    width: 640px;\n    padding: 50px 0;\n    z-index: 2147483647;\n}\n\n.ad-hiding-transition {\n    -webkit-transition: opacity 0.4s ease-in-out;\n    -moz-transition: opacity 0.4s ease-in-out;\n    -ms-transition: opacity 0.4s ease-in-out;\n    -o-transition: opacity 0.4s ease-in-out;\n    transition: opacity 0.4s ease-in-out;\n}", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getVersionString = getVersionString;
	var VERSION = '0.2.0';
	
	function getVersionString() {
	    return VERSION;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Fjplayer.js.map