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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Player = exports.Playlist = undefined;
	
	var _playlist = __webpack_require__(1);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _player = __webpack_require__(4);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _Version = __webpack_require__(20);
	
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
	fjplayer.Version = (0, _Version.getVersionString)();
	
	exports.default = fjplayer;
	exports.Playlist = _playlist2.default;
	exports.Player = _player2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
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
	    this.logger = new _Logger2.default(this);
	    this.items = [];
	};
	/**
	 * Used to getsize of playlist
	 */
	Playlist.prototype.getSize = function () {
	    return this.items.size;
	};
	
	/**
	 * Used to get item of playlist at position index
	 */
	Playlist.prototype.getItem = function (index) {
	    var item = this.items[index];
	    this.logger.info(' Getting item at position ', index, '>> ', this.items);
	    return item;
	};
	/**
	 * Used to add item to list
	 */
	Playlist.prototype.addItem = function (item) {
	    if (this.checkItem(item) === true) {
	        this.logger.info('Item is ok ');
	        this.items.push(item);
	        this.logger.info('Item added ok ', this.items.size);
	        return true;
	    }
	    this.logger.error(' Failed to add item');
	    return false;
	};
	/**
	 *  used to add an subtitle to item at index in the playlist
	 */
	Playlist.prototype.addSubtitle = function (index, subtitle) {
	    var item = this.items[index];
	    var list = item[Const.FJCONFIG_SUBTITLES];
	    if (item === undefined) {
	        return false;
	    } else if (this.checkSubtitle(subtitle) === false) {
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
	Playlist.prototype.addOverlay = function (index, overlay) {
	    var item = this.items[index];
	    var list = item[Const.FJCONFIG_OVERLAYS];
	    if (item === undefined) {
	        return false;
	    } else if (this.checkOverlay(overlay) === false) {
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
	Playlist.prototype.setDrm = function (index, drm) {
	    var item = this.items[index];
	    var list = item[Const.FJCONFIG_DRM];
	    if (item === undefined) {
	        return false;
	    } else if (this.checkDrm(drm) === false) {
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
	Playlist.prototype.addAudio = function (index, audio) {
	    var item = this.items[index];
	    var list = item[Const.FJCONFIG_AUDIOS];
	    if (item === undefined) {
	        return false;
	    } else if (this.checkAudio(audio) === false) {
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
	Playlist.prototype.addAds = function (index, ads) {
	    var item = this.items[index];
	    var list = item[Const.FJCONFIG_ADS];
	    if (item === undefined) {
	        return false;
	    } else if (this.checkAds(ads) === false) {
	        return false;
	    }
	    if (list === undefined || list.length === 0) {
	        list = [];
	    }
	    list.push(ads);
	    return true;
	};
	
	/* ** ** ** ** ** ** ** CHECK'S ** ** ** ** ** ** ** */
	/**
	 * used to check if an item of subtitle is correct
	 */
	Playlist.prototype.checkSubtitle = function (subItem) {
	    if (subItem[Const.FJCONFIG_LABEL]) {
	        this.logger.log(' playlist Subtitle label is', subItem[Const.FJCONFIG_LABEL]);
	    } else {
	        this.logger.error('Empty Subtitle label ');
	        return false;
	    }
	    if (subItem[Const.FJCONFIG_LANG]) {
	        this.logger.log(' playlist Subtitle lang is', subItem[Const.FJCONFIG_LANG]);
	    } else {
	        this.logger.error('Empty Subtitle lang  ');
	        return false;
	    }
	    if (subItem[Const.FJCONFIG_SRC]) {
	        this.logger.log(' playlist Subtitle src is', subItem[Const.FJCONFIG_SRC]);
	    } else {
	        this.logger.error('Empty Subtitle src ');
	        return false;
	    }
	    return true;
	};
	/**
	 * used to check if an item of overlay is correct
	 */
	Playlist.prototype.checkOverlay = function (subItem) {
	    var val = subItem;
	    val = subItem[Const.FJCONFIG_DATA];
	    if (val !== null && val !== '') {
	        this.logger.log(' playlist Overlay data ', val);
	    } else {
	        this.logger.error('Empty Overlay data');
	        return false;
	    }
	    val = subItem[Const.FJCONFIG_URL];
	    if (val !== null && val !== '') {
	        this.logger.log(' playlist Overlay url ', subItem[Const.FJCONFIG_URL]);
	    } else {
	        this.logger.error('Empty Overlay url');
	        return false;
	    }
	    val = subItem[Const.FJCONFIG_DURATION];
	    if (val !== null && val !== '') {
	        if (val === parseInt(val, 10)) {
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
	    if (val !== null && val !== '') {
	        if (val === parseInt(val, 10)) {
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
	};
	/**
	 * used to check if an item of drm is correct
	 */
	Playlist.prototype.checkDrm = function (drm) {
	    if (Const.FJCONFIG_DRM_SCHEMES.indexOf(drm[Const.FJCONFIG_DRM_SCHEME]) === -1) {
	        this.logger.error('BAD DRM Scheme Value ! ', drm[Const.FJCONFIG_DRM_SCHEME]);
	        return false;
	    }
	    if (drm[Const.FJCONFIG_DRM_LICENSE_SERVER]) {
	        this.logger.log(' playlist Server License of item  ', drm[Const.FJCONFIG_DRM_LICENSE_SERVER]);
	    } else {
	        this.logger.error('Empty Server License for  DRM Scheme  ! ');
	        return false;
	    }
	    this.logger.log(' playlist Drm Herders on Request License  of item  ', drm[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
	    this.logger.log(' playlist Drm Herders on Request Segments  of item  ', drm[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
	    return true;
	};
	/**
	 * used to check if an item of ads is correct
	 */
	Playlist.prototype.checkAds = function (item) {
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
	    if (item[Const.FJCONFIG_SRC] === Const.FJCONFIG_ADS_CLASS_MID_ROLL && (item[Const.FJCONFIG_SHOW_AT] === null || item[Const.FJCONFIG_SHOW_AT] === undefined)) {
	        this.logger.error('Missing Show At for mid Roll Class ! ');
	        return false;
	    }
	    if (item[Const.FJCONFIG_URL] !== null && item[Const.FJCONFIG_URL] !== '') {
	        this.logger.log(' playlist Overlay url ', item[Const.FJCONFIG_URL]);
	    } else {
	        this.logger.error('Empty Overlay url');
	        return false;
	    }
	    if (!item[Const.FJCONFIG_CAN_ESCAPE]) {
	        this.logger.warn('can Escape is missing , will be set to true !');
	    }
	    return true;
	};
	/**
	 * used to check if an item of audiois correct
	 */
	Playlist.prototype.checkAudio = function (item) {
	    /* TODO */
	    return false;
	};
	/**
	 * used to check if an item is correct
	 */
	Playlist.prototype.checkItem = function (item) {
	    var subItem = {};
	    var drm = {};
	    var j, list;
	
	    if (item === undefined) {
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
	    if (!item[Const.FJCONFIG_TITLE]) {
	        this.logger.error('BAD title Value ! ');
	        return false;
	    }
	    this.logger.log('  src of item  ', item[Const.FJCONFIG_SRC]);
	    if (!item[Const.FJCONFIG_SRC]) {
	        this.logger.error('BAD src Value ! ');
	        return false;
	    }
	    this.logger.log('  poster of item  ', item[Const.FJCONFIG_POSTER]);
	    this.logger.log('  thumbs of item  ', item[Const.FJCONFIG_THUMBS]);
	
	    // check audio
	    list = item[Const.FJCONFIG_AUDIOS];
	    if (list !== undefined && list.length > 0) {
	        for (j = 0; j < list.length; j++) {
	            subItem = list[j];
	            if (this.checkAudio(subItem) === false) {
	                return false;
	            }
	        }
	    }
	    // check ads
	    list = item[Const.FJCONFIG_ADS];
	    if (list !== undefined && list.length > 0) {
	        for (j = 0; j < list.length; j++) {
	            subItem = list[j];
	            if (this.checkAds(subItem) === false) {
	                return false;
	            }
	        }
	    }
	    // check drm
	    drm = item[Const.FJCONFIG_DRM];
	    if (drm !== undefined) {
	        if (this.checkDrm(drm) === false) {
	            return false;
	        }
	    }
	    // check subtitles
	    list = item[Const.FJCONFIG_SUBTITLES];
	    if (list !== undefined && list.length > 0) {
	        for (j = 0; j < list.length; j++) {
	            subItem = list[j];
	            if (this.checkSubtitle(subItem) === false) {
	                return false;
	            }
	        }
	    }
	    // check overlays
	    list = item[Const.FJCONFIG_OVERLAYS];
	    if (list !== undefined && list.length > 0) {
	        for (j = 0; j < list.length; j++) {
	            subItem = list[j];
	            if (this.checkOverlay(subItem) === false) {
	                return false;
	            }
	        }
	    }
	    // done
	    return true;
	};
	
	exports.default = Playlist;
	module.exports = exports['default'];

/***/ },
/* 2 */
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
/* 3 */
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Logger = __webpack_require__(2);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	var _playlist = __webpack_require__(1);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _Thumbs = __webpack_require__(5);
	
	var _Thumbs2 = _interopRequireDefault(_Thumbs);
	
	var _Overlays = __webpack_require__(10);
	
	var _Overlays2 = _interopRequireDefault(_Overlays);
	
	var _SubsMenu = __webpack_require__(11);
	
	var _SubsMenu2 = _interopRequireDefault(_SubsMenu);
	
	var _AdsManager = __webpack_require__(21);
	
	var _AdsManager2 = _interopRequireDefault(_AdsManager);
	
	var _constants = __webpack_require__(3);
	
	var Const = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(6);
	__webpack_require__(12);
	/**
	 *  Class player in whinch the player is implemented
	 */
	function Player(fjID, videoContainerId, playerexpandScreen) {
	    this.logger = new _Logger2.default(this);
	    this.expandScreen = playerexpandScreen;
	    this.FJid = fjID;
	    this.videoContainerId = videoContainerId;
	    this.id = new Date().valueOf() + '_' + Math.random();
	    this.timerId = 'trd' + this.id;
	    this.titleId = 'tld' + this.id;
	    this.BigPlayBtnId = 'bp' + this.id;
	    this.videoInfoId = 'vi' + this.id;
	    this.videoFigureId = 'vf' + this.id;
	    this.videoId = 'vo' + this.id;
	    this.videoControlsId = 'vc' + this.id;
	    this.playpauseBtnId = 'pp' + this.id;
	    this.muteBtnId = 'mb' + this.id;
	    this.volumeBarId = 'vb' + this.id;
	    this.volumeDivId = 'vd' + this.id;
	    this.progressDivId = 'pd' + this.id;
	    this.progressBarId = 'pb' + this.id;
	    this.fullScreenBtnId = 'fs' + this.id;
	
	    this.subtitlesDivId = 'sd' + this.id;
	    this.subtitlesBtnId = 'sb' + this.id;
	
	    this.thumbsDivId = 'td' + this.id;
	    this.thumbsImgId = 'ti' + this.id;
	
	    this.expandDivId = 'ed' + this.id;
	    this.expandBtnId = 'eb' + this.id;
	
	    this.adsContainerDivId = 'adscd' + this.id;
	    this.overlaysContainerDivId = 'ovscd' + this.id;
	    this.subsdMenuContainerDivId = 'smcd' + this.id;
	    this.audMenuContainerDivId = 'amcd' + this.id;
	
	    // prepare player
	    if (!this.uidone) {
	        this.setUi();
	        // Set components
	        this.setComponents();
	        // set setCallbacks
	        this.setCallbacks();
	    }
	    // create hidden menus
	    // this.AudiosMenu = new AudsMenu(this.video, this.id, this.audMenuContainerDivId);
	    this.SubsMenu = new _SubsMenu2.default(this.video, this.subtitlesBtnId, this.subsdMenuContainerDivId);
	    this.OverlaysMgr = new _Overlays2.default(this.video, document.getElementById(this.overlaysContainerDivId));
	    this.AdsMgr = new _AdsManager2.default(this.video, document.getElementById(this.adsContainerDivId));
	};
	// constantes member of class
	Player.prototype.playlistLoaded = false;
	Player.prototype.fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
	Player.prototype.containsSubs = false;
	Player.prototype.timeout = null;
	Player.prototype.HideControlsTimeout = 10000;
	Player.prototype.thumbsTrackIndex = -1;
	Player.prototype.isHidden = false;
	Player.prototype.Playerheight = 0;
	Player.prototype.PlayerWidth = 0;
	Player.prototype.isStarted = false;
	Player.prototype.src = null;
	Player.prototype.poster = null;
	Player.prototype.title = null;
	Player.prototype.fullScreenOnStart = false;
	Player.prototype.supportsVideo = !!document.createElement('video').canPlayType;
	Player.prototype.uidone = false;
	/* ****************** P R I V A T E * * * * F U N C T I O N S ****************** */
	
	/**
	 * Fonction to prepare the UI and set Html content of player container
	 */
	Player.prototype.setUi = function () {
	    var inHtml = '';
	    if (this.uidone) {
	        return;
	    }
	
	    if (this.vwidth === null) {
	        this.vwidth = '640px';
	    }
	    if (this.vheight === null) {
	        this.vheight = '480px';
	    }
	
	    inHtml = '<figure id=\"' + this.videoFigureId + '\" class=\"fjfigure\" ' + 'data-fullscreen=\"' + this.fullScreenOnStart + '\">' + '<video id=\"' + this.videoId + '\" class=\"divofVideo\" ';
	    inHtml += 'width=\"' + this.vwidth + '\" ';
	    inHtml += 'height=\"' + this.vheight + '\" ';
	    inHtml += '     >' + '</video>' + '<div class=\"divInfo\" id=\"' + this.videoInfoId + '\">' + '<span class=\" divIconBtn divconeontrolLeft fa  fa-arrow-left\"> </span>' + '<p class=\" divTspanitleSeparator divconeontrolLeft \"> </p>' + '<div id=\"' + this.titleId + '\" class=\"fjcontrols-control-text divIconBtn ' + ' divconeontrolLeft\"> </div>' + '<span class=\" divIconBtn divconeontrolRight fa  fa-share-alt \"> </span>' + '<p class=\" divTspanitleSeparator divconeontrolRight \"> </p>' + '<span class=\" divIconBtn divconeontrolRight  fa fa-download \"> </span>' + '</div>' + '<div class=\"divBigPlayBtn\" id=\"' + this.BigPlayBtnId + '\">' + '<span class=\" divIconBtn  divconeontrolLeft fa  fa-play \"> </span>' + '</div>' + '<div class=\"fjcontrols-panel\" id=\"' + this.videoControlsId + '\">' + '<div class=\"fjcontrols-panel-controls\">' + '<div class=\"hprogressbar\" id=\"' + this.progressDivId + '\">' + '<input id=\"' + this.progressBarId + '\" type=\"range\"  />' + '</div>' + '</div>' + '<div class=\"fjcontrols-control divIconBtn divconeontrolIcon divconeontrolLeft clickable \">' + '<span id=\"' + this.playpauseBtnId + '\"  class=\"fa fa-play\" title=\"Play\" ></span>' + '</div>' + '<div  class=\"fjcontrols-control divconeontrolIcon divIconBtn divconeontrolLeft clickable\">' + '<span id=\"' + this.muteBtnId + '\" title=\"volume-full\" class=\"fa fa-volume-up\"></span>' + '</div>' + '<div class=\"fjcontrols-control fjcontrols-control-left\">' + '<div class=\"volumebar\" id=\"' + this.volumeDivId + '\">' + '<input  class=\"clickable\"  id=\"' + this.volumeBarId + '\" type=\"range\" />' + '</div>' + '</div>' + '<div class=\"fjcontrols-control  fjcontrols-control-left \">' + '<div id=\"' + this.timerId + '\" class=\"fjcontrols-control fjcontrols-control-text\">' + '<span>0:00:00</span><span>/</span><span>0:00:00</span>' + '</div>' + '</div>' + '<div class=\"fjcontrols-control divIconBtn divconeontrolIcon fjcontrols-control-right clickable\">' + '<span  id=\"' + this.fullScreenBtnId + '\"  title=\"Fullscreen\" class=\"fa fa-arrows-alt\" ></span>' + '</div>' + '<div id=\"' + this.expandDivId + '\" class=\"fjcontrols-control divIconBtn divconeontrolIcon ' + 'fjcontrols-control-right clickable\">' + '<span id=\"' + this.expandBtnId + '\"  class=\"fa fa-expand\" title=\"Double player size\" ></span>' + '</div>' + '<div id=\"' + this.subtitlesDivId + '\"  class=\"fjcontrols-control divIconBtn divconeontrolIcon ' + 'fjcontrols-control-right clickable\">' + '<span id=\"' + this.subtitlesBtnId + '\" class=\"fa fa-cc\"  title=\"subtitles\" ></span>' + '</div>' + '</div>' + '<div class=\"thumbsBlockDiv\" id=\"' + this.thumbsDivId + '\" >' + '<span class=\"thumbsBlock\" id=\"' + this.thumbsImgId + '\" ></span>' + '<span class=\"fjcontrols-control-text\" id=\"' + this.thumbstimerId + '\"</span>' + '</div>' + '<div id=\"' + this.audMenuContainerDivId + '\" ></div>' + '<div id=\"' + this.subsdMenuContainerDivId + '\" ></div>' + '<div id=\"' + this.overlaysContainerDivId + '\"  ></div>' + '<div id=\"' + this.adsContainerDivId + '\"  ></div>' + '</figure>';
	    this.logger.info(' container if of the player ', this.videoContainerId);
	    this.videoContainer = document.getElementById(this.videoContainerId);
	    this.videoContainer.classList.add('fjPlayer');
	    this.videoContainer.innerHTML = inHtml;
	    this.logger.log(' UI is created !! ', this.videoContainer);
	    this.uidone = true;
	};
	/**
	 * Set component of player UI
	 */
	Player.prototype.setComponents = function () {
	    // var item = null;
	    // Obtain handles to main elements
	    this.video = document.getElementById(this.videoId);
	    this.playpauseBtn = document.getElementById(this.playpauseBtnId);
	    this.muteBtn = document.getElementById(this.muteBtnId);
	    this.volumeBar = document.getElementById(this.volumeBarId);
	    this.progressDiv = document.getElementById(this.progressDivId);
	    this.progressBar = document.getElementById(this.progressBarId);
	    this.fullScreenBtn = document.getElementById(this.fullScreenBtnId);
	    this.expandBtn = document.getElementById(this.expandBtnId);
	    this.timer = document.getElementById(this.timerId);
	    this.title = document.getElementById(this.titleId);
	    this.logger.info(' here is the title ', this.title);
	
	    this.videoFigure = document.getElementById(this.videoFigureId);
	    this.BigPlayBtn = document.getElementById(this.BigPlayBtnId);
	
	    this.thumbsDiv = document.getElementById(this.thumbsDivId);
	    this.thumbstimer = document.getElementById(this.thumbstimerId);
	    this.thumbsImg = document.getElementById(this.thumbsImgId);
	    this.expandDiv = document.getElementById(this.expandDivId);
	
	    this.videoControls = document.getElementById(this.videoControlsId);
	    this.videoInfo = document.getElementById(this.videoInfoId);
	    // Hide the default controls
	    this.video.controls = false;
	    // Display the user defined video controls
	    this.videoControls.style.display = 'none';
	    this.videoInfo.style.display = 'block';
	    // Create Thumbs Object
	    this.ThumbsMgr = new _Thumbs2.default(this, this.thumbstimer, this.video, this.thumbsImg, this.thumbsDiv, this.progressBar);
	
	    if (this.fullScreenOnStart === 'true') {
	        this.videoFigure.setAttribute('data-fullscreen', 'true');
	    }
	    // If the browser doesn't support the Fulscreen API then hide the fullscreen button
	    if (!this.fullScreenEnabled) {
	        this.fullScreenBtn.style.display = 'none';
	    }
	};
	/**
	 * Set Callbacks of the player
	 */
	Player.prototype.setCallbacks = function () {
	    var self = this;
	    // Big play btn
	    this.BigPlayBtn.addEventListener('click', function (e) {
	        self.onplaypauseClick(self);
	    });
	
	    // video click
	    this.video.addEventListener('click', function (e) {
	        self.onplaypauseClick(self);
	    });
	
	    // video double click
	    this.video.addEventListener('dblclick', function (e) {
	        self.handleFullscreen(self);
	    });
	
	    // React to the user clicking within the volume bar
	    this.volumeBar.addEventListener('click', function (e) {
	        self.OnvbClick(e, self);
	    });
	    // Wait for the video's meta data to be loaded, then set the
	    // progress bar's max value to the duration of the video
	    this.video.addEventListener('loadedmetadata', function (e) {
	        self.InitPlayer(self);
	    });
	    // event to catch start playing on video
	    this.video.addEventListener('playing', function (e) {
	        // todo self.StartPlayer(self);
	    });
	    // Add events for play button
	    this.playpauseBtn.addEventListener('click', function (e) {
	        self.onplaypauseClick(self);
	    });
	    // add event for mute
	    this.muteBtn.addEventListener('click', function (e) {
	        self.onmuteClick(self);
	    });
	    // add event for fullscreen
	    this.fullScreenBtn.addEventListener('click', function (e) {
	        self.handleFullscreen(self);
	    });
	    // add event for expand
	    this.expandBtn.addEventListener('click', function (e) {
	        self.handleExpand(self);
	    });
	    // As the video is playing, update the progress bar
	    this.video.addEventListener('timeupdate', function (e) {
	        self.onvideoTimeupdate(self);
	        self.AdsMgr.CheckMidAds(self.AdsMgr, Math.round(self.video.currentTime));
	        self.OverlaysMgr.CheckOverlays(self.OverlaysMgr, Math.round(self.video.currentTime));
	    });
	    // React to the user clicking within the progress bar
	    this.progressBar.addEventListener('click', function (e) {
	        self.onprogressClick(e, self);
	    });
	
	    // Only add the events if addEventListener is supported
	    // (IE8 and less don't support it, but that will use Flash anyway)
	    if (document.addEventListener) {
	        // Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
	        document.addEventListener('fullscreenchange', function (e) {
	            self.setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
	        });
	        document.addEventListener('webkitfullscreenchange', function () {
	            self.setFullscreenData(!!document.webkitIsFullScreen);
	        });
	        document.addEventListener('mozfullscreenchange', function () {
	            self.setFullscreenData(!!document.mozFullScreen);
	        });
	        document.addEventListener('msfullscreenchange', function () {
	            self.setFullscreenData(!!document.msFullscreenElement);
	        });
	    }
	};
	/**
	 * Fonction to return a human redeable duration of secondes
	 */
	Player.prototype.duration = function (secDuration) {
	    var secNum = parseInt(secDuration, 10); // don't forget the second param
	    var hours = Math.floor(secNum / 3600);
	    var minutes = Math.floor((secNum - hours * 3600) / 60);
	    var seconds = secNum - hours * 3600 - minutes * 60;
	
	    if (minutes < 10) {
	        minutes = '0' + minutes;
	    }
	    if (seconds < 10) {
	        seconds = '0' + seconds;
	    }
	    if (hours === 0) {
	        return minutes + ':' + seconds;
	    }
	    if (hours < 10) {
	        hours = '0' + hours;
	    }
	    return hours + ':' + minutes + ':' + seconds;
	};
	/* ****************** C A L L B A C K S * * * * F U N C T I O N S ****************** */
	/**
	 * Event CALLBACK ; called on play pause button Click
	 */
	Player.prototype.onplaypauseClick = function (self) {
	    if (!self.isStarted) {
	        self.isStarted = true;
	    }
	    if (self.video.paused || self.video.ended) {
	        self.playpauseBtn.className = 'fa  fa-pause';
	        // hide big play button
	        self.BigPlayBtn.style.display = 'none';
	        // show video controls
	        self.videoControls.style.display = 'block';
	        self.video.play();
	    } else {
	        self.playpauseBtn.className = 'fa  fa-play';
	        self.video.pause();
	        // show big play button
	        self.BigPlayBtn.style.display = 'block';
	        // hide video controls
	        self.videoControls.style.display = 'none';
	        self.SubsMenu.HideMenu();
	    }
	    self.logger.log('clicking pause/play !');
	};
	/**
	 * Set the video container's fullscreen state
	 */
	Player.prototype.setFullscreenData = function (state) {
	    this.videoFigure.setAttribute('data-fullscreen', !!state);
	};
	/**
	 * Checks if the documenplayercontainert is currently in fullscreen mode
	 */
	Player.prototype.isFullScreen = function () {
	    return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
	};
	/**
	 * Fonction to expand btn
	 */
	Player.prototype.handleExpand = function (self) {
	    if (self.isFullScreen()) {
	        self.handleFullscreen(self);
	    }
	    if (self.expandScreen === true) {
	        self.videoContainer.classList.remove('fjPlayerExpand');
	        self.expandBtn.className = 'fa fa-expand';
	        self.expandScreen = false;
	    } else {
	        self.videoContainer.classList.add('fjPlayerExpand');
	        self.expandBtn.className = 'fa fa-compress';
	        self.expandScreen = true;
	    }
	};
	/**
	 * Fonction Called to handle Fullscreen click on button
	 */
	Player.prototype.handleFullscreen = function (self) {
	    // If fullscreen mode is active...
	    if (self.isFullScreen()) {
	        // ...exit fullscreen mode
	        // (Note: this can only be called on document)
	        if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else if (document.msExitFullscreen) document.msExitFullscreen();
	        self.setFullscreenData(false);
	        self.fullScreenBtn.className = 'fa fa-arrows-alt';
	    } else {
	        self.fullScreenBtn.className = 'fa  fa-compress';
	        // ...otherwise enter fullscreen mode
	        // (Note: can be called on document, but here the specific element is used as
	        // it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
	        if (self.videoFigure.requestFullscreen) this.videoFigure.requestFullscreen();else if (self.videoFigure.mozRequestFullScreen) this.videoFigure.mozRequestFullScreen();else if (self.videoFigure.webkitRequestFullScreen) {
	            // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit
	            // Zbrowsers as the following CSS (set in styles.css) hides the default controls that appear again, and
	            // ensures that our custom controls are visible:
	            // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
	            // figure[data-fullscreen=true] .controls { z-index:2147483647; }
	            self.video.webkitRequestFullScreen();
	        } else if (self.videoFigure.msRequestFullscreen) self.videoFigure.msRequestFullscreen();
	        self.setFullscreenData(true);
	    }
	};
	/**
	 * Event CALLBACK ; called on volume Bar Click
	 */
	Player.prototype.OnvbClick = function (e, self) {
	    var val = 0;
	    var pos = self.volumeBar.value / 100;
	    self.logger.log(' volume from ', self.video.volume, ' to ', pos);
	    if (pos > 0.6) {
	        self.muteBtn.className = 'fa fa-volume-up';
	    } else if (pos > 0) {
	        self.muteBtn.className = 'fa fa-volume-down';
	    } else {
	        self.muteBtn.className = 'fa fa-volume-off';
	    }
	    self.video.volume = pos;
	    val = (self.volumeBar.value - self.volumeBar.min) / (self.volumeBar.max - self.volumeBar.min);
	    self.volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #FF0000), ' + 'color-stop(' + val + ', #8F9B9E)' + ')';
	    self.logger.log(' new volume is ', pos);
	};
	/**
	 * Event CALLBACK ; called when video metadata are loaeded
	 */
	Player.prototype.InitPlayer = function (self) {
	    var i = 0;
	    var track = null;
	    var item = null;
	    self.logger.warn(' Starting to initlize player ');
	
	    // progress bar
	    self.progressBar.max = Math.round(self.video.duration);
	    self.progressBar.min = 0;
	    self.progressBar.step = 1;
	    self.progressBar.value = 0;
	    // volume bar
	    self.volumeBar.min = 0;
	    self.volumeBar.step = 1;
	    self.volumeBar.max = 100;
	    self.volumeBar.value = 100;
	    self.volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' + 'color-stop(1, #FF0000), ' + 'color-stop(1, #8F9B9E)' + ')';
	    // timer
	    self.timer.innerHTML = ' <span>' + self.duration(self.video.currentTime) + '</span><span>/</span><span>' + self.duration(self.video.duration) + '</span>';
	    // thumbs
	    if (self.vttThumbs != null || self.vttThumbs !== undefined) {
	        /* add thumbs */
	        track = document.createElement('track');
	        track.kind = 'metadata';
	        track.src = self.vttThumbs;
	        self.logger.log(' Appending source thumbs to video', track);
	        self.video.appendChild(track);
	    } else {
	        self.logger.warn(' Thumbs was not found .');
	    }
	    // video tracks
	    self.thumbsTrackIndex = -1;
	    for (i = 0; i < self.video.textTracks.length; i++) {
	        if (self.video.textTracks[i].kind === 'metadata') {
	            self.thumbsTrackIndex = i;
	            self.video.textTracks[i].mode = 'hidden'; // thanks Firefox
	        } else if (self.video.textTracks[i].kind === 'captions' || self.video.textTracks[i].kind === 'subtitles') {
	            self.containsSubs = true;
	            self.logger.log('find  soustitres  @ ', i, '/', self.video.textTracks.length, ' >>> ', self.video.textTracks[i]);
	        }
	    }
	    // subs track
	    if (self.subsJsObj) {
	        for (i = 0; i < self.subsJsObj.length; i++) {
	            item = self.subsJsObj[i];
	            track = document.createElement('track');
	            track.kind = 'subtitles';
	            track.src = item[Const.FJCONFIG_SRC];
	            track.srclang = item[Const.FJCONFIG_LANG];
	            track.label = item[Const.FJCONFIG_LABEL];
	            self.video.appendChild(track);
	        }
	    }
	    // Init Thumbs
	    if (this.ThumbsMgr.Setup(self.thumbsTrackIndex) !== true) {
	        this.logger.info('No thumbs will be displayed !');
	    }
	    // Init menus for subs and audio
	    // self.AudiosMenu.Setup(self.extraDiv1Id);
	    if (self.SubsMenu.Setup() !== true) {
	        document.getElementById(self.subtitlesBtnId).style.display = 'none';
	    }
	
	    // listen to mouse moving to hide or show panel
	    this.video.addEventListener('mousemove', function (e) {
	        self.magicMouse(self);
	    });
	};
	/**
	 * Manage click for mute button
	 */
	Player.prototype.onmuteClick = function (self) {
	    var val = 0;
	    self.video.muted = !self.video.muted;
	    if (self.video.muted) {
	        self.muteBtn.className = 'fa fa-volume-off';
	        self.volumeBar.value = 0;
	    } else if (self.video.volume > 0.6) {
	        self.volumeBar.value = self.video.volume * 100;
	        self.muteBtn.className = 'fa fa-volume-up';
	    } else {
	        self.volumeBar.value = self.video.volume * 100;
	        self.muteBtn.className = 'fa fa-volume-down';
	    }
	
	    val = (self.volumeBar.value - self.volumeBar.min) / (self.volumeBar.max - self.volumeBar.min);
	    self.volumeBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #FF0000), ' + 'color-stop(' + val + ', #8F9B9E)' + ')';
	};
	/**
	 *  As the video is playing, update the progress bar
	 */
	Player.prototype.onvideoTimeupdate = function (self) {
	    var val = 0.0;
	    // For mobile browsers, ensure that the progress element's max attribute is set
	    if (self.progressBar.max !== self.video.duration) {
	        self.progressBar.max = self.video.duration;
	    }
	    // set progress
	    self.progressBar.value = self.video.currentTime;
	    val = (self.progressBar.value - self.progressBar.min) / (self.progressBar.max - self.progressBar.min);
	    self.progressBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #FF0000), ' + 'color-stop(' + val + ', #8F9B9E)' + ')';
	    // set timer
	    self.timer.innerHTML = ' <span>' + self.duration(self.video.currentTime) + '</span><span>/</span><span>' + self.duration(self.video.duration) + '</span>';
	};
	/**
	 *  React to the user clicking within the progress bar
	 */
	Player.prototype.onprogressClick = function (e, self) {
	    var val = 0;
	    var p = Math.round(self.progressBar.value);
	    if (self.progressBar.max !== self.video.duration) {
	        self.progressBar.max = self.video.duration;
	    }
	    self.logger.log(' Seeking from ', self.video.currentTime, ':: ', self.video.duration, 'to ', p, ' sec');
	    // change current time
	    self.video.currentTime = self.progressBar.value;
	    val = (self.progressBar.value - self.progressBar.min) / (self.progressBar.max - self.progressBar.min);
	    self.progressBar.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #FF0000), ' + 'color-stop(' + val + ', #8F9B9E)' + ')';
	};
	/**
	 *  hide or show panel controls
	 */
	Player.prototype.HideControlsCursor = function (self, hideit) {
	    if (self.isStarted) {
	        if (hideit) {
	            self.videoControls.classList.remove('m-fadeIn');
	            self.videoInfo.classList.remove('m-fadeIn');
	            self.videoControls.classList.add('m-fadeOut');
	            self.videoInfo.classList.add('m-fadeOut');
	            self.video.style.cursor = 'none';
	            this.SubsMenu.HideMenu();
	            self.isHidden = true;
	        } else {
	            // delete fadeOut
	            self.videoControls.classList.remove('m-fadeOut');
	            self.videoInfo.classList.remove('m-fadeOut');
	            // add fadein
	            self.videoControls.classList.add('m-fadeIn');
	            self.videoInfo.classList.add('m-fadeIn');
	            self.video.style.cursor = 'auto';
	            self.isHidden = false;
	        }
	    }
	};
	/**
	 * Function to manage hiding controls when no activity
	 */
	Player.prototype.magicMouse = function (self) {
	    if (self.timeout) {
	        clearTimeout(self.timeout);
	    }
	    self.timeout = setTimeout(function () {
	        if (!self.isHidden) {
	            self.HideControlsCursor(self, true);
	        }
	    }, self.HideControlsTimeout);
	    if (self.isHidden) {
	        self.HideControlsCursor(self, false);
	    }
	};
	/* ****************** P U B L I C S * * * * F U N C T I O N S ****************** */
	/**
	 *
	 */
	Player.prototype.setdimension = function (width, height) {
	    this.PlayerWidth = width;
	    this.playerHeight = height;
	    // todo
	};
	/**
	 *
	 */
	Player.prototype.loadPlaylist = function (playlist) {
	    this.logger.log(' start  function ');
	    if (!this.supportsVideo) {
	        this.logger.error(' browser did not support video !');
	        return false;
	    }
	    if (playlist instanceof _playlist2.default) {
	        this.Playlist = playlist;
	        this.playlistLoaded = true;
	        return true;
	    }
	    this.playlistLoaded = false;
	    return false;
	};
	/**
	 *
	 */
	Player.prototype.playAt = function (index) {
	    var item;
	    var source;
	    if (!this.playlistLoaded) {
	        this.logger.error(' No playlist is loaded on player ');
	        return false;
	    }
	    item = this.Playlist.getItem(index);
	    if (item === undefined) {
	        this.logger.error(' No item to play at index ', index, ' playlist is sized ', this.Playlist.getSize());
	        return false;
	    }
	    /* Set UI */
	    this.title.innerHTML = item[Const.FJCONFIG_TITLE];
	    // set poster
	    if (item[Const.FJCONFIG_POSTER] !== undefined && item[Const.FJCONFIG_POSTER] != null) {
	        this.video.setAttribute('poster', item[Const.FJCONFIG_POSTER]);
	        this.poster = item[Const.FJCONFIG_POSTER];
	    }
	    // set thumbs
	    if (item[Const.FJCONFIG_THUMBS] !== undefined && item[Const.FJCONFIG_THUMBS] != null) {
	        this.vttThumbs = item[Const.FJCONFIG_THUMBS];
	    }
	    // Set sub, ads and overlays ..
	    if (item[Const.FJCONFIG_SUBTITLES] !== undefined && item[Const.FJCONFIG_SUBTITLES] != null) {
	        this.subsJsObj = item[Const.FJCONFIG_SUBTITLES];
	    }
	    // Set overlays
	    this.logger.warn('Setting overlays ', item[Const.FJCONFIG_OVERLAYS]);
	    if (item[Const.FJCONFIG_OVERLAYS] !== undefined && item[Const.FJCONFIG_OVERLAYS] != null) {
	        this.overlaysObjs = item[Const.FJCONFIG_OVERLAYS];
	        this.OverlaysMgr.Setup(this.overlaysObjs);
	    }
	    // Set ads
	    this.logger.warn('Setting overlays ', item[Const.FJCONFIG_OVERLAYS]);
	    if (item[Const.FJCONFIG_ADS] !== undefined && item[Const.FJCONFIG_ADS] != null) {
	        this.adsObjs = item[Const.FJCONFIG_ADS];
	        this.AdsMgr.Setup(this.adsObjs);
	    }
	
	    if (item[Const.FJCONFIG_SRC] != null || item[Const.FJCONFIG_SRC] !== undefined) {
	        source = document.createElement('source');
	        source.src = item[Const.FJCONFIG_SRC];
	        if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
	            // TODO DASH
	        }
	        source.type = item[Const.FJCONFIG_TYPE]; // 'video/mp4';
	        this.video.appendChild(source);
	        // done
	        return true;
	    }
	    this.logger.error('src of item is not valid , at index ', index);
	    return false;
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
	
	var _Logger = __webpack_require__(2);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(6);
	/**
	 * @module Thumbs
	 * @description The Thumbs module is responsible for rendering
	 *  showing and hiding vtt pictures based on mousing mouse on progress bar.
	 * @param vidElement the video element
	 * @param vttThumbsTrackIndex the index of Vtt thumbs track in textTracks list of video
	 * @param thumbImgElement the img element used for thumbs
	 * @param thumbImgElement the div element used for thumbs
	 * @param progressBarElement the progress element used for thumbs
	 */
	function Thumbs(player, thumbstimer, vidElement, thumbImgElement, thumbDivElement, progressBarElement) {
	    var self = this;
	    this.logger = new _Logger2.default(this);
	    this.player = player;
	    this.thumbsTrackIndex = -1;
	    this.video = vidElement;
	    this.thumbstimer = thumbstimer;
	    this.thumbsDiv = thumbDivElement;
	    this.thumbsImg = thumbImgElement;
	    this.progressBar = progressBarElement;
	    // initilize
	    this.progressBar.addEventListener('mousemove', function (event) {
	        self.renderThumbs(self, event);
	    });
	    this.progressBar.addEventListener('mouseleave', function (event) {
	        self.hideThumbs(self);
	    });
	    this.progressBar.addEventListener('mouseover', function (event) {
	        self.showThumbs(self);
	    });
	};
	Thumbs.prototype.Setup = function (thumbsTrackIndex) {
	    this.thumbsTrackIndex = thumbsTrackIndex;
	    if (this.thumbsTrackIndex !== -1) {
	        return true;
	    }
	    return false;
	};
	Thumbs.prototype.showThumbs = function (self) {
	    self.thumbsDiv.classList.remove('fj-hide');
	    self.thumbsDiv.classList.add('fj-show');
	    self.logger.log(' Showing Thumbs ');
	};
	Thumbs.prototype.hideThumbs = function (self) {
	    self.thumbsDiv.classList.remove('fj-show');
	    self.thumbsDiv.classList.add('fj-hide');
	    self.logger.log(' Hidding Thumbs ');
	};
	
	/**
	 * Event on mouse
	 * * */
	Thumbs.prototype.renderThumbs = function (self, event) {
	    // first we convert from mouse to time position ..
	    var c, i, url, xywh;
	    var rect = self.progressBar.getBoundingClientRect();
	    var p = (event.pageX - rect.left) * (self.video.duration / (rect.right - rect.left));
	    if (p > self.video.duration + 2 || p < 0) {
	        // some error ?
	        self.logger.error(' Position is bigger than duration >>', p, self.video.duration);
	        return;
	    }
	    // update ui ..then we find the matching cue..
	    c = self.video.textTracks[self.thumbsTrackIndex].cues;
	    if (c == null) {
	        // track eleme,t is not supprted : Firefox
	        self.logger.error(' cues is null @ ', self.thumbsTrackIndex, ' not supported , Firefox ?');
	        self.logger.error(' Cues are null @', self.video);
	        return;
	    }
	
	    for (i = 0; i < c.length; i++) {
	        if (c[i].startTime <= p && c[i].endTime > p) {
	            break;
	        };
	    }
	    self.logger.log(' Render Thumbs  @ ', self.player.duration(Math.round(p)));
	    // ..next we unravel the JPG url and fragment query..
	    xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');
	
	    // ..and last we style the thumbnail overlay
	    url = 'url(' + c[i].text.split('#')[0] + ')';
	    // self.logger.log(' fetching thum from ', url);
	    self.thumbsImg.style.backgroundImage = url;
	    self.thumbsImg.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
	    self.thumbsImg.style.width = xywh[2] + 'px';
	    self.thumbsImg.style.height = xywh[3] + 'px';
	    self.thumbstimer.innerHTML = self.player.duration(Math.round(p));
	    self.thumbsDiv.style.left = event.pageX - xywh[2] / 2 + 'px';
	    self.thumbsDiv.style.top = rect.top - xywh[3] * 1.5 + 5 + 'px';
	    self.thumbsDiv.style.width = xywh[2] + 'px';
	};
	
	exports.default = Thumbs;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./player.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./player.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "            .fjfigure {\n                width: 100%;\n                height: auto;\n                margin: 0 0 0;\n                background-color: rgb(0, 0, 0);\n            }\n            \n            .fjPlayer {\n                background-color: rgba(0, 0, 0, 0.5);\n                color: rgb(255, 255, 255);\n                text-align: center;\n                position: relative;\n                margin: 0px auto 0px auto;\n                display: inline-block;\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            }\n            \n            .fjplayerExpand {\n                width: 100%;\n            }\n            \n            .divofvideo {\n                -webkit-background-size: cover;\n                -moz-background-size: cover;\n                -o-background-size: cover;\n                background-size: cover;\n            }\n            /* ---------------------- Thumbs style --------------------- */\n            \n            .thumbsBlockDiv {\n                position: absolute;\n                display: table;\n                visibility: hidden;\n                border-radius: 2px;\n                z-index: 2147483647;\n                /*background: rgba(0, 0, 0, 0.5);*/\n                background: rgba(10, 10, 10, 0.8);\n                font-size: 12px;\n                border-radius: 5px;\n            }\n            \n            .thumbsBlock {\n                display: table-cell;\n                border-radius: 2px;\n                vertical-align: top;\n                display: inline-block;\n            }\n            /*______________________________ CONTROLS __________________________*/\n            \n            .divcontrols {\n                margin: 0px auto 0px auto;\n                width: 100%;\n                height: 25px;\n                position: absolute;\n                visibility: visible;\n                bottom: 0px;\n                left: 0px;\n            }\n            \n            .divcontrolsProgress {\n                margin: 0px auto 0px auto;\n                width: 100%;\n                height: 8px;\n                position: absolute;\n                visibility: visible;\n                bottom: 25px;\n                left: 0px;\n            }\n            \n            .divconeontrolLeft {\n                float: left;\n            }\n            \n            .divconeontrolRight {\n                float: right;\n            }\n            \n            .divconeontrolIcon {\n                width: 30px;\n            }\n            \n            .divconeontrolVBar {\n                width: 60px;\n            }\n            \n            .divonecontrol {\n                height: 25px;\n                padding-top: 2px;\n                padding-right: 1px;\n            }\n            \n            .divTitle,\n            .divcontrols,\n            .control,\n            .divonecontrol {\n                display: inline-block;\n                vertical-align: top;\n            }\n            /* this rule is for IE7 and below only\n put it in a Conditional comment without the !ie7 hack if you wish! */\n            \n            .divcontrols,\n            .control,\n            .divonecontrol {\n                display: inline !ie7;\n                margin: 0 2px !ie7;\n            }\n            \n            .controlText {\n                padding-top: 2px;\n                font-size: 0.75em;\n                white-space: nowrap;\n            }\n            \n            .divInfo {\n                z-index: 2147483647;\n                border-radius: 5px;\n                top: 10%;\n                width: 80%;\n                position: absolute;\n                left: 10%;\n            }\n            \n            .divBigPlayBtn {\n                font-size: 3.2em;\n                z-index: 2147483647;\n                border-radius: 5px;\n                top: 35%;\n                position: absolute;\n                left: 45%;\n                background-color: rgba(0, 0, 0, 0.5);\n                border-radius: 2%;\n                padding: 2%;\n            }\n            \n            .divBigPlayBtn:hover {\n                background: #333;\n            }\n            \n            .divIconBtn {\n                position: relative;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n                display: inline-block;\n                cursor: pointer;\n                opacity: 0.8;\n            }\n            \n            .divIconBtn:hover {\n                opacity: 1.0;\n                background: #333;\n            }\n            \n            .divTspanitleSeparator {\n                position: relative;\n                visibility: visible;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                margin: 0px;\n                white-space: nowrap;\n                display: inline-block;\n                max-width: 766px;\n                font-size: 12px;\n                padding: 10px;\n            }\n            /*_________________________  Progress  ________________________*/\n            \n            .progressbar {\n                position: relative;\n                visibility: visible;\n                width: 100%;\n                display: inline-block;\n                cursor: pointer;\n                height: 10px;\n                padding-top: 2px;\n                padding-right: 1px;\n                bottom: 10px;\n            }\n            \n            .volumebar {\n                margin-top: 2%;\n                padding-left: 1%;\n                padding-right: 3%;\n                border-left: none;\n                border-right: none;\n            }\n            /*_________________________ RANGE ________________________*/\n            \n            input[type=\"range\"] {\n                -webkit-appearance: none;\n                -moz-apperance: none;\n                cursor: pointer;\n                width: 98%;\n                left: 1%;\n                border-radius: 6px;\n                height: 8px;\n                background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #FF0000), color-stop(0, #8F9B9E));\n            }\n            \n            input[type='range']::-webkit-slider-thumb {\n                -webkit-appearance: none !important;\n                background-color: #FF0000;\n                border: 1px solid rgba(10, 10, 10, 0.8);\n                height: 14px;\n                width: 14px;\n                margin-left: -1.5px;\n                border-radius: 100%;\n                box-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n            }\n            \n            input[type='range']::-moz-slider-thumb {\n                -webkit-appearance: none !important;\n                background-color: #FF0000;\n                border: 1px solid rgba(10, 10, 10, 0.8);\n                height: 14px;\n                width: 14px;\n                margin-left: -1.5px;\n                border-radius: 100%;\n                box-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n            }\n            \n            input[type=range]:focus {\n                outline: none;\n            }\n            /* -------------------  CC SUBTITLES --------------------- */\n            \n            .subtitles-menu-item-actif {\n                cursor: pointer;\n                text-align: left;\n                border-radius: 2px;\n                opacity: 1;\n            }\n            \n            .subtitles-menu-item {\n                cursor: pointer;\n                text-align: left;\n            }\n            \n            .fj-hide {\n                visibility: hidden;\n                opacity: 0;\n                transition: visibility 200ms, opacity 200ms;\n            }\n            \n            .fj-show {\n                visibility: visible;\n            }\n            /* animation */\n            \n            .m-fadeOut {\n                visibility: hidden;\n                opacity: 0;\n                transition: visibility 500ms, opacity 500ms;\n            }\n            \n            .m-fadeIn {\n                visibility: visible;\n                opacity: 1;\n            }\n            /* ---------------------- Menu style --------------------- */\n            \n            .settingMenuDiv {\n                position: absolute;\n                background: rgba(10, 10, 10, 0.8);\n                float: left;\n                font-size: 12px;\n                /* visibility: hidden;*/\n                padding: 5px;\n                border-radius: 5px;\n                z-index: 2147483647;\n            }\n            \n            ul {\n                padding: 2px;\n                margin: 2px;\n                list-style-type: none;\n            }\n            \n            ul li {}\n            \n            .settingMenuSubMenuRight {\n                float: left;\n                width: 100%;\n                border-left: 1px solid #2A2A2A;\n                padding-left: 5px;\n                padding-right: 5px;\n            }\n            /* CUES and subtitles */\n            \n             ::cue {\n                color: #ccc;\n            }\n            \n             ::cue(v[voice='Test']) {\n                color: #fff;\n                background: #0095dd;\n            }\n            /* OVERLAYS */\n            \n            .fjOvcontainer {\n                width: 100%;\n                height: 100%;\n                margin: 0 auto;\n                padding: 0px;\n                /*position: relative;*/\n                position: absolute;\n            }\n            \n            .over-HL {\n                position: absolute;\n                background: rgba(0, 0, 0, 0.5);\n                float: left;\n                font-size: 12px;\n                padding: 5px;\n                border-radius: 5px;\n                z-index: 2147483647;\n                /****/\n                top: 20%;\n                left: 20%;\n                height: auto;\n            }\n            \n            .over-LC {\n                background: #f2f2f2;\n                position: fixed;\n                margin: 10px;\n                height: 70px;\n                margin-left: 50%;\n                border: 0px solid #d6d6d6;\n            }\n            \n            .over-LL {\n                background: #f2f2f2;\n                position: fixed;\n                margin: 10px;\n                height: 70px;\n                margin-left: 50%;\n                border: 0px solid #d6d6d6;\n            }\n            /*__________________________________________ FJCONTROL ____________________________*/\n            \n            .fjcontrols-panel {\n                z-index: 2147483647;\n                position: absolute;\n                border-radius: 5px;\n                bottom: 3%;\n                opacity: 1;\n                background: rgba(10, 10, 10, 0.8);\n                width: 90%;\n                margin-left: 5%;\n                display: relative;\n                float: left;\n            }\n            \n            .fjcontrols-panel-controls {\n                width: 100%;\n                position: relative;\n                margin-bottom: 2px;\n            }\n            \n            .fjcontrols-control {\n                margin-bottom: 2px;\n                position: relative;\n                float: left;\n                height: 100%;\n                /*border-right: 1px solid #2A2A2A;*/\n            }\n            \n            .fjcontrols-control-right {\n                float: right;\n                /*  border-left: 1px solid #2A2A2A; */\n                border-right: none;\n            }\n            \n            .fjcontrols-control-text {\n                font-size: 0.9em;\n                cursor: auto;\n                padding-left: 1%;\n                padding-right: 1%;\n                border-left: none;\n                border-right: none;\n            }\n            \n            .fjcontrols-control-text-small {\n                font-size: 1em;\n                line-height: 2;\n            }\n            \n            .hprogressbar {\n                width: 99%;\n                left: 0.5%;\n                text-align: center;\n                display: inline-block;\n            }\n            \n            .vprogressbar {\n                display: none;\n                width: 15%;\n                border-radius: 5px;\n                padding: 1px;\n                margin-left: 80%;\n                margin-right: 5%;\n                margin-top: 1%;\n                margin-bottom: 1%;\n                cursor: auto;\n            }\n            \n            .vprogressbar>div {\n                width: 80%;\n                height: 10px;\n                border-radius: 5px;\n            }\n            \n            hr {\n                margin-top: 5px;\n                margin-bottom: -1px;\n                border-right: 0px none;\n                border-width: 1px 0px 0px;\n                border-style: solid none none;\n                opacity: 0.75;\n                border-color: #2A2A2A -moz-use-text-color -moz-use-text-color;\n            }\n            /*_________________________________________ VIDEO __________________________*/\n            \n            video::-webkit-media-controls-panel {\n                display: none !important;\n            }\n            \n             ::-webkit-media-controls {\n                display: none !important;\n            }\n            \n            video::-webkit-media-controls {\n                display: none !important;\n            }\n            \n            video::-webkit-media-controls-enclosure {\n                display: none !important;\n            }\n            \n            .custom-video-controls {\n                z-index: 2147483647;\n            }\n            \n            .divcontrols {\n                z-index: 2147483647;\n            }\n            /*_________________________________ FULL SCREEN __________________________*/\n            /* fullscreen */\n            \n            html:-ms-fullscreen {\n                width: 100%;\n            }\n            \n             :-webkit-full-screen {\n                background-color: transparent;\n            }\n            /* hide controls on fullscreen with WebKit */\n            \n            figure[data-fullscreen=true] video::-webkit-media-controls {\n                display: none !important;\n            }\n            \n            figure[data-fullscreen=true] {\n                max-width: 100%;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            \n            figure[data-fullscreen=true] video {\n                height: 100%;\n            }\n            \n            figure[data-fullscreen=true] .fjcontrols-control {\n                width: 5%;\n            }\n            \n            figure[data-fullscreen=true] .fjcontrols-control .volumebar {\n                width: 35%;\n            }\n            \n            figure[data-fullscreen=true] .fjcontrols-control-text {\n                font-size: 1.4em;\n            }\n            \n            figure[data-fullscreen=true] span.fa.fa-3x {\n                font-size: 5em;\n            }\n            \n            figure[data-fullscreen=true] span.fa {\n                font-size: 2em;\n                margin-bottom: 5px;\n            }\n            /* Closing X */\n            \n            .close {\n                position: relative;\n                display: inline-block;\n                width: 50px;\n                height: 50px;\n                overflow: hidden;\n                &:hover {\n                    &::before,\n                    &::after {\n                        background: $blue;\n                    }\n                }\n                &::before,\n                &::after {\n                    content: '';\n                    position: absolute;\n                    height: 2px;\n                    width: 100%;\n                    top: 50%;\n                    left: 0;\n                    margin-top: -1px;\n                    background: #000;\n                }\n                &::before {\n                    @include transform(rotate(45deg));\n                }\n                &::after {\n                    @include transform(rotate(-45deg));\n                }\n                &.big {\n                    @include transform(scale(3));\n                }\n                &.hairline {\n                    &::before,\n                    &::after {\n                        height: 1px;\n                    }\n                }\n                &.thick {\n                    &::before,\n                    &::after {\n                        height: 4px;\n                        margin-top: -2px;\n                    }\n                }\n                &.black {\n                    &::before,\n                    &::after {\n                        height: 8px;\n                        margin-top: -4px;\n                    }\n                }\n                &.heavy {\n                    &::before,\n                    &::after {\n                        height: 12px;\n                        margin-top: -6px;\n                    }\n                }\n                &.pointy {\n                    &::Before,\n                    &::after {\n                        width: 200%;\n                        left: -50%;\n                    }\n                }\n                &.rounded {\n                    &::before,\n                    &::after {\n                        border-radius: 5px;\n                    }\n                }\n                &.blades {\n                    &::before,\n                    &::after {\n                        border-radius: 5px 0;\n                    }\n                }\n                &.warp {\n                    &::before,\n                    &::after {\n                        border-radius: 120% 0;\n                    }\n                }\n                &.fat {\n                    &::before,\n                    &::after {\n                        border-radius: 100%;\n                    }\n                }\n            }", "", {"version":3,"sources":["/./src/player.css"],"names":[],"mappings":"YAAY;gBACI,YAAY;gBACZ,aAAa;gBACb,cAAc;gBACd,+BAA+B;aAClC;;YAED;gBACI,qCAAqC;gBACrC,0BAA0B;gBAC1B,mBAAmB;gBACnB,mBAAmB;gBACnB,0BAA0B;gBAC1B,sBAAsB;gBACtB,6DAA6D;aAChE;;YAED;gBACI,YAAY;aACf;;YAED;gBACI,+BAA+B;gBAC/B,4BAA4B;gBAC5B,0BAA0B;gBAC1B,uBAAuB;aAC1B;YACD,+DAA+D;;YAE/D;gBACI,mBAAmB;gBACnB,eAAe;gBACf,mBAAmB;gBACnB,mBAAmB;gBACnB,oBAAoB;gBACpB,mCAAmC;gBACnC,kCAAkC;gBAClC,gBAAgB;gBAChB,mBAAmB;aACtB;;YAED;gBACI,oBAAoB;gBACpB,mBAAmB;gBACnB,oBAAoB;gBACpB,sBAAsB;aACzB;YACD,sEAAsE;;YAEtE;gBACI,0BAA0B;gBAC1B,YAAY;gBACZ,aAAa;gBACb,mBAAmB;gBACnB,oBAAoB;gBACpB,YAAY;gBACZ,UAAU;aACb;;YAED;gBACI,0BAA0B;gBAC1B,YAAY;gBACZ,YAAY;gBACZ,mBAAmB;gBACnB,oBAAoB;gBACpB,aAAa;gBACb,UAAU;aACb;;YAED;gBACI,YAAY;aACf;;YAED;gBACI,aAAa;aAChB;;YAED;gBACI,YAAY;aACf;;YAED;gBACI,YAAY;aACf;;YAED;gBACI,aAAa;gBACb,iBAAiB;gBACjB,mBAAmB;aACtB;;YAED;;;;gBAII,sBAAsB;gBACtB,oBAAoB;aACvB;YACD;sEAC0D;;YAE1D;;;gBAGI,qBAAqB;gBACrB,mBAAmB;aACtB;;YAED;gBACI,iBAAiB;gBACjB,kBAAkB;gBAClB,oBAAoB;aACvB;;YAED;gBACI,oBAAoB;gBACpB,mBAAmB;gBACnB,SAAS;gBACT,WAAW;gBACX,mBAAmB;gBACnB,UAAU;aACb;;YAED;gBACI,iBAAiB;gBACjB,oBAAoB;gBACpB,mBAAmB;gBACnB,SAAS;gBACT,mBAAmB;gBACnB,UAAU;gBACV,qCAAqC;gBACrC,kBAAkB;gBAClB,YAAY;aACf;;YAED;gBACI,iBAAiB;aACpB;;YAED;gBACI,mBAAmB;gBACnB,wBAAwB;gBACxB,iBAAiB;gBACjB,oBAAoB;gBACpB,sBAAsB;gBACtB,gBAAgB;gBAChB,aAAa;aAChB;;YAED;gBACI,aAAa;gBACb,iBAAiB;aACpB;;YAED;gBACI,mBAAmB;gBACnB,oBAAoB;gBACpB,wBAAwB;gBACxB,iBAAiB;gBACjB,YAAY;gBACZ,oBAAoB;gBACpB,sBAAsB;gBACtB,iBAAiB;gBACjB,gBAAgB;gBAChB,cAAc;aACjB;YACD,iEAAiE;;YAEjE;gBACI,mBAAmB;gBACnB,oBAAoB;gBACpB,YAAY;gBACZ,sBAAsB;gBACtB,gBAAgB;gBAChB,aAAa;gBACb,iBAAiB;gBACjB,mBAAmB;gBACnB,aAAa;aAChB;;YAED;gBACI,eAAe;gBACf,iBAAiB;gBACjB,kBAAkB;gBAClB,kBAAkB;gBAClB,mBAAmB;aACtB;YACD,4DAA4D;;YAE5D;gBACI,yBAAyB;gBACzB,qBAAqB;gBACrB,gBAAgB;gBAChB,WAAW;gBACX,SAAS;gBACT,mBAAmB;gBACnB,YAAY;gBACZ,iHAAiH;aACpH;;YAED;gBACI,oCAAoC;gBACpC,0BAA0B;gBAC1B,wCAAwC;gBACxC,aAAa;gBACb,YAAY;gBACZ,oBAAoB;gBACpB,oBAAoB;gBACpB,uCAAuC;aAC1C;;YAED;gBACI,oCAAoC;gBACpC,0BAA0B;gBAC1B,wCAAwC;gBACxC,aAAa;gBACb,YAAY;gBACZ,oBAAoB;gBACpB,oBAAoB;gBACpB,uCAAuC;aAC1C;;YAED;gBACI,cAAc;aACjB;YACD,6DAA6D;;YAE7D;gBACI,gBAAgB;gBAChB,iBAAiB;gBACjB,mBAAmB;gBACnB,WAAW;aACd;;YAED;gBACI,gBAAgB;gBAChB,iBAAiB;aACpB;;YAED;gBACI,mBAAmB;gBACnB,WAAW;gBACX,4CAA4C;aAC/C;;YAED;gBACI,oBAAoB;aACvB;YACD,eAAe;;YAEf;gBACI,mBAAmB;gBACnB,WAAW;gBACX,4CAA4C;aAC/C;;YAED;gBACI,oBAAoB;gBACpB,WAAW;aACd;YACD,6DAA6D;;YAE7D;gBACI,mBAAmB;gBACnB,kCAAkC;gBAClC,YAAY;gBACZ,gBAAgB;gBAChB,wBAAwB;gBACxB,aAAa;gBACb,mBAAmB;gBACnB,oBAAoB;aACvB;;YAED;gBACI,aAAa;gBACb,YAAY;gBACZ,sBAAsB;aACzB;;YAED,QAAQ;;YAER;gBACI,YAAY;gBACZ,YAAY;gBACZ,+BAA+B;gBAC/B,kBAAkB;gBAClB,mBAAmB;aACtB;YACD,wBAAwB;;aAEvB;gBACG,YAAY;aACf;;aAEA;gBACG,YAAY;gBACZ,oBAAoB;aACvB;YACD,cAAc;;YAEd;gBACI,YAAY;gBACZ,aAAa;gBACb,eAAe;gBACf,aAAa;gBACb,uBAAuB;gBACvB,mBAAmB;aACtB;;YAED;gBACI,mBAAmB;gBACnB,+BAA+B;gBAC/B,YAAY;gBACZ,gBAAgB;gBAChB,aAAa;gBACb,mBAAmB;gBACnB,oBAAoB;gBACpB,MAAM;gBACN,SAAS;gBACT,UAAU;gBACV,aAAa;aAChB;;YAED;gBACI,oBAAoB;gBACpB,gBAAgB;gBAChB,aAAa;gBACb,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;aAC7B;;YAED;gBACI,oBAAoB;gBACpB,gBAAgB;gBAChB,aAAa;gBACb,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;aAC7B;YACD,qFAAqF;;YAErF;gBACI,oBAAoB;gBACpB,mBAAmB;gBACnB,mBAAmB;gBACnB,WAAW;gBACX,WAAW;gBACX,kCAAkC;gBAClC,WAAW;gBACX,gBAAgB;gBAChB,kBAAkB;gBAClB,YAAY;aACf;;YAED;gBACI,YAAY;gBACZ,mBAAmB;gBACnB,mBAAmB;aACtB;;YAED;gBACI,mBAAmB;gBACnB,mBAAmB;gBACnB,YAAY;gBACZ,aAAa;gBACb,oCAAoC;aACvC;;YAED;gBACI,aAAa;gBACb,sCAAsC;gBACtC,mBAAmB;aACtB;;YAED;gBACI,iBAAiB;gBACjB,aAAa;gBACb,iBAAiB;gBACjB,kBAAkB;gBAClB,kBAAkB;gBAClB,mBAAmB;aACtB;;YAED;gBACI,eAAe;gBACf,eAAe;aAClB;;YAED;gBACI,WAAW;gBACX,WAAW;gBACX,mBAAmB;gBACnB,sBAAsB;aACzB;;YAED;gBACI,cAAc;gBACd,WAAW;gBACX,mBAAmB;gBACnB,aAAa;gBACb,iBAAiB;gBACjB,iBAAiB;gBACjB,eAAe;gBACf,kBAAkB;gBAClB,aAAa;aAChB;;YAED;gBACI,WAAW;gBACX,aAAa;gBACb,mBAAmB;aACtB;;YAED;gBACI,gBAAgB;gBAChB,oBAAoB;gBACpB,uBAAuB;gBACvB,0BAA0B;gBAC1B,8BAA8B;gBAC9B,cAAc;gBACd,8DAA8D;aACjE;YACD,8EAA8E;;YAE9E;gBACI,yBAAyB;aAC5B;;aAEA;gBACG,yBAAyB;aAC5B;;YAED;gBACI,yBAAyB;aAC5B;;YAED;gBACI,yBAAyB;aAC5B;;YAED;gBACI,oBAAoB;aACvB;;YAED;gBACI,oBAAoB;aACvB;YACD,4EAA4E;YAC5E,gBAAgB;;YAEhB;gBACI,YAAY;aACf;;aAEA;gBACG,8BAA8B;aACjC;YACD,6CAA6C;;YAE7C;gBACI,yBAAyB;aAC5B;;YAED;gBACI,gBAAgB;gBAChB,YAAY;gBACZ,UAAU;gBACV,WAAW;aACd;;YAED;gBACI,aAAa;aAChB;;YAED;gBACI,UAAU;aACb;;YAED;gBACI,WAAW;aACd;;YAED;gBACI,iBAAiB;aACpB;;YAED;gBACI,eAAe;aAClB;;YAED;gBACI,eAAe;gBACf,mBAAmB;aACtB;YACD,eAAe;;YAEf;gBACI,mBAAmB;gBACnB,sBAAsB;gBACtB,YAAY;gBACZ,aAAa;gBACb,iBAAiB;gBACjB;oBACI;;wBAEI,kBAAkB;qBACrB;iBACJ;gBACD;;oBAEI,YAAY;oBACZ,mBAAmB;oBACnB,YAAY;oBACZ,YAAY;oBACZ,SAAS;oBACT,QAAQ;oBACR,iBAAiB;oBACjB,iBAAiB;iBACpB;gBACD;oBACI,kCAAkC;iBACrC;gBACD;oBACI,mCAAmC;iBACtC;gBACD;oBACI,6BAA6B;iBAChC;gBACD;oBACI;;wBAEI,YAAY;qBACf;iBACJ;gBACD;oBACI;;wBAEI,YAAY;wBACZ,iBAAiB;qBACpB;iBACJ;gBACD;oBACI;;wBAEI,YAAY;wBACZ,iBAAiB;qBACpB;iBACJ;gBACD;oBACI;;wBAEI,aAAa;wBACb,iBAAiB;qBACpB;iBACJ;gBACD;oBACI;;wBAEI,YAAY;wBACZ,WAAW;qBACd;iBACJ;gBACD;oBACI;;wBAEI,mBAAmB;qBACtB;iBACJ;gBACD;oBACI;;wBAEI,qBAAqB;qBACxB;iBACJ;gBACD;oBACI;;wBAEI,sBAAsB;qBACzB;iBACJ;gBACD;oBACI;;wBAEI,oBAAoB;qBACvB;iBACJ;aACJ","file":"player.css","sourcesContent":["            .fjfigure {\n                width: 100%;\n                height: auto;\n                margin: 0 0 0;\n                background-color: rgb(0, 0, 0);\n            }\n            \n            .fjPlayer {\n                background-color: rgba(0, 0, 0, 0.5);\n                color: rgb(255, 255, 255);\n                text-align: center;\n                position: relative;\n                margin: 0px auto 0px auto;\n                display: inline-block;\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            }\n            \n            .fjplayerExpand {\n                width: 100%;\n            }\n            \n            .divofvideo {\n                -webkit-background-size: cover;\n                -moz-background-size: cover;\n                -o-background-size: cover;\n                background-size: cover;\n            }\n            /* ---------------------- Thumbs style --------------------- */\n            \n            .thumbsBlockDiv {\n                position: absolute;\n                display: table;\n                visibility: hidden;\n                border-radius: 2px;\n                z-index: 2147483647;\n                /*background: rgba(0, 0, 0, 0.5);*/\n                background: rgba(10, 10, 10, 0.8);\n                font-size: 12px;\n                border-radius: 5px;\n            }\n            \n            .thumbsBlock {\n                display: table-cell;\n                border-radius: 2px;\n                vertical-align: top;\n                display: inline-block;\n            }\n            /*______________________________ CONTROLS __________________________*/\n            \n            .divcontrols {\n                margin: 0px auto 0px auto;\n                width: 100%;\n                height: 25px;\n                position: absolute;\n                visibility: visible;\n                bottom: 0px;\n                left: 0px;\n            }\n            \n            .divcontrolsProgress {\n                margin: 0px auto 0px auto;\n                width: 100%;\n                height: 8px;\n                position: absolute;\n                visibility: visible;\n                bottom: 25px;\n                left: 0px;\n            }\n            \n            .divconeontrolLeft {\n                float: left;\n            }\n            \n            .divconeontrolRight {\n                float: right;\n            }\n            \n            .divconeontrolIcon {\n                width: 30px;\n            }\n            \n            .divconeontrolVBar {\n                width: 60px;\n            }\n            \n            .divonecontrol {\n                height: 25px;\n                padding-top: 2px;\n                padding-right: 1px;\n            }\n            \n            .divTitle,\n            .divcontrols,\n            .control,\n            .divonecontrol {\n                display: inline-block;\n                vertical-align: top;\n            }\n            /* this rule is for IE7 and below only\n put it in a Conditional comment without the !ie7 hack if you wish! */\n            \n            .divcontrols,\n            .control,\n            .divonecontrol {\n                display: inline !ie7;\n                margin: 0 2px !ie7;\n            }\n            \n            .controlText {\n                padding-top: 2px;\n                font-size: 0.75em;\n                white-space: nowrap;\n            }\n            \n            .divInfo {\n                z-index: 2147483647;\n                border-radius: 5px;\n                top: 10%;\n                width: 80%;\n                position: absolute;\n                left: 10%;\n            }\n            \n            .divBigPlayBtn {\n                font-size: 3.2em;\n                z-index: 2147483647;\n                border-radius: 5px;\n                top: 35%;\n                position: absolute;\n                left: 45%;\n                background-color: rgba(0, 0, 0, 0.5);\n                border-radius: 2%;\n                padding: 2%;\n            }\n            \n            .divBigPlayBtn:hover {\n                background: #333;\n            }\n            \n            .divIconBtn {\n                position: relative;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n                display: inline-block;\n                cursor: pointer;\n                opacity: 0.8;\n            }\n            \n            .divIconBtn:hover {\n                opacity: 1.0;\n                background: #333;\n            }\n            \n            .divTspanitleSeparator {\n                position: relative;\n                visibility: visible;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                margin: 0px;\n                white-space: nowrap;\n                display: inline-block;\n                max-width: 766px;\n                font-size: 12px;\n                padding: 10px;\n            }\n            /*_________________________  Progress  ________________________*/\n            \n            .progressbar {\n                position: relative;\n                visibility: visible;\n                width: 100%;\n                display: inline-block;\n                cursor: pointer;\n                height: 10px;\n                padding-top: 2px;\n                padding-right: 1px;\n                bottom: 10px;\n            }\n            \n            .volumebar {\n                margin-top: 2%;\n                padding-left: 1%;\n                padding-right: 3%;\n                border-left: none;\n                border-right: none;\n            }\n            /*_________________________ RANGE ________________________*/\n            \n            input[type=\"range\"] {\n                -webkit-appearance: none;\n                -moz-apperance: none;\n                cursor: pointer;\n                width: 98%;\n                left: 1%;\n                border-radius: 6px;\n                height: 8px;\n                background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #FF0000), color-stop(0, #8F9B9E));\n            }\n            \n            input[type='range']::-webkit-slider-thumb {\n                -webkit-appearance: none !important;\n                background-color: #FF0000;\n                border: 1px solid rgba(10, 10, 10, 0.8);\n                height: 14px;\n                width: 14px;\n                margin-left: -1.5px;\n                border-radius: 100%;\n                box-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n            }\n            \n            input[type='range']::-moz-slider-thumb {\n                -webkit-appearance: none !important;\n                background-color: #FF0000;\n                border: 1px solid rgba(10, 10, 10, 0.8);\n                height: 14px;\n                width: 14px;\n                margin-left: -1.5px;\n                border-radius: 100%;\n                box-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n            }\n            \n            input[type=range]:focus {\n                outline: none;\n            }\n            /* -------------------  CC SUBTITLES --------------------- */\n            \n            .subtitles-menu-item-actif {\n                cursor: pointer;\n                text-align: left;\n                border-radius: 2px;\n                opacity: 1;\n            }\n            \n            .subtitles-menu-item {\n                cursor: pointer;\n                text-align: left;\n            }\n            \n            .fj-hide {\n                visibility: hidden;\n                opacity: 0;\n                transition: visibility 200ms, opacity 200ms;\n            }\n            \n            .fj-show {\n                visibility: visible;\n            }\n            /* animation */\n            \n            .m-fadeOut {\n                visibility: hidden;\n                opacity: 0;\n                transition: visibility 500ms, opacity 500ms;\n            }\n            \n            .m-fadeIn {\n                visibility: visible;\n                opacity: 1;\n            }\n            /* ---------------------- Menu style --------------------- */\n            \n            .settingMenuDiv {\n                position: absolute;\n                background: rgba(10, 10, 10, 0.8);\n                float: left;\n                font-size: 12px;\n                /* visibility: hidden;*/\n                padding: 5px;\n                border-radius: 5px;\n                z-index: 2147483647;\n            }\n            \n            ul {\n                padding: 2px;\n                margin: 2px;\n                list-style-type: none;\n            }\n            \n            ul li {}\n            \n            .settingMenuSubMenuRight {\n                float: left;\n                width: 100%;\n                border-left: 1px solid #2A2A2A;\n                padding-left: 5px;\n                padding-right: 5px;\n            }\n            /* CUES and subtitles */\n            \n             ::cue {\n                color: #ccc;\n            }\n            \n             ::cue(v[voice='Test']) {\n                color: #fff;\n                background: #0095dd;\n            }\n            /* OVERLAYS */\n            \n            .fjOvcontainer {\n                width: 100%;\n                height: 100%;\n                margin: 0 auto;\n                padding: 0px;\n                /*position: relative;*/\n                position: absolute;\n            }\n            \n            .over-HL {\n                position: absolute;\n                background: rgba(0, 0, 0, 0.5);\n                float: left;\n                font-size: 12px;\n                padding: 5px;\n                border-radius: 5px;\n                z-index: 2147483647;\n                /****/\n                top: 20%;\n                left: 20%;\n                height: auto;\n            }\n            \n            .over-LC {\n                background: #f2f2f2;\n                position: fixed;\n                margin: 10px;\n                height: 70px;\n                margin-left: 50%;\n                border: 0px solid #d6d6d6;\n            }\n            \n            .over-LL {\n                background: #f2f2f2;\n                position: fixed;\n                margin: 10px;\n                height: 70px;\n                margin-left: 50%;\n                border: 0px solid #d6d6d6;\n            }\n            /*__________________________________________ FJCONTROL ____________________________*/\n            \n            .fjcontrols-panel {\n                z-index: 2147483647;\n                position: absolute;\n                border-radius: 5px;\n                bottom: 3%;\n                opacity: 1;\n                background: rgba(10, 10, 10, 0.8);\n                width: 90%;\n                margin-left: 5%;\n                display: relative;\n                float: left;\n            }\n            \n            .fjcontrols-panel-controls {\n                width: 100%;\n                position: relative;\n                margin-bottom: 2px;\n            }\n            \n            .fjcontrols-control {\n                margin-bottom: 2px;\n                position: relative;\n                float: left;\n                height: 100%;\n                /*border-right: 1px solid #2A2A2A;*/\n            }\n            \n            .fjcontrols-control-right {\n                float: right;\n                /*  border-left: 1px solid #2A2A2A; */\n                border-right: none;\n            }\n            \n            .fjcontrols-control-text {\n                font-size: 0.9em;\n                cursor: auto;\n                padding-left: 1%;\n                padding-right: 1%;\n                border-left: none;\n                border-right: none;\n            }\n            \n            .fjcontrols-control-text-small {\n                font-size: 1em;\n                line-height: 2;\n            }\n            \n            .hprogressbar {\n                width: 99%;\n                left: 0.5%;\n                text-align: center;\n                display: inline-block;\n            }\n            \n            .vprogressbar {\n                display: none;\n                width: 15%;\n                border-radius: 5px;\n                padding: 1px;\n                margin-left: 80%;\n                margin-right: 5%;\n                margin-top: 1%;\n                margin-bottom: 1%;\n                cursor: auto;\n            }\n            \n            .vprogressbar>div {\n                width: 80%;\n                height: 10px;\n                border-radius: 5px;\n            }\n            \n            hr {\n                margin-top: 5px;\n                margin-bottom: -1px;\n                border-right: 0px none;\n                border-width: 1px 0px 0px;\n                border-style: solid none none;\n                opacity: 0.75;\n                border-color: #2A2A2A -moz-use-text-color -moz-use-text-color;\n            }\n            /*_________________________________________ VIDEO __________________________*/\n            \n            video::-webkit-media-controls-panel {\n                display: none !important;\n            }\n            \n             ::-webkit-media-controls {\n                display: none !important;\n            }\n            \n            video::-webkit-media-controls {\n                display: none !important;\n            }\n            \n            video::-webkit-media-controls-enclosure {\n                display: none !important;\n            }\n            \n            .custom-video-controls {\n                z-index: 2147483647;\n            }\n            \n            .divcontrols {\n                z-index: 2147483647;\n            }\n            /*_________________________________ FULL SCREEN __________________________*/\n            /* fullscreen */\n            \n            html:-ms-fullscreen {\n                width: 100%;\n            }\n            \n             :-webkit-full-screen {\n                background-color: transparent;\n            }\n            /* hide controls on fullscreen with WebKit */\n            \n            figure[data-fullscreen=true] video::-webkit-media-controls {\n                display: none !important;\n            }\n            \n            figure[data-fullscreen=true] {\n                max-width: 100%;\n                width: 100%;\n                margin: 0;\n                padding: 0;\n            }\n            \n            figure[data-fullscreen=true] video {\n                height: 100%;\n            }\n            \n            figure[data-fullscreen=true] .fjcontrols-control {\n                width: 5%;\n            }\n            \n            figure[data-fullscreen=true] .fjcontrols-control .volumebar {\n                width: 35%;\n            }\n            \n            figure[data-fullscreen=true] .fjcontrols-control-text {\n                font-size: 1.4em;\n            }\n            \n            figure[data-fullscreen=true] span.fa.fa-3x {\n                font-size: 5em;\n            }\n            \n            figure[data-fullscreen=true] span.fa {\n                font-size: 2em;\n                margin-bottom: 5px;\n            }\n            /* Closing X */\n            \n            .close {\n                position: relative;\n                display: inline-block;\n                width: 50px;\n                height: 50px;\n                overflow: hidden;\n                &:hover {\n                    &::before,\n                    &::after {\n                        background: $blue;\n                    }\n                }\n                &::before,\n                &::after {\n                    content: '';\n                    position: absolute;\n                    height: 2px;\n                    width: 100%;\n                    top: 50%;\n                    left: 0;\n                    margin-top: -1px;\n                    background: #000;\n                }\n                &::before {\n                    @include transform(rotate(45deg));\n                }\n                &::after {\n                    @include transform(rotate(-45deg));\n                }\n                &.big {\n                    @include transform(scale(3));\n                }\n                &.hairline {\n                    &::before,\n                    &::after {\n                        height: 1px;\n                    }\n                }\n                &.thick {\n                    &::before,\n                    &::after {\n                        height: 4px;\n                        margin-top: -2px;\n                    }\n                }\n                &.black {\n                    &::before,\n                    &::after {\n                        height: 8px;\n                        margin-top: -4px;\n                    }\n                }\n                &.heavy {\n                    &::before,\n                    &::after {\n                        height: 12px;\n                        margin-top: -6px;\n                    }\n                }\n                &.pointy {\n                    &::Before,\n                    &::after {\n                        width: 200%;\n                        left: -50%;\n                    }\n                }\n                &.rounded {\n                    &::before,\n                    &::after {\n                        border-radius: 5px;\n                    }\n                }\n                &.blades {\n                    &::before,\n                    &::after {\n                        border-radius: 5px 0;\n                    }\n                }\n                &.warp {\n                    &::before,\n                    &::after {\n                        border-radius: 120% 0;\n                    }\n                }\n                &.fat {\n                    &::before,\n                    &::after {\n                        border-radius: 100%;\n                    }\n                }\n            }"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */
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
	
	__webpack_require__(6);
	
	/**
	 * @module Overlay
	 * @description The Overlays is that manage overlays of a video :
	 *     it manage overlays for information ads , media or ovelay on ads video.
	 */
	function Overlays(video, OverlayDiv) {
	    this.logger = new _Logger2.default(this);
	    this.video = video;
	    this.overlays = null;
	    this.settled = false;
	    this.OverlayDiv = OverlayDiv;
	    this.OverlayInnerDiv = null;
	    this.OverlayClosingDiv = null;
	};
	/**
	 * Function to be called from event 'timeupdate' from video
	 * called to check if overlays has to Start
	 */
	Overlays.prototype.CheckOverlays = function (self, secondes) {
	    var i = 0;
	    var item = null;
	    var show = 0;
	    if (self.settled !== true) {
	        return;
	    }
	    for (i = 0; i < self.overlays.length; i++) {
	        item = self.overlays[i];
	        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
	        if (secondes === show) {
	            self.logger.info(i, ' starting overlay .. ');
	            if (self.overlays[i].started === false) {
	                self.logger.info(i, ' starting a new  overlay .. ');
	                self.overlays[i].started = true;
	                self.StartOverlay(self, i);
	            } else {
	                self.logger.info(i, ' already started ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
	            }
	        }
	    }
	};
	Overlays.prototype.Setup = function (overlays) {
	    var i = 0;
	    this.overlays = overlays;
	    this.settled = true;
	    for (i = 0; i < this.overlays.length; i++) {
	        this.overlays[i].started = false;
	    }
	    this.logger.info('Setup is settled ', this.settled, ' cheking overlays .. ', this.overlays);
	};
	Overlays.prototype.clicked = function (self, index) {
	    var item = self.overlays[index];
	    window.open(item[Const.FJCONFIG_URL], '_blank');
	};
	
	Overlays.prototype.StopOverlay = function (self, index) {
	    var el = self.OverlayDiv;
	    var elClone = null;
	    // hide the div
	    this.logger.warn(index, 'you overlay  is now stopped ', self.overlays[index].handler);
	    // remove the click event
	    el = self.OverlayDiv;
	    elClone = el.cloneNode(true);
	    el.parentNode.replaceChild(elClone, el);
	    self.OverlayDiv = elClone;
	    // hide the overlay , empty the div
	    while (self.OverlayDiv.hasChildNodes()) {
	        self.OverlayDiv.removeChild(self.OverlayDiv.firstChild);
	    }
	    self.OverlayDiv.innerHTML = '';
	    self.OverlayDiv.style.display = 'none';
	};
	
	/**
	 * Used to show an Overlay
	 */
	Overlays.prototype.StartOverlay = function (self, index) {
	    var url = null;
	    var item = self.overlays[index];
	    self.overlays[index].started = true;
	    self.overlays[index].endTimer = setTimeout(function () {
	        self.StopOverlay(self, index);
	    }, item[Const.FJCONFIG_DURATION] * 1000);
	    // empty the div && show the div
	    while (self.OverlayDiv.hasChildNodes()) {
	        self.OverlayDiv.removeChild(self.OverlayDiv.firstChild);
	    }
	    self.OverlayInnerDiv = document.createElement('div');
	    self.OverlayClosingDiv = document.createElement('div');
	    self.OverlayInnerDiv.innerHTML = '<p>' + item[Const.FJCONFIG_DATA] + '</p>';
	    self.OverlayInnerDiv.style.cursor = 'pointer';
	
	    self.OverlayClosingDiv.innerHTML = '<img ' + 'onmouseover=\"this.style.opacity = 1;\" onmouseout=\"this.style.opacity = 0.5\"' + 'style=\"cursor: pointer; opacity: 0.5; float: right; margin: -5px -10px 10px 10px;\"' + 'src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0' + 'd2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARpJREFUeNqslD+qhDAQxscQrDyBxatELN4RLCyFbcSzeC67RUsLCw+w' + 'hYXVFiIiHsBC335igtkX9x87EJL5ZuZHTDIay7IQLM/z39v0Q6/bNQzDCxYGIDvA+Q3ISYCMLMs+ASggvgd4nvdydV3XtNWdm' + 'C6haZp1PNOEcR2gLEvpO46j1Q4hjDHq+176KOy6TtkB4q7rKhDlczjnFMexkrQHQEcceYeQaZpoHMc10bZtJRE+dMSRdwgRoKqqq' + 'G1bRYcP/R6ghWD7RVFI37IsuYauu6F/EBykMLybJEmU97OPH16x7/vypqIoomEY1jlNU5rnWcYfQgTINE15iBhBEGjPQ0CuWw+ct6f8du+w' + 'rZ0FiD7q4m/8T/4EGAD07J0fnXOouAAAAABJRU5ErkJggg==\">' + '</img>' + '<div style=\"color: rgb(119, 255, 119); font-size: 0.95em; float: ' + 'right; text-decoration: none;\">Annonce</div>';
	    this.OverlayClosingDiv.addEventListener('click', function () {
	        self.StopOverlay(self, index);
	    });
	    self.OverlayDiv.appendChild(self.OverlayClosingDiv);
	    self.OverlayDiv.appendChild(self.OverlayInnerDiv);
	    self.OverlayDiv.style.display = 'block';
	    self.OverlayDiv.classList.add('over-HL');
	    // add click
	    url = item[Const.FJCONFIG_URL];
	    self.logger.info('Setting click on overlay going to  ', url);
	    this.OverlayInnerDiv.addEventListener('click', function () {
	        self.clicked(self, index);
	    });
	    self.logger.log(index, 'you overlay just started and will end in ' + item[Const.FJCONFIG_DURATION] + ' sec', self.overlays[index].handler);
	};
	
	exports.default = Overlays;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Logger = __webpack_require__(2);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(6);
	/**
	 *  Class player in whinch the player is implemented
	 */
	function SubsMenu(video, subtitlesBtnId, subsdMenuContainerDivId) {
	    this.logger = new _Logger2.default(this);
	    this.video = video;
	    this.subtitlesBtnId = subtitlesBtnId;
	    this.subsMenuListId = 'smml' + subtitlesBtnId;
	    this.subsdMenuContainerDivId = subsdMenuContainerDivId;
	    this.SubsExist = false;
	};
	/**
	 * cbx Subs Mgt
	 */
	SubsMenu.prototype.activateSubs = function (self, item) {
	    var i = 0;
	    var k = 0;
	    var litem;
	    var index = Array.prototype.indexOf.call(self.menuListSubs.childNodes, item);
	    var tindex = item.getAttribute('index');
	    self.logger.log('clicked is  selected @ index ', index, ' text index ', tindex);
	    if (self.video.textTracks) {
	        if (self.video.textTracks[tindex].mode === 'showing') {
	            self.logger.log('AlREADY  selected @ index ', tindex);
	            return;
	        }
	
	        for (i = 0; i < self.menuListSubs.children.length; i++) {
	            litem = self.menuListSubs.children[i];
	            k = litem.getAttribute('index');
	            self.logger.log('cheking item @  ', i);
	            if (tindex === k) {
	                self.video.textTracks[i].mode = 'showing';
	                litem.className = 'subtitles-menu-item-actif';
	                self.logger.log('Setting item @  ', i);
	            } else {
	                self.video.textTracks[i].mode = 'hidden';
	                litem.className = 'subtitles-menu-item';
	                self.logger.log('Unsetting item @  ', i);
	            }
	        }
	    }
	    self.subsMenuDiv.style.display = 'none';
	};
	/**
	 * Event CALLBACK ; called on menu Click
	 */
	SubsMenu.prototype.onshowHideMenu = function (self, menuContainer, ev) {
	    menuContainer.style.position = 'absolute';
	    menuContainer.style.left = ev.pageX - 20 + 'px';
	    menuContainer.style.top = ev.pageY - 90 + 'px';
	
	    if (menuContainer.style.display === 'none') {
	        menuContainer.style.display = 'block';
	    } else {
	        menuContainer.style.display = 'none';
	    }
	    self.logger.log(' Showing or Hiding an menu ', menuContainer);
	};
	/**
	 * Used to Hide menu
	 */
	SubsMenu.prototype.HideMenu = function () {
	    if (this.SubsExist === true) {
	        this.subsMenuDiv.style.display = 'none';
	    }
	};
	/**
	 * Setting Subs menu and cbx
	 */
	SubsMenu.prototype.Setup = function () {
	    var i = 0;
	    var item = null;
	    var self = this;
	    this.SubsExist = false;
	    this.subsMenuDiv = document.getElementById(this.subsdMenuContainerDivId);
	    this.subsMenuDiv.style.display = 'none';
	    // check if exist
	    for (i = 0; i < this.video.textTracks.length; i++) {
	        this.logger.info(' @ text track number  ', i, ' and it type is ', this.video.textTracks[i].kind);
	        if (this.video.textTracks[i].kind === 'captions' || this.video.textTracks[i].kind === 'subtitles') {
	            this.SubsExist = true;
	            break;
	        }
	    }
	    if (this.SubsExist === false) {
	        this.logger.log(' Subs Menu Not created !! ');
	        return this.SubsExist;
	    }
	    // Setting btn
	    this.subtitlesBtn = document.getElementById(this.subtitlesBtnId);
	    this.logger.log(' etting the btn ', this.subtitlesBtn, ' from id ', this.subtitlesBtnId);
	    // video array
	    this.menuListSubs = document.getElementById(this.subsMenuListId);
	    // clear old
	    if (self.menuListSubs !== null) {
	        while (self.menuListSubs.firstChild) {
	            self.menuListSubs.removeChild(self.menuListSubs.firstChild);
	        }
	    }
	
	    // Add events for subtitles button
	    this.subtitlesBtn.addEventListener('click', function (ev) {
	        self.onshowHideMenu(self, self.subsMenuDiv, ev);
	    });
	
	    this.subsMenuDiv.className = 'settingMenuDiv';
	    this.subsMenuDiv.innerHTML = '<div class=\"settingMenuSubMenuLeft\" >' + '<ul class=\"subtitles-menu\" id=\"' + this.subsMenuListId + '\" >' + '</ul>	' + '</div>';
	    // video array
	    this.menuListSubs = document.getElementById(this.subsMenuListId);
	    for (i = 0; i < this.video.textTracks.length; i++) {
	        if (this.video.textTracks[i].kind === 'captions' || this.video.textTracks[i].kind === 'subtitles') {
	            item = document.createElement('li');
	            if (this.video.textTracks[i].mode === 'showing') {
	                item.className = 'subtitles-menu-item-actif';
	            } else {
	                item.className = 'subtitles-menu-item';
	            }
	            item.setAttribute('index', i);
	            item.innerHTML = this.video.textTracks[i].label;
	            this.menuListSubs.appendChild(item);
	            item.addEventListener('click', function (ev) {
	                self.activateSubs(self, this);
	            });
	            this.logger.log('Setting Subs List @ ', i, ' item is ', item);
	        }
	    }
	    this.logger.log(' Subs Menu  created !! ', this.menuListSubs);
	    return this.SubsExist;
	};
	
	exports.default = SubsMenu;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js?sourceMap!./font-awesome.css", function() {
				var newContent = require("!!./../../css-loader/index.js?sourceMap!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(14) + ");\n  src: url(" + __webpack_require__(15) + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__(16) + ") format('woff2'), url(" + __webpack_require__(17) + ") format('woff'), url(" + __webpack_require__(18) + ") format('truetype'), url(" + __webpack_require__(19) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", "", {"version":3,"sources":["/./node_modules/font-awesome/css/font-awesome.css"],"names":[],"mappings":"AAAA;;;GAGG;AACH;gCACgC;AAChC;EACE,2BAA2B;EAC3B,mCAAqD;EACrD,2PAAkX;EAClX,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,8CAA8C;EAC9C,mBAAmB;EACnB,qBAAqB;EACrB,oCAAoC;EACpC,mCAAmC;CACpC;AACD,8DAA8D;AAC9D;EACE,wBAAwB;EACxB,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,oBAAoB;CACrB;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD,4BAA4B;AAC5B;EACE,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,8CAA8C;EAC9C,sCAAsC;CACvC;AACD;EACE,gDAAgD;EAChD,wCAAwC;CACzC;AACD;EACE;IACE,gCAAgC;IAChC,wBAAwB;GACzB;EACD;IACE,kCAAkC;IAClC,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,gCAAgC;IAChC,wBAAwB;GACzB;EACD;IACE,kCAAkC;IAClC,0BAA0B;GAC3B;CACF;AACD;EACE,uEAAuE;EACvE,iCAAiC;EACjC,6BAA6B;EAC7B,yBAAyB;CAC1B;AACD;EACE,uEAAuE;EACvE,kCAAkC;EAClC,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,uEAAuE;EACvE,kCAAkC;EAClC,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,iFAAiF;EACjF,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;CACzB;AACD;EACE,iFAAiF;EACjF,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;CACzB;AACD;;;;;EAKE,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;CACxB;AACD;;EAEE,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;oEACoE;AACpE;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;;EAIE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;;;EAKE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,UAAU;CACX;AACD;;EAEE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,WAAW;CACZ","file":"font-awesome.css","sourcesContent":["/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912ec66d7572ff821749319396470bde.svg";

/***/ },
/* 20 */
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

/***/ },
/* 21 */
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
	
	__webpack_require__(6);
	
	/**
	 * @module AdsManager
	 * @description The AdsManager is the class whinch will manage Ads
	 *  on a video.
	 *  Ads will be played on a another video html overlaying current video
	 */
	function AdsManager(video, AdsContainerdiv) {
	    this.logger = new _Logger2.default(this);
	    this.video = video;
	    this.midAds = [];
	    this.postAds = [];
	    this.preAds = [];
	    this.ads = null;
	    this.settled = false;
	    this.AdsContainerdiv = AdsContainerdiv;
	};
	
	/**
	 * Function to be called from event 'timeupdate' from video
	 * called to check if overlays has to Start
	 */
	AdsManager.prototype.CheckMidAds = function (self, secondes) {
	    var i = 0;
	    var item = null;
	    var show = 0;
	    if (self.settled !== true) {
	        return;
	    }
	    for (i = 0; i < self.midAds.length; i++) {
	        item = self.midAds[i];
	        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
	        if (secondes === show) {
	            self.logger.info(i, ' starting Ads Now .. ');
	            if (self.midAds[i].started === false) {
	                self.logger.info(i, ' starting a new  Mid Ads .. ');
	                self.midAds[i].started = true;
	                self.StartMidAds(self, i);
	            } else {
	                self.logger.info(i, ' already started ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
	            }
	        }
	    }
	};
	
	AdsManager.prototype.Setup = function (ads) {
	    var i = 0;
	    var sz;
	    var item;
	    var clas;
	    this.ads = ads;
	    for (i = 0; i < this.ads.length; i++) {
	        item = ads[i];
	        clas = item[Const.FJCONFIG_CLASS];
	        if (clas === Const.FJCONFIG_ADS_CLASS_PRE_ROLL) {
	            sz = this.preAds.push(item);
	            this.preAds[sz - 1].started = false;
	        } else if (clas === Const.FJCONFIG_ADS_CLASS_POST_ROLL) {
	            sz = this.postAds.push(item);
	            this.postAds[sz - 1].started = false;
	        } else {
	            sz = this.midAds.push(item);
	            this.midAds[sz - 1].started = false;
	        }
	    }
	    this.settled = true;
	    this.logger.info('Ads Setup is settled ', this.settled);
	    this.logger.warn('Cheking PRE ROLL Ads .. ', this.preAds.length);
	    this.logger.warn('Cheking MID ROLL Ads .. ', this.midAds.length);
	    this.logger.warn('Cheking POST ROLL Ads .. ', this.postAds.length);
	};
	
	AdsManager.prototype.clicked = function (self, index) {
	    var item = self.overlays[index];
	    window.open(item[Const.FJCONFIG_URL], '_blank');
	};
	
	AdsManager.prototype.StopPreAds = function (self, index) {
	    // todo
	};
	
	AdsManager.prototype.StartPreAds = function (self, index) {
	    // todo
	};
	
	AdsManager.prototype.StopMidAds = function (self, index) {
	    var el = self.AdsContainerdiv;
	    var elClone = null;
	    var item = self.midAds[index];
	    self.logger.info(index, 'stopping MId Ads ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
	    // remove the click event
	    el = self.AdsContainerdiv;
	    elClone = el.cloneNode(true);
	    el.parentNode.replaceChild(elClone, el);
	    self.AdsContainerdiv = elClone;
	    // hide the overlay , empty the div
	    while (self.AdsContainerdiv.hasChildNodes()) {
	        self.AdsContainerdiv.removeChild(self.AdsContainerdiv.firstChild);
	    }
	    self.AdsContainerdiv.innerHTML = '';
	    self.AdsContainerdiv.style.display = 'none';
	    // resume current video
	    self.video.style.display = 'block';
	    self.video.play();
	};
	
	AdsManager.prototype.StartMidAds = function (self, index) {
	    var item = self.midAds[index];
	    var adsvideo = document.createElement('video');
	    var source = document.createElement('source');
	    self.logger.info(index, 'starting MId Ads ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
	    self.midAds[index].started = true;
	    // hide all div ads content
	    self.AdsContainerdiv.style.display = 'none';
	    // fill ads container
	    adsvideo.preload = true;
	    adsvideo.controls = false;
	    adsvideo.autoplay = false;
	    source.src = item[Const.FJCONFIG_SRC];
	    source.type = item[Const.FJCONFIG_TYPE];
	    adsvideo.appendChild(source);
	    self.AdsContainerdiv.appendChild(adsvideo);
	    // pause current video and play ads
	    self.video.pause();
	    self.AdsContainerdiv.style.display = 'block';
	    self.video.style.display = 'none';
	    adsvideo.play();
	    // event to catch ended playing on video
	    adsvideo.addEventListener('ended', function (e) {
	        self.StopMidAds(self, index);
	    });
	};
	
	AdsManager.prototype.StopPostAds = function (self, index) {
	    // todo
	};
	
	AdsManager.prototype.StartPostAds = function (self, index) {
	    // todo
	};
	exports.default = AdsManager;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=fjplayer.js.map