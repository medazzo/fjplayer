(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fjplayer", [], factory);
	else if(typeof exports === 'object')
		exports["fjplayer"] = factory();
	else
		root["fjplayer"] = factory();
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Version = exports.Player = exports.Playlist = undefined;
	
	var _playlist = __webpack_require__(1);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _player = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./player\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _player2 = _interopRequireDefault(_player);
	
	var _Version = __webpack_require__(212);
	
	var _Version2 = _interopRequireDefault(_Version);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Shove both of these into the global scope
	var context = typeof window !== 'undefined' && window || global; /**
	                                                                  * The entry point for the library FJplayer.JS
	                                                                  */
	
	
	var fjplayer = context.fjplayer;
	
	if (!fjplayer) {
	  fjplayer = context.fjplayer = {};
	}
	
	fjplayer.Playlist = _playlist2.default;
	fjplayer.Player = _player2.default;
	fjplayer.Version = _Version2.default;
	
	exports.default = fjplayer;
	exports.Playlist = _playlist2.default;
	exports.Player = _player2.default;
	exports.Version = _Version2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Logger = __webpack_require__(2);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	var _constants = __webpack_require__(3);
	
	var Const = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *  Class playlist in whixh all the playliost will be checked and saved
	 */
	function Playlist() {
	    var logger = new _Logger2.default(this),
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
	            logger.log(' playlist Subtitle label is', subItem[Const.FJCONFIG_LABEL]);
	        } else {
	            logger.error('Empty Subtitle label ');
	            return false;
	        }
	        if (subItem[Const.FJCONFIG_LANG]) {
	            logger.log(' playlist Subtitle lang is', subItem[Const.FJCONFIG_LANG]);
	        } else {
	            logger.error('Empty Subtitle lang  ');
	            return false;
	        }
	        if (subItem[Const.FJCONFIG_SRC]) {
	            logger.log(' playlist Subtitle src is', subItem[Const.FJCONFIG_SRC]);
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
	            if (val === parseInt(val, 10)) {
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
	            if (val === parseInt(val, 10)) {
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
	        logger.log(' playlist Drm Herders on Request License  of item  ', drm[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
	        logger.log(' playlist Drm Herders on Request Segments  of item  ', drm[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
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
	        if (item[Const.FJCONFIG_SRC] === Const.FJCONFIG_ADS_CLASS_MID_ROLL && (item[Const.FJCONFIG_SHOW_AT] === null || item[Const.FJCONFIG_SHOW_AT] === undefined)) {
	            logger.error('Missing Show At for mid Roll Class ! ');
	            return false;
	        }
	        if (item[Const.FJCONFIG_URL] !== null && item[Const.FJCONFIG_URL] !== '') {
	            logger.log(' playlist Overlay url ', item[Const.FJCONFIG_URL]);
	        } else {
	            logger.error('Empty Overlay url');
	            return false;
	        }
	        if (item[Const.FJCONFIG_CAN_ESCAPE] !== 'true' && item[Const.FJCONFIG_CAN_ESCAPE] !== true && item[Const.FJCONFIG_CAN_ESCAPE] !== 'false' && item[Const.FJCONFIG_CAN_ESCAPE] !== false) {
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
	        if (list !== undefined && list.length > 0) {
	            for (j = 0; j < list.length; j++) {
	                subItem = list[j];
	                if (checkAudio(subItem) === false) {
	                    return false;
	                }
	            }
	        }
	        // check ads
	        list = item[Const.FJCONFIG_ADS];
	        if (list !== undefined && list.length > 0) {
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
	        if (list !== undefined && list.length > 0) {
	            for (j = 0; j < list.length; j++) {
	                subItem = list[j];
	                if (checkSubtitle(subItem) === false) {
	                    return false;
	                }
	            }
	        }
	        // check overlays
	        list = item[Const.FJCONFIG_OVERLAYS];
	        if (list !== undefined && list.length > 0) {
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
	        if (list === undefined || list.length === 0) {
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
	        if (list === undefined || list.length === 0) {
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
	        if (list === undefined || list.length === 0) {
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
	        if (list === undefined || list.length === 0) {
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
	        if (list === undefined || list.length === 0) {
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
	exports.default = Playlist;
	module.exports = exports['default'];

/***/ },

/***/ 2:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @module Logger
	 * @description The Configuration is the primary module used to set configuration and .
	 */
	function Logger(klass) {
	    var m;
	    this.gState = true;
	    this.debug = {};
	
	    if (this.gState) {
	        for (m in console) {
	            if (typeof console[m] === 'function') {
	                this.debug[m] = console[m].bind(window.console, klass.constructor.name + ': ');
	            }
	        }
	    } else {
	        for (m in console) {
	            if (typeof console[m] === 'function') {
	                this.debug[m] = function () {};
	            }
	        }
	    }
	    return this.debug;
	};
	
	exports.default = Logger;
	module.exports = exports['default'];

/***/ },

/***/ 3:
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
	var FJCONFIG_CAN_ESCAPE = exports.FJCONFIG_CAN_ESCAPE = 'FJCanEscape';
	var FJCONFIG_THUMBS = exports.FJCONFIG_THUMBS = 'FJThumbs';
	var FJCONFIG_SUBTITLES = exports.FJCONFIG_SUBTITLES = 'FJSubtitles';
	var FJCONFIG_ADS = exports.FJCONFIG_ADS = 'FJAds';
	var FJCONFIG_AUDIOS = exports.FJCONFIG_AUDIOS = 'FJAudios';
	var FJCONFIG_OVERLAYS = exports.FJCONFIG_OVERLAYS = 'FJOverlays';
	var FJCONFIG_DRM = exports.FJCONFIG_DRM = 'FJDrm';
	var FJCONFIG_LABEL = exports.FJCONFIG_LABEL = 'FJLabel';
	var FJCONFIG_LANG = exports.FJCONFIG_LANG = 'FJLang';
	var FJCONFIG_DATA = exports.FJCONFIG_DATA = 'FJData';
	var FJCONFIG_URL = exports.FJCONFIG_URL = 'FJUrl';
	var FJCONFIG_DURATION = exports.FJCONFIG_DURATION = 'FJDuration';
	var FJCONFIG_SHOW_AT = exports.FJCONFIG_SHOW_AT = 'FJShowAt';
	
	var FJCONFIG_DRM_SCHEME = exports.FJCONFIG_DRM_SCHEME = 'FJDrmScheme';
	var FJCONFIG_DRM_LICENSE_SERVER = exports.FJCONFIG_DRM_LICENSE_SERVER = 'FJLicenceServer';
	var FJCONFIG_DRM_HEADER_LICENSE_REQUEST = exports.FJCONFIG_DRM_HEADER_LICENSE_REQUEST = 'FJHeadersOnLicenseRequest';
	var FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST = exports.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST = 'FJHeadersOnSegmentsRequest';
	
	var FJCONFIG_TRUE = exports.FJCONFIG_TRUE = 'true';
	var FJCONFIG_FALSE = exports.FJCONFIG_FALSE = 'false';
	var FJCONFIG_BOOLEAN = exports.FJCONFIG_BOOLEAN = { FJCONFIG_TRUE: FJCONFIG_TRUE, FJCONFIG_FALSE: FJCONFIG_FALSE };
	
	var FJCONFIG_CLASS_VOD = exports.FJCONFIG_CLASS_VOD = 'vod';
	var FJCONFIG_CLASS_LIVE = exports.FJCONFIG_CLASS_LIVE = 'live';
	var FJCONFIG_CLASSES = exports.FJCONFIG_CLASSES = [FJCONFIG_CLASS_LIVE, FJCONFIG_CLASS_VOD];
	
	var FJCONFIG_SCREEN_MODE_MINIMAL = exports.FJCONFIG_SCREEN_MODE_MINIMAL = 'minimal';
	var FJCONFIG_SCREEN_MODE_CINEMA = exports.FJCONFIG_SCREEN_MODE_CINEMA = 'cinema';
	var FJCONFIG_SCREEN_MODE_MAXIMAL = exports.FJCONFIG_SCREEN_MODE_MAXIMAL = 'maximal';
	var FJCONFIG_SCREEN_MODES = exports.FJCONFIG_SCREEN_MODES = [FJCONFIG_SCREEN_MODE_MINIMAL, FJCONFIG_SCREEN_MODE_CINEMA, FJCONFIG_SCREEN_MODE_MAXIMAL];
	
	var FJCONFIG_TYPE_MP4 = exports.FJCONFIG_TYPE_MP4 = 'video/mp4';
	var FJCONFIG_TYPE_DASH = exports.FJCONFIG_TYPE_DASH = 'dash';
	var FJCONFIG_TYPES = exports.FJCONFIG_TYPES = [FJCONFIG_TYPE_MP4, FJCONFIG_TYPE_DASH];
	
	var FJCONFIG_ADS_CLASS_PRE_ROLL = exports.FJCONFIG_ADS_CLASS_PRE_ROLL = 'pre-roll';
	var FJCONFIG_ADS_CLASS_MID_ROLL = exports.FJCONFIG_ADS_CLASS_MID_ROLL = 'mid-roll';
	var FJCONFIG_ADS_CLASS_POST_ROLL = exports.FJCONFIG_ADS_CLASS_POST_ROLL = 'post-roll';
	var FJCONFIG_ADS_CLASSES = exports.FJCONFIG_ADS_CLASSES = [FJCONFIG_ADS_CLASS_PRE_ROLL, FJCONFIG_ADS_CLASS_MID_ROLL, FJCONFIG_ADS_CLASS_POST_ROLL];
	
	var FJCONFIG_DRM_SCHEME_FORJA = exports.FJCONFIG_DRM_SCHEME_FORJA = 'forja';
	var FJCONFIG_DRM_SCHEME_CLEARKEY = exports.FJCONFIG_DRM_SCHEME_CLEARKEY = 'clearKey';
	var FJCONFIG_DRM_SCHEME_WIDEVINE = exports.FJCONFIG_DRM_SCHEME_WIDEVINE = 'widevine';
	var FJCONFIG_DRM_SCHEME_PLAYREADY = exports.FJCONFIG_DRM_SCHEME_PLAYREADY = 'playReady';
	var FJCONFIG_DRM_SCHEMES = exports.FJCONFIG_DRM_SCHEMES = [FJCONFIG_DRM_SCHEME_FORJA, FJCONFIG_DRM_SCHEME_CLEARKEY, FJCONFIG_DRM_SCHEME_WIDEVINE, FJCONFIG_DRM_SCHEME_PLAYREADY];
	
	var PlayerEvents = exports.PlayerEvents = {
	    STREAM_LOADED: 'STREAM_LOADED',
	    PLAYBACK_STARTED: 'PLAYBACK_STARTED',
	    PLAYBACK_PAUSED: 'PLAYBACK_PAUSED',
	    PLAYBACK_ENDED: 'PLAYBACK_ENDED',
	    PLAYBACK_SEEKED: 'PLAYBACK_SEEKED',
	    PLAYBACK_TIME_UPDATE: 'PLAYBACK_TIME_UPDATE'
	};
	
	var AdsEvents = exports.AdsEvents = {
	    ADS_PLAYBACK_STARTED: 'ADS_PLAYBACK_STARTED',
	    ADS_PLAYBACK_ENDED: 'ADS_PLAYBACK_ENDED',
	    ADS_PLAYBACK_ERROR: 'ADS_PLAYBACK_ERROR'
	};
	
	var OverlayEvents = exports.OverlayEvents = {
	    OVERLAY_STARTED: 'OVERLAY_STARTED',
	    OVERLAY_ENDED: 'OVERLAY_ENDED',
	    OVERLAY_ERROR: 'OVERLAY_ERROR',
	    OVERLAY_SKIPPED: 'OVERLAY_SKIPPED'
	};
	
	var AdsEnum = exports.AdsEnum = {
	    ADS_PRE_ROLL: 'ADS_PRE_ROLL',
	    ADS_MID_ROLL: 'ADS_MID_ROLL',
	    ADS_POST_ROLL: 'ADS_POST_ROLL'
	};

/***/ },

/***/ 212:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* Version.js File */
	
	function Version() {};
	
	var GIT_VERSION = '0.2.5';
	var GIT_COMMIT_SINCE_TAG = '1';
	var GIT_HEAD_SHORT_HASH = 'gcbffbc0';
	
	Version.prototype.getVersion = function () {
	    return GIT_VERSION;
	};
	
	Version.prototype.getCommits = function () {
	    return GIT_COMMIT_SINCE_TAG;
	};
	
	Version.prototype.getShortHash = function () {
	    return GIT_HEAD_SHORT_HASH;
	};
	
	exports.default = Version;
	module.exports = exports['default'];

/***/ }

/******/ })
});
;
//# sourceMappingURL=fjplayer.js.map