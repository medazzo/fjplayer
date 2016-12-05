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
	
	var _Version = __webpack_require__(10);
	
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
	
	var FJPLAYER_HTML_INNER = exports.FJPLAYER_HTML_INNER = '	<video width="320" height="240" controls> </video>';

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
	
	var _Menu = __webpack_require__(5);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Video = __webpack_require__(6);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @module Player
	 * @description The Player is the player module used to play items.
	 */
	function Player() {
	    var instance = void 0,
	        logger = void 0,
	        initialized = void 0,
	        divid = void 0,
	        conf = void 0,
	        divElement = void 0,
	        videoElement = void 0,
	        video = void 0,
	        menu = void 0,
	        itemPlaying = void 0,
	        started = void 0;
	
	    function setup() {
	        video = null;
	        conf = null;
	        videoElement = null;
	        divElement = null;
	        started = false;
	        initialized = false;
	        divid = '';
	        itemPlaying = 0;
	        logger = new _Logger2.default('Player');
	        menu = new _Menu2.default('menuObj', 'videoElement', 'menuTracksArray', 'settingBtnOb');
	        itemPlaying = 0;
	    }
	
	    function prepareUI() {
	        logger.log(' Preparing UI ..');
	        divElement.innerHTML = Const.FJPLAYER_HTML_INNER;
	        // creating video
	        videoElement = document.createElement('video');
	        video = new _Video2.default();
	        video.initialize(conf, videoElement);
	        menu.setSubs(0);
	        return true;
	    }
	
	    function initialize(fjconf, fjdivid) {
	        divElement = document.getElementById(fjdivid);
	        if (divElement === null) {
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
	        return 'divid:' + divid + ', itemPlaying:' + itemPlaying + ', divElement:' + divElement + ', initialized:' + initialized + ', started:' + started + ', conf:' + conf.toString();
	    }
	
	    function playAt(itemnbr) {
	        return true;
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
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module Menu
	 * @description The Menu is the Menu module used to play Menu.
	 */
	function Menu(menuObj, videoElement, menuTracksArray, settingBtnObj) {
	    var instance = void 0,
	        video = videoElement,
	        tracksArray = menuTracksArray,
	        menudiv = menuObj,
	        menuBtn = settingBtnObj,
	        logger = new _Logger2.default('Menu');
	
	    function goSettingMenu() {
	        var rect;
	        logger.log(' Hallo menu');
	        // second call :to  hide
	        if (menudiv.style.visibility === 'visible') {
	            menudiv.style.visibility = 'hidden';
	        }
	
	        rect = menuBtn.getBoundingClientRect();
	        menudiv.style.left = rect.left + 'px';
	        menudiv.style.top = rect.top - rect.height * Math.max(tracksArray.subs.length, tracksArray.audio.length) + 'px';
	        menudiv.style.visibility = 'visible';
	    }
	
	    function setSubs(index) {
	        // json array
	        var i;
	        for (i = 0; i < tracksArray.subs.length; i++) {
	            if (tracksArray.subs[i].index === index) {
	                tracksArray.subs[i].actif = true;
	            } else {
	                tracksArray.subs[i].actif = false;
	            }
	        }
	        // video array
	        for (i = 0; i < video.textTracks.length; i++) {
	            if (i === index) {
	                video.textTracks[i].mode = 'showing';
	            } else {
	                video.textTracks[i].mode = 'hidden';
	            }
	        }
	        // finish
	        menudiv.style.visibility = 'hidden';
	    }
	
	    function setAudio(index) {
	        // json array
	        var i;
	        for (i = 0; i < tracksArray.audio.length; i++) {
	            if (tracksArray.audio[i].index === index) {
	                tracksArray.audio[i].actif = true;
	            } else {
	                tracksArray.audio[i].actif = false;
	            }
	        }
	        // video array
	        for (i = 0; i < video.videoTracks.length; i++) {
	            if (i === index) {
	                video.videoTracks[i].selected = true;
	            } else {
	                video.videoTracks[i].selected = false;
	            }
	        }
	        // finish
	        menudiv.style.visibility = 'hidden';
	    }
	
	    instance = {
	        goSettingMenu: goSettingMenu,
	        setSubs: setSubs,
	        setAudio: setAudio
	    };
	
	    return instance;
	};
	
	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _constants = __webpack_require__(2);
	
	var Const = _interopRequireWildcard(_constants);
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	var _Overlay = __webpack_require__(7);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _Thumbs = __webpack_require__(8);
	
	var _Thumbs2 = _interopRequireDefault(_Thumbs);
	
	var _Menu = __webpack_require__(5);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Volume = __webpack_require__(9);
	
	var _Volume2 = _interopRequireDefault(_Volume);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @module Video
	 * @description The Video is the video module used to play items.
	 */
	function Video() {
	
	    var instance = void 0,
	        logger = void 0,
	        mediaConf = void 0,
	        vidElement = void 0,
	        tracksArray = void 0,
	        overlaysrray = void 0,
	        indexThumbsTrack = void 0,
	        isPlaying = void 0,
	        VolumeMgr = void 0,
	        isVideoisAds = void 0,
	        isContainsSubs = void 0,
	        isContainsLangs = void 0,
	        dashContext = void 0,
	        dashPlayer = void 0,
	        isContainsThumbs = void 0;
	
	    function setup() {
	        indexThumbsTrack = 0;
	        mediaConf = null;
	        dashContext = null;
	        dashPlayer = null;
	        vidElement = null;
	        isContainsLangs = false;
	        isPlaying = false;
	        isVideoisAds = false;
	        isContainsSubs = false;
	        isContainsLangs = false;
	        isContainsThumbs = false;
	        VolumeMgr = new _Volume2.default();;
	        overlaysArray = new Array();
	        tracksArray = { 'subs': [], 'audio': [] };
	        logger = new _Logger2.default('Overlay');
	    }
	
	    function initialize(fjmediaConf, videoElement) {
	        var source;
	        mediaConf = fjmediaConf;
	        vidElement = videoElement;
	        if (mediaConf[Const.FJCONFIG_TYPE] == Const.FJCONFIG_TYPE_DASH) {
	            logger.info('Startup for Dash ');
	            dashContext = new Dash.di.DashContext();
	            dashPlayer = new MediaPlayer(dashContext);
	            dashPlayer.startup();
	        } else if (mediaConf[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_MP4) {
	            logger.info('Startup for NON Dash ');
	            source = document.createElement('source');
	            source.src = mediaConf[Const.FJCONFIG_SRC];
	            source.type = mediaConf[Const.FJCONFIG_TYPE];
	            vidElement.appendChild(source);
	        } else {
	            logger.error('NO Manager Type ! ');
	            return false;
	        }
	        return true;
	    }
	
	    function View() {
	        if (mediaConf[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
	            logger.info('View for Dash ');
	            dashPlayer.attachView(vidElement);
	            dashPlayer.setAutoPlay(true);
	            dashPlayer.attachSource(mediaConf[Const.FJCONFIG_SRC]);
	            dashPlayer.setAutoSwitchQuality(true);
	        } else {
	            logger.info('View for NON Dash ');
	            vidElement.play();
	        }
	    }
	
	    function setTracks() {
	        var newObj, subs, overs, i, movieTTime, movieCTime, movieBuffered;
	        logger.info('setTracks ');
	        movieTTime = vidElement.duration;
	        movieCTime = vidElement.currentTime;
	        movieBuffered = vidElement.buffered;
	        VolumeMgr.setVolume(vidElement.volume * 100);
	
	        // set poster
	        moviePoster = mediaConf[Const.FJCONFIG_POSTER];
	
	        // setoverlays
	        // check : if Ads ; show bar info with countdown and hide controls
	        if (mediaConf[Const.FJCONFIG_CLASS] === Const.FJCONFIG_CLASS_ADS) {
	            isVideoisAds = true;
	            logger.info('setTracks : Setting overlays  class > ADS >');
	            overlaysArray[0] = new _Overlay2.default(null, 0, -1, true);
	            return;
	        } else {
	            isVideoisAds = false;
	            overs = mediaConf[Const.FJCONFIG_OVERLAYS];
	            if (overs) {
	                logger.info('setTracks : Setting overlays  class > Movie ', overs.length);
	                for (i = 0; i < overs.length; i++) {
	                    var item = overs[i];
	                    overlaysArray[i] = new _Overlay2.default(item[Const.FJCONFIG_OVER_DATA], item[Const.FJCONFIG_OVER_SHOW_AT], item[Const.FJCONFIG_OVER_DURATION], item[Const.FJCONFIG_OVER_URL]);
	                }
	            }
	        }
	        logger.info(' Video is an ADS >', isVideoisAds);
	
	        //set  thumbs 
	        if (mediaConf[Const.FJCONFIG_THUMBS]) {
	            logger.info('setTracks : Setting thumbs ');
	            thumbMgr = new _Thumbs2.default(tiObj, tdObj, pbObj);
	            //
	            var track = document.createElement('track');
	            track.src = mediaConf[Const.FJCONFIG_THUMBS];
	            track.kind = 'metadata';
	            vidElement.appendChild(track);
	        }
	        //set  subs 
	        subs = mediaConf[Const.FJCONFIG_SUBTITLES];
	        if (subs) {
	            logger.info('setTracks : Setting substitles  ', subs.length);
	            for (i = 0; i < subs.length; i++) {
	                var track = document.createElement('track');
	                var item = subs[i];
	                track.kind = 'subtitles';
	                track.src = item[Const.FJCONFIG_SUB_SRC];
	                track.srclang = item[Const.FJCONFIG_SUB_LANG];
	                track.label = item[Const.FJCONFIG_SUB_LABEL];
	                vidElement.appendChild(track);
	            }
	        }
	        vidElement.load();
	        logger.info('after inserting tracks in video , we have > ', video);
	        // looking for audio tracks 
	        if (vidElement.audioTracks) {
	            logger.info('setTracks : Setting audioTracks  ', scope.vidElement.audioTracks.length);
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
	                if (vidElement.textTracks[i].kind == 'metadata') {
	                    indexThumbsTrack = i;
	                    logger.info('>>>> thumb track found @ ', i, '>> ', vidElement.textTracks[i]);
	                    isContainsThumbs = true;
	                } else if (vidElement.textTracks[i].kind == 'subtitles') {
	                    newObj = { 'label': vidElement.textTracks[i].label, 'index': i, 'actif': false };
	                    tracksArray.subs.push(newObj);
	                    isContainsSubs = true;
	                } else {
	                    logger.info('unknown type of tracks ', vidElement.textTracks[i].kind);
	                }
	            }
	            if (isContainsSubs || isContainsLangs) {
	                SettingMenuMgr = new _Menu2.default(menuObj, settingBtn);
	                SettingMenuMgr.setSubs(-1);
	            }
	        }
	    }
	
	    instance = {
	        initialize: initialize,
	        setTracks: setTracks,
	        view: view
	    };
	
	    setup();
	
	    return instance;
	};
	
	exports.default = Video;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @module Overlay
	 * @description The Overlay is the primary Overlay used to set Overlays .
	 */
	function Overlay(_data, _showAt, _showDuration, _url) {
	    var instance = void 0,
	        adData = _data,
	        showAt = _showAt,
	        showDuration = _showDuration,
	        url = _url,
	        started = false,
	        finished = false,
	        refreshId = null,
	        handler = null,
	        txtduration = void 0;
	
	    function onTmUpdate(e) {
	        /*   $apply(function() {
	               if ((!started) && (video.currentTime > showAt) && (video.currentTime < (showAt + 1))) {
	                   started = true;
	                   if (showDuration == -1) // correct duration
	                       showDuration = Math.trunc(video.duration);
	                   StartAds();
	                   // hide ads after timeout
	                   refreshId = $interval(upInfo, 1000);
	                   logger.info('>> refreshId', refreshId);
	                   return;
	               }
	           });*/
	    }
	
	    function trigger() {
	        isAdsDataHidden = true;
	        isAdsInfoHidden = true;
	        txtduration = $filter('duration')(showDuration);
	        handler = onTmUpdate.bind(video);
	        video.addEventListener('timeupdate', handler, false);
	    }
	
	    function upInfo() {
	        if (showDuration > 0) {
	            AdsInfo = $sce.trustAsHtml('your ads will end in ' + txtduration + ' sec');
	            showDuration--;
	            txtduration = $filter('duration')(showDuration);
	        } else {
	            logger.info('Ending @@@ ', showDuration);
	            isAdsDataHidden = true;
	            isAdsInfoHidden = true;
	            finished = true;
	            logger.info(' Finishing Overlay >> refreshId', refreshId);
	            //finish  
	            $interval.cancel(refreshId);
	            video.removeEventListener('timeupdate', handler, false);
	        }
	    }
	
	    function StartAds() {
	        var secTimeout = showDuration * 1000;
	        txtduration = $filter('duration')(showDuration);
	        AdsInfo = $sce.trustAsHtml('you ads will end in ' + txtduration + ' sec');
	        // show ads
	        if (adData != null) {
	            logger.info('Data re not null ! ');
	            isAdsDataHidden = false;
	            AdsData = $sce.trustAsHtml(adData);
	        }
	        if (animate == true) {
	            logger.info('Animation is  Activated ! ');
	            isAdsInfoHidden = false;
	        }
	        logger.info('you ads will end in ' + txtduration + ' sec', isAdsInfoHidden, '<<>>', isAdsInfoHidden);
	    }
	
	    function setup() {
	        logger.info('fjOverlays : overlay triggred to start @ ', showAt, ' for ', txtduration, 'sec ');
	        trigger();
	    }
	
	    function initialize() {}
	
	    instance = {
	        StartAds: StartAds,
	        upInfo: upInfo
	    };
	
	    setup();
	
	    return instance;
	};
	
	exports.default = Overlay;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @module Thumbs
	 * @description The Thumbs is the primary Thumbs used to set Thumbs .
	 */
	function Thumbs(vidElement, thumbsTrachindex, thumbImg, thumbDiv, progressBar) {
	    var instance = void 0,
	        indexThumbsTrack = thumbsTrachindex,
	        videoElement = vidElement,
	        td = thumbDiv,
	        t = thumbImg,
	        b = progressBar;
	
	    function goShowThumbs() {
	        td.style.visibility = 'visible';
	    }
	
	    function goHideThumbs() {
	        td.style.visibility = 'hidden';
	    }
	    /**
	     * Event on mouse
	     * * */
	    function goRenderThumbs($event) {
	        var rect, p, c, i, url, xywh;
	        // first we convert from mouse to time position ..
	        rect = b.getBoundingClientRect();
	        p = ($event.pageX - rect.left) * (videoElement.duration / (rect.right - rect.left));
	        if (p > videoElement.duration + 2 || p < 0) {
	            // some error ?
	            console.error(' Position is bigger than duration >>', p, videoElement.duration);
	            return;
	        }
	
	        // ..then we find the matching cue..
	        c = videoElement.textTracks[indexThumbsTrack].cues;
	
	        // track eleme,t is not supprted : Firefox
	        if (c == null) {
	            console.error(' cues is null @ ', indexThumbsTrack, ' not supported , Firefox ?');
	            return;
	        }
	
	        for (i = 0; i < c.length; i++) {
	            if (c[i].startTime <= p && c[i].endTime > p) {
	                break;
	            };
	        }
	
	        // ..next we unravel the JPG url and fragment query..
	        url = c[i].text.split('#')[0];
	        xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');
	
	        // ..and last we style the thumbnail overlay
	        t.style.backgroundImage = 'url(' + c[i].text.split('#')[0] + ')';
	        t.style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
	        t.style.width = xywh[2] + 'px';
	        t.style.height = xywh[3] + 'px';
	
	        td.style.left = $event.pageX - xywh[2] / 2 + 'px';
	        td.style.top = rect.top - xywh[3] * 1.5 + 'px';
	        td.style.width = xywh[2] + 'px';
	    }
	
	    instance = {
	
	        goShowThumbs: goShowThumbs,
	        goHideThumbs: goHideThumbs,
	        goRenderThumbs: goRenderThumbs
	
	    };
	
	    return instance;
	};
	
	exports.default = Thumbs;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Logger = __webpack_require__(3);
	
	var _Logger2 = _interopRequireDefault(_Logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module Volume
	 * @description The Volume is the Volume module used to play Volume.
	 */
	function Volume(volumebar, videoElement) {
	    var instance = void 0,
	        vb = volumebar,
	        volumePercentage = 0,
	        video = videoElement,
	        showingVolumeBar = true,
	        usingVolumeBar = true,
	        VolLevelUp = true,
	        VolLevelDown = true,
	        VolLevelOff = true,
	        logger = new _Logger2.default('Menu');
	
	    function goShowProgressBar() {
	        logger.log(' Hallo Volume !');
	        /* $timeout(function() {
	            if (usingVolumeBar === false) {
	                showingVolumeBar = false;
	            }
	        }, 1000);*/
	    }
	
	    function goShowVolumeBar() {
	        vb.style.display = 'block';
	        showingVolumeBar = true;
	    }
	
	    function goUseVolumeBar() {
	        usingVolumeBar = true;
	    }
	
	    function goHideVolumeBar() {
	        usingVolumeBar = false;
	        showingVolumeBar = false;
	        volumePercentage = 100;
	    }
	
	    function setVolume(newVolumePercentage) {
	        video.volume = newVolumePercentage / 100;
	        volumePercentage = newVolumePercentage;
	        if (newVolumePercentage == 0) {
	            VolLevelUp = false;
	            VolLevelDown = false;
	            VolLevelOff = true;
	        } else if (newVolumePercentage > 60) {
	            VolLevelUp = true;
	            VolLevelDown = false;
	            VolLevelOff = false;
	        } else {
	            VolLevelUp = false;
	            VolLevelDown = true;
	            VolLevelOff = false;
	        }
	    }
	
	    function goMuteVolume() {
	        if (volumePercentage === 0) {
	            setVolume(100);
	        } else {
	            setVolume(0);
	        }
	    }
	
	    function setVolumeProgressLevel($event) {
	        // need ti get object now when it shown        
	        var rect = vb.getBoundingClientRect();
	        var vp = ($event.pageX - rect.left) / rect.width * 100;
	        setVolume(vp);
	    }
	
	    instance = {
	        goShowProgressBar: goShowProgressBar,
	        goShowVolumeBar: goShowVolumeBar,
	        goUseVolumeBar: goUseVolumeBar,
	        goHideVolumeBar: goHideVolumeBar,
	        goMuteVolume: goMuteVolume,
	        setVolumeProgressLevel: setVolumeProgressLevel
	    };
	
	    return instance;
	};
	
	exports.default = Volume;
	module.exports = exports['default'];

/***/ },
/* 10 */
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