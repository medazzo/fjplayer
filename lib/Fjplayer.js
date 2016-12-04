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
	
	var _Version = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Shove both of these into the global scope
	/**
	 * The entry point for the library FJplayer.JS
	 */
	var context = typeof window !== 'undefined' && window || global;
	
	var fjplayer = context.fjplayer;
	
	if (!fjplayer) {
	  fjplayer = context.fjplayer = {};
	}
	
	fjplayer.Configuration = _Configuration2.default;
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
	        logger = new _Logger2.default();
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
	var FJCONFIG_SUBT_SRC = exports.FJCONFIG_SUBT_SRC = 'FJSubSrc';
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
	
	function Logger() {
	
	    var instance = void 0,
	        userServer = void 0,
	        serverLogger = void 0,
	        method = void 0,
	        request = void 0,
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
	        if (useConsole) {
	            console.error.apply(console, args);
	        }
	        if (userServer) {
	            for (i = 0; i < arguments.length; i++) {
	                msg = msg + arguments[i];
	            }
	            params = 'msg= ERROR: ' + encodeURIComponent(msg);
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
	        if (useConsole) {
	            console.warn.apply(console, args);
	        }
	        if (userServer) {
	            for (i = 0; i < arguments.length; i++) {
	                msg = msg + arguments[i];
	            }
	            params = 'msg= WARN: ' + encodeURIComponent(msg);
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
	        if (useConsole) {
	            console.log.apply(console, args);
	        }
	        if (userServer) {
	            for (i = 0; i < arguments.length; i++) {
	                msg = msg + arguments[i];
	            }
	            params = 'msg= LOG: ' + encodeURIComponent(msg);
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getVersionString = getVersionString;
	var VERSION = '0.0.1';
	
	function getVersionString() {
	    return VERSION;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Fjplayer.js.map