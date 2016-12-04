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
	
	var _Version = __webpack_require__(5);
	
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
	        return 'loop:' + loop + ', autostart:' + autoStart + ', appid:' + appid + ', screenMode:' + screenMode + ', backLink:' + backLink;
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
	var FJCONFIG_STARTING_MODE = exports.FJCONFIG_STARTING_MODE = 'FJStartingMode';
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @module Player
	 * @description The Player is the player module used to play items.
	 */
	function Player() {
	    var instance = void 0,
	        playlist = void 0,
	        appid = void 0,
	        screenMode = void 0,
	        autoStart = void 0,
	        loop = void 0,
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
	        return 'loop:' + loop + ', autostart:' + autoStart + ', appid:' + appid + ', screenMode:' + screenMode + ', backLink:' + backLink;
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
	
	exports.default = Player;
	module.exports = exports['default'];

/***/ },
/* 5 */
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