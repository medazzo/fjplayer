(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fjplayer", [], factory);
	else if(typeof exports === 'object')
		exports["fjplayer"] = factory();
	else
		root["fjplayer"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Version.js":
/*!************************!*\
  !*** ./src/Version.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var pjson = __webpack_require__(/*! ../package.json */ "./package.json");
/**
 *
 */


var Version = /*#__PURE__*/function () {
  /**
     *
     */
  function Version() {
    _classCallCheck(this, Version);

    this.version = pjson.version;
  }
  /**
     * Get Player Version
     * @returns the current verision of teh package
     */


  _createClass(Version, [{
    key: "getVersion",
    value: function getVersion() {
      return this.version;
    }
  }]);

  return Version;
}();

module.exports = Version;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * The entry point for the library FJplayer.JS
 */
var Playlist = __webpack_require__(/*! ./js/player/playlist */ "./src/js/player/playlist.js");

var Player = __webpack_require__(/*! ./js/player/player */ "./src/js/player/player.js");

var Version = __webpack_require__(/*! ./Version */ "./src/Version.js");

var _require = __webpack_require__(/*! ./js/defs/constants */ "./src/js/defs/constants.js"),
    PlayerEvents = _require.PlayerEvents,
    AdsEvents = _require.AdsEvents,
    OverlayEvents = _require.OverlayEvents; // Shove both of these into the global scope


var context = typeof window !== 'undefined' && window || __webpack_require__.g;
var fjplayer = context.fjplayer;

if (!fjplayer) {
  fjplayer = {};
  context.fjplayer = {};
}

fjplayer.Playlist = Playlist;
fjplayer.Player = Player;
fjplayer.Version = Version;
fjplayer.PlayerEvents = PlayerEvents;
fjplayer.AdsEvents = AdsEvents;
fjplayer.OverlayEvents = OverlayEvents;
module.exports = {
  fjplayer: fjplayer,
  Playlist: Playlist,
  Player: Player,
  Version: Version,
  PlayerEvents: PlayerEvents,
  AdsEvents: AdsEvents,
  OverlayEvents: OverlayEvents
};
/*
Next version like this  + playlist must be detached
class fjplayer {
  constructor() {
    this.Playlist = new Playlist();
    this.Player = null;
    this.Version = new Version();
    this.PlayerEvents = PlayerEvents;
    this.AdsEvents = AdsEvents;
    this.OverlayEvents = OverlayEvents;
  }

  get playlist() {
    return this.Playlist;
  }

  get player() {
    return this.Player;
  }

  setPlayer(id, videoContainerId) {
    this.Player = new Player(id, videoContainerId);
  }

  get version() {
    return this.Version.getVersion();
  }

  get playerEvents() {
    return this.PlayerEvents;
  }

  get adsEvents() {
    return this.AdsEvents;
  }

  get overlayEvents() {
    return this.OverlayEvents;
  }
}

module.exports = fjplayer;
s
*/

/***/ }),

/***/ "./src/js/defs/constants.js":
/*!**********************************!*\
  !*** ./src/js/defs/constants.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * @module Constants
 */
var FJCONFIG_CLASS = 'FJClass';
var FJCONFIG_TYPE = 'FJType';
var FJCONFIG_TITLE = 'FJTitle';
var FJCONFIG_SRC = 'FJSrc';
var FJCONFIG_POSTER = 'FJPoster';
var FJCONFIG_ADS_LINK_URL = 'FJAdsLinkUrl';
var FJCONFIG_CAN_ESCAPE = 'FJCanEscape';
var FJCONFIG_THUMBS = 'FJThumbs';
var FJCONFIG_SUBTITLES = 'FJSubtitles';
var FJCONFIG_ADS = 'FJAds';
var FJCONFIG_AUDIOS = 'FJAudios';
var FJCONFIG_OVERLAYS = 'FJOverlays';
var FJCONFIG_DRM = 'FJDrm';
var FJCONFIG_LABEL = 'FJLabel';
var FJCONFIG_LANG = 'FJLang';
var FJCONFIG_DATA = 'FJData';
var FJCONFIG_URL = 'FJUrl';
var FJCONFIG_DURATION = 'FJDuration';
var FJCONFIG_SHOW_AT = 'FJShowAt';
var FJCONFIG_DRM_LICENSE_SERVER = 'FJLicenseServer';
var FJCONFIG_DRM_SCHEME = 'FJDrmScheme';
var FJCONFIG_DRM_SCHEME_FORJA = 'forja';
var FJCONFIG_SHOW_UP_TITLE = 'FJUpTitle';
var FJCONFIG_DOWNLOAD = 'FJDownload';
var FJCONFIG_SHARE = 'FJShare';
var FJCONFIG_BACK = 'FJBack';
var FJCONFIG_TRUE = 'true';
var FJCONFIG_FALSE = 'false';
var FJCONFIG_BOOLEAN = {
  FJCONFIG_TRUE: FJCONFIG_TRUE,
  FJCONFIG_FALSE: FJCONFIG_FALSE
};
var FJCONFIG_CLASS_VOD = 'vod';
var FJCONFIG_CLASS_LIVE = 'live';
var FJCONFIG_CLASSES = [FJCONFIG_CLASS_LIVE, FJCONFIG_CLASS_VOD];
var FJCONFIG_TYPE_MP4 = 'video/mp4';
var FJCONFIG_TYPE_DASH = 'dash';
var FJCONFIG_TYPES = [FJCONFIG_TYPE_MP4, FJCONFIG_TYPE_DASH];
var FJCONFIG_ADS_CLASS_PRE_ROLL = 'pre-roll';
var FJCONFIG_ADS_CLASS_MID_ROLL = 'mid-roll';
var FJCONFIG_ADS_CLASS_POST_ROLL = 'post-roll';
var FJCONFIG_ADS_CLASSES = [FJCONFIG_ADS_CLASS_PRE_ROLL, FJCONFIG_ADS_CLASS_MID_ROLL, FJCONFIG_ADS_CLASS_POST_ROLL];
var AdsEnum = {
  ADS_PRE_ROLL: 'ADS_PRE_ROLL',
  ADS_MID_ROLL: 'ADS_MID_ROLL',
  ADS_POST_ROLL: 'ADS_POST_ROLL'
};
var PlayerEvents = {
  STREAM_LOADED: 'STREAM_LOADED',
  TRACKS_ADDED: 'TRACKS_ADDED',
  PLAYBACK_ERROR: 'PLAYBACK_ERROR',
  PLAYBACK_STARTED: 'PLAYBACK_STARTED',
  PLAYBACK_PAUSED: 'PLAYBACK_PAUSED',
  PLAYBACK_SEEKING: 'PLAYBACK_SEEKING',
  PLAYBACK_SEEKED: 'PLAYBACK_SEEKED',
  PLAYBACK_ENDED: 'PLAYBACK_ENDED',
  PLAYBACK_TIME_UPDATE: 'PLAYBACK_TIME_UPDATE'
};
var AdsEvents = {
  ADS_USER_CLICKED: 'ADS_USER_CLICKED',
  ADS_PLAYBACK_STARTED: 'ADS_PLAYBACK_STARTED',
  ADS_PLAYBACK_ENDED: 'ADS_PLAYBACK_ENDED',
  ADS_PLAYBACK_ERROR: 'ADS_PLAYBACK_ERROR'
};
var OverlayEvents = {
  OVERLAY_USER_CLICKED: 'OVERLAY_USER_CLICKED',
  OVERLAY_STARTED: 'OVERLAY_STARTED',
  OVERLAY_ENDED: 'OVERLAY_ENDED',
  OVERLAY_ERROR: 'OVERLAY_ERROR',
  OVERLAY_SKIPPED: 'OVERLAY_SKIPPED'
};
module.exports = {
  FJCONFIG_CLASS: FJCONFIG_CLASS,
  FJCONFIG_TYPE: FJCONFIG_TYPE,
  FJCONFIG_TITLE: FJCONFIG_TITLE,
  FJCONFIG_SRC: FJCONFIG_SRC,
  FJCONFIG_POSTER: FJCONFIG_POSTER,
  FJCONFIG_ADS_LINK_URL: FJCONFIG_ADS_LINK_URL,
  FJCONFIG_CAN_ESCAPE: FJCONFIG_CAN_ESCAPE,
  FJCONFIG_THUMBS: FJCONFIG_THUMBS,
  FJCONFIG_SUBTITLES: FJCONFIG_SUBTITLES,
  FJCONFIG_ADS: FJCONFIG_ADS,
  FJCONFIG_AUDIOS: FJCONFIG_AUDIOS,
  FJCONFIG_OVERLAYS: FJCONFIG_OVERLAYS,
  FJCONFIG_DRM: FJCONFIG_DRM,
  FJCONFIG_LABEL: FJCONFIG_LABEL,
  FJCONFIG_LANG: FJCONFIG_LANG,
  FJCONFIG_DATA: FJCONFIG_DATA,
  FJCONFIG_URL: FJCONFIG_URL,
  FJCONFIG_DURATION: FJCONFIG_DURATION,
  FJCONFIG_SHOW_AT: FJCONFIG_SHOW_AT,
  FJCONFIG_DRM_LICENSE_SERVER: FJCONFIG_DRM_LICENSE_SERVER,
  FJCONFIG_DRM_SCHEME: FJCONFIG_DRM_SCHEME,
  FJCONFIG_DRM_SCHEME_FORJA: FJCONFIG_DRM_SCHEME_FORJA,
  FJCONFIG_SHOW_UP_TITLE: FJCONFIG_SHOW_UP_TITLE,
  FJCONFIG_DOWNLOAD: FJCONFIG_DOWNLOAD,
  FJCONFIG_SHARE: FJCONFIG_SHARE,
  FJCONFIG_BACK: FJCONFIG_BACK,
  FJCONFIG_TRUE: FJCONFIG_TRUE,
  FJCONFIG_FALSE: FJCONFIG_FALSE,
  FJCONFIG_BOOLEAN: FJCONFIG_BOOLEAN,
  FJCONFIG_CLASS_VOD: FJCONFIG_CLASS_VOD,
  FJCONFIG_CLASS_LIVE: FJCONFIG_CLASS_LIVE,
  FJCONFIG_CLASSES: FJCONFIG_CLASSES,
  FJCONFIG_TYPE_MP4: FJCONFIG_TYPE_MP4,
  FJCONFIG_TYPE_DASH: FJCONFIG_TYPE_DASH,
  FJCONFIG_TYPES: FJCONFIG_TYPES,
  FJCONFIG_ADS_CLASS_PRE_ROLL: FJCONFIG_ADS_CLASS_PRE_ROLL,
  FJCONFIG_ADS_CLASS_MID_ROLL: FJCONFIG_ADS_CLASS_MID_ROLL,
  FJCONFIG_ADS_CLASS_POST_ROLL: FJCONFIG_ADS_CLASS_POST_ROLL,
  FJCONFIG_ADS_CLASSES: FJCONFIG_ADS_CLASSES,
  AdsEnum: AdsEnum,
  PlayerEvents: PlayerEvents,
  AdsEvents: AdsEvents,
  OverlayEvents: OverlayEvents
};

/***/ }),

/***/ "./src/js/defs/isoLangs.js":
/*!*********************************!*\
  !*** ./src/js/defs/isoLangs.js ***!
  \*********************************/
/***/ ((module) => {

/**
 * @author Phil Teare
 * using wikipedia data
 */
var IsoLangs = {
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа'
  },
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf'
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans'
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan'
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip'
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية'
  },
  an: {
    name: 'Aragonese',
    nativeName: 'Aragonés'
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն'
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া'
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ, магӀарул мацӀ'
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta'
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru'
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili'
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan'
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле'
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara, euskera'
  },
  be: {
    name: 'Belarusian',
    nativeName: 'Беларуская'
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা'
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी'
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama'
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik'
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg'
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език'
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ'
  },
  ca: {
    name: 'Catalan; Valencian',
    nativeName: 'Català'
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru'
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт'
  },
  ny: {
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiCheŵa, chinyanja'
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文 (Zhōngwén), 汉语, 漢語'
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи'
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek'
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu, lingua corsa'
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski'
  },
  cs: {
    name: 'Czech',
    nativeName: 'česky, čeština'
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk'
  },
  dv: {
    name: 'Divehi; Dhivehi; Maldivian;',
    nativeName: 'ދިވެހި'
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands, Vlaams'
  },
  en: {
    name: 'English',
    nativeName: 'English'
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto'
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti, eesti keel'
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe'
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt'
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti'
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi, suomen kieli'
  },
  fr: {
    name: 'French',
    nativeName: 'français, langue française'
  },
  ff: {
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular'
  },
  gl: {
    name: 'Galician',
    nativeName: 'Galego'
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული'
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch'
  },
  el: {
    name: 'Greek, Modern',
    nativeName: 'Ελληνικά'
  },
  gn: {
    name: 'Guaraní',
    nativeName: 'Avañeẽ'
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી'
  },
  ht: {
    name: 'Haitian; Haitian Creole',
    nativeName: 'Kreyòl ayisyen'
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa, هَوُسَ'
  },
  he: {
    name: 'Hebrew (modern)',
    nativeName: 'עברית'
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero'
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी, हिंदी'
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu'
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'Magyar'
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua'
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia'
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII'
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge'
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo'
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq, Iñupiatun'
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido'
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska'
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano'
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ'
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語 (にほんご／にっぽんご)'
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa'
  },
  kl: {
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii'
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ'
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri'
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी, كشميري‎'
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'Қазақ тілі'
  },
  km: {
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ'
  },
  ki: {
    name: 'Kikuyu, Gikuyu',
    nativeName: 'Gĩkũyũ'
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda'
  },
  ky: {
    name: 'Kirghiz, Kyrgyz',
    nativeName: 'кыргыз тили'
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв'
  },
  kg: {
    name: 'Kongo',
    nativeName: 'KiKongo'
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)'
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî, كوردی‎'
  },
  kj: {
    name: 'Kwanyama, Kuanyama',
    nativeName: 'Kuanyama'
  },
  la: {
    name: 'Latin',
    nativeName: 'latine, lingua latina'
  },
  lb: {
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'Lëtzebuergesch'
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda'
  },
  li: {
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs'
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála'
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາລາວ'
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba'
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: ''
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda'
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg, Gailck'
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик'
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'Malagasy fiteny'
  },
  ms: {
    name: 'Malay',
    nativeName: 'bahasa Melayu, بهاس ملايو‎'
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം'
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti'
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori'
  },
  mr: {
    name: 'Marathi (Marāṭhī)',
    nativeName: 'मराठी'
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ'
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'монгол'
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero'
  },
  nv: {
    name: 'Navajo, Navaho',
    nativeName: 'Diné bizaad, Dinékʼehǰí'
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål'
  },
  nd: {
    name: 'North Ndebele',
    nativeName: 'isiNdebele'
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली'
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo'
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk'
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk'
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop'
  },
  nr: {
    name: 'South Ndebele',
    nativeName: 'isiNdebele'
  },
  oc: {
    name: 'Occitan',
    nativeName: 'Occitan'
  },
  oj: {
    name: 'Ojibwe, Ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  cu: {
    name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ'
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo'
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ'
  },
  os: {
    name: 'Ossetian, Ossetic',
    nativeName: 'ирон æвзаг'
  },
  pa: {
    name: 'Panjabi, Punjabi',
    nativeName: 'ਪੰਜਾਬੀ, پنجابی‎'
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि'
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی'
  },
  pl: {
    name: 'Polish',
    nativeName: 'polski'
  },
  ps: {
    name: 'Pashto, Pushto',
    nativeName: 'پښتو'
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português'
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi, Kichwa'
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun'
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'kiRundi'
  },
  ro: {
    name: 'Romanian, Moldavian, Moldovan',
    nativeName: 'română'
  },
  ru: {
    name: 'Russian',
    nativeName: 'русский язык'
  },
  sa: {
    name: 'Sanskrit (Saṁskṛta)',
    nativeName: 'संस्कृतम्'
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu'
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी, سنڌي، سندھی‎'
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella'
  },
  sm: {
    name: 'Samoan',
    nativeName: 'gagana faa Samoa'
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö'
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик'
  },
  gd: {
    name: 'Scottish Gaelic; Gaelic',
    nativeName: 'Gàidhlig'
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona'
  },
  si: {
    name: 'Sinhala, Sinhalese',
    nativeName: 'සිංහල'
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina'
  },
  sl: {
    name: 'Slovene',
    nativeName: 'slovenščina'
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga, af Soomaali'
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho'
  },
  es: {
    name: 'Spanish; Castilian',
    nativeName: 'español, castellano'
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda'
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili'
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati'
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska'
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்'
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు'
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ, toğikī, تاجیکی‎'
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย'
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ'
  },
  bo: {
    name: 'Tibetan Standard, Tibetan, Central',
    nativeName: 'བོད་ཡིག'
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen, Түркмен'
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔'
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana'
  },
  to: {
    name: 'Tonga (Tonga Islands)',
    nativeName: 'faka Tonga'
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe'
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga'
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татарча, tatarça, تاتارچا‎'
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi'
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti'
  },
  ug: {
    name: 'Uighur, Uyghur',
    nativeName: 'Uyƣurqə, ئۇيغۇرچە‎'
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'українська'
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو'
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'zbek, Ўзбек, أۇزبېك‎'
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa'
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt'
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük'
  },
  wa: {
    name: 'Walloon',
    nativeName: 'Walon'
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg'
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof'
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk'
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa'
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש'
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá'
  },
  za: {
    name: 'Zhuang, Chuang',
    nativeName: 'Saɯ cueŋƅ, Saw cuengh'
  }
};
module.exports = IsoLangs;

/***/ }),

/***/ "./src/js/player/PlayerMedia.js":
/*!**************************************!*\
  !*** ./src/js/player/PlayerMedia.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var shaka = __webpack_require__(/*! shaka-player */ "./node_modules/shaka-player/dist/shaka-player.compiled.js");

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

var Eventing = __webpack_require__(/*! ../utils/Eventing */ "./src/js/utils/Eventing.js");

var Const = __webpack_require__(/*! ../defs/constants */ "./src/js/defs/constants.js");

var IsoLangs = __webpack_require__(/*! ../defs/isoLangs */ "./src/js/defs/isoLangs.js");
/**
 * @module PlayerMedia
 * @description The PlayerMedia is the html video/dash/drm Media player
 *
 */


var PlayerMedia = /*#__PURE__*/function () {
  function PlayerMedia(fjPlayerId) {
    _classCallCheck(this, PlayerMedia);

    this.video = null;
    this.FjPlayerId = fjPlayerId;
    this.FjSessionToken = 'notSettled';
    this.initialized = false;
    this.startingCount = 0;
    this.thumbsTrackUrl = null;
    this.thumbsTrackIndex = -1;
    this.CurrentUrl = false;
    this.CurrentUrl = null;
    this.CurrentProtection = null;
    this.CurrentStreamType = PlayerMedia.UNKNOWN;
    this.DashPlayer = null;
    this.logger = new Logger(this);
    this.events = new Eventing();
    this.StreamTypes = {
      UNKNOWN: 0,
      MP4_CLEAR: 1,
      DASH_CLEAR: 2,
      DASH_ENCRYPTED: 3,
      properties: {
        0: {
          name: 'UNKNOWN',
          value: 0,
          code: 'U'
        },
        1: {
          name: 'MP4_CLEAR',
          value: 1,
          code: 'M'
        },
        2: {
          name: 'DASH_CLEAR',
          value: 2,
          code: 'D'
        },
        3: {
          name: 'DASH_ENCRYPTED',
          value: 3,
          code: 'E'
        }
      }
    };
  }
  /**
     *
     */


  _createClass(PlayerMedia, [{
    key: "initialize",
    value: function initialize(playerUiVideo) {
      // Install built-in polyfills to patch browser incompatibilities.
      shaka.polyfill.installAll(); // Debug logs, when the default of INFO isn't enough:
      // shaka.log.setLevel(shaka.log.Level.DEBUG);
      // Check to see if the browser supports the basic APIs Shaka needs.

      if (!shaka.Player.isBrowserSupported()) {
        // This browser does not have the minimum set of APIs we need.
        this.logger.error('Browser not supported !');
        return false;
      }

      this.video = playerUiVideo;

      if (!this.video) {
        throw new Error('Please call initialize with a valid Player UI having a this.videohtml 5 element ');
      } // this.DashPlayer= new shaka.Player(video);
      // done


      this.initialized = true;
      this.logger.debug(' Media player just this.initializedwith playerUiVideo');
      return true;
    }
    /**
       *
       */

  }, {
    key: "on",
    value: function on(name, handler) {
      return this.events.on(name, handler);
    }
    /**
       *
       */

  }, {
    key: "off",
    value: function off(name, handler) {
      return this.events.off(name, handler);
    }
    /**
       *
       */

  }, {
    key: "play",
    value: function play() {
      if (this.initialized === true) {
        this.video.play();
      } else {
        this.logger.warn(' No Media Loaded , nothing to play ');
      }
    }
    /**
       *
       */

  }, {
    key: "time",
    value: function time() {
      if (this.initialized === true) {
        return this.video.currentTime;
      }

      this.logger.warn(' No Media Loaded ! ');
      return null;
    }
    /**
       *
       */

  }, {
    key: "isPaused",
    value: function isPaused() {
      if (this.initialized === true) {
        return this.video.paused;
      }

      this.logger.warn(' No Media Loaded ! ');
      return true;
    }
    /**
       *
       */

  }, {
    key: "isEnded",
    value: function isEnded() {
      if (this.initialized === true) {
        return this.video.ended;
      }

      this.logger.warn(' No Media Loaded ! ');
      return true;
    }
    /**
       *
       */

  }, {
    key: "isMuted",
    value: function isMuted() {
      if (this.initialized === true) {
        return this.video.muted;
      }

      this.logger.warn(' No Media Loaded ! ');
      return true;
    }
    /**
       *
       */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      if (this.initialized === true) {
        this.video.volume = volume;
      } else {
        this.logger.warn(' No Media Loaded ! ');
      }
    }
    /**
       *
       */

  }, {
    key: "getDuration",
    value: function getDuration() {
      if (this.initialized === true) {
        return this.video.duration;
      }

      this.logger.warn(' No Media Loaded ! ');
      return null;
    }
    /**
       *
       */

  }, {
    key: "getVolume",
    value: function getVolume() {
      if (this.initialized === true) {
        return this.video.volume;
      }

      this.logger.warn(' No Media Loaded ! ');
      return null;
    }
  }, {
    key: "setThumbsUrl",
    value: function setThumbsUrl(url) {
      if (url !== null && url !== undefined && url !== '') {
        this.thumbsTrackUrl = url;
        this.logger.debug(' Setting url for thumbs @', url);
      } else {
        this.thumbsTrackUrl = null;
        this.logger.debug(' No Setting url for thumbs ');
      }
    }
    /* ********************************************************************** */

    /*                               TXT TRACKS                               */

    /* ********************************************************************** */

  }, {
    key: "setTextTrack",
    value: function setTextTrack(textTrackIndex) {
      this.logger.warn(' Setting text track to index : ', textTrackIndex);
      var index = parseInt(textTrackIndex, 10);
      this.logger.warn(' Setting text track to index : ', index);

      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          for (var i = 0; i < this.video.textTracks.length; i += 1) {
            if (this.video.textTracks[i].kind === 'captions' || this.video.textTracks[i].kind === 'subtitles' || this.video.textTracks[i].kind === 'subtitle') {
              if (index === i) {
                this.video.textTracks[i].mode = 'showing';
              } else {
                this.video.textTracks[i].mode = 'hidden';
              }
            }
          }
        } else {
          this.DashPlayer.selectTextTrack(this.DashPlayer.getTextTracks()[index]);
        }
      }
    }
  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          return this.video.textTracks;
        }

        return this.DashPlayer.getTextTracks();
      }

      this.logger.warn(' No Media Loaded ! ');
      return [];
    }
  }, {
    key: "isTextTrackEnabled",
    value: function isTextTrackEnabled(textTrackIndex) {
      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          return this.video.textTracks[textTrackIndex].enabled === true;
        }

        return this.DashPlayer.getTextTracks()[textTrackIndex].active === true;
      }

      this.logger.warn(' No Media Loaded ! ');
      return false;
    }
  }, {
    key: "getTextTrackLabel",
    value: function getTextTrackLabel(textTrackIndex) {
      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          return this.video.textTracks[textTrackIndex].label;
        }

        return this.DashPlayer.getTextTracks()[textTrackIndex].language;
      }

      this.logger.warn(' No Media Loaded ! ');
      return 'NaN';
    }
    /* ********************************************************************** */

    /*                               AUD LANGS                               */

    /* ********************************************************************** */

  }, {
    key: "setAudioLang",
    value: function setAudioLang(AudLangIndex) {
      var index = parseInt(AudLangIndex);
      this.logger.warn(' Setting text track to index : ', index);

      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          for (var i = 0; i < this.video.textTracks.length; i += 1) {
            if (index === i) {
              this.video.audioTracks[i].enabled = true;
            } else {
              this.video.audioTracks[i].enabled = false;
            }
          }
        } else {
          this.DashPlayer.selectAudioLanguage(this.DashPlayer.getAudioLanguages()[index]);
        }
      }
    }
  }, {
    key: "getAudioLanguages",
    value: function getAudioLanguages() {
      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          return this.video.audioTracks;
        }

        return this.DashPlayer.getAudioLanguages();
      }

      this.logger.warn(' No Media Loaded ! ');
      return [];
    }
  }, {
    key: "isAudioLangEnabled",
    value: function isAudioLangEnabled(AudLangIndex) {
      var index = parseInt(AudLangIndex);

      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          return this.video.audioTracks[index].enabled === true;
        }

        return this.DashPlayer.getAudioLanguages()[index].enabled === true;
      }

      this.logger.warn(' No Media Loaded ! ');
      return false;
    }
  }, {
    key: "getAudioLangLabel",
    value: function getAudioLangLabel(AudLangIndex) {
      var index = parseInt(AudLangIndex);

      if (this.initialized === true) {
        if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
          return this.video.audioTracks[index].label;
        }

        return this.DashPlayer.getAudioLanguages()[index].label;
      }

      this.logger.warn(' No Media Loaded ! ');
      return 'NaN';
    }
    /**
       *
       */

  }, {
    key: "setMute",
    value: function setMute(mute) {
      if (this.initialized === true) {
        this.video.muted = mute;
      } else {
        this.logger.warn(' No Media Loaded ! ');
      }
    }
    /**
       *
       */

  }, {
    key: "pause",
    value: function pause() {
      if (this.initialized === true) {
        this.video.pause();
      } else {
        this.logger.warn(' No Media Loaded , nothing to pause ');
      }
    }
    /**
       *
       */

  }, {
    key: "seek",
    value: function seek(position) {
      if (this.initialized === true) {
        this.video.currentTime = parseFloat(position);
      } else {
        this.logger.warn(' No Media Loaded , nothing to seek ');
      }
    }
    /**
       * Callbacks
       */

  }, {
    key: "onShakaError",
    value: function onShakaError(e) {
      this.onShError(e.detail);
    }
  }, {
    key: "onShakaEvent",
    value: function onShakaEvent(event) {
      this.logger.warn('Eventing  [', event.type, ']:', event);
    }
  }, {
    key: "onShError",
    value: function onShError(error) {
      this.logger.error('Error code', error.code, 'object', error);
    }
  }, {
    key: "onPlayStart",
    value: function onPlayStart() {
      this.startingCount += 1;
      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_STARTED, this.startingCount);
    }
  }, {
    key: "onPlaybackPaused",
    value: function onPlaybackPaused() {
      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_PAUSED);
    }
  }, {
    key: "onPlaybackEnded",
    value: function onPlaybackEnded() {
      this.getEndedEvent = true;
      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_ENDED);
    }
  }, {
    key: "onPlayTimeUpdate",
    value: function onPlayTimeUpdate() {
      var time = 0;

      if (this.initialized === true) {
        time = this.video.currentTime;
      } else {
        this.logger.warn(' Internal error !');
        return;
      }

      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_TIME_UPDATE, time);
    }
  }, {
    key: "onSeeked",
    value: function onSeeked() {
      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_SEEKED);
    }
  }, {
    key: "onSeeking",
    value: function onSeeking() {
      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_SEEKING);
    }
  }, {
    key: "onError",
    value: function onError(e) {
      var msg = e.event.message;

      if (e.event.message === undefined) {
        msg = e.event;
      }

      var args = {
        type: e.type,
        code: e.error,
        message: msg
      };
      this.logger.error('>>>>>>>>>>>>>>> ERROR !!:', e);
      this.events.fireEvent(Const.PlayerEvents.PLAYBACK_ERROR, args);
    }
  }, {
    key: "onStreamInitialized",
    value: function onStreamInitialized() {
      this.thumbsTrackIndex = -1;

      if (this.thumbsTrackUrl !== null) {
        for (var i = 0; i < this.video.textTracks.length; i += 1) {
          if (this.video.textTracks[i].kind === 'metadata') {
            this.thumbsTrackIndex = i;
            this.video.textTracks[i].mode = 'hidden'; // thanks Firefox

            this.logger.warn('find  metadata tumbs  @ ', this.thumbsTrackIndex, '/', this.video.textTracks.length, ' >>> and this.videoduration ;;; ', this.getDuration());
          } else if (this.video.textTracks[i].kind === 'captions' || this.video.textTracks[i].kind === 'subtitles') {
            // SubsTrackIndex = i;
            this.logger.warn('find  soustitres  @ ', this.thumbsTrackIndex, '/', this.video.textTracks.length, ' >>> ', this.video.textTracks[i]);
            break;
          }
        }
      }

      this.logger.info('Stream is completly loaded.');

      if (this.thumbsTrackIndex !== -1 && this.thumbsTrackUrl !== -1) {
        this.events.fireEvent(Const.PlayerEvents.STREAM_LOADED, this.thumbsTrackIndex);
      } else {
        this.events.fireEvent(Const.PlayerEvents.STREAM_LOADED, null);
      }
    }
  }, {
    key: "SetManuallysubs",
    value: function SetManuallysubs(subs, video) {
      var track = null;
      var item = null;
      var tmp = null;
      var label = null;
      var i = 0;
      var n = 0; // set subs

      if (subs !== null && subs !== undefined) {
        for (i = 0; i < subs.length; i += 1) {
          item = subs[i];
          track = document.createElement('track');
          track.kind = 'subtitles';
          track.src = item[Const.FJCONFIG_SRC];
          track.srclang = item[Const.FJCONFIG_LANG];
          tmp = IsoLangs[item[Const.FJCONFIG_LANG]];
          this.logger.log(' Appending track substitles with Label', tmp.name);
          n = tmp.name.indexOf(',');

          if (n === -1) {
            n = tmp.name.indexOf(';');
          }

          if (n === -1) {
            label = tmp.name;
          } else {
            label = tmp.name.substr(0, n);
          }

          track.label = label;
          video.appendChild(track);
        }
      } else {
        this.logger.debug('no vtt Subs are found in config.');
      }
    }
  }, {
    key: "doesTimeMarchesOn",
    value: function doesTimeMarchesOn() {
      var version;
      var REQUIRED_VERSION = 49.0;

      if (typeof navigator !== 'undefined') {
        if (!navigator.userAgent.match(/Firefox/)) {
          return true;
        }

        version = this.parseFloat(navigator.userAgent.match(/rv:([0-9.]+)/)[1]);

        if (!Number.isNaN(version) && version >= REQUIRED_VERSION) {
          return true;
        }
      }

      return false;
    }
    /**
       * Used to Clean loaded data video
       */

  }, {
    key: "Unload",
    value: function Unload() {
      var el = this.video;
      var elClone = null;

      if (this.initialized !== true) {
        this.logger.warn('not yet this.initialized!');
        return;
      } // remove all this.videochild


      elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
      this.video = elClone; // hide the overlay , empty the div

      while (this.video.hasChildNodes()) {
        this.video.removeChild(this.video.firstChild);
      } // unset attr


      this.video.removeAttribute('poster');

      if (this.CurrentStreamType === this.StreamTypes.MP4_CLEAR) {
        this.video.removeEventListener('loadedmetadata', this.onStreamInitialized);
        this.video.removeEventListener('play', this.onPlayStart);
        this.video.removeEventListener('pause', this.onPlaybackPaused);
        this.video.removeEventListener('ended', this.onPlaybackEnded);
        this.video.removeEventListener('timeupdate', this.onPlayTimeUpdate);
        this.video.removeEventListener('seeking', this.onSeeking);
        this.video.removeEventListener('seeked', this.onSeeked);
        this.video.removeEventListener('error', this.onError);
      } else {
        // Unsetting Callbacks
        this.DashPlayer.removeEventListener('error', this.onShakaError);
        this.DashPlayer.removeEventListener('adaptation', this.onShakaEvent);
        this.DashPlayer.removeEventListener('buffering', this.onShakaEvent);
        this.DashPlayer.removeEventListener('emsg', this.onShakaEvent);
        this.DashPlayer.removeEventListener('expirationupdated', this.onShakaEvent);
        this.DashPlayer.removeEventListener('largegap', this.onShakaEvent);
        this.DashPlayer.removeEventListener('loading', this.onShakaEvent);
        this.DashPlayer.removeEventListener('texttrackvisibility', this.onShakaEvent);
        this.DashPlayer.removeEventListener('timelineregionadded', this.onShakaEvent);
        this.DashPlayer.removeEventListener('timelineregionenter', this.onShakaEvent);
        this.DashPlayer.removeEventListener('timelineregionexit', this.onShakaEvent);
        this.DashPlayer.removeEventListener('trackschanged', this.onShakaEvent);
        this.DashPlayer.removeEventListener('unloading', this.onShakaEvent);
        this.DashPlayer.destroy();
        this.DashPlayer = null;
      }

      this.CurrentStreamType = PlayerMedia.UNKNOWN;
    }
    /**
       * Used for clear video/mp4
       */

  }, {
    key: "load",
    value: function load(url, type, poster, subs, autoplay) {
      var _this = this;

      var track = null;
      var source = document.createElement('source');
      source.type = type;
      source.src = url;
      this.video.preload = true;
      this.video.controls = false;
      this.video.autoplay = autoplay;
      this.video.appendChild(source);

      if (poster !== null && poster !== undefined && poster !== '') {
        this.video.setAttribute('poster', poster);
      }

      this.CurrentStreamType = this.StreamTypes.MP4_CLEAR; // set thumbs

      if (this.thumbsTrackUrl !== null && this.thumbsTrackUrl !== undefined) {
        track = document.createElement('track');
        track.kind = 'metadata';
        track.src = this.thumbsTrackUrl;
        this.logger.log(' Appending source thumbs to video', track);
        this.video.appendChild(track);
      } else {
        this.logger.warn(' Thumbs was not found .');
      } // set subs


      this.SetManuallysubs(subs, this.video); // Setting Callbacks

      this.video.addEventListener('loadedmetadata', function () {
        return _this.onStreamInitialized();
      }, false);
      this.video.addEventListener('play', function () {
        return _this.onPlayStart();
      }, false);
      this.video.addEventListener('pause', function () {
        return _this.onPlaybackPaused();
      }, false);
      this.video.addEventListener('ended', function () {
        return _this.onPlaybackEnded();
      }, false);
      this.video.addEventListener('timeupdate', function () {
        return _this.onPlayTimeUpdate();
      }, false);
      this.video.addEventListener('seeked', function () {
        return _this.onSeeked();
      }, false);
      this.video.addEventListener('seeking', function () {
        return _this.onSeeking();
      }, false);
      this.video.addEventListener('error', function (e) {
        return _this.onError(e);
      }, false);
      this.logger.info(' Clear MP4 stream is loaded @ ', url);
    }
  }, {
    key: "responsefilerCbx",
    value: function responsefilerCbx(type, response) {
      if (type === shaka.net.NetworkingEngine.RequestType.MANIFEST) {
        this.FjSessionToken = response.headers['session-token'];
        this.logger.warn(' UPDATING Session Token  : ', this.FjSessionToken);
      }
    }
    /**
       * Used for loading mpeg Dash
       */

  }, {
    key: "loadDash",
    value: function loadDash(url, poster, subs, videoCaption, autoplay, drm) {
      var _this2 = this;

      var track = null;

      if (poster !== null && poster !== undefined && poster !== '') {
        this.video.setAttribute('poster', poster);
      }

      this.video.preload = true;
      this.video.controls = false;
      this.video.autoplay = autoplay;

      if (this.DashPlayer === null) {
        this.DashPlayer = new shaka.Player(this.video);
      } // Setting Callbacks


      this.video.addEventListener('loadedmetadata', function () {
        return _this2.onStreamInitialized();
      }, false);
      this.video.addEventListener('play', function () {
        return _this2.onPlayStart();
      }, false);
      this.video.addEventListener('pause', function () {
        return _this2.onPlaybackPaused();
      }, false);
      this.video.addEventListener('ended', function () {
        return _this2.onPlaybackEnded();
      }, false);
      this.video.addEventListener('timeupdate', function () {
        return _this2.onPlayTimeUpdate();
      }, false);
      this.video.addEventListener('seeked', function () {
        return _this2.onSeeked();
      }, false);
      this.video.addEventListener('seeking', function () {
        return _this2.onSeeking();
      }, false);
      this.video.addEventListener('error', function (e) {
        return _this2.onError(e);
      }, false); // Setting Callbacks

      this.DashPlayer.addEventListener('error', function (e) {
        return _this2.onShakaError(e);
      });
      this.DashPlayer.addEventListener('adaptation', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('buffering', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('emsg', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('expirationupdated', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('largegap', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('loading', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('texttrackvisibility', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('timelineregionadded', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('timelineregionenter', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('timelineregionexit', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('trackschanged', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.DashPlayer.addEventListener('unloading', function (e) {
        return _this2.onShakaEvent(e);
      });
      this.CurrentUrl = url;

      if (drm === undefined || drm === null) {
        this.CurrentStreamType = this.StreamTypes.DASH_CLEAR;
        this.CurrentProtection = null;
        this.logger.info(' Loading CLEAR Dash @', this.CurrentUrl);
      } else {
        this.CurrentStreamType = this.StreamTypes.DASH_ENCRYPTED;
        this.CurrentProtection = drm;
        this.logger.info(' drm are ::: ', drm);
        this.DashPlayer.configure({
          drm: {
            servers: {
              'org.w3.clearkey': drm[Const.FJCONFIG_DRM_LICENSE_SERVER]
            }
          }
        });
        this.logger.debug(' To Encrypt : using Forja System Key !.');
        this.logger.info(' Loading ENCRYPTED Dash @', this.CurrentUrl);
      }

      this.DashPlayer.getNetworkingEngine().registerRequestFilter(function (type, request) {
        if (type === shaka.net.NetworkingEngine.RequestType.MANIFEST || type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
          request.headers['Player-Key'] = _this2.FjPlayerId;
          request.headers['Access-Control-Allow-Origin'] = '*';
        }

        if (type === shaka.net.NetworkingEngine.RequestType.SEGMENT) {
          request.headers['Player-Key'] = _this2.FjPlayerId;
          request.headers['Session-Token'] = _this2.FjSessionToken;
        }
      });
      this.DashPlayer.getNetworkingEngine().registerResponseFilter(this.responsefilerCbx); // set thumbs

      if (this.thumbsTrackUrl !== null && this.thumbsTrackUrl !== undefined) {
        track = document.createElement('track');
        track.kind = 'metadata';
        track.src = this.thumbsTrackUrl;
        this.logger.log(' Appending source thumbs to video', track);
        this.video.appendChild(track);
      } else {
        this.logger.debug(' Thumbs was not found .');
      } // set subs


      this.SetManuallysubs(subs, this.video); // Try to load a manifest.
      // This is an asynchronous process.

      this.DashPlayer.load(url).then(function () {
        // This runs if the asynchronous load is successful.
        _this2.logger.log('The this.videohas now been loaded!');
      })["catch"](this.onShError); // onError is executed if the asynchronous load fails.

      this.logger.info('  DASH stream is loaded @ ', url);
    }
  }]);

  return PlayerMedia;
}();

module.exports = PlayerMedia;

/***/ }),

/***/ "./src/js/player/player.js":
/*!*********************************!*\
  !*** ./src/js/player/player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

var Overlays = __webpack_require__(/*! ../ui/Overlays */ "./src/js/ui/Overlays.js");

var Eventing = __webpack_require__(/*! ../utils/Eventing */ "./src/js/utils/Eventing.js");

var Const = __webpack_require__(/*! ../defs/constants */ "./src/js/defs/constants.js");

var PlayerMedia = __webpack_require__(/*! ./PlayerMedia */ "./src/js/player/PlayerMedia.js");

var PlayerUi = __webpack_require__(/*! ../ui/PlayerUi */ "./src/js/ui/PlayerUi.js");

var AdsManager = __webpack_require__(/*! ../ui/AdsManager */ "./src/js/ui/AdsManager.js");

var FjError = __webpack_require__(/*! ../utils/FjError */ "./src/js/utils/FjError.js");
/**
 *  Class player in whinch the player is implemented
 */


var Player = /*#__PURE__*/function () {
  function Player(fjID, vidContainerId) {
    _classCallCheck(this, Player);

    this.logger = new Logger(this);
    this.playerPlaylist = null;
    this.playingList = false;
    this.loopingList = false;
    this.currentPlaying = -1;
    this.isPlaying = false;
    this.currentIsDash = false;
    this.playlistLoaded = false;
    this.playingAds = false; // default values

    this.videoWidth = '100%';
    this.videoHeight = '';
    this.events = new Eventing();
    this.videoContainerId = vidContainerId;
    this.fjPlayerId = fjID;
    this.OverlaysMgr = new Overlays();
    this.AdsMgr = new AdsManager();
    this.supportsVideo = !!document.createElement('video').canPlayType;
    this.playerUi = new PlayerUi(this.videoContainerId, this.videoWidth, this.videoHeight);
    this.playerMedia = new PlayerMedia(this.fjPlayerId);
  }
  /**
     * function  to return a human redeable duration of secondes
     */


  _createClass(Player, [{
    key: "playItem",
    value: function playItem(itemPosition, autostart) {
      var start = true;
      this.logger.info("Start Playling Item  itemPosition : ".concat(itemPosition));

      if (autostart !== true) {
        start = false;
      }

      this.currentPlaying = itemPosition;

      if (!this.playlistLoaded) {
        this.logger.error(' No playlist is loaded on player ');
        return false;
      }

      var item = this.playerPlaylist.getItem(itemPosition);

      if (item === null) {
        this.logger.error(' No item to play at index ', this.currentPlaying, ' playlist is sized ', this.playerPlaylist.getSize());
        return false;
      } // set title


      this.playerUi.setTitle(item[Const.FJCONFIG_TITLE], item[Const.FJCONFIG_SHOW_UP_TITLE]); // set share

      this.playerUi.setShareIcon(item[Const.FJCONFIG_SHARE]); // set down

      this.playerUi.setDownloadIcon(item[Const.FJCONFIG_DOWNLOAD]); // set back

      this.playerUi.setBackIcon(item[Const.FJCONFIG_BACK]); // set thumbs

      this.playerMedia.setThumbsUrl(item[Const.FJCONFIG_THUMBS]); // unload old

      this.playerMedia.Unload(); // load new item

      if (item[Const.FJCONFIG_SRC] !== null || item[Const.FJCONFIG_SRC] !== undefined) {
        if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
          // clear dash
          this.currentIsDash = true;
          this.logger.warn(' will play a clear dash on caption obect ', this.playerUi.getVideoCaption());
          this.playerMedia.loadDash(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_POSTER], item[Const.FJCONFIG_SUBTITLES], this.playerUi.getVideoCaption(), start, item[Const.FJCONFIG_DRM]);
        } else {
          this.playerMedia.load(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_TYPE], item[Const.FJCONFIG_POSTER], item[Const.FJCONFIG_SUBTITLES], start);
        }

        return true;
      }

      this.logger.error('src of item is not valid , at index ', this.currentPlaying);
      return false;
    }
  }, {
    key: "playNext",
    value: function playNext() {
      if (!this.playlistLoaded) {
        this.logger.error(' No playlist is loaded on player ');
        return false;
      } // set playlist again


      this.playingList = true;
      this.currentPlaying += 1;
      this.logger.log(' will play next', this.currentPlaying, ' in playlist is loaded on player ');

      if (this.playerPlaylist.getSize() < this.currentPlaying) {
        if (this.loopingList === true) {
          this.currentPlaying = 0;
        } // playlist if ended


        return false;
      } // play next


      this.playItem(this.currentPlaying); // auto play it

      this.playerUi.ShowVideo();
      this.playerUi.onplaypauseClick();
      return true;
    }
  }, {
    key: "AdsEventing",
    value: function AdsEventing(e, args) {
      this.logger.debug(' just a new event from this.AdsMgr ', e, args); // send Event to listener

      this.logger.warn('Sending Ads Event >>>>>>>>>>>>>>>>>   ', e);
      this.events.fireEvent(e);

      if (e === Const.AdsEvents.ADS_PLAYBACK_ENDED) {
        this.playingAds = false;

        if (args === Const.AdsEnum.ADS_PRE_ROLL) {
          if (this.AdsMgr.CheckPreAds() === true) {
            return;
          }

          this.playerUi.ShowVideo();
          this.playerMedia.play();
          this.playerUi.toggleplaypauseBtn();
          return; // freezePlayer(false, true, false);
        }

        if (args === Const.AdsEnum.ADS_POST_ROLL) {
          if (this.AdsMgr.CheckPostAds() === true) {
            return;
          } // check if in playlist then play list


          if (this.playingList === true) {
            this.playerUi.toggleplaypauseBtn();
            this.playerUi.ShowVideo();
            this.playNext();
          } // freezePlayer(false, false, true);

        } else if (args === Const.AdsEnum.ADS_MID_ROLL) {
          this.playerUi.ShowVideo();
          this.playerMedia.play();
          this.playerUi.toggleplaypauseBtn(); // freezePlayer(false, false, false);
        } else {
          this.logger.warn(' unknown Ads type !! ', args);
        }
      }

      if (e === Const.AdsEvents.ADS_PLAYBACK_STARTED) {
        this.playingAds = true; // hide the player and pause it

        this.playerMedia.pause();
        this.playerUi.hideVideo();
      }
    }
  }, {
    key: "midPlayingChecks",
    value: function midPlayingChecks(secondes) {
      this.OverlaysMgr.CheckOverlays(secondes);
      return this.AdsMgr.CheckMidAds(secondes);
    }
  }, {
    key: "playPrev",
    value: function playPrev() {
      if (!this.playlistLoaded) {
        this.logger.error(' No playlist is loaded on player ');
        return false;
      } // set playlist again


      this.playingList = true;
      this.currentPlaying -= 1;
      this.logger.log(' will play next', this.currentPlaying, ' in playlist is loaded on player ');

      if (this.currentPlaying < 0) {
        if (this.loopingList === true) {
          this.currentPlaying = this.playerPlaylist.getSize() - 1;
        } // playlist if ended


        return false;
      } // play next


      this.playItem(this.currentPlaying); // auto play it

      this.playerUi.ShowVideo();
      this.playerUi.onplaypauseClick();
      return true;
    }
  }, {
    key: "MplayerEventing",
    value: function MplayerEventing(e, args) {
      var item;
      var vid;

      if (e === Const.PlayerEvents.PLAYBACK_TIME_UPDATE) {
        this.playerUi.UpdateProgress(this.playerMedia.time());
        vid = this.playerUi.getVideo();
        this.playerUi.setDuration(this.playerMedia.getDuration());
        this.midPlayingChecks(Math.round(this.playerMedia.time()));
      } else {
        if (e === Const.PlayerEvents.PLAYBACK_ENDED) {
          this.isPlaying = false;

          if (this.AdsMgr.CheckPostAds() === true) {
            this.logger.debug('starting  post ads !!');
          } else if (this.playingList === true) ; // check if in playlist then play list


          this.playNext();
        }

        if (e === Const.PlayerEvents.PLAYBACK_PAUSED) {
          this.isPlaying = false;
        }

        if (e === Const.PlayerEvents.PLAYBACK_STARTED) {
          // first starting  only
          if (args === 1) {
            this.isPlaying = true;

            if (this.AdsMgr.CheckPreAds() === false) {
              this.playerMedia.play();
            } else {
              this.playerMedia.pause();
            }
          }

          this.playerUi.HideSpinner();
          this.playerUi.toggleplaypauseBtn();
          this.playerUi.setDuration(this.playerMedia.getDuration());
        }

        if (e === Const.PlayerEvents.STREAM_LOADED) {
          if (this.isPlaying === false) {
            this.logger.warn(' Already Playing ...............');
            this.playerUi.ShowSpinner();
          } // checks thumbs


          this.playerUi.SetupThumbsManager(this.playerMedia.getDuration(), args); // set subsgetTextTracks()

          this.playerUi.SetupSubsAudsManager(this.playerMedia);
          this.playerUi.setDuration(this.playerMedia.getDuration());
          item = this.playerPlaylist.getItem(this.currentPlaying); // Set Overlays

          this.OverlaysMgr.Setup(item[Const.FJCONFIG_OVERLAYS]); // Set ads

          vid = this.playerUi.getVideo();
          this.AdsMgr.Setup(item[Const.FJCONFIG_ADS], vid.videoWidth, vid.videoHeight);
        }

        if (e === Const.PlayerEvents.PLAYBACK_SEEKING) {
          this.isPlaying = false;
          this.playerUi.ShowSpinner();
        }

        if (e === Const.PlayerEvents.PLAYBACK_SEEKED) {
          this.isPlaying = true;
          this.playerUi.HideSpinner();
        } // send Event to listener


        if (typeof e !== 'undefined') {
          this.logger.info('[Event] [trigger] > ', e);
          this.events.fireEvent(e);
        }

        if (e === Const.PlayerEvents.PLAYBACK_ERROR) {
          this.playerUi.goForError();
          throw new FjError(args.code, args.type, args.message, document.getElementById(this.playerUi.getErrorDivId()));
        }
      }
    }
    /**
       *
       */

  }, {
    key: "loadPlaylist",
    value: function loadPlaylist(playlist) {
      var _this = this;

      this.logger.log(' start  function ');

      if (!this.supportsVideo) {
        this.logger.error(' browser did not support video !');
        return false;
      }

      if (playlist.getSize() > 0) {
        this.playerPlaylist = playlist;
        this.playlistLoaded = true;
        this.playerUi.initialize(this);
        this.playerMedia.on(Const.PlayerEvents.TRACKS_ADDED, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.STREAM_LOADED, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_STARTED, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_ERROR, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_PAUSED, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_ENDED, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_SEEKED, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_SEEKING, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.playerMedia.on(Const.PlayerEvents.PLAYBACK_TIME_UPDATE, function (e, a) {
          return _this.MplayerEventing(e, a);
        });
        this.AdsMgr.on(Const.AdsEvents.ADS_PLAYBACK_STARTED, function (e, a) {
          return _this.AdsEventing(e, a);
        });
        this.AdsMgr.on(Const.AdsEvents.ADS_PLAYBACK_ERROR, function (e, a) {
          return _this.AdsEventing(e, a);
        });
        this.AdsMgr.on(Const.AdsEvents.ADS_PLAYBACK_ENDED, function (e, a) {
          return _this.AdsEventing(e, a);
        });
        this.playerMedia.initialize(this.playerUi.getVideo());
        this.OverlaysMgr.initialize(document.getElementById(this.playerUi.getOverlaysContainerDivId()));
        this.AdsMgr.initialize(document.getElementById(this.playerUi.getAdsContainerDivId()));
        return true;
      }

      this.logger.error(' playlist is empty: ', playlist.getSize());
      this.playlistLoaded = false;
      return false;
    }
    /**
       *
       */

  }, {
    key: "playAt",
    value: function playAt(index, autostart) {
      var start = true;

      if (autostart !== true) {
        start = false;
      }

      this.playingList = false;
      return this.playItem(index, start);
    }
  }, {
    key: "startPlaylist",
    value: function startPlaylist(positionToStartFrom, loop, randomPlay, autostart) {
      var start = true;

      if (autostart !== true) {
        start = false;
      }

      this.currentPlaying = positionToStartFrom;

      if (!this.playlistLoaded) {
        this.logger.error(' No playlist is loaded on player ');
        return false;
      }

      var item = this.playerPlaylist.getItem(this.currentPlaying);

      if (item === undefined) {
        this.logger.error(' No item to play at index ', this.currentPlaying, ' playlist is sized ', this.playerPlaylist.getSize());
        return false;
      }

      this.playingList = true;
      this.loopingList = loop; // set title

      this.playerUi.setTitle(item[Const.FJCONFIG_TITLE], item[Const.FJCONFIG_SHOW_UP_TITLE]); // set share

      this.playerUi.setShareIcon(item[Const.FJCONFIG_SHARE]); // set down

      this.playerUi.setDownloadIcon(item[Const.FJCONFIG_DOWNLOAD]); // set back

      this.playerUi.setBackIcon(item[Const.FJCONFIG_BACK]); // set thumbs

      this.playerMedia.setThumbsUrl(item[Const.FJCONFIG_THUMBS]); // play item

      if (item[Const.FJCONFIG_SRC] !== null || item[Const.FJCONFIG_SRC] !== undefined) {
        if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
          // clear dash
          this.currentIsDash = true;
          this.playerMedia.loadDash(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_POSTER], item[Const.FJCONFIG_SUBTITLES], this.playerUi.getVideoCaption(), start, item[Const.FJCONFIG_DRM]);
        } else {
          this.playerMedia.load(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_TYPE], item[Const.FJCONFIG_POSTER], item[Const.FJCONFIG_SUBTITLES], start);
        }

        return true;
      }

      this.logger.error('src of item is not valid , at index ', this.currentPlaying);
      return false;
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this.playerMedia.seek(time);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.playerMedia.Unload();
      this.playerUi.reset();
    }
  }, {
    key: "play",
    value: function play() {
      this.playerMedia.pause();

      if (this.AdsMgr.CheckPreAds() === false) {
        this.playerMedia.play();
      }

      this.playerUi.toggleplaypauseBtn();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playerMedia.pause();
      this.playerUi.toggleplaypauseBtn();
    }
  }, {
    key: "isPlayingAds",
    value: function isPlayingAds() {
      return this.playingAds;
    }
  }, {
    key: "isReady",
    value: function isReady() {
      return this.playlistLoaded;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.playerMedia.isPaused();
    }
  }, {
    key: "isEnded",
    value: function isEnded() {
      return this.playerMedia.isEnded();
    }
    /**
       *
       */

  }, {
    key: "on",
    value: function on(name, handler) {
      return this.events.on(name, handler);
    }
    /**
       *
       */

  }, {
    key: "off",
    value: function off(name, handler) {
      return this.events.off(name, handler);
    }
  }], [{
    key: "duration",
    value: function duration(secDuration) {
      var secNum = parseInt(secDuration, 10);
      var hours = Math.floor(secNum / 3600);
      var minutes = Math.floor((secNum - hours * 3600) / 60);
      var seconds = secNum - hours * 3600 - minutes * 60;

      if (minutes < 10) {
        minutes = "0".concat(minutes);
      }

      if (seconds < 10) {
        seconds = "0".concat(seconds);
      }

      if (hours === 0) {
        return "".concat(minutes, ":").concat(seconds);
      }

      if (hours < 10) {
        hours = "0".concat(hours);
      }

      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }
  }]);

  return Player;
}();

module.exports = Player;

/***/ }),

/***/ "./src/js/player/playlist.js":
/*!***********************************!*\
  !*** ./src/js/player/playlist.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

var Const = __webpack_require__(/*! ../defs/constants */ "./src/js/defs/constants.js");

var IsoLangs = __webpack_require__(/*! ../defs/isoLangs */ "./src/js/defs/isoLangs.js");
/**
 *  Class playlist in whixh all the playliost will be checked and saved
 */


var Playlist = /*#__PURE__*/function () {
  /**
     *
     */
  function Playlist() {
    _classCallCheck(this, Playlist);

    this.logger = new Logger(this);
    this.items = [];
  }
  /**
     * Used to getsize of playlist
     */


  _createClass(Playlist, [{
    key: "getSize",
    value: function getSize() {
      return this.items.length;
    }
    /**
       * Used  to get  some information about the playlist content
       */

  }, {
    key: "getInfo",
    value: function getInfo() {
      var info = {};
      info.size = this.items.length;
      info.items = this.items;
      return info;
    }
    /**
       * Used to get item of playlist at position index
       */

  }, {
    key: "getItem",
    value: function getItem(index) {
      this.logger.info(' Getting item at position ', index);

      if (this.items.length > index) {
        return this.items[index];
      }

      this.logger.error(' No item to play at index ', index, ' playlist is sized ', this.items.length);
      return null;
    }
    /* ** ** ** ** ** ** ** CHECK'S ** ** ** ** ** ** ** */

    /**
       * used to check if an item of subtitle is correct
       */

  }, {
    key: "checkSubtitle",
    value: function checkSubtitle(subItem) {
      var tmp;

      if (subItem === null || subItem === undefined) {
        return false;
      }

      if (subItem[Const.FJCONFIG_LANG]) {
        tmp = IsoLangs[subItem[Const.FJCONFIG_LANG]];
        this.logger.log(tmp, ' playlist Subtitle lang is', subItem[Const.FJCONFIG_LANG]);

        if (tmp === null || tmp === undefined) {
          this.logger.error('No ISO code of lang  ', tmp);
          return false;
        }
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

      if (subItem[Const.FJCONFIG_LABEL]) {
        this.logger.log(' playlist Subtitle label is', subItem[Const.FJCONFIG_LABEL]);
      } else {
        this.logger.error('Empty Subtitle label ');
        return false;
      }

      return true;
    }
    /**
       * used to check if an item of overlay is correct
       */

  }, {
    key: "checkOverlay",
    value: function checkOverlay(subItem) {
      var val = subItem;

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

      if (val !== undefined && val !== null && val !== '') {
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
    }
    /**
       * used to check if an item of drm is correct
       */

  }, {
    key: "checkDrm",
    value: function checkDrm(drm) {
      var tmp = null;

      if (drm === null || drm === undefined) {
        return false;
      }

      this.logger.debug('Cheking DRM > ', drm);
      tmp = drm[Const.FJCONFIG_DRM_SCHEME];
      this.logger.info('Cheking DRM scheme > ', tmp);

      if (tmp !== undefined && tmp !== null && tmp === Const.FJCONFIG_DRM_SCHEME_FORJA) {
        this.logger.log(' Supported DRM scheme   ', tmp);
      } else {
        this.logger.error('Unsupported DRM Scheme ! ');
        return false;
      }

      tmp = drm[Const.FJCONFIG_DRM_LICENSE_SERVER];
      this.logger.info('Cheking DRM LA Server > ', tmp);

      if (tmp !== undefined && tmp !== null && tmp !== '') {
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

  }, {
    key: "checkAds",
    value: function checkAds(item) {
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

      if (item[Const.FJCONFIG_CLASS] === Const.FJCONFIG_ADS_CLASS_MID_ROLL && (item[Const.FJCONFIG_SHOW_AT] === null || item[Const.FJCONFIG_SHOW_AT] === undefined)) {
        this.logger.error('Missing Show At for mid Roll Class ! ');
        return false;
      }

      if (item[Const.FJCONFIG_URL] !== undefined && item[Const.FJCONFIG_URL] !== null && item[Const.FJCONFIG_URL] !== '') {
        this.logger.log(' playlist Overlay url ', item[Const.FJCONFIG_URL]);
      } else {
        this.logger.error('Empty Overlay url');
        return false;
      }

      if (item[Const.FJCONFIG_CAN_ESCAPE] !== 'true' && item[Const.FJCONFIG_CAN_ESCAPE] !== true && item[Const.FJCONFIG_CAN_ESCAPE] !== 'false' && item[Const.FJCONFIG_CAN_ESCAPE] !== false) {
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

  }, {
    key: "checkItem",
    value: function checkItem(item) {
      var subItem = {};
      var drm = {};
      var j;
      var list;

      if (item === null || item === undefined) {
        this.logger.error(' Item is NULL !', item);
        return false;
      } // check item


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

      if (item[Const.FJCONFIG_TITLE] === undefined || item[Const.FJCONFIG_TITLE] === null || item[Const.FJCONFIG_TITLE] === '' || !item[Const.FJCONFIG_TITLE]) {
        this.logger.error('BAD title Value ! ');
        return false;
      }

      this.logger.log('  src of item  ', item[Const.FJCONFIG_SRC]);

      if (item[Const.FJCONFIG_SRC] === undefined || item[Const.FJCONFIG_SRC] === null || item[Const.FJCONFIG_SRC] === '' || !item[Const.FJCONFIG_SRC]) {
        this.logger.error('BAD src Value ! ');
        return false;
      }

      this.logger.log('  poster of item  ', item[Const.FJCONFIG_POSTER]);
      this.logger.log('  thumbs of item  ', item[Const.FJCONFIG_THUMBS]);
      this.logger.log('  download icon  ', item[Const.FJCONFIG_DOWNLOAD]);
      this.logger.log('  share icon  ', item[Const.FJCONFIG_SHARE]);
      this.logger.log('  Back icon  ', item[Const.FJCONFIG_BACK]);
      this.logger.log('  UP TITLE  ', item[Const.FJCONFIG_SHOW_UP_TITLE]); // check ads

      list = item[Const.FJCONFIG_ADS];

      if (list !== null && list !== undefined && list.length > 0) {
        for (j = 0; j < list.length; j += 1) {
          subItem = list[j];

          if (this.checkAds(subItem) === false) {
            return false;
          }
        }
      } // check drm


      drm = item[Const.FJCONFIG_DRM];

      if (drm !== null && drm !== undefined) {
        if (this.checkDrm(drm) === false) {
          return false;
        }
      } // check subtitles


      list = item[Const.FJCONFIG_SUBTITLES];

      if (list !== null && list !== undefined && list.length > 0) {
        for (j = 0; j < list.length; j += 1) {
          subItem = list[j];

          if (this.checkSubtitle(subItem) === false) {
            return false;
          }
        }
      } // check overlays


      list = item[Const.FJCONFIG_OVERLAYS];

      if (list !== null && list !== undefined && list.length > 0) {
        for (j = 0; j < list.length; j += 1) {
          subItem = list[j];

          if (this.checkOverlay(subItem) === false) {
            return false;
          }
        }
      } // done


      return true;
    }
    /**
       * Used to add item to list
       */

  }, {
    key: "addItem",
    value: function addItem(item) {
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

  }, {
    key: "rmItemIndex",
    value: function rmItemIndex(index) {
      var item = this.items[index];

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

  }, {
    key: "rmItem",
    value: function rmItem(item) {
      var index = this.items.indexOf(item);

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

  }, {
    key: "addSubtitle",
    value: function addSubtitle(index, subtitle) {
      var item = this.items[index];

      if (item === undefined) {
        return false;
      }

      if (this.checkSubtitle(subtitle) === false) {
        return false;
      }

      var list = item[Const.FJCONFIG_SUBTITLES];

      if (list === undefined || list.length === 0) {
        list = [];
      }

      list.push(subtitle);
      return true;
    }
    /**
       *  used to add an Overlay to item at index in the playlist
       *  TODO lock this function  when playlist start to play !
       */

  }, {
    key: "addOverlay",
    value: function addOverlay(index, overlay) {
      var item = this.items[index];

      if (item === undefined) {
        return false;
      }

      if (this.checkOverlay(overlay) === false) {
        return false;
      }

      var list = item[Const.FJCONFIG_OVERLAYS];

      if (list === undefined || list.length === 0) {
        list = [];
      }

      list.push(overlay);
      return true;
    }
    /**
       *  used to add an Drm to item at index in the playlist
       *  TODO lock this function  when playlist start to play !
       */

  }, {
    key: "setDrm",
    value: function setDrm(index, drm) {
      var item = this.items[index];

      if (item === undefined) {
        return false;
      }

      if (this.checkDrm(drm) === false) {
        return false;
      }

      var list = item[Const.FJCONFIG_DRM];

      if (list === undefined || list.length === 0) {
        list = [];
      }

      list.push(drm);
      return true;
    }
    /**
       *  used to add an ads to item at index in the playlist
       *  TODO lock this function  when playlist start to play !
       */

  }, {
    key: "addAds",
    value: function addAds(index, ads) {
      var item = this.items[index];

      if (item === undefined) {
        return false;
      }

      if (this.checkAds(ads) === false) {
        return false;
      }

      var list = item[Const.FJCONFIG_ADS];

      if (list === undefined || list.length === 0) {
        list = [];
      }

      list.push(ads);
      return true;
    }
  }]);

  return Playlist;
}();

module.exports = Playlist;

/***/ }),

/***/ "./src/js/ui/AdsManager.js":
/*!*********************************!*\
  !*** ./src/js/ui/AdsManager.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

var Const = __webpack_require__(/*! ../defs/constants */ "./src/js/defs/constants.js");

var Utils = __webpack_require__(/*! ../utils/Utils */ "./src/js/utils/Utils.js");

var Eventing = __webpack_require__(/*! ../utils/Eventing */ "./src/js/utils/Eventing.js");
/**
 * @module AdsManager
 * @description The AdsManager is the class whinch will manage Ads
 *  on a video.
 *  Ads will be played on a another video html overlaying current video
 */


var AdsManager = /*#__PURE__*/function () {
  function AdsManager() {
    _classCallCheck(this, AdsManager);

    this.logger = new Logger(this);
    this.settled = false;
    this.events = new Eventing();
    this.mainVideoWidth = 0;
    this.mainVideoHeight = 0;
    this.midAds = [];
    this.postAds = [];
    this.preAds = [];
    this.localAds = null;
    this.AdsContainerdiv = null;
  }
  /**
     * Function used to stop Ads
     * @param {*} index index of ads in his arry
     * @param {*} adsType type of ads to look into type array
     */


  _createClass(AdsManager, [{
    key: "StopAds",
    value: function StopAds(index, adsType) {
      var el = this.AdsContainerdiv;
      var elClone = null;
      var item = this.midAds[index];

      if (this.settled !== true) {
        this.logger.warn(' AdsMgr is not yet this.settled!');
        return;
      }

      if (adsType === Const.AdsEnum.ADS_PRE_ROLL) {
        item = this.preAds[index];
      } else if (adsType === Const.AdsEnum.ADS_MID_ROLL) {
        item = this.midAds[index];
      } else {
        item = this.postAds[index];
      }

      this.logger.info(index, 'stopping  Ads ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]); // remove the click event

      el = this.AdsContainerdiv;
      elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
      this.AdsContainerdiv = elClone; // hide the overlay , empty the div

      while (this.AdsContainerdiv.hasChildNodes()) {
        this.AdsContainerdiv.removeChild(this.AdsContainerdiv.firstChild);
      }

      this.AdsContainerdiv.innerHTML = '';
      this.AdsContainerdiv.style.display = 'none';
      this.events.fireEvent(Const.AdsEvents.ADS_PLAYBACK_ENDED, adsType);
    }
  }, {
    key: "StartAds",
    value: function StartAds(index, adsType) {
      var _this = this;

      var done = false;
      var infoDiv = document.createElement('div');
      var infoDiv2 = document.createElement('span');
      var adsvideo = document.createElement('video');
      var source = document.createElement('source');
      var item = this.midAds[index];

      if (this.settled !== true) {
        this.logger.warn(' AdsMgr is not yet cettled !');
        return;
      }

      if (adsType === Const.AdsEnum.ADS_PRE_ROLL) {
        item = this.preAds[index];
        this.logger.info(index, 'starting PRE Ads ', this.preAds);
        this.logger.info(index, 'starting PRE Ads ', item[Const.FJCONFIG_SRC]);
      } else if (adsType === Const.AdsEnum.ADS_MID_ROLL) {
        item = this.midAds[index];
        this.logger.info(index, 'starting MId Ads ', item[Const.FJCONFIG_SRC], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
      } else {
        item = this.postAds[index];
        this.logger.info(index, 'starting POST Ads ', item[Const.FJCONFIG_SRC]);
      }

      item.started = true; // pause current video and play ads

      this.events.fireEvent(Const.AdsEvents.ADS_PLAYBACK_STARTED, adsType); // fill ads container

      adsvideo.preload = true;
      adsvideo.controls = false;
      adsvideo.autoplay = false; // setting W/H !

      adsvideo.setAttribute('width', this.mainVideoWidth);
      adsvideo.setAttribute('height', this.mainVideoHeight);
      this.logger.warn(' ads video width/height is ', this.mainVideoWidth, this.mainVideoHeight);
      infoDiv.innerHTML = "".concat('<span style="color: rgb(119, 255, 119); font-size: 0.95em;">Annonce</span>' + ' This an Ads for <span style="color: rgb(255, 255, 0)">').concat(item[Const.FJCONFIG_URL], "</span>");
      this.AdsContainerdiv.style.cursor = 'pointer';
      this.logger.log(' Can escape this starting Ads ', item[Const.FJCONFIG_CAN_ESCAPE]);
      infoDiv.style.display = 'block';
      infoDiv.classList.add('over-DL');
      source.src = item[Const.FJCONFIG_SRC];
      source.type = item[Const.FJCONFIG_TYPE];
      adsvideo.appendChild(source);
      this.AdsContainerdiv.appendChild(adsvideo);
      infoDiv.appendChild(infoDiv2);
      this.AdsContainerdiv.appendChild(infoDiv);
      this.AdsContainerdiv.style.display = 'block';
      adsvideo.play(); // this.eventsmanaging

      adsvideo.addEventListener('timeupdate', function () {
        if (item[Const.FJCONFIG_CAN_ESCAPE] === 'true' || item[Const.FJCONFIG_CAN_ESCAPE] === true) {
          if (adsvideo.currentTime > 5) {
            if (!done) {
              infoDiv2.innerHTML = ', Can be escapped <span class="fj-icon-playNext" ></span>';
              infoDiv2.addEventListener('click', function () {
                _this.StopAds(index, adsType);
              });
              done = true;
            }
          } else {
            infoDiv2.innerHTML = ", Can be escapped in ".concat(Math.round(5 - adsvideo.currentTime), " secondes .");
          }
        } else {
          infoDiv2.innerHTML = ", it ends after ".concat(Utils.duration(Math.round(adsvideo.duration - adsvideo.currentTime)), " .");
        }
      });
      adsvideo.addEventListener('click', function () {
        item.clicked += 1;

        _this.events.fireEvent(Const.AdsEvents.ADS_USER_CLICKED);

        window.open(item[Const.FJCONFIG_URL], '_blank');
      });
      adsvideo.addEventListener('ended', function () {
        _this.StopAds(index, adsType);
      });
    }
    /**
       * Function to be called from event 'timeupdate' from video
       * called to check if ads has to be played
       */

  }, {
    key: "CheckMidAds",
    value: function CheckMidAds(secondes) {
      var i = 0;
      var item = null;
      var show = 0;

      if (this.settled !== true) {
        return;
      }

      for (i = 0; i < this.midAds.length; i += 1) {
        item = this.midAds[i];
        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);

        if (secondes === show) {
          this.logger.info(i, ' starting Ads Now .. ');

          if (this.midAds[i].started === false) {
            this.logger.info(i, ' starting a new  Mid Ads .. ');
            this.midAds[i].started = true;
            this.StartAds(i, Const.AdsEnum.ADS_MID_ROLL);
          } else {
            this.logger.info(i, ' already started ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
          }
        }
      }
    }
    /**
       * Function to be called just before starting video
       * called to check if ads has to be played
       */

  }, {
    key: "CheckPreAds",
    value: function CheckPreAds() {
      var i = 0;
      var item = null;
      this.logger.info(' Checking Pre Ads Now .. ');

      if (this.settled !== true) {
        this.logger.warn('not yet Settled !');
        return false;
      }

      for (i = 0; i < this.preAds.length; i += 1) {
        item = this.preAds[i];
        this.logger.info(i, ' starting Pre Ads Now .. ');

        if (this.preAds[i].started === false) {
          this.logger.info(i, ' starting a new Pre Ads .. @', i);
          this.preAds[i].started = true;
          this.StartAds(i, Const.AdsEnum.ADS_PRE_ROLL);
          return true;
        }

        this.logger.info(i, 'Pre already started ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
      }

      return false;
    }
    /**
       * Function to be called just before starting video
       * called to check if ads has to be played
       */

  }, {
    key: "CheckPostAds",
    value: function CheckPostAds() {
      var i = 0;
      var item = null;
      this.logger.info(' Checking Post Ads Now .. ');

      if (this.settled !== true) {
        this.logger.warn(' AdsMgr is not yet this.settled!');
        return false;
      }

      for (i = 0; i < this.postAds.length; i += 1) {
        item = this.postAds[i];
        this.logger.info(i, ' starting Pre Ads Now .. ');

        if (this.postAds[i].started === false) {
          this.logger.info(i, ' starting a new Post Ads .. ');
          this.postAds[i].started = true;
          this.StartAds(i, Const.AdsEnum.ADS_POST_ROLL);
          return true;
        }

        this.logger.info(i, 'Post already started ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
      }

      return false;
    }
  }, {
    key: "initialize",
    value: function initialize(AdsContainer) {
      this.AdsContainerdiv = AdsContainer;
    }
  }, {
    key: "Setup",
    value: function Setup(ads, videoWidth, videoHeight) {
      var i = 0;
      var sz;
      var item;
      var clas;

      if (ads === null || ads === undefined) {
        this.settled = false;
        return;
      }

      this.localAds = ads;
      this.mainVideoWidth = videoWidth;
      this.mainVideoHeight = videoHeight;

      for (i = 0; i < this.localAds.length; i += 1) {
        item = this.localAds[i];
        clas = item[Const.FJCONFIG_CLASS];

        if (clas === Const.FJCONFIG_ADS_CLASS_PRE_ROLL) {
          this.logger.debug(' found a pre ads !');
          sz = this.preAds.push(item);
          this.preAds[sz - 1].started = false;
          this.preAds[sz - 1].clicked = 0;
        } else if (clas === Const.FJCONFIG_ADS_CLASS_POST_ROLL) {
          this.logger.debug(' found a post ads !');
          sz = this.postAds.push(item);
          this.postAds[sz - 1].started = false;
          this.postAds[sz - 1].clicked = 0;
        } else {
          this.logger.debug(' found a mid ads !');
          sz = this.midAds.push(item);
          this.midAds[sz - 1].started = false;
          this.midAds[sz - 1].clicked = 0;
        }
      }

      this.settled = true;
      this.logger.info('Ads Setup is this.settled', this.settled);
      this.logger.warn('Checking PRE ROLL Ads .. ', this.preAds.length);
      this.logger.warn('Checking MID ROLL Ads .. ', this.midAds.length);
      this.logger.warn('Checking POST ROLL Ads .. ', this.postAds.length);
    }
    /**
       *
       */

  }, {
    key: "on",
    value: function on(name, handler) {
      return this.events.on(name, handler);
    }
    /**
       *
       */

  }, {
    key: "off",
    value: function off(name, handler) {
      return this.events.off(name, handler);
    }
  }]);

  return AdsManager;
}();

module.exports = AdsManager;

/***/ }),

/***/ "./src/js/ui/Menus.js":
/*!****************************!*\
  !*** ./src/js/ui/Menus.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

__webpack_require__(/*! ../../css/player.less */ "./src/css/player.less");
/**
 *  Class player in whinch the player is implemented
 */


var Menus = /*#__PURE__*/function () {
  function Menus(mainVideo, subsBtnId, audiosBtnId, MenusContDivId) {
    _classCallCheck(this, Menus);

    this.logger = new Logger(this);
    this.video = mainVideo;
    this.mediaPlayer = null;
    this.subtitlesBtnId = subsBtnId;
    this.audsBtnId = audiosBtnId;
    this.subsMenuListId = "smml".concat(this.subtitlesBtnId);
    this.audsMenuListId = "amml".concat(audiosBtnId);
    this.MenusContainerDivId = MenusContDivId;
    this.menusDiv = document.getElementById(this.MenusContainerDivId);
    this.SubsExist = false;
    this.subsMenuDiv = null;
    this.subsList = null;
    this.audsExist = false;
    this.audsMenuDiv = null;
    this.audsList = null;
  }
  /**
     *Hide Menu Subtitles
     */


  _createClass(Menus, [{
    key: "HideMenuSubs",
    value: function HideMenuSubs() {
      if (this.SubsExist === true && this.subsMenuDiv.classList.contains('fj-hide') === false) {
        this.subsMenuDiv.classList.add('fj-hide');
      }
    }
    /**
       * Hide Menu Audios
       */

  }, {
    key: "HideMenusAuds",
    value: function HideMenusAuds() {
      if (this.audsExist === true && this.audsMenuDiv.classList.contains('fj-hide') === false) {
        this.audsMenuDiv.classList.add('fj-hide');
      }
    }
    /**
       *
       * @param {*Funtion Callback used to activate item of list
       */

  }, {
    key: "activate",
    value: function activate(item, isItSubs) {
      var i;
      var litem;
      var k;
      var list;

      if (isItSubs === true) {
        list = this.subsList;
      } else {
        list = this.audsList;
      }

      var index = Array.prototype.indexOf.call(list.childNodes, item);
      this.logger.info('Item selected ', item);
      var tindex = item.getAttribute('index');
      this.logger.info('clicked is  selected @ index ', index, ' text index ', tindex);

      if (isItSubs === true) {
        this.mediaPlayer.setTextTrack(tindex);
      } else {
        this.mediaPlayer.setAudioLang(tindex);
      }

      for (i = 0; i < list.children.length; i += 1) {
        litem = list.children[i];
        k = litem.getAttribute('index');

        if (tindex === k) {
          litem.classList.remove('subtitles-menu-item');
          litem.classList.add('subtitles-menu-item-actif');
          this.logger.log('Setting item @  ', i);
        } else {
          litem.classList.remove('subtitles-menu-item-actif');
          litem.classList.add('subtitles-menu-item');
          this.logger.log('Unsetting item @  ', i);
        }
      }

      if (isItSubs === true) {
        this.HideMenuSubs();
      } else {
        this.HideMenusAuds();
      }
    }
    /**
       * Event CALLBACK ; called on menu Click
       */

  }, {
    key: "onshowHideMenu",
    value: function onshowHideMenu(menuContainer, element, ev) {
      this.logger.warn('onshowHideMenu using @', element);
      var rectV = this.video.getBoundingClientRect();
      var rect = element.getBoundingClientRect();

      if (menuContainer.classList.contains('fj-hide')) {
        this.logger.warn('setting left @', rect.right - ev.pageX);
        this.logger.warn('setting left @', rect.left - ev.pageX);
        menuContainer.style.left = ev.pageX - rectV.left - rect.width;
        menuContainer.classList.remove('fj-hide');
      } else {
        menuContainer.classList.add('fj-hide');
      }
    }
    /**
       * Used to Hide menu
       */

  }, {
    key: "HideMenus",
    value: function HideMenus() {
      this.HideMenuSubs();
      this.HideMenusAuds();
    }
    /**
       *
       * @param {*} playerMedia
       */

  }, {
    key: "SetupSubs",
    value: function SetupSubs(playerMedia) {
      var _this = this;

      this.logger.info('Calling for setup Subs !!!');
      var subtitlesBtn = null;
      var i = 0;
      var activated = false;
      this.mediaPlayer = playerMedia;
      var textTracks = this.mediaPlayer.getTextTracks();
      this.SubsExist = false;
      this.logger.info(' Trying to setup menu subs , text tracks length : ', textTracks); // check if exist

      if (!textTracks || textTracks.length <= 0) {
        this.SubsExist = false;
        this.logger.log(' Subs Menu not created !');
        return false;
      } // check if this.video contains subs  exist


      for (i = 0; i < textTracks.length; i += 1) {
        this.logger.debug(' @ text track number  ', i, ' and it type is ', textTracks[i].kind);

        if (textTracks[i].kind === 'captions' || textTracks[i].kind === 'subtitle' || textTracks[i].kind === 'subtitles') {
          this.SubsExist = true;
          break;
        }
      }

      if (this.SubsExist === false) {
        this.logger.info(' Subs Menu Not created !! ');
        return this.SubsExist;
      } // Setting btn


      subtitlesBtn = document.getElementById(this.subtitlesBtnId);
      this.logger.info('Setting the btn ', subtitlesBtn, ' from id ', this.subtitlesBtnId); // this.video array

      this.subsList = document.getElementById(this.subsMenuListId); // clear old

      if (this.subsList !== null) {
        while (this.subsList.firstChild) {
          this.subsList.removeChild(this.subsList.firstChild);
        }
      } else {
        this.subsMenuDiv = document.createElement('div');
        this.subsMenuDiv.classList.add('settingMenuDiv');
        this.subsMenuDiv.classList.add('fj-hide');
        this.subsMenuDiv.innerHTML = "".concat('<div class="fj-list-title"> Soutitres </div> ' + '<ul class="fj-list"  id="').concat(this.subsMenuListId, "\" >") + '</ul>';
        this.menusDiv.appendChild(this.subsMenuDiv); // Add events for subtitles button

        subtitlesBtn.addEventListener('click', function (ev) {
          _this.onshowHideMenu(_this.subsMenuDiv, _this.menusDiv, ev);
        }); //  subs list

        this.subsList = document.getElementById(this.subsMenuListId);
      } // loop


      for (i = 0; i < textTracks.length; i += 1) {
        if (textTracks[i].kind === 'captions' || textTracks[i].kind === 'subtitle' || textTracks[i].kind === 'subtitles') {
          (function () {
            var item = item = document.createElement('li');

            if (_this.mediaPlayer.isTextTrackEnabled(i) === true) {
              item.classList.add('subtitles-menu-item-actif');
              activated = true;
            } else {
              item.classList.add('subtitles-menu-item');
            }

            item.setAttribute('index', i);
            item.innerHTML = _this.mediaPlayer.getTextTrackLabel(i);

            _this.subsList.appendChild(item);

            item.addEventListener('click', function () {
              _this.activate(item, true);
            });

            _this.logger.debug('Setting Subs List @ ', i, ' item is ', item);
          })();
        }
      } // off item


      var item = document.createElement('li');

      if (activated === false) {
        item.classList.add('subtitles-menu-item-actif');
      } else {
        item.classList.add('subtitles-menu-item');
      }

      item.setAttribute('index', -1);
      item.innerHTML = 'off';
      this.subsList.appendChild(item);
      item.addEventListener('click', function () {
        _this.activate(item, false);
      });
      this.logger.log('Setting Subs List @ ', -1, ' item is ', item);
      this.logger.log(' Subs Menu  created !! ', this.subsMenuDiv);
      return this.SubsExist;
    }
    /**
       * Setting Auds menu and cbx
       */

  }, {
    key: "SetupAuds",
    value: function SetupAuds(playerMedia) {
      var _this2 = this;

      this.logger.info('Calling for setup Auds !!!');
      var audsBtn = null;
      var i = 0;
      var item = null;
      this.mediaPlayer = playerMedia;
      var audioTracks = this.mediaPlayer.getAudioLanguages();
      this.audsExist = false;
      this.logger.info(' Trying to setup menu Auds , text tracks length : ', audioTracks); // check if exist

      if (!audioTracks || audioTracks.length <= 1) {
        this.audsExist = false;
        this.logger.log(' Audio Menu not created !');
        return false;
      } // Setting inner of btn div


      audsBtn = document.getElementById(this.audsBtnId);
      this.logger.info('Setting the btn ', audsBtn, ' from id ', this.audsBtnId); // this.video array

      this.audsList = document.getElementById(this.audsMenuListId); // clear old

      if (this.audsList !== null) {
        while (this.audsList.firstChild) {
          this.audsList.removeChild(this.audsList.firstChild);
        }
      } else {
        this.audsMenuDiv = document.createElement('div');
        this.audsMenuDiv.classList.add('settingMenuDiv');
        this.audsMenuDiv.classList.add('fj-hide');
        this.audsMenuDiv.innerHTML = "".concat('<div class="fj-list-title"> Audios </div> ' + '<ul class="fj-list"  id="').concat(this.audsMenuListId, "\" >") + '</ul>';
        this.menusDiv.appendChild(this.audsMenuDiv); // Add events for audios button

        audsBtn.addEventListener('click', function (ev) {
          _this2.onshowHideMenu(_this2.audsMenuDiv, _this2, ev);
        }); //  audios list

        this.audsList = document.getElementById(this.audsMenuListId);
      }

      for (i = 0; i < audioTracks.length; i += 1) {
        item = document.createElement('li');

        if (this.mediaPlayer.isAudioLangEnabled(i) === true) {
          item.classList.add('subtitles-menu-item-actif');
        } else {
          item.classList.add('subtitles-menu-item');
        }

        item.setAttribute('index', i);
        item.innerHTML = this.mediaPlayer.getAudioLangLabel(i);
        this.audsList.appendChild(item);
        item.addEventListener('click', function () {
          _this2.activate(_this2, false);
        });
      }

      this.logger.debug(' Audio Menu created !', audioTracks.length, '! ', this.audsList);
      return this.audsExist;
    }
  }]);

  return Menus;
}();

module.exports = Menus;

/***/ }),

/***/ "./src/js/ui/Overlays.js":
/*!*******************************!*\
  !*** ./src/js/ui/Overlays.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

__webpack_require__(/*! ../../css/player.less */ "./src/css/player.less");

var Const = __webpack_require__(/*! ../defs/constants */ "./src/js/defs/constants.js");

var Eventing = __webpack_require__(/*! ../utils/Eventing */ "./src/js/utils/Eventing.js");
/**
 * @module Overlay
 * @description The Overlays is that manage this.overlaysof a video :
 *     it manage this.overlaysfor information ads , media or ovelay on ads video.
 */


var Overlays = /*#__PURE__*/function () {
  function Overlays() {
    _classCallCheck(this, Overlays);

    this.logger = new Logger(this);
    this.overlays = null;
    this.settled = false;
    this.OverlayDiv = null;
    this.OverlayInnerDiv = null;
    this.events = new Eventing();
    this.OverlayClosingDiv = null;
  }

  _createClass(Overlays, [{
    key: "Setup",
    value: function Setup(overs) {
      var i = 0;

      if (overs === null || overs === undefined) {
        this.settled = false;
        return;
      }

      this.overlays = overs;
      this.settled = true;

      for (i = 0; i < this.overlays.length; i += 1) {
        this.overlays[i].started = false;
        this.overlays[i].clicked = 0;
      }

      this.logger.info('Setup is this.settled', this.settled, ' cheking this.overlays.. ', this.overlays);
    }
  }, {
    key: "clicked",
    value: function clicked(index) {
      var item = this.overlays[index];
      this.overlays[index].clicked += 1;
      this.events.fireEvent(Const.OverlayEvents.OVERLAY_USER_CLICKED);
      window.open(item[Const.FJCONFIG_URL], '_blank');
    }
  }, {
    key: "StopOverlay",
    value: function StopOverlay(index) {
      var el = this.OverlayDiv;
      var elClone = null; // hide the div

      this.logger.warn(index, 'you overlay  is now stopped ', this.overlays[index].handler); // remove the click event

      el = this.OverlayDiv;
      elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
      this.OverlayDiv = elClone; // hide the overlay , empty the div

      while (this.OverlayDiv.hasChildNodes()) {
        this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
      }

      this.OverlayDiv.innerHTML = '';
      this.OverlayDiv.classList.add('fj-hide');
      this.events.fireEvent(Const.OverlayEvents.OVERLAY_ENDED);
    }
    /**
       * Used to show an Overlay
       */

  }, {
    key: "StartOverlay",
    value: function StartOverlay(index) {
      var _this = this;

      var url = null;
      var item = this.overlays[index];
      this.overlays[index].started = true;
      this.overlays[index].endTimer = setTimeout(function () {
        _this.StopOverlay(index);
      }, item[Const.FJCONFIG_DURATION] * 1000); // empty the div && show the div

      while (this.OverlayDiv.hasChildNodes()) {
        this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
      }

      this.OverlayInnerDiv = document.createElement('div');
      this.OverlayClosingDiv = document.createElement('div');
      this.OverlayInnerDiv.innerHTML = "".concat('' + '<div class="fj-overlay-description">' + '   <p>').concat(item[Const.FJCONFIG_DATA], "</p> ") + '</div> ' + "<div class=\"fj-overlay-link\">".concat(item[Const.FJCONFIG_URL], "</div>");
      this.OverlayInnerDiv.style.cursor = 'pointer';
      this.OverlayClosingDiv.innerHTML = '' + '<div>' + '    <span class=" fj-overlay-closing  fj-control-embd fj-btn fj-icon-windowClose" aria-hidden="true"></span>' + '    <div class="fj-overlay-annonce">Annonce</div>' + '</div>';
      this.OverlayClosingDiv.addEventListener('click', function () {
        _this.StopOverlay(index);
      });
      this.OverlayDiv.appendChild(this.OverlayClosingDiv);
      this.OverlayDiv.appendChild(this.OverlayInnerDiv);
      this.OverlayDiv.classList.remove('fj-hide');
      this.OverlayDiv.classList.add('over-HL');
      this.events.fireEvent(Const.OverlayEvents.OVERLAY_STARTED); // add click

      url = item[Const.FJCONFIG_URL];
      this.logger.info('Setting click on overlay going to  ', url);
      this.OverlayInnerDiv.addEventListener('click', function () {
        _this.clicked(index);
      });
      this.logger.log(index, "you overlay just started and will end in ".concat(item[Const.FJCONFIG_DURATION], " sec"), this.overlays[index].handler);
    }
    /**
       * Function to be called from event 'timeupdate' from video
       * called to check if this.overlayshas to Start
       */

  }, {
    key: "CheckOverlays",
    value: function CheckOverlays(secondes) {
      var i = 0;
      var item = null;
      var show = 0;

      if (this.settled !== true) {
        return;
      }

      for (i = 0; i < this.overlays.length; i += 1) {
        item = this.overlays[i];
        show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);

        if (secondes === show) {
          this.logger.info(i, ' starting overlay .. ');

          if (this.overlays[i].started === false) {
            this.logger.info(i, ' starting a new  overlay .. ');
            this.overlays[i].started = true;
            this.StartOverlay(i);
          } else {
            this.logger.info(i, ' already started ', item[Const.FJCONFIG_URL], ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
          }
        }
      }
    }
  }, {
    key: "initialize",
    value: function initialize(overdiv) {
      this.OverlayDiv = overdiv;
    }
    /**
       *
       */

  }, {
    key: "on",
    value: function on(name, handler) {
      return this.events.on(name, handler);
    }
    /**
       *
       */

  }, {
    key: "off",
    value: function off(name, handler) {
      return this.events.off(name, handler);
    }
  }]);

  return Overlays;
}();

module.exports = Overlays;

/***/ }),

/***/ "./src/js/ui/PlayerUi.js":
/*!*******************************!*\
  !*** ./src/js/ui/PlayerUi.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

var Thumbs = __webpack_require__(/*! ./Thumbs */ "./src/js/ui/Thumbs.js");

var Menus = __webpack_require__(/*! ./Menus */ "./src/js/ui/Menus.js");

var Utils = __webpack_require__(/*! ../utils/Utils */ "./src/js/utils/Utils.js");

var PlayerTemplate = __webpack_require__(/*! ./fjplayer-tmpl */ "./src/js/ui/fjplayer-tmpl.js");

__webpack_require__(/*! ../../css/player.less */ "./src/css/player.less"); // require('../css/fjfa.css');

/**
 * @module PlayerUi
 * @description The PlayerUi is the html UI for the player
 *
 */


var PlayerUi = /*#__PURE__*/function () {
  function PlayerUi(videoContId, VWidth, WHeight) {
    _classCallCheck(this, PlayerUi);

    this.logger = new Logger(this);
    this.mediaDuration = 0;
    this.holdWidth = 0;
    this.fjMainPlayer = null;
    this.videoContainerId = videoContId;
    this.fullScreenOnStart = false;
    this.vwidth = VWidth;
    this.vheight = WHeight;
    this.expandScreen = false;
    this.playerMenus = null;
    this.timeout = null;
    this.initialized = false;
    this.HideControlsTimeout = 1500;
    this.id = Date.now().toString().substr(6);
    this.timerId = "trd".concat(this.id);
    this.durationId = "drd".concat(this.id);
    this.titleId = "tld".concat(this.id);
    this.errorDivId = "errd".concat(this.id);
    this.spinnerId = "spin".concat(this.id);
    this.BigPlayBtnId = "bp".concat(this.id);
    this.videoCaptionId = "vcp".concat(this.id);
    this.videoInfoId = "vif".concat(this.id);
    this.videoFigureId = "vfg".concat(this.id);
    this.videoId = "voi".concat(this.id);
    this.videoControlsId = "vct".concat(this.id);
    this.playpauseBtnId = "ppb".concat(this.id);
    this.playpreviousBtnId = "pprb".concat(this.id);
    this.playforwardBtnId = "ppfb".concat(this.id);
    this.muteBtnId = "mbt".concat(this.id);
    this.volumeBarId = "vbr".concat(this.id);
    this.volumeDivId = "vvd".concat(this.id);
    this.subtitlesBtnId = "subd".concat(this.id);
    this.audiosBtnId = "audb".concat(this.id);
    this.progressBarId = "pgb".concat(this.id);
    this.fullScreenBtnId = "fsb".concat(this.id);
    this.thumbsDivId = "tbd".concat(this.id);
    this.thumbsImgId = "tbi".concat(this.id);
    this.thumbstimerId = "tbt".concat(this.id);
    this.adsContainerDivId = "adscd".concat(this.id);
    this.overlaysContainerDivId = "ovscd".concat(this.id);
    this.menuContainerDivId = "mncd".concat(this.id);
    this.descriptionId = "desc".concat(this.id);
    this.backId = "backId".concat(this.id);
    this.shareId = "shareId".concat(this.id);
    this.downloadId = "downloadId".concat(this.id);
    this.videoContainer = null;
    this.video = null;
    this.videoController = null;
    this.spinner = null;
    this.videoControllerFigure = null;
    this.playpauseBtn = null;
    this.playpreviousBtn = null;
    this.playforwardBtn = null;
    this.muteBtn = null;
    this.volumeBar = null;
    this.progressBar = null;
    this.fullScreenBtn = null;
    this.timer = null;
    this.durationDisplay = null;
    this.videoFigurev = null;
    this.BigPlayBtn = null;
    this.volumebar = null;
    this.ThumbsMgr = null;
    this.videoControls = null;
    this.videoInfo = null;
    this.fullScreenEnabled = true;
  }

  _createClass(PlayerUi, [{
    key: "create",
    value: function create() {
      var data = {
        videoFigureId: this.videoFigureId,
        fullScreenOnStart: this.fullScreenOnStart,
        videoId: this.videoId,
        vwidth: this.vwidth,
        videoInfoId: this.videoInfoId,
        backId: this.backId,
        titleId: this.titleId,
        shareId: this.shareId,
        downloadId: this.downloadId,
        errorDivId: this.errorDivId,
        spinnerId: this.spinnerId,
        BigPlayBtnId: this.BigPlayBtnId,
        videoCaptionId: this.videoCaptionId,
        thumbsDivId: this.thumbsDivId,
        thumbsImgId: this.thumbsImgId,
        thumbstimerId: this.thumbstimerId,
        menuContainerDivId: this.menuContainerDivId,
        adsContainerDivId: this.adsContainerDivId,
        videoControlsId: this.videoControlsId,
        progressBarId: this.progressBarId,
        playpreviousBtnId: this.playpreviousBtnId,
        playpauseBtnId: this.playpauseBtnId,
        playforwardBtnId: this.playforwardBtnId,
        muteBtnId: this.muteBtnId,
        volumeDivId: this.volumeDivId,
        volumeBarId: this.volumeBarId,
        descriptionId: this.descriptionId,
        fullScreenBtnId: this.fullScreenBtnId,
        subtitlesBtnId: this.subtitlesBtnId,
        audiosBtnId: this.audiosBtnId,
        timerId: this.timerId,
        durationId: this.durationId,
        overlaysContainerDivId: this.overlaysContainerDivId
      };
      this.logger.info(' container if of the player ', this.videoContainerId);
      this.videoContainer = document.getElementById(this.videoContainerId);

      if (!this.videoContainer) {
        throw new Error('The this.video container element still null');
      }

      this.videoContainer.classList.add('fjPlayer');
      this.videoContainer.innerHTML = new PlayerTemplate().GetHtml(data);
      this.video = null;
      this.videoContainer = null;
      this.videoController = document.getElementById(this.videoControlsId);
      this.videoControllerFigure = document.getElementById(this.videoFigureId);
      this.spinner = document.getElementById(this.spinnerId);
      this.video = document.getElementById(this.videoId);

      if (!this.video) {
        throw new Error("The this.video element still null using id".concat(this.videoId));
      }

      this.playpauseBtn = document.getElementById(this.playpauseBtnId);
      this.playpreviousBtn = document.getElementById(this.playpreviousBtnId);
      this.playforwardBtn = document.getElementById(this.playforwardBtnId);
      this.muteBtn = document.getElementById(this.muteBtnId);
      this.volumeBar = document.getElementById(this.volumeBarId);
      this.progressBar = document.getElementById(this.progressBarId);
      this.fullScreenBtn = document.getElementById(this.fullScreenBtnId);
      this.timer = document.getElementById(this.timerId);
      this.durationDisplay = document.getElementById(this.durationId);
      this.videoFigure = document.getElementById(this.videoFigureId);
      this.BigPlayBtn = document.getElementById(this.BigPlayBtnId);
      this.videoControls = document.getElementById(this.videoControlsId);
      this.videoInfo = document.getElementById(this.videoInfoId); // Hide the default controls

      this.video.controls = false; // Display the user defined this.video controls

      this.videoFigure.setAttribute('controls-hidden', true);
      this.videoControls.classList.add('fj-hide');
      this.videoInfo.classList.remove('fj-hide'); // Create Thumbs Object

      this.ThumbsMgr = new Thumbs(document.getElementById(this.thumbstimerId), document.getElementById(this.thumbsImgId), document.getElementById(this.thumbsDivId), this.progressBar);

      if (this.fullScreenOnStart === 'true') {
        this.videoFigure.setAttribute('data-fullscreen', 'true');
      } // If the browser doesn't support the Fulscreen API then hide the fullscreen button


      if (!this.fullScreenEnabled) {
        this.fullScreenBtn.style.display = 'none';
      }
    } // ************************************************************************************
    // PLAYBACK
    // ************************************************************************************

  }, {
    key: "onplaypauseClick",
    value: function onplaypauseClick() {
      if (this.fjMainPlayer.isPaused() || this.fjMainPlayer.isEnded()) {
        this.fjMainPlayer.play();
      } else {
        this.fjMainPlayer.pause();
      }
    }
  }, {
    key: "onperviousClick",
    value: function onperviousClick() {
      this.fjMainPlayer.playPrev();
    }
  }, {
    key: "onforwardClick",
    value: function onforwardClick() {
      this.fjMainPlayer.playNext();
    }
  }, {
    key: "toggleplaypauseBtn",
    value: function toggleplaypauseBtn() {
      if (this.fjMainPlayer.isPlayingAds()) {
        // hide big play button
        this.BigPlayBtn.classList.add('fj-hide'); // hide this.video controls

        this.videoFigure.setAttribute('controls-hidden', true);
        this.videoControls.classList.add('fj-hide');
        this.playerMenus.HideMenus();
      } else if (this.fjMainPlayer.isPaused() || this.fjMainPlayer.isEnded()) {
        this.playpauseBtn.classList.add('fj-icon-play');
        this.playpauseBtn.classList.remove('fj-icon-pause'); // show big play button

        this.BigPlayBtn.classList.remove('fj-hide'); // hide this.video controls

        this.videoFigure.setAttribute('controls-hidden', true);
        this.videoControls.classList.add('fj-hide');
        this.playerMenus.HideMenus();
        this.logger.log('UI is pausing !');
      } else {
        this.playpauseBtn.classList.remove('fj-icon-play');
        this.playpauseBtn.classList.add('fj-icon-pause'); // hide big play button

        this.BigPlayBtn.classList.add('fj-hide'); // show this.video controls

        this.videoFigure.setAttribute('controls-hidden', false);
        this.videoControls.classList.remove('fj-hide');
        this.logger.log('UI is playing !');
      }
    }
  }, {
    key: "magicMouseLeave",
    value: function magicMouseLeave() {
      if (!this.fjMainPlayer.isPaused() && !this.fjMainPlayer.isEnded() && !this.fjMainPlayer.isPlayingAds()) {
        this.videoFigure.setAttribute('controls-hidden', true); // delete fadeIn

        this.videoControls.classList.remove('m-fadeIn');
        this.videoInfo.classList.remove('m-fadeIn'); // add fadeOut

        this.videoControls.classList.add('m-fadeOut');
        this.videoInfo.classList.add('m-fadeOut'); // other

        this.video.style.cursor = 'none';
        this.playerMenus.HideMenus();
        this.ThumbsMgr.hideThumbs(this.ThumbsMgr);
      }
    }
  }, {
    key: "magicMouseEnter",
    value: function magicMouseEnter() {
      if (!this.fjMainPlayer.isPaused() && !this.fjMainPlayer.isEnded() && !this.fjMainPlayer.isPlayingAds()) {
        this.videoFigure.setAttribute('controls-hidden', false); // delete fadeOut

        this.videoControls.classList.remove('m-fadeOut');
        this.videoInfo.classList.remove('m-fadeOut'); // add fadein

        this.videoControls.classList.add('m-fadeIn');
        this.videoInfo.classList.add('m-fadeIn'); // other

        this.video.style.cursor = 'auto';
      }
    }
  }, {
    key: "magicMouseMove",
    value: function magicMouseMove() {
      var _this = this;

      if (!this.fjMainPlayer.isPaused() && !this.fjMainPlayer.isEnded() && !this.fjMainPlayer.isPlayingAds()) {
        if (this.video.style.cursor === 'none') {
          this.magicMouseEnter();
        } else {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }

          this.timeout = setTimeout(function () {
            _this.magicMouseLeave();
          }, this.HideControlsTimeout);
        }
      }
    }
  }, {
    key: "SetupSubsAudsManager",
    value: function SetupSubsAudsManager(mediaplayer) {
      var done = false;
      done = this.playerMenus.SetupAuds(mediaplayer);
      this.logger.warn(' Will setup Audio menu  ', done);

      if (done !== true) {
        document.getElementById(this.audiosBtnId).classList.add('fj-hide');
      } else {
        document.getElementById(this.audiosBtnId).classList.remove('fj-hide');
      }

      done = this.playerMenus.SetupSubs(mediaplayer);
      this.logger.warn(' Will setup Subs menu  ', done);

      if (done !== true) {
        document.getElementById(this.subtitlesBtnId).classList.add('fj-hide');
      } else {
        document.getElementById(this.subtitlesBtnId).classList.remove('fj-hide');
      }
    } // ************************************************************************************
    // VOLUME
    // ************************************************************************************

  }, {
    key: "OnvbClick",
    value: function OnvbClick() {
      var pos = this.volumeBar.value / 100;
      this.logger.log(' volume from ', this.video.volume, ' to ', pos);

      if (pos > 0.6) {
        this.muteBtn.classList.remove('fj-icon-mute');
        this.muteBtn.classList.remove('fj-icon-volDown');
        this.muteBtn.classList.add('fj-icon-volUp');
      } else if (pos > 0) {
        this.muteBtn.classList.remove('fj-icon-mute');
        this.muteBtn.classList.remove('fj-icon-volUp');
        this.muteBtn.classList.add('fj-icon-volDown');
      } else {
        this.muteBtn.classList.remove('fj-icon-volDown');
        this.muteBtn.classList.remove('fj-icon-volUp');
        this.muteBtn.classList.add('fj-icon-mute');
      }

      this.video.volume = pos;
      this.logger.log(' new volume is ', pos);
    }
  }, {
    key: "onmuteClick",
    value: function onmuteClick() {
      this.video.muted = !this.video.muted;

      if (this.video.muted) {
        this.volumeBar.value = 0;
        this.muteBtn.classList.remove('fj-icon-volDown');
        this.muteBtn.classList.remove('fj-icon-volUp');
        this.muteBtn.classList.add('fj-icon-mute');
      } else if (this.video.volume > 0.6) {
        this.volumeBar.value = this.video.volume * 100;
        this.muteBtn.classList.remove('fj-icon-mute');
        this.muteBtn.classList.remove('fj-icon-volDown');
        this.muteBtn.classList.add('fj-icon-volUp');
      } else {
        this.volumeBar.value = this.video.volume * 100;
        this.muteBtn.classList.remove('fj-icon-mute');
        this.muteBtn.classList.remove('fj-icon-volUp');
        this.muteBtn.classList.add('fj-icon-volDown');
      }
    } // ************************************************************************************
    // SEEKING
    // ************************************************************************************

  }, {
    key: "onprogressClick",
    value: function onprogressClick(event) {
      // var p = this.progressBar.value;
      this.logger.info(' onprogressClick event ', event);
      var rect = this.progressBar.getBoundingClientRect();
      this.logger.info(' onprogressClick mediaDuration ', this.mediaDuration);
      this.logger.info(' onprogressClick rect ', rect);
      var p = (event.pageX - rect.left) * (this.mediaDuration / (rect.right - rect.left));
      this.logger.log(' Seeking from ', Utils.duration(p), '/', Utils.duration(this.mediaDuration), 'to', Utils.duration(p), ' sec');
      this.fjMainPlayer.seek(p);
    } // ************************************************************************************
    // FULLSCREEN
    // ************************************************************************************

  }, {
    key: "setFullscreenData",
    value: function setFullscreenData(state) {
      this.videoFigure.setAttribute('data-fullscreen', !!state);
    }
  }, {
    key: "handleFullscreen",
    value: function handleFullscreen() {
      // If fullscreen mode is active...
      if (this.constructor.isFullScreen()) {
        // ...exit fullscreen mode
        // (Note: this can only be called on document)
        if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else if (document.msExitFullscreen) document.msExitFullscreen();
        this.setFullscreenData(false);
        this.fullScreenBtn.classList.remove('fj-icon-compressScreen');
        this.fullScreenBtn.classList.add('fj-icon-fullScreen');
      } else {
        this.fullScreenBtn.classList.add('fj-icon-compressScreen');
        this.fullScreenBtn.classList.remove('fj-icon-fullScreen'); // ...otherwise enter fullscreen mode
        // (Note: can be called on document, but here the specific element is used as
        // it will also ensure that the element's
        // children, e.g. the custom controls, go fullscreen also)

        if (this.videoFigure.requestFullscreen) this.videoFigure.requestFullscreen();else if (this.videoFigure.mozRequestFullScreen) this.videoFigure.mozRequestFullScreen();else if (this.videoFigure.webkitRequestFullScreen) {
          // Safari 5.1 only allows proper fullscreen on the this.video element.
          // This also works fine on other WebKit
          // Zbrowsers as the following CSS (set in styles.css) hides the default
          // controls that appear again, and
          // ensures that our custom controls are visible:
          // figure[data-fullscreen=true]
          // this.video::-webkit-media-controls { display:none !important; }
          // figure[data-fullscreen=true] .controls { z-index:2147483647; }
          this.video.webkitRequestFullScreen();
        } else if (this.videoFigure.msRequestFullscreen) this.videoFigure.msRequestFullscreen();
        this.setFullscreenData(true);
      }
    }
  }, {
    key: "onFullScreenChange",
    value: function onFullScreenChange(e) {
      if (e.type === 'fullscreenchange') {
        this.logger.log(' fullscreenchange >>> Full Scren changed Status ', !!(document.fullScreen || document.fullscreenElement));
        this.setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
      }

      if (e.type === 'webkitfullscreenchange') {
        this.logger.log(' webkitfullscreenchange >>> Full Scren changed Status ', !!document.webkitIsFullScreen);
        this.setFullscreenData(!!document.webkitIsFullScreen);
      }

      if (e.type === 'mozfullscreenchange') {
        this.logger.log(' mozfullscreenchange >>> Full Scren changed Status ', !!document.mozFullScreen);
        this.setFullscreenData(!!document.mozFullScreen);
      }

      if (e.type === 'msfullscreenchange') {
        this.logger.log(' msfullscreenchange >>> Full Scren changed Status ', !!document.msFullscreenElement);
        this.setFullscreenData(!!document.msFullscreenElement);
      }
    } // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************

  }, {
    key: "goForError",
    value: function goForError() {
      // used to prepare to show error
      this.magicMouseLeave();
      this.BigPlayBtn.classList.add('fj-hide');
    }
  }, {
    key: "setVolume",
    value: function setVolume(value) {
      if (typeof value === 'number') {
        this.volumebar.value = value;
      }

      var pos = this.volumeBar.value / 100;
      this.logger.log(' volume from ', this.video.volume, ' to ', pos);

      if (pos > 0.6) {
        this.muteBtn.classList.remove('fj-icon-mute');
        this.muteBtn.classList.remove('fj-icon-volDown');
        this.muteBtn.classList.add('fj-icon-volUp');
      } else if (pos > 0) {
        this.muteBtn.classList.remove('fj-icon-mute');
        this.muteBtn.classList.remove('fj-icon-volUp');
        this.muteBtn.classList.add('fj-icon-volDown');
      } else {
        this.muteBtn.classList.remove('fj-icon-volDown');
        this.muteBtn.classList.remove('fj-icon-volUp');
        this.muteBtn.classList.add('fj-icon-mute');
      }

      this.video.volume = pos;
      this.logger.log(' new volume is ', pos);
    }
  }, {
    key: "setDuration",
    value: function setDuration(value) {
      // this.logger.log(`Will setDuration to ${value}`);
      if (!Number.isNaN(value)) {
        this.mediaDuration = value;
        this.durationDisplay.textContent = Utils.duration(value);
        this.progressBar.max = value;
      }
    }
  }, {
    key: "UpdateProgress",
    value: function UpdateProgress(value) {
      if (!Number.isNaN(value)) {
        this.timer.textContent = Utils.duration(value);
        this.progressBar.value = value;
      }
    } // set Sharing icon

  }, {
    key: "setShareIcon",
    value: function setShareIcon(shareUrl) {
      if (shareUrl !== null && shareUrl !== undefined && shareUrl !== '') {
        this.logger.log("Will show Share icon to ".concat(shareUrl));
        document.getElementById(this.shareId).style.display = 'block';
        document.getElementById(this.shareId).addEventListener('click', function () {
          window.open(shareUrl);
        });
      } else {
        this.logger.log('Will NOT show Share icon');
        document.getElementById(this.shareId).style.display = 'none';
      }
    } // set Downloading icon

  }, {
    key: "setDownloadIcon",
    value: function setDownloadIcon(DownUrl) {
      if (DownUrl !== null && DownUrl !== undefined && DownUrl !== '') {
        this.logger.log("Will show Download icon to ".concat(DownUrl));
        document.getElementById(this.downloadId).style.display = 'block';
        document.getElementById(this.downloadId).addEventListener('click', function () {
          window.open(DownUrl);
        });
      } else {
        this.logger.log('Will NOT show Download icon');
        document.getElementById(this.downloadId).style.display = 'none';
      }
    } // set back icon

  }, {
    key: "setBackIcon",
    value: function setBackIcon(BackUrl) {
      if (BackUrl !== null && BackUrl !== undefined && BackUrl !== '') {
        this.logger.log("Will show Back icon to ".concat(BackUrl));
        document.getElementById(this.backId).style.display = 'block';
        document.getElementById(this.backId).addEventListener('click', function () {
          window.location = BackUrl;
        });
      } else {
        this.logger.log('Will NOT show Back icon');
        document.getElementById(this.backId).style.display = 'none';
      }
    }
  }, {
    key: "setTitle",
    value: function setTitle(ltitle, ShowUpTitle) {
      document.getElementById(this.titleId).innerHTML = ltitle;
      document.getElementById(this.descriptionId).innerHTML = ltitle;

      if (ShowUpTitle) {
        this.logger.log('Will  show title Up');
        document.getElementById(this.titleId).style.display = 'block';
      } else {
        this.logger.log('Will NOT show title Up');
        document.getElementById(this.titleId).style.display = 'none';
      }
    }
  }, {
    key: "getVideo",
    value: function getVideo() {
      return this.video;
    }
  }, {
    key: "getErrorDivId",
    value: function getErrorDivId() {
      return this.errorDivId;
    }
  }, {
    key: "getAdsContainerDivId",
    value: function getAdsContainerDivId() {
      return this.adsContainerDivId;
    }
  }, {
    key: "getOverlaysContainerDivId",
    value: function getOverlaysContainerDivId() {
      return this.overlaysContainerDivId;
    }
  }, {
    key: "SetupThumbsManager",
    value: function SetupThumbsManager(videoDuration, thumbsTrackIndex) {
      if (thumbsTrackIndex !== null) {
        return this.ThumbsMgr.Setup(this.getVideo(), videoDuration, thumbsTrackIndex);
      }

      return this.ThumbsMgr.reset();
    }
  }, {
    key: "getVideoFigure",
    value: function getVideoFigure() {
      return this.videoControllerFigure;
    }
  }, {
    key: "onResizeWindow",
    value: function onResizeWindow() {
      var intViewportWidth = window.innerWidth; // const intViewportHeight = window.innerHeight;

      var newPercentage = "".concat(intViewportWidth / this.holdWidth * 100, "%");
      var fjplayer = document.getElementById('playercontainer');
      fjplayer.style.fontSize = newPercentage;
      this.logger.log(this.holdWidth, ' RESIED !!!!!!!!!!!!! ', intViewportWidth, '/', this.holdWidth, '>>>>>', newPercentage);
    }
  }, {
    key: "onLoadWindow",
    value: function onLoadWindow() {
      this.logger.log(this.holdWidth, ' LOADED ##########################');
      this.holdWidth = window.innerWidth;
    }
  }, {
    key: "initialize",
    value: function initialize(mainPlayer) {
      var _this2 = this;

      this.create(this.videoContainerId);
      this.fjMainPlayer = mainPlayer;

      if (!this.fjMainPlayer) {
        throw new Error('Please pass an instance of player when instantiating');
      }

      this.playerMenus = new Menus(this.video, this.subtitlesBtnId, this.audiosBtnId, this.menuContainerDivId); // OverlaysMgr = new Overlays(this.video,
      //    document.getElementById(this.overlaysContainerDivId));

      this.videoControllerFigure.addEventListener('mouseleave', function () {
        return _this2.magicMouseLeave();
      });
      this.videoControllerFigure.addEventListener('mouseenter', function () {
        return _this2.magicMouseEnter();
      });
      this.videoControllerFigure.addEventListener('mousemove', function () {
        return _this2.magicMouseMove();
      });
      this.BigPlayBtn.addEventListener('click', function () {
        return _this2.onplaypauseClick();
      });
      this.video.addEventListener('click', function () {
        return _this2.onplaypauseClick();
      });
      this.video.addEventListener('dblclick', function () {
        return _this2.handleFullscreen();
      });
      this.volumeBar.addEventListener('click', function () {
        return _this2.OnvbClick();
      });
      this.playpauseBtn.addEventListener('click', function () {
        return _this2.onplaypauseClick();
      });
      this.playpreviousBtn.addEventListener('click', function () {
        return _this2.onperviousClick();
      });
      this.playforwardBtn.addEventListener('click', function () {
        return _this2.onforwardClick();
      });
      this.muteBtn.addEventListener('click', function () {
        return _this2.onmuteClick();
      });
      this.fullScreenBtn.addEventListener('click', function () {
        return _this2.handleFullscreen();
      });
      this.progressBar.addEventListener('click', function (event) {
        return _this2.onprogressClick(event);
      }); // window.addEventListener('resize', () => onResizeWindow());
      // window.addEventListener('load', v onResizeWindow()); // too late to catch event

      document.addEventListener('fullscreenchange', function (event) {
        return _this2.onFullScreenChange(event);
      });
      document.addEventListener('MSFullscreenChange', function (event) {
        return _this2.onFullScreenChange(event);
      });
      document.addEventListener('mozfullscreenchange', function (event) {
        return _this2.onFullScreenChange(event);
      });
      document.addEventListener('webkitfullscreenchange', function (event) {
        return _this2.onFullScreenChange(event);
      }); // progress bar

      this.progressBar.min = 0;
      this.progressBar.step = 0.01;
      this.progressBar.value = 0; // volume bar

      this.volumeBar.min = 0;
      this.volumeBar.step = 1;
      this.volumeBar.max = 100;
      this.volumeBar.value = 100;
      this.initialized = true; // hide some component

      document.getElementById(this.titleId).display = 'none';
    }
  }, {
    key: "hideVideo",
    value: function hideVideo() {
      this.BigPlayBtn.style.display = 'none';
      this.videoInfo.style.display = 'none';
      this.video.style.display = 'none';
      this.videoController.style.display = 'none';
    }
  }, {
    key: "ShowVideo",
    value: function ShowVideo() {
      this.BigPlayBtn.style.display = 'block';
      this.videoInfo.style.display = 'block';
      this.video.style.display = 'block';
      this.videoController.style.display = 'block';
    }
  }, {
    key: "ShowSpinner",
    value: function ShowSpinner() {
      this.spinner.classList.remove('fj-hide');
    }
  }, {
    key: "HideSpinner",
    value: function HideSpinner() {
      if (this.spinner.classList.contains('fj-hide') === false) {
        this.spinner.classList.add('fj-hide');
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      this.videoController.classList.add('disable');
    }
  }, {
    key: "enable",
    value: function enable() {
      this.videoController.classList.remove('disable');
    }
  }, {
    key: "getVideoCaption",
    value: function getVideoCaption() {
      var ele = document.getElementById(this.videoCaptionId);
      return ele;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.initialized !== true) {
        this.logger.warn('not yet this.initialized');
        return;
      }

      this.logger.warn(' >>> Resetting player ui !!');
      this.ThumbsMgr.reset(); // OverlaysMgr = new Overlays(this.video,
      //    document.getElementById(this.overlaysContainerDivId));

      this.videoControllerFigure.removeEventListener('mouseleave', this.magicMouseLeave);
      this.videoControllerFigure.removeEventListener('mouseenter', this.magicMouseEnter);
      this.videoControllerFigure.removeEventListener('mousemove', this.magicMouseMove);
      this.BigPlayBtn.removeEventListener('click', this.onplaypauseClick);
      this.video.removeEventListener('click', this.onplaypauseClick);
      this.video.removeEventListener('dblclick', this.handleFullscreen);
      this.volumeBar.removeEventListener('click', this.OnvbClick);
      this.playpauseBtn.removeEventListener('click', this.onplaypauseClick);
      this.muteBtn.removeEventListener('click', this.onmuteClick);
      this.fullScreenBtn.removeEventListener('click', this.handleFullscreen);
      this.progressBar.removeEventListener('click', this.onprogressClick);
      /*
          window.removeEventListener('resize', onResizeWindow);
          window.removeEventListener('load', onResizeWindow);
          */

      document.removeEventListener('fullscreenchange', this.onFullScreenChange);
      document.removeEventListener('MSFullscreenChange', this.onFullScreenChange);
      document.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
      this.toggleplaypauseBtn();
    }
  }], [{
    key: "isFullScreen",
    value: function isFullScreen() {
      return document.fullscreenElement || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
    }
  }]);

  return PlayerUi;
}();

module.exports = PlayerUi;

/***/ }),

/***/ "./src/js/ui/Thumbs.js":
/*!*****************************!*\
  !*** ./src/js/ui/Thumbs.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");

var Utils = __webpack_require__(/*! ../utils/Utils */ "./src/js/utils/Utils.js");

__webpack_require__(/*! ../../css/player.less */ "./src/css/player.less");
/**
 * @module Thumbs
 * @description The Thumbs module is responsible for rendering
 *  showing and hiding vtt pictures based on mousing mouse on progress bar.
 * @param vidElement the this.video element
 * @param vttThumbsTrackIndex the index of Vtt thumbs track in textTracks list of this.video
 * @param thumbImgElement the img element used for thumbs
 * @param thumbImgElement the div element used for thumbs
 * @param progressBarElement the progress element used for thumbs
 */


var Thumbs = /*#__PURE__*/function () {
  function Thumbs(thtimer, thumbImgElement, thumbDivElement, progressBarElement) {
    _classCallCheck(this, Thumbs);

    this.logger = new Logger(this);
    this.thumbsTrackIndex = -1;
    this.video = null;
    this.vidDuration = 0;
    this.progressBar = progressBarElement;
    this.thumbstimer = thtimer;
    this.thumbsDiv = thumbDivElement;
    this.thumbsImg = thumbImgElement;
  }

  _createClass(Thumbs, [{
    key: "showThumbs",
    value: function showThumbs() {
      this.thumbsDiv.classList.remove('fj-hide');
      this.thumbsDiv.classList.add('fj-show');
    }
  }, {
    key: "hideThumbs",
    value: function hideThumbs() {
      this.thumbsDiv.classList.remove('fj-show');
      this.thumbsDiv.classList.add('fj-hide');
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs(event) {
      this.logger.warn('eventing Thumbs is', event); // first we convert from mouse to time position ..

      var i;
      var rect = this.progressBar.getBoundingClientRect();
      var p = (event.pageX - rect.left) * (this.vidDuration / (rect.right - rect.left));
      var dur = Utils.duration(parseFloat(p));

      if (p > this.vidDuration + 2 || p < 0) {
        // some error ?
        this.logger.warn(' Position is bigger than duration >>', p, this.vidDuration);
        return;
      }

      this.logger.log(' current clicked  ', dur); // update ui ..then we find the matching cue..

      var c = this.video.textTracks[this.thumbsTrackIndex].cues;

      if (c === null) {
        // track eleme,t is not supprted : Firefox
        this.logger.error(' cues is null @ ', this.thumbsTrackIndex, ' not supported , Firefox ?');
        return;
      }

      for (i = 0; i < c.length; i += 1) {
        if (c[i].startTime <= p && c[i].endTime > p) {
          break;
        }
      } // ..next we unravel the JPG url and fragment query..


      var xywh = c[i].text.substr(c[i].text.indexOf('=') + 1).split(',');
      var left = -(rect.left - event.pageX + xywh[2] / 2); // this.logger.log(' Render Thumbs  @ ', p, '#', dur,
      // '  where pgX', event.pageX, ', displayed on left: ', left);
      // ..and last we style the thumbnail overlay

      var url = "url(".concat(c[i].text.split('#')[0], ")"); // this.logger.log(' fetching thum from ', url);

      this.thumbsImg.style.backgroundImage = url;
      this.thumbsImg.style.backgroundPosition = "-".concat(xywh[0], "px -").concat(xywh[1], "px");
      this.thumbsImg.style.width = "".concat(xywh[2], "px");
      this.thumbsImg.style.height = "".concat(xywh[3], "px");
      this.thumbstimer.innerHTML = dur;
      this.thumbsDiv.style.left = left; // this.thumbsDiv.style.top = top;

      this.thumbsDiv.style.width = "".concat(xywh[2], "px");
    }
  }, {
    key: "reset",
    value: function reset() {
      this.thumbsTrackIndex = -1;
      this.progressBar.removeEventListener('mousemove', this.renderThumbs);
      this.progressBar.removeEventListener('mouseleave', this.hideThumbs);
      this.progressBar.removeEventListener('mouseover', this.showThumbs);
    }
  }, {
    key: "Setup",
    value: function Setup(vidElement, videoDuration, thumbsTrindex) {
      var _this = this;

      this.reset();
      this.video = vidElement;
      this.vidDuration = videoDuration;
      this.thumbsTrackIndex = thumbsTrindex;
      this.logger.info(' Setting index thumbs tracks on ', this.thumbsTrackIndex, ' and this.video duration ', this.vidDuration);

      if (this.progressBar && this.thumbsTrackIndex !== -1) {
        this.progressBar.addEventListener('mousemove', function (e) {
          return _this.renderThumbs(e);
        });
        this.progressBar.addEventListener('mouseleave', function (e) {
          return _this.hideThumbs(e);
        });
        this.progressBar.addEventListener('mouseover', function (e) {
          return _this.showThumbs(e);
        });
        return true;
      }

      return false;
    }
  }]);

  return Thumbs;
}();

module.exports = Thumbs;

/***/ }),

/***/ "./src/js/ui/fjplayer-tmpl.js":
/*!************************************!*\
  !*** ./src/js/ui/fjplayer-tmpl.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ../utils/Logger */ "./src/js/utils/Logger.js");
/**
 * @module playerTemplate
 * @description The playerTemplate
 *
 */


var PlayerTemplate = /*#__PURE__*/function () {
  function PlayerTemplate() {
    _classCallCheck(this, PlayerTemplate);

    this.logger = new Logger(this);
    this.OPEN_DELIMITER = '<%=';
    this.CLOSE_DELIMITER = '%>';
    this.REGEX_STRING = '(<%=|%>)';
    this.DEFAULT_DELIMITER = '%';
    this.regExpChars = /[|\\{}()[\]^$+*?.]/g;
    this.template = '<figure id="<%= videoFigureId %>" class="fj-figure" controls-hidden="true" data-fullscreen="<%= fullScreenOnStart %>"> ' + '    <!-- video element -->  ' + '    <video id="<%= videoId %>" class="fj-video" width="<%= vwidth %>" crossorigin> </video> ' + '    <!-- Horizental Tpp --> ' + '    <div class="fj-horizental-top" id="<%= videoInfoId %>"> ' + '        <span class=" fj-vertical-left  fj-control  fj-btn  fj-icon-leftarrow" aria-hidden="true" id="<%= backId %>"> </span> ' + '        <div class=" fj-vertical-left  fj-vertical-separator "></div> ' + '        <div class=" fj-vertical-left  fj-control  fj-btn fj-title fj-short-span " id="<%= titleId %>"> </div> ' + '        <span class=" fj-vertical-right fj-control  fj-btn  fj-icon-share  " aria-hidden="true" id="<%= shareId %>"> </span> ' + '        <div class=" fj-vertical-right  fj-vertical-separator "></div> ' + '        <span class=" fj-vertical-right fj-control  fj-btn  fj-icon-download " aria-hidden="true" id="<%= downloadId %>"> </span> ' + '    </div> ' + '    <!-- Horizental Center --> ' + '    <div class="fj-horizental-center"> ' + '       <div class="fj-vertical-center">' + '           <div id="<%= errorDivId %>" class=" fj-hide"> </div> ' + '           <div id="<%= spinnerId %>" class=" fj-hide spinner"> </div> ' + '               <span class=" fj-control fj-big-btn  fj-icon-play"  aria-hidden="true" id="<%= BigPlayBtnId %>"></span> ' + '       </div> ' + '    </div> ' + '    <!-- this will contains ads video or ads overlays --> ' + '    <div id="<%= adsContainerDivId %>" class=""></div> ' + '    <!-- Horizental Bottom Up used for menu  --> ' + '    <div class="fj-horizental-bottomUpper"> ' + '        <!-- video caption ued by dash player for caption --> ' + '        <div id="<%= videoCaptionId %>"></div> ' + '        <!-- this present the thumbs image if exist--> ' + '        <div class="thumbsBlockDiv  fj-hide" id="<%= thumbsDivId %>" > ' + '            <span class="thumbsBlock" id="<%= thumbsImgId %>"></span> ' + '            <span class="fjcontrols-control-text" id="<%= thumbstimerId %>"></span> ' + '        </div> ' + '        <!-- this present the subtitles or audios menu if exist  and when clicked--> ' + '        <div class="fj-vertical-left" id="<%= menuContainerDivId %>"> ' + '        </div> ' + '    </div> ' + '    <!-- Horizental Bottom down used for fj controls  --> ' + '    <div class="fj-horizental-bottomLower"  id="<%= videoControlsId %>"> ' + '        <!--  the video progress Bar --> ' + '        <div class="fj-vertical-center"> ' + '            <input class=" fj-control-embd fj-video-progress" id="<%= progressBarId %>" type="range" min="0" /> ' + '        </div> ' + '        <!--  play,previous and next controls  --> ' + '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-playPrevious" aria-hidden="true" id="<%= playpreviousBtnId %>" title="previous"> </span> ' + '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-play" aria-hidden="true" id="<%= playpauseBtnId %>" title="Play"> </span> ' + '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-playNext" aria-hidden="true" id="<%= playforwardBtnId %>" title="next"> </span> ' + '        <!--  mute and volume bar controls  --> ' + '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-volUp" aria-hidden="true" id="<%= muteBtnId %>" title="mute"> </span> ' + '        <div class="fj-vertical-left  volumebar" id="<%= volumeDivId %>"> ' + '            <input id="<%= volumeBarId %>" class="fj-control-embd" type="range" min="0"  /> ' + '        </div> ' + '        <!--  more description of the stream   --> ' + '        <div class=" fj-vertical-left fj-text fj-short-span" title="Description" id="<%= descriptionId %>"> ' + '            <span></span> ' + '        </div> ' + '        <!--  full screen, audio and subtitles controls  --> ' + '        <span class=" fj-vertical-right fj-control-embd fj-btn  fj-icon-fullScreen " aria-hidden="true" id="<%= fullScreenBtnId %>" title="Fullscreen"> </span> ' + '        <span class=" fj-vertical-right fj-control-embd fj-btn  fj-icon-subs" aria-hidden="true" id="<%= subtitlesBtnId %>" title="Subtitles"> </span> ' + '        <span class=" fj-vertical-right fj-control-embd fj-btn  fj-icon-audios" aria-hidden="true" id="<%= audiosBtnId %>" title="Audios"> </span> ' + '        <!--  timers   --> ' + '        <div class=" fj-vertical-right fj-text " title="times"> ' + '            <span id="<%= timerId %>">0:00:00</span><span>/</span><span id="<%= durationId %>">0:00:00</span> ' + '        </div> ' + '    </div> ' + '    <!--  this will contains overlays   --> ' + '    <div id="<%= overlaysContainerDivId %>" class="fj-overlayContainer fj-hide"> ' + '    </div> ' + '</figure> ';
  }
  /**
     *
     */


  _createClass(PlayerTemplate, [{
    key: "createRegex",
    value: function createRegex() {
      var str = this.REGEX_STRING;
      var delim = String(this.DEFAULT_DELIMITER).replace(this.regExpChars, '\\$&');
      str = str.replace(/%/g, delim);
      return new RegExp(str);
    }
    /**
       *
       * @param {*} templateStr
       */

  }, {
    key: "parseTemplateText",
    value: function parseTemplateText(templateStr) {
      var reg = this.createRegex();
      var str = templateStr;
      var result = reg.exec(str);
      var arr = [];
      var firstPos;

      while (result) {
        firstPos = result.index;

        if (firstPos !== 0) {
          arr.push(str.substring(0, firstPos));
          str = str.slice(firstPos);
        }

        arr.push(result[0]);
        str = str.slice(result[0].length);
        result = reg.exec(str);
      }

      if (str) {
        arr.push(str);
      }

      return arr;
    }
    /**
       *
       * @param {*} matchedArr
       * @param {*} dataObj
       */

  }, {
    key: "generateHtml",
    value: function generateHtml(matchedArr, dataObj) {
      var _this = this;

      var newArr = [];
      this.logger.info('Generating html fr player');
      var k = 0;
      var opening = false;
      var key;
      var done = '';
      Object.keys(matchedArr).forEach(function (i) {
        if (matchedArr[i] === _this.OPEN_DELIMITER) {
          opening = true;
        } else if (matchedArr[i] === _this.CLOSE_DELIMITER) {
          opening = false;
        } else {
          if (opening === true) {
            // wr'in key
            key = matchedArr[i];
            key = key.replace(/ +/g, ''); // this.logger.info('found key  ', key);

            if (Object.prototype.hasOwnProperty.call(dataObj, key)) {
              newArr[k] = dataObj[key];
            } else {
              throw new Error(' Needed Key is Not found key for html player template :', matchedArr[i]);
            }
          } else {
            newArr[k] = matchedArr[i];
          }

          k += 1;
        }
      });
      done = newArr.join('');
      return done;
    }
    /**
       *
       * @param {*} data
       */

  }, {
    key: "GetHtml",
    value: function GetHtml(data) {
      var matches = this.parseTemplateText(this.template);
      return this.generateHtml(matches, data);
    }
  }]);

  return PlayerTemplate;
}();

module.exports = PlayerTemplate;

/***/ }),

/***/ "./src/js/utils/Eventing.js":
/*!**********************************!*\
  !*** ./src/js/utils/Eventing.js ***!
  \**********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @module Eventing
 * @description The Eventing is the class eventing mgr
 *
 */
var Eventing = /*#__PURE__*/function () {
  function Eventing() {
    _classCallCheck(this, Eventing);

    this.events = {};
  }
  /**
     *
     */


  _createClass(Eventing, [{
    key: "on",
    value: function on(name, handler) {
      if (Object.prototype.hasOwnProperty.call(this.events, name)) {
        this.events[name].push(handler);
      } else {
        this.events[name] = [handler];
      }
    }
    /**
       *
       */

  }, {
    key: "off",
    value: function off(name, handler) {
      var index = -1;
      /* This is a bit tricky, because how would you identify functions?
             This simple solution should work if you pass THE SAME handler. */

      if (!Object.prototype.hasOwnProperty.call(this.events, name)) {
        return;
      }

      index = this.events[name].indexOf(handler);

      if (index !== -1) {
        this.events[name].splice(index, 1);
      }
    }
    /**
       *
       */

  }, {
    key: "fireEvent",
    value: function fireEvent(name, args) {
      var i;

      if (!Object.prototype.hasOwnProperty.call(this.events, name)) {
        return;
      }
      /* if (!args || !args.length) {
              logger.debug(' Firing Eventing on event :', name, args);
              args = [];
          } */


      var evs = this.events[name];
      var l = evs.length;

      for (i = 0; i < l; i += 1) {
        evs[i](name, args);
      }
    }
  }]);

  return Eventing;
}();

module.exports = Eventing;

/***/ }),

/***/ "./src/js/utils/FjError.js":
/*!*********************************!*\
  !*** ./src/js/utils/FjError.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ./Logger */ "./src/js/utils/Logger.js");

__webpack_require__(/*! ../../css/player.less */ "./src/css/player.less");
/**
 * @module Overlay
 * @description The Overlays is that manage overlays of a video :
 *     it manage overlays for information ads , media or ovelay on ads video.
 */


var FjError = /*#__PURE__*/function () {
  function FjError(code, type, message, overlaysDiv) {
    _classCallCheck(this, FjError);

    this.logger = new Logger(this);
    this.errorCode = code;
    this.errorType = type;
    this.errorMsg = message;
    this.OverlayDiv = overlaysDiv;
    this.OverlayClosingDiv = null;
    this.OverlayInnerDiv = null;
    this.StartOverlay();
  }

  _createClass(FjError, [{
    key: "StopOverlay",
    value: function StopOverlay(index) {
      var el = this.OverlayDiv;
      var elClone = null; // hide the div

      this.logger.warn(index, 'you overlay  is now stopped '); // remove the click event

      el = this.OverlayDiv;
      elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
      this.OverlayDiv = elClone; // hide the overlay , empty the div

      while (this.OverlayDiv.hasChildNodes()) {
        this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
      }

      this.OverlayDiv.innerHTML = '';
      this.OverlayDiv.classList.add('fj-hide');
      this.OverlayDiv.classList.remove('over-HL-error');
    }
    /**
       * Used to show an Overlay
       */

  }, {
    key: "StartOverlay",
    value: function StartOverlay() {
      var _this = this;

      // empty the div && show the div
      this.OverlayDiv.classList.add('over-HL-error');

      while (this.OverlayDiv.hasChildNodes()) {
        this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
      }

      this.OverlayInnerDiv = document.createElement('div');
      this.OverlayClosingDiv = document.createElement('div');
      this.OverlayInnerDiv.innerHTML = "".concat('' + '<div class="fj-overlay-description">' + '   <p>').concat(this.errorMsg, "</p> ") + '</div> ' + "<div class=\"fj-overlay-link\">".concat(this.errorCode, "</div>");
      this.OverlayInnerDiv.style.cursor = 'pointer';
      this.OverlayClosingDiv.innerHTML = "".concat('' + '<div>' + '    <span class=" fj-overlay-closing  fj-control-embd fj-btn fj-icon-windowClose" aria-hidden="true"></span>' + '    <div class="fj-overlay-error">').concat(this.errorType, "</div>") + '</div>';
      this.OverlayClosingDiv.addEventListener('click', function () {
        _this.StopOverlay();
      });
      this.OverlayDiv.appendChild(this.OverlayClosingDiv);
      this.OverlayDiv.appendChild(this.OverlayInnerDiv);
      this.OverlayDiv.classList.remove('fj-hide');
      this.OverlayDiv.classList.add('over-HL');
    }
  }]);

  return FjError;
}();

module.exports = FjError;

/***/ }),

/***/ "./src/js/utils/Logger.js":
/*!********************************!*\
  !*** ./src/js/utils/Logger.js ***!
  \********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @module Logger
 * @description The Configuration is the primary module used to set configuration and .
 */
var Logger = /*#__PURE__*/function () {
  function Logger(klass) {
    var _this = this;

    _classCallCheck(this, Logger);

    this.klass = klass;
    this.debug = {};
    Object.keys(console).forEach(function (m) {
      if (typeof console[m] === 'function') {
        _this.debug[m] = console[m].bind(window.console, "".concat(klass.constructor.name, ": "));
      }
    });
    return this.debug;
  }

  _createClass(Logger, null, [{
    key: "Get",
    value: function Get(tag) {
      var debug = {};
      Object.keys(console).forEach(function (m) {
        if (typeof console[m] === 'function') {
          debug[m] = console[m].bind(window.console, "".concat(tag, ": "));
        }
      });
      return debug;
    }
  }]);

  return Logger;
}();

module.exports = Logger;

/***/ }),

/***/ "./src/js/utils/Utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/Utils.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Logger = __webpack_require__(/*! ./Logger */ "./src/js/utils/Logger.js");

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "duration",
    value: function duration(secDuration) {
      // Logger.Get('Utils').log('Asking duration for ', secDuration);
      var secNum = parseInt(secDuration, 10); // don't forget the second param

      var hours = Math.floor(secNum / 3600);
      var minutes = Math.floor((secNum - hours * 3600) / 60);
      var seconds = secNum - hours * 3600 - minutes * 60;

      if (minutes < 10) {
        minutes = "0".concat(minutes);
      }

      if (seconds < 10) {
        seconds = "0".concat(seconds);
      }

      if (hours === 0) {
        return "".concat(minutes, ":").concat(seconds);
      }

      if (hours < 10) {
        hours = "0".concat(hours);
      }

      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }
  }]);

  return Utils;
}();

module.exports = Utils;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/player.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/player.less ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_font_awesome_fonts_fontawesome_webfont_eot_v_4_7_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0");
/* harmony import */ var _node_modules_font_awesome_fonts_fontawesome_webfont_eot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/font-awesome/fonts/fontawesome-webfont.eot */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot");
/* harmony import */ var _node_modules_font_awesome_fonts_fontawesome_webfont_woff2_v_4_7_0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0");
/* harmony import */ var _node_modules_font_awesome_fonts_fontawesome_webfont_woff_v_4_7_0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0");
/* harmony import */ var _node_modules_font_awesome_fonts_fontawesome_webfont_ttf_v_4_7_0__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0");
/* harmony import */ var _node_modules_font_awesome_fonts_fontawesome_webfont_svg_v_4_7_0__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0");
// Imports









var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_eot_v_4_7_0__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_eot__WEBPACK_IMPORTED_MODULE_4__["default"], { hash: "?#iefix&v=4.7.0" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_woff2_v_4_7_0__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_woff_v_4_7_0__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_ttf_v_4_7_0__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_svg_v_4_7_0__WEBPACK_IMPORTED_MODULE_8__["default"], { hash: "#fontawesomeregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* include the Font Awesome CSS */\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: 0.2em 0.25em 0.15em;\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right {\n  margin-left: 0.3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: 0.3em;\n}\n.fa.pull-right {\n  margin-left: 0.3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #fff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n.fj-icon-leftarrow {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f060\";\n}\n.fj-icon-leftarrow:before {\n  content: \"\\f060\";\n}\n.fj-icon-download {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f019\";\n}\n.fj-icon-download:before {\n  content: \"\\f019\";\n}\n.fj-icon-share {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f1e0\";\n}\n.fj-icon-share:before {\n  content: \"\\f1e0\";\n}\n.fj-icon-play {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f04b\";\n}\n.fj-icon-play:before {\n  content: \"\\f04b\";\n}\n.fj-icon-playNext {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f051\";\n}\n.fj-icon-playNext:before {\n  content: \"\\f051\";\n}\n.fj-icon-playPrevious {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f048\";\n}\n.fj-icon-playPrevious:before {\n  content: \"\\f048\";\n}\n.fj-icon-pause {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f04c\";\n}\n.fj-icon-pause:before {\n  content: \"\\f04c\";\n}\n.fj-icon-volUp {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f028\";\n}\n.fj-icon-volUp:before {\n  content: \"\\f028\";\n}\n.fj-icon-volDown {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f027\";\n}\n.fj-icon-volDown:before {\n  content: \"\\f027\";\n}\n.fj-icon-mute {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f026\";\n}\n.fj-icon-mute:before {\n  content: \"\\f026\";\n}\n.fj-icon-audios {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f130\";\n}\n.fj-icon-audios:before {\n  content: \"\\f130\";\n}\n.fj-icon-subs {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f20a\";\n}\n.fj-icon-subs:before {\n  content: \"\\f20a\";\n}\n.fj-icon-fullScreen {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f0b2\";\n}\n.fj-icon-fullScreen:before {\n  content: \"\\f0b2\";\n}\n.fj-icon-compressScreen {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f066\";\n}\n.fj-icon-compressScreen:before {\n  content: \"\\f066\";\n}\n.fj-icon-windowClose {\n  font-family: \"FontAwesome\";\n  font-size: 1.3em;\n  content: \"\\f00d\";\n}\n.fj-icon-windowClose:before {\n  content: \"\\f00d\";\n}\n/*---------- general & component -----------*/\n.fj-player {\n  margin: 0 auto;\n}\n.fj-figure {\n  background-color: #000000;\n  color: #FFFFFF;\n  text-align: center;\n  position: relative;\n  margin: 0px auto 0px auto;\n  display: inline-block;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 12px;\n  width: 100%;\n}\n.fj-control {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #FFFFFF;\n  opacity: 75 / 100;\n  cursor: pointer;\n}\n.fj-control-embd {\n  color: #FFFFFF;\n  opacity: 75 / 100;\n  cursor: pointer;\n}\n.fj-control-embd:hover,\n.fj-control:hover {\n  opacity: 100 / 100;\n  background: #6c6c6c;\n}\n.fj-video-progress {\n  margin-bottom: 0.5%;\n  margin-top: 0.5%;\n  padding-left: 1px;\n  padding-right: 1px;\n}\n/*---------- position Horizental -----------*/\n.divTspanitleSeparator {\n  position: relative;\n  visibility: visible;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0px;\n  white-space: nowrap;\n  display: inline-block;\n  max-width: 766px;\n  font-size: 12px;\n  padding: 10px;\n}\n.fj-horizental-top {\n  z-index: 2147483647;\n  border-radius: 5px;\n  top: 5%;\n  width: 80%;\n  position: absolute;\n  left: 10%;\n}\n.fj-horizental-center {\n  z-index: 2147483647;\n  border-radius: 5px;\n  top: 45%;\n  width: 80%;\n  position: absolute;\n  left: 10%;\n}\n.fj-horizental-bottomMenus {\n  z-index: 2147483647;\n  position: absolute;\n  border-radius: 5px;\n  bottom: 22%;\n  opacity: 0.8;\n  background: rgba(10, 10, 10, 0.8);\n  width: 90%;\n  margin-left: 5%;\n  display: relative;\n}\n.fj-horizental-bottomUpper {\n  z-index: 2147483647;\n  position: absolute;\n  border-radius: 5px;\n  bottom: 12%;\n  opacity: 0.8;\n  background: rgba(10, 10, 10, 0.8);\n  width: 90%;\n  margin-left: 5%;\n  display: relative;\n}\n.fj-horizental-bottomLower {\n  z-index: 2147483647;\n  position: absolute;\n  border-radius: 5px;\n  bottom: 2%;\n  opacity: 0.8;\n  background: rgba(10, 10, 10, 0.8);\n  width: 90%;\n  left: 5%;\n  display: relative;\n}\n.fj-short-span {\n  width: 35%;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n.fj-text {\n  color: #FFFFFF;\n  cursor: default;\n  padding-right: 5px ;\n  padding-top: 1% ;\n  white-space: nowrap;\n  display: inline-block;\n}\n/*---------- position Vertical -----------*/\n.fj-vertical-separator {\n  position: relative;\n  visibility: visible;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0px;\n  white-space: nowrap;\n  display: inline-block;\n  max-width: 766px;\n  font-size: 12px;\n  padding: 10px;\n}\n.fj-vertical-left {\n  position: relative;\n  float: left;\n}\n.fj-vertical-center {\n  position: relative;\n}\n.fj-vertical-right {\n  position: relative;\n  float: right;\n}\n/*---------- types -----------*/\n.fj-video {\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n.fj-btn {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding: 5px 10px 5px 10px;\n  margin: 0.05em 0.1em 0.05em 0.1em;\n  white-space: nowrap;\n}\n.fj-big-btn {\n  color: #FF0000;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  font-size: 4em ;\n  margin-top: -15px;\n  margin-left: -15px;\n}\n.fj-title {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.fj-hide {\n  visibility: hidden;\n  display: none;\n}\n.fj-overlayContainer {\n  height: 100%;\n  margin: 0 auto;\n}\n.fj-overlay {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  float: left;\n  font-size: 12px;\n  padding: 5px;\n  border-radius: 5px;\n  z-index: 2147483647;\n  top: 20%;\n  left: 20%;\n  height: auto;\n}\n/* ----------------------- spinner  ------------------------ */\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  z-index: 2147483647;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin-top: -15px;\n  margin-left: -15px;\n  border-radius: 50%;\n  border: 3px solid #8F9B9E;\n  border-top-color: #FF0000;\n  animation: spinner 0.6s linear infinite;\n}\n/*_________________________ RANGE ________________________*/\n.volumebar {\n  margin-top: 1%;\n  padding-left: 1%;\n  padding-right: 3%;\n  border-left: none;\n  border-right: none;\n}\ninput[type=\"range\"] {\n  margin: auto;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  overflow: hidden;\n  height: 6px;\n  width: 98% !important;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type='range']::-webkit-slider-runnable-track {\n  background: #8F9B9E;\n  border-radius: 5px;\n}\ninput[type='range']::-webkit-slider-thumb,\ninput[type='range']::-webkit-media-slider-thumb {\n  background: #8F9B9E;\n  box-shadow: -100vw 0 0 100vw #FF0000;\n  border: 2px solid #3C4447;\n  color: #FF0000;\n  height: 6px;\n  border-radius: 100%;\n}\ninput[type='range']::-moz-range-track {\n  background: #8F9B9E;\n  height: 6px;\n  border-radius: 5px;\n}\ninput[type='range']::-moz-range-thumb {\n  color: #FF0000;\n  height: 6px;\n  border: 2px solid #3C4447;\n  border-radius: 5px;\n  box-shadow: -100vw 0 0 100vw #FF0000;\n}\n/* todo \ninput[type=\"range\"]::-moz-range-progress {\n     background-color: #FF0000;\n}\ninput[type='range']::-ms-fill-upper {\n    background-color: @fjProgressForeground;\n}\ninput[type='range']::-ms-fill-lower {\n    background-color: @fjThemeColor;\n}*/\n/* animation */\n.m-fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 200ms, opacity 200ms;\n}\n.m-fadeIn {\n  visibility: visible;\n  opacity: 1;\n}\n/* ---------------------- Menu style --------------------- */\n.fj-list-title {\n  cursor: default;\n  font-weight: bold;\n  padding: 5px;\n}\n.settingMenuDiv {\n  position: absolute;\n  background: rgba(10, 10, 10, 0.8);\n  bottom: 10%;\n  left: 85%;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  padding-right: 5px;\n  list-style-type: none;\n}\n.settingMenuDivnt div,\n.settingMenuDivnt ul {\n  display: inline;\n  list-style-type: none;\n}\n.fj-list {\n  list-style-type: none;\n  padding-left: 25px;\n}\n.settingMenuSubMenuRight {\n  float: left;\n  width: 100%;\n  border-left: 1px solid #2A2A2A;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.subtitles-menu-item-actif {\n  cursor: pointer;\n  text-align: left;\n  border-radius: 5px;\n  opacity: 1;\n}\n.subtitles-menu-item-actif:before {\n  content: \"\\f00c\";\n  /* FontAwesome Unicode */\n  font-family: FontAwesome;\n  display: inline-block;\n  margin-left: -1.3em;\n  /* same as padding-left set on li */\n  width: 1.3em;\n  /* same as padding-left set on li */\n}\n.subtitles-menu-item {\n  cursor: pointer;\n  text-align: left;\n  list-style-type: none;\n  opacity: 0.9;\n}\n/*------------------ OVERLAYS -------------*/\n.fj-overlays-container {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0px;\n  /*position: relative;*/\n  position: absolute;\n}\n.over-HL {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  float: left;\n  padding: 5px;\n  border-radius: 5px;\n  z-index: 2147483647;\n  /****/\n  top: 25%;\n  left: 20%;\n  height: auto;\n}\n.over-HL-error {\n  position: absolute;\n  background: rgba(255, 0, 0, 0.5);\n  float: left;\n  padding: 5px;\n  border-radius: 5px;\n  z-index: 2147483647;\n  /****/\n  top: 25%;\n  left: 20%;\n  height: auto;\n}\n.over-HR {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  float: left;\n  padding: 5px;\n  border-radius: 5px;\n  z-index: 2147483647;\n  /****/\n  top: 25%;\n  left: 80%;\n  height: auto;\n}\n.fj-overlay-closing {\n  float: right;\n  text-decoration: none;\n  display: inline-block;\n}\n.fj-overlay-annonce {\n  color: #77ff77;\n  font-size: 1em;\n  float: left;\n  text-decoration: none;\n  display: inline-block;\n}\n.fj-overlay-error {\n  color: #ff0000;\n  font-size: 1em;\n  float: left;\n  text-decoration: none;\n  display: inline-block;\n}\n.fj-overlay-link {\n  color: #ffff00;\n  font-size: 0.8em;\n  float: left;\n  text-decoration: none;\n  display: inline-block;\n}\n.fj-overlay-description {\n  font-size: 1.2em;\n  float: right;\n  text-decoration: none;\n  display: inline-block;\n}\n/* ---------------------- Thumbs style --------------------- */\n.thumbsBlockDiv {\n  position: absolute;\n  margin-bottom: 15px;\n  padding-top: 5px;\n  border-radius: 5px;\n  bottom: 8%;\n  background: rgba(10, 10, 10, 0.8);\n}\n.thumbsBlock {\n  display: table-cell;\n  border-radius: 5px;\n  vertical-align: top;\n  display: inline-block;\n}\n/*=====================================================================================================*/\nfigure[controls-hidden=false] video::-webkit-media-text-track-display {\n  position: relative !important ;\n  /*absolute*/\n  top: 80%  !important;\n  /* 0 */\n}\n/*\nvideo::cue {\n  // add style here\n}\n*/\nfigure[controls-hidden=false] video::-moz-media-text-track-display {\n  position: relative !important ;\n  /*absolute*/\n  top: 80%  !important;\n  /* 0 */\n}\n/*_________________________________ FULL SCREEN __________________________*/\n/* fullscreen */\nhtml:-ms-fullscreen {\n  width: 100%;\n}\n:-webkit-full-screen {\n  background-color: transparent;\n}\n/* hide controls on fullscreen with WebKit */\nfigure[data-fullscreen=true] video::-webkit-media-controls {\n  display: none !important;\n}\nfigure[data-fullscreen=true] video::-moz-media-controls {\n  display: none !important;\n}\nfigure[data-fullscreen=true] {\n  max-width: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nfigure[data-fullscreen=true] video {\n  height: 100%;\n}\nfigure[data-fullscreen=true] .volumebar {\n  width: 35%;\n}\nfigure[data-fullscreen=true] .fj-title {\n  font-size: 3em;\n}\nfigure[data-fullscreen=true] .fj-text {\n  font-size: 2em;\n}\nfigure[data-fullscreen=true] .fj-big-btn {\n  font-size: 8em;\n}\nfigure[data-fullscreen=true] .fj-btn {\n  font-size: 3em;\n  margin-bottom: 5px;\n}\nfigure[data-fullscreen=true] .spinner::before {\n  width: 55px;\n  height: 55px;\n  border: 5px solid #8F9B9E;\n  border-top-color: #FF0000;\n}\n", "",{"version":3,"sources":["webpack://./src/css/player.less","webpack://./node_modules/font-awesome/less/path.less","webpack://./node_modules/font-awesome/less/screen-reader.less","webpack://./node_modules/font-awesome/less/core.less","webpack://./node_modules/font-awesome/less/larger.less","webpack://./node_modules/font-awesome/less/fixed-width.less","webpack://./node_modules/font-awesome/less/list.less","webpack://./node_modules/font-awesome/less/bordered-pulled.less","webpack://./node_modules/font-awesome/less/animated.less","webpack://./node_modules/font-awesome/less/mixins.less","webpack://./node_modules/font-awesome/less/rotated-flipped.less","webpack://./node_modules/font-awesome/less/stacked.less","webpack://./node_modules/font-awesome/less/icons.less"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;;;EAGE;AACF;+BAC+B;ACH/B;EACE,0BAAA;EACA,4CAAA;EACA,4SAAA;EAMA,mBAAA;EACA,kBAAA;ADAF;AEbC;ECIC,qBAAA;EACA,6CAAA;EACA,kBAAA;EACA,oBAAA;EACA,mCAAA;EACA,kCAAA;AHYF;AACA,6DAA6D;AEtB5D;EEKC,uBAAA;EACA,mBAAA;EACA,oBAAA;AJoBF;AE3BC;EESsB,cAAA;AJqBvB;AE9BC;EEUsB,cAAA;AJuBvB;AEjCC;EEWsB,cAAA;AJyBvB;AEpCC;EEYsB,cAAA;AJ2BvB;AEvCC;EGGC,mBAAA;EACA,kBAAA;ALuCF;AE3CC;EIIC,eAAA;EACA,yBAAA;EACA,qBAAA;AN0CF;AEhDC;EIOQ,kBAAA;AN4CT;AEnDC;EIUC,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AN4CF;AE1DC;EIgBG,mBAAA;AN6CJ;AE7DC;EKIC,4BAAA;EACA,yBAAA;EACA,oBAAA;AP4DF;AElEC;EKS6B,WAAA;AP4D9B;AErEC;EKU8B,YAAA;AP8D/B;AExEC;EKagC,mBAAA;AP8DjC;AE3EC;EKciC,kBAAA;APgElC;AACA,2BAA2B;AO7D3B;EAAc,YAAA;APgEd;AO/DA;EAAa,WAAA;APkEb;AO/DE;EAAc,mBAAA;APkEhB;AOjEE;EAAe,kBAAA;APoEjB;AE3FC;EMIC,6CAAA;EACQ,qCAAA;AR0FV;AE/FC;EMSC,+CAAA;EACQ,uCAAA;ARyFV;AQtFA;EACE;IACE,+BAAA;IACQ,uBAAA;ERwFV;EQtFA;IACE,iCAAA;IACQ,yBAAA;ERwFV;AACF;AQrFA;EACE;IACE,+BAAA;IACQ,uBAAA;ERuFV;EQrFA;IACE,iCAAA;IACQ,yBAAA;ERuFV;AACF;AEvHC;EOcC,sEAAA;EACA,gCAAA;EACI,4BAAA;EACI,wBAAA;AT4GV;AE7HC;EOcC,sEAAA;EACA,iCAAA;EACI,6BAAA;EACI,yBAAA;ATkHV;AEnIC;EOcC,sEAAA;EACA,iCAAA;EACI,6BAAA;EACI,yBAAA;ATwHV;AEzIC;EOqBC,gFAAA;EACA,+BAAA;EACI,2BAAA;EACI,uBAAA;ATuHV;AE/IC;EOqBC,gFAAA;EACA,+BAAA;EACI,2BAAA;EACI,uBAAA;AT6HV;AErJC;;;;;EQkBC,YAAA;AV0IF;AE5JC;ESIC,kBAAA;EACA,qBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;AX2JF;AEpKC;;ESYC,kBAAA;EACA,OAAA;EACA,WAAA;EACA,kBAAA;AX4JF;AE3KC;ESiB4B,oBAAA;AX6J7B;AE9KC;ESkB4B,cAAA;AX+J7B;AEjLC;ESmB2B,WAAA;AXiK5B;AACA;mEACmE;AEtLlE;EUGgC,gBAAA;AZsLjC;AEzLC;EUIgC,gBAAA;AZwLjC;AE5LC;EUKiC,gBAAA;AZ0LlC;AE/LC;EUMqC,gBAAA;AZ4LtC;AElMC;EUOgC,gBAAA;AZ8LjC;AErMC;EUQ+B,gBAAA;AZgMhC;AExMC;EUSiC,gBAAA;AZkMlC;AE3MC;EUU+B,gBAAA;AZoMhC;AE9MC;EUW+B,gBAAA;AZsMhC;AEjNC;EUYmC,gBAAA;AZwMpC;AEpNC;EUa6B,gBAAA;AZ0M9B;AEvNC;EUckC,gBAAA;AZ4MnC;AE1NC;EUegC,gBAAA;AZ8MjC;AE7NC;;;EUkBgC,gBAAA;AZgNjC;AElOC;EUmBsC,gBAAA;AZkNvC;AErOC;EUoBuC,gBAAA;AZoNxC;AExOC;EUqBoC,gBAAA;AZsNrC;AE3OC;EUsBiC,gBAAA;AZwNlC;AE9OC;;EUwB8B,gBAAA;AZ0N/B;AElPC;EUyBkC,gBAAA;AZ4NnC;AErPC;EU0B+B,gBAAA;AZ8NhC;AExPC;EU2BiC,gBAAA;AZgOlC;AE3PC;EU4BkC,gBAAA;AZkOnC;AE9PC;EU6B+B,gBAAA;AZoOhC;AEjQC;EU8BmC,gBAAA;AZsOpC;AEpQC;EU+B8C,gBAAA;AZwO/C;AEvQC;EUgC4C,gBAAA;AZ0O7C;AE1QC;EUiCgC,gBAAA;AZ4OjC;AE7QC;EUkCwC,gBAAA;AZ8OzC;AEhRC;;EUoCiC,gBAAA;AZgPlC;AEpRC;EUqCkC,gBAAA;AZkPnC;AEvRC;EUsCmC,gBAAA;AZoPpC;AE1RC;EUuC+B,gBAAA;AZsPhC;AE7RC;EUwC+B,gBAAA;AZwPhC;AEhSC;EUyCqC,gBAAA;AZ0PtC;AEnSC;EU0CqC,gBAAA;AZ4PtC;AEtSC;EU2CsC,gBAAA;AZ8PvC;AEzSC;EU4CoC,gBAAA;AZgQrC;AE5SC;EU6CiC,gBAAA;AZkQlC;AE/SC;EU8CkC,gBAAA;AZoQnC;AElTC;EU+C8B,gBAAA;AZsQ/B;AErTC;EUgD+B,gBAAA;AZwQhC;AExTC;EUiD+B,gBAAA;AZ0QhC;AE3TC;EUkDmC,gBAAA;AZ4QpC;AE9TC;EUmDgC,gBAAA;AZ8QjC;AEjUC;EUoDiC,gBAAA;AZgRlC;AEpUC;EUqD+B,gBAAA;AZkRhC;AEvUC;EUsD+B,gBAAA;AZoRhC;AE1UC;EUuDiC,gBAAA;AZsRlC;AE7UC;EUwDsC,gBAAA;AZwRvC;AEhVC;EUyDqC,gBAAA;AZ0RtC;AEnVC;EU0DqC,gBAAA;AZ4RtC;AEtVC;EU2DuC,gBAAA;AZ8RxC;AEzVC;EU4DsC,gBAAA;AZgSvC;AE5VC;EU6DwC,gBAAA;AZkSzC;AE/VC;EU8D+B,gBAAA;AZoShC;AElWC;;EUgEkC,gBAAA;AZsSnC;AEtWC;EUiEiC,gBAAA;AZwSlC;AEzWC;EUkEuC,gBAAA;AZ0SxC;AE5WC;;;EUqEoC,gBAAA;AZ4SrC;AEjXC;EUsEiC,gBAAA;AZ8SlC;AEpXC;EUuEqC,gBAAA;AZgTtC;AEvXC;EUwEiC,gBAAA;AZkTlC;AE1XC;EUyE+B,gBAAA;AZoThC;AE7XC;;EU2E0C,gBAAA;AZsT3C;AEjYC;EU4EyC,gBAAA;AZwT1C;AEpYC;EU6EyC,gBAAA;AZ0T1C;AEvYC;EU8EiC,gBAAA;AZ4TlC;AE1YC;EU+EwC,gBAAA;AZ8TzC;AE7YC;EUgFwC,gBAAA;AZgUzC;AEhZC;EUiFmC,gBAAA;AZkUpC;AEnZC;EUkF+B,gBAAA;AZoUhC;AEtZC;EUmFgC,gBAAA;AZsUjC;AEzZC;EUoF+B,gBAAA;AZwUhC;AE5ZC;EUqFkC,gBAAA;AZ0UnC;AE/ZC;EUsFuC,gBAAA;AZ4UxC;AElaC;EUuFuC,gBAAA;AZ8UxC;AEraC;EUwFgC,gBAAA;AZgVjC;AExaC;EUyFuC,gBAAA;AZkVxC;AE3aC;EU0FwC,gBAAA;AZoVzC;AE9aC;EU2FsC,gBAAA;AZsVvC;AEjbC;EU4FuC,gBAAA;AZwVxC;AEpbC;EU6FuC,gBAAA;AZ0VxC;AEvbC;EU8FuC,gBAAA;AZ4VxC;AE1bC;EU+F0C,gBAAA;AZ8V3C;AE7bC;EUgGsC,gBAAA;AZgWvC;AEhcC;EUiGqC,gBAAA;AZkWtC;AEncC;EUkGyC,gBAAA;AZoW1C;AEtcC;EUmGyC,gBAAA;AZsW1C;AEzcC;EUoG8B,gBAAA;AZwW/B;AE5cC;EUqGqC,gBAAA;AZ0WtC;AE/cC;EUsGsC,gBAAA;AZ4WvC;AEldC;EUuGmC,gBAAA;AZ8WpC;AErdC;EUwGqC,gBAAA;AZgXtC;AExdC;;EU0GgC,gBAAA;AZkXjC;AE5dC;EU2GiC,gBAAA;AZoXlC;AE/dC;EU4GmC,gBAAA;AZsXpC;AEleC;EU6G+B,gBAAA;AZwXhC;AEreC;EU8GgC,gBAAA;AZ0XjC;AExeC;EU+GmC,gBAAA;AZ4XpC;AE3eC;EUgH6C,gBAAA;AZ8X9C;AE9eC;EUiH+B,gBAAA;AZgYhC;AEjfC;EUkH+B,gBAAA;AZkYhC;AEpfC;EUmH+B,gBAAA;AZoYhC;AEvfC;EUoH8B,gBAAA;AZsY/B;AE1fC;EUqHoC,gBAAA;AZwYrC;AE7fC;;EUuH+C,gBAAA;AZ0YhD;AEjgBC;EUwHgC,gBAAA;AZ4YjC;AEpgBC;EUyHmC,gBAAA;AZ8YpC;AEvgBC;EU0HiC,gBAAA;AZgZlC;AE1gBC;EU2HkC,gBAAA;AZkZnC;AE7gBC;EU4HiC,gBAAA;AZoZlC;AEhhBC;EU6HqC,gBAAA;AZsZtC;AEnhBC;EU8HuC,gBAAA;AZwZxC;AEthBC;EU+HkC,gBAAA;AZ0ZnC;AEzhBC;EUgIwC,gBAAA;AZ4ZzC;AE5hBC;EUiIiC,gBAAA;AZ8ZlC;AE/hBC;EUkIsC,gBAAA;AZgavC;AEliBC;EUmImC,gBAAA;AZkapC;AEriBC;EUoImC,gBAAA;AZoapC;AExiBC;;EUsIoC,gBAAA;AZsarC;AE5iBC;EUuIyC,gBAAA;AZwa1C;AE/iBC;EUwI0C,gBAAA;AZ0a3C;AEljBC;EUyIuC,gBAAA;AZ4axC;AErjBC;EU0I8B,gBAAA;AZ8a/B;AExjBC;;EU4I+B,gBAAA;AZgbhC;AE5jBC;EU6ImC,gBAAA;AZkbpC;AE/jBC;EU8IsC,gBAAA;AZobvC;AElkBC;EU+IwC,gBAAA;AZsbzC;AErkBC;EUgJoC,gBAAA;AZwbrC;AExkBC;EUiJkC,gBAAA;AZ0bnC;AE3kBC;EUkJmC,gBAAA;AZ4bpC;AE9kBC;EUmJ0C,gBAAA;AZ8b3C;AEjlBC;EUoJqC,gBAAA;AZgctC;AEplBC;EUqJwC,gBAAA;AZkczC;AEvlBC;EUsJkC,gBAAA;AZocnC;AE1lBC;EUuJiC,gBAAA;AZsclC;AE7lBC;EUwJwC,gBAAA;AZwczC;AEhmBC;EUyJiC,gBAAA;AZ0clC;AEnmBC;EU0JkC,gBAAA;AZ4cnC;AEtmBC;EU2JgC,gBAAA;AZ8cjC;AEzmBC;EU4JmC,gBAAA;AZgdpC;AE5mBC;EU6JqC,gBAAA;AZkdtC;AE/mBC;EU8JuC,gBAAA;AZodxC;AElnBC;EU+JkC,gBAAA;AZsdnC;AErnBC;;EUiKmC,gBAAA;AZwdpC;AEznBC;EUkKiC,gBAAA;AZ0dlC;AE5nBC;EUmKiC,gBAAA;AZ4dlC;AE/nBC;EUoKsC,gBAAA;AZ8dvC;AEloBC;;EUsK8B,gBAAA;AZge/B;AEtoBC;EUuKgC,gBAAA;AZkejC;AEzoBC;EUwKmC,gBAAA;AZoepC;AE5oBC;EUyK+B,gBAAA;AZsehC;AE/oBC;EU0KsC,gBAAA;AZwevC;AElpBC;EU2KuC,gBAAA;AZ0exC;AErpBC;EU4KsC,gBAAA;AZ4evC;AExpBC;EU6KoC,gBAAA;AZ8erC;AE3pBC;EU8KsC,gBAAA;AZgfvC;AE9pBC;EU+K4C,gBAAA;AZkf7C;AEjqBC;EUgL6C,gBAAA;AZof9C;AEpqBC;EUiL0C,gBAAA;AZsf3C;AEvqBC;EUkL4C,gBAAA;AZwf7C;AE1qBC;EUmLgC,gBAAA;AZ0fjC;AE7qBC;EUoLiC,gBAAA;AZ4flC;AEhrBC;EUqLgC,gBAAA;AZ8fjC;AEnrBC;EUsLiC,gBAAA;AZggBlC;AEtrBC;EUuLoC,gBAAA;AZkgBrC;AEzrBC;EUwLqC,gBAAA;AZogBtC;AE5rBC;;EU0LgC,gBAAA;AZsgBjC;AEhsBC;;EU4L+B,gBAAA;AZwgBhC;AEpsBC;EU6LgC,gBAAA;AZ0gBjC;AEvsBC;EU8LgC,gBAAA;AZ4gBjC;AE1sBC;;EUgMmC,gBAAA;AZ8gBpC;AE9sBC;;EUkMkC,gBAAA;AZghBnC;AEltBC;EUmMoC,gBAAA;AZkhBrC;AErtBC;;EUqMmC,gBAAA;AZohBpC;AEztBC;EUsMiC,gBAAA;AZshBlC;AE5tBC;;;EUyM+B,gBAAA;AZwhBhC;AEjuBC;EU0MkC,gBAAA;AZ0hBnC;AEpuBC;EU2MkC,gBAAA;AZ4hBnC;AEvuBC;EU4MwC,gBAAA;AZ8hBzC;AE1uBC;EU6MoC,gBAAA;AZgiBrC;AE7uBC;EU8MgC,gBAAA;AZkiBjC;AEhvBC;EU+MgC,gBAAA;AZoiBjC;AEnvBC;EUgNgC,gBAAA;AZsiBjC;AEtvBC;EUiNoC,gBAAA;AZwiBrC;AEzvBC;EUkN2C,gBAAA;AZ0iB5C;AE5vBC;EUmN6C,gBAAA;AZ4iB9C;AE/vBC;EUoNsC,gBAAA;AZ8iBvC;AElwBC;EUqNgC,gBAAA;AZgjBjC;AErwBC;EUsNqC,gBAAA;AZkjBtC;AExwBC;EUuNmC,gBAAA;AZojBpC;AE3wBC;EUwNqC,gBAAA;AZsjBtC;AE9wBC;EUyNsC,gBAAA;AZwjBvC;AEjxBC;EU0NkC,gBAAA;AZ0jBnC;AEpxBC;;EU4N+B,gBAAA;AZ4jBhC;AExxBC;;EU8NoC,gBAAA;AZ8jBrC;AE5xBC;;EUgOmC,gBAAA;AZgkBpC;AEhyBC;EUiOmC,gBAAA;AZkkBpC;AEnyBC;EUkOmC,gBAAA;AZokBpC;AEtyBC;;EUoO+B,gBAAA;AZskBhC;AE1yBC;;EUsOgC,gBAAA;AZwkBjC;AE9yBC;;EUwOqC,gBAAA;AZ0kBtC;AElzBC;EUyOoC,gBAAA;AZ4kBrC;AErzBC;EU0OqC,gBAAA;AZ8kBtC;AExzBC;;EU4O+B,gBAAA;AZglBhC;AE5zBC;EU6OkC,gBAAA;AZklBnC;AE/zBC;EU8OmC,gBAAA;AZolBpC;AEl0BC;;EUgPoC,gBAAA;AZslBrC;AEt0BC;EUiPsC,gBAAA;AZwlBvC;AEz0BC;EUkPmC,gBAAA;AZ0lBpC;AE50BC;EUmPyC,gBAAA;AZ4lB1C;AE/0BC;EUoPuC,gBAAA;AZ8lBxC;AEl1BC;EUqPkC,gBAAA;AZgmBnC;AEr1BC;EUsPsC,gBAAA;AZkmBvC;AEx1BC;EUuPmC,gBAAA;AZomBpC;AE31BC;EUwPiC,gBAAA;AZsmBlC;AE91BC;EUyPiC,gBAAA;AZwmBlC;AEj2BC;EU0PkC,gBAAA;AZ0mBnC;AEp2BC;EU2PsC,gBAAA;AZ4mBvC;AEv2BC;EU4PqC,gBAAA;AZ8mBtC;AE12BC;EU6PqC,gBAAA;AZgnBtC;AE72BC;EU8PoC,gBAAA;AZknBrC;AEh3BC;EU+PiC,gBAAA;AZonBlC;AEn3BC;EUgQsC,gBAAA;AZsnBvC;AEt3BC;EUiQ+B,gBAAA;AZwnBhC;AEz3BC;EUkQmC,gBAAA;AZ0nBpC;AE53BC;EUmQsC,gBAAA;AZ4nBvC;AE/3BC;EUoQ4C,gBAAA;AZ8nB7C;AEl4BC;EUqQ6C,gBAAA;AZgoB9C;AEr4BC;EUsQ0C,gBAAA;AZkoB3C;AEx4BC;EUuQ4C,gBAAA;AZooB7C;AE34BC;EUwQqC,gBAAA;AZsoBtC;AE94BC;EUyQsC,gBAAA;AZwoBvC;AEj5BC;EU0QmC,gBAAA;AZ0oBpC;AEp5BC;EU2QqC,gBAAA;AZ4oBtC;AEv5BC;EU4QkC,gBAAA;AZ8oBnC;AE15BC;EU6QiC,gBAAA;AZgpBlC;AE75BC;EU8QiC,gBAAA;AZkpBlC;AEh6BC;;EUgRiC,gBAAA;AZopBlC;AEp6BC;EUiRmC,gBAAA;AZspBpC;AEv6BC;EUkRqC,gBAAA;AZwpBtC;AE16BC;EUmRsC,gBAAA;AZ0pBvC;AE76BC;EUoRkC,gBAAA;AZ4pBnC;AEh7BC;EUqRiC,gBAAA;AZ8pBlC;AEn7BC;;EUuRgC,gBAAA;AZgqBjC;AEv7BC;EUwRqC,gBAAA;AZkqBtC;AE17BC;EUyRmC,gBAAA;AZoqBpC;AE77BC;EU0RwC,gBAAA;AZsqBzC;AEh8BC;EU2RkC,gBAAA;AZwqBnC;AEn8BC;EU4RkC,gBAAA;AZ0qBnC;AEt8BC;EU6RgC,gBAAA;AZ4qBjC;AEz8BC;EU8RkC,gBAAA;AZ8qBnC;AE58BC;EU+RqC,gBAAA;AZgrBtC;AE/8BC;EUgSiC,gBAAA;AZkrBlC;AEl9BC;EUiSyC,gBAAA;AZorB1C;AEr9BC;EUkSmC,gBAAA;AZsrBpC;AEx9BC;EUmS+B,gBAAA;AZwrBhC;AE39BC;;EUqSoC,gBAAA;AZ0rBrC;AE/9BC;;;EUwSsC,gBAAA;AZ4rBvC;AEp+BC;EUySyC,gBAAA;AZ8rB1C;AEv+BC;EU0S+B,gBAAA;AZgsBhC;AE1+BC;EU2SoC,gBAAA;AZksBrC;AE7+BC;;EU6SuC,gBAAA;AZosBxC;AEj/BC;EU8SmC,gBAAA;AZssBpC;AEp/BC;EU+S+B,gBAAA;AZwsBhC;AEv/BC;EUgTsC,gBAAA;AZ0sBvC;AE1/BC;EUiTsC,gBAAA;AZ4sBvC;AE7/BC;EUkToC,gBAAA;AZ8sBrC;AEhgCC;EUmTiC,gBAAA;AZgtBlC;AEngCC;EUoTuC,gBAAA;AZktBxC;AEtgCC;EUqTqC,gBAAA;AZotBtC;AEzgCC;EUsT2C,gBAAA;AZstB5C;AE5gCC;EUuTiC,gBAAA;AZwtBlC;AE/gCC;EUwTqC,gBAAA;AZ0tBtC;AElhCC;EUyT4C,gBAAA;AZ4tB7C;AErhCC;EU0TiC,gBAAA;AZ8tBlC;AExhCC;EU2TiC,gBAAA;AZguBlC;AE3hCC;EU4T8C,gBAAA;AZkuB/C;AE9hCC;EU6T+C,gBAAA;AZouBhD;AEjiCC;EU8T4C,gBAAA;AZsuB7C;AEpiCC;EU+T8C,gBAAA;AZwuB/C;AEviCC;EUgUgC,gBAAA;AZ0uBjC;AE1iCC;EUiU+B,gBAAA;AZ4uBhC;AE7iCC;EUkUiC,gBAAA;AZ8uBlC;AEhjCC;EUmUqC,gBAAA;AZgvBtC;AEnjCC;EUoUmC,gBAAA;AZkvBpC;AEtjCC;EUqUqC,gBAAA;AZovBtC;AEzjCC;EUsUqC,gBAAA;AZsvBtC;AE5jCC;EUuUqC,gBAAA;AZwvBtC;AE/jCC;EUwUsC,gBAAA;AZ0vBvC;AElkCC;EUyUiC,gBAAA;AZ4vBlC;AErkCC;EU0UuC,gBAAA;AZ8vBxC;AExkCC;EU2UyC,gBAAA;AZgwB1C;AE3kCC;EU4UmC,gBAAA;AZkwBpC;AE9kCC;EU6UqC,gBAAA;AZowBtC;AEjlCC;EU8UuC,gBAAA;AZswBxC;AEplCC;EU+UwC,gBAAA;AZwwBzC;AEvlCC;EUgV+C,gBAAA;AZ0wBhD;AE1lCC;EUiVuC,gBAAA;AZ4wBxC;AE7lCC;EUkVkC,gBAAA;AZ8wBnC;AEhmCC;;EUoV8C,gBAAA;AZgxB/C;AEpmCC;;EUsV4C,gBAAA;AZkxB7C;AExmCC;;EUwV+C,gBAAA;AZoxBhD;AE5mCC;;EU0V8B,gBAAA;AZsxB/B;AEhnCC;EU2V8B,gBAAA;AZwxB/B;AEnnCC;;EU6V8B,gBAAA;AZ0xB/B;AEvnCC;;EU+V8B,gBAAA;AZ4xB/B;AE3nCC;;;;EUmW8B,gBAAA;AZ8xB/B;AEjoCC;;;EUsW8B,gBAAA;AZgyB/B;AEtoCC;;EUwW8B,gBAAA;AZkyB/B;AE1oCC;;EU0W8B,gBAAA;AZoyB/B;AE9oCC;EU2W+B,gBAAA;AZsyBhC;AEjpCC;EU4WoC,gBAAA;AZwyBrC;AEppCC;EU6WyC,gBAAA;AZ0yB1C;AEvpCC;EU8W0C,gBAAA;AZ4yB3C;AE1pCC;EU+W0C,gBAAA;AZ8yB3C;AE7pCC;EUgX2C,gBAAA;AZgzB5C;AEhqCC;EUiX2C,gBAAA;AZkzB5C;AEnqCC;EUkX4C,gBAAA;AZozB7C;AEtqCC;EUmXoC,gBAAA;AZszBrC;AEzqCC;EUoXsC,gBAAA;AZwzBvC;AE5qCC;EUqXyC,gBAAA;AZ0zB1C;AE/qCC;EUsXkC,gBAAA;AZ4zBnC;AElrCC;EUuX+B,gBAAA;AZ8zBhC;AErrCC;EUwXsC,gBAAA;AZg0BvC;AExrCC;EUyXuC,gBAAA;AZk0BxC;AE3rCC;EU0XkC,gBAAA;AZo0BnC;AE9rCC;EU2XyC,gBAAA;AZs0B1C;AEjsCC;EU4XoC,gBAAA;AZw0BrC;AEpsCC;EU6XiC,gBAAA;AZ00BlC;AEvsCC;EU8X8B,gBAAA;AZ40B/B;AE1sCC;EU+XoC,gBAAA;AZ80BrC;AE7sCC;EUgY2C,gBAAA;AZg1B5C;AEhtCC;EUiYiC,gBAAA;AZk1BlC;AEntCC;EUkYwC,gBAAA;AZo1BzC;AEttCC;EUmY0C,gBAAA;AZs1B3C;AEztCC;EUoYwC,gBAAA;AZw1BzC;AE5tCC;EUqY0C,gBAAA;AZ01B3C;AE/tCC;EUsY2C,gBAAA;AZ41B5C;AEluCC;EUuYgC,gBAAA;AZ81BjC;AEruCC;EUwYkC,gBAAA;AZg2BnC;AExuCC;EUyYkC,gBAAA;AZk2BnC;AE3uCC;EU0YgC,gBAAA;AZo2BjC;AE9uCC;EU2YmC,gBAAA;AZs2BpC;AEjvCC;EU4YgC,gBAAA;AZw2BjC;AEpvCC;EU6YqC,gBAAA;AZ02BtC;AEvvCC;EU8YiC,gBAAA;AZ42BlC;AE1vCC;EU+YiC,gBAAA;AZ82BlC;AE7vCC;EUgZ+B,gBAAA;AZg3BhC;AEhwCC;;EUkZmC,gBAAA;AZk3BpC;AEpwCC;EUmZgC,gBAAA;AZo3BjC;AEvwCC;EUoZiC,gBAAA;AZs3BlC;AE1wCC;EUqZkC,gBAAA;AZw3BnC;AE7wCC;EUsZ8B,gBAAA;AZ03B/B;AEhxCC;EUuZ6B,gBAAA;AZ43B9B;AEnxCC;EUwZgC,gBAAA;AZ83BjC;AEtxCC;EUyZiC,gBAAA;AZg4BlC;AEzxCC;EU0ZoC,gBAAA;AZk4BrC;AE5xCC;EU2ZyC,gBAAA;AZo4B1C;AE/xCC;EU4Z+C,gBAAA;AZs4BhD;AElyCC;EU6Z8C,gBAAA;AZw4B/C;AEryCC;;EU+Z8C,gBAAA;AZ04B/C;AEzyCC;EUgauC,gBAAA;AZ44BxC;AE5yCC;EUiaqC,gBAAA;AZ84BtC;AE/yCC;EUkauC,gBAAA;AZg5BxC;AElzCC;;EUoa8B,gBAAA;AZk5B/B;AEtzCC;EUqawC,gBAAA;AZo5BzC;AEzzCC;EUsawC,gBAAA;AZs5BzC;AE5zCC;EUuagC,gBAAA;AZw5BjC;AE/zCC;EUwa0C,gBAAA;AZ05B3C;AEl0CC;EUyaoC,gBAAA;AZ45BrC;AEr0CC;EU0aiC,gBAAA;AZ85BlC;AEx0CC;;;EU6aqC,gBAAA;AZg6BtC;AE70CC;;EU+ayC,gBAAA;AZk6B1C;AEj1CC;EUgbgC,gBAAA;AZo6BjC;AEp1CC;EUibiC,gBAAA;AZs6BlC;AEv1CC;EUkbiC,gBAAA;AZw6BlC;AE11CC;EUmbwC,gBAAA;AZ06BzC;AE71CC;EUob6C,gBAAA;AZ46B9C;AEh2CC;EUqbsC,gBAAA;AZ86BvC;AEn2CC;EUsboC,gBAAA;AZg7BrC;AEt2CC;EUub+B,gBAAA;AZk7BhC;AEz2CC;EUwbwC,gBAAA;AZo7BzC;AE52CC;EUybyC,gBAAA;AZs7B1C;AE/2CC;EU0biC,gBAAA;AZw7BlC;AEl3CC;EU2biC,gBAAA;AZ07BlC;AEr3CC;EU4bmC,gBAAA;AZ47BpC;AEx3CC;EU6b8B,gBAAA;AZ87B/B;AE33CC;EU8bmC,gBAAA;AZg8BpC;AE93CC;EU+bgC,gBAAA;AZk8BjC;AEj4CC;EUgc8B,gBAAA;AZo8B/B;AEp4CC;EUicgC,gBAAA;AZs8BjC;AEv4CC;EUkc+B,gBAAA;AZw8BhC;AE14CC;EUmcgC,gBAAA;AZ08BjC;AE74CC;EUockC,gBAAA;AZ48BnC;AEh5CC;EUqcyC,gBAAA;AZ88B1C;AEn5CC;EUscgC,gBAAA;AZg9BjC;AEt5CC;EUucuC,gBAAA;AZk9BxC;AEz5CC;EUwckC,gBAAA;AZo9BnC;AE55CC;;EU0c8B,gBAAA;AZs9B/B;AEh6CC;;EU4c+B,gBAAA;AZw9BhC;AEp6CC;EU6c+B,gBAAA;AZ09BhC;AEv6CC;EU8ckC,gBAAA;AZ49BnC;AE16CC;EU+cqC,gBAAA;AZ89BtC;AE76CC;EUgdqC,gBAAA;AZg+BtC;AEh7CC;EUidmC,gBAAA;AZk+BpC;AEn7CC;EUkdqC,gBAAA;AZo+BtC;AEt7CC;EUmdsC,gBAAA;AZs+BvC;AEz7CC;EUoduC,gBAAA;AZw+BxC;AE57CC;EUqd4C,gBAAA;AZ0+B7C;AE/7CC;;;EUwduC,gBAAA;AZ4+BxC;AEp8CC;;EU0dyC,gBAAA;AZ8+B1C;AEx8CC;;EU4duC,gBAAA;AZg/BxC;AE58CC;;EU8duC,gBAAA;AZk/BxC;AEh9CC;EU+dsC,gBAAA;AZo/BvC;AEn9CC;EUge+B,gBAAA;AZs/BhC;AEt9CC;EUiekC,gBAAA;AZw/BnC;AEz9CC;EUkemC,gBAAA;AZ0/BpC;AE59CC;;;;;EUueoC,gBAAA;AZ4/BrC;AEn+CC;EUweyC,gBAAA;AZ8/B1C;AEt+CC;;;EU2egC,gBAAA;AZggCjC;AE3+CC;;EU6eiC,gBAAA;AZkgClC;AE/+CC;EU8eqC,gBAAA;AZogCtC;AEl/CC;EU+e8B,gBAAA;AZsgC/B;AEr/CC;;;EUkfsC,gBAAA;AZwgCvC;AE1/CC;EUmfwC,gBAAA;AZ0gCzC;AE7/CC;EUof6B,gBAAA;AZ4gC9B;AEhgDC;;EUsfiC,gBAAA;AZ8gClC;AEpgDC;;EUwfsC,gBAAA;AZghCvC;AExgDC;;EU0fwC,gBAAA;AZkhCzC;AE5gDC;EU2fkC,gBAAA;AZohCnC;AE/gDC;EU4fsC,gBAAA;AZshCvC;AElhDC;EU6fiC,gBAAA;AZwhClC;AErhDC;EU8foC,gBAAA;AZ0hCrC;AExhDC;EU+fkC,gBAAA;AZ4hCnC;AE3hDC;EUggBoC,gBAAA;AZ8hCrC;AE9hDC;EUigB2C,gBAAA;AZgiC5C;AEjiDC;EUkgB+B,gBAAA;AZkiChC;AEpiDC;;EUogBmC,gBAAA;AZoiCpC;AExiDC;EUqgB8B,gBAAA;AZsiC/B;AE3iDC;EUsgBqC,gBAAA;AZwiCtC;AE9iDC;EUugB+B,gBAAA;AZ0iChC;AEjjDC;EUwgBqC,gBAAA;AZ4iCtC;AEpjDC;EUygBiC,gBAAA;AZ8iClC;AEvjDC;EU0gB+B,gBAAA;AZgjChC;AE1jDC;EU2gBsC,gBAAA;AZkjCvC;AE7jDC;EU4gB+B,gBAAA;AZojChC;AEhkDC;EU6gBqC,gBAAA;AZsjCtC;AEnkDC;EU8gBiC,gBAAA;AZwjClC;AEtkDC;EU+gBwC,gBAAA;AZ0jCzC;AEzkDC;EUghBkC,gBAAA;AZ4jCnC;AE5kDC;EUihBwC,gBAAA;AZ8jCzC;AE/kDC;EUkhBsC,gBAAA;AZgkCvC;AEllDC;EUmhBkC,gBAAA;AZkkCnC;AErlDC;EUohBoC,gBAAA;AZokCrC;AExlDC;EUqhBoC,gBAAA;AZskCrC;AE3lDC;EUshBqC,gBAAA;AZwkCtC;AE9lDC;EUuhBuC,gBAAA;AZ0kCxC;AEjmDC;EUwhBgC,gBAAA;AZ4kCjC;AEpmDC;EUyhBoC,gBAAA;AZ8kCrC;AEvmDC;EU0hB6B,gBAAA;AZglC9B;AE1mDC;EU2hBqC,gBAAA;AZklCtC;AE7mDC;EU4hBsC,gBAAA;AZolCvC;AEhnDC;EU6hBwC,gBAAA;AZslCzC;AEnnDC;EU8hBqC,gBAAA;AZwlCtC;AEtnDC;EU+hBoC,gBAAA;AZ0lCrC;AEznDC;EUgiBqC,gBAAA;AZ4lCtC;AE5nDC;EUiiBiC,gBAAA;AZ8lClC;AE/nDC;EUkiBwC,gBAAA;AZgmCzC;AEloDC;EUmiBqC,gBAAA;AZkmCtC;AEroDC;EUoiBoC,gBAAA;AZomCrC;AExoDC;EUqiBkC,gBAAA;AZsmCnC;AE3oDC;EUsiB8B,gBAAA;AZwmC/B;AE9oDC;EUuiBkC,gBAAA;AZ0mCnC;AEjpDC;EUwiBoC,gBAAA;AZ4mCrC;AEppDC;EUyiB6B,gBAAA;AZ8mC9B;AEvpDC;;;EU4iB8B,gBAAA;AZgnC/B;AE5pDC;EU6iBmC,gBAAA;AZknCpC;AE/pDC;EU8iBqC,gBAAA;AZonCtC;AElqDC;EU+iByC,gBAAA;AZsnC1C;AErqDC;EUgjBmC,gBAAA;AZwnCpC;AExqDC;EUijBmC,gBAAA;AZ0nCpC;AE3qDC;EUkjBkC,gBAAA;AZ4nCnC;AE9qDC;EUmjBiC,gBAAA;AZ8nClC;AEjrDC;EUojBuC,gBAAA;AZgoCxC;AEprDC;EUqjBsC,gBAAA;AZkoCvC;AEvrDC;EUsjBmC,gBAAA;AZooCpC;AE1rDC;EUujBoC,gBAAA;AZsoCrC;AE7rDC;EUwjB0C,gBAAA;AZwoC3C;AEhsDC;EUyjBkC,gBAAA;AZ0oCnC;AEnsDC;EU0jB+B,gBAAA;AZ4oChC;AEtsDC;EU2jBsC,gBAAA;AZ8oCvC;AEzsDC;EU4jBqC,gBAAA;AZgpCtC;AE5sDC;EU6jBsC,gBAAA;AZkpCvC;AE/sDC;EU8jBoC,gBAAA;AZopCrC;AEltDC;EU+jBgC,gBAAA;AZspCjC;AErtDC;EUgkB+B,gBAAA;AZwpChC;AExtDC;EUikBkC,gBAAA;AZ0pCnC;AE3tDC;;EUmkBsC,gBAAA;AZ4pCvC;AE/tDC;EUokB0C,gBAAA;AZ8pC3C;AEluDC;EUqkBuC,gBAAA;AZgqCxC;AEruDC;EUskBsC,gBAAA;AZkqCvC;AExuDC;EUukBqC,gBAAA;AZoqCtC;AE3uDC;EUwkBsC,gBAAA;AZsqCvC;AE9uDC;EUykBwC,gBAAA;AZwqCzC;AEjvDC;EU0kBwC,gBAAA;AZ0qCzC;AEpvDC;EU2kBiC,gBAAA;AZ4qClC;AEvvDC;EU4kBqC,gBAAA;AZ8qCtC;AE1vDC;EU6kB4C,gBAAA;AZgrC7C;AE7vDC;EU8kBsC,gBAAA;AZkrCvC;AEhwDC;EU+kBmC,gBAAA;AZorCpC;AEnwDC;EUglBiC,gBAAA;AZsrClC;AEtwDC;EUilBoC,gBAAA;AZwrCrC;AEzwDC;EUklBqC,gBAAA;AZ0rCtC;AE5wDC;;EUolB8B,gBAAA;AZ4rC/B;AEhxDC;EUqlBkC,gBAAA;AZ8rCnC;AEnxDC;EUslBgC,gBAAA;AZgsCjC;AEtxDC;EUulBiC,gBAAA;AZksClC;AEzxDC;EUwlBiC,gBAAA;AZosClC;AE5xDC;;EU0lBuC,gBAAA;AZssCxC;AEhyDC;EU2lBwC,gBAAA;AZwsCzC;AEnyDC;EU4lBmC,gBAAA;AZ0sCpC;AEtyDC;EU6lBuC,gBAAA;AZ4sCxC;AEzyDC;;;EUgmBuC,gBAAA;AZ8sCxC;AE9yDC;;EUkmBiD,gBAAA;AZgtClD;AElzDC;;EUomBuC,gBAAA;AZktCxC;AEtzDC;;EUsmB0C,gBAAA;AZotC3C;AE1zDC;;EUwmBwC,gBAAA;AZstCzC;AE9zDC;EUymBwC,gBAAA;AZwtCzC;AEj0DC;EU0mBmC,gBAAA;AZ0tCpC;AEp0DC;EU2mBuC,gBAAA;AZ4tCxC;AEv0DC;EU4mByC,gBAAA;AZ8tC1C;AE10DC;EU6mBsC,gBAAA;AZguCvC;AE70DC;EU8mBwC,gBAAA;AZkuCzC;AEh1DC;EU+mBiC,gBAAA;AZouClC;AEn1DC;EUgnByC,gBAAA;AZsuC1C;AEt1DC;EUinBgC,gBAAA;AZwuCjC;AEz1DC;EUknBwC,gBAAA;AZ0uCzC;AE51DC;EUmnBsC,gBAAA;AZ4uCvC;AE/1DC;;EUqnB0C,gBAAA;AZ8uC3C;AEn2DC;;EUunByC,gBAAA;AZgvC1C;AEv2DC;;EUynBwC,gBAAA;AZkvCzC;AE32DC;EU0nBoC,gBAAA;AZovCrC;AE92DC;;EU4nBsC,gBAAA;AZsvCvC;AEl3DC;;EU8nBuC,gBAAA;AZwvCxC;AEt3DC;EU+nB0C,gBAAA;AZ0vC3C;AEz3DC;EUgoBwC,gBAAA;AZ4vCzC;AE53DC;EUioBuC,gBAAA;AZ8vCxC;AE/3DC;EUkoByC,gBAAA;AZgwC1C;AEl4DC;EUmoBuC,gBAAA;AZkwCxC;AEr4DC;EUooBoC,gBAAA;AZowCrC;AEx4DC;EUqoBqC,gBAAA;AZswCtC;AE34DC;EUsoB2C,gBAAA;AZwwC5C;AE94DC;EUuoB6B,gBAAA;AZ0wC9B;AEj5DC;EUwoBoC,gBAAA;AZ4wCrC;AEp5DC;EUyoBsC,gBAAA;AZ8wCvC;AEv5DC;EU0oBwC,gBAAA;AZgxCzC;AE15DC;EU2oB+C,gBAAA;AZkxChD;AE75DC;EU4oBqC,gBAAA;AZoxCtC;AEh6DC;EU6oBsC,gBAAA;AZsxCvC;AEn6DC;EU8oBiC,gBAAA;AZwxClC;AEt6DC;EU+oBiC,gBAAA;AZ0xClC;AEz6DC;EUgpBkC,gBAAA;AZ4xCnC;AE56DC;EUipBgC,gBAAA;AZ8xCjC;AE/6DC;EUkpB4C,gBAAA;AZgyC7C;AEl7DC;;EUopBqC,gBAAA;AZkyCtC;AEt7DC;EUqpBiC,gBAAA;AZoyClC;AEz7DC;EUspBgC,gBAAA;AZsyCjC;AE57DC;EUupBiC,gBAAA;AZwyClC;AE/7DC;EUwpB0C,gBAAA;AZ0yC3C;AEl8DC;EUypB2C,gBAAA;AZ4yC5C;AEr8DC;EU0pB2C,gBAAA;AZ8yC5C;AEx8DC;EU2pB2C,gBAAA;AZgzC5C;AE38DC;EU4pBmC,gBAAA;AZkzCpC;AE98DC;EU6pBkC,gBAAA;AZozCnC;AEj9DC;EU8pBoC,gBAAA;AZszCrC;AEp9DC;EU+pBgC,gBAAA;AZwzCjC;AEv9DC;EUgqB8B,gBAAA;AZ0zC/B;AE19DC;EUiqBqC,gBAAA;AZ4zCtC;AE79DC;EUkqBuC,gBAAA;AZ8zCxC;AEh+DC;EUmqBgC,gBAAA;AZg0CjC;AEn+DC;EUoqBgC,gBAAA;AZk0CjC;AEt+DC;EUqqBoC,gBAAA;AZo0CrC;AEz+DC;EUsqBoC,gBAAA;AZs0CrC;AE5+DC;EUuqBuC,gBAAA;AZw0CxC;AE/+DC;EUwqB+B,gBAAA;AZ00ChC;AEl/DC;EUyqB0C,gBAAA;AZ40C3C;AEr/DC;EU0qBmC,gBAAA;AZ80CpC;AEx/DC;EU2qB+B,gBAAA;AZg1ChC;AE3/DC;EU4qBuC,gBAAA;AZk1CxC;AE9/DC;EU6qB8B,gBAAA;AZo1C/B;AEjgEC;EU8qBuC,gBAAA;AZs1CxC;AEpgEC;EU+qBmC,gBAAA;AZw1CpC;AEvgEC;EUgrBiC,gBAAA;AZ01ClC;AE1gEC;EUirBuC,gBAAA;AZ41CxC;AE7gEC;EUkrByC,gBAAA;AZ81C1C;AEhhEC;EUmrBsC,gBAAA;AZg2CvC;AEnhEC;EUorBwC,gBAAA;AZk2CzC;AEthEC;EUqrBuC,gBAAA;AZo2CxC;AEzhEC;EUsrB0C,gBAAA;AZs2C3C;AE5hEC;EUurBkC,gBAAA;AZw2CnC;AE/hEC;EUwrBoC,gBAAA;AZ02CrC;AEliEC;EUyrBsC,gBAAA;AZ42CvC;AEriEC;EU0rBkC,gBAAA;AZ82CnC;AExiEC;EU2rBiC,gBAAA;AZg3ClC;AE3iEC;EU4rBqC,gBAAA;AZk3CtC;AE9iEC;EU6rBkC,gBAAA;AZo3CnC;AEjjEC;EU8rBiC,gBAAA;AZs3ClC;AEpjEC;EU+rB2C,gBAAA;AZw3C5C;AEvjEC;EUgsByC,gBAAA;AZ03C1C;AE1jEC;EUisB4C,gBAAA;AZ43C7C;AE7jEC;EUksBgC,gBAAA;AZ83CjC;AEhkEC;EUmsB4C,gBAAA;AZg4C7C;AEnkEC;EUosB+C,gBAAA;AZk4ChD;AEtkEC;EUqsBkC,gBAAA;AZo4CnC;AEzkEC;EUssBsD,gBAAA;AZs4CvD;AE5kEC;;EUwsB8D,gBAAA;AZw4C/D;AEhlEC;;;EU2sB+B,gBAAA;AZ04ChC;AErlEC;EU4sBgC,gBAAA;AZ44CjC;AExlEC;EU6sBkC,gBAAA;AZ84CnC;AE3lEC;;EU+sBwC,gBAAA;AZg5CzC;AE/lEC;EUgtBqC,gBAAA;AZk5CtC;AElmEC;EUitBiC,gBAAA;AZo5ClC;AErmEC;EUktBwC,gBAAA;AZs5CzC;AExmEC;EUmtBmC,gBAAA;AZw5CpC;AE3mEC;EUotByC,gBAAA;AZ05C1C;AE9mEC;EUqtB0C,gBAAA;AZ45C3C;AEjnEC;EUstBqC,gBAAA;AZ85CtC;AEpnEC;EUutBsC,gBAAA;AZg6CvC;AEvnEC;EUwtBgC,gBAAA;AZk6CjC;AE1nEC;EUytBoC,gBAAA;AZo6CrC;AE7nEC;;EU2tB+C,gBAAA;AZs6ChD;AEjoEC;;EU6tBuC,gBAAA;AZw6CxC;AEroEC;EU8tBsC,gBAAA;AZ06CvC;AExoEC;EU+tBwC,gBAAA;AZ46CzC;AE3oEC;EUguB0C,gBAAA;AZ86C3C;AE9oEC;EUiuBiC,gBAAA;AZg7ClC;AEjpEC;EUkuBuC,gBAAA;AZk7CxC;AEppEC;EUmuByC,gBAAA;AZo7C1C;AEvpEC;;EUquBuC,gBAAA;AZs7CxC;AE3pEC;;EUuuByC,gBAAA;AZw7C1C;AE/pEC;EUwuBsC,gBAAA;AZ07CvC;AElqEC;EUyuBwC,gBAAA;AZ47CzC;AErqEC;EU0uBiC,gBAAA;AZ87ClC;AExqEC;EU2uBmC,gBAAA;AZg8CpC;AE3qEC;;EU6uBkC,gBAAA;AZk8CnC;AE/qEC;;EU+uBoC,gBAAA;AZo8CrC;AEnrEC;EUgvBgC,gBAAA;AZs8CjC;AEtrEC;EUivByC,gBAAA;AZw8C1C;AEzrEC;EUkvBmC,gBAAA;AZ08CpC;AE5rEC;;;EUqvB2C,gBAAA;AZ48C5C;AEjsEC;;EUuvBqD,gBAAA;AZ88CtD;AErsEC;;EUyvB2C,gBAAA;AZg9C5C;AEzsEC;;EU2vB8C,gBAAA;AZk9C/C;AE7sEC;;EU6vB4C,gBAAA;AZo9C7C;AEjtEC;EU8vBiC,gBAAA;AZs9ClC;AEptEC;;;EUiwB+B,gBAAA;AZw9ChC;AEztEC;EUkwBkC,gBAAA;AZ09CnC;AE5tEC;EUmwB0C,gBAAA;AZ49C3C;AE/tEC;EUowB0C,gBAAA;AZ89C3C;AEluEC;EUqwByC,gBAAA;AZg+C1C;AEruEC;;EUuwBuC,gBAAA;AZk+CxC;AEzuEC;;EUywByC,gBAAA;AZo+C1C;AE7uEC;EU0wBmC,gBAAA;AZs+CpC;AEhvEC;EU2wB+B,gBAAA;AZw+ChC;AEnvEC;EU4wB+B,gBAAA;AZ0+ChC;AEtvEC;EU6wB+B,gBAAA;AZ4+ChC;AEzvEC;EU8wBkC,gBAAA;AZ8+CnC;AE5vEC;EU+wBkC,gBAAA;AZg/CnC;AE/vEC;EUgxBoC,gBAAA;AZk/CrC;AElwEC;EUixBsC,gBAAA;AZo/CvC;AErwEC;EUkxBsC,gBAAA;AZs/CvC;AExwEC;EUmxBqC,gBAAA;AZw/CtC;AE3wEC;EUoxBiC,gBAAA;AZ0/ClC;AE3wEA;EO8BE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;ATgvEF;AStuEE;;EAEE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;ATwuEJ;AEjyEC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAqwET;AEtyEC;EFmC6B,gBAAA;AAswE9B;AEzyEC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA6wET;AE9yEC;EFmC6B,gBAAA;AA8wE9B;AEjzEC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAqxET;AEtzEC;EFmC6B,gBAAA;AAsxE9B;AEzzEC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA6xET;AE9zEC;EFmC6B,gBAAA;AA8xE9B;AEj0EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAqyET;AEt0EC;EFmC6B,gBAAA;AAsyE9B;AEz0EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA6yET;AE90EC;EFmC6B,gBAAA;AA8yE9B;AEj1EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAqzET;AEt1EC;EFmC6B,gBAAA;AAszE9B;AEz1EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA6zET;AE91EC;EFmC6B,gBAAA;AA8zE9B;AEj2EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAq0ET;AEt2EC;EFmC6B,gBAAA;AAs0E9B;AEz2EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA60ET;AE92EC;EFmC6B,gBAAA;AA80E9B;AEj3EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAq1ET;AEt3EC;EFmC6B,gBAAA;AAs1E9B;AEz3EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA61ET;AE93EC;EFmC6B,gBAAA;AA81E9B;AEj4EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAq2ET;AEt4EC;EFmC6B,gBAAA;AAs2E9B;AEz4EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AA62ET;AE94EC;EFmC6B,gBAAA;AA82E9B;AEj5EC;EF+BQ,0BAAA;EACA,gBAAA;EACA,gBAAA;AAq3ET;AEt5EC;EFmC6B,gBAAA;AAs3E9B;AACA,6CAA6C;AA92E7C;EACK,cAAA;AAg3EL;AA92EC;EACI,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,qBAAA;EACA,4DAAA;EACA,eAAA;EACA,WAAA;AAg3EL;AA92EC;EACI,oCAAA;EACA,cAAA;EApBH,iBAAA;EAsBG,eAAA;AAg3EL;AA92EC;EACI,cAAA;EAzBH,iBAAA;EA2BG,eAAA;AAg3EL;AA92EC;;EA7BC,kBAAA;EAgCG,mBAAA;AAg3EL;AA92EA;EACI,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAg3EJ;AACA,6CAA6C;AA92E5C;EACI,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AAg3EL;AA92EC;EACI,mBAAA;EACA,kBAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;AAg3EL;AA92EC;EACI,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;AAg3EL;AA92EC;EACI,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iCAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AAg3EL;AA92EC;EACI,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iCAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AAg3EL;AA92EC;EACI,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,UAAA;EACA,QAAA;EACA,iBAAA;AAg3EL;AA92EC;EACG,UAAA;EACA,2BAAA;EACA,uBAAA;AAg3EJ;AA92EC;EACI,cAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACD,qBAAA;AAg3EJ;AACA,2CAA2C;AA92E1C;EACI,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AAg3EL;AA92EC;EACI,kBAAA;EACA,WAAA;AAg3EL;AA92EC;EACI,kBAAA;AAg3EL;AA92EC;EACI,kBAAA;EACA,YAAA;AAg3EL;AACA,+BAA+B;AA92E9B;EACI,oCAAA;EACA,8BAAA;EACA,2BAAA;EACA,yBAAA;EACA,sBAAA;AAg3EL;AA92EC;EACI,2BAAA;EACA,4BAAA;EACA,+BAAA;EACA,8BAAA;EACA,0BAAA;EAEA,iCAAA;EAEA,mBAAA;AA82EL;AA32EC;EACI,cAAA;EACA,2BAAA;EACA,4BAAA;EACA,+BAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AA62EL;AA32EA;EACA,oCAAA;AA62EA;AA32EC;EACI,kBAAA;EACA,aAAA;AA62EL;AA32EC;EACI,YAAA;EACA,cAAA;AA62EL;AA32EC;EACI,kBAAA;EACA,8BAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;AA62EL;AACA,8DAA8D;AAx2E7D;EACI;IACI,yBAAA;EA02EP;AACF;AAv2EC;EACI,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,yBAAA;EACA,uCAAA;AAy2EL;AACA,2DAA2D;AAt2E1D;EACI,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAw2EL;AAr2EC;EACI,YAAA;EACD,wBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AAu2EJ;AAr2EC;EACI,aAAA;AAu2EL;AAp2EC;EACG,mBAAA;EACA,kBAAA;AAs2EJ;AAp2EA;;EAEI,mBAAA;EACA,oCAAA;EACA,yBAAA;EACA,cAAA;EACA,WAAA;EACA,mBAAA;AAs2EJ;AAn2EA;EACI,mBAAA;EACA,WAAA;EACA,kBAAA;AAq2EJ;AAn2EA;EACI,cAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,oCAAA;AAq2EJ;AACA;;;;;;;;;EASE;AACF,cAAc;AAj2Ed;EACI,kBAAA;EACA,UAAA;EACA,2CAAA;AAm2EJ;AAh2EA;EACI,mBAAA;EACA,UAAA;AAk2EJ;AACA,4DAA4D;AAh2E3D;EACI,eAAA;EACA,iBAAA;EACA,YAAA;AAk2EL;AAh2EC;EACI,kBAAA;EACA,iCAAA;EACA,WAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAk2EL;AAh2EC;;EAEI,eAAA;EACA,qBAAA;AAk2EL;AAh2EC;EACI,qBAAA;EACA,kBAAA;AAk2EL;AAh2EC;EACI,WAAA;EACA,WAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;AAk2EL;AAh2EC;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AAk2EL;AAh2EC;EACI,gBAAA;EAk2EH,wBAAwB;EAh2ErB,wBAAA;EACA,qBAAA;EACA,mBAAA;EAk2EH,mCAAmC;EAh2EhC,YAAA;EAk2EH,mCAAmC;AACrC;AAh2EC;EACI,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,YAAA;AAk2EL;AACA,4CAA4C;AAh2E3C;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EAk2EH,sBAAsB;EAh2EnB,kBAAA;AAk2EL;AAh2EC;EACI,kBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EAk2EH,KAAK;EAh2EF,QAAA;EACA,SAAA;EACA,YAAA;AAk2EL;AA/1EC;EACI,kBAAA;EACD,gCAAA;EACC,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EAi2EH,KAAK;EA/1EF,QAAA;EACA,SAAA;EACA,YAAA;AAi2EL;AA91EC;EACI,kBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EAg2EH,KAAK;EA91EF,QAAA;EACA,SAAA;EACA,YAAA;AAg2EL;AA91EC;EACI,YAAA;EACA,qBAAA;EACA,qBAAA;AAg2EL;AA91EC;EACI,cAAA;EACA,cAAA;EACA,WAAA;EACA,qBAAA;EACA,qBAAA;AAg2EL;AA91EC;EACI,cAAA;EACA,cAAA;EACA,WAAA;EACA,qBAAA;EACA,qBAAA;AAg2EL;AA91EC;EACI,cAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;EACA,qBAAA;AAg2EL;AA91EC;EACI,gBAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA;AAg2EL;AACA,8DAA8D;AA91E7D;EACI,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,iCAAA;AAg2EL;AA91EC;EACI,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;AAg2EL;AACA,wGAAwG;AA91ExG;EACI,8BAAA;EAg2EF,WAAW;EA/1ET,oBAAA;EAi2EF,MAAM;AACR;AACA;;;;CAIC;AAh2ED;EACI,8BAAA;EAk2EF,WAAW;EAj2ET,oBAAA;EAm2EF,MAAM;AACR;AACA,2EAA2E;AAC3E,eAAe;AA/1Ef;EACI,WAAA;AAi2EJ;AA91EC;EACG,6BAAA;AAg2EJ;AACA,4CAA4C;AA31E5C;EACI,wBAAA;AA61EJ;AA31EA;EACI,wBAAA;AA61EJ;AA31EA;EACI,eAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AA61EJ;AA31EA;EACI,YAAA;AA61EJ;AA31EA;EACG,UAAA;AA61EH;AA31EA;EACI,cAAA;AA61EJ;AA31EA;EACI,cAAA;AA61EJ;AA31EA;EACI,cAAA;AA61EJ;AA31EA;EACI,cAAA;EACA,kBAAA;AA61EJ;AA31EA;EACI,WAAA;EACA,YAAA;EACA,yBAAA;EACA,yBAAA;AA61EJ","sourcesContent":["/* include the Font Awesome CSS */\n@import \"../../node_modules/font-awesome/less/font-awesome.less\";\n///////////////////////////////////////////////////////////////////////////////\n// global definitions \n@fjThemeColor:#FF0000 ;\n@fjProgressForeground: #8F9B9E;\n@fjProgressHeight:6px;\n@fjProgressBorder: #3C4447;\n@fjThemeFontFamily: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n@fjThemeFontSize: 12px;\n@fjThemeTextColor: #FFFFFF;\n@fjBackgroundPlayerColor : #000000;\n@fjBackgroundControlColor : rgba(0, 0, 0, 0.6);\n@fjBackgroundControlColorOnHover :#6c6c6c; // 545353\n@fjItemsOpacity:75;\n@fjItemsOpacityOnHover:100;\n@fjZindex:2147483647;\n@fjBorderRadius:5px;\n@fjOverlayAnnonceColor:rgb(119, 255, 119);\n@fjOverlayErrorColor:rgb(255, 0, 0);\n@fjOverlayLinkColor:rgb(255, 255, 0);\n@fjIconSize: 1.3em;\n////////////////////////////////////////////////////// -------------------  ICONS ------------------- /////////////////////////////////////////////\n@fjIconsFont: \"FontAwesome\";\n@fjIconsNames:leftarrow,download,share,play,playNext,playPrevious,pause,volUp,volDown,mute,audios,subs,fullScreen,compressScreen,windowClose;\n@fjIconsContents: \"\\f060\",\"\\f019\",\"\\f1e0\",\"\\f04b\", \"\\f051\",\"\\f048\", \"\\f04c\",\"\\f028\",\"\\f027\",\"\\f026\", \"\\f130\", \"\\f20a\", \"\\f0b2\",\"\\f066\",\"\\f00d\";\n.make-icons-classes(@i: length(@fjIconsNames)) when (@i > 0) {\n    .make-icons-classes(@i - 1);\n    @name: extract(@fjIconsNames, @i); \n    @code: extract(@fjIconsContents, @i); \n      .fj-icon-@{name} {\n         font-family: @fjIconsFont;\n         font-size: @fjIconSize;\n         content:@code;\n    }\n    .fj-icon-@{name}:before { content:@code; }\n}\n.make-icons-classes(); \n////////////////////////////////////////////////////// -------------------  OPACITY ------------------- //////////////////////////////////////////\n.opacity(@opacity) {\n  opacity: @opacity / 100;\n}\n///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n/*---------- general & component -----------*/\n.fj-player {\n     margin: 0 auto;\n } \n .fj-figure {\n     background-color:@fjBackgroundPlayerColor;\n     color:@fjThemeTextColor;\n     text-align: center;\n     position: relative;\n     margin: 0px auto 0px auto;\n     display: inline-block;\n     font-family: @fjThemeFontFamily;\n     font-size:@fjThemeFontSize;     \n     width: 100%;\n }\n .fj-control {\n     background-color:@fjBackgroundControlColor;\n     color:@fjThemeTextColor;     \n     .opacity(@fjItemsOpacity);\n     cursor: pointer;\n }\n .fj-control-embd {     \n     color:@fjThemeTextColor;     \n     .opacity(@fjItemsOpacity);\n     cursor: pointer;\n }\n .fj-control-embd:hover,\n .fj-control:hover {\n     .opacity(@fjItemsOpacityOnHover);\n     background: @fjBackgroundControlColorOnHover;\n }\n.fj-video-progress {\n    margin-bottom: 0.5%;\n    margin-top: 0.5%;\n    padding-left: 1px;\n    padding-right: 1px;\n}\n/*---------- position Horizental -----------*/\n .divTspanitleSeparator {\n     position: relative;\n     visibility: visible;\n     text-overflow: ellipsis;\n     overflow: hidden;\n     margin: 0px;\n     white-space: nowrap;\n     display: inline-block;\n     max-width: 766px;\n     font-size: 12px;\n     padding: 10px;\n }\n .fj-horizental-top {\n     z-index:  @fjZindex;\n     border-radius: @fjBorderRadius;\n     top: 5%;\n     width: 80%;\n     position: absolute;\n     left: 10%;\n }\n .fj-horizental-center {\n     z-index:  @fjZindex;\n     border-radius: @fjBorderRadius;\n     top: 45%;\n     width: 80%;\n     position: absolute;\n     left: 10%;\n }\n .fj-horizental-bottomMenus {\n     z-index:  @fjZindex;\n     position: absolute;\n     border-radius: @fjBorderRadius;\n     bottom: 22%;\n     opacity: 0.8;\n     background: rgba(10, 10, 10, 0.8);\n     width: 90%;\n     margin-left: 5%;\n     display: relative;\n }\n .fj-horizental-bottomUpper {\n     z-index:  @fjZindex;\n     position: absolute;\n     border-radius: @fjBorderRadius;\n     bottom: 12%;\n     opacity: 0.8;\n     background: rgba(10, 10, 10, 0.8);\n     width: 90%;\n     margin-left: 5%;\n     display: relative;\n }\n .fj-horizental-bottomLower {\n     z-index:  @fjZindex;\n     position: absolute;\n     border-radius: @fjBorderRadius;\n     bottom: 2%;\n     opacity: 0.8;\n     background: rgba(10, 10, 10, 0.8);\n     width: 90%;\n     left: 5%;\n     display: relative;\n }\n .fj-short-span{    \n    width:35%;\n    overflow:hidden !important;\n    text-overflow: ellipsis;\n}\n .fj-text {\n     color: @fjThemeTextColor ;\n     cursor: default;\n     padding-right: 5px ;\n     padding-top: 1% ;\n     white-space: nowrap;\n    display: inline-block;\n }\n /*---------- position Vertical -----------*/\n .fj-vertical-separator {\n     position: relative;\n     visibility: visible;\n     text-overflow: ellipsis;\n     overflow: hidden;\n     margin: 0px;\n     white-space: nowrap;\n     display: inline-block;\n     max-width: 766px;\n     font-size: 12px;\n     padding: 10px;\n }\n .fj-vertical-left {\n     position: relative;\n     float: left;\n }\n .fj-vertical-center {\n     position: relative;\n }\n .fj-vertical-right {\n     position: relative;\n     float: right;\n }\n /*---------- types -----------*/\n .fj-video {\n     background-color:@fjBackgroundControlColor;\n     -webkit-background-size: cover;\n     -moz-background-size: cover;\n     -o-background-size: cover;\n     background-size: cover;\n }\n .fj-btn {\n     border-top-left-radius: 5px;\n     border-top-right-radius: 5px;\n     border-bottom-right-radius: 5px;\n     border-bottom-left-radius: 5px;     \n     padding: 5px 10px 5px 10px;\n     // text-overflow: ellipsis;\n     margin: 0.05em 0.1em 0.05em  0.1em;\n     // overflow: hidden;\n     white-space: nowrap;\n     // display: inline-block;\n }\n .fj-big-btn {\n     color: @fjThemeColor;\n     border-top-left-radius: 5px;\n     border-top-right-radius: 5px;\n     border-bottom-right-radius: 5px;\n     border-bottom-left-radius: 5px;\n     padding-left: 10px;\n     padding-right: 10px;\n     padding-top: 5px;\n     padding-bottom: 5px;\n     text-overflow: ellipsis;\n     overflow: hidden;\n     white-space: nowrap;\n     display: inline-block;\n     font-size: 4em ;\n     margin-top: -15px;\n     margin-left: -15px;\n }\n.fj-title {\nbackground-color:@fjBackgroundControlColor;\n }\n .fj-hide {\n     visibility: hidden;\n     display : none;\n }\n .fj-overlayContainer {     \n     height: 100%;\n     margin: 0 auto;     \n }\n .fj-overlay {\n     position: absolute;\n     background: rgba(0, 0, 0, 0.5);\n     float: left;\n     font-size: 12px;\n     padding: 5px;\n     border-radius: @fjBorderRadius;\n     z-index:  @fjZindex;\n     top: 20%;\n     left: 20%;\n     height: auto;\n }\n .fj-adsinfo {}\n\n /* ----------------------- spinner  ------------------------ */\n \n @keyframes spinner {\n     to {\n         transform: rotate(360deg);\n     }\n }\n \n .spinner:before {\n     content: '';\n     box-sizing: border-box;\n     z-index:  @fjZindex;\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     width: 30px;\n     height: 30px;\n     margin-top: -15px;\n     margin-left: -15px;\n     border-radius: 50%;\n     border: 3px solid @fjProgressForeground;\n     border-top-color: @fjThemeColor;\n     animation: spinner .6s linear infinite;\n }\n /*_________________________ RANGE ________________________*/\n \n .volumebar {\n     margin-top: 1%;\n     padding-left: 1%;\n     padding-right: 3%;\n     border-left: none;\n     border-right: none;\n }\n // Generic ======================================================\n input[type=\"range\"] {   \n     margin: auto;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    position: relative;\n    overflow: hidden;\n    height: @fjProgressHeight ;\n    width: 98% !important;    \n    border-radius:  @fjBorderRadius;     \n    cursor: pointer;\n    margin-top: 2px;\n    margin-bottom: 2px;\n } \n input[type=range]:focus {\n     outline: none;\n }\n// WEBKIT ======================================================\n input[type='range']::-webkit-slider-runnable-track {\n    background: @fjProgressForeground;\n    border-radius:  @fjBorderRadius;     \n}\ninput[type='range']::-webkit-slider-thumb,\ninput[type='range']::-webkit-media-slider-thumb {\n    background:@fjProgressForeground;\n    box-shadow: -100vw 0 0 100vw @fjThemeColor;\n    border: 2px solid @fjProgressBorder ;\n    color: @fjThemeColor;\n    height: @fjProgressHeight;\n    border-radius: 100%;\n}\n // Mozilla ====================================================\ninput[type='range']::-moz-range-track {\n    background: @fjProgressForeground;\n    height: @fjProgressHeight ;\n    border-radius:  @fjBorderRadius;     \n}\ninput[type='range']::-moz-range-thumb {    \n    color: @fjThemeColor;\n    height: @fjProgressHeight;\n    border: 2px solid  @fjProgressBorder;\n    border-radius:  @fjBorderRadius;    \n    box-shadow: -100vw 0 0 100vw @fjThemeColor;\n}\n// IE ==========================================================\n/* todo \ninput[type=\"range\"]::-moz-range-progress {\n     background-color: #FF0000;\n}\ninput[type='range']::-ms-fill-upper {\n    background-color: @fjProgressForeground;\n}\ninput[type='range']::-ms-fill-lower {\n    background-color: @fjThemeColor;\n}*/\n/* animation */\n\n.m-fadeOut {\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 200ms, opacity 200ms;\n}\n\n.m-fadeIn {\n    visibility: visible;\n    opacity: 1;\n}\n /* ---------------------- Menu style --------------------- */\n .fj-list-title {\n     cursor: default;\n     font-weight: bold;\n     padding: 5px;\n }\n .settingMenuDiv {\n     position: absolute;\n     background: rgba(10, 10, 10, 0.8);\n     bottom: 10%;\n     left: 85%;\n     margin-bottom: 15px;\n     border-radius: @fjBorderRadius;\n     padding-right: 5px;\n     list-style-type: none;\n }\n .settingMenuDivnt div,\n .settingMenuDivnt ul {\n     display: inline;\n     list-style-type: none;\n }\n .fj-list {\n     list-style-type: none;\n     padding-left: 25px;\n }\n .settingMenuSubMenuRight {\n     float: left;\n     width: 100%;\n     border-left: 1px solid #2A2A2A;\n     padding-left: 5px;\n     padding-right: 5px;\n }\n .subtitles-menu-item-actif {\n     cursor: pointer;\n     text-align: left;\n     border-radius: @fjBorderRadius;\n     opacity: 1;\n }\n .subtitles-menu-item-actif:before {\n     content: \"\\f00c\";\n     /* FontAwesome Unicode */\n     font-family: FontAwesome;\n     display: inline-block;\n     margin-left: -1.3em;\n     /* same as padding-left set on li */\n     width: 1.3em;\n     /* same as padding-left set on li */\n }\n .subtitles-menu-item {\n     cursor: pointer;\n     text-align: left;\n     list-style-type: none;\n     opacity: 0.9;\n } \n /*------------------ OVERLAYS -------------*/\n .fj-overlays-container {\n     width: 100%;\n     height: 100%;\n     margin: 0 auto;\n     padding: 0px;\n     /*position: relative;*/\n     position: absolute;\n }\n .over-HL {\n     position: absolute;\n     background: rgba(0, 0, 0, 0.5);\n     float: left;\n     padding: 5px;\n     border-radius: @fjBorderRadius;\n     z-index:  @fjZindex;\n     /****/\n     top: 25%;\n     left: 20%;\n     height: auto;\n }\n\n .over-HL-error {\n     position: absolute;\n    background:rgba(255, 0, 0, 0.5);\n     float: left;\n     padding: 5px;\n     border-radius: @fjBorderRadius;\n     z-index:  @fjZindex;\n     /****/\n     top: 25%;\n     left: 20%;\n     height: auto;\n }\n \n .over-HR {\n     position: absolute;\n     background: rgba(0, 0, 0, 0.5);\n     float: left;\n     padding: 5px;\n     border-radius: @fjBorderRadius;\n     z-index:  @fjZindex;\n     /****/\n     top: 25%;\n     left: 80%;\n     height: auto;\n }\n .fj-overlay-closing {\n     float: right;\n     text-decoration: none;\n     display: inline-block;\n }\n .fj-overlay-annonce {\n     color: @fjOverlayAnnonceColor;\n     font-size: 1em;\n     float: left;\n     text-decoration: none;\n     display: inline-block;\n }\n .fj-overlay-error{\n     color: @fjOverlayErrorColor;\n     font-size: 1em;\n     float: left;\n     text-decoration: none;\n     display: inline-block;\n }\n .fj-overlay-link {\n     color: @fjOverlayLinkColor;\n     font-size: 0.8em;\n     float: left;\n     text-decoration: none;\n     display: inline-block;\n }\n .fj-overlay-description {\n     font-size: 1.2em;\n     float: right;\n     text-decoration: none;\n     display: inline-block;\n }\n /* ---------------------- Thumbs style --------------------- */\n .thumbsBlockDiv {\n     position: absolute;\n     margin-bottom: 15px;\n     padding-top: 5px;\n     border-radius: @fjBorderRadius;\n     bottom: 8%;\n     background: rgba(10, 10, 10, 0.8);\n } \n .thumbsBlock {\n     display: table-cell;\n     border-radius: @fjBorderRadius;\n     vertical-align: top;\n     display: inline-block;\n }\n/*=====================================================================================================*/\nfigure[controls-hidden=false] video::-webkit-media-text-track-display {\n    position: relative !important ; /*absolute*/\n    top:  80%  !important; /* 0 */     \n}\n/*\nvideo::cue {\n  // add style here\n}\n*/\nfigure[controls-hidden=false] video::-moz-media-text-track-display {\n    position: relative !important ; /*absolute*/\n    top:  80%  !important; /* 0 */     \n}\n/*_________________________________ FULL SCREEN __________________________*/\n\n\n/* fullscreen */\n\nhtml:-ms-fullscreen {\n    width: 100%;\n}\n\n :-webkit-full-screen {\n    background-color: transparent;\n}\n\n\n/* hide controls on fullscreen with WebKit */\n\nfigure[data-fullscreen=true] video::-webkit-media-controls {\n    display: none !important;\n}\nfigure[data-fullscreen=true] video::-moz-media-controls {\n    display: none !important;\n}\nfigure[data-fullscreen=true] {\n    max-width: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\nfigure[data-fullscreen=true] video {\n    height: 100%;\n}\nfigure[data-fullscreen=true] .volumebar {\n   width: 35%;\n}\nfigure[data-fullscreen=true] .fj-title {\n    font-size: 3em;\n}\nfigure[data-fullscreen=true] .fj-text {\n    font-size: 2em;\n}\nfigure[data-fullscreen=true] .fj-big-btn  {\n    font-size: 8em;\n}\nfigure[data-fullscreen=true] .fj-btn {\n    font-size: 3em;\n    margin-bottom: 5px;\n}\nfigure[data-fullscreen=true] .spinner::before {\n    width: 55px;\n    height: 55px;\n    border: 5px solid @fjProgressForeground;\n    border-top-color: @fjThemeColor;\n}\n","/* FONT PATH\n * -------------------------- */\n\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('@{fa-font-path}/fontawesome-webfont.eot?v=@{fa-version}');\n  src: url('@{fa-font-path}/fontawesome-webfont.eot?#iefix&v=@{fa-version}') format('embedded-opentype'),\n    url('@{fa-font-path}/fontawesome-webfont.woff2?v=@{fa-version}') format('woff2'),\n    url('@{fa-font-path}/fontawesome-webfont.woff?v=@{fa-version}') format('woff'),\n    url('@{fa-font-path}/fontawesome-webfont.ttf?v=@{fa-version}') format('truetype'),\n    url('@{fa-font-path}/fontawesome-webfont.svg?v=@{fa-version}#fontawesomeregular') format('svg');\n  // src: url('@{fa-font-path}/FontAwesome.otf') format('opentype'); // used when developing fonts\n  font-weight: normal;\n  font-style: normal;\n}\n","// Screen Readers\n// -------------------------\n\n.sr-only { .sr-only(); }\n.sr-only-focusable { .sr-only-focusable(); }\n","// Base Class Definition\n// -------------------------\n\n.@{fa-css-prefix} {\n  display: inline-block;\n  font: normal normal normal @fa-font-size-base/@fa-line-height-base FontAwesome; // shortening font declaration\n  font-size: inherit; // can't have font-size inherit on line above, so need to override\n  text-rendering: auto; // optimizelegibility throws things off #1094\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n}\n","// Icon Sizes\n// -------------------------\n\n/* makes the font 33% larger relative to the icon container */\n.@{fa-css-prefix}-lg {\n  font-size: (4em / 3);\n  line-height: (3em / 4);\n  vertical-align: -15%;\n}\n.@{fa-css-prefix}-2x { font-size: 2em; }\n.@{fa-css-prefix}-3x { font-size: 3em; }\n.@{fa-css-prefix}-4x { font-size: 4em; }\n.@{fa-css-prefix}-5x { font-size: 5em; }\n","// Fixed Width Icons\n// -------------------------\n.@{fa-css-prefix}-fw {\n  width: (18em / 14);\n  text-align: center;\n}\n","// List Icons\n// -------------------------\n\n.@{fa-css-prefix}-ul {\n  padding-left: 0;\n  margin-left: @fa-li-width;\n  list-style-type: none;\n  > li { position: relative; }\n}\n.@{fa-css-prefix}-li {\n  position: absolute;\n  left: -@fa-li-width;\n  width: @fa-li-width;\n  top: (2em / 14);\n  text-align: center;\n  &.@{fa-css-prefix}-lg {\n    left: (-@fa-li-width + (4em / 14));\n  }\n}\n","// Bordered & Pulled\n// -------------------------\n\n.@{fa-css-prefix}-border {\n  padding: .2em .25em .15em;\n  border: solid .08em @fa-border-color;\n  border-radius: .1em;\n}\n\n.@{fa-css-prefix}-pull-left { float: left; }\n.@{fa-css-prefix}-pull-right { float: right; }\n\n.@{fa-css-prefix} {\n  &.@{fa-css-prefix}-pull-left { margin-right: .3em; }\n  &.@{fa-css-prefix}-pull-right { margin-left: .3em; }\n}\n\n/* Deprecated as of 4.4.0 */\n.pull-right { float: right; }\n.pull-left { float: left; }\n\n.@{fa-css-prefix} {\n  &.pull-left { margin-right: .3em; }\n  &.pull-right { margin-left: .3em; }\n}\n","// Animated Icons\n// --------------------------\n\n.@{fa-css-prefix}-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.@{fa-css-prefix}-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n","// Mixins\n// --------------------------\n\n.fa-icon() {\n  display: inline-block;\n  font: normal normal normal @fa-font-size-base/@fa-line-height-base FontAwesome; // shortening font declaration\n  font-size: inherit; // can't have font-size inherit on line above, so need to override\n  text-rendering: auto; // optimizelegibility throws things off #1094\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n}\n\n.fa-icon-rotate(@degrees, @rotation) {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=@{rotation})\";\n  -webkit-transform: rotate(@degrees);\n      -ms-transform: rotate(@degrees);\n          transform: rotate(@degrees);\n}\n\n.fa-icon-flip(@horiz, @vert, @rotation) {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=@{rotation}, mirror=1)\";\n  -webkit-transform: scale(@horiz, @vert);\n      -ms-transform: scale(@horiz, @vert);\n          transform: scale(@horiz, @vert);\n}\n\n\n// Only display content to screen readers. A la Bootstrap 4.\n//\n// See: http://a11yproject.com/posts/how-to-hide-content/\n\n.sr-only() {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0,0,0,0);\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n//\n// Useful for \"Skip to main content\" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n//\n// Credit: HTML5 Boilerplate\n\n.sr-only-focusable() {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n  }\n}\n","// Rotated & Flipped Icons\n// -------------------------\n\n.@{fa-css-prefix}-rotate-90  { .fa-icon-rotate(90deg, 1);  }\n.@{fa-css-prefix}-rotate-180 { .fa-icon-rotate(180deg, 2); }\n.@{fa-css-prefix}-rotate-270 { .fa-icon-rotate(270deg, 3); }\n\n.@{fa-css-prefix}-flip-horizontal { .fa-icon-flip(-1, 1, 0); }\n.@{fa-css-prefix}-flip-vertical   { .fa-icon-flip(1, -1, 2); }\n\n// Hook for IE8-9\n// -------------------------\n\n:root .@{fa-css-prefix}-rotate-90,\n:root .@{fa-css-prefix}-rotate-180,\n:root .@{fa-css-prefix}-rotate-270,\n:root .@{fa-css-prefix}-flip-horizontal,\n:root .@{fa-css-prefix}-flip-vertical {\n  filter: none;\n}\n","// Stacked Icons\n// -------------------------\n\n.@{fa-css-prefix}-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.@{fa-css-prefix}-stack-1x, .@{fa-css-prefix}-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.@{fa-css-prefix}-stack-1x { line-height: inherit; }\n.@{fa-css-prefix}-stack-2x { font-size: 2em; }\n.@{fa-css-prefix}-inverse { color: @fa-inverse; }\n","/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n\n.@{fa-css-prefix}-glass:before { content: @fa-var-glass; }\n.@{fa-css-prefix}-music:before { content: @fa-var-music; }\n.@{fa-css-prefix}-search:before { content: @fa-var-search; }\n.@{fa-css-prefix}-envelope-o:before { content: @fa-var-envelope-o; }\n.@{fa-css-prefix}-heart:before { content: @fa-var-heart; }\n.@{fa-css-prefix}-star:before { content: @fa-var-star; }\n.@{fa-css-prefix}-star-o:before { content: @fa-var-star-o; }\n.@{fa-css-prefix}-user:before { content: @fa-var-user; }\n.@{fa-css-prefix}-film:before { content: @fa-var-film; }\n.@{fa-css-prefix}-th-large:before { content: @fa-var-th-large; }\n.@{fa-css-prefix}-th:before { content: @fa-var-th; }\n.@{fa-css-prefix}-th-list:before { content: @fa-var-th-list; }\n.@{fa-css-prefix}-check:before { content: @fa-var-check; }\n.@{fa-css-prefix}-remove:before,\n.@{fa-css-prefix}-close:before,\n.@{fa-css-prefix}-times:before { content: @fa-var-times; }\n.@{fa-css-prefix}-search-plus:before { content: @fa-var-search-plus; }\n.@{fa-css-prefix}-search-minus:before { content: @fa-var-search-minus; }\n.@{fa-css-prefix}-power-off:before { content: @fa-var-power-off; }\n.@{fa-css-prefix}-signal:before { content: @fa-var-signal; }\n.@{fa-css-prefix}-gear:before,\n.@{fa-css-prefix}-cog:before { content: @fa-var-cog; }\n.@{fa-css-prefix}-trash-o:before { content: @fa-var-trash-o; }\n.@{fa-css-prefix}-home:before { content: @fa-var-home; }\n.@{fa-css-prefix}-file-o:before { content: @fa-var-file-o; }\n.@{fa-css-prefix}-clock-o:before { content: @fa-var-clock-o; }\n.@{fa-css-prefix}-road:before { content: @fa-var-road; }\n.@{fa-css-prefix}-download:before { content: @fa-var-download; }\n.@{fa-css-prefix}-arrow-circle-o-down:before { content: @fa-var-arrow-circle-o-down; }\n.@{fa-css-prefix}-arrow-circle-o-up:before { content: @fa-var-arrow-circle-o-up; }\n.@{fa-css-prefix}-inbox:before { content: @fa-var-inbox; }\n.@{fa-css-prefix}-play-circle-o:before { content: @fa-var-play-circle-o; }\n.@{fa-css-prefix}-rotate-right:before,\n.@{fa-css-prefix}-repeat:before { content: @fa-var-repeat; }\n.@{fa-css-prefix}-refresh:before { content: @fa-var-refresh; }\n.@{fa-css-prefix}-list-alt:before { content: @fa-var-list-alt; }\n.@{fa-css-prefix}-lock:before { content: @fa-var-lock; }\n.@{fa-css-prefix}-flag:before { content: @fa-var-flag; }\n.@{fa-css-prefix}-headphones:before { content: @fa-var-headphones; }\n.@{fa-css-prefix}-volume-off:before { content: @fa-var-volume-off; }\n.@{fa-css-prefix}-volume-down:before { content: @fa-var-volume-down; }\n.@{fa-css-prefix}-volume-up:before { content: @fa-var-volume-up; }\n.@{fa-css-prefix}-qrcode:before { content: @fa-var-qrcode; }\n.@{fa-css-prefix}-barcode:before { content: @fa-var-barcode; }\n.@{fa-css-prefix}-tag:before { content: @fa-var-tag; }\n.@{fa-css-prefix}-tags:before { content: @fa-var-tags; }\n.@{fa-css-prefix}-book:before { content: @fa-var-book; }\n.@{fa-css-prefix}-bookmark:before { content: @fa-var-bookmark; }\n.@{fa-css-prefix}-print:before { content: @fa-var-print; }\n.@{fa-css-prefix}-camera:before { content: @fa-var-camera; }\n.@{fa-css-prefix}-font:before { content: @fa-var-font; }\n.@{fa-css-prefix}-bold:before { content: @fa-var-bold; }\n.@{fa-css-prefix}-italic:before { content: @fa-var-italic; }\n.@{fa-css-prefix}-text-height:before { content: @fa-var-text-height; }\n.@{fa-css-prefix}-text-width:before { content: @fa-var-text-width; }\n.@{fa-css-prefix}-align-left:before { content: @fa-var-align-left; }\n.@{fa-css-prefix}-align-center:before { content: @fa-var-align-center; }\n.@{fa-css-prefix}-align-right:before { content: @fa-var-align-right; }\n.@{fa-css-prefix}-align-justify:before { content: @fa-var-align-justify; }\n.@{fa-css-prefix}-list:before { content: @fa-var-list; }\n.@{fa-css-prefix}-dedent:before,\n.@{fa-css-prefix}-outdent:before { content: @fa-var-outdent; }\n.@{fa-css-prefix}-indent:before { content: @fa-var-indent; }\n.@{fa-css-prefix}-video-camera:before { content: @fa-var-video-camera; }\n.@{fa-css-prefix}-photo:before,\n.@{fa-css-prefix}-image:before,\n.@{fa-css-prefix}-picture-o:before { content: @fa-var-picture-o; }\n.@{fa-css-prefix}-pencil:before { content: @fa-var-pencil; }\n.@{fa-css-prefix}-map-marker:before { content: @fa-var-map-marker; }\n.@{fa-css-prefix}-adjust:before { content: @fa-var-adjust; }\n.@{fa-css-prefix}-tint:before { content: @fa-var-tint; }\n.@{fa-css-prefix}-edit:before,\n.@{fa-css-prefix}-pencil-square-o:before { content: @fa-var-pencil-square-o; }\n.@{fa-css-prefix}-share-square-o:before { content: @fa-var-share-square-o; }\n.@{fa-css-prefix}-check-square-o:before { content: @fa-var-check-square-o; }\n.@{fa-css-prefix}-arrows:before { content: @fa-var-arrows; }\n.@{fa-css-prefix}-step-backward:before { content: @fa-var-step-backward; }\n.@{fa-css-prefix}-fast-backward:before { content: @fa-var-fast-backward; }\n.@{fa-css-prefix}-backward:before { content: @fa-var-backward; }\n.@{fa-css-prefix}-play:before { content: @fa-var-play; }\n.@{fa-css-prefix}-pause:before { content: @fa-var-pause; }\n.@{fa-css-prefix}-stop:before { content: @fa-var-stop; }\n.@{fa-css-prefix}-forward:before { content: @fa-var-forward; }\n.@{fa-css-prefix}-fast-forward:before { content: @fa-var-fast-forward; }\n.@{fa-css-prefix}-step-forward:before { content: @fa-var-step-forward; }\n.@{fa-css-prefix}-eject:before { content: @fa-var-eject; }\n.@{fa-css-prefix}-chevron-left:before { content: @fa-var-chevron-left; }\n.@{fa-css-prefix}-chevron-right:before { content: @fa-var-chevron-right; }\n.@{fa-css-prefix}-plus-circle:before { content: @fa-var-plus-circle; }\n.@{fa-css-prefix}-minus-circle:before { content: @fa-var-minus-circle; }\n.@{fa-css-prefix}-times-circle:before { content: @fa-var-times-circle; }\n.@{fa-css-prefix}-check-circle:before { content: @fa-var-check-circle; }\n.@{fa-css-prefix}-question-circle:before { content: @fa-var-question-circle; }\n.@{fa-css-prefix}-info-circle:before { content: @fa-var-info-circle; }\n.@{fa-css-prefix}-crosshairs:before { content: @fa-var-crosshairs; }\n.@{fa-css-prefix}-times-circle-o:before { content: @fa-var-times-circle-o; }\n.@{fa-css-prefix}-check-circle-o:before { content: @fa-var-check-circle-o; }\n.@{fa-css-prefix}-ban:before { content: @fa-var-ban; }\n.@{fa-css-prefix}-arrow-left:before { content: @fa-var-arrow-left; }\n.@{fa-css-prefix}-arrow-right:before { content: @fa-var-arrow-right; }\n.@{fa-css-prefix}-arrow-up:before { content: @fa-var-arrow-up; }\n.@{fa-css-prefix}-arrow-down:before { content: @fa-var-arrow-down; }\n.@{fa-css-prefix}-mail-forward:before,\n.@{fa-css-prefix}-share:before { content: @fa-var-share; }\n.@{fa-css-prefix}-expand:before { content: @fa-var-expand; }\n.@{fa-css-prefix}-compress:before { content: @fa-var-compress; }\n.@{fa-css-prefix}-plus:before { content: @fa-var-plus; }\n.@{fa-css-prefix}-minus:before { content: @fa-var-minus; }\n.@{fa-css-prefix}-asterisk:before { content: @fa-var-asterisk; }\n.@{fa-css-prefix}-exclamation-circle:before { content: @fa-var-exclamation-circle; }\n.@{fa-css-prefix}-gift:before { content: @fa-var-gift; }\n.@{fa-css-prefix}-leaf:before { content: @fa-var-leaf; }\n.@{fa-css-prefix}-fire:before { content: @fa-var-fire; }\n.@{fa-css-prefix}-eye:before { content: @fa-var-eye; }\n.@{fa-css-prefix}-eye-slash:before { content: @fa-var-eye-slash; }\n.@{fa-css-prefix}-warning:before,\n.@{fa-css-prefix}-exclamation-triangle:before { content: @fa-var-exclamation-triangle; }\n.@{fa-css-prefix}-plane:before { content: @fa-var-plane; }\n.@{fa-css-prefix}-calendar:before { content: @fa-var-calendar; }\n.@{fa-css-prefix}-random:before { content: @fa-var-random; }\n.@{fa-css-prefix}-comment:before { content: @fa-var-comment; }\n.@{fa-css-prefix}-magnet:before { content: @fa-var-magnet; }\n.@{fa-css-prefix}-chevron-up:before { content: @fa-var-chevron-up; }\n.@{fa-css-prefix}-chevron-down:before { content: @fa-var-chevron-down; }\n.@{fa-css-prefix}-retweet:before { content: @fa-var-retweet; }\n.@{fa-css-prefix}-shopping-cart:before { content: @fa-var-shopping-cart; }\n.@{fa-css-prefix}-folder:before { content: @fa-var-folder; }\n.@{fa-css-prefix}-folder-open:before { content: @fa-var-folder-open; }\n.@{fa-css-prefix}-arrows-v:before { content: @fa-var-arrows-v; }\n.@{fa-css-prefix}-arrows-h:before { content: @fa-var-arrows-h; }\n.@{fa-css-prefix}-bar-chart-o:before,\n.@{fa-css-prefix}-bar-chart:before { content: @fa-var-bar-chart; }\n.@{fa-css-prefix}-twitter-square:before { content: @fa-var-twitter-square; }\n.@{fa-css-prefix}-facebook-square:before { content: @fa-var-facebook-square; }\n.@{fa-css-prefix}-camera-retro:before { content: @fa-var-camera-retro; }\n.@{fa-css-prefix}-key:before { content: @fa-var-key; }\n.@{fa-css-prefix}-gears:before,\n.@{fa-css-prefix}-cogs:before { content: @fa-var-cogs; }\n.@{fa-css-prefix}-comments:before { content: @fa-var-comments; }\n.@{fa-css-prefix}-thumbs-o-up:before { content: @fa-var-thumbs-o-up; }\n.@{fa-css-prefix}-thumbs-o-down:before { content: @fa-var-thumbs-o-down; }\n.@{fa-css-prefix}-star-half:before { content: @fa-var-star-half; }\n.@{fa-css-prefix}-heart-o:before { content: @fa-var-heart-o; }\n.@{fa-css-prefix}-sign-out:before { content: @fa-var-sign-out; }\n.@{fa-css-prefix}-linkedin-square:before { content: @fa-var-linkedin-square; }\n.@{fa-css-prefix}-thumb-tack:before { content: @fa-var-thumb-tack; }\n.@{fa-css-prefix}-external-link:before { content: @fa-var-external-link; }\n.@{fa-css-prefix}-sign-in:before { content: @fa-var-sign-in; }\n.@{fa-css-prefix}-trophy:before { content: @fa-var-trophy; }\n.@{fa-css-prefix}-github-square:before { content: @fa-var-github-square; }\n.@{fa-css-prefix}-upload:before { content: @fa-var-upload; }\n.@{fa-css-prefix}-lemon-o:before { content: @fa-var-lemon-o; }\n.@{fa-css-prefix}-phone:before { content: @fa-var-phone; }\n.@{fa-css-prefix}-square-o:before { content: @fa-var-square-o; }\n.@{fa-css-prefix}-bookmark-o:before { content: @fa-var-bookmark-o; }\n.@{fa-css-prefix}-phone-square:before { content: @fa-var-phone-square; }\n.@{fa-css-prefix}-twitter:before { content: @fa-var-twitter; }\n.@{fa-css-prefix}-facebook-f:before,\n.@{fa-css-prefix}-facebook:before { content: @fa-var-facebook; }\n.@{fa-css-prefix}-github:before { content: @fa-var-github; }\n.@{fa-css-prefix}-unlock:before { content: @fa-var-unlock; }\n.@{fa-css-prefix}-credit-card:before { content: @fa-var-credit-card; }\n.@{fa-css-prefix}-feed:before,\n.@{fa-css-prefix}-rss:before { content: @fa-var-rss; }\n.@{fa-css-prefix}-hdd-o:before { content: @fa-var-hdd-o; }\n.@{fa-css-prefix}-bullhorn:before { content: @fa-var-bullhorn; }\n.@{fa-css-prefix}-bell:before { content: @fa-var-bell; }\n.@{fa-css-prefix}-certificate:before { content: @fa-var-certificate; }\n.@{fa-css-prefix}-hand-o-right:before { content: @fa-var-hand-o-right; }\n.@{fa-css-prefix}-hand-o-left:before { content: @fa-var-hand-o-left; }\n.@{fa-css-prefix}-hand-o-up:before { content: @fa-var-hand-o-up; }\n.@{fa-css-prefix}-hand-o-down:before { content: @fa-var-hand-o-down; }\n.@{fa-css-prefix}-arrow-circle-left:before { content: @fa-var-arrow-circle-left; }\n.@{fa-css-prefix}-arrow-circle-right:before { content: @fa-var-arrow-circle-right; }\n.@{fa-css-prefix}-arrow-circle-up:before { content: @fa-var-arrow-circle-up; }\n.@{fa-css-prefix}-arrow-circle-down:before { content: @fa-var-arrow-circle-down; }\n.@{fa-css-prefix}-globe:before { content: @fa-var-globe; }\n.@{fa-css-prefix}-wrench:before { content: @fa-var-wrench; }\n.@{fa-css-prefix}-tasks:before { content: @fa-var-tasks; }\n.@{fa-css-prefix}-filter:before { content: @fa-var-filter; }\n.@{fa-css-prefix}-briefcase:before { content: @fa-var-briefcase; }\n.@{fa-css-prefix}-arrows-alt:before { content: @fa-var-arrows-alt; }\n.@{fa-css-prefix}-group:before,\n.@{fa-css-prefix}-users:before { content: @fa-var-users; }\n.@{fa-css-prefix}-chain:before,\n.@{fa-css-prefix}-link:before { content: @fa-var-link; }\n.@{fa-css-prefix}-cloud:before { content: @fa-var-cloud; }\n.@{fa-css-prefix}-flask:before { content: @fa-var-flask; }\n.@{fa-css-prefix}-cut:before,\n.@{fa-css-prefix}-scissors:before { content: @fa-var-scissors; }\n.@{fa-css-prefix}-copy:before,\n.@{fa-css-prefix}-files-o:before { content: @fa-var-files-o; }\n.@{fa-css-prefix}-paperclip:before { content: @fa-var-paperclip; }\n.@{fa-css-prefix}-save:before,\n.@{fa-css-prefix}-floppy-o:before { content: @fa-var-floppy-o; }\n.@{fa-css-prefix}-square:before { content: @fa-var-square; }\n.@{fa-css-prefix}-navicon:before,\n.@{fa-css-prefix}-reorder:before,\n.@{fa-css-prefix}-bars:before { content: @fa-var-bars; }\n.@{fa-css-prefix}-list-ul:before { content: @fa-var-list-ul; }\n.@{fa-css-prefix}-list-ol:before { content: @fa-var-list-ol; }\n.@{fa-css-prefix}-strikethrough:before { content: @fa-var-strikethrough; }\n.@{fa-css-prefix}-underline:before { content: @fa-var-underline; }\n.@{fa-css-prefix}-table:before { content: @fa-var-table; }\n.@{fa-css-prefix}-magic:before { content: @fa-var-magic; }\n.@{fa-css-prefix}-truck:before { content: @fa-var-truck; }\n.@{fa-css-prefix}-pinterest:before { content: @fa-var-pinterest; }\n.@{fa-css-prefix}-pinterest-square:before { content: @fa-var-pinterest-square; }\n.@{fa-css-prefix}-google-plus-square:before { content: @fa-var-google-plus-square; }\n.@{fa-css-prefix}-google-plus:before { content: @fa-var-google-plus; }\n.@{fa-css-prefix}-money:before { content: @fa-var-money; }\n.@{fa-css-prefix}-caret-down:before { content: @fa-var-caret-down; }\n.@{fa-css-prefix}-caret-up:before { content: @fa-var-caret-up; }\n.@{fa-css-prefix}-caret-left:before { content: @fa-var-caret-left; }\n.@{fa-css-prefix}-caret-right:before { content: @fa-var-caret-right; }\n.@{fa-css-prefix}-columns:before { content: @fa-var-columns; }\n.@{fa-css-prefix}-unsorted:before,\n.@{fa-css-prefix}-sort:before { content: @fa-var-sort; }\n.@{fa-css-prefix}-sort-down:before,\n.@{fa-css-prefix}-sort-desc:before { content: @fa-var-sort-desc; }\n.@{fa-css-prefix}-sort-up:before,\n.@{fa-css-prefix}-sort-asc:before { content: @fa-var-sort-asc; }\n.@{fa-css-prefix}-envelope:before { content: @fa-var-envelope; }\n.@{fa-css-prefix}-linkedin:before { content: @fa-var-linkedin; }\n.@{fa-css-prefix}-rotate-left:before,\n.@{fa-css-prefix}-undo:before { content: @fa-var-undo; }\n.@{fa-css-prefix}-legal:before,\n.@{fa-css-prefix}-gavel:before { content: @fa-var-gavel; }\n.@{fa-css-prefix}-dashboard:before,\n.@{fa-css-prefix}-tachometer:before { content: @fa-var-tachometer; }\n.@{fa-css-prefix}-comment-o:before { content: @fa-var-comment-o; }\n.@{fa-css-prefix}-comments-o:before { content: @fa-var-comments-o; }\n.@{fa-css-prefix}-flash:before,\n.@{fa-css-prefix}-bolt:before { content: @fa-var-bolt; }\n.@{fa-css-prefix}-sitemap:before { content: @fa-var-sitemap; }\n.@{fa-css-prefix}-umbrella:before { content: @fa-var-umbrella; }\n.@{fa-css-prefix}-paste:before,\n.@{fa-css-prefix}-clipboard:before { content: @fa-var-clipboard; }\n.@{fa-css-prefix}-lightbulb-o:before { content: @fa-var-lightbulb-o; }\n.@{fa-css-prefix}-exchange:before { content: @fa-var-exchange; }\n.@{fa-css-prefix}-cloud-download:before { content: @fa-var-cloud-download; }\n.@{fa-css-prefix}-cloud-upload:before { content: @fa-var-cloud-upload; }\n.@{fa-css-prefix}-user-md:before { content: @fa-var-user-md; }\n.@{fa-css-prefix}-stethoscope:before { content: @fa-var-stethoscope; }\n.@{fa-css-prefix}-suitcase:before { content: @fa-var-suitcase; }\n.@{fa-css-prefix}-bell-o:before { content: @fa-var-bell-o; }\n.@{fa-css-prefix}-coffee:before { content: @fa-var-coffee; }\n.@{fa-css-prefix}-cutlery:before { content: @fa-var-cutlery; }\n.@{fa-css-prefix}-file-text-o:before { content: @fa-var-file-text-o; }\n.@{fa-css-prefix}-building-o:before { content: @fa-var-building-o; }\n.@{fa-css-prefix}-hospital-o:before { content: @fa-var-hospital-o; }\n.@{fa-css-prefix}-ambulance:before { content: @fa-var-ambulance; }\n.@{fa-css-prefix}-medkit:before { content: @fa-var-medkit; }\n.@{fa-css-prefix}-fighter-jet:before { content: @fa-var-fighter-jet; }\n.@{fa-css-prefix}-beer:before { content: @fa-var-beer; }\n.@{fa-css-prefix}-h-square:before { content: @fa-var-h-square; }\n.@{fa-css-prefix}-plus-square:before { content: @fa-var-plus-square; }\n.@{fa-css-prefix}-angle-double-left:before { content: @fa-var-angle-double-left; }\n.@{fa-css-prefix}-angle-double-right:before { content: @fa-var-angle-double-right; }\n.@{fa-css-prefix}-angle-double-up:before { content: @fa-var-angle-double-up; }\n.@{fa-css-prefix}-angle-double-down:before { content: @fa-var-angle-double-down; }\n.@{fa-css-prefix}-angle-left:before { content: @fa-var-angle-left; }\n.@{fa-css-prefix}-angle-right:before { content: @fa-var-angle-right; }\n.@{fa-css-prefix}-angle-up:before { content: @fa-var-angle-up; }\n.@{fa-css-prefix}-angle-down:before { content: @fa-var-angle-down; }\n.@{fa-css-prefix}-desktop:before { content: @fa-var-desktop; }\n.@{fa-css-prefix}-laptop:before { content: @fa-var-laptop; }\n.@{fa-css-prefix}-tablet:before { content: @fa-var-tablet; }\n.@{fa-css-prefix}-mobile-phone:before,\n.@{fa-css-prefix}-mobile:before { content: @fa-var-mobile; }\n.@{fa-css-prefix}-circle-o:before { content: @fa-var-circle-o; }\n.@{fa-css-prefix}-quote-left:before { content: @fa-var-quote-left; }\n.@{fa-css-prefix}-quote-right:before { content: @fa-var-quote-right; }\n.@{fa-css-prefix}-spinner:before { content: @fa-var-spinner; }\n.@{fa-css-prefix}-circle:before { content: @fa-var-circle; }\n.@{fa-css-prefix}-mail-reply:before,\n.@{fa-css-prefix}-reply:before { content: @fa-var-reply; }\n.@{fa-css-prefix}-github-alt:before { content: @fa-var-github-alt; }\n.@{fa-css-prefix}-folder-o:before { content: @fa-var-folder-o; }\n.@{fa-css-prefix}-folder-open-o:before { content: @fa-var-folder-open-o; }\n.@{fa-css-prefix}-smile-o:before { content: @fa-var-smile-o; }\n.@{fa-css-prefix}-frown-o:before { content: @fa-var-frown-o; }\n.@{fa-css-prefix}-meh-o:before { content: @fa-var-meh-o; }\n.@{fa-css-prefix}-gamepad:before { content: @fa-var-gamepad; }\n.@{fa-css-prefix}-keyboard-o:before { content: @fa-var-keyboard-o; }\n.@{fa-css-prefix}-flag-o:before { content: @fa-var-flag-o; }\n.@{fa-css-prefix}-flag-checkered:before { content: @fa-var-flag-checkered; }\n.@{fa-css-prefix}-terminal:before { content: @fa-var-terminal; }\n.@{fa-css-prefix}-code:before { content: @fa-var-code; }\n.@{fa-css-prefix}-mail-reply-all:before,\n.@{fa-css-prefix}-reply-all:before { content: @fa-var-reply-all; }\n.@{fa-css-prefix}-star-half-empty:before,\n.@{fa-css-prefix}-star-half-full:before,\n.@{fa-css-prefix}-star-half-o:before { content: @fa-var-star-half-o; }\n.@{fa-css-prefix}-location-arrow:before { content: @fa-var-location-arrow; }\n.@{fa-css-prefix}-crop:before { content: @fa-var-crop; }\n.@{fa-css-prefix}-code-fork:before { content: @fa-var-code-fork; }\n.@{fa-css-prefix}-unlink:before,\n.@{fa-css-prefix}-chain-broken:before { content: @fa-var-chain-broken; }\n.@{fa-css-prefix}-question:before { content: @fa-var-question; }\n.@{fa-css-prefix}-info:before { content: @fa-var-info; }\n.@{fa-css-prefix}-exclamation:before { content: @fa-var-exclamation; }\n.@{fa-css-prefix}-superscript:before { content: @fa-var-superscript; }\n.@{fa-css-prefix}-subscript:before { content: @fa-var-subscript; }\n.@{fa-css-prefix}-eraser:before { content: @fa-var-eraser; }\n.@{fa-css-prefix}-puzzle-piece:before { content: @fa-var-puzzle-piece; }\n.@{fa-css-prefix}-microphone:before { content: @fa-var-microphone; }\n.@{fa-css-prefix}-microphone-slash:before { content: @fa-var-microphone-slash; }\n.@{fa-css-prefix}-shield:before { content: @fa-var-shield; }\n.@{fa-css-prefix}-calendar-o:before { content: @fa-var-calendar-o; }\n.@{fa-css-prefix}-fire-extinguisher:before { content: @fa-var-fire-extinguisher; }\n.@{fa-css-prefix}-rocket:before { content: @fa-var-rocket; }\n.@{fa-css-prefix}-maxcdn:before { content: @fa-var-maxcdn; }\n.@{fa-css-prefix}-chevron-circle-left:before { content: @fa-var-chevron-circle-left; }\n.@{fa-css-prefix}-chevron-circle-right:before { content: @fa-var-chevron-circle-right; }\n.@{fa-css-prefix}-chevron-circle-up:before { content: @fa-var-chevron-circle-up; }\n.@{fa-css-prefix}-chevron-circle-down:before { content: @fa-var-chevron-circle-down; }\n.@{fa-css-prefix}-html5:before { content: @fa-var-html5; }\n.@{fa-css-prefix}-css3:before { content: @fa-var-css3; }\n.@{fa-css-prefix}-anchor:before { content: @fa-var-anchor; }\n.@{fa-css-prefix}-unlock-alt:before { content: @fa-var-unlock-alt; }\n.@{fa-css-prefix}-bullseye:before { content: @fa-var-bullseye; }\n.@{fa-css-prefix}-ellipsis-h:before { content: @fa-var-ellipsis-h; }\n.@{fa-css-prefix}-ellipsis-v:before { content: @fa-var-ellipsis-v; }\n.@{fa-css-prefix}-rss-square:before { content: @fa-var-rss-square; }\n.@{fa-css-prefix}-play-circle:before { content: @fa-var-play-circle; }\n.@{fa-css-prefix}-ticket:before { content: @fa-var-ticket; }\n.@{fa-css-prefix}-minus-square:before { content: @fa-var-minus-square; }\n.@{fa-css-prefix}-minus-square-o:before { content: @fa-var-minus-square-o; }\n.@{fa-css-prefix}-level-up:before { content: @fa-var-level-up; }\n.@{fa-css-prefix}-level-down:before { content: @fa-var-level-down; }\n.@{fa-css-prefix}-check-square:before { content: @fa-var-check-square; }\n.@{fa-css-prefix}-pencil-square:before { content: @fa-var-pencil-square; }\n.@{fa-css-prefix}-external-link-square:before { content: @fa-var-external-link-square; }\n.@{fa-css-prefix}-share-square:before { content: @fa-var-share-square; }\n.@{fa-css-prefix}-compass:before { content: @fa-var-compass; }\n.@{fa-css-prefix}-toggle-down:before,\n.@{fa-css-prefix}-caret-square-o-down:before { content: @fa-var-caret-square-o-down; }\n.@{fa-css-prefix}-toggle-up:before,\n.@{fa-css-prefix}-caret-square-o-up:before { content: @fa-var-caret-square-o-up; }\n.@{fa-css-prefix}-toggle-right:before,\n.@{fa-css-prefix}-caret-square-o-right:before { content: @fa-var-caret-square-o-right; }\n.@{fa-css-prefix}-euro:before,\n.@{fa-css-prefix}-eur:before { content: @fa-var-eur; }\n.@{fa-css-prefix}-gbp:before { content: @fa-var-gbp; }\n.@{fa-css-prefix}-dollar:before,\n.@{fa-css-prefix}-usd:before { content: @fa-var-usd; }\n.@{fa-css-prefix}-rupee:before,\n.@{fa-css-prefix}-inr:before { content: @fa-var-inr; }\n.@{fa-css-prefix}-cny:before,\n.@{fa-css-prefix}-rmb:before,\n.@{fa-css-prefix}-yen:before,\n.@{fa-css-prefix}-jpy:before { content: @fa-var-jpy; }\n.@{fa-css-prefix}-ruble:before,\n.@{fa-css-prefix}-rouble:before,\n.@{fa-css-prefix}-rub:before { content: @fa-var-rub; }\n.@{fa-css-prefix}-won:before,\n.@{fa-css-prefix}-krw:before { content: @fa-var-krw; }\n.@{fa-css-prefix}-bitcoin:before,\n.@{fa-css-prefix}-btc:before { content: @fa-var-btc; }\n.@{fa-css-prefix}-file:before { content: @fa-var-file; }\n.@{fa-css-prefix}-file-text:before { content: @fa-var-file-text; }\n.@{fa-css-prefix}-sort-alpha-asc:before { content: @fa-var-sort-alpha-asc; }\n.@{fa-css-prefix}-sort-alpha-desc:before { content: @fa-var-sort-alpha-desc; }\n.@{fa-css-prefix}-sort-amount-asc:before { content: @fa-var-sort-amount-asc; }\n.@{fa-css-prefix}-sort-amount-desc:before { content: @fa-var-sort-amount-desc; }\n.@{fa-css-prefix}-sort-numeric-asc:before { content: @fa-var-sort-numeric-asc; }\n.@{fa-css-prefix}-sort-numeric-desc:before { content: @fa-var-sort-numeric-desc; }\n.@{fa-css-prefix}-thumbs-up:before { content: @fa-var-thumbs-up; }\n.@{fa-css-prefix}-thumbs-down:before { content: @fa-var-thumbs-down; }\n.@{fa-css-prefix}-youtube-square:before { content: @fa-var-youtube-square; }\n.@{fa-css-prefix}-youtube:before { content: @fa-var-youtube; }\n.@{fa-css-prefix}-xing:before { content: @fa-var-xing; }\n.@{fa-css-prefix}-xing-square:before { content: @fa-var-xing-square; }\n.@{fa-css-prefix}-youtube-play:before { content: @fa-var-youtube-play; }\n.@{fa-css-prefix}-dropbox:before { content: @fa-var-dropbox; }\n.@{fa-css-prefix}-stack-overflow:before { content: @fa-var-stack-overflow; }\n.@{fa-css-prefix}-instagram:before { content: @fa-var-instagram; }\n.@{fa-css-prefix}-flickr:before { content: @fa-var-flickr; }\n.@{fa-css-prefix}-adn:before { content: @fa-var-adn; }\n.@{fa-css-prefix}-bitbucket:before { content: @fa-var-bitbucket; }\n.@{fa-css-prefix}-bitbucket-square:before { content: @fa-var-bitbucket-square; }\n.@{fa-css-prefix}-tumblr:before { content: @fa-var-tumblr; }\n.@{fa-css-prefix}-tumblr-square:before { content: @fa-var-tumblr-square; }\n.@{fa-css-prefix}-long-arrow-down:before { content: @fa-var-long-arrow-down; }\n.@{fa-css-prefix}-long-arrow-up:before { content: @fa-var-long-arrow-up; }\n.@{fa-css-prefix}-long-arrow-left:before { content: @fa-var-long-arrow-left; }\n.@{fa-css-prefix}-long-arrow-right:before { content: @fa-var-long-arrow-right; }\n.@{fa-css-prefix}-apple:before { content: @fa-var-apple; }\n.@{fa-css-prefix}-windows:before { content: @fa-var-windows; }\n.@{fa-css-prefix}-android:before { content: @fa-var-android; }\n.@{fa-css-prefix}-linux:before { content: @fa-var-linux; }\n.@{fa-css-prefix}-dribbble:before { content: @fa-var-dribbble; }\n.@{fa-css-prefix}-skype:before { content: @fa-var-skype; }\n.@{fa-css-prefix}-foursquare:before { content: @fa-var-foursquare; }\n.@{fa-css-prefix}-trello:before { content: @fa-var-trello; }\n.@{fa-css-prefix}-female:before { content: @fa-var-female; }\n.@{fa-css-prefix}-male:before { content: @fa-var-male; }\n.@{fa-css-prefix}-gittip:before,\n.@{fa-css-prefix}-gratipay:before { content: @fa-var-gratipay; }\n.@{fa-css-prefix}-sun-o:before { content: @fa-var-sun-o; }\n.@{fa-css-prefix}-moon-o:before { content: @fa-var-moon-o; }\n.@{fa-css-prefix}-archive:before { content: @fa-var-archive; }\n.@{fa-css-prefix}-bug:before { content: @fa-var-bug; }\n.@{fa-css-prefix}-vk:before { content: @fa-var-vk; }\n.@{fa-css-prefix}-weibo:before { content: @fa-var-weibo; }\n.@{fa-css-prefix}-renren:before { content: @fa-var-renren; }\n.@{fa-css-prefix}-pagelines:before { content: @fa-var-pagelines; }\n.@{fa-css-prefix}-stack-exchange:before { content: @fa-var-stack-exchange; }\n.@{fa-css-prefix}-arrow-circle-o-right:before { content: @fa-var-arrow-circle-o-right; }\n.@{fa-css-prefix}-arrow-circle-o-left:before { content: @fa-var-arrow-circle-o-left; }\n.@{fa-css-prefix}-toggle-left:before,\n.@{fa-css-prefix}-caret-square-o-left:before { content: @fa-var-caret-square-o-left; }\n.@{fa-css-prefix}-dot-circle-o:before { content: @fa-var-dot-circle-o; }\n.@{fa-css-prefix}-wheelchair:before { content: @fa-var-wheelchair; }\n.@{fa-css-prefix}-vimeo-square:before { content: @fa-var-vimeo-square; }\n.@{fa-css-prefix}-turkish-lira:before,\n.@{fa-css-prefix}-try:before { content: @fa-var-try; }\n.@{fa-css-prefix}-plus-square-o:before { content: @fa-var-plus-square-o; }\n.@{fa-css-prefix}-space-shuttle:before { content: @fa-var-space-shuttle; }\n.@{fa-css-prefix}-slack:before { content: @fa-var-slack; }\n.@{fa-css-prefix}-envelope-square:before { content: @fa-var-envelope-square; }\n.@{fa-css-prefix}-wordpress:before { content: @fa-var-wordpress; }\n.@{fa-css-prefix}-openid:before { content: @fa-var-openid; }\n.@{fa-css-prefix}-institution:before,\n.@{fa-css-prefix}-bank:before,\n.@{fa-css-prefix}-university:before { content: @fa-var-university; }\n.@{fa-css-prefix}-mortar-board:before,\n.@{fa-css-prefix}-graduation-cap:before { content: @fa-var-graduation-cap; }\n.@{fa-css-prefix}-yahoo:before { content: @fa-var-yahoo; }\n.@{fa-css-prefix}-google:before { content: @fa-var-google; }\n.@{fa-css-prefix}-reddit:before { content: @fa-var-reddit; }\n.@{fa-css-prefix}-reddit-square:before { content: @fa-var-reddit-square; }\n.@{fa-css-prefix}-stumbleupon-circle:before { content: @fa-var-stumbleupon-circle; }\n.@{fa-css-prefix}-stumbleupon:before { content: @fa-var-stumbleupon; }\n.@{fa-css-prefix}-delicious:before { content: @fa-var-delicious; }\n.@{fa-css-prefix}-digg:before { content: @fa-var-digg; }\n.@{fa-css-prefix}-pied-piper-pp:before { content: @fa-var-pied-piper-pp; }\n.@{fa-css-prefix}-pied-piper-alt:before { content: @fa-var-pied-piper-alt; }\n.@{fa-css-prefix}-drupal:before { content: @fa-var-drupal; }\n.@{fa-css-prefix}-joomla:before { content: @fa-var-joomla; }\n.@{fa-css-prefix}-language:before { content: @fa-var-language; }\n.@{fa-css-prefix}-fax:before { content: @fa-var-fax; }\n.@{fa-css-prefix}-building:before { content: @fa-var-building; }\n.@{fa-css-prefix}-child:before { content: @fa-var-child; }\n.@{fa-css-prefix}-paw:before { content: @fa-var-paw; }\n.@{fa-css-prefix}-spoon:before { content: @fa-var-spoon; }\n.@{fa-css-prefix}-cube:before { content: @fa-var-cube; }\n.@{fa-css-prefix}-cubes:before { content: @fa-var-cubes; }\n.@{fa-css-prefix}-behance:before { content: @fa-var-behance; }\n.@{fa-css-prefix}-behance-square:before { content: @fa-var-behance-square; }\n.@{fa-css-prefix}-steam:before { content: @fa-var-steam; }\n.@{fa-css-prefix}-steam-square:before { content: @fa-var-steam-square; }\n.@{fa-css-prefix}-recycle:before { content: @fa-var-recycle; }\n.@{fa-css-prefix}-automobile:before,\n.@{fa-css-prefix}-car:before { content: @fa-var-car; }\n.@{fa-css-prefix}-cab:before,\n.@{fa-css-prefix}-taxi:before { content: @fa-var-taxi; }\n.@{fa-css-prefix}-tree:before { content: @fa-var-tree; }\n.@{fa-css-prefix}-spotify:before { content: @fa-var-spotify; }\n.@{fa-css-prefix}-deviantart:before { content: @fa-var-deviantart; }\n.@{fa-css-prefix}-soundcloud:before { content: @fa-var-soundcloud; }\n.@{fa-css-prefix}-database:before { content: @fa-var-database; }\n.@{fa-css-prefix}-file-pdf-o:before { content: @fa-var-file-pdf-o; }\n.@{fa-css-prefix}-file-word-o:before { content: @fa-var-file-word-o; }\n.@{fa-css-prefix}-file-excel-o:before { content: @fa-var-file-excel-o; }\n.@{fa-css-prefix}-file-powerpoint-o:before { content: @fa-var-file-powerpoint-o; }\n.@{fa-css-prefix}-file-photo-o:before,\n.@{fa-css-prefix}-file-picture-o:before,\n.@{fa-css-prefix}-file-image-o:before { content: @fa-var-file-image-o; }\n.@{fa-css-prefix}-file-zip-o:before,\n.@{fa-css-prefix}-file-archive-o:before { content: @fa-var-file-archive-o; }\n.@{fa-css-prefix}-file-sound-o:before,\n.@{fa-css-prefix}-file-audio-o:before { content: @fa-var-file-audio-o; }\n.@{fa-css-prefix}-file-movie-o:before,\n.@{fa-css-prefix}-file-video-o:before { content: @fa-var-file-video-o; }\n.@{fa-css-prefix}-file-code-o:before { content: @fa-var-file-code-o; }\n.@{fa-css-prefix}-vine:before { content: @fa-var-vine; }\n.@{fa-css-prefix}-codepen:before { content: @fa-var-codepen; }\n.@{fa-css-prefix}-jsfiddle:before { content: @fa-var-jsfiddle; }\n.@{fa-css-prefix}-life-bouy:before,\n.@{fa-css-prefix}-life-buoy:before,\n.@{fa-css-prefix}-life-saver:before,\n.@{fa-css-prefix}-support:before,\n.@{fa-css-prefix}-life-ring:before { content: @fa-var-life-ring; }\n.@{fa-css-prefix}-circle-o-notch:before { content: @fa-var-circle-o-notch; }\n.@{fa-css-prefix}-ra:before,\n.@{fa-css-prefix}-resistance:before,\n.@{fa-css-prefix}-rebel:before { content: @fa-var-rebel; }\n.@{fa-css-prefix}-ge:before,\n.@{fa-css-prefix}-empire:before { content: @fa-var-empire; }\n.@{fa-css-prefix}-git-square:before { content: @fa-var-git-square; }\n.@{fa-css-prefix}-git:before { content: @fa-var-git; }\n.@{fa-css-prefix}-y-combinator-square:before,\n.@{fa-css-prefix}-yc-square:before,\n.@{fa-css-prefix}-hacker-news:before { content: @fa-var-hacker-news; }\n.@{fa-css-prefix}-tencent-weibo:before { content: @fa-var-tencent-weibo; }\n.@{fa-css-prefix}-qq:before { content: @fa-var-qq; }\n.@{fa-css-prefix}-wechat:before,\n.@{fa-css-prefix}-weixin:before { content: @fa-var-weixin; }\n.@{fa-css-prefix}-send:before,\n.@{fa-css-prefix}-paper-plane:before { content: @fa-var-paper-plane; }\n.@{fa-css-prefix}-send-o:before,\n.@{fa-css-prefix}-paper-plane-o:before { content: @fa-var-paper-plane-o; }\n.@{fa-css-prefix}-history:before { content: @fa-var-history; }\n.@{fa-css-prefix}-circle-thin:before { content: @fa-var-circle-thin; }\n.@{fa-css-prefix}-header:before { content: @fa-var-header; }\n.@{fa-css-prefix}-paragraph:before { content: @fa-var-paragraph; }\n.@{fa-css-prefix}-sliders:before { content: @fa-var-sliders; }\n.@{fa-css-prefix}-share-alt:before { content: @fa-var-share-alt; }\n.@{fa-css-prefix}-share-alt-square:before { content: @fa-var-share-alt-square; }\n.@{fa-css-prefix}-bomb:before { content: @fa-var-bomb; }\n.@{fa-css-prefix}-soccer-ball-o:before,\n.@{fa-css-prefix}-futbol-o:before { content: @fa-var-futbol-o; }\n.@{fa-css-prefix}-tty:before { content: @fa-var-tty; }\n.@{fa-css-prefix}-binoculars:before { content: @fa-var-binoculars; }\n.@{fa-css-prefix}-plug:before { content: @fa-var-plug; }\n.@{fa-css-prefix}-slideshare:before { content: @fa-var-slideshare; }\n.@{fa-css-prefix}-twitch:before { content: @fa-var-twitch; }\n.@{fa-css-prefix}-yelp:before { content: @fa-var-yelp; }\n.@{fa-css-prefix}-newspaper-o:before { content: @fa-var-newspaper-o; }\n.@{fa-css-prefix}-wifi:before { content: @fa-var-wifi; }\n.@{fa-css-prefix}-calculator:before { content: @fa-var-calculator; }\n.@{fa-css-prefix}-paypal:before { content: @fa-var-paypal; }\n.@{fa-css-prefix}-google-wallet:before { content: @fa-var-google-wallet; }\n.@{fa-css-prefix}-cc-visa:before { content: @fa-var-cc-visa; }\n.@{fa-css-prefix}-cc-mastercard:before { content: @fa-var-cc-mastercard; }\n.@{fa-css-prefix}-cc-discover:before { content: @fa-var-cc-discover; }\n.@{fa-css-prefix}-cc-amex:before { content: @fa-var-cc-amex; }\n.@{fa-css-prefix}-cc-paypal:before { content: @fa-var-cc-paypal; }\n.@{fa-css-prefix}-cc-stripe:before { content: @fa-var-cc-stripe; }\n.@{fa-css-prefix}-bell-slash:before { content: @fa-var-bell-slash; }\n.@{fa-css-prefix}-bell-slash-o:before { content: @fa-var-bell-slash-o; }\n.@{fa-css-prefix}-trash:before { content: @fa-var-trash; }\n.@{fa-css-prefix}-copyright:before { content: @fa-var-copyright; }\n.@{fa-css-prefix}-at:before { content: @fa-var-at; }\n.@{fa-css-prefix}-eyedropper:before { content: @fa-var-eyedropper; }\n.@{fa-css-prefix}-paint-brush:before { content: @fa-var-paint-brush; }\n.@{fa-css-prefix}-birthday-cake:before { content: @fa-var-birthday-cake; }\n.@{fa-css-prefix}-area-chart:before { content: @fa-var-area-chart; }\n.@{fa-css-prefix}-pie-chart:before { content: @fa-var-pie-chart; }\n.@{fa-css-prefix}-line-chart:before { content: @fa-var-line-chart; }\n.@{fa-css-prefix}-lastfm:before { content: @fa-var-lastfm; }\n.@{fa-css-prefix}-lastfm-square:before { content: @fa-var-lastfm-square; }\n.@{fa-css-prefix}-toggle-off:before { content: @fa-var-toggle-off; }\n.@{fa-css-prefix}-toggle-on:before { content: @fa-var-toggle-on; }\n.@{fa-css-prefix}-bicycle:before { content: @fa-var-bicycle; }\n.@{fa-css-prefix}-bus:before { content: @fa-var-bus; }\n.@{fa-css-prefix}-ioxhost:before { content: @fa-var-ioxhost; }\n.@{fa-css-prefix}-angellist:before { content: @fa-var-angellist; }\n.@{fa-css-prefix}-cc:before { content: @fa-var-cc; }\n.@{fa-css-prefix}-shekel:before,\n.@{fa-css-prefix}-sheqel:before,\n.@{fa-css-prefix}-ils:before { content: @fa-var-ils; }\n.@{fa-css-prefix}-meanpath:before { content: @fa-var-meanpath; }\n.@{fa-css-prefix}-buysellads:before { content: @fa-var-buysellads; }\n.@{fa-css-prefix}-connectdevelop:before { content: @fa-var-connectdevelop; }\n.@{fa-css-prefix}-dashcube:before { content: @fa-var-dashcube; }\n.@{fa-css-prefix}-forumbee:before { content: @fa-var-forumbee; }\n.@{fa-css-prefix}-leanpub:before { content: @fa-var-leanpub; }\n.@{fa-css-prefix}-sellsy:before { content: @fa-var-sellsy; }\n.@{fa-css-prefix}-shirtsinbulk:before { content: @fa-var-shirtsinbulk; }\n.@{fa-css-prefix}-simplybuilt:before { content: @fa-var-simplybuilt; }\n.@{fa-css-prefix}-skyatlas:before { content: @fa-var-skyatlas; }\n.@{fa-css-prefix}-cart-plus:before { content: @fa-var-cart-plus; }\n.@{fa-css-prefix}-cart-arrow-down:before { content: @fa-var-cart-arrow-down; }\n.@{fa-css-prefix}-diamond:before { content: @fa-var-diamond; }\n.@{fa-css-prefix}-ship:before { content: @fa-var-ship; }\n.@{fa-css-prefix}-user-secret:before { content: @fa-var-user-secret; }\n.@{fa-css-prefix}-motorcycle:before { content: @fa-var-motorcycle; }\n.@{fa-css-prefix}-street-view:before { content: @fa-var-street-view; }\n.@{fa-css-prefix}-heartbeat:before { content: @fa-var-heartbeat; }\n.@{fa-css-prefix}-venus:before { content: @fa-var-venus; }\n.@{fa-css-prefix}-mars:before { content: @fa-var-mars; }\n.@{fa-css-prefix}-mercury:before { content: @fa-var-mercury; }\n.@{fa-css-prefix}-intersex:before,\n.@{fa-css-prefix}-transgender:before { content: @fa-var-transgender; }\n.@{fa-css-prefix}-transgender-alt:before { content: @fa-var-transgender-alt; }\n.@{fa-css-prefix}-venus-double:before { content: @fa-var-venus-double; }\n.@{fa-css-prefix}-mars-double:before { content: @fa-var-mars-double; }\n.@{fa-css-prefix}-venus-mars:before { content: @fa-var-venus-mars; }\n.@{fa-css-prefix}-mars-stroke:before { content: @fa-var-mars-stroke; }\n.@{fa-css-prefix}-mars-stroke-v:before { content: @fa-var-mars-stroke-v; }\n.@{fa-css-prefix}-mars-stroke-h:before { content: @fa-var-mars-stroke-h; }\n.@{fa-css-prefix}-neuter:before { content: @fa-var-neuter; }\n.@{fa-css-prefix}-genderless:before { content: @fa-var-genderless; }\n.@{fa-css-prefix}-facebook-official:before { content: @fa-var-facebook-official; }\n.@{fa-css-prefix}-pinterest-p:before { content: @fa-var-pinterest-p; }\n.@{fa-css-prefix}-whatsapp:before { content: @fa-var-whatsapp; }\n.@{fa-css-prefix}-server:before { content: @fa-var-server; }\n.@{fa-css-prefix}-user-plus:before { content: @fa-var-user-plus; }\n.@{fa-css-prefix}-user-times:before { content: @fa-var-user-times; }\n.@{fa-css-prefix}-hotel:before,\n.@{fa-css-prefix}-bed:before { content: @fa-var-bed; }\n.@{fa-css-prefix}-viacoin:before { content: @fa-var-viacoin; }\n.@{fa-css-prefix}-train:before { content: @fa-var-train; }\n.@{fa-css-prefix}-subway:before { content: @fa-var-subway; }\n.@{fa-css-prefix}-medium:before { content: @fa-var-medium; }\n.@{fa-css-prefix}-yc:before,\n.@{fa-css-prefix}-y-combinator:before { content: @fa-var-y-combinator; }\n.@{fa-css-prefix}-optin-monster:before { content: @fa-var-optin-monster; }\n.@{fa-css-prefix}-opencart:before { content: @fa-var-opencart; }\n.@{fa-css-prefix}-expeditedssl:before { content: @fa-var-expeditedssl; }\n.@{fa-css-prefix}-battery-4:before,\n.@{fa-css-prefix}-battery:before,\n.@{fa-css-prefix}-battery-full:before { content: @fa-var-battery-full; }\n.@{fa-css-prefix}-battery-3:before,\n.@{fa-css-prefix}-battery-three-quarters:before { content: @fa-var-battery-three-quarters; }\n.@{fa-css-prefix}-battery-2:before,\n.@{fa-css-prefix}-battery-half:before { content: @fa-var-battery-half; }\n.@{fa-css-prefix}-battery-1:before,\n.@{fa-css-prefix}-battery-quarter:before { content: @fa-var-battery-quarter; }\n.@{fa-css-prefix}-battery-0:before,\n.@{fa-css-prefix}-battery-empty:before { content: @fa-var-battery-empty; }\n.@{fa-css-prefix}-mouse-pointer:before { content: @fa-var-mouse-pointer; }\n.@{fa-css-prefix}-i-cursor:before { content: @fa-var-i-cursor; }\n.@{fa-css-prefix}-object-group:before { content: @fa-var-object-group; }\n.@{fa-css-prefix}-object-ungroup:before { content: @fa-var-object-ungroup; }\n.@{fa-css-prefix}-sticky-note:before { content: @fa-var-sticky-note; }\n.@{fa-css-prefix}-sticky-note-o:before { content: @fa-var-sticky-note-o; }\n.@{fa-css-prefix}-cc-jcb:before { content: @fa-var-cc-jcb; }\n.@{fa-css-prefix}-cc-diners-club:before { content: @fa-var-cc-diners-club; }\n.@{fa-css-prefix}-clone:before { content: @fa-var-clone; }\n.@{fa-css-prefix}-balance-scale:before { content: @fa-var-balance-scale; }\n.@{fa-css-prefix}-hourglass-o:before { content: @fa-var-hourglass-o; }\n.@{fa-css-prefix}-hourglass-1:before,\n.@{fa-css-prefix}-hourglass-start:before { content: @fa-var-hourglass-start; }\n.@{fa-css-prefix}-hourglass-2:before,\n.@{fa-css-prefix}-hourglass-half:before { content: @fa-var-hourglass-half; }\n.@{fa-css-prefix}-hourglass-3:before,\n.@{fa-css-prefix}-hourglass-end:before { content: @fa-var-hourglass-end; }\n.@{fa-css-prefix}-hourglass:before { content: @fa-var-hourglass; }\n.@{fa-css-prefix}-hand-grab-o:before,\n.@{fa-css-prefix}-hand-rock-o:before { content: @fa-var-hand-rock-o; }\n.@{fa-css-prefix}-hand-stop-o:before,\n.@{fa-css-prefix}-hand-paper-o:before { content: @fa-var-hand-paper-o; }\n.@{fa-css-prefix}-hand-scissors-o:before { content: @fa-var-hand-scissors-o; }\n.@{fa-css-prefix}-hand-lizard-o:before { content: @fa-var-hand-lizard-o; }\n.@{fa-css-prefix}-hand-spock-o:before { content: @fa-var-hand-spock-o; }\n.@{fa-css-prefix}-hand-pointer-o:before { content: @fa-var-hand-pointer-o; }\n.@{fa-css-prefix}-hand-peace-o:before { content: @fa-var-hand-peace-o; }\n.@{fa-css-prefix}-trademark:before { content: @fa-var-trademark; }\n.@{fa-css-prefix}-registered:before { content: @fa-var-registered; }\n.@{fa-css-prefix}-creative-commons:before { content: @fa-var-creative-commons; }\n.@{fa-css-prefix}-gg:before { content: @fa-var-gg; }\n.@{fa-css-prefix}-gg-circle:before { content: @fa-var-gg-circle; }\n.@{fa-css-prefix}-tripadvisor:before { content: @fa-var-tripadvisor; }\n.@{fa-css-prefix}-odnoklassniki:before { content: @fa-var-odnoklassniki; }\n.@{fa-css-prefix}-odnoklassniki-square:before { content: @fa-var-odnoklassniki-square; }\n.@{fa-css-prefix}-get-pocket:before { content: @fa-var-get-pocket; }\n.@{fa-css-prefix}-wikipedia-w:before { content: @fa-var-wikipedia-w; }\n.@{fa-css-prefix}-safari:before { content: @fa-var-safari; }\n.@{fa-css-prefix}-chrome:before { content: @fa-var-chrome; }\n.@{fa-css-prefix}-firefox:before { content: @fa-var-firefox; }\n.@{fa-css-prefix}-opera:before { content: @fa-var-opera; }\n.@{fa-css-prefix}-internet-explorer:before { content: @fa-var-internet-explorer; }\n.@{fa-css-prefix}-tv:before,\n.@{fa-css-prefix}-television:before { content: @fa-var-television; }\n.@{fa-css-prefix}-contao:before { content: @fa-var-contao; }\n.@{fa-css-prefix}-500px:before { content: @fa-var-500px; }\n.@{fa-css-prefix}-amazon:before { content: @fa-var-amazon; }\n.@{fa-css-prefix}-calendar-plus-o:before { content: @fa-var-calendar-plus-o; }\n.@{fa-css-prefix}-calendar-minus-o:before { content: @fa-var-calendar-minus-o; }\n.@{fa-css-prefix}-calendar-times-o:before { content: @fa-var-calendar-times-o; }\n.@{fa-css-prefix}-calendar-check-o:before { content: @fa-var-calendar-check-o; }\n.@{fa-css-prefix}-industry:before { content: @fa-var-industry; }\n.@{fa-css-prefix}-map-pin:before { content: @fa-var-map-pin; }\n.@{fa-css-prefix}-map-signs:before { content: @fa-var-map-signs; }\n.@{fa-css-prefix}-map-o:before { content: @fa-var-map-o; }\n.@{fa-css-prefix}-map:before { content: @fa-var-map; }\n.@{fa-css-prefix}-commenting:before { content: @fa-var-commenting; }\n.@{fa-css-prefix}-commenting-o:before { content: @fa-var-commenting-o; }\n.@{fa-css-prefix}-houzz:before { content: @fa-var-houzz; }\n.@{fa-css-prefix}-vimeo:before { content: @fa-var-vimeo; }\n.@{fa-css-prefix}-black-tie:before { content: @fa-var-black-tie; }\n.@{fa-css-prefix}-fonticons:before { content: @fa-var-fonticons; }\n.@{fa-css-prefix}-reddit-alien:before { content: @fa-var-reddit-alien; }\n.@{fa-css-prefix}-edge:before { content: @fa-var-edge; }\n.@{fa-css-prefix}-credit-card-alt:before { content: @fa-var-credit-card-alt; }\n.@{fa-css-prefix}-codiepie:before { content: @fa-var-codiepie; }\n.@{fa-css-prefix}-modx:before { content: @fa-var-modx; }\n.@{fa-css-prefix}-fort-awesome:before { content: @fa-var-fort-awesome; }\n.@{fa-css-prefix}-usb:before { content: @fa-var-usb; }\n.@{fa-css-prefix}-product-hunt:before { content: @fa-var-product-hunt; }\n.@{fa-css-prefix}-mixcloud:before { content: @fa-var-mixcloud; }\n.@{fa-css-prefix}-scribd:before { content: @fa-var-scribd; }\n.@{fa-css-prefix}-pause-circle:before { content: @fa-var-pause-circle; }\n.@{fa-css-prefix}-pause-circle-o:before { content: @fa-var-pause-circle-o; }\n.@{fa-css-prefix}-stop-circle:before { content: @fa-var-stop-circle; }\n.@{fa-css-prefix}-stop-circle-o:before { content: @fa-var-stop-circle-o; }\n.@{fa-css-prefix}-shopping-bag:before { content: @fa-var-shopping-bag; }\n.@{fa-css-prefix}-shopping-basket:before { content: @fa-var-shopping-basket; }\n.@{fa-css-prefix}-hashtag:before { content: @fa-var-hashtag; }\n.@{fa-css-prefix}-bluetooth:before { content: @fa-var-bluetooth; }\n.@{fa-css-prefix}-bluetooth-b:before { content: @fa-var-bluetooth-b; }\n.@{fa-css-prefix}-percent:before { content: @fa-var-percent; }\n.@{fa-css-prefix}-gitlab:before { content: @fa-var-gitlab; }\n.@{fa-css-prefix}-wpbeginner:before { content: @fa-var-wpbeginner; }\n.@{fa-css-prefix}-wpforms:before { content: @fa-var-wpforms; }\n.@{fa-css-prefix}-envira:before { content: @fa-var-envira; }\n.@{fa-css-prefix}-universal-access:before { content: @fa-var-universal-access; }\n.@{fa-css-prefix}-wheelchair-alt:before { content: @fa-var-wheelchair-alt; }\n.@{fa-css-prefix}-question-circle-o:before { content: @fa-var-question-circle-o; }\n.@{fa-css-prefix}-blind:before { content: @fa-var-blind; }\n.@{fa-css-prefix}-audio-description:before { content: @fa-var-audio-description; }\n.@{fa-css-prefix}-volume-control-phone:before { content: @fa-var-volume-control-phone; }\n.@{fa-css-prefix}-braille:before { content: @fa-var-braille; }\n.@{fa-css-prefix}-assistive-listening-systems:before { content: @fa-var-assistive-listening-systems; }\n.@{fa-css-prefix}-asl-interpreting:before,\n.@{fa-css-prefix}-american-sign-language-interpreting:before { content: @fa-var-american-sign-language-interpreting; }\n.@{fa-css-prefix}-deafness:before,\n.@{fa-css-prefix}-hard-of-hearing:before,\n.@{fa-css-prefix}-deaf:before { content: @fa-var-deaf; }\n.@{fa-css-prefix}-glide:before { content: @fa-var-glide; }\n.@{fa-css-prefix}-glide-g:before { content: @fa-var-glide-g; }\n.@{fa-css-prefix}-signing:before,\n.@{fa-css-prefix}-sign-language:before { content: @fa-var-sign-language; }\n.@{fa-css-prefix}-low-vision:before { content: @fa-var-low-vision; }\n.@{fa-css-prefix}-viadeo:before { content: @fa-var-viadeo; }\n.@{fa-css-prefix}-viadeo-square:before { content: @fa-var-viadeo-square; }\n.@{fa-css-prefix}-snapchat:before { content: @fa-var-snapchat; }\n.@{fa-css-prefix}-snapchat-ghost:before { content: @fa-var-snapchat-ghost; }\n.@{fa-css-prefix}-snapchat-square:before { content: @fa-var-snapchat-square; }\n.@{fa-css-prefix}-pied-piper:before { content: @fa-var-pied-piper; }\n.@{fa-css-prefix}-first-order:before { content: @fa-var-first-order; }\n.@{fa-css-prefix}-yoast:before { content: @fa-var-yoast; }\n.@{fa-css-prefix}-themeisle:before { content: @fa-var-themeisle; }\n.@{fa-css-prefix}-google-plus-circle:before,\n.@{fa-css-prefix}-google-plus-official:before { content: @fa-var-google-plus-official; }\n.@{fa-css-prefix}-fa:before,\n.@{fa-css-prefix}-font-awesome:before { content: @fa-var-font-awesome; }\n.@{fa-css-prefix}-handshake-o:before { content: @fa-var-handshake-o; }\n.@{fa-css-prefix}-envelope-open:before { content: @fa-var-envelope-open; }\n.@{fa-css-prefix}-envelope-open-o:before { content: @fa-var-envelope-open-o; }\n.@{fa-css-prefix}-linode:before { content: @fa-var-linode; }\n.@{fa-css-prefix}-address-book:before { content: @fa-var-address-book; }\n.@{fa-css-prefix}-address-book-o:before { content: @fa-var-address-book-o; }\n.@{fa-css-prefix}-vcard:before,\n.@{fa-css-prefix}-address-card:before { content: @fa-var-address-card; }\n.@{fa-css-prefix}-vcard-o:before,\n.@{fa-css-prefix}-address-card-o:before { content: @fa-var-address-card-o; }\n.@{fa-css-prefix}-user-circle:before { content: @fa-var-user-circle; }\n.@{fa-css-prefix}-user-circle-o:before { content: @fa-var-user-circle-o; }\n.@{fa-css-prefix}-user-o:before { content: @fa-var-user-o; }\n.@{fa-css-prefix}-id-badge:before { content: @fa-var-id-badge; }\n.@{fa-css-prefix}-drivers-license:before,\n.@{fa-css-prefix}-id-card:before { content: @fa-var-id-card; }\n.@{fa-css-prefix}-drivers-license-o:before,\n.@{fa-css-prefix}-id-card-o:before { content: @fa-var-id-card-o; }\n.@{fa-css-prefix}-quora:before { content: @fa-var-quora; }\n.@{fa-css-prefix}-free-code-camp:before { content: @fa-var-free-code-camp; }\n.@{fa-css-prefix}-telegram:before { content: @fa-var-telegram; }\n.@{fa-css-prefix}-thermometer-4:before,\n.@{fa-css-prefix}-thermometer:before,\n.@{fa-css-prefix}-thermometer-full:before { content: @fa-var-thermometer-full; }\n.@{fa-css-prefix}-thermometer-3:before,\n.@{fa-css-prefix}-thermometer-three-quarters:before { content: @fa-var-thermometer-three-quarters; }\n.@{fa-css-prefix}-thermometer-2:before,\n.@{fa-css-prefix}-thermometer-half:before { content: @fa-var-thermometer-half; }\n.@{fa-css-prefix}-thermometer-1:before,\n.@{fa-css-prefix}-thermometer-quarter:before { content: @fa-var-thermometer-quarter; }\n.@{fa-css-prefix}-thermometer-0:before,\n.@{fa-css-prefix}-thermometer-empty:before { content: @fa-var-thermometer-empty; }\n.@{fa-css-prefix}-shower:before { content: @fa-var-shower; }\n.@{fa-css-prefix}-bathtub:before,\n.@{fa-css-prefix}-s15:before,\n.@{fa-css-prefix}-bath:before { content: @fa-var-bath; }\n.@{fa-css-prefix}-podcast:before { content: @fa-var-podcast; }\n.@{fa-css-prefix}-window-maximize:before { content: @fa-var-window-maximize; }\n.@{fa-css-prefix}-window-minimize:before { content: @fa-var-window-minimize; }\n.@{fa-css-prefix}-window-restore:before { content: @fa-var-window-restore; }\n.@{fa-css-prefix}-times-rectangle:before,\n.@{fa-css-prefix}-window-close:before { content: @fa-var-window-close; }\n.@{fa-css-prefix}-times-rectangle-o:before,\n.@{fa-css-prefix}-window-close-o:before { content: @fa-var-window-close-o; }\n.@{fa-css-prefix}-bandcamp:before { content: @fa-var-bandcamp; }\n.@{fa-css-prefix}-grav:before { content: @fa-var-grav; }\n.@{fa-css-prefix}-etsy:before { content: @fa-var-etsy; }\n.@{fa-css-prefix}-imdb:before { content: @fa-var-imdb; }\n.@{fa-css-prefix}-ravelry:before { content: @fa-var-ravelry; }\n.@{fa-css-prefix}-eercast:before { content: @fa-var-eercast; }\n.@{fa-css-prefix}-microchip:before { content: @fa-var-microchip; }\n.@{fa-css-prefix}-snowflake-o:before { content: @fa-var-snowflake-o; }\n.@{fa-css-prefix}-superpowers:before { content: @fa-var-superpowers; }\n.@{fa-css-prefix}-wpexplorer:before { content: @fa-var-wpexplorer; }\n.@{fa-css-prefix}-meetup:before { content: @fa-var-meetup; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot":
/*!*****************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8b43027f47b20503057dfbbaa9401fef.eot");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8b43027f47b20503057dfbbaa9401fef.eot");

/***/ }),

/***/ "./node_modules/shaka-player/dist/shaka-player.compiled.js":
/*!*****************************************************************!*\
  !*** ./node_modules/shaka-player/dist/shaka-player.compiled.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
(function(){var innerGlobal=typeof window!="undefined"?window:__webpack_require__.g;var exportTo={};(function(window,global,module){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function ha(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
ha("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
ha("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ja(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ka="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function qa(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fg=b.prototype}function ra(){this.s=!1;this.l=null;this.h=void 0;this.g=1;this.j=this.m=0;this.D=this.i=null}function sa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}ra.prototype.u=function(a){this.h=a};
function ta(a,b){a.i={$d:b,fe:!0};a.g=a.m||a.j}ra.prototype["return"]=function(a){this.i={"return":a};this.g=this.j};function v(a,b,c){a.g=c;return{value:b}}ra.prototype.v=function(a){this.g=a};function z(a){a.g=0}function A(a,b,c){a.m=b;void 0!=c&&(a.j=c)}function ua(a){a.m=0;a.j=2}function va(a,b){a.g=b;a.m=0}function E(a){a.m=0;var b=a.i.$d;a.i=null;return b}function wa(a){a.D=[a.i];a.m=0;a.j=0}
function xa(a,b){var c=a.D.splice(0)[0];(c=a.i=a.i||c)?c.fe?a.g=a.m||a.j:void 0!=c.v&&a.j<c.v?(a.g=c.v,a.i=null):a.g=a.j:a.g=b}function za(a){this.g=new ra;this.h=a}function Aa(a,b){sa(a.g);var c=a.g.l;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g["return"]);a.g["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.s=!1,e;var f=e.value}catch(g){return a.g.l=null,ta(a.g,g),Ca(a)}a.g.l=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.s=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ta(a.g,c)}a.g.s=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.fe)throw b.$d;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){sa(a.g);a.g.l?b=Ba(a,a.g.l.next,b,a.g.u):(a.g.u(b),b=Ca(a));return b};this["throw"]=function(b){sa(a.g);a.g.l?b=Ba(a,a.g.l["throw"],b,a.g.u):(ta(a.g,b),b=Ca(a));return b};this["return"]=function(b){return Aa(a,b)};this[Symbol.iterator]=function(){return this}}function Fa(a,b){var c=new Ea(new za(b));pa&&a.prototype&&pa(c,a.prototype);return c}
function Ha(a){function b(d){return a.next(d)}function c(d){return a["throw"](d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})}function I(a){return Ha(new Ea(new za(a)))}
ha("Promise",function(a){function b(g){this.h=0;this.i=void 0;this.g=[];this.s=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(g)};var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=
g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(g){this.i(function(){throw g;})};b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:g(this.J),reject:g(this.l)}};b.prototype.J=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.N(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.H(g):this.m(g)}};
b.prototype.H=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.S(h,g):this.m(g)};b.prototype.l=function(g){this.u(2,g)};b.prototype.m=function(g){this.u(1,g)};b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.i=h;2===this.h&&this.L();this.D()};b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};b.prototype.F=
function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};b.prototype.D=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.h(this.g[g]);this.g=null}};var f=new c;
b.prototype.N=function(g){var h=this.j();g.uc(h.resolve,h.reject)};b.prototype.S=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(g,h){function k(p,r){return"function"==typeof p?function(u){try{l(p(u))}catch(w){m(w)}}:r}var l,m,n=new b(function(p,r){l=p;m=r});this.uc(k(g,l),k(h,m));return n};b.prototype["catch"]=function(g){return this.then(void 0,g)};b.prototype.uc=function(g,h){function k(){switch(l.h){case 1:g(l.i);break;case 2:h(l.i);
break;default:throw Error("Unexpected state: "+l.h);}}var l=this;null==this.g?f.h(k):this.g.push(k);this.s=!0};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).uc(h,k)})};b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(w){p[u]=w;r--;0==r&&l(p)}}var p=[],r=0;do p.push(void 0),r++,d(k.value).uc(n(p.length-1),m),k=h.next();
while(!k.done)})};return b});function Ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ha("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}function c(){}function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}function e(k){if(!Ia(k,g)){var l=new c;ba(k,g,{value:l})}}function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),
m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};b.prototype.get=function(k){return d(k)&&Ia(k,g)?k[g][this.g]:void 0};b.prototype.has=function(k){return d(k)&&
Ia(k,g)&&Ia(k[g],this.g)};b.prototype["delete"]=function(k){return d(k)&&Ia(k,g)&&Ia(k[g],this.g)?delete k[g][this.g]:!1};return b});
ha("Map",function(a){function b(){var h={};return h.Sa=h.next=h.head=h}function c(h,k){var l=h.g;return ia(function(){if(l){for(;l.head!=h.g;)l=l.Sa;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.h[l];if(m&&Ia(h.h,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,ga:p}}return{id:l,
list:m,index:-1,ga:void 0}}function e(h){this.h={};this.g=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.h[l.id]=[]);l.ga?l.ga.value=k:(l.ga={next:this.g,Sa:this.g.Sa,head:this.g,key:h,value:k},l.list.push(l.ga),this.g.Sa.next=l.ga,this.g.Sa=l.ga,this.size++);return this};e.prototype["delete"]=function(h){h=d(this,h);return h.ga&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.h[h.id],h.ga.Sa.next=h.ga.next,h.ga.next.Sa=h.ga.Sa,
h.ga.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.h={};this.g=this.g.Sa=b();this.size=0};e.prototype.has=function(h){return!!d(this,h).ga};e.prototype.get=function(h){return(h=d(this,h).ga)&&h.value};e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};e.prototype.keys=function(){return c(this,function(h){return h.key})};e.prototype.values=function(){return c(this,function(h){return h.value})};e.prototype.forEach=function(h,k){for(var l=this.entries(),
m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ha("Set",function(a){function b(c){this.g=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||
f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};b.prototype["delete"]=function(c){c=this.g["delete"](c);this.size=this.g.size;return c};b.prototype.clear=function(){this.g.clear();this.size=0};b.prototype.has=function(c){return this.g.has(c)};b.prototype.entries=function(){return this.g.entries()};b.prototype.values=function(){return this.g.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};return b});function Ja(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{ha:e,ze:f}}return{ha:-1,ze:void 0}}ha("Array.prototype.findIndex",function(a){return a?a:function(b,c){return Ja(this,b,c).ha}});
ha("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});ha("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}ha("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});ha("Array.prototype.find",function(a){return a?a:function(b,c){return Ja(this,b,c).ze}});
ha("String.prototype.startsWith",function(a){return a?a:function(b,c){for(var d=Ka(this,b,"startsWith"),e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}
ha("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});var Ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ia(d,e)&&(a[e]=d[e])}return a};ha("Object.assign",function(a){return a||Ma});
ha("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});ha("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
ha("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});ha("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
ha("String.prototype.repeat",function(a){return a?a:function(b){var c=Ka(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});ha("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ia(b,d)&&c.push(b[d]);return c}});ha("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});
ha("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ia(b,d)&&c.push([d,b[d]]);return c}});var Na=this||self;function L(a,b){var c=a.split("."),d=Na;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b};/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Oa(a){this.i=Math.exp(Math.log(.5)/a);this.h=this.g=0}function Pa(a,b,c){var d=Math.pow(a.i,b);c=c*(1-d)+d*a.g;isNaN(c)||(a.g=c,a.h+=b)}function Qa(a){return a.g/(1-Math.pow(a.i,a.h))};function Sa(){this.h=new Oa(2);this.i=new Oa(5);this.g=0}Sa.prototype.getBandwidthEstimate=function(a){return 128E3>this.g?a:Math.min(Qa(this.h),Qa(this.i))};function Ta(){}function Ua(){}function Va(){}function Wa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];Xa.has(a)||(Xa.add(a),Va.apply(Ta,ja(c)))}function Ya(){}function Za(){}function $a(){}function ab(){}var Xa=new Set;
if(window.console&&window.console.log.bind){var bb={},cb=(bb[1]=console.error.bind(console),bb[2]=console.warn.bind(console),bb[3]=console.info.bind(console),bb[4]=console.log.bind(console),bb[5]=console.debug.bind(console),bb[6]=console.debug.bind(console),bb);Va=cb[2];Ua=cb[1]};function db(a,b){for(var c=[],d=t(a),e=d.next();!e.done;e=d.next())c.push(b(e.value));return c}function gb(a,b){for(var c=t(a),d=c.next();!d.done;d=c.next())if(!b(d.value))return!1;return!0}
var ib=function hb(a){var c;return Fa(hb,function(d){1==d.g&&(c=0);if(3!=d.g)return c<a?v(d,c,3):d.v(0);c++;return d.v(2)})},kb=function jb(a){var c,d,e,f,g,h;return Fa(jb,function(k){1==k.g&&(c=-1,e=d=void 0,f=t(a),g=f.next());if(5!=k.g){if(g.done)return-1==c?k.v(0):v(k,{ha:c,Ef:d,item:e,next:void 0},0);h=g.value;return 0<=c?v(k,{ha:c,item:e,Ef:d,next:h},5):k.v(5)}c++;d=e;e=h;g=f.next();return k.v(2)})};function mb(a,b){return"number"===typeof a&&"number"===typeof b&&isNaN(a)&&isNaN(b)?!0:a===b}function nb(a,b){var c=a.indexOf(b);-1<c&&a.splice(c,1)}function ob(a,b,c){c||(c=mb);if(a.length!=b.length)return!1;b=b.slice();var d={};a=t(a);for(var e=a.next();!e.done;d={Tc:d.Tc},e=a.next()){d.Tc=e.value;e=b.findIndex(function(f){return function(g){return c(f.Tc,g)}}(d));if(-1==e)return!1;b[e]=b[b.length-1];b.pop()}return 0==b.length}
function pb(a,b,c){c||(c=mb);if(a.length!=b.length)return!1;for(var d=0;d<a.length;d++)if(!c(a[d],b[d]))return!1;return!0};function qb(a,b,c){this.startTime=a;this.direction=rb;this.endTime=b;this.payload=c;this.region=new sb;this.position=null;this.positionAlign=tb;this.size=0;this.textAlign=vb;this.writingMode=wb;this.lineInterpretation=xb;this.line=null;this.lineHeight="";this.lineAlign=yb;this.displayAlign=zb;this.fontSize=this.border=this.backgroundImage=this.backgroundColor=this.color="";this.fontWeight=Ab;this.fontStyle=Bb;this.linePadding=this.letterSpacing=this.fontFamily="";this.opacity=1;this.textDecoration=
[];this.wrapLine=!0;this.id="";this.nestedCues=[];this.spacer=this.lineBreak=!1;this.cellResolution={columns:32,rows:15}}qb.prototype.clone=function(){var a=new qb(0,0,""),b;for(b in this)a[b]=this[b],a[b]&&a[b].constructor==Array&&(a[b]=a[b].slice());return a};
function Cb(a,b){if(a.startTime!=b.startTime||a.endTime!=b.endTime||a.payload!=b.payload)return!1;for(var c in a)if("startTime"!=c&&"endTime"!=c&&"payload"!=c)if("nestedCues"==c){if(!pb(a.nestedCues,b.nestedCues,Cb))return!1}else if("region"==c||"cellResolution"==c)for(var d in a[c]){if(a[c][d]!=b[c][d])return!1}else if(Array.isArray(a[c])){if(!pb(a[c],b[c]))return!1}else if(a[c]!=b[c])return!1;return!0}L("shaka.text.Cue",qb);var tb="auto";
qb.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:tb};var vb="center",Db={LEFT:"left",RIGHT:"right",CENTER:vb,START:"start",END:"end"};qb.textAlign=Db;var zb="after",Eb={BEFORE:"before",CENTER:"center",AFTER:zb};qb.displayAlign=Eb;var rb="ltr";qb.direction={HORIZONTAL_LEFT_TO_RIGHT:rb,HORIZONTAL_RIGHT_TO_LEFT:"rtl"};var wb="horizontal-tb";qb.writingMode={HORIZONTAL_TOP_TO_BOTTOM:wb,VERTICAL_LEFT_TO_RIGHT:"vertical-lr",VERTICAL_RIGHT_TO_LEFT:"vertical-rl"};var xb=0;
qb.lineInterpretation={LINE_NUMBER:xb,PERCENTAGE:1};var yb="start",Fb={CENTER:"center",START:yb,END:"end"};qb.lineAlign=Fb;var Gb={white:"#FFF",lime:"#0F0",cyan:"#0FF",red:"#F00",yellow:"#FF0",magenta:"#F0F",blue:"#00F",black:"#000"};qb.defaultTextColor=Gb;var Hb={bg_white:"#FFF",bg_lime:"#0F0",bg_cyan:"#0FF",bg_red:"#F00",bg_yellow:"#FF0",bg_magenta:"#F0F",bg_blue:"#00F",bg_black:"#000"};qb.defaultTextBackgroundColor=Hb;var Ab=400;qb.fontWeight={NORMAL:Ab,BOLD:700};
var Bb="normal",Ib={NORMAL:Bb,ITALIC:"italic",OBLIQUE:"oblique"};qb.fontStyle=Ib;qb.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};function sb(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Jb;this.scroll=Kb}L("shaka.text.CueRegion",sb);var Jb=1;sb.units={PX:0,PERCENTAGE:Jb,LINES:2};var Kb="";sb.scrollMode={NONE:Kb,UP:"up"};function Lb(){}function Mb(a,b){if(!a&&!b)return!0;if(!a||!b||a.byteLength!=b.byteLength)return!1;if(Nb(a)==Nb(b)&&(a.byteOffset||0)==(b.byteOffset||0))return!0;for(var c=Ob(a),d=Ob(b),e=t(ib(a.byteLength)),f=e.next();!f.done;f=e.next())if(f=f.value,c[f]!=d[f])return!1;return!0}function Nb(a){return a instanceof ArrayBuffer?a:a.buffer}function Pb(a){return a instanceof ArrayBuffer?a:0==a.byteOffset&&a.byteLength==a.buffer.byteLength?a.buffer:(new Uint8Array(a)).buffer}
function Ob(a,b,c){c=void 0===c?Infinity:c;return Rb(a,void 0===b?0:b,c,Uint8Array)}function Sb(a,b,c){c=void 0===c?Infinity:c;return Rb(a,void 0===b?0:b,c,DataView)}function Rb(a,b,c,d){var e=(a.byteOffset||0)+a.byteLength;b=Math.max(0,Math.min((a.byteOffset||0)+b,e));return new d(Nb(a),b,Math.min(b+Math.max(c,0),e)-b)}L("shaka.util.BufferUtils",Lb);Lb.toDataView=Sb;Lb.toUint8=Ob;Lb.toArrayBuffer=Pb;Lb.equal=Mb;function Tb(a,b){this.g=a;this.h=b}Tb.prototype.toString=function(){return"v"+this.g+"."+this.h};function Ub(a,b){var c=new Tb(4,0),d=Vb,e=d.g,f=c.h-e.h;(0<(c.g-e.g||f)?d.i:d.h)(d.g,c,a,b)}function Wb(a,b,c,d){Va([c,"has been deprecated and will be removed in",b,". We are currently at version",a,". Additional information:",d].join(" "))}function Xb(a,b,c,d){Ua([c,"has been deprecated and has been removed in",b,". We are now at version",a,". Additional information:",d].join(""))}var Vb=null;function Yb(a,b){return a.concat(b)}function Zb(){}function $b(a){return null!=a}function ac(a){var b=Object.create(a.prototype||Object.prototype);try{var c=a.call(b);c||(Ub("Factories requiring new","Factories should be plain functions"),c=b)}catch(d){Ub("Factories requiring new","Factories should be plain functions"),c=new a}return c};function bc(){}L("shaka.dependencies",bc);bc.has=function(a){return cc.has(a)};bc.add=function(a,b){if(!dc[a])throw Error(a+" is not supported");cc.set(a,function(){return b})};var dc={muxjs:"muxjs"};bc.Allowed=dc;var cc=new Map([["muxjs",function(){return window.muxjs}]]);function O(a,b,c,d){for(var e=[],f=3;f<arguments.length;++f)e[f-3]=arguments[f];this.severity=a;this.category=b;this.code=c;this.data=e;this.handled=!1}O.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};L("shaka.util.Error",O);O.Severity={RECOVERABLE:1,CRITICAL:2};O.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9,ADS:10};
O.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,ATTEMPTS_EXHAUSTED:1010,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,INVALID_MP4_CEA:2010,TEXT_COULD_NOT_GUESS_MIME_TYPE:2011,CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS:2012,
TEXT_ONLY_WEBVTT_SRC_EQUALS:2013,MISSING_TEXT_PLUGIN:2014,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,
MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,CONTENT_TRANSFORMATION_FAILED:3019,UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,RESTRICTIONS_CANNOT_BE_MET:4012,
HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,
HLS_AES_128_ENCRYPTION_NOT_SUPPORTED:4034,HLS_INTERNAL_SKIP_STREAM:4035,NO_VARIANTS:4036,PERIOD_FLATTENING_FAILED:4037,INCONSISTENT_DRM_ACROSS_PERIODS:4038,HLS_VARIABLE_NOT_FOUND:4039,STREAMING_ENGINE_STARTUP_INVALID_STATE:5006,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,
ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,SERVER_CERTIFICATE_REQUIRED:6015,INIT_DATA_TRANSFORM_ERROR:6016,SERVER_CERTIFICATE_REQUEST_FAILED:6017,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,OBJECT_DESTROYED:7003,CONTENT_NOT_LOADED:7004,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,
STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013,STORAGE_LIMIT_REACHED:9014,DOWNLOAD_SIZE_CALLBACK_ERROR:9015,CS_IMA_SDK_MISSING:1E4,CS_AD_MANAGER_NOT_INITIALIZED:10001,SS_IMA_SDK_MISSING:10002,SS_AD_MANAGER_NOT_INITIALIZED:10003,CURRENT_DAI_REQUEST_NOT_FINISHED:10004};/*
 @license
 Copyright 2008 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
var ec=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;/*
 @license
 Copyright 2006 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
function fc(a){var b;a instanceof fc?(hc(this,a.Ea),this.pb=a.pb,this.Ga=a.Ga,ic(this,a.Db),this.ya=a.ya,jc(this,a.g.clone()),this.fb=a.fb):a&&(b=String(a).match(ec))?(hc(this,b[1]||"",!0),this.pb=kc(b[2]||""),this.Ga=kc(b[3]||"",!0),ic(this,b[4]),this.ya=kc(b[5]||"",!0),jc(this,b[6]||"",!0),this.fb=kc(b[7]||"")):this.g=new lc(null)}q=fc.prototype;q.Ea="";q.pb="";q.Ga="";q.Db=null;q.ya="";q.fb="";
q.toString=function(){var a=[],b=this.Ea;b&&a.push(mc(b,nc,!0),":");if(b=this.Ga){a.push("//");var c=this.pb;c&&a.push(mc(c,nc,!0),"@");a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.Db;null!=b&&a.push(":",String(b))}if(b=this.ya)this.Ga&&"/"!=b.charAt(0)&&a.push("/"),a.push(mc(b,"/"==b.charAt(0)?oc:pc,!0));(b=this.g.toString())&&a.push("?",b);(b=this.fb)&&a.push("#",mc(b,qc));return a.join("")};
q.resolve=function(a){var b=this.clone();"data"===b.Ea&&(b=new fc);var c=!!a.Ea;c?hc(b,a.Ea):c=!!a.pb;c?b.pb=a.pb:c=!!a.Ga;c?b.Ga=a.Ga:c=null!=a.Db;var d=a.ya;if(c)ic(b,a.Db);else if(c=!!a.ya){if("/"!=d.charAt(0))if(this.Ga&&!this.ya)d="/"+d;else{var e=b.ya.lastIndexOf("/");-1!=e&&(d=b.ya.substr(0,e+1)+d)}if(".."==d||"."==d)d="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){e=0==d.lastIndexOf("/",0);d=d.split("/");for(var f=[],g=0;g<d.length;){var h=d[g++];"."==h?e&&g==d.length&&f.push(""):".."==
h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),e&&g==d.length&&f.push("")):(f.push(h),e=!0)}d=f.join("/")}}c?b.ya=d:c=""!==a.g.toString();c?jc(b,a.g.clone()):c=!!a.fb;c&&(b.fb=a.fb);return b};q.clone=function(){return new fc(this)};function hc(a,b,c){a.Ea=c?kc(b,!0):b;a.Ea&&(a.Ea=a.Ea.replace(/:$/,""))}function ic(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Db=b}else a.Db=null}function jc(a,b,c){b instanceof lc?a.g=b:(c||(b=mc(b,rc)),a.g=new lc(b))}
function kc(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}function mc(a,b,c){return null!=a?(a=encodeURI(a).replace(b,sc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sc(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nc=/[#\/\?@]/g,pc=/[#\?:]/g,oc=/[#\?]/g,rc=/[#\?@]/g,qc=/#/g;function lc(a){this.g=a||null}q=lc.prototype;q.va=null;q.wc=null;
q.add=function(a,b){if(!this.va&&(this.va={},this.wc=0,this.g))for(var c=this.g.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];g=decodeURIComponent(g.replace(/\+/g," "));f=f||"";this.add(g,decodeURIComponent(f.replace(/\+/g," ")))}this.g=null;(c=this.va.hasOwnProperty(a)&&this.va[a])||(this.va[a]=c=[]);c.push(b);this.wc++;return this};
q.toString=function(){if(this.g)return this.g;if(!this.va)return"";var a=[],b;for(b in this.va)for(var c=encodeURIComponent(b),d=this.va[b],e=0;e<d.length;e++){var f=c;""!==d[e]&&(f+="="+encodeURIComponent(d[e]));a.push(f)}return this.g=a.join("&")};q.clone=function(){var a=new lc;a.g=this.g;if(this.va){var b={},c;for(c in this.va)b[c]=this.va[c].concat();a.va=b;a.wc=this.wc}return a};function tc(a,b){if(0==b.length)return a;var c=b.map(function(d){return new fc(d)});return a.map(function(d){return new fc(d)}).map(function(d){return c.map(function(e){return d.resolve(e)})}).reduce(Yb,[]).map(function(d){return d.toString()})}function uc(a,b){return{keySystem:a,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,serverCertificateUri:"",sessionType:"",initData:b||[],keyIds:new Set}}
function vc(a,b){if(1==b.length)return b[0];var c=wc(a,b);if(null!=c)return c;throw new O(2,4,4025,b);}function wc(a,b){for(var c=t(xc[a]),d=c.next();!d.done;d=c.next()){d=d.value;for(var e=t(b),f=e.next();!f.done;f=e.next())if(f=f.value,d.test(f.trim()))return f.trim()}return a==yc?"":null}var yc="text",zc={Na:"video",bb:"audio",aa:yc,Mb:"image",ag:"application"},xc={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]};function Ac(){var a,b,c=new Promise(function(d,e){a=d;b=e});c.resolve=a;c.reject=b;return c}Ac.prototype.resolve=function(){};Ac.prototype.reject=function(){};function Bc(a){this.h=a;this.g=void 0}Bc.prototype.value=function(){void 0==this.g&&(this.g=this.h());return this.g};function Cc(){}function Dc(a){if(!a)return"";a=Ob(a);239==a[0]&&187==a[1]&&191==a[2]&&(a=a.subarray(3));a=(new TextDecoder).decode(a);a.includes("\ufffd")&&Ua('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!');return a}
function Ec(a,b,c){if(!a)return"";if(!c&&0!=a.byteLength%2)throw new O(2,2,2004);var d=Math.floor(a.byteLength/2);c=new Uint16Array(d);a=Sb(a);d=t(ib(d));for(var e=d.next();!e.done;e=d.next())e=e.value,c[e]=a.getUint16(2*e,b);return Fc.value()(c)}
function Gc(a){function b(d){return c.byteLength<=d||32<=c[d]&&126>=c[d]}if(!a)return"";var c=Ob(a);if(239==c[0]&&187==c[1]&&191==c[2])return Dc(c);if(254==c[0]&&255==c[1])return Ec(c.subarray(2),!1);if(255==c[0]&&254==c[1])return Ec(c.subarray(2),!0);if(0==c[0]&&0==c[2])return Ec(a,!1);if(0==c[1]&&0==c[3])return Ec(a,!0);if(b(0)&&b(1)&&b(2)&&b(3))return Dc(a);throw new O(2,2,2003);}function Hc(a){var b=new TextEncoder;return Pb(b.encode(a))}
function Ic(a,b){for(var c=new ArrayBuffer(2*a.length),d=new DataView(c),e=t(kb(a)),f=e.next();!f.done;f=e.next())f=f.value,d.setUint16(2*f.ha,f.item.charCodeAt(0),b);return c}L("shaka.util.StringUtils",Cc);Cc.resetFromCharCode=function(){Fc.g=void 0};Cc.toUTF16=Ic;Cc.toUTF8=Hc;Cc.fromBytesAutoDetect=Gc;Cc.fromUTF16=Ec;Cc.fromUTF8=Dc;
var Fc=new Bc(function(){function a(c){try{var d=new Uint8Array(c);return 0<String.fromCharCode.apply(null,d).length}catch(e){return!1}}for(var b={Ua:65536};0<b.Ua;b={Ua:b.Ua},b.Ua/=2)if(a(b.Ua))return function(c){return function(d){for(var e="",f=0;f<d.length;f+=c.Ua)e+=String.fromCharCode.apply(null,d.subarray(f,f+c.Ua));return e}}(b);return null});function Jc(){}function Kc(a){a=Ob(a);a=Fc.value()(a);return btoa(a)}function Lc(a,b){b=void 0==b?!0:b;var c=Kc(a).replace(/\+/g,"-").replace(/\//g,"_");return b?c:c.replace(/[=]*$/,"")}function Mc(a){var b=window.atob(a.replace(/-/g,"+").replace(/_/g,"/"));a=new Uint8Array(b.length);b=t(kb(b));for(var c=b.next();!c.done;c=b.next())c=c.value,a[c.ha]=c.item.charCodeAt(0);return a}
function Nc(a){var b=a.length/2,c=new Uint8Array(b);b=t(ib(b));for(var d=b.next();!d.done;d=b.next())d=d.value,c[d]=window.parseInt(a.substr(2*d,2),16);return c}function Oc(a){var b=Ob(a);a="";b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,c=c.toString(16),1==c.length&&(c="0"+c),a+=c;return a}
function Pc(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];var d=0,e=t(b);for(c=e.next();!c.done;c=e.next())d+=c.value.byteLength;d=new Uint8Array(d);e=0;b=t(b);for(c=b.next();!c.done;c=b.next())c=c.value,d.set(Ob(c),e),e+=c.byteLength;return d}L("shaka.util.Uint8ArrayUtils",Jc);Jc.concat=Pc;Jc.toHex=Oc;Jc.fromHex=Nc;Jc.fromBase64=Mc;Jc.toBase64=Lc;Jc.toStandardBase64=Kc;
Jc.equal=function(a,b){Ub("shaka.util.Uint8ArrayUtils.equal","Please use shaka.util.BufferUtils.equal instead.");return Mb(a,b)};function Qc(){var a=this;this.s=cc.get("muxjs")();this.g=new this.s.mp4.Transmuxer({keepOriginalTimestamps:!0});this.h=null;this.m=[];this.j=[];this.i=[];this.l=!1;this.g.on("data",function(b){a.j=b.captions;a.i=b.metadata;a.m.push(Pc(b.initSegment,b.data))});this.g.on("done",function(){var b={data:Pc.apply(Jc,ja(a.m)),captions:a.j,metadata:a.i};a.h.resolve(b);a.l=!1})}Qc.prototype.destroy=function(){this.g.dispose();this.g=null;return Promise.resolve()};
function Rc(a,b){if(!cc.get("muxjs")()||!Sc(a))return!1;if(b)return MediaSource.isTypeSupported(Tc(b,a));var c=Tc("audio",a),d=Tc("video",a);return MediaSource.isTypeSupported(c)||MediaSource.isTypeSupported(d)}function Sc(a){return"mp2t"==a.toLowerCase().split(";")[0].split("/")[1]}
function Tc(a,b){var c=b.replace(/mp2t/i,"mp4");"audio"==a&&(c=c.replace("video","audio"));var d=/avc1\.(66|77|100)\.(\d+)/.exec(c);if(d){var e="avc1.",f=d[1],g=Number(d[2]);e=("66"==f?e+"4200":"77"==f?e+"4d00":e+"6400")+(g>>4).toString(16);e+=(g&15).toString(16);c=c.replace(d[0],e)}return c}function Uc(a,b){a.l=!0;a.h=new Ac;a.m=[];a.j=[];a.i=[];var c=Ob(b);a.g.push(c);a.g.flush();a.l&&a.h.reject(new O(2,3,3018));return a.h};function Vc(a,b){var c=a;b&&(c+='; codecs="'+b+'"');return c}function Wc(a,b,c){a=Vc(a,b);return cc.get("muxjs")()&&Sc(a)?Tc(c,a):a}function Xc(a){a=a.split(".");var b=a[0];a.pop();return b}function Yc(a){a=a.split(/ *; */);a.shift();return(a=a.find(function(b){return b.startsWith("codecs=")}))?a.split("=")[1].replace(/^"|"$/g,""):""}(new Map).set("codecs","codecs").set("frameRate","framerate").set("bandwidth","bitrate").set("width","width").set("height","height").set("channelsCount","channels");function Zc(a){this.s=null;this.i=a;this.j=this.D=0;this.l=Infinity;this.h=this.g=null;this.u="";this.m=new Map}function $c(a){return ad[a]||"application/cea-608"==a||"application/cea-708"==a?!0:!1}Zc.prototype.destroy=function(){this.i=this.s=null;this.m.clear();return Promise.resolve()};
function bd(a,b,c,d){var e,f,g;return I(function(h){if(1==h.g)return v(h,Promise.resolve(),2);if(!a.s||!a.i)return h["return"]();if(null==c||null==d)return a.s.parseInit(Ob(b)),h["return"]();e={periodStart:a.D,segmentStart:c,segmentEnd:d};f=a.s.parseMedia(Ob(b),e);g=f.filter(function(k){return k.startTime>=a.j&&k.startTime<a.l});a.i.append(g);null==a.g&&(a.g=Math.max(c,a.j));a.h=Math.min(d,a.l);z(h)})}
Zc.prototype.remove=function(a,b){var c=this;return I(function(d){if(1==d.g)return v(d,Promise.resolve(),2);!c.i||!c.i.remove(a,b)||null==c.g||b<=c.g||a>=c.h||(a<=c.g&&b>=c.h?c.g=c.h=null:a<=c.g&&b<c.h?c.g=b:a>c.g&&b>=c.h&&(c.h=a));z(d)})};function cd(a,b,c){a.j=b;a.l=c}function dd(a,b,c){a.u=b;if(b=a.m.get(b))for(var d=t(b.keys()),e=d.next();!e.done;e=d.next())(e=b.get(e.value).filter(function(f){return f.endTime<=c}))&&a.i.append(e)}
function ed(a){var b=[];a=t(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b.push({stream:c.stream,cue:new qb(c.startTime,c.endTime,c.text)});return b}
function fd(a,b,c,d,e){var f=c+" "+d,g=new Map;b=t(b);for(var h=b.next();!h.done;h=b.next()){var k=h.value;h=k.stream;k=k.cue;g.has(h)||g.set(h,new Map);g.get(h).has(f)||g.get(h).set(f,[]);k.startTime+=e;k.endTime+=e;k.startTime>=a.j&&k.startTime<a.l&&(g.get(h).get(f).push(k),h==a.u&&a.i.append([k]))}e=t(g.keys());for(f=e.next();!f.done;f=e.next())for(f=f.value,a.m.has(f)||a.m.set(f,new Map),b=t(g.get(f).keys()),h=b.next();!h.done;h=b.next())h=h.value,k=g.get(f).get(h),a.m.get(f).set(h,k);a.g=null==
a.g?Math.max(c,a.j):Math.min(a.g,Math.max(c,a.j));a.h=Math.max(a.h,Math.min(d,a.l))}L("shaka.text.TextEngine",Zc);Zc.prototype.destroy=Zc.prototype.destroy;Zc.findParser=function(a){return ad[a]};Zc.unregisterParser=function(a){delete ad[a]};Zc.registerParser=function(a,b){ad[a]=b};var ad={};function gd(a,b){a=hd(a);b=hd(b);return a.split("-")[0]==b.split("-")[0]}function id(a,b){a=hd(a);b=hd(b);var c=a.split("-"),d=b.split("-");return c[0]==d[0]&&1==c.length&&2==d.length}function kd(a,b){a=hd(a);b=hd(b);var c=a.split("-"),d=b.split("-");return 2==c.length&&2==d.length&&c[0]==d[0]}function hd(a){var b=a.split("-");a=b[0]||"";b=b[1]||"";a=a.toLowerCase();a=ld.get(a)||a;return(b=b.toUpperCase())?a+"-"+b:a}function md(a,b){a=hd(a);b=hd(b);return b==a?4:id(b,a)?3:kd(b,a)?2:id(a,b)?1:0}
function nd(a){return a.language?hd(a.language):a.audio&&a.audio.language?hd(a.audio.language):a.video&&a.video.language?hd(a.video.language):"und"}
function od(a,b){for(var c=hd(a),d=new Set,e=t(b),f=e.next();!f.done;f=e.next())d.add(hd(f.value));e=t(d);for(f=e.next();!f.done;f=e.next())if(f=f.value,f==c)return f;e=t(d);for(f=e.next();!f.done;f=e.next())if(f=f.value,id(f,c))return f;e=t(d);for(f=e.next();!f.done;f=e.next())if(f=f.value,kd(f,c))return f;d=t(d);for(f=d.next();!f.done;f=d.next())if(f=f.value,id(c,f))return f;return null}
var ld=new Map([["aar","aa"],["abk","ab"],["afr","af"],["aka","ak"],["alb","sq"],["amh","am"],["ara","ar"],["arg","an"],["arm","hy"],["asm","as"],["ava","av"],["ave","ae"],["aym","ay"],["aze","az"],["bak","ba"],["bam","bm"],["baq","eu"],["bel","be"],["ben","bn"],["bih","bh"],["bis","bi"],["bod","bo"],["bos","bs"],["bre","br"],["bul","bg"],["bur","my"],["cat","ca"],["ces","cs"],["cha","ch"],["che","ce"],["chi","zh"],["chu","cu"],["chv","cv"],["cor","kw"],["cos","co"],["cre","cr"],["cym","cy"],["cze",
"cs"],["dan","da"],["deu","de"],["div","dv"],["dut","nl"],["dzo","dz"],["ell","el"],["eng","en"],["epo","eo"],["est","et"],["eus","eu"],["ewe","ee"],["fao","fo"],["fas","fa"],["fij","fj"],["fin","fi"],["fra","fr"],["fre","fr"],["fry","fy"],["ful","ff"],["geo","ka"],["ger","de"],["gla","gd"],["gle","ga"],["glg","gl"],["glv","gv"],["gre","el"],["grn","gn"],["guj","gu"],["hat","ht"],["hau","ha"],["heb","he"],["her","hz"],["hin","hi"],["hmo","ho"],["hrv","hr"],["hun","hu"],["hye","hy"],["ibo","ig"],["ice",
"is"],["ido","io"],["iii","ii"],["iku","iu"],["ile","ie"],["ina","ia"],["ind","id"],["ipk","ik"],["isl","is"],["ita","it"],["jav","jv"],["jpn","ja"],["kal","kl"],["kan","kn"],["kas","ks"],["kat","ka"],["kau","kr"],["kaz","kk"],["khm","km"],["kik","ki"],["kin","rw"],["kir","ky"],["kom","kv"],["kon","kg"],["kor","ko"],["kua","kj"],["kur","ku"],["lao","lo"],["lat","la"],["lav","lv"],["lim","li"],["lin","ln"],["lit","lt"],["ltz","lb"],["lub","lu"],["lug","lg"],["mac","mk"],["mah","mh"],["mal","ml"],["mao",
"mi"],["mar","mr"],["may","ms"],["mkd","mk"],["mlg","mg"],["mlt","mt"],["mon","mn"],["mri","mi"],["msa","ms"],["mya","my"],["nau","na"],["nav","nv"],["nbl","nr"],["nde","nd"],["ndo","ng"],["nep","ne"],["nld","nl"],["nno","nn"],["nob","nb"],["nor","no"],["nya","ny"],["oci","oc"],["oji","oj"],["ori","or"],["orm","om"],["oss","os"],["pan","pa"],["per","fa"],["pli","pi"],["pol","pl"],["por","pt"],["pus","ps"],["que","qu"],["roh","rm"],["ron","ro"],["rum","ro"],["run","rn"],["rus","ru"],["sag","sg"],["san",
"sa"],["sin","si"],["slk","sk"],["slo","sk"],["slv","sl"],["sme","se"],["smo","sm"],["sna","sn"],["snd","sd"],["som","so"],["sot","st"],["spa","es"],["sqi","sq"],["srd","sc"],["srp","sr"],["ssw","ss"],["sun","su"],["swa","sw"],["swe","sv"],["tah","ty"],["tam","ta"],["tat","tt"],["tel","te"],["tgk","tg"],["tgl","tl"],["tha","th"],["tib","bo"],["tir","ti"],["ton","to"],["tsn","tn"],["tso","ts"],["tuk","tk"],["tur","tr"],["twi","tw"],["uig","ug"],["ukr","uk"],["urd","ur"],["uzb","uz"],["ven","ve"],["vie",
"vi"],["vol","vo"],["wel","cy"],["wln","wa"],["wol","wo"],["xho","xh"],["yid","yi"],["yor","yo"],["zha","za"],["zho","zh"],["zul","zu"]]);function pd(){this.g={}}q=pd.prototype;q.push=function(a,b){this.g.hasOwnProperty(a)?this.g[a].push(b):this.g[a]=[b]};q.get=function(a){return(a=this.g[a])?a.slice():null};q.remove=function(a,b){a in this.g&&(this.g[a]=this.g[a].filter(function(c){return c!=b}),0==this.g[a].length&&delete this.g[a])};function qd(a,b){for(var c in a.g)b(c,a.g[c])}q.size=function(){return Object.keys(this.g).length};q.keys=function(){return Object.keys(this.g)};function rd(a){this.h=a;this.g=null}rd.prototype.U=function(a){var b=this;this.stop();var c=!0,d=null;this.g=function(){window.clearTimeout(d);c=!1};d=window.setTimeout(function(){c&&b.h()},1E3*a);return this};rd.prototype.stop=function(){this.g&&(this.g(),this.g=null)};function P(a){this.h=a;this.g=null}P.prototype.Hb=function(){this.stop();this.h();return this};P.prototype.U=function(a){var b=this;this.stop();this.g=(new rd(function(){b.h()})).U(a);return this};P.prototype.Ca=function(a){var b=this;this.stop();this.g=(new rd(function(){b.g.U(a);b.h()})).U(a);return this};P.prototype.stop=function(){this.g&&(this.g.stop(),this.g=null)};L("shaka.util.Timer",P);P.prototype.stop=P.prototype.stop;P.prototype.tickEvery=P.prototype.Ca;P.prototype.tickAfter=P.prototype.U;
P.prototype.tickNow=P.prototype.Hb;function sd(){return window.MediaSource&&MediaSource.isTypeSupported?!0:!1}function td(a){return""!=ud().canPlayType(a)}function vd(){return wd("Tizen")}function xd(){return wd("CrKey")}function yd(){return!!navigator.vendor&&navigator.vendor.includes("Apple")&&!vd()}function zd(){if(!yd())return null;var a=navigator.userAgent.match(/Version\/(\d+)/);return a?parseInt(a[1],10):(a=navigator.userAgent.match(/OS (\d+)(?:_\d+)?/))?parseInt(a[1],10):null}
function wd(a){return(navigator.userAgent||"").includes(a)}function ud(){if(Ad)return Ad;Bd||(Bd=new P(function(){Ad=null}));(Ad=document.getElementsByTagName("video")[0]||document.getElementsByTagName("audio")[0])||(Ad=document.createElement("video"));Bd.U(1);return Ad}var Bd=null,Ad=null;function Cd(a,b,c,d,e){var f=a.variants;if(b.length||c.length)f=Dd(f,b,c);f=Ed(f,d);b=Fd(f);b=Gd(b);var g=Hd(b,e);a.variants=a.variants.filter(function(h){return Id(h)==g?!0:!1})}function Fd(a){var b=new pd;a=t(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=Id(c);b.push(d,c)}return b}
function Gd(a){var b=0,c=new Map,d=a.size();qd(a,function(e,f){for(var g=t(f),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.video;if(k&&k.width&&k.height){k=k.width*k.height*(k.frameRate||1);c.has(k)||c.set(k,new pd);var l=c.get(k);l.push(e,h);l.size()===d&&(b=Math.max(b,k))}}});return b?c.get(b):a}
function Dd(a,b,c){var d={};b=t(b);for(var e=b.next();!e.done;d={ed:d.ed},e=b.next())if(d.ed=e.value,e=a.filter(function(f){return function(g){return g.video&&g.video.codecs.startsWith(f.ed)}}(d)),e.length){a=e;break}d={};c=t(c);for(b=c.next();!b.done;d={Qc:d.Qc},b=c.next())if(d.Qc=b.value,b=a.filter(function(f){return function(g){return g.audio&&g.audio.codecs.startsWith(f.Qc)}}(d)),b.length){a=b;break}return a}
function Hd(a,b){for(var c=t(b),d=c.next();!d.done;d=c.next())if(d=d.value,d==Jd||d==Kd){if(a=Ld(a,d),1==a.size())return a.keys()[0]}else if(d==Md)break;return Nd(a)}function Ld(a,b){var c=0,d=new pd;qd(a,function(e,f){for(var g=0,h=0,k=t(f),l=k.next();!l.done;l=k.next())l=l.value,l.decodingInfos.length&&(g+=l.decodingInfos[0][b]?1:0,h++);g/=h;g>c?(d.g={},d.push(e,f),c=g):g==c&&d.push(e,f)});return d}
function Nd(a){var b="",c=Infinity;qd(a,function(d,e){for(var f=0,g=0,h=t(e),k=h.next();!k.done;k=h.next())f+=k.value.bandwidth||0,++g;f/=g;f<c&&(b=d,c=f)});return b}function Id(a){var b="";a.video&&(b=Xc(a.video.codecs));var c="";a.audio&&(c=Xc(a.audio.codecs));return b+"-"+c}function Od(a,b,c){a.variants=a.variants.filter(function(d){return Pd(d,b,c)})}
function Pd(a,b,c){function d(f,g,h){return f>=g&&f<=h}var e=a.video;return e&&e.width&&e.height&&(!d(e.width,b.minWidth,Math.min(b.maxWidth,c.width))||!d(e.height,b.minHeight,Math.min(b.maxHeight,c.height))||!d(e.width*e.height,b.minPixels,b.maxPixels))||a&&a.video&&a.video.frameRate&&!d(a.video.frameRate,b.minFrameRate,b.maxFrameRate)||!d(a.bandwidth,b.minBandwidth,b.maxBandwidth)?!1:!0}
function Qd(a,b){return I(function(c){if(1==c.g)return v(c,Rd(b,0<b.offlineSessionIds.length),2);Sd(a,b);Td(b);Ud(b);z(c)})}function Rd(a,b){return I(function(c){if(1==c.g)return v(c,Vd(a.variants,b,!1),2);a.variants=a.variants.filter(function(d){var e=d.video;if(wd("Xbox One")&&e&&(e.width&&1920<e.width||e.height&&1080<e.height)&&e.codecs.includes("avc1."))return Za(Wd(d)),!1;(e=d.decodingInfos.some(function(f){return f.supported}))||Za(Wd(d));return e});z(c)})}
function Vd(a,b,c){var d,e,f,g,h,k,l,m,n,p,r;return I(function(u){if(d=a.some(function(w){return w.decodingInfos.length}))return u["return"]();e=window.shakaMediaCapabilities;f=[];g=function(w,y){var x;return I(function(C){if(1==C.g)return A(C,2),v(C,e.decodingInfo(y),4);if(2!=C.g)return x=C.h,w.decodingInfos.push(x),va(C,0);E(C);JSON.stringify(y);z(C)})};h=t(a);for(k=h.next();!k.done;k=h.next())for(l=k.value,m=Xd(l,b,c),n=t(m),p=n.next();!p.done;p=n.next())r=p.value,f.push(g(l,r));return v(u,Promise.all(f),
0)})}
function Xd(a,b,c){var d=a.audio,e=a.video;c={type:c?"file":"media-source"};if(e){var f=e.codecs;if(e.codecs.includes(",")){var g=e.codecs.split(",");f=vc("video",g);f="vp9"==f?"vp09.00.10.08":f;g=vc("audio",g);g=Wc(e.mimeType,g,"audio");c.audio={contentType:g,channels:2,bitrate:a.bandwidth||1,samplerate:1,spatialRendering:!1}}f=Wc(e.mimeType,"vp9"==f?"vp09.00.10.08":f,"video");c.video={contentType:f,width:e.width||1,height:e.height||1,bitrate:e.bandwidth||a.bandwidth||1,framerate:e.frameRate||1}}d&&
(f="ac-3"==d.codecs.toLowerCase()&&vd()?"ec-3":d.codecs,f=Wc(d.mimeType,f,"audio"),c.audio={contentType:f,channels:d.channelsCount||2,bitrate:d.bandwidth||a.bandwidth||1,samplerate:d.audioSamplingRate||1,spatialRendering:d.spatialAudio});g=(a.video?a.video.drmInfos:[]).concat(a.audio?a.audio.drmInfos:[]);if(!g.length)return[c];a=[];f=new Map;g=t(g);for(var h=g.next();!h.done;h=g.next()){var k=h.value;f.get(k.keySystem)||f.set(k.keySystem,[]);f.get(k.keySystem).push(k)}g=b?"required":"optional";b=
b?["persistent-license"]:["temporary"];k=t(f.keys());for(var l=k.next();!l.done;l=k.next()){var m=l.value;l=Object.assign({},c);var n=f.get(m);m={keySystem:m,initDataType:"cenc",persistentState:g,distinctiveIdentifier:"optional",sessionTypes:b};n=t(n);for(h=n.next();!h.done;h=n.next()){h=h.value;if(h.initData&&h.initData.length){for(var p=new Set,r=t(h.initData),u=r.next();!u.done;u=r.next())p.add(u.value.initDataType);m.initDataType=h.initData[0].initDataType}h.distinctiveIdentifierRequired&&(m.distinctiveIdentifier=
"required");h.persistentStateRequired&&(m.persistentState="required");h.sessionType&&(m.sessionTypes=[h.sessionType]);d&&(m.audio?m.audio.robustness=m.audio.robustness||h.audioRobustness:m.audio={robustness:h.audioRobustness});e&&(m.video?m.video.robustness=m.video.robustness||h.videoRobustness:m.video={robustness:h.videoRobustness})}l.keySystemConfiguration=m;a.push(l)}return a}
function Sd(a,b){b.variants=b.variants.filter(function(c){var d=c.audio;c=c.video;return d&&a&&a.audio&&!Yd(d,a.audio)||c&&a&&a.video&&!Yd(c,a.video)?!1:!0})}function Td(a){a.textStreams=a.textStreams.filter(function(b){return $c(Vc(b.mimeType,b.codecs))})}function Ud(a){a.imageStreams=a.imageStreams.filter(function(b){var c=["image/svg+xml","image/png","image/jpeg"];(wd("Web0S")||vd()||xd())&&c.push("image/webp");return c.includes(b.mimeType)})}
function Yd(a,b){return a.mimeType!=b.mimeType||a.codecs.split(".")[0]!=b.codecs.split(".")[0]?!1:!0}
function Zd(a){var b=a.audio,c=a.video,d=b?b.codecs:null,e=c?c.codecs:null,f=[];e&&f.push(e);d&&f.push(d);var g=[];c&&g.push(c.mimeType);b&&g.push(b.mimeType);g=g[0]||null;var h=[];b&&h.push(b.kind);c&&h.push(c.kind);h=h[0]||null;var k=new Set;if(b)for(var l=t(b.roles),m=l.next();!m.done;m=l.next())k.add(m.value);if(c)for(l=t(c.roles),m=l.next();!m.done;m=l.next())k.add(m.value);a={id:a.id,active:!1,type:"variant",bandwidth:a.bandwidth,language:a.language,label:null,kind:h,width:null,height:null,
frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:g,codecs:f.join(", "),audioCodec:d,videoCodec:e,primary:a.primary,roles:Array.from(k),audioRoles:null,forced:!1,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null,originalImageId:null};c&&(a.videoId=c.id,a.originalVideoId=c.originalId,a.width=c.width||null,a.height=c.height||null,a.frameRate=c.frameRate||
null,a.pixelAspectRatio=c.pixelAspectRatio||null,a.videoBandwidth=c.bandwidth||null);b&&(a.audioId=b.id,a.originalAudioId=b.originalId,a.channelsCount=b.channelsCount,a.audioSamplingRate=b.audioSamplingRate,a.audioBandwidth=b.bandwidth||null,a.label=b.label,a.audioRoles=b.roles);return a}
function $d(a){return{id:a.id,active:!1,type:yc,bandwidth:0,language:a.language,label:a.label,kind:a.kind||null,width:null,height:null,frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:a.mimeType,codecs:a.codecs||null,audioCodec:null,videoCodec:null,primary:a.primary,roles:a.roles,audioRoles:null,forced:a.forced,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,
originalTextId:a.originalId,originalImageId:null}}
function ae(a){return{id:a.id,active:!1,type:"image",bandwidth:a.bandwidth||0,language:"",label:null,kind:null,width:a.width||null,height:a.height||null,frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:a.mimeType,codecs:null,audioCodec:null,videoCodec:null,primary:!1,roles:[],audioRoles:null,forced:!1,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:a.tilesLayout||null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,
originalTextId:null,originalImageId:a.originalId}}function be(a){a.__shaka_id||(a.__shaka_id=ce++);return a.__shaka_id}function de(a){var b=ee(a);b.active="disabled"!=a.mode;b.type="text";b.originalTextId=a.id;"captions"==a.kind&&(b.mimeType="application/cea-608");a.kind&&(b.roles=[a.kind]);"forced"==a.kind&&(b.forced=!0);return b}
function fe(a){var b=ee(a);b.active=a.enabled;b.type="variant";b.originalAudioId=a.id;"main"==a.kind&&(b.primary=!0);a.kind&&(b.roles=[a.kind],b.audioRoles=[a.kind],b.label=a.label);return b}
function ee(a){return{id:be(a),active:!1,type:"",bandwidth:0,language:hd(a.language),label:a.label,kind:a.kind,width:null,height:null,frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:null,codecs:null,audioCodec:null,videoCodec:null,primary:!1,roles:[],forced:!1,audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null,originalImageId:null}}
function ge(a){return a.allowedByApplication&&a.allowedByKeySystem}function he(a){return a.filter(function(b){return ge(b)})}
function Ed(a,b){var c=a.filter(function(g){return g.audio&&g.audio.channelsCount}),d=new Map;c=t(c);for(var e=c.next();!e.done;e=c.next()){e=e.value;var f=e.audio.channelsCount;d.has(f)||d.set(f,[]);d.get(f).push(e)}c=Array.from(d.keys());if(0==c.length)return a;e=c.filter(function(g){return g<=b});return e.length?d.get(Math.max.apply(Math,ja(e))):d.get(Math.min.apply(Math,ja(c)))}
function ie(a,b,c,d){var e=a,f=a.filter(function(k){return k.primary});f.length&&(e=f);var g=e.length?e[0].language:"";e=e.filter(function(k){return k.language==g});if(b){var h=od(hd(b),a.map(function(k){return k.language}));h&&(e=a.filter(function(k){return hd(k.language)==h}))}e=e.filter(function(k){return k.forced==d});if(c){if(a=je(e,c),a.length)return a}else if(a=e.filter(function(k){return 0==k.roles.length}),a.length)return a;a=e.map(function(k){return k.roles}).reduce(Yb,[]);return a.length?
je(e,a[0]):e}function je(a,b){return a.filter(function(c){return c.roles.includes(b)})}function Wd(a){var b=[];a.audio&&b.push(ke(a.audio));a.video&&b.push(ke(a.video));return b.join(", ")}
function ke(a){return"audio"==a.type?"type=audio codecs="+a.codecs+" bandwidth="+a.bandwidth+" channelsCount="+a.channelsCount+" audioSamplingRate="+a.audioSamplingRate:"video"==a.type?"type=video codecs="+a.codecs+" bandwidth="+a.bandwidth+" frameRate="+a.frameRate+" width="+a.width+" height="+a.height:"unexpected stream type"}var ce=0,Jd="smooth",Kd="powerEfficient",Md="bandwidth";function le(){var a=this;this.j=null;this.i=!1;this.g=new Sa;navigator.connection&&navigator.connection.addEventListener("change",function(){if(a.o.useNetworkInformation&&a.i){a.g=new Sa;var b=a.chooseVariant();b&&a.j(b)}});this.h=[];this.m=1;this.s=!1;this.o=this.l=null}q=le.prototype;q.stop=function(){this.j=null;this.i=!1;this.h=[];this.m=1;this.l=null};q.init=function(a){this.j=a};
q.chooseVariant=function(){var a=me(this.o.restrictions,this.h),b=this.g.getBandwidthEstimate(ne(this));this.h.length&&!a.length&&(a=me(null,this.h),a=[a[0]]);var c=a[0]||null;a=t(kb(a));for(var d=a.next();!d.done;d=a.next()){var e=d.value;d=e.item;var f=isNaN(this.m)?1:Math.abs(this.m);e=f*(e.next||{bandwidth:Infinity}).bandwidth/this.o.bandwidthUpgradeTarget;b>=f*d.bandwidth/this.o.bandwidthDowngradeTarget&&b<=e&&(c=d)}this.l=Date.now();return c};q.enable=function(){this.i=!0};
q.disable=function(){this.i=!1};q.segmentDownloaded=function(a,b){var c=this.g;if(!(16E3>b)){var d=8E3*b/a,e=a/1E3;c.g+=b;Pa(c.h,e,d);Pa(c.i,e,d)}if(null!=this.l&&this.i)a:{if(!this.s){if(!(128E3<=this.g.g))break a;this.s=!0}else if(Date.now()-this.l<1E3*this.o.switchInterval)break a;c=this.chooseVariant();this.g.getBandwidthEstimate(ne(this));c&&this.j(c)}};q.getBandwidthEstimate=function(){return this.g.getBandwidthEstimate(this.o.defaultBandwidthEstimate)};q.setVariants=function(a){this.h=a};
q.playbackRateChanged=function(a){this.m=a};q.configure=function(a){this.o=a};function ne(a){var b=a.o.defaultBandwidthEstimate;navigator.connection&&navigator.connection.downlink&&a.o.useNetworkInformation&&(b=1E6*navigator.connection.downlink);return b}function me(a,b){a&&(b=b.filter(function(c){return Pd(c,a,{width:Infinity,height:Infinity})}));return b.sort(function(c,d){return c.bandwidth-d.bandwidth})}L("shaka.abr.SimpleAbrManager",le);le.prototype.configure=le.prototype.configure;
le.prototype.playbackRateChanged=le.prototype.playbackRateChanged;le.prototype.setVariants=le.prototype.setVariants;le.prototype.getBandwidthEstimate=le.prototype.getBandwidthEstimate;le.prototype.segmentDownloaded=le.prototype.segmentDownloaded;le.prototype.disable=le.prototype.disable;le.prototype.enable=le.prototype.enable;le.prototype.chooseVariant=le.prototype.chooseVariant;le.prototype.init=le.prototype.init;le.prototype.stop=le.prototype.stop;function oe(a,b){this.h=a;this.g=new Set([a]);b=b||[];for(var c=t(b),d=c.next();!d.done;d=c.next())this.add(d.value)}oe.prototype.add=function(a){return pe(this.h,a)?(this.g.add(a),!0):!1};
function pe(a,b){var c;if(!(c=!!a.audio!=!!b.audio||!!a.video!=!!b.video||a.language!=b.language)&&(c=a.audio&&b.audio)){c=a.audio;var d=b.audio;c=!((!(!c.channelsCount||!d.channelsCount||2<c.channelsCount||2<d.channelsCount)||c.channelsCount==d.channelsCount)&&qe(c,d)&&re(c.roles,d.roles))}!c&&(c=a.video&&b.video)&&(c=a.video,d=b.video,c=!(qe(c,d)&&re(c.roles,d.roles)));return c?!1:!0}oe.prototype.values=function(){return this.g.values()};
function qe(a,b){if(a.mimeType!=b.mimeType)return!1;var c=a.codecs.split(",").map(function(g){return Xc(g)}),d=b.codecs.split(",").map(function(g){return Xc(g)});if(c.length!=d.length)return!1;c.sort();d.sort();for(var e=t(ib(c.length)),f=e.next();!f.done;f=e.next())if(f=f.value,c[f]!=d[f])return!1;return!0}
function re(a,b){var c=new Set(a),d=new Set(b);c["delete"]("main");d["delete"]("main");if(c.size!=d.size)return!1;c=t(c);for(var e=c.next();!e.done;e=c.next())if(!d.has(e.value))return!1;return!0};function se(a){this.g=a;this.h=new te(a.language,"",a.audio&&a.audio.channelsCount?a.audio.channelsCount:0,"")}se.prototype.create=function(a){var b=this,c=a.filter(function(d){return pe(b.g,d)});return c.length?new oe(c[0],c):this.h.create(a)};function te(a,b,c,d){this.i=a;this.j=b;this.g=c;this.h=void 0===d?"":d}
te.prototype.create=function(a){var b=[];b=ue(a,this.i);var c=a.filter(function(d){return d.primary});b=b.length?b:c.length?c:a;a=ve(b,this.j);a.length&&(b=a);this.g&&(a=Ed(b,this.g),a.length&&(b=a));this.h&&(a=we(b,this.h),a.length&&(b=a));a=new oe(b[0]);b=t(b);for(c=b.next();!c.done;c=b.next())c=c.value,pe(a.h,c)&&a.add(c);return a};function ue(a,b){var c=hd(b),d=od(c,a.map(function(e){return nd(e)}));return d?a.filter(function(e){return d==nd(e)}):[]}
function ve(a,b){return a.filter(function(c){return c.audio?b?c.audio.roles.includes(b):0==c.audio.roles.length:!1})}function we(a,b){return a.filter(function(c){return c.audio?c.audio.label.toLowerCase()==b.toLowerCase():!1})};function xe(){this.g=ye;this.h=(new Map).set(ye,2).set(ze,1)}function Ae(a,b,c){a.h.set(ye,c).set(ze,b)}var ze=0,ye=1;function Be(a,b){var c=Ce();this.l=null==a.maxAttempts?c.maxAttempts:a.maxAttempts;this.j=null==a.baseDelay?c.baseDelay:a.baseDelay;this.s=null==a.fuzzFactor?c.fuzzFactor:a.fuzzFactor;this.m=null==a.backoffFactor?c.backoffFactor:a.backoffFactor;this.g=0;this.h=this.j;if(this.i=void 0===b?!1:b)this.g=1}
function De(a){var b,c;return I(function(d){if(1==d.g){if(a.g>=a.l)if(a.i)a.g=1,a.h=a.j;else throw new O(2,7,1010);b=a.g;a.g++;if(0==b)return d["return"]();c=a.h*(1+(2*Math.random()-1)*a.s);return v(d,new Promise(function(e){(new P(e)).U(c/1E3)}),2)}a.h*=a.m;z(d)})}function Ce(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:3E4,stallTimeout:5E3,connectionTimeout:1E4}};function Ee(a,b){this.promise=a;this.i=b;this.g=!1}function Fe(a){return new Ee(Promise.reject(a),function(){return Promise.resolve()})}function Ge(){var a=Promise.reject(new O(2,7,7001));a["catch"](function(){});return new Ee(a,function(){return Promise.resolve()})}function He(a){return new Ee(Promise.resolve(a),function(){return Promise.resolve()})}function Ie(a){return new Ee(a,function(){return a["catch"](function(){})})}Ee.prototype.abort=function(){this.g=!0;return this.i()};
function Je(a){return new Ee(Promise.all(a.map(function(b){return b.promise})),function(){return Promise.all(a.map(function(b){return b.abort()}))})}Ee.prototype["finally"]=function(a){this.promise.then(function(){return a(!0)},function(){return a(!1)});return this};
Ee.prototype.ba=function(a,b){function c(h){return function(k){if(e.g&&h)f.reject(g);else{var l=h?a:b;l?d=Ke(l,k,f):(h?f.resolve:f.reject)(k)}}}function d(){f.reject(g);return e.abort()}var e=this,f=new Ac,g=new O(2,7,7001);this.promise.then(c(!0),c(!1));return new Ee(f,function(){return d()})};
function Ke(a,b,c){try{var d=a(b);if(d&&d.promise&&d.abort)return c.resolve(d.promise),function(){return d.abort()};c.resolve(d);return function(){return Promise.resolve(d).then(function(){},function(){})}}catch(e){return c.reject(e),function(){return Promise.resolve()}}}L("shaka.util.AbortableOperation",Ee);Ee.prototype.chain=Ee.prototype.ba;Ee.prototype["finally"]=Ee.prototype["finally"];Ee.all=Je;Ee.prototype.abort=Ee.prototype.abort;Ee.notAbortable=Ie;Ee.completed=He;Ee.aborted=Ge;Ee.failed=Fe;function Q(a,b){b=void 0===b?{}:b;for(var c in b)Object.defineProperty(this,c,{value:b[c],writable:!0,enumerable:!0});this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=a;this.isTrusted=!1;this.target=this.currentTarget=null;this.g=!1}Q.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0)};Q.prototype.stopImmediatePropagation=function(){this.g=!0};
Q.prototype.stopPropagation=function(){};L("shaka.util.FakeEvent",Q);function Le(){this.rc=new pd;this.qc=this}Le.prototype.addEventListener=function(a,b){this.rc.push(a,b)};Le.prototype.removeEventListener=function(a,b){this.rc.remove(a,b)};Le.prototype.dispatchEvent=function(a){var b=this.rc.get(a.type)||[],c=this.rc.get("All");c&&(b=b.concat(c));b=t(b);for(c=b.next();!c.done;c=b.next()){c=c.value;a.target=this.qc;a.currentTarget=this.qc;try{c.handleEvent?c.handleEvent(a):c.call(this,a)}catch(d){}if(a.g)break}return a.defaultPrevented};function Me(a){function b(d){switch(typeof d){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return d;default:if(!d||d.buffer&&d.buffer.constructor==ArrayBuffer)return d;if(c.has(d))return null;var e=d.constructor==Array;if(d.constructor!=Object&&!e)return null;c.add(d);var f=e?[]:{},g;for(g in d)f[g]=b(d[g]);e&&(f.length=d.length);return f}}var c=new Set;return b(a)}function Ne(a){var b={},c;for(c in a)b[c]=a[c];return b};function Oe(){this.g=[]}function Pe(a,b){a.g.push(b["finally"](function(){nb(a.g,b)}))}Oe.prototype.destroy=function(){for(var a=[],b=t(this.g),c=b.next();!c.done;c=b.next())c=c.value,c.promise["catch"](function(){}),a.push(c.abort());this.g=[];return Promise.all(a)};function Qe(a){Le.call(this);this.i=!1;this.l=new Oe;this.g=new Set;this.h=new Set;this.j=a||null;this.m=!1}qa(Qe,Le);q=Qe.prototype;q.Md=function(a){this.m=a};function Re(a,b,c,d){c=c||Se;var e=Te[a];if(!e||c>=e.priority)Te[a]={priority:c,Df:b,Ff:void 0===d?!1:d}}q.Gf=function(a){this.g.add(a)};q.Xf=function(a){this.g["delete"](a)};q.Le=function(){this.g.clear()};q.Hf=function(a){this.h.add(a)};q.Yf=function(a){this.h["delete"](a)};q.Me=function(){this.h.clear()};
function Ue(a,b,c){return{uris:a,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:b,licenseRequestType:null,sessionId:null,streamDataCallback:void 0===c?null:c}}q.destroy=function(){this.i=!0;this.g.clear();this.h.clear();return this.l.destroy()};
q.request=function(a,b){var c=this,d=new Ve;if(this.i){var e=Promise.reject(new O(2,7,7001));e["catch"](function(){});return new We(e,function(){return Promise.resolve()},d)}b.method=b.method||"GET";b.headers=b.headers||{};b.retryParameters=b.retryParameters?Me(b.retryParameters):Ce();b.uris=Me(b.uris);e=Xe(this,a,b);var f=e.ba(function(){return Ye(c,a,b,new Be(b.retryParameters,!1),0,null,d)}),g=f.ba(function(n){return Ze(c,a,n)}),h=Date.now(),k=0;e.promise.then(function(){k=Date.now()-h},function(){});
var l=0;f.promise.then(function(){l=Date.now()},function(){});var m=g.ba(function(n){var p=Date.now()-l,r=n.response;r.timeMs+=k;r.timeMs+=p;n.sf||!c.j||r.fromCache||a!=$e||c.j(r.timeMs,r.data.byteLength);return r},function(n){n&&(n.severity=2);throw n;});e=new We(m.promise,function(){return m.abort()},d);Pe(this.l,e);return e};
function Xe(a,b,c){var d=He(void 0),e={};a=t(a.g);for(var f=a.next();!f.done;e={Zc:e.Zc},f=a.next())e.Zc=f.value,d=d.ba(function(g){return function(){c.body&&(c.body=Pb(c.body));return g.Zc(b,c)}}(e));return d.ba(void 0,function(g){if(g instanceof O&&7001==g.code)throw g;throw new O(2,1,1006,g);})}
function Ye(a,b,c,d,e,f,g){a.m&&(c.uris[e]=c.uris[e].replace("http://","https://"));var h=new fc(c.uris[e]),k=h.Ea,l=!1;k||(k=location.protocol,k=k.slice(0,-1),hc(h,k),c.uris[e]=h.toString());k=k.toLowerCase();var m=(k=Te[k])?k.Df:null;if(!m)return Fe(new O(2,1,1E3,h));var n=k.Ff,p=null,r=null,u=!1,w;return Ie(De(d)).ba(function(){if(a.i)return Ge();w=Date.now();var y=m(c.uris[e],c,b,function(D,B,F){p&&p.stop();r&&r.U(C/1E3);a.j&&b==$e&&(a.j(D,B),l=!0,g.g=F)});if(!n)return y;var x=c.retryParameters.connectionTimeout;
x&&(p=new P(function(){u=!0;y.abort()}),p.U(x/1E3));var C=c.retryParameters.stallTimeout;C&&(r=new P(function(){u=!0;y.abort()}));return y}).ba(function(y){p&&p.stop();r&&r.stop();void 0==y.timeMs&&(y.timeMs=Date.now()-w);return{response:y,sf:l}},function(y){p&&p.stop();r&&r.stop();if(a.i)return Ge();u&&(y=new O(1,1,1003,c.uris[e],b));if(y instanceof O){if(7001==y.code)throw y;if(1010==y.code)throw f;if(1==y.severity){var x=new Q("retry",{error:y});a.dispatchEvent(x);e=(e+1)%c.uris.length;return Ye(a,
b,c,d,e,y,g)}}throw y;})}function Ze(a,b,c){var d=He(void 0),e={};a=t(a.h);for(var f=a.next();!f.done;e={$c:e.$c},f=a.next())e.$c=f.value,d=d.ba(function(g){return function(){var h=c.response;h.data&&(h.data=Pb(h.data));return g.$c(b,h)}}(e));return d.ba(function(){return c},function(g){var h=2;if(g instanceof O){if(7001==g.code)throw g;h=g.severity}throw new O(h,1,1007,g);})}L("shaka.net.NetworkingEngine",Qe);Qe.prototype.request=Qe.prototype.request;Qe.prototype.destroy=Qe.prototype.destroy;
Qe.makeRequest=Ue;Qe.defaultRetryParameters=function(){return Ce()};Qe.prototype.clearAllResponseFilters=Qe.prototype.Me;Qe.prototype.unregisterResponseFilter=Qe.prototype.Yf;Qe.prototype.registerResponseFilter=Qe.prototype.Hf;Qe.prototype.clearAllRequestFilters=Qe.prototype.Le;Qe.prototype.unregisterRequestFilter=Qe.prototype.Xf;Qe.prototype.registerRequestFilter=Qe.prototype.Gf;Qe.unregisterScheme=function(a){delete Te[a]};Qe.registerScheme=Re;Qe.prototype.setForceHTTPS=Qe.prototype.Md;
function Ve(){this.g=0}Qe.NumBytesRemainingClass=Ve;function We(a,b,c){Ee.call(this,a,b);this.h=c}qa(We,Ee);Qe.PendingRequest=We;var $e=1;Qe.RequestType={MANIFEST:0,SEGMENT:$e,LICENSE:2,APP:3,TIMING:4,SERVER_CERTIFICATE:5};var Se=3;Qe.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:Se};var Te={};function af(a){this.g=!1;this.h=new Ac;this.i=a}af.prototype.destroy=function(){var a=this;if(this.g)return this.h;this.g=!0;return this.i().then(function(){a.h.resolve()},function(){a.h.resolve()})};function bf(a,b){if(a.g){if(b instanceof O&&7003==b.code)throw b;throw new O(2,7,7003,b);}};function cf(){this.g=new pd}q=cf.prototype;q.release=function(){this.nb();this.g=null};q.A=function(a,b,c,d){this.g&&(a=new df(a,b,c,d),this.g.push(b,a))};q.wa=function(a,b,c,d){function e(g){f.Da(a,b,e);c(g)}var f=this;this.A(a,b,e,d)};q.Da=function(a,b,c){if(this.g){var d=this.g.get(b)||[];d=t(d);for(var e=d.next();!e.done;e=d.next())e=e.value,e.target!=a||c!=e.listener&&c||(e.Da(),this.g.remove(b,e))}};
q.nb=function(){if(this.g){var a=this.g,b=[],c;for(c in a.g)b.push.apply(b,ja(a.g[c]));a=t(b);for(b=a.next();!b.done;b=a.next())b.value.Da();this.g.g={}}};L("shaka.util.EventManager",cf);cf.prototype.removeAll=cf.prototype.nb;cf.prototype.unlisten=cf.prototype.Da;cf.prototype.listenOnce=cf.prototype.wa;cf.prototype.listen=cf.prototype.A;cf.prototype.release=cf.prototype.release;function df(a,b,c,d){this.target=a;this.type=b;this.listener=c;this.g=ef(a,d);this.target.addEventListener(b,c,this.g)}
df.prototype.Da=function(){this.target.removeEventListener(this.type,this.listener,this.g);this.listener=this.target=null;this.g=!1};function ef(a,b){if(void 0==b)return!1;if("boolean"==typeof b)return b;var c=new Set(["passive","capture"]);Object.keys(b).filter(function(d){return!c.has(d)});return ff(a)?b:b.capture||!1}
function ff(a){var b=gf;if(void 0==b){b=!1;try{var c={},d={get:function(){b=!0;return!1}};Object.defineProperty(c,"passive",d);Object.defineProperty(c,"capture",d);d=function(){};a.addEventListener("test",d,c);a.removeEventListener("test",d,c)}catch(e){b=!1}gf=b}return b||!1}var gf=void 0;function hf(){}function jf(a){a=Gc(a);return(new fc(a)).Ga}function kf(a,b,c){function d(h){Sb(f).setUint32(g,h.byteLength,!0);g+=4;f.set(Ob(h),g);g+=h.byteLength}if(!c||!c.byteLength)throw new O(2,6,6015);var e;"string"==typeof b?e=Ic(b,!0):e=b;a=Gc(a);a=Ic(a,!0);var f=new Uint8Array(12+a.byteLength+e.byteLength+c.byteLength),g=0;d(a);d(e);d(c);return f}L("shaka.util.FairPlayUtils",hf);hf.initDataTransform=kf;hf.defaultGetContentId=jf;function lf(a){for(var b=new Map,c=t(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.set(d,a[d]);return b}function mf(a){var b={};a.forEach(function(c,d){b[d]=c});return b}function nf(a,b){if(a||b){if(a&&!b||b&&!a)return!1}else return!0;if(a.size!=b.size)return!1;for(var c=t(a),d=c.next();!d.done;d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;if(!b.has(d))return!1;d=b.get(d);if(d!=e||void 0==d)return!1}return!0};function of(a,b){var c=this;b=void 0===b?1:b;this.C=a;this.D=new Set;this.g=this.m=null;this.qa=this.Y=!1;this.F=0;this.i=null;this.h=new cf;this.j=new Map;this.u=[];this.s=new Ac;this.o=null;this.l=function(d){c.s.reject(d);a.onError(d)};this.ra=new Map;this.da=new Map;this.N=new P(function(){return pf(c)});this.J=!1;this.H=[];this.L=!1;this.pa=(new P(function(){rf(c)})).Ca(b);this.s["catch"](function(){});this.I=new af(function(){return sf(c)});this.S=!1}q=of.prototype;q.destroy=function(){return this.I.destroy()};
function sf(a){return I(function(b){switch(b.g){case 1:return a.h.release(),a.h=null,a.s.reject(),a.pa.stop(),a.pa=null,a.N.stop(),a.N=null,v(b,uf(a),2);case 2:if(!a.g){b.v(3);break}A(b,4);return v(b,a.g.setMediaKeys(null),6);case 6:va(b,5);break;case 4:E(b);case 5:a.g=null;case 3:a.i=null,a.D.clear(),a.m=null,a.u=[],a.o=null,a.l=function(){},a.C=null,a.S=!1,z(b)}})}q.configure=function(a){this.o=a};function vf(a,b,c){a.qa=!0;a.u=[];a.J=c;return wf(a,b)}
function xf(a,b,c){a.u=c;a.J=0<c.length;return wf(a,b)}function yf(a,b,c,d,e,f){var g=new Map;e={audioCapabilities:e,videoCapabilities:f,distinctiveIdentifier:"optional",persistentState:"required",sessionTypes:["persistent-license"],label:b};e.drmInfos=[{keySystem:b,licenseServerUri:c,distinctiveIdentifierRequired:!1,persistentStateRequired:!0,audioRobustness:"",videoRobustness:"",serverCertificate:d,serverCertificateUri:"",initData:null,keyIds:null}];g.set(b,e);return zf(a,g,[])}
function wf(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w;return I(function(y){if(1==y.g){if(c=Af(a))for(d=t(b),e=d.next();!e.done;e=d.next())f=e.value,f.video&&(f.video.drmInfos=[c]),f.audio&&(f.audio.drmInfos=[c]);g=b.some(function(x){return x.video&&x.video.drmInfos.length||x.audio&&x.audio.drmInfos.length?!0:!1});g||(h=lf(a.o.servers),Bf(b,h));k=t(b);for(e=k.next();!e.done;e=k.next())for(l=e.value,m=Cf(l),n=t(m),p=n.next();!p.done;p=n.next())r=p.value,Df(r,lf(a.o.servers),lf(a.o.advanced||{}));return v(y,
Vd(b,a.J,a.S),2)}u=g||Object.keys(a.o.servers).length;if(!u)return a.Y=!0,y["return"](Promise.resolve());w=zf(a,void 0,b);return y["return"](g?w:w["catch"](function(){}))})}
q.Pb=function(a){var b=this,c,d;return I(function(e){if(1==e.g){if(!b.m)return b.h.wa(a,"encrypted",function(){b.l(new O(2,6,6010))}),e["return"]();b.g=a;b.h.wa(b.g,"play",function(){for(var f=t(b.H),g=f.next();!g.done;g=f.next())Ef(b,g.value);b.L=!0;b.H=[]});"webkitCurrentPlaybackTargetIsWireless"in b.g&&b.h.A(b.g,"webkitcurrentplaybacktargetiswirelesschanged",function(){return uf(b)});c=b.g.setMediaKeys(b.m);c=c["catch"](function(f){return Promise.reject(new O(2,6,6003,f.message))});return v(e,
c,2)}bf(b.I);Ff(b);b.i.initData.length||b.u.length||(d=function(f){return Gf(b,f.initDataType,Ob(f.initData))},b.h.A(b.g,"encrypted",d));z(e)})};
function Hf(a){var b,c,d,e,f;return I(function(g){switch(g.g){case 1:if(!a.m||!a.i)return g["return"]();if(!a.i.serverCertificateUri||a.i.serverCertificate&&a.i.serverCertificate.length){g.v(2);break}b=Ue([a.i.serverCertificateUri],a.o.retryParameters);A(g,3);c=a.C.lb.request(5,b);return v(g,c.promise,5);case 5:d=g.h;a.i.serverCertificate=Ob(d.data);va(g,4);break;case 3:throw e=E(g),new O(2,6,6017,e);case 4:if(a.I.g)return g["return"]();case 2:if(!a.i.serverCertificate||!a.i.serverCertificate.length)return g["return"]();
A(g,6);return v(g,a.m.setServerCertificate(a.i.serverCertificate),8);case 8:va(g,0);break;case 6:throw f=E(g),new O(2,6,6004,f.message);}})}function If(a,b){var c,d,e;return I(function(f){if(1==f.g)return v(f,Jf(a,b),2);if(3!=f.g){c=f.h;if(!c)return f["return"]();d=[];if(e=a.j.get(c))e.Ka=new Ac,d.push(e.Ka);d.push(c.remove());return v(f,Promise.all(d),3)}a.j["delete"](c);z(f)})}
function Ff(a){for(var b=(a.i?a.i.initData:[])||[],c=t(b),d=c.next();!d.done;d=c.next())d=d.value,Gf(a,d.initDataType,d.initData);c=t(a.u);for(d=c.next();!d.done;d=c.next())Jf(a,d.value);b.length||a.u.length||a.s.resolve();return a.s}function Gf(a,b,c){var d=a.j.values();d=t(d);for(var e=d.next();!e.done;e=d.next())if(Mb(c,e.value.initData)&&!wd("Tizen 2"))return;Kf(a,b,c,a.i.sessionType)}function Lf(a){return a?!!a.match(/^com\.(microsoft|chromecast)\.playready/):!1}
function Mf(a){a=a.j.keys();a=db(a,function(b){return b.sessionId});return Array.from(a)}q.Tb=function(){var a=Infinity,b=this.j.keys();b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,isNaN(c.expiration)||(a=Math.min(a,c.expiration));return a};q.zc=function(){return mf(this.da)};
function zf(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,w;return I(function(y){switch(y.g){case 1:d=new Map;if(c.length){e=Nf(a,c,d);y.v(2);break}return v(y,Of(a,b),3);case 3:e=y.h;case 2:f=e;if(!f)throw new O(2,6,6001);bf(a.I);A(y,4);a.D.clear();g=f.getConfiguration();h=g.audioCapabilities||[];k=g.videoCapabilities||[];l=t(h);for(m=l.next();!m.done;m=l.next())n=m.value,a.D.add(n.contentType.toLowerCase());p=t(k);for(m=p.next();!m.done;m=p.next())r=m.value,a.D.add(r.contentType.toLowerCase());if(c.length){var x=
f.keySystem;var C=d.get(f.keySystem);var D=[],B=[],F=[],G=[],H=new Set;Pf(C,D,F,B,G,H);var M=a.J?"persistent-license":"temporary";x={keySystem:x,licenseServerUri:D[0],distinctiveIdentifierRequired:C[0].distinctiveIdentifierRequired,persistentStateRequired:C[0].persistentStateRequired,sessionType:C[0].sessionType||M,audioRobustness:C[0].audioRobustness||"",videoRobustness:C[0].videoRobustness||"",serverCertificate:F[0],serverCertificateUri:B[0],initData:G,keyIds:H};C=t(C);for(D=C.next();!D.done;D=
C.next())D=D.value,D.distinctiveIdentifierRequired&&(x.distinctiveIdentifierRequired=D.distinctiveIdentifierRequired),D.persistentStateRequired&&(x.persistentStateRequired=D.persistentStateRequired);C=x}else C=f.keySystem,x=b.get(f.keySystem),D=[],B=[],F=[],G=[],H=new Set,Pf(x.drmInfos,D,F,B,G,H),C={keySystem:C,licenseServerUri:D[0],distinctiveIdentifierRequired:"required"==x.distinctiveIdentifier,persistentStateRequired:"required"==x.persistentState,sessionType:x.sessionTypes[0]||"temporary",audioRobustness:(x.audioCapabilities?
x.audioCapabilities[0].robustness:"")||"",videoRobustness:(x.videoCapabilities?x.videoCapabilities[0].robustness:"")||"",serverCertificate:F[0],serverCertificateUri:B[0],initData:G,keyIds:H};a.i=C;if(!a.i.licenseServerUri)throw new O(2,6,6012,a.i.keySystem);return v(y,f.createMediaKeys(),6);case 6:return u=y.h,bf(a.I),a.m=u,a.Y=!0,v(y,Hf(a),7);case 7:bf(a.I);va(y,0);break;case 4:w=E(y);bf(a.I,w);a.i=null;a.D.clear();if(w instanceof O)throw w;throw new O(2,6,6002,w.message);}})}
function Nf(a,b,c){for(var d=t(b),e=d.next();!e.done;e=d.next()){var f=t(Cf(e.value));for(e=f.next();!e.done;e=f.next())e=e.value,c.has(e.keySystem)||c.set(e.keySystem,[]),c.get(e.keySystem).push(e)}if(1==c.size&&c.has(""))throw new O(2,6,6E3);d={};a=t(a.o.preferredKeySystems);for(e=a.next();!e.done;d={Xc:d.Xc},e=a.next())for(d.Xc=e.value,f=t(b),e=f.next();!e.done;e=f.next())if(e=e.value.decodingInfos.find(function(l){return function(m){return m.supported&&null!=m.keySystemAccess&&m.keySystemAccess.keySystem==
l.Xc}}(d)))return e.keySystemAccess;a=t([!0,!1]);for(e=a.next();!e.done;e=a.next())for(d=e.value,f=t(b),e=f.next();!e.done;e=f.next()){var g=t(e.value.decodingInfos);for(e=g.next();!e.done;e=g.next()){var h=e.value;if(h.supported&&h.keySystemAccess){e=c.get(h.keySystemAccess.keySystem);var k=t(e);for(e=k.next();!e.done;e=k.next())if(!!e.value.licenseServerUri==d)return h.keySystemAccess}}}return null}
function Of(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w,y;return I(function(x){switch(x.g){case 1:if(1==b.size&&b.has(""))throw new O(2,6,6E3);d=t(b.values());for(e=d.next();!e.done;e=d.next())f=e.value,0==f.audioCapabilities.length&&delete f.audioCapabilities,0==f.videoCapabilities.length&&delete f.videoCapabilities;g=t(a.o.preferredKeySystems);h=g.next();case 2:if(h.done){x.v(4);break}k=h.value;if(!b.has(k)){x.v(3);break}l=b.get(k);A(x,6);return v(x,navigator.requestMediaKeySystemAccess(k,[l]),8);case 8:return c=
x.h,x["return"](c);case 6:E(x);case 7:bf(a.I);case 3:h=g.next();x.v(2);break;case 4:m=t([!0,!1]),n=m.next();case 9:if(n.done){x.v(11);break}p=n.value;r=t(b.keys());h=r.next();case 12:if(h.done){n=m.next();x.v(9);break}u=h.value;w=b.get(u);y=w.drmInfos.some(function(C){return!!C.licenseServerUri});if(y!=p){x.v(13);break}A(x,15);return v(x,navigator.requestMediaKeySystemAccess(u,[w]),17);case 17:return c=x.h,x["return"](c);case 15:E(x);case 16:bf(a.I);case 13:h=r.next();x.v(12);break;case 11:return x["return"](c)}})}
function Af(a){a=lf(a.o.clearKeys);if(0==a.size)return null;var b=[],c=[];a.forEach(function(e,f){var g=Nc(f),h=Nc(e);g={kty:"oct",kid:Lc(g,!1),k:Lc(h,!1)};b.push(g);c.push(g.kid)});a=JSON.stringify({keys:b});var d=JSON.stringify({kids:c});d=[{initData:Ob(Hc(d)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(a),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
serverCertificateUri:"",sessionType:"",initData:d,keyIds:new Set(c)}}
function Jf(a,b){var c,d,e,f,g;return I(function(h){switch(h.g){case 1:try{c=a.m.createSession("persistent-license")}catch(k){return d=new O(2,6,6005,k.message),a.l(d),h["return"](Promise.reject(d))}a.h.A(c,"message",function(k){a.g&&a.o.delayLicenseRequestUntilPlayed&&a.g.paused&&!a.L?a.H.push(k):Ef(a,k)});a.h.A(c,"keystatuseschange",function(k){return Qf(a,k)});e={initData:null,loaded:!1,Cd:Infinity,Ka:null,type:"persistent-license"};a.j.set(c,e);A(h,2);return v(h,c.load(b),4);case 4:f=h.h;bf(a.I);
if(!f)return a.j["delete"](c),a.l(new O(2,6,6013)),h["return"](Promise.resolve());e.loaded=!0;Rf(a)&&a.s.resolve();return h["return"](c);case 2:g=E(h),bf(a.I,g),a.j["delete"](c),a.l(new O(2,6,6005,g.message));case 3:return h["return"](Promise.resolve())}})}
function Kf(a,b,c,d){try{var e=a.m.createSession(d)}catch(f){a.l(new O(2,6,6005,f.message));return}a.h.A(e,"message",function(f){a.g&&a.o.delayLicenseRequestUntilPlayed&&a.g.paused&&!a.L?a.H.push(f):Ef(a,f)});a.h.A(e,"keystatuseschange",function(f){return Qf(a,f)});a.j.set(e,{initData:c,loaded:!1,Cd:Infinity,Ka:null,type:d});try{c=a.o.initDataTransform(c,b,a.i)}catch(f){b=f;f instanceof O||(b=new O(2,6,6016,f));a.l(b);return}a.o.logLicenseExchange&&Lc(c);e.generateRequest(b,c)["catch"](function(f){if(!a.I.g){a.j["delete"](e);
var g=f.errorCode;if(g&&g.systemCode){var h=g.systemCode;0>h&&(h+=Math.pow(2,32));h="0x"+h.toString(16)}a.l(new O(2,6,6006,f.message,f,h))}})}function Sf(a,b,c){"skd"==b&&(b=c.serverCertificate,c=jf(a),a=kf(a,c,b));return a}
function Ef(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w;I(function(y){switch(y.g){case 1:return c=b.target,a.o.logLicenseExchange&&Lc(b.message),d=a.j.get(c),e=a.i.licenseServerUri,f=a.o.advanced[a.i.keySystem],"individualization-request"==b.messageType&&f&&f.individualizationServer&&(e=f.individualizationServer),g=Ue([e],a.o.retryParameters),g.body=b.message,g.method="POST",g.licenseRequestType=b.messageType,g.sessionId=c.sessionId,Lf(a.i.keySystem)&&Tf(g),h=Date.now(),A(y,2),l=a.C.lb.request(2,g),v(y,
l.promise,4);case 4:k=y.h;va(y,3);break;case 2:return m=E(y),n=new O(2,6,6007,m),a.l(n),d&&d.Ka&&d.Ka.reject(n),y["return"]();case 3:if(a.I.g)return y["return"]();a.F+=(Date.now()-h)/1E3;a.o.logLicenseExchange&&Lc(k.data);A(y,5);return v(y,c.update(k.data),7);case 7:va(y,6);break;case 5:return p=E(y),r=new O(2,6,6008,p.message),a.l(r),d&&d.Ka&&d.Ka.reject(r),y["return"]();case 6:u=new Q("drmsessionupdate"),a.C.onEvent(u),d&&(d.Ka&&d.Ka.resolve(),w=new P(function(){d.loaded=!0;Rf(a)&&a.s.resolve()}),
w.U(Uf)),z(y)}})}function Tf(a){var b=Ec(a.body,!0,!0);if(b.includes("PlayReadyKeyMessage")){b=(new DOMParser).parseFromString(b,"application/xml");for(var c=t(b.getElementsByTagName("HttpHeader")),d=c.next();!d.done;d=c.next())d=d.value,a.headers[d.getElementsByTagName("name")[0].textContent]=d.getElementsByTagName("value")[0].textContent;a.body=Mc(b.getElementsByTagName("Challenge")[0].textContent)}else a.headers["Content-Type"]="text/xml; charset=utf-8"}
function Qf(a,b){var c=b.target,d=a.j.get(c),e=!1;c.keyStatuses.forEach(function(g,h){if("string"==typeof h){var k=h;h=g;g=k}if(Lf(a.i.keySystem)&&16==h.byteLength&&navigator.userAgent.match(/Edge?\//)){k=Sb(h);var l=k.getUint32(0,!0),m=k.getUint16(4,!0),n=k.getUint16(6,!0);k.setUint32(0,l,!1);k.setUint16(4,m,!1);k.setUint16(6,n,!1)}"status-pending"!=g&&(d.loaded=!0);"expired"==g&&(e=!0);k=Oc(h);a.ra.set(k,g)});var f=c.expiration-Date.now();(0>f||e&&1E3>f)&&d&&!d.Ka&&(a.j["delete"](c),c.close()["catch"](function(){}));
Rf(a)&&(a.s.resolve(),a.N.U(Vf))}function pf(a){var b=a.ra,c=a.da;c.clear();b.forEach(function(d,e){return c.set(e,d)});b=Array.from(c.values());b.length&&b.every(function(d){return"expired"==d})&&a.l(new O(2,6,6014));a.C.Gc(mf(c))}
function Wf(){var a,b,c,d,e,f,g,h;return I(function(k){return 1==k.g?(a="org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" "),b=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],c={initDataTypes:["cenc"],videoCapabilities:b},d={videoCapabilities:b,persistentState:"required",sessionTypes:["persistent-license"]},e=[d,
c],f=new Map,g=function(l){var m,n,p;return I(function(r){switch(r.g){case 1:return A(r,2),v(r,navigator.requestMediaKeySystemAccess(l,e),4);case 4:return m=r.h,p=(n=m.getConfiguration().sessionTypes)?n.includes("persistent-license"):!1,wd("Tizen 3")&&(p=!1),f.set(l,{persistentState:p}),v(r,m.createMediaKeys(),5);case 5:va(r,0);break;case 2:E(r),f.set(l,null),z(r)}})},h=a.map(function(l){return g(l)}),v(k,Promise.all(h),2)):k["return"](mf(f))})}
function Xf(a){var b;return I(function(c){if(1==c.g)return b=new Promise(function(d,e){(new P(e)).U(Yf)}),A(c,2),v(c,Promise.race([Promise.all([a.close(),a.closed]),b]),4);if(2!=c.g)return va(c,0);E(c);z(c)})}
function uf(a){var b;return I(function(c){b=Array.from(a.j.entries());a.j.clear();return v(c,Promise.all(b.map(function(d){d=t(d);var e=d.next().value,f=d.next().value;return I(function(g){if(1==g.g)return A(g,2),a.qa||a.u.includes(e.sessionId)||"persistent-license"!==f.type?v(g,Xf(e),5):v(g,e.remove(),5);if(2!=g.g)return va(g,0);E(g);z(g)})})),0)})}
function Zf(a,b){if(!a.length)return b;if(!b.length)return a;for(var c=[],d=t(a),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=t(b),g=f.next();!g.done;g=f.next())if(g=g.value,e.keySystem==g.keySystem){f=[];f=f.concat(e.initData||[]);f=f.concat(g.initData||[]);var h=e.keyIds&&g.keyIds?new Set([].concat(ja(e.keyIds),ja(g.keyIds))):e.keyIds||g.keyIds;c.push({keySystem:e.keySystem,licenseServerUri:e.licenseServerUri||g.licenseServerUri,distinctiveIdentifierRequired:e.distinctiveIdentifierRequired||
g.distinctiveIdentifierRequired,persistentStateRequired:e.persistentStateRequired||g.persistentStateRequired,videoRobustness:e.videoRobustness||g.videoRobustness,audioRobustness:e.audioRobustness||g.audioRobustness,serverCertificate:e.serverCertificate||g.serverCertificate,serverCertificateUri:e.serverCertificateUri||g.serverCertificateUri,initData:f,keyIds:h});break}}return c}function Cf(a){return(a.video?a.video.drmInfos:[]).concat(a.audio?a.audio.drmInfos:[])}
function rf(a){a.j.forEach(function(b,c){var d=b.Cd,e=c.expiration;isNaN(e)&&(e=Infinity);e!=d&&(a.C.onExpirationUpdated(c.sessionId,e),b.Cd=e)})}function Rf(a){a=a.j.values();return gb(a,function(b){return b.loaded})}
function Bf(a,b){var c=[];b.forEach(function(f,g){c.push({keySystem:g,licenseServerUri:f,distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,serverCertificateUri:"",initData:[],keyIds:new Set})});for(var d=t(a),e=d.next();!e.done;e=d.next())e=e.value,e.video&&(e.video.drmInfos=c),e.audio&&(e.audio.drmInfos=c)}
function Pf(a,b,c,d,e,f){var g={};a=t(a);for(var h=a.next();!h.done;g={oa:g.oa},h=a.next()){g.oa=h.value;b.includes(g.oa.licenseServerUri)||b.push(g.oa.licenseServerUri);d.includes(g.oa.serverCertificateUri)||d.push(g.oa.serverCertificateUri);g.oa.serverCertificate&&(c.some(function(m){return function(n){return Mb(n,m.oa.serverCertificate)}}(g))||c.push(g.oa.serverCertificate));if(g.oa.initData){h={};for(var k=t(g.oa.initData),l=k.next();!l.done;h={kc:h.kc},l=k.next())h.kc=l.value,e.some(function(m){return function(n){var p=
m.kc;return n.keyId&&n.keyId==p.keyId?!0:n.initDataType==p.initDataType&&Mb(n.initData,p.initData)}}(h))||e.push(h.kc)}if(g.oa.keyIds)for(h=t(g.oa.keyIds),k=h.next();!k.done;k=h.next())f.add(k.value)}}
function Df(a,b,c){if(a.keySystem&&("org.w3.clearkey"!=a.keySystem||!a.licenseServerUri)){b.size&&(b=b.get(a.keySystem)||"",a.licenseServerUri=b);a.keyIds||(a.keyIds=new Set);if(c=c.get(a.keySystem))a.distinctiveIdentifierRequired||(a.distinctiveIdentifierRequired=c.distinctiveIdentifierRequired),a.persistentStateRequired||(a.persistentStateRequired=c.persistentStateRequired),a.videoRobustness||(a.videoRobustness=c.videoRobustness),a.audioRobustness||(a.audioRobustness=c.audioRobustness),a.serverCertificate||
(a.serverCertificate=c.serverCertificate),c.sessionType&&(a.sessionType=c.sessionType),a.serverCertificateUri||(a.serverCertificateUri=c.serverCertificateUri);window.cast&&window.cast.__platform__&&"com.microsoft.playready"==a.keySystem&&(a.keySystem="com.chromecast.playready")}}var Yf=1,Uf=5,Vf=.5,$f=new Bc(function(){return Pb(new Uint8Array([0]))});function ag(){}function bg(a,b,c,d){var e,f,g,h;return I(function(k){if(1==k.g){if(d&&(e=cg[d.toLowerCase()]))return k["return"](e);if(f=dg(a))if(g=eg[f])return k["return"](g);return d?k.v(2):v(k,fg(a,b,c),3)}if(2!=k.g&&(d=k.h)&&(h=cg[d]))return k["return"](h);throw new O(2,4,4E3,a);})}
function fg(a,b,c){var d,e,f;return I(function(g){if(1==g.g)return d=Ue([a],c),d.method="HEAD",v(g,b.request(0,d).promise,2);e=g.h;f=e.headers["content-type"];return g["return"](f?f.toLowerCase().split(";").shift():"")})}function dg(a){a=(new fc(a)).ya.split("/").pop().split(".");return 1==a.length?"":a.pop().toLowerCase()}L("shaka.media.ManifestParser",ag);ag.unregisterParserByMime=function(a){delete cg[a]};ag.registerParserByMime=function(a,b){cg[a]=b};
ag.registerParserByExtension=function(a,b){eg[a]=b};var cg={},eg={};function gg(a,b){this.P=Sb(a);this.h=b==hg;this.g=0}q=gg.prototype;q.na=function(){return this.g<this.P.byteLength};q.Z=function(){return this.g};q.Ye=function(){return this.P.byteLength};q.$=function(){try{var a=this.P.getUint8(this.g);this.g+=1;return a}catch(b){throw ig();}};q.Eb=function(){try{var a=this.P.getUint16(this.g,this.h);this.g+=2;return a}catch(b){throw ig();}};q.M=function(){try{var a=this.P.getUint32(this.g,this.h);this.g+=4;return a}catch(b){throw ig();}};
q.me=function(){try{var a=this.P.getInt32(this.g,this.h);this.g+=4;return a}catch(b){throw ig();}};q.Fb=function(){try{if(this.h){var a=this.P.getUint32(this.g,!0);var b=this.P.getUint32(this.g+4,!0)}else b=this.P.getUint32(this.g,!1),a=this.P.getUint32(this.g+4,!1)}catch(c){throw ig();}if(2097151<b)throw new O(2,3,3001);this.g+=8;return b*Math.pow(2,32)+a};q.$a=function(a){if(this.g+a>this.P.byteLength)throw ig();var b=Ob(this.P,this.g,a);this.g+=a;return b};
q.skip=function(a){if(this.g+a>this.P.byteLength)throw ig();this.g+=a};q.oe=function(a){if(this.g<a)throw ig();this.g-=a};q.seek=function(a){if(0>a||a>this.P.byteLength)throw ig();this.g=a};q.bc=function(){for(var a=this.g;this.na()&&0!=this.P.getUint8(this.g);)this.g+=1;a=Ob(this.P,a,this.g-a);this.g+=1;return Dc(a)};function ig(){return new O(2,3,3E3)}L("shaka.util.DataViewReader",gg);gg.prototype.readTerminatedString=gg.prototype.bc;gg.prototype.seek=gg.prototype.seek;gg.prototype.rewind=gg.prototype.oe;
gg.prototype.skip=gg.prototype.skip;gg.prototype.readBytes=gg.prototype.$a;gg.prototype.readUint64=gg.prototype.Fb;gg.prototype.readInt32=gg.prototype.me;gg.prototype.readUint32=gg.prototype.M;gg.prototype.readUint16=gg.prototype.Eb;gg.prototype.readUint8=gg.prototype.$;gg.prototype.getLength=gg.prototype.Ye;gg.prototype.getPosition=gg.prototype.Z;gg.prototype.hasMoreData=gg.prototype.na;var hg=1;gg.Endianness={BIG_ENDIAN:0,LITTLE_ENDIAN:hg};function jg(){this.i=[];this.h=[];this.g=!1}q=jg.prototype;q.box=function(a,b){var c=kg(a);this.i[c]=lg;this.h[c]=b;return this};q.T=function(a,b){var c=kg(a);this.i[c]=mg;this.h[c]=b;return this};q.stop=function(){this.g=!0};q.parse=function(a,b,c){a=new gg(a,0);for(this.g=!1;a.na()&&!this.g;)this.Ic(0,a,b,c)};
q.Ic=function(a,b,c,d){var e=b.Z();if(d&&e+8>b.P.byteLength)this.g=!0;else{var f=b.M(),g=b.M(),h=!1;switch(f){case 0:f=b.P.byteLength-e;break;case 1:if(d&&b.Z()+8>b.P.byteLength){this.g=!0;return}f=b.Fb();h=!0}var k=this.h[g];if(k){var l=null,m=null;if(this.i[g]==mg){if(d&&b.Z()+4>b.P.byteLength){this.g=!0;return}m=b.M();l=m>>>24;m&=16777215}g=e+f;c&&g>b.P.byteLength&&(g=b.P.byteLength);d&&g>b.P.byteLength?this.g=!0:(d=g-b.Z(),b=0<d?b.$a(d):new Uint8Array(0),b=new gg(b,0),k({parser:this,partialOkay:c||
!1,version:l,flags:m,reader:b,size:f,start:e+a,has64BitSize:h}))}else b.skip(Math.min(e+f-b.Z(),b.P.byteLength-b.Z()))}};function ng(a){for(var b=og(a);a.reader.na()&&!a.parser.g;)a.parser.Ic(a.start+b,a.reader,a.partialOkay)}function pg(a){var b=og(a),c=a.reader.M();c=t(ib(c));for(var d=c.next();!d.done&&(a.parser.Ic(a.start+b,a.reader,a.partialOkay),!a.parser.g);d=c.next());}function qg(a){return function(b){a(b.reader.$a(b.reader.P.byteLength-b.reader.Z()))}}
function kg(a){var b=0;a=t(a);for(var c=a.next();!c.done;c=a.next())b=b<<8|c.value.charCodeAt(0);return b}function rg(a){return String.fromCharCode(a>>24&255,a>>16&255,a>>8&255,a&255)}function og(a){return 8+(a.has64BitSize?8:0)+(null!=a.flags?4:0)}L("shaka.util.Mp4Parser",jg);jg.headerSize=og;jg.typeToString=rg;jg.allData=qg;jg.sampleDescription=pg;jg.children=ng;jg.prototype.parseNext=jg.prototype.Ic;jg.prototype.parse=jg.prototype.parse;jg.prototype.stop=jg.prototype.stop;
jg.prototype.fullBox=jg.prototype.T;jg.prototype.box=jg.prototype.box;var lg=0,mg=1;function sg(a){function b(){d=!0}function c(l){f.push(l);ng(l)}a=Ob(a);var d=!1,e,f=[],g=[];(new jg).box("moov",c).box("trak",c).box("mdia",c).box("minf",c).box("stbl",c).T("stsd",function(l){e=l;f.push(l);pg(l)}).T("encv",b).T("enca",b).T("avc1",function(l){g.push({box:l,Zb:1701733238})}).T("avc3",function(l){g.push({box:l,Zb:1701733238})}).T("ac-3",function(l){g.push({box:l,Zb:1701733217})}).T("ec-3",function(l){g.push({box:l,Zb:1701733217})}).T("mp4a",function(l){g.push({box:l,Zb:1701733217})}).parse(a);
if(d)return a;if(0==g.length||!e)throw ab(Oc(a)),new O(2,3,3019);g.reverse();for(var h=t(g),k=h.next();!k.done;k=h.next())k=k.value,a=tg(a,e,k.box,f,k.Zb);return a}
function tg(a,b,c,d,e){var f=ug.value(),g=a.subarray(c.start,c.start+c.size),h=Sb(g),k=new Uint8Array(c.size+f.byteLength);k.set(g,0);g=Sb(k);g.setUint32(4,e);k.set(f,c.size);e=h.getUint32(4);g.setUint32(c.size+16,e);vg(k,0,k.byteLength);e=new Uint8Array(a.byteLength+k.byteLength);c=wd("Xbox One")?c.start:c.start+c.size;f=a.subarray(c);e.set(a.subarray(0,c));e.set(k,c);e.set(f,c+k.byteLength);a=t(d);for(d=a.next();!d.done;d=a.next())d=d.value,vg(e,d.start,d.size+k.byteLength);k=Sb(e,b.start);b=og(b);
a=k.getUint32(b);k.setUint32(b,a+1);return e}function vg(a,b,c){a=Sb(a,b);b=a.getUint32(0);0!=b&&(1==b?(a.setUint32(8,c>>32),a.setUint32(12,c&4294967295)):a.setUint32(0,c))}var ug=new Bc(function(){return new Uint8Array([0,0,0,80,115,105,110,102,0,0,0,12,102,114,109,97,0,0,0,0,0,0,0,20,115,99,104,109,0,0,0,0,99,101,110,99,0,1,0,0,0,0,0,40,115,99,104,105,0,0,0,32,116,101,110,99,0,0,0,0,0,0,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])});function wg(a,b,c,d,e){if(d>=e)return null;for(var f=-1,g=-1,h=0;h<c.length;h++)if(c[h].some(function(B){return null!=B&&""!=B.g.trim()})){f=h;break}for(h=c.length-1;0<=h;h--)if(c[h].some(function(B){return null!=B&&""!=B.g.trim()})){g=h;break}if(-1===f||-1===g)return null;for(var k=h=!1,l="white",m="black",n=xg(d,e,h,k,l,m);f<=g;f++){for(var p=c[f],r=-1,u=-1,w=0;w<p.length;w++)if(null!=p[w]&&""!==p[w].g.trim()){r=w;break}for(w=p.length-1;0<=w;w--)if(null!=p[w]&&""!==p[w].g.trim()){u=w;break}if(-1===
r||-1===u)p=yg(d,e),a.nestedCues.push(p);else{for(;r<=u;r++)if(w=p[r]){var y=w.l,x=w.i,C=w.j,D=w.h;if(y!=h||x!=k||C!=l||D!=m)n.payload&&a.nestedCues.push(n),n=xg(d,e,y,x,C,D),h=y,k=x,l=C,m=D;n.payload+=w.g}else n.payload+=" ";n.payload&&a.nestedCues.push(n);f!==g&&(n=yg(d,e),a.nestedCues.push(n));n=xg(d,e,h,k,l,m)}}return a.nestedCues.length?{cue:a,stream:b}:null}
function xg(a,b,c,d,e,f){a=new qb(a,b,"");c&&a.textDecoration.push("underline");d&&(a.fontStyle="italic");a.color=e;a.backgroundColor=f;return a}function yg(a,b){var c=new qb(a,b,"");c.lineBreak=!0;return c}function zg(a,b,c,d,e){this.g=a;this.l=b;this.i=c;this.h=d;this.j=e};function Ag(a,b){this.i=[];this.g=1;this.h=0;this.D=a;this.u=b;this.j=this.m=!1;this.l="white";this.s="black";Bg(this)}function Cg(a,b,c){return wg(new qb(b,c,""),"CC"+(a.D<<1|a.u+1),a.i,b,c)}function Bg(a){Dg(a,0,15);a.g=1}function Eg(a,b,c){if(!(32>c||127<c)){var d="";switch(b){case Fg:d=Gg.has(c)?Gg.get(c):String.fromCharCode(c);break;case Hg:d=Ig.get(c);break;case Jg:a.i[a.g].pop();d=Kg.get(c);break;case Lg:a.i[a.g].pop(),d=Mg.get(c)}d&&a.i[a.g].push(new zg(d,a.m,a.j,a.s,a.l))}}
function Ng(a,b,c,d){if(b>=c)for(--d;0<=d;d--)a.i[b+d]=a.i[c+d].map(function(f){return f});else for(var e=0;e<d;e++)a.i[b+e]=a.i[c+e].map(function(f){return f})}function Dg(a,b,c){for(var d=0;d<=c;d++)a.i[b+d]=[]}
var Fg=0,Hg=1,Jg=2,Lg=3,Gg=new Map([[39,"\u2019"],[42,"\u00e1"],[92,"\u00e9"],[92,"\u00e9"],[94,"\u00ed"],[95,"\u00f3"],[96,"\u00fa"],[123,"\u00e7"],[124,"\u00f7"],[125,"\u00d1"],[126,"\u00f1"],[127,"\u2588"]]),Ig=new Map([[48,"\u00ae"],[49,"\u00b0"],[50,"\u00bd"],[51,"\u00bf"],[52,"\u2122"],[53,"\u00a2"],[54,"\u00a3"],[55,"\u266a"],[56,"\u00e0"],[57,"\u2800"],[58,"\u00e8"],[59,"\u00e2"],[60,"\u00ea"],[61,"\u00ee"],[62,"\u00f4"],[63,"\u00fb"]]),Kg=new Map([[32,"\u00c1"],[33,"\u00c9"],[34,"\u00d3"],
[35,"\u00da"],[36,"\u00dc"],[37,"\u00fc"],[38,"\u2018"],[39,"\u00a1"],[40,"*"],[41,"'"],[42,"\u2500"],[43,"\u00a9"],[44,"\u2120"],[45,"\u00b7"],[46,"\u201c"],[47,"\u201d"],[48,"\u00c0"],[49,"\u00c2"],[50,"\u00c7"],[51,"\u00c8"],[52,"\u00ca"],[53,"\u00cb"],[54,"\u00eb"],[55,"\u00ce"],[56,"\u00cf"],[57,"\u00ef"],[58,"\u00d4"],[59,"\u00d9"],[60,"\u00f9"],[61,"\u00db"],[62,"\u00ab"],[63,"\u00bb"]]),Mg=new Map([[32,"\u00c3"],[33,"\u00e3"],[34,"\u00cd"],[35,"\u00cc"],[36,"\u00ec"],[37,"\u00d2"],[38,"\u00f2"],
[39,"\u00d5"],[40,"\u00f5"],[41,"{"],[42,"}"],[43,"\\"],[44,"^"],[45,"_"],[46,"|"],[47,"~"],[48,"\u00c4"],[49,"\u00e4"],[50,"\u00d6"],[51,"\u00f6"],[52,"\u00df"],[53,"\u00a5"],[54,"\u00a4"],[55,"\u2502"],[56,"\u00c5"],[57,"\u00e5"],[58,"\u00d8"],[59,"\u00f8"],[60,"\u250c"],[61,"\u2510"],[62,"\u2514"],[63,"\u2518"]]);function Og(a,b){this.h=Pg;this.s=new Ag(a,b);this.i=new Ag(a,b);this.l=new Ag(a,b);this.g=this.i;this.j=0;this.m=null}function Qg(a,b,c){a.g=a.i;var d=a.g,e=null;a.h!==Rg&&a.h!==Sg&&(e=Cg(d,a.j,c),c=a.i,c.g=0<c.h?c.h:0,Dg(c,0,15),c=a.l,c.g=0<c.h?c.h:0,Dg(c,0,15),d.g=15);a.h=Rg;d.h=b;return e}function Tg(a){a.h=Ug;a.g=a.l;a.g.h=0}function Vg(a){Wa("Cea608DataChannel","CEA-608 text mode entered, but is unsupported");a.g=a.s;a.h=Sg}
var Pg=0,Ug=1,Rg=3,Sg=4,Wg="black green blue cyan red yellow magenta black".split(" "),Xg="white green blue cyan red yellow magenta white_italics".split(" ");function Yg(){this.l=!1;this.F=this.J=0;this.H=Zg;this.i=[];this.g=this.h=this.j=0;this.D=this.s=!1;this.u="white";this.m="black";$g(this)}function $g(a){a.i=[];for(var b=0;15>b;b++)a.i.push(ah())}function ah(){for(var a=[],b=0;42>b;b++)a.push(null);return a}function bh(a,b){ch(a)&&(a.i[a.h][a.g]=new zg(b,a.D,a.s,a.m,a.u),a.g++)}function ch(a){var b=a.g<a.F&&0<=a.g;return a.h<a.J&&0<=a.h&&b}Yg.prototype.isVisible=function(){return this.l};
function dh(a,b,c){var d=new qb(a.j,b,"");d.textAlign=a.H===eh?"left":a.H===fh?"right":vb;if(c=wg(d,"svc"+c,a.i,a.j,b))a.j=b;return c}var eh=0,fh=1,Zg=2;function gh(){this.i=[];this.h=null;this.g=0}function hh(a,b){3===b.type?(a.g=2*(b.value&63)-1,a.h=[]):a.h&&(0<a.g&&(a.h.push(b),a.g--),0===a.g&&(a.i.push(new ih(a.h)),a.h=null,a.g=0))}function ih(a){this.g=0;this.h=a}ih.prototype.na=function(){return this.g<this.h.length};ih.prototype.Z=function(){return this.g};function jh(a){if(!a.na())throw new O(2,2,3E3);return a.h[a.g++]}ih.prototype.skip=function(a){if(this.g+a>this.h.length)throw new O(2,2,3E3);this.g+=a};function kh(a){this.i=a;this.h=[null,null,null,null,null,null,null,null];this.g=null}
function lh(a,b,c,d){if(128<=c&&135>=c)d=c&7,a.h[d]&&(a.g=a.h[d]);else{if(136===c){c=jh(b).value;b=null;c=t(mh(a,c));for(var e=c.next();!e.done;e=c.next())e=a.h[e.value],e.isVisible()&&(b=dh(e,d,a.i)),$g(e);return b}if(137===c)for(b=jh(b).value,b=t(mh(a,b)),c=b.next();!c.done;c=b.next())c=a.h[c.value],c.isVisible()||(c.j=d),c.l=!0;else{if(138===c){c=jh(b).value;b=null;c=t(mh(a,c));for(e=c.next();!e.done;e=c.next())e=a.h[e.value],e.isVisible()&&(b=dh(e,d,a.i)),e.l=!1;return b}if(139===c){c=jh(b).value;
b=null;c=t(mh(a,c));for(e=c.next();!e.done;e=c.next())e=a.h[e.value],e.isVisible()?b=dh(e,d,a.i):e.j=d,e.l=!e.l;return b}if(140===c)return b=jh(b).value,nh(a,b,d);if(143===c)return d=nh(a,255,d),oh(a),d;if(144===c)b.skip(1),d=jh(b).value,a.g&&(a.g.s=0<(d&128),a.g.D=0<(d&64));else if(145===c)d=jh(b).value,c=jh(b).value,b.skip(1),a.g&&(b=ph((c&48)>>4,(c&12)>>2,c&3),a.g.u=ph((d&48)>>4,(d&12)>>2,d&3),a.g.m=b);else if(146===c)d=jh(b).value,b=jh(b).value,a.g&&(a=a.g,a.h=d&15,a.g=b&63);else if(151===c)b.skip(1),
b.skip(1),d=jh(b).value,b.skip(1),a.g&&(a.g.H=d&3);else if(152<=c&&159>=c){c=(c&15)-8;e=null!==a.h[c];if(!e){var f=new Yg;f.j=d;a.h[c]=f}d=jh(b).value;jh(b);jh(b);f=jh(b).value;var g=jh(b).value;b=jh(b).value;e&&0===(b&7)||(b=a.h[c],b.h=0,b.g=0,b.D=!1,b.s=!1,b.u="white",b.m="black");b=a.h[c];b.l=0<(d&32);b.J=(f&15)+1;b.F=(g&63)+1;a.g=a.h[c]}}}return null}
var mh=function qh(a,b){var d,e;return Fa(qh,function(f){1==f.g&&(d=0);if(5!=f.g)return 8>d?(e=1===(b&1))&&a.h[d]?v(f,d,5):f.v(5):f.v(0);b>>=1;d++;return f.v(2)})};function nh(a,b,c){var d=null;b=t(mh(a,b));for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=a.h[e];f.isVisible()&&(d=dh(f,c,a.i));a.h[e]=null}return d}function oh(a){a.g=null;a.h=[null,null,null,null,null,null,null,null]}function ph(a,b,c){var d={0:0,1:0,2:1,3:1};a=d[a];b=d[b];c=d[c];return rh[a<<2|b<<1|c]}
var sh=new Map([[32," "],[33,"\u00a0"],[37,"\u2026"],[42,"\u0160"],[44,"\u0152"],[48,"\u2588"],[49,"\u2018"],[50,"\u2019"],[51,"\u201c"],[52,"\u201d"],[53,"\u2022"],[57,"\u2122"],[58,"\u0161"],[60,"\u0153"],[61,"\u2120"],[63,"\u0178"],[118,"\u215b"],[119,"\u215c"],[120,"\u215d"],[121,"\u215e"],[122,"\u2502"],[123,"\u2510"],[124,"\u2514"],[125,"\u2500"],[126,"\u2518"],[127,"\u250c"]]),rh="black blue green cyan red magenta yellow white".split(" ");function th(){this.h=[];this.g=[];this.i=new gh;this.l=0;this.u=new Map([["CC1",new Og(0,0)],["CC2",new Og(0,1)],["CC3",new Og(1,0)],["CC4",new Og(1,1)]]);this.s=this.m=0;this.j=new Map;uh(this)}function uh(a){a.m=0;a.s=0;a=t(a.u.values());for(var b=a.next();!b.done;b=a.next())b=b.value,b.h=2,b.g=b.i,b.m=null,Bg(b.i),Bg(b.l),Bg(b.s)}
function vh(a){function b(f,g){return f.pts-g.pts||f.order-g.order}var c=[];a.h.sort(b);a.g.sort(b);for(var d=t(a.h),e=d.next();!e.done;e=d.next())(e=wh(a,e.value))&&c.push(e);d=t(a.g);for(e=d.next();!e.done;e=d.next())hh(a.i,e.value);d=t(a.i.i);for(e=d.next();!e.done;e=d.next())e=xh(a,e.value),c.push.apply(c,ja(e));a.i.i=[];a.h=[];a.g=[];return c}
function wh(a,b){var c=b.type;if(16===(b.Aa&112)){var d=b.Aa>>3&1;0===c?a.m=d:a.s=d}c=a.u.get("CC"+(c<<1|(c?a.s:a.m)+1));if(255===b.Aa&&255===b.Pa||!b.Aa&&!b.Pa||!yh(b.Aa)||!yh(b.Pa))return 45<=++a.l&&uh(a),null;a.l=0;b.Aa&=127;b.Pa&=127;if(!b.Aa&&!b.Pa)return null;d=null;if(16===(b.Aa&112))a:{var e=b.Aa;d=b.Pa;if(c.m===(e<<8|d))c.m=null;else if(c.m=e<<8|d,16===(e&240)&&64===(d&192)){e=[11,11,1,2,3,4,12,13,14,15,5,6,7,8,9,10][(e&7)<<1|d>>5&1];var f=(d&30)>>1,g="white",h=!1;7>f?g=Xg[f]:7===f&&(h=!0);
d=1===(d&1);if(c.h!==Sg){f=c.g;if(c.h===Rg&&e!==f.g){var k=1+e-f.h;Ng(f,k,1+f.g-f.h,f.h);Dg(f,0,k-1);Dg(f,e+1,15-e)}f.g=e;c.g.m=d;c.g.j=h;c.g.l=g;c.g.s="black"}}else if(17===(e&247)&&32===(d&240))c.g.m=!1,c.g.j=!1,c.g.l="white",Eg(c.g,Fg,32),g=!1,e=Xg[(d&14)>>1],"white_italics"===e&&(e="white",g=!0),c.g.m=1===(d&1),c.g.j=g,c.g.l=e;else if(16===(e&247)&&32===(d&240)||23===(e&247)&&45===(d&255))g="black",0===(e&7)&&(g=Wg[(d&14)>>1]),c.g.s=g;else if(17===(e&247)&&48===(d&240))Eg(c.g,Hg,d);else if(18===
(e&246)&&32===(d&224))Eg(c.g,e&1?Lg:Jg,d);else if(20===(e&246)&&32===(d&240)){d=b.pts;e=null;switch(b.Pa){case 32:Tg(c);break;case 33:c=c.g;c.i[c.g].pop();break;case 37:e=Qg(c,2,d);break;case 38:e=Qg(c,3,d);break;case 39:e=Qg(c,4,d);break;case 40:Eg(c.g,Fg,32);break;case 41:c.h=2;c.g=c.i;c.g.h=0;c.j=d;break;case 42:Bg(c.s);Vg(c);break;case 43:Vg(c);break;case 44:e=c.i;g=null;c.h!==Sg&&(g=Cg(e,c.j,d));Dg(e,0,15);e=g;break;case 45:e=c.g;c.h!==Rg?e=null:(g=Cg(e,c.j,d),h=e.g-e.h+1,Ng(e,h-1,h,e.h),Dg(e,
0,h-1),Dg(e,e.g,15-e.g),c.j=d,e=g);break;case 46:Dg(c.l,0,15);break;case 47:e=null,c.h!==Sg&&(e=Cg(c.i,c.j,d)),g=c.l,c.l=c.i,c.i=g,Tg(c),c.j=d}d=e;break a}d=null}else e=b.Pa,Eg(c.g,Fg,b.Aa),Eg(c.g,Fg,e);return d}
function xh(a,b){var c=[];try{for(;b.na();){var d=jh(b).value,e=(d&224)>>5,f=d&31;7===e&&0!=f&&(e=jh(b).value&63);if(0!=e){a.j.has(e)||a.j.set(e,new kh(e));for(var g=a.j.get(e),h=b.Z();b.Z()-h<f;){e=b;var k=jh(e),l=k.value,m=k.pts;if(16===l){var n=jh(e);l=l<<16|n.value}if(0<=l&&31>=l){var p=m;if(g.g){var r=g.g;e=null;switch(l){case 8:!ch(r)||0>=r.g&&0>=r.h||(0>=r.g?(r.g=r.F-1,r.h--):r.g--,r.i[r.h][r.g]=null);break;case 13:r.isVisible()&&(e=dh(r,p,g.i));if(r.h+1>=r.J){p=r;for(var u=0,w=1;15>w;w++,
u++)p.i[u]=p.i[w];for(w=0;1>w;w++,u++)p.i[u]=ah()}else r.h++;r.g=0;break;case 14:r.isVisible()&&(e=dh(r,p,g.i));r.i[r.h]=ah();r.g=0;break;case 12:r.isVisible()&&(e=dh(r,p,g.i)),$g(r),p=r,p.h=0,p.g=0}var y=e}else y=null}else if(128<=l&&159>=l)y=lh(g,e,l,m);else{if(4096<=l&&4127>=l)p=l&255,8<=p&&15>=p?e.skip(1):16<=p&&23>=p?e.skip(2):24<=p&&31>=p&&e.skip(3);else if(4224<=l&&4255>=l)p=l&255,128<=p&&135>=p?e.skip(4):136<=p&&143>=p&&e.skip(5);else if(32<=l&&127>=l)e=l,g.g&&(127===e?bh(g.g,"\u266a"):bh(g.g,
String.fromCharCode(e)));else if(160<=l&&255>=l)g.g&&bh(g.g,String.fromCharCode(l));else if(4128<=l&&4223>=l){if(e=l&255,g.g)if(sh.has(e)){var x=sh.get(e);bh(g.g,x)}else bh(g.g,"_")}else 4256<=l&&4351>=l&&g.g&&(160!=(l&255)?bh(g.g,"_"):bh(g.g,"[CC]"));y=null}(e=y)&&c.push(e)}}}}catch(C){if(C instanceof O&&3E3===C.code)Wa("CEA708_INVALID_DATA","Buffer read out of bounds / invalid CEA-708 Data.");else throw C;}return c}function yh(a){for(var b=0;a;)b^=a&1,a>>=1;return 1===b};function zh(){}var Bh=function Ah(a,b){var d,e,f,g;return Fa(Ah,function(h){if(1==h.g){for(var k=b,l=0,m=0;m<k.length;)2==l&&3==k[m]?(l=0,k=[].concat(ja(k)),k.splice(m,1),k=new Uint8Array(k)):0==k[m]?l++:l=0,m++;d=k;e=0}if(4!=h.g){if(!(e<d.length))return h.v(0);for(f=0;255==d[e];)f+=255,e++;f+=d[e++];for(g=0;255==d[e];)g+=255,e++;g+=d[e++];return 4!=f?h.v(4):v(h,d.subarray(e,e+g),4)}e+=g;return h.v(2)})};function Ch(a,b){var c=null,d=null,e=a.M();b&1&&a.skip(8);b&2&&a.skip(4);b&8&&(c=a.M());b&16&&(d=a.M());return{trackId:e,Yd:c,Oe:d}}function Dh(a,b){return{hd:1==b?a.Fb():a.M()}}function Eh(a,b){1==b?(a.skip(8),a.skip(8)):(a.skip(4),a.skip(4));return{timescale:a.M()}}
function Fh(a,b,c){var d=a.M(),e=[];c&1&&a.skip(4);c&4&&a.skip(4);for(var f=t(ib(d)),g=f.next();!g.done;g=f.next())g={Id:null,sampleSize:null,Kc:null},c&256&&(g.Id=a.M()),c&512&&(g.sampleSize=a.M()),c&1024&&a.skip(4),c&2048&&(g.Kc=0==b?a.M():a.me()),e.push(g);return{Eg:d,pe:e}};function Gh(){this.j=new zh;this.i=new Map;this.h=this.g=0}
Gh.prototype.init=function(a){var b=this,c=[],d=[];(new jg).box("moov",ng).box("mvex",ng).T("trex",function(e){var f=e.reader;f.skip(4);f.skip(4);e=f.M();f=f.M();b.g=e;b.h=f}).box("trak",ng).T("tkhd",function(e){var f=e.reader;1==e.version?(f.skip(8),f.skip(8)):(f.skip(4),f.skip(4));e=f.M();c.push(e)}).box("mdia",ng).T("mdhd",function(e){e=Eh(e.reader,e.version);d.push(e.timescale)}).parse(a,!0);if(!c.length||!d.length||c.length!=d.length)throw new O(2,2,2010);c.forEach(function(e,f){b.i.set(e,d[f])})};
Gh.prototype.parse=function(a){var b=this,c=[],d=this.g,e=this.h,f=[],g=null,h=9E4;(new jg).box("moof",ng).box("traf",ng).T("trun",function(k){f=Fh(k.reader,k.version,k.flags).pe}).T("tfhd",function(k){k=Ch(k.reader,k.flags);d=k.Yd||b.g;e=k.Oe||b.h;k=k.trackId;b.i.has(k)&&(h=b.i.get(k))}).T("tfdt",function(k){g=Dh(k.reader,k.version).hd}).box("mdat",function(k){if(null===g)throw new O(2,2,2010);k=k.reader;var l=g,m=h,n=d,p=e,r=f,u=0,w=p;for(r.length&&(w=r[0].sampleSize||p);k.na();){var y=k.M();if(6==
(k.$()&31)){var x=0;r.length>u&&(x=r[u].Kc||0);x=(l+x)/m;for(var C=t(Bh(b.j,k.$a(y-1))),D=C.next();!D.done;D=C.next())c.push({Cf:D.value,pts:x})}else k.skip(y-1);w-=y+4;0==w&&(l=r.length>u?l+(r[u].Id||n):l+n,u++,w=r.length>u?r[u].sampleSize||p:p)}}).parse(a,!1);return c};function Hh(){this.h=new Gh;this.g=new th}Hh.prototype.init=function(a){this.h.init(a)};
function Ih(a,b){var c=a.h.parse(b);c=t(c);for(var d=c.next();!d.done;d=c.next()){var e=d.value,f=Ob(e.Cf);if(0<f.length&&(d=a.g,e=e.pts,f=new gg(f,0),181===f.$()&&49===f.Eb()&&1195456820===f.M()&&3===f.$())){var g=f.$();if(0!==(g&64)){g&=31;f.skip(1);for(var h=0;h<g;h++){var k=f.$(),l=(k&4)>>2,m=f.$(),n=f.$();l&&(k&=3,0===k||1===k?d.h.push({pts:e,type:k,Aa:m,Pa:n,order:d.h.length}):(d.g.push({pts:e,type:k,value:m,order:d.g.length}),d.g.push({pts:e,type:2,value:n,order:d.g.length})))}}}}return vh(a.g)}
;function Jh(a){return!a||1==a.length&&1E-6>a.end(0)-a.start(0)?null:a.length?a.end(a.length-1):null}function Kh(a,b,c){c=void 0===c?0:c;return!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0)||b>a.end(a.length-1)?!1:b+c>=a.start(0)}function Mh(a,b){if(!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0))return 0;for(var c=0,d=t(Nh(a)),e=d.next();!e.done;e=d.next()){var f=e.value;e=f.start;f=f.end;f>b&&(c+=f-Math.max(e,b))}return c}
function Oh(a,b,c){if(!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0))return null;a=Nh(a).findIndex(function(d,e,f){return d.start>b&&(0==e||f[e-1].end-b<=c)});return 0<=a?a:null}function Nh(a){if(!a)return[];for(var b=[],c=t(ib(a.length)),d=c.next();!d.done;d=c.next())d=d.value,b.push({start:a.start(d),end:a.end(d)});return b};function Ph(a,b,c,d){var e=this;this.g=a;this.m=c;this.j={};this.J={};this.i=null;this.L=d||function(){};this.l={};this.h=new cf;this.u={};this.D=b;this.F=new Ac;this.s=Qh(this,this.F);this.I=new af(function(){return Rh(e)});this.H=""}function Qh(a,b){var c=new MediaSource;a.h.wa(c,"sourceopen",function(){URL.revokeObjectURL(a.H);b.resolve()});a.H=Sh(c);a.g.src=a.H;return c}q=Ph.prototype;q.destroy=function(){return this.I.destroy()};
function Rh(a){var b,c,d,e,f,g,h,k;return I(function(l){if(1==l.g){b=[];for(c in a.l)for(d=a.l[c],e=d[0],a.l[c]=d.slice(0,1),e&&b.push(e.p["catch"](Zb)),f=t(d.slice(1)),g=f.next();!g.done;g=f.next())h=g.value,h.p.reject(new O(2,7,7003,void 0));a.i&&b.push(a.i.destroy());a.m&&b.push(a.m.destroy());for(k in a.u)b.push(a.u[k].destroy());return v(l,Promise.all(b),2)}a.h&&(a.h.release(),a.h=null);a.g&&(a.g.removeAttribute("src"),a.g.load(),a.g=null);a.s=null;a.i=null;a.m=null;a.j={};a.u={};a.D=null;a.l=
{};z(l)})}
q.init=function(a,b){var c=this,d,e,f,g,h,k,l;return I(function(m){if(1==m.g)return d=zc,v(m,c.F,2);e={};f=t(a.keys());for(g=f.next();!g.done;e={sa:e.sa},g=f.next())e.sa=g.value,h=a.get(e.sa),k=Vc(h.mimeType,h.codecs),e.sa==d.aa?Th(c,k):(!b&&MediaSource.isTypeSupported(k)||!Rc(k,e.sa)||(c.u[e.sa]=new Qc,k=Tc(e.sa,k)),l=c.s.addSourceBuffer(k),c.h.A(l,"error",function(n){return function(){c.l[n.sa][0].p.reject(new O(2,3,3014,c.g.error?c.g.error.code:0))}}(e)),c.h.A(l,"updateend",function(n){return function(){return Uh(c,n.sa)}}(e)),
c.j[e.sa]=l,c.J[e.sa]=k,c.l[e.sa]=[]);z(m)})};function Th(a,b){a.i||(a.i=new Zc(a.m));"application/cea-608"!=b&&"application/cea-708"!=b&&(a.i.s=ac(ad[b]))}function Vh(a){return a.s?"ended"==a.s.readyState:!0}function Wh(a,b){if(b==yc)var c=a.i.g;else c=Xh(a,b),c=!c||1==c.length&&1E-6>c.end(0)-c.start(0)?null:1==c.length&&0>c.start(0)?0:c.length?c.start(0):null;return c}function Yh(a,b){return b==yc?a.i.h:Jh(Xh(a,b))}
function Zh(a,b,c){if(b==yc)return a=a.i,null==a.h||a.h<c?0:a.h-Math.max(c,a.g);a=Xh(a,b);return Mh(a,c)}q.xc=function(){var a={total:Nh(this.g.buffered),audio:Nh(Xh(this,"audio")),video:Nh(Xh(this,"video")),text:[]};if(this.i){var b=this.i.g,c=this.i.h;null!=b&&null!=c&&a.text.push({start:b,end:c})}return a};function Xh(a,b){try{return a.j[b].buffered}catch(c){return null}}
function $h(a,b,c,d,e,f){var g,h,k,l,m,n,p,r;return I(function(u){if(1==u.g){g=zc;if(b==g.aa)return v(u,bd(a.i,c,d,e),0);if(a.u[b])return v(u,Uc(a.u[b],c),10);if(f)return a.i||Th(a,"text/vtt"),null==d&&null==e?a.D.init(c):(h=Ih(a.D,c),h.length&&(k=a.j[g.Na].timestampOffset,fd(a.i,h,d,e,k))),c=ai(a,c,d,b),v(u,bi(a,b,function(){a.j[b].appendBuffer(c)}),0);c=ai(a,c,d,b);return v(u,bi(a,b,function(){a.j[b].appendBuffer(c)}),0)}l=u.h;a.i||Th(a,"text/vtt");l.metadata&&(m=a.j[b].timestampOffset,a.L(l.metadata,
m,e));l.captions&&l.captions.length&&(n=a.j[g.Na].timestampOffset,p=ed(l.captions),fd(a.i,p,d,e,n));r=l.data;r=ai(a,r,d,b);return v(u,bi(a,b,function(){a.j[b].appendBuffer(r)}),0)})}function ci(a,b){var c=Yh(a,"video")||0;dd(a.i,b,c)}function di(a){a.i&&dd(a.i,"",0)}q.remove=function(a,b,c){var d=this,e;return I(function(f){e=zc;return a==e.aa?v(f,d.i.remove(b,c),0):v(f,bi(d,a,function(){c<=b?Uh(d,a):d.j[a].remove(b,c)}),0)})};
function ei(a,b){var c;return I(function(d){c=zc;return b==c.aa?a.i?v(d,a.i.remove(0,Infinity),0):d["return"]():v(d,bi(a,b,function(){var e=a.s.duration;0>=e?Uh(a,b):a.j[b].remove(0,e)}),0)})}q.flush=function(a){var b=this,c;return I(function(d){c=zc;return a==c.aa?d["return"]():v(d,bi(b,a,function(){b.g.currentTime-=.001;Uh(b,a)}),0)})};
function fi(a,b,c,d,e){var f;return I(function(g){f=zc;return b==f.aa?(a.i.D=c,cd(a.i,d,e),g["return"]()):v(g,Promise.all([bi(a,b,function(){var h=a.j[b].appendWindowStart,k=a.j[b].appendWindowEnd;a.j[b].abort();a.j[b].appendWindowStart=h;a.j[b].appendWindowEnd=k;Uh(a,b)}),bi(a,b,function(){var h=c;0>h&&(h+=.001);a.j[b].timestampOffset=h;Uh(a,b)}),bi(a,b,function(){a.j[b].appendWindowStart=0;a.j[b].appendWindowEnd=e;a.j[b].appendWindowStart=d;Uh(a,b)})]),0)})}
q.endOfStream=function(a){var b=this;return I(function(c){return v(c,gi(b,function(){Vh(b)||(a?b.s.endOfStream(a):b.s.endOfStream())}),0)})};q.Ja=function(a){var b=this;return I(function(c){return v(c,gi(b,function(){b.s.duration=a}),0)})};q.getDuration=function(){return this.s.duration};function Uh(a,b){var c=a.l[b][0];c&&(c.p.resolve(),hi(a,b))}function bi(a,b,c){bf(a.I);c={start:c,p:new Ac};a.l[b].push(c);1==a.l[b].length&&ii(a,b);return c.p}
function gi(a,b){var c,d,e,f,g,h;return I(function(k){switch(k.g){case 1:bf(a.I);c=[];d={};for(e in a.j)d.Kb=new Ac,f={start:function(l){return function(){return l.Kb.resolve()}}(d),p:d.Kb},a.l[e].push(f),c.push(d.Kb),1==a.l[e].length&&f.start(),d={Kb:d.Kb};A(k,2);return v(k,Promise.all(c),4);case 4:va(k,3);break;case 2:throw g=E(k),g;case 3:try{b()}catch(l){throw new O(2,3,3015,l);}finally{for(h in a.j)hi(a,h)}z(k)}})}function hi(a,b){a.l[b].shift();ii(a,b)}
function ii(a,b){var c=a.l[b][0];if(c)try{c.start()}catch(d){"QuotaExceededError"==d.name?c.p.reject(new O(2,3,3017,b)):c.p.reject(new O(2,3,3015,d)),hi(a,b)}}function ai(a,b,c,d){var e=a.g.mediaKeys;null==c&&e&&(vd()||wd("Xbox One"))&&"mp4"==a.J[d].split(";")[0].split("/")[1]&&(b=sg(b));return b}var Sh=window.URL.createObjectURL;function ji(a,b,c){this.ma=a;this.ja=b;this.ea=c}ji.prototype.Wb=function(){return this.ja};ji.prototype.Sb=function(){return this.ea};function ki(a,b){return a&&b?a.Wb()==b.Wb()&&a.Sb()==b.Sb()&&pb(a.ma(),b.ma()):a==b}L("shaka.media.InitSegmentReference",ji);ji.prototype.getEndByte=ji.prototype.Sb;ji.prototype.getStartByte=ji.prototype.Wb;
function li(a,b,c,d,e,f,g,h,k,l,m){l=void 0===l?[]:l;this.startTime=a;this.j=this.endTime=b;this.i=c;this.ja=d;this.ea=e;this.h=f;this.timestampOffset=g;this.appendWindowStart=h;this.appendWindowEnd=k;this.g=l;this.tilesLayout=void 0===m?"":m}q=li.prototype;q.ma=function(){return this.i()};q.jf=function(){return this.startTime};q.We=function(){return this.endTime};q.Wb=function(){return this.ja};q.Sb=function(){return this.ea};q.pf=function(){return this.tilesLayout};
L("shaka.media.SegmentReference",li);li.prototype.getTilesLayout=li.prototype.pf;li.prototype.getEndByte=li.prototype.Sb;li.prototype.getStartByte=li.prototype.Wb;li.prototype.getEndTime=li.prototype.We;li.prototype.getStartTime=li.prototype.jf;li.prototype.getUris=li.prototype.ma;function U(a,b,c){this.j=a;this.Jc=b;this.m=this.l=Infinity;this.g=1;this.h=this.i=null;this.s=0;this.u=!0;this.D=0;this.F=void 0===c?!0:c;this.H=0}q=U.prototype;q.getDuration=function(){return this.l};q.bf=function(){return this.g};q.Ja=function(a){this.l=a};q.hf=function(){return this.j};q.ue=function(a){this.s=a};q.fc=function(a){this.u=a};q.Pd=function(a){this.m=a};q.Sf=function(a){this.Jc=a};q.Ve=function(){return this.Jc};
q.Bb=function(a){if(0!=a.length){var b=a[a.length-1].endTime;this.zd(a[0].startTime);this.g=a.reduce(function(c,d){return Math.max(c,d.endTime-d.startTime)},this.g);this.h=Math.max(this.h,b);null!=this.j&&this.F&&(this.j=(Date.now()+this.s)/1E3-this.h-this.g)}};q.zd=function(a){this.i=null==this.i?a:Math.min(this.i,a)};q.yd=function(a){this.g=Math.max(this.g,a)};q.offset=function(a){null!=this.i&&(this.i+=a);null!=this.h&&(this.h+=a)};q.X=function(){return Infinity==this.l&&!this.u};
q.kb=function(){return Infinity!=this.l&&!this.u};q.Za=function(){return Math.max(this.D,this.gb()-this.m)};q.ve=function(a){this.D=a};q.gb=function(){return this.X()||this.kb()?Math.min(Math.max(0,(Date.now()+this.s)/1E3-this.g-this.j)+this.H,this.l):this.h||this.l};q.Vb=function(a){var b=Math.max(this.i,this.D);return Infinity==this.m?Math.ceil(1E3*b)/1E3:Math.max(b,Math.min(this.gb()-this.m+a,this.Qa()))};q.yb=function(){return this.Vb(0)};
q.Qa=function(){return Math.max(0,this.gb()-(this.X()||this.kb()?this.Jc:0))};q.ye=function(){return null==this.j||null!=this.h&&this.F?!1:!0};q.te=function(a){this.H=a};L("shaka.media.PresentationTimeline",U);U.prototype.setAvailabilityTimeOffset=U.prototype.te;U.prototype.usingPresentationStartTime=U.prototype.ye;U.prototype.getSeekRangeEnd=U.prototype.Qa;U.prototype.getSeekRangeStart=U.prototype.yb;U.prototype.getSafeSeekRangeStart=U.prototype.Vb;U.prototype.getSegmentAvailabilityEnd=U.prototype.gb;
U.prototype.setUserSeekStart=U.prototype.ve;U.prototype.getSegmentAvailabilityStart=U.prototype.Za;U.prototype.isInProgress=U.prototype.kb;U.prototype.isLive=U.prototype.X;U.prototype.offset=U.prototype.offset;U.prototype.notifyMaxSegmentDuration=U.prototype.yd;U.prototype.notifyMinSegmentStartTime=U.prototype.zd;U.prototype.notifySegments=U.prototype.Bb;U.prototype.getDelay=U.prototype.Ve;U.prototype.setDelay=U.prototype.Sf;U.prototype.setSegmentAvailabilityDuration=U.prototype.Pd;
U.prototype.setStatic=U.prototype.fc;U.prototype.setClockOffset=U.prototype.ue;U.prototype.getPresentationStartTime=U.prototype.hf;U.prototype.setDuration=U.prototype.Ja;U.prototype.getMaxSegmentDuration=U.prototype.bf;U.prototype.getDuration=U.prototype.getDuration;function mi(a,b){this.j=a;this.m=ni(a);this.g=a.g.currentTime;this.l=Date.now()/1E3;this.h=!1;this.s=b;this.i=function(){}}mi.prototype.release=function(){this.j=null;this.i=function(){}};function oi(a,b){a.i=b}function pi(a){this.g=a}function ni(a){if(a.g.paused||0==a.g.playbackRate||0==a.g.buffered.length)var b=!1;else a:{b=a.g.currentTime;a=t(Nh(a.g.buffered));for(var c=a.next();!c.done;c=a.next())if(c=c.value,!(b<c.start-.1||b>c.end-.5)){b=!0;break a}b=!1}return b};function qi(a,b,c,d,e){var f=this;this.g=a;this.D=b;this.o=c;this.u=e;this.h=new cf;this.s=!1;this.F=a.readyState;this.j=!1;this.i=d;this.m=!1;this.h.A(a,"waiting",function(){return ri(f)});this.l=(new P(function(){ri(f)})).Ca(.25)}qi.prototype.release=function(){this.h&&(this.h.release(),this.h=null);null!=this.l&&(this.l.stop(),this.l=null);this.i&&(this.i.release(),this.i=null);this.g=this.D=this.u=null};qi.prototype.Dd=function(){this.m=!0;ri(this)};
function ri(a){if(0!=a.g.readyState){if(a.g.seeking){if(!a.s)return}else a.s=!1;if(!a.g.paused||0==a.g.currentTime&&(a.g.autoplay||0!=a.g.currentTime)){a.g.readyState!=a.F&&(a.j=!1,a.F=a.g.readyState);var b;if(!(b=!a.i)){b=a.i;var c=b.j,d=ni(c),e=c.g.currentTime,f=Date.now()/1E3;if(b.g!=e||b.m!=d)b.l=f,b.g=e,b.m=d,b.h=!1;e=f-b.l;if(d=e>=b.s&&d&&!b.h)b.i(b.g,e),b.h=!0,b.g=c.g.currentTime;b=!d}if(b){var g=a.o.smallGapLimit;e=a.g.currentTime;b=a.g.buffered;c=Oh(b,e,a.o.gapDetectionThreshold);if(!(null==
c||0==c&&!a.m||(d=b.start(c),d>=a.D.Qa()))){f=d-e;g=f<=g;var h=!1;.001>f||(g||a.j||(a.j=!0,e=new Q("largegap",{currentTime:e,gapSize:f}),e.cancelable=!0,a.u(e),a.o.jumpLargeGaps&&!e.defaultPrevented&&(h=!0)),!g&&!h)||(0!=c&&b.end(c-1),a.g.currentTime=d)}}}}};function si(a,b,c,d){b==HTMLMediaElement.HAVE_NOTHING||a.readyState>=b?d():(b=ti.value().get(b),c.wa(a,b,d))}var ti=new Bc(function(){return new Map([[HTMLMediaElement.HAVE_METADATA,"loadedmetadata"],[HTMLMediaElement.HAVE_CURRENT_DATA,"loadeddata"],[HTMLMediaElement.HAVE_FUTURE_DATA,"canplay"],[HTMLMediaElement.HAVE_ENOUGH_DATA,"canplaythrough"]])});function ui(a,b,c){var d=this;this.g=a;this.l=b;this.j=c;this.m=!1;this.h=new cf;this.i=new vi(a);si(this.g,HTMLMediaElement.HAVE_METADATA,this.h,function(){wi(d,d.j)})}ui.prototype.release=function(){this.h&&(this.h.release(),this.h=null);null!=this.i&&(this.i.release(),this.i=null);this.l=function(){};this.g=null};function xi(a){return a.m?a.g.currentTime:a.j}function yi(a,b){0<a.g.readyState?zi(a.i,b):si(a.g,HTMLMediaElement.HAVE_METADATA,a.h,function(){wi(a,a.j)})}
function wi(a,b){.001>Math.abs(a.g.currentTime-b)?Ai(a):(a.h.wa(a.g,"seeking",function(){Ai(a)}),zi(a.i,0==a.g.currentTime?b:a.g.currentTime))}function Ai(a){a.m=!0;a.h.A(a.g,"seeking",function(){return a.l()})}function vi(a){var b=this;this.h=a;this.m=10;this.l=this.j=this.i=0;this.g=new P(function(){0>=b.i?b.g.stop():b.h.currentTime!=b.j?b.g.stop():(b.h.currentTime=b.l,b.i--)})}vi.prototype.release=function(){this.g&&(this.g.stop(),this.g=null);this.h=null};
function zi(a,b){a.j=a.h.currentTime;a.l=b;a.i=a.m;a.h.currentTime=b;a.g.Ca(.1)};function Bi(a){function b(){null==c.i||0==c.i?c.j=!0:(c.h.wa(c.g,"seeking",function(){c.j=!0}),c.g.currentTime=Math.max(0,c.g.currentTime+c.i))}var c=this;this.g=a;this.j=!1;this.i=null;this.h=new cf;si(this.g,HTMLMediaElement.HAVE_CURRENT_DATA,this.h,function(){b()})}Bi.prototype.release=function(){this.h&&(this.h.release(),this.h=null);this.g=null};Bi.prototype.m=function(a){this.i=this.j?this.i:a};Bi.prototype.l=function(){return(this.j?this.g.currentTime:this.i)||0};Bi.prototype.F=function(){};
function Ci(a,b,c,d,e,f){var g=this;this.i=a;this.g=b.presentationTimeline;this.H=b.minBufferTime||0;this.o=c;this.D=e;this.u=null;this.j=new qi(a,b.presentationTimeline,c,Di(a,c),f);this.h=new ui(a,function(){a:{var h=g.j;h.s=!0;h.m=!1;h.j=!1;var k=xi(g.h);h=Ei(g,k);if(.001<Math.abs(h-k)&&(k=Date.now()/1E3,!g.u||g.u<k-1)){g.u=k;yi(g.h,h);h=void 0;break a}g.D();h=void 0}return h},Fi(this,d));this.s=(new P(function(){if(0!=g.i.readyState&&!g.i.paused){var h=xi(g.h),k=g.g.yb(),l=g.g.Qa();3>l-k&&(k=
l-3);h<k&&(h=Ei(g,h),g.i.currentTime=h)}})).Ca(.25)}Ci.prototype.release=function(){this.h&&(this.h.release(),this.h=null);this.j&&(this.j.release(),this.j=null);this.s&&(this.s.stop(),this.s=null);this.i=this.h=this.g=this.o=null;this.D=function(){}};Ci.prototype.m=function(a){yi(this.h,a)};Ci.prototype.l=function(){var a=xi(this.h);return 0<this.i.readyState&&!this.i.paused?Gi(this,a):a};
function Fi(a,b){null==b?b=Infinity>a.g.getDuration()?a.g.yb():a.g.Qa():0>b&&(b=a.g.Qa()+b);return Hi(a,Gi(a,b))}Ci.prototype.F=function(){this.j.Dd()};function Hi(a,b){var c=a.g.getDuration();return b>=c?c-a.o.durationBackoff:b}function Ei(a,b){var c=Math.max(a.H,a.o.rebufferingGoal),d=a.o.safeSeekOffset,e=a.g.yb(),f=a.g.Qa(),g=a.g.getDuration();3>f-e&&(e=f-3);var h=a.g.Vb(c),k=a.g.Vb(d);c=a.g.Vb(c+d);return b>=g?Hi(a,b):b>f?f:b<e?Kh(a.i.buffered,k)?k:c:b>=h||Kh(a.i.buffered,b)?b:c}
function Gi(a,b){var c=a.g.yb();if(b<c)return c;c=a.g.Qa();return b>c?c:b}function Di(a,b){if(!b.stallEnabled)return null;var c=b.stallSkip,d=new mi(new pi(a),b.stallThreshold);oi(d,function(){c?a.currentTime+=c:(a.pause(),a.play())});return d};function V(a){this.g=a;this.h=null;this.i=0;this.j=!1}q=V.prototype;q.destroy=function(){Ub("shaka.media.SegmentIndex","Please use release() instead of destroy().");this.release();return Promise.resolve()};q.release=function(){this.j||(this.g=[],this.h&&this.h.stop(),this.h=null)};q.vf=function(){this.j=!0};
q.find=function(a){for(var b=this.g.length-1,c=b;0<=c;--c){var d=this.g[c],e=c<b?this.g[c+1].startTime:d.endTime;if(a>=d.startTime&&a<e)return c+this.i}return this.g.length&&a<this.g[0].startTime?this.i:null};q.get=function(a){if(0==this.g.length)return null;a-=this.i;return 0>a||a>=this.g.length?null:this.g[a]};q.offset=function(a){if(!this.j)for(var b=t(this.g),c=b.next();!c.done;c=b.next())c=c.value,c.startTime+=a,c.endTime+=a,c.timestampOffset+=a};
q.Ec=function(a){!this.j&&a.length&&(this.g=this.g.filter(function(b){return b.startTime<a[0].startTime}),this.g.push.apply(this.g,ja(a)))};q.Ab=function(a,b){var c=this;a=a.filter(function(d){return d.endTime>b&&(0==c.g.length||d.endTime>c.g[0].startTime)});this.Ec(a);this.eb(b)};q.eb=function(a){if(!this.j){var b=this.g.length;this.g=this.g.filter(function(c){return c.endTime>a});this.i+=b-this.g.length}};
q.Ya=function(a,b,c){c=void 0===c?!1:c;if(!this.j){for(;this.g.length;)if(this.g[this.g.length-1].startTime>=b)this.g.pop();else break;for(;this.g.length;)if(this.g[0].endTime<=a)this.g.shift(),c||this.i++;else break;0!=this.g.length&&(a=this.g[this.g.length-1],this.g[this.g.length-1]=new li(a.startTime,b,a.i,a.ja,a.ea,a.h,a.timestampOffset,a.appendWindowStart,a.appendWindowEnd,a.g,a.tilesLayout))}};
q.Mc=function(a,b){var c=this;this.j||(this.h&&this.h.stop(),this.h=new P(function(){var d=b();d?c.g.push.apply(c.g,ja(d)):(c.h.stop(),c.h=null)}),this.h.Ca(a))};V.prototype[Symbol.iterator]=function(){return this.xb(0)};V.prototype.xb=function(a){var b=this.find(a);if(null==b)return null;b--;var c=this.get(b+1),d=-1;if(c&&0<c.g.length)for(var e=c.g.length-1;0<=e;--e){var f=c.g[e];if(a>=f.startTime&&a<f.endTime){b++;d=e-1;break}}return new Ii(this,b,d)};
function Ji(a,b,c){return new V([new li(a,a+b,function(){return c},0,null,null,a,a,a+b)])}L("shaka.media.SegmentIndex",V);V.forSingleSegment=Ji;V.prototype.getIteratorForTime=V.prototype.xb;V.prototype.updateEvery=V.prototype.Mc;V.prototype.fit=V.prototype.Ya;V.prototype.evict=V.prototype.eb;V.prototype.mergeAndEvict=V.prototype.Ab;V.prototype.merge=V.prototype.Ec;V.prototype.offset=V.prototype.offset;V.prototype.get=V.prototype.get;V.prototype.find=V.prototype.find;V.prototype.markImmutable=V.prototype.vf;
V.prototype.release=V.prototype.release;V.prototype.destroy=V.prototype.destroy;function Ii(a,b,c){this.i=a;this.h=b;this.g=c}Ii.prototype.seek=function(a){Ub("shaka.media.SegmentIterator","Please use SegmentIndex.getIteratorForTime instead of seek().");(a=this.i.xb(a))?(this.h=a.h,this.g=a.g):(this.h=Number.MAX_VALUE,this.g=0);return this.next().value};
Ii.prototype.current=function(){var a=this.i.get(this.h);a&&0<a.g.length&&a.ma().length&&this.g>=a.g.length&&(this.h++,this.g=0,a=this.i.get(this.h));return a&&0<a.g.length?a.g[this.g]:a};Ii.prototype.next=function(){var a=this.i.get(this.h);a&&0<a.g.length?(this.g++,a.ma().length&&this.g==a.g.length&&(this.h++,this.g=0)):(this.h++,this.g=0);a=this.current();return{value:a,done:!a}};L("shaka.media.SegmentIterator",Ii);Ii.prototype.next=Ii.prototype.next;Ii.prototype.current=Ii.prototype.current;
Ii.prototype.seek=Ii.prototype.seek;function Ki(){V.call(this,[]);this.l=[]}qa(Ki,V);q=Ki.prototype;q.clone=function(){var a=new Ki;a.l=this.l.slice();return a};q.release=function(){for(var a=t(this.l),b=a.next();!b.done;b=a.next())b.value.release();this.l=[]};q.find=function(a){for(var b=0,c=t(this.l),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.find(a);if(null!=e)return e+b;b+=d.i+d.g.length}return null};
q.get=function(a){for(var b=0,c=t(this.l),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.get(a-b);if(e)return e;b+=d.i+d.g.length}return null};q.offset=function(){};q.Ec=function(){};q.eb=function(){};q.Ab=function(){};q.Ya=function(){};q.Mc=function(){};L("shaka.media.MetaSegmentIndex",Ki);Ki.prototype.updateEvery=Ki.prototype.Mc;Ki.prototype.fit=Ki.prototype.Ya;Ki.prototype.mergeAndEvict=Ki.prototype.Ab;Ki.prototype.evict=Ki.prototype.eb;Ki.prototype.merge=Ki.prototype.Ec;
Ki.prototype.offset=Ki.prototype.offset;Ki.prototype.get=Ki.prototype.get;Ki.prototype.find=Ki.prototype.find;Ki.prototype.release=Ki.prototype.release;function Li(a){var b=this;this.g=a;this.j=!1;this.i=this.g.Bc();this.h=new P(function(){b.g.ke(.25*b.i)})}Li.prototype.release=function(){this.h&&(this.h.stop(),this.h=null);this.g=null};Li.prototype.set=function(a){this.i=a;Mi(this)};Li.prototype.yc=function(){return this.g.yc()};function Mi(a){a.h.stop();var b=a.j?0:a.i;if(0<=b)try{a.g.Bc()!=b&&a.g.Od(b);return}catch(c){}a.h.Ca(.25);0!=a.g.Bc()&&a.g.Od(0)};function Ni(a){var b=this;this.h=a;this.g=new Set;this.i=(new P(function(){Oi(b,!1)})).Ca(.25)}Ni.prototype.release=function(){this.i.stop();for(var a=t(this.g),b=a.next();!b.done;b=a.next())b.value.release();this.g.clear()};
function Oi(a,b){for(var c=t(a.g),d=c.next();!d.done;d=c.next()){d=d.value;for(var e=a.h.currentTime,f=b,g=t(d.l.g),h=g.next();!h.done;h=g.next()){h=h.value;var k=d.j.get(h),l=e<h.startTime?Pi:e>h.endTime?Qi:Ri;d.j.set(h,l);for(var m=t(d.m),n=m.next();!n.done;n=m.next())n=n.value,n.sb==k&&n.rb==l&&n.jb(h,f)}}};function Si(a){var b=this;this.h=function(){};this.g=new Set;this.j=a;this.i=(new P(function(){for(var c=b.j(),d=t(b.g),e=d.next();!e.done;e=d.next())e=e.value,e.endTime<c.start&&b.g["delete"](e)})).Ca(2)}Si.prototype.release=function(){this.h=function(){};this.g.clear();this.i.stop()};function Ti(a,b){a.h=b};function Ui(a){var b=this;this.l=a;this.j=new Map;this.g=function(){};this.h=function(){};this.i=function(){};this.m=[{sb:null,rb:Ri,jb:function(c,d){return b.g(c,d)}},{sb:Pi,rb:Ri,jb:function(c,d){return b.g(c,d)}},{sb:Qi,rb:Ri,jb:function(c,d){return b.g(c,d)}},{sb:Ri,rb:Pi,jb:function(c,d){return b.h(c,d)}},{sb:Ri,rb:Qi,jb:function(c,d){return b.h(c,d)}},{sb:Pi,rb:Qi,jb:function(c,d){return b.i(c,d)}},{sb:Qi,rb:Pi,jb:function(c,d){return b.i(c,d)}}]}
Ui.prototype.release=function(){this.l=null;this.j.clear();this.g=function(){};this.h=function(){};this.i=function(){}};function Vi(a,b,c,d){a.g=b;a.h=c;a.i=d}var Pi=1,Ri=2,Qi=3;function Wi(a,b,c,d,e){a=Ue(a,d,e);if(0!=b||null!=c)a.headers.Range=c?"bytes="+b+"-"+c:"bytes="+b+"-";return a};function Xi(a,b){var c=this;this.C=b;this.B=a;this.o=null;this.l=1;this.i=this.h=null;this.g=new Map;this.m=!1;this.s=null;this.j=!1;this.I=new af(function(){return Yi(c)})}Xi.prototype.destroy=function(){return this.I.destroy()};function Yi(a){var b,c,d,e;return I(function(f){if(1==f.g){b=[];c=t(a.g.values());for(d=c.next();!d.done;d=c.next())e=d.value,Zi(e),b.push($i(e));return v(f,Promise.all(b),2)}a.g.clear();a.C=null;a.B=null;a.o=null;z(f)})}
Xi.prototype.configure=function(a){this.o=a;this.s=new Be({maxAttempts:Math.max(a.retryParameters.maxAttempts,2),baseDelay:a.retryParameters.baseDelay,backoffFactor:a.retryParameters.backoffFactor,fuzzFactor:a.retryParameters.fuzzFactor,timeout:0,stallTimeout:0,connectionTimeout:0},!0)};Xi.prototype.start=function(){var a=this;return I(function(b){if(1==b.g)return v(b,aj(a),2);bf(a.I);a.m=!0;z(b)})};
function bj(a,b){var c,d,e,f,g,h;I(function(k){switch(k.g){case 1:return c=zc,A(k,2),v(k,ei(a.C.R,c.aa),4);case 4:va(k,3);break;case 2:if(d=E(k),a.C)a.C.onError(d);case 3:e=Vc(b.mimeType,b.codecs);Th(a.C.R,e);f=a.C.R.m;if(g=f.isTextVisible()||a.o.alwaysStreamText)h=cj(b),a.g.set(c.aa,h),dj(a,h,0);z(k)}})}function ej(a){var b=a.g.get(yc);b&&(Zi(b),$i(b)["catch"](function(){}),a.g["delete"](yc));a.i=null}
function fj(a,b){var c=a.g.get("video");if(c){var d=c.stream;if(d)if(b){var e=d.trickModeVideo;e&&!c.ob&&(gj(a,e,!1,0,!1),c.ob=d)}else if(d=c.ob)c.ob=null,gj(a,d,!0,0,!1)}}function hj(a,b,c,d,e){c=void 0===c?!1:c;d=void 0===d?0:d;e=void 0===e?!1:e;a.h=b;a.m&&(b.video&&gj(a,b.video,c,d,e),b.audio&&gj(a,b.audio,c,d,e))}function ij(a,b){a.i=b;a.m&&gj(a,b,!0,0,!1)}
function gj(a,b,c,d,e){var f=a.g.get(b.type);f||b.type!=yc?f&&(f.ob&&(b.trickModeVideo?(f.ob=b,b=b.trickModeVideo):f.ob=null),f.stream!=b||e)&&(b.type==yc&&Th(a.C.R,Vc(b.mimeType,b.codecs)),f.stream=b,f.ca=null,c&&(f.Qb?f.Pc=!0:f.Ra?(f.qb=!0,f.vc=d,f.Pc=!0):(Zi(f),jj(a,f,!0,d)["catch"](function(g){if(a.C)a.C.onError(g)}))),kj(a,f)["catch"](function(g){if(a.C)a.C.onError(g)})):bj(a,b)}
function kj(a,b){var c,d;return I(function(e){if(1==e.g){if(!b.xa)return e["return"]();c=b.stream;d=b.xa;return c.segmentIndex?e.v(2):v(e,c.createSegmentIndex(),2)}if(b.xa!=d||b.stream!=c)return e["return"]();var f=a.C.Ac();var g=Yh(a.C.R,b.type),h=b.stream.segmentIndex.find(b.Ba?b.Ba.endTime:f),k=null==h?null:b.stream.segmentIndex.get(h);h=k?k.ea?k.ea-k.ja:null:null;k&&!h&&(h=(k.endTime-k.startTime)*(b.stream.bandwidth||0)/8);h?((k=k.h)&&(h+=(k.ea?k.ea-k.ja:null)||0),k=a.C.getBandwidthEstimate(),
f=8*h/k<(g||0)-f-Math.max(a.B.minBufferTime||0,a.o.rebufferingGoal)||b.xa.h.g>h?!0:!1):f=!1;f&&b.xa.abort();z(e)})}function lj(a,b){b.Qb||b.qb||(b.Ra?(b.qb=!0,b.vc=0):null==Wh(a.C.R,b.type)?null==b.La&&dj(a,b,0):(Zi(b),jj(a,b,!1,0)["catch"](function(c){if(a.C)a.C.onError(c)})))}
function aj(a){var b,c,d,e,f,g,h,k,l,m;return I(function(n){if(1==n.g){b=zc;if(!a.h)throw new O(2,5,5006);c=new Map;d=new Set;a.h.audio&&(c.set(b.bb,a.h.audio),d.add(a.h.audio));a.h.video&&(c.set(b.Na,a.h.video),d.add(a.h.video));a.i&&(c.set(b.aa,a.i),d.add(a.i));e=a.C.R;f=a.o.forceTransmuxTS;return v(n,e.init(c,f),2)}bf(a.I);var p=a.B.presentationTimeline.getDuration();Infinity>p?a.C.R.Ja(p):a.C.R.Ja(Math.pow(2,32));g=t(c.keys());for(h=g.next();!h.done;h=g.next())k=h.value,l=c.get(k),a.g.has(k)||
(m=cj(l),a.g.set(k,m),dj(a,m,0));z(n)})}function cj(a){return{stream:a,type:a.type,ca:null,Ba:null,Dc:null,vd:null,ud:null,td:null,ob:null,endOfStream:!1,Ra:!1,La:null,qb:!1,vc:0,Pc:!1,Qb:!1,Gd:!1,Xb:!1,xa:null}}
Xi.prototype.$b=function(a){var b=this,c,d,e,f,g;return I(function(h){switch(h.g){case 1:bf(b.I);if(a.Ra||null==a.La||a.Qb)return h["return"]();a.La=null;if(!a.qb){h.v(2);break}return v(h,jj(b,a,a.Pc,a.vc),3);case 3:return h["return"]();case 2:if(a.stream.segmentIndex){h.v(4);break}c=a.stream;return v(h,a.stream.createSegmentIndex(),5);case 5:if(c!=a.stream)return null==a.La&&dj(b,a,0),h["return"]();case 4:A(h,6);d=mj(b,a);null!=d&&(dj(b,a,d),a.Xb=!1);va(h,7);break;case 6:return e=E(h),v(h,nj(b,e),
8);case 8:return h["return"]();case 7:f=Array.from(b.g.values());if(!b.m||!f.every(function(k){return k.endOfStream})){h.v(0);break}return v(h,b.C.R.endOfStream(),10);case 10:bf(b.I),g=b.C.R.getDuration(),0!=g&&g<b.B.presentationTimeline.getDuration()&&b.B.presentationTimeline.Ja(g),z(h)}})};
function mj(a,b){if(oj(b))return ci(a.C.R,b.stream.originalId||""),null;b.type==yc&&di(a.C.R);var c=a.C.Ac(),d=b.Ba?b.Ba.endTime:c,e=Zh(a.C.R,b.type,c),f=Math.max(a.B.minBufferTime||0,a.o.rebufferingGoal,a.o.bufferingGoal)*a.l;if(d>=a.B.presentationTimeline.getDuration())return b.endOfStream=!0,"video"==b.type&&(c=a.g.get(yc))&&oj(c)&&(c.endOfStream=!0),null;b.endOfStream=!1;if(e>=f)return a.o.updateIntervalSeconds/2;e=Yh(a.C.R,b.type);e=pj(a,b,c,e);if(!e)return a.o.updateIntervalSeconds;f=Infinity;
var g=Array.from(a.g.values());g=t(g);for(var h=g.next();!h.done;h=g.next())h=h.value,oj(h)||h.ca&&!h.ca.current()||(f=Math.min(f,h.Ba?h.Ba.endTime:c));if(d>=f+a.B.presentationTimeline.g)return a.o.updateIntervalSeconds;qj(a,b,c,e)["catch"](function(){});return null}
function pj(a,b,c,d){if(b.ca)return b.ca.current();if(b.Ba||d)return b.ca=b.stream.segmentIndex.xb(b.Ba?b.Ba.endTime:d),b.ca&&b.ca.next().value;a=a.o.inaccurateManifestTolerance;d=Math.max(c-a,0);var e=null;a&&(b.ca=b.stream.segmentIndex.xb(d),e=b.ca&&b.ca.next().value);e||(b.ca=b.stream.segmentIndex.xb(c),e=b.ca&&b.ca.next().value);return e}
function qj(a,b,c,d){var e,f,g,h,k,l,m,n,p,r,u,w;return I(function(y){switch(y.g){case 1:return e=zc,f=b.stream,g=b.ca,b.Ra=!0,A(y,2),v(y,rj(a,b,d),4);case 4:bf(a.I);if(a.j)return y["return"]();h="video/mp4"==f.mimeType||"audio/mp4"==f.mimeType;k=window.ReadableStream;if(a.o.lowLatencyMode&&k&&h)return n=new Uint8Array(0),p=function(x){var C,D,B;return I(function(F){bf(a.I);if(a.j)return F["return"]();n=sj(n,x);C=!1;D=0;(new jg).box("mdat",function(G){D=G.size+G.start;C=!0}).parse(n,!1,!0);if(!C)return F.v(0);
B=n.subarray(0,D);n=n.subarray(D);return v(F,tj(a,b,c,f,d,B),0)})},v(y,uj(a,b,d,p),6);l=uj(a,b,d);return v(y,l,7);case 7:return m=y.h,bf(a.I),a.j?y["return"]():b.qb?(b.Ra=!1,dj(a,b,0),y["return"]()):v(y,tj(a,b,c,f,d,m),6);case 6:bf(a.I);if(a.j)return y["return"]();b.Ba=d;g.next();b.Ra=!1;b.Gd=!1;r=a.C.R.xc();u=r[b.type];$a(JSON.stringify(u));b.qb||a.C.Dd();dj(a,b,0);va(y,0);break;case 2:w=E(y);bf(a.I,w);if(a.j)return y["return"]();b.Ra=!1;if(7001==w.code)b.Ra=!1,b.La=null,dj(a,b,0),y.v(0);else if(b.type==
e.aa&&a.o.ignoreTextStreamFailures)a.g["delete"](e.aa),y.v(0);else if(3017==w.code)vj(a,b,w),y.v(0);else if(1001==w.code&&w.data&&404==w.data[1])b.Ra=!1,b.La=null,dj(a,b,1),y.v(0);else return b.Xb=!0,w.severity=2,v(y,nj(a,w),0)}})}function sj(a,b){var c=new Uint8Array(a.length+b.length);c.set(a);c.set(b,a.length);return c}
function vj(a,b,c){if(!Array.from(a.g.values()).some(function(e){return e!=b&&e.Gd})){var d=Math.round(100*a.l);if(20<d)a.l-=.2;else if(4<d)a.l-=.04;else{b.Xb=!0;a.j=!0;a.C.onError(c);return}b.Gd=!0}dj(a,b,4)}
function rj(a,b,c){var d,e,f,g,h,k,l;return I(function(m){d=[];e=Math.max(0,c.appendWindowStart-.1);f=c.appendWindowEnd+.01;g=c.timestampOffset;if(g!=b.vd||e!=b.ud||f!=b.td)h=function(){var n;return I(function(p){if(1==p.g)return A(p,2),b.ud=e,b.td=f,b.vd=g,v(p,fi(a.C.R,b.type,g,e,f),4);if(2!=p.g)return va(p,0);n=E(p);b.ud=null;b.td=null;b.vd=null;throw n;})},d.push(h());!ki(c.h,b.Dc)&&(b.Dc=c.h)&&(k=uj(a,b,c.h),l=function(){var n,p,r;return I(function(u){switch(u.g){case 1:return A(u,2),v(u,k,4);
case 4:return n=u.h,bf(a.I),p=b.stream.closedCaptions&&0<b.stream.closedCaptions.size,v(u,$h(a.C.R,b.type,n,null,null,p),5);case 5:va(u,0);break;case 2:throw r=E(u),b.Dc=null,r;}})},d.push(l()));return v(m,Promise.all(d),0)})}
function tj(a,b,c,d,e,f){var g;return I(function(h){if(1==h.g)return g=d.closedCaptions&&0<d.closedCaptions.size,null!=d.emsgSchemeIdUris&&0<d.emsgSchemeIdUris.length&&(new jg).T("emsg",function(k){var l=d.emsgSchemeIdUris;if(0===k.version){var m=k.reader.bc();var n=k.reader.bc();var p=k.reader.M();var r=k.reader.M();var u=k.reader.M();var w=k.reader.M();var y=e.startTime+r/p}else p=k.reader.M(),y=k.reader.Fb()/p+e.timestampOffset,r=y-e.startTime,u=k.reader.M(),w=k.reader.M(),m=k.reader.bc(),n=k.reader.bc();
k=k.reader.$a(k.reader.P.byteLength-k.reader.Z());l.includes(m)&&("urn:mpeg:dash:event:2012"==m?a.C.Bf():(l=new Q(wj,{detail:{startTime:y,endTime:y+u/p,schemeIdUri:m,value:n,timescale:p,presentationTimeDelta:r,eventDuration:u,id:w,messageData:k}}),a.C.onEvent(l)))}).parse(f),v(h,xj(a,b,c),2);if(3!=h.g)return bf(a.I),v(h,$h(a.C.R,b.type,f,e.startTime,e.endTime,g),3);bf(a.I);z(h)})}
function xj(a,b,c){var d,e,f,g;return I(function(h){if(1==h.g){d=Math.max(a.o.bufferBehind,a.B.presentationTimeline.g);e=Wh(a.C.R,b.type);if(null==e)return h["return"]();f=c-e;g=f-d;return.01>=g?h["return"]():v(h,a.C.R.remove(b.type,e,e+g),2)}bf(a.I);z(h)})}function oj(a){return a&&a.type==yc&&("application/cea-608"==a.stream.mimeType||"application/cea-708"==a.stream.mimeType)}
function uj(a,b,c,d){var e,f,g,h;return I(function(k){if(1==k.g)return e=$e,f=Wi(c.ma(),c.ja,c.ea,a.o.retryParameters,d),g=a.C.lb.request(e,f),b.xa=g,v(k,g.promise,2);h=k.h;b.xa=null;return k["return"](h.data)})}
function jj(a,b,c,d){var e,f;return I(function(g){if(1==g.g)return b.qb=!1,b.Pc=!1,b.vc=0,b.Qb=!0,b.Ba=null,b.Dc=null,b.ca=null,d?(e=a.C.Ac(),f=a.C.R.getDuration(),v(g,a.C.R.remove(b.type,e+d,f),3)):v(g,ei(a.C.R,b.type),4);if(3!=g.g)return bf(a.I),c?v(g,a.C.R.flush(b.type),3):g.v(3);bf(a.I);b.Qb=!1;b.endOfStream=!1;dj(a,b,0);z(g)})}
function dj(a,b,c){var d=b.type;if(d!=yc||a.g.has(d))b.La=(new rd(function(){var e;return I(function(f){if(1==f.g)return A(f,2),v(f,a.$b(b),4);if(2!=f.g)return va(f,0);e=E(f);if(a.C)a.C.onError(e);z(f)})})).U(c)}function Zi(a){null!=a.La&&(a.La.stop(),a.La=null)}function $i(a){return I(function(b){return a.xa?v(b,a.xa.abort(),0):b.v(0)})}function nj(a,b){return I(function(c){if(1==c.g)return v(c,De(a.s),2);bf(a.I);a.C.onError(b);b.handled||a.o.failureCallback(b);z(c)})};function yj(a,b){var c=zj(),d=this;this.j=b;this.i=a;this.l=c;this.s=null;this.m=[];this.h=this.g=null;this.u=Promise.resolve().then(function(){return Aj(d)});this.I=new af(function(){return Bj(d)})}yj.prototype.destroy=function(){return this.I.destroy()};function Bj(a){var b,c,d;return I(function(e){if(1==e.g)return a.h&&a.h.abort(),Cj(a),v(e,a.u,2);a.g&&a.g.Ha.mb();b=t(a.m);for(c=b.next();!c.done;c=b.next())d=c.value,d.Ha.mb();a.g=null;a.m=[];a.j=null;z(e)})}
function Dj(a,b){var c={Cb:function(){},Fc:function(){},mb:function(){},onError:function(){},Hc:function(){},Dg:function(){}};a.m.push({create:b,Ha:c});a.h&&a.h.abort();Cj(a);return c}
function Aj(a){return I(function(b){if(a.I.g)b=b.v(0);else{if(0==a.m.length||a.g&&!a.g.ib)var c=!1;else{a.g&&(a.g.Ha.mb(),a.g=null);c=a.m.shift();var d=c.create(a.l);d?(c.Ha.Cb(),a.g={node:d.node,payload:d.payload,ib:d.ib,Ha:c.Ha}):c.Ha.Hc();c=!0}c?c=Promise.resolve():a.g?c=Ej(a):(a.j.Af(a.i),a.s=new Ac,c=a.s);b=v(b,c,1)}return b})}
function Ej(a){var b,c;return I(function(d){switch(d.g){case 1:return a.i=a.j.df(a.i,a.l,a.g.node,a.g.payload),A(d,2),a.h=a.j.Qe(a.i,a.l,a.g.payload),v(d,a.h.promise,4);case 4:a.h=null;a.i==a.g.node&&(a.g.Ha.Fc(),a.g=null);va(d,0);break;case 2:b=E(d);if(7001==b.code)a.g.Ha.mb();else a.g.Ha.onError(b);a.g=null;a.h=null;c=a;return v(d,a.j.handleError(a.l,b),5);case 5:c.i=d.h,z(d)}})}function Cj(a){a.s&&(a.s.resolve(),a.s=null)};function Fj(a){this.g=null;for(var b=t(Array.from(a.textTracks)),c=b.next();!c.done;c=b.next())c=c.value,c.mode="disabled","Shaka Player TextTrack"==c.label&&(this.g=c);this.g||(this.g=a.addTextTrack("subtitles","Shaka Player TextTrack"));this.g.mode="hidden"}q=Fj.prototype;q.remove=function(a,b){if(!this.g)return!1;Gj(this.g,function(c){return c.startTime<b&&c.endTime>a});return!0};
q.append=function(a){function b(g){var h=[],k=700<=g.fontWeight,l="italic"==g.fontStyle,m=g.textDecoration.includes("underline");k&&h.push("b");l&&h.push("i");m&&h.push("u");k=h.reduce(function(n,p){return n+"<"+p+">"},"");h=h.reduceRight(function(n,p){return n+"</"+p+">"},"");return g.lineBreak||g.spacer?(g.spacer&&Ub("shaka.extern.Cue","Please use lineBreak instead of spacer."),"\n"):g.nestedCues.length?g.nestedCues.map(b).join(""):k+g.payload+h}var c=a.map(function(g){if(g.nestedCues.length){var h=
g.clone();h.nestedCues=[];h.payload=b(g);return h}return g}),d=[];a=this.g.cues?Array.from(this.g.cues):[];var e={};c=t(c);for(var f=c.next();!f.done;e={tb:e.tb},f=c.next())e.tb=f.value,a.some(function(g){return function(h){return h.startTime==g.tb.startTime&&h.endTime==g.tb.endTime&&h.text==g.tb.payload?!0:!1}}(e))||(f=Hj(e.tb))&&d.push(f);a=d.slice().sort(function(g,h){return g.startTime!=h.startTime?g.startTime-h.startTime:g.endTime!=h.endTime?g.endTime-h.startTime:"line"in VTTCue.prototype?d.indexOf(h)-
d.indexOf(g):d.indexOf(g)-d.indexOf(h)});a=t(a);for(e=a.next();!e.done;e=a.next())this.g.addCue(e.value)};q.destroy=function(){this.g&&(Gj(this.g,function(){return!0}),this.g.mode="disabled");this.g=null;return Promise.resolve()};q.isTextVisible=function(){return"showing"==this.g.mode};q.setTextVisibility=function(a){this.g.mode=a?"showing":"hidden"};
function Hj(a){if(a.startTime>=a.endTime)return null;var b=new VTTCue(a.startTime,a.endTime,a.payload);b.lineAlign=a.lineAlign;b.positionAlign=a.positionAlign;a.size&&(b.size=a.size);try{b.align=a.textAlign}catch(c){}"center"==a.textAlign&&"center"!=b.align&&(b.align="middle");"vertical-lr"==a.writingMode?b.vertical="lr":"vertical-rl"==a.writingMode&&(b.vertical="rl");1==a.lineInterpretation&&(b.snapToLines=!1);null!=a.line&&(b.line=a.line);null!=a.position&&(b.position=a.position);return b}
function Gj(a,b){var c=a.mode;a.mode="showing"==c?"showing":"hidden";for(var d=t(Array.from(a.cues)),e=d.next();!e.done;e=d.next())(e=e.value)&&b(e)&&a.removeCue(e);a.mode=c}L("shaka.text.SimpleTextDisplayer",Fj);Fj.prototype.setTextVisibility=Fj.prototype.setTextVisibility;Fj.prototype.isTextVisible=Fj.prototype.isTextVisible;Fj.prototype.destroy=Fj.prototype.destroy;Fj.prototype.append=Fj.prototype.append;Fj.prototype.remove=Fj.prototype.remove;function Ij(){}function Jj(a){for(;a.firstChild;)a.removeChild(a.firstChild)}L("shaka.util.Dom",Ij);Ij.removeAllChildren=Jj;function Kj(a,b){var c=this;this.m=!1;this.l=[];this.g=a;this.u=b;this.i=document.createElement("div");this.i.classList.add("shaka-text-container");this.i.style.textAlign="center";this.i.style.display="flex";this.i.style.flexDirection="column";this.i.style.alignItems="center";this.i.style.justifyContent="flex-end";this.u.appendChild(this.i);this.D=(new P(function(){Lj(c)})).Ca(.25);this.j=new Map;this.h=new cf;this.h.A(document,"fullscreenchange",function(){Lj(c,!0)});this.s=null;"ResizeObserver"in
window&&(this.s=new ResizeObserver(function(){Lj(c,!0)}),this.s.observe(this.i))}q=Kj.prototype;q.append=function(a){var b=[].concat(ja(this.l)),c={};a=t(a);for(var d=a.next();!d.done;c={ic:c.ic},d=a.next())c.ic=d.value,b.some(function(e){return function(f){return Cb(f,e.ic)}}(c))||this.l.push(c.ic);Lj(this)};
q.destroy=function(){this.u.removeChild(this.i);this.i=null;this.m=!1;this.l=[];this.D&&this.D.stop();this.j.clear();this.h&&(this.h.release(),this.h=null);this.s&&(this.s.disconnect(),this.s=null)};q.remove=function(a,b){if(!this.i)return!1;this.l=this.l.filter(function(c){return c.startTime<a||c.endTime>=b});Lj(this);return!0};q.isTextVisible=function(){return this.m};q.setTextVisibility=function(a){this.m=a};
function Mj(a,b,c,d,e){var f=!1,g=[],h=[];b=t(b);for(var k=b.next();!k.done;k=b.next()){k=k.value;var l=a.j.get(k),m=k.startTime<=d&&k.endTime>d,n=l?l.Ae:null;l&&(g.push(l.Wd),m||(f=!0,a.j["delete"](k),l=null));m&&(h.push(k),l||(Nj(a,k,e),l=a.j.get(k),n=l.Ae,f=!0));0<k.nestedCues.length&&n&&Mj(a,k.nestedCues,n,d,!0)}if(f){d=t(g);for(e=d.next();!e.done;e=d.next())c.removeChild(e.value);h.sort(function(p,r){return p.startTime!=r.startTime?p.startTime-r.startTime:p.endTime-r.endTime});h=t(h);for(k=h.next();!k.done;k=
h.next())d=a.j.get(k.value),c.appendChild(d.Wd)}}function Lj(a,b){if(a.i){var c=a.g.currentTime;(!a.m||(void 0===b?0:b))&&0<a.j.size&&(Jj(a.i),a.j.clear());if(a.m){for(var d=new Map,e=t(a.j.keys()),f=e.next();!f.done;f=e.next())f=f.value,d.set(f,a.j.get(f));Mj(a,a.l,a.i,c,!1)}}}
function Nj(a,b,c){var d=c?"span":"div";if(b.lineBreak||b.spacer)b.spacer&&Ub("shaka.extern.Cue","Please use lineBreak instead of spacer."),d="br";var e=document.createElement(d);"br"!=d&&Oj(a,e,b,c);d=e;!c&&b.nestedCues.length&&(d=document.createElement("span"),d.classList.add("shaka-text-wrapper"),e.appendChild(d));a.j.set(b,{Wd:e,Ae:d})}
function Oj(a,b,c,d){var e=b.style,f=0==c.nestedCues.length;e.whiteSpace="pre-wrap";var g=c.payload.replace(/\s+$/g,function(h){return"\u00a0".repeat(h.length)});d?b.textContent=g:g.length&&(e=document.createElement("span"),e.textContent=g,b.appendChild(e),e=e.style);e.backgroundColor=c.backgroundColor;e.border=c.border;e.color=c.color;e.direction=c.direction;e.opacity=c.opacity;e.paddingLeft=Pj(c.linePadding,c,a.u);e.paddingRight=Pj(c.linePadding,c,a.u);c.backgroundImage&&(e.backgroundImage="url('"+
c.backgroundImage+"')",e.backgroundRepeat="no-repeat",e.backgroundSize="contain",e.backgroundPosition="center",""==c.backgroundColor&&(e.backgroundColor="transparent"));d?e.display="inline":(e.display="flex",e.flexDirection="column",e.alignItems="center",e.justifyContent="before"==c.displayAlign?"flex-start":"center"==c.displayAlign?"center":"flex-end");f||(e.margin="0");e.fontFamily=c.fontFamily;e.fontWeight=c.fontWeight.toString();e.fontStyle=c.fontStyle;e.letterSpacing=c.letterSpacing;e.fontSize=
Pj(c.fontSize,c,a.u);c.line?1==c.lineInterpretation&&(e.position="absolute",c.writingMode==wb?c.lineAlign==yb?e.top=c.line+"%":"end"==c.lineAlign&&(e.bottom=c.line+"%"):"vertical-lr"==c.writingMode?c.lineAlign==yb?e.left=c.line+"%":"end"==c.lineAlign&&(e.right=c.line+"%"):c.lineAlign==yb?e.right=c.line+"%":"end"==c.lineAlign&&(e.left=c.line+"%")):c.region&&c.region.id&&(!d&&!f||c.backgroundImage)&&(a=c.region.widthUnits==Jb?"%":"px",b=c.region.viewportAnchorUnits==Jb?"%":"px",e.height=c.region.height+
(c.region.heightUnits==Jb?"%":"px"),e.width=c.region.width+a,e.position="absolute",e.top=c.region.viewportAnchorY+b,e.left=c.region.viewportAnchorX+b);e.lineHeight=c.lineHeight;c.position&&(c.writingMode==wb?e.paddingLeft=c.position:e.paddingTop=c.position);"line-left"==c.positionAlign?e.cssFloat="left":"line-right"==c.positionAlign&&(e.cssFloat="right");e.textAlign=c.textAlign;e.textDecoration=c.textDecoration.join(" ");e.writingMode=c.writingMode;"writingMode"in document.documentElement.style&&
e.writingMode==c.writingMode||(e.webkitWritingMode=c.writingMode);c.size&&(c.writingMode==wb?e.width=c.size+"%":e.height=c.size+"%")}function Pj(a,b,c){var d=(d=(new RegExp(/(\d*\.?\d+)([a-z]+|%+)/)).exec(a))?{value:Number(d[1]),Wf:d[2]}:null;if(!d)return a;var e=d.value;switch(d.Wf){case "%":return e/100*c.clientHeight/b.cellResolution.rows+"px";case "c":return c.clientHeight*e/b.cellResolution.rows+"px";default:return a}}L("shaka.text.UITextDisplayer",Kj);Kj.prototype.setTextVisibility=Kj.prototype.setTextVisibility;
Kj.prototype.isTextVisible=Kj.prototype.isTextVisible;Kj.prototype.remove=Kj.prototype.remove;Kj.prototype.destroy=Kj.prototype.destroy;Kj.prototype.append=Kj.prototype.append;function Qj(a,b){function c(h){for(var k=h,l=t(b),m=l.next();!m.done;m=l.next())m=m.value,m.end&&m.start<h&&(k+=m.end-m.start);h=Math.floor(k/3600);l=Math.floor(k/60%60);m=Math.floor(k%60);k=Math.floor(1E3*k%1E3);return(10>h?"0":"")+h+":"+(10>l?"0":"")+l+":"+(10>m?"0":"")+m+"."+(100>k?10>k?"00":"0":"")+k}function d(h){var k=[],l=700<=h.fontWeight,m="italic"==h.fontStyle,n=h.textDecoration.includes("underline");l&&k.push("b");m&&k.push("i");n&&k.push("u");l=k.reduce(function(p,r){return p+"<"+r+">"},
"");k=k.reduceRight(function(p,r){return p+"</"+r+">"},"");return h.lineBreak||h.spacer?(h.spacer&&Ub("shaka.text.Cue","Please use lineBreak instead of spacer."),"\n"):h.nestedCues.length?h.nestedCues.map(d).join(""):l+h.payload+k}var e=a.map(function(h){if(h.nestedCues.length){var k=h.clone();k.nestedCues=[];k.payload=d(h);return k}return h}),f="WEBVTT\n\n";e=t(e);for(var g=e.next();!g.done;g=e.next())g=g.value,f+=c(g.startTime)+" --\x3e "+c(g.endTime)+function(h){var k=[];switch(h.textAlign){case "left":k.push("align:left");
break;case "right":k.push("align:right");break;case vb:k.push("align:middle");break;case "start":k.push("align:start");break;case "end":k.push("align:end")}switch(h.writingMode){case "vertical-lr":k.push("vertical:lr");break;case "vertical-rl":k.push("vertical:rl")}return k.length?" "+k.join(" "):""}(g)+"\n",f+=g.payload+"\n\n";return f}L("shaka.text.WebVttGenerator",function(){});function Rj(){}
function Sj(a,b,c,d,e){var f=e in d,g=!0,h;for(h in b){var k=e+"."+h,l=f?d[e]:c[h];f||h in c?void 0===b[h]?void 0===l||f?delete a[h]:a[h]=Me(l):l.constructor==Object&&b[h]&&b[h].constructor==Object?(a[h]||(a[h]=Me(l)),k=Sj(a[h],b[h],l,d,k),g=g&&k):typeof b[h]!=typeof l||null==b[h]||"function"!=typeof b[h]&&b[h].constructor!=l.constructor?(Ua("Invalid config, wrong type for "+k),g=!1):("function"==typeof c[h]&&c[h].length!=b[h].length&&Va("Unexpected number of arguments for "+k),a[h]=b[h]):(Ua("Invalid config, unrecognized key "+
k),g=!1)}return g}function Tj(a,b){for(var c={},d=c,e=0,f=0;;){e=a.indexOf(".",e);if(0>e)break;if(0==e||"\\"!=a[e-1])f=a.substring(f,e).replace(/\\\./g,"."),d[f]={},d=d[f],f=e+1;e+=1}d[a.substring(f).replace(/\\\./g,".")]=b;return c}L("shaka.util.ConfigUtils",Rj);Rj.convertToConfigObject=Tj;Rj.mergeConfigObjects=Sj;function Uj(){}
function Vj(){var a=Infinity;navigator.connection&&navigator.connection.saveData&&(a=360);var b={retryParameters:Ce(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1,initDataTransform:Sf,logLicenseExchange:!1,updateExpirationTime:1,preferredKeySystems:[]},c={retryParameters:Ce(),availabilityWindowOverride:NaN,disableAudio:!1,disableVideo:!1,disableText:!1,disableThumbnails:!1,defaultPresentationDelay:0,dash:{clockSyncUri:"",ignoreDrmInfo:!1,disableXlinkProcessing:!1,xlinkFailGracefully:!1,
ignoreMinBufferTime:!1,autoCorrectDrift:!0,initialSegmentLimit:1E3,ignoreSuggestedPresentationDelay:!1,ignoreEmptyAdaptationSet:!1,ignoreMaxSegmentDuration:!1,keySystemsByURI:{"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},
manifestPreprocessor:function(g){return g}},hls:{ignoreTextStreamFailures:!1,ignoreImageStreamFailures:!1,useFullSegmentsForStartTime:!1}},d={retryParameters:Ce(),failureCallback:function(g){return[g]},rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,gapDetectionThreshold:.1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1,safeSeekOffset:5,stallEnabled:!0,stallThreshold:1,stallSkip:.1,useNativeHlsOnSafari:!0,
inaccurateManifestTolerance:2,lowLatencyMode:!1,autoLowLatencyMode:!1,forceHTTPS:!1,preferNativeHls:!1,updateIntervalSeconds:1};if(navigator.userAgent.match(/Edge\//)||vd()||xd())d.gapDetectionThreshold=.5;if(wd("Web0S")||vd()||xd())d.stallSkip=0;var e={trackSelectionCallback:function(g){return I(function(h){return h["return"](g)})},downloadSizeCallback:function(g){var h;return I(function(k){if(1==k.g)return navigator.storage&&navigator.storage.estimate?v(k,navigator.storage.estimate(),3):k["return"](!0);
h=k.h;return k["return"](h.usage+g<.95*h.quota)})},progressCallback:function(g,h){return[g,h]},usePersistentLicense:!0},f={drm:b,manifest:c,streaming:d,offline:e,abrFactory:function(){return new le},abr:{enabled:!0,useNetworkInformation:!0,defaultBandwidthEstimate:1E6,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:a,minPixels:0,maxPixels:Infinity,minFrameRate:0,maxFrameRate:Infinity,minBandwidth:0,maxBandwidth:Infinity}},
preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",preferredAudioChannelCount:2,preferredVideoCodecs:[],preferredAudioCodecs:[],preferForcedSubs:!1,preferredDecodingAttributes:[],restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minFrameRate:0,maxFrameRate:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity,textDisplayFactory:function(){return null}};e.trackSelectionCallback=
function(g){return I(function(h){return h["return"](Wj(g,f.preferredAudioLanguage))})};return f}function Xj(a,b,c){var d={".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",sessionType:"",serverCertificate:new Uint8Array(0),serverCertificateUri:"",individualizationServer:""}};return Sj(a,b,c||Vj(),d,"")}
function Wj(a,b){var c=a.filter(function(h){return"variant"==h.type}),d=[],e=od(b,c.map(function(h){return h.language}));e&&(d=c.filter(function(h){return hd(h.language)==e}));0==d.length&&(d=c.filter(function(h){return h.primary}));0==d.length&&(c.map(function(h){return h.language}),d=c);var f=d.filter(function(h){return h.height&&480>=h.height});f.length&&(f.sort(function(h,k){return k.height-h.height}),d=f.filter(function(h){return h.height==f[0].height}));c=[];if(d.length){var g=Math.floor(d.length/
2);d.sort(function(h,k){return h.bandwidth-k.bandwidth});c.push(d[g])}d=t(a);for(g=d.next();!g.done;g=d.next())g=g.value,g.type!=yc&&"image"!=g.type||c.push(g);return c}L("shaka.util.PlayerConfiguration",Uj);Uj.mergeConfigObjects=Xj;function Yj(){this.g=null;this.h=[]}function Zj(a,b){if(null==a.g)a.g={timestamp:Date.now()/1E3,state:b,duration:0};else{var c=Date.now()/1E3;a.g.duration=c-a.g.timestamp;a.g.state!=b&&(a.h.push(a.g),a.g={timestamp:c,state:b,duration:0})}}function ak(a,b){var c=0;a.g&&a.g.state==b&&(c+=a.g.duration);for(var d=t(a.h),e=d.next();!e.done;e=d.next())e=e.value,c+=e.state==b?e.duration:0;return c}
function bk(a){function b(f){return{timestamp:f.timestamp,state:f.state,duration:f.duration}}for(var c=[],d=t(a.h),e=d.next();!e.done;e=d.next())c.push(b(e.value));a.g&&c.push(b(a.g));return c};function ck(){this.i=this.h=null;this.g=[]}function dk(a,b,c){a.i!=b&&(a.i=b,a.g.push({timestamp:Date.now()/1E3,id:b.id,type:"text",fromAdaptation:c,bandwidth:null}))};function ek(){this.s=this.u=this.J=this.F=this.m=this.j=this.H=this.l=this.i=this.L=this.N=this.S=this.D=this.Y=NaN;this.g=new Yj;this.h=new ck};function W(a,b){Le.call(this);var c=this;this.l=fk;this.oc=this.g=null;this.Y=!1;this.h=new cf;this.fd=this.u=this.Wa=this.B=this.sc=this.s=this.i=this.hc=this.J=this.pc=this.H=this.Fa=this.F=this.L=this.m=this.O=null;this.nd=1E9;this.o=gk(this);this.md={width:Infinity,height:Infinity};this.j=null;this.pa=new te(this.o.preferredAudioLanguage,this.o.preferredVariantRole,this.o.preferredAudioChannelCount);this.qa=this.o.preferredTextLanguage;this.Nb=this.o.preferredTextRole;this.Xa=this.o.preferForcedSubs;
this.gd=[];b&&b(this);this.O=hk(this);this.O.Md(this.o.streaming.forceHTTPS);this.D=null;ik&&(this.D=ac(ik));this.h.A(window,"online",function(){c.Hd()});this.ta={name:"detach"};this.Oa={name:"attach"};this.S={name:"unload"};this.pd={name:"manifest-parser"};this.ld={name:"manifest"};this.ra={name:"media-source"};this.jd={name:"drm-engine"};this.N={name:"load"};this.qd={name:"src-equals-drm-engine"};this.Ma={name:"src-equals"};var d=new Map;d.set(this.Oa,function(e,f){return Ie(jk(c,e,f))});d.set(this.ta,
function(e){e.G&&(c.h.Da(e.G,"error"),e.G=null);c.D&&c.D.release();c.g=null;e=Promise.resolve();return Ie(e)});d.set(this.S,function(e){return Ie(kk(c,e))});d.set(this.ra,function(e){e=lk(c,e);return Ie(e)});d.set(this.pd,function(e,f){var g=mk(c,e,f);return Ie(g)});d.set(this.ld,function(e){return nk(c,e)});d.set(this.jd,function(e){e=ok(c,e);return Ie(e)});d.set(this.N,function(e,f){return Ie(pk(c,e,f))});d.set(this.qd,function(e,f){var g=qk(c,e,f);return Ie(g)});d.set(this.Ma,function(e,f){return rk(c,
e,f)});this.da=new yj(this.ta,{df:function(e,f,g,h){var k=null;e==c.ta&&(k=g==c.ta?c.ta:c.Oa);e==c.Oa&&(k=g==c.ta||f.G!=h.G?c.ta:g==c.Oa?c.Oa:g==c.ra||g==c.N?c.ra:g==c.Ma?c.qd:null);e==c.ra&&(k=g==c.N&&f.G==h.G?c.pd:c.S);e==c.pd&&(k=sk(c.N,c.ld,c.S,g,f,h));e==c.ld&&(k=sk(c.N,c.jd,c.S,g,f,h));e==c.jd&&(k=sk(c.N,c.N,c.S,g,f,h));e==c.qd&&(k=g==c.Ma&&f.G==h.G?c.Ma:c.S);if(e==c.N||e==c.Ma)k=c.S;e==c.S&&(k=h.G&&f.G==h.G?c.Oa:c.ta);return k},Qe:function(e,f,g){c.dispatchEvent(tk(uk,{state:e.name}));return d.get(e)(f,
g)},handleError:function(e){return I(function(f){return 1==f.g?v(f,kk(c,e),2):f["return"](e.G?c.Oa:c.ta)})},Af:function(e){c.dispatchEvent(tk(vk,{state:e.name}))}});a&&this.Pb(a,!0)}qa(W,Le);function tk(a,b){return new Q(a,b)}q=W.prototype;
q.destroy=function(){var a=this,b;return I(function(c){switch(c.g){case 1:if(a.l==wk)return c["return"]();a.l=wk;b=Dj(a.da,function(){return{node:a.ta,payload:zj(),ib:!1}});return v(c,new Promise(function(d){b.Cb=function(){};b.Fc=function(){d()};b.mb=function(){d()};b.onError=function(){d()};b.Hc=function(){d()}}),2);case 2:return v(c,a.da.destroy(),3);case 3:a.h&&(a.h.release(),a.h=null);a.fd=null;a.u=null;a.o=null;a.j=null;a.oc=null;if(!a.O){c.v(0);break}return v(c,a.O.destroy(),5);case 5:a.O=
null,z(c)}})};q.Pb=function(a,b){b=void 0===b?!0:b;if(this.l==wk)return Promise.reject(xk());var c=zj();c.G=a;sd()||(b=!1);var d=b?this.ra:this.Oa,e=Dj(this.da,function(){return{node:d,payload:c,ib:!1}});e.Cb=function(){};return yk(e)};q.detach=function(){var a=this;if(this.l==wk)return Promise.reject(xk());var b=Dj(this.da,function(){return{node:a.ta,payload:zj(),ib:!1}});b.Cb=function(){};return yk(b)};
q.Sd=function(a){var b=this;a=void 0===a?!0:a;if(this.l==wk)return Promise.reject(xk());sd()||(a=!1);var c=zj(),d=Dj(this.da,function(e){var f=e.G&&a?b.ra:e.G?b.Oa:b.ta;c.G=e.G;return{node:f,payload:c,ib:!1}});d.Cb=function(){};return yk(d)};
q.load=function(a,b,c){var d=this;if(this.l==wk)return Promise.reject(xk());this.dispatchEvent(tk(zk));var e=zj();e.uri=a;e.Qd=Date.now()/1E3;c&&(e.mimeType=c);void 0!==b&&(e.startTime=b);var f=Ak(this,e)?this.Ma:this.N,g=Dj(this.da,function(h){if(null==h.G)return null;e.G=h.G;return{node:f,payload:e,ib:!0}});this.j=new ek;g.Cb=function(){};return new Promise(function(h,k){g.Hc=function(){return k(new O(2,7,7002))};g.Fc=function(){h();d.dispatchEvent(tk(Bk))};g.mb=function(){return k(xk())};g.onError=
function(l){return k(l)}})};function Ak(a,b){if(!sd())return!0;var c=b.mimeType,d=b.uri||"";c||(c=dg(d),c=Ck[c]);if(c){if(""==(b.G||ud()).canPlayType(c))return!1;if(!sd()||!(c in cg||dg(d)in eg)||a.o.streaming.preferNativeHls)return!0;if(yd())return a.o.streaming.useNativeHlsOnSafari}return!1}function jk(a,b,c){null==b.G&&(b.G=c.G,a.h.A(b.G,"error",function(){var d=Dk(a);d&&Ek(a,d)}));a.g=b.G;return Promise.resolve()}
function kk(a,b){var c,d,e,f,g,h,k,l,m;return I(function(n){switch(n.g){case 1:return a.l!=wk&&(a.l=fk),c=a.gd.map(function(p){return p()}),a.gd=[],v(n,Promise.all(c),2);case 2:a.dispatchEvent(tk(Fk));b.mimeType=null;b.startTime=null;b.uri=null;b.G&&(a.h.Da(b.G,"loadedmetadata"),a.h.Da(b.G,"playing"),a.h.Da(b.G,"pause"),a.h.Da(b.G,"ended"),a.h.Da(b.G,"ratechange"));a.Fa&&(a.Fa.release(),a.Fa=null);a.pc&&(a.pc.stop(),a.pc=null);if(!a.s){n.v(3);break}return v(n,a.s.stop(),4);case 4:a.s=null,a.sc=null;
case 3:if(!a.u){n.v(5);break}return v(n,a.u.stop(),5);case 5:if(!a.i){n.v(7);break}return v(n,a.i.destroy(),8);case 8:a.i=null;case 7:a.H&&(a.H.release(),a.H=null);a.F&&(a.F.release(),a.F=null);if(!a.L){n.v(9);break}return v(n,a.L.destroy(),10);case 10:a.L=null;case 9:if(a.D)a.D.onAssetUnload();if(!b.G||!b.G.src){n.v(11);break}return v(n,new Promise(function(p){return(new P(p)).U(.1)}),12);case 12:for(b.G.removeAttribute("src"),b.G.load();b.G.lastChild;)b.G.removeChild(b.G.firstChild);case 11:if(!a.m){n.v(13);
break}return v(n,a.m.destroy(),14);case 14:a.m=null;case 13:a.Wa=null;a.J=null;if(a.B){d=t(a.B.variants);for(e=d.next();!e.done;e=d.next())for(f=e.value,g=t([f.audio,f.video]),h=g.next();!h.done;h=g.next())(k=h.value)&&k.segmentIndex&&k.segmentIndex.release();l=t(a.B.textStreams);for(h=l.next();!h.done;h=l.next())m=h.value,m.segmentIndex&&m.segmentIndex.release()}a.B=null;a.j=new ek;a.kd=null;Gk(a);z(n)}})}
function lk(a,b){var c,d,e,f;return I(function(g){if(1==g.g)return c=new Hh,d=a.o.textDisplayFactory,e=ac(d),a.kd=d,f=Hk(b.G,c,e,function(h,k,l){h=t(h);for(var m=h.next();!m.done;m=h.next())if(m=m.value,m.data&&m.cueTime&&m.frames){for(var n=m.cueTime+k,p=l,r=t(m.frames),u=r.next();!u.done;u=r.next())Ik(a,n,p,"ID3",u.value);if(a.D)a.D.onHlsTimedMetadata(m,n)}}),v(g,f.F,2);a.L=f;z(g)})}
function mk(a,b,c){var d,e,f,g;return I(function(h){if(1==h.g)return b.mimeType=c.mimeType,b.uri=c.uri,d=b.uri,e=a.O,a.Wa=d,f=a,v(h,bg(d,e,a.o.manifest.retryParameters,b.mimeType),2);f.sc=h.h;a.s=ac(a.sc);g=Me(a.o.manifest);c.G&&"AUDIO"===c.G.nodeName&&(g.disableVideo=!0);a.s.configure(g);z(h)})}
function nk(a,b){var c=b.uri,d=a.O;a.hc=new Si(function(){return a.cc()});Ti(a.hc,function(g){Jk(a,Kk,g);if(a.D)a.D.onDashTimedMetadata(g)});var e={networkingEngine:d,filter:function(g){return Lk(a,g)},makeTextStreamsForClosedCaptions:function(g){return Mk(a,g)},onTimelineRegionAdded:function(g){var h=a.hc;a:{var k=t(h.g);for(var l=k.next();!l.done;l=k.next())if(l=l.value,l.schemeIdUri==g.schemeIdUri&&l.id==g.id&&l.startTime==g.startTime&&l.endTime==g.endTime){k=l;break a}k=null}null==k&&(h.g.add(g),
h.h(g))},onEvent:function(g){return a.dispatchEvent(g)},onError:function(g){return Ek(a,g)},isLowLatencyMode:function(){return a.o.streaming.lowLatencyMode},isAutoLowLatencyMode:function(){return a.o.streaming.autoLowLatencyMode},enableLowLatencyMode:function(){a.configure("streaming.lowLatencyMode",!0)}},f=Date.now()/1E3;return new Ee(function(){var g,h,k,l;return I(function(m){if(1==m.g)return g=a,v(m,a.s.start(c,e),2);g.B=m.h;h=tk(Nk);a.dispatchEvent(h);if(0==a.B.variants.length)throw new O(2,
4,4036);Ok(a.B);k=Date.now()/1E3;l=k-f;a.j.H=l;z(m)})}(),function(){return a.s.stop()})}function ok(a,b){var c,d;return I(function(e){return 1==e.g?(c=Date.now()/1E3,d=!0,a.m=Pk(a,{lb:a.O,onError:function(f){Ek(a,f)},Gc:function(f){Qk(a,f)},onExpirationUpdated:function(f,g){Rk(a,f,g)},onEvent:function(f){a.dispatchEvent(f);f.type==Sk&&d&&(d=!1,a.j.j=Date.now()/1E3-c)}}),a.m.configure(a.o.drm),v(e,xf(a.m,a.B.variants,a.B.offlineSessionIds),2)):3!=e.g?v(e,a.m.Pb(b.G),3):v(e,Lk(a,a.B),0)})}
function pk(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u;return I(function(w){switch(w.g){case 1:b.startTime=c.startTime;d=b.G;e=b.uri;a.Wa=e;a.H=new Li({Bc:function(){return b.G.playbackRate},yc:function(){return b.G.defaultPlaybackRate},Od:function(y){b.G.playbackRate=y},ke:function(y){b.G.currentTime+=y}});f=function(){return Tk(a)};g=function(){return Uk(a)};a.h.A(d,"playing",f);a.h.A(d,"pause",f);a.h.A(d,"ended",f);a.h.A(d,"ratechange",g);h=a.o.abrFactory;a.u&&a.fd==h||(a.fd=h,a.u=ac(h),"function"!=typeof a.u.playbackRateChanged&&
(Ub("AbrManager","Please use an AbrManager with playbackRateChanged function."),a.u.playbackRateChanged=function(){}),a.u.configure(a.o.abr));a.pa=new te(a.o.preferredAudioLanguage,a.o.preferredVariantRole,a.o.preferredAudioChannelCount);a.qa=a.o.preferredTextLanguage;a.Nb=a.o.preferredTextRole;a.Xa=a.o.preferForcedSubs;Vk(a.B.presentationTimeline,a.o.playRangeStart,a.o.playRangeEnd);a.u.init(function(y,x,C){a.i&&y!=a.i.h&&Wk(a,y,!0,void 0===x?!1:x,void 0===C?0:C)});a.F=Xk(a,b.startTime);a.Fa=Yk(a);
k=Math.max(a.B.minBufferTime,a.o.streaming.rebufferingGoal);Zk(a,k);Cd(a.B,a.o.preferredVideoCodecs,a.o.preferredAudioCodecs,a.o.preferredAudioChannelCount,a.o.preferredDecodingAttributes);a.i=$k(a);a.i.configure(a.o.streaming);a.l=al;a.dispatchEvent(tk(bl));l=null;if(m=a.Cc().find(function(y){return y.active})){w.v(2);break}l=cl(a)?a.u.chooseVariant():null;Wk(a,l,!0,!1,0);if(!a.o.streaming.startAtSegmentBoundary){w.v(3);break}n=a.F.l();return v(w,dl(l,n),4);case 4:p=w.h,a.F.m(p);case 3:el(a,null,
Zd(l));case 2:return r=a.hb().find(function(y){return y.active}),r||((u=ie(a.B.textStreams,a.qa,a.Nb,a.Xa)[0]||null)&&dk(a.j.h,u,!0),l&&(u?(l.audio&&fl(a,l.audio,u)&&(a.Y=!0),a.Y&&a.L.m.setTextVisibility(!0),gl(a)):a.Y=!1),u&&(a.o.streaming.alwaysStreamText||a.sd())&&ij(a.i,u)),v(w,a.i.start(),5);case 5:a.o.abr.enabled&&(a.u.enable(),hl(a)),Sd(a.i?a.i.h:null,a.B),il(a.B),jl(a),cl(a),a.B.variants.some(function(y){return y.primary}),a.h.wa(d,"loadedmetadata",function(){a.j.l=Date.now()/1E3-c.Qd}),z(w)}})}
function qk(a,b,c){var d,e,f,g,h,k,l;return I(function(m){return 1==m.g?(d=zc,e=Date.now()/1E3,f=!0,a.m=Pk(a,{lb:a.O,onError:function(n){Ek(a,n)},Gc:function(n){Qk(a,n)},onExpirationUpdated:function(n,p){Rk(a,n,p)},onEvent:function(n){a.dispatchEvent(n);n.type==Sk&&f&&(f=!1,a.j.j=Date.now()/1E3-e)}}),a.m.configure(a.o.drm),g=c.uri||"",h=dg(g),k=Ck[h],"application/x-mpegurl"==k&&yd()&&(k="application/vnd.apple.mpegurl"),k||(k="video/mp4"),l={id:0,language:"und",primary:!1,audio:null,video:{id:0,originalId:null,
createSegmentIndex:function(){return Promise.resolve()},segmentIndex:null,mimeType:c.mimeType?c.mimeType.split(";")[0]:k,codecs:c.mimeType?Yc(c.mimeType):"",encrypted:!0,drmInfos:[],keyIds:new Set,language:"und",label:null,type:d.Na,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null},bandwidth:100,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]},a.m.S=!0,v(m,xf(a.m,[l],[]),2)):v(m,a.m.Pb(b.G),
0)})}
function rk(a,b,c){function d(){return Tk(a)}b.uri=c.uri;b.startTime=c.startTime;a.Wa=b.uri;a.F=new Bi(b.G);null!=b.startTime&&a.F.m(b.startTime);a.H=new Li({Bc:function(){return b.G.playbackRate},yc:function(){return b.G.defaultPlaybackRate},Od:function(g){b.G.playbackRate=g},ke:function(g){b.G.currentTime+=g}});Zk(a,a.o.streaming.rebufferingGoal);a.h.A(b.G,"playing",d);a.h.A(b.G,"pause",d);a.h.A(b.G,"ended",d);a.h.A(b.G,"ratechange",function(){return Uk(a)});"none"!=a.g.preload&&a.h.wa(a.g,"loadedmetadata",
function(){a.j.l=Date.now()/1E3-c.Qd});a.g.audioTracks&&(a.h.A(a.g.audioTracks,"addtrack",function(){return jl(a)}),a.h.A(a.g.audioTracks,"removetrack",function(){return jl(a)}),a.h.A(a.g.audioTracks,"change",function(){return jl(a)}));a.g.textTracks&&(a.h.A(a.g.textTracks,"addtrack",function(g){if(g.track)switch(g=g.track,g.kind){case "metadata":kl(a,g);break;case "chapters":ll(a,g);break;default:jl(a)}}),a.h.A(a.g.textTracks,"removetrack",function(){return jl(a)}),a.h.A(a.g.textTracks,"change",
function(){return jl(a)}));b.G.src=b.uri;(vd()||wd("Web0S"))&&b.G.load();a.l=ml;a.dispatchEvent(tk(bl));var e=new Ac;si(a.g,HTMLMediaElement.HAVE_METADATA,a.h,function(){e.resolve()});var f=!1;a.gd.push(function(){f=!0});si(a.g,HTMLMediaElement.HAVE_CURRENT_DATA,a.h,function(){var g;return I(function(h){if(1==h.g){if(f)return h["return"]();nl(a);g=ol(a);return g.find(function(k){return"disabled"!=k.mode})?h.v(2):v(h,new Promise(function(k){a.h.wa(a.g.textTracks,"change",k);(new P(k)).U(1)}),2)}if(f)return h["return"]();
pl(a);z(h)})});a.g.error?e.reject(Dk(a)):"none"==a.g.preload&&(Va('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'),e.resolve());a.h.wa(a.g,"error",function(){e.reject(Dk(a))});return new Ee(e,function(){e.reject(new O(2,7,7001));return Promise.resolve()})}
function nl(a){var b=a.o.preferredAudioLanguage;if(""!=b){a.Jd(b);var c=a.o.preferredVariantRole;""!=c&&a.Jd(b,c)}}function pl(a){var b=a.o.preferredTextLanguage,c=a.o.preferForcedSubs;if(""!=b){a.Kd(b,"",c);var d=a.o.preferredTextRole;""!=d&&a.Kd(b,d,c)}}
function kl(a,b){"metadata"==b.kind&&(b.mode="hidden",a.h.A(b,"cuechange",function(){if(b.activeCues)for(var c=t(b.activeCues),d=c.next();!d.done;d=c.next())if(d=d.value,Ik(a,d.startTime,d.endTime,d.type,d.value),a.D)a.D.onCueMetadataChange(d.value)}),(new P(function(){var c=ql(a);c=t(c);for(var d=c.next();!d.done;d=c.next())d.value.mode="hidden"})).Hb().U(.5))}function Ik(a,b,c,d,e){a.dispatchEvent(tk(rl,{startTime:b,endTime:c,Bg:d,payload:e}))}
function ll(a,b){b&&"chapters"==b.kind&&(b.mode="hidden",(new P(function(){var c=sl(a);c=t(c);for(var d=c.next();!d.done;d=c.next())d.value.mode="hidden"})).Hb().U(.5))}function Ok(a){function b(c){return c.video&&c.audio||c.video&&c.video.codecs.includes(",")}a.variants.some(b)&&(a.variants=a.variants.filter(b))}function Pk(a,b){return new of(b,a.o.drm.updateExpirationTime)}function hk(a){return new Qe(function(b,c){a.u&&a.u.segmentDownloaded(b,c)})}
function Xk(a,b){return new Ci(a.g,a.B,a.o.streaming,b,function(){a.Fa&&Oi(a.Fa,!0);if(a.i)for(var c=a.i,d=c.C.Ac(),e=c.o.smallGapLimit,f=t(c.g.keys()),g=f.next();!g.done;g=f.next()){g=g.value;var h=c.g.get(g);h.ca=null;var k=c.C.R;g==yc?(k=k.i,k=null==k.g||null==k.h?!1:d>=k.g&&d<k.h):(k=Xh(k,g),k=Kh(k,d,e));if(!k&&(null!=Yh(c.C.R,g)&&lj(c,h),h.xa&&(h.xa.abort(),h.xa=null),g===yc))for(g=c.C.R.D.g,g.l=0,g.h=[],g.g=[],h=g.i,h.i=[],h.h=[],h.g=0,uh(g),g=t(g.j.values()),h=g.next();!h.done;h=g.next())oh(h.value)}a.J&&
tl(a)},function(c){return a.dispatchEvent(c)})}function Yk(a){var b=new Ui(a.hc);Vi(b,function(d){Jk(a,ul,d)},function(d){Jk(a,vl,d)},function(d,e){e||(Jk(a,ul,d),Jk(a,vl,d))});var c=new Ni(a.g);c.g.add(b);return c}function Zk(a,b){a.J=new xe;a.J.g=ze;Ae(a.J,b,Math.min(.5,b/2));Gk(a);a.pc=(new P(function(){tl(a)})).Ca(.25)}
function tl(a){switch(a.l){case ml:if(a.g.ended)var b=!0;else{var c=Jh(a.g.buffered);b=null!=c&&c>=a.g.duration-1}break;case al:a:if(a.g.ended||Vh(a.L))b=!0;else{if(a.B.presentationTimeline.X()){c=a.B.presentationTimeline.gb();var d=Jh(a.g.buffered);if(null!=d&&d>=c){b=!0;break a}}b=!1}break;default:b=!1}d=Mh(a.g.buffered,a.g.currentTime);c=a.J;var e=b,f=c.h.get(c.g);b=c.g;d=e||d>=f?ye:ze;c.g=d;b!=d&&Gk(a)}function Hk(a,b,c,d){return new Ph(a,b,c,d)}
function $k(a){return new Xi(a.B,{Ac:function(){return a.F.l()},getBandwidthEstimate:function(){return a.u.getBandwidthEstimate()},R:a.L,lb:a.O,onError:function(b){return Ek(a,b)},onEvent:function(b){return a.dispatchEvent(b)},Bf:function(){a.s&&a.s.update&&a.s.update()},Dd:function(){a.F&&a.F.F();tl(a)}})}
q.configure=function(a,b){2==arguments.length&&"string"==typeof a&&(a=Tj(a,b));a.manifest&&a.manifest.dash&&"defaultPresentationDelay"in a.manifest.dash&&(Ub("manifest.dash.defaultPresentationDelay configuration","Please Use manifest.defaultPresentationDelay instead."),a.manifest.defaultPresentationDelay=a.manifest.dash.defaultPresentationDelay,delete a.manifest.dash.defaultPresentationDelay);a.streaming&&a.streaming.lowLatencyMode&&(void 0==a.streaming.inaccurateManifestTolerance&&(a.streaming.inaccurateManifestTolerance=
0),void 0==a.streaming.rebufferingGoal&&(a.streaming.rebufferingGoal=.01));var c=Xj(this.o,a,gk(this));wl(this);return c};
function wl(a){if(a.s){var b=Me(a.o.manifest);a.g&&"AUDIO"===a.g.nodeName&&(b.disableVideo=!0);a.s.configure(b)}a.m&&a.m.configure(a.o.drm);if(a.i){a.i.configure(a.o.streaming);try{xl(a,a.B)}catch(f){Ek(a,f)}a.u&&cl(a);b=a.i.h;!b||b.allowedByApplication&&b.allowedByKeySystem||yl(a)}a.O&&a.O.Md(a.o.streaming.forceHTTPS);if(a.L&&(b=a.o.textDisplayFactory,a.kd!=b)){var c=ac(b),d=a.L,e=d.m;d.m=c;e&&(c.setTextVisibility(e.isTextVisible()),e.destroy());d.i&&(d.i.i=c);a.kd=b;a.i&&(b=a.i,(c=b.g.get(yc))&&
gj(b,c.stream,!0,0,!0))}a.u&&(a.u.configure(a.o.abr),a.o.abr.enabled?a.u.enable():a.u.disable(),hl(a));a.J&&(b=a.o.streaming.rebufferingGoal,a.B&&(b=Math.max(b,a.B.minBufferTime)),Ae(a.J,b,Math.min(.5,b/2)));a.B&&Vk(a.B.presentationTimeline,a.o.playRangeStart,a.o.playRangeEnd)}q.getConfiguration=function(){var a=gk(this);Xj(a,this.o,gk(this));return a};
q.Te=function(){if(this.g){var a=this.g.buffered.length;a=a?this.g.buffered.end(a-1):0;var b=this.getConfiguration().streaming.bufferingGoal;b=Math.min(this.g.currentTime+b,this.cc().end);if(a>=b)return 1;if(!(a<=this.g.currentTime)&&a<b)return(a-this.g.currentTime)/(b-this.g.currentTime)}return 0};q.Mf=function(){for(var a in this.o)delete this.o[a];Xj(this.o,gk(this),gk(this));wl(this)};q.Ze=function(){return this.l};q.cf=function(){return this.g};q.Ub=function(){return this.O};q.od=function(){return this.Wa};
q.be=function(){return this.D?this.D:null};q.X=function(){return this.B?this.B.presentationTimeline.X():this.g&&this.g.src?Infinity==this.g.duration:!1};q.kb=function(){return this.B?this.B.presentationTimeline.kb():!1};q.tf=function(){if(this.B){var a=this.B.variants;return a.length?!a[0].video:!1}return this.g&&this.g.src?this.g.videoTracks?0==this.g.videoTracks.length:0==this.g.videoHeight:!1};
q.cc=function(){if(this.B){var a=this.B.presentationTimeline;return{start:a.yb(),end:a.Qa()}}return this.g&&this.g.src&&(a=this.g.seekable,a.length)?{start:a.start(0),end:a.end(a.length-1)}:{start:0,end:0}};q.rf=function(){this.X()&&(this.g.currentTime=this.cc().end)};q.keySystem=function(){var a=this.drmInfo();return a?a.keySystem:""};q.drmInfo=function(){return this.m?this.m.i:null};q.Tb=function(){return this.m?this.m.Tb():Infinity};q.zc=function(){return this.m?this.m.zc():{}};
q.rd=function(){return this.J?this.J.g==ze:!1};q.ef=function(){return this.g?this.H?this.H.i:1:0};q.Vf=function(a){0==a?Va("A trick play rate of 0 is unsupported!"):(this.g.paused&&this.g.play(),this.H.set(a),this.l==al&&(this.u.playbackRateChanged(a),fj(this.i,1<Math.abs(a))))};q.Je=function(){var a=this.H.yc();this.l==ml&&this.H.set(a);this.l==al&&(this.H.set(a),this.u.playbackRateChanged(a),fj(this.i,!1))};
q.Cc=function(){if(this.B){for(var a=this.i?this.i.h:null,b=[],c=0,d=t(this.B.variants),e=d.next();!e.done;e=d.next())if(e=e.value,ge(e)){var f=Zd(e);f.active=e==a;f.active||1==c||null==a||e.video!=a.video||e.audio!=a.audio||(f.active=!0);f.active&&c++;b.push(f)}return b}return this.g&&this.g.audioTracks?Array.from(this.g.audioTracks).map(function(g){return fe(g)}):[]};
q.hb=function(){if(this.B){for(var a=this.i?this.i.i:null,b=[],c=t(this.B.textStreams),d=c.next();!d.done;d=c.next()){d=d.value;var e=$d(d);e.active=d==a;b.push(e)}return b}return this.g&&this.g.src&&this.g.textTracks?ol(this).map(function(f){return de(f)}):[]};q.Xe=function(){return this.B?this.B.imageStreams.map(function(a){return ae(a)}):[]};
q.nf=function(a,b){var c=this,d,e,f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B;return I(function(F){if(1==F.g)return c.B?(d=c.B.imageStreams.find(function(G){return G.id==a}))?d.segmentIndex?F.v(3):v(F,d.createSegmentIndex(),3):F["return"](null):F.v(2);if(2!=F.g){e=d.segmentIndex.find(b);if(null==e)return F["return"](null);f=d.segmentIndex.get(e);g=f.tilesLayout||d.tilesLayout;h=/(\d+)x(\d+)/.exec(g);if(!h)return F["return"](null);k=d.width||0;l=d.height||0;m=parseInt(h[1],10);n=parseInt(h[2],10);p=k/m;r=l/n;
u=m*n;w=f.j-f.startTime;y=w/u;x=f.startTime;D=C=0;1<u&&(B=Math.floor((b-f.startTime)/y),x=f.startTime+B*y,C=B%m*p,D=Math.floor(B/m)*r);return F["return"]({height:r,positionX:C,positionY:D,startTime:x,duration:y,uris:f.ma(),width:p})}return F["return"](null)})};
q.re=function(a){if(this.B&&this.i){var b=this.B.textStreams.find(function(d){return d.id==a.id});b&&b!=this.i.i&&(dk(this.j.h,b,!1),ij(this.i,b),zl(this),this.qa=b.language)}else if(this.g&&this.g.src&&this.g.textTracks){b=ol(this);b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,be(c)==a.id?c.mode=this.Y?"showing":"hidden":c.mode="disabled";zl(this)}};
q.se=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?0:c;if(this.B&&this.i){this.o.abr.enabled&&Va("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var d=this.B.variants.find(function(e){return e.id==a.id});d&&ge(d)&&(Wk(this,d,!1,b,c),this.pa=new se(d),cl(this))}else if(this.g&&this.g.audioTracks)for(b=Array.from(this.g.audioTracks),b=t(b),c=b.next();!c.done;c=b.next())if(c=c.value,
be(c)==a.id){Al(this,c);break}};q.Se=function(){return Bl(this.Cc())};q.mf=function(){return Bl(this.hb())};q.Re=function(){return Array.from(Cl(this.Cc()))};q.lf=function(){return Array.from(Cl(this.hb()))};
q.Jd=function(a,b){if(this.B&&this.F){this.pa=new te(a,b||"",0,"");var c=function(k,l){return k.video||l.video?k.video&&l.video?Math.abs((k.video.height||0)-(l.video.height||0))+Math.abs((k.video.width||0)-(l.video.width||0)):Infinity:0},d=this.i.h,e=this.pa.create(this.B.variants),f=null;e=t(e.values());for(var g=e.next();!g.done;g=e.next())if(g=g.value,!f||c(f,d)>c(g,d))f=g;f?(c=Zd(f),this.se(c,!0)):yl(this)}else if(this.g&&this.g.audioTracks){e=Array.from(this.g.audioTracks);c=hd(a);f=d=null;e=
t(e);for(g=e.next();!g.done;g=e.next()){g=g.value;var h=fe(g);hd(h.language)==c&&(d=g,b?h.roles.includes(b)&&(f=g):0==h.roles.length&&(f=g))}f?Al(this,f):d&&Al(this,d)}};
q.Kd=function(a,b,c){c=void 0===c?!1:c;if(this.B&&this.F){if(this.qa=a,this.Nb=b||"",this.Xa=c,(a=ie(this.B.textStreams,this.qa,this.Nb,this.Xa)[0]||null)&&a!=this.i.i&&(dk(this.j.h,a,!1),this.o.streaming.alwaysStreamText||this.sd()))ij(this.i,a),zl(this)}else{var d=hd(a);(a=this.hb().find(function(e){return hd(e.language)==d&&(!b||e.roles.includes(b))&&e.forced==c}))&&this.re(a)}};
q.Nf=function(a){if(this.B&&this.F){for(var b=null,c=t(this.B.variants),d=c.next();!d.done;d=c.next())if(d=d.value,d.audio.label==a){b=d;break}null!=b&&(this.pa=new te(b.language,"",0,a),yl(this))}};q.sd=function(){var a=this.Y;return this.L?this.L.m.isTextVisible():this.g&&this.g.src&&this.g.textTracks?ol(this).some(function(b){return"showing"==b.mode}):a};q.ce=function(){return this.g&&this.g.src&&this.g.textTracks?sl(this).map(function(a){return de(a)}):[]};
q.Ue=function(a){var b=hd(a),c=sl(this).find(function(e){return hd(e.language)==b});if(!c||!c.cues)return[];a=[];c=t(c.cues);for(var d=c.next();!d.done;d=c.next())d=d.value,a.push({title:d.text,startTime:d.startTime,endTime:d.endTime});return a};function ol(a){return Array.from(a.g.textTracks).filter(function(b){return"metadata"!=b.kind&&"chapters"!=b.kind&&"Shaka Player TextTrack"!=b.label})}function ql(a){return Array.from(a.g.textTracks).filter(function(b){return"metadata"==b.kind})}
function sl(a){return Array.from(a.g.textTracks).filter(function(b){return"chapters"==b.kind})}q.Tf=function(a){a=!!a;if(this.Y!=a){this.Y=a;if(this.l==al)this.L.m.setTextVisibility(a),this.o.streaming.alwaysStreamText||(a?this.i.i||(a=ie(this.B.textStreams,this.qa,this.Nb,this.Xa),0<a.length&&(ij(this.i,a[0]),zl(this))):ej(this.i));else if(this.g&&this.g.src&&this.g.textTracks){var b=ol(this);b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,"disabled"!=c.mode&&(c.mode=a?"showing":"hidden")}gl(this)}};
q.gf=function(){if(!this.X())return null;var a=this.da.l,b=0;if(this.F)b=this.F.l();else if(a){if(null==a.startTime)return new Date;b=a.startTime}return this.B?new Date(1E3*(this.B.presentationTimeline.j+b)):this.g&&this.g.getStartDate?(a=this.g.getStartDate(),isNaN(a.getTime())?null:new Date(a.getTime()+1E3*b)):null};
q.de=function(){if(!this.X())return null;if(this.B)return new Date(1E3*this.B.presentationTimeline.j);if(this.g&&this.g.getStartDate){var a=this.g.getStartDate();return isNaN(a.getTime())?null:a}return null};q.xc=function(){if(this.l==al)return this.L.xc();var a={total:[],audio:[],video:[],text:[]};this.l==ml&&(a.total=Nh(this.g.buffered));return a};
q.getStats=function(){if(this.l!=al&&this.l!=ml)return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,corruptedFrames:NaN,estimatedBandwidth:NaN,completionPercent:NaN,loadLatency:NaN,manifestTimeSeconds:NaN,drmTimeSeconds:NaN,playTime:NaN,pauseTime:NaN,bufferingTime:NaN,licenseTime:NaN,liveLatency:NaN,maxSegmentDuration:NaN,switchHistory:[],stateHistory:[]};Tk(this);var a=this.g,b=a.currentTime/a.duration;if(!isNaN(b)){var c=this.j;b=Math.round(100*b);c.i=isNaN(c.i)?
b:Math.max(c.i,b)}a.getVideoPlaybackQuality&&(a=a.getVideoPlaybackQuality(),c=this.j,b=Number(a.totalVideoFrames),c.S=Number(a.droppedVideoFrames),c.N=b,this.j.L=Number(a.corruptedVideoFrames));this.m?(a=this.m,a=a.F?a.F:NaN):a=NaN;this.j.m=a;if(this.l==al){if(a=this.i.h)this.j.u=(this.H?this.H.i:1)*a.bandwidth;a&&a.video&&(c=this.j,b=a.video.height||NaN,c.Y=a.video.width||NaN,c.D=b);this.X()&&(a=this.de().valueOf()+1E3*this.cc().end,this.j.F=(Date.now()-a)/1E3);this.B&&this.B.presentationTimeline&&
(this.j.J=this.B.presentationTimeline.g);a=this.u.getBandwidthEstimate();this.j.s=a}var d=this.j;a=d.Y;c=d.D;b=d.u;var e=d.N,f=d.S,g=d.L,h=d.s,k=d.i,l=d.l,m=d.H,n=d.j,p=ak(d.g,"playing"),r=ak(d.g,"paused"),u=ak(d.g,"buffering"),w=d.m,y=d.F,x=d.J,C=bk(d.g),D=[];d=t(d.h.g);for(var B=d.next();!B.done;B=d.next())B=B.value,D.push({timestamp:B.timestamp,id:B.id,type:B.type,fromAdaptation:B.fromAdaptation,bandwidth:B.bandwidth});return{width:a,height:c,streamBandwidth:b,decodedFrames:e,droppedFrames:f,corruptedFrames:g,
estimatedBandwidth:h,completionPercent:k,loadLatency:l,manifestTimeSeconds:m,drmTimeSeconds:n,playTime:p,pauseTime:r,bufferingTime:u,licenseTime:w,liveLatency:y,maxSegmentDuration:x,stateHistory:C,switchHistory:D}};
q.addTextTrack=function(a,b,c,d,e,f,g){g=void 0===g?!1:g;Ub("addTextTrack","Please use an addTextTrackAsync.");if(this.l!=al&&this.l!=ml)throw new O(1,7,7004);if(!d){var h=dg(a);d=Dl[h];if(!d)throw new O(1,2,2011,h);}if(this.l==ml){if("text/vtt"!=d)throw new O(1,2,2013,d);g&&(c="forced");d=document.createElement("track");d.src=a;d.label=f||"";d.kind=c;d.srclang=b;this.g.getAttribute("crossorigin")||this.g.setAttribute("crossorigin","anonymous");this.g.appendChild(d);if(a=this.hb().find(function(k){return k.language==
b&&k.label==(f||"")&&k.kind==c}))return jl(this),a;throw new O(1,2,2012);}h=this.B.presentationTimeline.getDuration();if(Infinity==h)throw new O(1,4,4033);a={id:this.nd++,originalId:null,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:Ji(0,h,[a]),mimeType:d||"",codecs:e||"",kind:c,encrypted:!1,drmInfos:[],keyIds:new Set,language:b,label:f||null,type:yc,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!!g,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,
closedCaptions:null};if(!$c(Vc(a.mimeType,a.codecs)))throw new O(2,2,2014,d);this.B.textStreams.push(a);jl(this);return $d(a)};
q.Fe=function(a,b,c,d,e,f,g){g=void 0===g?!1:g;var h=this,k,l,m,n,p,r,u,w,y,x,C;return I(function(D){switch(D.g){case 1:if(h.l!=al&&h.l!=ml)throw new O(1,7,7004);if(d){D.v(2);break}return v(D,El(h,a),3);case 3:d=D.h;case 2:k=[];if(h.D)try{k=h.D.getServerSideCuePoints()}catch(B){}if(h.l!=ml){D.v(4);break}g&&(c="forced");return v(D,Fl(h,a,b,c,d,f||"",k),5);case 5:l=h.hb();if(m=l.find(function(B){return B.language==b&&B.label==(f||"")&&B.kind==c}))return jl(h),D["return"](m);throw new O(1,2,2012);case 4:n=
zc;p=h.B.presentationTimeline.getDuration();if(Infinity==p)throw new O(1,4,4033);if(!k.length){D.v(6);break}return v(D,Gl(a,h.O,h.o.streaming.retryParameters),7);case 7:r=D.h,u=Hl(h,r,d,k),w=new Blob([u],{type:"text/vtt"}),a=Sh(w),d="text/vtt";case 6:y={id:h.nd++,originalId:null,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:Ji(0,p,[a]),mimeType:d||"",codecs:e||"",kind:c,encrypted:!1,drmInfos:[],keyIds:new Set,language:b,label:f||null,type:n.aa,primary:!1,trickModeVideo:null,
emsgSchemeIdUris:null,roles:[],forced:!!g,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null};x=Vc(y.mimeType,y.codecs);C=$c(x);if(!C)throw new O(2,2,2014,d);h.B.textStreams.push(y);jl(h);return D["return"]($d(y))}})};
q.Ee=function(a,b,c){var d=this,e,f,g,h,k,l,m;return I(function(n){switch(n.g){case 1:if(d.l!=al&&d.l!=ml)throw new O(1,7,7004);if(c){n.v(2);break}return v(n,El(d,a),3);case 3:c=n.h;case 2:e=[];if(d.D)try{e=d.D.getServerSideCuePoints()}catch(p){}return v(n,Fl(d,a,b,"chapters",c,"",e),4);case 4:f=d.ce();if(g=f.find(function(p){return p.language==b})){h=sl(d);k=t(h);for(l=k.next();!l.done;l=k.next())m=l.value,ll(d,m);return n["return"](g)}throw new O(1,2,2012);}})};
function El(a,b){var c,d;return I(function(e){switch(e.g){case 1:c=dg(b);if(d=Dl[c])return e["return"](d);A(e,2);return v(e,fg(b,a.O,a.o.streaming.retryParameters),4);case 4:d=e.h;va(e,3);break;case 2:E(e);case 3:if(d)return e["return"](d);throw new O(1,2,2011,c);}})}
function Fl(a,b,c,d,e,f,g){var h,k,l,m;return I(function(n){if(1==n.g)return"text/vtt"!=e||g.length?v(n,Gl(b,a.O,a.o.streaming.retryParameters),3):n.v(2);2!=n.g&&(h=n.h,k=Hl(a,h,e,g),l=new Blob([k],{type:"text/vtt"}),b=Sh(l),e="text/vtt");m=document.createElement("track");m.src=b;m.label=f;m.kind=d;m.srclang=c;a.g.getAttribute("crossorigin")||a.g.setAttribute("crossorigin","anonymous");a.g.appendChild(m);z(n)})}
function Gl(a,b,c){var d,e,f;return I(function(g){if(1==g.g)return d=$e,e=Ue([a],c),e.method="GET",v(g,b.request(d,e).promise,2);f=g.h;return g["return"](f.data)})}function Hl(a,b,c,d){var e=ad[c];if(e)return c=e(),a={periodStart:0,segmentStart:0,segmentEnd:a.g.duration},b=Ob(b),b=c.parseMedia(b,a),Qj(b,d);throw new O(2,2,2014,c);}q.Nd=function(a,b){this.md.width=a;this.md.height=b};
q.Hd=function(){if(this.l==al){var a=this.i;if(a.I.g)a=!1;else if(a.j)a=!1;else{for(var b=t(a.g.values()),c=b.next();!c.done;c=b.next())c=c.value,c.Xb&&(c.Xb=!1,dj(a,c,.1));a=!0}}else a=!1;return a};q.$e=function(){Va("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");return this.B};q.af=function(){return this.sc};
function gk(a){var b=Vj();b.streaming.failureCallback=function(c){var d=[1001,1002,1003];a.X()&&d.includes(c.code)&&(c.severity=1,a.Hd())};b.textDisplayFactory=function(){return a.oc?new Kj(a.g,a.oc):new Fj(a.g)};return b}q.we=function(a){this.oc=a};
function Mk(a,b){for(var c=new Set,d=t(b.textStreams),e=d.next();!e.done;e=d.next())e=e.value,"application/cea-608"!=e.mimeType&&"application/cea-708"!=e.mimeType||c.add(e.originalId);d=t(b.variants);for(e=d.next();!e.done;e=d.next())if((e=e.value.video)&&e.closedCaptions)for(var f=t(e.closedCaptions.keys()),g=f.next();!g.done;g=f.next())if(g=g.value,!c.has(g)){var h=g.startsWith("CC")?"application/cea-608":"application/cea-708",k=new Ki;h={id:a.nd++,originalId:g,createSegmentIndex:function(){return Promise.resolve()},
segmentIndex:k,mimeType:h,codecs:"",kind:"caption",encrypted:!1,drmInfos:[],keyIds:new Set,language:e.closedCaptions.get(g),label:null,type:yc,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:e.roles,forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null};b.textStreams.push(h);c.add(g)}}function Lk(a,b){return I(function(c){if(1==c.g)return v(c,Il(a,b),2);xl(a,b);z(c)})}
function Il(a,b){var c;return I(function(d){if(1==d.g)return c=a.i?a.i.h:null,v(d,Qd(c,b),2);il(b);z(d)})}
function xl(a,b){if(a.l!=wk){for(var c=a.o.restrictions,d=a.md,e=!1,f=t(b.variants),g=f.next();!g.done;g=f.next()){g=g.value;var h=g.allowedByApplication;g.allowedByApplication=Pd(g,c,d);h!=g.allowedByApplication&&(e=!0)}e&&a.i&&jl(a);if((c=a.m?a.m.i:null)&&a.m.m)for(d=t(b.variants),e=d.next();!e.done;e=d.next())for(e=e.value,e=t((e.video?e.video.drmInfos:[]).concat(e.audio?e.audio.drmInfos:[])),f=e.next();!f.done;f=e.next())if(f=f.value,f.keySystem==c.keySystem)for(f=t(f.initData||[]),g=f.next();!g.done;g=
f.next())g=g.value,Gf(a.m,g.initDataType,g.initData);Jl(a,b)}}
function dl(a,b){var c,d,e,f,g;return I(function(h){if(1==h.g)return c=a.audio,d=a.video,e=function(k,l){var m,n;return I(function(p){if(1==p.g)return k?v(p,k.createSegmentIndex(),2):p["return"](null);m=k.segmentIndex[Symbol.iterator]().seek(l);if(!m)return p["return"](null);n=m.startTime;return p["return"](n)})},v(h,e(c,b),2);if(3!=h.g)return f=h.h,v(h,e(d,b),3);g=h.h;return null!=g&&null!=f?h["return"](Math.max(g,f)):null!=g?h["return"](g):null!=f?h["return"](f):h["return"](b)})}
function Gk(a){var b=a.rd();if(a.j&&a.J&&a.F){var c=a.H;c.j=b;Mi(c);Tk(a)}a.dispatchEvent(tk(Kl,{buffering:b}))}function Uk(a){var b=a.g.playbackRate;0!=b&&(a.H&&a.H.set(b),b=tk(Ll),a.dispatchEvent(b))}function Tk(a){if(a.j&&a.J){var b=a.j.g;a.J.g==ze?Zj(b,"buffering"):a.g.paused?Zj(b,"paused"):a.g.ended?Zj(b,"ended"):Zj(b,"playing")}}
function cl(a){try{Jl(a,a.B)}catch(c){return Ek(a,c),!1}var b=a.B.variants.filter(function(c){return ge(c)});b=a.pa.create(b);a.u.setVariants(Array.from(b.values()));return!0}function yl(a){var b;(b=cl(a)?a.u.chooseVariant():null)&&Wk(a,b,!0,!0,0)}
function Wk(a,b,c,d,e){var f=a.i.h;if(b==f)d&&hj(a.i,b,d,e,!0);else{var g=a.j.h;g.h!=b&&(g.h=b,g.g.push({timestamp:Date.now()/1E3,id:b.id,type:"variant",fromAdaptation:c,bandwidth:b.bandwidth}));hj(a.i,b,d,e);d=null;f&&(d=Zd(f));b=Zd(b);c?el(a,d,b):Ml(a,d,b)}}function Al(a,b){var c=Array.from(a.g.audioTracks).find(function(e){return e.enabled});b.enabled=!0;b.id!==c.id&&(c.enabled=!1);c=fe(c);var d=fe(b);Ml(a,c,d)}
function fl(a,b,c){a=hd(a.o.preferredTextLanguage);b=hd(b.language);c=hd(c.language);return gd(c,a)&&!gd(b,c)}function el(a,b,c){b=tk(Nl,{zf:b,yf:c});Ol(a,b)}function jl(a){var b=tk(Pl);Ol(a,b)}function Ml(a,b,c){b=tk(Ql,{zf:b,yf:c});Ol(a,b)}function zl(a){var b=tk(Rl);Ol(a,b)}function gl(a){var b=tk(Sl);Ol(a,b)}function hl(a){var b=tk(Tl,{Cg:a.o.abr.enabled});Ol(a,b)}function Ek(a,b){if(a.l!=wk){var c=tk(Ul,{detail:b});a.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0)}}
function Jk(a,b,c){a.dispatchEvent(tk(b,{detail:{schemeIdUri:c.schemeIdUri,value:c.value,startTime:c.startTime,endTime:c.endTime,id:c.id,eventElement:c.eventElement}}))}function Dk(a){if(!a.g.error)return null;var b=a.g.error.code;if(1==b)return null;var c=a.g.error.msExtendedCode;c&&(0>c&&(c+=Math.pow(2,32)),c=c.toString(16));return new O(2,3,3016,b,c,a.g.error.message)}
function Qk(a,b){if(a.i){var c=Object.keys(b),d=1==c.length&&"00"==c[0],e=!1;if(c.length){c=t(a.B.variants);for(var f=c.next();!f.done;f=c.next()){f=f.value;var g=[];f.audio&&g.push(f.audio);f.video&&g.push(f.video);g=t(g);for(var h=g.next();!h.done;h=g.next()){var k=h.value;h=f.allowedByKeySystem;if(k.keyIds.size){f.allowedByKeySystem=!0;k=t(k.keyIds);for(var l=k.next();!l.done;l=k.next())l=l.value,l=b[d?"00":l],f.allowedByKeySystem=f.allowedByKeySystem&&!!l&&!Vl.includes(l)}h!=f.allowedByKeySystem&&
(e=!0)}}}e&&cl(a);(d=a.i.h)&&!d.allowedByKeySystem&&yl(a);e&&jl(a)}}function Rk(a,b,c){if(a.s&&a.s.onExpirationUpdated)a.s.onExpirationUpdated(b,c);b=tk(Wl);a.dispatchEvent(b)}function Vk(a,b,c){0<b&&(a.X()||a.ve(b));b=a.getDuration();c<b&&(a.X()||a.Ja(c))}
function Jl(a,b){var c=a.m?a.m.zc():{},d=Object.keys(c);d=d.length&&"00"==d[0];for(var e=!1,f=!1,g=new Set,h=new Set,k=t(b.variants),l=k.next();!l.done;l=k.next()){l=l.value;var m=[];l.audio&&m.push(l.audio);l.video&&m.push(l.video);m=t(m);for(var n=m.next();!n.done;n=m.next())if(n=n.value,n.keyIds.size){n=t(n.keyIds);for(var p=n.next();!p.done;p=n.next()){p=p.value;var r=c[d?"00":p];r?Vl.includes(r)&&h.add(r):g.add(p)}}l.allowedByApplication?l.allowedByKeySystem&&(e=!0):f=!0}if(!e)throw c={hasAppRestrictions:f,
missingKeys:Array.from(g),restrictedKeyStatuses:Array.from(h)},new O(2,4,4012,c);}function il(a){if(!a.variants.some(ge))throw new O(2,4,4032);}function Ol(a,b){I(function(c){if(1==c.g)return v(c,Promise.resolve(),2);a.l!=wk&&a.dispatchEvent(b);z(c)})}function Cl(a){var b=new Set;a=t(a);for(var c=a.next();!c.done;c=a.next())c=c.value,c.language?b.add(hd(c.language)):b.add("und");return b}
function Bl(a){var b=new Map,c=new Map;a=t(a);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e="und",f=[];d.language&&(e=hd(d.language));"variant"==d.type?f=d.audioRoles:f=d.roles;f&&f.length||(f=[""]);b.has(e)||b.set(e,new Set);f=t(f);for(var g=f.next();!g.done;g=f.next())g=g.value,b.get(e).add(g),d.label&&(c.has(e)||c.set(e,new Map),c.get(e).set(g,d.label))}var h=[];b.forEach(function(k,l){for(var m=t(k),n=m.next();!n.done;n=m.next()){n=n.value;var p=null;c.has(l)&&c.get(l).has(n)&&(p=c.get(l).get(n));
h.push({language:l,role:n,label:p})}});return h}function xk(){return new O(2,7,7E3)}function sk(a,b,c,d,e,f){return d==a&&e.G==f.G&&e.uri==f.uri&&e.mimeType==f.mimeType?b:c}function zj(){return{G:null,mimeType:null,startTime:null,Qd:NaN,uri:null}}function yk(a){return new Promise(function(b,c){a.mb=function(){return c(xk())};a.Fc=function(){return b()};a.onError=function(d){return c(d)};a.Hc=function(){return c(xk())}})}L("shaka.Player",W);W.prototype.setVideoContainer=W.prototype.we;
W.prototype.getManifestParserFactory=W.prototype.af;W.prototype.getManifest=W.prototype.$e;W.prototype.retryStreaming=W.prototype.Hd;W.prototype.setMaxHardwareResolution=W.prototype.Nd;W.prototype.addChaptersTrack=W.prototype.Ee;W.prototype.addTextTrackAsync=W.prototype.Fe;W.prototype.addTextTrack=W.prototype.addTextTrack;W.prototype.getStats=W.prototype.getStats;W.prototype.getBufferedInfo=W.prototype.xc;W.prototype.getPresentationStartTimeAsDate=W.prototype.de;
W.prototype.getPlayheadTimeAsDate=W.prototype.gf;W.prototype.setTextTrackVisibility=W.prototype.Tf;W.prototype.getChapters=W.prototype.Ue;W.prototype.getChaptersTracks=W.prototype.ce;W.prototype.isTextTrackVisible=W.prototype.sd;W.prototype.selectVariantsByLabel=W.prototype.Nf;W.prototype.selectTextLanguage=W.prototype.Kd;W.prototype.selectAudioLanguage=W.prototype.Jd;W.prototype.getTextLanguages=W.prototype.lf;W.prototype.getAudioLanguages=W.prototype.Re;W.prototype.getTextLanguagesAndRoles=W.prototype.mf;
W.prototype.getAudioLanguagesAndRoles=W.prototype.Se;W.prototype.selectVariantTrack=W.prototype.se;W.prototype.selectTextTrack=W.prototype.re;W.prototype.getThumbnails=W.prototype.nf;W.prototype.getImageTracks=W.prototype.Xe;W.prototype.getTextTracks=W.prototype.hb;W.prototype.getVariantTracks=W.prototype.Cc;W.prototype.cancelTrickPlay=W.prototype.Je;W.prototype.trickPlay=W.prototype.Vf;W.prototype.getPlaybackRate=W.prototype.ef;W.prototype.isBuffering=W.prototype.rd;W.prototype.getKeyStatuses=W.prototype.zc;
W.prototype.getExpiration=W.prototype.Tb;W.prototype.drmInfo=W.prototype.drmInfo;W.prototype.keySystem=W.prototype.keySystem;W.prototype.goToLive=W.prototype.rf;W.prototype.seekRange=W.prototype.cc;W.prototype.isAudioOnly=W.prototype.tf;W.prototype.isInProgress=W.prototype.kb;W.prototype.isLive=W.prototype.X;W.prototype.getAdManager=W.prototype.be;W.prototype.getAssetUri=W.prototype.od;W.prototype.getNetworkingEngine=W.prototype.Ub;W.prototype.getMediaElement=W.prototype.cf;
W.prototype.getLoadMode=W.prototype.Ze;W.prototype.resetConfiguration=W.prototype.Mf;W.prototype.getBufferFullness=W.prototype.Te;W.prototype.getConfiguration=W.prototype.getConfiguration;W.prototype.configure=W.prototype.configure;W.prototype.load=W.prototype.load;W.prototype.unload=W.prototype.Sd;W.prototype.detach=W.prototype.detach;W.prototype.attach=W.prototype.Pb;
W.probeSupport=function(a){a=void 0===a?!0:a;var b,c,d,e,f,g;return I(function(h){if(1==h.g)return b={},a?v(h,Wf(),3):h.v(2);2!=h.g&&(b=h.h);var k={};if(sd()){for(var l in cg)k[l]=!0;for(var m in eg)k[m]=!0}l={mpd:"application/dash+xml",m3u8:"application/x-mpegurl",ism:"application/vnd.ms-sstr+xml"};m=t(["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"]);for(var n=m.next();!n.done;n=m.next())n=n.value,k[n]=sd()?!!cg[n]:td(n);for(var p in l)k[p]=
sd()?!!eg[p]:td(l[p]);c=k;k={};p=t('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(","));
for(l=p.next();!l.done;l=p.next())l=l.value,k[l]=sd()?$c(l)?!0:MediaSource.isTypeSupported(l)||Rc(l):td(l),m=l.split(";")[0],k[m]=k[m]||k[l];d=k;e={manifest:c,media:d,drm:b};f=Xl;for(g in f)e[g]=f[g]();return h["return"](e)})};
W.isBrowserSupported=function(){window.Promise||Va("A Promise implementation or polyfill is required");window.TextDecoder&&window.TextEncoder||Va("A TextDecoder/TextEncoder implementation or polyfill is required");if(!(window.Promise&&window.Uint8Array&&window.TextDecoder&&window.TextEncoder&&Array.prototype.forEach)||wd("Trident/"))return!1;var a=zd();return a&&12>a||!(window.MediaKeys&&window.navigator&&window.navigator.requestMediaKeySystemAccess&&window.MediaKeySystemAccess&&window.MediaKeySystemAccess.prototype.getConfiguration)?
!1:sd()?!0:td("application/x-mpegurl")};W.setAdManagerFactory=function(a){ik=a};W.registerSupportPlugin=function(a,b){Xl[a]=b};W.prototype.destroy=W.prototype.destroy;
var Tl="abrstatuschanged",Nl="adaptation",Kl="buffering",Sk="drmsessionupdate",wj="emsg",Ul="error",Wl="expirationupdated",Bk="loaded",zk="loading",Nk="manifestparsed",rl="metadata",uk="onstatechange",vk="onstateidle",Ll="ratechange",bl="streaming",Rl="textchanged",Sl="texttrackvisibility",Kk="timelineregionadded",ul="timelineregionenter",vl="timelineregionexit",Pl="trackschanged",Fk="unloading",Ql="variantchanged",Yl={bg:Tl,cg:Nl,dg:Kl,eg:Sk,gg:wj,Error:Ul,hg:Wl,ig:"largegap",jg:Bk,kg:zk,lg:Nk,Metadata:rl,
mg:uk,ng:vk,og:Ll,pg:"sessiondata",qg:bl,rg:Rl,sg:Sl,tg:Kk,ug:ul,vg:vl,wg:Pl,xg:Fk,yg:Ql},wk=0,fk=1,al=2,ml=3;W.LoadMode={DESTROYED:wk,NOT_LOADED:fk,MEDIA_SOURCE:al,SRC_EQUALS:ml};W.version="v3.2.1";var Zl=["3","2"];Vb=new function(a){this.g=a;this.i=Wb;this.h=Xb}(new Tb(Number(Zl[0]),Number(Zl[1])));
var Vl=["output-restricted","internal-error"],Xl={},ik=null,Ck={mp4:"video/mp4",m4v:"video/mp4",m4a:"audio/mp4",webm:"video/webm",weba:"audio/webm",mkv:"video/webm",ts:"video/mp2t",ogv:"video/ogg",ogg:"audio/ogg",mpg:"video/mpeg",mpeg:"video/mpeg",m3u8:"application/x-mpegurl",mp3:"audio/mpeg",aac:"audio/aac",flac:"audio/flac",wav:"audio/wav"},Dl={sbv:"text/x-subviewer",srt:"text/srt",vtt:"text/vtt",webvtt:"text/vtt",ttml:"application/ttml+xml",lrc:"application/x-subtitle-lrc",ssa:"text/x-ssa",ass:"text/x-ssa"};function $l(){this.h=[];this.j=this.i=this.g=0};function am(a,b){var c=this;this.i=a;this.g=b;this.j=!1;this.l=this.g.getVolume();this.h=new cf;this.h.A(this.g,google.ima.AdEvent.Type.PAUSED,function(){c.j=!0});this.h.A(this.g,google.ima.AdEvent.Type.RESUMED,function(){c.j=!1})}q=am.prototype;q.getDuration=function(){return this.i.getDuration()};q.getMinSuggestedDuration=function(){return this.i.getMinSuggestedDuration()};q.getRemainingTime=function(){return this.g.getRemainingTime()};q.isPaused=function(){return this.j};
q.isSkippable=function(){return 0<=this.i.getSkipTimeOffset()};q.getTimeUntilSkippable=function(){var a=this.i.getSkipTimeOffset();a=this.getRemainingTime()-a;return Math.max(a,0)};q.canSkipNow=function(){return this.g.getAdSkippableState()};q.skip=function(){return this.g.skip()};q.pause=function(){return this.g.pause()};q.play=function(){return this.g.resume()};q.getVolume=function(){return this.g.getVolume()};q.setVolume=function(a){return this.g.setVolume(a)};q.isMuted=function(){return 0==this.g.getVolume()};
q.resize=function(a,b){this.g.resize(a,b,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)};q.setMuted=function(a){a?(this.l=this.getVolume(),this.setVolume(0)):this.setVolume(this.l)};q.getSequenceLength=function(){var a=this.i.getAdPodInfo();return null==a?1:a.getTotalAds()};q.getPositionInSequence=function(){var a=this.i.getAdPodInfo();return null==a?1:a.getAdPosition()};q.release=function(){this.g=this.i=null};L("shaka.ads.ClientSideAd",am);
am.prototype.release=am.prototype.release;am.prototype.getPositionInSequence=am.prototype.getPositionInSequence;am.prototype.getSequenceLength=am.prototype.getSequenceLength;am.prototype.setMuted=am.prototype.setMuted;am.prototype.resize=am.prototype.resize;am.prototype.isMuted=am.prototype.isMuted;am.prototype.setVolume=am.prototype.setVolume;am.prototype.getVolume=am.prototype.getVolume;am.prototype.play=am.prototype.play;am.prototype.pause=am.prototype.pause;am.prototype.skip=am.prototype.skip;
am.prototype.canSkipNow=am.prototype.canSkipNow;am.prototype.getTimeUntilSkippable=am.prototype.getTimeUntilSkippable;am.prototype.isSkippable=am.prototype.isSkippable;am.prototype.isPaused=am.prototype.isPaused;am.prototype.getRemainingTime=am.prototype.getRemainingTime;am.prototype.getMinSuggestedDuration=am.prototype.getMinSuggestedDuration;am.prototype.getDuration=am.prototype.getDuration;function bm(a,b,c,d){var e=this;this.m=a;this.g=b;this.u=null;this.D=NaN;this.j=d;this.s=null;this.h=new cf;google.ima.settings.setLocale(c);a=new google.ima.AdDisplayContainer(this.m,this.g);a.initialize();this.l=new google.ima.AdsLoader(a);this.l.getSettings().setPlayerType("shaka-player");this.l.getSettings().setPlayerVersion("v3.2.1");this.i=null;this.h.wa(this.l,google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(f){cm(e,f)});this.h.A(this.l,google.ima.AdErrorEvent.Type.AD_ERROR,
function(f){dm(e,f)});this.g.onended=function(){e.l.contentComplete()}}bm.prototype.stop=function(){this.i&&this.i.stop();this.m&&Jj(this.m)};bm.prototype.release=function(){this.stop();this.u&&this.u.disconnect();this.h&&this.h.release();this.i&&this.i.destroy();this.l.destroy()};function dm(a,b){b.getError();em(a,null);a.j(new Q("ad-cue-points-changed",{cuepoints:[]}))}
function cm(a,b){a.j(new Q("ads-loaded",{loadTime:Date.now()/1E3-a.D}));a.i=b.getAdsManager(a.g);a.j(new Q("ima-ad-manager-loaded",{imaAdManager:a.i}));var c=a.i.getCuePoints();if(c.length){var d=[];c=t(c);for(var e=c.next();!e.done;e=c.next())d.push({start:e.value,end:null});a.j(new Q("ad-cue-points-changed",{cuepoints:d}))}fm(a);try{a.i.init(a.g.offsetWidth,a.g.offsetHeight,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL),a.h.A(a.g,"loadeddata",function(){a.i.resize(a.g.offsetWidth,
a.g.offsetHeight,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)}),"ResizeObserver"in window&&(a.u=new ResizeObserver(function(){a.i.resize(a.g.offsetWidth,a.g.offsetHeight,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)}),a.u.observe(a.g)),a.i.start()}catch(f){em(a,null)}}
function fm(a){a.h.A(a.i,google.ima.AdErrorEvent.Type.AD_ERROR,function(b){dm(a,b)});a.h.A(a.i,google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,function(b){gm(a,b)});a.h.A(a.i,google.ima.AdEvent.Type.STARTED,function(b){gm(a,b)});a.h.A(a.i,google.ima.AdEvent.Type.FIRST_QUARTILE,function(b){a.j(new Q("ad-first-quartile",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.MIDPOINT,function(b){a.j(new Q("ad-midpoint",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.THIRD_QUARTILE,function(b){a.j(new Q("ad-third-quartile",
{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.COMPLETE,function(b){a.j(new Q("ad-complete",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,function(b){em(a,b)});a.h.A(a.i,google.ima.AdEvent.Type.ALL_ADS_COMPLETED,function(b){em(a,b)});a.h.A(a.i,google.ima.AdEvent.Type.SKIPPED,function(b){a.j(new Q("ad-skipped",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.VOLUME_CHANGED,function(b){a.j(new Q("ad-volume-changed",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.VOLUME_MUTED,
function(b){a.j(new Q("ad-muted",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.PAUSED,function(b){a.s.j=!0;a.j(new Q("ad-paused",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.RESUMED,function(b){a.s.j=!1;a.j(new Q("ad-resumed",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,function(b){a.j(new Q("ad-skip-state-changed",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.CLICK,function(b){a.j(new Q("ad-clicked",{originalEvent:b}))});a.h.A(a.i,
google.ima.AdEvent.Type.AD_PROGRESS,function(b){a.j(new Q("ad-progress",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.AD_BUFFERING,function(b){a.j(new Q("ad-buffering",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.IMPRESSION,function(b){a.j(new Q("ad-impression",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.DURATION_CHANGE,function(b){a.j(new Q("ad-duration-changed",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.USER_CLOSE,function(b){a.j(new Q("ad-closed",{originalEvent:b}))});
a.h.A(a.i,google.ima.AdEvent.Type.LOADED,function(b){a.j(new Q("ad-loaded",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.ALL_ADS_COMPLETED,function(b){a.j(new Q("all-ads-completed",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.LINEAR_CHANGED,function(b){a.j(new Q("ad-linear-changed",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.AD_METADATA,function(b){a.j(new Q("ad-metadata",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.LOG,function(b){a.j(new Q("ad-recoverable-error",
{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.AD_BREAK_READY,function(b){a.j(new Q("ad-break-ready",{originalEvent:b}))});a.h.A(a.i,google.ima.AdEvent.Type.INTERACTION,function(b){a.j(new Q("ad-interaction",{originalEvent:b}))})}function gm(a,b){var c=b.getAd();a.s=new am(c,a.i);a.j(new Q("ad-started",{ad:a.s,sdkAdObject:c,originalEvent:b}));a.m.setAttribute("ad-active","true");a.g.pause()}
function em(a,b){a.j(new Q("ad-stopped",{originalEvent:b}));a.m.removeAttribute("ad-active");a.g.play()};function hm(a,b){this.i=a;this.h=null;this.g=b}q=hm.prototype;q.getDuration=function(){return this.h?this.h.duration:-1};q.getMinSuggestedDuration=function(){return this.getDuration()};q.getRemainingTime=function(){return this.h?this.h.duration-this.h.currentTime:-1};q.isPaused=function(){return this.g.paused};q.isSkippable=function(){return this.i.isSkippable()};q.getTimeUntilSkippable=function(){var a=this.i.getSkipTimeOffset();a=this.getRemainingTime()-a;return Math.max(a,0)};
q.canSkipNow=function(){return 0==this.getTimeUntilSkippable()};q.skip=function(){this.g.currentTime+=this.getRemainingTime()};q.pause=function(){return this.g.pause()};q.play=function(){return this.g.play()};q.getVolume=function(){return this.g.volume};q.setVolume=function(a){this.g.volume=a};q.isMuted=function(){return this.g.muted};q.resize=function(){};q.setMuted=function(a){this.g.muted=a};q.getSequenceLength=function(){var a=this.i.getAdPodInfo();return null==a?1:a.getTotalAds()};
q.getPositionInSequence=function(){var a=this.i.getAdPodInfo();return null==a?1:a.getAdPosition()};q.release=function(){this.g=this.h=this.i=null};L("shaka.ads.ServerSideAd",hm);hm.prototype.release=hm.prototype.release;hm.prototype.getPositionInSequence=hm.prototype.getPositionInSequence;hm.prototype.getSequenceLength=hm.prototype.getSequenceLength;hm.prototype.setMuted=hm.prototype.setMuted;hm.prototype.resize=hm.prototype.resize;hm.prototype.isMuted=hm.prototype.isMuted;
hm.prototype.setVolume=hm.prototype.setVolume;hm.prototype.getVolume=hm.prototype.getVolume;hm.prototype.play=hm.prototype.play;hm.prototype.pause=hm.prototype.pause;hm.prototype.skip=hm.prototype.skip;hm.prototype.canSkipNow=hm.prototype.canSkipNow;hm.prototype.getTimeUntilSkippable=hm.prototype.getTimeUntilSkippable;hm.prototype.isSkippable=hm.prototype.isSkippable;hm.prototype.isPaused=hm.prototype.isPaused;hm.prototype.getRemainingTime=hm.prototype.getRemainingTime;
hm.prototype.getMinSuggestedDuration=hm.prototype.getMinSuggestedDuration;hm.prototype.getDuration=hm.prototype.getDuration;function im(a,b,c,d){var e=this;this.u=a;this.g=b;this.l=null;this.L=NaN;this.j=d;this.J=!1;this.D=this.m=this.s=null;this.F="";this.H=[];this.h=new cf;a=new google.ima.dai.api.UiSettings;a.setLocale(c);this.i=new google.ima.dai.api.StreamManager(this.g,this.u,a);this.j(new Q("ima-stream-manager-loaded",{imaStreamManager:this.i}));this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.LOADED,function(f){jm(e,f)});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.ERROR,function(){e.F.length?e.l.resolve(e.F):
e.l.reject("IMA Stream request returned an error and there was no backup asset uri provided.");e.l=null});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED,function(){});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.STARTED,function(f){f=f.getAd();e.m=new hm(f,e.g);e.D&&(e.m.h=e.D);e.j(new Q("ad-started",{ad:e.m}));e.u.setAttribute("ad-active","true")});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED,function(){e.u.removeAttribute("ad-active");var f=e.g.currentTime;
e.s&&e.s>f&&(e.g.currentTime=e.s,e.s=null)});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.AD_PROGRESS,function(f){e.D=f.getStreamData().adProgressData;e.m&&(e.m.h=e.D)});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE,function(){e.j(new Q("ad-first-quartile"))});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.MIDPOINT,function(){e.j(new Q("ad-midpoint"))});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE,function(){e.j(new Q("ad-third-quartile"))});
this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.COMPLETE,function(){e.j(new Q("ad-complete"));e.j(new Q("ad-stopped"));e.u.removeAttribute("ad-active");e.m=null});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.SKIPPED,function(){e.j(new Q("ad-skipped"));e.j(new Q("ad-stopped"))});this.h.A(this.i,google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED,function(f){var g=f.getStreamData();f=[];g=t(g.cuepoints);for(var h=g.next();!h.done;h=g.next())h=h.value,f.push({start:h.start,end:h.end});e.H=
f;e.j(new Q("ad-cue-points-changed",{cuepoints:f}))})}im.prototype.stop=function(){this.F="";this.s=null;this.H=[]};im.prototype.release=function(){this.stop();this.h&&this.h.release()};im.prototype.onCueMetadataChange=function(a){if(a.key&&a.data){var b={};b[a.key]=a.data;this.i.onTimedMetadata(b)}};
function jm(a,b){a.j(new Q("ads-loaded",{loadTime:Date.now()/1E3-a.L}));var c=b.getStreamData().url;a.l.resolve(c);a.l=null;a.J||a.h.A(a.g,"seeked",function(){var d=a.g.currentTime;if(0!=d){a.i.streamTimeForContentTime(d);var e=a.i.previousCuePointForStreamTime(d);e&&!e.played&&(a.s=d,a.g.currentTime=e.start)}})};function Y(){Le.call(this);this.g=this.h=null;this.j=new $l;this.i=navigator.language}qa(Y,Le);q=Y.prototype;q.setLocale=function(a){this.i=a};q.initClientSide=function(a,b){var c=this;if(!window.google||!google.ima||!google.ima.AdsLoader)throw new O(2,10,1E4);this.h&&this.h.release();this.h=new bm(a,b,this.i,function(d){if(d&&d.type)switch(d.type){case "ads-loaded":c.j.h.push(d.loadTime);break;case "ad-started":c.j.g++;break;case "ad-complete":c.j.i++;break;case "ad-skipped":c.j.j++}c.dispatchEvent(d)})};
q.release=function(){this.h&&(this.h.release(),this.h=null);this.g&&(this.g.release(),this.g=null)};q.onAssetUnload=function(){this.h&&this.h.stop();this.g&&this.g.stop();this.dispatchEvent(new Q("ad-stopped"));this.j=new $l};q.requestClientSideAds=function(a){if(!this.h)throw new O(1,10,10001);var b=this.h;b.D=Date.now()/1E3;b.l.requestAds(a)};
q.initServerSide=function(a,b){var c=this;if(!window.google||!google.ima||!google.ima.dai)throw new O(2,10,10002);this.g&&this.g.release();this.g=new im(a,b,this.i,function(d){if(d&&d.type)switch(d.type){case "ads-loaded":c.j.h.push(d.loadTime);break;case "ad-started":c.j.g++;break;case "ad-complete":c.j.i++;break;case "ad-skipped":c.j.j++}c.dispatchEvent(d)})};
q.requestServerSideStream=function(a,b){b=void 0===b?"":b;if(!this.g)throw new O(1,10,10003);a.adTagParameters||(a.adTagParameters={});var c=a.adTagParameters;(c.mpt||c.mpv)&&Va('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');a.adTagParameters.mpt="shaka-player";a.adTagParameters.mpv="v3.2.1";c=this.g;var d=b;c.l?c=Promise.reject(new O(1,10,10004)):(a instanceof google.ima.dai.api.LiveStreamRequest&&
(c.J=!0),c.l=new Ac,c.i.requestStream(a),c.F=d||"",c.L=Date.now()/1E3,c=c.l);return c};q.replaceServerSideAdTagParameters=function(a){if(!this.g)throw new O(1,10,10003);(a.mpt||a.mpv)&&Va('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');a.mpt="Shaka Player";a.mpv="v3.2.1";this.g.i.replaceAdTagParameters(a)};q.getServerSideCuePoints=function(){if(!this.g)throw new O(1,10,10003);return this.g.H};
q.getStats=function(){var a=this.j;return{loadTimes:a.h,started:a.g,playedCompletely:a.i,skipped:a.j}};q.onDashTimedMetadata=function(a){if(this.g&&"urn:google:dai:2018"==a.schemeIdUri){var b=a.schemeIdUri,c=a.eventElement?a.eventElement.getAttribute("messageData"):null;this.g.i.processMetadata(b,c,a.startTime)}};q.onHlsTimedMetadata=function(a,b){this.g&&this.g.i.processMetadata("ID3",a.data,b)};q.onCueMetadataChange=function(a){if(this.g)this.g.onCueMetadataChange(a)};L("shaka.ads.AdManager",Y);
Y.prototype.onCueMetadataChange=Y.prototype.onCueMetadataChange;Y.prototype.onHlsTimedMetadata=Y.prototype.onHlsTimedMetadata;Y.prototype.onDashTimedMetadata=Y.prototype.onDashTimedMetadata;Y.prototype.getStats=Y.prototype.getStats;Y.prototype.getServerSideCuePoints=Y.prototype.getServerSideCuePoints;Y.prototype.replaceServerSideAdTagParameters=Y.prototype.replaceServerSideAdTagParameters;Y.prototype.requestServerSideStream=Y.prototype.requestServerSideStream;Y.prototype.initServerSide=Y.prototype.initServerSide;
Y.prototype.requestClientSideAds=Y.prototype.requestClientSideAds;Y.prototype.onAssetUnload=Y.prototype.onAssetUnload;Y.prototype.release=Y.prototype.release;Y.prototype.initClientSide=Y.prototype.initClientSide;Y.prototype.setLocale=Y.prototype.setLocale;Y.ADS_LOADED="ads-loaded";Y.AD_STARTED="ad-started";Y.AD_FIRST_QUARTILE="ad-first-quartile";Y.AD_MIDPOINT="ad-midpoint";Y.AD_THIRD_QUARTILE="ad-third-quartile";Y.AD_COMPLETE="ad-complete";Y.AD_STOPPED="ad-stopped";Y.AD_SKIPPED="ad-skipped";
Y.AD_VOLUME_CHANGED="ad-volume-changed";Y.AD_MUTED="ad-muted";Y.AD_PAUSED="ad-paused";Y.AD_RESUMED="ad-resumed";Y.AD_SKIP_STATE_CHANGED="ad-skip-state-changed";Y.CUEPOINTS_CHANGED="ad-cue-points-changed";Y.IMA_AD_MANAGER_LOADED="ima-ad-manager-loaded";Y.IMA_STREAM_MANAGER_LOADED="ima-stream-manager-loaded";Y.AD_CLICKED="ad-clicked";Y.AD_PROGRESS="ad-progress";Y.AD_BUFFERING="ad-buffering";Y.AD_IMPRESSION="ad-impression";Y.AD_DURATION_CHANGED="ad-duration-changed";Y.AD_CLOSED="ad-closed";
Y.AD_LOADED="ad-loaded";Y.ALL_ADS_COMPLETED="all-ads-completed";Y.AD_LINEAR_CHANGED="ad-linear-changed";Y.AD_METADATA="ad-metadata";Y.AD_RECOVERABLE_ERROR="ad-recoverable-error";Y.AD_BREAK_READY="ad-break-ready";Y.AD_INTERACTION="ad-interaction";ik=function(){return new Y};function km(a){return JSON.stringify(a,function(b,c){if("function"!=typeof c){if(c instanceof Event||c instanceof Q){var d={};for(f in c){var e=c[f];e&&"object"==typeof e?"detail"==f&&(d[f]=e):f in Event||(d[f]=e)}return d}if(c instanceof Error){var f=new Set(["name","message","stack"]);for(d in c)f.add(d);e=t(Object.getOwnPropertyNames(c));for(d=e.next();!d.done;d=e.next())f.add(d.value);e={};f=t(f);for(d=f.next();!d.done;d=f.next())d=d.value,e[d]=c[d];f={__type__:"Error",contents:e}}else if(c instanceof
TimeRanges)for(f={__type__:"TimeRanges",length:c.length,start:[],end:[]},d=t(Nh(c)),e=d.next();!e.done;e=d.next()){e=e.value;var g=e.end;f.start.push(e.start);f.end.push(g)}else f=c instanceof Uint8Array?{__type__:"Uint8Array",entries:Array.from(c)}:"number"==typeof c?isNaN(c)?"NaN":isFinite(c)?c:0>c?"-Infinity":"Infinity":c;return f}})}
function lm(a){return JSON.parse(a,function(b,c){if("NaN"==c)var d=NaN;else if("-Infinity"==c)d=-Infinity;else if("Infinity"==c)d=Infinity;else if(c&&"object"==typeof c&&"TimeRanges"==c.__type__)d=mm(c);else if(c&&"object"==typeof c&&"Uint8Array"==c.__type__)d=new Uint8Array(c.entries);else if(c&&"object"==typeof c&&"Error"==c.__type__){d=c.contents;var e=Error(d.message),f;for(f in d)e[f]=d[f];d=e}else d=c;return d})}
function mm(a){return{length:a.length,start:function(b){return a.start[b]},end:function(b){return a.end[b]}}}
var nm="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),om="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),pm=["loop","playbackRate"],qm=["pause","play"],rm={getAssetUri:2,getAudioLanguages:4,getAudioLanguagesAndRoles:4,getBufferFullness:1,getBufferedInfo:2,getConfiguration:4,getExpiration:2,getKeyStatuses:2,getPlaybackRate:2,getTextLanguages:4,getTextLanguagesAndRoles:4,getTextTracks:2,
getStats:5,getVariantTracks:2,getImageTracks:2,getThumbnails:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1,getLoadMode:10},sm={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},tm=[["getConfiguration","configure"]],um=[["isTextTrackVisible","setTextTrackVisibility"]],vm="addChaptersTrack addTextTrack addTextTrackAsync cancelTrickPlay configure getChapters getChaptersTracks resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay goToLive".split(" "),
wm=["attach","detach","load","unload"];function xm(a,b,c,d,e,f){var g=this;this.L=a;this.j=new P(b);this.da=c;this.D=!1;this.u=d;this.J=e;this.S=f;this.h=this.m=!1;this.Y="";this.s=null;this.F=function(){return ym(g)};this.H=function(h,k){var l=lm(k);switch(l.type){case "event":var m=l.targetName;l=l.event;l=new Q(l.type,l);g.u(m,l);break;case "update":m=l.update;for(var n in m){l=g.g[n]||{};for(var p in m[n])l[p]=m[n][p]}g.D&&(g.da(),g.D=!1);break;case "asyncComplete":if(n=l.id,l=l.error,p=g.i[n],delete g.i[n],p)if(l){n=new O(l.severity,
l.category,l.code);for(m in l)n[m]=l[m];p.reject(n)}else p.resolve()}};this.g={video:{},player:{}};this.N=0;this.i={};this.l=null;zm.add(this)}q=xm.prototype;q.destroy=function(){zm["delete"](this);Am(this);Bm&&Cm(this);this.j&&(this.j.stop(),this.j=null);this.J=this.u=null;this.h=this.m=!1;this.H=this.F=this.l=this.i=this.g=this.s=null;return Promise.resolve()};q.ua=function(){return this.h};q.Fd=function(){return this.Y};
q.init=function(){if(this.L.length)if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){this.m=!0;this.j.Hb();var a=new chrome.cast.SessionRequest(this.L);a=new chrome.cast.ApiConfig(a,function(b){for(var c=t(zm),d=c.next();!d.done;d=c.next())Dm(d.value,b)},function(b){for(var c=t(zm),d=c.next();!d.done;d=c.next())d=d.value,Em="available"==b,d.j.Hb()},"origin_scoped");chrome.cast.initialize(a,function(){},function(){});Em&&this.j.U(Fm);(a=Bm)&&a.status!=chrome.cast.SessionStatus.STOPPED?Dm(this,
a):Bm=null}else window.__onGCastApiAvailable||(window.__onGCastApiAvailable=Gm),window.__onGCastApiAvailable!=Gm&&Va("A global Cast SDK hook is already installed! Shaka Player will be unable to receive a notification when the Cast SDK is ready.")};q.Ld=function(a){this.s=a;this.h&&Hm(this,{type:"appData",appData:this.s})};
q.cast=function(a){var b=this;return I(function(c){if(!b.m)throw new O(1,8,8E3);if(!Em)throw new O(1,8,8001);if(b.h)throw new O(1,8,8002);b.l=new Ac;chrome.cast.requestSession(function(d){return Im(b,a,d)},function(d){return Jm(b,d)});return v(c,b.l,0)})};function Km(a){if(a.h){var b=a.S();chrome.cast.requestSession(function(c){return Im(a,b,c)},function(c){return Jm(a,c)})}}q.vb=function(){if(this.h){Am(this);if(Bm){Cm(this);try{Bm.stop(function(){},function(){})}catch(a){}Bm=null}ym(this)}};
q.get=function(a,b){var c=this;if("video"==a){if(qm.includes(b))return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return c.ne.apply(c,[a,b].concat(ja(e)))}}else if("player"==a){if(sm[b]&&!this.get("player","isLive")())return function(){};if(vm.includes(b))return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return c.ne.apply(c,[a,b].concat(ja(e)))};if(wm.includes(b))return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return c.Jf.apply(c,
[a,b].concat(ja(e)))};if(rm[b])return function(){return c.g[a][b]}}return this.g[a][b]};q.set=function(a,b,c){this.g[a][b]=c;Hm(this,{type:"set",targetName:a,property:b,value:c})};function Im(a,b,c){Bm=c;c.addUpdateListener(a.F);c.addMessageListener("urn:x-cast:com.google.shaka.v2",a.H);ym(a);Hm(a,{type:"init",initState:b,appData:a.s});a.l.resolve()}
function Jm(a,b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006}a.l.reject(new O(2,8,c,b))}q.ne=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];Hm(this,{type:"call",targetName:a,methodName:b,args:d})};q.Jf=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];e=new Ac;var f=this.N.toString();this.N++;this.i[f]=e;try{Hm(this,{type:"asyncCall",targetName:a,methodName:b,args:d,id:f})}catch(g){e.reject(g)}return e};
function Dm(a,b){var c=a.S();a.l=new Ac;a.D=!0;Im(a,c,b)}function Cm(a){var b=Bm;b.removeUpdateListener(a.F);b.removeMessageListener("urn:x-cast:com.google.shaka.v2",a.H)}function ym(a){var b=Bm?"connected"==Bm.status:!1;if(a.h&&!b){a.J();for(var c in a.g)a.g[c]={};Am(a)}a.h=b;a.Y=b?Bm.receiver.friendlyName:"";a.j.Hb()}function Am(a){for(var b in a.i){var c=a.i[b];delete a.i[b];c.reject(new O(1,7,7E3))}}
function Hm(a,b){var c=km(b),d=Bm;try{d.sendMessage("urn:x-cast:com.google.shaka.v2",c,function(){},Ya)}catch(e){throw c=new O(2,8,8005,e),d=new Q("error",{detail:c}),a.u("player",d),a.vb(),c;}}var Fm=.02,Em=!1,Bm=null,zm=new Set;function Gm(a){if(a){a=t(zm);for(var b=a.next();!b.done;b=a.next())b.value.init()}};function Lm(a,b,c){Le.call(this);var d=this;this.j=a;this.i=b;this.h=this.s=this.l=this.u=this.m=null;this.F=c;this.D=new Map;this.g=new xm(c,function(){return Mm(d)},function(){return Nm(d)},function(e,f){return Om(d,e,f)},function(){return Pm(d)},function(){return Qm(d)});Rm(this)}qa(Lm,Le);q=Lm.prototype;
q.destroy=function(a){a&&this.g.vb();this.h&&(this.h.release(),this.h=null);a=[];this.i&&(a.push(this.i.destroy()),this.i=null);this.g&&(a.push(this.g.destroy()),this.g=null);this.u=this.m=this.j=null;return Promise.all(a)};q.qf=function(){return this.m};q.ff=function(){return this.u};q.He=function(){return this.g.m&&Em};q.ua=function(){return this.g.ua()};q.Fd=function(){return this.g.Fd()};
q.cast=function(){var a=this,b;return I(function(c){return 1==c.g?(b=Qm(a),v(c,a.g.cast(b),2)):a.i?v(c,a.i.Sd(),0):c["return"]()})};q.Ld=function(a){this.g.Ld(a)};q.Uf=function(){Km(this.g)};q.vb=function(){this.g.vb()};
q.Ke=function(a){var b=this;return I(function(c){if(1==c.g){if(a==b.F)return c["return"]();b.F=a;b.g.vb();return v(c,b.g.destroy(),2)}b.g=null;b.g=new xm(a,function(){return Mm(b)},function(){return Nm(b)},function(d,e){return Om(b,d,e)},function(){return Pm(b)},function(){return Qm(b)});b.g.init();z(c)})};
function Rm(a){a.g.init();a.h=new cf;for(var b=t(nm),c=b.next();!c.done;c=b.next())a.h.A(a.j,c.value,function(f){a.g.ua()||(f=new Q(f.type,f),a.l.dispatchEvent(f))});for(var d in Yl)a.h.A(a.i,Yl[d],function(f){a.g.ua()||a.s.dispatchEvent(f)});a.m={};b={};for(var e in a.j)b.Ib=e,Object.defineProperty(a.m,b.Ib,{configurable:!1,enumerable:!0,get:function(f){return function(){return Sm(a,f.Ib)}}(b),set:function(f){return function(g){var h=f.Ib;a.g.ua()?a.g.set("video",h,g):a.j[h]=g}}(b)}),b={Ib:b.Ib};
a.u={};Tm(a,function(f){Object.defineProperty(a.u,f,{configurable:!1,enumerable:!0,get:function(){return Um(a,f)}})});Vm(a);a.l=new Le;a.l.qc=a.m;a.s=new Le;a.s.qc=a.u}function Vm(a){var b=new Map;Tm(a,function(c,d){if(b.has(d)){var e=b.get(d);c.length<e.length?a.D.set(c,e):a.D.set(e,c)}else b.set(d,c)})}
function Tm(a,b){function c(l){return"constructor"==l||"function"!=typeof d[l]?!1:!e.has(l)}var d=a.i,e=new Set;for(f in d)c(f)&&(e.add(f),b(f,d[f]));var f=Object.getPrototypeOf(d);for(var g=Object.getPrototypeOf({});f&&f!=g;){for(var h=t(Object.getOwnPropertyNames(f)),k=h.next();!k.done;k=h.next())k=k.value,c(k)&&(e.add(k),b(k,d[k]));f=Object.getPrototypeOf(f)}}
function Qm(a){var b={video:{},player:{},playerAfterLoad:{},manifest:a.i.od(),startTime:null};a.j.pause();for(var c=t(pm),d=c.next();!d.done;d=c.next())d=d.value,b.video[d]=a.j[d];a.j.ended||(b.startTime=a.j.currentTime);c=t(tm);for(d=c.next();!d.done;d=c.next()){var e=d.value;d=e[1];e=a.i[e[0]]();b.player[d]=e}c=t(um);for(d=c.next();!d.done;d=c.next())e=d.value,d=e[1],e=a.i[e[0]](),b.playerAfterLoad[d]=e;return b}function Mm(a){var b=new Q("caststatuschanged");a.dispatchEvent(b)}
function Nm(a){var b=new Q(a.m.paused?"pause":"play");a.l.dispatchEvent(b)}
function Pm(a){for(var b=t(tm),c=b.next();!c.done;c=b.next()){var d=c.value;c=d[1];d=a.g.get("player",d[0])();a.i[c](d)}var e=a.g.get("player","getAssetUri")();c=a.g.get("video","ended");b=Promise.resolve();var f=a.j.autoplay;d=null;c||(d=a.g.get("video","currentTime"));e&&(a.j.autoplay=!1,b=a.i.load(e,d));var g={};c=t(pm);for(d=c.next();!d.done;d=c.next())d=d.value,g[d]=a.g.get("video",d);b.then(function(){if(a.j){for(var h=t(pm),k=h.next();!k.done;k=h.next())k=k.value,a.j[k]=g[k];h=t(um);for(k=
h.next();!k.done;k=h.next()){var l=k.value;k=l[1];l=a.g.get("player",l[0])();a.i[k](l)}a.j.autoplay=f;e&&a.j.play()}},function(h){h=new Q(Ul,{detail:h});a.i.dispatchEvent(h)})}
function Sm(a,b){if("addEventListener"==b)return function(d,e,f){return a.l.addEventListener(d,e,f)};if("removeEventListener"==b)return function(d,e,f){return a.l.removeEventListener(d,e,f)};if(a.g.ua()&&0==Object.keys(a.g.g.video).length){var c=a.j[b];if("function"!=typeof c)return c}return a.g.ua()?a.g.get("video",b):(c=a.j[b],"function"==typeof c&&(c=c.bind(a.j)),c)}
function Um(a,b){a.D.has(b)&&(b=a.D.get(b));if("addEventListener"==b)return function(c,d,e){return a.s.addEventListener(c,d,e)};if("removeEventListener"==b)return function(c,d,e){return a.s.removeEventListener(c,d,e)};if("getMediaElement"==b)return function(){return a.m};if("getSharedConfiguration"==b)return a.g.get("player","getConfiguration");if("getNetworkingEngine"==b)return function(){return a.i.Ub()};if("getDrmEngine"==b)return function(){return a.i.m};if("getAdManager"==b)return function(){return a.i.be()};
if("setVideoContainer"==b)return function(c){return a.i.we(c)};if(a.g.ua()){if("getManifest"==b||"drmInfo"==b)return function(){Va(b+"() does not work while casting!");return null};if("attach"==b||"detach"==b)return function(){Va(b+"() does not work while casting!");return Promise.resolve()}}return a.g.ua()&&0==Object.keys(a.g.g.video).length&&rm[b]||!a.g.ua()?a.i[b].bind(a.i):a.g.get("player",b)}function Om(a,b,c){a.g.ua()&&("video"==b?a.l.dispatchEvent(c):"player"==b&&a.s.dispatchEvent(c))}
L("shaka.cast.CastProxy",Lm);Lm.prototype.changeReceiverId=Lm.prototype.Ke;Lm.prototype.forceDisconnect=Lm.prototype.vb;Lm.prototype.suggestDisconnect=Lm.prototype.Uf;Lm.prototype.setAppData=Lm.prototype.Ld;Lm.prototype.cast=Lm.prototype.cast;Lm.prototype.receiverName=Lm.prototype.Fd;Lm.prototype.isCasting=Lm.prototype.ua;Lm.prototype.canCast=Lm.prototype.He;Lm.prototype.getPlayer=Lm.prototype.ff;Lm.prototype.getVideo=Lm.prototype.qf;Lm.prototype.destroy=Lm.prototype.destroy;function Wm(a,b,c,d){Le.call(this);var e=this;this.g=a;this.i=b;this.h=new cf;this.N={video:a,player:b};this.H=c||function(){};this.S=d||function(f){return f};this.j=null;this.J=!1;this.s=!0;this.m=0;this.F=!1;this.D=!0;this.u=this.l=null;this.L=new P(function(){Xm(e)});bn(this)}qa(Wm,Le);q=Wm.prototype;q.isConnected=function(){return this.J};q.uf=function(){return this.s};q.Qf=function(a){this.j=a};q.Ne=function(){this.j=null};
q.Rf=function(a){this.j||(this.j={metadataType:cast.receiver.media.MetadataType.GENERIC});this.j.title=a};q.Pf=function(a){this.j||(this.j={metadataType:cast.receiver.media.MetadataType.GENERIC});this.j.images=[{url:a}]};q.Of=function(a){this.j||(this.j={});this.j.artist=a;this.j.metadataType=cast.receiver.media.MetadataType.MUSIC_TRACK};
q.destroy=function(){var a=this,b,c;return I(function(d){if(1==d.g)return a.h&&(a.h.release(),a.h=null),b=[],a.i&&(b.push(a.i.destroy()),a.i=null),a.L&&(a.L.stop(),a.L=null),a.g=null,a.N=null,a.H=null,a.J=!1,a.s=!0,a.l=null,a.u=null,v(d,Promise.all(b),2);c=cast.receiver.CastReceiverManager.getInstance();c.stop();z(d)})};
function bn(a){var b=cast.receiver.CastReceiverManager.getInstance();b.onSenderConnected=function(){return cn(a)};b.onSenderDisconnected=function(){return cn(a)};b.onSystemVolumeChanged=function(){var e=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();e&&dn(a,{type:"update",update:{video:{volume:e.level,muted:e.muted}}},a.l);dn(a,{type:"event",targetName:"video",event:{type:"volumechange"}},a.l)};a.u=b.getCastMessageBus("urn:x-cast:com.google.cast.media");a.u.onMessage=function(e){return en(a,
e)};a.l=b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");a.l.onMessage=function(e){return fn(a,e)};b.start();b=t(nm);for(var c=b.next();!c.done;c=b.next())a.h.A(a.g,c.value,function(e){return gn(a,"video",e)});for(var d in Yl)a.h.A(a.i,Yl[d],function(e){return gn(a,"player",e)});cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?a.i.Nd(3840,2160):a.i.Nd(1920,1080);a.h.A(a.g,"loadeddata",function(){a.F=!0});a.h.A(a.i,"loading",function(){a.s=
!1;hn(a)});a.h.A(a.g,"playing",function(){a.s=!1;hn(a)});a.h.A(a.g,"pause",function(){hn(a)});a.h.A(a.i,"unloading",function(){a.s=!0;hn(a)});a.h.A(a.g,"ended",function(){(new P(function(){a.g&&a.g.ended&&(a.s=!0,hn(a))})).U(jn)})}function cn(a){a.m=0;a.D=!0;a.J=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;hn(a)}
function hn(a){var b;I(function(c){if(1==c.g)return v(c,Promise.resolve(),2);if(!a.i)return c["return"]();b=new Q("caststatuschanged");a.dispatchEvent(b);kn(a)||ln(a);z(c)})}
function mn(a,b,c){var d,e,f,g,h,k,l,m,n,p;I(function(r){switch(r.g){case 1:for(d in b.player)e=b.player[d],a.i[d](e);a.H(c);f=a.g.autoplay;return b.manifest?(a.g.autoplay=!1,A(r,5),v(r,a.i.load(b.manifest,b.startTime),7)):v(r,Promise.resolve(),3);case 7:va(r,3);break;case 5:return g=E(r),h=Ul,k=new Q(h,{detail:g}),a.i&&a.i.dispatchEvent(k),r["return"]();case 3:if(!a.i)return r["return"]();for(l in b.video)m=b.video[l],a.g[l]=m;for(n in b.playerAfterLoad)p=b.playerAfterLoad[n],a.i[n](p);a.g.autoplay=
f;b.manifest&&(a.g.play(),ln(a));z(r)}})}function gn(a,b,c){a.i&&(Xm(a),dn(a,{type:"event",targetName:b,event:c},a.l))}
function Xm(a){a.L.U(nn);for(var b={video:{},player:{}},c=t(om),d=c.next();!d.done;d=c.next())d=d.value,b.video[d]=a.g[d];if(a.i.X())for(var e in sm)0==a.m%sm[e]&&(b.player[e]=a.i[e]());for(var f in rm)0==a.m%rm[f]&&(b.player[f]=a.i[f]());if(c=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())b.video.volume=c.level,b.video.muted=c.muted;a.F&&(a.m+=1);dn(a,{type:"update",update:b},a.l);kn(a)}function kn(a){return a.D&&(a.g.duration||a.i.X())?(on(a),a.D=!1,!0):!1}
function on(a,b){var c={contentId:a.i.od(),streamType:a.i.X()?"LIVE":"BUFFERED",contentType:""};a.i.X()||(c.duration=a.g.duration);a.j&&(c.metadata=a.j);ln(a,void 0===b?0:b,c)}
function fn(a,b){var c=lm(b.data);switch(c.type){case "init":a.m=0;a.F=!1;a.D=!0;mn(a,c.initState,c.appData);Xm(a);break;case "appData":a.H(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}a.N[d][e]=c;break;case "call":d=a.N[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=c.targetName;e=
c.methodName;"player"==d&&"load"==e&&(a.m=0,a.F=!1);var g=c.id,h=b.senderId;f=a.N[d];c=f[e].apply(f,c.args);"player"==d&&"load"==e&&(c=c.then(function(){a.D=!0}));c.then(function(){return pn(a,h,g,null)},function(k){return pn(a,h,g,k)})}}
function en(a,b){var c=lm(b.data);switch(c.type){case "PLAY":a.g.play();ln(a);break;case "PAUSE":a.g.pause();ln(a);break;case "SEEK":var d=c.currentTime,e=c.resumeState;null!=d&&(a.g.currentTime=Number(d));e&&"PLAYBACK_START"==e?(a.g.play(),ln(a)):e&&"PLAYBACK_PAUSE"==e&&(a.g.pause(),ln(a));break;case "STOP":a.i.Sd().then(function(){a.i&&ln(a)});break;case "GET_STATUS":on(a,Number(c.requestId));break;case "VOLUME":e=c.volume;d=e.level;e=e.muted;var f=a.g.volume,g=a.g.muted;null!=d&&(a.g.volume=Number(d));
null!=e&&(a.g.muted=e);f==a.g.volume&&g==a.g.muted||ln(a);break;case "LOAD":a.m=0;a.F=!1;a.D=!1;d=c.media;e=c.currentTime;f=a.S(d.contentId);g=c.autoplay||!0;a.H(d.customData);g&&(a.g.autoplay=!0);a.i.load(f,e).then(function(){a.i&&on(a)})["catch"](function(h){var k="LOAD_FAILED";7==h.category&&7E3==h.code&&(k="LOAD_CANCELLED");dn(a,{requestId:Number(c.requestId),type:k},a.u)});break;default:dn(a,{requestId:Number(c.requestId),type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},a.u)}}
function pn(a,b,c,d){a.i&&dn(a,{type:"asyncComplete",id:c,error:d},a.l,b)}function dn(a,b,c,d){a.J&&(a=km(b),d?c.getCastChannel(d).send(a):c.broadcast(a))}function ln(a,b,c){c=void 0===c?null:c;var d={mediaSessionId:0,playbackRate:a.g.playbackRate,playerState:a.s?qn:a.i.rd()?rn:a.g.paused?sn:tn,currentTime:a.g.currentTime,supportedMediaCommands:63,volume:{level:a.g.volume,muted:a.g.muted}};c&&(d.media=c);dn(a,{requestId:void 0===b?0:b,type:"MEDIA_STATUS",status:[d]},a.u)}
L("shaka.cast.CastReceiver",Wm);Wm.prototype.destroy=Wm.prototype.destroy;Wm.prototype.setContentArtist=Wm.prototype.Of;Wm.prototype.setContentImage=Wm.prototype.Pf;Wm.prototype.setContentTitle=Wm.prototype.Rf;Wm.prototype.clearContentMetadata=Wm.prototype.Ne;Wm.prototype.setContentMetadata=Wm.prototype.Qf;Wm.prototype.isIdle=Wm.prototype.uf;Wm.prototype.isConnected=Wm.prototype.isConnected;var nn=.5,jn=5,qn="IDLE",tn="PLAYING",rn="BUFFERING",sn="PAUSED";function un(a){var b=this;this.g=[];this.h=[];this.data=[];(new jg).box("moov",ng).T("pssh",function(c){if(!(1<c.version)){var d=Ob(c.reader.P,-12,c.size);b.data.push(d);b.g.push(Oc(c.reader.$a(16)));if(0<c.version){d=c.reader.M();d=t(ib(d));for(var e=d.next();!e.done;e=d.next())e=Oc(c.reader.$a(16)),b.h.push(e)}}}).parse(a)}
function vn(a,b){var c=a.length,d=b.length+16+c,e=new Uint8Array(d),f=Sb(e),g=0;f.setUint32(g,d);g+=4;f.setUint32(g,1886614376);g+=4;f.setUint32(g,0);g+=4;e.set(b,g);g+=b.length;f.setUint32(g,c);e.set(a,g+4);return e}function wn(a){if(!a)return a;var b=new un(a);if(1>=b.data.length)return a;a=[];var c={};b=t(b.data);for(var d=b.next();!d.done;c={jc:c.jc},d=b.next())c.jc=d.value,a.some(function(e){return function(f){return Mb(f,e.jc)}}(c))||a.push(c.jc);return Pc.apply(Jc,ja(a))};function xn(a,b){var c=yn(a,b);return 1!=c.length?null:c[0]}function zn(a,b,c){a=An(a,b,c);return 1!=a.length?null:a[0]}function yn(a,b){return Array.from(a.childNodes).filter(function(c){return c instanceof Element&&c.tagName==b})}function Bn(a){return Array.from(a.childNodes).filter(function(b){return b instanceof Element})}function An(a,b,c){return Array.from(a.childNodes).filter(function(d){return d instanceof Element&&d.localName==c&&d.namespaceURI==b})}
function Cn(a,b,c){return a.hasAttributeNS(b,c)?a.getAttributeNS(b,c):null}function Dn(a){return Array.from(a.childNodes).every(En)?a.textContent.trim():null}function En(a){return a.nodeType==Node.TEXT_NODE||a.nodeType==Node.CDATA_SECTION_NODE}function Fn(a,b,c,d){d=void 0===d?null:d;var e=null;a=a.getAttribute(b);null!=a&&(e=c(a));return null==e?d:e}function Gn(a){if(!a)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a)&&(a+="Z");a=Date.parse(a);return isNaN(a)?null:Math.floor(a/1E3)}
function Hn(a){if(!a)return null;a=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);if(!a)return null;a=31536E3*Number(a[1]||null)+2592E3*Number(a[2]||null)+86400*Number(a[3]||null)+3600*Number(a[4]||null)+60*Number(a[5]||null)+Number(a[6]||null);return isFinite(a)?a:null}function In(a){var b=/([0-9]+)-([0-9]+)/.exec(a);if(!b)return null;a=Number(b[1]);if(!isFinite(a))return null;b=Number(b[2]);return isFinite(b)?{start:a,end:b}:null}
function Jn(a){a=Number(a);return 0===a%1?a:null}function Kn(a){a=Number(a);return 0===a%1&&0<a?a:null}function Ln(a){a=Number(a);return 0===a%1&&0<=a?a:null}function Mn(a){a=Number(a);return isNaN(a)?null:a}function Nn(a){var b;a=(b=a.match(/^(\d+)\/(\d+)$/))?Number(b[1])/Number(b[2]):Number(a);return isNaN(a)?null:a}
function On(a,b){var c=new DOMParser,d=null;try{d=c.parseFromString(a,"text/xml")}catch(e){return null}c=d.documentElement;return!c||c.getElementsByTagName("parsererror").length||d.documentElement.tagName!=b?null:c}function Pn(a,b){try{var c=Dc(a);return On(c,b)}catch(d){return null}};function Qn(a,b,c){var d=Rn(a),e=null;a=[];var f=[],g=new Set(d.map(function(h){return h.keyId}));g["delete"](null);if(1<g.size)throw new O(2,4,4010);b||(f=d.filter(function(h){return"urn:mpeg:dash:mp4protection:2011"==h.qe?(e=h.init||e,!1):!0}),f.length&&(a=Sn(e,f,c),0==a.length&&(a=[uc("",e)])));if(d.length&&(b||!f.length))for(a=[],b=t(Object.values(c)),c=b.next();!c.done;c=b.next())c=c.value,"org.w3.clearkey"!=c&&a.push(uc(c,e));if(g=Array.from(g)[0]||null)for(b=t(a),c=b.next();!c.done;c=b.next())for(c=
t(c.value.initData),d=c.next();!d.done;d=c.next())d.value.keyId=g;return{Xd:g,zg:e,drmInfos:a,ae:!0}}function Tn(a,b,c,d){var e=Qn(a,c,d);if(b.ae){a=1==b.drmInfos.length&&!b.drmInfos[0].keySystem;c=0==e.drmInfos.length;if(0==b.drmInfos.length||a&&!c)b.drmInfos=e.drmInfos;b.ae=!1}else if(0<e.drmInfos.length&&(b.drmInfos=b.drmInfos.filter(function(f){return e.drmInfos.some(function(g){return g.keySystem==f.keySystem})}),0==b.drmInfos.length))throw new O(2,4,4008);return e.Xd||b.Xd}
function Un(a){var b=0,c=Sb(a),d=c.getUint32(b,!0);if(d!=a.byteLength)return[];a:{a=b+6;for(b=[];a<c.byteLength-1;){d=c.getUint16(a,!0);a+=2;var e=c.getUint16(a,!0);a+=2;if(0!=(e&1)||e+a>c.byteLength){c=[];break a}var f=Ob(c,a,e);b.push({type:d,value:f});a+=e}c=b}return c}
function Vn(a){a=t(a.getElementsByTagName("DATA"));for(var b=a.next();!b.done;b=a.next()){b=t(b.value.childNodes);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c instanceof Element&&"LA_URL"==c.tagName)return c.textContent}return""}function Wn(a){a=zn(a.node,"urn:microsoft:playready","pro");if(!a)return"";a=Mc(a.textContent);a=Un(a).filter(function(b){return b.type===Xn})[0];if(!a)return"";a=Ec(a.value,!0);return(a=On(a,"WRMHEADER"))?Vn(a):""}
function Sn(a,b,c){var d=[];b=t(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=c[e.qe];if(f){var g;if(g=zn(e.node,"urn:microsoft:playready","pro")){g=Mc(g.textContent);var h=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);g=[{initData:vn(g,h),initDataType:"cenc",keyId:e.keyId}]}else g=null;g=uc(f,e.init||a||g);if(f=Yn.get(f))g.licenseServerUri=f(e);d.push(g)}}return d}
function Rn(a){var b=[];a=t(a);for(var c=a.next();!c.done;c=a.next())(c=Zn(c.value))&&b.push(c);return b}
function Zn(a){var b=a.getAttribute("schemeIdUri"),c=Cn(a,"urn:mpeg:cenc:2013","default_KID"),d=An(a,"urn:mpeg:cenc:2013","pssh").map(Dn);if(!b)return null;b=b.toLowerCase();if(c&&(c=c.replace(/-/g,"").toLowerCase(),c.includes(" ")))throw new O(2,4,4009);var e=[];try{e=d.map(function(f){return{initDataType:"cenc",initData:Mc(f),keyId:null}})}catch(f){throw new O(2,4,4007);}return{node:a,qe:b,keyId:c,init:0<e.length?e:null}}
var Xn=1,Yn=(new Map).set("com.widevine.alpha",function(a){return(a=zn(a.node,"urn:microsoft","laurl"))?a.getAttribute("licenseUrl")||"":""}).set("com.microsoft.playready",Wn).set("com.microsoft.playready.recommendation",Wn).set("com.microsoft.playready.software",Wn).set("com.microsoft.playready.hardware",Wn);function $n(a,b,c,d,e){var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(g,h,k,l){if("$$"==g)return"$";var m=f[h];if(null==m)return g;"RepresentationID"==h&&k&&(k=void 0);"Time"==h&&(m=Math.round(m));switch(l){case void 0:case "d":case "i":case "u":g=m.toString();break;case "o":g=m.toString(8);break;case "x":g=m.toString(16);break;case "X":g=m.toString(16).toUpperCase();break;default:g=m.toString()}k=
window.parseInt(k,10)||1;return Array(Math.max(0,k-g.length)+1).join("0")+g})}
function ao(a,b){var c=bo(a,b,"timescale"),d=1;c&&(d=Kn(c)||1);var e=bo(a,b,"duration");c=Kn(e||"");"image"==a.K.contentType&&(c=Mn(e||""));c&&(c/=d);var f=bo(a,b,"startNumber");e=Number(bo(a,b,"presentationTimeOffset"))||0;var g=Ln(f||"");if(null==f||null==g)g=1;var h=co(a,b,"SegmentTimeline");f=null;if(h){f=d;var k=a.W.duration||Infinity,l=yn(h,"S");h=[];var m=-e;l=t(kb(l));for(var n=l.next();!n.done;n=l.next()){n=n.value;var p=n.item,r=n.next,u=Fn(p,"t",Ln);n=Fn(p,"d",Ln);var w=Fn(p,"r",Jn);null!=
u&&(u-=e);if(!n)break;p=null!=u?u:m;u=w||0;if(0>u)if(r){r=Fn(r,"t",Ln);if(null==r)break;else if(p>=r)break;u=Math.ceil((r-p)/n)-1}else{if(Infinity==k)break;else if(p/f>=k)break;u=Math.ceil((k*f-p)/n)-1}0<h.length&&p!=m&&(h[h.length-1].end=p/f);r=t(ib(u+1));for(u=r.next();!u.done;u=r.next())m=p+n,h.push({start:p/f,end:m/f,Zf:p}),p=m}f=h}return{timescale:d,ia:c,Gb:g,Ta:e/d||0,Td:e,timeline:f}}
function bo(a,b,c){return[b(a.K),b(a.ka),b(a.fa)].filter($b).map(function(d){return d.getAttribute(c)}).reduce(function(d,e){return d||e})}function co(a,b,c){return[b(a.K),b(a.ka),b(a.fa)].filter($b).map(function(d){return xn(d,c)}).reduce(function(d,e){return d||e})}
function eo(a,b,c,d,e,f){for(var g=Cn(a,"http://www.w3.org/1999/xlink","href"),h=Cn(a,"http://www.w3.org/1999/xlink","actuate")||"onRequest",k=t(Array.from(a.attributes)),l=k.next();!l.done;l=k.next())l=l.value,"http://www.w3.org/1999/xlink"==l.namespaceURI&&a.removeAttributeNS(l.namespaceURI,l.localName);if(5<=f)return Fe(new O(2,4,4028));if("onLoad"!=h)return Fe(new O(2,4,4027));var m=tc([d],[g]);return e.request(0,Ue(m,b)).ba(function(n){n=Pn(n.data,a.tagName);if(!n)return Fe(new O(2,4,4001,g));
for(;a.childNodes.length;)a.removeChild(a.childNodes[0]);for(;n.childNodes.length;){var p=n.childNodes[0];n.removeChild(p);a.appendChild(p)}n=t(Array.from(n.attributes));for(p=n.next();!p.done;p=n.next())a.setAttributeNode(p.value.cloneNode(!1));return fo(a,b,c,m[0],e,f+1)})}
function fo(a,b,c,d,e,f){f=void 0===f?0:f;if(Cn(a,"http://www.w3.org/1999/xlink","href")){var g=eo(a,b,c,d,e,f);c&&(g=g.ba(void 0,function(){return fo(a,b,c,d,e,f)}));return g}g=[];for(var h=t(Array.from(a.childNodes)),k=h.next();!k.done;k=h.next())k=k.value,k instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==Cn(k,"http://www.w3.org/1999/xlink","href")?a.removeChild(k):"SegmentTimeline"!=k.tagName&&g.push(fo(k,b,c,d,e,f)));return Je(g).ba(function(){return a})};function go(a,b,c,d,e,f,g){var h,k=(new jg).T("sidx",function(l){h=ho(b,d,e,f,g,c,l)});a&&k.parse(a);if(h)return h;throw new O(2,3,3004);}
function ho(a,b,c,d,e,f,g){var h=[];g.reader.skip(4);var k=g.reader.M();if(0==k)throw new O(2,3,3005);if(0==g.version){var l=g.reader.M();var m=g.reader.M()}else l=g.reader.Fb(),m=g.reader.Fb();g.reader.skip(2);var n=g.reader.Eb();a=a+g.size+m;n=t(ib(n));for(m=n.next();!m.done;m=n.next()){var p=g.reader.M();m=(p&2147483648)>>>31;p&=2147483647;var r=g.reader.M();g.reader.skip(4);if(1==m)throw new O(2,3,3006);h.push(new li(l/k+c,(l+r)/k+c,function(){return f},a,a+p-1,b,c,d,e));l+=r;a+=p}g.parser.stop();
return h};function io(a){this.h=Sb(a);this.g=new gg(this.h,0)}io.prototype.na=function(){return this.g.na()};
function jo(a){var b=ko(a);if(7<b.length)throw new O(2,3,3002);var c=0;b=t(b);for(var d=b.next();!d.done;d=b.next())c=256*c+d.value;b=ko(a);a:{d=t(lo);for(var e=d.next();!e.done;e=d.next())if(Mb(b,new Uint8Array(e.value))){d=!0;break a}d=!1}if(d)b=a.h.byteLength-a.g.Z();else{if(8==b.length&&b[1]&224)throw new O(2,3,3001);d=0;e=t(kb(b));for(var f=e.next();!f.done;f=e.next()){f=f.value;var g=f.item;d=0==f.ha?g&(1<<8-b.length)-1:256*d+g}b=d}b=a.g.Z()+b<=a.h.byteLength?b:a.h.byteLength-a.g.Z();d=Sb(a.h,
a.g.Z(),b);a.g.skip(b);return new mo(c,d)}function ko(a){var b=a.g.Z(),c=a.g.$();if(0==c)throw new O(2,3,3002);c=8-Math.floor(Math.log2(c));a.g.skip(c-1);return Ob(a.h,b,c)}var lo=[[255],[127,255],[63,255,255],[31,255,255,255],[15,255,255,255,255],[7,255,255,255,255,255],[3,255,255,255,255,255,255],[1,255,255,255,255,255,255,255]];function mo(a,b){this.id=a;this.g=b}
function no(a){if(8<a.g.byteLength)throw new O(2,3,3002);if(8==a.g.byteLength&&a.g.getUint8(0)&224)throw new O(2,3,3001);for(var b=0,c=t(ib(a.g.byteLength)),d=c.next();!d.done;d=c.next())d=a.g.getUint8(d.value),b=256*b+d;return b};function oo(a,b,c,d,e,f,g,h,k){function l(){return e}var m=[];a=new io(a.g);for(var n=null,p=null;a.na();){var r=jo(a);if(187==r.id){var u=po(r);u&&(r=c*u.$f,u=b+u.If,null!=n&&m.push(new li(n+g,r+g,l,p,u-1,f,g,h,k)),n=r,p=u)}}null!=n&&m.push(new li(n+g,d+g,l,p,null,f,g,h,k));return m}
function po(a){var b=new io(a.g);a=jo(b);if(179!=a.id)throw new O(2,3,3013);a=no(a);b=jo(b);if(183!=b.id)throw new O(2,3,3012);b=new io(b.g);for(var c=0;b.na();){var d=jo(b);if(241==d.id){c=no(d);break}}return{$f:a,If:c}};function qo(a,b){var c=co(a,b,"Initialization");if(!c)return null;var d=a.K.za,e=c.getAttribute("sourceURL");e&&(d=tc(a.K.za,[e]));e=0;var f=null;if(c=Fn(c,"range",In))e=c.start,f=c.end;return new ji(function(){return d},e,f)}
function ro(a,b){var c=Number(bo(a,so,"presentationTimeOffset"))||0,d=bo(a,so,"timescale"),e=1;d&&(e=Kn(d)||1);var f=c/e||0,g=qo(a,so);to(a,g);var h=Ne(a);return{wb:function(){var k=co(h,so,"RepresentationIndex"),l=h.K.za;k&&(k=k.getAttribute("sourceURL"))&&(l=tc(h.K.za,[k]));k=uo(h);return vo(h,b,g,l,k.start,k.end,f)}}}
function vo(a,b,c,d,e,f,g){var h,k,l,m,n,p,r,u,w,y,x,C,D,B,F;return I(function(G){if(1==G.g)return h=a.presentationTimeline,k=!a.cb||!a.W.ge,l=a.W.start,m=a.W.duration,n=a.K.mimeType.split("/")[1],p=b,r=null,u=[p(d,e,f),"webm"==n?p(c.ma(),c.ja,c.ea):null],p=null,v(G,Promise.all(u),2);w=G.h;y=w[0];x=w[1]||null;C=null;D=l-g;B=l;F=m?l+m:Infinity;if("mp4"==n)var H=go(y,e,d,c,D,B,F);else{H=new io(x);if(440786851!=jo(H).id)throw new O(2,3,3008);var M=jo(H);if(408125543!=M.id)throw new O(2,3,3009);H=M.g.byteOffset;
M=new io(M.g);for(var J=null;M.na();){var K=jo(M);if(357149030==K.id){J=K;break}}if(!J)throw new O(2,3,3010);J=new io(J.g);K=1E6;for(M=null;J.na();){var R=jo(J);if(2807729==R.id)K=no(R);else if(17545==R.id)if(4==R.g.byteLength)M=R.g.getFloat32(0);else if(8==R.g.byteLength)M=R.g.getFloat64(0);else throw new O(2,3,3003);}if(null==M)throw new O(2,3,3011);J=K/1E9;M*=J;K=jo(new io(y));if(475249515!=K.id)throw new O(2,3,3007);H=oo(K,H,J,M,d,c,D,B,F)}C=H;h.Bb(C);r=new V(C);k&&r.Ya(B,F,!0);return G["return"](r)})}
function so(a){return a.dc}function uo(a){var b=co(a,so,"RepresentationIndex");a=bo(a,so,"indexRange");a=In(a||"");b&&(a=Fn(b,"range",In,a));return a}function to(a,b){wo(a,b);if(!uo(a))throw new O(2,4,4002);}function wo(a,b){var c=a.K.mimeType.split("/")[1];if(a.K.contentType!=yc&&"mp4"!=c&&"webm"!=c)throw new O(2,4,4006);if("webm"==c&&!b)throw new O(2,4,4005);};function xo(a,b){var c=qo(a,yo),d=zo(a);if(!d.ia&&!d.timeline&&1<d.zb.length)throw new O(2,4,4002);if(!d.ia&&!a.W.duration&&!d.timeline&&1==d.zb.length)throw new O(2,4,4002);if(d.timeline&&0==d.timeline.length)throw new O(2,4,4002);var e=null,f=null;a.fa.id&&a.K.id&&(f=a.fa.id+","+a.K.id,e=b[f]);c=Ao(a.W.start,a.W.duration,a.K.za,d,c);d=!e;e?e.Ab(c,a.presentationTimeline.Za()):(a.presentationTimeline.Bb(c),e=new V(c),f&&a.cb&&(b[f]=e));a.cb&&a.W.ge||e.Ya(a.W.start,a.W.duration?a.W.start+a.W.duration:
Infinity,d);return{wb:function(){return Promise.resolve(e)}}}function yo(a){return a.ab}function zo(a){var b=Bo(a);a=ao(a,yo);var c=a.Gb;0==c&&(c=1);var d=0;a.ia?d=a.ia*(c-1):a.timeline&&0<a.timeline.length&&(d=a.timeline[0].start);return{ia:a.ia,startTime:d,Gb:c,Ta:a.Ta,timeline:a.timeline,zb:b}}
function Ao(a,b,c,d,e){var f=d.zb.length;d.timeline&&d.timeline.length!=d.zb.length&&(f=Math.min(d.timeline.length,d.zb.length));var g=a-d.Ta,h=b?a+b:Infinity,k=[],l=d.startTime,m={};f=t(ib(f));for(var n=f.next();!n.done;m={Vc:m.Vc},n=f.next()){n=n.value;var p=d.zb[n];m.Vc=tc(c,[p.xf]);var r=void 0;r=null!=d.ia?l+d.ia:d.timeline?d.timeline[n].end:l+b;k.push(new li(a+l,a+r,function(u){return function(){return u.Vc}}(m),p.start,p.end,e,g,a,h));l=r}return k}
function Bo(a){return[a.K.ab,a.ka.ab,a.fa.ab].filter($b).map(function(b){return yn(b,"SegmentURL")}).reduce(function(b,c){return 0<b.length?b:c}).map(function(b){b.getAttribute("indexRange")&&!a.ee&&(a.ee=!0);var c=b.getAttribute("media");b=Fn(b,"mediaRange",In,{start:0,end:null});return{xf:c,start:b.start,end:b.end}})};function Co(a,b,c,d,e,f){var g=Do(a),h=Eo(a);Fo(h);var k=Ne(a);if(h.Yb)return wo(a,g),{wb:function(){var u=$n(h.Yb,k.K.id,null,k.bandwidth||null,null);u=tc(k.K.za,[u]);return vo(k,b,g,u,0,null,h.Ta)}};if(h.ia)return d||(a.presentationTimeline.yd(h.ia),a.presentationTimeline.zd(a.W.start)),{wb:function(){return Go(k,h,e,g,f)}};var l=null;d=null;a.fa.id&&a.K.id&&(d=a.fa.id+","+a.K.id,l=c[d]);var m=Ho(k,h,g),n=a.W.start,p=a.W.duration?a.W.start+a.W.duration:Infinity,r=Infinity!=p;l?(r&&(new V(m)).Ya(n,
p,!0),l.Ab(m,a.presentationTimeline.Za())):(a.presentationTimeline.Bb(m),l=new V(m),d&&a.cb&&(c[d]=l));r&&l.Ya(n,p);return{wb:function(){return Promise.resolve(l)}}}function Io(a){return a.ec}function Eo(a){var b=ao(a,Io),c=bo(a,Io,"media");a=bo(a,Io,"index");return{ia:b.ia,timescale:b.timescale,Gb:b.Gb,Ta:b.Ta,Td:b.Td,timeline:b.timeline,xd:c,Yb:a}}
function Fo(a){var b=a.Yb?1:0;b+=a.timeline?1:0;b+=a.ia?1:0;if(0==b)throw new O(2,4,4002);1!=b&&(a.Yb&&(a.timeline=null),a.ia=null);if(!a.Yb&&!a.xd)throw new O(2,4,4002);}
function Go(a,b,c,d,e){function f(J){var K=(J-r)*p,R=K+b.Ta,S=K+l;K=S+p;var X=Math.min(K,h());S=new li(S,X,function(){var T=$n(w,x,J,y,R*u);return tc(C,[T])},0,null,d,D,l,h());S.j=K;return S}function g(){var J=[Math.max(k.Za(),l),Math.min(k.gb(),h())].map(function(K){return K-l});return[Math.ceil(J[0]/p),Math.ceil(J[1]/p)-1].map(function(K){return K+r})}function h(){var J=null!=m&&e[m]||n;return J?l+J:Infinity}var k=a.presentationTimeline,l=a.W.start,m=a.fa.id,n=a.W.duration,p=b.ia,r=b.Gb,u=b.timescale,
w=b.xd,y=a.bandwidth||null,x=a.K.id,C=a.K.za,D=l-b.Ta,B=g();a=a.cb?Math.max(B[0],B[1]-c+1):B[0];B=B[1];c=[];for(var F=a;F<=B;++F){var G=f(F);c.push(G)}var H=new V(c);c=k.gb()<h();F=k.X();if(c||F){var M=Math.max(a,B+1);H.Mc(p,function(){var J=k.Za();H.eb(J);var K=t(g());K.next();K=K.next().value;for(var R=[];M<=K;){var S=f(M);R.push(S);M++}return J>h()&&!R.length?null:R})}return Promise.resolve(H)}
function Ho(a,b,c){var d=a.W.start,e=a.W.duration,f=d-b.Ta;e=e?d+e:Infinity;for(var g=[],h={},k=t(kb(b.timeline)),l=k.next();!l.done;h={Uc:h.Uc,Yc:h.Yc,bd:h.bd,Rc:h.Rc,dd:h.dd,Sc:h.Sc},l=k.next()){l=l.value;var m=l.item,n=m.start,p=m.Zf;m=m.end;h.bd=l.ha+b.Gb;h.dd=p+b.Td;h.Yc=a.K.id;h.Rc=a.bandwidth||null;h.Uc=b.xd;h.Sc=a.K.za;g.push(new li(d+n,d+m,function(r){return function(){var u=$n(r.Uc,r.Yc,r.bd,r.Rc||null,r.dd);return tc(r.Sc,[u]).map(function(w){return w.toString()})}}(h),0,null,c,f,d,e))}return g}
function Do(a){var b=bo(a,Io,"initialization");if(!b)return null;var c=a.K.id,d=a.bandwidth||null,e=a.K.za;return new ji(function(){var f=$n(b,c,null,d,null);return tc(e,[f])},0,null)};function Jo(){this.l=[];this.g=[];this.h=[];this.j=[];this.i=[];this.m=new Set}Jo.prototype.release=function(){for(var a=t(this.g.concat(this.h,this.j,this.i)),b=a.next();!b.done;b=a.next())b=b.value,b.segmentIndex&&b.segmentIndex.release();this.g=[];this.h=[];this.j=[];this.i=[];this.l=[]};
function Ko(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S,X,T,N,ea,fa,ya,Ga,ub;return I(function(Ra){switch(Ra.g){case 1:d=zc;Lo(b);Mo(b);No(b);Oo(b);if(!c&&1==b.length){e=b[0];a.g=e.tc;a.h=e.Oc;a.j=e.textStreams;a.i=e.imageStreams;Ra.v(2);break}f=-1;g=t(kb(b));for(h=g.next();!h.done;h=g.next())l=k=h.value,m=l.ha,n=l.item,a.m.has(n.id)||(a.m.add(n.id),-1==f&&(f=m));if(-1==f)return Ra["return"]();p=b.map(function(Da){return Da.tc});r=b.map(function(Da){return Da.Oc});u=b.map(function(Da){return Da.textStreams});
w=b.map(function(Da){return Da.imageStreams});y=t(u);for(x=y.next();!x.done;x=y.next())C=x.value,C.push(Po(d.aa));D=t(w);for(B=D.next();!B.done;B=D.next())F=B.value,F.push(Po(d.Mb));return v(Ra,Qo(a.g,p,f,Ro,So),3);case 3:return v(Ra,Qo(a.h,r,f,Ro,So),4);case 4:return v(Ra,Qo(a.j,u,f,Ro,So),5);case 5:return v(Ra,Qo(a.i,w,f,Ro,So),2);case 2:G=0;H=[];if(a.h.length&&a.g.length)for(X=t(a.g),T=X.next();!T.done;T=X.next())for(N=T.value,ea=t(a.h),fa=ea.next();!fa.done;fa=ea.next())ya=fa.value,Ga=Zf(N.drmInfos,
ya.drmInfos),N.drmInfos.length&&ya.drmInfos.length&&!Ga.length||(ub=G++,H.push({id:ub,language:N.language,primary:N.primary,audio:N,video:ya,bandwidth:(N.bandwidth||0)+(ya.bandwidth||0),drmInfos:Ga,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]}));else for(M=a.h.concat(a.g),J=t(M),K=J.next();!K.done;K=J.next())R=K.value,S=G++,H.push({id:S,language:R.language,primary:R.primary,audio:R.type==d.bb?R:null,video:R.type==d.Na?R:null,bandwidth:R.bandwidth||0,drmInfos:R.drmInfos,allowedByApplication:!0,
allowedByKeySystem:!0,decodingInfos:[]});a.l=H;z(Ra)}})}
function Lo(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.tc),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.channelsCount==h.channelsCount&&e.language==h.language&&e.bandwidth==h.bandwidth&&e.label==h.label&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&ob(e.roles,h.roles)&&e.audioSamplingRate==h.audioSamplingRate&&e.primary==h.primary&&(f=!0);f||c.push(e)}b.tc=c}}
function No(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.textStreams),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.language==h.language&&e.label==h.label&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&ob(e.roles,h.roles)&&(f=!0);f||c.push(e)}b.textStreams=c}}
function Mo(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.Oc),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.width==h.width&&e.frameRate==h.frameRate&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&e.label==h.label&&ob(e.roles,h.roles)&&nf(e.closedCaptions,h.closedCaptions)&&e.bandwidth==h.bandwidth&&(f=!0);f||c.push(e)}b.Oc=c}}
function Oo(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.imageStreams),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.width==h.width&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&(f=!0);f||c.push(e)}b.imageStreams=c}}
function To(a){var b,c,d,e,f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R;return I(function(S){switch(S.g){case 1:b=zc;if(1==a.length)return S["return"](a[0]);c=a.map(function(X){return X.filter(function(T){return T.type==b.bb})});d=a.map(function(X){return X.filter(function(T){return T.type==b.Na})});e=a.map(function(X){return X.filter(function(T){return T.type==b.aa})});f=a.map(function(X){return X.filter(function(T){return T.type==b.Mb})});g=t(e);for(h=g.next();!h.done;h=g.next())k=h.value,k.push(Uo(b.aa));
l=t(f);for(m=l.next();!m.done;m=l.next())n=m.value,n.push(Uo(b.Mb));return v(S,Qo([],c,0,Vo,Wo),2);case 2:return p=S.h,v(S,Qo([],d,0,Vo,Wo),3);case 3:return r=S.h,v(S,Qo([],e,0,Vo,Wo),4);case 4:return u=S.h,v(S,Qo([],f,0,Vo,Wo),5);case 5:w=S.h;y=0;if(r.length&&p.length)for(F=t(p),G=F.next();!G.done;G=F.next())for(H=G.value,M=t(r),J=M.next();!J.done;J=M.next())K=J.value,R=y++,K.variantIds.push(R),H.variantIds.push(R);else for(x=r.concat(p),C=t(x),D=C.next();!D.done;D=C.next())B=D.value,B.variantIds=
[y++];return S["return"](r.concat(p).concat(u).concat(w))}})}
function Qo(a,b,c,d,e){var f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S,X,T;return I(function(N){switch(N.g){case 1:f=zc;g=[];h=t(kb(b));for(k=h.next();!k.done;k=h.next())m=l=k.value,n=m.ha,p=m.item,n>=c?g.push(new Set(p)):g.push(new Set);r=t(a);u=r.next();case 2:if(u.done){N.v(4);break}w=u.value;return v(N,Xo(w,b,c,e,g),5);case 5:y=N.h;if(!y)throw new O(2,4,4037);u=r.next();N.v(2);break;case 4:x=t(g),C=x.next();case 6:if(C.done){N.v(8);break}D=C.value;B=t(D);F=B.next();case 9:if(F.done){C=x.next();
N.v(6);break}G=F.value;return v(N,Yo(G,b,d,e,g),12);case 12:(H=N.h)&&a.push(H);F=B.next();N.v(9);break;case 8:M=t(g);for(C=M.next();!C.done;C=M.next())for(J=C.value,K={},R=t(J),F=R.next();!F.done;K={Va:K.Va},F=R.next())if(K.Va=F.value,S=K.Va.type==f.aa&&!K.Va.language,X=K.Va.type==f.Mb&&!K.Va.tilesLayout,!S&&!X&&(T=a.some(function(ea){return function(fa){return fa.mimeType==ea.Va.mimeType&&Xc(fa.codecs)==Xc(ea.Va.codecs)}}(K))))throw new O(2,4,4037);return N["return"](a)}})}
function Xo(a,b,c,d,e){var f;return I(function(g){if(1==g.g)return(f=Zo(b,a))?v(g,$o(f),2):g["return"](!1);ap(a,f,c,d,e);return g["return"](!0)})}function $o(a){var b=[];a=t(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b.push(c.createSegmentIndex()),c.trickModeVideo&&!c.trickModeVideo.segmentIndex&&b.push(c.trickModeVideo.createSegmentIndex());return Promise.all(b)}
function Yo(a,b,c,d,e){var f,g;return I(function(h){if(1==h.g)return f=c(a),(g=Zo(b,f))?f.createSegmentIndex?v(h,$o(g),2):h.v(2):h["return"](null);ap(f,g,0,d,e);return h["return"](f)})}function ap(a,b,c,d,e){b=t(kb(b));for(var f=b.next();!f.done;f=b.next()){var g=f.value;f=g.ha;g=g.item;if(f>=c){d(a,g);var h=!0;"audio"==a.type&&0==md(a.language,g.language)&&(h=!1);h&&e[f]["delete"](g)}}}
function Ro(a){a=Object.assign({},a);a.originalId=null;a.createSegmentIndex=function(){return Promise.resolve()};a.segmentIndex=new Ki;a.emsgSchemeIdUris=[];a.keyIds=new Set;a.closedCaptions=null;a.trickModeVideo=null;return a}function Vo(a){a=Object.assign({},a);a.keyIds=new Set;a.segments=[];a.variantIds=[];a.closedCaptions=null;return a}
function So(a,b){a.roles=Array.from(new Set(a.roles.concat(b.roles)));b.emsgSchemeIdUris&&(a.emsgSchemeIdUris=Array.from(new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))));var c=b.keyIds;c=new Set([].concat(ja(a.keyIds),ja(c)));a.keyIds=c;null==a.originalId?a.originalId=b.originalId:a.originalId+=","+(b.originalId||"");c=Zf(a.drmInfos,b.drmInfos);if(b.drmInfos.length&&a.drmInfos.length&&!c.length)throw new O(2,4,4038);a.drmInfos=c;a.encrypted=a.encrypted||b.encrypted;if(b.closedCaptions){a.closedCaptions||
(a.closedCaptions=new Map);c=t(b.closedCaptions);for(var d=c.next();!d.done;d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;a.closedCaptions.set(d,e)}}a.segmentIndex.l.push(b.segmentIndex);b.trickModeVideo?(a.trickModeVideo||(a.trickModeVideo=Ro(b.trickModeVideo),a.trickModeVideo.segmentIndex=a.segmentIndex.clone()),So(a.trickModeVideo,b.trickModeVideo)):a.trickModeVideo&&So(a.trickModeVideo,b)}
function Wo(a,b){a.roles=Array.from(new Set(a.roles.concat(b.roles)));var c=b.keyIds;c=new Set([].concat(ja(a.keyIds),ja(c)));a.keyIds=c;a.encrypted=a.encrypted&&b.encrypted;a.segments.push.apply(a.segments,ja(b.segments));if(b.closedCaptions){a.closedCaptions||(a.closedCaptions=new Map);c=t(b.closedCaptions);for(var d=c.next();!d.done;d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;a.closedCaptions.set(d,e)}}}
function Zo(a,b){for(var c=[],d=t(a),e=d.next();!e.done;e=d.next()){var f=b,g={audio:bp,video:bp,text:cp,image:dp}[f.type],h={audio:ep,video:fp,text:gp,image:hp}[f.type],k=null;e=t(e.value);for(var l=e.next();!l.done;l=e.next())l=l.value,!g(f,l)||k&&!h(f,k,l)||(k=l);f=k;if(!f)return null;c.push(f)}return c}function bp(a,b){var c;if(!(c=b.mimeType!=a.mimeType||Xc(b.codecs)!=Xc(a.codecs))&&(c=a.drmInfos)){c=a.drmInfos;var d=b.drmInfos;c=!(c.length&&d.length?0<Zf(c,d).length:1)}return c?!1:!0}
function cp(a,b){return a.language?b.language?0==md(a.language,b.language)||b.kind!=a.kind?!1:!0:!0:!1}function dp(a){return a.tilesLayout?!0:!1}
function ep(a,b,c){if(a.id==c.id)return!0;var d=md(a.language,b.language),e=md(a.language,c.language);if(e>d)return!0;if(e<d)return!1;if(!b.primary&&c.primary)return!0;if(b.primary&&!c.primary)return!1;if(a.roles.length)return d=b.roles.filter(function(f){return a.roles.includes(f)}),e=c.roles.filter(function(f){return a.roles.includes(f)}),e.length>d.length?!0:e.length<d.length?!1:c.roles.length<b.roles.length;if(!c.roles.length&&b.roles.length)return!0;if(c.roles.length&&!b.roles.length)return!1;
d=ip(a.channelsCount,b.channelsCount,c.channelsCount);if(d==jp)return!0;if(d==kp)return!1;d=ip(a.audioSamplingRate,b.audioSamplingRate,c.audioSamplingRate);return d==jp?!0:d==kp?!1:a.bandwidth&&lp(a.bandwidth,b.bandwidth,c.bandwidth)==jp?!0:!1}
function fp(a,b,c){if(a.id==c.id)return!0;var d=ip(a.width*a.height,b.width*b.height,c.width*c.height);if(d==jp)return!0;if(d==kp)return!1;if(a.frameRate){d=ip(a.frameRate,b.frameRate,c.frameRate);if(d==jp)return!0;if(d==kp)return!1}return a.bandwidth&&lp(a.bandwidth,b.bandwidth,c.bandwidth)==jp?!0:!1}
function gp(a,b,c){if(a.id==c.id)return!0;var d=md(a.language,b.language),e=md(a.language,c.language);if(e>d)return!0;if(e<d)return!1;if(!b.primary&&c.primary)return!0;if(b.primary&&!c.primary)return!1;if(a.roles.length){d=b.roles.filter(function(f){return a.roles.includes(f)});e=c.roles.filter(function(f){return a.roles.includes(f)});if(e.length>d.length)return!0;if(e.length<d.length)return!1}else{if(!c.roles.length&&b.roles.length)return!0;if(c.roles.length&&!b.roles.length)return!1}return c.mimeType!=
a.mimeType||c.codecs!=a.codecs||b.mimeType==a.mimeType&&b.codecs==a.codecs?!1:!0}function hp(a,b,c){return a.id==c.id?!0:ip(a.width*a.height,b.width*b.height,c.width*c.height)==jp?!0:!1}function Uo(a){return{id:0,originalId:"",primary:!1,type:a,mimeType:"",codecs:"",language:"",label:null,width:null,height:null,encrypted:!1,keyIds:new Set,segments:[],variantIds:[],roles:[],forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null}}
function Po(a){return{id:0,originalId:"",createSegmentIndex:function(){return Promise.resolve()},segmentIndex:new V([]),mimeType:"",codecs:"",encrypted:!1,drmInfos:[],keyIds:new Set,language:"",label:null,type:a,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null}}
function ip(a,b,c){if(b==a&&a!=c)return kp;if(c==a&&a!=b)return jp;if(b>a){if(c<=a||c-a<b-a)return jp;if(c-a>b-a)return kp}else{if(c>a)return kp;if(a-c<a-b)return jp;if(a-c>a-b)return kp}return mp}function lp(a,b,c){b=Math.abs(a-b);a=Math.abs(a-c);return a<b?jp:b<a?kp:mp}var jp=1,mp=0,kp=-1;function np(){var a=this;this.C=this.o=null;this.h=[];this.B=null;this.D=1;this.l={};this.H={};this.g=new Jo;this.u=0;this.F=new Oa(5);this.s=new P(function(){a.$b()});this.i=new Oe;this.j=Infinity;this.m=!1}q=np.prototype;q.configure=function(a){this.o=a};q.start=function(a,b){var c=this,d;return I(function(e){if(1==e.g)return c.m=b.isLowLatencyMode(),c.h=[a],c.C=b,v(e,op(c),2);d=e.h;c.C&&pp(c,d);if(!c.C)throw new O(2,7,7001);return e["return"](c.B)})};
q.stop=function(){for(var a=t(Object.values(this.l)),b=a.next();!b.done;b=a.next())b.value.release();this.g&&this.g.release();this.o=this.C=null;this.h=[];this.B=null;this.l={};this.g=null;null!=this.s&&(this.s.stop(),this.s=null);return this.i.destroy()};q.update=function(){var a=this,b;return I(function(c){if(1==c.g)return A(c,2),v(c,op(a),4);if(2!=c.g)return va(c,0);b=E(c);if(!a.C||!b)return c["return"]();a.C.onError(b);z(c)})};q.onExpirationUpdated=function(){};
function op(a){var b,c,d,e,f,g,h;return I(function(k){if(1==k.g)return b=Ue(a.h,a.o.retryParameters),c=a.C.networkingEngine,d=Date.now(),e=c.request(0,b),Pe(a.i,e),v(k,e.promise,2);if(3!=k.g){f=k.h;if(!a.C)return k["return"](0);f.uri&&!a.h.includes(f.uri)&&a.h.unshift(f.uri);return v(k,qp(a,f.data,f.uri),3)}g=Date.now();h=(g-d)/1E3;Pa(a.F,1,h);return k["return"](h)})}
function qp(a,b,c){var d,e,f,g,h;return I(function(k){if(1==k.g){d=Pn(b,"MPD");if(!d)throw new O(2,4,4001,c);if(e=a.o.dash.disableXlinkProcessing)return k["return"](rp(a,d,c));f=a.o.dash.xlinkFailGracefully;g=fo(d,a.o.retryParameters,f,c,a.C.networkingEngine);Pe(a.i,g);return v(k,g.promise,2)}h=k.h;return k["return"](rp(a,h,c))})}
function rp(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S,X,T,N,ea,fa,ya;return I(function(Ga){switch(Ga.g){case 1:(d=a.o.dash.manifestPreprocessor)&&d(b);e=[c];f=yn(b,"Location").map(Dn).filter($b);0<f.length&&(g=tc(e,f),e=a.h=g);h=yn(b,"BaseURL");k=h.map(Dn);l=tc(e,k);m=0;h&&h.length&&(m=Fn(h[0],"availabilityTimeOffset",Mn)||0);n=a.o.dash.ignoreMinBufferTime;p=0;n||(p=Fn(b,"minBufferTime",Hn)||0);a.u=Fn(b,"minimumUpdatePeriod",Hn,-1);r=Fn(b,"availabilityStartTime",Gn);u=Fn(b,"timeShiftBufferDepth",
Hn);w=a.o.dash.ignoreSuggestedPresentationDelay;y=null;w||(y=Fn(b,"suggestedPresentationDelay",Hn));x=a.o.dash.ignoreMaxSegmentDuration;C=null;x||(C=Fn(b,"maxSegmentDuration",Hn));D=b.getAttribute("type")||"static";if(a.B)for(B=a.B.presentationTimeline,F=t(Object.values(a.l)),G=F.next();!G.done;G=F.next())H=G.value,H.eb(B.Za());else M=a.o.defaultPresentationDelay||1.5*p,J=null!=y?y:M,B=new U(r,J,a.o.dash.autoCorrectDrift);K=b.getAttribute("profiles")||"";R={cb:"static"!=D,presentationTimeline:B,fa:null,
W:null,ka:null,K:null,bandwidth:0,ee:!1,ub:m,profiles:K.split(",")};var ub=Fn(b,"mediaPresentationDuration",Hn),Ra=[],Da=0,gc=yn(b,"Period");gc=t(kb(gc));for(var lb=gc.next();!lb.done;lb=gc.next()){var Qb=lb.value;lb=Qb.item;Qb=Qb.next;Da=Fn(lb,"start",Hn,Da);var qf=Fn(lb,"duration",Hn),eb=null;if(Qb){var jd=Fn(Qb,"start",Hn);null!=jd&&(eb=jd-Da)}else null!=ub&&(eb=ub-Da);null==eb&&(eb=qf);lb=sp(a,R,l,{start:Da,duration:eb,node:lb,ge:null==eb||!Qb});Ra.push(lb);R.fa.id&&eb&&(a.H[R.fa.id]=eb);if(null==
eb){Da=null;break}Da+=eb}S=null!=ub?{periods:Ra,duration:ub,Zd:!1}:{periods:Ra,duration:Da,Zd:!0};X=S.duration;T=S.periods;B.fc("static"==D);"static"!=D&&S.Zd||B.Ja(X||Infinity);a.j&&!a.m&&(N=a.C.isAutoLowLatencyMode())&&(a.C.enableLowLatencyMode(),a.m=a.C.isLowLatencyMode());a.m?B.te(a.j):a.j&&Va("Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");(ea=
B.X())&&!isNaN(a.o.availabilityWindowOverride)&&(u=a.o.availabilityWindowOverride);null==u&&(u=Infinity);B.Pd(u);B.yd(C||1);return v(Ga,Ko(a.g,T,R.cb),2);case 2:if(a.B){a.B.variants=a.g.l;a.B.textStreams=a.g.j;a.B.imageStreams=a.g.i;a.C.filter(a.B);Ga.v(3);break}a.B={presentationTimeline:B,variants:a.g.l,textStreams:a.g.j,imageStreams:a.g.i,offlineSessionIds:[],minBufferTime:p||0};if(!B.ye()){Ga.v(3);break}fa=yn(b,"UTCTiming");return v(Ga,tp(a,l,fa),5);case 5:ya=Ga.h;if(!a.C)return Ga["return"]();
B.ue(ya);case 3:a.C.makeTextStreamsForClosedCaptions(a.B),z(Ga)}})}
function sp(a,b,c,d){b.fa=up(d.node,null,c);b.W=d;b.fa.ub=b.ub;b.fa.id||(b.fa.id="__shaka_period_"+d.start);c=yn(d.node,"EventStream");c=t(c);for(var e=c.next();!e.done;e=c.next())vp(a,d.start,d.duration,e.value);c=yn(d.node,"AdaptationSet").map(function(m){return wp(a,b,m)}).filter($b);if(b.cb){d=[];e=t(c);for(var f=e.next();!f.done;f=e.next()){f=t(f.value.Lf);for(var g=f.next();!g.done;g=f.next())d.push(g.value)}if(d.length!=(new Set(d)).size)throw new O(2,4,4018);}d=c.filter(function(m){return!m.Rd});
c=c.filter(function(m){return m.Rd});c=t(c);for(e=c.next();!e.done;e=c.next()){e=e.value;f=e.Rd.split(" ");g=t(d);for(var h=g.next();!h.done;h=g.next()){var k=h.value;if(f.includes(k.id)){h={};k=t(k.streams);for(var l=k.next();!l.done;h={nc:h.nc},l=k.next())h.nc=l.value,h.nc.trickModeVideo=e.streams.find(function(m){return function(n){return Xc(m.nc.codecs)==Xc(n.codecs)}}(h))}}}e=a.o.disableAudio?[]:xp(d,"audio");g=a.o.disableVideo?[]:xp(d,"video");f=a.o.disableText?[]:xp(d,yc);c=a.o.disableThumbnails?
[]:xp(d,"image");if(!g.length&&!e.length)throw new O(2,4,4004);d=[];e=t(e);for(h=e.next();!h.done;h=e.next())d.push.apply(d,ja(h.value.streams));e=[];g=t(g);for(h=g.next();!h.done;h=g.next())e.push.apply(e,ja(h.value.streams));g=[];f=t(f);for(h=f.next();!h.done;h=f.next())g.push.apply(g,ja(h.value.streams));f=[];c=t(c);for(h=c.next();!h.done;h=c.next())f.push.apply(f,ja(h.value.streams));return{id:b.fa.id,tc:d,Oc:e,textStreams:g,imageStreams:f}}
function xp(a,b){return a.filter(function(c){return c.contentType==b})}
function wp(a,b,c){b.ka=up(c,b.fa,null);var d=!1,e=yn(c,"Role"),f=e.map(function(B){return B.getAttribute("value")}).filter($b),g=void 0,h=b.ka.contentType==yc;h&&(g="subtitle");e=t(e);for(var k=e.next();!k.done;k=e.next()){k=k.value;var l=k.getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(k=k.getAttribute("value"),k){case "main":d=!0;break;case "caption":case "subtitle":g=k}}l=yn(c,"EssentialProperty");e=null;k=!1;l=t(l);for(var m=l.next();!m.done;m=l.next())m=m.value,
"http://dashif.org/guidelines/trickmode"==m.getAttribute("schemeIdUri")?e=m.getAttribute("value"):k=!0;l=yn(c,"Accessibility");var n=new Map;l=t(l);for(m=l.next();!m.done;m=l.next()){var p=m.value;m=p.getAttribute("schemeIdUri");p=p.getAttribute("value");if("urn:scte:dash:cc:cea-608:2015"==m)if(m=1,null!=p){p=p.split(";");for(var r=t(p),u=r.next();!u.done;u=r.next()){var w=u.value,y=u=void 0;w.includes("=")?(w=w.split("="),u=w[0].startsWith("CC")?w[0]:"CC"+w[0],y=w[1]||"und"):(u="CC"+m,2==p.length?
m+=2:m++,y=w);n.set(u,hd(y))}}else n.set("CC1","und");else if("urn:scte:dash:cc:cea-708:2015"==m)if(m=1,null!=p)for(p=t(p.split(";")),u=p.next();!u.done;u=p.next())u=u.value,w=r=void 0,u.includes("=")?(u=u.split("="),r="svc"+u[0],w=u[1].split(",")[0].split(":").pop()):(r="svc"+m,m++,w=u),n.set(r,hd(w));else n.set("svc1","und");else"urn:mpeg:dash:role:2011"==m&&null!=p&&(f.push(p),"captions"==p&&(g="caption"))}if(k)return null;k=yn(c,"ContentProtection");var x=Qn(k,a.o.dash.ignoreDrmInfo,a.o.dash.keySystemsByURI),
C=hd(c.getAttribute("lang")||"und"),D=c.getAttribute("label");(k=yn(c,"Label"))&&k.length&&(k=k[0],k.textContent&&(D=k.textContent));k=yn(c,"Representation");c=k.map(function(B){return yp(a,b,x,g,C,D,d,f,n,B)}).filter(function(B){return!!B});if(0==c.length){e="image"==b.ka.contentType;if(a.o.dash.ignoreEmptyAdaptationSet||h||e)return null;throw new O(2,4,4003);}if(!b.ka.contentType||"application"==b.ka.contentType)for(b.ka.contentType=zp(c[0].mimeType,c[0].codecs),h=t(c),l=h.next();!l.done;l=h.next())l.value.type=
b.ka.contentType;h=t(c);for(l=h.next();!l.done;l=h.next())for(l=l.value,m=t(x.drmInfos),p=m.next();!p.done;p=m.next())p=p.value,p.keyIds=p.keyIds&&l.keyIds?new Set([].concat(ja(p.keyIds),ja(l.keyIds))):p.keyIds||l.keyIds;h=k.map(function(B){return B.getAttribute("id")}).filter($b);return{id:b.ka.id||"__fake__"+a.D++,contentType:b.ka.contentType,language:C,Ag:d,streams:c,drmInfos:x.drmInfos,Rd:e,Lf:h}}
function yp(a,b,c,d,e,f,g,h,k,l){b.K=up(l,b.ka,null);a.j=Math.min(a.j,b.K.ub);if(!Ap(b.K))return null;var m=b.W.start;b.bandwidth=Fn(l,"bandwidth",Kn)||0;var n=b.K.contentType,p=n==yc||"application"==n;n="image"==n;try{var r=function(G,H,M){return Bp(a,G,H,M)};if(b.K.dc)var u=ro(b,r);else if(b.K.ab)u=xo(b,a.l);else if(b.K.ec)u=Co(b,r,a.l,!!a.B,a.o.dash.initialSegmentLimit,a.H);else{var w=b.K.za,y=b.W.duration||0;u={wb:function(){return Promise.resolve(Ji(m,y,w))}}}}catch(G){if((p||n)&&4002==G.code)return null;
throw G;}r=yn(l,"ContentProtection");r=Tn(r,c,a.o.dash.ignoreDrmInfo,a.o.dash.keySystemsByURI);r=new Set(r?[r]:[]);var x=!1;yn(l,"SupplementalProperty").some(function(G){return"tag:dolby.com,2018:dash:EC3_ExtensionType:2018"==G.getAttribute("schemeIdUri")&&"JOC"==G.getAttribute("value")})&&(b.K.mimeType="audio/eac3-joc",x=!0);var C=!1;p&&(C=h.includes("forced_subtitle"));var D;if(n&&((l=yn(l,"EssentialProperty").find(function(G){return["http://dashif.org/thumbnail_tile","http://dashif.org/guidelines/thumbnail_tile"].includes(G.getAttribute("schemeIdUri"))}))&&
(D=l.getAttribute("value")),!D))return null;var B;l=b.K.codecs;b.profiles.includes("http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10")&&(l.includes("hvc1.2.4.L153.B0")||l.includes("hev1.2.4.L153.B0"))&&(B="PQ");var F={id:a.D++,originalId:b.K.id,createSegmentIndex:function(){var G;return I(function(H){if(1==H.g){if(F.segmentIndex)return H.v(0);G=F;return v(H,u.wb(),3)}G.segmentIndex=H.h;z(H)})},segmentIndex:null,mimeType:b.K.mimeType,codecs:b.K.codecs,frameRate:b.K.frameRate,pixelAspectRatio:b.K.pixelAspectRatio,
bandwidth:b.bandwidth,width:b.K.width,height:b.K.height,kind:d,encrypted:0<c.drmInfos.length,drmInfos:c.drmInfos,keyIds:r,language:e,label:f,type:b.ka.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.K.emsgSchemeIdUris,roles:h,forced:C,channelsCount:b.K.Bd,audioSamplingRate:b.K.audioSamplingRate,spatialAudio:x,closedCaptions:k,hdr:B,tilesLayout:D};return F}
q.$b=function(){var a=this,b,c;return I(function(d){switch(d.g){case 1:return b=0,A(d,2),v(d,op(a),4);case 4:b=d.h;va(d,3);break;case 2:c=E(d),a.C&&(c.severity=1,a.C.onError(c));case 3:if(!a.C)return d["return"]();pp(a,b);z(d)}})};function pp(a,b){0>a.u||a.s.U(Math.max(3,a.u-b,Qa(a.F)))}
function up(a,b,c){b=b||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,pixelAspectRatio:void 0,Bd:null,audioSamplingRate:null,ub:0};c=c||b.za;var d=yn(a,"BaseURL"),e=d.map(Dn),f=a.getAttribute("contentType")||b.contentType,g=a.getAttribute("mimeType")||b.mimeType,h=a.getAttribute("codecs")||b.codecs,k=Fn(a,"frameRate",Nn)||b.frameRate,l=a.getAttribute("sar")||b.pixelAspectRatio,m=yn(a,"InbandEventStream"),n=b.emsgSchemeIdUris.slice();m=t(m);for(var p=m.next();!p.done;p=
m.next())p=p.value.getAttribute("schemeIdUri"),n.includes(p)||n.push(p);m=yn(a,"AudioChannelConfiguration");m=Cp(m)||b.Bd;p=Fn(a,"audioSamplingRate",Ln)||b.audioSamplingRate;f||(f=zp(g,h));var r=xn(a,"SegmentBase"),u=xn(a,"SegmentTemplate"),w=r?Fn(r,"availabilityTimeOffset",Mn)||0:0,y=u?Fn(u,"availabilityTimeOffset",Mn)||0:0;d=d&&d.length?Fn(d[0],"availabilityTimeOffset",Mn)||0:0;d=b.ub+d+w+y;return{za:tc(c,e),dc:r||b.dc,ab:xn(a,"SegmentList")||b.ab,ec:u||b.ec,width:Fn(a,"width",Ln)||b.width,height:Fn(a,
"height",Ln)||b.height,contentType:f,mimeType:g,codecs:h,frameRate:k,pixelAspectRatio:l,emsgSchemeIdUris:n,id:a.getAttribute("id"),Bd:m,audioSamplingRate:p,ub:d}}
function Cp(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){var c=b.value;if(b=c.getAttribute("schemeIdUri"))if(c=c.getAttribute("value"))switch(b){case "urn:mpeg:dash:outputChannelPositionList:2012":return c.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":b=parseInt(c,10);if(!b)continue;return b;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":b=
parseInt(c,16);if(!b)continue;for(a=0;b;)b&1&&++a,b>>=1;return a;case "urn:mpeg:mpegB:cicp:ChannelConfiguration":if(b=[0,1,2,3,4,5,6,8,2,3,4,7,8,24,8,12,10,12,14,12,14],(c=parseInt(c,10))&&0<c&&c<b.length)return b[c]}}return null}function Ap(a){var b=a.dc?1:0;b+=a.ab?1:0;b+=a.ec?1:0;if(0==b)return a.contentType==yc||"application"==a.contentType?!0:!1;1!=b&&(a.dc&&(a.ab=null),a.ec=null);return!0}
function Dp(a,b,c,d){var e,f,g,h,k,l;return I(function(m){if(1==m.g)return e=tc(b,[c]),f=Ue(e,a.o.retryParameters),f.method=d,g=a.C.networkingEngine.request(4,f),Pe(a.i,g),v(m,g.promise,2);h=m.h;if("HEAD"==d){if(!h.headers||!h.headers.date)return m["return"](0);k=h.headers.date}else k=Dc(h.data);l=Date.parse(k);return isNaN(l)?m["return"](0):m["return"](l-Date.now())})}
function tp(a,b,c){var d,e,f,g,h,k,l,m;return I(function(n){switch(n.g){case 1:d=c.map(function(p){return{scheme:p.getAttribute("schemeIdUri"),value:p.getAttribute("value")}}),e=a.o.dash.clockSyncUri,!d.length&&e&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:e}),f=t(d),g=f.next();case 2:if(g.done){n.v(4);break}h=g.value;A(n,5);k=h.scheme;l=h.value;switch(k){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return n.v(7);case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return n.v(8);
case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return m=Date.parse(l),n["return"](isNaN(m)?0:m-Date.now());case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":Va("NTP UTCTiming scheme is not supported");break;default:Va("Unrecognized scheme in UTCTiming element",k)}n.v(9);break;case 7:return v(n,Dp(a,b,l,"HEAD"),10);case 10:return n["return"](n.h);case 8:return v(n,Dp(a,b,l,"GET"),11);case 11:return n["return"](n.h);
case 9:va(n,3);break;case 5:E(n);case 3:g=f.next();n.v(2);break;case 4:return Va("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"),n["return"](0)}})}
function vp(a,b,c,d){var e=d.getAttribute("schemeIdUri")||"",f=d.getAttribute("value")||"",g=Fn(d,"timescale",Ln)||1;d=t(yn(d,"Event"));for(var h=d.next();!h.done;h=d.next()){h=h.value;var k=Fn(h,"presentationTime",Ln)||0,l=Fn(h,"duration",Ln)||0;k=k/g+b;l=k+l/g;null!=c&&(k=Math.min(k,b+c),l=Math.min(l,b+c));h={schemeIdUri:e,value:f,startTime:k,endTime:l,id:h.getAttribute("id")||"",eventElement:h};a.C.onTimelineRegionAdded(h)}}
function Bp(a,b,c,d){var e,f,g,h,k;return I(function(l){if(1==l.g)return e=$e,f=Wi(b,c,d,a.o.retryParameters),g=a.C.networkingEngine,h=g.request(e,f),Pe(a.i,h),v(l,h.promise,2);k=l.h;return l["return"](k.data)})}function zp(a,b){return $c(Vc(a,b))?yc:a.split("/")[0]}L("shaka.dash.DashParser",np);eg.mpd=function(){return new np};cg["application/dash+xml"]=function(){return new np};cg["video/vnd.mpeg.dash.mpd"]=function(){return new np};function Ep(a,b,c,d){this.g=a;this.type=b;this.V=c;this.segments=d||null}function Fp(a,b,c,d){this.id=a;this.name=b;this.g=c;this.value=void 0===d?null:d}Fp.prototype.toString=function(){function a(d){return d.name+"="+(isNaN(Number(d.value))?'"'+d.value+'"':d.value)}var b="#"+this.name,c=this.g?this.g.map(a):[];this.value&&c.unshift(this.value);0<c.length&&(b+=":"+c.join(","));return b};
Fp.prototype.getAttribute=function(a){var b=this.g.filter(function(c){return c.name==a});return b.length?b[0]:null};function Z(a,b,c){return(a=a.getAttribute(b))?a.value:c||null}function Gp(a,b){var c=a.getAttribute(b);if(!c)throw new O(2,4,4023,b);return c.value}function Hp(a,b,c){c=void 0===c?[]:c;this.V=b;this.g=a;this.h=c}function Ip(a,b){this.name=a;this.value=b};function Jp(a,b){return a.filter(function(c){return c.name==b})}function Kp(a,b){return a.filter(function(c){return Gp(c,"TYPE")==b})}function Lp(a,b){var c=Jp(a,b);return c.length?c[0]:null}function Mp(a,b,c){c=void 0===c?0:c;return(a=Lp(a,b))?Number(a.value):c};function Np(a){this.h=a;this.g=0}function Op(a){Pp(a,/[ \t]+/gm)}function Pp(a,b){b.lastIndex=a.g;var c=b.exec(a.h);c=null==c?null:{position:c.index,length:c[0].length,results:c};if(a.g==a.h.length||null==c||c.position!=a.g)return null;a.g+=c.length;return c.results}function Qp(a){return a.g==a.h.length?null:(a=Pp(a,/[^ \t\n]*/gm))?a[0]:null};function Rp(){this.g=0}
function Sp(a,b,c){b=Dc(b);b=b.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var d=b.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(d[0]))throw new O(2,4,4015);b=0;for(var e=!0,f=t(d),g=f.next();!g.done;g=f.next())if(g=g.value,/^#(?!EXT)/m.test(g)||e)e=!1;else if(g=Tp(a.g++,g),--a.g,Up.includes(g.name)){b=1;break}else"EXT-X-STREAM-INF"==g.name&&(e=!0);f=[];e=!0;g=t(kb(d));for(var h=g.next();!h.done;h=g.next()){var k=h.value;h=k.ha;var l=k.item;k=k.next;if(/^#(?!EXT)/m.test(l)||e)e=!1;else{l=Tp(a.g++,
l);if(Vp.includes(l.name)){if(1!=b)throw new O(2,4,4017);k=d.splice(h,d.length-h);d=c;e=[];g=[];h=[];l=null;k=t(k);for(var m=k.next();!m.done;m=k.next())m=m.value,/^(#EXT)/.test(m)?(m=Tp(a.g++,m),Up.includes(m.name)?f.push(m):"EXT-X-MAP"==m.name?l=m:"EXT-X-PART"==m.name?h.push(m):"EXT-X-PRELOAD-HINT"==m.name?"PART"==Z(m,"TYPE")?h.push(m):"MAP"==Z(m,"TYPE")&&(m.name="EXT-X-MAP",l=m):g.push(m)):/^#(?!EXT)/m.test(m)||(m=tc([d],[m.trim()])[0],l&&g.push(l),e.push(new Hp(m,g,h)),g=[],h=[]);h.length&&(l&&
g.push(l),e.push(new Hp("",g,h)));return new Ep(c,b,f,e)}f.push(l);"EXT-X-STREAM-INF"==l.name&&(l.g.push(new Ip("URI",k)),e=!0)}}return new Ep(c,b,f)}function Tp(a,b){var c=b.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!c)throw new O(2,4,4016,b);var d=c[1],e=c[2];c=[];var f;if(e){e=new Np(e);var g;(g=Pp(e,/^([^,=]+)(?:,|$)/g))&&(f=g[1]);for(var h=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;g=Pp(e,h);)c.push(new Ip(g[1],g[2]||g[3]))}return new Fp(a,d,c,f)}
var Up="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP".split(" "),Vp="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(" ");function Wp(){}function Xp(a){try{var b=Yp(a);return He({uri:a,le:a,data:b.data,headers:{"content-type":b.contentType}})}catch(c){return Fe(c)}}function Yp(a){var b=a.split(":");if(2>b.length||"data"!=b[0])throw new O(2,1,1004,a);b=b.slice(1).join(":").split(",");if(2>b.length)throw new O(2,1,1004,a);var c=b[0];a=window.decodeURIComponent(b.slice(1).join(","));b=c.split(";");c=b[0];var d=!1;1<b.length&&"base64"==b[b.length-1]&&(d=!0,b.pop());var e;d?e=Mc(a):e=Hc(a);return{data:e,contentType:c}}
L("shaka.net.DataUriPlugin",Wp);Wp.parse=Xp;Re("data",Xp);function Zp(){var a=this;this.o=this.C=null;this.Ma=1;this.l=new Map;this.s=new Map;this.Fa=new Set;this.g=new Map;this.h=null;this.L="";this.Y=new Rp;this.ra=0;this.u=new P(function(){a.$b()});this.j=$p;this.B=null;this.pa=0;this.F=Infinity;this.S=this.Xa=0;this.D=new Oe;this.qa=[];this.J=new Map;this.Wa=!1;this.m=new Map;this.N=null;this.da=new Map;this.H=new Map;this.i=!1}q=Zp.prototype;q.configure=function(a){this.o=a};
q.start=function(a,b){var c=this,d,e;return I(function(f){if(1==f.g)return c.C=b,c.i=b.isLowLatencyMode(),v(f,aq(c,Ue([a],c.o.retryParameters),0),2);if(3!=f.g)return d=f.h,c.L=d.uri,v(f,bq(c,d.data),3);e=c.ra;0<e&&c.u.U(e);return f["return"](c.B)})};q.stop=function(){this.u&&(this.u.stop(),this.u=null);var a=[];this.D&&(a.push(this.D.destroy()),this.D=null);this.o=this.C=null;this.Fa.clear();this.B=null;this.g.clear();this.s.clear();this.m.clear();this.l.clear();return Promise.all(a)};
q.update=function(){var a=this,b,c,d;return I(function(e){if(1==e.g){if(a.j==$p)return e["return"]();b=[];a.N=null;c=Array.from(a.g.values());return c.length?v(e,cq(a,c[0]),2):e.v(2)}for(d=1;d<c.length;d++)b.push(cq(a,c[d]));return v(e,Promise.all(b),0)})};
function cq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u;return I(function(w){if(1==w.g)return c=dq,d=b.De,e=new fc(d),a.i&&b.Ie&&jc(e,new lc("_HLS_skip=YES")),v(w,aq(a,Ue([e.toString()],a.o.retryParameters),0),2);if(3!=w.g){f=w.h;g=Sp(a.Y,f.data,f.uri);if(1!=g.type)throw new O(2,4,4017);h=Jp(g.V,"EXT-X-DEFINE");k=eq(a,h);l=b.stream;return v(w,fq(a,b.Nc,g,l.type,l.mimeType,b.wd,k,b.Pe),3)}m=w.h;l.segmentIndex.Ab(m,a.h.Za());m.length&&(n=Mp(g.V,"EXT-X-MEDIA-SEQUENCE",0),p=b.wd.get(n),l.segmentIndex.eb(p));r=
m[m.length-1];if(u=Lp(g.V,"EXT-X-ENDLIST"))gq(a,c.Ce),a.h.Ja(r.endTime);z(w)})}q.onExpirationUpdated=function(){};
function bq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S;return I(function(X){switch(X.g){case 1:c=Sp(a.Y,b,a.L);if(0!=c.type)throw new O(2,4,4022);d=Jp(c.V,"EXT-X-DEFINE");for(var T=t(d),N=T.next();!N.done;N=T.next()){var ea=N.value;N=Z(ea,"NAME");ea=Z(ea,"VALUE");N&&ea&&(a.l.has(N)||a.l.set(N,ea))}e=Jp(c.V,"EXT-X-MEDIA");f=Jp(c.V,"EXT-X-STREAM-INF");g=Jp(c.V,"EXT-X-IMAGE-STREAM-INF");T=t(f);for(N=T.next();!N.done;N=T.next()){var fa=N.value;ea=Z(fa,"AUDIO");N=Z(fa,"VIDEO");var ya=
Z(fa,"SUBTITLES");fa=hq(a,fa);if(ya){var Ga=wc(yc,fa);a.m.set(ya,Ga);nb(fa,Ga)}ea&&(ya=vc("audio",fa),a.m.set(ea,ya));N&&(ea=vc("video",fa),a.m.set(N,ea))}h=Jp(c.V,"EXT-X-SESSION-DATA");k=t(h);for(l=k.next();!l.done;l=k.next())if(m=l.value,n=Z(m,"DATA-ID"),p=Z(m,"URI"),r=Z(m,"LANGUAGE"),u=Z(m,"VALUE"),w={id:n},p&&(w.uri=tc([a.L],[p])[0]),r&&(w.language=r),u&&(w.value=u),y=new Q("sessiondata",w),a.C)a.C.onEvent(y);return v(X,iq(a,e),2);case 2:T=Kp(e,"CLOSED-CAPTIONS");T=t(T);for(N=T.next();!N.done;N=
T.next())ya=N.value,N=jq(ya),ea=Gp(ya,"GROUP-ID"),ya=Gp(ya,"INSTREAM-ID"),a.J.get(ea)||a.J.set(ea,new Map),a.J.get(ea).set(ya,N);return v(X,kq(a,f),3);case 3:return x=X.h,v(X,lq(a,e),4);case 4:return C=X.h,v(X,mq(a,g),5);case 5:D=X.h;if(!a.C)throw new O(2,7,7001);if(a.Wa&&0==x.length)throw new O(2,4,4034);F=B=Infinity;G=t(a.g.values());for(H=G.next();!H.done;H=G.next())M=H.value,B=Math.min(B,M.je),"text"!=M.stream.type&&(F=Math.min(F,M.wf-M.je));a.j!=$p?(a.h=new U(0,a.o.defaultPresentationDelay?a.o.defaultPresentationDelay:
a.S?a.S:3*a.pa),a.h.fc(!1)):(a.h=new U(null,0),a.h.fc(!0));nq(a);if(a.j!=$p)a.ra=a.F,J=dq,a.j==J.Be&&(K=a.h.Jc,isNaN(a.o.availabilityWindowOverride)||(K=a.o.availabilityWindowOverride),a.h.Pd(K));else for(a.h.Ja(F),a.h.offset(-B),R=t(a.g.values()),H=R.next();!H.done;H=R.next())S=H.value,S.stream.segmentIndex.offset(-B),S.stream.segmentIndex.Ya(0,F);a.B={presentationTimeline:a.h,variants:x,textStreams:C,imageStreams:D,offlineSessionIds:[],minBufferTime:0};a.C.makeTextStreamsForClosedCaptions(a.B);
z(X)}})}function eq(a,b){for(var c=new Map,d=t(b),e=d.next();!e.done;e=d.next()){var f=e.value;e=Z(f,"NAME");var g=Z(f,"VALUE");f=Z(f,"IMPORT");e&&g&&c.set(e,g);f&&(e=a.l.get(f))&&c.set(f,e)}return c}
function lq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r;return I(function(u){if(1==u.g)return c=Kp(b,"SUBTITLES"),d=c.map(function(w){var y,x,C;return I(function(D){if(1==D.g){if(y=a.o.disableText)return D["return"](null);A(D,2);return v(D,oq(a,w),4)}if(2!=D.g)return x=D.h,D["return"](x.stream);C=E(D);if(a.o.hls.ignoreTextStreamFailures)return D["return"](null);throw C;})}),v(u,Promise.all(d),2);e=u.h;f=t(c);for(g=f.next();!g.done;g=f.next())if(h=g.value,k=Gp(h,"GROUP-ID"),l=a.m.get(k))if(m=a.s.get(k))for(n=
t(m),p=n.next();!p.done;p=n.next())r=p.value,r.stream.codecs=l;return u["return"](e.filter(function(w){return w}))})}
function mq(a,b){var c,d;return I(function(e){if(1==e.g)return c=b.map(function(f){var g,h,k;return I(function(l){if(1==l.g){if(g=a.o.disableThumbnails)return l["return"](null);A(l,2);return v(l,pq(a,f),4)}if(2!=l.g)return h=l.h,l["return"](h.stream);k=E(l);if(a.o.hls.ignoreImageStreamFailures)return l["return"](null);throw k;})}),v(e,Promise.all(c),2);d=e.h;return e["return"](d.filter(function(f){return f}))})}
function iq(a,b){var c;return I(function(d){if(1==d.g)return b=b.filter(function(e){var f=Z(e,"URI")||"";return"SUBTITLES"!=Z(e,"TYPE")&&""!=f}),b.length?v(d,oq(a,b[0]),2):d.v(2);c=b.slice(1).map(function(e){return oq(a,e)});return v(d,Promise.all(c),0)})}
function kq(a,b){var c,d,e;return I(function(f){if(1==f.g)return c=b.map(function(g){var h,k,l,m,n,p,r,u;return I(function(w){if(1==w.g)return h=Z(g,"FRAME-RATE"),k=Number(Z(g,"AVERAGE-BANDWIDTH"))||Number(Gp(g,"BANDWIDTH")),l=Z(g,"RESOLUTION"),m=t(l?l.split("x"):[null,null]),n=m.next().value,p=m.next().value,r=Z(g,"VIDEO-RANGE"),v(w,qq(a,g),2);if(u=w.h){for(var y=w["return"],x=u.audio,C=u.video,D=t(C),B=D.next();!B.done;B=D.next())if(B=B.value.stream)B.width=Number(n)||void 0,B.height=Number(p)||
void 0,B.frameRate=Number(h)||void 0,B.hdr=r||void 0;D=a.o.disableAudio;if(!x.length||D)x=[null];D=a.o.disableVideo;if(!C.length||D)C=[null];D=[];x=t(x);for(B=x.next();!B.done;B=x.next()){B=B.value;for(var F=t(C),G=F.next();!G.done;G=F.next()){var H=G.value;G=B?B.stream:null;var M=H?H.stream:null,J=B?B.stream.drmInfos:null,K=H?H.stream.drmInfos:null;H=(H?H.Nc:"")+" - "+(B?B.Nc:"");G&&M&&J.length&&K.length&&!(0<Zf(J,K).length)||a.Fa.has(H)||(G={id:a.Ma++,language:G?G.language:"und",primary:!!G&&G.primary||
!!M&&M.primary,audio:G,video:M,bandwidth:k,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]},D.push(G),a.Fa.add(H))}}w=y.call(w,D)}else w=w["return"]([]);return w})}),v(f,Promise.all(c),2);d=f.h;e=d.reduce(Yb,[]);e=e.filter(function(g){return null!=g});return f["return"](e)})}
function qq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w;return I(function(y){if(1==y.g)return c=zc,d=hq(a,b),e=Z(b,"AUDIO"),f=Z(b,"VIDEO"),h=(g=e||f)&&a.s.has(g)?a.s.get(g):[],k={audio:e?h:[],video:f?h:[]},m=!1,n=Gp(b,"URI"),p=k.audio.find(function(x){return x&&x.Nc==n}),r=wc(c.Na,d),(u=wc(c.bb,d))&&!r?l=c.bb:!h.length&&u&&r?(l=c.Na,d=[[r,u].join()]):k.audio.length&&p?(l=c.bb,m=!0):l=k.video.length?c.bb:c.Na,m?y.v(2):v(y,rq(a,b,d,l),3);2!=y.g&&(w=y.h);if(w)k[w.stream.type]=[w];else if(null===w)return y["return"](null);
sq(k);return y["return"](k)})}function hq(a,b){var c=[];a.o.disableVideo||c.push("avc1.42E01E");a.o.disableAudio||c.push("mp4a.40.2");var d=Z(b,"CODECS",c.join(",")).split(/\s*,\s*/);c=new Set;var e=[];d=t(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=Xc(f);c.has(g)||(e.push(f),c.add(g))}return e}function jq(a){a=Z(a,"LANGUAGE")||"und";return hd(a)}
function sq(a){a=t(a.audio.concat(a.video));for(var b=a.next();!b.done;b=a.next())if(b=b.value){var c=b.stream.codecs.split(",");c=c.filter(function(d){return"mp4a.40.34"!=d});b.stream.codecs=c.join(",")}}
function oq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w;return I(function(y){if(1==y.g){c=Gp(b,"GROUP-ID");d="";var x=Gp(b,"TYPE").toLowerCase();"subtitles"==x&&(x=yc);e=x;e!=yc&&c&&a.m.has(c)&&(d=a.m.get(c));f=tq(Gp(b,"URI"),a.l);if(a.g.has(f))return y["return"](a.g.get(f));g=jq(b);h=Z(b,"NAME");k=b.getAttribute("DEFAULT");l="YES"==k;"audio"==e?x=(x=Z(b,"CHANNELS"))?parseInt(x.split("/")[0],10):null:x=null;m=x;"audio"==e?x=(x=Z(b,"CHANNELS"))?x.includes("/JOC"):!1:x=!1;n=x;p=Z(b,"CHARACTERISTICS");r=Z(b,
"FORCED");u="YES"==r;return v(y,uq(a,f,d,e,g,l,h,m,null,p,u,n),2)}w=y.h;a.s.has(c)?a.s.get(c).push(w):a.s.set(c,[w]);if(null==w)return y["return"](null);if(a.g.has(f))return y["return"](a.g.get(f));a.g.set(f,w);return y["return"](w)})}
function pq(a,b){var c,d,e,f,g,h;return I(function(k){if(1==k.g){c=tq(Gp(b,"URI"),a.l);d=Z(b,"CODECS","jpeg")||"";if(a.g.has(c))return k["return"](a.g.get(c));e=jq(b);f=Z(b,"NAME");g=Z(b,"CHARACTERISTICS");return v(k,uq(a,c,d,"image",e,!1,f,null,null,g,!1,!1),2)}h=k.h;if(null==h)return k["return"](null);if(a.g.has(c))return k["return"](a.g.get(c));a.g.set(c,h);return k["return"](h)})}
function rq(a,b,c,d){var e,f,g,h;return I(function(k){if(1==k.g){e=tq(Gp(b,"URI"),a.l);if(a.g.has(e))return k["return"](a.g.get(e));var l=Z(b,"CLOSED-CAPTIONS");f="video"==d&&l&&"NONE"!=l?a.J.get(l):null;g=vc(d,c);return v(k,uq(a,e,g,d,"und",!1,null,null,f,null,!1,!1),2)}h=k.h;if(null==h)return k["return"](null);if(a.g.has(e))return k["return"](a.g.get(e));a.g.set(e,h);return k["return"](h)})}
function uq(a,b,c,d,e,f,g,h,k,l,m,n){var p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S,X,T,N,ea,fa,ya,Ga,ub,Ra,Da,gc,lb,Qb,qf,eb,jd,Lh,tf,Ym,Zm,$m,an;return I(function(fb){switch(fb.g){case 1:return p=tc([a.L],[b])[0],v(fb,aq(a,Ue([p],a.o.retryParameters),0),2);case 2:r=fb.h;p=r.uri;u=Sp(a.Y,r.data,p);if(1!=u.type)throw new O(2,4,4017);w=[];if(u.segments)for(y=t(u.segments),x=y.next();!x.done;x=y.next())C=x.value,D=Jp(C.V,"EXT-X-KEY"),w.push.apply(w,ja(D));B=!1;F=[];G=new Set;H=t(w);for(M=H.next();!M.done;M=
H.next())if(J=M.value,K=Gp(J,"METHOD"),"NONE"!=K){B=!0;if("AES-128"==K)return a.Wa=!0,fb["return"](null);R=Gp(J,"KEYFORMAT");if(X=(S=vq[R])?S(J):null){if(X.keyIds)for(T=t(X.keyIds),N=T.next();!N.done;N=T.next())ea=N.value,G.add(ea);F.push(X)}}if(B&&!F.length)throw new O(2,4,4026);fa=Jp(u.V,"EXT-X-DEFINE");ya=eq(a,fa);wq(a,u);return v(fb,xq(a,d,c,u,ya),3);case 3:return Ga=fb.h,yq.includes(Ga)&&(c=""),ub=new Map,Ra=new Map,A(fb,4),v(fb,fq(a,b,u,d,Ga,ub,ya,Ra),6);case 6:Da=fb.h;va(fb,5);break;case 4:gc=
E(fb);if(4035==gc.code)return Va("Skipping unsupported HLS stream",Ga,b),fb["return"](null);throw gc;case 5:lb=Da[0].startTime;Qb=Da[Da.length-1].endTime;qf=new V(Da);eb=d==yc?"subtitle":void 0;jd=[];if(l)for(Lh=t(l.split(",")),tf=Lh.next();!tf.done;tf=Lh.next())Ym=tf.value,jd.push(Ym);$m=(Zm=Lp(u.V,"EXT-X-SERVER-CONTROL"))?null!=Zm.getAttribute("CAN-SKIP-UNTIL"):!1;an={id:a.Ma++,originalId:g,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:qf,mimeType:Ga,codecs:c,kind:eb,encrypted:B,
drmInfos:F,keyIds:G,language:e,label:g,type:d,primary:f,trickModeVideo:null,emsgSchemeIdUris:null,frameRate:void 0,pixelAspectRatio:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:jd,forced:m,channelsCount:h,audioSamplingRate:null,spatialAudio:n,closedCaptions:k,hdr:void 0,tilesLayout:void 0};return fb["return"]({stream:an,Nc:b,De:p,je:lb,wf:Qb,wd:ub,Pe:Ra,Ie:$m})}})}
function wq(a,b){var c=Lp(b.V,"EXT-X-PLAYLIST-TYPE"),d=Lp(b.V,"EXT-X-ENDLIST");d=c&&"VOD"==c.value||d;c=c&&"EVENT"==c.value&&!d;c=!d&&!c;if(d)gq(a,$p);else{c?gq(a,zq):gq(a,Aq);d=Lp(b.V,"EXT-X-TARGETDURATION");if(!d)throw new O(2,4,4024,"EXT-X-TARGETDURATION");d=Number(d.value);c=Lp(b.V,"EXT-X-PART-INF");a.i&&c?(a.Xa=Number(Gp(c,"PART-TARGET")),a.F=Math.min(a.Xa,a.F),c=Lp(b.V,"EXT-X-SERVER-CONTROL"),a.S=c?Number(Gp(c,"PART-HOLD-BACK")):0):a.F=Math.min(d,a.F);a.pa=Math.max(d,a.pa)}}
function Bq(a,b,c,d){c=Lp(c,"EXT-X-MAP");if(!c)return null;var e=Gp(c,"URI");d=tq(tc([b],[e])[0],d);b=[d,Z(c,"BYTERANGE","")].join("-");a.da.has(b)||(c=Cq(d,c),a.da.set(b,c));return a.da.get(b)}function Cq(a,b){var c=0,d=null,e=Z(b,"BYTERANGE");e&&(c=e.split("@"),d=Number(c[0]),c=Number(c[1]),d=c+d-1);return new ji(function(){return[a]},c,d)}
function Dq(a,b,c,d,e,f,g,h,k){var l=d.V,m=tq(d.g,g),n=Lp(l,"EXTINF"),p=g=0,r=null,u=[];if(a.i&&d.h.length){a={};d=t(kb(d.h));for(var w=d.next();!w.done;a={Wc:a.Wc},w=d.next()){w=w.value;var y=w.ha;w=w.item;var x=0==y?c:u[u.length-1];y=0==y?e:x.endTime;var C=Number(Z(w,"DURATION"));C=y+C;var D=0,B=null;"EXT-X-PRELOAD-HINT"==w.name?D=(x=Z(w,"BYTERANGE-START"))?Number(x):0:(D=Z(w,"BYTERANGE"),x=t(Eq(x,D)),D=x.next().value,B=x.next().value);w=Z(w,"URI");a.Wc=tc([h],[w])[0];u.push(new li(y,C,function(F){return function(){return[F.Wc]}}(a),
D,B,b,f,0,Infinity))}}else if(!n)throw new O(2,4,4024,"EXTINF");n?g=e+Number(n.value.split(",")[0]):g=u[u.length-1].endTime;(h=Lp(l,"EXT-X-BYTERANGE"))?(r=t(Eq(c,h.value)),p=r.next().value,r=r.next().value):u.length&&(p=u[0].ja,r=u[u.length-1].ea);c="";"image"==k&&(c="1x1",(k=Lp(l,"EXT-X-TILES"))&&(c=Gp(k,"LAYOUT")));return new li(e,g,function(){return m.length?[m]:[]},p,r,b,f,0,Infinity,u,c)}
function Eq(a,b){var c=0,d=null;b&&(c=b.split("@"),d=Number(c[0]),c=c[1]?Number(c[1]):a.ea+1,d=c+d-1);return[c,d]}function nq(a){if(a.h){for(var b=t(a.qa),c=b.next();!c.done;c=b.next())a.h.Bb(c.value);a.qa=[]}}
function fq(a,b,c,d,e,f,g,h){var k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S,X,T,N,ea;return I(function(fa){switch(fa.g){case 1:k=c.segments;m=Mp(c.V,"EXT-X-MEDIA-SEQUENCE",0);p=(n=Lp(c.V,"EXT-X-SKIP"))?Number(Z(n,"SKIPPED-SEGMENTS")):0;r=m+p;if(a.j!=$p&&f.has(r)){u=f.get(r);fa.v(2);break}if(null!=a.N){fa.v(3);break}l=Bq(a,c.g,k[0].V,g);w=a;return v(fa,Fq(a,b,l,e,r,!1,k[0],g,d),4);case 4:w.N=fa.h;case 3:u=a.N;case 2:y=k[0].g;Za(y.split("/").pop());x=Mp(c.V,"EXT-X-DISCONTINUITY-SEQUENCE");if(a.i&&(h.has(x)||
h.set(x,r),p))for(;h.has(x+1)&&h.get(x+1)<r;)x++;C=a.H.get(x)||0;D=[];B=function(ya){return kb(ya)};F=t(B(k));G=F.next();case 5:if(G.done){fa.v(7);break}M=H=G.value;J=M.ha;K=M.item;R=D[D.length-1];S=0==J?u:R.endTime;r=m+p+J;f.set(r,S);l=Bq(a,c.g,K.V,g);X=Lp(K.V,"EXT-X-DISCONTINUITY");if(!X){fa.v(8);break}x++;h.set(x,r);return v(fa,Gq(a,x,b,l,e,r,K,g,S,d),9);case 9:C=fa.h;case 8:!a.i&&(T=a.C.isAutoLowLatencyMode())&&(a.C.enableLowLatencyMode(),a.i=a.C.isLowLatencyMode());N=Lp(K.V,"EXTINF");a.i||N?
(ea=Dq(a,l,R,K,S,C,g,c.g,d),D.push(ea)):a.i||Va("Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");G=F.next();fa.v(5);break;case 7:return a.qa.push(D),nq(a),fa["return"](D)}})}
function Gq(a,b,c,d,e,f,g,h,k,l){var m,n;return I(function(p){if(1==p.g)return m=0,a.H.has(b)?(m=a.H.get(b),p.v(2)):v(p,Fq(a,c,d,e,f,!0,g,h,l),3);2!=p.g&&(n=p.h,m=k-n,a.H.set(b,m));return p["return"](m)})}
function Hq(a,b){var c,d,e,f,g,h;return I(function(k){switch(k.g){case 1:c=$e;d=Wi(b.ma(),b.ja,b.ea,a.o.retryParameters);if(a.o.hls.useFullSegmentsForStartTime)return k["return"](aq(a,d,c));e=Wi(b.ma(),b.ja,b.ja+2048-1,a.o.retryParameters);A(k,2);return v(k,aq(a,e,c),4);case 4:return f=k.h,k["return"](f);case 2:g=E(k);if(7001==g.code)throw g;Va("Unable to fetch the starting part of HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",
e.uris[0]);return v(k,aq(a,d,c),5);case 5:return h=k.h,k["return"](h)}})}
function Fq(a,b,c,d,e,f,g,h,k){var l,m,n,p,r,u,w,y;return I(function(x){switch(x.g){case 1:l=Dq(a,c,null,g,0,0,h,"",k);if(a.B&&!f&&(m=a.g.get(b),n=m.wd.get(e),void 0!=n))return x["return"](n);d=d.toLowerCase();if(yq.includes(d))throw Va("Raw formats are not yet supported.  Skipping "+d),new O(1,4,4035);if("video/webm"==d)throw Va("WebM in HLS is not yet supported.  Skipping."),new O(1,4,4035);if("video/mp4"!=d&&"audio/mp4"!=d){x.v(2);break}p=[Hq(a,l)];c&&p.push(Hq(a,c));return v(x,Promise.all(p),
3);case 3:return r=x.h,u=r[0],w=r[1]||r[0],x["return"](Iq(b,u.uri,u.data,w.data));case 2:if("video/mp2t"!=d){x.v(4);break}return v(x,Hq(a,l),5);case 5:return y=x.h,x["return"](Jq(b,y.uri,y.data));case 4:throw new O(2,4,4030,b);}})}
function Iq(a,b,c,d){var e=0;(new jg).box("moov",ng).box("trak",ng).box("mdia",ng).T("mdhd",function(h){e=Eh(h.reader,h.version).timescale;h.parser.stop()}).parse(d,!0);if(!e)throw new O(2,4,4030,a,b);var f=0,g=!1;(new jg).box("moof",ng).box("traf",ng).T("tfdt",function(h){f=Dh(h.reader,h.version).hd/e;g=!0;h.parser.stop()}).parse(c,!0);if(!g)throw new O(2,4,4030,a,b);return f}
function Jq(a,b,c){function d(){f.seek(g+188);h=f.$();71!=h&&(f.seek(g+192),h=f.$());71!=h&&(f.seek(g+204),h=f.$());71!=h&&e();f.oe(1)}function e(){throw new O(2,4,4030,a,b);}var f=new gg(c,0),g=0,h=0;for(c=Math.min(f.P.byteLength-188,940);;){g=f.Z();h=f.$();if(71!=h){if(0<c){--c;continue}e()}c=0;var k=f.Eb();if(8191==(k&8191))d();else if(k&16384)if(k=(f.$()&48)>>4,0!=k&&2!=k||e(),3==k&&(k=f.$(),f.skip(k)),1!=f.M()>>8)d();else{f.skip(3);c=f.$()>>6;0!=c&&1!=c||e();0==f.$()&&e();c=f.$();k=f.Eb();var l=
f.Eb();return(1073741824*((c&14)>>1)+((k&65534)<<14|(l&65534)>>1))/9E4}else d()}}function tq(a,b){var c=String(a).replace(/%7B/g,"{").replace(/%7D/g,"}"),d=c.match(/{\$\w*}/g);if(d){d=t(d);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=e.slice(2,e.length-1),g=b.get(f);if(g)c=c.replace(e,g);else throw new O(2,4,4039,f);}}return c}
function xq(a,b,c,d,e){var f,g,h,k,l,m,n,p,r,u,w;return I(function(y){if(1==y.g){f=zc;g=$e;h=tq(d.segments[0].g,e);k=new fc(h);l=k.ya.split(".").pop();m=Kq[b];if(n=m[l])return y["return"](n);if(b==f.aa)return c&&"vtt"!=c&&"wvtt"!=c?y["return"]("application/mp4"):y["return"]("text/vtt");if(b==f.Mb&&(!c||"jpeg"==c))return y["return"]("image/jpeg");p=Ue([h],a.o.retryParameters);p.method="HEAD";return v(y,aq(a,p,g),2)}r=y.h;u=r.headers["content-type"];return u?y["return"](u.split(";")[0]):(w=m.mp4,y["return"](w))})}
q.$b=function(){var a=this,b,c;return I(function(d){if(1==d.g){if(!a.C)return d["return"]();A(d,2);return v(d,a.update(),4)}if(2!=d.g)return b=a.ra,a.u.U(b),va(d,0);c=E(d);if(!a.C)return d["return"]();c.severity=1;a.C.onError(c);a.u.U(.1);z(d)})};function gq(a,b){a.j=b;a.h&&a.h.fc(a.j==$p);a.j!=$p||a.u.stop()}function aq(a,b,c){if(!a.D)throw new O(2,7,7001);b=a.C.networkingEngine.request(c,b);Pe(a.D,b);return b.promise}L("shaka.hls.HlsParser",Zp);
var yq=["audio/aac","audio/ac3","audio/ec3","audio/mpeg"],Kq={audio:{mp4:"audio/mp4",mp4a:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",m4f:"audio/mp4",cmfa:"audio/mp4",ts:"video/mp2t",aac:"audio/aac",ac3:"audio/ac3",ec3:"audio/ec3",mp3:"audio/mpeg"},video:{mp4:"video/mp4",mp4v:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",m4f:"video/mp4",cmfv:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",m4f:"application/mp4",cmft:"application/mp4",
vtt:"text/vtt",ttml:"application/ttml+xml"},image:{jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif"}},vq={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(a){var b=Gp(a,"METHOD");if(!["SAMPLE-AES","SAMPLE-AES-CTR"].includes(b))return null;b=Gp(a,"URI");b=Yp(b);b=Ob(b.data);b=uc("com.widevine.alpha",[{initDataType:"cenc",initData:b}]);if(a=Z(a,"KEYID"))b.keyIds=new Set([a.toLowerCase().substr(2)]);return b},"com.microsoft.playready":function(a){var b=
Gp(a,"METHOD");if(!["SAMPLE-AES","SAMPLE-AES-CTR"].includes(b))return null;a=Gp(a,"URI");a=Yp(a);a=Ob(a.data);b=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);a=vn(a,b);return uc("com.microsoft.playready",[{initDataType:"cenc",initData:a}])}},$p="VOD",Aq="EVENT",zq="LIVE",dq={Ce:$p,fg:Aq,Be:zq};eg.m3u8=function(){return new Zp};cg["application/x-mpegurl"]=function(){return new Zp};cg["application/vnd.apple.mpegurl"]=function(){return new Zp};function Lq(a,b,c,d,e,f){if(200<=c&&299>=c&&202!=c)return{uri:e||d,le:d,data:b,headers:a,fromCache:!!a["x-shaka-from-cache"]};e=null;try{e=Gc(b)}catch(g){}throw new O(401==c||403==c?2:1,1,1001,d,c,e,a,f);};function Mq(){}function Nq(a,b,c,d){var e=new Oq;lf(b.headers).forEach(function(k,l){e.append(l,k)});var f=new Pq,g={Ud:!1,xe:!1};a=Qq(a,c,{body:b.body||void 0,headers:e,method:b.method,signal:f.signal,credentials:b.allowCrossSiteCredentials?"include":void 0},g,d,b.streamDataCallback);a=new Ee(a,function(){g.Ud=!0;f.abort();return Promise.resolve()});if(b=b.retryParameters.timeout){var h=new P(function(){g.xe=!0;f.abort()});h.U(b/1E3);a["finally"](function(){h.stop()})}return a}
function Qq(a,b,c,d,e,f){var g,h,k,l,m,n,p,r,u,w,y,x,C,D;return I(function(B){switch(B.g){case 1:return g=Rq,h=Sq,n=m=0,p=Date.now(),A(B,2),v(B,g(a,c),4);case 4:return k=B.h,r=k.clone().body.getReader(),w=(u=k.headers.get("Content-Length"))?parseInt(u,10):0,y=function(F){function G(){var H,M;return I(function(J){switch(J.g){case 1:return A(J,2),v(J,r.read(),4);case 4:H=J.h;va(J,3);break;case 2:return E(J),J["return"]();case 3:if(H.done){J.v(5);break}m+=H.value.byteLength;if(!f){J.v(5);break}return v(J,
f(H.value),5);case 5:M=Date.now();if(100<M-p||H.done)e(M-p,m-n,w-m),n=m,p=M;H.done?F.close():(F.enqueue(H.value),G());z(J)}})}G()},new h({start:y}),v(B,k.arrayBuffer(),5);case 5:l=B.h;va(B,3);break;case 2:x=E(B);if(d.Ud)throw new O(1,1,7001,a,b);if(d.xe)throw new O(1,1,1003,a,b);throw new O(1,1,1002,a,x,b);case 3:return C={},D=k.headers,D.forEach(function(F,G){C[G.trim()]=F}),B["return"](Lq(C,l,k.status,a,k.url,b))}})}
function Tq(){if(window.ReadableStream)try{new ReadableStream({})}catch(a){return!1}else return!1;return!(!window.fetch||!window.AbortController)}L("shaka.net.HttpFetchPlugin",Mq);Mq.isSupported=Tq;Mq.parse=Nq;var Rq=window.fetch,Pq=window.AbortController,Sq=window.ReadableStream,Oq=window.Headers;Tq()&&(Re("http",Nq,2,!0),Re("https",Nq,2,!0));function Uq(){}
function Vq(a,b,c,d){var e=new Wq,f=Date.now(),g=0,h=new Promise(function(k,l){e.open(b.method,a,!0);e.responseType="arraybuffer";e.timeout=b.retryParameters.timeout;e.withCredentials=b.allowCrossSiteCredentials;e.onabort=function(){l(new O(1,1,7001,a,c))};e.onload=function(n){n=n.target;var p=n.getAllResponseHeaders().trim().split("\r\n"),r={};p=t(p);for(var u=p.next();!u.done;u=p.next())u=u.value.split(": "),r[u[0].toLowerCase()]=u.slice(1).join(": ");try{var w=Lq(r,n.response,n.status,a,n.responseURL,
c);k(w)}catch(y){l(y)}};e.onerror=function(n){l(new O(1,1,1002,a,n,c))};e.ontimeout=function(){l(new O(1,1,1003,a,c))};e.onprogress=function(n){var p=Date.now();if(100<p-f||n.lengthComputable&&n.loaded==n.total)d(p-f,n.loaded-g,n.total-n.loaded),g=n.loaded,f=p};for(var m in b.headers)e.setRequestHeader(m.toLowerCase(),b.headers[m]);e.send(b.body)});return new Ee(h,function(){e.abort();return Promise.resolve()})}L("shaka.net.HttpXHRPlugin",Uq);Uq.parse=Vq;var Wq=window.XMLHttpRequest;
Re("http",Vq,1,!0);Re("https",Vq,1,!0);function Xq(){this.h=this.j=this.i=0;this.g=new Map;this.l=0}function Yq(a,b){a.i+=b;var c=a.l;a.l++;a.g.set(c,b);return c}Xq.prototype.close=function(a,b){if(this.g.has(a)){var c=this.g.get(a);this.g["delete"](a);this.j+=c;this.h+=b}};function Zq(a){var b=this;this.O=a;this.g=new Map;this.I=new af(function(){return $q(b)["catch"](function(){})});this.h=[];this.ie=function(){};this.he=function(){};this.Ob=new Xq}Zq.prototype.destroy=function(){return this.I.destroy()};function ar(a,b,c){a.ie=b;a.he=c}function $q(a){var b=a.h.map(function(c){return c()});a.h=[];return Promise.all(b)}
function br(a,b,c,d,e,f){bf(a.I);var g=Yq(a.Ob,d);d=(a.g.get(b)||Promise.resolve()).then(function(){var h,k,l,m,n,p,r;return I(function(u){if(1==u.g)return v(u,cr(a,c),2);h=u.h;if(a.I.g)throw new O(2,9,7001);if(e)for(m in k=Ob(h),l=new un(k),l.data)n=Number(m),p=l.data[n],r=l.g[n],a.he(p,r);a.Ob.close(g,h.byteLength);var w=a.Ob;a.ie(0==w.i?0:w.j/w.i,a.Ob.h);return u["return"](f(h))})});a.g.set(b,d);return d}
function dr(a,b,c){bf(a.I);var d=(a.g.get(b)||Promise.resolve()).then(function(){return I(function(e){return v(e,c(),0)})});a.g.set(b,d)}function er(a){return I(function(b){return 1==b.g?v(b,Promise.all(a.g.values()),2):b["return"](a.Ob.h)})}function cr(a,b){var c,d,e,f;return I(function(g){if(1==g.g)return c=$e,d=a.O.request(c,b),e=function(){return d.abort()},a.h.push(e),v(g,d.promise,2);f=g.h;nb(a.h,e);return g["return"](f.data)})};function fr(a,b){var c=this;this.i=a;this.h=a.objectStore(b);this.g=new Ac;a.onabort=function(d){d.preventDefault();c.g.reject()};a.onerror=function(d){d.preventDefault();c.g.reject()};a.oncomplete=function(){c.g.resolve()}}fr.prototype.abort=function(){var a=this;return I(function(b){if(1==b.g){try{a.i.abort()}catch(c){}A(b,2);return v(b,a.g,4)}if(2!=b.g)return va(b,0);E(b);z(b)})};
function gr(a,b){return new Promise(function(c,d){var e=a.h.openCursor();e.onerror=d;e.onsuccess=function(){var f;return I(function(g){if(1==g.g){if(null==e.result)return c(),g["return"]();f=e.result;return v(g,b(f.key,f.value,f),2)}f["continue"]();z(g)})}})}fr.prototype.store=function(){return this.h};fr.prototype.promise=function(){return this.g};function hr(a){this.h=a;this.g=[]}hr.prototype.destroy=function(){return Promise.all(this.g.map(function(a){return a.abort()}))};function ir(a,b){return jr(a,b,"readwrite")}function jr(a,b,c){c=a.h.transaction([b],c);var d=new fr(c,b);a.g.push(d);d.promise().then(function(){nb(a.g,d)},function(){nb(a.g,d)});return d};function kr(a,b,c){this.g=new hr(a);this.i=b;this.h=c}q=kr.prototype;q.destroy=function(){return this.g.destroy()};q.hasFixedKeySpace=function(){return!0};q.addSegments=function(){return lr(this.i)};q.removeSegments=function(a,b){return mr(this,this.i,a,b)};q.getSegments=function(a){var b=this,c;return I(function(d){if(1==d.g)return v(d,nr(b,b.i,a),2);c=d.h;return d["return"](c.map(function(e){return b.Vd(e)}))})};q.addManifests=function(){return lr(this.h)};
q.updateManifestExpiration=function(a,b){var c=ir(this.g,this.h),d=c.store();d.get(a).onsuccess=function(e){if(e=e.target.result)e.expiration=b,d.put(e,a)};return c.promise()};q.removeManifests=function(a,b){return mr(this,this.h,a,b)};q.getManifests=function(a){var b=this,c;return I(function(d){if(1==d.g)return v(d,nr(b,b.h,a),2);c=d.h;return d["return"](Promise.all(c.map(function(e){return b.Rb(e)})))})};
q.getAllManifests=function(){var a=this,b,c;return I(function(d){return 1==d.g?(b=jr(a.g,a.h,"readonly"),c=new Map,v(d,gr(b,function(e,f){var g;return I(function(h){if(1==h.g)return v(h,a.Rb(f),2);g=h.h;c.set(e,g);z(h)})}),2)):3!=d.g?v(d,b.promise(),3):d["return"](c)})};q.Vd=function(a){return a};q.Rb=function(a){return Promise.resolve(a)};function lr(a){return Promise.reject(new O(2,9,9011,"Cannot add new value to "+a))}
q.add=function(a,b){var c=this,d,e,f,g,h,k,l;return I(function(m){if(1==m.g){d=ir(c.g,a);e=d.store();f=[];g={};h=t(b);for(k=h.next();!k.done;g={mc:g.mc},k=h.next())l=k.value,g.mc=e.add(l),g.mc.onsuccess=function(n){return function(){f.push(n.mc.result)}}(g);return v(m,d.promise(),2)}return m["return"](f)})};
function mr(a,b,c,d){a=ir(a.g,b);b=a.store();var e={};c=t(c);for(var f=c.next();!f.done;e={lc:e.lc},f=c.next())e.lc=f.value,b["delete"](e.lc).onsuccess=function(g){return function(){return d(g.lc)}}(e);return a.promise()}
function nr(a,b,c){var d,e,f,g,h,k,l;return I(function(m){if(1==m.g){d=jr(a.g,b,"readonly");e=d.store();f={};g=[];h={};k=t(c);for(l=k.next();!l.done;h={Lb:h.Lb,Jb:h.Jb},l=k.next())h.Jb=l.value,h.Lb=e.get(h.Jb),h.Lb.onsuccess=function(n){return function(){void 0==n.Lb.result&&g.push(n.Jb);f[n.Jb]=n.Lb.result}}(h);return v(m,d.promise(),2)}if(g.length)throw new O(2,9,9012,"Could not find values for "+g);return m["return"](c.map(function(n){return f[n]}))})};function or(a){this.g=new hr(a)}or.prototype.destroy=function(){return this.g.destroy()};or.prototype.getAll=function(){var a=this,b,c;return I(function(d){return 1==d.g?(b=jr(a.g,"session-ids","readonly"),c=[],v(d,gr(b,function(e,f){c.push(f)}),2)):3!=d.g?v(d,b.promise(),3):d["return"](c)})};or.prototype.add=function(a){var b=ir(this.g,"session-ids"),c=b.store();a=t(a);for(var d=a.next();!d.done;d=a.next())c.add(d.value);return b.promise()};
or.prototype.remove=function(a){var b=this,c;return I(function(d){return 1==d.g?(c=ir(b.g,"session-ids"),v(d,gr(c,function(e,f,g){a.includes(f.sessionId)&&g["delete"]()}),2)):v(d,c.promise(),0)})};function pr(){this.g=new Map}pr.prototype.destroy=function(){for(var a=[],b=t(this.g.values()),c=b.next();!c.done;c=b.next())a.push(c.value.destroy());this.g.clear();return Promise.all(a)};pr.prototype.init=function(){var a=this;qr.forEach(function(e,f){var g=e();g&&a.g.set(f,g)});for(var b=[],c=t(this.g.values()),d=c.next();!d.done;d=c.next())b.push(d.value.init());return Promise.all(b)};
function rr(a){var b=null;a.g.forEach(function(c,d){c.getCells().forEach(function(e,f){e.hasFixedKeySpace()||b||(b={path:{Ia:d,la:f},la:e})})});if(b)return b;throw new O(2,9,9013,"Could not find a cell that supports add-operations");}function sr(a,b){a.g.forEach(function(c,d){c.getCells().forEach(function(e,f){b({Ia:d,la:f},e)})})}
function tr(a,b,c){a=a.g.get(b);if(!a)throw new O(2,9,9013,"Could not find mechanism with name "+b);b=a.getCells().get(c);if(!b)throw new O(2,9,9013,"Could not find cell with name "+c);return b}function ur(a,b){a.g.forEach(function(c){b(c.getEmeSessionCell())})}function vr(a){var b=Array.from(a.g.keys());if(!b.length)throw new O(2,9,9E3,"No supported storage mechanisms found");return a.g.get(b[0]).getEmeSessionCell()}
function wr(a){var b,c,d;return I(function(e){return 1==e.g?(b=Array.from(a.g.values()),c=0<b.length,c||(d=qr,d.forEach(function(f){(f=f())&&b.push(f)})),v(e,Promise.all(b.map(function(f){return f.erase()})),2)):c?e.v(0):v(e,Promise.all(b.map(function(f){return f.destroy()})),0)})}function xr(a,b){qr.set(a,b)}L("shaka.offline.StorageMuxer",pr);pr.unregister=function(a){qr["delete"](a)};pr.register=xr;pr.prototype.destroy=pr.prototype.destroy;var qr=new Map;function yr(){kr.apply(this,arguments)}qa(yr,kr);yr.prototype.updateManifestExpiration=function(a,b){var c=this,d,e,f;return I(function(g){d=ir(c.g,c.h);e=d.store();f=new Ac;e.get(a).onsuccess=function(h){(h=h.target.result)?(h.expiration=b,e.put(h),f.resolve()):f.reject(new O(2,9,9012,"Could not find values for "+a))};return v(g,Promise.all([d.promise(),f]),0)})};
yr.prototype.Rb=function(a){var b,c,d,e,f,g;return I(function(h){if(1==h.g){b=[];for(c=0;c<a.periods.length;++c)d=c==a.periods.length-1?a.duration:a.periods[c+1].startTime,e=d-a.periods[c].startTime,f=zr(a.periods[c],e),b.push(f);return v(h,To(b),2)}g=h.h;return h["return"]({creationTime:0,originalManifestUri:a.originalManifestUri,duration:a.duration,size:a.size,expiration:null==a.expiration?Infinity:a.expiration,streams:g,sessionIds:a.sessionIds,drmInfo:a.drmInfo,appMetadata:a.appMetadata})})};
function zr(a,b){Ar(a);for(var c=t(a.streams),d=c.next();!d.done;d=c.next());return a.streams.map(function(e){return Br(e,a.startTime,b)})}
function Br(a,b,c){var d=a.initSegmentUri?Cr(a.initSegmentUri):null,e=b+a.presentationTimeOffset,f=b+c;return{id:a.id,originalId:null,primary:a.primary,type:a.contentType,mimeType:a.mimeType,codecs:a.codecs,frameRate:a.frameRate,pixelAspectRatio:void 0,hdr:void 0,kind:a.kind,language:a.language,label:a.label,width:a.width,height:a.height,initSegmentKey:d,encrypted:a.encrypted,keyIds:new Set([a.keyId]),segments:a.segments.map(function(g){var h=Cr(g.uri);return{startTime:b+g.startTime,endTime:b+g.endTime,
dataKey:h,initSegmentKey:d,appendWindowStart:b,appendWindowEnd:f,timestampOffset:e,tilesLayout:""}}),variantIds:a.variantIds,roles:[],forced:!1,audioSamplingRate:null,channelsCount:null,spatialAudio:!1,closedCaptions:null,tilesLayout:void 0}}yr.prototype.Vd=function(a){return{data:a.data}};function Cr(a){var b;if((b=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a))||(b=/^offline:segment\/([0-9]+)$/.exec(a)))return Number(b[1]);throw new O(2,9,9004,"Could not parse uri "+a);}
function Ar(a){var b=a.streams.filter(function(h){return"audio"==h.contentType});a=a.streams.filter(function(h){return"video"==h.contentType});if(!b.every(function(h){return h.variantIds})||!a.every(function(h){return h.variantIds})){for(var c=t(b),d=c.next();!d.done;d=c.next())d.value.variantIds=[];c=t(a);for(d=c.next();!d.done;d=c.next())d.value.variantIds=[];c=0;if(a.length&&!b.length){var e=c++,f=t(a);for(d=f.next();!d.done;d=f.next())d.value.variantIds.push(e)}if(!a.length&&b.length)for(e=c++,
f=t(b),d=f.next();!d.done;d=f.next())d.value.variantIds.push(e);if(a.length&&b.length)for(b=t(b),d=b.next();!d.done;d=b.next())for(d=d.value,e=t(a),f=e.next();!f.done;f=e.next()){f=f.value;var g=c++;d.variantIds.push(g);f.variantIds.push(g)}}};function Dr(){kr.apply(this,arguments)}qa(Dr,kr);
Dr.prototype.Rb=function(a){var b,c,d,e,f,g;return I(function(h){if(1==h.g){b=[];for(c=0;c<a.periods.length;++c){d=c==a.periods.length-1?a.duration:a.periods[c+1].startTime;e=d-a.periods[c].startTime;for(var k=a.periods[c],l=[],m=t(k.streams),n=m.next();!n.done;n=m.next())n=n.value,0!=n.variantIds.length&&l.push(Er(n,k.startTime,k.startTime+e));f=l;b.push(f)}return v(h,To(b),2)}g=h.h;return h["return"]({appMetadata:a.appMetadata,creationTime:0,drmInfo:a.drmInfo,duration:a.duration,expiration:null==
a.expiration?Infinity:a.expiration,originalManifestUri:a.originalManifestUri,sessionIds:a.sessionIds,size:a.size,streams:g})})};
function Er(a,b,c){return{id:a.id,originalId:a.originalId,primary:a.primary,type:a.contentType,mimeType:a.mimeType,codecs:a.codecs,frameRate:a.frameRate,pixelAspectRatio:a.pixelAspectRatio,hdr:void 0,kind:a.kind,language:a.language,label:a.label,width:a.width,height:a.height,encrypted:a.encrypted,keyIds:new Set([a.keyId]),segments:a.segments.map(function(d){return{startTime:b+d.startTime,endTime:b+d.endTime,initSegmentKey:a.initSegmentKey,appendWindowStart:b,appendWindowEnd:c,timestampOffset:b-a.presentationTimeOffset,
dataKey:d.dataKey,tilesLayout:""}}),variantIds:a.variantIds,roles:[],forced:!1,audioSamplingRate:null,channelsCount:null,spatialAudio:!1,closedCaptions:null,tilesLayout:void 0}};function Fr(){kr.apply(this,arguments)}qa(Fr,kr);Fr.prototype.hasFixedKeySpace=function(){return!1};Fr.prototype.addSegments=function(a){return this.add(this.i,a)};Fr.prototype.addManifests=function(a){return this.add(this.h,a)};Fr.prototype.Rb=function(a){null==a.expiration&&(a.expiration=Infinity);return Promise.resolve(a)};function Gr(){this.m=this.j=this.i=this.h=this.g=this.l=null}q=Gr.prototype;
q.init=function(){var a=this,b=new Ac,c=window.indexedDB.open("shaka_offline_db",5);c.onsuccess=function(){var d=c.result;a.l=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new yr(d,"segment","manifest"):null;a.g=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new Dr(d,"segment-v2","manifest-v2"):null;a.h=e;e=d.objectStoreNames;e=e.contains("manifest-v3")&&e.contains("segment-v3")?new Dr(d,"segment-v3","manifest-v3"):null;a.i=e;e=d.objectStoreNames;
e=e.contains("manifest-v5")&&e.contains("segment-v5")?new Fr(d,"segment-v5","manifest-v5"):null;a.j=e;d=d.objectStoreNames.contains("session-ids")?new or(d):null;a.m=d;b.resolve()};c.onupgradeneeded=function(){for(var d=c.result,e=t(["segment-v5","manifest-v5","session-ids"]),f=e.next();!f.done;f=e.next())f=f.value,d.objectStoreNames.contains(f)||d.createObjectStore(f,{autoIncrement:!0})};c.onerror=function(d){b.reject(new O(2,9,9001,c.error));d.preventDefault()};return b};
q.destroy=function(){var a=this;return I(function(b){switch(b.g){case 1:if(!a.g){b.v(2);break}return v(b,a.g.destroy(),2);case 2:if(!a.h){b.v(4);break}return v(b,a.h.destroy(),4);case 4:if(!a.i){b.v(6);break}return v(b,a.i.destroy(),6);case 6:if(!a.j){b.v(8);break}return v(b,a.j.destroy(),8);case 8:if(!a.m){b.v(10);break}return v(b,a.m.destroy(),10);case 10:a.l&&a.l.close(),z(b)}})};
q.getCells=function(){var a=new Map;this.g&&a.set("v1",this.g);this.h&&a.set("v2",this.h);this.i&&a.set("v3",this.i);this.j&&a.set("v5",this.j);return a};q.getEmeSessionCell=function(){return this.m};
q.erase=function(){var a=this;return I(function(b){switch(b.g){case 1:if(!a.g){b.v(2);break}return v(b,a.g.destroy(),2);case 2:if(!a.h){b.v(4);break}return v(b,a.h.destroy(),4);case 4:if(!a.i){b.v(6);break}return v(b,a.i.destroy(),6);case 6:if(!a.j){b.v(8);break}return v(b,a.j.destroy(),8);case 8:return a.l&&a.l.close(),v(b,Hr(),10);case 10:return a.l=null,a.g=null,a.h=null,a.i=null,a.j=null,v(b,a.init(),0)}})};
function Hr(){var a=new Ac,b=window.indexedDB.deleteDatabase("shaka_offline_db");b.onblocked=function(){};b.onsuccess=function(){a.resolve()};b.onerror=function(c){a.reject(new O(2,9,9001,b.error));c.preventDefault()};return a}xr("idb",function(){return xd()||!window.indexedDB?null:new Gr});function Ir(a,b,c,d){this.g=a;this.i=b;this.h=c;this.l=d;this.j=["offline:",a,"/",b,"/",c,"/",d].join("")}Ir.prototype.Ia=function(){return this.i};Ir.prototype.la=function(){return this.h};Ir.prototype.key=function(){return this.l};Ir.prototype.toString=function(){return this.j};
function Jr(a){a=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);if(null==a)return null;var b=a[1];if("manifest"!=b&&"segment"!=b)return null;var c=a[2];if(!c)return null;var d=a[3];return d&&null!=b?new Ir(b,c,d,Number(a[4])):null};function Kr(a,b){this.h=a;this.g=b}
function Lr(a,b){var c=new U(null,0);c.Ja(b.duration);var d=b.streams.filter(function(l){return"audio"==l.type}),e=b.streams.filter(function(l){return"video"==l.type});d=Mr(a,d,e,c);e=b.streams.filter(function(l){return l.type==yc}).map(function(l){return Nr(a,l,c)});var f=b.streams.filter(function(l){return"image"==l.type}).map(function(l){return Nr(a,l,c)}),g=b.drmInfo?[b.drmInfo]:[];if(b.drmInfo)for(var h=t(d.values()),k=h.next();!k.done;k=h.next())k=k.value,k.audio&&k.audio.encrypted&&(k.audio.drmInfos=
g),k.video&&k.video.encrypted&&(k.video.drmInfos=g);return{presentationTimeline:c,minBufferTime:2,offlineSessionIds:b.sessionIds,variants:Array.from(d.values()),textStreams:e,imageStreams:f}}
function Mr(a,b,c,d){for(var e=new Set,f=t(b),g=f.next();!g.done;g=f.next()){var h=t(g.value.variantIds);for(g=h.next();!g.done;g=h.next())e.add(g.value)}f=t(c);for(g=f.next();!g.done;g=f.next())for(h=t(g.value.variantIds),g=h.next();!g.done;g=h.next())e.add(g.value);f=new Map;e=t(e);for(g=e.next();!g.done;g=e.next())g=g.value,f.set(g,{id:g,language:"",primary:!1,audio:null,video:null,bandwidth:0,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]});b=t(b);for(e=b.next();!e.done;e=b.next())for(e=
e.value,g=Nr(a,e,d),h=t(e.variantIds),e=h.next();!e.done;e=h.next())e=f.get(e.value),e.language=g.language,e.primary=e.primary||g.primary,e.audio=g;c=t(c);for(b=c.next();!b.done;b=c.next())for(e=b.value,b=Nr(a,e,d),g=t(e.variantIds),e=g.next();!e.done;e=g.next())e=f.get(e.value),e.primary=e.primary||b.primary,e.video=b;return f}
function Nr(a,b,c){var d=b.segments.map(function(e){return Or(a,e)});c.Bb(d);return{id:b.id,originalId:b.originalId,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:new V(d),mimeType:b.mimeType,codecs:b.codecs,width:b.width||void 0,height:b.height||void 0,frameRate:b.frameRate,pixelAspectRatio:b.pixelAspectRatio,hdr:b.hdr,kind:b.kind,encrypted:b.encrypted,drmInfos:[],keyIds:b.keyIds,language:b.language,label:b.label,type:b.type,primary:b.primary,trickModeVideo:null,emsgSchemeIdUris:null,
roles:b.roles,forced:b.forced,channelsCount:b.channelsCount,audioSamplingRate:b.audioSamplingRate,spatialAudio:b.spatialAudio,closedCaptions:b.closedCaptions,tilesLayout:b.tilesLayout}}function Or(a,b){var c=new Ir("segment",a.h,a.g,b.dataKey);return new li(b.startTime,b.endTime,function(){return[c.toString()]},0,null,null!=b.initSegmentKey?Pr(a,b.initSegmentKey):null,b.timestampOffset,b.appendWindowStart,b.appendWindowEnd,[],b.tilesLayout||"")}
function Pr(a,b){var c=new Ir("segment",a.h,a.g,b);return new ji(function(){return[c.toString()]},0,null)};function Qr(){this.g=null}q=Qr.prototype;q.configure=function(){};
q.start=function(a,b){var c=this,d,e,f,g,h,k,l;return I(function(m){switch(m.g){case 1:d=Jr(a);c.g=d;if(null==d||"manifest"!=d.g)throw new O(2,1,9004,a);e=new pr;ua(m);return v(m,e.init(),4);case 4:return v(m,tr(e,d.Ia(),d.la()),5);case 5:return f=m.h,v(m,f.getManifests([d.key()]),6);case 6:return g=m.h,h=g[0],k=new Kr(d.Ia(),d.la()),l=Lr(k,h),b.makeTextStreamsForClosedCaptions(l),m["return"](l);case 2:return wa(m),v(m,e.destroy(),7);case 7:xa(m,0)}})};q.stop=function(){return Promise.resolve()};
q.update=function(){};q.onExpirationUpdated=function(a,b){var c=this,d,e,f,g,h,k,l;return I(function(m){switch(m.g){case 1:return d=c.g,e=new pr,A(m,2,3),v(m,e.init(),5);case 5:return v(m,tr(e,d.Ia(),d.la()),6);case 6:return f=m.h,v(m,f.getManifests([d.key()]),7);case 7:g=m.h;h=g[0];k=h.sessionIds.includes(a);l=void 0==h.expiration||h.expiration>b;if(!k||!l){m.v(3);break}return v(m,f.updateManifestExpiration(d.key(),b),3);case 3:return wa(m),v(m,e.destroy(),10);case 10:xa(m,0);break;case 2:E(m),m.v(3)}})};
cg["application/x-offline-manifest"]=function(){return new Qr};function Rr(){}function Sr(a){var b=Jr(a);b&&"manifest"==b.g?(a={uri:a,le:a,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}},a=He(a)):a=b&&"segment"==b.g?Tr(b.key(),b):Fe(new O(2,1,9004,a));return a}
function Tr(a,b){var c=new pr;return He(void 0).ba(function(){return c.init()}).ba(function(){return tr(c,b.Ia(),b.la())}).ba(function(d){return d.getSegments([b.key()])}).ba(function(d){return{uri:b,data:d[0].data,headers:{}}})["finally"](function(){return c.destroy()})}L("shaka.offline.OfflineScheme",Rr);Rr.plugin=Sr;Re("offline",Sr);function Ur(a,b,c){var d,e,f,g,h,k;return I(function(l){switch(l.g){case 1:d=[];for(var m=[],n=t(c),p=n.next();!p.done;p=n.next()){p=p.value;for(var r=!1,u=t(m),w=u.next();!w.done;w=u.next())if(w=w.value,Vr(w.info,p)){w.sessionIds.push(p.sessionId);r=!0;break}r||m.push({info:p,sessionIds:[p.sessionId]})}e=t(m);f=e.next();case 2:if(f.done){l.v(4);break}g=f.value;h=Wr(a,b,g);return v(l,h,5);case 5:k=l.h;d=d.concat(k);f=e.next();l.v(2);break;case 4:return l["return"](d)}})}
function Wr(a,b,c){var d,e;return I(function(f){switch(f.g){case 1:return d=new of({lb:b,onError:function(){},Gc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),A(f,2),d.configure(a),v(f,yf(d,c.info.keySystem,c.info.licenseUri,c.info.serverCertificate,c.info.audioCapabilities,c.info.videoCapabilities),4);case 4:va(f,3);break;case 2:return E(f),v(f,d.destroy(),5);case 5:return f["return"]([]);case 3:return A(f,6),v(f,Hf(d),8);case 8:va(f,7);break;case 6:return E(f),v(f,d.destroy(),
9);case 9:return f["return"]([]);case 7:return e=[],v(f,Promise.all(c.sessionIds.map(function(g){return I(function(h){if(1==h.g)return A(h,2),v(h,If(d,g),4);if(2!=h.g)return e.push(g),va(h,0);E(h);z(h)})})),10);case 10:return v(f,d.destroy(),11);case 11:return f["return"](e)}})}
function Vr(a,b){function c(d,e){return d.robustness==e.robustness&&d.contentType==e.contentType}return a.keySystem==b.keySystem&&a.licenseUri==b.licenseUri&&ob(a.audioCapabilities,b.audioCapabilities,c)&&ob(a.videoCapabilities,b.videoCapabilities,c)};function Xr(a,b,c){var d=b.presentationTimeline.getDuration();b=Yr(b);return{offlineUri:null,originalManifestUri:a,duration:d,size:0,expiration:Infinity,tracks:b,appMetadata:c}}function Zr(a,b){var c=Lr(new Kr(a.Ia(),a.la()),b),d=b.appMetadata||{};c=Yr(c);return{offlineUri:a.toString(),originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:b.expiration,tracks:c,appMetadata:d}}
function Yr(a){var b=[],c=he(a.variants);c=t(c);for(var d=c.next();!d.done;d=c.next())b.push(Zd(d.value));a=t(a.textStreams);for(c=a.next();!c.done;c=a.next())b.push($d(c.value));return b};function $r(){this.g={}}function as(a,b,c){c=c.endTime-c.startTime;return bs(a,b)*c}function bs(a,b){var c=a.g[b];null==c&&(c=0);return c};function cs(a){var b=this;if(a&&a.constructor!=W)throw new O(2,9,9008);this.O=this.o=null;a?(this.o=a.o,this.O=a.Ub()):(this.o=Vj(),this.O=new Qe);this.Lc=[];this.ac=[];this.Ed=[];var c=!a;this.I=new af(function(){var d,e,f,g,h;return I(function(k){switch(k.g){case 1:return v(k,Promise.all(b.Ed.map(function(l){return $q(l)})),2);case 2:d=function(){};e=[];f=t(b.ac);for(g=f.next();!g.done;g=f.next())h=g.value,e.push(h.then(d,d));return v(k,Promise.all(e),3);case 3:if(!c){k.v(4);break}return v(k,b.O.destroy(),
4);case 4:b.o=null,b.O=null,z(k)}})})}function ds(){if(sd())a:{var a=t(qr.values());for(var b=a.next();!b.done;b=a.next())if(b=b.value,b=b()){b.destroy();a=!0;break a}a=!1}else a=!1;return a}q=cs.prototype;q.destroy=function(){return this.I.destroy()};
q.configure=function(a,b){2==arguments.length&&"string"==typeof a&&(a=Tj(a,b));a.manifest&&a.manifest.dash&&"defaultPresentationDelay"in a.manifest.dash&&(Ub("manifest.dash.defaultPresentationDelay configuration","Please Use manifest.defaultPresentationDelay instead."),a.manifest.defaultPresentationDelay=a.manifest.dash.defaultPresentationDelay,delete a.manifest.dash.defaultPresentationDelay);return Xj(this.o,a)};q.getConfiguration=function(){var a=Vj();Xj(a,this.o,Vj());return a};q.Ub=function(){return this.O};
q.store=function(a,b,c){var d=this,e=this.getConfiguration(),f=new Zq(this.O);this.Ed.push(f);b=es(this,a,b||{},function(){var h;return I(function(k){if(1==k.g)return v(k,bg(a,d.O,e.manifest.retryParameters,c||null),2);h=k.h;return k["return"](ac(h))})},e,f);var g=new Ee(b,function(){return $q(f)});g["finally"](function(){nb(d.Ed,f)});g.then=function(h){Ub("shaka.offline.Storage.store.then","Storage operations now return a shaka.util.AbortableOperation, rather than a promise.  Please update to conform to this new API; you can use the |chain| method instead.");
return g.promise.then(h)};return fs(this,g)};q.kf=function(){Ub("shaka.offline.Storage.getStoreInProgress","Multiple concurrent downloads are now supported.");return!1};
function es(a,b,c,d,e,f){var g,h,k,l,m,n,p,r,u,w,y;return I(function(x){switch(x.g){case 1:return gs(),h=g=null,k=new pr,m=l=null,A(x,2,3),v(x,d(),5);case 5:return g=x.h,v(x,hs(a,b,g,e),6);case 6:n=x.h;is(a);p=!n.presentationTimeline.X()&&!n.presentationTimeline.kb();if(!p)throw new O(2,9,9005,b);return v(x,js(a,n,function(C){m=m||C},e),7);case 7:h=x.h;is(a);if(m)throw m;return v(x,ks(n,e),8);case 8:return v(x,k.init(),9);case 9:return is(a),v(x,rr(k),10);case 10:return l=x.h,is(a),v(x,ls(a,l.la,
h,n,b,c,e,f),11);case 11:r=x.h;is(a);if(m)throw m;return v(x,l.la.addManifests([r]),12);case 12:return u=x.h,is(a),w=new Ir("manifest",l.path.Ia,l.path.la,u[0]),x["return"](Zr(w,r));case 3:return wa(x),a.Lc=[],v(x,k.destroy(),13);case 13:if(!g){x.v(14);break}return v(x,g.stop(),14);case 14:if(!h){x.v(16);break}return v(x,h.destroy(),16);case 16:xa(x,0);break;case 2:y=E(x);if(!l){x.v(18);break}return v(x,l.la.removeSegments(a.Lc,function(){}),18);case 18:throw m||y;}})}
function ks(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,w,y,x,C,D,B,F,G,H,M,J,K,R,S,X,T;return I(function(N){switch(N.g){case 1:c={width:Infinity,height:Infinity};Od(a,b.restrictions,c);Rd(a,b.offline.usePersistentLicense);d=[];e=b.preferredAudioChannelCount;f=b.preferredDecodingAttributes;g=b.preferredVideoCodecs;h=b.preferredAudioCodecs;Cd(a,g,h,e,f);k=t(a.variants);for(l=k.next();!l.done;l=k.next())m=l.value,d.push(Zd(m));n=t(a.textStreams);for(p=n.next();!p.done;p=n.next())r=p.value,d.push($d(r));u=t(a.imageStreams);
for(w=u.next();!w.done;w=u.next())y=w.value,d.push(ae(y));return v(N,b.offline.trackSelectionCallback(d),2);case 2:x=N.h;C=a.presentationTimeline.getDuration();D=0;B=t(x);for(F=B.next();!F.done;F=B.next())G=F.value,H=G.bandwidth*C/8,D+=H;A(N,3);return v(N,b.offline.downloadSizeCallback(D),5);case 5:M=N.h;if(!M)throw new O(2,9,9014);va(N,4);break;case 3:J=E(N);if(J instanceof O)throw J;throw new O(2,9,9015);case 4:K=new Set;R=new Set;S=new Set;X=t(x);for(F=X.next();!F.done;F=X.next())T=F.value,"variant"==
T.type&&K.add(T.id),"text"==T.type&&R.add(T.id),"image"==T.type&&S.add(T.id);a.variants=a.variants.filter(function(ea){return K.has(ea.id)});a.textStreams=a.textStreams.filter(function(ea){return R.has(ea.id)});a.imageStreams=a.imageStreams.filter(function(ea){return S.has(ea.id)});ms(a);z(N)}})}
function ls(a,b,c,d,e,f,g,h){var k,l,m,n,p,r,u,w,y,x,C,D;return I(function(B){switch(B.g){case 1:return k=Xr(e,d,f),l=g.offline.progressCallback,m=function(F,G){k.size=G;l(k,F)},n=function(F,G){u&&g.offline.usePersistentLicense&&w==G&&Gf(c,"cenc",F)},ar(h,m,n),p=d.variants.some(function(F){var G=F.audio&&F.audio.encrypted;return F.video&&F.video.encrypted||G}),r=d.variants.some(function(F){return(F.video?F.video.drmInfos:[]).concat(F.audio?F.audio.drmInfos:[]).some(function(G){return G.initData&&
G.initData.length})}),u=p&&!r,w=null,u&&(y=c.i,w=ns.get(y.keySystem)),ua(B),C=x=os(a,h,b,c,d,e,f,g),v(B,er(h),4);case 4:C.size=B.h;x.expiration=c.Tb();D=Mf(c);x.sessionIds=g.offline.usePersistentLicense?D:[];if(p&&g.offline.usePersistentLicense&&!D.length)throw new O(2,9,9007);return B["return"](x);case 2:return wa(B),v(B,h.destroy(),5);case 5:xa(B,0)}})}q.remove=function(a){return ps(this,qs(this,a))};
function qs(a,b){var c,d,e,f,g,h;return I(function(k){switch(k.g){case 1:gs();c=Jr(b);if(null==c||"manifest"!=c.g)throw new O(2,9,9004,b);d=c;e=new pr;ua(k);return v(k,e.init(),4);case 4:return v(k,tr(e,d.Ia(),d.la()),5);case 5:return f=k.h,v(k,f.getManifests([d.key()]),6);case 6:return g=k.h,h=g[0],v(k,Promise.all([rs(a,h,e),ss(f,d,h)]),2);case 2:return wa(k),v(k,e.destroy(),8);case 8:xa(k,0)}})}
function ts(a,b){for(var c=[],d=t(a.streams),e=d.next();!e.done;e=d.next())e=e.value,b&&"video"==e.type?c.push({contentType:Vc(e.mimeType,e.codecs),robustness:a.drmInfo.videoRobustness}):b||"audio"!=e.type||c.push({contentType:Vc(e.mimeType,e.codecs),robustness:a.drmInfo.audioRobustness});return c}function rs(a,b,c){return I(function(d){return v(d,us(a.O,a.o.drm,c,b),0)})}
function ss(a,b,c){function d(){}var e=vs(c);Zr(b,c);return Promise.all([a.removeSegments(e,d),a.removeManifests([b.key()],d)])}q.Kf=function(){return ps(this,ws(this))};
function ws(a){var b,c,d,e,f,g,h,k,l,m;return I(function(n){switch(n.g){case 1:return gs(),b=a.O,c=a.o.drm,d=new pr,e=!1,ua(n),v(n,d.init(),4);case 4:f=[],ur(d,function(p){return f.push(p)}),g=t(f),h=g.next();case 5:if(h.done){n.v(2);break}k=h.value;return v(n,k.getAll(),8);case 8:return l=n.h,v(n,Ur(c,b,l),9);case 9:return m=n.h,v(n,k.remove(m),10);case 10:m.length!=l.length&&(e=!0);h=g.next();n.v(5);break;case 2:return wa(n),v(n,d.destroy(),11);case 11:xa(n,3);break;case 3:return n["return"](!e)}})}
q.list=function(){return ps(this,xs())};function xs(){var a,b,c;return I(function(d){switch(d.g){case 1:return gs(),a=[],b=new pr,ua(d),v(d,b.init(),4);case 4:return c=Promise.resolve(),sr(b,function(e,f){c=c.then(function(){var g;return I(function(h){if(1==h.g)return v(h,f.getAllManifests(),2);g=h.h;g.forEach(function(k,l){var m=Zr(new Ir("manifest",e.Ia,e.la,l),k);a.push(m)});z(h)})})}),v(d,c,2);case 2:return wa(d),v(d,b.destroy(),6);case 6:xa(d,3);break;case 3:return d["return"](a)}})}
function hs(a,b,c,d){var e,f,g,h,k;return I(function(l){if(1==l.g)return e=null,f=a.O,g={networkingEngine:f,filter:function(){return Promise.resolve()},makeTextStreamsForClosedCaptions:function(){},onTimelineRegionAdded:function(){},onEvent:function(){},onError:function(m){e=m},isLowLatencyMode:function(){return!1},isAutoLowLatencyMode:function(){return!1},enableLowLatencyMode:function(){}},c.configure(d.manifest),is(a),v(l,c.start(b,g),2);if(3!=l.g)return h=l.h,is(a),k=ys(h),v(l,Promise.all(db(k,
function(m){return m.createSegmentIndex()})),3);is(a);if(e)throw e;return l["return"](h)})}function js(a,b,c,d){var e;return I(function(f){switch(f.g){case 1:return e=new of({lb:a.O,onError:c,Gc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),e.configure(d.drm),v(f,vf(e,b.variants,d.offline.usePersistentLicense),2);case 2:return v(f,Hf(e),3);case 3:return v(f,Ff(e),4);case 4:return f["return"](e)}})}
function os(a,b,c,d,e,f,g,h){for(var k=new $r,l=t(e.variants),m=l.next();!m.done;m=l.next()){var n=k;m=m.value;var p=m.audio,r=m.video;p&&!r&&(n.g[p.id]=p.bandwidth||m.bandwidth);!p&&r&&(n.g[r.id]=r.bandwidth||m.bandwidth);if(p&&r){var u=p.bandwidth||393216,w=r.bandwidth||m.bandwidth-u;0>=w&&(w=m.bandwidth);n.g[p.id]=u;n.g[r.id]=w}}l=t(e.textStreams);for(n=l.next();!n.done;n=l.next())k.g[n.value.id]=52;l=t(e.imageStreams);for(n=l.next();!n.done;n=l.next())n=n.value,k.g[n.id]=n.bandwidth||2048;n=new Map;
n.set(null,Promise.resolve(null));m=new Map;p=ys(e);l=new Map;p=t(p);for(r=p.next();!r.done;r=p.next())r=r.value,u=zs(a,b,c,k,e,r,h,n,m),l.set(r.id,u);a=t(e.variants);for(m=a.next();!m.done;m=a.next())b=m.value,b.audio&&l.get(b.audio.id).variantIds.push(b.id),b.video&&l.get(b.video.id).variantIds.push(b.id);a=Array.from(l.values());h=h.offline.usePersistentLicense;(b=d.i)&&h&&(b.initData=[]);return{creationTime:Date.now(),originalManifestUri:f,duration:e.presentationTimeline.getDuration(),size:0,
expiration:d.Tb(),streams:a,sessionIds:h?Mf(d):[],drmInfo:b,appMetadata:g}}
function zs(a,b,c,d,e,f,g,h,k){var l={id:f.id,originalId:f.originalId,primary:f.primary,type:f.type,mimeType:f.mimeType,codecs:f.codecs,frameRate:f.frameRate,pixelAspectRatio:f.pixelAspectRatio,hdr:f.hdr,kind:f.kind,language:f.language,label:f.label,width:f.width||null,height:f.height||null,encrypted:f.encrypted,keyIds:f.keyIds,segments:[],variantIds:[],roles:f.roles,forced:f.forced,channelsCount:f.channelsCount,audioSamplingRate:f.audioSamplingRate,spatialAudio:f.spatialAudio,closedCaptions:f.closedCaptions,
tilesLayout:f.tilesLayout},m=f.id;As(f,e.presentationTimeline.Za(),function(n){var p=Bs(a,b,m,f.id,c,d,n.h,g,h),r=Cs(a,b,m,f.id,c,d,n,g,k);dr(b,m,function(){var u,w;return I(function(y){if(1==y.g)return v(y,p,2);if(3!=y.g)return u=y.h,v(y,r,3);w=y.h;l.segments.push({initSegmentKey:u,startTime:n.startTime,endTime:n.endTime,appendWindowStart:n.appendWindowStart,appendWindowEnd:n.appendWindowEnd,timestampOffset:n.timestampOffset,tilesLayout:n.tilesLayout,dataKey:w});z(y)})})});return l}
function Bs(a,b,c,d,e,f,g,h,k){if(k.has(g))return k.get(g);h=Wi(g.ma(),g.ja,g.ea,h.streaming.retryParameters);b=br(b,c,h,.5*bs(f,d),!0,function(l){var m;return I(function(n){if(1==n.g)return v(n,e.addSegments([{data:l}]),2);m=n.h;a.Lc.push(m[0]);return n["return"](m[0])})});k.set(g,b);return b}
function Cs(a,b,c,d,e,f,g,h,k){var l=[g.ma()[0],g.ja,g.ea].join("-");if(k.has(l))return k.get(l);h=Wi(g.ma(),g.ja,g.ea,h.streaming.retryParameters);b=br(b,c,h,as(f,d,g),!1,function(m){var n;return I(function(p){if(1==p.g)return v(p,e.addSegments([{data:m}]),2);n=p.h;a.Lc.push(n[0]);return p["return"](n[0])})});k.set(l,b);return b}function As(a,b,c){b=a.segmentIndex.find(b);if(null!=b)for(var d=a.segmentIndex.get(b);d;)c(d),d=a.segmentIndex.get(++b)}function is(a){if(a.I.g)throw new O(2,9,7001);}
function gs(){if(!ds())throw new O(2,9,9E3);}function ps(a,b){return I(function(c){if(1==c.g)return a.ac.push(b),ua(c),v(c,b,4);if(2!=c.g)return c["return"](c.h);wa(c);nb(a.ac,b);return xa(c,0)})}function fs(a,b){var c=b.promise;a.ac.push(c);return b["finally"](function(){nb(a.ac,c)})}
function vs(a){var b=[];a=t(a.streams);for(var c=a.next();!c.done;c=a.next()){c=t(c.value.segments);for(var d=c.next();!d.done;d=c.next())d=d.value,null!=d.initSegmentKey&&b.push(d.initSegmentKey),b.push(d.dataKey)}return b}
function us(a,b,c,d){var e,f,g;return I(function(h){if(1==h.g){if(!d.drmInfo)return h["return"]();e=vr(c);f=d.sessionIds.map(function(k){return{sessionId:k,keySystem:d.drmInfo.keySystem,licenseUri:d.drmInfo.licenseServerUri,serverCertificate:d.drmInfo.serverCertificate,audioCapabilities:ts(d,!1),videoCapabilities:ts(d,!0)}});return v(h,Ur(b,a,f),2)}return 3!=h.g?(g=h.h,v(h,e.remove(g),3)):v(h,e.add(f.filter(function(k){return!g.includes(k.sessionId)})),0)})}
function ys(a){for(var b=new Set,c=t(a.textStreams),d=c.next();!d.done;d=c.next())b.add(d.value);c=t(a.imageStreams);for(d=c.next();!d.done;d=c.next())b.add(d.value);a=t(a.variants);for(c=a.next();!c.done;c=a.next())c=c.value,c.audio&&b.add(c.audio),c.video&&b.add(c.video);return b}
function ms(a){a.variants.map(function(f){return f.video});var b=new Set(a.variants.map(function(f){return f.audio}));a=a.textStreams;for(var c=t(b),d=c.next();!d.done;d=c.next()){d=t(b);for(var e=d.next();!e.done;e=d.next());}b=t(a);for(c=b.next();!c.done;c=b.next())for(c=t(a),d=c.next();!d.done;d=c.next());}L("shaka.offline.Storage",cs);cs.deleteAll=function(){var a;return I(function(b){return 1==b.g?(a=new pr,ua(b),v(b,wr(a),2)):5!=b.g?(wa(b),v(b,a.destroy(),5)):xa(b,0)})};cs.prototype.list=cs.prototype.list;
cs.prototype.removeEmeSessions=cs.prototype.Kf;cs.prototype.remove=cs.prototype.remove;cs.prototype.getStoreInProgress=cs.prototype.kf;cs.prototype.store=cs.prototype.store;cs.prototype.getNetworkingEngine=cs.prototype.Ub;cs.prototype.getConfiguration=cs.prototype.getConfiguration;cs.prototype.configure=cs.prototype.configure;cs.prototype.destroy=cs.prototype.destroy;cs.support=ds;
var ns=(new Map).set("org.w3.clearkey","1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha","edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready","9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.recommendation","9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.software","9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.hardware","9a04f07998404286ab92e65be0885f95").set("com.adobe.primetime","f239e769efa348509c16a903c6932efb");
Xl.offline=ds;function Ds(){}function Es(a,b){for(var c={priority:b||0,Ge:a},d=t(kb(Fs)),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.ha;if(e.item.priority<c.priority){Fs.splice(f,0,c);return}}Fs.push(c)}L("shaka.polyfill",Ds);Ds.register=Es;Ds.installAll=function(){for(var a=t(Fs),b=a.next();!b.done;b=a.next()){b=b.value;try{b.Ge()}catch(c){Va("Error installing polyfill!",c)}}};var Fs=[];function Gs(){}function Hs(){if(!Object.getOwnPropertyDescriptor(Element.prototype,"ariaHidden"))for(var a=t(["ariaHidden","ariaLabel","ariaPressed","ariaSelected"]),b=a.next();!b.done;b=a.next())Is(b.value)}function Is(a){var b="aria-"+a.toLowerCase().replace(/^aria/,"");Object.defineProperty(Element.prototype,a,{get:function(){return this.getAttribute(b)},set:function(c){null==c||void 0==c?this.removeAttribute(b):this.setAttribute(b,c)}})}Ds.Aria=Gs;Gs.install=Hs;Es(Hs);function Js(){}function Ks(){Ls()}Ds.EncryptionScheme=Js;Js.install=Ks;Es(Ks,-2);function Ms(){}
function Ns(){if(window.Document){var a=Element.prototype;a.requestFullscreen=a.requestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen||a.webkitRequestFullscreen;a=Document.prototype;a.exitFullscreen=a.exitFullscreen||a.mozCancelFullScreen||a.msExitFullscreen||a.webkitCancelFullScreen;"fullscreenElement"in document||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitCurrentFullScreenElement||document.webkitFullscreenElement}}),
Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}}));document.addEventListener("webkitfullscreenchange",Os);document.addEventListener("webkitfullscreenerror",Os);document.addEventListener("mozfullscreenchange",Os);document.addEventListener("mozfullscreenerror",Os);document.addEventListener("MSFullscreenChange",Os);document.addEventListener("MSFullscreenError",Os)}}
function Os(a){var b=a.type.replace(/^(webkit|moz|MS)/,"").toLowerCase(),c=document.createEvent("Event");c.initEvent(b,a.bubbles,a.cancelable);a.target.dispatchEvent(c)}Ds.Fullscreen=Ms;Ms.install=Ns;Es(Ns);function Ps(){}function Qs(){}Ds.MathRound=Ps;Ps.install=Qs;Es(Qs);function Rs(){}function Ss(){if(xd()||yd()||!navigator.mediaCapabilities)navigator.mediaCapabilities||(navigator.mediaCapabilities={}),navigator.mediaCapabilities.decodingInfo=Ts;window.shakaMediaCapabilities=navigator.mediaCapabilities}
function Ts(a){var b,c,d,e,f,g,h,k,l,m,n,p,r,u,w,y;return I(function(x){switch(x.g){case 1:b={supported:!1,powerEfficient:!0,smooth:!0,keySystemAccess:null,configuration:a};if(!a)return x["return"](b);if("media-source"==a.type){if(!sd()||a.video&&(c=a.video.contentType,d=MediaSource.isTypeSupported(c),!d)||a.audio&&(e=a.audio.contentType,f=MediaSource.isTypeSupported(e),!f))return x["return"](b)}else if("file"==a.type){if(a.video&&(g=a.video.contentType,h=td(g),!h)||a.audio&&(k=a.audio.contentType,
l=td(k),!l))return x["return"](b)}else return x["return"](b);if(!a.keySystemConfiguration)return b.supported=!0,x["return"](Promise.resolve(b));m=a.keySystemConfiguration;n=[];p=[];m.audio&&(r={robustness:m.audio.robustness||"",contentType:a.audio.contentType},n.push(r));m.video&&(u={robustness:m.video.robustness||"",contentType:a.video.contentType},p.push(u));w={initDataTypes:[m.initDataType],distinctiveIdentifier:m.distinctiveIdentifier,persistentState:m.persistentState,sessionTypes:m.sessionTypes};
n.length&&(w.audioCapabilities=n);p.length&&(w.videoCapabilities=p);A(x,3);return v(x,navigator.requestMediaKeySystemAccess(m.keySystem,[w]),5);case 5:y=x.h;va(x,4);break;case 3:E(x);case 4:y&&(b.supported=!0,b.keySystemAccess=y);case 2:return x["return"](b)}})}Ds.MediaCapabilities=Rs;Rs.install=Ss;Es(Ss,-1);function Us(){}function Vs(){var a=zd();window.MediaSource&&(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType?Ws():a?(Xs(),12>=a?(Ys(),Zs()):Ys()):(wd("Tizen 2")||wd("Tizen 3")||wd("Tizen 4"))&&$s());window.MediaSource&&MediaSource.isTypeSupported('video/webm; codecs="vp9"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"')&&at()}
function Ys(){var a=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];c=a.apply(this,c);c.abort=function(){};return c}}function Zs(){var a=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(b,c){return a.call(this,b,c-.001)}}function Xs(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){return"mp2t"==b.split(/ *; */)[0].split("/")[1].toLowerCase()?!1:a(b)}}
function $s(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){return"opus"!=Xc(b)&&a(b)}}function Ws(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){var c=b.split(/ *; */);c.shift();return c.some(function(d){return d.startsWith("codecs=")})?cast.__platform__.canDisplayType(b):a(b)}}
function at(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){var c=b.split(/ *; */),d=c.findIndex(function(g){return g.startsWith("codecs=")});if(0>d)return a(b);var e=c[d].replace("codecs=","").replace(/"/g,"").split(/\s*,\s*/),f=e.findIndex(function(g){return g.startsWith("vp09")});0<=f&&(e[f]="vp9",c[d]='codecs="'+e.join(",")+'"',b=c.join("; "));return a(b)}}Ds.MediaSource=Us;Us.install=Vs;Es(Vs);function bt(){}function ct(){screen.orientation||void 0!=window.orientation&&dt()}function dt(){function a(){switch(window.orientation){case -90:b.type="landscape-secondary";b.angle=270;break;case 0:b.type="portrait-primary";b.angle=0;break;case 90:b.type="landscape-primary";b.angle=90;break;case 180:b.type="portrait-secondary",b.angle=180}}var b=new et;screen.orientation=b;a();window.addEventListener("orientationchange",function(){a();var c=new Q("change",{});b.dispatchEvent(c)})}
Ds.Orientation=bt;bt.install=ct;function et(){Le.call(this);this.type="";this.angle=0}qa(et,Le);
et.prototype.lock=function(a){function b(d){return screen.lockOrientation?screen.lockOrientation(d):screen.mozLockOrientation?screen.mozLockOrientation(d):screen.msLockOrientation?screen.msLockOrientation(d):!1}var c=!1;switch(a){case "natural":c=b("default");break;case "any":c=!0;this.unlock();break;default:c=b(a)}if(c)return Promise.resolve();a=Error("screen.orientation.lock() is not available on this device");a.name="NotSupportedError";a.code=DOMException.NOT_SUPPORTED_ERR;return Promise.reject(a)};
et.prototype.unlock=function(){screen.unlockOrientation?screen.unlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()};Es(ct);function ft(){}function gt(){window.HTMLVideoElement&&window.WebKitMediaKeys&&(delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=ht,window.MediaKeys=it,window.MediaKeySystemAccess=jt,navigator.requestMediaKeySystemAccess=kt)}function kt(a,b){try{var c=new jt(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}
function ht(a){var b=this.mediaKeys;b&&b!=a&&lt(b,null);delete this.mediaKeys;return(this.mediaKeys=a)?lt(a,this):Promise.resolve()}function mt(a){a=Ob(a.initData);if(Sb(a).getUint32(0,!0)+4!=a.byteLength)throw new RangeError("Malformed FairPlay init data");a=Ec(a.subarray(4),!0);a=Hc(a);var b=new Event("encrypted");b.initDataType="skd";b.initData=Pb(a);this.dispatchEvent(b)}Ds.PatchedMediaKeysApple=ft;ft.install=gt;
function jt(a,b){this.keySystem=a;if(a.startsWith("com.apple.fps"))for(var c=t(b),d=c.next();!d.done;d=c.next()){var e=d.value;if("required"==e.persistentState)d=null;else{d={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label};var f=!1,g=!1;if(e.audioCapabilities)for(var h=t(e.audioCapabilities),k=h.next();!k.done;k=h.next())k=k.value,k.contentType&&(f=!0,WebKitMediaKeys.isTypeSupported(this.keySystem,
k.contentType.split(";")[0])&&(d.audioCapabilities.push(k),g=!0));if(e.videoCapabilities)for(e=t(e.videoCapabilities),k=e.next();!k.done;k=e.next())h=k.value,h.contentType&&(f=!0,WebKitMediaKeys.isTypeSupported(this.keySystem,h.contentType.split(";")[0])&&(d.videoCapabilities.push(h),g=!0));f||(g=WebKitMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));d=g?d:null}if(d){this.g=d;return}}c=Error("Unsupported keySystem");c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}
jt.prototype.createMediaKeys=function(){var a=new it(this.keySystem);return Promise.resolve(a)};jt.prototype.getConfiguration=function(){return this.g};function it(a){this.g=new WebKitMediaKeys(a);this.h=new cf}it.prototype.createSession=function(a){a=a||"temporary";if("temporary"!=a)throw new TypeError("Session type "+a+" is unsupported on this platform.");return new nt(this.g,a)};it.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function lt(a,b){a.h.nb();if(!b)return Promise.resolve();a.h.A(b,"webkitneedkey",mt);try{return si(b,HTMLMediaElement.HAVE_METADATA,a.h,function(){b.webkitSetMediaKeys(a.g)}),Promise.resolve()}catch(c){return Promise.reject(c)}}function nt(a){Le.call(this);this.j=null;this.l=a;this.i=this.g=null;this.h=new cf;this.sessionId="";this.expiration=NaN;this.closed=new Ac;this.keyStatuses=new ot}qa(nt,Le);q=nt.prototype;
q.generateRequest=function(a,b){var c=this;this.g=new Ac;try{var d=this.l.createSession("video/mp4",Ob(b));this.j=d;this.sessionId=d.sessionId||"";this.h.A(this.j,"webkitkeymessage",function(e){c.g&&(c.g.resolve(),c.g=null);e=new Q("message",{messageType:void 0==c.keyStatuses.g?"license-request":"license-renewal",message:Pb(e.message)});c.dispatchEvent(e)});this.h.A(d,"webkitkeyadded",function(){c.i&&(pt(c,"usable"),c.i.resolve(),c.i=null)});this.h.A(d,"webkitkeyerror",function(){var e=Error("EME PatchedMediaKeysApple key error");
e.errorCode=c.j.error;if(null!=c.g)c.g.reject(e),c.g=null;else if(null!=c.i)c.i.reject(e),c.i=null;else switch(c.j.error.code){case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:pt(c,"output-not-allowed");break;default:pt(c,"internal-error")}});pt(this,"status-pending")}catch(e){this.g.reject(e)}return this.g};q.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};q.update=function(a){this.i=new Ac;try{this.j.update(Ob(a))}catch(b){this.i.reject(b)}return this.i};
q.close=function(){try{this.j.close(),this.closed.resolve(),this.h.nb()}catch(a){this.closed.reject(a)}return this.closed};q.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function pt(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.g=b;c=new Q("keystatuseschange");a.dispatchEvent(c)}function ot(){this.size=0;this.g=void 0}q=ot.prototype;q.forEach=function(a){this.g&&a(this.g,$f.value())};
q.get=function(a){if(this.has(a))return this.g};q.has=function(a){var b=$f.value();return this.g&&Mb(a,b)?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};Es(gt);function qt(){}function rt(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,window.MediaKeys=st,window.MediaKeySystemAccess=tt,navigator.requestMediaKeySystemAccess=ut,HTMLMediaElement.prototype.setMediaKeys=vt)}function ut(a,b){try{var c=new tt(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}
function wt(a){if(a.initData){var b=new CustomEvent("encrypted");b.initDataType="cenc";b.initData=Pb(wn(a.initData));this.dispatchEvent(b)}}Ds.PatchedMediaKeysMs=qt;qt.install=rt;
function tt(a,b){this.keySystem=a;for(var c=!1,d=t(b),e=d.next();!e.done;e=d.next()){e=e.value;var f={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label},g=!1;if(e.audioCapabilities)for(var h=t(e.audioCapabilities),k=h.next();!k.done;k=h.next())k=k.value,k.contentType&&(g=!0,MSMediaKeys.isTypeSupported(this.keySystem,k.contentType.split(";")[0])&&(f.audioCapabilities.push(k),c=
!0));if(e.videoCapabilities)for(h=t(e.videoCapabilities),k=h.next();!k.done;k=h.next())k=k.value,k.contentType&&(g=!0,MSMediaKeys.isTypeSupported(this.keySystem,k.contentType.split(";")[0])&&(f.videoCapabilities.push(k),c=!0));g||(c=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==e.persistentState&&(c=!1);if(c){this.g=f;return}}c=Error("Unsupported keySystem");c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}
tt.prototype.createMediaKeys=function(){var a=new st(this.keySystem);return Promise.resolve(a)};tt.prototype.getConfiguration=function(){return this.g};function vt(a){var b=this.mediaKeys;b&&b!=a&&xt(b,null);delete this.mediaKeys;return(this.mediaKeys=a)?xt(a,this):Promise.resolve()}function st(a){this.g=new MSMediaKeys(a);this.h=new cf}
st.prototype.createSession=function(a){a=a||"temporary";if("temporary"!=a)throw new TypeError("Session type "+a+" is unsupported on this platform.");return new yt(this.g,a)};st.prototype.setServerCertificate=function(){return Promise.resolve(!1)};function xt(a,b){a.h.nb();if(!b)return Promise.resolve();a.h.A(b,"msneedkey",wt);try{return si(b,HTMLMediaElement.HAVE_METADATA,a.h,function(){b.msSetMediaKeys(a.g)}),Promise.resolve()}catch(c){return Promise.reject(c)}}
function yt(a){Le.call(this);this.j=null;this.l=a;this.i=this.g=null;this.h=new cf;this.sessionId="";this.expiration=NaN;this.closed=new Ac;this.keyStatuses=new zt}qa(yt,Le);q=yt.prototype;
q.generateRequest=function(a,b){var c=this;this.g=new Ac;try{this.j=this.l.createSession("video/mp4",Ob(b),null),this.h.A(this.j,"mskeymessage",function(d){c.g&&(c.g.resolve(),c.g=null);d=new Q("message",{messageType:void 0==c.keyStatuses.g?"license-request":"license-renewal",message:Pb(d.message)});c.dispatchEvent(d)}),this.h.A(this.j,"mskeyadded",function(){c.g?(At(c,"usable"),c.g.resolve(),c.g=null):c.i&&(At(c,"usable"),c.i.resolve(),c.i=null)}),this.h.A(this.j,"mskeyerror",function(){var d=Error("EME PatchedMediaKeysMs key error");
d.errorCode=c.j.error;if(null!=c.g)c.g.reject(d),c.g=null;else if(null!=c.i)c.i.reject(d),c.i=null;else switch(c.j.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:At(c,"output-not-allowed");break;default:At(c,"internal-error")}}),At(this,"status-pending")}catch(d){this.g.reject(d)}return this.g};q.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};q.update=function(a){this.i=new Ac;try{this.j.update(Ob(a))}catch(b){this.i.reject(b)}return this.i};
q.close=function(){try{this.j.close(),this.closed.resolve(),this.h.nb()}catch(a){this.closed.reject(a)}return this.closed};q.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function At(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.g=b;c=new Q("keystatuseschange");a.dispatchEvent(c)}function zt(){this.size=0;this.g=void 0}q=zt.prototype;q.forEach=function(a){this.g&&a(this.g,$f.value())};
q.get=function(a){if(this.has(a))return this.g};q.has=function(a){var b=$f.value();return this.g&&Mb(a,b)?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};Es(rt);function Bt(){}function Ct(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=Dt,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Et,window.MediaKeys=Ft,window.MediaKeySystemAccess=Gt)}function Dt(){return Promise.reject(Error("The key system specified is not supported."))}
function Et(a){return null==a?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}Ds.PatchedMediaKeysNop=Bt;Bt.install=Ct;function Ft(){throw new TypeError("Illegal constructor.");}Ft.prototype.createSession=function(){};Ft.prototype.setServerCertificate=function(){};function Gt(){this.keySystem="";throw new TypeError("Illegal constructor.");}Gt.prototype.getConfiguration=function(){};Gt.prototype.createMediaKeys=function(){};Es(Ct,-10);function Ht(){}function It(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)Jt="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;navigator.requestMediaKeySystemAccess=Kt;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=Lt;window.MediaKeys=Mt;window.MediaKeySystemAccess=Nt}}
function Ot(a){var b=Jt;return b?b+a.charAt(0).toUpperCase()+a.slice(1):a}function Kt(a,b){try{var c=new Nt(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}function Lt(a){var b=this.mediaKeys;b&&b!=a&&Pt(b,null);delete this.mediaKeys;(this.mediaKeys=a)&&Pt(a,this);return Promise.resolve()}Ds.PatchedMediaKeysWebkit=Ht;Ht.install=It;
function Nt(a,b){this.g=this.keySystem=a;var c=!1;"org.w3.clearkey"==a&&(this.g="webkit-org.w3.clearkey",c=!1);var d=!1;var e=document.getElementsByTagName("video");e=e.length?e[0]:document.createElement("video");for(var f=t(b),g=f.next();!g.done;g=f.next()){g=g.value;var h={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:g.initDataTypes,sessionTypes:["temporary"],label:g.label},k=!1;if(g.audioCapabilities)for(var l=t(g.audioCapabilities),
m=l.next();!m.done;m=l.next())m=m.value,m.contentType&&(k=!0,e.canPlayType(m.contentType.split(";")[0],this.g)&&(h.audioCapabilities.push(m),d=!0));if(g.videoCapabilities)for(l=t(g.videoCapabilities),m=l.next();!m.done;m=l.next())m=m.value,m.contentType&&(k=!0,e.canPlayType(m.contentType,this.g)&&(h.videoCapabilities.push(m),d=!0));k||(d=e.canPlayType("video/mp4",this.g)||e.canPlayType("video/webm",this.g));"required"==g.persistentState&&(c?(h.persistentState="required",h.sessionTypes=["persistent-license"]):
d=!1);if(d){this.h=h;return}}c="Unsupported keySystem";if("org.w3.clearkey"==a||"com.widevine.alpha"==a)c="None of the requested configurations were supported.";c=Error(c);c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}Nt.prototype.createMediaKeys=function(){var a=new Mt(this.g);return Promise.resolve(a)};Nt.prototype.getConfiguration=function(){return this.h};function Mt(a){this.l=a;this.g=null;this.h=new cf;this.i=[];this.j=new Map}
function Pt(a,b){a.g=b;a.h.nb();var c=Jt;b&&(a.h.A(b,c+"needkey",function(d){var e=new CustomEvent("encrypted");e.initDataType="cenc";e.initData=Pb(d.initData);a.g.dispatchEvent(e)}),a.h.A(b,c+"keymessage",function(d){var e=Qt(a,d.sessionId);e&&(d=new Q("message",{messageType:void 0==e.keyStatuses.g?"licenserequest":"licenserenewal",message:d.message}),e.h&&(e.h.resolve(),e.h=null),e.dispatchEvent(d))}),a.h.A(b,c+"keyadded",function(d){if(d=Qt(a,d.sessionId))Rt(d,"usable"),d.g&&d.g.resolve(),d.g=
null}),a.h.A(b,c+"keyerror",function(d){var e=Qt(a,d.sessionId);e&&e.handleError(d)}))}Mt.prototype.createSession=function(a){a=a||"temporary";if("temporary"!=a&&"persistent-license"!=a)throw new TypeError("Session type "+a+" is unsupported on this platform.");var b=this.g||document.createElement("video");b.src||(b.src="about:blank");a=new St(b,this.l,a);this.i.push(a);return a};Mt.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function Qt(a,b){var c=a.j.get(b);return c?c:(c=a.i.shift())?(c.sessionId=b,a.j.set(b,c),c):null}function St(a,b,c){Le.call(this);this.j=a;this.m=!1;this.g=this.h=null;this.i=b;this.l=c;this.sessionId="";this.expiration=NaN;this.closed=new Ac;this.keyStatuses=new Tt}qa(St,Le);q=St.prototype;
q.handleError=function(a){var b=Error("EME v0.1b key error"),c=a.errorCode;c.systemCode=a.systemCode;b.errorCode=c;!a.sessionId&&this.h?(45==a.systemCode&&(b.message="Unsupported session type."),this.h.reject(b),this.h=null):a.sessionId&&this.g?(this.g.reject(b),this.g=null):(b=a.systemCode,a.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?Rt(this,"output-restricted"):1==b?Rt(this,"expired"):Rt(this,"internal-error"))};
function Ut(a,b,c){if(a.m)return Promise.reject(Error("The session is already initialized."));a.m=!0;try{if("persistent-license"==a.l)if(c)var d=Ob(Hc("LOAD_SESSION|"+c));else{var e=Hc("PERSISTENT|");d=Pc(e,b)}else d=Ob(b)}catch(g){return Promise.reject(g)}a.h=new Ac;var f=Ot("generateKeyRequest");try{a.j[f](a.i,d)}catch(g){if("InvalidStateError"!=g.name)return a.h=null,Promise.reject(g);(new P(function(){try{a.j[f](a.i,d)}catch(h){a.h.reject(h),a.h=null}})).U(.01)}return a.h}
function Vt(a,b,c){if(a.g)a.g.then(function(){return Vt(a,b,c)})["catch"](function(){return Vt(a,b,c)});else{a.g=b;if("webkit-org.w3.clearkey"==a.i){var d=Dc(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(a.g.reject(Error("Response is not a valid JSON Web Key Set.")),a.g=null);d=Mc(e.keys[0].k);e=Mc(e.keys[0].kid)}else d=Ob(c),e=null;var f=Ot("addKey");try{a.j[f](a.i,d,e,a.sessionId)}catch(g){a.g.reject(g),a.g=null}}}
function Rt(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.g=b;c=new Q("keystatuseschange");a.dispatchEvent(c)}q.generateRequest=function(a,b){return Ut(this,b,null)};q.load=function(a){return"persistent-license"==this.l?Ut(this,null,a):Promise.reject(Error("Not a persistent session."))};q.update=function(a){var b=new Ac;Vt(this,b,a);return b};
q.close=function(){if("persistent-license"!=this.l){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var a=Ot("cancelKeyRequest");try{this.j[a](this.i,this.sessionId)}catch(b){}}this.closed.resolve();return this.closed};q.remove=function(){return"persistent-license"!=this.l?Promise.reject(Error("Not a persistent session.")):this.close()};function Tt(){this.size=0;this.g=void 0}q=Tt.prototype;q.forEach=function(a){this.g&&a(this.g,$f.value())};q.get=function(a){if(this.has(a))return this.g};
q.has=function(a){var b=$f.value();return this.g&&Mb(a,b)?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};var Jt="";Es(It);function Wt(){}function Xt(){if(window.HTMLVideoElement){var a=HTMLVideoElement.prototype;a.requestPictureInPicture&&document.exitPictureInPicture||!a.webkitSupportsPresentationMode||(document.pictureInPictureEnabled=!0,document.pictureInPictureElement=null,a.requestPictureInPicture=Yt,Object.defineProperty(a,"disablePictureInPicture",{get:Zt,set:$t,enumerable:!0,configurable:!0}),document.exitPictureInPicture=au,document.addEventListener("webkitpresentationmodechanged",bu,!0))}}
function bu(a){a=a.target;if("picture-in-picture"==a.webkitPresentationMode){document.pictureInPictureElement=a;var b=new Event("enterpictureinpicture");a.dispatchEvent(b)}else document.pictureInPictureElement==a&&(document.pictureInPictureElement=null),b=new Event("leavepictureinpicture"),a.dispatchEvent(b)}
function Yt(){return this.webkitSupportsPresentationMode("picture-in-picture")?(this.webkitSetPresentationMode("picture-in-picture"),document.pictureInPictureElement=this,Promise.resolve()):Promise.reject(Error("PiP not allowed by video element"))}function au(){var a=document.pictureInPictureElement;return a?(a.webkitSetPresentationMode("inline"),document.pictureInPictureElement=null,Promise.resolve()):Promise.reject(Error("No picture in picture element found"))}
function Zt(){return this.hasAttribute("disablePictureInPicture")?!0:!this.webkitSupportsPresentationMode("picture-in-picture")}function $t(a){a?this.setAttribute("disablePictureInPicture",""):this.removeAttribute("disablePictureInPicture")}Ds.PiPWebkit=Wt;Wt.install=Xt;Es(Xt);function cu(){}function du(){navigator.storage&&navigator.storage.estimate||!navigator.webkitTemporaryStorage||!navigator.webkitTemporaryStorage.queryUsageAndQuota||("storage"in navigator||(navigator.storage={}),navigator.storage.estimate=eu)}function eu(){return new Promise(function(a,b){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(c,d){a({usage:c,quota:d})},b)})}Ds.StorageEstimate=cu;cu.install=du;Es(du);function fu(){}function gu(){if(window.HTMLMediaElement){var a=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var b=a.apply(this);b&&b["catch"](function(){});return b}}}Ds.VideoPlayPromise=fu;fu.install=gu;Es(gu);function hu(){}function iu(){if(window.HTMLVideoElement){var a=HTMLVideoElement.prototype;!a.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in a&&(a.getVideoPlaybackQuality=ju)}}function ju(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Ds.VideoPlaybackQuality=hu;hu.install=iu;Es(iu);function ku(){}function lu(){if(!window.VTTCue&&window.TextTrackCue){var a=null,b=TextTrackCue.length;if(3==b)a=mu;else if(6==b)a=nu;else{try{var c=!!mu(1,2,"")}catch(d){c=!1}c&&(a=mu)}a&&(window.VTTCue=function(d,e,f){return a(d,e,f)})}}function mu(a,b,c){return new window.TextTrackCue(a,b,c)}function nu(a,b,c){return new window.TextTrackCue(a+"-"+b+"-"+c,a,b,c)}Ds.VTTCue=ku;ku.install=lu;Es(lu);function ou(){}ou.prototype.parseInit=function(){};ou.prototype.parseMedia=function(a,b){var c=null,d=[],e=Dc(a).split(/\r?\n/);e=t(e);for(var f=e.next();!f.done;f=e.next())if((f=f.value)&&!/^\s+$/.test(f)&&(f=pu.exec(f))){var g=qu.exec(f[1]);g=60*parseInt(g[1],10)+parseFloat(g[2].replace(",","."));f=new qb(g,b.segmentEnd?b.segmentEnd:g+2,f[2]);c&&(c.endTime=g,d.push(c));c=f}c&&d.push(c);return d};L("shaka.text.LrcTextParser",ou);ou.prototype.parseMedia=ou.prototype.parseMedia;
ou.prototype.parseInit=ou.prototype.parseInit;var pu=/^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/,qu=/^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;ad["application/x-subtitle-lrc"]=function(){return new ou};function ru(){}ru.prototype.parseInit=function(){};
ru.prototype.parseMedia=function(a,b){var c=Dc(a),d=[],e=new DOMParser,f=null;if(""==c)return d;try{f=e.parseFromString(c,"text/xml")}catch(D){throw new O(2,2,2005,"Failed to parse TTML.");}if(f){if(c=f.getElementsByTagName("parsererror")[0])throw new O(2,2,2005,c.textContent);var g=f.getElementsByTagName("tt")[0];if(!g)throw new O(2,2,2005,"TTML does not contain <tt> tag.");e=g.getElementsByTagName("body")[0];if(!e)return[];c=Cn(g,"http://www.w3.org/ns/ttml#parameter","frameRate");var h=Cn(g,"http://www.w3.org/ns/ttml#parameter",
"subFrameRate"),k=Cn(g,"http://www.w3.org/ns/ttml#parameter","frameRateMultiplier"),l=Cn(g,"http://www.w3.org/ns/ttml#parameter","tickRate"),m=Cn(g,"http://www.w3.org/ns/ttml#parameter","cellResolution");f=g.getAttribute("xml:space")||"default";var n=Cn(g,"http://www.w3.org/ns/ttml#styling","extent");if("default"!=f&&"preserve"!=f)throw new O(2,2,2005,"Invalid xml:space value: "+f);f="default"==f;c=new su(c,h,k,l);m=m?(m=/^(\d+) (\d+)$/.exec(m))?{columns:parseInt(m[1],10),rows:parseInt(m[2],10)}:
null:null;h=(h=g.getElementsByTagName("metadata")[0])?Bn(h):[];k=Array.from(g.getElementsByTagName("style"));g=Array.from(g.getElementsByTagName("region"));l=[];for(var p=t(g),r=p.next();!r.done;r=p.next()){var u=r.value;r=new sb;var w=u.getAttribute("xml:id");if(w){r.id=w;var y=null;n&&(y=tu.exec(n)||uu.exec(n));w=y?Number(y[1]):null;y=y?Number(y[2]):null;var x,C;if(x=vu(u,k,"extent"))x=(C=tu.exec(x))||uu.exec(x),null!=x&&(r.width=Number(x[1]),r.height=Number(x[2]),C||(null!=w&&(r.width=100*r.width/
w),null!=y&&(r.height=100*r.height/y)),r.widthUnits=C||null!=w?Jb:0,r.heightUnits=C||null!=y?Jb:0);if(u=vu(u,k,"origin"))x=(C=tu.exec(u))||uu.exec(u),null!=x&&(r.viewportAnchorX=Number(x[1]),r.viewportAnchorY=Number(x[2]),C||(null!=y&&(r.viewportAnchorY=100*r.viewportAnchorY/y),null!=w&&(r.viewportAnchorX=100*r.viewportAnchorX/w)),r.viewportAnchorUnits=C||null!=w?Jb:0)}else r=null;r&&l.push(r)}if(yn(e,"p").length)throw new O(2,2,2001,"<p> can only be inside <div> in TTML");e=t(yn(e,"div"));for(n=
e.next();!n.done;n=e.next()){n=n.value;if(yn(n,"span").length)throw new O(2,2,2001,"<span> can only be inside <p> in TTML");if((p=yn(n,"p"))&&p.length)for(n=t(p),p=n.next();!p.done;p=n.next())(p=wu(p.value,b.periodStart,c,h,k,g,l,f,!1,m))&&d.push(p);else(n=wu(n,b.periodStart,c,h,k,g,l,f,!1,m))&&d.push(n)}}return d};
function wu(a,b,c,d,e,f,g,h,k,l){var m=a.parentNode;if(a.nodeType==Node.TEXT_NODE){var n=document.createElement("span");n.textContent=a.textContent;a=n}n="default"==(a.getAttribute("xml:space")||(h?"default":"preserve"));var p=Array.from(a.childNodes).every(function(x){return x.nodeType==Node.TEXT_NODE});h=[];if(!p)for(var r=t(a.childNodes),u=r.next();!u.done;u=r.next())(u=wu(u.value,b,c,d,e,f,g,n,!0,l))&&h.push(u);r=/\S/.test(a.textContent);var w=a.hasAttribute("begin")||a.hasAttribute("end")||a.hasAttribute("dur");
if(!(w||r||"br"==a.tagName||0!=h.length||k&&!n))return null;u=xu(a,c);r=u.start;for(u=u.end;m&&m.nodeType==Node.ELEMENT_NODE&&"tt"!=m.tagName;)u=yu(m,c,r,u),r=u.start,u=u.end,m=m.parentNode;null==r&&(r=0);r+=b;u=null==u?Infinity:u+b;if(!w&&0<h.length)for(r=Infinity,u=0,b=t(h),c=b.next();!c.done;c=b.next())c=c.value,r=Math.min(r,c.startTime),u=Math.max(u,c.endTime);if("br"==a.tagName)return d=new qb(r,u,""),d.lineBreak=!0,d;b="";p&&(b=a.textContent,n&&(b=b.trim(),b=b.replace(/\s+/g," ")));n=new qb(r,
u,b);n.nestedCues=h;l&&(n.cellResolution=l);if((f=zu(a,"region",f,"")[0])&&f.getAttribute("xml:id")){var y=f.getAttribute("xml:id");n.region=g.filter(function(x){return x.id==y})[0]}g=null;l=t(Au);for(p=l.next();!p.done&&!(g=zu(a,"backgroundImage",d,"#",p.value)[0]);p=l.next());Bu(n,a,f,g,e,k,0==h.length);return n}
function Bu(a,b,c,d,e,f,g){f=f||g;"rtl"==Cu(b,c,e,"direction",f)&&(a.direction="rtl");g=Cu(b,c,e,"writingMode",f);"tb"==g||"tblr"==g?a.writingMode="vertical-lr":"tbrl"==g?a.writingMode="vertical-rl":"rltb"==g||"rl"==g?a.direction="rtl":g&&(a.direction=rb);(g=Cu(b,c,e,"textAlign",f))?(a.positionAlign=Du[g],a.lineAlign=Eu[g],a.textAlign=Db[g.toUpperCase()]):a.textAlign="start";if(g=Cu(b,c,e,"displayAlign",f))a.displayAlign=Eb[g.toUpperCase()];if(g=Cu(b,c,e,"color",f))a.color=g;if(g=Cu(b,c,e,"backgroundColor",
f))a.backgroundColor=g;if(g=Cu(b,c,e,"border",f))a.border=g;if(g=Cu(b,c,e,"fontFamily",f))a.fontFamily=g;(g=Cu(b,c,e,"fontWeight",f))&&"bold"==g&&(a.fontWeight=700);g=Cu(b,c,e,"wrapOption",f);a.wrapLine=g&&"noWrap"==g?!1:!0;(g=Cu(b,c,e,"lineHeight",f))&&g.match(Fu)&&(a.lineHeight=g);(g=Cu(b,c,e,"fontSize",f))&&(g.match(Fu)||g.match(Gu))&&(a.fontSize=g);if(g=Cu(b,c,e,"fontStyle",f))a.fontStyle=Ib[g.toUpperCase()];if(d){g=d.getAttribute("imageType")||d.getAttribute("imagetype");var h=d.getAttribute("encoding");
d=d.textContent.trim();"PNG"==g&&"Base64"==h&&d&&(a.backgroundImage="data:image/png;base64,"+d)}(d=Cu(b,c,e,"letterSpacing",f))&&d.match(Fu)&&(a.letterSpacing=d);(d=Cu(b,c,e,"linePadding",f))&&d.match(Fu)&&(a.linePadding=d);if(f=Cu(b,c,e,"opacity",f))a.opacity=parseFloat(f);(c=vu(c,e,"textDecoration"))&&Hu(a,c);(b=Iu(b,e,"textDecoration"))&&Hu(a,b)}
function Hu(a,b){for(var c=t(b.split(" ")),d=c.next();!d.done;d=c.next())switch(d.value){case "underline":a.textDecoration.includes("underline")||a.textDecoration.push("underline");break;case "noUnderline":a.textDecoration.includes("underline")&&nb(a.textDecoration,"underline");break;case "lineThrough":a.textDecoration.includes("lineThrough")||a.textDecoration.push("lineThrough");break;case "noLineThrough":a.textDecoration.includes("lineThrough")&&nb(a.textDecoration,"lineThrough");break;case "overline":a.textDecoration.includes("overline")||
a.textDecoration.push("overline");break;case "noOverline":a.textDecoration.includes("overline")&&nb(a.textDecoration,"overline")}}function Cu(a,b,c,d,e){e=void 0===e?!0:e;return(a=Iu(a,c,d))?a:e?vu(b,c,d):null}function vu(a,b,c){if(!a)return null;var d=Cn(a,"http://www.w3.org/ns/ttml#styling",c);return d?d:Ju(a,b,c)}function Iu(a,b,c){var d=Cn(a,"http://www.w3.org/ns/ttml#styling",c);return d?d:Ju(a,b,c)}
function Ju(a,b,c){a=zu(a,"style",b,"");for(var d=null,e=0;e<a.length;e++){var f=Cn(a[e],"urn:ebu:tt:style",c);f||(f=Cn(a[e],"http://www.w3.org/ns/ttml#styling",c));f||(f=Iu(a[e],b,c));f&&(d=f)}return d}
function zu(a,b,c,d,e){var f=[];if(!a||1>c.length)return f;var g=a;for(a=null;g&&!(a=e?Cn(g,e,b):g.getAttribute(b))&&(g=g.parentNode,g instanceof Element););if(b=a)for(b=t(b.split(" ")),e=b.next();!e.done;e=b.next())for(e=e.value,a=t(c),g=a.next();!g.done;g=a.next())if(g=g.value,d+g.getAttribute("xml:id")==e){f.push(g);break}return f}function yu(a,b,c,d){a=xu(a,b);null==c?c=a.start:null!=a.start&&(c+=a.start);null==d?d=a.end:null!=a.start&&(d+=a.start);return{start:c,end:d}}
function xu(a,b){var c=Ku(a.getAttribute("begin"),b),d=Ku(a.getAttribute("end"),b),e=Ku(a.getAttribute("dur"),b);null==d&&null!=e&&(d=c+e);return{start:c,end:d}}
function Ku(a,b){var c=null;if(Lu.test(a)){c=Lu.exec(a);var d=Number(c[1]),e=Number(c[2]),f=Number(c[3]),g=Number(c[4]);g+=(Number(c[5])||0)/b.h;f+=g/b.frameRate;c=f+60*e+3600*d}else if(Mu.test(a))c=Nu(Mu,a);else if(Ou.test(a))c=Nu(Ou,a);else if(Pu.test(a))c=Pu.exec(a),c=Number(c[1])/b.frameRate;else if(Qu.test(a))c=Qu.exec(a),c=Number(c[1])/b.g;else if(Ru.test(a))c=Nu(Ru,a);else if(a)throw new O(2,2,2001,"Could not parse cue time range in TTML");return c}
function Nu(a,b){var c=a.exec(b);return null==c||""==c[0]?null:(Number(c[4])||0)/1E3+(Number(c[3])||0)+60*(Number(c[2])||0)+3600*(Number(c[1])||0)}L("shaka.text.TtmlTextParser",ru);ru.prototype.parseMedia=ru.prototype.parseMedia;ru.prototype.parseInit=ru.prototype.parseInit;function su(a,b,c,d){this.frameRate=Number(a)||30;this.h=Number(b)||1;this.g=Number(d);0==this.g&&(this.g=a?this.frameRate*this.h:1);c&&(a=/^(\d+) (\d+)$/g.exec(c))&&(this.frameRate*=Number(a[1])/Number(a[2]))}
var tu=/^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,Gu=/^(\d{1,2}(?:\.\d+)?|100)%$/,Fu=/^(\d+px|\d+em|\d*\.?\d+c)$/,uu=/^(\d+)px (\d+)px$/,Lu=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Mu=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Ou=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,Pu=/^(\d*(?:\.\d*)?)f$/,Qu=/^(\d*(?:\.\d*)?)t$/,Ru=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,Eu={left:yb,center:"center",right:"end",start:yb,end:"end"},Du=
{left:"line-left",center:"center",right:"line-right"},Au=["http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt","http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt"];ad["application/ttml+xml"]=function(){return new ru};function Su(){this.s=new ru}Su.prototype.parseInit=function(a){var b=!1;(new jg).box("moov",ng).box("trak",ng).box("mdia",ng).box("minf",ng).box("stbl",ng).T("stsd",pg).box("stpp",function(c){b=!0;c.parser.stop()}).parse(a);if(!b)throw new O(2,2,2007);};Su.prototype.parseMedia=function(a,b){var c=this,d=!1,e=[];(new jg).box("mdat",qg(function(f){d=!0;e=e.concat(c.s.parseMedia(f,b))})).parse(a,!1);if(!d)throw new O(2,2,2007);return e};L("shaka.text.Mp4TtmlParser",Su);Su.prototype.parseMedia=Su.prototype.parseMedia;
Su.prototype.parseInit=Su.prototype.parseInit;ad['application/mp4; codecs="stpp"']=function(){return new Su};ad['application/mp4; codecs="stpp.ttml.im1t"']=function(){return new Su};ad['application/mp4; codecs="stpp.TTML.im1t"']=function(){return new Su};function Tu(){}Tu.prototype.parseInit=function(){};
Tu.prototype.parseMedia=function(a,b){var c=Dc(a);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");var d=c.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new O(2,2,2E3);c=b.periodStart;if(d[0].includes("X-TIMESTAMP-MAP")){var e=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),f=d[0].match(/MPEGTS:(\d+)/m);if(e&&f){c=Uu(new Np(e[1]));if(null==c)throw new O(2,2,2E3);f=Number(f[1]);for(e=b.segmentStart;95443.7176888889<=e;)e-=95443.7176888889,f+=8589934592;c=b.periodStart+f/9E4-c}}f=
[];e=t(d[0].split("\n"));for(var g=e.next();!g.done;g=e.next())if(g=g.value,/^Region:/.test(g)){g=new Np(g);var h=new sb;Qp(g);Op(g);for(var k=Qp(g);k;){var l=h,m=k;(k=/^id=(.*)$/.exec(m))?l.id=k[1]:(k=/^width=(\d{1,2}|100)%$/.exec(m))?l.width=Number(k[1]):(k=/^lines=(\d+)$/.exec(m))?(l.height=Number(k[1]),l.heightUnits=2):(k=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m))?(l.regionAnchorX=Number(k[1]),l.regionAnchorY=Number(k[2])):(k=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m))?
(l.viewportAnchorX=Number(k[1]),l.viewportAnchorY=Number(k[2])):/^scroll=up$/.exec(m)&&(l.scroll="up");Op(g);k=Qp(g)}f.push(h)}e=new Map;Vu(e);g=[];d=t(d.slice(1));for(h=d.next();!h.done;h=d.next()){h=h.value.split("\n");if((1!=h.length||h[0])&&!/^NOTE($|[ \t])/.test(h[0])&&"STYLE"==h[0]&&h[1].includes("::cue")){l="global";(k=h[1].match(/\((.*)\)/))&&(l=k.pop());k=h.slice(2,-1);h[1].includes("}")&&(m=/\{(.*?)\}/.exec(h[1]))&&(k=m[1].split(";"));m=new qb(0,0,"");for(var n=!1,p=0;p<k.length;p++){var r=
/^\s*([^:]+):\s*(.*)/.exec(k[p]);if(r){var u=r[2].trim().replace(";","");switch(r[1].trim()){case "background-color":n=!0;m.backgroundColor=u;break;case "color":n=!0;m.color=u;break;case "font-family":n=!0;m.fontFamily=u;break;case "font-size":n=!0;m.fontSize=u;break;case "font-weight":700<=parseInt(u,10)&&(n=!0,m.fontWeight=700);break;case "font-style":switch(u){case "normal":n=!0;m.fontStyle=Bb;break;case "italic":n=!0;m.fontStyle="italic";break;case "oblique":n=!0,m.fontStyle="oblique"}break;case "opacity":n=
!0;m.opacity=parseFloat(u);break;case "white-space":n=!0,m.wrapLine="noWrap"!=u}}}n&&e.set(l,m)}p=c;if(1==h.length&&!h[0]||/^NOTE($|[ \t])/.test(h[0])||"STYLE"==h[0])h=null;else{l=null;h[0].includes("--\x3e")||(l=h[0],h.splice(0,1));k=new Np(h[0]);m=Uu(k);r=Pp(k,/[ \t]+--\x3e[ \t]+/g);n=Uu(k);if(null==m||null==r||null==n)throw new O(2,2,2001,"Could not parse cue time range in WebVTT");m+=p;n+=p;p=h.slice(1).join("\n").trim();e.has("global")?(h=e.get("global").clone(),h.startTime=m,h.endTime=n,h.payload=
""):h=new qb(m,n,"");Wu(p,h,e);Op(k);for(m=Qp(k);m;)Xu(h,m,f),Op(k),m=Qp(k);null!=l&&(h.id=l)}h&&g.push(h)}return g};function Vu(a){for(var b=t(Object.entries(Gb)),c=b.next();!c.done;c=b.next()){var d=t(c.value);c=d.next().value;d=d.next().value;var e=new qb(0,0,"");e.color=d;a.set(c,e)}b=t(Object.entries(Hb));for(c=b.next();!c.done;c=b.next())d=t(c.value),c=d.next().value,d=d.next().value,e=new qb(0,0,""),e.backgroundColor=d,a.set(c,e)}
function Wu(a,b,c){0===c.size&&Vu(c);a=Yu(a);var d=On("<span>"+a+"</span>","span");if(d){var e=[];d=d.childNodes;if(1==d.length){var f=d[0];if(f.nodeType==Node.TEXT_NODE||f.nodeType==Node.CDATA_SECTION_NODE){b.payload=a;return}}a=t(d);for(d=a.next();!d.done;d=a.next())Zu(d.value,b,e,c);b.nestedCues=e}else b.payload=a}
function Yu(a){for(var b=[],c=-1,d="",e=0;e<a.length;e++)if("/"===a[e]){var f=a.indexOf(">",e);if(f<=e)return a;f=a.substring(e+1,f);var g=b.pop();if(f&&g){if(g===f)d+="/"+f+">";else{if(!g.startsWith("c.")||"c"!==f)return a;d+="/"+g+">"}e+=f.length+1}else return a}else"<"===a[e]?c=e+1:">"===a[e]&&0<c&&(b.push(a.substr(c,e-c)),c=-1),d+=a[e];return d}function $u(a,b){return a&&0<a.length?a:b}
function Zu(a,b,c,d){var e=b.clone();if(a.nodeType===Node.ELEMENT_NODE&&a.nodeName)for(var f=t(a.nodeName.split(/[ .]+/)),g=f.next();!g.done;g=f.next()){g=g.value;if(d.has(g)){var h=d.get(g);h&&(e.backgroundColor=$u(h.backgroundColor,e.backgroundColor),e.color=$u(h.color,e.color),e.fontFamily=$u(h.fontFamily,e.fontFamily),e.fontSize=$u(h.fontSize,e.fontSize),e.fontWeight=h.fontWeight,e.fontStyle=h.fontStyle,e.opacity=h.opacity,e.wrapLine=h.wrapLine)}switch(g){case "b":e.fontWeight=700;break;case "i":e.fontStyle=
"italic";break;case "u":e.textDecoration.push("underline")}}if(En(a))for(f=!0,d=t(a.textContent.split("\n")),a=d.next();!a.done;a=d.next())a=a.value,f||(f=b.clone(),f.lineBreak=!0,c.push(f)),0<a.length&&(f=e.clone(),f.payload=a,c.push(f)),f=!1;else for(b=t(a.childNodes),a=b.next();!a.done;a=b.next())Zu(a.value,e,c,d)}
function Xu(a,b,c){var d;if(d=/^align:(start|middle|center|end|left|right)$/.exec(b))b=d[1],"middle"==b?a.textAlign=vb:a.textAlign=Db[b.toUpperCase()];else if(d=/^vertical:(lr|rl)$/.exec(b))a.writingMode="lr"==d[1]?"vertical-lr":"vertical-rl";else if(d=/^size:([\d.]+)%$/.exec(b))a.size=Number(d[1]);else if(d=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b))a.position=Number(d[1]),d[2]&&(b=d[2],a.positionAlign="line-left"==b||"start"==b?"line-left":"line-right"==b||"end"==
b?"line-right":"center");else if(d=/^region:(.*)$/.exec(b)){if(b=av(c,d[1]))a.region=b}else if(c=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b))a.lineInterpretation=1,a.line=Number(c[1]),c[2]&&(a.lineAlign=Fb[c[2].toUpperCase()]);else if(c=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(b))a.lineInterpretation=xb,a.line=Number(c[1]),c[2]&&(a.lineAlign=Fb[c[2].toUpperCase()])}function av(a,b){var c=a.filter(function(d){return d.id==b});return c.length?c[0]:null}
function Uu(a){a=Pp(a,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);if(null==a)return null;var b=Number(a[2]),c=Number(a[3]);return 59<b||59<c?null:Number(a[4])/1E3+c+60*b+3600*(Number(a[1])||0)}L("shaka.text.VttTextParser",Tu);Tu.prototype.parseMedia=Tu.prototype.parseMedia;Tu.prototype.parseInit=Tu.prototype.parseInit;ad["text/vtt"]=function(){return new Tu};ad['text/vtt; codecs="vtt"']=function(){return new Tu};ad['text/vtt; codecs="wvtt"']=function(){return new Tu};function bv(){this.g=null}bv.prototype.parseInit=function(a){var b=this,c=!1;(new jg).box("moov",ng).box("trak",ng).box("mdia",ng).T("mdhd",function(d){d=Eh(d.reader,d.version);b.g=d.timescale}).box("minf",ng).box("stbl",ng).T("stsd",pg).box("wvtt",function(){c=!0}).parse(a);if(!this.g)throw new O(2,2,2008);if(!c)throw new O(2,2,2008);};
bv.prototype.parseMedia=function(a,b){if(!this.g)throw new O(2,2,2008);var c=0,d=[],e,f=[],g=!1,h=!1,k=!1,l=null;(new jg).box("moof",ng).box("traf",ng).T("tfdt",function(B){g=!0;c=Dh(B.reader,B.version).hd}).T("tfhd",function(B){l=Ch(B.reader,B.flags).Yd}).T("trun",function(B){h=!0;d=Fh(B.reader,B.version,B.flags).pe}).box("mdat",qg(function(B){k=!0;e=B})).parse(a,!1);if(!k&&!g&&!h)throw new O(2,2,2008);for(var m=c,n=new gg(e,0),p=t(d),r=p.next();!r.done;r=p.next()){r=r.value;var u=r.Id||l,w=r.Kc?
c+r.Kc:m;m=w+(u||0);var y=0;do{var x=n.M();y+=x;var C=n.M(),D=null;"vttc"==rg(C)?8<x&&(D=n.$a(x-8)):n.skip(x-8);u&&D&&(x=cv(D,b.periodStart+w/this.g,b.periodStart+m/this.g),f.push(x))}while(r.sampleSize&&y<r.sampleSize)}return f.filter($b)};function cv(a,b,c){var d,e,f;(new jg).box("payl",qg(function(g){d=Dc(g)})).box("iden",qg(function(g){e=Dc(g)})).box("sttg",qg(function(g){f=Dc(g)})).parse(a);return d?dv(d,e,f,b,c):null}
function dv(a,b,c,d,e){d=new qb(d,e,"");Wu(a,d,new Map);b&&(d.id=b);if(c)for(a=new Np(c),b=Qp(a);b;)Xu(d,b,[]),Op(a),b=Qp(a);return d}L("shaka.text.Mp4VttParser",bv);bv.prototype.parseMedia=bv.prototype.parseMedia;bv.prototype.parseInit=bv.prototype.parseInit;ad['application/mp4; codecs="wvtt"']=function(){return new bv};function ev(){}ev.prototype.parseInit=function(){};ev.prototype.parseMedia=function(a){var b=Dc(a).replace(/\r+/g,"");b=b.trim();a=[];if(""==b)return a;b=t(b.split("\n\n"));for(var c=b.next();!c.done;c=b.next()){c=c.value.split("\n");var d=new Np(c[0]),e=fv(d),f=Pp(d,/,/g);d=fv(d);if(null==e||null==f||null==d)throw new O(2,2,2001,"Could not parse cue time range in SubViewer");a.push(new qb(e,d,c.slice(1).join("\n").trim()))}return a};
function fv(a){a=Pp(a,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);if(null==a)return null;var b=Number(a[2]),c=Number(a[3]);return 59<b||59<c?null:Number(a[4])/1E3+c+60*b+3600*(Number(a[1])||0)}L("shaka.text.SbvTextParser",ev);ev.prototype.parseMedia=ev.prototype.parseMedia;ev.prototype.parseInit=ev.prototype.parseInit;ad["text/x-subviewer"]=function(){return new ev};function gv(){this.s=new Tu}gv.prototype.parseInit=function(){};gv.prototype.parseMedia=function(a,b){var c=Dc(a);c=hv(c);c=Ob(Hc(c));return this.s.parseMedia(c,b)};function hv(a){var b="WEBVTT\n\n";if(""==a)return b;a=a.replace(/\r+/g,"");a=a.trim();a=t(a.split("\n\n"));for(var c=a.next();!c.done;c=a.next())c=c.value.split(/\n/),c[0].match(/\d+/)&&c.shift(),c[0]=c[0].replace(/,/g,"."),b+=c.join("\n")+"\n\n";return b}L("shaka.text.SrtTextParser",gv);gv.srt2webvtt=hv;gv.prototype.parseMedia=gv.prototype.parseMedia;
gv.prototype.parseInit=gv.prototype.parseInit;ad["text/srt"]=function(){return new gv};function iv(){}iv.prototype.parseInit=function(){};
iv.prototype.parseMedia=function(a){var b="",c="";a=Dc(a).split(/\r?\n\s*\r?\n/);a=t(a);for(var d=a.next();!d.done;d=a.next()){var e=jv.exec(d.value);e&&(d=e[1],e=e[2],"V4 Styles"==d||"V4+ Styles"==d?b=e:"Events"==d&&(c=e))}a=[];d=null;b=t(b.split(/\r?\n/));for(var f=b.next();!f.done;f=b.next())if(e=f.value,!/^\s*;/.test(e)&&(f=kv.exec(e)))if(e=f[1].trim(),f=f[2].trim(),"Format"==e)d=f.split(lv);else if("Style"==e){e=f.split(lv);f={};for(var g=0;g<d.length&&g<e.length;g++)f[d[g]]=e[g];a.push(f)}d=
[];b=null;e={};c=t(c.split(/\r?\n/));for(f=c.next();!f.done;e={cd:e.cd},f=c.next())if(f=f.value,!/^\s*;/.test(f)&&(g=kv.exec(f)))if(f=g[1].trim(),g=g[2].trim(),"Format"==f)b=g.split(lv);else if("Dialogue"==f){g=g.split(lv);f={};for(var h=0;h<b.length&&h<g.length;h++)f[b[h]]=g[h];h=mv(f.Start);var k=mv(f.End);g=new qb(h,k,g.slice(b.length-1).join(",").replace(/\\N/g,"\n").replace(/\{[^}]+\}/g,""));e.cd=f.Style;(f=a.find(function(l){return function(m){return m.Name==l.cd}}(e)))&&nv(g,f);d.push(g)}return d};
function nv(a,b){var c=b.Fontname;c&&(a.fontFamily=c);if(c=b.Fontsize)a.fontSize=c+"px";if(c=b.PrimaryColour)if(c=ov(c))a.color=c;if(c=b.BackColour)if(c=ov(c))a.backgroundColor=c;b.Bold&&(a.fontWeight=700);b.Italic&&(a.fontStyle="italic");b.Underline&&a.textDecoration.push("underline");if(c=b.Spacing)a.letterSpacing=c+"px";if(c=b.Alignment)switch(parseInt(c,10)){case 1:a.displayAlign=zb;a.textAlign="start";break;case 2:a.displayAlign=zb;a.textAlign=vb;break;case 3:a.displayAlign=zb;a.textAlign="end";
break;case 5:a.displayAlign="before";a.textAlign="start";break;case 6:a.displayAlign="before";a.textAlign=vb;break;case 7:a.displayAlign="before";a.textAlign="end";break;case 9:a.displayAlign="center";a.textAlign="start";break;case 10:a.displayAlign="center";a.textAlign=vb;break;case 11:a.displayAlign="center",a.textAlign="end"}if(c=b.AlphaLevel)a.opacity=parseFloat(c)}
function ov(a){a=parseInt(a.replace("&H",""),16);return 0<=a?"rgba("+(a&255)+","+(a>>8&255)+","+(a>>16&255)+","+(a>>24&255^255)/255+")":null}function mv(a){a=pv.exec(a);return 3600*(a[1]?parseInt(a[1].replace(":",""),10):0)+60*parseInt(a[2],10)+parseFloat(a[3])}L("shaka.text.SsaTextParser",iv);iv.prototype.parseMedia=iv.prototype.parseMedia;iv.prototype.parseInit=iv.prototype.parseInit;var jv=/^\s*\[([^\]]+)\]\r?\n([\s\S]*)/,kv=/^\s*([^:]+):\s*(.*)/,lv=/\s*,\s*/,pv=/^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;
ad["text/x-ssa"]=function(){return new iv};/*
 @license
 EME Encryption Scheme Polyfill
 Copyright 2019 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function qv(){}var rv;function sv(){rv?console.debug("EmeEncryptionSchemePolyfill: Already installed."):navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration?(rv=navigator.requestMediaKeySystemAccess,console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."),navigator.requestMediaKeySystemAccess=tv):console.debug("EmeEncryptionSchemePolyfill: EME not found")}
function tv(a,b){var c=this,d;return I(function(e){if(1==e.g)return console.assert(c==navigator,'bad "this" for requestMediaKeySystemAccess'),v(e,rv.call(c,a,b),2);d=e.h;if(uv(d))return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."),navigator.requestMediaKeySystemAccess=rv,e["return"](d);console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");navigator.requestMediaKeySystemAccess=vv;return e["return"](vv.call(c,
a,b))})}
function vv(a,b){var c=this,d,e,f,g,h,k,l,m,n,p;return I(function(r){if(1==r.g){console.assert(c==navigator,'bad "this" for requestMediaKeySystemAccess');d=wv(a);e=[];f=t(b);for(g=f.next();!g.done;g=f.next())h=g.value,k=xv(h.videoCapabilities,d),l=xv(h.audioCapabilities,d),h.videoCapabilities&&h.videoCapabilities.length&&!k.length||h.audioCapabilities&&h.audioCapabilities.length&&!l.length||(m=Object.assign({},h),m.videoCapabilities=k,m.audioCapabilities=l,e.push(m));if(!e.length)throw n=Error("Unsupported keySystem or supportedConfigurations."),
n.name="NotSupportedError",n.code=DOMException.NOT_SUPPORTED_ERR,n;return v(r,rv.call(c,a,e),2)}p=r.h;return r["return"](new yv(p,d))})}function xv(a,b){return a?a.filter(function(c){return!c.encryptionScheme||c.encryptionScheme==b}):a}L("EmeEncryptionSchemePolyfill",qv);qv.install=sv;function zv(){}var Av;
function Bv(){Av?console.debug("McEncryptionSchemePolyfill: Already installed."):navigator.mediaCapabilities?(Av=navigator.mediaCapabilities.decodingInfo,console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."),navigator.mediaCapabilities.decodingInfo=Cv):console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")}
function Cv(a){var b=this,c,d;return I(function(e){if(1==e.g)return console.assert(b==navigator.mediaCapabilities,'bad "this" for decodingInfo'),v(e,Av.call(b,a),2);c=e.h;if(!a.keySystemConfiguration)return e["return"](c);if((d=c.keySystemAccess)&&uv(d))return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."),navigator.mediaCapabilities.decodingInfo=Av,e["return"](c);console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
navigator.mediaCapabilities.decodingInfo=Dv;return e["return"](Dv.call(b,a))})}
function Dv(a){var b=this,c,d,e,f,g,h,k,l,m;return I(function(n){switch(n.g){case 1:return console.assert(b==navigator.mediaCapabilities,'bad "this" for decodingInfo'),c=null,a.keySystemConfiguration&&(d=a.keySystemConfiguration,e=d.keySystem,f=d.audio&&d.audio.encryptionScheme,g=d.video&&d.video.encryptionScheme,c=wv(e),h={powerEfficient:!1,smooth:!1,supported:!1,keySystemAccess:null,configuration:a},f&&f!=c||g&&g!=c)?n["return"](h):v(n,Av.call(b,a),2);case 2:k=n.h;if(k.keySystemAccess){k.keySystemAccess=
new yv(k.keySystemAccess,c);n.v(3);break}if(!a.keySystemConfiguration){n.v(3);break}var p=a.keySystemConfiguration,r=[],u=[];p.audio&&r.push({robustness:p.audio.robustness||"",contentType:a.audio.contentType});p.video&&u.push({robustness:p.video.robustness||"",contentType:a.video.contentType});p={initDataTypes:p.initDataType?[p.initDataType]:[],distinctiveIdentifier:p.distinctiveIdentifier,persistentState:p.persistentState,sessionTypes:p.sessionTypes};r.length&&(p.audioCapabilities=r);u.length&&(p.videoCapabilities=
u);l=p;m=k;return v(n,navigator.requestMediaKeySystemAccess(a.keySystemConfiguration.keySystem,[l]),5);case 5:m.keySystemAccess=n.h;case 3:return n["return"](k)}})}L("McEncryptionSchemePolyfill",zv);zv.install=Bv;function yv(a,b){this.h=a;this.g=b;this.keySystem=a.keySystem}
yv.prototype.getConfiguration=function(){var a=this.h.getConfiguration();if(a.videoCapabilities)for(var b=t(a.videoCapabilities),c=b.next();!c.done;c=b.next())c.value.encryptionScheme=this.g;if(a.audioCapabilities)for(b=t(a.audioCapabilities),c=b.next();!c.done;c=b.next())c.value.encryptionScheme=this.g;return a};yv.prototype.createMediaKeys=function(){return this.h.createMediaKeys()};
function wv(a){if(a.startsWith("com.widevine")||a.startsWith("com.microsoft")||a.startsWith("com.adobe")||a.startsWith("org.w3"))return"cenc";if(a.startsWith("com.apple"))return"cbcs-1-9";console.warn("EmeEncryptionSchemePolyfill: Unknown key system:",a,"Please contribute!");return null}function uv(a){a=a.getConfiguration();var b=a.audioCapabilities&&a.audioCapabilities[0];return(a=a.videoCapabilities&&a.videoCapabilities[0]||b)&&void 0!==a.encryptionScheme?!0:!1}function Ev(){}
function Ls(){sv();Bv()}L("EncryptionSchemePolyfills",Ev);Ev.install=Ls;"undefined"!==typeof module&&module.exports&&(module.exports=Ev);}).call(exportTo,innerGlobal,innerGlobal,undefined);if(true)for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];else {}})();

//# sourceMappingURL=shaka-player.compiled.map

/***/ }),

/***/ "./src/css/player.less":
/*!*****************************!*\
  !*** ./src/css/player.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_player_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./player.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/player.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_player_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_player_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
/*!***************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "20fd1704ea223900efa9fd4e869efb08.woff2");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
/*!**************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f691f37e57f04c152e2315ab7dbad881.woff");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1e59d2330b4c6deb84b340635ed36249.ttf");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c1e38fd9e0e74ba58f7a2b77ef29fdd3.svg");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"fjplayer","version":"0.3.2","description":"A Javascript video player for dash and mp4 videos,  support multi subs tracks , overlays ads or information, injection mp4 video ads in preroll, modroll or after roll.","main":"dist/fjplayer.js","directories":{"doc":"docs","test":"tests"},"scripts":{"dist":" concurrently \\"npm run build\\" \\"npm run testc\\" \\"npm run doc\\"","live":" concurrently \\"npm run dev\\" \\"npm run http\\"","http":"http-server -c-1 -d -o ./demo/ --no-dotfiles","build":"npx webpack  --mode=production --color --config webpack-prod.config.js","doc":"jsdoc src -r -R ./README.md -d ./docs/generated --debug","dev":"webpack --mode=development --color --config webpack.config.js","test":"npx jest  -c jest.config.js","test:watch":"jest  -c jest.config.js --watch ","test:coverage":"jest  -c jest.config.js --coverage ","lint":"eslint --color"},"repository":{"type":"git","url":"git+https://github.com/medazzo/fjplayer.git"},"keywords":["mpegdash","es6","dashjs","html5","player","cenc","ads"],"author":"Mohamed Azzouni","license":"Apache-2.0","bugs":{"url":"https://github.com/medazzo/fjplayer/issues"},"homepage":"https://github.com/medazzo/fjplayer#readme","devDependencies":{"@babel/cli":"^7.14.3","@babel/core":"^7.14.3","@babel/preset-env":"^7.14.2","babel-jest":"^26.6.3","babel-loader":"^8.2.2","babel-preset-latest":"^6.24.1","chai":"^4.3.4","concurrently":"^6.1.0","css-loader":"^5.2.5","eslint":"^7.27.0","eslint-config-airbnb-base":"^14.2.1","eslint-config-standard":"^16.0.2","eslint-plugin-import":"^2.23.3","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.3.1","extract-text-webpack-plugin":"^3.0.2","file-loader":"^6.2.0","font-awesome":"^4.7.0","http-server":"^0.12.3","jest":"^26.6.3","jest-css-modules-transform":"^4.2.1","jest-puppeteer":"^5.0.3","jsdoc":"^3.6.7","less":"^4.1.1","less-loader":"^9.0.0","mocha":"^8.4.0","nyc":"^15.1.0","puppeteer":"^9.1.1","puppeteer-direct":"github:wix/puppeteer-direct","style-loader":"^2.0.0","url-loader":"^4.1.1","webpack":"^5.37.1","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2"},"dependencies":{"shaka-player":"^3.1.0","superagent":"^6.1.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fjplayer.js.map