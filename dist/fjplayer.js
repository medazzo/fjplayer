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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_eot_v_4_7_0__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_eot__WEBPACK_IMPORTED_MODULE_4__.default, { hash: "?#iefix&v=4.7.0" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_woff2_v_4_7_0__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_woff_v_4_7_0__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_ttf_v_4_7_0__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_node_modules_font_awesome_fonts_fontawesome_webfont_svg_v_4_7_0__WEBPACK_IMPORTED_MODULE_8__.default, { hash: "#fontawesomeregular" });
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
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function fa(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
fa("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.a=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
fa("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ka="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={te:!0},oa={};try{oa.__proto__=na;ma=oa.te;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function ra(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.sg=b.prototype}function sa(){this.j=!1;this.g=null;this.b=void 0;this.a=1;this.f=this.h=0;this.v=this.c=null}function ta(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}sa.prototype.l=function(a){this.b=a};
function ua(a,b){a.c={Rd:b,Wd:!0};a.a=a.h||a.f}sa.prototype["return"]=function(a){this.c={"return":a};this.a=this.f};function v(a,b,c){a.a=c;return{value:b}}sa.prototype.m=function(a){this.a=a};function z(a){a.a=0}function A(a,b,c){a.h=b;void 0!=c&&(a.f=c)}function va(a){a.h=0;a.f=2}function wa(a,b){a.a=b;a.h=0}function E(a){a.h=0;var b=a.c.Rd;a.c=null;return b}function xa(a){a.v=[a.c];a.h=0;a.f=0}
function ya(a,b){var c=a.v.splice(0)[0];(c=a.c=a.c||c)?c.Wd?a.a=a.h||a.f:void 0!=c.m&&a.f<c.m?(a.a=c.m,a.c=null):a.a=a.f:a.a=b}function za(a){this.a=new sa;this.b=a}function Aa(a,b){ta(a.a);var c=a.a.g;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.a.g,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.j=!1,e;var f=e.value}catch(g){return a.a.g=null,ua(a.a,g),Ca(a)}a.a.g=null;d.call(a.a,f);return Ca(a)}
function Ca(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.j=!1,{value:b.value,done:!1}}catch(c){a.a.b=void 0,ua(a.a,c)}a.a.j=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Wd)throw b.Rd;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ta(a.a);a.a.g?b=Ba(a,a.a.g.next,b,a.a.l):(a.a.l(b),b=Ca(a));return b};this["throw"]=function(b){ta(a.a);a.a.g?b=Ba(a,a.a.g["throw"],b,a.a.l):(ua(a.a,b),b=Ca(a));return b};this["return"]=function(b){return Aa(a,b)};this[Symbol.iterator]=function(){return this}}function Fa(a,b){var c=new Ea(new za(b));pa&&a.prototype&&pa(c,a.prototype);return c}
function Ga(a){function b(d){return a.next(d)}function c(d){return a["throw"](d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})}function J(a){return Ga(new Ea(new za(a)))}
fa("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];this.j=!1;var h=this.f();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=da.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var k=
g[h];g[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:g(this.D),reject:g(this.g)}};b.prototype.D=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.C(g):this.h(g)}};
b.prototype.C=function(g){var h=void 0;try{h=g.then}catch(k){this.g(k);return}"function"==typeof h?this.M(h,g):this.h(g)};b.prototype.g=function(g){this.l(2,g)};b.prototype.h=function(g){this.l(1,g)};b.prototype.l=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;2===this.b&&this.H();this.v()};b.prototype.H=function(){var g=this;e(function(){if(g.A()){var h=da.console;"undefined"!==typeof h&&h.error(g.c)}},1)};b.prototype.A=
function(){if(this.j)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.c;return k(g)};b.prototype.v=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;
b.prototype.J=function(g){var h=this.f();g.nc(h.resolve,h.reject)};b.prototype.M=function(g,h){var k=this.f();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(g,h){function k(p,r){return"function"==typeof p?function(u){try{l(p(u))}catch(x){m(x)}}:r}var l,m,n=new b(function(p,r){l=p;m=r});this.nc(k(g,l),k(h,m));return n};b.prototype["catch"]=function(g){return this.then(void 0,g)};b.prototype.nc=function(g,h){function k(){switch(l.b){case 1:g(l.c);break;case 2:h(l.c);
break;default:throw Error("Unexpected state: "+l.b);}}var l=this;null==this.a?f.b(k):this.a.push(k);this.j=!0};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).nc(h,k)})};b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(x){p[u]=x;r--;0==r&&l(p)}}var p=[],r=0;do p.push(void 0),r++,d(k.value).nc(n(p.length-1),m),k=h.next();
while(!k.done)})};return b});function Ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
fa("WeakMap",function(a){function b(k){this.a=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}function c(){}function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}function e(k){if(!Ha(k,g)){var l=new c;ba(k,g,{value:l})}}function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),
m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.a]=l;return this};b.prototype.get=function(k){return d(k)&&Ha(k,g)?k[g][this.a]:void 0};b.prototype.has=function(k){return d(k)&&
Ha(k,g)&&Ha(k[g],this.a)};b.prototype["delete"]=function(k){return d(k)&&Ha(k,g)&&Ha(k[g],this.a)?delete k[g][this.a]:!1};return b});
fa("Map",function(a){function b(){var h={};return h.Oa=h.next=h.head=h}function c(h,k){var l=h.a;return ha(function(){if(l){for(;l.head!=h.a;)l=l.Oa;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.b[l];if(m&&Ha(h.b,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,aa:p}}return{id:l,
list:m,index:-1,aa:void 0}}function e(h){this.b={};this.a=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.b[l.id]=[]);l.aa?l.aa.value=k:(l.aa={next:this.a,Oa:this.a.Oa,head:this.a,key:h,value:k},l.list.push(l.aa),this.a.Oa.next=l.aa,this.a.Oa=l.aa,this.size++);return this};e.prototype["delete"]=function(h){h=d(this,h);return h.aa&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.b[h.id],h.aa.Oa.next=h.aa.next,h.aa.next.Oa=h.aa.Oa,
h.aa.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.b={};this.a=this.a.Oa=b();this.size=0};e.prototype.has=function(h){return!!d(this,h).aa};e.prototype.get=function(h){return(h=d(this,h).aa)&&h.value};e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};e.prototype.keys=function(){return c(this,function(h){return h.key})};e.prototype.values=function(){return c(this,function(h){return h.value})};e.prototype.forEach=function(h,k){for(var l=this.entries(),
m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
fa("Set",function(a){function b(c){this.a=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||
f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype["delete"]=function(c){c=this.a["delete"](c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.a.forEach(function(f){return c.call(d,f,f,e)})};return b});fa("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});fa("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}fa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
function Ka(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{ba:e,qe:f}}return{ba:-1,qe:void 0}}fa("Array.prototype.findIndex",function(a){return a?a:function(b,c){return Ka(this,b,c).ba}});function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}
fa("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});fa("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});var Ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ha(d,e)&&(a[e]=d[e])}return a};fa("Object.assign",function(a){return a||Ma});
fa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
fa("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});fa("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});fa("Array.prototype.find",function(a){return a?a:function(b,c){return Ka(this,b,c).qe}});
fa("String.prototype.repeat",function(a){return a?a:function(b){var c=Ja(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});fa("String.prototype.startsWith",function(a){return a?a:function(b,c){for(var d=Ja(this,b,"startsWith"),e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
fa("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ha(b,d)&&c.push(b[d]);return c}});fa("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});fa("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ha(b,d)&&c.push([d,b[d]]);return c}});var Na=this||self;
function K(a,b){var c=a.split("."),d=Na;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b};/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Oa(a){this.c=Math.exp(Math.log(.5)/a);this.b=this.a=0}function Pa(a,b,c){var d=Math.pow(a.c,b);c=c*(1-d)+d*a.a;isNaN(c)||(a.a=c,a.b+=b)}function Qa(a){return a.a/(1-Math.pow(a.c,a.b))};function Ra(){this.b=new Oa(2);this.c=new Oa(5);this.a=0}Ra.prototype.getBandwidthEstimate=function(a){return 128E3>this.a?a:Math.min(Qa(this.b),Qa(this.c))};function Sa(){}function Ta(){}function Ua(){}function Va(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];Wa.has(a)||(Wa.add(a),Ua.apply(Sa,ia(c)))}function Xa(){}function Ya(){}function bb(){}function cb(){}var Wa=new Set;
if(window.console&&window.console.log.bind){var db={},eb=(db[1]=console.error.bind(console),db[2]=console.warn.bind(console),db[3]=console.info.bind(console),db[4]=console.log.bind(console),db[5]=console.debug.bind(console),db[6]=console.debug.bind(console),db);Ua=eb[2];Ta=eb[1]};function fb(a,b){for(var c=[],d=t(a),e=d.next();!e.done;e=d.next())c.push(b(e.value));return c}function gb(a,b){for(var c=t(a),d=c.next();!d.done;d=c.next())if(!b(d.value))return!1;return!0}
var ib=function hb(a){var c;return Fa(hb,function(d){1==d.a&&(c=0);if(3!=d.a)return c<a?v(d,c,3):d.m(0);c++;return d.m(2)})},lb=function kb(a){var c,d,e,f,g,h;return Fa(kb,function(k){1==k.a&&(c=-1,e=d=void 0,f=t(a),g=f.next());if(5!=k.a){if(g.done)return-1==c?k.m(0):v(k,{ba:c,nf:d,item:e,next:void 0},0);h=g.value;return 0<=c?v(k,{ba:c,item:e,nf:d,next:h},5):k.m(5)}c++;d=e;e=h;g=f.next();return k.m(2)})};function mb(){}function nb(a,b){if(!a&&!b)return!0;if(!a||!b||a.byteLength!=b.byteLength)return!1;if(ob(a)==ob(b)&&(a.byteOffset||0)==(b.byteOffset||0))return!0;for(var c=pb(a),d=pb(b),e=t(ib(a.byteLength)),f=e.next();!f.done;f=e.next())if(f=f.value,c[f]!=d[f])return!1;return!0}function ob(a){return a instanceof ArrayBuffer?a:a.buffer}function rb(a){return a instanceof ArrayBuffer?a:0==a.byteOffset&&a.byteLength==a.buffer.byteLength?a.buffer:(new Uint8Array(a)).buffer}
function pb(a,b,c){c=void 0===c?Infinity:c;return sb(a,void 0===b?0:b,c,Uint8Array)}function tb(a,b,c){c=void 0===c?Infinity:c;return sb(a,void 0===b?0:b,c,DataView)}function sb(a,b,c,d){var e=(a.byteOffset||0)+a.byteLength;b=Math.max(0,Math.min((a.byteOffset||0)+b,e));return new d(ob(a),b,Math.min(b+Math.max(c,0),e)-b)}K("shaka.util.BufferUtils",mb);mb.toDataView=tb;mb.toUint8=pb;mb.toArrayBuffer=rb;mb.equal=nb;function L(a,b,c,d){for(var e=[],f=3;f<arguments.length;++f)e[f-3]=arguments[f];this.severity=a;this.category=b;this.code=c;this.data=e;this.handled=!1}L.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};K("shaka.util.Error",L);L.Severity={RECOVERABLE:1,CRITICAL:2};L.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9,ADS:10};
L.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,ATTEMPTS_EXHAUSTED:1010,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,INVALID_MP4_CEA:2010,TEXT_COULD_NOT_GUESS_MIME_TYPE:2011,CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS:2012,
TEXT_ONLY_WEBVTT_SRC_EQUALS:2013,MISSING_TEXT_PLUGIN:2014,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,
MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,CONTENT_TRANSFORMATION_FAILED:3019,UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,RESTRICTIONS_CANNOT_BE_MET:4012,
HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,
HLS_AES_128_ENCRYPTION_NOT_SUPPORTED:4034,HLS_INTERNAL_SKIP_STREAM:4035,NO_VARIANTS:4036,PERIOD_FLATTENING_FAILED:4037,INCONSISTENT_DRM_ACROSS_PERIODS:4038,HLS_VARIABLE_NOT_FOUND:4039,STREAMING_ENGINE_STARTUP_INVALID_STATE:5006,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,
ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,SERVER_CERTIFICATE_REQUIRED:6015,INIT_DATA_TRANSFORM_ERROR:6016,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,OBJECT_DESTROYED:7003,CONTENT_NOT_LOADED:7004,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,
INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013,STORAGE_LIMIT_REACHED:9014,DOWNLOAD_SIZE_CALLBACK_ERROR:9015,CS_IMA_SDK_MISSING:1E4,CS_AD_MANAGER_NOT_INITIALIZED:10001,SS_IMA_SDK_MISSING:10002,SS_AD_MANAGER_NOT_INITIALIZED:10003,CURRENT_DAI_REQUEST_NOT_FINISHED:10004};function ub(a){this.b=a;this.a=void 0}ub.prototype.value=function(){void 0==this.a&&(this.a=this.b());return this.a};function vb(){}function wb(a){if(!a)return"";a=pb(a);239==a[0]&&187==a[1]&&191==a[2]&&(a=a.subarray(3));a=(new TextDecoder).decode(a);a.includes("\ufffd")&&Ta('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!');return a}
function xb(a,b,c){if(!a)return"";if(!c&&0!=a.byteLength%2)throw new L(2,2,2004);var d=Math.floor(a.byteLength/2);c=new Uint16Array(d);a=tb(a);d=t(ib(d));for(var e=d.next();!e.done;e=d.next())e=e.value,c[e]=a.getUint16(2*e,b);return yb.value()(c)}
function zb(a){function b(d){return c.byteLength<=d||32<=c[d]&&126>=c[d]}if(!a)return"";var c=pb(a);if(239==c[0]&&187==c[1]&&191==c[2])return wb(c);if(254==c[0]&&255==c[1])return xb(c.subarray(2),!1);if(255==c[0]&&254==c[1])return xb(c.subarray(2),!0);if(0==c[0]&&0==c[2])return xb(a,!1);if(0==c[1]&&0==c[3])return xb(a,!0);if(b(0)&&b(1)&&b(2)&&b(3))return wb(a);throw new L(2,2,2003);}function Ab(a){var b=new TextEncoder;return rb(b.encode(a))}
function Cb(a,b){for(var c=new ArrayBuffer(2*a.length),d=new DataView(c),e=t(lb(a)),f=e.next();!f.done;f=e.next())f=f.value,d.setUint16(2*f.ba,f.item.charCodeAt(0),b);return c}K("shaka.util.StringUtils",vb);vb.resetFromCharCode=function(){yb.a=void 0};vb.toUTF16=Cb;vb.toUTF8=Ab;vb.fromBytesAutoDetect=zb;vb.fromUTF16=xb;vb.fromUTF8=wb;
var yb=new ub(function(){function a(c){try{var d=new Uint8Array(c);return 0<String.fromCharCode.apply(null,d).length}catch(e){return!1}}for(var b={Qa:65536};0<b.Qa;b={Qa:b.Qa},b.Qa/=2)if(a(b.Qa))return function(c){return function(d){for(var e="",f=0;f<d.length;f+=c.Qa)e+=String.fromCharCode.apply(null,d.subarray(f,f+c.Qa));return e}}(b);return null});function Db(a,b){this.P=tb(a);this.b=b==Eb;this.a=0}q=Db.prototype;q.ha=function(){return this.a<this.P.byteLength};q.Z=function(){return this.a};q.Me=function(){return this.P.byteLength};q.V=function(){try{var a=this.P.getUint8(this.a);this.a+=1;return a}catch(b){throw Fb();}};q.Bb=function(){try{var a=this.P.getUint16(this.a,this.b);this.a+=2;return a}catch(b){throw Fb();}};q.I=function(){try{var a=this.P.getUint32(this.a,this.b);this.a+=4;return a}catch(b){throw Fb();}};
q.de=function(){try{var a=this.P.getInt32(this.a,this.b);this.a+=4;return a}catch(b){throw Fb();}};q.gb=function(){try{if(this.b){var a=this.P.getUint32(this.a,!0);var b=this.P.getUint32(this.a+4,!0)}else b=this.P.getUint32(this.a,!1),a=this.P.getUint32(this.a+4,!1)}catch(c){throw Fb();}if(2097151<b)throw new L(2,3,3001);this.a+=8;return b*Math.pow(2,32)+a};q.Va=function(a){if(this.a+a>this.P.byteLength)throw Fb();var b=pb(this.P,this.a,a);this.a+=a;return b};
q.skip=function(a){if(this.a+a>this.P.byteLength)throw Fb();this.a+=a};q.fe=function(a){if(this.a<a)throw Fb();this.a-=a};q.seek=function(a){if(0>a||a>this.P.byteLength)throw Fb();this.a=a};q.Ub=function(){for(var a=this.a;this.ha()&&0!=this.P.getUint8(this.a);)this.a+=1;a=pb(this.P,a,this.a-a);this.a+=1;return wb(a)};function Fb(){return new L(2,3,3E3)}K("shaka.util.DataViewReader",Db);Db.prototype.readTerminatedString=Db.prototype.Ub;Db.prototype.seek=Db.prototype.seek;Db.prototype.rewind=Db.prototype.fe;
Db.prototype.skip=Db.prototype.skip;Db.prototype.readBytes=Db.prototype.Va;Db.prototype.readUint64=Db.prototype.gb;Db.prototype.readInt32=Db.prototype.de;Db.prototype.readUint32=Db.prototype.I;Db.prototype.readUint16=Db.prototype.Bb;Db.prototype.readUint8=Db.prototype.V;Db.prototype.getLength=Db.prototype.Me;Db.prototype.getPosition=Db.prototype.Z;Db.prototype.hasMoreData=Db.prototype.ha;var Eb=1;Db.Endianness={BIG_ENDIAN:0,LITTLE_ENDIAN:Eb};function Gb(a,b){this.a=a;this.b=b}Gb.prototype.toString=function(){return"v"+this.a+"."+this.b};function Hb(a,b){var c=new Gb(4,0),d=Ib,e=d.a,f=c.b-e.b;(0<(c.a-e.a||f)?d.c:d.b)(d.a,c,a,b)}function Jb(a,b,c,d){Ua([c,"has been deprecated and will be removed in",b,". We are currently at version",a,". Additional information:",d].join(" "))}function Kb(a,b,c,d){Ta([c,"has been deprecated and has been removed in",b,". We are now at version",a,". Additional information:",d].join(""))}var Ib=null;function Lb(a,b){return a.concat(b)}function Mb(){}function Nb(a){return null!=a}function Ob(a){var b=Object.create(a.prototype||Object.prototype);try{var c=a.call(b);c||(Hb("Factories requiring new","Factories should be plain functions"),c=b)}catch(d){Hb("Factories requiring new","Factories should be plain functions"),c=new a}return c};function Qb(){this.c=[];this.b=[];this.a=!1}q=Qb.prototype;q.box=function(a,b){var c=Rb(a);this.c[c]=Sb;this.b[c]=b;return this};q.S=function(a,b){var c=Rb(a);this.c[c]=Tb;this.b[c]=b;return this};q.stop=function(){this.a=!0};q.parse=function(a,b,c){a=new Db(a,0);for(this.a=!1;a.ha()&&!this.a;)this.Bc(0,a,b,c)};
q.Bc=function(a,b,c,d){var e=b.Z(),f=b.I(),g=b.I(),h=!1;switch(f){case 0:f=b.P.byteLength-e;break;case 1:f=b.gb(),h=!0}var k=this.b[g];if(k){var l=null,m=null;this.c[g]==Tb&&(m=b.I(),l=m>>>24,m&=16777215);g=e+f;c&&g>b.P.byteLength&&(g=b.P.byteLength);d&&g>b.P.byteLength?this.a=!0:(d=g-b.Z(),b=0<d?b.Va(d):new Uint8Array(0),b=new Db(b,0),k({parser:this,partialOkay:c||!1,version:l,flags:m,reader:b,size:f,start:e+a,has64BitSize:h}))}else b.skip(Math.min(e+f-b.Z(),b.P.byteLength-b.Z()))};
function Ub(a){for(var b=Vb(a);a.reader.ha()&&!a.parser.a;)a.parser.Bc(a.start+b,a.reader,a.partialOkay)}function Wb(a){var b=Vb(a),c=a.reader.I();c=t(ib(c));for(var d=c.next();!d.done&&(a.parser.Bc(a.start+b,a.reader,a.partialOkay),!a.parser.a);d=c.next());}function Xb(a){return function(b){a(b.reader.Va(b.reader.P.byteLength-b.reader.Z()))}}function Rb(a){var b=0;a=t(a);for(var c=a.next();!c.done;c=a.next())b=b<<8|c.value.charCodeAt(0);return b}
function Yb(a){return String.fromCharCode(a>>24&255,a>>16&255,a>>8&255,a&255)}function Vb(a){return 8+(a.has64BitSize?8:0)+(null!=a.flags?4:0)}K("shaka.util.Mp4Parser",Qb);Qb.headerSize=Vb;Qb.typeToString=Yb;Qb.allData=Xb;Qb.sampleDescription=Wb;Qb.children=Ub;Qb.prototype.parseNext=Qb.prototype.Bc;Qb.prototype.parse=Qb.prototype.parse;Qb.prototype.stop=Qb.prototype.stop;Qb.prototype.fullBox=Qb.prototype.S;Qb.prototype.box=Qb.prototype.box;var Sb=0,Tb=1;function Zb(a){this.b=a;this.a=null}Zb.prototype.N=function(a){var b=this;this.stop();var c=!0,d=null;this.a=function(){window.clearTimeout(d);c=!1};d=window.setTimeout(function(){c&&b.b()},1E3*a);return this};Zb.prototype.stop=function(){this.a&&(this.a(),this.a=null)};function M(a){this.b=a;this.a=null}M.prototype.Yb=function(){this.stop();this.b();return this};M.prototype.N=function(a){var b=this;this.stop();this.a=(new Zb(function(){b.b()})).N(a);return this};M.prototype.xa=function(a){var b=this;this.stop();this.a=(new Zb(function(){b.a.N(a);b.b()})).N(a);return this};M.prototype.stop=function(){this.a&&(this.a.stop(),this.a=null)};K("shaka.util.Timer",M);M.prototype.stop=M.prototype.stop;M.prototype.tickEvery=M.prototype.xa;M.prototype.tickAfter=M.prototype.N;
M.prototype.tickNow=M.prototype.Yb;function $b(){return window.MediaSource&&MediaSource.isTypeSupported?!0:!1}function ac(a){return""!=bc().canPlayType(a)}function cc(){return dc("Tizen")}function ec(){return dc("CrKey")}function fc(){return!!navigator.vendor&&navigator.vendor.includes("Apple")&&!cc()}function gc(){if(!fc())return null;var a=navigator.userAgent.match(/Version\/(\d+)/);return a?parseInt(a[1],10):(a=navigator.userAgent.match(/OS (\d+)(?:_\d+)?/))?parseInt(a[1],10):null}
function dc(a){return(navigator.userAgent||"").includes(a)}function bc(){if(hc)return hc;ic||(ic=new M(function(){hc=null}));(hc=document.getElementsByTagName("video")[0]||document.getElementsByTagName("audio")[0])||(hc=document.createElement("video"));ic.N(1);return hc}var ic=null,hc=null;function jc(){}function kc(a){a=pb(a);a=yb.value()(a);return btoa(a)}function lc(a,b){b=void 0==b?!0:b;var c=kc(a).replace(/\+/g,"-").replace(/\//g,"_");return b?c:c.replace(/[=]*$/,"")}function mc(a){var b=window.atob(a.replace(/-/g,"+").replace(/_/g,"/"));a=new Uint8Array(b.length);b=t(lb(b));for(var c=b.next();!c.done;c=b.next())c=c.value,a[c.ba]=c.item.charCodeAt(0);return a}
function nc(a){var b=a.length/2,c=new Uint8Array(b);b=t(ib(b));for(var d=b.next();!d.done;d=b.next())d=d.value,c[d]=window.parseInt(a.substr(2*d,2),16);return c}function oc(a){var b=pb(a);a="";b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,c=c.toString(16),1==c.length&&(c="0"+c),a+=c;return a}
function pc(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];var d=0,e=t(b);for(c=e.next();!c.done;c=e.next())d+=c.value.byteLength;d=new Uint8Array(d);e=0;b=t(b);for(c=b.next();!c.done;c=b.next())c=c.value,d.set(pb(c),e),e+=c.byteLength;return d}K("shaka.util.Uint8ArrayUtils",jc);jc.concat=pc;jc.toHex=oc;jc.fromHex=nc;jc.fromBase64=mc;jc.toBase64=lc;jc.toStandardBase64=kc;
jc.equal=function(a,b){Hb("shaka.util.Uint8ArrayUtils.equal","Please use shaka.util.BufferUtils.equal instead.");return nb(a,b)};function qc(a){function b(){d=!0}function c(l){f.push(l);Ub(l)}a=pb(a);var d=!1,e,f=[],g=[];(new Qb).box("moov",c).box("trak",c).box("mdia",c).box("minf",c).box("stbl",c).S("stsd",function(l){e=l;f.push(l);Wb(l)}).S("encv",b).S("enca",b).S("avc1",function(l){g.push({box:l,$d:1701733238})}).S("mp4a",function(l){g.push({box:l,$d:1701733217})}).parse(a);if(d)return a;if(0==g.length||!e)throw cb(oc(a)),new L(2,3,3019);g.reverse();for(var h=t(g),k=h.next();!k.done;k=h.next())k=k.value,a=rc(a,e,k.box,f,
k.$d);return a}
function rc(a,b,c,d,e){var f=sc.value(),g=a.subarray(c.start,c.start+c.size),h=tb(g),k=new Uint8Array(c.size+f.byteLength);k.set(g,0);g=tb(k);g.setUint32(4,e);k.set(f,c.size);e=h.getUint32(4);g.setUint32(c.size+16,e);tc(k,0,k.byteLength);e=new Uint8Array(a.byteLength+k.byteLength);c=dc("Xbox One")?c.start:c.start+c.size;f=a.subarray(c);e.set(a.subarray(0,c));e.set(k,c);e.set(f,c+k.byteLength);a=t(d);for(d=a.next();!d.done;d=a.next())d=d.value,tc(e,d.start,d.size+k.byteLength);k=tb(e,b.start);b=Vb(b);
a=k.getUint32(b);k.setUint32(b,a+1);return e}function tc(a,b,c){a=tb(a,b);b=a.getUint32(0);0!=b&&(1==b?(a.setUint32(8,c>>32),a.setUint32(12,c&4294967295)):a.setUint32(0,c))}var sc=new ub(function(){return new Uint8Array([0,0,0,80,115,105,110,102,0,0,0,12,102,114,109,97,0,0,0,0,0,0,0,20,115,99,104,109,0,0,0,0,99,101,110,99,0,1,0,0,0,0,0,40,115,99,104,105,0,0,0,32,116,101,110,99,0,0,0,0,0,0,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])});function uc(a,b){return"number"===typeof a&&"number"===typeof b&&isNaN(a)&&isNaN(b)?!0:a===b}function vc(a,b){var c=a.indexOf(b);-1<c&&a.splice(c,1)}function wc(a,b,c){c||(c=uc);if(a.length!=b.length)return!1;b=b.slice();var d={};a=t(a);for(var e=a.next();!e.done;d={Mc:d.Mc},e=a.next()){d.Mc=e.value;e=b.findIndex(function(f){return function(g){return c(f.Mc,g)}}(d));if(-1==e)return!1;b[e]=b[b.length-1];b.pop()}return 0==b.length}
function xc(a,b,c){c||(c=uc);if(a.length!=b.length)return!1;for(var d=0;d<a.length;d++)if(!c(a[d],b[d]))return!1;return!0};function yc(a,b,c){this.startTime=a;this.direction=zc;this.endTime=b;this.payload=c;this.region=new Ac;this.position=null;this.positionAlign=Bc;this.size=0;this.textAlign=Dc;this.writingMode=Ec;this.lineInterpretation=Fc;this.line=null;this.lineHeight="";this.lineAlign=Gc;this.displayAlign=Hc;this.fontSize=this.border=this.backgroundImage=this.backgroundColor=this.color="";this.fontWeight=Ic;this.fontStyle=Jc;this.linePadding=this.letterSpacing=this.fontFamily="";this.opacity=1;this.textDecoration=
[];this.wrapLine=!0;this.id="";this.nestedCues=[];this.spacer=this.lineBreak=!1;this.cellResolution={columns:32,rows:15}}yc.prototype.clone=function(){var a=new yc(0,0,""),b;for(b in this)a[b]=this[b],a[b]&&a[b].constructor==Array&&(a[b]=a[b].slice());return a};
function Kc(a,b){if(a.startTime!=b.startTime||a.endTime!=b.endTime||a.payload!=b.payload)return!1;for(var c in a)if("startTime"!=c&&"endTime"!=c&&"payload"!=c)if("nestedCues"==c){if(!xc(a.nestedCues,b.nestedCues,Kc))return!1}else if("region"==c||"cellResolution"==c)for(var d in a[c]){if(a[c][d]!=b[c][d])return!1}else if(Array.isArray(a[c])){if(!xc(a[c],b[c]))return!1}else if(a[c]!=b[c])return!1;return!0}K("shaka.text.Cue",yc);var Bc="auto";
yc.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:Bc};var Dc="center",Lc={LEFT:"left",RIGHT:"right",CENTER:Dc,START:"start",END:"end"};yc.textAlign=Lc;var Hc="after",Mc={BEFORE:"before",CENTER:"center",AFTER:Hc};yc.displayAlign=Mc;var zc="ltr";yc.direction={HORIZONTAL_LEFT_TO_RIGHT:zc,HORIZONTAL_RIGHT_TO_LEFT:"rtl"};var Ec="horizontal-tb";yc.writingMode={HORIZONTAL_TOP_TO_BOTTOM:Ec,VERTICAL_LEFT_TO_RIGHT:"vertical-lr",VERTICAL_RIGHT_TO_LEFT:"vertical-rl"};var Fc=0;
yc.lineInterpretation={LINE_NUMBER:Fc,PERCENTAGE:1};var Gc="start",Nc={CENTER:"center",START:Gc,END:"end"};yc.lineAlign=Nc;var Oc={white:"#FFF",lime:"#0F0",cyan:"#0FF",red:"#F00",yellow:"#FF0",magenta:"#F0F",blue:"#00F",black:"#000"};yc.defaultTextColor=Oc;var Pc={bg_white:"#FFF",bg_lime:"#0F0",bg_cyan:"#0FF",bg_red:"#F00",bg_yellow:"#FF0",bg_magenta:"#F0F",bg_blue:"#00F",bg_black:"#000"};yc.defaultTextBackgroundColor=Pc;var Ic=400;yc.fontWeight={NORMAL:Ic,BOLD:700};
var Jc="normal",Qc={NORMAL:Jc,ITALIC:"italic",OBLIQUE:"oblique"};yc.fontStyle=Qc;yc.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};function Ac(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Rc;this.scroll=Sc}K("shaka.text.CueRegion",Ac);var Rc=1;Ac.units={PX:0,PERCENTAGE:Rc,LINES:2};var Sc="";Ac.scrollMode={NONE:Sc,UP:"up"};function Tc(a,b,c,d,e){if(d>=e)return null;for(var f=-1,g=-1,h=0;h<c.length;h++)if(c[h].some(function(B){return null!=B&&""!=B.a.trim()})){f=h;break}for(h=c.length-1;0<=h;h--)if(c[h].some(function(B){return null!=B&&""!=B.a.trim()})){g=h;break}if(-1===f||-1===g)return null;for(var k=h=!1,l="white",m="black",n=Uc(d,e,h,k,l,m);f<=g;f++){for(var p=c[f],r=-1,u=-1,x=0;x<p.length;x++)if(null!=p[x]&&""!==p[x].a.trim()){r=x;break}for(x=p.length-1;0<=x;x--)if(null!=p[x]&&""!==p[x].a.trim()){u=x;break}if(-1===
r||-1===u)p=Vc(d,e),a.nestedCues.push(p);else{for(;r<=u;r++)if(x=p[r]){var w=x.g,y=x.c,D=x.f,C=x.b;if(w!=h||y!=k||D!=l||C!=m)n.payload&&a.nestedCues.push(n),n=Uc(d,e,w,y,D,C),h=w,k=y,l=D,m=C;n.payload+=x.a}else n.payload+=" ";n.payload&&a.nestedCues.push(n);f!==g&&(n=Vc(d,e),a.nestedCues.push(n));n=Uc(d,e,h,k,l,m)}}return a.nestedCues.length?{cue:a,stream:b}:null}
function Uc(a,b,c,d,e,f){a=new yc(a,b,"");c&&a.textDecoration.push("underline");d&&(a.fontStyle="italic");a.color=e;a.backgroundColor=f;return a}function Vc(a,b){var c=new yc(a,b,"");c.lineBreak=!0;return c}function Wc(a,b,c,d,e){this.a=a;this.g=b;this.c=c;this.b=d;this.f=e};function Xc(){this.g=!1;this.h=this.l=0;this.j=Yc;this.c=[];this.a=this.b=this.f=0;this.D=this.A=!1;this.C="white";this.v="black";Zc(this)}function Zc(a){a.c=[];for(var b=0;15>b;b++)a.c.push($c())}function $c(){for(var a=[],b=0;42>b;b++)a.push(null);return a}function ad(a,b){bd(a)&&(a.c[a.b][a.a]=new Wc(b,a.D,a.A,a.v,a.C),a.a++)}function bd(a){var b=a.a<a.h&&0<=a.a;return a.b<a.l&&0<=a.b&&b}Xc.prototype.isVisible=function(){return this.g};
function cd(a,b,c){var d=new yc(a.f,b,"");d.textAlign=a.j===dd?"left":a.j===ed?"right":Dc;if(c=Tc(d,"svc"+c,a.c,a.f,b))a.f=b;return c}var dd=0,ed=1,Yc=2;function fd(){this.c=[];this.b=null;this.a=0}function gd(a,b){3===b.type?(a.a=2*(b.value&63)-1,a.b=[]):a.b&&(0<a.a&&(a.b.push(b),a.a--),0===a.a&&(a.c.push(new hd(a.b)),a.b=null,a.a=0))}function hd(a){this.a=0;this.b=a}hd.prototype.ha=function(){return this.a<this.b.length};hd.prototype.Z=function(){return this.a};function id(a){if(!a.ha())throw new L(2,2,3E3);return a.b[a.a++]}hd.prototype.skip=function(a){if(this.a+a>this.b.length)throw new L(2,2,3E3);this.a+=a};function jd(a){this.c=a;this.b=[null,null,null,null,null,null,null,null];this.a=null}
function kd(a,b,c,d){if(128<=c&&135>=c)d=c&7,a.b[d]&&(a.a=a.b[d]);else{if(136===c){c=id(b).value;b=null;c=t(ld(a,c));for(var e=c.next();!e.done;e=c.next())e=a.b[e.value],e.isVisible()&&(b=cd(e,d,a.c)),Zc(e);return b}if(137===c)for(b=id(b).value,b=t(ld(a,b)),c=b.next();!c.done;c=b.next())c=a.b[c.value],c.isVisible()||(c.f=d),c.g=!0;else{if(138===c){c=id(b).value;b=null;c=t(ld(a,c));for(e=c.next();!e.done;e=c.next())e=a.b[e.value],e.isVisible()&&(b=cd(e,d,a.c)),e.g=!1;return b}if(139===c){c=id(b).value;
b=null;c=t(ld(a,c));for(e=c.next();!e.done;e=c.next())e=a.b[e.value],e.isVisible()?b=cd(e,d,a.c):e.f=d,e.g=!e.g;return b}if(140===c)return b=id(b).value,md(a,b,d);if(143===c)return d=md(a,255,d),nd(a),d;if(144===c)b.skip(1),d=id(b).value,a.a&&(a.a.A=0<(d&128),a.a.D=0<(d&64));else if(145===c)d=id(b).value,c=id(b).value,b.skip(1),a.a&&(b=od((c&48)>>4,(c&12)>>2,c&3),a.a.C=od((d&48)>>4,(d&12)>>2,d&3),a.a.v=b);else if(146===c)d=id(b).value,b=id(b).value,a.a&&(a=a.a,a.b=d&15,a.a=b&63);else if(151===c)b.skip(1),
b.skip(1),d=id(b).value,b.skip(1),a.a&&(a.a.j=d&3);else if(152<=c&&159>=c){c=(c&15)-8;e=null!==a.b[c];if(!e){var f=new Xc;f.f=d;a.b[c]=f}d=id(b).value;id(b);id(b);f=id(b).value;var g=id(b).value;b=id(b).value;e&&0===(b&7)||(b=a.b[c],b.b=0,b.a=0,b.D=!1,b.A=!1,b.C="white",b.v="black");b=a.b[c];b.g=0<(d&32);b.l=(f&15)+1;b.h=(g&63)+1;a.a=a.b[c]}}}return null}
var ld=function pd(a,b){var d,e;return Fa(pd,function(f){1==f.a&&(d=0);if(5!=f.a)return 8>d?(e=1===(b&1))&&a.b[d]?v(f,d,5):f.m(5):f.m(0);b>>=1;d++;return f.m(2)})};function md(a,b,c){var d=null;b=t(ld(a,b));for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=a.b[e];f.isVisible()&&(d=cd(f,c,a.c));a.b[e]=null}return d}function nd(a){a.a=null;a.b=[null,null,null,null,null,null,null,null]}function od(a,b,c){var d={0:0,1:0,2:1,3:1};a=d[a];b=d[b];c=d[c];return qd[a<<2|b<<1|c]}
var rd=new Map([[32," "],[33,"\u00a0"],[37,"\u2026"],[42,"\u0160"],[44,"\u0152"],[48,"\u2588"],[49,"\u2018"],[50,"\u2019"],[51,"\u201c"],[52,"\u201d"],[53,"\u2022"],[57,"\u2122"],[58,"\u0161"],[60,"\u0153"],[61,"\u2120"],[63,"\u0178"],[118,"\u215b"],[119,"\u215c"],[120,"\u215d"],[121,"\u215e"],[122,"\u2502"],[123,"\u2510"],[124,"\u2514"],[125,"\u2500"],[126,"\u2518"],[127,"\u250c"]]),qd="black blue green cyan red magenta yellow white".split(" ");function sd(a,b){this.c=[];this.a=1;this.b=0;this.v=a;this.l=b;this.f=this.h=!1;this.g="white";this.j="black";td(this)}function ud(a,b,c){return Tc(new yc(b,c,""),"CC"+(a.v<<1|a.l+1),a.c,b,c)}function td(a){vd(a,0,15);a.a=1}function wd(a,b,c){if(!(32>c||127<c)){var d="";switch(b){case xd:d=yd.has(c)?yd.get(c):String.fromCharCode(c);break;case zd:d=Ad.get(c);break;case Bd:a.c[a.a].pop();d=Cd.get(c);break;case Dd:a.c[a.a].pop(),d=Ed.get(c)}d&&a.c[a.a].push(new Wc(d,a.h,a.f,a.j,a.g))}}
function Fd(a,b,c,d){if(b>=c)for(--d;0<=d;d--)a.c[b+d]=a.c[c+d].map(function(f){return f});else for(var e=0;e<d;e++)a.c[b+e]=a.c[c+e].map(function(f){return f})}function vd(a,b,c){for(var d=0;d<=c;d++)a.c[b+d]=[]}
var xd=0,zd=1,Bd=2,Dd=3,yd=new Map([[39,"\u2019"],[42,"\u00e1"],[92,"\u00e9"],[92,"\u00e9"],[94,"\u00ed"],[95,"\u00f3"],[96,"\u00fa"],[123,"\u00e7"],[124,"\u00f7"],[125,"\u00d1"],[126,"\u00f1"],[127,"\u2588"]]),Ad=new Map([[48,"\u00ae"],[49,"\u00b0"],[50,"\u00bd"],[51,"\u00bf"],[52,"\u2122"],[53,"\u00a2"],[54,"\u00a3"],[55,"\u266a"],[56,"\u00e0"],[57,"\u2800"],[58,"\u00e8"],[59,"\u00e2"],[60,"\u00ea"],[61,"\u00ee"],[62,"\u00f4"],[63,"\u00fb"]]),Cd=new Map([[32,"\u00c1"],[33,"\u00c9"],[34,"\u00d3"],
[35,"\u00da"],[36,"\u00dc"],[37,"\u00fc"],[38,"\u2018"],[39,"\u00a1"],[40,"*"],[41,"'"],[42,"\u2500"],[43,"\u00a9"],[44,"\u2120"],[45,"\u00b7"],[46,"\u201c"],[47,"\u201d"],[48,"\u00c0"],[49,"\u00c2"],[50,"\u00c7"],[51,"\u00c8"],[52,"\u00ca"],[53,"\u00cb"],[54,"\u00eb"],[55,"\u00ce"],[56,"\u00cf"],[57,"\u00ef"],[58,"\u00d4"],[59,"\u00d9"],[60,"\u00f9"],[61,"\u00db"],[62,"\u00ab"],[63,"\u00bb"]]),Ed=new Map([[32,"\u00c3"],[33,"\u00e3"],[34,"\u00cd"],[35,"\u00cc"],[36,"\u00ec"],[37,"\u00d2"],[38,"\u00f2"],
[39,"\u00d5"],[40,"\u00f5"],[41,"{"],[42,"}"],[43,"\\"],[44,"^"],[45,"_"],[46,"|"],[47,"~"],[48,"\u00c4"],[49,"\u00e4"],[50,"\u00d6"],[51,"\u00f6"],[52,"\u00df"],[53,"\u00a5"],[54,"\u00a4"],[55,"\u2502"],[56,"\u00c5"],[57,"\u00e5"],[58,"\u00d8"],[59,"\u00f8"],[60,"\u250c"],[61,"\u2510"],[62,"\u2514"],[63,"\u2518"]]);function Gd(a,b){this.b=Hd;this.j=new sd(a,b);this.c=new sd(a,b);this.g=new sd(a,b);this.a=this.c;this.f=0;this.h=null}function Id(a,b,c){a.a=a.c;var d=a.a,e=null;a.b!==Jd&&a.b!==Kd&&(e=ud(d,a.f,c),c=a.c,c.a=0<c.b?c.b:0,vd(c,0,15),c=a.g,c.a=0<c.b?c.b:0,vd(c,0,15),d.a=15);a.b=Jd;d.b=b;return e}function Ld(a){a.b=Md;a.a=a.g;a.a.b=0}function Nd(a){Va("Cea608DataChannel","CEA-608 text mode entered, but is unsupported");a.a=a.j;a.b=Kd}
var Hd=0,Md=1,Jd=3,Kd=4,Od="black green blue cyan red yellow magenta black".split(" "),Pd="white green blue cyan red yellow magenta white_italics".split(" ");function Qd(){this.b=[];this.a=[];this.c=new fd;this.g=0;this.l=new Map([["CC1",new Gd(0,0)],["CC2",new Gd(0,1)],["CC3",new Gd(1,0)],["CC4",new Gd(1,1)]]);this.j=this.h=0;this.f=new Map;Rd(this)}function Rd(a){a.h=0;a.j=0;a=t(a.l.values());for(var b=a.next();!b.done;b=a.next())b=b.value,b.b=2,b.a=b.c,b.h=null,td(b.c),td(b.g),td(b.j)}
function Sd(a){function b(f,g){return f.pts-g.pts||f.order-g.order}var c=[];a.b.sort(b);a.a.sort(b);for(var d=t(a.b),e=d.next();!e.done;e=d.next())(e=Td(a,e.value))&&c.push(e);d=t(a.a);for(e=d.next();!e.done;e=d.next())gd(a.c,e.value);d=t(a.c.c);for(e=d.next();!e.done;e=d.next())e=Ud(a,e.value),c.push.apply(c,ia(e));a.c.c=[];a.b=[];a.a=[];return c}
function Td(a,b){var c=b.type;if(16===(b.va&112)){var d=b.va>>3&1;0===c?a.h=d:a.j=d}c=a.l.get("CC"+(c<<1|(c?a.j:a.h)+1));if(255===b.va&&255===b.La||!b.va&&!b.La||!Vd(b.va)||!Vd(b.La))return 45<=++a.g&&Rd(a),null;a.g=0;b.va&=127;b.La&=127;if(!b.va&&!b.La)return null;d=null;if(16===(b.va&112))a:{var e=b.va;d=b.La;if(c.h===(e<<8|d))c.h=null;else if(c.h=e<<8|d,16===(e&240)&&64===(d&192)){e=[11,11,1,2,3,4,12,13,14,15,5,6,7,8,9,10][(e&7)<<1|d>>5&1];var f=(d&30)>>1,g="white",h=!1;7>f?g=Pd[f]:7===f&&(h=!0);
d=1===(d&1);if(c.b!==Kd){f=c.a;if(c.b===Jd&&e!==f.a){var k=1+e-f.b;Fd(f,k,1+f.a-f.b,f.b);vd(f,0,k-1);vd(f,e+1,15-e)}f.a=e;c.a.h=d;c.a.f=h;c.a.g=g;c.a.j="black"}}else if(17===(e&247)&&32===(d&240))c.a.h=!1,c.a.f=!1,c.a.g="white",wd(c.a,xd,32),g=!1,e=Pd[(d&14)>>1],"white_italics"===e&&(e="white",g=!0),c.a.h=1===(d&1),c.a.f=g,c.a.g=e;else if(16===(e&247)&&32===(d&240)||23===(e&247)&&45===(d&255))g="black",0===(e&7)&&(g=Od[(d&14)>>1]),c.a.j=g;else if(17===(e&247)&&48===(d&240))wd(c.a,zd,d);else if(18===
(e&246)&&32===(d&224))wd(c.a,e&1?Dd:Bd,d);else if(20===(e&246)&&32===(d&240)){d=b.pts;e=null;switch(b.La){case 32:Ld(c);break;case 33:c=c.a;c.c[c.a].pop();break;case 37:e=Id(c,2,d);break;case 38:e=Id(c,3,d);break;case 39:e=Id(c,4,d);break;case 40:wd(c.a,xd,32);break;case 41:c.b=2;c.a=c.c;c.a.b=0;c.f=d;break;case 42:td(c.j);Nd(c);break;case 43:Nd(c);break;case 44:e=c.c;g=null;c.b!==Kd&&(g=ud(e,c.f,d));vd(e,0,15);e=g;break;case 45:e=c.a;c.b!==Jd?e=null:(g=ud(e,c.f,d),h=e.a-e.b+1,Fd(e,h-1,h,e.b),vd(e,
0,h-1),vd(e,e.a,15-e.a),c.f=d,e=g);break;case 46:vd(c.g,0,15);break;case 47:e=null,c.b!==Kd&&(e=ud(c.c,c.f,d)),g=c.g,c.g=c.c,c.c=g,Ld(c),c.f=d}d=e;break a}d=null}else e=b.La,wd(c.a,xd,b.va),wd(c.a,xd,e);return d}
function Ud(a,b){var c=[];try{for(;b.ha();){var d=id(b).value,e=(d&224)>>5,f=d&31;7===e&&0!=f&&(e=id(b).value&63);if(0!=e){a.f.has(e)||a.f.set(e,new jd(e));for(var g=a.f.get(e),h=b.Z();b.Z()-h<f;){e=b;var k=id(e),l=k.value,m=k.pts;if(16===l){var n=id(e);l=l<<16|n.value}if(0<=l&&31>=l){var p=m;if(g.a){var r=g.a;e=null;switch(l){case 8:!bd(r)||0>=r.a&&0>=r.b||(0>=r.a?(r.a=r.h-1,r.b--):r.a--,r.c[r.b][r.a]=null);break;case 13:r.isVisible()&&(e=cd(r,p,g.c));if(r.b+1>=r.l){p=r;for(var u=0,x=1;15>x;x++,
u++)p.c[u]=p.c[x];for(x=0;1>x;x++,u++)p.c[u]=$c()}else r.b++;r.a=0;break;case 14:r.isVisible()&&(e=cd(r,p,g.c));r.c[r.b]=$c();r.a=0;break;case 12:r.isVisible()&&(e=cd(r,p,g.c)),Zc(r),p=r,p.b=0,p.a=0}var w=e}else w=null}else if(128<=l&&159>=l)w=kd(g,e,l,m);else{if(4096<=l&&4127>=l)p=l&255,8<=p&&15>=p?e.skip(1):16<=p&&23>=p?e.skip(2):24<=p&&31>=p&&e.skip(3);else if(4224<=l&&4255>=l)p=l&255,128<=p&&135>=p?e.skip(4):136<=p&&143>=p&&e.skip(5);else if(32<=l&&127>=l)e=l,g.a&&(127===e?ad(g.a,"\u266a"):ad(g.a,
String.fromCharCode(e)));else if(160<=l&&255>=l)g.a&&ad(g.a,String.fromCharCode(l));else if(4128<=l&&4223>=l){if(e=l&255,g.a)if(rd.has(e)){var y=rd.get(e);ad(g.a,y)}else ad(g.a,"_")}else 4256<=l&&4351>=l&&g.a&&(160!=(l&255)?ad(g.a,"_"):ad(g.a,"[CC]"));w=null}(e=w)&&c.push(e)}}}}catch(D){if(D instanceof L&&3E3===D.code)Va("CEA708_INVALID_DATA","Buffer read out of bounds / invalid CEA-708 Data.");else throw D;}return c}function Vd(a){for(var b=0;a;)b^=a&1,a>>=1;return 1===b};function Wd(){}var Yd=function Xd(a,b){var d,e,f,g;return Fa(Xd,function(h){if(1==h.a){for(var k=0,l=0,m=0;l<b.length;)2==k&&3==b[l]?k=0:(0==b[l]?k++:k=0,b[m]=b[l],m++),l++;d=l-m;e=0}if(4!=h.a){if(!(e+d<b.length))return h.m(0);for(f=0;255==b[e];)f+=255,e++;f+=b[e++];for(g=0;255==b[e];)g+=255,e++;g+=b[e++];return 4!=f?h.m(4):v(h,b.subarray(e,e+g),4)}e+=g;return h.m(2)})};function $d(a,b){var c=null,d=null,e=a.I();b&1&&a.skip(8);b&2&&a.skip(4);b&8&&(c=a.I());b&16&&(d=a.I());return{trackId:e,Pd:c,Ee:d}}function ae(a,b){return{cd:1==b?a.gb():a.I()}}function be(a,b){1==b?(a.skip(8),a.skip(8)):(a.skip(4),a.skip(4));return{timescale:a.I()}}
function ce(a,b,c){var d=a.I(),e=[];c&1&&a.skip(4);c&4&&a.skip(4);for(var f=t(ib(d)),g=f.next();!g.done;g=f.next())g={yd:null,sampleSize:null,Dc:null},c&256&&(g.yd=a.I()),c&512&&(g.sampleSize=a.I()),c&1024&&a.skip(4),c&2048&&(g.Dc=0==b?a.I():a.de()),e.push(g);return{rg:d,ge:e}};function de(){this.f=new Wd;this.c=new Map;this.b=this.a=0}
de.prototype.init=function(a){var b=this,c=[],d=[];(new Qb).box("moov",Ub).box("mvex",Ub).S("trex",function(e){var f=e.reader;f.skip(4);f.skip(4);e=f.I();f=f.I();b.a=e;b.b=f}).box("trak",Ub).S("tkhd",function(e){var f=e.reader;1==e.version?(f.skip(8),f.skip(8),e=f.gb()):(f.skip(4),f.skip(4),e=f.I());c.push(e)}).box("mdia",Ub).S("mdhd",function(e){e=be(e.reader,e.version);d.push(e.timescale)}).parse(a,!0);if(!c.length||!d.length||c.length!=d.length)throw new L(2,2,2010);c.forEach(function(e,f){b.c.set(e,
d[f])})};
de.prototype.parse=function(a){var b=this,c=[],d=this.a,e=this.b,f=[],g=null,h=9E4;(new Qb).box("moof",Ub).box("traf",Ub).S("trun",function(k){f=ce(k.reader,k.version,k.flags).ge}).S("tfhd",function(k){k=$d(k.reader,k.flags);d=k.Pd||b.a;e=k.Ee||b.b;k=k.trackId;b.c.has(k)&&(h=b.c.get(k))}).S("tfdt",function(k){g=ae(k.reader,k.version).cd}).box("mdat",function(k){if(null===g)throw new L(2,2,2010);k=k.reader;var l=g,m=h,n=d,p=e,r=f,u=0,x=p;for(r.length&&(x=r[0].sampleSize||p);k.ha();){var w=k.I();if(6==
(k.V()&31)){var y=0;r.length>u&&(y=r[u].Dc||0);y=(l+y)/m;for(var D=t(Yd(b.f,k.Va(w-1))),C=D.next();!C.done;C=D.next())c.push({lf:C.value,pts:y})}else k.skip(w-1);x-=w+4;0==x&&(l=r.length>u?l+(r[u].yd||n):l+n,u++,x=r.length>u?r[u].sampleSize||p:p)}}).parse(a,!1);return c};function ee(){this.b=new de;this.a=new Qd}ee.prototype.init=function(a){this.b.init(a)};
function fe(a,b){var c=a.b.parse(b);c=t(c);for(var d=c.next();!d.done;d=c.next()){var e=d.value,f=pb(e.lf);d=a.a;e=e.pts;f=new Db(f,0);if(181===f.V()&&49===f.Bb()&&1195456820===f.I()&&3===f.V()){var g=f.V();if(0!==(g&64)){g&=31;f.skip(1);for(var h=0;h<g;h++){var k=f.V(),l=(k&4)>>2,m=f.V(),n=f.V();l&&(k&=3,0===k||1===k?d.b.push({pts:e,type:k,va:m,La:n,order:d.b.length}):(d.a.push({pts:e,type:k,value:m,order:d.a.length}),d.a.push({pts:e,type:2,value:n,order:d.a.length})))}}}}return Sd(a.a)};function ge(a){return!a||1==a.length&&1E-6>a.end(0)-a.start(0)?null:a.length?a.end(a.length-1):null}function he(a,b,c){c=void 0===c?0:c;return!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0)||b>a.end(a.length-1)?!1:b+c>=a.start(0)}function ie(a,b){if(!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0))return 0;for(var c=0,d=t(je(a)),e=d.next();!e.done;e=d.next()){var f=e.value;e=f.start;f=f.end;f>b&&(c+=f-Math.max(e,b))}return c}
function ke(a,b,c){if(!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0))return null;a=je(a).findIndex(function(d,e,f){return d.start>b&&(0==e||f[e-1].end-b<=c)});return 0<=a?a:null}function je(a){if(!a)return[];for(var b=[],c=t(ib(a.length)),d=c.next();!d.done;d=c.next())d=d.value,b.push({start:a.start(d),end:a.end(d)});return b};/*
 @license
 Copyright 2008 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
var le=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;/*
 @license
 Copyright 2006 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
function me(a){var b;a instanceof me?(ne(this,a.Ca),this.jb=a.jb,this.Ba=a.Ba,oe(this,a.Ab),this.sa=a.sa,pe(this,a.a.clone()),this.ab=a.ab):a&&(b=String(a).match(le))?(ne(this,b[1]||"",!0),this.jb=qe(b[2]||""),this.Ba=qe(b[3]||"",!0),oe(this,b[4]),this.sa=qe(b[5]||"",!0),pe(this,b[6]||"",!0),this.ab=qe(b[7]||"")):this.a=new re(null)}q=me.prototype;q.Ca="";q.jb="";q.Ba="";q.Ab=null;q.sa="";q.ab="";
q.toString=function(){var a=[],b=this.Ca;b&&a.push(se(b,te,!0),":");if(b=this.Ba){a.push("//");var c=this.jb;c&&a.push(se(c,te,!0),"@");a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.Ab;null!=b&&a.push(":",String(b))}if(b=this.sa)this.Ba&&"/"!=b.charAt(0)&&a.push("/"),a.push(se(b,"/"==b.charAt(0)?ue:ve,!0));(b=this.a.toString())&&a.push("?",b);(b=this.ab)&&a.push("#",se(b,we));return a.join("")};
q.resolve=function(a){var b=this.clone();"data"===b.Ca&&(b=new me);var c=!!a.Ca;c?ne(b,a.Ca):c=!!a.jb;c?b.jb=a.jb:c=!!a.Ba;c?b.Ba=a.Ba:c=null!=a.Ab;var d=a.sa;if(c)oe(b,a.Ab);else if(c=!!a.sa){if("/"!=d.charAt(0))if(this.Ba&&!this.sa)d="/"+d;else{var e=b.sa.lastIndexOf("/");-1!=e&&(d=b.sa.substr(0,e+1)+d)}if(".."==d||"."==d)d="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){e=0==d.lastIndexOf("/",0);d=d.split("/");for(var f=[],g=0;g<d.length;){var h=d[g++];"."==h?e&&g==d.length&&f.push(""):".."==
h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),e&&g==d.length&&f.push("")):(f.push(h),e=!0)}d=f.join("/")}}c?b.sa=d:c=""!==a.a.toString();c?pe(b,a.a.clone()):c=!!a.ab;c&&(b.ab=a.ab);return b};q.clone=function(){return new me(this)};function ne(a,b,c){a.Ca=c?qe(b,!0):b;a.Ca&&(a.Ca=a.Ca.replace(/:$/,""))}function oe(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ab=b}else a.Ab=null}function pe(a,b,c){b instanceof re?a.a=b:(c||(b=se(b,xe)),a.a=new re(b))}
function qe(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}function se(a,b,c){return null!=a?(a=encodeURI(a).replace(b,ye),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ye(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var te=/[#\/\?@]/g,ve=/[#\?:]/g,ue=/[#\?]/g,xe=/[#\?@]/g,we=/#/g;function re(a){this.a=a||null}q=re.prototype;q.pa=null;q.pc=null;
q.add=function(a,b){if(!this.pa&&(this.pa={},this.pc=0,this.a))for(var c=this.a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];g=decodeURIComponent(g.replace(/\+/g," "));f=f||"";this.add(g,decodeURIComponent(f.replace(/\+/g," ")))}this.a=null;(c=this.pa.hasOwnProperty(a)&&this.pa[a])||(this.pa[a]=c=[]);c.push(b);this.pc++;return this};
q.toString=function(){if(this.a)return this.a;if(!this.pa)return"";var a=[],b;for(b in this.pa)for(var c=encodeURIComponent(b),d=this.pa[b],e=0;e<d.length;e++){var f=c;""!==d[e]&&(f+="="+encodeURIComponent(d[e]));a.push(f)}return this.a=a.join("&")};q.clone=function(){var a=new re;a.a=this.a;if(this.pa){var b={},c;for(c in this.pa)b[c]=this.pa[c].concat();a.pa=b;a.pc=this.pc}return a};function ze(a,b){if(0==b.length)return a;var c=b.map(function(d){return new me(d)});return a.map(function(d){return new me(d)}).map(function(d){return c.map(function(e){return d.resolve(e)})}).reduce(Lb,[]).map(function(d){return d.toString()})}function Ae(a,b){return{keySystem:a,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,sessionType:"",initData:b||[],keyIds:new Set}}
function Be(a,b){if(1==b.length)return b[0];var c=Ce(a,b);if(null!=c)return c;throw new L(2,4,4025,b);}function Ce(a,b){for(var c=t(De[a]),d=c.next();!d.done;d=c.next()){d=d.value;for(var e=t(b),f=e.next();!f.done;f=e.next())if(f=f.value,d.test(f.trim()))return f.trim()}return a==Ee?"":null}var Ee="text",Fe={Ja:"video",Xa:"audio",$:Ee,Tf:"image",Lf:"application"},De={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]};function Ge(){var a,b,c=new Promise(function(d,e){a=d;b=e});c.resolve=a;c.reject=b;return c}Ge.prototype.resolve=function(){};Ge.prototype.reject=function(){};function He(){}K("shaka.dependencies",He);He.has=function(a){return Ie.has(a)};He.add=function(a,b){if(!Je[a])throw Error(a+" is not supported");Ie.set(a,b)};var Ie=new Map,Je={muxjs:"muxjs"};He.Allowed=Je;Ie.set("muxjs",window.muxjs);function Ke(){var a=this;this.j=Ie.get("muxjs");this.a=new this.j.mp4.Transmuxer({keepOriginalTimestamps:!0});this.b=null;this.h=[];this.c=[];this.g=[];this.f=!1;this.a.on("data",function(b){a.c=b.captions;a.g=b.metadata;a.h.push(pc(b.initSegment,b.data))});this.a.on("done",function(){var b={data:pc.apply(jc,ia(a.h)),captions:a.c,metadata:a.g};a.b.resolve(b);a.f=!1})}Ke.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};
function Le(a,b){if(!Ie.get("muxjs")||!Me(a))return!1;if(b)return MediaSource.isTypeSupported(Ne(b,a));var c=Ne("audio",a),d=Ne("video",a);return MediaSource.isTypeSupported(c)||MediaSource.isTypeSupported(d)}function Me(a){return"mp2t"==a.toLowerCase().split(";")[0].split("/")[1]}
function Ne(a,b){var c=b.replace(/mp2t/i,"mp4");"audio"==a&&(c=c.replace("video","audio"));var d=/avc1\.(66|77|100)\.(\d+)/.exec(c);if(d){var e="avc1.",f=d[1],g=Number(d[2]);e=("66"==f?e+"4200":"77"==f?e+"4d00":e+"6400")+(g>>4).toString(16);e+=(g&15).toString(16);c=c.replace(d[0],e)}return c}function Oe(a,b){a.f=!0;a.b=new Ge;a.h=[];a.c=[];a.g=[];var c=pb(b);a.a.push(c);a.a.flush();a.f&&a.b.reject(new L(2,3,3018));return a.b};function Pe(a,b){var c=a;b&&(c+='; codecs="'+b+'"');return c}function Qe(a,b,c){a=Pe(a,b);return Ie.get("muxjs")&&Me(a)?Ne(c,a):a}function Re(a){var b=[a.mimeType];Se.forEach(function(c,d){var e=a[d];e&&b.push(c+'="'+e+'"')});"PQ"==a.hdr&&b.push('eotf="smpte2084"');return b.join(";")}function Te(a){a=a.split(".");var b=a[0];a.pop();return b}
var Se=(new Map).set("codecs","codecs").set("frameRate","framerate").set("bandwidth","bitrate").set("width","width").set("height","height").set("channelsCount","channels");function Ue(a){this.j=null;this.c=a;this.f=this.v=0;this.g=Infinity;this.b=this.a=null;this.l="";this.h=new Map}function Ve(a){return We[a]||"application/cea-608"==a||"application/cea-708"==a?!0:!1}Ue.prototype.destroy=function(){this.c=this.j=null;this.h.clear();return Promise.resolve()};
function Xe(a,b,c,d){var e,f,g;return J(function(h){if(1==h.a)return v(h,Promise.resolve(),2);if(!a.j||!a.c)return h["return"]();if(null==c||null==d)return a.j.parseInit(pb(b)),h["return"]();e={periodStart:a.v,segmentStart:c,segmentEnd:d};f=a.j.parseMedia(pb(b),e);g=f.filter(function(k){return k.startTime>=a.f&&k.startTime<a.g});a.c.append(g);null==a.a&&(a.a=Math.max(c,a.f));a.b=Math.min(d,a.g);z(h)})}
Ue.prototype.remove=function(a,b){var c=this;return J(function(d){if(1==d.a)return v(d,Promise.resolve(),2);!c.c||!c.c.remove(a,b)||null==c.a||b<=c.a||a>=c.b||(a<=c.a&&b>=c.b?c.a=c.b=null:a<=c.a&&b<c.b?c.a=b:a>c.a&&b>=c.b&&(c.b=a));z(d)})};function Ye(a,b,c){a.f=b;a.g=c}function Ze(a,b,c){a.l=b;if(b=a.h.get(b))for(var d=t(b.keys()),e=d.next();!e.done;e=d.next())(e=b.get(e.value).filter(function(f){return f.endTime<=c}))&&a.c.append(e)}
function $e(a){var b=[];a=t(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b.push({stream:c.stream,cue:new yc(c.startTime,c.endTime,c.text)});return b}
function af(a,b,c,d,e){var f=c+" "+d,g=new Map;b=t(b);for(var h=b.next();!h.done;h=b.next()){var k=h.value;h=k.stream;k=k.cue;g.has(h)||g.set(h,new Map);g.get(h).has(f)||g.get(h).set(f,[]);k.startTime+=e;k.endTime+=e;k.startTime>=a.f&&k.startTime<a.g&&(g.get(h).get(f).push(k),h==a.l&&a.c.append([k]))}e=t(g.keys());for(f=e.next();!f.done;f=e.next())for(f=f.value,a.h.has(f)||a.h.set(f,new Map),b=t(g.get(f).keys()),h=b.next();!h.done;h=b.next())h=h.value,k=g.get(f).get(h),a.h.get(f).set(h,k);a.a=null==
a.a?Math.max(c,a.f):Math.min(a.a,Math.max(c,a.f));a.b=Math.max(a.b,Math.min(d,a.g))}K("shaka.text.TextEngine",Ue);Ue.prototype.destroy=Ue.prototype.destroy;Ue.findParser=function(a){return We[a]};Ue.unregisterParser=function(a){delete We[a]};Ue.registerParser=function(a,b){We[a]=b};var We={};function bf(a){this.a=!1;this.b=new Ge;this.c=a}bf.prototype.destroy=function(){var a=this;if(this.a)return this.b;this.a=!0;return this.c().then(function(){a.b.resolve()},function(){a.b.resolve()})};function cf(a,b){if(a.a){if(b instanceof L&&7003==b.code)throw b;throw new L(2,7,7003,b);}};function df(){this.a={}}df.prototype.push=function(a,b){this.a.hasOwnProperty(a)?this.a[a].push(b):this.a[a]=[b]};df.prototype.get=function(a){return(a=this.a[a])?a.slice():null};df.prototype.remove=function(a,b){a in this.a&&(this.a[a]=this.a[a].filter(function(c){return c!=b}),0==this.a[a].length&&delete this.a[a])};function ef(a,b){for(var c in a.a)b(c,a.a[c])}df.prototype.size=function(){return Object.keys(this.a).length};function ff(){this.a=new df}q=ff.prototype;q.release=function(){this.hb();this.a=null};q.s=function(a,b,c,d){this.a&&(a=new gf(a,b,c,d),this.a.push(b,a))};q.qa=function(a,b,c,d){function e(g){f.ya(a,b,e);c(g)}var f=this;this.s(a,b,e,d)};q.ya=function(a,b,c){if(this.a){var d=this.a.get(b)||[];d=t(d);for(var e=d.next();!e.done;e=d.next())e=e.value,e.target!=a||c!=e.listener&&c||(e.ya(),this.a.remove(b,e))}};
q.hb=function(){if(this.a){var a=this.a,b=[],c;for(c in a.a)b.push.apply(b,ia(a.a[c]));a=t(b);for(b=a.next();!b.done;b=a.next())b.value.ya();this.a.a={}}};K("shaka.util.EventManager",ff);ff.prototype.removeAll=ff.prototype.hb;ff.prototype.unlisten=ff.prototype.ya;ff.prototype.listenOnce=ff.prototype.qa;ff.prototype.listen=ff.prototype.s;ff.prototype.release=ff.prototype.release;function gf(a,b,c,d){this.target=a;this.type=b;this.listener=c;this.a=hf(a,d);this.target.addEventListener(b,c,this.a)}
gf.prototype.ya=function(){this.target.removeEventListener(this.type,this.listener,this.a);this.listener=this.target=null;this.a=!1};function hf(a,b){if(void 0==b)return!1;if("boolean"==typeof b)return b;var c=new Set(["passive","capture"]);Object.keys(b).filter(function(d){return!c.has(d)});return jf(a)?b:b.capture||!1}
function jf(a){var b=lf;if(void 0==b){b=!1;try{var c={},d={get:function(){b=!0;return!1}};Object.defineProperty(c,"passive",d);Object.defineProperty(c,"capture",d);d=function(){};a.addEventListener("test",d,c);a.removeEventListener("test",d,c)}catch(e){b=!1}lf=b}return b||!1}var lf=void 0;function mf(a,b,c,d){var e=this;this.a=a;this.h=c;this.f={};this.D={};this.c=null;this.H=d||function(){};this.g={};this.b=new ff;this.l={};this.v=b;this.A=new Ge;this.j=of(this,this.A);this.F=new bf(function(){return pf(e)});this.C=""}function of(a,b){var c=new MediaSource;a.b.qa(c,"sourceopen",function(){URL.revokeObjectURL(a.C);b.resolve()});a.C=qf(c);a.a.src=a.C;return c}function rf(a){var b=Pe(a.mimeType,a.codecs),c=Re(a);return Ve(b)||MediaSource.isTypeSupported(c)||Le(b,a.type)}q=mf.prototype;
q.destroy=function(){return this.F.destroy()};
function pf(a){var b,c,d,e,f,g,h,k;return J(function(l){if(1==l.a){b=[];for(c in a.g)for(d=a.g[c],e=d[0],a.g[c]=d.slice(0,1),e&&b.push(e.p["catch"](Mb)),f=t(d.slice(1)),g=f.next();!g.done;g=f.next())h=g.value,h.p.reject(new L(2,7,7003,void 0));a.c&&b.push(a.c.destroy());a.h&&b.push(a.h.destroy());for(k in a.l)b.push(a.l[k].destroy());return v(l,Promise.all(b),2)}a.b&&(a.b.release(),a.b=null);a.a&&(a.a.removeAttribute("src"),a.a.load(),a.a=null);a.j=null;a.c=null;a.h=null;a.f={};a.l={};a.v=null;a.g=
{};z(l)})}
q.init=function(a,b){var c=this,d,e,f,g,h,k,l;return J(function(m){if(1==m.a)return d=Fe,v(m,c.A,2);e={};f=t(a.keys());for(g=f.next();!g.done;e={ma:e.ma},g=f.next())e.ma=g.value,h=a.get(e.ma),k=Pe(h.mimeType,h.codecs),e.ma==d.$?sf(c,k):(!b&&MediaSource.isTypeSupported(k)||!Le(k,e.ma)||(c.l[e.ma]=new Ke,k=Ne(e.ma,k)),l=c.j.addSourceBuffer(k),c.b.s(l,"error",function(n){return function(){c.g[n.ma][0].p.reject(new L(2,3,3014,c.a.error?c.a.error.code:0))}}(e)),c.b.s(l,"updateend",function(n){return function(){return tf(c,n.ma)}}(e)),
c.f[e.ma]=l,c.D[e.ma]=k,c.g[e.ma]=[]);z(m)})};function sf(a,b){a.c||(a.c=new Ue(a.h));"application/cea-608"!=b&&"application/cea-708"!=b&&(a.c.j=Ob(We[b]))}function uf(a){return a.j?"ended"==a.j.readyState:!0}function vf(a,b){if(b==Ee)var c=a.c.a;else c=wf(a,b),c=!c||1==c.length&&1E-6>c.end(0)-c.start(0)?null:1==c.length&&0>c.start(0)?0:c.length?c.start(0):null;return c}function xf(a,b){return b==Ee?a.c.b:ge(wf(a,b))}
function yf(a,b,c){if(b==Ee)return a=a.c,null==a.b||a.b<c?0:a.b-Math.max(c,a.a);a=wf(a,b);return ie(a,c)}q.rc=function(){var a={total:je(this.a.buffered),audio:je(wf(this,"audio")),video:je(wf(this,"video")),text:[]};if(this.c){var b=this.c.a,c=this.c.b;null!=b&&null!=c&&a.text.push({start:b,end:c})}return a};function wf(a,b){try{return a.f[b].buffered}catch(c){return null}}
function zf(a,b,c,d,e,f){var g,h,k,l,m,n,p,r;return J(function(u){if(1==u.a){g=Fe;if(b==g.$)return v(u,Xe(a.c,c,d,e),0);if(a.l[b])return v(u,Oe(a.l[b],c),10);if(f)return a.c||sf(a,"text/vtt"),null==d&&null==e?a.v.init(c):(h=fe(a.v,c),h.length&&(k=a.f[g.Ja].timestampOffset,af(a.c,h,d,e,k))),c=Af(a,c,d,b),v(u,Bf(a,b,function(){a.f[b].appendBuffer(c)}),0);c=Af(a,c,d,b);return v(u,Bf(a,b,function(){a.f[b].appendBuffer(c)}),0)}l=u.b;a.c||sf(a,"text/vtt");l.metadata&&(m=a.f[b].timestampOffset,a.H(l.metadata,
m,e));l.captions&&l.captions.length&&(n=a.f[g.Ja].timestampOffset,p=$e(l.captions),af(a.c,p,d,e,n));r=l.data;r=Af(a,r,d,b);return v(u,Bf(a,b,function(){a.f[b].appendBuffer(r)}),0)})}function Cf(a,b){var c=xf(a,"video")||0;Ze(a.c,b,c)}function Df(a){a.c&&Ze(a.c,"",0)}q.remove=function(a,b,c){var d=this,e;return J(function(f){e=Fe;return a==e.$?v(f,d.c.remove(b,c),0):v(f,Bf(d,a,function(){c<=b?tf(d,a):d.f[a].remove(b,c)}),0)})};
function Ef(a,b){var c;return J(function(d){c=Fe;return b==c.$?a.c?v(d,a.c.remove(0,Infinity),0):d["return"]():v(d,Bf(a,b,function(){var e=a.j.duration;0>=e?tf(a,b):a.f[b].remove(0,e)}),0)})}q.flush=function(a){var b=this,c;return J(function(d){c=Fe;return a==c.$?d["return"]():v(d,Bf(b,a,function(){b.a.currentTime-=.001;tf(b,a)}),0)})};
function Ff(a,b,c,d,e){var f;return J(function(g){f=Fe;return b==f.$?(a.c.v=c,Ye(a.c,d,e),g["return"]()):v(g,Promise.all([Bf(a,b,function(){var h=a.f[b].appendWindowStart,k=a.f[b].appendWindowEnd;a.f[b].abort();a.f[b].appendWindowStart=h;a.f[b].appendWindowEnd=k;tf(a,b)}),Bf(a,b,function(){var h=c;0>h&&(h+=.001);a.f[b].timestampOffset=h;tf(a,b)}),Bf(a,b,function(){a.f[b].appendWindowStart=0;a.f[b].appendWindowEnd=e;a.f[b].appendWindowStart=d;tf(a,b)})]),0)})}
q.endOfStream=function(a){var b=this;return J(function(c){return v(c,Gf(b,function(){uf(b)||(a?b.j.endOfStream(a):b.j.endOfStream())}),0)})};q.Fa=function(a){var b=this;return J(function(c){return v(c,Gf(b,function(){b.j.duration=a}),0)})};q.getDuration=function(){return this.j.duration};function tf(a,b){var c=a.g[b][0];c&&(c.p.resolve(),Hf(a,b))}function Bf(a,b,c){cf(a.F);c={start:c,p:new Ge};a.g[b].push(c);1==a.g[b].length&&If(a,b);return c.p}
function Gf(a,b){var c,d,e,f,g,h;return J(function(k){switch(k.a){case 1:cf(a.F);c=[];d={};for(e in a.f)d.Fb=new Ge,f={start:function(l){return function(){return l.Fb.resolve()}}(d),p:d.Fb},a.g[e].push(f),c.push(d.Fb),1==a.g[e].length&&f.start(),d={Fb:d.Fb};A(k,2);return v(k,Promise.all(c),4);case 4:wa(k,3);break;case 2:throw g=E(k),g;case 3:try{b()}catch(l){throw new L(2,3,3015,l);}finally{for(h in a.f)Hf(a,h)}z(k)}})}function Hf(a,b){a.g[b].shift();If(a,b)}
function If(a,b){var c=a.g[b][0];if(c)try{c.start()}catch(d){"QuotaExceededError"==d.name?c.p.reject(new L(2,3,3017,b)):c.p.reject(new L(2,3,3015,d)),Hf(a,b)}}function Af(a,b,c,d){var e=a.a.mediaKeys;null==c&&e&&(cc()||dc("Xbox One"))&&"mp4"==a.D[d].split(";")[0].split("/")[1]&&(b=qc(b));return b}var qf=window.URL.createObjectURL;function Jf(a,b){a=Kf(a);b=Kf(b);return a.split("-")[0]==b.split("-")[0]}function Lf(a,b){a=Kf(a);b=Kf(b);var c=a.split("-"),d=b.split("-");return c[0]==d[0]&&1==c.length&&2==d.length}function Mf(a,b){a=Kf(a);b=Kf(b);var c=a.split("-"),d=b.split("-");return 2==c.length&&2==d.length&&c[0]==d[0]}function Kf(a){var b=a.split("-");a=b[0]||"";b=b[1]||"";a=a.toLowerCase();a=Nf.get(a)||a;return(b=b.toUpperCase())?a+"-"+b:a}function Of(a,b){a=Kf(a);b=Kf(b);return b==a?4:Lf(b,a)?3:Mf(b,a)?2:Lf(a,b)?1:0}
function Pf(a){return a.language?Kf(a.language):a.audio&&a.audio.language?Kf(a.audio.language):a.video&&a.video.language?Kf(a.video.language):"und"}
function Qf(a,b){for(var c=Kf(a),d=new Set,e=t(b),f=e.next();!f.done;f=e.next())d.add(Kf(f.value));e=t(d);for(f=e.next();!f.done;f=e.next())if(f=f.value,f==c)return f;e=t(d);for(f=e.next();!f.done;f=e.next())if(f=f.value,Lf(f,c))return f;e=t(d);for(f=e.next();!f.done;f=e.next())if(f=f.value,Mf(f,c))return f;d=t(d);for(f=d.next();!f.done;f=d.next())if(f=f.value,Lf(c,f))return f;return null}
var Nf=new Map([["aar","aa"],["abk","ab"],["afr","af"],["aka","ak"],["alb","sq"],["amh","am"],["ara","ar"],["arg","an"],["arm","hy"],["asm","as"],["ava","av"],["ave","ae"],["aym","ay"],["aze","az"],["bak","ba"],["bam","bm"],["baq","eu"],["bel","be"],["ben","bn"],["bih","bh"],["bis","bi"],["bod","bo"],["bos","bs"],["bre","br"],["bul","bg"],["bur","my"],["cat","ca"],["ces","cs"],["cha","ch"],["che","ce"],["chi","zh"],["chu","cu"],["chv","cv"],["cor","kw"],["cos","co"],["cre","cr"],["cym","cy"],["cze",
"cs"],["dan","da"],["deu","de"],["div","dv"],["dut","nl"],["dzo","dz"],["ell","el"],["eng","en"],["epo","eo"],["est","et"],["eus","eu"],["ewe","ee"],["fao","fo"],["fas","fa"],["fij","fj"],["fin","fi"],["fra","fr"],["fre","fr"],["fry","fy"],["ful","ff"],["geo","ka"],["ger","de"],["gla","gd"],["gle","ga"],["glg","gl"],["glv","gv"],["gre","el"],["grn","gn"],["guj","gu"],["hat","ht"],["hau","ha"],["heb","he"],["her","hz"],["hin","hi"],["hmo","ho"],["hrv","hr"],["hun","hu"],["hye","hy"],["ibo","ig"],["ice",
"is"],["ido","io"],["iii","ii"],["iku","iu"],["ile","ie"],["ina","ia"],["ind","id"],["ipk","ik"],["isl","is"],["ita","it"],["jav","jv"],["jpn","ja"],["kal","kl"],["kan","kn"],["kas","ks"],["kat","ka"],["kau","kr"],["kaz","kk"],["khm","km"],["kik","ki"],["kin","rw"],["kir","ky"],["kom","kv"],["kon","kg"],["kor","ko"],["kua","kj"],["kur","ku"],["lao","lo"],["lat","la"],["lav","lv"],["lim","li"],["lin","ln"],["lit","lt"],["ltz","lb"],["lub","lu"],["lug","lg"],["mac","mk"],["mah","mh"],["mal","ml"],["mao",
"mi"],["mar","mr"],["may","ms"],["mkd","mk"],["mlg","mg"],["mlt","mt"],["mon","mn"],["mri","mi"],["msa","ms"],["mya","my"],["nau","na"],["nav","nv"],["nbl","nr"],["nde","nd"],["ndo","ng"],["nep","ne"],["nld","nl"],["nno","nn"],["nob","nb"],["nor","no"],["nya","ny"],["oci","oc"],["oji","oj"],["ori","or"],["orm","om"],["oss","os"],["pan","pa"],["per","fa"],["pli","pi"],["pol","pl"],["por","pt"],["pus","ps"],["que","qu"],["roh","rm"],["ron","ro"],["rum","ro"],["run","rn"],["rus","ru"],["sag","sg"],["san",
"sa"],["sin","si"],["slk","sk"],["slo","sk"],["slv","sl"],["sme","se"],["smo","sm"],["sna","sn"],["snd","sd"],["som","so"],["sot","st"],["spa","es"],["sqi","sq"],["srd","sc"],["srp","sr"],["ssw","ss"],["sun","su"],["swa","sw"],["swe","sv"],["tah","ty"],["tam","ta"],["tat","tt"],["tel","te"],["tgk","tg"],["tgl","tl"],["tha","th"],["tib","bo"],["tir","ti"],["ton","to"],["tsn","tn"],["tso","ts"],["tuk","tk"],["tur","tr"],["twi","tw"],["uig","ug"],["ukr","uk"],["urd","ur"],["uzb","uz"],["ven","ve"],["vie",
"vi"],["vol","vo"],["wel","cy"],["wln","wa"],["wol","wo"],["xho","xh"],["yid","yi"],["yor","yo"],["zha","za"],["zho","zh"],["zul","zu"]]);function Rf(a,b){var c=Sf(a.variants,b);c=Tf(c);c=Uf(c);var d=Vf(c);a.variants=a.variants.filter(function(e){return Wf(e)==d?!0:!1})}function Tf(a){var b=new df;a=t(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=Wf(c);b.push(d,c)}return b}
function Uf(a){var b=0,c=new Map,d=a.size();ef(a,function(e,f){for(var g=t(f),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.video;if(k&&k.width&&k.height){k=k.width*k.height*(k.frameRate||1);c.has(k)||c.set(k,new df);var l=c.get(k);l.push(e,h);l.size()===d&&(b=Math.max(b,k))}}});return b?c.get(b):a}function Vf(a){var b="",c=Infinity;ef(a,function(d,e){for(var f=0,g=0,h=t(e),k=h.next();!k.done;k=h.next())f+=k.value.bandwidth||0,++g;f/=g;f<c&&(b=d,c=f)});return b}
function Wf(a){var b="";a.video&&(b=Te(a.video.codecs));var c="";a.audio&&(c=Te(a.audio.codecs));return b+"-"+c}function Xf(a,b,c){a.variants=a.variants.filter(function(d){return Yf(d,b,c)})}
function Yf(a,b,c){function d(f,g,h){return f>=g&&f<=h}var e=a.video;return e&&e.width&&e.height&&(!d(e.width,b.minWidth,Math.min(b.maxWidth,c.width))||!d(e.height,b.minHeight,Math.min(b.maxHeight,c.height))||!d(e.width*e.height,b.minPixels,b.maxPixels))||a&&a.video&&a.video.frameRate&&!d(a.video.frameRate,b.minFrameRate,b.maxFrameRate)||!d(a.bandwidth,b.minBandwidth,b.maxBandwidth)?!1:!0}
function Zf(a,b,c,d){return J(function(e){if(1==e.a)return d?v(e,bg(c,0<c.offlineSessionIds.length),2):($f(c,a),ag(c),e.m(2));cg(b,c);dg(c);eg(c);z(e)})}function $f(a,b){a.variants=a.variants.filter(function(c){return b&&b.M&&!fg(b,c)?!1:!0})}function bg(a,b){return J(function(c){if(1==c.a)return v(c,gg(a.variants,b),2);a.variants=a.variants.filter(function(d){var e=d.decodingInfos.some(function(f){return f.supported});e||Ya(hg(d));return e});z(c)})}
function ag(a){a.variants=a.variants.filter(function(b){var c=b.audio;b=b.video;return c&&!rf(c)||b&&!rf(b)?!1:!0})}
function gg(a,b){var c,d,e,f,g,h,k,l,m,n,p;return J(function(r){if(c=a.some(function(u){return u.decodingInfos.length}))return r["return"]();d=navigator.mediaCapabilities;e=[];f=function(u,x){var w;return J(function(y){if(1==y.a)return A(y,2),v(y,d.decodingInfo(x),4);if(2!=y.a)return w=y.b,u.decodingInfos.push(w),wa(y,0);E(y);JSON.stringify(x);z(y)})};g=t(a);for(h=g.next();!h.done;h=g.next())for(k=h.value,l=ig(k,b),m=t(l),n=m.next();!n.done;n=m.next())p=n.value,e.push(f(k,p));return v(r,Promise.all(e),
0)})}
function ig(a,b){var c=a.audio,d=a.video,e={type:"media-source"};if(d){var f=d.codecs;if(d.codecs.includes(",")){var g=d.codecs.split(",");f=Be("video",g);f="vp9"==f?"vp09.00.10.08":f;g=Be("audio",g);g=Qe(d.mimeType,g,"audio");e.audio={contentType:g,channels:2,bitrate:a.bandwidth||1,samplerate:1,spatialRendering:!1}}f=Qe(d.mimeType,"vp9"==f?"vp09.00.10.08":f,"video");e.video={contentType:f,width:d.width||1,height:d.height||1,bitrate:d.bandwidth||a.bandwidth||1,framerate:d.frameRate||1}}c&&(f="ac-3"==
c.codecs.toLowerCase()&&cc()?"ec-3":c.codecs,f=Qe(c.mimeType,f,"audio"),e.audio={contentType:f,channels:c.channelsCount||2,bitrate:c.bandwidth||a.bandwidth||1,samplerate:c.audioSamplingRate||1,spatialRendering:c.spatialAudio});var h=(a.video?a.video.drmInfos:[]).concat(a.audio?a.audio.drmInfos:[]);if(!h.length)return[e];f=[];g=new Map;h=t(h);for(var k=h.next();!k.done;k=h.next()){var l=k.value;g.get(l.keySystem)||g.set(l.keySystem,[]);g.get(l.keySystem).push(l)}h=b?"required":"optional";l=b?["persistent-license"]:
["temporary"];for(var m=t(g.keys()),n=m.next();!n.done;n=m.next()){var p=n.value;n=Object.assign({},e);var r=g.get(p);p={keySystem:p,initDataType:"cenc",persistentState:h,distinctiveIdentifier:"optional",sessionTypes:l};r=t(r);for(k=r.next();!k.done;k=r.next()){k=k.value;if(k.initData&&k.initData.length){for(var u=new Set,x=t(k.initData),w=x.next();!w.done;w=x.next())u.add(w.value.initDataType);p.initDataType=k.initData[0].initDataType}k.distinctiveIdentifierRequired&&(p.distinctiveIdentifier="required");
k.persistentStateRequired&&(p.persistentState="required");k.sessionType&&(p.sessionTypes=[k.sessionType]);c&&(p.audio?p.audio.robustness=p.audio.robustness||k.audioRobustness:p.audio={robustness:k.audioRobustness});d&&(p.video?p.video.robustness=p.video.robustness||k.videoRobustness:p.video={robustness:k.videoRobustness})}n.keySystemConfiguration=p;f.push(n)}return f}
function cg(a,b){b.variants=b.variants.filter(function(c){var d=c.audio;c=c.video;return d&&a&&a.audio&&!jg(d,a.audio)||c&&a&&a.video&&!jg(c,a.video)?!1:!0})}function dg(a){a.textStreams=a.textStreams.filter(function(b){return Ve(Pe(b.mimeType,b.codecs))})}function eg(a){a.imageStreams=a.imageStreams.filter(function(b){var c=["image/svg+xml","image/png","image/jpeg"];(dc("Web0S")||cc()||ec())&&c.push("image/webp");return c.includes(b.mimeType)})}
function jg(a,b){return a.mimeType!=b.mimeType||a.codecs.split(".")[0]!=b.codecs.split(".")[0]?!1:!0}
function kg(a){var b=a.audio,c=a.video,d=b?b.codecs:null,e=c?c.codecs:null,f=[];e&&f.push(e);d&&f.push(d);var g=[];c&&g.push(c.mimeType);b&&g.push(b.mimeType);g=g[0]||null;var h=[];b&&h.push(b.kind);c&&h.push(c.kind);h=h[0]||null;var k=new Set;if(b)for(var l=t(b.roles),m=l.next();!m.done;m=l.next())k.add(m.value);if(c)for(l=t(c.roles),m=l.next();!m.done;m=l.next())k.add(m.value);a={id:a.id,active:!1,type:"variant",bandwidth:a.bandwidth,language:a.language,label:null,kind:h,width:null,height:null,
frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:g,codecs:f.join(", "),audioCodec:d,videoCodec:e,primary:a.primary,roles:Array.from(k),audioRoles:null,forced:!1,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null,originalImageId:null};c&&(a.videoId=c.id,a.originalVideoId=c.originalId,a.width=c.width||null,a.height=c.height||null,a.frameRate=c.frameRate||
null,a.pixelAspectRatio=c.pixelAspectRatio||null,a.videoBandwidth=c.bandwidth||null);b&&(a.audioId=b.id,a.originalAudioId=b.originalId,a.channelsCount=b.channelsCount,a.audioSamplingRate=b.audioSamplingRate,a.audioBandwidth=b.bandwidth||null,a.label=b.label,a.audioRoles=b.roles);return a}
function lg(a){return{id:a.id,active:!1,type:Ee,bandwidth:0,language:a.language,label:a.label,kind:a.kind||null,width:null,height:null,frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:a.mimeType,codecs:a.codecs||null,audioCodec:null,videoCodec:null,primary:a.primary,roles:a.roles,audioRoles:null,forced:a.forced,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,
originalTextId:a.originalId,originalImageId:null}}
function mg(a){return{id:a.id,active:!1,type:"image",bandwidth:a.bandwidth||0,language:"",label:null,kind:null,width:a.width||null,height:a.height||null,frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:a.mimeType,codecs:null,audioCodec:null,videoCodec:null,primary:!1,roles:[],audioRoles:null,forced:!1,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:a.tilesLayout||null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,
originalTextId:null,originalImageId:a.originalId}}function ng(a){a.__shaka_id||(a.__shaka_id=og++);return a.__shaka_id}function pg(a){var b=qg(a);b.active=a.enabled;b.type="variant";b.originalAudioId=a.id;"main"==a.kind&&(b.primary=!0);a.kind&&(b.roles=[a.kind],b.audioRoles=[a.kind],b.label=a.label);return b}
function qg(a){return{id:ng(a),active:!1,type:"",bandwidth:0,language:Kf(a.language),label:a.label,kind:a.kind,width:null,height:null,frameRate:null,pixelAspectRatio:null,hdr:null,mimeType:null,codecs:null,audioCodec:null,videoCodec:null,primary:!1,roles:[],forced:!1,audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,tilesLayout:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null,originalImageId:null}}
function rg(a){return a.allowedByApplication&&a.allowedByKeySystem}function sg(a){return a.filter(function(b){return rg(b)})}
function Sf(a,b){var c=a.filter(function(g){return g.audio&&g.audio.channelsCount}),d=new Map;c=t(c);for(var e=c.next();!e.done;e=c.next()){e=e.value;var f=e.audio.channelsCount;d.has(f)||d.set(f,[]);d.get(f).push(e)}c=Array.from(d.keys());if(0==c.length)return a;e=c.filter(function(g){return g<=b});return e.length?d.get(Math.max.apply(Math,ia(e))):d.get(Math.min.apply(Math,ia(c)))}
function tg(a,b,c,d){var e=a,f=a.filter(function(k){return k.primary});f.length&&(e=f);var g=e.length?e[0].language:"";e=e.filter(function(k){return k.language==g});if(b){var h=Qf(Kf(b),a.map(function(k){return k.language}));h&&(e=a.filter(function(k){return Kf(k.language)==h}))}e=e.filter(function(k){return k.forced==d});if(c){if(a=ug(e,c),a.length)return a}else if(a=e.filter(function(k){return 0==k.roles.length}),a.length)return a;a=e.map(function(k){return k.roles}).reduce(Lb,[]);return a.length?
ug(e,a[0]):e}function ug(a,b){return a.filter(function(c){return c.roles.includes(b)})}function hg(a){var b=[];a.audio&&b.push(vg(a.audio));a.video&&b.push(vg(a.video));return b.join(", ")}
function vg(a){return"audio"==a.type?"type=audio codecs="+a.codecs+" bandwidth="+a.bandwidth+" channelsCount="+a.channelsCount+" audioSamplingRate="+a.audioSamplingRate:"video"==a.type?"type=video codecs="+a.codecs+" bandwidth="+a.bandwidth+" frameRate="+a.frameRate+" width="+a.width+" height="+a.height:"unexpected stream type"}var og=0;function wg(){var a=this;this.h=null;this.c=!1;this.a=new Ra;navigator.connection&&navigator.connection.addEventListener("change",function(){if(a.i.useNetworkInformation){a.a=new Ra;var b=a.chooseVariant();b&&a.h(b)}});this.b=[];this.g=1;this.j=!1;this.i=this.f=null}q=wg.prototype;q.stop=function(){this.h=null;this.c=!1;this.b=[];this.g=1;this.f=null};q.init=function(a){this.h=a};
q.chooseVariant=function(){var a=xg(this.i.restrictions,this.b),b=this.a.getBandwidthEstimate(yg(this));this.b.length&&!a.length&&(a=xg(null,this.b),a=[a[0]]);var c=a[0]||null;a=t(lb(a));for(var d=a.next();!d.done;d=a.next()){var e=d.value;d=e.item;var f=isNaN(this.g)?1:Math.abs(this.g);e=f*(e.next||{bandwidth:Infinity}).bandwidth/this.i.bandwidthUpgradeTarget;b>=f*d.bandwidth/this.i.bandwidthDowngradeTarget&&b<=e&&(c=d)}this.f=Date.now();return c};q.enable=function(){this.c=!0};
q.disable=function(){this.c=!1};q.segmentDownloaded=function(a,b){var c=this.a;if(!(16E3>b)){var d=8E3*b/a,e=a/1E3;c.a+=b;Pa(c.b,e,d);Pa(c.c,e,d)}if(null!=this.f&&this.c)a:{if(!this.j){if(!(128E3<=this.a.a))break a;this.j=!0}else if(Date.now()-this.f<1E3*this.i.switchInterval)break a;c=this.chooseVariant();this.a.getBandwidthEstimate(yg(this));c&&this.h(c)}};q.getBandwidthEstimate=function(){return this.a.getBandwidthEstimate(this.i.defaultBandwidthEstimate)};q.setVariants=function(a){this.b=a};
q.playbackRateChanged=function(a){this.g=a};q.configure=function(a){this.i=a};function yg(a){var b=a.i.defaultBandwidthEstimate;navigator.connection&&navigator.connection.downlink&&a.i.useNetworkInformation&&(b=1E6*navigator.connection.downlink);return b}function xg(a,b){a&&(b=b.filter(function(c){return Yf(c,a,{width:Infinity,height:Infinity})}));return b.sort(function(c,d){return c.bandwidth-d.bandwidth})}K("shaka.abr.SimpleAbrManager",wg);wg.prototype.configure=wg.prototype.configure;
wg.prototype.playbackRateChanged=wg.prototype.playbackRateChanged;wg.prototype.setVariants=wg.prototype.setVariants;wg.prototype.getBandwidthEstimate=wg.prototype.getBandwidthEstimate;wg.prototype.segmentDownloaded=wg.prototype.segmentDownloaded;wg.prototype.disable=wg.prototype.disable;wg.prototype.enable=wg.prototype.enable;wg.prototype.chooseVariant=wg.prototype.chooseVariant;wg.prototype.init=wg.prototype.init;wg.prototype.stop=wg.prototype.stop;function zg(a,b){this.a=a;this.b=new Set([a]);b=b||[];for(var c=t(b),d=c.next();!d.done;d=c.next())this.add(d.value)}zg.prototype.add=function(a){return Ag(this.a,a)?(this.b.add(a),!0):!1};
function Ag(a,b){var c;if(!(c=!!a.audio!=!!b.audio||!!a.video!=!!b.video||a.language!=b.language)&&(c=a.audio&&b.audio)){c=a.audio;var d=b.audio;c=!((!(!c.channelsCount||!d.channelsCount||2<c.channelsCount||2<d.channelsCount)||c.channelsCount==d.channelsCount)&&Bg(c,d)&&Cg(c.roles,d.roles))}!c&&(c=a.video&&b.video)&&(c=a.video,d=b.video,c=!(Bg(c,d)&&Cg(c.roles,d.roles)));return c?!1:!0}zg.prototype.values=function(){return this.b.values()};
function Bg(a,b){if(a.mimeType!=b.mimeType)return!1;var c=a.codecs.split(",").map(function(g){return Te(g)}),d=b.codecs.split(",").map(function(g){return Te(g)});if(c.length!=d.length)return!1;c.sort();d.sort();for(var e=t(ib(c.length)),f=e.next();!f.done;f=e.next())if(f=f.value,c[f]!=d[f])return!1;return!0}
function Cg(a,b){var c=new Set(a),d=new Set(b);c["delete"]("main");d["delete"]("main");if(c.size!=d.size)return!1;c=t(c);for(var e=c.next();!e.done;e=c.next())if(!d.has(e.value))return!1;return!0};function Dg(a){this.a=a;this.b=new Eg(a.language,"",a.audio&&a.audio.channelsCount?a.audio.channelsCount:0,"")}Dg.prototype.create=function(a){var b=this,c=a.filter(function(d){return Ag(b.a,d)});return c.length?new zg(c[0],c):this.b.create(a)};function Eg(a,b,c,d){this.c=a;this.f=b;this.a=c;this.b=void 0===d?"":d}
Eg.prototype.create=function(a){var b=[];b=Fg(a,this.c);var c=a.filter(function(d){return d.primary});b=b.length?b:c.length?c:a;a=Gg(b,this.f);a.length&&(b=a);this.a&&(a=Sf(b,this.a),a.length&&(b=a));this.b&&(a=Hg(b,this.b),a.length&&(b=a));a=new zg(b[0]);b=t(b);for(c=b.next();!c.done;c=b.next())c=c.value,Ag(a.a,c)&&a.add(c);return a};function Fg(a,b){var c=Kf(b),d=Qf(c,a.map(function(e){return Pf(e)}));return d?a.filter(function(e){return d==Pf(e)}):[]}
function Gg(a,b){return a.filter(function(c){return c.audio?b?c.audio.roles.includes(b):0==c.audio.roles.length:!1})}function Hg(a,b){return a.filter(function(c){return c.audio?c.audio.label.toLowerCase()==b.toLowerCase():!1})};function Ig(){this.a=Jg;this.b=(new Map).set(Jg,2).set(Kg,1)}function Lg(a,b,c){a.b.set(Jg,c).set(Kg,b)}var Kg=0,Jg=1;function Mg(a,b){var c=Ng();this.j=null==a.maxAttempts?c.maxAttempts:a.maxAttempts;this.f=null==a.baseDelay?c.baseDelay:a.baseDelay;this.h=null==a.fuzzFactor?c.fuzzFactor:a.fuzzFactor;this.g=null==a.backoffFactor?c.backoffFactor:a.backoffFactor;this.a=0;this.b=this.f;if(this.c=void 0===b?!1:b)this.a=1}
function Og(a){var b,c;return J(function(d){if(1==d.a){if(a.a>=a.j)if(a.c)a.a=1,a.b=a.f;else throw new L(2,7,1010);b=a.a;a.a++;if(0==b)return d["return"]();c=a.b*(1+(2*Math.random()-1)*a.h);return v(d,new Promise(function(e){(new M(e)).N(c/1E3)}),2)}a.b*=a.g;z(d)})}function Ng(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:3E4,stallTimeout:5E3,connectionTimeout:1E4}};function Pg(a,b){this.promise=a;this.c=b;this.a=!1}function Qg(a){return new Pg(Promise.reject(a),function(){return Promise.resolve()})}function Rg(){var a=Promise.reject(new L(2,7,7001));a["catch"](function(){});return new Pg(a,function(){return Promise.resolve()})}function Sg(a){return new Pg(Promise.resolve(a),function(){return Promise.resolve()})}function Tg(a){return new Pg(a,function(){return a["catch"](function(){})})}Pg.prototype.abort=function(){this.a=!0;return this.c()};
function Ug(a){return new Pg(Promise.all(a.map(function(b){return b.promise})),function(){return Promise.all(a.map(function(b){return b.abort()}))})}Pg.prototype["finally"]=function(a){this.promise.then(function(){return a(!0)},function(){return a(!1)});return this};
Pg.prototype.W=function(a,b){function c(h){return function(k){if(e.a&&h)f.reject(g);else{var l=h?a:b;l?d=Vg(l,k,f):(h?f.resolve:f.reject)(k)}}}function d(){f.reject(g);return e.abort()}var e=this,f=new Ge,g=new L(2,7,7001);this.promise.then(c(!0),c(!1));return new Pg(f,function(){return d()})};
function Vg(a,b,c){try{var d=a(b);if(d&&d.promise&&d.abort)return c.resolve(d.promise),function(){return d.abort()};c.resolve(d);return function(){return Promise.resolve(d).then(function(){},function(){})}}catch(e){return c.reject(e),function(){return Promise.resolve()}}}K("shaka.util.AbortableOperation",Pg);Pg.prototype.chain=Pg.prototype.W;Pg.prototype["finally"]=Pg.prototype["finally"];Pg.all=Ug;Pg.prototype.abort=Pg.prototype.abort;Pg.notAbortable=Tg;Pg.completed=Sg;Pg.aborted=Rg;Pg.failed=Qg;function O(a,b){b=void 0===b?{}:b;for(var c in b)Object.defineProperty(this,c,{value:b[c],writable:!0,enumerable:!0});this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=a;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1}O.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0)};O.prototype.stopImmediatePropagation=function(){this.a=!0};
O.prototype.stopPropagation=function(){};K("shaka.util.FakeEvent",O);function Wg(){this.ic=new df;this.hc=this}Wg.prototype.addEventListener=function(a,b){this.ic.push(a,b)};Wg.prototype.removeEventListener=function(a,b){this.ic.remove(a,b)};Wg.prototype.dispatchEvent=function(a){var b=this.ic.get(a.type)||[],c=this.ic.get("All");c&&(b=b.concat(c));b=t(b);for(c=b.next();!c.done;c=b.next()){c=c.value;a.target=this.hc;a.currentTarget=this.hc;try{c.handleEvent?c.handleEvent(a):c.call(this,a)}catch(d){}if(a.a)break}return a.defaultPrevented};function Xg(a){function b(d){switch(typeof d){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return d;default:if(!d||d.buffer&&d.buffer.constructor==ArrayBuffer)return d;if(c.has(d))return null;var e=d.constructor==Array;if(d.constructor!=Object&&!e)return null;c.add(d);var f=e?[]:{},g;for(g in d)f[g]=b(d[g]);e&&(f.length=d.length);return f}}var c=new Set;return b(a)}function Yg(a){var b={},c;for(c in a)b[c]=a[c];return b};function Zg(){this.a=[]}function $g(a,b){a.a.push(b["finally"](function(){vc(a.a,b)}))}Zg.prototype.destroy=function(){for(var a=[],b=t(this.a),c=b.next();!c.done;c=b.next())c=c.value,c.promise["catch"](function(){}),a.push(c.abort());this.a=[];return Promise.all(a)};function ah(a){Wg.call(this);this.f=!1;this.h=new Zg;this.a=new Set;this.b=new Set;this.c=a||null;this.g=!1}ra(ah,Wg);q=ah.prototype;q.Ed=function(a){this.g=a};function bh(a,b,c,d){c=c||ch;var e=dh[a];if(!e||c>=e.priority)dh[a]={priority:c,mf:b,pf:void 0===d?!1:d}}q.qf=function(a){this.a.add(a)};q.Hf=function(a){this.a["delete"](a)};q.Be=function(){this.a.clear()};q.rf=function(a){this.b.add(a)};q.If=function(a){this.b["delete"](a)};q.Ce=function(){this.b.clear()};
function eh(a,b,c){return{uris:a,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:b,licenseRequestType:null,sessionId:null,streamDataCallback:void 0===c?null:c}}q.destroy=function(){this.f=!0;this.a.clear();this.b.clear();return this.h.destroy()};
q.request=function(a,b){var c=this,d=new fh;if(this.f){var e=Promise.reject(new L(2,7,7001));e["catch"](function(){});return new gh(e,function(){return Promise.resolve()},d)}b.method=b.method||"GET";b.headers=b.headers||{};b.retryParameters=b.retryParameters?Xg(b.retryParameters):Ng();b.uris=Xg(b.uris);e=hh(this,a,b);var f=e.W(function(){return ih(c,a,b,new Mg(b.retryParameters,!1),0,null,d)}),g=f.W(function(n){return jh(c,a,n)}),h=Date.now(),k=0;e.promise.then(function(){k=Date.now()-h},function(){});
var l=0;f.promise.then(function(){l=Date.now()},function(){});var m=g.W(function(n){var p=Date.now()-l,r=n.response;r.timeMs+=k;r.timeMs+=p;n.cf||!c.c||r.fromCache||a!=kh||c.c(r.timeMs,r.data.byteLength);return r},function(n){n&&(n.severity=2);throw n;});e=new gh(m.promise,function(){return m.abort()},d);$g(this.h,e);return e};
function hh(a,b,c){var d=Sg(void 0),e={};a=t(a.a);for(var f=a.next();!f.done;e={Rc:e.Rc},f=a.next())e.Rc=f.value,d=d.W(function(g){return function(){c.body&&(c.body=rb(c.body));return g.Rc(b,c)}}(e));return d.W(void 0,function(g){if(g instanceof L&&7001==g.code)throw g;throw new L(2,1,1006,g);})}
function ih(a,b,c,d,e,f,g){a.g&&(c.uris[e]=c.uris[e].replace("http://","https://"));var h=new me(c.uris[e]),k=h.Ca,l=!1;k||(k=location.protocol,k=k.slice(0,-1),ne(h,k),c.uris[e]=h.toString());k=k.toLowerCase();var m=(k=dh[k])?k.mf:null;if(!m)return Qg(new L(2,1,1E3,h));var n=k.pf,p=null,r=null,u=!1,x;return Tg(Og(d)).W(function(){if(a.f)return Rg();x=Date.now();var w=m(c.uris[e],c,b,function(C,B,F){p&&p.stop();r&&r.N(D/1E3);a.c&&b==kh&&(a.c(C,B),l=!0,g.a=F)});if(!n)return w;var y=c.retryParameters.connectionTimeout;
y&&(p=new M(function(){u=!0;w.abort()}),p.N(y/1E3));var D=c.retryParameters.stallTimeout;D&&(r=new M(function(){u=!0;w.abort()}));return w}).W(function(w){p&&p.stop();r&&r.stop();void 0==w.timeMs&&(w.timeMs=Date.now()-x);return{response:w,cf:l}},function(w){p&&p.stop();r&&r.stop();if(a.f)return Rg();u&&(w=new L(1,1,1003,c.uris[e],b));if(w instanceof L){if(7001==w.code)throw w;if(1010==w.code)throw f;if(1==w.severity){var y=new O("retry",{error:w});a.dispatchEvent(y);e=(e+1)%c.uris.length;return ih(a,
b,c,d,e,w,g)}}throw w;})}function jh(a,b,c){var d=Sg(void 0),e={};a=t(a.b);for(var f=a.next();!f.done;e={Sc:e.Sc},f=a.next())e.Sc=f.value,d=d.W(function(g){return function(){var h=c.response;h.data&&(h.data=rb(h.data));return g.Sc(b,h)}}(e));return d.W(function(){return c},function(g){var h=2;if(g instanceof L){if(7001==g.code)throw g;h=g.severity}throw new L(h,1,1007,g);})}K("shaka.net.NetworkingEngine",ah);ah.prototype.request=ah.prototype.request;ah.prototype.destroy=ah.prototype.destroy;
ah.makeRequest=eh;ah.defaultRetryParameters=function(){return Ng()};ah.prototype.clearAllResponseFilters=ah.prototype.Ce;ah.prototype.unregisterResponseFilter=ah.prototype.If;ah.prototype.registerResponseFilter=ah.prototype.rf;ah.prototype.clearAllRequestFilters=ah.prototype.Be;ah.prototype.unregisterRequestFilter=ah.prototype.Hf;ah.prototype.registerRequestFilter=ah.prototype.qf;ah.unregisterScheme=function(a){delete dh[a]};ah.registerScheme=bh;ah.prototype.setForceHTTPS=ah.prototype.Ed;
function fh(){this.a=0}ah.NumBytesRemainingClass=fh;function gh(a,b,c){Pg.call(this,a,b);this.b=c}ra(gh,Pg);ah.PendingRequest=gh;var kh=1;ah.RequestType={MANIFEST:0,SEGMENT:kh,LICENSE:2,APP:3,TIMING:4};var ch=3;ah.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:ch};var dh={};function lh(){}function mh(a){a=zb(a);return(new me(a)).Ba}function nh(a,b,c){function d(h){tb(f).setUint32(g,h.byteLength,!0);g+=4;f.set(pb(h),g);g+=h.byteLength}if(!c||!c.byteLength)throw new L(2,6,6015);var e;"string"==typeof b?e=Cb(b,!0):e=b;a=zb(a);a=Cb(a,!0);var f=new Uint8Array(12+a.byteLength+e.byteLength+c.byteLength),g=0;d(a);d(e);d(c);return f}K("shaka.util.FairPlayUtils",lh);lh.initDataTransform=nh;lh.defaultGetContentId=mh;function oh(a){for(var b=new Map,c=t(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.set(d,a[d]);return b}function ph(a){var b={};a.forEach(function(c,d){b[d]=c});return b}function qh(a,b){if(a||b){if(a&&!b||b&&!a)return!1}else return!0;if(a.size!=b.size)return!1;for(var c=t(a),d=c.next();!d.done;d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;if(!b.has(d))return!1;d=b.get(d);if(d!=e||void 0==d)return!1}return!0};function rh(a,b){var c=this;b=void 0===b?1:b;this.u=a;this.l=new Set;this.a=this.h=null;this.ja=this.M=!1;this.D=0;this.c=null;this.b=new ff;this.f=new Map;this.v=[];this.j=new Ge;this.i=null;this.g=function(d){c.j.reject(d);a.onError(d)};this.ka=new Map;this.T=new Map;this.J=new M(function(){return sh(c)});this.A=!1;this.C=[];this.H=!1;this.X=(new M(function(){th(c)})).xa(b);this.j["catch"](function(){});this.F=new bf(function(){return uh(c)})}q=rh.prototype;q.destroy=function(){return this.F.destroy()};
function uh(a){return J(function(b){switch(b.a){case 1:return a.b.release(),a.b=null,a.j.reject(),a.X.stop(),a.X=null,a.J.stop(),a.J=null,v(b,vh(a),2);case 2:if(!a.a){b.m(3);break}A(b,4);return v(b,a.a.setMediaKeys(null),6);case 6:wa(b,5);break;case 4:E(b);case 5:a.a=null;case 3:a.c=null,a.l.clear(),a.h=null,a.v=[],a.i=null,a.g=function(){},a.u=null,z(b)}})}q.configure=function(a){this.i=a};function wh(a,b,c,d){a.ja=!0;a.v=[];a.A=c;return xh(a,b,!!d)}
function yh(a,b,c,d){a.v=c;a.A=0<c.length;return xh(a,b,!!d)}function zh(a,b,c,d,e,f){var g=new Map;e={audioCapabilities:e,videoCapabilities:f,distinctiveIdentifier:"optional",persistentState:"required",sessionTypes:["persistent-license"],label:b};e.drmInfos=[{keySystem:b,licenseServerUri:c,distinctiveIdentifierRequired:!1,persistentStateRequired:!0,audioRobustness:"",videoRobustness:"",serverCertificate:d,initData:null,keyIds:null}];g.set(b,e);return Ah(a,g,[],!1)}
function xh(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,x,w,y;return J(function(D){if(1==D.a){if(d=Bh(a))for(e=t(b),f=e.next();!f.done;f=e.next())g=f.value,g.video&&(g.video.drmInfos=[d]),g.audio&&(g.audio.drmInfos=[d]);h=b.some(function(C){return C.video&&C.video.drmInfos.length||C.audio&&C.audio.drmInfos.length?!0:!1});h||(k=oh(a.i.servers),Ch(b,k));l=t(b);for(f=l.next();!f.done;f=l.next())for(m=f.value,n=Dh(m),p=t(n),r=p.next();!r.done;r=p.next())u=r.value,Eh(u,oh(a.i.servers),oh(a.i.advanced||{}));return c?
v(D,gg(b,a.A),2):(x=Fh(a,b),D.m(2))}w=h||Object.keys(a.i.servers).length;if(!w)return a.M=!0,D["return"](Promise.resolve());y=Ah(a,x,b,c);return D["return"](h?y:y["catch"](function(){}))})}
q.Hb=function(a){var b=this,c,d;return J(function(e){if(1==e.a){if(!b.h)return b.b.qa(a,"encrypted",function(){b.g(new L(2,6,6010))}),e["return"]();b.a=a;b.b.qa(b.a,"play",function(){for(var f=t(b.C),g=f.next();!g.done;g=f.next())Ih(b,g.value);b.H=!0;b.C=[]});"webkitCurrentPlaybackTargetIsWireless"in b.a&&b.b.s(b.a,"webkitcurrentplaybacktargetiswirelesschanged",function(){return vh(b)});c=b.a.setMediaKeys(b.h);c=c["catch"](function(f){return Promise.reject(new L(2,6,6003,f.message))});return v(e,
c,2)}cf(b.F);Jh(b);b.c.initData.length||b.v.length||(d=function(f){return Kh(b,f.initDataType,pb(f.initData))},b.b.s(b.a,"encrypted",d));z(e)})};function Lh(a){var b;return J(function(c){if(1==c.a){if(!(a.h&&a.c&&a.c.serverCertificate&&a.c.serverCertificate.length))return c.m(0);A(c,3);return v(c,a.h.setServerCertificate(a.c.serverCertificate),5)}if(3!=c.a)return wa(c,0);b=E(c);throw new L(2,6,6004,b.message);})}
function Mh(a,b){var c,d,e;return J(function(f){if(1==f.a)return v(f,Nh(a,b),2);c=f.b;if(!c)return f["return"]();d=[];if(e=a.f.get(c))e.Ga=new Ge,d.push(e.Ga);d.push(c.remove());return v(f,Promise.all(d),0)})}function Jh(a){for(var b=(a.c?a.c.initData:[])||[],c=t(b),d=c.next();!d.done;d=c.next())d=d.value,Kh(a,d.initDataType,d.initData);c=t(a.v);for(d=c.next();!d.done;d=c.next())Nh(a,d.value);b.length||a.v.length||a.j.resolve();return a.j}
function Kh(a,b,c){var d=a.f.values();d=t(d);for(var e=d.next();!e.done;e=d.next())if(nb(c,e.value.initData)&&!dc("Tizen 2"))return;Oh(a,b,c)}function Ph(a){return a?a.keySystem:""}function Qh(a){return a?!!a.match(/^com\.(microsoft|chromecast)\.playready/):!1}function Rh(a,b){if(navigator.userAgent.match(/Edge\//))return!0;b=b.toLowerCase();if(cc()&&b.includes('codecs="ac-3"')){var c=b.replace("ac-3","ec-3");return a.l.has(b)||a.l.has(c)}return a.l.has(b)}
function Sh(a){a=a.f.keys();a=fb(a,function(b){return b.sessionId});return Array.from(a)}q.Mb=function(){var a=Infinity,b=this.f.keys();b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,isNaN(c.expiration)||(a=Math.min(a,c.expiration));return a};q.tc=function(){return ph(this.T)};
function Fh(a,b){for(var c=new Set,d=t(b),e=d.next();!e.done;e=d.next()){var f=t(Dh(e.value));for(e=f.next();!e.done;e=f.next())c.add(e.value)}d=t(c);for(e=d.next();!e.done;e=d.next())Eh(e.value,oh(a.i.servers),oh(a.i.advanced||{}));f=a.A?"required":"optional";var g=a.A?["persistent-license"]:["temporary"];d=new Map;c=t(c);for(e=c.next();!e.done;e=c.next())e=e.value,d.set(e.keySystem,{initDataTypes:["cenc"],audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:f,
sessionTypes:g,label:e.keySystem,drmInfos:[]});c=t(b);for(e=c.next();!e.done;e=c.next())for(e=e.value,f=t([e.audio,e.video]),e=f.next();!e.done;e=f.next())if(g=e.value){var h=Th(g),k=null;"ac-3"==g.codecs.toLowerCase()&&cc()&&(k=Th(g,"ec-3"));var l=t(g.drmInfos);for(e=l.next();!e.done;e=l.next()){var m=e.value;e=d.get(m.keySystem);e.drmInfos.push(m);m.initData&&m.initData.length&&(e.initDataTypes=ia(new Set(m.initData.map(function(p){return p.initDataType}))).concat());m.distinctiveIdentifierRequired&&
(e.distinctiveIdentifier="required");m.persistentStateRequired&&(e.persistentState="required");m.sessionType&&(e.sessionTypes=[m.sessionType]);m="audio"==g.type?m.audioRobustness:m.videoRobustness;var n={robustness:m||"",contentType:h};"audio"==g.type?e.audioCapabilities.push(n):e.videoCapabilities.push(n);k&&(m={robustness:m||"",contentType:k},"audio"==g.type?e.audioCapabilities.push(m):e.videoCapabilities.push(m))}}return d}
function Th(a,b){var c=Pe(a.mimeType,b||a.codecs);return Le(c)?Ne(a.type,c):c}
function Ah(a,b,c,d){var e,f,g,h,k,l,m,n,p,r,u,x,w;return J(function(y){switch(y.a){case 1:e=new Map;if(d){a:{for(var D=t(c),C=D.next();!C.done;C=D.next()){var B=t(Dh(C.value));for(C=B.next();!C.done;C=B.next()){var F=C.value;e.has(F.keySystem)||e.set(F.keySystem,[]);e.get(F.keySystem).push(F)}}if(1==e.size&&e.has(""))throw new L(2,6,6E3);D=t([!0,!1]);for(B=D.next();!B.done;B=D.next())for(B=B.value,F=t(c),C=F.next();!C.done;C=F.next()){var G=t(C.value.decodingInfos);for(C=G.next();!C.done;C=G.next()){var H=
C.value;if(H.supported&&H.keySystemAccess){C=e.get(H.keySystemAccess.keySystem);var I=t(C);for(C=I.next();!C.done;C=I.next())if(!!C.value.licenseServerUri==B){f=H.keySystemAccess;break a}}}}f=null}y.m(2);break}return v(y,Uh(a,b),3);case 3:f=y.b;case 2:g=f;if(!g)throw new L(2,6,6001);cf(a.F);A(y,4);a.l.clear();h=g.getConfiguration();k=h.audioCapabilities||[];l=h.videoCapabilities||[];m=t(k);for(n=m.next();!n.done;n=m.next())p=n.value,a.l.add(p.contentType.toLowerCase());r=t(l);for(n=r.next();!n.done;n=
r.next())u=n.value,a.l.add(u.contentType.toLowerCase());if(d){B=g.keySystem;D=e.get(g.keySystem);F=[];C=[];G=[];H=new Set;Vh(D,F,C,G,H);I=a.A?"persistent-license":"temporary";B={keySystem:B,licenseServerUri:F[0],distinctiveIdentifierRequired:D[0].distinctiveIdentifierRequired,persistentStateRequired:D[0].persistentStateRequired,sessionType:D[0].sessionType||I,audioRobustness:D[0].audioRobustness||"",videoRobustness:D[0].videoRobustness||"",serverCertificate:C[0],initData:G,keyIds:H};D=t(D);for(F=
D.next();!F.done;F=D.next())F=F.value,F.distinctiveIdentifierRequired&&(B.distinctiveIdentifierRequired=F.distinctiveIdentifierRequired),F.persistentStateRequired&&(B.persistentStateRequired=F.persistentStateRequired);D=B}else D=g.keySystem,B=b.get(g.keySystem),F=[],C=[],G=[],H=new Set,Vh(B.drmInfos,F,C,G,H),D={keySystem:D,licenseServerUri:F[0],distinctiveIdentifierRequired:"required"==B.distinctiveIdentifier,persistentStateRequired:"required"==B.persistentState,sessionType:B.sessionTypes[0]||"temporary",
audioRobustness:(B.audioCapabilities?B.audioCapabilities[0].robustness:"")||"",videoRobustness:(B.videoCapabilities?B.videoCapabilities[0].robustness:"")||"",serverCertificate:C[0],initData:G,keyIds:H};a.c=D;if(!a.c.licenseServerUri)throw new L(2,6,6012,a.c.keySystem);return v(y,g.createMediaKeys(),6);case 6:return x=y.b,cf(a.F),a.h=x,a.M=!0,v(y,Lh(a),7);case 7:cf(a.F);wa(y,0);break;case 4:w=E(y);cf(a.F,w);a.c=null;a.l.clear();if(w instanceof L)throw w;throw new L(2,6,6002,w.message);}})}
function Uh(a,b){var c,d,e,f,g,h,k,l,m,n,p,r;return J(function(u){switch(u.a){case 1:if(1==b.size&&b.has(""))throw new L(2,6,6E3);d=t(b.values());for(e=d.next();!e.done;e=d.next())f=e.value,0==f.audioCapabilities.length&&delete f.audioCapabilities,0==f.videoCapabilities.length&&delete f.videoCapabilities;g=t([!0,!1]);h=g.next();case 2:if(h.done){u.m(4);break}k=h.value;l=t(b.keys());m=l.next();case 5:if(m.done){h=g.next();u.m(2);break}n=m.value;p=b.get(n);r=p.drmInfos.some(function(x){return!!x.licenseServerUri});
if(r!=k){u.m(6);break}A(u,8);return v(u,navigator.requestMediaKeySystemAccess(n,[p]),10);case 10:return c=u.b,u["return"](c);case 8:E(u);case 9:cf(a.F);case 6:m=l.next();u.m(5);break;case 4:return u["return"](c)}})}
function Bh(a){a=oh(a.i.clearKeys);if(0==a.size)return null;var b=[],c=[];a.forEach(function(e,f){var g=nc(f),h=nc(e);g={kty:"oct",kid:lc(g,!1),k:lc(h,!1)};b.push(g);c.push(g.kid)});a=JSON.stringify({keys:b});var d=JSON.stringify({kids:c});d=[{initData:pb(Ab(d)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(a),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
sessionType:"",initData:d,keyIds:new Set(c)}}
function Nh(a,b){var c,d,e,f,g;return J(function(h){switch(h.a){case 1:try{c=a.h.createSession("persistent-license")}catch(k){return d=new L(2,6,6005,k.message),a.g(d),h["return"](Promise.reject(d))}a.b.s(c,"message",function(k){a.a&&a.i.delayLicenseRequestUntilPlayed&&a.a.paused&&!a.H?a.C.push(k):Ih(a,k)});a.b.s(c,"keystatuseschange",function(k){return Wh(a,k)});e={initData:null,loaded:!1,sd:Infinity,Ga:null,type:"persistent-license"};a.f.set(c,e);A(h,2);return v(h,c.load(b),4);case 4:f=h.b;cf(a.F);
if(!f)return a.f["delete"](c),a.g(new L(2,6,6013)),h["return"](Promise.resolve());e.loaded=!0;Xh(a)&&a.j.resolve();return h["return"](c);case 2:g=E(h),cf(a.F,g),a.f["delete"](c),a.g(new L(2,6,6005,g.message));case 3:return h["return"](Promise.resolve())}})}
function Oh(a,b,c){var d=a.c.sessionType;try{var e=a.h.createSession(d)}catch(f){a.g(new L(2,6,6005,f.message));return}a.b.s(e,"message",function(f){a.a&&a.i.delayLicenseRequestUntilPlayed&&a.a.paused&&!a.H?a.C.push(f):Ih(a,f)});a.b.s(e,"keystatuseschange",function(f){return Wh(a,f)});a.f.set(e,{initData:c,loaded:!1,sd:Infinity,Ga:null,type:d});try{c=a.i.initDataTransform(c,b,a.c)}catch(f){b=f;f instanceof L||(b=new L(2,6,6016,f));a.g(b);return}a.i.logLicenseExchange&&lc(c);e.generateRequest(b,c)["catch"](function(f){if(!a.F.a){a.f["delete"](e);
var g=f.errorCode;if(g&&g.systemCode){var h=g.systemCode;0>h&&(h+=Math.pow(2,32));h="0x"+h.toString(16)}a.g(new L(2,6,6006,f.message,f,h))}})}function Yh(a,b,c){"skd"==b&&(b=c.serverCertificate,c=mh(a),a=nh(a,c,b));return a}
function Ih(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,x;J(function(w){switch(w.a){case 1:return c=b.target,a.i.logLicenseExchange&&lc(b.message),d=a.f.get(c),e=a.c.licenseServerUri,f=a.i.advanced[a.c.keySystem],"individualization-request"==b.messageType&&f&&f.individualizationServer&&(e=f.individualizationServer),g=eh([e],a.i.retryParameters),g.body=b.message,g.method="POST",g.licenseRequestType=b.messageType,g.sessionId=c.sessionId,Qh(a.c.keySystem)&&Zh(g),h=Date.now(),A(w,2),l=a.u.xb.request(2,g),v(w,
l.promise,4);case 4:k=w.b;wa(w,3);break;case 2:return m=E(w),n=new L(2,6,6007,m),a.g(n),d&&d.Ga&&d.Ga.reject(n),w["return"]();case 3:if(a.F.a)return w["return"]();a.D+=(Date.now()-h)/1E3;a.i.logLicenseExchange&&lc(k.data);A(w,5);return v(w,c.update(k.data),7);case 7:wa(w,6);break;case 5:return p=E(w),r=new L(2,6,6008,p.message),a.g(r),d&&d.Ga&&d.Ga.reject(r),w["return"]();case 6:u=new O("drmsessionupdate"),a.u.onEvent(u),d&&(d.Ga&&d.Ga.resolve(),x=new M(function(){d.loaded=!0;Xh(a)&&a.j.resolve()}),
x.N($h)),z(w)}})}function Zh(a){var b=xb(a.body,!0,!0);if(b.includes("PlayReadyKeyMessage")){b=(new DOMParser).parseFromString(b,"application/xml");for(var c=t(b.getElementsByTagName("HttpHeader")),d=c.next();!d.done;d=c.next())d=d.value,a.headers[d.getElementsByTagName("name")[0].textContent]=d.getElementsByTagName("value")[0].textContent;a.body=mc(b.getElementsByTagName("Challenge")[0].textContent)}else a.headers["Content-Type"]="text/xml; charset=utf-8"}
function Wh(a,b){var c=b.target,d=a.f.get(c),e=!1;c.keyStatuses.forEach(function(g,h){if("string"==typeof h){var k=h;h=g;g=k}if(Qh(a.c.keySystem)&&16==h.byteLength&&navigator.userAgent.match(/Edge?\//)){k=tb(h);var l=k.getUint32(0,!0),m=k.getUint16(4,!0),n=k.getUint16(6,!0);k.setUint32(0,l,!1);k.setUint16(4,m,!1);k.setUint16(6,n,!1)}"status-pending"!=g&&(d.loaded=!0);"expired"==g&&(e=!0);k=oc(h);a.ka.set(k,g)});var f=c.expiration-Date.now();(0>f||e&&1E3>f)&&d&&!d.Ga&&(a.f["delete"](c),c.close()["catch"](function(){}));
Xh(a)&&(a.j.resolve(),a.J.N(ai))}function sh(a){var b=a.ka,c=a.T;c.clear();b.forEach(function(d,e){return c.set(e,d)});b=Array.from(c.values());b.length&&b.every(function(d){return"expired"==d})&&a.g(new L(2,6,6014));a.u.zc(ph(c))}
function bi(){var a,b,c,d,e,f,g,h;return J(function(k){return 1==k.a?(a="org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" "),b=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],c={initDataTypes:["cenc"],videoCapabilities:b},d={videoCapabilities:b,persistentState:"required",sessionTypes:["persistent-license"]},e=[d,
c],f=new Map,g=function(l){var m,n,p;return J(function(r){switch(r.a){case 1:return A(r,2),v(r,navigator.requestMediaKeySystemAccess(l,e),4);case 4:return m=r.b,p=(n=m.getConfiguration().sessionTypes)?n.includes("persistent-license"):!1,dc("Tizen 3")&&(p=!1),f.set(l,{persistentState:p}),v(r,m.createMediaKeys(),5);case 5:wa(r,0);break;case 2:E(r),f.set(l,null),z(r)}})},h=a.map(function(l){return g(l)}),v(k,Promise.all(h),2)):k["return"](ph(f))})}
function ci(a){var b;return J(function(c){if(1==c.a)return b=new Promise(function(d,e){(new M(e)).N(di)}),A(c,2),v(c,Promise.race([Promise.all([a.close(),a.closed]),b]),4);if(2!=c.a)return wa(c,0);E(c);z(c)})}
function vh(a){var b;return J(function(c){b=Array.from(a.f.entries());a.f.clear();return v(c,Promise.all(b.map(function(d){d=t(d);var e=d.next().value,f=d.next().value;return J(function(g){if(1==g.a)return A(g,2),a.ja||a.v.includes(e.sessionId)||"persistent-license"!==f.type?v(g,ci(e),5):v(g,e.remove(),5);if(2!=g.a)return wa(g,0);E(g);z(g)})})),0)})}
function fg(a,b){var c=b.audio,d=b.video;if(c&&c.encrypted&&(c=Th(c),!Rh(a,c))||d&&d.encrypted&&(d=Th(d),!Rh(a,d)))return!1;var e=Ph(a.c);d=Dh(b);return 0==d.length||d.some(function(f){return f.keySystem==e})}
function ei(a,b){if(!a.length)return b;if(!b.length)return a;for(var c=[],d=t(a),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=t(b),g=f.next();!g.done;g=f.next())if(g=g.value,e.keySystem==g.keySystem){f=[];f=f.concat(e.initData||[]);f=f.concat(g.initData||[]);var h=e.keyIds&&g.keyIds?new Set(ia(e.keyIds).concat(ia(g.keyIds))):e.keyIds||g.keyIds;c.push({keySystem:e.keySystem,licenseServerUri:e.licenseServerUri||g.licenseServerUri,distinctiveIdentifierRequired:e.distinctiveIdentifierRequired||
g.distinctiveIdentifierRequired,persistentStateRequired:e.persistentStateRequired||g.persistentStateRequired,videoRobustness:e.videoRobustness||g.videoRobustness,audioRobustness:e.audioRobustness||g.audioRobustness,serverCertificate:e.serverCertificate||g.serverCertificate,initData:f,keyIds:h});break}}return c}function Dh(a){return(a.video?a.video.drmInfos:[]).concat(a.audio?a.audio.drmInfos:[])}
function th(a){a.f.forEach(function(b,c){var d=b.sd,e=c.expiration;isNaN(e)&&(e=Infinity);e!=d&&(a.u.onExpirationUpdated(c.sessionId,e),b.sd=e)})}function Xh(a){a=a.f.values();return gb(a,function(b){return b.loaded})}
function Ch(a,b){var c=[];b.forEach(function(f,g){c.push({keySystem:g,licenseServerUri:f,distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:new Set})});for(var d=t(a),e=d.next();!e.done;e=d.next())e=e.value,e.video&&(e.video.drmInfos=c),e.audio&&(e.audio.drmInfos=c)}
function Vh(a,b,c,d,e){var f={};a=t(a);for(var g=a.next();!g.done;f={ta:f.ta},g=a.next()){f.ta=g.value;b.includes(f.ta.licenseServerUri)||b.push(f.ta.licenseServerUri);f.ta.serverCertificate&&(c.some(function(l){return function(m){return nb(m,l.ta.serverCertificate)}}(f))||c.push(f.ta.serverCertificate));if(f.ta.initData){g={};for(var h=t(f.ta.initData),k=h.next();!k.done;g={ac:g.ac},k=h.next())g.ac=k.value,d.some(function(l){return function(m){var n=l.ac;return m.keyId&&m.keyId==n.keyId?!0:m.initDataType==
n.initDataType&&nb(m.initData,n.initData)}}(g))||d.push(g.ac)}if(f.ta.keyIds)for(g=t(f.ta.keyIds),h=g.next();!h.done;h=g.next())e.add(h.value)}}
function Eh(a,b,c){if(a.keySystem&&("org.w3.clearkey"!=a.keySystem||!a.licenseServerUri)){b.size&&(b=b.get(a.keySystem)||"",a.licenseServerUri=b);a.keyIds||(a.keyIds=new Set);if(c=c.get(a.keySystem))a.distinctiveIdentifierRequired||(a.distinctiveIdentifierRequired=c.distinctiveIdentifierRequired),a.persistentStateRequired||(a.persistentStateRequired=c.persistentStateRequired),a.videoRobustness||(a.videoRobustness=c.videoRobustness),a.audioRobustness||(a.audioRobustness=c.audioRobustness),a.serverCertificate||
(a.serverCertificate=c.serverCertificate),c.sessionType&&(a.sessionType=c.sessionType);window.cast&&window.cast.__platform__&&"com.microsoft.playready"==a.keySystem&&(a.keySystem="com.chromecast.playready")}}var di=1,$h=5,ai=.5,fi=new ub(function(){return rb(new Uint8Array([0]))});function gi(){}function hi(a,b,c,d){var e,f,g,h;return J(function(k){if(1==k.a){if(d&&(e=ii[d.toLowerCase()]))return k["return"](e);if(f=ji(a))if(g=ki[f])return k["return"](g);return d?k.m(2):v(k,li(a,b,c),3)}if(2!=k.a&&(d=k.b)&&(h=ii[d]))return k["return"](h);throw new L(2,4,4E3,a);})}
function li(a,b,c){var d,e,f;return J(function(g){if(1==g.a)return d=eh([a],c),d.method="HEAD",v(g,b.request(0,d).promise,2);e=g.b;f=e.headers["content-type"];return g["return"](f?f.toLowerCase().split(";").shift():"")})}function ji(a){a=(new me(a)).sa.split("/").pop().split(".");return 1==a.length?"":a.pop().toLowerCase()}K("shaka.media.ManifestParser",gi);gi.unregisterParserByMime=function(a){delete ii[a]};gi.registerParserByMime=function(a,b){ii[a]=b};
gi.registerParserByExtension=function(a,b){ki[a]=b};var ii={},ki={};function mi(a,b,c){this.ga=a;this.da=b;this.Y=c}mi.prototype.Pb=function(){return this.da};mi.prototype.Lb=function(){return this.Y};function ni(a,b){return a&&b?a.Pb()==b.Pb()&&a.Lb()==b.Lb()&&xc(a.ga(),b.ga()):a==b}K("shaka.media.InitSegmentReference",mi);mi.prototype.getEndByte=mi.prototype.Lb;mi.prototype.getStartByte=mi.prototype.Pb;
function oi(a,b,c,d,e,f,g,h,k,l){l=void 0===l?[]:l;this.startTime=a;this.endTime=b;this.c=c;this.da=d;this.Y=e;this.b=f;this.timestampOffset=g;this.appendWindowStart=h;this.appendWindowEnd=k;this.a=l}q=oi.prototype;q.ga=function(){return this.c()};q.Xe=function(){return this.startTime};q.Ke=function(){return this.endTime};q.Pb=function(){return this.da};q.Lb=function(){return this.Y};K("shaka.media.SegmentReference",oi);oi.prototype.getEndByte=oi.prototype.Lb;oi.prototype.getStartByte=oi.prototype.Pb;
oi.prototype.getEndTime=oi.prototype.Ke;oi.prototype.getStartTime=oi.prototype.Xe;oi.prototype.getUris=oi.prototype.ga;function R(a,b,c){this.f=a;this.Cc=b;this.h=this.g=Infinity;this.a=1;this.b=this.c=null;this.j=0;this.l=!0;this.v=0;this.A=void 0===c?!0:c;this.C=0}q=R.prototype;q.getDuration=function(){return this.g};q.Qe=function(){return this.a};q.Fa=function(a){this.g=a};q.We=function(){return this.f};q.le=function(a){this.j=a};q.Xb=function(a){this.l=a};q.Hd=function(a){this.h=a};q.Cf=function(a){this.Cc=a};q.Je=function(){return this.Cc};
q.yb=function(a){if(0!=a.length){var b=a[a.length-1].endTime;this.qd(a[0].startTime);this.a=a.reduce(function(c,d){return Math.max(c,d.endTime-d.startTime)},this.a);this.b=Math.max(this.b,b);null!=this.f&&this.A&&(this.f=(Date.now()+this.j)/1E3-this.b-this.a)}};q.qd=function(a){this.c=null==this.c?a:Math.min(this.c,a)};q.pd=function(a){this.a=Math.max(this.a,a)};q.offset=function(a){null!=this.c&&(this.c+=a);null!=this.b&&(this.b+=a)};q.U=function(){return Infinity==this.g&&!this.l};
q.eb=function(){return Infinity!=this.g&&!this.l};q.Ua=function(){return Math.max(this.v,this.Ta()-this.h)};q.me=function(a){this.v=a};q.Ta=function(){return this.U()||this.eb()?Math.min(Math.max(0,(Date.now()+this.j)/1E3-this.a-this.f)+this.C,this.g):this.g};q.Ob=function(a){var b=Math.max(this.c,this.v);return Infinity==this.h?Math.ceil(1E3*b)/1E3:Math.max(b,Math.min(this.Ta()-this.h+a,this.Ma()))};q.tb=function(){return this.Ob(0)};
q.Ma=function(){return Math.max(0,this.Ta()-(this.U()||this.eb()?this.Cc:0))};q.pe=function(){return null==this.f||null!=this.b&&this.A?!1:!0};q.ke=function(a){this.C=a};K("shaka.media.PresentationTimeline",R);R.prototype.setAvailabilityTimeOffset=R.prototype.ke;R.prototype.usingPresentationStartTime=R.prototype.pe;R.prototype.getSeekRangeEnd=R.prototype.Ma;R.prototype.getSeekRangeStart=R.prototype.tb;R.prototype.getSafeSeekRangeStart=R.prototype.Ob;R.prototype.getSegmentAvailabilityEnd=R.prototype.Ta;
R.prototype.setUserSeekStart=R.prototype.me;R.prototype.getSegmentAvailabilityStart=R.prototype.Ua;R.prototype.isInProgress=R.prototype.eb;R.prototype.isLive=R.prototype.U;R.prototype.offset=R.prototype.offset;R.prototype.notifyMaxSegmentDuration=R.prototype.pd;R.prototype.notifyMinSegmentStartTime=R.prototype.qd;R.prototype.notifySegments=R.prototype.yb;R.prototype.getDelay=R.prototype.Je;R.prototype.setDelay=R.prototype.Cf;R.prototype.setSegmentAvailabilityDuration=R.prototype.Hd;
R.prototype.setStatic=R.prototype.Xb;R.prototype.setClockOffset=R.prototype.le;R.prototype.getPresentationStartTime=R.prototype.We;R.prototype.setDuration=R.prototype.Fa;R.prototype.getMaxSegmentDuration=R.prototype.Qe;R.prototype.getDuration=R.prototype.getDuration;function pi(a,b){this.g=a;this.h=qi(a);this.a=a.a.currentTime;this.f=Date.now()/1E3;this.b=!1;this.j=b;this.c=function(){}}pi.prototype.release=function(){this.g=null;this.c=function(){}};function ri(a,b){a.c=b}function si(a){this.a=a}function qi(a){if(a.a.paused||0==a.a.playbackRate||0==a.a.buffered.length)var b=!1;else a:{b=a.a.currentTime;a=t(je(a.a.buffered));for(var c=a.next();!c.done;c=a.next())if(c=c.value,!(b<c.start-.1||b>c.end-.5)){b=!0;break a}b=!1}return b};function ti(a,b,c,d,e){var f=this;this.a=a;this.A=b;this.i=c;this.v=e;this.b=new ff;this.j=!1;this.l=a.readyState;this.f=!1;this.c=d;this.h=!1;this.b.s(a,"waiting",function(){return ui(f)});this.g=(new M(function(){ui(f)})).xa(.25)}ti.prototype.release=function(){this.b&&(this.b.release(),this.b=null);null!=this.g&&(this.g.stop(),this.g=null);this.c&&(this.c.release(),this.c=null);this.a=this.A=this.v=null};ti.prototype.td=function(){this.h=!0;ui(this)};
function ui(a){if(0!=a.a.readyState){if(a.a.seeking){if(!a.j)return}else a.j=!1;if(!a.a.paused||0==a.a.currentTime){a.a.readyState!=a.l&&(a.f=!1,a.l=a.a.readyState);var b;if(!(b=!a.c)){b=a.c;var c=b.g,d=qi(c),e=c.a.currentTime,f=Date.now()/1E3;if(b.a!=e||b.h!=d)b.f=f,b.a=e,b.h=d,b.b=!1;e=f-b.f;if(d=e>=b.j&&d&&!b.b)b.c(b.a,e),b.b=!0,b.a=c.a.currentTime;b=!d}if(b){var g=a.i.smallGapLimit;e=a.a.currentTime;b=a.a.buffered;c=ke(b,e,a.i.gapDetectionThreshold);if(!(null==c||0==c&&!a.h||(d=b.start(c),d>=
a.A.Ma()))){f=d-e;g=f<=g;var h=!1;.001>f||(g||a.f||(a.f=!0,e=new O("largegap",{currentTime:e,gapSize:f}),e.cancelable=!0,a.v(e),a.i.jumpLargeGaps&&!e.defaultPrevented&&(h=!0)),!g&&!h)||(0!=c&&b.end(c-1),a.a.currentTime=d)}}}}};function vi(a,b,c,d){b==HTMLMediaElement.HAVE_NOTHING||a.readyState>=b?d():(b=wi.value().get(b),c.qa(a,b,d))}var wi=new ub(function(){return new Map([[HTMLMediaElement.HAVE_METADATA,"loadedmetadata"],[HTMLMediaElement.HAVE_CURRENT_DATA,"loadeddata"],[HTMLMediaElement.HAVE_FUTURE_DATA,"canplay"],[HTMLMediaElement.HAVE_ENOUGH_DATA,"canplaythrough"]])});function xi(a,b,c){var d=this;this.a=a;this.g=b;this.f=c;this.h=!1;this.b=new ff;this.c=new yi(a);vi(this.a,HTMLMediaElement.HAVE_METADATA,this.b,function(){zi(d,d.f)})}xi.prototype.release=function(){this.b&&(this.b.release(),this.b=null);null!=this.c&&(this.c.release(),this.c=null);this.g=function(){};this.a=null};function Ai(a){return a.h?a.a.currentTime:a.f}function Bi(a,b){0<a.a.readyState?Ci(a.c,b):vi(a.a,HTMLMediaElement.HAVE_METADATA,a.b,function(){zi(a,a.f)})}
function zi(a,b){.001>Math.abs(a.a.currentTime-b)?Di(a):(a.b.qa(a.a,"seeking",function(){Di(a)}),Ci(a.c,0==a.a.currentTime?b:a.a.currentTime))}function Di(a){a.h=!0;a.b.s(a.a,"seeking",function(){return a.g()})}function yi(a){var b=this;this.b=a;this.h=10;this.g=this.f=this.c=0;this.a=new M(function(){0>=b.c?b.a.stop():b.b.currentTime!=b.f?b.a.stop():(b.b.currentTime=b.g,b.c--)})}yi.prototype.release=function(){this.a&&(this.a.stop(),this.a=null);this.b=null};
function Ci(a,b){a.f=a.b.currentTime;a.g=b;a.c=a.h;a.b.currentTime=b;a.a.xa(.1)};function Ei(a){function b(){null==c.c?c.f=!0:(c.b.qa(c.a,"seeking",function(){c.f=!0}),c.a.currentTime=Math.max(0,c.a.currentTime+c.c))}var c=this;this.a=a;this.f=!1;this.c=null;this.b=new ff;vi(this.a,HTMLMediaElement.HAVE_CURRENT_DATA,this.b,function(){b()})}Ei.prototype.release=function(){this.b&&(this.b.release(),this.b=null);this.a=null};Ei.prototype.l=function(a){this.c=this.f?this.c:a};Ei.prototype.g=function(){return(this.f?this.a.currentTime:this.c)||0};Ei.prototype.v=function(){};
function Fi(a,b,c,d,e,f){var g=this;this.c=a;this.a=b.presentationTimeline;this.C=b.minBufferTime||0;this.i=c;this.A=e;this.j=null;this.f=new ti(a,b.presentationTimeline,c,Gi(a,c),f);this.b=new xi(a,function(){a:{var h=g.f;h.j=!0;h.h=!1;h.f=!1;var k=Ai(g.b);h=Hi(g,k);if(.001<Math.abs(h-k)&&(k=Date.now()/1E3,!g.j||g.j<k-1)){g.j=k;Bi(g.b,h);h=void 0;break a}g.A();h=void 0}return h},Ii(this,d));this.h=(new M(function(){if(0!=g.c.readyState&&!g.c.paused){var h=Ai(g.b),k=g.a.tb(),l=g.a.Ma();3>l-k&&(k=
l-3);h<k&&(h=Hi(g,h),g.c.currentTime=h)}})).xa(.25)}Fi.prototype.release=function(){this.b&&(this.b.release(),this.b=null);this.f&&(this.f.release(),this.f=null);this.h&&(this.h.stop(),this.h=null);this.c=this.b=this.a=this.i=null;this.A=function(){}};Fi.prototype.l=function(a){Bi(this.b,a)};Fi.prototype.g=function(){var a=Ai(this.b);return 0<this.c.readyState&&!this.c.paused?Ji(this,a):a};
function Ii(a,b){null==b?b=Infinity>a.a.getDuration()?a.a.tb():a.a.Ma():0>b&&(b=a.a.Ma()+b);return Ki(a,Ji(a,b))}Fi.prototype.v=function(){this.f.td()};function Ki(a,b){var c=a.a.getDuration();return b>=c?c-a.i.durationBackoff:b}function Hi(a,b){var c=Math.max(a.C,a.i.rebufferingGoal),d=a.i.safeSeekOffset,e=a.a.tb(),f=a.a.Ma(),g=a.a.getDuration();3>f-e&&(e=f-3);var h=a.a.Ob(c),k=a.a.Ob(d);c=a.a.Ob(c+d);return b>=g?Ki(a,b):b>f?f:b<e?he(a.c.buffered,k)?k:c:b>=h||he(a.c.buffered,b)?b:c}
function Ji(a,b){var c=a.a.tb();if(b<c)return c;c=a.a.Ma();return b>c?c:b}function Gi(a,b){if(!b.stallEnabled)return null;var c=b.stallSkip,d=new pi(new si(a),b.stallThreshold);ri(d,function(){c?a.currentTime+=c:(a.pause(),a.play())});return d};function S(a){this.a=a;this.b=null;this.c=0;this.f=!1}q=S.prototype;q.destroy=function(){Hb("shaka.media.SegmentIndex","Please use release() instead of destroy().");this.release();return Promise.resolve()};q.release=function(){this.f||(this.a=[],this.b&&this.b.stop(),this.b=null)};q.ff=function(){this.f=!0};
q.find=function(a){for(var b=this.a.length-1,c=b;0<=c;--c){var d=this.a[c],e=c<b?this.a[c+1].startTime:d.endTime;if(a>=d.startTime&&a<e)return c+this.c}return this.a.length&&a<this.a[0].startTime?this.c:null};q.get=function(a){if(0==this.a.length)return null;a-=this.c;return 0>a||a>=this.a.length?null:this.a[a]};q.offset=function(a){if(!this.f)for(var b=t(this.a),c=b.next();!c.done;c=b.next())c=c.value,c.startTime+=a,c.endTime+=a,c.timestampOffset+=a};
q.xc=function(a){!this.f&&a.length&&(this.a=this.a.filter(function(b){return b.startTime<a[0].startTime}),this.a.push.apply(this.a,ia(a)))};q.wb=function(a,b){a=a.filter(function(c){return c.endTime>b});this.xc(a);this.$a(b)};q.$a=function(a){if(!this.f){var b=this.a.length;this.a=this.a.filter(function(c){return c.endTime>a});this.c+=b-this.a.length}};
q.Sa=function(a,b,c){c=void 0===c?!1:c;if(!this.f){for(;this.a.length;)if(this.a[this.a.length-1].startTime>=b)this.a.pop();else break;for(;this.a.length;)if(this.a[0].endTime<=a)this.a.shift(),c||this.c++;else break;0!=this.a.length&&(a=this.a[this.a.length-1],this.a[this.a.length-1]=new oi(a.startTime,b,a.c,a.da,a.Y,a.b,a.timestampOffset,a.appendWindowStart,a.appendWindowEnd))}};
q.Fc=function(a,b){var c=this;this.f||(this.b&&this.b.stop(),this.b=new M(function(){var d=b();d?c.a.push.apply(c.a,ia(d)):(c.b.stop(),c.b=null)}),this.b.xa(a))};S.prototype[Symbol.iterator]=function(){return this.sb(0)};S.prototype.sb=function(a){var b=this.find(a);null==b?b=-1:b--;var c=this.get(b+1),d=-1;if(c&&0<c.a.length)for(var e=c.a.length-1;0<=e;--e){var f=c.a[e];if(a>=f.startTime&&a<f.endTime){b++;d=e-1;break}}return new Li(this,b,d)};
function Mi(a,b,c){return new S([new oi(a,a+b,function(){return c},0,null,null,a,a,a+b)])}K("shaka.media.SegmentIndex",S);S.forSingleSegment=Mi;S.prototype.getIteratorForTime=S.prototype.sb;S.prototype.updateEvery=S.prototype.Fc;S.prototype.fit=S.prototype.Sa;S.prototype.evict=S.prototype.$a;S.prototype.mergeAndEvict=S.prototype.wb;S.prototype.merge=S.prototype.xc;S.prototype.offset=S.prototype.offset;S.prototype.get=S.prototype.get;S.prototype.find=S.prototype.find;S.prototype.markImmutable=S.prototype.ff;
S.prototype.release=S.prototype.release;S.prototype.destroy=S.prototype.destroy;function Li(a,b,c){this.c=a;this.b=b;this.a=c}Li.prototype.seek=function(a){Hb("shaka.media.SegmentIterator","Please use SegmentIndex.getIteratorForTime instead of seek().");a=this.c.sb(a);this.b=a.b;this.a=a.a;return this.next().value};
Li.prototype.current=function(){var a=this.c.get(this.b);a&&0<a.a.length&&a.ga().length&&this.a>=a.a.length&&(this.b++,this.a=0,a=this.c.get(this.b));return a&&0<a.a.length?a.a[this.a]:a};Li.prototype.next=function(){var a=this.c.get(this.b);a&&0<a.a.length?(this.a++,a.ga().length&&this.a==a.a.length&&(this.b++,this.a=0)):(this.b++,this.a=0);a=this.current();return{value:a,done:!a}};K("shaka.media.SegmentIterator",Li);Li.prototype.next=Li.prototype.next;Li.prototype.current=Li.prototype.current;
Li.prototype.seek=Li.prototype.seek;function Ni(){S.call(this,[]);this.g=[]}ra(Ni,S);q=Ni.prototype;q.clone=function(){var a=new Ni;a.g=this.g.slice();return a};q.release=function(){for(var a=t(this.g),b=a.next();!b.done;b=a.next())b.value.release();this.g=[]};q.find=function(a){for(var b=0,c=t(this.g),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.find(a);if(null!=e)return e+b;b+=d.c+d.a.length}return null};
q.get=function(a){for(var b=0,c=t(this.g),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.get(a-b);if(e)return e;b+=d.c+d.a.length}return null};q.offset=function(){};q.xc=function(){};q.$a=function(){};q.wb=function(){};q.Sa=function(){};q.Fc=function(){};K("shaka.media.MetaSegmentIndex",Ni);Ni.prototype.updateEvery=Ni.prototype.Fc;Ni.prototype.fit=Ni.prototype.Sa;Ni.prototype.mergeAndEvict=Ni.prototype.wb;Ni.prototype.evict=Ni.prototype.$a;Ni.prototype.merge=Ni.prototype.xc;
Ni.prototype.offset=Ni.prototype.offset;Ni.prototype.get=Ni.prototype.get;Ni.prototype.find=Ni.prototype.find;Ni.prototype.release=Ni.prototype.release;function Oi(a){var b=this;this.a=a;this.f=!1;this.b=this.a.vc();this.c=new M(function(){b.a.Zd(.25*b.b)})}Oi.prototype.release=function(){this.c&&(this.c.stop(),this.c=null);this.a=null};Oi.prototype.set=function(a){this.b=a;Pi(this)};Oi.prototype.sc=function(){return this.a.sc()};function Pi(a){a.c.stop();var b=a.f?0:a.b;if(0<=b)try{a.a.vc()!=b&&a.a.Gd(b);return}catch(c){}a.c.xa(.25);0!=a.a.vc()&&a.a.Gd(0)};function Qi(a){var b=this;this.c=a;this.a=new Set;this.b=(new M(function(){Ri(b,!1)})).xa(.25)}Qi.prototype.release=function(){this.b.stop();for(var a=t(this.a),b=a.next();!b.done;b=a.next())b.value.release();this.a.clear()};
function Ri(a,b){for(var c=t(a.a),d=c.next();!d.done;d=c.next()){d=d.value;for(var e=a.c.currentTime,f=b,g=t(d.g.a),h=g.next();!h.done;h=g.next()){h=h.value;var k=d.f.get(h),l=e<h.startTime?Si:e>h.endTime?Ti:Ui;d.f.set(h,l);for(var m=t(d.h),n=m.next();!n.done;n=m.next())n=n.value,n.mb==k&&n.lb==l&&n.cb(h,f)}}};function Vi(a){var b=this;this.b=function(){};this.a=new Set;this.f=a;this.c=(new M(function(){for(var c=b.f(),d=t(b.a),e=d.next();!e.done;e=d.next())e=e.value,e.endTime<c.start&&b.a["delete"](e)})).xa(2)}Vi.prototype.release=function(){this.b=function(){};this.a.clear();this.c.stop()};function Wi(a,b){a.b=b};function Xi(a){var b=this;this.g=a;this.f=new Map;this.a=function(){};this.b=function(){};this.c=function(){};this.h=[{mb:null,lb:Ui,cb:function(c,d){return b.a(c,d)}},{mb:Si,lb:Ui,cb:function(c,d){return b.a(c,d)}},{mb:Ti,lb:Ui,cb:function(c,d){return b.a(c,d)}},{mb:Ui,lb:Si,cb:function(c,d){return b.b(c,d)}},{mb:Ui,lb:Ti,cb:function(c,d){return b.b(c,d)}},{mb:Si,lb:Ti,cb:function(c,d){return b.c(c,d)}},{mb:Ti,lb:Si,cb:function(c,d){return b.c(c,d)}}]}
Xi.prototype.release=function(){this.g=null;this.f.clear();this.a=function(){};this.b=function(){};this.c=function(){}};function Yi(a,b,c,d){a.a=b;a.b=c;a.c=d}var Si=1,Ui=2,Ti=3;function Zi(a,b,c,d,e){a=eh(a,d,e);if(0!=b||null!=c)a.headers.Range=c?"bytes="+b+"-"+c:"bytes="+b+"-";return a};function $i(a,b){var c=this;this.u=b;this.o=a;this.i=null;this.f=1;this.c=this.b=null;this.a=new Map;this.h=!1;this.j=null;this.g=!1;this.F=new bf(function(){return aj(c)})}$i.prototype.destroy=function(){return this.F.destroy()};function aj(a){var b,c,d,e;return J(function(f){if(1==f.a){b=[];c=t(a.a.values());for(d=c.next();!d.done;d=c.next())e=d.value,bj(e),b.push(cj(e));return v(f,Promise.all(b),2)}a.a.clear();a.u=null;a.o=null;a.i=null;z(f)})}
$i.prototype.configure=function(a){this.i=a;this.j=new Mg({maxAttempts:Math.max(a.retryParameters.maxAttempts,2),baseDelay:a.retryParameters.baseDelay,backoffFactor:a.retryParameters.backoffFactor,fuzzFactor:a.retryParameters.fuzzFactor,timeout:0,stallTimeout:0,connectionTimeout:0},!0)};$i.prototype.start=function(){var a=this;return J(function(b){if(1==b.a)return v(b,dj(a),2);cf(a.F);a.h=!0;z(b)})};
function ej(a,b){var c,d,e,f,g,h;J(function(k){switch(k.a){case 1:return c=Fe,A(k,2),v(k,Ef(a.u.L,c.$),4);case 4:wa(k,3);break;case 2:if(d=E(k),a.u)a.u.onError(d);case 3:e=Pe(b.mimeType,b.codecs);sf(a.u.L,e);f=a.u.L.h;if(g=f.isTextVisible()||a.i.alwaysStreamText)h=fj(b),a.a.set(c.$,h),gj(a,h,0);z(k)}})}function hj(a){var b=a.a.get(Ee);b&&(bj(b),cj(b)["catch"](function(){}),a.a["delete"](Ee));a.c=null}
function ij(a,b){var c=a.a.get("video");if(c){var d=c.stream;if(d)if(b){var e=d.trickModeVideo;e&&!c.ib&&(jj(a,e,!1,0,!1),c.ib=d)}else if(d=c.ib)c.ib=null,jj(a,d,!0,0,!1)}}function kj(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?0:d;a.b=b;a.h&&(b.video&&jj(a,b.video,c,d,!1),b.audio&&jj(a,b.audio,c,d,!1))}function lj(a,b){a.c=b;a.h&&jj(a,b,!0,0,!1)}
function jj(a,b,c,d,e){var f=a.a.get(b.type);f||b.type!=Ee?f&&(f.ib&&(b.trickModeVideo?(f.ib=b,b=b.trickModeVideo):f.ib=null),f.stream!=b||e)&&(b.type==Ee&&sf(a.u.L,Pe(b.mimeType,b.codecs)),f.stream=b,f.ia=null,c&&(f.Ib?f.Ic=!0:f.Na?(f.kb=!0,f.oc=d,f.Ic=!0):(bj(f),mj(a,f,!0,d)["catch"](function(g){if(a.u)a.u.onError(g)}))),nj(a,f)["catch"](function(g){if(a.u)a.u.onError(g)})):ej(a,b)}
function nj(a,b){var c,d;return J(function(e){if(1==e.a){if(!b.ra)return e["return"]();c=b.stream;d=b.ra;return c.segmentIndex?e.m(2):v(e,c.createSegmentIndex(),2)}if(b.ra!=d||b.stream!=c)return e["return"]();var f=a.u.uc();var g=xf(a.u.L,b.type),h=b.stream.segmentIndex.find(b.wa?b.wa.endTime:f),k=null==h?null:b.stream.segmentIndex.get(h);h=k?k.Y?k.Y-k.da:null:null;k&&!h&&(h=(k.endTime-k.startTime)*(b.stream.bandwidth||0)/8);h?((k=k.b)&&(h+=(k.Y?k.Y-k.da:null)||0),k=a.u.getBandwidthEstimate(),f=8*
h/k<(g||0)-f-Math.max(a.o.minBufferTime||0,a.i.rebufferingGoal)||b.ra.b.a>h?!0:!1):f=!1;f&&b.ra.abort();z(e)})}function oj(a,b){b.Ib||b.kb||(b.Na?(b.kb=!0,b.oc=0):null==vf(a.u.L,b.type)?null==b.Ha&&gj(a,b,0):(bj(b),mj(a,b,!1,0)["catch"](function(c){if(a.u)a.u.onError(c)})))}
function dj(a){var b,c,d,e,f,g,h,k,l,m;return J(function(n){if(1==n.a){b=Fe;if(!a.b)throw new L(2,5,5006);c=new Map;d=new Set;a.b.audio&&(c.set(b.Xa,a.b.audio),d.add(a.b.audio));a.b.video&&(c.set(b.Ja,a.b.video),d.add(a.b.video));a.c&&(c.set(b.$,a.c),d.add(a.c));e=a.u.L;f=a.i.forceTransmuxTS;return v(n,e.init(c,f),2)}cf(a.F);var p=a.o.presentationTimeline.getDuration();Infinity>p?a.u.L.Fa(p):a.u.L.Fa(Math.pow(2,32));g=t(c.keys());for(h=g.next();!h.done;h=g.next())k=h.value,l=c.get(k),a.a.has(k)||
(m=fj(l),a.a.set(k,m),gj(a,m,0));z(n)})}function fj(a){return{stream:a,type:a.type,ia:null,wa:null,wc:null,md:null,ld:null,kd:null,ib:null,endOfStream:!1,Na:!1,Ha:null,kb:!1,oc:0,Ic:!1,Ib:!1,wd:!1,Qb:!1,ra:null}}
$i.prototype.Sb=function(a){var b=this,c,d,e,f,g;return J(function(h){switch(h.a){case 1:cf(b.F);if(a.Na||null==a.Ha||a.Ib)return h["return"]();a.Ha=null;if(!a.kb){h.m(2);break}return v(h,mj(b,a,a.Ic,a.oc),3);case 3:return h["return"]();case 2:if(a.stream.segmentIndex){h.m(4);break}c=a.stream;return v(h,a.stream.createSegmentIndex(),5);case 5:if(c!=a.stream)return null==a.Ha&&gj(b,a,0),h["return"]();case 4:A(h,6);d=pj(b,a);null!=d&&(gj(b,a,d),a.Qb=!1);wa(h,7);break;case 6:return e=E(h),v(h,qj(b,e),
8);case 8:return h["return"]();case 7:f=Array.from(b.a.values());if(!b.h||!f.every(function(k){return k.endOfStream})){h.m(0);break}return v(h,b.u.L.endOfStream(),10);case 10:cf(b.F),g=b.u.L.getDuration(),0!=g&&g<b.o.presentationTimeline.getDuration()&&b.o.presentationTimeline.Fa(g),z(h)}})};
function pj(a,b){if(rj(b))return Cf(a.u.L,b.stream.originalId||""),null;b.type==Ee&&Df(a.u.L);var c=a.u.uc(),d=b.wa?b.wa.endTime:c,e=yf(a.u.L,b.type,c),f=Math.max(a.o.minBufferTime||0,a.i.rebufferingGoal,a.i.bufferingGoal)*a.f;if(d>=a.o.presentationTimeline.getDuration())return b.endOfStream=!0,"video"==b.type&&(c=a.a.get(Ee))&&rj(c)&&(c.endOfStream=!0),null;b.endOfStream=!1;if(e>=f)return.5;e=xf(a.u.L,b.type);e=sj(a,b,c,e);if(!e)return 1;f=Infinity;var g=Array.from(a.a.values());g=t(g);for(var h=
g.next();!h.done;h=g.next())h=h.value,rj(h)||h.ia&&!h.ia.current()||(f=Math.min(f,h.wa?h.wa.endTime:c));if(d>=f+a.o.presentationTimeline.a)return 1;tj(a,b,c,e)["catch"](function(){});return null}
function sj(a,b,c,d){if(b.ia)return b.ia.current();if(b.wa||d)return b.ia=b.stream.segmentIndex.sb(b.wa?b.wa.endTime:d),b.ia.next().value;a=a.i.inaccurateManifestTolerance;d=Math.max(c-a,0);var e=null;a&&(b.ia=b.stream.segmentIndex.sb(d),e=b.ia.next().value);e||(b.ia=b.stream.segmentIndex.sb(c),e=b.ia.next().value);return e}
function tj(a,b,c,d){var e,f,g,h,k,l,m,n,p,r,u,x,w;return J(function(y){switch(y.a){case 1:e=Fe;f=b.stream;g=b.ia;b.Na=!0;h=uj(a,b,d);A(y,2);k="video/mp4"==f.mimeType||"audio/mp4"==f.mimeType;l=window.ReadableStream;if(a.i.lowLatencyMode&&l&&k)return p=new Uint8Array(0),r=function(D){var C,B,F;return J(function(G){if(1==G.a)return v(G,h,2);cf(a.F);if(a.g)return G["return"]();p=vj(p,D);C=!1;B=0;(new Qb).box("mdat",function(H){B=H.size+H.start;C=!0}).parse(p,!1,!0);if(!C)return G.m(0);F=p.subarray(0,
B);p=p.subarray(B);return v(G,wj(a,b,c,f,d,F),0)})},v(y,xj(a,b,d,r),5);m=xj(a,b,d);return v(y,Promise.all([h,m]),6);case 6:return n=y.b,cf(a.F),a.g?y["return"]():b.kb?(b.Na=!1,gj(a,b,0),y["return"]()):v(y,wj(a,b,c,f,d,n[1]),5);case 5:cf(a.F);if(a.g)return y["return"]();b.wa=d;g.next();b.Na=!1;b.wd=!1;u=a.u.L.rc();x=u[b.type];bb(JSON.stringify(x));b.kb||a.u.td();gj(a,b,0);wa(y,0);break;case 2:w=E(y);cf(a.F,w);if(a.g)return y["return"]();b.Na=!1;if(b.type==e.$&&a.i.ignoreTextStreamFailures)a.a["delete"](e.$),
y.m(0);else if(7001==w.code)b.Na=!1,b.Ha=null,gj(a,b,0),y.m(0);else if(3017==w.code)yj(a,b,w),y.m(0);else if(1001==w.code&&w.data&&404==w.data[1])b.Na=!1,b.Ha=null,gj(a,b,1),y.m(0);else return b.Qb=!0,w.severity=2,v(y,qj(a,w),0)}})}function vj(a,b){var c=new Uint8Array(a.length+b.length);c.set(a);c.set(b,a.length);return c}
function yj(a,b,c){if(!Array.from(a.a.values()).some(function(e){return e!=b&&e.wd})){var d=Math.round(100*a.f);if(20<d)a.f-=.2;else if(4<d)a.f-=.04;else{b.Qb=!0;a.g=!0;a.u.onError(c);return}b.wd=!0}gj(a,b,4)}
function uj(a,b,c){var d,e,f,g,h,k,l;return J(function(m){d=[];e=Math.max(0,c.appendWindowStart-.1);f=c.appendWindowEnd+.01;g=c.timestampOffset;if(g!=b.md||e!=b.ld||f!=b.kd)h=function(){var n;return J(function(p){if(1==p.a)return A(p,2),b.ld=e,b.kd=f,b.md=g,v(p,Ff(a.u.L,b.type,g,e,f),4);if(2!=p.a)return wa(p,0);n=E(p);b.ld=null;b.kd=null;b.md=null;throw n;})},d.push(h());!ni(c.b,b.wc)&&(b.wc=c.b)&&(k=xj(a,b,c.b),l=function(){var n,p,r;return J(function(u){switch(u.a){case 1:return A(u,2),v(u,k,4);
case 4:return n=u.b,cf(a.F),p=b.stream.closedCaptions&&0<b.stream.closedCaptions.size,v(u,zf(a.u.L,b.type,n,null,null,p),5);case 5:wa(u,0);break;case 2:throw r=E(u),b.wc=null,r;}})},d.push(l()));return v(m,Promise.all(d),0)})}
function wj(a,b,c,d,e,f){var g;return J(function(h){if(1==h.a)return g=d.closedCaptions&&0<d.closedCaptions.size,null!=d.emsgSchemeIdUris&&0<d.emsgSchemeIdUris.length&&(new Qb).S("emsg",function(k){var l=d.emsgSchemeIdUris;if(0===k.version){var m=k.reader.Ub();var n=k.reader.Ub();var p=k.reader.I();var r=k.reader.I();var u=k.reader.I();var x=k.reader.I();var w=e.startTime+r/p}else p=k.reader.I(),w=k.reader.gb()/p+e.timestampOffset,r=w-e.startTime,u=k.reader.I(),x=k.reader.I(),m=k.reader.Ub(),n=k.reader.Ub();
k=k.reader.Va(k.reader.P.byteLength-k.reader.Z());l.includes(m)&&("urn:mpeg:dash:event:2012"==m?a.u.kf():(l=new O(zj,{detail:{startTime:w,endTime:w+u/p,schemeIdUri:m,value:n,timescale:p,presentationTimeDelta:r,eventDuration:u,id:x,messageData:k}}),a.u.onEvent(l)))}).parse(f),v(h,Aj(a,b,c),2);if(3!=h.a)return cf(a.F),v(h,zf(a.u.L,b.type,f,e.startTime,e.endTime,g),3);cf(a.F);z(h)})}
function Aj(a,b,c){var d,e,f,g;return J(function(h){if(1==h.a){d=Math.max(a.i.bufferBehind,a.o.presentationTimeline.a);e=vf(a.u.L,b.type);if(null==e)return h["return"]();f=c-e;g=f-d;return.01>=g?h["return"]():v(h,a.u.L.remove(b.type,e,e+g),2)}cf(a.F);z(h)})}function rj(a){return a&&a.type==Ee&&("application/cea-608"==a.stream.mimeType||"application/cea-708"==a.stream.mimeType)}
function xj(a,b,c,d){var e,f,g,h;return J(function(k){if(1==k.a)return e=kh,f=Zi(c.ga(),c.da,c.Y,a.i.retryParameters,d),g=a.u.xb.request(e,f),b.ra=g,v(k,g.promise,2);h=k.b;b.ra=null;return k["return"](h.data)})}
function mj(a,b,c,d){var e,f;return J(function(g){if(1==g.a)return b.kb=!1,b.Ic=!1,b.oc=0,b.Ib=!0,b.wa=null,b.wc=null,b.ia=null,d?(e=a.u.uc(),f=a.u.L.getDuration(),v(g,a.u.L.remove(b.type,e+d,f),3)):v(g,Ef(a.u.L,b.type),4);if(3!=g.a)return cf(a.F),c?v(g,a.u.L.flush(b.type),3):g.m(3);cf(a.F);b.Ib=!1;b.endOfStream=!1;gj(a,b,0);z(g)})}
function gj(a,b,c){var d=b.type;if(d!=Ee||a.a.has(d))b.Ha=(new Zb(function(){var e;return J(function(f){if(1==f.a)return A(f,2),v(f,a.Sb(b),4);if(2!=f.a)return wa(f,0);e=E(f);if(a.u)a.u.onError(e);z(f)})})).N(c)}function bj(a){null!=a.Ha&&(a.Ha.stop(),a.Ha=null)}function cj(a){return J(function(b){return a.ra?v(b,a.ra.abort(),0):b.m(0)})}function qj(a,b){return J(function(c){if(1==c.a)return v(c,Og(a.j),2);cf(a.F);a.u.onError(b);b.handled||a.i.failureCallback(b);z(c)})};function Bj(a,b){var c=Cj(),d=this;this.h=b;this.c=a;this.f=c;this.j=null;this.g=[];this.b=this.a=null;this.l=Promise.resolve().then(function(){return Dj(d)});this.F=new bf(function(){return Ej(d)})}Bj.prototype.destroy=function(){return this.F.destroy()};function Ej(a){var b,c,d;return J(function(e){if(1==e.a)return a.b&&a.b.abort(),Fj(a),v(e,a.l,2);a.a&&a.a.Da.fb();b=t(a.g);for(c=b.next();!c.done;c=b.next())d=c.value,d.Da.fb();a.a=null;a.g=[];a.h=null;z(e)})}
function Gj(a,b){var c={zb:function(){},yc:function(){},fb:function(){},onError:function(){},Ac:function(){},qg:function(){}};a.g.push({create:b,Da:c});a.b&&a.b.abort();Fj(a);return c}
function Dj(a){return J(function(b){if(a.F.a)b=b.m(0);else{if(0==a.g.length||a.a&&!a.a.bb)var c=!1;else{a.a&&(a.a.Da.fb(),a.a=null);c=a.g.shift();var d=c.create(a.f);d?(c.Da.zb(),a.a={node:d.node,payload:d.payload,bb:d.bb,Da:c.Da}):c.Da.Ac();c=!0}c?c=Promise.resolve():a.a?c=Hj(a):(a.h.jf(a.c),a.j=new Ge,c=a.j);b=v(b,c,1)}return b})}
function Hj(a){var b,c;return J(function(d){switch(d.a){case 1:return a.c=a.h.Se(a.c,a.f,a.a.node,a.a.payload),A(d,2),a.b=a.h.Ge(a.c,a.f,a.a.payload),v(d,a.b.promise,4);case 4:a.b=null;a.c==a.a.node&&(a.a.Da.yc(),a.a=null);wa(d,0);break;case 2:b=E(d);if(7001==b.code)a.a.Da.fb();else a.a.Da.onError(b);a.a=null;a.b=null;c=a;return v(d,a.h.handleError(a.f,b),5);case 5:c.c=d.b,z(d)}})}function Fj(a){a.j&&(a.j.resolve(),a.j=null)};function Ij(a){this.a=null;for(var b=t(Array.from(a.textTracks)),c=b.next();!c.done;c=b.next())c=c.value,c.mode="disabled","Shaka Player TextTrack"==c.label&&(this.a=c);this.a||(this.a=a.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden"}q=Ij.prototype;q.remove=function(a,b){if(!this.a)return!1;Jj(this.a,function(c){return c.startTime<b&&c.endTime>a});return!0};
q.append=function(a){function b(g){var h=[],k=700<=g.fontWeight,l="italic"==g.fontStyle,m=g.textDecoration.includes("underline");k&&h.push("b");l&&h.push("i");m&&h.push("u");k=h.reduce(function(n,p){return n+"<"+p+">"},"");h=h.reduceRight(function(n,p){return n+"</"+p+">"},"");return g.lineBreak||g.spacer?(g.spacer&&Hb("shaka.extern.Cue","Please use lineBreak instead of spacer."),"\n"):g.nestedCues.length?g.nestedCues.map(b).join(""):k+g.payload+h}var c=a.map(function(g){if(g.nestedCues.length){var h=
g.clone();h.nestedCues=[];h.payload=b(g);return h}return g}),d=[];a=this.a.cues?Array.from(this.a.cues):[];var e={};c=t(c);for(var f=c.next();!f.done;e={nb:e.nb},f=c.next())e.nb=f.value,a.some(function(g){return function(h){return h.startTime==g.nb.startTime&&h.endTime==g.nb.endTime&&h.text==g.nb.payload?!0:!1}}(e))||(f=Kj(e.nb))&&d.push(f);a=d.slice().sort(function(g,h){return g.startTime!=h.startTime?g.startTime-h.startTime:g.endTime!=h.endTime?g.endTime-h.startTime:"line"in VTTCue.prototype?d.indexOf(h)-
d.indexOf(g):d.indexOf(g)-d.indexOf(h)});a=t(a);for(e=a.next();!e.done;e=a.next())this.a.addCue(e.value)};q.destroy=function(){this.a&&(Jj(this.a,function(){return!0}),this.a.mode="disabled");this.a=null;return Promise.resolve()};q.isTextVisible=function(){return"showing"==this.a.mode};q.setTextVisibility=function(a){this.a.mode=a?"showing":"hidden"};
function Kj(a){if(a.startTime>=a.endTime)return null;var b=new VTTCue(a.startTime,a.endTime,a.payload);b.lineAlign=a.lineAlign;b.positionAlign=a.positionAlign;a.size&&(b.size=a.size);try{b.align=a.textAlign}catch(c){}"center"==a.textAlign&&"center"!=b.align&&(b.align="middle");"vertical-lr"==a.writingMode?b.vertical="lr":"vertical-rl"==a.writingMode&&(b.vertical="rl");1==a.lineInterpretation&&(b.snapToLines=!1);null!=a.line&&(b.line=a.line);null!=a.position&&(b.position=a.position);return b}
function Jj(a,b){var c=a.mode;a.mode="showing"==c?"showing":"hidden";for(var d=t(Array.from(a.cues)),e=d.next();!e.done;e=d.next())(e=e.value)&&b(e)&&a.removeCue(e);a.mode=c}K("shaka.text.SimpleTextDisplayer",Ij);Ij.prototype.setTextVisibility=Ij.prototype.setTextVisibility;Ij.prototype.isTextVisible=Ij.prototype.isTextVisible;Ij.prototype.destroy=Ij.prototype.destroy;Ij.prototype.append=Ij.prototype.append;Ij.prototype.remove=Ij.prototype.remove;function Lj(){}function Mj(a){for(;a.firstChild;)a.removeChild(a.firstChild)}K("shaka.util.Dom",Lj);Lj.removeAllChildren=Mj;function Nj(a,b){var c=this;this.h=!1;this.c=[];this.a=a;this.g=b;this.b=document.createElement("div");this.b.classList.add("shaka-text-container");this.b.style.textAlign="center";this.b.style.display="flex";this.b.style.flexDirection="column";this.b.style.alignItems="center";this.b.style.justifyContent="flex-end";this.g.appendChild(this.b);this.j=(new M(function(){Oj(c)})).xa(.25);this.f=new Map}q=Nj.prototype;
q.append=function(a){var b=ia(this.c).concat(),c={};a=t(a);for(var d=a.next();!d.done;c={Zb:c.Zb},d=a.next())c.Zb=d.value,b.some(function(e){return function(f){return Kc(f,e.Zb)}}(c))||this.c.push(c.Zb);Oj(this)};q.destroy=function(){this.g.removeChild(this.b);this.b=null;this.h=!1;this.c=[];this.j&&this.j.stop();this.f.clear()};q.remove=function(a,b){if(!this.b)return!1;this.c=this.c.filter(function(c){return c.startTime<a||c.endTime>=b});Oj(this);return!0};q.isTextVisible=function(){return this.h};
q.setTextVisibility=function(a){this.h=a};
function Oj(a){function b(g){return a.c.includes(g)&&a.h&&g.startTime<=c&&g.endTime>c}for(var c=a.a.currentTime,d=t(a.f.keys()),e=d.next();!e.done;e=d.next())if(e=e.value,!b(e)){var f=a.f.get(e);a.b.removeChild(f);a.f["delete"](e)}d=new Set(a.f.values());e=t(Array.from(a.b.childNodes));for(f=e.next();!f.done;f=e.next())f=f.value,d.has(f)||a.b.removeChild(f);d=a.c.filter(function(g){return b(g)&&!a.f.has(g)}).sort(function(g,h){return g.startTime!=h.startTime?g.startTime-h.startTime:g.endTime-h.endTime});
d=t(d);for(e=d.next();!e.done;e=d.next())e=e.value,f=Pj(a,a.b,e,!1),a.f.set(e,f)}function Pj(a,b,c,d){var e=d?"span":"div";if(c.lineBreak||c.spacer)c.spacer&&Hb("shaka.extern.Cue","Please use lineBreak instead of spacer."),e="br";var f=document.createElement(e);if("br"!=e)for(Qj(a,f,c,d),c=t(c.nestedCues),d=c.next();!d.done;d=c.next())Pj(a,f,d.value,!0);b.appendChild(f);return f}
function Qj(a,b,c,d){var e=b.style,f=0==c.nestedCues.length;e.whiteSpace="pre-wrap";var g=c.payload.replace(/\s+$/g,function(h){return"\u00a0".repeat(h.length)});d?b.textContent=g:g.length&&(e=document.createElement("span"),e.textContent=g,b.appendChild(e),e=e.style);e.backgroundColor=c.backgroundColor;e.border=c.border;e.color=c.color;e.direction=c.direction;e.opacity=c.opacity;e.paddingLeft=Rj(c.linePadding,c,a.g);e.paddingRight=Rj(c.linePadding,c,a.g);c.backgroundImage&&(e.backgroundImage="url('"+
c.backgroundImage+"')",e.backgroundRepeat="no-repeat",e.backgroundSize="contain",e.backgroundPosition="center",""==c.backgroundColor&&(e.backgroundColor="transparent"));e.verticalAlign="before"==c.displayAlign?"top":"center"==c.displayAlign?"middle":"bottom";f||(e.margin="0");e.fontFamily=c.fontFamily;e.fontWeight=c.fontWeight.toString();e.fontStyle=c.fontStyle;e.letterSpacing=c.letterSpacing;e.fontSize=Rj(c.fontSize,c,a.g);c.line?1==c.lineInterpretation&&(e.position="absolute",c.writingMode==Ec?
c.lineAlign==Gc?e.top=c.line+"%":"end"==c.lineAlign&&(e.bottom=c.line+"%"):"vertical-lr"==c.writingMode?c.lineAlign==Gc?e.left=c.line+"%":"end"==c.lineAlign&&(e.right=c.line+"%"):c.lineAlign==Gc?e.right=c.line+"%":"end"==c.lineAlign&&(e.left=c.line+"%")):c.region&&c.region.id&&(!d&&!f||c.backgroundImage)&&(a=c.region.widthUnits==Rc?"%":"px",b=c.region.viewportAnchorUnits==Rc?"%":"px",e.height=c.region.height+(c.region.heightUnits==Rc?"%":"px"),e.width=c.region.width+a,e.position="absolute",e.top=
c.region.viewportAnchorY+b,e.left=c.region.viewportAnchorX+b);e.lineHeight=c.lineHeight;c.position&&(c.writingMode==Ec?e.paddingLeft=c.position:e.paddingTop=c.position);"line-left"==c.positionAlign?e.cssFloat="left":"line-right"==c.positionAlign&&(e.cssFloat="right");e.textAlign=c.textAlign;e.textDecoration=c.textDecoration.join(" ");e.writingMode=c.writingMode;"writingMode"in document.documentElement.style&&e.writingMode==c.writingMode||(e.webkitWritingMode=c.writingMode);c.size&&(c.writingMode==
Ec?e.width=c.size+"%":e.height=c.size+"%")}function Rj(a,b,c){var d=(d=(new RegExp(/(\d*\.?\d+)([a-z]+|%+)/)).exec(a))?{value:Number(d[1]),Gf:d[2]}:null;if(!d)return a;var e=d.value;switch(d.Gf){case "%":return e/100*c.clientHeight/b.cellResolution.rows+"px";case "c":return c.clientHeight*e/b.cellResolution.rows+"px";default:return a}}K("shaka.text.UITextDisplayer",Nj);Nj.prototype.setTextVisibility=Nj.prototype.setTextVisibility;Nj.prototype.isTextVisible=Nj.prototype.isTextVisible;
Nj.prototype.remove=Nj.prototype.remove;Nj.prototype.destroy=Nj.prototype.destroy;Nj.prototype.append=Nj.prototype.append;function Sj(a){function b(f){var g=[],h=700<=f.fontWeight,k="italic"==f.fontStyle,l=f.textDecoration.includes("underline");h&&g.push("b");k&&g.push("i");l&&g.push("u");h=g.reduce(function(m,n){return m+"<"+n+">"},"");g=g.reduceRight(function(m,n){return m+"</"+n+">"},"");return f.lineBreak||f.spacer?(f.spacer&&Hb("shaka.text.Cue","Please use lineBreak instead of spacer."),"\n"):f.nestedCues.length?f.nestedCues.map(b).join(""):h+f.payload+g}var c=a.map(function(f){if(f.nestedCues.length){var g=f.clone();
g.nestedCues=[];g.payload=b(f);return g}return f});a="WEBVTT\n\n";c=t(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=function(f){var g=Math.floor(f/3600),h=Math.floor(f/60%60),k=Math.floor(f%60);f=Math.floor(1E3*f%1E3);return(10>g?"0":"")+g+":"+(10>h?"0":"")+h+":"+(10>k?"0":"")+k+"."+(100>f?10>f?"00":"0":"")+f};a+=e(d.startTime)+" --\x3e "+e(d.endTime)+"\n";a+=d.payload+"\n\n"}return a}K("shaka.text.WebVttGenerator",function(){});function Tj(){}
function Uj(a,b,c,d,e){var f=e in d,g=!0,h;for(h in b){var k=e+"."+h,l=f?d[e]:c[h];f||h in c?void 0===b[h]?void 0===l||f?delete a[h]:a[h]=Xg(l):l.constructor==Object&&b[h]&&b[h].constructor==Object?(a[h]||(a[h]=Xg(l)),k=Uj(a[h],b[h],l,d,k),g=g&&k):typeof b[h]!=typeof l||null==b[h]||"function"!=typeof b[h]&&b[h].constructor!=l.constructor?(Ta("Invalid config, wrong type for "+k),g=!1):("function"==typeof c[h]&&c[h].length!=b[h].length&&Ua("Unexpected number of arguments for "+k),a[h]=b[h]):(Ta("Invalid config, unrecognized key "+
k),g=!1)}return g}function Vj(a,b){for(var c={},d=c,e=0,f=0;;){e=a.indexOf(".",e);if(0>e)break;if(0==e||"\\"!=a[e-1])f=a.substring(f,e).replace(/\\\./g,"."),d[f]={},d=d[f],f=e+1;e+=1}d[a.substring(f).replace(/\\\./g,".")]=b;return c}K("shaka.util.ConfigUtils",Tj);Tj.convertToConfigObject=Vj;Tj.mergeConfigObjects=Uj;function Wj(){}
function Xj(){var a=Infinity;navigator.connection&&navigator.connection.saveData&&(a=360);var b={retryParameters:Ng(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1,initDataTransform:Yh,logLicenseExchange:!1,updateExpirationTime:1},c={retryParameters:Ng(),availabilityWindowOverride:NaN,disableAudio:!1,disableVideo:!1,disableText:!1,disableThumbnails:!1,defaultPresentationDelay:0,dash:{clockSyncUri:"",ignoreDrmInfo:!1,disableXlinkProcessing:!1,xlinkFailGracefully:!1,ignoreMinBufferTime:!1,
autoCorrectDrift:!0,initialSegmentLimit:1E3,ignoreSuggestedPresentationDelay:!1,ignoreEmptyAdaptationSet:!1,ignoreMaxSegmentDuration:!1,keySystemsByURI:{"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"}},
hls:{ignoreTextStreamFailures:!1,useFullSegmentsForStartTime:!1}},d={retryParameters:Ng(),failureCallback:function(g){return[g]},rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,gapDetectionThreshold:.1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1,safeSeekOffset:5,stallEnabled:!0,stallThreshold:1,stallSkip:.1,useNativeHlsOnSafari:!0,inaccurateManifestTolerance:2,lowLatencyMode:!1,autoLowLatencyMode:!1,
forceHTTPS:!1,preferNativeHls:!1};if(navigator.userAgent.match(/Edge\//)||cc()||ec())d.gapDetectionThreshold=.5;if(dc("Web0S")||cc()||ec())d.stallSkip=0;var e={trackSelectionCallback:function(g){return J(function(h){return h["return"](g)})},downloadSizeCallback:function(g){var h;return J(function(k){if(1==k.a)return navigator.storage&&navigator.storage.estimate?v(k,navigator.storage.estimate(),3):k["return"](!0);h=k.b;return k["return"](h.usage+g<.95*h.quota)})},progressCallback:function(g,h){return[g,
h]},usePersistentLicense:!0},f={drm:b,manifest:c,streaming:d,offline:e,abrFactory:function(){return new wg},abr:{enabled:!0,useNetworkInformation:!0,defaultBandwidthEstimate:1E6,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:a,minPixels:0,maxPixels:Infinity,minFrameRate:0,maxFrameRate:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",
preferredAudioChannelCount:2,preferForcedSubs:!1,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minFrameRate:0,maxFrameRate:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity,useMediaCapabilities:!1,textDisplayFactory:function(){return null}};e.trackSelectionCallback=function(g){return J(function(h){return h["return"](Yj(g,f.preferredAudioLanguage))})};return f}
function Zj(a,b,c){var d={".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",sessionType:"",serverCertificate:new Uint8Array(0),individualizationServer:""}};return Uj(a,b,c||Xj(),d,"")}
function Yj(a,b){var c=a.filter(function(h){return"variant"==h.type}),d=[],e=Qf(b,c.map(function(h){return h.language}));e&&(d=c.filter(function(h){return Kf(h.language)==e}));0==d.length&&(d=c.filter(function(h){return h.primary}));0==d.length&&(c.map(function(h){return h.language}),d=c);var f=d.filter(function(h){return h.height&&480>=h.height});f.length&&(f.sort(function(h,k){return k.height-h.height}),d=f.filter(function(h){return h.height==f[0].height}));c=[];if(d.length){var g=Math.floor(d.length/
2);d.sort(function(h,k){return h.bandwidth-k.bandwidth});c.push(d[g])}d=t(a);for(g=d.next();!g.done;g=d.next())g=g.value,g.type!=Ee&&"image"!=g.type||c.push(g);return c}K("shaka.util.PlayerConfiguration",Wj);Wj.mergeConfigObjects=Zj;function ak(){this.a=null;this.b=[]}function bk(a,b){if(null==a.a)a.a={timestamp:Date.now()/1E3,state:b,duration:0};else{var c=Date.now()/1E3;a.a.duration=c-a.a.timestamp;a.a.state!=b&&(a.b.push(a.a),a.a={timestamp:c,state:b,duration:0})}}function ck(a,b){var c=0;a.a&&a.a.state==b&&(c+=a.a.duration);for(var d=t(a.b),e=d.next();!e.done;e=d.next())e=e.value,c+=e.state==b?e.duration:0;return c}
function dk(a){function b(f){return{timestamp:f.timestamp,state:f.state,duration:f.duration}}for(var c=[],d=t(a.b),e=d.next();!e.done;e=d.next())c.push(b(e.value));a.a&&c.push(b(a.a));return c};function ek(){this.b=this.c=null;this.a=[]}function fk(a,b,c){a.c!=b&&(a.c=b,a.a.push({timestamp:Date.now()/1E3,id:b.id,type:"variant",fromAdaptation:c,bandwidth:b.bandwidth}))}function gk(a,b,c){a.b!=b&&(a.b=b,a.a.push({timestamp:Date.now()/1E3,id:b.id,type:"text",fromAdaptation:c,bandwidth:null}))};function hk(){this.h=this.j=this.C=this.v=this.D=this.f=this.A=this.g=this.c=this.H=this.J=this.M=this.l=this.T=NaN;this.b=new ak;this.a=new ek};function U(a,b){Wg.call(this);var c=this;this.g=ik;this.lc=this.a=null;this.T=!1;this.b=new ff;this.Wc=this.l=this.Ra=this.o=this.jc=this.j=this.c=this.kc=this.C=this.Ya=this.A=this.Aa=this.v=this.D=this.h=this.K=null;this.bd=1E9;this.i=jk(this);this.$c={width:Infinity,height:Infinity};this.f=null;this.ja=new Eg(this.i.preferredAudioLanguage,this.i.preferredVariantRole,this.i.preferredAudioChannelCount);this.ka=this.i.preferredTextLanguage;this.fc=this.i.preferredTextRole;this.ec=this.i.preferForcedSubs;
this.Xc=[];b&&b(this);this.K=kk(this);this.K.Ed(this.i.streaming.forceHTTPS);this.H=null;lk&&(this.H=Ob(lk));this.b.s(window,"online",function(){c.xd()});this.na={name:"detach"};this.Ka={name:"attach"};this.M={name:"unload"};this.dd={name:"manifest-parser"};this.Jc={name:"manifest"};this.za={name:"media-source"};this.Yc={name:"drm-engine"};this.J={name:"load"};this.ed={name:"src-equals-drm-engine"};this.Ia={name:"src-equals"};var d=new Map;d.set(this.Ka,function(e,f){return Tg(mk(c,e,f))});d.set(this.na,
function(e){e.B&&(c.b.ya(e.B,"error"),e.B=null);c.a=null;e=Promise.resolve();return Tg(e)});d.set(this.M,function(e){return Tg(nk(c,e))});d.set(this.za,function(e){e=ok(c,e);return Tg(e)});d.set(this.dd,function(e,f){var g=pk(c,e,f);return Tg(g)});d.set(this.Jc,function(e){return qk(c,e)});d.set(this.Yc,function(e){e=rk(c,e);return Tg(e)});d.set(this.J,function(e,f){return Tg(sk(c,e,f))});d.set(this.ed,function(e){e=tk(c,e);return Tg(e)});d.set(this.Ia,function(e,f){return uk(c,e,f)});this.X=new Bj(this.na,
{Se:function(e,f,g,h){var k=null;e==c.na&&(k=g==c.na?c.na:c.Ka);e==c.Ka&&(k=g==c.na||f.B!=h.B?c.na:g==c.Ka?c.Ka:g==c.za||g==c.J?c.za:g==c.Ia?c.ed:null);e==c.za&&(k=g==c.J&&f.B==h.B?c.dd:c.M);e==c.dd&&(k=vk(c.J,c.Jc,c.M,g,f,h));e==c.Jc&&(k=vk(c.J,c.Yc,c.M,g,f,h));e==c.Yc&&(k=vk(c.J,c.J,c.M,g,f,h));e==c.ed&&(k=g==c.Ia&&f.B==h.B?c.Ia:c.M);if(e==c.J||e==c.Ia)k=c.M;e==c.M&&(k=h.B&&f.B==h.B?c.Ka:c.na);return k},Ge:function(e,f,g){c.dispatchEvent(wk(xk,{state:e.name}));return d.get(e)(f,g)},handleError:function(e){return J(function(f){return 1==
f.a?v(f,nk(c,e),2):f["return"](e.B?c.Ka:c.na)})},jf:function(e){c.dispatchEvent(wk(yk,{state:e.name}))}});a&&this.Hb(a,!0)}ra(U,Wg);function wk(a,b){return new O(a,b)}q=U.prototype;
q.destroy=function(){var a=this,b;return J(function(c){switch(c.a){case 1:if(a.g==zk)return c["return"]();a.g=zk;b=Gj(a.X,function(){return{node:a.na,payload:Cj(),bb:!1}});return v(c,new Promise(function(d){b.zb=function(){};b.yc=function(){d()};b.fb=function(){d()};b.onError=function(){d()};b.Ac=function(){d()}}),2);case 2:return v(c,a.X.destroy(),3);case 3:a.b&&(a.b.release(),a.b=null);a.Wc=null;a.l=null;a.i=null;a.f=null;a.lc=null;if(!a.K){c.m(0);break}return v(c,a.K.destroy(),5);case 5:a.K=null,
z(c)}})};q.Hb=function(a,b){b=void 0===b?!0:b;if(this.g==zk)return Promise.reject(Ak());var c=Cj();c.B=a;$b()||(b=!1);var d=b?this.za:this.Ka,e=Gj(this.X,function(){return{node:d,payload:c,bb:!1}});e.zb=function(){};return Bk(e)};q.detach=function(){var a=this;if(this.g==zk)return Promise.reject(Ak());var b=Gj(this.X,function(){return{node:a.na,payload:Cj(),bb:!1}});b.zb=function(){};return Bk(b)};
q.Kd=function(a){var b=this;a=void 0===a?!0:a;if(this.g==zk)return Promise.reject(Ak());$b()||(a=!1);var c=Cj(),d=Gj(this.X,function(e){var f=e.B&&a?b.za:e.B?b.Ka:b.na;c.B=e.B;return{node:f,payload:c,bb:!1}});d.zb=function(){};return Bk(d)};
q.load=function(a,b,c){var d=this;if(this.g==zk)return Promise.reject(Ak());this.dispatchEvent(wk(Ck));var e=Cj();e.uri=a;e.Id=Date.now()/1E3;c&&(e.mimeType=c);void 0!==b&&(e.startTime=b);var f=Dk(this,e)?this.Ia:this.J,g=Gj(this.X,function(h){if(null==h.B)return null;e.B=h.B;return{node:f,payload:e,bb:!0}});this.f=new hk;g.zb=function(){};return new Promise(function(h,k){g.Ac=function(){return k(new L(2,7,7002))};g.yc=function(){h();d.dispatchEvent(wk(Ek))};g.fb=function(){return k(Ak())};g.onError=
function(l){return k(l)}})};
function Dk(a,b){if(!$b())return!0;var c=b.mimeType,d=b.uri||"";c||(c={mp4:"video/mp4",m4v:"video/mp4",m4a:"audio/mp4",webm:"video/webm",weba:"audio/webm",mkv:"video/webm",ts:"video/mp2t",ogv:"video/ogg",ogg:"audio/ogg",mpg:"video/mpeg",mpeg:"video/mpeg",m3u8:"application/x-mpegurl",mp3:"audio/mpeg",aac:"audio/aac",flac:"audio/flac",wav:"audio/wav"}[ji(d)]);if(c){if(""==(b.B||bc()).canPlayType(c))return!1;if(!$b()||!(c in ii||ji(d)in ki)||a.i.streaming.preferNativeHls)return!0;if(fc())return a.i.streaming.useNativeHlsOnSafari}return!1}
function mk(a,b,c){null==b.B&&(b.B=c.B,a.b.s(b.B,"error",function(){var d=Fk(a);d&&Gk(a,d)}));a.a=b.B;return Promise.resolve()}
function nk(a,b){var c,d,e,f,g,h,k,l,m;return J(function(n){switch(n.a){case 1:return a.g!=zk&&(a.g=ik),c=a.Xc.map(function(p){return p()}),a.Xc=[],v(n,Promise.all(c),2);case 2:a.dispatchEvent(wk(Hk));b.mimeType=null;b.startTime=null;b.uri=null;b.B&&(a.b.ya(b.B,"loadedmetadata"),a.b.ya(b.B,"playing"),a.b.ya(b.B,"pause"),a.b.ya(b.B,"ended"),a.b.ya(b.B,"ratechange"));a.Aa&&(a.Aa.release(),a.Aa=null);a.Ya&&(a.Ya.stop(),a.Ya=null);if(!a.j){n.m(3);break}return v(n,a.j.stop(),4);case 4:a.j=null,a.jc=null;
case 3:if(!a.l){n.m(5);break}return v(n,a.l.stop(),5);case 5:if(!a.c){n.m(7);break}return v(n,a.c.destroy(),8);case 8:a.c=null;case 7:a.A&&(a.A.release(),a.A=null);a.v&&(a.v.release(),a.v=null);if(!a.D){n.m(9);break}return v(n,a.D.destroy(),10);case 10:a.D=null;case 9:if(a.H)a.H.onAssetUnload();if(!b.B||!b.B.src){n.m(11);break}return v(n,new Promise(function(p){return(new M(p)).N(.1)}),12);case 12:for(b.B.removeAttribute("src"),b.B.load();b.B.lastChild;)b.B.removeChild(b.B.firstChild);case 11:if(!a.h){n.m(13);
break}return v(n,a.h.destroy(),14);case 14:a.h=null;case 13:a.Ra=null;a.C=null;if(a.o){d=t(a.o.variants);for(e=d.next();!e.done;e=d.next())for(f=e.value,g=t([f.audio,f.video]),h=g.next();!h.done;h=g.next())(k=h.value)&&k.segmentIndex&&k.segmentIndex.release();l=t(a.o.textStreams);for(h=l.next();!h.done;h=l.next())m=h.value,m.segmentIndex&&m.segmentIndex.release()}a.o=null;a.f=new hk;a.Zc=null;Ik(a);z(n)}})}
function ok(a,b){var c,d,e,f;return J(function(g){if(1==g.a)return c=new ee,d=a.i.textDisplayFactory,e=Ob(d),a.Zc=d,f=Jk(b.B,c,e,function(h,k,l){h=t(h);for(var m=h.next();!m.done;m=h.next())if(m=m.value,m.data&&m.cueTime&&m.frames){for(var n=m.cueTime+k,p=l,r=t(m.frames),u=r.next();!u.done;u=r.next())Kk(a,n,p,"ID3",u.value);if(a.H)a.H.onHlsTimedMetadata(m,n)}}),v(g,f.A,2);a.D=f;z(g)})}
function pk(a,b,c){var d,e,f,g;return J(function(h){if(1==h.a)return b.mimeType=c.mimeType,b.uri=c.uri,d=b.uri,e=a.K,a.Ra=d,f=a,v(h,hi(d,e,a.i.manifest.retryParameters,b.mimeType),2);f.jc=h.b;a.j=Ob(a.jc);g=Xg(a.i.manifest);c.B&&"AUDIO"===c.B.nodeName&&(g.disableVideo=!0);a.j.configure(g);z(h)})}
function qk(a,b){var c=b.uri,d=a.K;a.kc=new Vi(function(){return a.zd()});Wi(a.kc,function(g){Lk(a,Mk,g);if(a.H)a.H.onDashTimedMetadata(g)});var e={networkingEngine:d,filter:function(g){return J(function(h){return h["return"](a.qc(g))})},makeTextStreamsForClosedCaptions:function(g){return Nk(a,g)},onTimelineRegionAdded:function(g){var h=a.kc;a:{var k=t(h.a);for(var l=k.next();!l.done;l=k.next())if(l=l.value,l.schemeIdUri==g.schemeIdUri&&l.id==g.id&&l.startTime==g.startTime&&l.endTime==g.endTime){k=
l;break a}k=null}null==k&&(h.a.add(g),h.b(g))},onEvent:function(g){return a.dispatchEvent(g)},onError:function(g){return Gk(a,g)},isLowLatencyMode:function(){return a.i.streaming.lowLatencyMode},isAutoLowLatencyMode:function(){return a.i.streaming.autoLowLatencyMode},enableLowLatencyMode:function(){a.configure("streaming.lowLatencyMode",!0)}},f=Date.now()/1E3;return new Pg(function(){var g,h,k,l;return J(function(m){if(1==m.a)return g=a,v(m,a.j.start(c,e),2);g.o=m.b;h=wk(Ok);a.dispatchEvent(h);if(0==
a.o.variants.length)throw new L(2,4,4036);Pk(a.o);k=Date.now()/1E3;l=k-f;a.f.A=l;z(m)})}(),function(){return a.j.stop()})}
function rk(a,b){var c,d;return J(function(e){return 1==e.a?(c=Date.now()/1E3,d=!0,a.h=Qk(a,{xb:a.K,onError:function(f){Gk(a,f)},zc:function(f){Rk(a,f)},onExpirationUpdated:function(f,g){Sk(a,f,g)},onEvent:function(f){a.dispatchEvent(f);f.type==Tk&&d&&(d=!1,a.f.f=Date.now()/1E3-c)}}),a.i.useMediaCapabilities||ag(a.o),a.h.configure(a.i.drm),v(e,yh(a.h,a.o.variants,a.o.offlineSessionIds,a.i.useMediaCapabilities),2)):3!=e.a?v(e,a.h.Hb(b.B),3):v(e,a.qc(a.o),0)})}
function sk(a,b,c){var d,e,f,g,h,k,l,m,n,p;return J(function(r){switch(r.a){case 1:b.startTime=c.startTime;d=b.B;e=b.uri;a.Ra=e;a.A=new Oi({vc:function(){return b.B.playbackRate},sc:function(){return b.B.defaultPlaybackRate},Gd:function(u){b.B.playbackRate=u},Zd:function(u){b.B.currentTime+=u}});f=function(){return Uk(a)};g=function(){return Vk(a)};a.b.s(d,"playing",f);a.b.s(d,"pause",f);a.b.s(d,"ended",f);a.b.s(d,"ratechange",g);h=a.i.abrFactory;a.l&&a.Wc==h||(a.Wc=h,a.l=Ob(h),"function"!=typeof a.l.playbackRateChanged&&
(Hb("AbrManager","Please use an AbrManager with playbackRateChanged function."),a.l.playbackRateChanged=function(){}),a.l.configure(a.i.abr));a.ja=new Eg(a.i.preferredAudioLanguage,a.i.preferredVariantRole,a.i.preferredAudioChannelCount);a.ka=a.i.preferredTextLanguage;Wk(a.o.presentationTimeline,a.i.playRangeStart,a.i.playRangeEnd);a.l.init(function(u,x,w){x=void 0===x?!1:x;w=void 0===w?0:w;a.c&&u!=a.c.b&&(fk(a.f.a,u,!0),kj(a.c,u,x,w),Xk(a))});a.v=Yk(a,b.startTime);a.Aa=Zk(a);k=Math.max(a.o.minBufferTime,
a.i.streaming.rebufferingGoal);$k(a,k);Rf(a.o,a.i.preferredAudioChannelCount);a.c=al(a);a.c.configure(a.i.streaming);a.g=bl;a.dispatchEvent(wk(cl));l=dl(a)?a.l.chooseVariant():null;fk(a.f.a,l,!0);kj(a.c,l,!1,0);(m=tg(a.o.textStreams,a.ka,a.fc,a.ec)[0]||null)&&gk(a.f.a,m,!0);m?(l.audio&&el(a,l.audio,m)&&(a.T=!0),a.T&&a.D.h.setTextVisibility(!0),fl(a)):a.T=!1;m&&(a.i.streaming.alwaysStreamText||a.jd())&&lj(a.c,m);if(!a.i.streaming.startAtSegmentBoundary){r.m(2);break}n=a.v.g();return v(r,gl(l,n),3);
case 3:p=r.b,a.v.l(p);case 2:return v(r,a.c.start(),4);case 4:a.i.abr.enabled&&(a.l.enable(),hl(a)),cg(a.c?a.c.b:null,a.o),il(a.o),jl(a),Xk(a),dl(a),a.o.variants.some(function(u){return u.primary}),a.b.qa(d,"loadedmetadata",function(){a.f.g=Date.now()/1E3-c.Id}),z(r)}})}
function tk(a,b){var c,d,e,f;return J(function(g){return 1==g.a?(c=Fe,d=Date.now()/1E3,e=!0,a.h=Qk(a,{xb:a.K,onError:function(h){Gk(a,h)},zc:function(h){Rk(a,h)},onExpirationUpdated:function(h,k){Sk(a,h,k)},onEvent:function(h){a.dispatchEvent(h);h.type==Tk&&e&&(e=!1,a.f.f=Date.now()/1E3-d)}}),a.h.configure(a.i.drm),f={id:0,language:"und",primary:!1,audio:null,video:{id:0,originalId:null,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:null,mimeType:"video/mp4",codecs:"",encrypted:!0,
drmInfos:[],keyIds:new Set,language:"und",label:null,type:c.Ja,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null},bandwidth:100,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]},v(g,yh(a.h,[f],[]),2)):v(g,a.h.Hb(b.B),0)})}
function uk(a,b,c){function d(){return Uk(a)}b.uri=c.uri;b.startTime=c.startTime;a.Ra=b.uri;a.v=new Ei(b.B);null!=b.startTime&&a.v.l(b.startTime);a.A=new Oi({vc:function(){return b.B.playbackRate},sc:function(){return b.B.defaultPlaybackRate},Gd:function(g){b.B.playbackRate=g},Zd:function(g){b.B.currentTime+=g}});$k(a,a.i.streaming.rebufferingGoal);a.b.s(b.B,"playing",d);a.b.s(b.B,"pause",d);a.b.s(b.B,"ended",d);a.b.s(b.B,"ratechange",function(){return Vk(a)});"none"!=a.a.preload&&a.b.qa(a.a,"loadedmetadata",
function(){a.f.g=Date.now()/1E3-c.Id});a.a.audioTracks&&(a.b.s(a.a.audioTracks,"addtrack",function(){return jl(a)}),a.b.s(a.a.audioTracks,"removetrack",function(){return jl(a)}),a.b.s(a.a.audioTracks,"change",function(){return jl(a)}));a.a.textTracks&&(a.b.s(a.a.textTracks,"addtrack",function(g){jl(a);kl(a,g)}),a.b.s(a.a.textTracks,"removetrack",function(){return jl(a)}),a.b.s(a.a.textTracks,"change",function(){return jl(a)}));b.B.src=b.uri;(cc()||dc("Web0S"))&&b.B.load();a.g=ll;a.dispatchEvent(wk(cl));
var e=new Ge;vi(a.a,HTMLMediaElement.HAVE_METADATA,a.b,function(){e.resolve()});var f=!1;a.Xc.push(function(){f=!0});vi(a.a,HTMLMediaElement.HAVE_CURRENT_DATA,a.b,function(){var g;return J(function(h){if(1==h.a){if(f)return h["return"]();ml(a);g=nl(a);return g.find(function(k){return"disabled"!=k.mode})?h.m(2):v(h,new Promise(function(k){a.b.qa(a.a.textTracks,"change",k);(new M(k)).N(1)}),2)}if(f)return h["return"]();ol(a);z(h)})});a.a.error?e.reject(Fk(a)):"none"==a.a.preload&&(Ua('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'),
e.resolve());a.b.qa(a.a,"error",function(){e.reject(Fk(a))});return new Pg(e,function(){e.reject(new L(2,7,7001));return Promise.resolve()})}function ml(a){var b=a.i.preferredAudioLanguage;if(""!=b){a.Bd(b);var c=a.i.preferredVariantRole;""!=c&&a.Bd(b,c)}}function ol(a){var b=a.i.preferredTextLanguage,c=a.i.preferForcedSubs;if(""!=b){a.Cd(b,"",c);var d=a.i.preferredTextRole;""!=d&&a.Cd(b,d,c)}}
function kl(a,b){var c=b.track;"metadata"==c.kind&&(c.mode="hidden",a.b.s(c,"cuechange",function(){if(c.activeCues)for(var d=t(c.activeCues),e=d.next();!e.done;e=d.next())if(e=e.value,Kk(a,e.startTime,e.endTime,e.type,e.value),a.H)a.H.onCueMetadataChange(e.value)}),(new M(function(){var d=pl(a);d=t(d);for(var e=d.next();!e.done;e=d.next())e.value.mode="hidden"})).Yb().N(.5))}function Kk(a,b,c,d,e){a.dispatchEvent(wk(ql,{startTime:b,endTime:c,mg:d,payload:e}))}
function Pk(a){function b(c){return c.video&&c.audio||c.video&&c.video.codecs.includes(",")}a.variants.some(b)&&(a.variants=a.variants.filter(b))}function Qk(a,b){return new rh(b,a.i.drm.updateExpirationTime)}function kk(a){return new ah(function(b,c){a.l&&a.l.segmentDownloaded(b,c)})}
function Yk(a,b){return new Fi(a.a,a.o,a.i.streaming,b,function(){a.Aa&&Ri(a.Aa,!0);if(a.c)for(var c=a.c,d=c.u.uc(),e=c.i.smallGapLimit,f=t(c.a.keys()),g=f.next();!g.done;g=f.next()){g=g.value;var h=c.a.get(g);h.ia=null;var k=c.u.L;g==Ee?(k=k.c,k=null==k.a||null==k.b?!1:d>=k.a&&d<k.b):(k=wf(k,g),k=he(k,d,e));if(!k&&(null!=xf(c.u.L,g)&&oj(c,h),h.ra&&(h.ra.abort(),h.ra=null),g===Ee))for(g=c.u.L.v.a,g.g=0,g.b=[],g.a=[],h=g.c,h.c=[],h.b=[],h.a=0,Rd(g),g=t(g.f.values()),h=g.next();!h.done;h=g.next())nd(h.value)}a.C&&
rl(a)},function(c){return a.dispatchEvent(c)})}function Zk(a){var b=new Xi(a.kc);Yi(b,function(d){Lk(a,sl,d)},function(d){Lk(a,tl,d)},function(d,e){e||(Lk(a,sl,d),Lk(a,tl,d))});var c=new Qi(a.a);c.a.add(b);return c}function $k(a,b){a.C=new Ig;a.C.a=Kg;Lg(a.C,b,Math.min(.5,b/2));Ik(a);a.Ya=(new M(function(){rl(a)})).xa(.25)}
function rl(a){switch(a.g){case ll:if(a.a.ended)var b=!0;else{var c=ge(a.a.buffered);b=null!=c&&c>=a.a.duration-1}break;case bl:a:if(a.a.ended||uf(a.D))b=!0;else{if(a.o.presentationTimeline.U()){c=a.o.presentationTimeline.Ta();var d=ge(a.a.buffered);if(null!=d&&d>=c){b=!0;break a}}b=!1}break;default:b=!1}d=ie(a.a.buffered,a.a.currentTime);c=a.C;var e=b,f=c.b.get(c.a);b=c.a;d=e||d>=f?Jg:Kg;c.a=d;b!=d&&Ik(a)}function Jk(a,b,c,d){return new mf(a,b,c,d)}
function al(a){return new $i(a.o,{uc:function(){return a.v.g()},getBandwidthEstimate:function(){return a.l.getBandwidthEstimate()},L:a.D,xb:a.K,onError:function(b){return Gk(a,b)},onEvent:function(b){return a.dispatchEvent(b)},kf:function(){a.j&&a.j.update&&a.j.update()},td:function(){a.v&&a.v.v();rl(a)}})}
q.configure=function(a,b){2==arguments.length&&"string"==typeof a&&(a=Vj(a,b));a.manifest&&a.manifest.dash&&"defaultPresentationDelay"in a.manifest.dash&&(Hb("manifest.dash.defaultPresentationDelay configuration","Please Use manifest.defaultPresentationDelay instead."),a.manifest.defaultPresentationDelay=a.manifest.dash.defaultPresentationDelay,delete a.manifest.dash.defaultPresentationDelay);a.streaming&&a.streaming.lowLatencyMode&&(void 0==a.streaming.inaccurateManifestTolerance&&(a.streaming.inaccurateManifestTolerance=
0),void 0==a.streaming.rebufferingGoal&&(a.streaming.rebufferingGoal=.01));var c=Zj(this.i,a,jk(this));ul(this);return c};
function ul(a){if(a.j){var b=Xg(a.i.manifest);a.a&&"AUDIO"===a.a.nodeName&&(b.disableVideo=!0);a.j.configure(b)}a.h&&a.h.configure(a.i.drm);if(a.c){a.c.configure(a.i.streaming);try{vl(a,a.o)}catch(f){Gk(a,f)}a.l&&dl(a);b=a.c.b;!b||b.allowedByApplication&&b.allowedByKeySystem||wl(a)}a.K&&a.K.Ed(a.i.streaming.forceHTTPS);if(a.D&&(b=a.i.textDisplayFactory,a.Zc!=b)){var c=Ob(b),d=a.D,e=d.h;d.h=c;e&&(c.setTextVisibility(e.isTextVisible()),e.destroy());d.c&&(d.c.c=c);a.Zc=b;a.c&&(b=a.c,(c=b.a.get(Ee))&&
jj(b,c.stream,!0,0,!0))}a.l&&(a.l.configure(a.i.abr),a.i.abr.enabled?a.l.enable():a.l.disable(),hl(a));a.C&&(b=a.i.streaming.rebufferingGoal,a.o&&(b=Math.max(b,a.o.minBufferTime)),Lg(a.C,b,Math.min(.5,b/2)));a.o&&Wk(a.o.presentationTimeline,a.i.playRangeStart,a.i.playRangeEnd)}q.getConfiguration=function(){var a=jk(this);Zj(a,this.i,jk(this));return a};q.wf=function(){for(var a in this.i)delete this.i[a];Zj(this.i,jk(this),jk(this));ul(this)};q.Ne=function(){return this.g};q.Re=function(){return this.a};
q.Nb=function(){return this.K};q.fd=function(){return this.Ra};q.Td=function(){return this.H?this.H:null};q.U=function(){return this.o?this.o.presentationTimeline.U():this.a&&this.a.src?Infinity==this.a.duration:!1};q.eb=function(){return this.o?this.o.presentationTimeline.eb():!1};q.df=function(){if(this.o){var a=this.o.variants;return a.length?!a[0].video:!1}return this.a&&this.a.src?this.a.videoTracks?0==this.a.videoTracks.length:0==this.a.videoHeight:!1};
q.zd=function(){if(this.o){var a=this.o.presentationTimeline;return{start:a.tb(),end:a.Ma()}}return this.a&&this.a.src&&(a=this.a.seekable,a.length)?{start:a.start(0),end:a.end(a.length-1)}:{start:0,end:0}};q.keySystem=function(){return Ph(this.drmInfo())};q.drmInfo=function(){return this.h?this.h.c:null};q.Mb=function(){return this.h?this.h.Mb():Infinity};q.tc=function(){return this.h?this.h.tc():{}};q.hd=function(){return this.C?this.C.a==Kg:!1};q.Te=function(){return this.a?this.A?this.A.b:1:0};
q.Ff=function(a){0==a?Ua("A trick play rate of 0 is unsupported!"):(this.a.paused&&this.a.play(),this.A.set(a),this.g==bl&&(this.l.playbackRateChanged(a),ij(this.c,1<Math.abs(a))))};q.ze=function(){var a=this.A.sc();this.g==ll&&this.A.set(a);this.g==bl&&(this.A.set(a),this.l.playbackRateChanged(a),ij(this.c,!1))};
q.gd=function(){if(this.o){for(var a=this.c?this.c.b:null,b=[],c=t(this.o.variants),d=c.next();!d.done;d=c.next())if(d=d.value,rg(d)){var e=kg(d);e.active=d==a;b.push(e)}return b}return this.a&&this.a.audioTracks?Array.from(this.a.audioTracks).map(function(f){return pg(f)}):[]};
q.ub=function(){if(this.o){for(var a=this.c?this.c.c:null,b=[],c=t(this.o.textStreams),d=c.next();!d.done;d=c.next()){d=d.value;var e=lg(d);e.active=d==a;b.push(e)}return b}return this.a&&this.a.src&&this.a.textTracks?nl(this).map(function(f){var g=qg(f);g.active="disabled"!=f.mode;g.type="text";g.originalTextId=f.id;"captions"==f.kind&&(g.mimeType="application/cea-608");f.kind&&(g.roles=[f.kind]);"forced"==f.kind&&(g.forced=!0);return g}):[]};
q.Le=function(){return this.o?this.o.imageStreams.map(function(a){return mg(a)}):[]};
q.af=function(a,b){var c=this,d,e,f,g,h,k,l,m,n,p,r,u,x,w,y,D;return J(function(C){if(1==C.a)return c.o?(d=c.o.imageStreams.find(function(B){return B.id==a}))?d.segmentIndex?C.m(3):v(C,d.createSegmentIndex(),3):C["return"](null):C.m(2);if(2!=C.a){e=d.segmentIndex.find(b);if(null==e)return C["return"](null);f=d.segmentIndex.get(e);g=/(\d+)x(\d+)/.exec(d.tilesLayout);if(!g)return C["return"](null);h=d.width||0;k=d.height||0;l=parseInt(g[1],10);m=parseInt(g[2],10);n=h/l;p=k/m;u=r=0;x=l*m;1<x&&(w=b-f.startTime,
y=f.endTime-f.startTime,D=Math.floor(w*x/y),r=D%l/l*h,u=D%m/m*k);return C["return"]({height:p,positionX:r,positionY:u,uris:f.ga(),width:n})}return C["return"](null)})};
q.ie=function(a){if(this.o&&this.c){var b=this.o.textStreams.find(function(d){return d.id==a.id});b&&b!=this.c.c&&(gk(this.f.a,b,!1),lj(this.c,b),xl(this),this.ka=b.language)}else if(this.a&&this.a.src&&this.a.textTracks){b=nl(this);b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ng(c)==a.id?c.mode=this.T?"showing":"hidden":c.mode="disabled";xl(this)}};
q.je=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?0:c;if(this.o&&this.c){this.i.abr.enabled&&Ua("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var d=this.o.variants.find(function(e){return e.id==a.id});d&&rg(d)&&(yl(this,d,!1,b,c),this.ja=new Dg(d),dl(this))}else if(this.a&&this.a.audioTracks)for(b=Array.from(this.a.audioTracks),b=t(b),c=b.next();!c.done;c=b.next())if(c=c.value,
ng(c)==a.id){zl(this,c);break}};q.Ie=function(){return Al(this.gd())};q.$e=function(){return Al(this.ub())};q.He=function(){return Array.from(Bl(this.gd()))};q.Ze=function(){return Array.from(Bl(this.ub()))};
q.Bd=function(a,b){if(this.o&&this.v){this.ja=new Eg(a,b||"",0,"");if(!this.i.abr.enabled){var c=function(k,l){return k.video||l.video?k.video&&l.video?Math.abs((k.video.height||0)-(l.video.height||0))+Math.abs((k.video.width||0)-(l.video.width||0)):Infinity:0},d=this.c.b,e=this.ja.create(this.o.variants),f=null;e=t(e.values());for(var g=e.next();!g.done;g=e.next())if(g=g.value,!f||c(f,d)>c(g,d))f=g;if(f){c=kg(f);this.je(c,!0);return}}wl(this)}else if(this.a&&this.a.audioTracks){e=Array.from(this.a.audioTracks);
c=Kf(a);f=d=null;e=t(e);for(g=e.next();!g.done;g=e.next()){g=g.value;var h=pg(g);Kf(h.language)==c&&(d=g,b?h.roles.includes(b)&&(f=g):0==h.roles.length&&(f=g))}f?zl(this,f):d&&zl(this,d)}};
q.Cd=function(a,b,c){c=void 0===c?!1:c;if(this.o&&this.v){if(this.ka=a,this.fc=b||"",this.ec=c,(a=tg(this.o.textStreams,this.ka,this.fc,this.ec)[0]||null)&&a!=this.c.c&&(gk(this.f.a,a,!1),this.i.streaming.alwaysStreamText||this.jd()))lj(this.c,a),xl(this)}else{var d=Kf(a);(a=this.ub().find(function(e){return Kf(e.language)==d&&(!b||e.roles.includes(b))&&e.forced==c}))&&this.ie(a)}};
q.xf=function(a){if(this.o&&this.v){for(var b=null,c=t(this.o.variants),d=c.next();!d.done;d=c.next())if(d=d.value,d.audio.label==a){b=d;break}null!=b&&(this.ja=new Eg(b.language,"",0,a),wl(this))}};q.jd=function(){var a=this.T;return this.D?this.D.h.isTextVisible():this.a&&this.a.src&&this.a.textTracks?nl(this).some(function(b){return"showing"==b.mode}):a};
function nl(a){return Array.from(a.a.textTracks).filter(function(b){return"metadata"!=b.kind&&"chapters"!=b.kind&&"Shaka Player TextTrack"!=b.label})}function pl(a){return Array.from(a.a.textTracks).filter(function(b){return"metadata"==b.kind})}
q.Df=function(a){a=!!a;if(this.T!=a){this.T=a;if(this.g==bl)this.D.h.setTextVisibility(a),this.i.streaming.alwaysStreamText||(a?this.c.c||(a=tg(this.o.textStreams,this.ka,this.fc,this.ec),0<a.length&&(lj(this.c,a[0]),xl(this))):hj(this.c));else if(this.a&&this.a.src&&this.a.textTracks){var b=nl(this);b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,"disabled"!=c.mode&&(c.mode=a?"showing":"hidden")}fl(this)}};
q.Ve=function(){if(!this.U())return null;var a=this.X.f,b=0;if(this.v)b=this.v.g();else if(a){if(null==a.startTime)return new Date;b=a.startTime}return this.o?new Date(1E3*(this.o.presentationTimeline.f+b)):this.a&&this.a.getStartDate?(a=this.a.getStartDate(),isNaN(a.getTime())?null:new Date(a.getTime()+1E3*b)):null};
q.Ud=function(){if(!this.U())return null;if(this.o)return new Date(1E3*this.o.presentationTimeline.f);if(this.a&&this.a.getStartDate){var a=this.a.getStartDate();return isNaN(a.getTime())?null:a}return null};q.rc=function(){if(this.g==bl)return this.D.rc();var a={total:[],audio:[],video:[],text:[]};this.g==ll&&(a.total=je(this.a.buffered));return a};
q.getStats=function(){if(this.g!=bl&&this.g!=ll)return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,corruptedFrames:NaN,estimatedBandwidth:NaN,completionPercent:NaN,loadLatency:NaN,manifestTimeSeconds:NaN,drmTimeSeconds:NaN,playTime:NaN,pauseTime:NaN,bufferingTime:NaN,licenseTime:NaN,liveLatency:NaN,maxSegmentDuration:NaN,switchHistory:[],stateHistory:[]};Uk(this);var a=this.a,b=a.currentTime/a.duration;if(!isNaN(b)){var c=this.f;b=Math.round(100*b);c.c=isNaN(c.c)?
b:Math.max(c.c,b)}a.getVideoPlaybackQuality&&(a=a.getVideoPlaybackQuality(),c=this.f,b=Number(a.totalVideoFrames),c.M=Number(a.droppedVideoFrames),c.J=b,this.f.H=Number(a.corruptedVideoFrames));this.h?(a=this.h,a=a.D?a.D:NaN):a=NaN;this.f.D=a;if(this.g==bl){if(a=this.c.b)this.f.j=(this.A?this.A.b:1)*a.bandwidth;a&&a.video&&(c=this.f,b=a.video.height||NaN,c.T=a.video.width||NaN,c.l=b);this.U()&&(a=this.Ud().valueOf()+1E3*this.zd().end,this.f.v=(Date.now()-a)/1E3);this.o&&this.o.presentationTimeline&&
(this.f.C=this.o.presentationTimeline.a);a=this.l.getBandwidthEstimate();this.f.h=a}var d=this.f;a=d.T;c=d.l;b=d.j;var e=d.J,f=d.M,g=d.H,h=d.h,k=d.c,l=d.g,m=d.A,n=d.f,p=ck(d.b,"playing"),r=ck(d.b,"paused"),u=ck(d.b,"buffering"),x=d.D,w=d.v,y=d.C,D=dk(d.b),C=[];d=t(d.a.a);for(var B=d.next();!B.done;B=d.next())B=B.value,C.push({timestamp:B.timestamp,id:B.id,type:B.type,fromAdaptation:B.fromAdaptation,bandwidth:B.bandwidth});return{width:a,height:c,streamBandwidth:b,decodedFrames:e,droppedFrames:f,corruptedFrames:g,
estimatedBandwidth:h,completionPercent:k,loadLatency:l,manifestTimeSeconds:m,drmTimeSeconds:n,playTime:p,pauseTime:r,bufferingTime:u,licenseTime:x,liveLatency:w,maxSegmentDuration:y,stateHistory:D,switchHistory:C}};
q.addTextTrack=function(a,b,c,d,e,f,g){g=void 0===g?!1:g;Hb("addTextTrack","Please use an addTextTrackAsync.");if(this.g!=bl&&this.g!=ll)throw new L(1,7,7004);if(!d){var h=ji(a);d={sbv:"text/x-subviewer",srt:"text/srt",vtt:"text/vtt",webvtt:"text/vtt",ttml:"application/ttml+xml",lrc:"application/x-subtitle-lrc",ssa:"text/x-ssa",ass:"text/x-ssa"}[h];if(!d)throw new L(1,2,2011,h);}if(this.g==ll){if("text/vtt"!=d)throw new L(1,2,2013,d);g&&(c="forced");d=document.createElement("track");d.src=a;d.label=
f||"";d.kind=c;d.srclang=b;this.a.getAttribute("crossorigin")||this.a.setAttribute("crossorigin","anonymous");this.a.appendChild(d);if(a=this.ub().find(function(k){return k.language==b&&k.label==(f||"")&&k.kind==c}))return jl(this),a;throw new L(1,2,2012);}h=this.o.presentationTimeline.getDuration();if(Infinity==h)throw new L(1,4,4033);a={id:this.bd++,originalId:null,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:Mi(0,h,[a]),mimeType:d||"",codecs:e||"",kind:c,encrypted:!1,drmInfos:[],
keyIds:new Set,language:b,label:f||null,type:Ee,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!!g,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null};if(!Ve(Pe(a.mimeType,a.codecs)))throw new L(2,2,2014,d);this.o.textStreams.push(a);jl(this);return lg(a)};
q.ve=function(a,b,c,d,e,f,g){g=void 0===g?!1:g;var h=this,k,l,m,n,p,r,u,x,w,y,D,C;return J(function(B){switch(B.a){case 1:if(h.g!=bl&&h.g!=ll)throw new L(1,7,7004);if(d){B.m(2);break}k=ji(a);if(d={sbv:"text/x-subviewer",srt:"text/srt",vtt:"text/vtt",webvtt:"text/vtt",ttml:"application/ttml+xml",lrc:"application/x-subtitle-lrc",ssa:"text/x-ssa",ass:"text/x-ssa"}[k]){B.m(3);break}A(B,4);return v(B,li(a,h.K,h.i.streaming.retryParameters),6);case 6:d=B.b;wa(B,3);break;case 4:E(B);case 3:if(!d)throw new L(1,
2,2011,k);case 2:if(h.g!=ll){B.m(7);break}if("text/vtt"==d){B.m(8);break}return v(B,Cl(a,h.K,h.i.streaming.retryParameters),9);case 9:l=B.b,m=Dl(h,l,d),n=new Blob([m],{type:"text/vtt"}),a=qf(n),d="text/vtt";case 8:g&&(c="forced");p=document.createElement("track");p.src=a;p.label=f||"";p.kind=c;p.srclang=b;h.a.getAttribute("crossorigin")||h.a.setAttribute("crossorigin","anonymous");h.a.appendChild(p);r=h.ub();if(u=r.find(function(F){return F.language==b&&F.label==(f||"")&&F.kind==c}))return jl(h),
B["return"](u);throw new L(1,2,2012);case 7:x=Fe;w=h.o.presentationTimeline.getDuration();if(Infinity==w)throw new L(1,4,4033);y={id:h.bd++,originalId:null,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:Mi(0,w,[a]),mimeType:d||"",codecs:e||"",kind:c,encrypted:!1,drmInfos:[],keyIds:new Set,language:b,label:f||null,type:x.$,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!!g,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null};D=Pe(y.mimeType,
y.codecs);C=Ve(D);if(!C)throw new L(2,2,2014,d);h.o.textStreams.push(y);jl(h);return B["return"](lg(y))}})};function Cl(a,b,c){var d,e,f;return J(function(g){if(1==g.a)return d=kh,e=eh([a],c),e.method="GET",v(g,b.request(d,e).promise,2);f=g.b;return g["return"](f.data)})}function Dl(a,b,c){var d=We[c];if(d)return c=d(),a={periodStart:0,segmentStart:0,segmentEnd:a.a.duration},b=pb(b),b=c.parseMedia(b,a),Sj(b);throw new L(2,2,2014,c);}q.Fd=function(a,b){this.$c.width=a;this.$c.height=b};
q.xd=function(){if(this.g==bl){var a=this.c;if(a.F.a)a=!1;else if(a.g)a=!1;else{for(var b=t(a.a.values()),c=b.next();!c.done;c=b.next())c=c.value,c.Qb&&(c.Qb=!1,gj(a,c,.1));a=!0}}else a=!1;return a};q.Oe=function(){Ua("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");return this.o};q.Pe=function(){return this.jc};
function jk(a){var b=Xj();b.streaming.failureCallback=function(c){var d=[1001,1002,1003];a.U()&&d.includes(c.code)&&(c.severity=1,a.xd())};b.textDisplayFactory=function(){return a.lc?new Nj(a.a,a.lc):new Ij(a.a)};return b}q.ne=function(a){this.lc=a};
function Nk(a,b){for(var c=new Set,d=t(b.textStreams),e=d.next();!e.done;e=d.next())e=e.value,"application/cea-608"!=e.mimeType&&"application/cea-708"!=e.mimeType||c.add(e.originalId);d=t(b.variants);for(e=d.next();!e.done;e=d.next())if((e=e.value.video)&&e.closedCaptions)for(var f=t(e.closedCaptions.keys()),g=f.next();!g.done;g=f.next())if(g=g.value,!c.has(g)){var h=g.startsWith("CC")?"application/cea-608":"application/cea-708",k=new Ni;h={id:a.bd++,originalId:g,createSegmentIndex:function(){return Promise.resolve()},
segmentIndex:k,mimeType:h,codecs:"",kind:"caption",encrypted:!1,drmInfos:[],keyIds:new Set,language:e.closedCaptions.get(g),label:null,type:Ee,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:e.roles,forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null};b.textStreams.push(h);c.add(g)}}q.qc=function(a){var b=this;return J(function(c){if(1==c.a)return v(c,El(b,a),2);vl(b,a);z(c)})};
function El(a,b){var c;return J(function(d){if(1==d.a)return c=a.c?a.c.b:null,v(d,Zf(a.h,c,b,a.i.useMediaCapabilities),2);il(b);z(d)})}
function vl(a,b){if(a.g!=zk){for(var c=a.i.restrictions,d=a.$c,e=!1,f=t(b.variants),g=f.next();!g.done;g=f.next()){g=g.value;var h=g.allowedByApplication;g.allowedByApplication=Yf(g,c,d);h!=g.allowedByApplication&&(e=!0)}e&&a.c&&jl(a);if((c=a.h?a.h.c:null)&&a.h.h)for(d=t(b.variants),e=d.next();!e.done;e=d.next())for(e=e.value,e=t((e.video?e.video.drmInfos:[]).concat(e.audio?e.audio.drmInfos:[])),f=e.next();!f.done;f=e.next())if(f=f.value,f.keySystem==c.keySystem)for(f=t(f.initData||[]),g=f.next();!g.done;g=
f.next())g=g.value,Kh(a.h,g.initDataType,g.initData);Fl(a,b)}}
function gl(a,b){var c,d,e,f,g;return J(function(h){if(1==h.a)return c=a.audio,d=a.video,e=function(k,l){var m,n;return J(function(p){if(1==p.a)return k?v(p,k.createSegmentIndex(),2):p["return"](null);m=k.segmentIndex[Symbol.iterator]().seek(l);if(!m)return p["return"](null);n=m.startTime;return p["return"](n)})},v(h,e(c,b),2);if(3!=h.a)return f=h.b,v(h,e(d,b),3);g=h.b;return null!=g&&null!=f?h["return"](Math.max(g,f)):null!=g?h["return"](g):null!=f?h["return"](f):h["return"](b)})}
function Ik(a){var b=a.hd();if(a.f&&a.C&&a.v){var c=a.A;c.f=b;Pi(c);Uk(a)}a.dispatchEvent(wk(Gl,{buffering:b}))}function Vk(a){var b=a.a.playbackRate;0!=b&&(a.A&&a.A.set(b),b=wk(Hl),a.dispatchEvent(b))}function Uk(a){if(a.f&&a.C){var b=a.f.b;a.C.a==Kg?bk(b,"buffering"):a.a.paused?bk(b,"paused"):a.a.ended?bk(b,"ended"):bk(b,"playing")}}
function dl(a){try{Fl(a,a.o)}catch(c){return Gk(a,c),!1}var b=a.o.variants.filter(function(c){return rg(c)});b=a.ja.create(b);a.l.setVariants(Array.from(b.values()));return!0}function wl(a){var b;if(b=dl(a)?a.l.chooseVariant():null)yl(a,b,!0,!0,0),Xk(a)}function yl(a,b,c,d,e){var f=a.c.b;b!=f&&(fk(a.f.a,b,c),kj(a.c,b,d,e),c=null,f&&(c=kg(f)),b=kg(b),Il(a,c,b))}function zl(a,b){var c=Array.from(a.a.audioTracks).find(function(e){return e.enabled});b.enabled=!0;c=pg(c);var d=pg(b);Il(a,c,d)}
function el(a,b,c){a=Kf(a.i.preferredTextLanguage);b=Kf(b.language);c=Kf(c.language);return Jf(c,a)&&!Jf(b,c)}function Xk(a){var b=wk(Jl);Kl(a,b)}function jl(a){var b=wk(Ll);Kl(a,b)}function Il(a,b,c){b=wk(Ml,{pg:b,og:c});Kl(a,b)}function xl(a){var b=wk(Nl);Kl(a,b)}function fl(a){var b=wk(Ol);Kl(a,b)}function hl(a){var b=wk(Pl,{ng:a.i.abr.enabled});Kl(a,b)}function Gk(a,b){if(a.g!=zk){var c=wk(Ql,{detail:b});a.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0)}}
function Lk(a,b,c){a.dispatchEvent(wk(b,{detail:{schemeIdUri:c.schemeIdUri,value:c.value,startTime:c.startTime,endTime:c.endTime,id:c.id,eventElement:c.eventElement}}))}function Fk(a){if(!a.a.error)return null;var b=a.a.error.code;if(1==b)return null;var c=a.a.error.msExtendedCode;c&&(0>c&&(c+=Math.pow(2,32)),c=c.toString(16));return new L(2,3,3016,b,c,a.a.error.message)}
function Rk(a,b){if(a.c){var c=Object.keys(b),d=1==c.length&&"00"==c[0],e=!1;if(c.length){c=t(a.o.variants);for(var f=c.next();!f.done;f=c.next()){f=f.value;var g=[];f.audio&&g.push(f.audio);f.video&&g.push(f.video);g=t(g);for(var h=g.next();!h.done;h=g.next()){var k=h.value;h=f.allowedByKeySystem;if(k.keyIds.size){f.allowedByKeySystem=!0;k=t(k.keyIds);for(var l=k.next();!l.done;l=k.next())l=l.value,l=b[d?"00":l],f.allowedByKeySystem=f.allowedByKeySystem&&!!l&&!Rl.includes(l)}h!=f.allowedByKeySystem&&
(e=!0)}}}e&&dl(a);(d=a.c.b)&&!d.allowedByKeySystem&&wl(a);e&&jl(a)}}function Sk(a,b,c){if(a.j&&a.j.onExpirationUpdated)a.j.onExpirationUpdated(b,c);b=wk(Sl);a.dispatchEvent(b)}function Wk(a,b,c){0<b&&(a.U()||a.me(b));b=a.getDuration();c<b&&(a.U()||a.Fa(c))}
function Fl(a,b){var c=a.h?a.h.tc():{},d=Object.keys(c);d=d.length&&"00"==d[0];for(var e=!1,f=!1,g=new Set,h=new Set,k=t(b.variants),l=k.next();!l.done;l=k.next()){l=l.value;var m=[];l.audio&&m.push(l.audio);l.video&&m.push(l.video);m=t(m);for(var n=m.next();!n.done;n=m.next())if(n=n.value,n.keyIds.size){n=t(n.keyIds);for(var p=n.next();!p.done;p=n.next()){p=p.value;var r=c[d?"00":p];r?Rl.includes(r)&&h.add(r):g.add(p)}}l.allowedByApplication?l.allowedByKeySystem&&(e=!0):f=!0}if(!e)throw c={hasAppRestrictions:f,
missingKeys:Array.from(g),restrictedKeyStatuses:Array.from(h)},new L(2,4,4012,c);}function il(a){if(!a.variants.some(rg))throw new L(2,4,4032);}function Kl(a,b){J(function(c){if(1==c.a)return v(c,Promise.resolve(),2);a.g!=zk&&a.dispatchEvent(b);z(c)})}function Bl(a){var b=new Set;a=t(a);for(var c=a.next();!c.done;c=a.next())c=c.value,c.language?b.add(Kf(c.language)):b.add("und");return b}
function Al(a){var b=new Map,c=new Map;a=t(a);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e="und",f=[];d.language&&(e=Kf(d.language));"variant"==d.type?f=d.audioRoles:f=d.roles;f&&f.length||(f=[""]);b.has(e)||b.set(e,new Set);f=t(f);for(var g=f.next();!g.done;g=f.next())g=g.value,b.get(e).add(g),d.label&&(c.has(e)||c.set(e,new Map),c.get(e).set(g,d.label))}var h=[];b.forEach(function(k,l){for(var m=t(k),n=m.next();!n.done;n=m.next()){n=n.value;var p=null;c.has(l)&&c.get(l).has(n)&&(p=c.get(l).get(n));
h.push({language:l,role:n,label:p})}});return h}function Ak(){return new L(2,7,7E3)}function vk(a,b,c,d,e,f){return d==a&&e.B==f.B&&e.uri==f.uri&&e.mimeType==f.mimeType?b:c}function Cj(){return{B:null,mimeType:null,startTime:null,Id:NaN,uri:null}}function Bk(a){return new Promise(function(b,c){a.fb=function(){return c(Ak())};a.yc=function(){return b()};a.onError=function(d){return c(d)};a.Ac=function(){return c(Ak())}})}K("shaka.Player",U);U.prototype.setVideoContainer=U.prototype.ne;
U.prototype.getManifestParserFactory=U.prototype.Pe;U.prototype.getManifest=U.prototype.Oe;U.prototype.retryStreaming=U.prototype.xd;U.prototype.setMaxHardwareResolution=U.prototype.Fd;U.prototype.addTextTrackAsync=U.prototype.ve;U.prototype.addTextTrack=U.prototype.addTextTrack;U.prototype.getStats=U.prototype.getStats;U.prototype.getBufferedInfo=U.prototype.rc;U.prototype.getPresentationStartTimeAsDate=U.prototype.Ud;U.prototype.getPlayheadTimeAsDate=U.prototype.Ve;
U.prototype.setTextTrackVisibility=U.prototype.Df;U.prototype.isTextTrackVisible=U.prototype.jd;U.prototype.selectVariantsByLabel=U.prototype.xf;U.prototype.selectTextLanguage=U.prototype.Cd;U.prototype.selectAudioLanguage=U.prototype.Bd;U.prototype.getTextLanguages=U.prototype.Ze;U.prototype.getAudioLanguages=U.prototype.He;U.prototype.getTextLanguagesAndRoles=U.prototype.$e;U.prototype.getAudioLanguagesAndRoles=U.prototype.Ie;U.prototype.selectVariantTrack=U.prototype.je;
U.prototype.selectTextTrack=U.prototype.ie;U.prototype.getThumbnails=U.prototype.af;U.prototype.getImageTracks=U.prototype.Le;U.prototype.getTextTracks=U.prototype.ub;U.prototype.getVariantTracks=U.prototype.gd;U.prototype.cancelTrickPlay=U.prototype.ze;U.prototype.trickPlay=U.prototype.Ff;U.prototype.getPlaybackRate=U.prototype.Te;U.prototype.isBuffering=U.prototype.hd;U.prototype.getKeyStatuses=U.prototype.tc;U.prototype.getExpiration=U.prototype.Mb;U.prototype.drmInfo=U.prototype.drmInfo;
U.prototype.keySystem=U.prototype.keySystem;U.prototype.seekRange=U.prototype.zd;U.prototype.isAudioOnly=U.prototype.df;U.prototype.isInProgress=U.prototype.eb;U.prototype.isLive=U.prototype.U;U.prototype.getAdManager=U.prototype.Td;U.prototype.getAssetUri=U.prototype.fd;U.prototype.getNetworkingEngine=U.prototype.Nb;U.prototype.getMediaElement=U.prototype.Re;U.prototype.getLoadMode=U.prototype.Ne;U.prototype.resetConfiguration=U.prototype.wf;U.prototype.getConfiguration=U.prototype.getConfiguration;
U.prototype.configure=U.prototype.configure;U.prototype.load=U.prototype.load;U.prototype.unload=U.prototype.Kd;U.prototype.detach=U.prototype.detach;U.prototype.attach=U.prototype.Hb;
U.probeSupport=function(a){a=void 0===a?!0:a;var b,c,d,e,f,g;return J(function(h){if(1==h.a)return b={},a?v(h,bi(),3):h.m(2);2!=h.a&&(b=h.b);var k={};if($b()){for(var l in ii)k[l]=!0;for(var m in ki)k[m]=!0}l={mpd:"application/dash+xml",m3u8:"application/x-mpegurl",ism:"application/vnd.ms-sstr+xml"};m=t(["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"]);for(var n=m.next();!n.done;n=m.next())n=n.value,k[n]=$b()?!!ii[n]:ac(n);for(var p in l)k[p]=
$b()?!!ki[p]:ac(l[p]);c=k;k={};p=t('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(","));
for(l=p.next();!l.done;l=p.next())l=l.value,k[l]=$b()?Ve(l)?!0:MediaSource.isTypeSupported(l)||Le(l):ac(l),m=l.split(";")[0],k[m]=k[m]||k[l];d=k;e={manifest:c,media:d,drm:b};f=Tl;for(g in f)e[g]=f[g]();return h["return"](e)})};
U.isBrowserSupported=function(){window.Promise||Ua("A Promise implementation or polyfill is required");window.TextDecoder&&window.TextEncoder||Ua("A TextDecoder/TextEncoder implementation or polyfill is required");if(!(window.Promise&&window.Uint8Array&&window.TextDecoder&&window.TextEncoder&&Array.prototype.forEach)||dc("Trident/"))return!1;var a=gc();return a&&12>a||!(window.MediaKeys&&window.navigator&&window.navigator.requestMediaKeySystemAccess&&window.MediaKeySystemAccess&&window.MediaKeySystemAccess.prototype.getConfiguration)?
!1:$b()?!0:ac("application/x-mpegurl")};U.setAdManagerFactory=function(a){lk=a};U.registerSupportPlugin=function(a,b){Tl[a]=b};U.prototype.destroy=U.prototype.destroy;
var Pl="abrstatuschanged",Jl="adaptation",Gl="buffering",Tk="drmsessionupdate",zj="emsg",Ql="error",Sl="expirationupdated",Ek="loaded",Ck="loading",Ok="manifestparsed",ql="metadata",xk="onstatechange",yk="onstateidle",Hl="ratechange",cl="streaming",Nl="textchanged",Ol="texttrackvisibility",Mk="timelineregionadded",sl="timelineregionenter",tl="timelineregionexit",Ll="trackschanged",Hk="unloading",Ml="variantchanged",Ul={Mf:Pl,Nf:Jl,Of:Gl,Pf:Tk,Rf:zj,Error:Ql,Sf:Sl,Uf:"largegap",Vf:Ek,Wf:Ck,Xf:Ok,Metadata:ql,
Yf:xk,Zf:yk,$f:Hl,ag:"sessiondata",bg:cl,cg:Nl,dg:Ol,eg:Mk,fg:sl,gg:tl,hg:Ll,ig:Hk,jg:Ml},zk=0,ik=1,bl=2,ll=3;U.LoadMode={DESTROYED:zk,NOT_LOADED:ik,MEDIA_SOURCE:bl,SRC_EQUALS:ll};U.version="v3.1.0";var Vl=["3","1"];Ib=new function(a){this.a=a;this.c=Jb;this.b=Kb}(new Gb(Number(Vl[0]),Number(Vl[1])));var Rl=["output-restricted","internal-error"],Tl={},lk=null;function Wl(){this.a=[];this.f=this.b=this.c=0};function V(a,b){var c=this;this.c=a;this.a=b;this.f=!1;this.g=this.a.getVolume();this.b=new ff;this.b.s(this.a,google.ima.AdEvent.Type.PAUSED,function(){c.f=!0});this.b.s(this.a,google.ima.AdEvent.Type.RESUMED,function(){c.f=!1})}q=V.prototype;q.getDuration=function(){return this.c.getDuration()};q.getMinSuggestedDuration=function(){return this.c.getMinSuggestedDuration()};q.getRemainingTime=function(){return this.a.getRemainingTime()};q.isPaused=function(){return this.f};
q.isSkippable=function(){return 0<=this.c.getSkipTimeOffset()};q.getTimeUntilSkippable=function(){var a=this.c.getSkipTimeOffset();a=this.getRemainingTime()-a;return Math.max(a,0)};q.canSkipNow=function(){return this.a.getAdSkippableState()};q.skip=function(){return this.a.skip()};q.pause=function(){return this.a.pause()};q.play=function(){return this.a.resume()};q.getVolume=function(){return this.a.getVolume()};q.setVolume=function(a){return this.a.setVolume(a)};q.isMuted=function(){return 0==this.a.getVolume()};
q.resize=function(a,b){this.a.resize(a,b,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)};q.setMuted=function(a){a?(this.g=this.getVolume(),this.setVolume(0)):this.setVolume(this.g)};q.getSequenceLength=function(){var a=this.c.getAdPodInfo();return null==a?1:a.getTotalAds()};q.getPositionInSequence=function(){var a=this.c.getAdPodInfo();return null==a?1:a.getAdPosition()};q.release=function(){this.a=this.c=null};K("shaka.ads.ClientSideAd",V);
V.prototype.release=V.prototype.release;V.prototype.getPositionInSequence=V.prototype.getPositionInSequence;V.prototype.getSequenceLength=V.prototype.getSequenceLength;V.prototype.setMuted=V.prototype.setMuted;V.prototype.resize=V.prototype.resize;V.prototype.isMuted=V.prototype.isMuted;V.prototype.setVolume=V.prototype.setVolume;V.prototype.getVolume=V.prototype.getVolume;V.prototype.play=V.prototype.play;V.prototype.pause=V.prototype.pause;V.prototype.skip=V.prototype.skip;
V.prototype.canSkipNow=V.prototype.canSkipNow;V.prototype.getTimeUntilSkippable=V.prototype.getTimeUntilSkippable;V.prototype.isSkippable=V.prototype.isSkippable;V.prototype.isPaused=V.prototype.isPaused;V.prototype.getRemainingTime=V.prototype.getRemainingTime;V.prototype.getMinSuggestedDuration=V.prototype.getMinSuggestedDuration;V.prototype.getDuration=V.prototype.getDuration;function Xl(a,b,c,d){var e=this;this.h=a;this.a=b;this.l=NaN;this.f=d;this.j=null;this.b=new ff;google.ima.settings.setLocale(c);a=new google.ima.AdDisplayContainer(this.h,this.a);a.initialize();this.g=new google.ima.AdsLoader(a);this.g.getSettings().setPlayerType("shaka-player");this.g.getSettings().setPlayerVersion("v3.1.0");this.c=null;this.b.qa(this.g,google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(f){Yl(e,f)});this.b.s(this.g,google.ima.AdErrorEvent.Type.AD_ERROR,function(f){Zl(e,
f)});this.a.onended=function(){e.g.contentComplete()}}Xl.prototype.stop=function(){this.c&&this.c.stop();this.h&&Mj(this.h)};function Zl(a,b){b.getError();$l(a,null);a.f(new O("ad-cue-points-changed",{cuepoints:[]}))}
function Yl(a,b){a.f(new O("ads-loaded",{loadTime:Date.now()/1E3-a.l}));a.c=b.getAdsManager(a.a);a.f(new O("ima-ad-manager-loaded",{imaAdManager:a.c}));var c=a.c.getCuePoints();if(c.length){var d=[];c=t(c);for(var e=c.next();!e.done;e=c.next())d.push(new am(e.value));a.f(new O("ad-cue-points-changed",{cuepoints:d}))}bm(a);try{a.c.init(a.a.offsetWidth,a.a.offsetHeight,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL),a.b.s(a.a,"loadeddata",function(){a.c.resize(a.a.offsetWidth,
a.a.offsetHeight,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)}),a.c.start()}catch(f){$l(a,null)}}
function bm(a){a.b.s(a.c,google.ima.AdErrorEvent.Type.AD_ERROR,function(b){Zl(a,b)});a.b.s(a.c,google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,function(b){cm(a,b)});a.b.s(a.c,google.ima.AdEvent.Type.STARTED,function(b){cm(a,b)});a.b.s(a.c,google.ima.AdEvent.Type.FIRST_QUARTILE,function(b){a.f(new O("ad-first-quartile",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.MIDPOINT,function(b){a.f(new O("ad-midpoint",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.THIRD_QUARTILE,function(b){a.f(new O("ad-third-quartile",
{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.COMPLETE,function(b){a.f(new O("ad-complete",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,function(b){$l(a,b)});a.b.s(a.c,google.ima.AdEvent.Type.ALL_ADS_COMPLETED,function(b){$l(a,b)});a.b.s(a.c,google.ima.AdEvent.Type.SKIPPED,function(b){a.f(new O("ad-skipped",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.VOLUME_CHANGED,function(b){a.f(new O("ad-volume-changed",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.VOLUME_MUTED,
function(b){a.f(new O("ad-muted",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.PAUSED,function(b){a.j.f=!0;a.f(new O("ad-paused",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.RESUMED,function(b){a.j.f=!1;a.f(new O("ad-resumed",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,function(b){a.f(new O("ad-skip-state-changed",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.CLICK,function(b){a.f(new O("ad-clicked",{originalEvent:b}))});a.b.s(a.c,
google.ima.AdEvent.Type.AD_PROGRESS,function(b){a.f(new O("ad-progress",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.AD_BUFFERING,function(b){a.f(new O("ad-buffering",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.IMPRESSION,function(b){a.f(new O("ad-impression",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.DURATION_CHANGE,function(b){a.f(new O("ad-duration-changed",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.USER_CLOSE,function(b){a.f(new O("ad-closed",{originalEvent:b}))});
a.b.s(a.c,google.ima.AdEvent.Type.LOADED,function(b){a.f(new O("ad-loaded",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.ALL_ADS_COMPLETED,function(b){a.f(new O("all-ads-completed",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.LINEAR_CHANGED,function(b){a.f(new O("ad-linear-changed",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.AD_METADATA,function(b){a.f(new O("ad-metadata",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.LOG,function(b){a.f(new O("ad-recoverable-error",
{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.AD_BREAK_READY,function(b){a.f(new O("ad-break-ready",{originalEvent:b}))});a.b.s(a.c,google.ima.AdEvent.Type.INTERACTION,function(b){a.f(new O("ad-interaction",{originalEvent:b}))})}function cm(a,b){var c=b.getAd();a.j=new V(c,a.c);a.f(new O("ad-started",{ad:a.j,sdkAdObject:c,originalEvent:b}));a.h.setAttribute("ad-active","true");a.a.pause()}
function $l(a,b){a.f(new O("ad-stopped",{originalEvent:b}));a.h.removeAttribute("ad-active");a.a.play()};function X(a,b){this.c=a;this.b=null;this.a=b}q=X.prototype;q.getDuration=function(){return this.b?this.b.duration:-1};q.getMinSuggestedDuration=function(){return this.getDuration()};q.getRemainingTime=function(){return this.b?this.b.duration-this.b.currentTime:-1};q.isPaused=function(){return this.a.paused};q.isSkippable=function(){return this.c.isSkippable()};q.getTimeUntilSkippable=function(){var a=this.c.getSkipTimeOffset();a=this.getRemainingTime()-a;return Math.max(a,0)};
q.canSkipNow=function(){return 0==this.getTimeUntilSkippable()};q.skip=function(){this.a.currentTime+=this.getRemainingTime()};q.pause=function(){return this.a.pause()};q.play=function(){return this.a.play()};q.getVolume=function(){return this.a.volume};q.setVolume=function(a){this.a.volume=a};q.isMuted=function(){return this.a.muted};q.resize=function(){};q.setMuted=function(a){this.a.muted=a};q.getSequenceLength=function(){var a=this.c.getAdPodInfo();return null==a?1:a.getTotalAds()};
q.getPositionInSequence=function(){var a=this.c.getAdPodInfo();return null==a?1:a.getAdPosition()};q.release=function(){this.a=this.b=this.c=null};K("shaka.ads.ServerSideAd",X);X.prototype.release=X.prototype.release;X.prototype.getPositionInSequence=X.prototype.getPositionInSequence;X.prototype.getSequenceLength=X.prototype.getSequenceLength;X.prototype.setMuted=X.prototype.setMuted;X.prototype.resize=X.prototype.resize;X.prototype.isMuted=X.prototype.isMuted;X.prototype.setVolume=X.prototype.setVolume;
X.prototype.getVolume=X.prototype.getVolume;X.prototype.play=X.prototype.play;X.prototype.pause=X.prototype.pause;X.prototype.skip=X.prototype.skip;X.prototype.canSkipNow=X.prototype.canSkipNow;X.prototype.getTimeUntilSkippable=X.prototype.getTimeUntilSkippable;X.prototype.isSkippable=X.prototype.isSkippable;X.prototype.isPaused=X.prototype.isPaused;X.prototype.getRemainingTime=X.prototype.getRemainingTime;X.prototype.getMinSuggestedDuration=X.prototype.getMinSuggestedDuration;
X.prototype.getDuration=X.prototype.getDuration;function dm(a,b,c,d){var e=this;this.v=a;this.a=b;this.g=null;this.D=NaN;this.f=d;this.C=!1;this.A=this.h=this.j=null;this.l="";this.b=new ff;a=new google.ima.dai.api.UiSettings;a.setLocale(c);this.c=new google.ima.dai.api.StreamManager(this.a,this.v,a);this.f(new O("ima-stream-manager-loaded",{imaStreamManager:this.c}));this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.LOADED,function(f){em(e,f)});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.ERROR,function(){e.l.length?e.g.resolve(e.l):
e.g.reject("IMA Stream request returned an error and there was no backup asset uri provided.");e.g=null});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED,function(){});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.STARTED,function(f){f=f.getAd();e.h=new X(f,e.a);e.A&&(e.h.b=e.A);e.f(new O("ad-started",{ad:e.h}));e.v.setAttribute("ad-active","true")});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED,function(){e.v.removeAttribute("ad-active");var f=e.a.currentTime;
e.j&&e.j>f&&(e.a.currentTime=e.j,e.j=null)});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.AD_PROGRESS,function(f){e.A=f.getStreamData().adProgressData;e.h&&(e.h.b=e.A)});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE,function(){e.f(new O("ad-first-quartile"))});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.MIDPOINT,function(){e.f(new O("ad-midpoint"))});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE,function(){e.f(new O("ad-third-quartile"))});
this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.COMPLETE,function(){e.f(new O("ad-complete"));e.f(new O("ad-stopped"));e.v.removeAttribute("ad-active");e.h=null});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.SKIPPED,function(){e.f(new O("ad-skipped"));e.f(new O("ad-stopped"))});this.b.s(this.c,google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED,function(f){var g=f.getStreamData();f=[];g=t(g.cuepoints);for(var h=g.next();!h.done;h=g.next())h=h.value,f.push(new am(h.start,h.end));e.f(new O("ad-cue-points-changed",
{cuepoints:f}))})}dm.prototype.stop=function(){this.c.reset();this.l="";this.j=null};dm.prototype.onCueMetadataChange=function(a){if(a.key&&a.data){var b={};b[a.key]=a.data;this.c.onTimedMetadata(b)}};
function em(a,b){a.f(new O("ads-loaded",{loadTime:Date.now()/1E3-a.D}));var c=b.getStreamData().url;a.g.resolve(c);a.g=null;a.C||a.b.s(a.a,"seeked",function(){var d=a.a.currentTime;if(0!=d){a.c.streamTimeForContentTime(d);var e=a.c.previousCuePointForStreamTime(d);e&&!e.played&&(a.j=d,a.a.currentTime=e.start)}})};function Y(){Wg.call(this);this.a=this.b=null;this.f=new Wl;this.c=navigator.language}ra(Y,Wg);q=Y.prototype;q.setLocale=function(a){this.c=a};q.initClientSide=function(a,b){var c=this;if(!window.google||!google.ima||!google.ima.AdsLoader)throw new L(2,10,1E4);this.b=new Xl(a,b,this.c,function(d){if(d&&d.type)switch(d.type){case "ads-loaded":c.f.a.push(d.loadTime);break;case "ad-started":c.f.c++;break;case "ad-complete":c.f.b++;break;case "ad-skipped":c.f.f++}c.dispatchEvent(d)})};
q.onAssetUnload=function(){this.b&&this.b.stop();this.dispatchEvent(new O("ad-stopped"));this.f=new Wl};q.requestClientSideAds=function(a){if(!this.b)throw new L(1,10,10001);var b=this.b;b.l=Date.now()/1E3;b.g.requestAds(a)};
q.initServerSide=function(a,b){var c=this;if(!window.google||!google.ima||!google.ima.dai)throw new L(2,10,10002);this.a=new dm(a,b,this.c,function(d){if(d&&d.type)switch(d.type){case "ads-loaded":c.f.a.push(d.loadTime);break;case "ad-started":c.f.c++;break;case "ad-complete":c.f.b++;break;case "ad-skipped":c.f.f++}c.dispatchEvent(d)})};
q.requestServerSideStream=function(a,b){b=void 0===b?"":b;if(!this.a)throw new L(1,10,10003);a.adTagParameters||(a.adTagParameters={});var c=a.adTagParameters;(c.mpt||c.mpv)&&Ua('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');a.adTagParameters.mpt="shaka-player";a.adTagParameters.mpv="v3.1.0";c=this.a;var d=b;c.g?c=Promise.reject(new L(1,10,10004)):(a instanceof google.ima.dai.api.LiveStreamRequest&&
(c.C=!0),c.g=new Ge,c.c.requestStream(a),c.l=d||"",c.D=Date.now()/1E3,c=c.g);return c};q.replaceServerSideAdTagParameters=function(a){if(!this.a)throw new L(1,10,10003);(a.mpt||a.mpv)&&Ua('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');a.mpt="Shaka Player";a.mpv="v3.1.0";this.a.c.replaceAdTagParameters(a)};
q.getStats=function(){var a=this.f;return{loadTimes:a.a,started:a.c,playedCompletely:a.b,skipped:a.f}};q.onDashTimedMetadata=function(a){if(this.a&&"urn:google:dai:2018"==a.schemeIdUri){var b=a.schemeIdUri,c=a.eventElement?a.eventElement.getAttribute("messageData"):null;this.a.c.processMetadata(b,c,a.startTime)}};q.onHlsTimedMetadata=function(a,b){this.a&&this.a.c.processMetadata("ID3",a.data,b)};q.onCueMetadataChange=function(a){if(this.a)this.a.onCueMetadataChange(a)};K("shaka.ads.AdManager",Y);
Y.prototype.onCueMetadataChange=Y.prototype.onCueMetadataChange;Y.prototype.onHlsTimedMetadata=Y.prototype.onHlsTimedMetadata;Y.prototype.onDashTimedMetadata=Y.prototype.onDashTimedMetadata;Y.prototype.getStats=Y.prototype.getStats;Y.prototype.replaceServerSideAdTagParameters=Y.prototype.replaceServerSideAdTagParameters;Y.prototype.requestServerSideStream=Y.prototype.requestServerSideStream;Y.prototype.initServerSide=Y.prototype.initServerSide;Y.prototype.requestClientSideAds=Y.prototype.requestClientSideAds;
Y.prototype.onAssetUnload=Y.prototype.onAssetUnload;Y.prototype.initClientSide=Y.prototype.initClientSide;Y.prototype.setLocale=Y.prototype.setLocale;function am(a,b){this.start=a;this.end=void 0===b?null:b}Y.ADS_LOADED="ads-loaded";Y.AD_STARTED="ad-started";Y.AD_FIRST_QUARTILE="ad-first-quartile";Y.AD_MIDPOINT="ad-midpoint";Y.AD_THIRD_QUARTILE="ad-third-quartile";Y.AD_COMPLETE="ad-complete";Y.AD_STOPPED="ad-stopped";Y.AD_SKIPPED="ad-skipped";Y.AD_VOLUME_CHANGED="ad-volume-changed";Y.AD_MUTED="ad-muted";
Y.AD_PAUSED="ad-paused";Y.AD_RESUMED="ad-resumed";Y.AD_SKIP_STATE_CHANGED="ad-skip-state-changed";Y.CUEPOINTS_CHANGED="ad-cue-points-changed";Y.IMA_AD_MANAGER_LOADED="ima-ad-manager-loaded";Y.IMA_STREAM_MANAGER_LOADED="ima-stream-manager-loaded";Y.AD_CLICKED="ad-clicked";Y.AD_PROGRESS="ad-progress";Y.AD_BUFFERING="ad-buffering";Y.AD_IMPRESSION="ad-impression";Y.AD_DURATION_CHANGED="ad-duration-changed";Y.AD_CLOSED="ad-closed";Y.AD_LOADED="ad-loaded";Y.ALL_ADS_COMPLETED="all-ads-completed";
Y.AD_LINEAR_CHANGED="ad-linear-changed";Y.AD_METADATA="ad-metadata";Y.AD_RECOVERABLE_ERROR="ad-recoverable-error";Y.AD_BREAK_READY="ad-break-ready";Y.AD_INTERACTION="ad-interaction";lk=function(){return new Y};function fm(a){return JSON.stringify(a,function(b,c){if("function"!=typeof c){if(c instanceof Event||c instanceof O){var d={};for(f in c){var e=c[f];e&&"object"==typeof e?"detail"==f&&(d[f]=e):f in Event||(d[f]=e)}return d}if(c instanceof Error){var f=new Set(["name","message","stack"]);for(d in c)f.add(d);e=t(Object.getOwnPropertyNames(c));for(d=e.next();!d.done;d=e.next())f.add(d.value);e={};f=t(f);for(d=f.next();!d.done;d=f.next())d=d.value,e[d]=c[d];f={__type__:"Error",contents:e}}else if(c instanceof
TimeRanges)for(f={__type__:"TimeRanges",length:c.length,start:[],end:[]},d=t(je(c)),e=d.next();!e.done;e=d.next()){e=e.value;var g=e.end;f.start.push(e.start);f.end.push(g)}else f=c instanceof Uint8Array?{__type__:"Uint8Array",entries:Array.from(c)}:"number"==typeof c?isNaN(c)?"NaN":isFinite(c)?c:0>c?"-Infinity":"Infinity":c;return f}})}
function gm(a){return JSON.parse(a,function(b,c){if("NaN"==c)var d=NaN;else if("-Infinity"==c)d=-Infinity;else if("Infinity"==c)d=Infinity;else if(c&&"object"==typeof c&&"TimeRanges"==c.__type__)d=hm(c);else if(c&&"object"==typeof c&&"Uint8Array"==c.__type__)d=new Uint8Array(c.entries);else if(c&&"object"==typeof c&&"Error"==c.__type__){d=c.contents;var e=Error(d.message),f;for(f in d)e[f]=d[f];d=e}else d=c;return d})}
function hm(a){return{length:a.length,start:function(b){return a.start[b]},end:function(b){return a.end[b]}}}
var im="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),jm="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),km=["loop","playbackRate"],lm=["pause","play"],mm={getAssetUri:2,getAudioLanguages:4,getAudioLanguagesAndRoles:4,getBufferedInfo:2,getConfiguration:2,getExpiration:2,getKeyStatuses:2,getPlaybackRate:2,getTextLanguages:4,getTextLanguagesAndRoles:4,getTextTracks:2,getStats:5,getVariantTracks:2,
getImageTracks:2,getThumbnails:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1,getLoadMode:10},nm={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},om=[["getConfiguration","configure"]],pm=[["isTextTrackVisible","setTextTrackVisibility"]],qm="addTextTrack addTextTrackAsync cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay".split(" "),
rm=["attach","detach","load","unload"];function sm(a,b,c,d,e,f){var g=this;this.T=a;this.f=new M(b);this.X=c;this.l=!1;this.C=d;this.M=e;this.H=f;this.b=this.h=!1;this.J="";this.j=null;this.v=function(){return tm(g)};this.A=function(h,k){var l=gm(k);switch(l.type){case "event":var m=l.targetName;l=l.event;l=new O(l.type,l);g.C(m,l);break;case "update":m=l.update;for(var n in m){l=g.a[n]||{};for(var p in m[n])l[p]=m[n][p]}g.l&&(g.X(),g.l=!1);break;case "asyncComplete":if(n=l.id,l=l.error,p=g.c[n],delete g.c[n],p)if(l){n=new L(l.severity,
l.category,l.code);for(m in l)n[m]=l[m];p.reject(n)}else p.resolve()}};this.a={video:{},player:{}};this.D=0;this.c={};this.g=null;um.add(this)}q=sm.prototype;q.destroy=function(){um["delete"](this);vm(this);wm&&xm(this);this.f&&(this.f.stop(),this.f=null);this.M=this.C=null;this.b=this.h=!1;this.A=this.v=this.g=this.c=this.a=this.j=null;return Promise.resolve()};q.oa=function(){return this.b};q.vd=function(){return this.J};
q.init=function(){if(this.T.length)if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){this.h=!0;this.f.Yb();var a=new chrome.cast.SessionRequest(this.T);a=new chrome.cast.ApiConfig(a,function(b){for(var c=t(um),d=c.next();!d.done;d=c.next())ym(d.value,b)},function(b){for(var c=t(um),d=c.next();!d.done;d=c.next())d=d.value,zm="available"==b,d.f.Yb()},"origin_scoped");chrome.cast.initialize(a,function(){},function(){});zm&&this.f.N(Am);(a=wm)&&a.status!=chrome.cast.SessionStatus.STOPPED?ym(this,
a):wm=null}else window.__onGCastApiAvailable||(window.__onGCastApiAvailable=Bm),window.__onGCastApiAvailable!=Bm&&Ua("A global Cast SDK hook is already installed! Shaka Player will be unable to receive a notification when the Cast SDK is ready.")};q.Dd=function(a){this.j=a;this.b&&Cm(this,{type:"appData",appData:this.j})};
q.cast=function(a){var b=this;return J(function(c){if(!b.h)throw new L(1,8,8E3);if(!zm)throw new L(1,8,8001);if(b.b)throw new L(1,8,8002);b.g=new Ge;chrome.cast.requestSession(function(d){return Dm(b,a,d)},function(d){return Em(b,d)});return v(c,b.g,0)})};function Fm(a){if(a.b){var b=a.H();chrome.cast.requestSession(function(c){return Dm(a,b,c)},function(c){return Em(a,c)})}}q.qb=function(){if(this.b){vm(this);if(wm){xm(this);try{wm.stop(function(){},function(){})}catch(a){}wm=null}tm(this)}};
q.get=function(a,b){var c=this;if("video"==a){if(lm.includes(b))return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return c.ee.apply(c,[a,b].concat(ia(e)))}}else if("player"==a){if(nm[b]&&!this.get("player","isLive")())return function(){};if(qm.includes(b))return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return c.ee.apply(c,[a,b].concat(ia(e)))};if(rm.includes(b))return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return c.tf.apply(c,
[a,b].concat(ia(e)))};if(mm[b])return function(){return c.a[a][b]}}return this.a[a][b]};q.set=function(a,b,c){this.a[a][b]=c;Cm(this,{type:"set",targetName:a,property:b,value:c})};function Dm(a,b,c){wm=c;c.addUpdateListener(a.v);c.addMessageListener("urn:x-cast:com.google.shaka.v2",a.A);tm(a);Cm(a,{type:"init",initState:b,appData:a.j});a.g.resolve()}
function Em(a,b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006}a.g.reject(new L(2,8,c,b))}q.ee=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];Cm(this,{type:"call",targetName:a,methodName:b,args:d})};q.tf=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];e=new Ge;var f=this.D.toString();this.D++;this.c[f]=e;try{Cm(this,{type:"asyncCall",targetName:a,methodName:b,args:d,id:f})}catch(g){e.reject(g)}return e};
function ym(a,b){var c=a.H();a.g=new Ge;a.l=!0;Dm(a,c,b)}function xm(a){var b=wm;b.removeUpdateListener(a.v);b.removeMessageListener("urn:x-cast:com.google.shaka.v2",a.A)}function tm(a){var b=wm?"connected"==wm.status:!1;if(a.b&&!b){a.M();for(var c in a.a)a.a[c]={};vm(a)}a.b=b;a.J=b?wm.receiver.friendlyName:"";a.f.Yb()}function vm(a){for(var b in a.c){var c=a.c[b];delete a.c[b];c.reject(new L(1,7,7E3))}}
function Cm(a,b){var c=fm(b),d=wm;try{d.sendMessage("urn:x-cast:com.google.shaka.v2",c,function(){},Xa)}catch(e){throw c=new L(2,8,8005,e),d=new O("error",{detail:c}),a.C("player",d),a.qb(),c;}}var Am=.02,zm=!1,wm=null,um=new Set;function Bm(a){if(a){a=t(um);for(var b=a.next();!b.done;b=a.next())b.value.init()}};function Gm(a,b,c){Wg.call(this);var d=this;this.f=a;this.c=b;this.b=this.j=this.g=this.l=this.h=null;this.A=c;this.v=new Map;this.a=new sm(c,function(){return Hm(d)},function(){return Im(d)},function(e,f){return Jm(d,e,f)},function(){return Km(d)},function(){return Lm(d)});Mm(this)}ra(Gm,Wg);q=Gm.prototype;
q.destroy=function(a){a&&this.a.qb();this.b&&(this.b.release(),this.b=null);a=[];this.c&&(a.push(this.c.destroy()),this.c=null);this.a&&(a.push(this.a.destroy()),this.a=null);this.l=this.h=this.f=null;return Promise.all(a)};q.bf=function(){return this.h};q.Ue=function(){return this.l};q.xe=function(){return this.a.h&&zm};q.oa=function(){return this.a.oa()};q.vd=function(){return this.a.vd()};
q.cast=function(){var a=this,b;return J(function(c){return 1==c.a?(b=Lm(a),v(c,a.a.cast(b),2)):a.c?v(c,a.c.Kd(),0):c["return"]()})};q.Dd=function(a){this.a.Dd(a)};q.Ef=function(){Fm(this.a)};q.qb=function(){this.a.qb()};
q.Ae=function(a){var b=this;return J(function(c){if(1==c.a){if(a==b.A)return c["return"]();b.A=a;b.a.qb();return v(c,b.a.destroy(),2)}b.a=null;b.a=new sm(a,function(){return Hm(b)},function(){return Im(b)},function(d,e){return Jm(b,d,e)},function(){return Km(b)},function(){return Lm(b)});b.a.init();z(c)})};
function Mm(a){a.a.init();a.b=new ff;for(var b=t(im),c=b.next();!c.done;c=b.next())a.b.s(a.f,c.value,function(f){a.a.oa()||(f=new O(f.type,f),a.g.dispatchEvent(f))});for(var d in Ul)a.b.s(a.c,Ul[d],function(f){a.a.oa()||a.j.dispatchEvent(f)});a.h={};b={};for(var e in a.f)b.Db=e,Object.defineProperty(a.h,b.Db,{configurable:!1,enumerable:!0,get:function(f){return function(){return Nm(a,f.Db)}}(b),set:function(f){return function(g){var h=f.Db;a.a.oa()?a.a.set("video",h,g):a.f[h]=g}}(b)}),b={Db:b.Db};
a.l={};Om(a,function(f){Object.defineProperty(a.l,f,{configurable:!1,enumerable:!0,get:function(){return Pm(a,f)}})});Qm(a);a.g=new Wg;a.g.hc=a.h;a.j=new Wg;a.j.hc=a.l}function Qm(a){var b=new Map;Om(a,function(c,d){if(b.has(d)){var e=b.get(d);c.length<e.length?a.v.set(c,e):a.v.set(e,c)}else b.set(d,c)})}
function Om(a,b){function c(l){return"constructor"==l||"function"!=typeof d[l]?!1:!e.has(l)}var d=a.c,e=new Set;for(f in d)c(f)&&(e.add(f),b(f,d[f]));var f=Object.getPrototypeOf(d);for(var g=Object.getPrototypeOf({});f&&f!=g;){for(var h=t(Object.getOwnPropertyNames(f)),k=h.next();!k.done;k=h.next())k=k.value,c(k)&&(e.add(k),b(k,d[k]));f=Object.getPrototypeOf(f)}}
function Lm(a){var b={video:{},player:{},playerAfterLoad:{},manifest:a.c.fd(),startTime:null};a.f.pause();for(var c=t(km),d=c.next();!d.done;d=c.next())d=d.value,b.video[d]=a.f[d];a.f.ended||(b.startTime=a.f.currentTime);c=t(om);for(d=c.next();!d.done;d=c.next()){var e=d.value;d=e[1];e=a.c[e[0]]();b.player[d]=e}c=t(pm);for(d=c.next();!d.done;d=c.next())e=d.value,d=e[1],e=a.c[e[0]](),b.playerAfterLoad[d]=e;return b}function Hm(a){var b=new O("caststatuschanged");a.dispatchEvent(b)}
function Im(a){var b=new O(a.h.paused?"pause":"play");a.g.dispatchEvent(b)}
function Km(a){for(var b=t(om),c=b.next();!c.done;c=b.next()){var d=c.value;c=d[1];d=a.a.get("player",d[0])();a.c[c](d)}var e=a.a.get("player","getAssetUri")();c=a.a.get("video","ended");b=Promise.resolve();var f=a.f.autoplay;d=null;c||(d=a.a.get("video","currentTime"));e&&(a.f.autoplay=!1,b=a.c.load(e,d));var g={};c=t(km);for(d=c.next();!d.done;d=c.next())d=d.value,g[d]=a.a.get("video",d);b.then(function(){if(a.f){for(var h=t(km),k=h.next();!k.done;k=h.next())k=k.value,a.f[k]=g[k];h=t(pm);for(k=
h.next();!k.done;k=h.next()){var l=k.value;k=l[1];l=a.a.get("player",l[0])();a.c[k](l)}a.f.autoplay=f;e&&a.f.play()}},function(h){h=new O(Ql,{detail:h});a.c.dispatchEvent(h)})}
function Nm(a,b){if("addEventListener"==b)return function(d,e,f){return a.g.addEventListener(d,e,f)};if("removeEventListener"==b)return function(d,e,f){return a.g.removeEventListener(d,e,f)};if(a.a.oa()&&0==Object.keys(a.a.a.video).length){var c=a.f[b];if("function"!=typeof c)return c}return a.a.oa()?a.a.get("video",b):(c=a.f[b],"function"==typeof c&&(c=c.bind(a.f)),c)}
function Pm(a,b){a.v.has(b)&&(b=a.v.get(b));if("addEventListener"==b)return function(c,d,e){return a.j.addEventListener(c,d,e)};if("removeEventListener"==b)return function(c,d,e){return a.j.removeEventListener(c,d,e)};if("getMediaElement"==b)return function(){return a.h};if("getSharedConfiguration"==b)return a.a.get("player","getConfiguration");if("getNetworkingEngine"==b)return function(){return a.c.Nb()};if("getAdManager"==b)return function(){return a.c.Td()};if("setVideoContainer"==b)return function(c){return a.c.ne(c)};
if(a.a.oa()){if("getManifest"==b||"drmInfo"==b)return function(){Ua(b+"() does not work while casting!");return null};if("attach"==b||"detach"==b)return function(){Ua(b+"() does not work while casting!");return Promise.resolve()}}return a.a.oa()&&0==Object.keys(a.a.a.video).length&&mm[b]||!a.a.oa()?a.c[b].bind(a.c):a.a.get("player",b)}function Jm(a,b,c){a.a.oa()&&("video"==b?a.g.dispatchEvent(c):"player"==b&&a.j.dispatchEvent(c))}K("shaka.cast.CastProxy",Gm);Gm.prototype.changeReceiverId=Gm.prototype.Ae;
Gm.prototype.forceDisconnect=Gm.prototype.qb;Gm.prototype.suggestDisconnect=Gm.prototype.Ef;Gm.prototype.setAppData=Gm.prototype.Dd;Gm.prototype.cast=Gm.prototype.cast;Gm.prototype.receiverName=Gm.prototype.vd;Gm.prototype.isCasting=Gm.prototype.oa;Gm.prototype.canCast=Gm.prototype.xe;Gm.prototype.getPlayer=Gm.prototype.Ue;Gm.prototype.getVideo=Gm.prototype.bf;Gm.prototype.destroy=Gm.prototype.destroy;function Rm(a,b,c,d){Wg.call(this);var e=this;this.a=a;this.c=b;this.b=new ff;this.J={video:a,player:b};this.C=c||function(){};this.M=d||function(f){return f};this.f=null;this.D=!1;this.j=!0;this.h=0;this.A=!1;this.v=!0;this.l=this.g=null;this.H=new M(function(){Wm(e)});Xm(this)}ra(Rm,Wg);q=Rm.prototype;q.isConnected=function(){return this.D};q.ef=function(){return this.j};q.Af=function(a){this.f=a};q.De=function(){this.f=null};
q.Bf=function(a){this.f||(this.f={metadataType:cast.receiver.media.MetadataType.GENERIC});this.f.title=a};q.zf=function(a){this.f||(this.f={metadataType:cast.receiver.media.MetadataType.GENERIC});this.f.images=[{url:a}]};q.yf=function(a){this.f||(this.f={});this.f.artist=a;this.f.metadataType=cast.receiver.media.MetadataType.MUSIC_TRACK};
q.destroy=function(){var a=this,b,c;return J(function(d){if(1==d.a)return a.b&&(a.b.release(),a.b=null),b=[],a.c&&(b.push(a.c.destroy()),a.c=null),a.H&&(a.H.stop(),a.H=null),a.a=null,a.J=null,a.C=null,a.D=!1,a.j=!0,a.g=null,a.l=null,v(d,Promise.all(b),2);c=cast.receiver.CastReceiverManager.getInstance();c.stop();z(d)})};
function Xm(a){var b=cast.receiver.CastReceiverManager.getInstance();b.onSenderConnected=function(){return Ym(a)};b.onSenderDisconnected=function(){return Ym(a)};b.onSystemVolumeChanged=function(){var e=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();e&&Zm(a,{type:"update",update:{video:{volume:e.level,muted:e.muted}}},a.g);Zm(a,{type:"event",targetName:"video",event:{type:"volumechange"}},a.g)};a.l=b.getCastMessageBus("urn:x-cast:com.google.cast.media");a.l.onMessage=function(e){return $m(a,
e)};a.g=b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");a.g.onMessage=function(e){return an(a,e)};b.start();b=t(im);for(var c=b.next();!c.done;c=b.next())a.b.s(a.a,c.value,function(e){return bn(a,"video",e)});for(var d in Ul)a.b.s(a.c,Ul[d],function(e){return bn(a,"player",e)});cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?a.c.Fd(3840,2160):a.c.Fd(1920,1080);a.b.s(a.a,"loadeddata",function(){a.A=!0});a.b.s(a.c,"loading",function(){a.j=
!1;cn(a)});a.b.s(a.a,"playing",function(){a.j=!1;cn(a)});a.b.s(a.a,"pause",function(){cn(a)});a.b.s(a.c,"unloading",function(){a.j=!0;cn(a)});a.b.s(a.a,"ended",function(){(new M(function(){a.a&&a.a.ended&&(a.j=!0,cn(a))})).N(dn)})}function Ym(a){a.h=0;a.v=!0;a.D=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;cn(a)}
function cn(a){var b;J(function(c){if(1==c.a)return v(c,Promise.resolve(),2);if(!a.c)return c["return"]();b=new O("caststatuschanged");a.dispatchEvent(b);en(a)||fn(a);z(c)})}
function gn(a,b,c){var d,e,f,g,h,k,l,m,n,p;J(function(r){switch(r.a){case 1:for(d in b.player)e=b.player[d],a.c[d](e);a.C(c);f=a.a.autoplay;return b.manifest?(a.a.autoplay=!1,A(r,5),v(r,a.c.load(b.manifest,b.startTime),7)):v(r,Promise.resolve(),3);case 7:wa(r,3);break;case 5:return g=E(r),h=Ql,k=new O(h,{detail:g}),a.c&&a.c.dispatchEvent(k),r["return"]();case 3:if(!a.c)return r["return"]();for(l in b.video)m=b.video[l],a.a[l]=m;for(n in b.playerAfterLoad)p=b.playerAfterLoad[n],a.c[n](p);a.a.autoplay=
f;b.manifest&&(a.a.play(),fn(a));z(r)}})}function bn(a,b,c){a.c&&(Wm(a),Zm(a,{type:"event",targetName:b,event:c},a.g))}
function Wm(a){a.H.N(hn);for(var b={video:{},player:{}},c=t(jm),d=c.next();!d.done;d=c.next())d=d.value,b.video[d]=a.a[d];if(a.c.U())for(var e in nm)0==a.h%nm[e]&&(b.player[e]=a.c[e]());for(var f in mm)0==a.h%mm[f]&&(b.player[f]=a.c[f]());if(c=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())b.video.volume=c.level,b.video.muted=c.muted;a.A&&(a.h+=1);Zm(a,{type:"update",update:b},a.g);en(a)}function en(a){return a.v&&(a.a.duration||a.c.U())?(jn(a),a.v=!1,!0):!1}
function jn(a,b){var c={contentId:a.c.fd(),streamType:a.c.U()?"LIVE":"BUFFERED",contentType:""};a.c.U()||(c.duration=a.a.duration);a.f&&(c.metadata=a.f);fn(a,void 0===b?0:b,c)}
function an(a,b){var c=gm(b.data);switch(c.type){case "init":a.h=0;a.A=!1;a.v=!0;gn(a,c.initState,c.appData);Wm(a);break;case "appData":a.C(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}a.J[d][e]=c;break;case "call":d=a.J[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=c.targetName;e=
c.methodName;"player"==d&&"load"==e&&(a.h=0,a.A=!1);var g=c.id,h=b.senderId;f=a.J[d];c=f[e].apply(f,c.args);"player"==d&&"load"==e&&(c=c.then(function(){a.v=!0}));c.then(function(){return kn(a,h,g,null)},function(k){return kn(a,h,g,k)})}}
function $m(a,b){var c=gm(b.data);switch(c.type){case "PLAY":a.a.play();fn(a);break;case "PAUSE":a.a.pause();fn(a);break;case "SEEK":var d=c.currentTime,e=c.resumeState;null!=d&&(a.a.currentTime=Number(d));e&&"PLAYBACK_START"==e?(a.a.play(),fn(a)):e&&"PLAYBACK_PAUSE"==e&&(a.a.pause(),fn(a));break;case "STOP":a.c.Kd().then(function(){a.c&&fn(a)});break;case "GET_STATUS":jn(a,Number(c.requestId));break;case "VOLUME":e=c.volume;d=e.level;e=e.muted;var f=a.a.volume,g=a.a.muted;null!=d&&(a.a.volume=Number(d));
null!=e&&(a.a.muted=e);f==a.a.volume&&g==a.a.muted||fn(a);break;case "LOAD":a.h=0;a.A=!1;a.v=!1;d=c.media;e=c.currentTime;f=a.M(d.contentId);g=c.autoplay||!0;a.C(d.customData);g&&(a.a.autoplay=!0);a.c.load(f,e).then(function(){a.c&&jn(a)})["catch"](function(h){var k="LOAD_FAILED";7==h.category&&7E3==h.code&&(k="LOAD_CANCELLED");Zm(a,{requestId:Number(c.requestId),type:k},a.l)});break;default:Zm(a,{requestId:Number(c.requestId),type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},a.l)}}
function kn(a,b,c,d){a.c&&Zm(a,{type:"asyncComplete",id:c,error:d},a.g,b)}function Zm(a,b,c,d){a.D&&(a=fm(b),d?c.getCastChannel(d).send(a):c.broadcast(a))}function fn(a,b,c){c=void 0===c?null:c;var d={mediaSessionId:0,playbackRate:a.a.playbackRate,playerState:a.j?ln:a.c.hd()?mn:a.a.paused?nn:on,currentTime:a.a.currentTime,supportedMediaCommands:63,volume:{level:a.a.volume,muted:a.a.muted}};c&&(d.media=c);Zm(a,{requestId:void 0===b?0:b,type:"MEDIA_STATUS",status:[d]},a.l)}
K("shaka.cast.CastReceiver",Rm);Rm.prototype.destroy=Rm.prototype.destroy;Rm.prototype.setContentArtist=Rm.prototype.yf;Rm.prototype.setContentImage=Rm.prototype.zf;Rm.prototype.setContentTitle=Rm.prototype.Bf;Rm.prototype.clearContentMetadata=Rm.prototype.De;Rm.prototype.setContentMetadata=Rm.prototype.Af;Rm.prototype.isIdle=Rm.prototype.ef;Rm.prototype.isConnected=Rm.prototype.isConnected;var hn=.5,dn=5,ln="IDLE",on="PLAYING",mn="BUFFERING",nn="PAUSED";function pn(a){var b=this;this.a=[];this.b=[];this.data=[];(new Qb).box("moov",Ub).S("pssh",function(c){if(!(1<c.version)){var d=pb(c.reader.P,-12,c.size);b.data.push(d);b.a.push(oc(c.reader.Va(16)));if(0<c.version){d=c.reader.I();d=t(ib(d));for(var e=d.next();!e.done;e=d.next())e=oc(c.reader.Va(16)),b.b.push(e)}}}).parse(a)}
function qn(a){var b=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]),c=a.length,d=b.length+16+c,e=new Uint8Array(d),f=tb(e),g=0;f.setUint32(g,d);g+=4;f.setUint32(g,1886614376);g+=4;f.setUint32(g,0);g+=4;e.set(b,g);g+=b.length;f.setUint32(g,c);e.set(a,g+4);return e}
function rn(a){if(!a)return a;var b=new pn(a);if(1>=b.data.length)return a;a=[];var c={};b=t(b.data);for(var d=b.next();!d.done;c={$b:c.$b},d=b.next())c.$b=d.value,a.some(function(e){return function(f){return nb(f,e.$b)}}(c))||a.push(c.$b);return pc.apply(jc,ia(a))};function sn(a,b){var c=tn(a,b);return 1!=c.length?null:c[0]}function un(a,b,c){a=vn(a,b,c);return 1!=a.length?null:a[0]}function tn(a,b){return Array.from(a.childNodes).filter(function(c){return c instanceof Element&&c.tagName==b})}function wn(a){return Array.from(a.childNodes).filter(function(b){return b instanceof Element})}function vn(a,b,c){return Array.from(a.childNodes).filter(function(d){return d instanceof Element&&d.localName==c&&d.namespaceURI==b})}
function xn(a,b,c){return a.hasAttributeNS(b,c)?a.getAttributeNS(b,c):null}function yn(a){return Array.from(a.childNodes).every(zn)?a.textContent.trim():null}function zn(a){return a.nodeType==Node.TEXT_NODE||a.nodeType==Node.CDATA_SECTION_NODE}function An(a,b,c,d){d=void 0===d?null:d;var e=null;a=a.getAttribute(b);null!=a&&(e=c(a));return null==e?d:e}function Bn(a){if(!a)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a)&&(a+="Z");a=Date.parse(a);return isNaN(a)?null:Math.floor(a/1E3)}
function Cn(a){if(!a)return null;a=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);if(!a)return null;a=31536E3*Number(a[1]||null)+2592E3*Number(a[2]||null)+86400*Number(a[3]||null)+3600*Number(a[4]||null)+60*Number(a[5]||null)+Number(a[6]||null);return isFinite(a)?a:null}function Dn(a){var b=/([0-9]+)-([0-9]+)/.exec(a);if(!b)return null;a=Number(b[1]);if(!isFinite(a))return null;b=Number(b[2]);return isFinite(b)?{start:a,end:b}:null}
function En(a){a=Number(a);return 0===a%1?a:null}function Fn(a){a=Number(a);return 0===a%1&&0<a?a:null}function Gn(a){a=Number(a);return 0===a%1&&0<=a?a:null}function Hn(a){a=Number(a);return isNaN(a)?null:a}function In(a){var b;a=(b=a.match(/^(\d+)\/(\d+)$/))?Number(b[1])/Number(b[2]):Number(a);return isNaN(a)?null:a}
function Jn(a,b){var c=new DOMParser,d=null,e=null;try{e=c.parseFromString(a,"text/xml")}catch(f){}e&&e.documentElement.tagName==b&&(d=e.documentElement);return d&&0<d.getElementsByTagName("parsererror").length?null:d}function Kn(a,b){try{var c=wb(a);return Jn(c,b)}catch(d){return null}};function Ln(a,b,c){var d=Mn(a),e=null;a=[];var f=[],g=new Set(d.map(function(h){return h.keyId}));g["delete"](null);if(1<g.size)throw new L(2,4,4010);b||(f=d.filter(function(h){return"urn:mpeg:dash:mp4protection:2011"==h.he?(e=h.init||e,!1):!0}),f.length&&(a=Nn(e,f,c),0==a.length&&(a=[Ae("",e)])));if(d.length&&(b||!f.length))for(a=[],b=t(Object.values(c)),c=b.next();!c.done;c=b.next())c=c.value,"org.w3.clearkey"!=c&&a.push(Ae(c,e));if(g=Array.from(g)[0]||null)for(b=t(a),c=b.next();!c.done;c=b.next())for(c=
t(c.value.initData),d=c.next();!d.done;d=c.next())d.value.keyId=g;return{Od:g,kg:e,drmInfos:a,Sd:!0}}function On(a,b,c,d){var e=Ln(a,c,d);if(b.Sd){a=1==b.drmInfos.length&&!b.drmInfos[0].keySystem;c=0==e.drmInfos.length;if(0==b.drmInfos.length||a&&!c)b.drmInfos=e.drmInfos;b.Sd=!1}else if(0<e.drmInfos.length&&(b.drmInfos=b.drmInfos.filter(function(f){return e.drmInfos.some(function(g){return g.keySystem==f.keySystem})}),0==b.drmInfos.length))throw new L(2,4,4008);return e.Od||b.Od}
function Pn(a){var b=0,c=tb(a),d=c.getUint32(b,!0);if(d!=a.byteLength)return[];a:{a=b+4+2;for(b=[];a<c.byteLength-1;){d=c.getUint16(a,!0);a+=2;var e=c.getUint16(a,!0);a+=2;if(0!=(e&1)||e+a>c.byteLength){c=[];break a}var f=pb(c,a,e);b.push({type:d,value:f});a+=e}c=b}return c}
function Qn(a){a=t(a.getElementsByTagName("DATA"));for(var b=a.next();!b.done;b=a.next()){b=t(b.value.childNodes);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c instanceof Element&&"LA_URL"==c.tagName)return c.textContent}return""}function Rn(a){a=un(a.node,"urn:microsoft:playready","pro");if(!a)return"";a=mc(a.textContent);a=Pn(a).filter(function(b){return b.type===Sn})[0];if(!a)return"";a=xb(a.value,!0);return(a=Jn(a,"WRMHEADER"))?Qn(a):""}
function Nn(a,b,c){var d=[];b=t(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=c[e.he];if(f){var g;(g=un(e.node,"urn:microsoft:playready","pro"))?(g=mc(g.textContent),g=[{initData:qn(g),initDataType:"cenc",keyId:e.keyId}]):g=null;g=Ae(f,e.init||a||g);if(f=Tn.get(f))g.licenseServerUri=f(e);d.push(g)}}return d}function Mn(a){var b=[];a=t(a);for(var c=a.next();!c.done;c=a.next())(c=Un(c.value))&&b.push(c);return b}
function Un(a){var b=a.getAttribute("schemeIdUri"),c=xn(a,"urn:mpeg:cenc:2013","default_KID"),d=vn(a,"urn:mpeg:cenc:2013","pssh").map(yn);if(!b)return null;b=b.toLowerCase();if(c&&(c=c.replace(/-/g,"").toLowerCase(),c.includes(" ")))throw new L(2,4,4009);var e=[];try{e=d.map(function(f){return{initDataType:"cenc",initData:mc(f),keyId:null}})}catch(f){throw new L(2,4,4007);}return{node:a,he:b,keyId:c,init:0<e.length?e:null}}
var Sn=1,Tn=(new Map).set("com.widevine.alpha",function(a){return(a=un(a.node,"urn:microsoft","laurl"))?a.getAttribute("licenseUrl")||"":""}).set("com.microsoft.playready",Rn).set("com.microsoft.playready.recommendation",Rn).set("com.microsoft.playready.software",Rn).set("com.microsoft.playready.hardware",Rn);function Vn(a,b,c,d,e){var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(g,h,k,l){if("$$"==g)return"$";var m=f[h];if(null==m)return g;"RepresentationID"==h&&k&&(k=void 0);"Time"==h&&(m=Math.round(m));switch(l){case void 0:case "d":case "i":case "u":g=m.toString();break;case "o":g=m.toString(8);break;case "x":g=m.toString(16);break;case "X":g=m.toString(16).toUpperCase();break;default:g=m.toString()}k=
window.parseInt(k,10)||1;return Array(Math.max(0,k-g.length)+1).join("0")+g})}
function Wn(a,b){var c=Xn(a,b,"timescale"),d=1;c&&(d=Fn(c)||1);var e=Xn(a,b,"duration");c=Fn(e||"");"image"==a.G.contentType&&(c=Hn(e||""));c&&(c/=d);var f=Xn(a,b,"startNumber");e=Number(Xn(a,b,"presentationTimeOffset"))||0;var g=Gn(f||"");if(null==f||null==g)g=1;var h=Yn(a,b,"SegmentTimeline");f=null;if(h){f=d;var k=a.O.duration||Infinity,l=tn(h,"S");h=[];var m=-e;l=t(lb(l));for(var n=l.next();!n.done;n=l.next()){n=n.value;var p=n.item,r=n.next,u=An(p,"t",Gn);n=An(p,"d",Gn);var x=An(p,"r",En);null!=
u&&(u-=e);if(!n)break;p=null!=u?u:m;u=x||0;if(0>u)if(r){r=An(r,"t",Gn);if(null==r)break;else if(p>=r)break;u=Math.ceil((r-p)/n)-1}else{if(Infinity==k)break;else if(p/f>=k)break;u=Math.ceil((k*f-p)/n)-1}0<h.length&&p!=m&&(h[h.length-1].end=p/f);r=t(ib(u+1));for(u=r.next();!u.done;u=r.next())m=p+n,h.push({start:p/f,end:m/f,Jf:p}),p=m}f=h}return{timescale:d,ca:c,Cb:g,Pa:e/d||0,Ld:e,timeline:f}}
function Xn(a,b,c){return[b(a.G),b(a.ea),b(a.la)].filter(Nb).map(function(d){return d.getAttribute(c)}).reduce(function(d,e){return d||e})}function Yn(a,b,c){return[b(a.G),b(a.ea),b(a.la)].filter(Nb).map(function(d){return sn(d,c)}).reduce(function(d,e){return d||e})}
function Zn(a,b,c,d,e,f){for(var g=xn(a,"http://www.w3.org/1999/xlink","href"),h=xn(a,"http://www.w3.org/1999/xlink","actuate")||"onRequest",k=t(Array.from(a.attributes)),l=k.next();!l.done;l=k.next())l=l.value,"http://www.w3.org/1999/xlink"==l.namespaceURI&&a.removeAttributeNS(l.namespaceURI,l.localName);if(5<=f)return Qg(new L(2,4,4028));if("onLoad"!=h)return Qg(new L(2,4,4027));var m=ze([d],[g]);return e.request(0,eh(m,b)).W(function(n){n=Kn(n.data,a.tagName);if(!n)return Qg(new L(2,4,4001,g));
for(;a.childNodes.length;)a.removeChild(a.childNodes[0]);for(;n.childNodes.length;){var p=n.childNodes[0];n.removeChild(p);a.appendChild(p)}n=t(Array.from(n.attributes));for(p=n.next();!p.done;p=n.next())a.setAttributeNode(p.value.cloneNode(!1));return $n(a,b,c,m[0],e,f+1)})}
function $n(a,b,c,d,e,f){f=void 0===f?0:f;if(xn(a,"http://www.w3.org/1999/xlink","href")){var g=Zn(a,b,c,d,e,f);c&&(g=g.W(void 0,function(){return $n(a,b,c,d,e,f)}));return g}g=[];for(var h=t(Array.from(a.childNodes)),k=h.next();!k.done;k=h.next())k=k.value,k instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==xn(k,"http://www.w3.org/1999/xlink","href")?a.removeChild(k):"SegmentTimeline"!=k.tagName&&g.push($n(k,b,c,d,e,f)));return Ug(g).W(function(){return a})};function ao(a,b,c,d,e,f,g){var h,k=(new Qb).S("sidx",function(l){h=bo(b,d,e,f,g,c,l)});a&&k.parse(a);if(h)return h;throw new L(2,3,3004);}
function bo(a,b,c,d,e,f,g){var h=[];g.reader.skip(4);var k=g.reader.I();if(0==k)throw new L(2,3,3005);if(0==g.version){var l=g.reader.I();var m=g.reader.I()}else l=g.reader.gb(),m=g.reader.gb();g.reader.skip(2);var n=g.reader.Bb();a=a+g.size+m;n=t(ib(n));for(m=n.next();!m.done;m=n.next()){var p=g.reader.I();m=(p&2147483648)>>>31;p&=2147483647;var r=g.reader.I();g.reader.skip(4);if(1==m)throw new L(2,3,3006);h.push(new oi(l/k+c,(l+r)/k+c,function(){return f},a,a+p-1,b,c,d,e));l+=r;a+=p}g.parser.stop();
return h};function co(a){this.b=tb(a);this.a=new Db(this.b,0)}co.prototype.ha=function(){return this.a.ha()};
function eo(a){var b=fo(a);if(7<b.length)throw new L(2,3,3002);var c=0;b=t(b);for(var d=b.next();!d.done;d=b.next())c=256*c+d.value;b=fo(a);a:{d=t(go);for(var e=d.next();!e.done;e=d.next())if(nb(b,new Uint8Array(e.value))){d=!0;break a}d=!1}if(d)b=a.b.byteLength-a.a.Z();else{if(8==b.length&&b[1]&224)throw new L(2,3,3001);d=0;e=t(lb(b));for(var f=e.next();!f.done;f=e.next()){f=f.value;var g=f.item;d=0==f.ba?g&(1<<8-b.length)-1:256*d+g}b=d}b=a.a.Z()+b<=a.b.byteLength?b:a.b.byteLength-a.a.Z();d=tb(a.b,
a.a.Z(),b);a.a.skip(b);return new ho(c,d)}function fo(a){var b=a.a.Z(),c=a.a.V();if(0==c)throw new L(2,3,3002);c=8-Math.floor(Math.log2(c));a.a.skip(c-1);return pb(a.b,b,c)}var go=[[255],[127,255],[63,255,255],[31,255,255,255],[15,255,255,255,255],[7,255,255,255,255,255],[3,255,255,255,255,255,255],[1,255,255,255,255,255,255,255]];function ho(a,b){this.id=a;this.a=b}
function io(a){if(8<a.a.byteLength)throw new L(2,3,3002);if(8==a.a.byteLength&&a.a.getUint8(0)&224)throw new L(2,3,3001);for(var b=0,c=t(ib(a.a.byteLength)),d=c.next();!d.done;d=c.next())d=a.a.getUint8(d.value),b=256*b+d;return b};function jo(a,b,c,d,e,f,g,h,k){function l(){return e}var m=[];a=new co(a.a);for(var n=null,p=null;a.ha();){var r=eo(a);if(187==r.id){var u=ko(r);u&&(r=c*u.Kf,u=b+u.sf,null!=n&&m.push(new oi(n+g,r+g,l,p,u-1,f,g,h,k)),n=r,p=u)}}null!=n&&m.push(new oi(n+g,d+g,l,p,null,f,g,h,k));return m}
function ko(a){var b=new co(a.a);a=eo(b);if(179!=a.id)throw new L(2,3,3013);a=io(a);b=eo(b);if(183!=b.id)throw new L(2,3,3012);b=new co(b.a);for(var c=0;b.ha();){var d=eo(b);if(241==d.id){c=io(d);break}}return{Kf:a,sf:c}};function lo(a,b){var c=Yn(a,b,"Initialization");if(!c)return null;var d=a.G.ua,e=c.getAttribute("sourceURL");e&&(d=ze(a.G.ua,[e]));e=0;var f=null;if(c=An(c,"range",Dn))e=c.start,f=c.end;return new mi(function(){return d},e,f)}
function mo(a,b){var c=Number(Xn(a,no,"presentationTimeOffset"))||0,d=Xn(a,no,"timescale"),e=1;d&&(e=Fn(d)||1);var f=c/e||0,g=lo(a,no);oo(a,g);var h=Yg(a);return{rb:function(){var k=Yn(h,no,"RepresentationIndex"),l=h.G.ua;k&&(k=k.getAttribute("sourceURL"))&&(l=ze(h.G.ua,[k]));k=po(h);return qo(h,b,g,l,k.start,k.end,f)}}}
function qo(a,b,c,d,e,f,g){var h,k,l,m,n,p,r,u,x,w,y,D,C,B,F;return J(function(G){if(1==G.a)return h=a.presentationTimeline,k=!a.Za||!a.O.Xd,l=a.O.start,m=a.O.duration,n=a.G.mimeType.split("/")[1],p=b,r=null,u=[p(d,e,f),"webm"==n?p(c.ga(),c.da,c.Y):null],p=null,v(G,Promise.all(u),2);x=G.b;w=x[0];y=x[1]||null;D=null;C=l-g;B=l;F=m?l+m:Infinity;if("mp4"==n)var H=ao(w,e,d,c,C,B,F);else{H=new co(y);if(440786851!=eo(H).id)throw new L(2,3,3008);var I=eo(H);if(408125543!=I.id)throw new L(2,3,3009);H=I.a.byteOffset;
I=new co(I.a);for(var N=null;I.ha();){var T=eo(I);if(357149030==T.id){N=T;break}}if(!N)throw new L(2,3,3010);N=new co(N.a);T=1E6;for(I=null;N.ha();){var Q=eo(N);if(2807729==Q.id)T=io(Q);else if(17545==Q.id)if(4==Q.a.byteLength)I=Q.a.getFloat32(0);else if(8==Q.a.byteLength)I=Q.a.getFloat64(0);else throw new L(2,3,3003);}if(null==I)throw new L(2,3,3011);N=T/1E9;I*=N;T=eo(new co(w));if(475249515!=T.id)throw new L(2,3,3007);H=jo(T,H,N,I,d,c,C,B,F)}D=H;h.yb(D);r=new S(D);k&&r.Sa(B,F,!0);return G["return"](r)})}
function no(a){return a.Vb}function po(a){var b=Yn(a,no,"RepresentationIndex");a=Xn(a,no,"indexRange");a=Dn(a||"");b&&(a=An(b,"range",Dn,a));return a}function oo(a,b){ro(a,b);if(!po(a))throw new L(2,4,4002);}function ro(a,b){var c=a.G.mimeType.split("/")[1];if(a.G.contentType!=Ee&&"mp4"!=c&&"webm"!=c)throw new L(2,4,4006);if("webm"==c&&!b)throw new L(2,4,4005);};function so(a,b){var c=lo(a,to),d=uo(a);if(!d.ca&&!d.timeline&&1<d.vb.length)throw new L(2,4,4002);if(!d.ca&&!a.O.duration&&!d.timeline&&1==d.vb.length)throw new L(2,4,4002);if(d.timeline&&0==d.timeline.length)throw new L(2,4,4002);var e=null,f=null;a.la.id&&a.G.id&&(f=a.la.id+","+a.G.id,e=b[f]);c=vo(a.O.start,a.O.duration,a.G.ua,d,c);d=!e;e?e.wb(c,a.presentationTimeline.Ua()):(a.presentationTimeline.yb(c),e=new S(c),f&&a.Za&&(b[f]=e));a.Za&&a.O.Xd||e.Sa(a.O.start,a.O.duration?a.O.start+a.O.duration:
Infinity,d);return{rb:function(){return Promise.resolve(e)}}}function to(a){return a.Wa}function uo(a){var b=wo(a);a=Wn(a,to);var c=a.Cb;0==c&&(c=1);var d=0;a.ca?d=a.ca*(c-1):a.timeline&&0<a.timeline.length&&(d=a.timeline[0].start);return{ca:a.ca,startTime:d,Cb:c,Pa:a.Pa,timeline:a.timeline,vb:b}}
function vo(a,b,c,d,e){var f=d.vb.length;d.timeline&&d.timeline.length!=d.vb.length&&(f=Math.min(d.timeline.length,d.vb.length));var g=a-d.Pa,h=b?a+b:Infinity,k=[],l=d.startTime,m={};f=t(ib(f));for(var n=f.next();!n.done;m={Oc:m.Oc},n=f.next()){n=n.value;var p=d.vb[n];m.Oc=ze(c,[p.hf]);var r=void 0;r=null!=d.ca?l+d.ca:d.timeline?d.timeline[n].end:l+b;k.push(new oi(a+l,a+r,function(u){return function(){return u.Oc}}(m),p.start,p.end,e,g,a,h));l=r}return k}
function wo(a){return[a.G.Wa,a.ea.Wa,a.la.Wa].filter(Nb).map(function(b){return tn(b,"SegmentURL")}).reduce(function(b,c){return 0<b.length?b:c}).map(function(b){b.getAttribute("indexRange")&&!a.Vd&&(a.Vd=!0);var c=b.getAttribute("media");b=An(b,"mediaRange",Dn,{start:0,end:null});return{hf:c,start:b.start,end:b.end}})};function xo(a,b,c,d,e){var f=yo(a),g=zo(a);Ao(g);var h=Yg(a);if(g.Rb)return ro(a,f),{rb:function(){var r=Vn(g.Rb,h.G.id,null,h.bandwidth||null,null);r=ze(h.G.ua,[r]);return qo(h,b,f,r,0,null,g.Pa)}};if(g.ca)return d||(a.presentationTimeline.pd(g.ca),a.presentationTimeline.qd(a.O.start)),{rb:function(){return Bo(h,g,e,f)}};var k=null;d=null;a.la.id&&a.G.id&&(d=a.la.id+","+a.G.id,k=c[d]);var l=Co(h,g,f),m=a.O.start,n=a.O.duration?a.O.start+a.O.duration:Infinity,p=Infinity!=n;k?(p&&(new S(l)).Sa(m,n,
!0),k.wb(l,a.presentationTimeline.Ua())):(a.presentationTimeline.yb(l),k=new S(l),d&&a.Za&&(c[d]=k));p&&k.Sa(m,n);return{rb:function(){return Promise.resolve(k)}}}function Do(a){return a.Wb}function zo(a){var b=Wn(a,Do),c=Xn(a,Do,"media");a=Xn(a,Do,"index");return{ca:b.ca,timescale:b.timescale,Cb:b.Cb,Pa:b.Pa,Ld:b.Ld,timeline:b.timeline,od:c,Rb:a}}
function Ao(a){var b=a.Rb?1:0;b+=a.timeline?1:0;b+=a.ca?1:0;if(0==b)throw new L(2,4,4002);1!=b&&(a.Rb&&(a.timeline=null),a.ca=null);if(!a.Rb&&!a.od)throw new L(2,4,4002);}
function Bo(a,b,c,d){function e(G){var H=(G-n)*m,I=H+b.Pa;H+=h;return new oi(H,Math.min(H+m,l),function(){var N=Vn(r,x,G,u,I*p);return ze(w,[N])},0,null,d,y,h,l)}function f(){var G=[Math.max(g.Ua(),h),Math.min(g.Ta(),l)].map(function(H){return H-h});return[Math.ceil(G[0]/m),Math.ceil(G[1]/m)-1].map(function(H){return H+n})}var g=a.presentationTimeline,h=a.O.start,k=a.O.duration,l=k?h+k:Infinity,m=b.ca,n=b.Cb,p=b.timescale,r=b.od,u=a.bandwidth||null,x=a.G.id,w=a.G.ua,y=h-b.Pa;k=f();a=a.Za?Math.max(k[0],
k[1]-c+1):k[0];c=k[1];k=[];for(var D=a;D<=c;++D){var C=e(D);k.push(C)}var B=new S(k);if(g.Ta()<l){var F=Math.max(a,c+1);B.Fc(m,function(){B.$a(g.Ua());var G=t(f());G.next();G=G.next().value;for(var H=[];F<=G;){var I=e(F);H.push(I);F++}return g.Ta()>=l&&!H.length?null:H})}return Promise.resolve(B)}
function Co(a,b,c){var d=a.O.start,e=a.O.duration,f=d-b.Pa;e=e?d+e:Infinity;for(var g=[],h={},k=t(lb(b.timeline)),l=k.next();!l.done;h={Nc:h.Nc,Qc:h.Qc,Tc:h.Tc,Kc:h.Kc,Vc:h.Vc,Lc:h.Lc},l=k.next()){l=l.value;var m=l.item,n=m.start,p=m.Jf;m=m.end;h.Tc=l.ba+b.Cb;h.Vc=p+b.Ld;h.Qc=a.G.id;h.Kc=a.bandwidth||null;h.Nc=b.od;h.Lc=a.G.ua;g.push(new oi(d+n,d+m,function(r){return function(){var u=Vn(r.Nc,r.Qc,r.Tc,r.Kc||null,r.Vc);return ze(r.Lc,[u]).map(function(x){return x.toString()})}}(h),0,null,c,f,d,e))}return g}
function yo(a){var b=Xn(a,Do,"initialization");if(!b)return null;var c=a.G.id,d=a.bandwidth||null,e=a.G.ua;return new mi(function(){var f=Vn(b,c,null,d,null);return ze(e,[f])},0,null)};function Eo(){this.g=[];this.a=[];this.b=[];this.f=[];this.c=[];this.h=new Set}Eo.prototype.release=function(){for(var a=t(this.a.concat(this.b,this.f,this.c)),b=a.next();!b.done;b=a.next())b=b.value,b.segmentIndex&&b.segmentIndex.release();this.a=[];this.b=[];this.f=[];this.c=[];this.g=[]};
function Fo(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G,H,I,N,T,Q,W,P,ja,qa,ea,Za;return J(function(Da){switch(Da.a){case 1:d=Fe;Go(b);Ho(b);Io(b);if(!c&&1==b.length){e=b[0];a.a=e.mc;a.b=e.Hc;a.f=e.textStreams;a.c=e.imageStreams;Da.m(2);break}f=-1;g=t(lb(b));for(h=g.next();!h.done;h=g.next())l=k=h.value,m=l.ba,n=l.item,a.h.has(n.id)||(a.h.add(n.id),-1==f&&(f=m));if(-1==f)return Da["return"]();p=b.map(function(Ia){return Ia.mc});r=b.map(function(Ia){return Ia.Hc});u=b.map(function(Ia){return Ia.textStreams});
x=b.map(function(Ia){return Ia.imageStreams});w=t(u);for(y=w.next();!y.done;y=w.next())D=y.value,D.push(Jo());return v(Da,Ko(a.a,p,f,Lo,Mo),3);case 3:return v(Da,Ko(a.b,r,f,Lo,Mo),4);case 4:return v(Da,Ko(a.f,u,f,Lo,Mo),5);case 5:return v(Da,Ko(a.c,x,f,Lo,Mo),2);case 2:C=0;B=[];if(a.b.length&&a.a.length)for(T=t(a.a),Q=T.next();!Q.done;Q=T.next())for(W=Q.value,P=t(a.b),ja=P.next();!ja.done;ja=P.next())qa=ja.value,ea=ei(W.drmInfos,qa.drmInfos),W.drmInfos.length&&qa.drmInfos.length&&!ea.length||(Za=
C++,B.push({id:Za,language:W.language,primary:W.primary,audio:W,video:qa,bandwidth:(W.bandwidth||0)+(qa.bandwidth||0),drmInfos:ea,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]}));else for(F=a.b.concat(a.a),G=t(F),H=G.next();!H.done;H=G.next())I=H.value,N=C++,B.push({id:N,language:I.language,primary:I.primary,audio:I.type==d.Xa?I:null,video:I.type==d.Ja?I:null,bandwidth:I.bandwidth||0,drmInfos:I.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]});a.g=B;z(Da)}})}
function Go(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.mc),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.channelsCount==h.channelsCount&&e.language==h.language&&e.bandwidth==h.bandwidth&&e.label==h.label&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&wc(e.roles,h.roles)&&e.audioSamplingRate==h.audioSamplingRate&&e.primary==h.primary&&(f=!0);f||c.push(e)}b.mc=c}}
function Io(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.textStreams),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.language==h.language&&e.label==h.label&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&wc(e.roles,h.roles)&&(f=!0);f||c.push(e)}b.textStreams=c}}
function Ho(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;for(var c=[],d=t(b.Hc),e=d.next();!e.done;e=d.next()){e=e.value;for(var f=!1,g=t(c),h=g.next();!h.done;h=g.next())h=h.value,e.id!=h.id&&e.width==h.width&&e.frameRate==h.frameRate&&e.codecs==h.codecs&&e.mimeType==h.mimeType&&e.label==h.label&&wc(e.roles,h.roles)&&qh(e.closedCaptions,h.closedCaptions)&&e.bandwidth==h.bandwidth&&(f=!0);f||c.push(e)}b.Hc=c}}
function No(a){var b,c,d,e,f,g,h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G;return J(function(H){switch(H.a){case 1:b=Fe;if(1==a.length)return H["return"](a[0]);c=a.map(function(I){return I.filter(function(N){return N.type==b.Xa})});d=a.map(function(I){return I.filter(function(N){return N.type==b.Ja})});e=a.map(function(I){return I.filter(function(N){return N.type==b.$})});f=t(e);for(g=f.next();!g.done;g=f.next())h=g.value,h.push({id:0,originalId:"",primary:!1,type:Ee,mimeType:"",codecs:"",language:"",label:null,
width:null,height:null,encrypted:!1,keyIds:new Set,segments:[],variantIds:[],roles:[],forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null});return v(H,Ko([],c,0,Oo,Po),2);case 2:return k=H.b,v(H,Ko([],d,0,Oo,Po),3);case 3:return l=H.b,v(H,Ko([],e,0,Oo,Po),4);case 4:m=H.b;n=0;if(l.length&&k.length)for(w=t(k),y=w.next();!y.done;y=w.next())for(D=y.value,C=t(l),B=C.next();!B.done;B=C.next())F=B.value,G=n++,F.variantIds.push(G),D.variantIds.push(G);else for(p=l.concat(k),
r=t(p),u=r.next();!u.done;u=r.next())x=u.value,x.variantIds=[n++];return H["return"](l.concat(k,m))}})}
function Ko(a,b,c,d,e){var f,g,h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G,H,I,N,T,Q,W;return J(function(P){switch(P.a){case 1:f=Fe;g=[];h=t(lb(b));for(k=h.next();!k.done;k=h.next())m=l=k.value,n=m.ba,p=m.item,n>=c?g.push(new Set(p)):g.push(new Set);r=t(a);u=r.next();case 2:if(u.done){P.m(4);break}x=u.value;return v(P,Qo(x,b,c,e,g),5);case 5:w=P.b;if(!w)throw new L(2,4,4037);u=r.next();P.m(2);break;case 4:y=t(g),D=y.next();case 6:if(D.done){P.m(8);break}C=D.value;B=t(C);F=B.next();case 9:if(F.done){D=y.next();
P.m(6);break}G=F.value;return v(P,Ro(G,b,d,e,g),12);case 12:(H=P.b)&&a.push(H);F=B.next();P.m(9);break;case 8:I=t(g);for(D=I.next();!D.done;D=I.next())for(N=D.value,T={},Q=t(N),F=Q.next();!F.done;T={ob:T.ob},F=Q.next())if(T.ob=F.value,T.ob.type!=f.$||T.ob.language)if(W=a.some(function(ja){return function(qa){return qa.mimeType==ja.ob.mimeType&&Te(qa.codecs)==Te(ja.ob.codecs)}}(T)))throw new L(2,4,4037);return P["return"](a)}})}
function Qo(a,b,c,d,e){var f;return J(function(g){if(1==g.a)return(f=So(b,a))?v(g,Promise.all(f.map(function(h){return h.createSegmentIndex()})),2):g["return"](!1);To(a,f,c,d,e);return g["return"](!0)})}function Ro(a,b,c,d,e){var f,g;return J(function(h){if(1==h.a)return f=c(a),(g=So(b,f))?f.createSegmentIndex?v(h,Promise.all(g.map(function(k){return k.createSegmentIndex()})),2):h.m(2):h["return"](null);To(f,g,0,d,e);return h["return"](f)})}
function To(a,b,c,d,e){b=t(lb(b));for(var f=b.next();!f.done;f=b.next()){var g=f.value;f=g.ba;g=g.item;if(f>=c){d(a,g);var h=!0;"audio"==a.type&&0==Of(a.language,g.language)&&(h=!1);h&&e[f]["delete"](g)}}}function Lo(a){a=Object.assign({},a);a.originalId=null;a.createSegmentIndex=function(){return Promise.resolve()};a.segmentIndex=new Ni;a.emsgSchemeIdUris=[];a.keyIds=new Set;a.closedCaptions=null;a.trickModeVideo=null;return a}
function Oo(a){a=Object.assign({},a);a.keyIds=new Set;a.segments=[];a.variantIds=[];a.closedCaptions=null;return a}
function Mo(a,b){a.roles=Array.from(new Set(a.roles.concat(b.roles)));b.emsgSchemeIdUris&&(a.emsgSchemeIdUris=Array.from(new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))));var c=b.keyIds;c=new Set(ia(a.keyIds).concat(ia(c)));a.keyIds=c;null==a.originalId?a.originalId=b.originalId:a.originalId+=","+(b.originalId||"");c=ei(a.drmInfos,b.drmInfos);if(b.drmInfos.length&&a.drmInfos.length&&!c.length)throw new L(2,4,4038);a.drmInfos=c;a.encrypted=a.encrypted||b.encrypted;if(b.closedCaptions){a.closedCaptions||
(a.closedCaptions=new Map);c=t(b.closedCaptions);for(var d=c.next();!d.done;d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;a.closedCaptions.set(d,e)}}a.segmentIndex.g.push(b.segmentIndex);b.trickModeVideo?(a.trickModeVideo||(a.trickModeVideo=Lo(b.trickModeVideo),a.trickModeVideo.segmentIndex=a.segmentIndex.clone()),Mo(a.trickModeVideo,b.trickModeVideo)):a.trickModeVideo&&Mo(a.trickModeVideo,b)}
function Po(a,b){a.roles=Array.from(new Set(a.roles.concat(b.roles)));var c=b.keyIds;c=new Set(ia(a.keyIds).concat(ia(c)));a.keyIds=c;a.encrypted=a.encrypted&&b.encrypted;a.segments.push.apply(a.segments,ia(b.segments));if(b.closedCaptions){a.closedCaptions||(a.closedCaptions=new Map);c=t(b.closedCaptions);for(var d=c.next();!d.done;d=c.next()){var e=t(d.value);d=e.next().value;e=e.next().value;a.closedCaptions.set(d,e)}}}
function So(a,b){for(var c=[],d=t(a),e=d.next();!e.done;e=d.next()){var f=b,g={audio:Uo,video:Uo,text:Vo,image:Wo}[f.type],h={audio:Xo,video:Yo,text:Zo,image:$o}[f.type],k=null;e=t(e.value);for(var l=e.next();!l.done;l=e.next())l=l.value,!g(f,l)||k&&!h(f,k,l)||(k=l);f=k;if(!f)return null;c.push(f)}return c}function Uo(a,b){var c;if(!(c=b.mimeType!=a.mimeType||Te(b.codecs)!=Te(a.codecs))&&(c=a.drmInfos)){c=a.drmInfos;var d=b.drmInfos;c=!(c.length&&d.length?0<ei(c,d).length:1)}return c?!1:!0}
function Vo(a,b){return a.language?b.language?0==Of(a.language,b.language)||b.kind!=a.kind?!1:!0:!0:!1}function Wo(a){return a.tilesLayout?!0:!1}
function Xo(a,b,c){if(a.id==c.id)return!0;var d=Of(a.language,b.language),e=Of(a.language,c.language);if(e>d)return!0;if(e<d)return!1;if(!b.primary&&c.primary)return!0;if(b.primary&&!c.primary)return!1;if(a.roles.length)return d=b.roles.filter(function(f){return a.roles.includes(f)}),e=c.roles.filter(function(f){return a.roles.includes(f)}),e.length>d.length?!0:e.length<d.length?!1:c.roles.length<b.roles.length;if(!c.roles.length&&b.roles.length)return!0;if(c.roles.length&&!b.roles.length)return!1;
d=ap(a.channelsCount,b.channelsCount,c.channelsCount);if(d==bp)return!0;if(d==cp)return!1;d=ap(a.audioSamplingRate,b.audioSamplingRate,c.audioSamplingRate);return d==bp?!0:d==cp?!1:a.bandwidth&&dp(a.bandwidth,b.bandwidth,c.bandwidth)==bp?!0:!1}
function Yo(a,b,c){if(a.id==c.id)return!0;var d=ap(a.width*a.height,b.width*b.height,c.width*c.height);if(d==bp)return!0;if(d==cp)return!1;if(a.frameRate){d=ap(a.frameRate,b.frameRate,c.frameRate);if(d==bp)return!0;if(d==cp)return!1}return a.bandwidth&&dp(a.bandwidth,b.bandwidth,c.bandwidth)==bp?!0:!1}
function Zo(a,b,c){if(a.id==c.id)return!0;var d=Of(a.language,b.language),e=Of(a.language,c.language);if(e>d)return!0;if(e<d)return!1;if(!b.primary&&c.primary)return!0;if(b.primary&&!c.primary)return!1;if(a.roles.length){d=b.roles.filter(function(f){return a.roles.includes(f)});e=c.roles.filter(function(f){return a.roles.includes(f)});if(e.length>d.length)return!0;if(e.length<d.length)return!1}else{if(!c.roles.length&&b.roles.length)return!0;if(c.roles.length&&!b.roles.length)return!1}return c.mimeType!=
a.mimeType||c.codecs!=a.codecs||b.mimeType==a.mimeType&&b.codecs==a.codecs?!1:!0}function $o(a,b,c){return a.id==c.id||c.mimeType==a.mimeType?!0:!1}
function Jo(){return{id:0,originalId:"",createSegmentIndex:function(){return Promise.resolve()},segmentIndex:new S([]),mimeType:"",codecs:"",encrypted:!1,drmInfos:[],keyIds:new Set,language:"",label:null,type:Ee,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],forced:!1,channelsCount:null,audioSamplingRate:null,spatialAudio:!1,closedCaptions:null}}
function ap(a,b,c){if(b==a&&a!=c)return cp;if(c==a&&a!=b)return bp;if(b>a){if(c<=a||c-a<b-a)return bp;if(c-a>b-a)return cp}else{if(c>a)return cp;if(a-c<a-b)return bp;if(a-c>a-b)return cp}return ep}function dp(a,b,c){b=Math.abs(a-b);a=Math.abs(a-c);return a<b?bp:b<a?cp:ep}var bp=1,ep=0,cp=-1;function fp(){var a=this;this.u=this.i=null;this.b=[];this.o=null;this.A=1;this.f={};this.a=new Eo;this.l=0;this.v=new Oa(5);this.j=new M(function(){a.Sb()});this.g=new Zg;this.c=Infinity;this.h=!1}q=fp.prototype;q.configure=function(a){this.i=a};q.start=function(a,b){var c=this,d;return J(function(e){if(1==e.a)return c.h=b.isLowLatencyMode(),c.b=[a],c.u=b,v(e,gp(c),2);d=e.b;c.u&&hp(c,d);if(!c.u)throw new L(2,7,7001);return e["return"](c.o)})};
q.stop=function(){for(var a=t(Object.values(this.f)),b=a.next();!b.done;b=a.next())b.value.release();this.a&&this.a.release();this.i=this.u=null;this.b=[];this.o=null;this.f={};this.a=null;null!=this.j&&(this.j.stop(),this.j=null);return this.g.destroy()};q.update=function(){var a=this,b;return J(function(c){if(1==c.a)return A(c,2),v(c,gp(a),4);if(2!=c.a)return wa(c,0);b=E(c);if(!a.u||!b)return c["return"]();a.u.onError(b);z(c)})};q.onExpirationUpdated=function(){};
function gp(a){var b,c,d,e,f,g,h;return J(function(k){if(1==k.a)return b=eh(a.b,a.i.retryParameters),c=a.u.networkingEngine,d=Date.now(),e=c.request(0,b),$g(a.g,e),v(k,e.promise,2);if(3!=k.a){f=k.b;if(!a.u)return k["return"](0);f.uri&&!a.b.includes(f.uri)&&a.b.unshift(f.uri);return v(k,ip(a,f.data,f.uri),3)}g=Date.now();h=(g-d)/1E3;Pa(a.v,1,h);return k["return"](h)})}
function ip(a,b,c){var d,e,f,g,h;return J(function(k){if(1==k.a){d=Kn(b,"MPD");if(!d)throw new L(2,4,4001,c);if(e=a.i.dash.disableXlinkProcessing)return k["return"](jp(a,d,c));f=a.i.dash.xlinkFailGracefully;g=$n(d,a.i.retryParameters,f,c,a.u.networkingEngine);$g(a.g,g);return v(k,g.promise,2)}h=k.b;return k["return"](jp(a,h,c))})}
function jp(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G,H,I,N,T,Q,W,P,ja,qa,ea,Za;return J(function(Da){switch(Da.a){case 1:d=[c];e=tn(b,"Location").map(yn).filter(Nb);0<e.length&&(f=ze(d,e),d=a.b=f);g=tn(b,"BaseURL");h=g.map(yn);k=ze(d,h);l=0;g&&g.length&&(l=An(g[0],"availabilityTimeOffset",Hn)||0);m=a.i.dash.ignoreMinBufferTime;n=0;m||(n=An(b,"minBufferTime",Cn)||0);a.l=An(b,"minimumUpdatePeriod",Cn,-1);p=An(b,"availabilityStartTime",Bn);r=An(b,"timeShiftBufferDepth",Cn);u=a.i.dash.ignoreSuggestedPresentationDelay;
x=null;u||(x=An(b,"suggestedPresentationDelay",Cn));w=a.i.dash.ignoreMaxSegmentDuration;y=null;w||(y=An(b,"maxSegmentDuration",Cn));D=b.getAttribute("type")||"static";if(a.o)for(C=a.o.presentationTimeline,B=t(Object.values(a.f)),F=B.next();!F.done;F=B.next())G=F.value,G.$a(C.Ua());else H=a.i.defaultPresentationDelay||1.5*n,I=null!=x?x:H,C=new R(p,I,a.i.dash.autoCorrectDrift);N=b.getAttribute("profiles")||"";T={Za:"static"!=D,presentationTimeline:C,la:null,O:null,ea:null,G:null,bandwidth:0,Vd:!1,pb:l,
profiles:N.split(",")};var Ia=An(b,"mediaPresentationDuration",Cn),Cc=[],jb=0,Bb=tn(b,"Period");Bb=t(lb(Bb));for(var $a=Bb.next();!$a.done;$a=Bb.next()){var Pb=$a.value;$a=Pb.item;Pb=Pb.next;jb=An($a,"start",Cn,jb);var kf=An($a,"duration",Cn),qb=null;if(Pb){var Zd=An(Pb,"start",Cn);null!=Zd&&(qb=Zd-jb)}else null!=Ia&&(qb=Ia-jb);null==qb&&(qb=kf);$a=kp(a,T,k,{start:jb,duration:qb,node:$a,Xd:null==qb||!Pb});Cc.push($a);if(null==qb){jb=null;break}jb+=qb}Q=null!=Ia?{periods:Cc,duration:Ia,Qd:!1}:{periods:Cc,
duration:jb,Qd:!0};W=Q.duration;P=Q.periods;C.Xb("static"==D);"static"!=D&&Q.Qd||C.Fa(W||Infinity);a.c&&!a.h&&(ja=a.u.isAutoLowLatencyMode())&&(a.u.enableLowLatencyMode(),a.h=a.u.isLowLatencyMode());a.h?C.ke(a.c):a.c&&Ua("Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");(qa=C.U())&&!isNaN(a.i.availabilityWindowOverride)&&(r=a.i.availabilityWindowOverride);
null==r&&(r=Infinity);C.Hd(r);C.pd(y||1);return v(Da,Fo(a.a,P,T.Za),2);case 2:if(a.o){a.o.variants=a.a.g;a.o.textStreams=a.a.f;a.o.imageStreams=a.a.c;a.u.filter(a.o);Da.m(3);break}a.o={presentationTimeline:C,variants:a.a.g,textStreams:a.a.f,imageStreams:a.a.c,offlineSessionIds:[],minBufferTime:n||0};if(!C.pe()){Da.m(3);break}ea=tn(b,"UTCTiming");return v(Da,lp(a,k,ea),5);case 5:Za=Da.b;if(!a.u)return Da["return"]();C.le(Za);case 3:a.u.makeTextStreamsForClosedCaptions(a.o),z(Da)}})}
function kp(a,b,c,d){b.la=mp(d.node,null,c);b.O=d;b.la.pb=b.pb;b.la.id||(b.la.id="__shaka_period_"+d.start);c=tn(d.node,"EventStream");c=t(c);for(var e=c.next();!e.done;e=c.next())np(a,d.start,d.duration,e.value);c=tn(d.node,"AdaptationSet").map(function(m){return op(a,b,m)}).filter(Nb);if(b.Za){d=[];e=t(c);for(var f=e.next();!f.done;f=e.next()){f=t(f.value.vf);for(var g=f.next();!g.done;g=f.next())d.push(g.value)}if(d.length!=(new Set(d)).size)throw new L(2,4,4018);}d=c.filter(function(m){return!m.Jd});
c=c.filter(function(m){return m.Jd});c=t(c);for(e=c.next();!e.done;e=c.next()){e=e.value;f=e.Jd.split(" ");g=t(d);for(var h=g.next();!h.done;h=g.next()){var k=h.value;if(f.includes(k.id)){h={};k=t(k.streams);for(var l=k.next();!l.done;h={dc:h.dc},l=k.next())h.dc=l.value,h.dc.trickModeVideo=e.streams.find(function(m){return function(n){return Te(m.dc.codecs)==Te(n.codecs)}}(h))}}}e=a.i.disableAudio?[]:pp(d,"audio");g=a.i.disableVideo?[]:pp(d,"video");f=a.i.disableText?[]:pp(d,Ee);c=a.i.disableThumbnails?
[]:pp(d,"image");if(!g.length&&!e.length)throw new L(2,4,4004);d=[];e=t(e);for(h=e.next();!h.done;h=e.next())d.push.apply(d,ia(h.value.streams));e=[];g=t(g);for(h=g.next();!h.done;h=g.next())e.push.apply(e,ia(h.value.streams));g=[];f=t(f);for(h=f.next();!h.done;h=f.next())g.push.apply(g,ia(h.value.streams));f=[];c=t(c);for(h=c.next();!h.done;h=c.next())f.push.apply(f,ia(h.value.streams));return{id:b.la.id,mc:d,Hc:e,textStreams:g,imageStreams:f}}
function pp(a,b){return a.filter(function(c){return c.contentType==b})}
function op(a,b,c){b.ea=mp(c,b.la,null);var d=!1,e=tn(c,"Role"),f=e.map(function(B){return B.getAttribute("value")}).filter(Nb),g=void 0,h=b.ea.contentType==Ee;h&&(g="subtitle");e=t(e);for(var k=e.next();!k.done;k=e.next()){k=k.value;var l=k.getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(k=k.getAttribute("value"),k){case "main":d=!0;break;case "caption":case "subtitle":g=k}}l=tn(c,"EssentialProperty");e=null;k=!1;l=t(l);for(var m=l.next();!m.done;m=l.next())m=m.value,
"http://dashif.org/guidelines/trickmode"==m.getAttribute("schemeIdUri")?e=m.getAttribute("value"):k=!0;l=tn(c,"Accessibility");var n=new Map;l=t(l);for(m=l.next();!m.done;m=l.next()){var p=m.value;m=p.getAttribute("schemeIdUri");p=p.getAttribute("value");if("urn:scte:dash:cc:cea-608:2015"==m)if(m=1,null!=p){p=p.split(";");for(var r=t(p),u=r.next();!u.done;u=r.next()){var x=u.value,w=u=void 0;x.includes("=")?(x=x.split("="),u=x[0].startsWith("CC")?x[0]:"CC"+x[0],w=x[1]):(u="CC"+m,2==p.length?m+=2:
m++,w=x);n.set(u,Kf(w))}}else n.set("CC1","und");else if("urn:scte:dash:cc:cea-708:2015"==m)if(m=1,null!=p)for(p=t(p.split(";")),u=p.next();!u.done;u=p.next())u=u.value,x=r=void 0,u.includes("=")?(u=u.split("="),r="svc"+u[0],x=u[1].split(",")[0].split(":").pop()):(r="svc"+m,m++,x=u),n.set(r,Kf(x));else n.set("svc1","und");else"urn:mpeg:dash:role:2011"==m&&null!=p&&(f.push(p),"captions"==p&&(g="caption"))}if(k)return null;k=tn(c,"ContentProtection");var y=Ln(k,a.i.dash.ignoreDrmInfo,a.i.dash.keySystemsByURI),
D=Kf(c.getAttribute("lang")||"und"),C=c.getAttribute("label");(k=tn(c,"Label"))&&k.length&&(k=k[0],k.textContent&&(C=k.textContent));k=tn(c,"Representation");c=k.map(function(B){return qp(a,b,y,g,D,C,d,f,n,B)}).filter(function(B){return!!B});if(0==c.length){e="image"==b.ea.contentType;if(a.i.dash.ignoreEmptyAdaptationSet||h||e)return null;throw new L(2,4,4003);}if(!b.ea.contentType||"application"==b.ea.contentType)for(b.ea.contentType=rp(c[0].mimeType,c[0].codecs),h=t(c),l=h.next();!l.done;l=h.next())l.value.type=
b.ea.contentType;h=t(c);for(l=h.next();!l.done;l=h.next())for(l=l.value,m=t(y.drmInfos),p=m.next();!p.done;p=m.next())p=p.value,p.keyIds=p.keyIds&&l.keyIds?new Set(ia(p.keyIds).concat(ia(l.keyIds))):p.keyIds||l.keyIds;h=k.map(function(B){return B.getAttribute("id")}).filter(Nb);return{id:b.ea.id||"__fake__"+a.A++,contentType:b.ea.contentType,language:D,lg:d,streams:c,drmInfos:y.drmInfos,Jd:e,vf:h}}
function qp(a,b,c,d,e,f,g,h,k,l){b.G=mp(l,b.ea,null);a.c=Math.min(a.c,b.G.pb);if(!sp(b.G))return null;var m=b.O.start;b.bandwidth=An(l,"bandwidth",Fn)||0;var n=b.G.contentType,p=n==Ee||"application"==n;n="image"==n;try{var r=function(G,H,I){return tp(a,G,H,I)};if(b.G.Vb)var u=mo(b,r);else if(b.G.Wa)u=so(b,a.f);else if(b.G.Wb)u=xo(b,r,a.f,!!a.o,a.i.dash.initialSegmentLimit);else{var x=b.G.ua,w=b.O.duration||0;u={rb:function(){return Promise.resolve(Mi(m,w,x))}}}}catch(G){if((p||n)&&4002==G.code)return null;
throw G;}r=tn(l,"ContentProtection");r=On(r,c,a.i.dash.ignoreDrmInfo,a.i.dash.keySystemsByURI);r=new Set(r?[r]:[]);var y=!1;tn(l,"SupplementalProperty").some(function(G){return"tag:dolby.com,2018:dash:EC3_ExtensionType:2018"==G.getAttribute("schemeIdUri")&&"JOC"==G.getAttribute("value")})&&(b.G.mimeType="audio/eac3-joc",y=!0);var D=!1;p&&(D=h.includes("forced_subtitle"));var C;if(n&&((l=tn(l,"EssentialProperty").find(function(G){return["http://dashif.org/thumbnail_tile","http://dashif.org/guidelines/thumbnail_tile"].includes(G.getAttribute("schemeIdUri"))}))&&
(C=l.getAttribute("value")),!C))return null;var B;l=b.G.codecs;b.profiles.includes("http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10")&&(l.includes("hvc1.2.4.L153.B0")||l.includes("hev1.2.4.L153.B0"))&&(B="PQ");var F={id:a.A++,originalId:b.G.id,createSegmentIndex:function(){var G;return J(function(H){if(1==H.a){if(F.segmentIndex)return H.m(0);G=F;return v(H,u.rb(),3)}G.segmentIndex=H.b;z(H)})},segmentIndex:null,mimeType:b.G.mimeType,codecs:b.G.codecs,frameRate:b.G.frameRate,pixelAspectRatio:b.G.pixelAspectRatio,
bandwidth:b.bandwidth,width:b.G.width,height:b.G.height,kind:d,encrypted:0<c.drmInfos.length,drmInfos:c.drmInfos,keyIds:r,language:e,label:f,type:b.ea.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.G.emsgSchemeIdUris,roles:h,forced:D,channelsCount:b.G.rd,audioSamplingRate:b.G.audioSamplingRate,spatialAudio:y,closedCaptions:k,hdr:B,tilesLayout:C};return F}
q.Sb=function(){var a=this,b,c;return J(function(d){switch(d.a){case 1:return b=0,A(d,2),v(d,gp(a),4);case 4:b=d.b;wa(d,3);break;case 2:c=E(d),a.u&&(c.severity=1,a.u.onError(c));case 3:if(!a.u)return d["return"]();hp(a,b);z(d)}})};function hp(a,b){0>a.l||a.j.N(Math.max(3,a.l-b,Qa(a.v)))}
function mp(a,b,c){b=b||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,pixelAspectRatio:void 0,rd:null,audioSamplingRate:null,pb:0};c=c||b.ua;var d=tn(a,"BaseURL"),e=d.map(yn),f=a.getAttribute("contentType")||b.contentType,g=a.getAttribute("mimeType")||b.mimeType,h=a.getAttribute("codecs")||b.codecs,k=An(a,"frameRate",In)||b.frameRate,l=a.getAttribute("sar")||b.pixelAspectRatio,m=tn(a,"InbandEventStream"),n=b.emsgSchemeIdUris.slice();m=t(m);for(var p=m.next();!p.done;p=
m.next())p=p.value.getAttribute("schemeIdUri"),n.includes(p)||n.push(p);m=tn(a,"AudioChannelConfiguration");m=up(m)||b.rd;p=An(a,"audioSamplingRate",Gn)||b.audioSamplingRate;f||(f=rp(g,h));var r=sn(a,"SegmentBase"),u=sn(a,"SegmentTemplate"),x=r?An(r,"availabilityTimeOffset",Hn)||0:0,w=u?An(u,"availabilityTimeOffset",Hn)||0:0;d=d&&d.length?An(d[0],"availabilityTimeOffset",Hn)||0:0;d=b.pb+d+x+w;return{ua:ze(c,e),Vb:r||b.Vb,Wa:sn(a,"SegmentList")||b.Wa,Wb:u||b.Wb,width:An(a,"width",Gn)||b.width,height:An(a,
"height",Gn)||b.height,contentType:f,mimeType:g,codecs:h,frameRate:k,pixelAspectRatio:l,emsgSchemeIdUris:n,id:a.getAttribute("id"),rd:m,audioSamplingRate:p,pb:d}}
function up(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){var c=b.value;if(b=c.getAttribute("schemeIdUri"))if(c=c.getAttribute("value"))switch(b){case "urn:mpeg:dash:outputChannelPositionList:2012":return c.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":b=parseInt(c,10);if(!b)continue;return b;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":b=
parseInt(c,16);if(!b)continue;for(a=0;b;)b&1&&++a,b>>=1;return a;case "urn:mpeg:mpegB:cicp:ChannelConfiguration":if(b=[0,1,2,3,4,5,6,8,2,3,4,7,8,24,8,12,10,12,14,12,14],(c=parseInt(c,10))&&0<c&&c<b.length)return b[c]}}return null}function sp(a){var b=a.Vb?1:0;b+=a.Wa?1:0;b+=a.Wb?1:0;if(0==b)return a.contentType==Ee||"application"==a.contentType?!0:!1;1!=b&&(a.Vb&&(a.Wa=null),a.Wb=null);return!0}
function vp(a,b,c,d){var e,f,g,h,k,l;return J(function(m){if(1==m.a)return e=ze(b,[c]),f=eh(e,a.i.retryParameters),f.method=d,g=a.u.networkingEngine.request(4,f),$g(a.g,g),v(m,g.promise,2);h=m.b;if("HEAD"==d){if(!h.headers||!h.headers.date)return m["return"](0);k=h.headers.date}else k=wb(h.data);l=Date.parse(k);return isNaN(l)?m["return"](0):m["return"](l-Date.now())})}
function lp(a,b,c){var d,e,f,g,h,k,l,m;return J(function(n){switch(n.a){case 1:d=c.map(function(p){return{scheme:p.getAttribute("schemeIdUri"),value:p.getAttribute("value")}}),e=a.i.dash.clockSyncUri,!d.length&&e&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:e}),f=t(d),g=f.next();case 2:if(g.done){n.m(4);break}h=g.value;A(n,5);k=h.scheme;l=h.value;switch(k){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return n.m(7);case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return n.m(8);
case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return m=Date.parse(l),n["return"](isNaN(m)?0:m-Date.now());case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":Ua("NTP UTCTiming scheme is not supported");break;default:Ua("Unrecognized scheme in UTCTiming element",k)}n.m(9);break;case 7:return v(n,vp(a,b,l,"HEAD"),10);case 10:return n["return"](n.b);case 8:return v(n,vp(a,b,l,"GET"),11);case 11:return n["return"](n.b);
case 9:wa(n,3);break;case 5:E(n);case 3:g=f.next();n.m(2);break;case 4:return Ua("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"),n["return"](0)}})}
function np(a,b,c,d){var e=d.getAttribute("schemeIdUri")||"",f=d.getAttribute("value")||"",g=An(d,"timescale",Gn)||1;d=t(tn(d,"Event"));for(var h=d.next();!h.done;h=d.next()){h=h.value;var k=An(h,"presentationTime",Gn)||0,l=An(h,"duration",Gn)||0;k=k/g+b;l=k+l/g;null!=c&&(k=Math.min(k,b+c),l=Math.min(l,b+c));h={schemeIdUri:e,value:f,startTime:k,endTime:l,id:h.getAttribute("id")||"",eventElement:h};a.u.onTimelineRegionAdded(h)}}
function tp(a,b,c,d){var e,f,g,h,k;return J(function(l){if(1==l.a)return e=kh,f=Zi(b,c,d,a.i.retryParameters),g=a.u.networkingEngine,h=g.request(e,f),$g(a.g,h),v(l,h.promise,2);k=l.b;return l["return"](k.data)})}function rp(a,b){return Ve(Pe(a,b))?Ee:a.split("/")[0]}K("shaka.dash.DashParser",fp);ki.mpd=function(){return new fp};ii["application/dash+xml"]=function(){return new fp};ii["video/vnd.mpeg.dash.mpd"]=function(){return new fp};function wp(a,b,c,d){this.a=a;this.type=b;this.R=c;this.segments=d||null}function xp(a,b,c,d){this.id=a;this.name=b;this.a=c;this.value=void 0===d?null:d}xp.prototype.toString=function(){function a(d){return d.name+"="+(isNaN(Number(d.value))?'"'+d.value+'"':d.value)}var b="#"+this.name,c=this.a?this.a.map(a):[];this.value&&c.unshift(this.value);0<c.length&&(b+=":"+c.join(","));return b};
xp.prototype.getAttribute=function(a){var b=this.a.filter(function(c){return c.name==a});return b.length?b[0]:null};function Z(a,b,c){return(a=a.getAttribute(b))?a.value:c||null}function yp(a,b){var c=a.getAttribute(b);if(!c)throw new L(2,4,4023,b);return c.value}function zp(a,b,c){c=void 0===c?[]:c;this.R=b;this.a=a;this.b=c}function Ap(a,b){this.name=a;this.value=b};function Bp(a,b){return a.filter(function(c){return c.name==b})}function Cp(a,b){return a.filter(function(c){return yp(c,"TYPE")==b})}function Dp(a,b){var c=Bp(a,b);return c.length?c[0]:null}function Ep(a,b,c){c=void 0===c?0:c;return(a=Dp(a,b))?Number(a.value):c};function Fp(a){this.b=a;this.a=0}function Gp(a){Hp(a,/[ \t]+/gm)}function Hp(a,b){b.lastIndex=a.a;var c=b.exec(a.b);c=null==c?null:{position:c.index,length:c[0].length,results:c};if(a.a==a.b.length||null==c||c.position!=a.a)return null;a.a+=c.length;return c.results}function Ip(a){return a.a==a.b.length?null:(a=Hp(a,/[^ \t\n]*/gm))?a[0]:null};function Jp(){this.a=0}
function Kp(a,b,c){b=wb(b);b=b.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var d=b.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(d[0]))throw new L(2,4,4015);b=0;for(var e=!0,f=t(d),g=f.next();!g.done;g=f.next())if(g=g.value,/^#(?!EXT)/m.test(g)||e)e=!1;else if(g=Lp(a.a++,g),--a.a,Mp.includes(g.name)){b=1;break}else"EXT-X-STREAM-INF"==g.name&&(e=!0);f=[];e=!0;g=t(lb(d));for(var h=g.next();!h.done;h=g.next()){var k=h.value;h=k.ba;var l=k.item;k=k.next;if(/^#(?!EXT)/m.test(l)||e)e=!1;else{l=Lp(a.a++,
l);if(Np.includes(l.name)){if(1!=b)throw new L(2,4,4017);k=d.splice(h,d.length-h);d=c;e=[];g=[];h=[];l=null;k=t(k);for(var m=k.next();!m.done;m=k.next())m=m.value,/^(#EXT)/.test(m)?(m=Lp(a.a++,m),Mp.includes(m.name)?f.push(m):"EXT-X-MAP"==m.name?l=m:"EXT-X-PART"==m.name?h.push(m):"EXT-X-PRELOAD-HINT"==m.name?"PART"==Z(m,"TYPE")?h.push(m):"MAP"==Z(m,"TYPE")&&(m.name="EXT-X-MAP",l=m):g.push(m)):/^#(?!EXT)/m.test(m)||(m=ze([d],[m.trim()])[0],l&&g.push(l),e.push(new zp(m,g,h)),g=[],h=[]);h.length&&(l&&
g.push(l),e.push(new zp("",g,h)));return new wp(c,b,f,e)}f.push(l);"EXT-X-STREAM-INF"==l.name&&(l.a.push(new Ap("URI",k)),e=!0)}}return new wp(c,b,f)}function Lp(a,b){var c=b.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!c)throw new L(2,4,4016,b);var d=c[1],e=c[2];c=[];var f;if(e){e=new Fp(e);var g;(g=Hp(e,/^([^,=]+)(?:,|$)/g))&&(f=g[1]);for(var h=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;g=Hp(e,h);)c.push(new Ap(g[1],g[2]||g[3]))}return new xp(a,d,c,f)}
var Mp="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP".split(" "),Np="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(" ");function Op(){}function Pp(a){try{var b=Qp(a);return Sg({uri:a,ce:a,data:b.data,headers:{"content-type":b.contentType}})}catch(c){return Qg(c)}}function Qp(a){var b=a.split(":");if(2>b.length||"data"!=b[0])throw new L(2,1,1004,a);b=b.slice(1).join(":").split(",");if(2>b.length)throw new L(2,1,1004,a);var c=b[0];a=window.decodeURIComponent(b.slice(1).join(","));b=c.split(";");c=b[0];var d=!1;1<b.length&&"base64"==b[b.length-1]&&(d=!0,b.pop());var e;d?e=mc(a):e=Ab(a);return{data:e,contentType:c}}
K("shaka.net.DataUriPlugin",Op);Op.parse=Pp;bh("data",Pp);function Rp(){var a=this;this.i=this.u=null;this.Ya=1;this.l=new Map;this.h=new Map;this.Aa=new Set;this.b=new Map;this.a=null;this.H="";this.T=new Jp;this.za=0;this.j=new M(function(){a.Sb()});this.f=Sp;this.o=null;this.ja=0;this.v=Infinity;this.M=this.Ra=0;this.A=new Zg;this.ka=[];this.D=new Map;this.Ia=!1;this.g=new Map;this.J=null;this.X=new Map;this.C=new Map;this.c=!1}q=Rp.prototype;q.configure=function(a){this.i=a};
q.start=function(a,b){var c=this,d,e;return J(function(f){if(1==f.a)return c.u=b,c.c=b.isLowLatencyMode(),v(f,Tp(c,eh([a],c.i.retryParameters),0),2);if(3!=f.a)return d=f.b,c.H=d.uri,v(f,Up(c,d.data),3);e=c.za;0<e&&c.j.N(e);return f["return"](c.o)})};q.stop=function(){this.j&&(this.j.stop(),this.j=null);var a=[];this.A&&(a.push(this.A.destroy()),this.A=null);this.i=this.u=null;this.Aa.clear();this.o=null;this.b.clear();this.h.clear();this.g.clear();this.l.clear();return Promise.all(a)};
q.update=function(){var a=this,b,c,d;return J(function(e){if(1==e.a){if(a.f==Sp)return e["return"]();b=[];a.J=null;c=Array.from(a.b.values());return c.length?v(e,Vp(a,c[0]),2):e.m(2)}for(d=1;d<c.length;d++)b.push(Vp(a,c[d]));return v(e,Promise.all(b),0)})};
function Vp(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u;return J(function(x){if(1==x.a)return c=Wp,d=b.ue,e=new me(d),a.c&&b.ye&&pe(e,new re("_HLS_skip=YES")),v(x,Tp(a,eh([e.toString()],a.i.retryParameters),0),2);if(3!=x.a){f=x.b;g=Kp(a.T,f.data,f.uri);if(1!=g.type)throw new L(2,4,4017);h=Bp(g.R,"EXT-X-DEFINE");k=Xp(a,h);l=b.stream;return v(x,Yp(a,b.Gc,g,l.mimeType,b.nd,k,b.Fe),3)}m=x.b;l.segmentIndex.wb(m,a.a.Ua());m.length&&(n=Ep(g.R,"EXT-X-MEDIA-SEQUENCE",0),p=b.nd.get(n),l.segmentIndex.$a(p));r=m[m.length-
1];if(u=Dp(g.R,"EXT-X-ENDLIST"))Zp(a,c.se),a.a.Fa(r.endTime);z(x)})}q.onExpirationUpdated=function(){};
function Up(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G,H,I,N,T;return J(function(Q){switch(Q.a){case 1:c=Kp(a.T,b,a.H);if(0!=c.type)throw new L(2,4,4022);d=Bp(c.R,"EXT-X-DEFINE");for(var W=t(d),P=W.next();!P.done;P=W.next()){var ja=P.value;P=Z(ja,"NAME");ja=Z(ja,"VALUE");P&&ja&&(a.l.has(P)||a.l.set(P,ja))}e=Bp(c.R,"EXT-X-MEDIA");f=Bp(c.R,"EXT-X-STREAM-INF");W=t(f);for(P=W.next();!P.done;P=W.next()){var qa=P.value;ja=Z(qa,"AUDIO");P=Z(qa,"VIDEO");var ea=Z(qa,"SUBTITLES");qa=$p(a,qa);if(ea){var Za=
Ce(Ee,qa);a.g.set(ea,Za);vc(qa,Za)}ja&&(ea=Be("audio",qa),a.g.set(ja,ea));P&&(ja=Be("video",qa),a.g.set(P,ja))}g=Bp(c.R,"EXT-X-SESSION-DATA");h=t(g);for(k=h.next();!k.done;k=h.next())if(l=k.value,m=Z(l,"DATA-ID"),n=Z(l,"URI"),p=Z(l,"LANGUAGE"),r=Z(l,"VALUE"),u={id:m},n&&(u.uri=ze([a.H],[n])[0]),p&&(u.language=p),r&&(u.value=r),x=new O("sessiondata",u),a.u)a.u.onEvent(x);return v(Q,aq(a,e),2);case 2:W=Cp(e,"CLOSED-CAPTIONS");W=t(W);for(P=W.next();!P.done;P=W.next())ea=P.value,P=bq(ea),ja=yp(ea,"GROUP-ID"),
ea=yp(ea,"INSTREAM-ID"),a.D.get(ja)||a.D.set(ja,new Map),a.D.get(ja).set(ea,P);return v(Q,cq(a,f),3);case 3:return w=Q.b,v(Q,dq(a,e),4);case 4:y=Q.b;if(!a.u)throw new L(2,7,7001);if(a.Ia&&0==w.length)throw new L(2,4,4034);C=D=Infinity;B=t(a.b.values());for(F=B.next();!F.done;F=B.next())G=F.value,D=Math.min(D,G.Yd),"text"!=G.stream.type&&(C=Math.min(C,G.gf-G.Yd));a.f!=Sp?(a.a=new R(0,a.i.defaultPresentationDelay?a.i.defaultPresentationDelay:a.M?a.M:3*a.ja),a.a.Xb(!1)):(a.a=new R(null,0),a.a.Xb(!0));
eq(a);if(a.f!=Sp)a.za=a.v,H=Wp,a.f==H.re&&(I=a.a.Cc,isNaN(a.i.availabilityWindowOverride)||(I=a.i.availabilityWindowOverride),a.a.Hd(I));else for(a.a.Fa(C),a.a.offset(-D),N=t(a.b.values()),F=N.next();!F.done;F=N.next())T=F.value,T.stream.segmentIndex.offset(-D),T.stream.segmentIndex.Sa(0,C);a.o={presentationTimeline:a.a,variants:w,textStreams:y,imageStreams:[],offlineSessionIds:[],minBufferTime:0};a.u.makeTextStreamsForClosedCaptions(a.o);z(Q)}})}
function Xp(a,b){for(var c=new Map,d=t(b),e=d.next();!e.done;e=d.next()){var f=e.value;e=Z(f,"NAME");var g=Z(f,"VALUE");f=Z(f,"IMPORT");e&&g&&c.set(e,g);f&&(e=a.l.get(f))&&c.set(f,e)}return c}
function dq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r;return J(function(u){if(1==u.a)return c=Cp(b,"SUBTITLES"),d=c.map(function(x){var w,y,D;return J(function(C){if(1==C.a){if(w=a.i.disableText)return C["return"](null);A(C,2);return v(C,fq(a,x),4)}if(2!=C.a)return y=C.b,C["return"](y.stream);D=E(C);if(a.i.hls.ignoreTextStreamFailures)return C["return"](null);throw D;})}),v(u,Promise.all(d),2);e=u.b;f=t(c);for(g=f.next();!g.done;g=f.next())if(h=g.value,k=yp(h,"GROUP-ID"),l=a.g.get(k))if(m=a.h.get(k))for(n=
t(m),p=n.next();!p.done;p=n.next())r=p.value,r.stream.codecs=l;return u["return"](e.filter(function(x){return x}))})}function aq(a,b){var c;return J(function(d){if(1==d.a)return b=b.filter(function(e){var f=Z(e,"URI")||"";return"SUBTITLES"!=Z(e,"TYPE")&&""!=f}),b.length?v(d,fq(a,b[0]),2):d.m(2);c=b.slice(1).map(function(e){return fq(a,e)});return v(d,Promise.all(c),0)})}
function cq(a,b){var c,d,e;return J(function(f){if(1==f.a)return c=b.map(function(g){var h,k,l,m,n,p,r,u;return J(function(x){return 1==x.a?(h=Z(g,"FRAME-RATE"),k=Number(yp(g,"BANDWIDTH")),l=Z(g,"RESOLUTION"),m=t(l?l.split("x"):[null,null]),n=m.next().value,p=m.next().value,r=Z(g,"VIDEO-RANGE"),v(x,gq(a,g),2)):(u=x.b)?x["return"](hq(a,u.audio,u.video,k,n,p,h,r)):x["return"]([])})}),v(f,Promise.all(c),2);d=f.b;e=d.reduce(Lb,[]);e=e.filter(function(g){return null!=g});return f["return"](e)})}
function gq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,x;return J(function(w){if(1==w.a)return c=Fe,d=$p(a,b),e=Z(b,"AUDIO"),f=Z(b,"VIDEO"),h=(g=e||f)&&a.h.has(g)?a.h.get(g):[],k={audio:e?h:[],video:f?h:[]},m=!1,n=yp(b,"URI"),p=k.audio.find(function(y){return y&&y.Gc==n}),r=Ce(c.Ja,d),(u=Ce(c.Xa,d))&&!r?l=c.Xa:!h.length&&u&&r?(l=c.Ja,d=[[r,u].join()]):k.audio.length&&p?(l=c.Xa,m=!0):l=k.video.length?c.Xa:c.Ja,m?w.m(2):v(w,iq(a,b,d,l),3);2!=w.a&&(x=w.b);if(x)k[x.stream.type]=[x];else if(null===x)return w["return"](null);
jq(k);return w["return"](k)})}function $p(a,b){var c=[];a.i.disableVideo||c.push("avc1.42E01E");a.i.disableAudio||c.push("mp4a.40.2");var d=Z(b,"CODECS",c.join(",")).split(/\s*,\s*/);c=new Set;var e=[];d=t(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=Te(f);c.has(g)||(e.push(f),c.add(g))}return e}function bq(a){a=Z(a,"LANGUAGE")||"und";return Kf(a)}
function jq(a){a=t(a.audio.concat(a.video));for(var b=a.next();!b.done;b=a.next())if(b=b.value){var c=b.stream.codecs.split(",");c=c.filter(function(d){return"mp4a.40.34"!=d});b.stream.codecs=c.join(",")}}
function hq(a,b,c,d,e,f,g,h){for(var k=t(c),l=k.next();!l.done;l=k.next()){l=l.value.stream;var m=f,n=g,p=h;l&&(l.width=Number(e)||void 0,l.height=Number(m)||void 0,l.frameRate=Number(n)||void 0,l.hdr=p||void 0)}e=a.i.disableAudio;if(!b.length||e)b=[null];e=a.i.disableVideo;if(!c.length||e)c=[null];e=[];b=t(b);for(f=b.next();!f.done;f=b.next())for(f=f.value,g=t(c),h=g.next();!h.done;h=g.next())n=h.value,h=f?f.stream:null,k=n?n.stream:null,l=f?f.stream.drmInfos:null,m=n?n.stream.drmInfos:null,n=(n?
n.Gc:"")+" - "+(f?f.Gc:""),h&&k&&!(l.length&&m.length?0<ei(l,m).length:1)||a.Aa.has(n)||(h={id:a.Ya++,language:h?h.language:"und",primary:!!h&&h.primary||!!k&&k.primary,audio:h,video:k,bandwidth:d,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]},e.push(h),a.Aa.add(n));return e}
function fq(a,b){var c,d,e,f,g,h,k,l,m,n,p,r,u,x;return J(function(w){if(1==w.a){c=yp(b,"GROUP-ID");d="";var y=yp(b,"TYPE").toLowerCase();"subtitles"==y&&(y=Ee);e=y;e!=Ee&&c&&a.g.has(c)&&(d=a.g.get(c));f=kq(yp(b,"URI"),a.l);if(a.b.has(f))return w["return"](a.b.get(f));g=bq(b);h=Z(b,"NAME");k=b.getAttribute("DEFAULT");l="YES"==k;y="audio"==e?(y=Z(b,"CHANNELS"))?parseInt(y.split("/")[0],10):null:null;m=y;y="audio"==e?(y=Z(b,"CHANNELS"))?y.includes("/JOC"):!1:!1;n=y;p=Z(b,"CHARACTERISTICS");r=Z(b,"FORCED");
u="YES"==r;return v(w,lq(a,f,d,e,g,l,h,m,null,p,u,n),2)}x=w.b;a.h.has(c)?a.h.get(c).push(x):a.h.set(c,[x]);if(null==x)return w["return"](null);if(a.b.has(f))return w["return"](a.b.get(f));a.b.set(f,x);return w["return"](x)})}
function iq(a,b,c,d){var e,f,g,h;return J(function(k){if(1==k.a){e=kq(yp(b,"URI"),a.l);if(a.b.has(e))return k["return"](a.b.get(e));var l=Z(b,"CLOSED-CAPTIONS");f="video"==d&&l&&"NONE"!=l?a.D.get(l):null;g=Be(d,c);return v(k,lq(a,e,g,d,"und",!1,null,null,f,null,!1,!1),2)}h=k.b;if(null==h)return k["return"](null);if(a.b.has(e))return k["return"](a.b.get(e));a.b.set(e,h);return k["return"](h)})}
function lq(a,b,c,d,e,f,g,h,k,l,m,n){var p,r,u,x,w,y,D,C,B,F,G,H,I,N,T,Q,W,P,ja,qa,ea,Za,Da,Ia,Cc,jb,Bb,$a,Pb,kf,qb,Zd,Gh,Hh,nf,Sm,Tm,Um,Vm;return J(function(ab){switch(ab.a){case 1:return p=ze([a.H],[b])[0],v(ab,Tp(a,eh([p],a.i.retryParameters),0),2);case 2:r=ab.b;p=r.uri;u=Kp(a.T,r.data,p);if(1!=u.type)throw new L(2,4,4017);x=[];if(u.segments)for(w=t(u.segments),y=w.next();!y.done;y=w.next())D=y.value,C=Bp(D.R,"EXT-X-KEY"),x.push.apply(x,ia(C));B=!1;F=[];G=new Set;H=t(x);for(I=H.next();!I.done;I=
H.next())if(N=I.value,T=yp(N,"METHOD"),"NONE"!=T){B=!0;if("AES-128"==T)return a.Ia=!0,ab["return"](null);Q=yp(N,"KEYFORMAT");if(P=(W=mq[Q])?W(N):null){if(P.keyIds)for(ja=t(P.keyIds),qa=ja.next();!qa.done;qa=ja.next())ea=qa.value,G.add(ea);F.push(P)}}if(B&&!F.length)throw new L(2,4,4026);Za=Bp(u.R,"EXT-X-DEFINE");Da=Xp(a,Za);nq(a,u);return v(ab,oq(a,d,c,u,Da),3);case 3:return Ia=ab.b,pq.includes(Ia)&&(c=""),Cc=new Map,jb=new Map,A(ab,4),v(ab,Yp(a,b,u,Ia,Cc,Da,jb),6);case 6:Bb=ab.b;wa(ab,5);break;case 4:$a=
E(ab);if(4035==$a.code)return Ua("Skipping unsupported HLS stream",Ia,b),ab["return"](null);throw $a;case 5:Pb=Bb[0].startTime;kf=Bb[Bb.length-1].endTime;qb=new S(Bb);Zd=d==Ee?"subtitle":void 0;Gh=[];if(l)for(Hh=t(l.split(",")),nf=Hh.next();!nf.done;nf=Hh.next())Sm=nf.value,Gh.push(Sm);Um=(Tm=Dp(u.R,"EXT-X-SERVER-CONTROL"))?null!=Tm.getAttribute("CAN-SKIP-UNTIL"):!1;Vm={id:a.Ya++,originalId:g,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:qb,mimeType:Ia,codecs:c,kind:Zd,encrypted:B,
drmInfos:F,keyIds:G,language:e,label:g,type:d,primary:f,trickModeVideo:null,emsgSchemeIdUris:null,frameRate:void 0,pixelAspectRatio:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:Gh,forced:m,channelsCount:h,audioSamplingRate:null,spatialAudio:n,closedCaptions:k,hdr:void 0,tilesLayout:void 0};return ab["return"]({stream:Vm,Gc:b,ue:p,Yd:Pb,gf:kf,nd:Cc,Fe:jb,ye:Um})}})}
function nq(a,b){var c=Dp(b.R,"EXT-X-PLAYLIST-TYPE"),d=Dp(b.R,"EXT-X-ENDLIST");d=c&&"VOD"==c.value||d;c=c&&"EVENT"==c.value&&!d;c=!d&&!c;if(d)Zp(a,Sp);else{c?Zp(a,qq):Zp(a,rq);d=Dp(b.R,"EXT-X-TARGETDURATION");if(!d)throw new L(2,4,4024,"EXT-X-TARGETDURATION");d=Number(d.value);c=Dp(b.R,"EXT-X-PART-INF");a.c&&c?(a.Ra=Number(yp(c,"PART-TARGET")),a.v=Math.min(a.Ra,a.v),c=Dp(b.R,"EXT-X-SERVER-CONTROL"),a.M=c?Number(yp(c,"PART-HOLD-BACK")):0):a.v=Math.min(d,a.v);a.ja=Math.max(d,a.ja)}}
function sq(a,b,c,d){c=Dp(c,"EXT-X-MAP");if(!c)return null;var e=yp(c,"URI");d=kq(ze([b],[e])[0],d);b=[d,Z(c,"BYTERANGE","")].join("-");a.X.has(b)||(c=tq(d,c),a.X.set(b,c));return a.X.get(b)}function tq(a,b){var c=0,d=null,e=Z(b,"BYTERANGE");e&&(c=e.split("@"),d=Number(c[0]),c=Number(c[1]),d=c+d-1);return new mi(function(){return[a]},c,d)}
function uq(a,b,c,d,e,f,g,h){var k=d.R,l=kq(d.a,g),m=Dp(k,"EXTINF"),n=g=0,p=null,r=[];if(a.c&&d.b.length){a={};d=t(lb(d.b));for(var u=d.next();!u.done;a={Pc:a.Pc},u=d.next()){u=u.value;var x=u.ba;u=u.item;var w=0==x?c:r[r.length-1];x=0==x?e:w.endTime;var y=Number(Z(u,"DURATION"));y=x+y;var D=0,C=null;"EXT-X-PRELOAD-HINT"==u.name?D=(w=Z(u,"BYTERANGE-START"))?Number(w):0:(D=Z(u,"BYTERANGE"),w=t(vq(w,D)),D=w.next().value,C=w.next().value);u=Z(u,"URI");a.Pc=ze([h],[u])[0];r.push(new oi(x,y,function(B){return function(){return[B.Pc]}}(a),
D,C,b,f,0,Infinity))}}else if(!m)throw new L(2,4,4024,"EXTINF");m?g=e+Number(m.value.split(",")[0]):g=r[r.length-1].endTime;(h=Dp(k,"EXT-X-BYTERANGE"))?(c=t(vq(c,h.value)),n=c.next().value,p=c.next().value):r.length&&(n=r[0].da,p=r[r.length-1].Y);return new oi(e,g,function(){return l.length?[l]:[]},n,p,b,f,0,Infinity,r)}function vq(a,b){var c=0,d=null;b&&(c=b.split("@"),d=Number(c[0]),c=c[1]?Number(c[1]):a.Y+1,d=c+d-1);return[c,d]}
function eq(a){if(a.a){for(var b=t(a.ka),c=b.next();!c.done;c=b.next())a.a.yb(c.value);a.ka=[]}}
function Yp(a,b,c,d,e,f,g){var h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G,H,I,N,T,Q,W,P,ja,qa;return J(function(ea){switch(ea.a){case 1:h=c.segments;l=Ep(c.R,"EXT-X-MEDIA-SEQUENCE",0);n=(m=Dp(c.R,"EXT-X-SKIP"))?Number(Z(m,"SKIPPED-SEGMENTS")):0;p=l+n;if(a.f!=Sp&&e.has(p)){r=e.get(p);ea.m(2);break}if(null!=a.J){ea.m(3);break}k=sq(a,c.a,h[0].R,f);u=a;return v(ea,wq(a,b,k,d,p,!1,h[0],f),4);case 4:u.J=ea.b;case 3:r=a.J;case 2:x=h[0].a;Ya(x.split("/").pop());w=Ep(c.R,"EXT-X-DISCONTINUITY-SEQUENCE");if(a.c&&(g.has(w)||
g.set(w,p),n))for(;g.has(w+1)&&g.get(w+1)<p;)w++;y=a.C.get(w)||0;D=[];C=function(Za){return lb(Za)};B=t(C(h));F=B.next();case 5:if(F.done){ea.m(7);break}H=G=F.value;I=H.ba;N=H.item;T=D[D.length-1];Q=0==I?r:T.endTime;p=l+n+I;e.set(p,Q);k=sq(a,c.a,N.R,f);W=Dp(N.R,"EXT-X-DISCONTINUITY");if(!W){ea.m(8);break}w++;g.set(w,p);return v(ea,xq(a,w,b,k,d,p,N,f,Q),9);case 9:y=ea.b;case 8:!a.c&&(P=a.u.isAutoLowLatencyMode())&&(a.u.enableLowLatencyMode(),a.c=a.u.isLowLatencyMode());ja=Dp(N.R,"EXTINF");a.c||ja?
(qa=uq(a,k,T,N,Q,y,f,c.a),D.push(qa)):a.c||Ua("Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");F=B.next();ea.m(5);break;case 7:return a.ka.push(D),eq(a),ea["return"](D)}})}
function xq(a,b,c,d,e,f,g,h,k){var l,m;return J(function(n){if(1==n.a)return l=0,a.C.has(b)?(l=a.C.get(b),n.m(2)):v(n,wq(a,c,d,e,f,!0,g,h),3);2!=n.a&&(m=n.b,l=k-m,a.C.set(b,l));return n["return"](l)})}
function yq(a,b){var c,d,e,f,g,h;return J(function(k){switch(k.a){case 1:c=kh;d=Zi(b.ga(),b.da,b.Y,a.i.retryParameters);if(a.i.hls.useFullSegmentsForStartTime)return k["return"](Tp(a,d,c));e=Zi(b.ga(),b.da,b.da+2048-1,a.i.retryParameters);A(k,2);return v(k,Tp(a,e,c),4);case 4:return f=k.b,k["return"](f);case 2:g=E(k);if(7001==g.code)throw g;Ua("Unable to fetch the starting part of HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",
e.uris[0]);return v(k,Tp(a,d,c),5);case 5:return h=k.b,k["return"](h)}})}
function wq(a,b,c,d,e,f,g,h){var k,l,m,n,p,r,u,x;return J(function(w){switch(w.a){case 1:k=uq(a,c,null,g,0,0,h,"");if(a.o&&!f&&(l=a.b.get(b),m=l.nd.get(e),void 0!=m))return w["return"](m);d=d.toLowerCase();if(pq.includes(d))throw Ua("Raw formats are not yet supported.  Skipping "+d),new L(1,4,4035);if("video/webm"==d)throw Ua("WebM in HLS is not yet supported.  Skipping."),new L(1,4,4035);if("video/mp4"!=d&&"audio/mp4"!=d){w.m(2);break}n=[yq(a,k)];c&&n.push(yq(a,c));return v(w,Promise.all(n),3);case 3:return p=
w.b,r=p[0],u=p[1]||p[0],w["return"](zq(b,r.uri,r.data,u.data));case 2:if("video/mp2t"!=d){w.m(4);break}return v(w,yq(a,k),5);case 5:return x=w.b,w["return"](Aq(b,x.uri,x.data));case 4:throw new L(2,4,4030,b);}})}
function zq(a,b,c,d){var e=0;(new Qb).box("moov",Ub).box("trak",Ub).box("mdia",Ub).S("mdhd",function(h){e=be(h.reader,h.version).timescale;h.parser.stop()}).parse(d,!0);if(!e)throw new L(2,4,4030,a,b);var f=0,g=!1;(new Qb).box("moof",Ub).box("traf",Ub).S("tfdt",function(h){f=ae(h.reader,h.version).cd/e;g=!0;h.parser.stop()}).parse(c,!0);if(!g)throw new L(2,4,4030,a,b);return f}
function Aq(a,b,c){function d(){f.seek(g+188);h=f.V();71!=h&&(f.seek(g+192),h=f.V());71!=h&&(f.seek(g+204),h=f.V());71!=h&&e();f.fe(1)}function e(){throw new L(2,4,4030,a,b);}for(var f=new Db(c,0),g=0,h=0;;)if(g=f.Z(),h=f.V(),71!=h&&e(),c=f.Bb(),8191==(c&8191))d();else if(c&16384)if(c=(f.V()&48)>>4,0!=c&&2!=c||e(),3==c&&(c=f.V(),f.skip(c)),1!=f.I()>>8)d();else{f.skip(3);c=f.V()>>6;0!=c&&1!=c||e();0==f.V()&&e();c=f.V();var k=f.Bb(),l=f.Bb();return(1073741824*((c&14)>>1)+((k&65534)<<14|(l&65534)>>1))/
9E4}else d()}function kq(a,b){var c=String(a).replace(/%7B/g,"{").replace(/%7D/g,"}"),d=c.match(/{\$\w*}/g);if(d){d=t(d);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=e.slice(2,e.length-1),g=b.get(f);if(g)c=c.replace(e,g);else throw new L(2,4,4039,f);}}return c}
function oq(a,b,c,d,e){var f,g,h,k,l,m,n,p,r,u,x;return J(function(w){if(1==w.a){f=Fe;g=kh;h=kq(d.segments[0].a,e);k=new me(h);l=k.sa.split(".").pop();m=Bq[b];if(n=m[l])return w["return"](n);if(b==f.$)return c&&"vtt"!=c&&"wvtt"!=c?w["return"]("application/mp4"):w["return"]("text/vtt");p=eh([h],a.i.retryParameters);p.method="HEAD";return v(w,Tp(a,p,g),2)}r=w.b;u=r.headers["content-type"];return u?w["return"](u.split(";")[0]):(x=m.mp4,w["return"](x))})}
q.Sb=function(){var a=this,b,c;return J(function(d){if(1==d.a){if(!a.u)return d["return"]();A(d,2);return v(d,a.update(),4)}if(2!=d.a)return b=a.za,a.j.N(b),wa(d,0);c=E(d);if(!a.u)return d["return"]();c.severity=1;a.u.onError(c);a.j.N(.1);z(d)})};function Zp(a,b){a.f=b;a.a&&a.a.Xb(a.f==Sp);a.f!=Sp||a.j.stop()}function Tp(a,b,c){if(!a.A)throw new L(2,7,7001);b=a.u.networkingEngine.request(c,b);$g(a.A,b);return b.promise}K("shaka.hls.HlsParser",Rp);
var pq=["audio/aac","audio/ac3","audio/ec3","audio/mpeg"],Bq={audio:{mp4:"audio/mp4",mp4a:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",m4f:"audio/mp4",cmfa:"audio/mp4",ts:"video/mp2t",aac:"audio/aac",ac3:"audio/ac3",ec3:"audio/ec3",mp3:"audio/mpeg"},video:{mp4:"video/mp4",mp4v:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",m4f:"video/mp4",cmfv:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",m4f:"application/mp4",cmft:"application/mp4",
vtt:"text/vtt",ttml:"application/ttml+xml"}},mq={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(a){var b=yp(a,"METHOD");if(!["SAMPLE-AES","SAMPLE-AES-CTR"].includes(b))return null;b=yp(a,"URI");b=Qp(b);b=pb(b.data);b=Ae("com.widevine.alpha",[{initDataType:"cenc",initData:b}]);if(a=Z(a,"KEYID"))b.keyIds=new Set([a.toLowerCase().substr(2)]);return b},"com.microsoft.playready":function(a){var b=yp(a,"METHOD");if(!["SAMPLE-AES","SAMPLE-AES-CTR"].includes(b))return null;a=yp(a,"URI");a=Qp(a);
a=pb(a.data);a=qn(a);return Ae("com.microsoft.playready",[{initDataType:"cenc",initData:a}])}},Sp="VOD",rq="EVENT",qq="LIVE",Wp={se:Sp,Qf:rq,re:qq};ki.m3u8=function(){return new Rp};ii["application/x-mpegurl"]=function(){return new Rp};ii["application/vnd.apple.mpegurl"]=function(){return new Rp};function Cq(a,b,c,d,e,f){if(200<=c&&299>=c&&202!=c)return{uri:e||d,ce:d,data:b,headers:a,fromCache:!!a["x-shaka-from-cache"]};e=null;try{e=zb(b)}catch(g){}throw new L(401==c||403==c?2:1,1,1001,d,c,e,a,f);};function Dq(){}function Eq(a,b,c,d){var e=new Fq;oh(b.headers).forEach(function(k,l){e.append(l,k)});var f=new Gq,g={Md:!1,oe:!1};a=Hq(a,c,{body:b.body||void 0,headers:e,method:b.method,signal:f.signal,credentials:b.allowCrossSiteCredentials?"include":void 0},g,d,b.streamDataCallback);a=new Pg(a,function(){g.Md=!0;f.abort();return Promise.resolve()});if(b=b.retryParameters.timeout){var h=new M(function(){g.oe=!0;f.abort()});h.N(b/1E3);a["finally"](function(){h.stop()})}return a}
function Hq(a,b,c,d,e,f){var g,h,k,l,m,n,p,r,u,x,w,y,D,C;return J(function(B){switch(B.a){case 1:return g=Iq,h=Jq,n=m=0,p=Date.now(),A(B,2),v(B,g(a,c),4);case 4:return k=B.b,r=k.clone().body.getReader(),x=(u=k.headers.get("Content-Length"))?parseInt(u,10):0,w=function(F){function G(){var H,I;return J(function(N){switch(N.a){case 1:return A(N,2),v(N,r.read(),4);case 4:H=N.b;wa(N,3);break;case 2:return E(N),N["return"]();case 3:H.done||(m+=H.value.byteLength,f&&f(H.value));I=Date.now();if(100<I-p||
H.done)e(I-p,m-n,x-m),n=m,p=I;H.done?F.close():(F.enqueue(H.value),G());z(N)}})}G()},new h({start:w}),v(B,k.arrayBuffer(),5);case 5:l=B.b;wa(B,3);break;case 2:y=E(B);if(d.Md)throw new L(1,1,7001,a,b);if(d.oe)throw new L(1,1,1003,a,b);throw new L(1,1,1002,a,y,b);case 3:return D={},C=k.headers,C.forEach(function(F,G){D[G.trim()]=F}),B["return"](Cq(D,l,k.status,a,k.url,b))}})}
function Kq(){if(window.ReadableStream)try{new ReadableStream({})}catch(a){return!1}else return!1;return!(!window.fetch||!window.AbortController)}K("shaka.net.HttpFetchPlugin",Dq);Dq.isSupported=Kq;Dq.parse=Eq;var Iq=window.fetch,Gq=window.AbortController,Jq=window.ReadableStream,Fq=window.Headers;Kq()&&(bh("http",Eq,2,!0),bh("https",Eq,2,!0));function Lq(){}
function Mq(a,b,c,d){var e=new Nq,f=Date.now(),g=0,h=new Promise(function(k,l){e.open(b.method,a,!0);e.responseType="arraybuffer";e.timeout=b.retryParameters.timeout;e.withCredentials=b.allowCrossSiteCredentials;e.onabort=function(){l(new L(1,1,7001,a,c))};e.onload=function(n){n=n.target;var p=n.getAllResponseHeaders().trim().split("\r\n"),r={};p=t(p);for(var u=p.next();!u.done;u=p.next())u=u.value.split(": "),r[u[0].toLowerCase()]=u.slice(1).join(": ");try{var x=Cq(r,n.response,n.status,a,n.responseURL,
c);k(x)}catch(w){l(w)}};e.onerror=function(n){l(new L(1,1,1002,a,n,c))};e.ontimeout=function(){l(new L(1,1,1003,a,c))};e.onprogress=function(n){var p=Date.now();if(100<p-f||n.lengthComputable&&n.loaded==n.total)d(p-f,n.loaded-g,n.total-n.loaded),g=n.loaded,f=p};for(var m in b.headers)e.setRequestHeader(m.toLowerCase(),b.headers[m]);e.send(b.body)});return new Pg(h,function(){e.abort();return Promise.resolve()})}K("shaka.net.HttpXHRPlugin",Lq);Lq.parse=Mq;var Nq=window.XMLHttpRequest;
bh("http",Mq,1,!0);bh("https",Mq,1,!0);function Oq(){this.a=this.f=this.b=0;this.c=new Map;this.g=0}function Pq(a,b){a.b+=b;var c=a.g;a.g++;a.c.set(c,b);return c}Oq.prototype.close=function(a,b){if(this.c.has(a)){var c=this.c.get(a);this.c["delete"](a);this.f+=c;this.a+=b}};function Qq(a){var b=this;this.K=a;this.a=new Map;this.F=new bf(function(){var c=Array.from(b.a.values());return Promise.all(c.map(function(d){return d["catch"](function(){})}))});this.b=[];this.be=function(){};this.ae=function(){};this.Kb=new Oq}Qq.prototype.destroy=function(){return this.F.destroy()};function Rq(a,b,c){a.be=b;a.ae=c}function Sq(a){var b=a.b.map(function(c){return c()});a.b=[];return Promise.all(b)}
function Tq(a,b,c,d,e,f){cf(a.F);var g=Pq(a.Kb,d);d=(a.a.get(b)||Promise.resolve()).then(function(){var h,k,l,m,n,p,r;return J(function(u){if(1==u.a)return v(u,Uq(a,c),2);h=u.b;if(a.F.a)throw new L(2,9,7001);if(e)for(m in k=pb(h),l=new pn(k),l.data)n=Number(m),p=l.data[n],r=l.a[n],a.ae(p,r);a.Kb.close(g,h.byteLength);var x=a.Kb;a.be(0==x.b?0:x.f/x.b,a.Kb.a);return u["return"](f(h))})});a.a.set(b,d);return d}
function Vq(a,b,c){cf(a.F);var d=(a.a.get(b)||Promise.resolve()).then(function(){return J(function(e){return v(e,c(),0)})});a.a.set(b,d)}function Wq(a){return J(function(b){return 1==b.a?v(b,Promise.all(a.a.values()),2):b["return"](a.Kb.a)})}function Uq(a,b){var c,d,e,f;return J(function(g){if(1==g.a)return c=kh,d=a.K.request(c,b),e=function(){return d.abort()},a.b.push(e),v(g,d.promise,2);f=g.b;vc(a.b,e);return g["return"](f.data)})};function Xq(a,b){var c=this;this.c=a;this.b=a.objectStore(b);this.a=new Ge;a.onabort=function(d){d.preventDefault();c.a.reject()};a.onerror=function(d){d.preventDefault();c.a.reject()};a.oncomplete=function(){c.a.resolve()}}Xq.prototype.abort=function(){var a=this;return J(function(b){if(1==b.a){try{a.c.abort()}catch(c){}A(b,2);return v(b,a.a,4)}if(2!=b.a)return wa(b,0);E(b);z(b)})};
function Yq(a,b){return new Promise(function(c,d){var e=a.b.openCursor();e.onerror=d;e.onsuccess=function(){var f;return J(function(g){if(1==g.a){if(null==e.result)return c(),g["return"]();f=e.result;return v(g,b(f.key,f.value,f),2)}f["continue"]();z(g)})}})}Xq.prototype.store=function(){return this.b};Xq.prototype.promise=function(){return this.a};function Zq(a){this.b=a;this.a=[]}Zq.prototype.destroy=function(){return Promise.all(this.a.map(function(a){return a.abort()}))};function $q(a,b){return ar(a,b,"readwrite")}function ar(a,b,c){c=a.b.transaction([b],c);var d=new Xq(c,b);a.a.push(d);d.promise().then(function(){vc(a.a,d)},function(){vc(a.a,d)});return d};function br(a,b,c){this.b=new Zq(a);this.c=b;this.a=c}q=br.prototype;q.destroy=function(){return this.b.destroy()};q.hasFixedKeySpace=function(){return!0};q.addSegments=function(){return cr(this.c)};q.removeSegments=function(a,b){return dr(this,this.c,a,b)};q.getSegments=function(a){var b=this,c;return J(function(d){if(1==d.a)return v(d,er(b,b.c,a),2);c=d.b;return d["return"](c.map(function(e){return b.Nd(e)}))})};q.addManifests=function(){return cr(this.a)};
q.updateManifestExpiration=function(a,b){var c=$q(this.b,this.a),d=c.store();d.get(a).onsuccess=function(e){if(e=e.target.result)e.expiration=b,d.put(e,a)};return c.promise()};q.removeManifests=function(a,b){return dr(this,this.a,a,b)};q.getManifests=function(a){var b=this,c;return J(function(d){if(1==d.a)return v(d,er(b,b.a,a),2);c=d.b;return d["return"](Promise.all(c.map(function(e){return b.Jb(e)})))})};
q.getAllManifests=function(){var a=this,b,c;return J(function(d){return 1==d.a?(b=ar(a.b,a.a,"readonly"),c=new Map,v(d,Yq(b,function(e,f){var g;return J(function(h){if(1==h.a)return v(h,a.Jb(f),2);g=h.b;c.set(e,g);z(h)})}),2)):3!=d.a?v(d,b.promise(),3):d["return"](c)})};q.Nd=function(a){return a};q.Jb=function(a){return Promise.resolve(a)};function cr(a){return Promise.reject(new L(2,9,9011,"Cannot add new value to "+a))}
q.add=function(a,b){var c=this,d,e,f,g,h,k,l;return J(function(m){if(1==m.a){d=$q(c.b,a);e=d.store();f=[];g={};h=t(b);for(k=h.next();!k.done;g={cc:g.cc},k=h.next())l=k.value,g.cc=e.add(l),g.cc.onsuccess=function(n){return function(){f.push(n.cc.result)}}(g);return v(m,d.promise(),2)}return m["return"](f)})};
function dr(a,b,c,d){a=$q(a.b,b);b=a.store();var e={};c=t(c);for(var f=c.next();!f.done;e={bc:e.bc},f=c.next())e.bc=f.value,b["delete"](e.bc).onsuccess=function(g){return function(){return d(g.bc)}}(e);return a.promise()}
function er(a,b,c){var d,e,f,g,h,k,l;return J(function(m){if(1==m.a){d=ar(a.b,b,"readonly");e=d.store();f={};g=[];h={};k=t(c);for(l=k.next();!l.done;h={Gb:h.Gb,Eb:h.Eb},l=k.next())h.Eb=l.value,h.Gb=e.get(h.Eb),h.Gb.onsuccess=function(n){return function(){void 0==n.Gb.result&&g.push(n.Eb);f[n.Eb]=n.Gb.result}}(h);return v(m,d.promise(),2)}if(g.length)throw new L(2,9,9012,"Could not find values for "+g);return m["return"](c.map(function(n){return f[n]}))})};function fr(a){this.a=new Zq(a)}fr.prototype.destroy=function(){return this.a.destroy()};fr.prototype.getAll=function(){var a=this,b,c;return J(function(d){return 1==d.a?(b=ar(a.a,"session-ids","readonly"),c=[],v(d,Yq(b,function(e,f){c.push(f)}),2)):3!=d.a?v(d,b.promise(),3):d["return"](c)})};fr.prototype.add=function(a){var b=$q(this.a,"session-ids"),c=b.store();a=t(a);for(var d=a.next();!d.done;d=a.next())c.add(d.value);return b.promise()};
fr.prototype.remove=function(a){var b=this,c;return J(function(d){return 1==d.a?(c=$q(b.a,"session-ids"),v(d,Yq(c,function(e,f,g){a.includes(f.sessionId)&&g["delete"]()}),2)):v(d,c.promise(),0)})};function gr(){this.a=new Map}gr.prototype.destroy=function(){for(var a=[],b=t(this.a.values()),c=b.next();!c.done;c=b.next())a.push(c.value.destroy());this.a.clear();return Promise.all(a)};gr.prototype.init=function(){var a=this;hr.forEach(function(e,f){var g=e();g&&a.a.set(f,g)});for(var b=[],c=t(this.a.values()),d=c.next();!d.done;d=c.next())b.push(d.value.init());return Promise.all(b)};
function ir(a){var b=null;a.a.forEach(function(c,d){c.getCells().forEach(function(e,f){e.hasFixedKeySpace()||b||(b={path:{Ea:d,fa:f},fa:e})})});if(b)return b;throw new L(2,9,9013,"Could not find a cell that supports add-operations");}function jr(a,b){a.a.forEach(function(c,d){c.getCells().forEach(function(e,f){b({Ea:d,fa:f},e)})})}
function kr(a,b,c){a=a.a.get(b);if(!a)throw new L(2,9,9013,"Could not find mechanism with name "+b);b=a.getCells().get(c);if(!b)throw new L(2,9,9013,"Could not find cell with name "+c);return b}function lr(a,b){a.a.forEach(function(c){b(c.getEmeSessionCell())})}function mr(a){var b=Array.from(a.a.keys());if(!b.length)throw new L(2,9,9E3,"No supported storage mechanisms found");return a.a.get(b[0]).getEmeSessionCell()}
function nr(a){var b,c,d;return J(function(e){return 1==e.a?(b=Array.from(a.a.values()),c=0<b.length,c||(d=hr,d.forEach(function(f){(f=f())&&b.push(f)})),v(e,Promise.all(b.map(function(f){return f.erase()})),2)):c?e.m(0):v(e,Promise.all(b.map(function(f){return f.destroy()})),0)})}function or(a,b){hr.set(a,b)}K("shaka.offline.StorageMuxer",gr);gr.unregister=function(a){hr["delete"](a)};gr.register=or;gr.prototype.destroy=gr.prototype.destroy;var hr=new Map;function pr(){br.apply(this,arguments)}ra(pr,br);pr.prototype.updateManifestExpiration=function(a,b){var c=this,d,e,f;return J(function(g){d=$q(c.b,c.a);e=d.store();f=new Ge;e.get(a).onsuccess=function(h){(h=h.target.result)?(h.expiration=b,e.put(h),f.resolve()):f.reject(new L(2,9,9012,"Could not find values for "+a))};return v(g,Promise.all([d.promise(),f]),0)})};
pr.prototype.Jb=function(a){var b,c,d,e,f,g;return J(function(h){if(1==h.a){b=[];for(c=0;c<a.periods.length;++c)d=c==a.periods.length-1?a.duration:a.periods[c+1].startTime,e=d-a.periods[c].startTime,f=qr(a.periods[c],e),b.push(f);return v(h,No(b),2)}g=h.b;return h["return"]({creationTime:0,originalManifestUri:a.originalManifestUri,duration:a.duration,size:a.size,expiration:null==a.expiration?Infinity:a.expiration,streams:g,sessionIds:a.sessionIds,drmInfo:a.drmInfo,appMetadata:a.appMetadata})})};
function qr(a,b){rr(a);for(var c=t(a.streams),d=c.next();!d.done;d=c.next());return a.streams.map(function(e){return sr(e,a.startTime,b)})}
function sr(a,b,c){var d=a.initSegmentUri?tr(a.initSegmentUri):null,e=b+a.presentationTimeOffset,f=b+c;return{id:a.id,originalId:null,primary:a.primary,type:a.contentType,mimeType:a.mimeType,codecs:a.codecs,frameRate:a.frameRate,pixelAspectRatio:void 0,hdr:void 0,kind:a.kind,language:a.language,label:a.label,width:a.width,height:a.height,initSegmentKey:d,encrypted:a.encrypted,keyIds:new Set([a.keyId]),segments:a.segments.map(function(g){var h=tr(g.uri);return{startTime:b+g.startTime,endTime:b+g.endTime,
dataKey:h,initSegmentKey:d,appendWindowStart:b,appendWindowEnd:f,timestampOffset:e}}),variantIds:a.variantIds,roles:[],forced:!1,audioSamplingRate:null,channelsCount:null,spatialAudio:!1,closedCaptions:null,tilesLayout:void 0}}pr.prototype.Nd=function(a){return{data:a.data}};function tr(a){var b;if((b=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a))||(b=/^offline:segment\/([0-9]+)$/.exec(a)))return Number(b[1]);throw new L(2,9,9004,"Could not parse uri "+a);}
function rr(a){var b=a.streams.filter(function(h){return"audio"==h.contentType});a=a.streams.filter(function(h){return"video"==h.contentType});if(!b.every(function(h){return h.variantIds})||!a.every(function(h){return h.variantIds})){for(var c=t(b),d=c.next();!d.done;d=c.next())d.value.variantIds=[];c=t(a);for(d=c.next();!d.done;d=c.next())d.value.variantIds=[];c=0;if(a.length&&!b.length){var e=c++,f=t(a);for(d=f.next();!d.done;d=f.next())d.value.variantIds.push(e)}if(!a.length&&b.length)for(e=c++,
f=t(b),d=f.next();!d.done;d=f.next())d.value.variantIds.push(e);if(a.length&&b.length)for(b=t(b),d=b.next();!d.done;d=b.next())for(d=d.value,e=t(a),f=e.next();!f.done;f=e.next()){f=f.value;var g=c++;d.variantIds.push(g);f.variantIds.push(g)}}};function ur(){br.apply(this,arguments)}ra(ur,br);
ur.prototype.Jb=function(a){var b,c,d,e,f,g;return J(function(h){if(1==h.a){b=[];for(c=0;c<a.periods.length;++c){d=c==a.periods.length-1?a.duration:a.periods[c+1].startTime;e=d-a.periods[c].startTime;for(var k=a.periods[c],l=[],m=t(k.streams),n=m.next();!n.done;n=m.next())n=n.value,0!=n.variantIds.length&&l.push(vr(n,k.startTime,k.startTime+e));f=l;b.push(f)}return v(h,No(b),2)}g=h.b;return h["return"]({appMetadata:a.appMetadata,creationTime:0,drmInfo:a.drmInfo,duration:a.duration,expiration:null==
a.expiration?Infinity:a.expiration,originalManifestUri:a.originalManifestUri,sessionIds:a.sessionIds,size:a.size,streams:g})})};
function vr(a,b,c){return{id:a.id,originalId:a.originalId,primary:a.primary,type:a.contentType,mimeType:a.mimeType,codecs:a.codecs,frameRate:a.frameRate,pixelAspectRatio:a.pixelAspectRatio,hdr:void 0,kind:a.kind,language:a.language,label:a.label,width:a.width,height:a.height,encrypted:a.encrypted,keyIds:new Set([a.keyId]),segments:a.segments.map(function(d){return{startTime:b+d.startTime,endTime:b+d.endTime,initSegmentKey:a.initSegmentKey,appendWindowStart:b,appendWindowEnd:c,timestampOffset:b-a.presentationTimeOffset,
dataKey:d.dataKey}}),variantIds:a.variantIds,roles:[],forced:!1,audioSamplingRate:null,channelsCount:null,spatialAudio:!1,closedCaptions:null,tilesLayout:void 0}};function wr(){br.apply(this,arguments)}ra(wr,br);wr.prototype.hasFixedKeySpace=function(){return!1};wr.prototype.addSegments=function(a){return this.add(this.c,a)};wr.prototype.addManifests=function(a){return this.add(this.a,a)};wr.prototype.Jb=function(a){null==a.expiration&&(a.expiration=Infinity);return Promise.resolve(a)};function xr(){this.h=this.f=this.c=this.b=this.a=this.g=null}q=xr.prototype;
q.init=function(){var a=this,b=new Ge,c=window.indexedDB.open("shaka_offline_db",5);c.onsuccess=function(){var d=c.result;a.g=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new pr(d,"segment","manifest"):null;a.a=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new ur(d,"segment-v2","manifest-v2"):null;a.b=e;e=d.objectStoreNames;e=e.contains("manifest-v3")&&e.contains("segment-v3")?new ur(d,"segment-v3","manifest-v3"):null;a.c=e;e=d.objectStoreNames;
e=e.contains("manifest-v5")&&e.contains("segment-v5")?new wr(d,"segment-v5","manifest-v5"):null;a.f=e;d=d.objectStoreNames.contains("session-ids")?new fr(d):null;a.h=d;b.resolve()};c.onupgradeneeded=function(){for(var d=c.result,e=t(["segment-v5","manifest-v5","session-ids"]),f=e.next();!f.done;f=e.next())f=f.value,d.objectStoreNames.contains(f)||d.createObjectStore(f,{autoIncrement:!0})};c.onerror=function(d){b.reject(new L(2,9,9001,c.error));d.preventDefault()};return b};
q.destroy=function(){var a=this;return J(function(b){switch(b.a){case 1:if(!a.a){b.m(2);break}return v(b,a.a.destroy(),2);case 2:if(!a.b){b.m(4);break}return v(b,a.b.destroy(),4);case 4:if(!a.c){b.m(6);break}return v(b,a.c.destroy(),6);case 6:if(!a.f){b.m(8);break}return v(b,a.f.destroy(),8);case 8:if(!a.h){b.m(10);break}return v(b,a.h.destroy(),10);case 10:a.g&&a.g.close(),z(b)}})};
q.getCells=function(){var a=new Map;this.a&&a.set("v1",this.a);this.b&&a.set("v2",this.b);this.c&&a.set("v3",this.c);this.f&&a.set("v5",this.f);return a};q.getEmeSessionCell=function(){return this.h};
q.erase=function(){var a=this;return J(function(b){switch(b.a){case 1:if(!a.a){b.m(2);break}return v(b,a.a.destroy(),2);case 2:if(!a.b){b.m(4);break}return v(b,a.b.destroy(),4);case 4:if(!a.c){b.m(6);break}return v(b,a.c.destroy(),6);case 6:if(!a.f){b.m(8);break}return v(b,a.f.destroy(),8);case 8:return a.g&&a.g.close(),v(b,yr(),10);case 10:return a.g=null,a.a=null,a.b=null,a.c=null,a.f=null,v(b,a.init(),0)}})};
function yr(){var a=new Ge,b=window.indexedDB.deleteDatabase("shaka_offline_db");b.onblocked=function(){};b.onsuccess=function(){a.resolve()};b.onerror=function(c){a.reject(new L(2,9,9001,b.error));c.preventDefault()};return a}or("idb",function(){return ec()||!window.indexedDB?null:new xr});function zr(a,b,c,d){this.a=a;this.g=b;this.f=c;this.c=d;this.b=["offline:",a,"/",b,"/",c,"/",d].join("")}zr.prototype.Ea=function(){return this.g};zr.prototype.fa=function(){return this.f};zr.prototype.key=function(){return this.c};zr.prototype.toString=function(){return this.b};
function Ar(a){a=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);if(null==a)return null;var b=a[1];if("manifest"!=b&&"segment"!=b)return null;var c=a[2];if(!c)return null;var d=a[3];return d&&null!=b?new zr(b,c,d,Number(a[4])):null};function Br(a,b){this.b=a;this.a=b}
function Cr(a,b){var c=new R(null,0);c.Fa(b.duration);var d=b.streams.filter(function(l){return"audio"==l.type}),e=b.streams.filter(function(l){return"video"==l.type});d=Dr(a,d,e,c);e=b.streams.filter(function(l){return l.type==Ee}).map(function(l){return Er(a,l,c)});var f=b.streams.filter(function(l){return"image"==l.type}).map(function(l){return Er(a,l,c)}),g=b.drmInfo?[b.drmInfo]:[];if(b.drmInfo)for(var h=t(d.values()),k=h.next();!k.done;k=h.next())k=k.value,k.audio&&k.audio.encrypted&&(k.audio.drmInfos=
g),k.video&&k.video.encrypted&&(k.video.drmInfos=g);return{presentationTimeline:c,minBufferTime:2,offlineSessionIds:b.sessionIds,variants:Array.from(d.values()),textStreams:e,imageStreams:f}}
function Dr(a,b,c,d){for(var e=new Set,f=t(b),g=f.next();!g.done;g=f.next()){var h=t(g.value.variantIds);for(g=h.next();!g.done;g=h.next())e.add(g.value)}f=t(c);for(g=f.next();!g.done;g=f.next())for(h=t(g.value.variantIds),g=h.next();!g.done;g=h.next())e.add(g.value);f=new Map;e=t(e);for(g=e.next();!g.done;g=e.next())g=g.value,f.set(g,{id:g,language:"",primary:!1,audio:null,video:null,bandwidth:0,allowedByApplication:!0,allowedByKeySystem:!0,decodingInfos:[]});b=t(b);for(e=b.next();!e.done;e=b.next())for(e=
e.value,g=Er(a,e,d),h=t(e.variantIds),e=h.next();!e.done;e=h.next())e=f.get(e.value),e.language=g.language,e.primary=e.primary||g.primary,e.audio=g;c=t(c);for(b=c.next();!b.done;b=c.next())for(e=b.value,b=Er(a,e,d),g=t(e.variantIds),e=g.next();!e.done;e=g.next())e=f.get(e.value),e.primary=e.primary||b.primary,e.video=b;return f}
function Er(a,b,c){var d=b.segments.map(function(e){return Fr(a,e)});c.yb(d);return{id:b.id,originalId:b.originalId,createSegmentIndex:function(){return Promise.resolve()},segmentIndex:new S(d),mimeType:b.mimeType,codecs:b.codecs,width:b.width||void 0,height:b.height||void 0,frameRate:b.frameRate,pixelAspectRatio:b.pixelAspectRatio,hdr:b.hdr,kind:b.kind,encrypted:b.encrypted,drmInfos:[],keyIds:b.keyIds,language:b.language,label:b.label,type:b.type,primary:b.primary,trickModeVideo:null,emsgSchemeIdUris:null,
roles:b.roles,forced:b.forced,channelsCount:b.channelsCount,audioSamplingRate:b.audioSamplingRate,spatialAudio:b.spatialAudio,closedCaptions:b.closedCaptions,tilesLayout:b.tilesLayout}}function Fr(a,b){var c=new zr("segment",a.b,a.a,b.dataKey);return new oi(b.startTime,b.endTime,function(){return[c.toString()]},0,null,null!=b.initSegmentKey?Gr(a,b.initSegmentKey):null,b.timestampOffset,b.appendWindowStart,b.appendWindowEnd)}
function Gr(a,b){var c=new zr("segment",a.b,a.a,b);return new mi(function(){return[c.toString()]},0,null)};function Hr(){this.a=null}q=Hr.prototype;q.configure=function(){};
q.start=function(a,b){var c=this,d,e,f,g,h,k,l;return J(function(m){switch(m.a){case 1:d=Ar(a);c.a=d;if(null==d||"manifest"!=d.a)throw new L(2,1,9004,a);e=new gr;va(m);return v(m,e.init(),4);case 4:return v(m,kr(e,d.Ea(),d.fa()),5);case 5:return f=m.b,v(m,f.getManifests([d.key()]),6);case 6:return g=m.b,h=g[0],k=new Br(d.Ea(),d.fa()),l=Cr(k,h),b.makeTextStreamsForClosedCaptions(l),m["return"](l);case 2:return xa(m),v(m,e.destroy(),7);case 7:ya(m,0)}})};q.stop=function(){return Promise.resolve()};
q.update=function(){};q.onExpirationUpdated=function(a,b){var c=this,d,e,f,g,h,k,l;return J(function(m){switch(m.a){case 1:return d=c.a,e=new gr,A(m,2,3),v(m,e.init(),5);case 5:return v(m,kr(e,d.Ea(),d.fa()),6);case 6:return f=m.b,v(m,f.getManifests([d.key()]),7);case 7:g=m.b;h=g[0];k=h.sessionIds.includes(a);l=void 0==h.expiration||h.expiration>b;if(!k||!l){m.m(3);break}return v(m,f.updateManifestExpiration(d.key(),b),3);case 3:return xa(m),v(m,e.destroy(),10);case 10:ya(m,0);break;case 2:E(m),m.m(3)}})};
ii["application/x-offline-manifest"]=function(){return new Hr};function Ir(){}function Jr(a){var b=Ar(a);b&&"manifest"==b.a?(a={uri:a,ce:a,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}},a=Sg(a)):a=b&&"segment"==b.a?Kr(b.key(),b):Qg(new L(2,1,9004,a));return a}
function Kr(a,b){var c=new gr;return Sg(void 0).W(function(){return c.init()}).W(function(){return kr(c,b.Ea(),b.fa())}).W(function(d){return d.getSegments([b.key()])}).W(function(d){return{uri:b,data:d[0].data,headers:{}}})["finally"](function(){return c.destroy()})}K("shaka.offline.OfflineScheme",Ir);Ir.plugin=Jr;bh("offline",Jr);function Lr(a,b,c){var d,e,f,g,h,k;return J(function(l){switch(l.a){case 1:d=[];for(var m=[],n=t(c),p=n.next();!p.done;p=n.next()){p=p.value;for(var r=!1,u=t(m),x=u.next();!x.done;x=u.next())if(x=x.value,Mr(x.info,p)){x.sessionIds.push(p.sessionId);r=!0;break}r||m.push({info:p,sessionIds:[p.sessionId]})}e=t(m);f=e.next();case 2:if(f.done){l.m(4);break}g=f.value;h=Nr(a,b,g);return v(l,h,5);case 5:k=l.b;d=d.concat(k);f=e.next();l.m(2);break;case 4:return l["return"](d)}})}
function Nr(a,b,c){var d,e;return J(function(f){switch(f.a){case 1:return d=new rh({xb:b,onError:function(){},zc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),A(f,2),d.configure(a),v(f,zh(d,c.info.keySystem,c.info.licenseUri,c.info.serverCertificate,c.info.audioCapabilities,c.info.videoCapabilities),4);case 4:wa(f,3);break;case 2:return E(f),v(f,d.destroy(),5);case 5:return f["return"]([]);case 3:return A(f,6),v(f,Lh(d),8);case 8:wa(f,7);break;case 6:return E(f),v(f,d.destroy(),
9);case 9:return f["return"]([]);case 7:return e=[],v(f,Promise.all(c.sessionIds.map(function(g){return J(function(h){if(1==h.a)return A(h,2),v(h,Mh(d,g),4);if(2!=h.a)return e.push(g),wa(h,0);E(h);z(h)})})),10);case 10:return v(f,d.destroy(),11);case 11:return f["return"](e)}})}
function Mr(a,b){function c(d,e){return d.robustness==e.robustness&&d.contentType==e.contentType}return a.keySystem==b.keySystem&&a.licenseUri==b.licenseUri&&wc(a.audioCapabilities,b.audioCapabilities,c)&&wc(a.videoCapabilities,b.videoCapabilities,c)};function Or(a,b,c){var d=b.presentationTimeline.getDuration();b=Pr(b);return{offlineUri:null,originalManifestUri:a,duration:d,size:0,expiration:Infinity,tracks:b,appMetadata:c}}function Qr(a,b){var c=Cr(new Br(a.Ea(),a.fa()),b),d=b.appMetadata||{};c=Pr(c);return{offlineUri:a.toString(),originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:b.expiration,tracks:c,appMetadata:d}}
function Pr(a){var b=[],c=sg(a.variants);c=t(c);for(var d=c.next();!d.done;d=c.next())b.push(kg(d.value));a=t(a.textStreams);for(c=a.next();!c.done;c=a.next())b.push(lg(c.value));return b};function Rr(){this.a={}}function Sr(a,b,c){c=c.endTime-c.startTime;return Tr(a,b)*c}function Tr(a,b){var c=a.a[b];null==c&&(c=0);return c};function Ur(a){var b=this;if(a&&a.constructor!=U)throw new L(2,9,9008);this.K=this.i=null;a?(this.i=a.i,this.K=a.Nb()):(this.i=Xj(),this.K=new ah);this.Ec=[];this.Tb=[];this.ud=[];var c=!a;this.F=new bf(function(){var d,e,f,g,h;return J(function(k){switch(k.a){case 1:return v(k,Promise.all(b.ud.map(function(l){return Sq(l)})),2);case 2:d=function(){};e=[];f=t(b.Tb);for(g=f.next();!g.done;g=f.next())h=g.value,e.push(h.then(d,d));return v(k,Promise.all(e),3);case 3:if(!c){k.m(4);break}return v(k,b.K.destroy(),
4);case 4:b.i=null,b.K=null,z(k)}})})}function Vr(){if($b())a:{var a=t(hr.values());for(var b=a.next();!b.done;b=a.next())if(b=b.value,b=b()){b.destroy();a=!0;break a}a=!1}else a=!1;return a}q=Ur.prototype;q.destroy=function(){return this.F.destroy()};
q.configure=function(a,b){2==arguments.length&&"string"==typeof a&&(a=Vj(a,b));a.manifest&&a.manifest.dash&&"defaultPresentationDelay"in a.manifest.dash&&(Hb("manifest.dash.defaultPresentationDelay configuration","Please Use manifest.defaultPresentationDelay instead."),a.manifest.defaultPresentationDelay=a.manifest.dash.defaultPresentationDelay,delete a.manifest.dash.defaultPresentationDelay);return Zj(this.i,a)};q.getConfiguration=function(){var a=Xj();Zj(a,this.i,Xj());return a};q.Nb=function(){return this.K};
q.store=function(a,b,c){var d=this,e=this.getConfiguration(),f=new Qq(this.K);this.ud.push(f);b=Wr(this,a,b||{},function(){var h;return J(function(k){if(1==k.a)return v(k,hi(a,d.K,e.manifest.retryParameters,c||null),2);h=k.b;return k["return"](Ob(h))})},e,f);var g=new Pg(b,function(){return Sq(f)});g["finally"](function(){vc(d.ud,f)});g.then=function(h){Hb("shaka.offline.Storage.store.then","Storage operations now return a shaka.util.AbortableOperation, rather than a promise.  Please update to conform to this new API; you can use the |chain| method instead.");
return g.promise.then(h)};return Xr(this,g)};q.Ye=function(){Hb("shaka.offline.Storage.getStoreInProgress","Multiple concurrent downloads are now supported.");return!1};
function Wr(a,b,c,d,e,f){var g,h,k,l,m,n,p,r,u,x,w;return J(function(y){switch(y.a){case 1:return Yr(),h=g=null,k=new gr,m=l=null,A(y,2,3),v(y,d(),5);case 5:return g=y.b,v(y,Zr(a,b,g,e),6);case 6:n=y.b;$r(a);p=!n.presentationTimeline.U()&&!n.presentationTimeline.eb();if(!p)throw new L(2,9,9005,b);return v(y,as(a,n,function(D){m=m||D},e),7);case 7:h=y.b;$r(a);if(m)throw m;return v(y,a.qc(n,h,e),8);case 8:return v(y,k.init(),9);case 9:return $r(a),v(y,ir(k),10);case 10:return l=y.b,$r(a),v(y,bs(a,l.fa,
h,n,b,c,e,f),11);case 11:r=y.b;$r(a);if(m)throw m;return v(y,l.fa.addManifests([r]),12);case 12:return u=y.b,$r(a),x=new zr("manifest",l.path.Ea,l.path.fa,u[0]),y["return"](Qr(x,r));case 3:return xa(y),a.Ec=[],v(y,k.destroy(),13);case 13:if(!g){y.m(14);break}return v(y,g.stop(),14);case 14:if(!h){y.m(16);break}return v(y,h.destroy(),16);case 16:ya(y,0);break;case 2:w=E(y);if(!l){y.m(18);break}return v(y,l.fa.removeSegments(a.Ec,function(){}),18);case 18:throw m||w;}})}
q.qc=function(a,b,c){var d,e,f,g,h,k,l,m,n,p,r,u,x,w,y,D,C,B,F,G,H,I,N,T,Q;return J(function(W){switch(W.a){case 1:d={width:Infinity,height:Infinity};Xf(a,c.restrictions,d);c.useMediaCapabilities?bg(a,c.offline.usePersistentLicense):(ag(a),$f(a,b));e=[];f=c.preferredAudioChannelCount;Rf(a,f);g=t(a.variants);for(h=g.next();!h.done;h=g.next())k=h.value,e.push(kg(k));l=t(a.textStreams);for(m=l.next();!m.done;m=l.next())n=m.value,e.push(lg(n));p=t(a.imageStreams);for(r=p.next();!r.done;r=p.next())u=r.value,
e.push(mg(u));return v(W,c.offline.trackSelectionCallback(e),2);case 2:x=W.b;w=a.presentationTimeline.getDuration();y=0;D=t(x);for(C=D.next();!C.done;C=D.next())B=C.value,F=B.bandwidth*w/8,y+=F;A(W,3);return v(W,c.offline.downloadSizeCallback(y),5);case 5:G=W.b;if(!G)throw new L(2,9,9014);wa(W,4);break;case 3:throw E(W),new L(2,9,9015);case 4:H=new Set;I=new Set;N=new Set;T=t(x);for(C=T.next();!C.done;C=T.next())Q=C.value,"variant"==Q.type&&H.add(Q.id),"text"==Q.type&&I.add(Q.id),"image"==Q.type&&
N.add(Q.id);a.variants=a.variants.filter(function(P){return H.has(P.id)});a.textStreams=a.textStreams.filter(function(P){return I.has(P.id)});a.imageStreams=a.imageStreams.filter(function(P){return N.has(P.id)});cs(a);z(W)}})};
function bs(a,b,c,d,e,f,g,h){var k,l,m,n,p,r,u,x,w,y,D,C;return J(function(B){switch(B.a){case 1:return k=Or(e,d,f),l=g.offline.progressCallback,m=function(F,G){k.size=G;l(k,F)},n=function(F,G){u&&g.offline.usePersistentLicense&&x==G&&Kh(c,"cenc",F)},Rq(h,m,n),p=d.variants.some(function(F){var G=F.audio&&F.audio.encrypted;return F.video&&F.video.encrypted||G}),r=d.variants.some(function(F){return(F.video?F.video.drmInfos:[]).concat(F.audio?F.audio.drmInfos:[]).some(function(G){return G.initData&&
G.initData.length})}),u=p&&!r,x=null,u&&(w=c.c,x=ds.get(w.keySystem)),va(B),D=y=es(a,h,b,c,d,e,f,g),v(B,Wq(h),4);case 4:D.size=B.b;y.expiration=c.Mb();C=Sh(c);y.sessionIds=g.offline.usePersistentLicense?C:[];if(p&&g.offline.usePersistentLicense&&!C.length)throw new L(2,9,9007);return B["return"](y);case 2:return xa(B),v(B,h.destroy(),5);case 5:ya(B,0)}})}q.remove=function(a){return fs(this,gs(this,a))};
function gs(a,b){var c,d,e,f,g,h;return J(function(k){switch(k.a){case 1:Yr();c=Ar(b);if(null==c||"manifest"!=c.a)throw new L(2,9,9004,b);d=c;e=new gr;va(k);return v(k,e.init(),4);case 4:return v(k,kr(e,d.Ea(),d.fa()),5);case 5:return f=k.b,v(k,f.getManifests([d.key()]),6);case 6:return g=k.b,h=g[0],v(k,Promise.all([hs(a,h,e),is(f,d,h)]),2);case 2:return xa(k),v(k,e.destroy(),8);case 8:ya(k,0)}})}
function js(a,b){for(var c=[],d=t(a.streams),e=d.next();!e.done;e=d.next())e=e.value,b&&"video"==e.type?c.push({contentType:Pe(e.mimeType,e.codecs),robustness:a.drmInfo.videoRobustness}):b||"audio"!=e.type||c.push({contentType:Pe(e.mimeType,e.codecs),robustness:a.drmInfo.audioRobustness});return c}function hs(a,b,c){return J(function(d){return v(d,ks(a.K,a.i.drm,c,b),0)})}
function is(a,b,c){function d(){}var e=ls(c);Qr(b,c);return Promise.all([a.removeSegments(e,d),a.removeManifests([b.key()],d)])}q.uf=function(){return fs(this,ms(this))};
function ms(a){var b,c,d,e,f,g,h,k,l,m;return J(function(n){switch(n.a){case 1:return Yr(),b=a.K,c=a.i.drm,d=new gr,e=!1,va(n),v(n,d.init(),4);case 4:f=[],lr(d,function(p){return f.push(p)}),g=t(f),h=g.next();case 5:if(h.done){n.m(2);break}k=h.value;return v(n,k.getAll(),8);case 8:return l=n.b,v(n,Lr(c,b,l),9);case 9:return m=n.b,v(n,k.remove(m),10);case 10:m.length!=l.length&&(e=!0);h=g.next();n.m(5);break;case 2:return xa(n),v(n,d.destroy(),11);case 11:ya(n,3);break;case 3:return n["return"](!e)}})}
q.list=function(){return fs(this,ns())};function ns(){var a,b,c;return J(function(d){switch(d.a){case 1:return Yr(),a=[],b=new gr,va(d),v(d,b.init(),4);case 4:return c=Promise.resolve(),jr(b,function(e,f){c=c.then(function(){var g;return J(function(h){if(1==h.a)return v(h,f.getAllManifests(),2);g=h.b;g.forEach(function(k,l){var m=Qr(new zr("manifest",e.Ea,e.fa,l),k);a.push(m)});z(h)})})}),v(d,c,2);case 2:return xa(d),v(d,b.destroy(),6);case 6:ya(d,3);break;case 3:return d["return"](a)}})}
function Zr(a,b,c,d){var e,f,g,h,k;return J(function(l){if(1==l.a)return e=null,f=a.K,g={networkingEngine:f,filter:function(){return Promise.resolve()},makeTextStreamsForClosedCaptions:function(){},onTimelineRegionAdded:function(){},onEvent:function(){},onError:function(m){e=m},isLowLatencyMode:function(){return!1},isAutoLowLatencyMode:function(){return!1},enableLowLatencyMode:function(){}},c.configure(d.manifest),$r(a),v(l,c.start(b,g),2);if(3!=l.a)return h=l.b,$r(a),k=os(h),v(l,Promise.all(fb(k,
function(m){return m.createSegmentIndex()})),3);$r(a);if(e)throw e;return l["return"](h)})}function as(a,b,c,d){var e;return J(function(f){switch(f.a){case 1:return e=new rh({xb:a.K,onError:c,zc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),e.configure(d.drm),v(f,wh(e,b.variants,d.offline.usePersistentLicense,d.useMediaCapabilities),2);case 2:return v(f,Lh(e),3);case 3:return v(f,Jh(e),4);case 4:return f["return"](e)}})}
function es(a,b,c,d,e,f,g,h){for(var k=new Rr,l=t(e.variants),m=l.next();!m.done;m=l.next()){var n=k;m=m.value;var p=m.audio,r=m.video;p&&!r&&(n.a[p.id]=p.bandwidth||m.bandwidth);!p&&r&&(n.a[r.id]=r.bandwidth||m.bandwidth);if(p&&r){var u=p.bandwidth||393216,x=r.bandwidth||m.bandwidth-u;0>=x&&(x=m.bandwidth);n.a[p.id]=u;n.a[r.id]=x}}l=t(e.textStreams);for(n=l.next();!n.done;n=l.next())k.a[n.value.id]=52;l=t(e.imageStreams);for(n=l.next();!n.done;n=l.next())n=n.value,k.a[n.id]=n.bandwidth||2048;n=new Map;
n.set(null,Promise.resolve(null));m=new Map;p=os(e);l=new Map;p=t(p);for(r=p.next();!r.done;r=p.next())r=r.value,u=ps(a,b,c,k,e,r,h,n,m),l.set(r.id,u);a=t(e.variants);for(m=a.next();!m.done;m=a.next())b=m.value,b.audio&&l.get(b.audio.id).variantIds.push(b.id),b.video&&l.get(b.video.id).variantIds.push(b.id);a=Array.from(l.values());h=h.offline.usePersistentLicense;(b=d.c)&&h&&(b.initData=[]);return{creationTime:Date.now(),originalManifestUri:f,duration:e.presentationTimeline.getDuration(),size:0,
expiration:d.Mb(),streams:a,sessionIds:h?Sh(d):[],drmInfo:b,appMetadata:g}}
function ps(a,b,c,d,e,f,g,h,k){var l={id:f.id,originalId:f.originalId,primary:f.primary,type:f.type,mimeType:f.mimeType,codecs:f.codecs,frameRate:f.frameRate,pixelAspectRatio:f.pixelAspectRatio,hdr:f.hdr,kind:f.kind,language:f.language,label:f.label,width:f.width||null,height:f.height||null,encrypted:f.encrypted,keyIds:f.keyIds,segments:[],variantIds:[],roles:f.roles,forced:f.forced,channelsCount:f.channelsCount,audioSamplingRate:f.audioSamplingRate,spatialAudio:f.spatialAudio,closedCaptions:f.closedCaptions,
tilesLayout:f.tilesLayout},m=f.id;qs(f,e.presentationTimeline.Ua(),function(n){var p=rs(a,b,m,f.id,c,d,n.b,g,h),r=ss(a,b,m,f.id,c,d,n,g,k);Vq(b,m,function(){var u,x;return J(function(w){if(1==w.a)return v(w,p,2);if(3!=w.a)return u=w.b,v(w,r,3);x=w.b;l.segments.push({initSegmentKey:u,startTime:n.startTime,endTime:n.endTime,appendWindowStart:n.appendWindowStart,appendWindowEnd:n.appendWindowEnd,timestampOffset:n.timestampOffset,dataKey:x});z(w)})})});return l}
function rs(a,b,c,d,e,f,g,h,k){if(k.has(g))return k.get(g);h=Zi(g.ga(),g.da,g.Y,h.streaming.retryParameters);b=Tq(b,c,h,.5*Tr(f,d),!0,function(l){var m;return J(function(n){if(1==n.a)return v(n,e.addSegments([{data:l}]),2);m=n.b;a.Ec.push(m[0]);return n["return"](m[0])})});k.set(g,b);return b}
function ss(a,b,c,d,e,f,g,h,k){var l=[g.ga()[0],g.da,g.Y].join("-");if(k.has(l))return k.get(l);h=Zi(g.ga(),g.da,g.Y,h.streaming.retryParameters);b=Tq(b,c,h,Sr(f,d,g),!1,function(m){var n;return J(function(p){if(1==p.a)return v(p,e.addSegments([{data:m}]),2);n=p.b;a.Ec.push(n[0]);return p["return"](n[0])})});k.set(l,b);return b}function qs(a,b,c){b=a.segmentIndex.find(b);if(null!=b)for(var d=a.segmentIndex.get(b);d;)c(d),d=a.segmentIndex.get(++b)}function $r(a){if(a.F.a)throw new L(2,9,7001);}
function Yr(){if(!Vr())throw new L(2,9,9E3);}function fs(a,b){return J(function(c){if(1==c.a)return a.Tb.push(b),va(c),v(c,b,4);if(2!=c.a)return c["return"](c.b);xa(c);vc(a.Tb,b);return ya(c,0)})}function Xr(a,b){var c=b.promise;a.Tb.push(c);return b["finally"](function(){vc(a.Tb,c)})}
function ls(a){var b=[];a=t(a.streams);for(var c=a.next();!c.done;c=a.next()){c=t(c.value.segments);for(var d=c.next();!d.done;d=c.next())d=d.value,null!=d.initSegmentKey&&b.push(d.initSegmentKey),b.push(d.dataKey)}return b}
function ks(a,b,c,d){var e,f,g;return J(function(h){if(1==h.a){if(!d.drmInfo)return h["return"]();e=mr(c);f=d.sessionIds.map(function(k){return{sessionId:k,keySystem:d.drmInfo.keySystem,licenseUri:d.drmInfo.licenseServerUri,serverCertificate:d.drmInfo.serverCertificate,audioCapabilities:js(d,!1),videoCapabilities:js(d,!0)}});return v(h,Lr(b,a,f),2)}return 3!=h.a?(g=h.b,v(h,e.remove(g),3)):v(h,e.add(f.filter(function(k){return!g.includes(k.sessionId)})),0)})}
function os(a){for(var b=new Set,c=t(a.textStreams),d=c.next();!d.done;d=c.next())b.add(d.value);c=t(a.imageStreams);for(d=c.next();!d.done;d=c.next())b.add(d.value);a=t(a.variants);for(c=a.next();!c.done;c=a.next())c=c.value,c.audio&&b.add(c.audio),c.video&&b.add(c.video);return b}
function cs(a){a.variants.map(function(f){return f.video});var b=new Set(a.variants.map(function(f){return f.audio}));a=a.textStreams;for(var c=t(b),d=c.next();!d.done;d=c.next()){d=t(b);for(var e=d.next();!e.done;e=d.next());}b=t(a);for(c=b.next();!c.done;c=b.next())for(c=t(a),d=c.next();!d.done;d=c.next());}K("shaka.offline.Storage",Ur);Ur.deleteAll=function(){var a;return J(function(b){return 1==b.a?(a=new gr,va(b),v(b,nr(a),2)):5!=b.a?(xa(b),v(b,a.destroy(),5)):ya(b,0)})};Ur.prototype.list=Ur.prototype.list;
Ur.prototype.removeEmeSessions=Ur.prototype.uf;Ur.prototype.remove=Ur.prototype.remove;Ur.prototype.getStoreInProgress=Ur.prototype.Ye;Ur.prototype.store=Ur.prototype.store;Ur.prototype.getNetworkingEngine=Ur.prototype.Nb;Ur.prototype.getConfiguration=Ur.prototype.getConfiguration;Ur.prototype.configure=Ur.prototype.configure;Ur.prototype.destroy=Ur.prototype.destroy;Ur.support=Vr;
var ds=(new Map).set("org.w3.clearkey","1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha","edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready","9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.recommendation","9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.software","9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.hardware","9a04f07998404286ab92e65be0885f95").set("com.adobe.primetime","f239e769efa348509c16a903c6932efb");
Tl.offline=Vr;function ts(){}function us(a,b){for(var c={priority:b||0,we:a},d=t(lb(vs)),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.ba;if(e.item.priority<c.priority){vs.splice(f,0,c);return}}vs.push(c)}K("shaka.polyfill",ts);ts.register=us;ts.installAll=function(){for(var a=t(vs),b=a.next();!b.done;b=a.next()){b=b.value;try{b.we()}catch(c){Ua("Error installing polyfill!",c)}}};var vs=[];us(function(){ws()},-2);function xs(a){var b=a.type.replace(/^(webkit|moz|MS)/,"").toLowerCase(),c=document.createEvent("Event");c.initEvent(b,a.bubbles,a.cancelable);a.target.dispatchEvent(c)}
us(function(){if(window.Document){var a=Element.prototype;a.requestFullscreen=a.requestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen||a.webkitRequestFullscreen;a=Document.prototype;a.exitFullscreen=a.exitFullscreen||a.mozCancelFullScreen||a.msExitFullscreen||a.webkitCancelFullScreen;"fullscreenElement"in document||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitCurrentFullScreenElement||
document.webkitFullscreenElement}}),Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}}));document.addEventListener("webkitfullscreenchange",xs);document.addEventListener("webkitfullscreenerror",xs);document.addEventListener("mozfullscreenchange",xs);document.addEventListener("mozfullscreenerror",xs);document.addEventListener("MSFullscreenChange",xs);document.addEventListener("MSFullscreenError",
xs)}});us(function(){});function ys(a){var b,c,d,e,f,g,h,k,l,m,n,p;return J(function(r){switch(r.a){case 1:b={supported:!1,powerEfficient:!0,smooth:!0,keySystemAccess:null,configuration:a};if(!a||a.video&&(c=a.video.contentType,d=MediaSource.isTypeSupported(c),!d)||a.audio&&(e=a.audio.contentType,f=MediaSource.isTypeSupported(e),!f))return r["return"](b);if(!a.keySystemConfiguration)return b.supported=!0,r["return"](Promise.resolve(b));g=a.keySystemConfiguration;h=[];k=[];g.audio&&(l={robustness:g.audio.robustness||"",contentType:a.audio.contentType},
h.push(l));g.video&&(m={robustness:g.video.robustness||"",contentType:a.video.contentType},k.push(m));n={initDataTypes:[g.initDataType],distinctiveIdentifier:g.distinctiveIdentifier,persistentState:g.persistentState,sessionTypes:g.sessionTypes};h.length&&(n.audioCapabilities=h);k.length&&(n.videoCapabilities=k);A(r,3);return v(r,navigator.requestMediaKeySystemAccess(g.keySystem,[n]),5);case 5:p=r.b;wa(r,4);break;case 3:E(r);case 4:p&&(b.supported=!0,b.keySystemAccess=p);case 2:return r["return"](b)}})}
us(function(){!ec()&&navigator.mediaCapabilities||!window.MediaSource||(navigator.mediaCapabilities={},navigator.mediaCapabilities.decodingInfo=ys)},-1);function zs(){var a=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];c=a.apply(this,c);c.abort=function(){};return c}}function As(){var a=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(b,c){return a.call(this,b,c-.001)}}function Bs(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){return"mp2t"==b.split(/ *; */)[0].split("/")[1].toLowerCase()?!1:a(b)}}
function Cs(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){return"opus"!=Te(b)&&a(b)}}function Ds(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){var c=b.split(/ *; */);c.shift();return c.some(function(d){return d.startsWith("codecs=")})?cast.__platform__.canDisplayType(b):a(b)}}
function Es(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){var c=b.split(/ *; */),d=c.findIndex(function(g){return g.startsWith("codecs=")});if(0>d)return a(b);var e=c[d].replace("codecs=","").replace(/"/g,"").split(/\s*,\s*/),f=e.findIndex(function(g){return g.startsWith("vp09")});0<=f&&(e[f]="vp9",c[d]='codecs="'+e.join(",")+'"',b=c.join("; "));return a(b)}}
us(function(){var a=gc();window.MediaSource&&(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType?Ds():a?(Bs(),12>=a?(zs(),As()):zs()):(dc("Tizen 2")||dc("Tizen 3")||dc("Tizen 4"))&&Cs());window.MediaSource&&MediaSource.isTypeSupported('video/webm; codecs="vp9"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"')&&Es()});function Fs(){function a(){switch(window.orientation){case -90:b.type="landscape-secondary";b.angle=270;break;case 0:b.type="portrait-primary";b.angle=0;break;case 90:b.type="landscape-primary";b.angle=90;break;case 180:b.type="portrait-secondary",b.angle=180}}var b=new Gs;screen.orientation=b;a();window.addEventListener("orientationchange",function(){a();var c=new O("change",{});b.dispatchEvent(c)})}function Gs(){Wg.call(this);this.type="";this.angle=0}ra(Gs,Wg);
Gs.prototype.lock=function(a){function b(d){return screen.lockOrientation?screen.lockOrientation(d):screen.mozLockOrientation?screen.mozLockOrientation(d):screen.msLockOrientation?screen.msLockOrientation(d):!1}var c=!1;switch(a){case "natural":c=b("default");break;case "any":c=!0;this.unlock();break;default:c=b(a)}if(c)return Promise.resolve();a=Error("screen.orientation.lock() is not available on this device");a.name="NotSupportedError";a.code=DOMException.NOT_SUPPORTED_ERR;return Promise.reject(a)};
Gs.prototype.unlock=function(){screen.unlockOrientation?screen.unlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()};us(function(){screen.orientation||void 0!=window.orientation&&Fs()});function Hs(a,b){try{var c=new Is(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}function Js(a){var b=this.mediaKeys;b&&b!=a&&Ks(b,null);delete this.mediaKeys;return(this.mediaKeys=a)?Ks(a,this):Promise.resolve()}function Ls(a){a=pb(a.initData);if(tb(a).getUint32(0,!0)+4!=a.byteLength)throw new RangeError("Malformed FairPlay init data");a=xb(a.subarray(4),!0);a=Ab(a);var b=new Event("encrypted");b.initDataType="skd";b.initData=rb(a);this.dispatchEvent(b)}
function Is(a,b){this.keySystem=a;if(a.startsWith("com.apple.fps"))for(var c=t(b),d=c.next();!d.done;d=c.next()){var e=d.value;if("required"==e.persistentState)d=null;else{d={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label};var f=!1,g=!1;if(e.audioCapabilities)for(var h=t(e.audioCapabilities),k=h.next();!k.done;k=h.next())k=k.value,k.contentType&&(f=!0,WebKitMediaKeys.isTypeSupported(this.keySystem,
k.contentType.split(";")[0])&&(d.audioCapabilities.push(k),g=!0));if(e.videoCapabilities)for(e=t(e.videoCapabilities),k=e.next();!k.done;k=e.next())h=k.value,h.contentType&&(f=!0,WebKitMediaKeys.isTypeSupported(this.keySystem,h.contentType.split(";")[0])&&(d.videoCapabilities.push(h),g=!0));f||(g=WebKitMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));d=g?d:null}if(d){this.a=d;return}}c=Error("Unsupported keySystem");c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}
Is.prototype.createMediaKeys=function(){var a=new Ms(this.keySystem);return Promise.resolve(a)};Is.prototype.getConfiguration=function(){return this.a};function Ms(a){this.a=new WebKitMediaKeys(a);this.b=new ff}Ms.prototype.createSession=function(a){a=a||"temporary";if("temporary"!=a)throw new TypeError("Session type "+a+" is unsupported on this platform.");return new Ns(this.a,a)};Ms.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function Ks(a,b){a.b.hb();if(!b)return Promise.resolve();a.b.s(b,"webkitneedkey",Ls);try{return vi(b,HTMLMediaElement.HAVE_METADATA,a.b,function(){b.webkitSetMediaKeys(a.a)}),Promise.resolve()}catch(c){return Promise.reject(c)}}function Ns(a){Wg.call(this);this.f=null;this.g=a;this.c=this.a=null;this.b=new ff;this.sessionId="";this.expiration=NaN;this.closed=new Ge;this.keyStatuses=new Os}ra(Ns,Wg);q=Ns.prototype;
q.generateRequest=function(a,b){var c=this;this.a=new Ge;try{var d=this.g.createSession("video/mp4",pb(b));this.f=d;this.sessionId=d.sessionId||"";this.b.s(this.f,"webkitkeymessage",function(e){c.a&&(c.a.resolve(),c.a=null);e=new O("message",{messageType:void 0==c.keyStatuses.a?"license-request":"license-renewal",message:rb(e.message)});c.dispatchEvent(e)});this.b.s(d,"webkitkeyadded",function(){c.c&&(Ps(c,"usable"),c.c.resolve(),c.c=null)});this.b.s(d,"webkitkeyerror",function(){var e=Error("EME PatchedMediaKeysApple key error");
e.errorCode=c.f.error;if(null!=c.a)c.a.reject(e),c.a=null;else if(null!=c.c)c.c.reject(e),c.c=null;else switch(c.f.error.code){case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:Ps(c,"output-not-allowed");break;default:Ps(c,"internal-error")}});Ps(this,"status-pending")}catch(e){this.a.reject(e)}return this.a};q.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};q.update=function(a){this.c=new Ge;try{this.f.update(pb(a))}catch(b){this.c.reject(b)}return this.c};
q.close=function(){try{this.f.close(),this.closed.resolve(),this.b.hb()}catch(a){this.closed.reject(a)}return this.closed};q.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function Ps(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.a=b;c=new O("keystatuseschange");a.dispatchEvent(c)}function Os(){this.size=0;this.a=void 0}q=Os.prototype;q.forEach=function(a){this.a&&a(this.a,fi.value())};
q.get=function(a){if(this.has(a))return this.a};q.has=function(a){var b=fi.value();return this.a&&nb(a,b)?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};us(function(){window.HTMLVideoElement&&window.WebKitMediaKeys&&(delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Js,window.MediaKeys=Ms,window.MediaKeySystemAccess=Is,navigator.requestMediaKeySystemAccess=Hs)});function Qs(a,b){try{var c=new Rs(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}function Ss(a){if(a.initData){var b=new CustomEvent("encrypted");b.initDataType="cenc";b.initData=rb(rn(a.initData));this.dispatchEvent(b)}}
function Rs(a,b){this.keySystem=a;for(var c=!1,d=t(b),e=d.next();!e.done;e=d.next()){e=e.value;var f={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label},g=!1;if(e.audioCapabilities)for(var h=t(e.audioCapabilities),k=h.next();!k.done;k=h.next())k=k.value,k.contentType&&(g=!0,MSMediaKeys.isTypeSupported(this.keySystem,k.contentType.split(";")[0])&&(f.audioCapabilities.push(k),c=
!0));if(e.videoCapabilities)for(h=t(e.videoCapabilities),k=h.next();!k.done;k=h.next())k=k.value,k.contentType&&(g=!0,MSMediaKeys.isTypeSupported(this.keySystem,k.contentType.split(";")[0])&&(f.videoCapabilities.push(k),c=!0));g||(c=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==e.persistentState&&(c=!1);if(c){this.a=f;return}}c=Error("Unsupported keySystem");c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}
Rs.prototype.createMediaKeys=function(){var a=new Ts(this.keySystem);return Promise.resolve(a)};Rs.prototype.getConfiguration=function(){return this.a};function Us(a){var b=this.mediaKeys;b&&b!=a&&Vs(b,null);delete this.mediaKeys;return(this.mediaKeys=a)?Vs(a,this):Promise.resolve()}function Ts(a){this.a=new MSMediaKeys(a);this.b=new ff}
Ts.prototype.createSession=function(a){a=a||"temporary";if("temporary"!=a)throw new TypeError("Session type "+a+" is unsupported on this platform.");return new Ws(this.a,a)};Ts.prototype.setServerCertificate=function(){return Promise.resolve(!1)};function Vs(a,b){a.b.hb();if(!b)return Promise.resolve();a.b.s(b,"msneedkey",Ss);try{return vi(b,HTMLMediaElement.HAVE_METADATA,a.b,function(){b.msSetMediaKeys(a.a)}),Promise.resolve()}catch(c){return Promise.reject(c)}}
function Ws(a){Wg.call(this);this.f=null;this.g=a;this.c=this.a=null;this.b=new ff;this.sessionId="";this.expiration=NaN;this.closed=new Ge;this.keyStatuses=new Xs}ra(Ws,Wg);q=Ws.prototype;
q.generateRequest=function(a,b){var c=this;this.a=new Ge;try{this.f=this.g.createSession("video/mp4",pb(b),null),this.b.s(this.f,"mskeymessage",function(d){c.a&&(c.a.resolve(),c.a=null);d=new O("message",{messageType:void 0==c.keyStatuses.a?"license-request":"license-renewal",message:rb(d.message)});c.dispatchEvent(d)}),this.b.s(this.f,"mskeyadded",function(){c.a?(Ys(c,"usable"),c.a.resolve(),c.a=null):c.c&&(Ys(c,"usable"),c.c.resolve(),c.c=null)}),this.b.s(this.f,"mskeyerror",function(){var d=Error("EME PatchedMediaKeysMs key error");
d.errorCode=c.f.error;if(null!=c.a)c.a.reject(d),c.a=null;else if(null!=c.c)c.c.reject(d),c.c=null;else switch(c.f.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:Ys(c,"output-not-allowed");break;default:Ys(c,"internal-error")}}),Ys(this,"status-pending")}catch(d){this.a.reject(d)}return this.a};q.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};q.update=function(a){this.c=new Ge;try{this.f.update(pb(a))}catch(b){this.c.reject(b)}return this.c};
q.close=function(){try{this.f.close(),this.closed.resolve(),this.b.hb()}catch(a){this.closed.reject(a)}return this.closed};q.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function Ys(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.a=b;c=new O("keystatuseschange");a.dispatchEvent(c)}function Xs(){this.size=0;this.a=void 0}q=Xs.prototype;q.forEach=function(a){this.a&&a(this.a,fi.value())};
q.get=function(a){if(this.has(a))return this.a};q.has=function(a){var b=fi.value();return this.a&&nb(a,b)?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};
us(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,window.MediaKeys=Ts,window.MediaKeySystemAccess=Rs,navigator.requestMediaKeySystemAccess=Qs,HTMLMediaElement.prototype.setMediaKeys=Us)});function Zs(){return Promise.reject(Error("The key system specified is not supported."))}function $s(a){return null==a?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function at(){throw new TypeError("Illegal constructor.");}at.prototype.createSession=function(){};at.prototype.setServerCertificate=function(){};function bt(){this.keySystem="";throw new TypeError("Illegal constructor.");}bt.prototype.getConfiguration=function(){};bt.prototype.createMediaKeys=function(){};
us(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=Zs,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=$s,window.MediaKeys=at,window.MediaKeySystemAccess=bt)},-10);function ct(a){var b=dt;return b?b+a.charAt(0).toUpperCase()+a.slice(1):a}function et(a,b){try{var c=new ft(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}function gt(a){var b=this.mediaKeys;b&&b!=a&&ht(b,null);delete this.mediaKeys;(this.mediaKeys=a)&&ht(a,this);return Promise.resolve()}
function ft(a,b){this.a=this.keySystem=a;var c=!1;"org.w3.clearkey"==a&&(this.a="webkit-org.w3.clearkey",c=!1);var d=!1;var e=document.getElementsByTagName("video");e=e.length?e[0]:document.createElement("video");for(var f=t(b),g=f.next();!g.done;g=f.next()){g=g.value;var h={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:g.initDataTypes,sessionTypes:["temporary"],label:g.label},k=!1;if(g.audioCapabilities)for(var l=t(g.audioCapabilities),
m=l.next();!m.done;m=l.next())m=m.value,m.contentType&&(k=!0,e.canPlayType(m.contentType.split(";")[0],this.a)&&(h.audioCapabilities.push(m),d=!0));if(g.videoCapabilities)for(l=t(g.videoCapabilities),m=l.next();!m.done;m=l.next())m=m.value,m.contentType&&(k=!0,e.canPlayType(m.contentType,this.a)&&(h.videoCapabilities.push(m),d=!0));k||(d=e.canPlayType("video/mp4",this.a)||e.canPlayType("video/webm",this.a));"required"==g.persistentState&&(c?(h.persistentState="required",h.sessionTypes=["persistent-license"]):
d=!1);if(d){this.b=h;return}}c="Unsupported keySystem";if("org.w3.clearkey"==a||"com.widevine.alpha"==a)c="None of the requested configurations were supported.";c=Error(c);c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}ft.prototype.createMediaKeys=function(){var a=new it(this.a);return Promise.resolve(a)};ft.prototype.getConfiguration=function(){return this.b};function it(a){this.g=a;this.a=null;this.b=new ff;this.c=[];this.f=new Map}
function ht(a,b){a.a=b;a.b.hb();var c=dt;b&&(a.b.s(b,c+"needkey",function(d){var e=new CustomEvent("encrypted");e.initDataType="cenc";e.initData=rb(d.initData);a.a.dispatchEvent(e)}),a.b.s(b,c+"keymessage",function(d){var e=jt(a,d.sessionId);e&&(d=new O("message",{messageType:void 0==e.keyStatuses.a?"licenserequest":"licenserenewal",message:d.message}),e.b&&(e.b.resolve(),e.b=null),e.dispatchEvent(d))}),a.b.s(b,c+"keyadded",function(d){if(d=jt(a,d.sessionId))kt(d,"usable"),d.a&&d.a.resolve(),d.a=
null}),a.b.s(b,c+"keyerror",function(d){var e=jt(a,d.sessionId);e&&e.handleError(d)}))}it.prototype.createSession=function(a){a=a||"temporary";if("temporary"!=a&&"persistent-license"!=a)throw new TypeError("Session type "+a+" is unsupported on this platform.");var b=this.a||document.createElement("video");b.src||(b.src="about:blank");a=new lt(b,this.g,a);this.c.push(a);return a};it.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function jt(a,b){var c=a.f.get(b);return c?c:(c=a.c.shift())?(c.sessionId=b,a.f.set(b,c),c):null}function lt(a,b,c){Wg.call(this);this.f=a;this.h=!1;this.a=this.b=null;this.c=b;this.g=c;this.sessionId="";this.expiration=NaN;this.closed=new Ge;this.keyStatuses=new mt}ra(lt,Wg);q=lt.prototype;
q.handleError=function(a){var b=Error("EME v0.1b key error"),c=a.errorCode;c.systemCode=a.systemCode;b.errorCode=c;!a.sessionId&&this.b?(45==a.systemCode&&(b.message="Unsupported session type."),this.b.reject(b),this.b=null):a.sessionId&&this.a?(this.a.reject(b),this.a=null):(b=a.systemCode,a.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?kt(this,"output-restricted"):1==b?kt(this,"expired"):kt(this,"internal-error"))};
function nt(a,b,c){if(a.h)return Promise.reject(Error("The session is already initialized."));a.h=!0;try{if("persistent-license"==a.g)if(c)var d=pb(Ab("LOAD_SESSION|"+c));else{var e=Ab("PERSISTENT|");d=pc(e,b)}else d=pb(b)}catch(g){return Promise.reject(g)}a.b=new Ge;var f=ct("generateKeyRequest");try{a.f[f](a.c,d)}catch(g){if("InvalidStateError"!=g.name)return a.b=null,Promise.reject(g);(new M(function(){try{a.f[f](a.c,d)}catch(h){a.b.reject(h),a.b=null}})).N(.01)}return a.b}
function ot(a,b,c){if(a.a)a.a.then(function(){return ot(a,b,c)})["catch"](function(){return ot(a,b,c)});else{a.a=b;if("webkit-org.w3.clearkey"==a.c){var d=wb(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(a.a.reject(Error("Response is not a valid JSON Web Key Set.")),a.a=null);d=mc(e.keys[0].k);e=mc(e.keys[0].kid)}else d=pb(c),e=null;var f=ct("addKey");try{a.f[f](a.c,d,e,a.sessionId)}catch(g){a.a.reject(g),a.a=null}}}
function kt(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.a=b;c=new O("keystatuseschange");a.dispatchEvent(c)}q.generateRequest=function(a,b){return nt(this,b,null)};q.load=function(a){return"persistent-license"==this.g?nt(this,null,a):Promise.reject(Error("Not a persistent session."))};q.update=function(a){var b=new Ge;ot(this,b,a);return b};
q.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var a=ct("cancelKeyRequest");try{this.f[a](this.c,this.sessionId)}catch(b){}}this.closed.resolve();return this.closed};q.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function mt(){this.size=0;this.a=void 0}q=mt.prototype;q.forEach=function(a){this.a&&a(this.a,fi.value())};q.get=function(a){if(this.has(a))return this.a};
q.has=function(a){var b=fi.value();return this.a&&nb(a,b)?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};var dt="";
us(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)dt="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;navigator.requestMediaKeySystemAccess=et;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=gt;window.MediaKeys=it;window.MediaKeySystemAccess=ft}});function pt(a){a=a.target;if("picture-in-picture"==a.webkitPresentationMode){document.pictureInPictureElement=a;var b=new Event("enterpictureinpicture");a.dispatchEvent(b)}else document.pictureInPictureElement==a&&(document.pictureInPictureElement=null),b=new Event("leavepictureinpicture"),a.dispatchEvent(b)}
function qt(){return this.webkitSupportsPresentationMode("picture-in-picture")?(this.webkitSetPresentationMode("picture-in-picture"),document.pictureInPictureElement=this,Promise.resolve()):Promise.reject(Error("PiP not allowed by video element"))}function rt(){var a=document.pictureInPictureElement;return a?(a.webkitSetPresentationMode("inline"),document.pictureInPictureElement=null,Promise.resolve()):Promise.reject(Error("No picture in picture element found"))}
function st(){return this.hasAttribute("disablePictureInPicture")?!0:!this.webkitSupportsPresentationMode("picture-in-picture")}function tt(a){a?this.setAttribute("disablePictureInPicture",""):this.removeAttribute("disablePictureInPicture")}
us(function(){if(window.HTMLVideoElement){var a=HTMLVideoElement.prototype;a.requestPictureInPicture&&document.exitPictureInPicture||!a.webkitSupportsPresentationMode||(document.pictureInPictureEnabled=!0,document.pictureInPictureElement=null,a.requestPictureInPicture=qt,Object.defineProperty(a,"disablePictureInPicture",{get:st,set:tt,enumerable:!0,configurable:!0}),document.exitPictureInPicture=rt,document.addEventListener("webkitpresentationmodechanged",pt,!0))}});function ut(){return new Promise(function(a,b){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(c,d){a({usage:c,quota:d})},b)})}us(function(){navigator.storage&&navigator.storage.estimate||!navigator.webkitTemporaryStorage||!navigator.webkitTemporaryStorage.queryUsageAndQuota||("storage"in navigator||(navigator.storage={}),navigator.storage.estimate=ut)});us(function(){if(window.HTMLMediaElement){var a=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var b=a.apply(this);b&&b["catch"](function(){});return b}}});function vt(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}us(function(){if(window.HTMLVideoElement){var a=HTMLVideoElement.prototype;!a.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in a&&(a.getVideoPlaybackQuality=vt)}});function wt(a,b,c){return new window.TextTrackCue(a,b,c)}function xt(a,b,c){return new window.TextTrackCue(a+"-"+b+"-"+c,a,b,c)}us(function(){if(!window.VTTCue&&window.TextTrackCue){var a=null,b=TextTrackCue.length;if(3==b)a=wt;else if(6==b)a=xt;else{try{var c=!!wt(1,2,"")}catch(d){c=!1}c&&(a=wt)}a&&(window.VTTCue=function(d,e,f){return a(d,e,f)})}});function yt(){}yt.prototype.parseInit=function(){};yt.prototype.parseMedia=function(a,b){var c=null,d=[],e=wb(a).split(/\r?\n/);e=t(e);for(var f=e.next();!f.done;f=e.next())if((f=f.value)&&!/^\s+$/.test(f)&&(f=zt.exec(f))){var g=At.exec(f[1]);g=60*parseInt(g[1],10)+parseFloat(g[2].replace(",","."));f=new yc(g,b.segmentEnd?b.segmentEnd:g+2,f[2]);c&&(c.endTime=g,d.push(c));c=f}c&&d.push(c);return d};K("shaka.text.LrcTextParser",yt);yt.prototype.parseMedia=yt.prototype.parseMedia;
yt.prototype.parseInit=yt.prototype.parseInit;var zt=/^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/,At=/^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;We["application/x-subtitle-lrc"]=function(){return new yt};function Bt(){}Bt.prototype.parseInit=function(){};
Bt.prototype.parseMedia=function(a,b){var c=wb(a),d=[],e=new DOMParser,f=null;if(""==c)return d;try{f=e.parseFromString(c,"text/xml")}catch(C){throw new L(2,2,2005,"Failed to parse TTML.");}if(f){if(c=f.getElementsByTagName("parsererror")[0])throw new L(2,2,2005,c.textContent);var g=f.getElementsByTagName("tt")[0];if(!g)throw new L(2,2,2005,"TTML does not contain <tt> tag.");e=g.getElementsByTagName("body")[0];if(!e)return[];c=xn(g,"http://www.w3.org/ns/ttml#parameter","frameRate");var h=xn(g,"http://www.w3.org/ns/ttml#parameter",
"subFrameRate"),k=xn(g,"http://www.w3.org/ns/ttml#parameter","frameRateMultiplier"),l=xn(g,"http://www.w3.org/ns/ttml#parameter","tickRate"),m=xn(g,"http://www.w3.org/ns/ttml#parameter","cellResolution");f=g.getAttribute("xml:space")||"default";var n=xn(g,"http://www.w3.org/ns/ttml#styling","extent");if("default"!=f&&"preserve"!=f)throw new L(2,2,2005,"Invalid xml:space value: "+f);f="default"==f;c=new Ct(c,h,k,l);m=m?(m=/^(\d+) (\d+)$/.exec(m))?{columns:parseInt(m[1],10),rows:parseInt(m[2],10)}:
null:null;h=(h=g.getElementsByTagName("metadata")[0])?wn(h):[];k=Array.from(g.getElementsByTagName("style"));g=Array.from(g.getElementsByTagName("region"));l=[];for(var p=t(g),r=p.next();!r.done;r=p.next()){var u=r.value;r=new Ac;var x=u.getAttribute("xml:id");if(x){r.id=x;var w=null;n&&(w=Dt.exec(n)||Et.exec(n));x=w?Number(w[1]):null;w=w?Number(w[2]):null;var y,D;if(y=Ft(u,k,"extent"))y=(D=Dt.exec(y))||Et.exec(y),null!=y&&(r.width=Number(y[1]),r.height=Number(y[2]),D||(null!=x&&(r.width=100*r.width/
x),null!=w&&(r.height=100*r.height/w)),r.widthUnits=D||null!=x?Rc:0,r.heightUnits=D||null!=w?Rc:0);if(u=Ft(u,k,"origin"))y=(D=Dt.exec(u))||Et.exec(u),null!=y&&(r.viewportAnchorX=Number(y[1]),r.viewportAnchorY=Number(y[2]),D||(null!=w&&(r.viewportAnchorY=100*r.viewportAnchorY/w),null!=x&&(r.viewportAnchorX=100*r.viewportAnchorX/x)),r.viewportAnchorUnits=D||null!=x?Rc:0)}else r=null;r&&l.push(r)}if(tn(e,"p").length)throw new L(2,2,2001,"<p> can only be inside <div> in TTML");e=t(tn(e,"div"));for(n=
e.next();!n.done;n=e.next()){n=n.value;if(tn(n,"span").length)throw new L(2,2,2001,"<span> can only be inside <p> in TTML");if((p=tn(n,"p"))&&p.length)for(n=t(p),p=n.next();!p.done;p=n.next())(p=Gt(p.value,b.periodStart,c,h,k,g,l,f,!1,m))&&d.push(p);else(n=Gt(n,b.periodStart,c,h,k,g,l,f,!1,m))&&d.push(n)}}return d};
function Gt(a,b,c,d,e,f,g,h,k,l){var m=a.parentNode;if(a.nodeType==Node.TEXT_NODE){var n=document.createElement("span");n.textContent=a.textContent;a=n}h="default"==(a.getAttribute("xml:space")||(h?"default":"preserve"));n=/\S/.test(a.textContent);if(!(a.hasAttribute("begin")||a.hasAttribute("end")||a.hasAttribute("dur")||n||"br"==a.tagName||k&&!h))return null;var p=Ht(a,c);n=p.start;for(p=p.end;m&&m.nodeType==Node.ELEMENT_NODE&&"tt"!=m.tagName;)p=It(m,c,n,p),n=p.start,p=p.end,m=m.parentNode;null==
n&&(n=0);n+=b;p=null==p?Infinity:p+b;if("br"==a.tagName)return d=new yc(n,p,""),d.lineBreak=!0,d;var r="";m=[];if(Array.from(a.childNodes).every(function(y){return y.nodeType==Node.TEXT_NODE}))r=a.textContent,h&&(r=r.trim(),r=r.replace(/\s+/g," "));else for(var u=t(a.childNodes),x=u.next();!x.done;x=u.next())(x=Gt(x.value,b,c,d,e,f,g,h,!0,l))&&m.push(x);b=new yc(n,p,r);b.nestedCues=m;l&&(b.cellResolution=l);if((f=Jt(a,"region",f,"")[0])&&f.getAttribute("xml:id")){var w=f.getAttribute("xml:id");b.region=
g.filter(function(y){return y.id==w})[0]}g=null;l=t(Kt);for(c=l.next();!c.done&&!(g=Jt(a,"backgroundImage",d,"#",c.value)[0]);c=l.next());Lt(b,a,f,g,e,k,0==m.length);return b}
function Lt(a,b,c,d,e,f,g){f=f||g;"rtl"==Mt(b,c,e,"direction",f)&&(a.direction="rtl");g=Mt(b,c,e,"writingMode",f);"tb"==g||"tblr"==g?a.writingMode="vertical-lr":"tbrl"==g?a.writingMode="vertical-rl":"rltb"==g||"rl"==g?a.direction="rtl":g&&(a.direction=zc);(g=Mt(b,c,e,"textAlign",f))?(a.positionAlign=Nt[g],a.lineAlign=Ot[g],a.textAlign=Lc[g.toUpperCase()]):a.textAlign="start";if(g=Mt(b,c,e,"displayAlign",f))a.displayAlign=Mc[g.toUpperCase()];if(g=Mt(b,c,e,"color",f))a.color=g;if(g=Mt(b,c,e,"backgroundColor",
f))a.backgroundColor=g;if(g=Mt(b,c,e,"border",f))a.border=g;if(g=Mt(b,c,e,"fontFamily",f))a.fontFamily=g;(g=Mt(b,c,e,"fontWeight",f))&&"bold"==g&&(a.fontWeight=700);g=Mt(b,c,e,"wrapOption",f);a.wrapLine=g&&"noWrap"==g?!1:!0;(g=Mt(b,c,e,"lineHeight",f))&&g.match(Pt)&&(a.lineHeight=g);(g=Mt(b,c,e,"fontSize",f))&&(g.match(Pt)||g.match(Qt))&&(a.fontSize=g);if(g=Mt(b,c,e,"fontStyle",f))a.fontStyle=Qc[g.toUpperCase()];if(d){g=d.getAttribute("imageType")||d.getAttribute("imagetype");var h=d.getAttribute("encoding");
d=d.textContent.trim();"PNG"==g&&"Base64"==h&&d&&(a.backgroundImage="data:image/png;base64,"+d)}(d=Mt(b,c,e,"letterSpacing",f))&&d.match(Pt)&&(a.letterSpacing=d);(d=Mt(b,c,e,"linePadding",f))&&d.match(Pt)&&(a.linePadding=d);if(f=Mt(b,c,e,"opacity",f))a.opacity=parseFloat(f);(c=Ft(c,e,"textDecoration"))&&Rt(a,c);(b=St(b,e,"textDecoration"))&&Rt(a,b)}
function Rt(a,b){for(var c=t(b.split(" ")),d=c.next();!d.done;d=c.next())switch(d.value){case "underline":a.textDecoration.includes("underline")||a.textDecoration.push("underline");break;case "noUnderline":a.textDecoration.includes("underline")&&vc(a.textDecoration,"underline");break;case "lineThrough":a.textDecoration.includes("lineThrough")||a.textDecoration.push("lineThrough");break;case "noLineThrough":a.textDecoration.includes("lineThrough")&&vc(a.textDecoration,"lineThrough");break;case "overline":a.textDecoration.includes("overline")||
a.textDecoration.push("overline");break;case "noOverline":a.textDecoration.includes("overline")&&vc(a.textDecoration,"overline")}}function Mt(a,b,c,d,e){e=void 0===e?!0:e;return(a=St(a,c,d))?a:e?Ft(b,c,d):null}function Ft(a,b,c){if(!a)return null;var d=xn(a,"http://www.w3.org/ns/ttml#styling",c);return d?d:Tt(a,b,c)}function St(a,b,c){var d=xn(a,"http://www.w3.org/ns/ttml#styling",c);return d?d:Tt(a,b,c)}
function Tt(a,b,c){a=Jt(a,"style",b,"");for(var d=null,e=0;e<a.length;e++){var f=xn(a[e],"urn:ebu:tt:style",c);f||(f=xn(a[e],"http://www.w3.org/ns/ttml#styling",c));f||(f=St(a[e],b,c));f&&(d=f)}return d}
function Jt(a,b,c,d,e){var f=[];if(!a||1>c.length)return f;var g=a;for(a=null;g&&!(a=e?xn(g,e,b):g.getAttribute(b))&&(g=g.parentNode,g instanceof Element););if(b=a)for(b=t(b.split(" ")),e=b.next();!e.done;e=b.next())for(e=e.value,a=t(c),g=a.next();!g.done;g=a.next())if(g=g.value,d+g.getAttribute("xml:id")==e){f.push(g);break}return f}function It(a,b,c,d){a=Ht(a,b);null==c?c=a.start:null!=a.start&&(c+=a.start);null==d?d=a.end:null!=a.start&&(d+=a.start);return{start:c,end:d}}
function Ht(a,b){var c=Ut(a.getAttribute("begin"),b),d=Ut(a.getAttribute("end"),b),e=Ut(a.getAttribute("dur"),b);null==d&&null!=e&&(d=c+e);return{start:c,end:d}}
function Ut(a,b){var c=null;if(Vt.test(a)){c=Vt.exec(a);var d=Number(c[1]),e=Number(c[2]),f=Number(c[3]),g=Number(c[4]);g+=(Number(c[5])||0)/b.b;f+=g/b.frameRate;c=f+60*e+3600*d}else if(Wt.test(a))c=Xt(Wt,a);else if(Yt.test(a))c=Xt(Yt,a);else if(Zt.test(a))c=Zt.exec(a),c=Number(c[1])/b.frameRate;else if($t.test(a))c=$t.exec(a),c=Number(c[1])/b.a;else if(au.test(a))c=Xt(au,a);else if(a)throw new L(2,2,2001,"Could not parse cue time range in TTML");return c}
function Xt(a,b){var c=a.exec(b);return null==c||""==c[0]?null:(Number(c[4])||0)/1E3+(Number(c[3])||0)+60*(Number(c[2])||0)+3600*(Number(c[1])||0)}K("shaka.text.TtmlTextParser",Bt);Bt.prototype.parseMedia=Bt.prototype.parseMedia;Bt.prototype.parseInit=Bt.prototype.parseInit;function Ct(a,b,c,d){this.frameRate=Number(a)||30;this.b=Number(b)||1;this.a=Number(d);0==this.a&&(this.a=a?this.frameRate*this.b:1);c&&(a=/^(\d+) (\d+)$/g.exec(c))&&(this.frameRate*=Number(a[1])/Number(a[2]))}
var Dt=/^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,Qt=/^(\d{1,2}(?:\.\d+)?|100)%$/,Pt=/^(\d+px|\d+em|\d*\.?\d+c)$/,Et=/^(\d+)px (\d+)px$/,Vt=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Wt=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Yt=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,Zt=/^(\d*(?:\.\d*)?)f$/,$t=/^(\d*(?:\.\d*)?)t$/,au=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,Ot={left:Gc,center:"center",right:"end",start:Gc,end:"end"},Nt=
{left:"line-left",center:"center",right:"line-right"},Kt=["http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt","http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt"];We["application/ttml+xml"]=function(){return new Bt};function bu(){this.j=new Bt}bu.prototype.parseInit=function(a){var b=!1;(new Qb).box("moov",Ub).box("trak",Ub).box("mdia",Ub).box("minf",Ub).box("stbl",Ub).S("stsd",Wb).box("stpp",function(c){b=!0;c.parser.stop()}).parse(a);if(!b)throw new L(2,2,2007);};bu.prototype.parseMedia=function(a,b){var c=this,d=!1,e=[];(new Qb).box("mdat",Xb(function(f){d=!0;e=e.concat(c.j.parseMedia(f,b))})).parse(a,!1);if(!d)throw new L(2,2,2007);return e};K("shaka.text.Mp4TtmlParser",bu);bu.prototype.parseMedia=bu.prototype.parseMedia;
bu.prototype.parseInit=bu.prototype.parseInit;We['application/mp4; codecs="stpp"']=function(){return new bu};We['application/mp4; codecs="stpp.ttml.im1t"']=function(){return new bu};We['application/mp4; codecs="stpp.TTML.im1t"']=function(){return new bu};function cu(){}cu.prototype.parseInit=function(){};
cu.prototype.parseMedia=function(a,b){var c=wb(a);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");var d=c.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new L(2,2,2E3);c=b.periodStart;if(d[0].includes("X-TIMESTAMP-MAP")){var e=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),f=d[0].match(/MPEGTS:(\d+)/m);if(e&&f){c=du(new Fp(e[1]));if(null==c)throw new L(2,2,2E3);f=Number(f[1]);for(e=b.segmentStart;95443.7176888889<=e;)e-=95443.7176888889,f+=8589934592;c=b.periodStart+f/9E4-c}}f=
[];e=t(d[0].split("\n"));for(var g=e.next();!g.done;g=e.next())if(g=g.value,/^Region:/.test(g)){g=new Fp(g);var h=new Ac;Ip(g);Gp(g);for(var k=Ip(g);k;){var l=h,m=k;(k=/^id=(.*)$/.exec(m))?l.id=k[1]:(k=/^width=(\d{1,2}|100)%$/.exec(m))?l.width=Number(k[1]):(k=/^lines=(\d+)$/.exec(m))?(l.height=Number(k[1]),l.heightUnits=2):(k=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m))?(l.regionAnchorX=Number(k[1]),l.regionAnchorY=Number(k[2])):(k=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m))?
(l.viewportAnchorX=Number(k[1]),l.viewportAnchorY=Number(k[2])):/^scroll=up$/.exec(m)&&(l.scroll="up");Gp(g);k=Ip(g)}f.push(h)}e=new Map;eu(e);g=[];d=t(d.slice(1));for(h=d.next();!h.done;h=d.next()){h=h.value.split("\n");if((1!=h.length||h[0])&&!/^NOTE($|[ \t])/.test(h[0])&&"STYLE"==h[0]&&h[1].includes("::cue")){l="global";(k=h[1].match(/\((.*)\)/))&&(l=k.pop());k=h.slice(2,-1);h[1].includes("}")&&(m=/\{(.*?)\}/.exec(h[1]))&&(k=m[1].split(";"));m=new yc(0,0,"");for(var n=!1,p=0;p<k.length;p++){var r=
/^\s*([^:]+):\s*(.*)/.exec(k[p]);if(r){var u=r[2].trim().replace(";","");switch(r[1].trim()){case "background-color":n=!0;m.backgroundColor=u;break;case "color":n=!0;m.color=u;break;case "font-family":n=!0;m.fontFamily=u;break;case "font-size":n=!0;m.fontSize=u;break;case "font-weight":700<=parseInt(u,10)&&(n=!0,m.fontWeight=700);break;case "font-style":switch(u){case "normal":n=!0;m.fontStyle=Jc;break;case "italic":n=!0;m.fontStyle="italic";break;case "oblique":n=!0,m.fontStyle="oblique"}break;case "opacity":n=
!0;m.opacity=parseFloat(u);break;case "white-space":n=!0,m.wrapLine="noWrap"!=u}}}n&&e.set(l,m)}p=c;if(1==h.length&&!h[0]||/^NOTE($|[ \t])/.test(h[0])||"STYLE"==h[0])h=null;else{l=null;h[0].includes("--\x3e")||(l=h[0],h.splice(0,1));k=new Fp(h[0]);m=du(k);r=Hp(k,/[ \t]+--\x3e[ \t]+/g);n=du(k);if(null==m||null==r||null==n)throw new L(2,2,2001,"Could not parse cue time range in WebVTT");m+=p;n+=p;p=h.slice(1).join("\n").trim();e.has("global")?(h=e.get("global").clone(),h.startTime=m,h.endTime=n,h.payload=
""):h=new yc(m,n,"");fu(p,h,e);Gp(k);for(m=Ip(k);m;)gu(h,m,f),Gp(k),m=Ip(k);null!=l&&(h.id=l)}h&&g.push(h)}return g};function eu(a){for(var b=t(Object.entries(Oc)),c=b.next();!c.done;c=b.next()){var d=t(c.value);c=d.next().value;d=d.next().value;var e=new yc(0,0,"");e.color=d;a.set(c,e)}b=t(Object.entries(Pc));for(c=b.next();!c.done;c=b.next())d=t(c.value),c=d.next().value,d=d.next().value,e=new yc(0,0,""),e.backgroundColor=d,a.set(c,e)}
function fu(a,b,c){0===c.size&&eu(c);a:{var d=a;a=[];for(var e=-1,f="",g=0;g<d.length;g++)if("/"===d[g]){var h=d.indexOf(">",g);if(h<=g){a=d;break a}h=d.substring(g+1,h);var k=a.pop();if(k===h)f+="/"+h+">";else{if(!k.startsWith("c.")||"c"!==h){a=d;break a}f+="/"+k+">"}g+=h.length+1}else"<"===d[g]?e=g+1:">"===d[g]&&0<e&&(a.push(d.substr(e,g-e)),e=-1),f+=d[g];a=f}if(e=Jn("<span>"+a+"</span>","span")){d=[];e=e.childNodes;if(1==e.length&&(f=e[0],f.nodeType==Node.TEXT_NODE||f.nodeType==Node.CDATA_SECTION_NODE)){b.payload=
a;return}a=t(e);for(e=a.next();!e.done;e=a.next())hu(e.value,b,d,c);b.nestedCues=d}else b.payload=a}function iu(a,b){return a&&0<a.length?a:b}
function hu(a,b,c,d){var e=b.clone();if(a.nodeType===Node.ELEMENT_NODE&&a.nodeName)for(var f=t(a.nodeName.split(/[ .]+/)),g=f.next();!g.done;g=f.next()){g=g.value;if(d.has(g)){var h=d.get(g);h&&(e.backgroundColor=iu(h.backgroundColor,e.backgroundColor),e.color=iu(h.color,e.color),e.fontFamily=iu(h.fontFamily,e.fontFamily),e.fontSize=iu(h.fontSize,e.fontSize),e.fontWeight=h.fontWeight,e.fontStyle=h.fontStyle,e.opacity=h.opacity,e.wrapLine=h.wrapLine)}switch(g){case "b":e.fontWeight=700;break;case "i":e.fontStyle=
"italic";break;case "u":e.textDecoration.push("underline")}}if(zn(a))for(f=!0,d=t(a.textContent.split("\n")),a=d.next();!a.done;a=d.next())a=a.value,f||(f=b.clone(),f.lineBreak=!0,c.push(f)),0<a.length&&(f=e.clone(),f.payload=a,c.push(f)),f=!1;else for(b=t(a.childNodes),a=b.next();!a.done;a=b.next())hu(a.value,e,c,d)}
function gu(a,b,c){var d;if(d=/^align:(start|middle|center|end|left|right)$/.exec(b))b=d[1],"middle"==b?a.textAlign=Dc:a.textAlign=Lc[b.toUpperCase()];else if(d=/^vertical:(lr|rl)$/.exec(b))a.writingMode="lr"==d[1]?"vertical-lr":"vertical-rl";else if(d=/^size:([\d.]+)%$/.exec(b))a.size=Number(d[1]);else if(d=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b))a.position=Number(d[1]),d[2]&&(b=d[2],a.positionAlign="line-left"==b||"start"==b?"line-left":"line-right"==b||"end"==
b?"line-right":"center");else if(d=/^region:(.*)$/.exec(b)){if(b=ju(c,d[1]))a.region=b}else if(c=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b))a.lineInterpretation=1,a.line=Number(c[1]),c[2]&&(a.lineAlign=Nc[c[2].toUpperCase()]);else if(c=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(b))a.lineInterpretation=Fc,a.line=Number(c[1]),c[2]&&(a.lineAlign=Nc[c[2].toUpperCase()])}function ju(a,b){var c=a.filter(function(d){return d.id==b});return c.length?c[0]:null}
function du(a){a=Hp(a,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);if(null==a)return null;var b=Number(a[2]),c=Number(a[3]);return 59<b||59<c?null:Number(a[4])/1E3+c+60*b+3600*(Number(a[1])||0)}K("shaka.text.VttTextParser",cu);cu.prototype.parseMedia=cu.prototype.parseMedia;cu.prototype.parseInit=cu.prototype.parseInit;We["text/vtt"]=function(){return new cu};We['text/vtt; codecs="vtt"']=function(){return new cu};We['text/vtt; codecs="wvtt"']=function(){return new cu};function ku(){this.a=null}ku.prototype.parseInit=function(a){var b=this,c=!1;(new Qb).box("moov",Ub).box("trak",Ub).box("mdia",Ub).S("mdhd",function(d){d=be(d.reader,d.version);b.a=d.timescale}).box("minf",Ub).box("stbl",Ub).S("stsd",Wb).box("wvtt",function(){c=!0}).parse(a);if(!this.a)throw new L(2,2,2008);if(!c)throw new L(2,2,2008);};
ku.prototype.parseMedia=function(a,b){if(!this.a)throw new L(2,2,2008);var c=0,d=[],e,f=[],g=!1,h=!1,k=!1,l=null;(new Qb).box("moof",Ub).box("traf",Ub).S("tfdt",function(B){g=!0;c=ae(B.reader,B.version).cd}).S("tfhd",function(B){l=$d(B.reader,B.flags).Pd}).S("trun",function(B){h=!0;d=ce(B.reader,B.version,B.flags).ge}).box("mdat",Xb(function(B){k=!0;e=B})).parse(a,!1);if(!k&&!g&&!h)throw new L(2,2,2008);for(var m=c,n=new Db(e,0),p=t(d),r=p.next();!r.done;r=p.next()){r=r.value;var u=r.yd||l,x=r.Dc?
c+r.Dc:m;m=x+(u||0);var w=0;do{var y=n.I();w+=y;var D=n.I(),C=null;"vttc"==Yb(D)?8<y&&(C=n.Va(y-8)):n.skip(y-8);u&&C&&(y=lu(C,b.periodStart+x/this.a,b.periodStart+m/this.a),f.push(y))}while(r.sampleSize&&w<r.sampleSize)}return f.filter(Nb)};function lu(a,b,c){var d,e,f;(new Qb).box("payl",Xb(function(g){d=wb(g)})).box("iden",Xb(function(g){e=wb(g)})).box("sttg",Xb(function(g){f=wb(g)})).parse(a);return d?mu(d,e,f,b,c):null}
function mu(a,b,c,d,e){d=new yc(d,e,"");fu(a,d,new Map);b&&(d.id=b);if(c)for(a=new Fp(c),b=Ip(a);b;)gu(d,b,[]),Gp(a),b=Ip(a);return d}K("shaka.text.Mp4VttParser",ku);ku.prototype.parseMedia=ku.prototype.parseMedia;ku.prototype.parseInit=ku.prototype.parseInit;We['application/mp4; codecs="wvtt"']=function(){return new ku};function nu(){}nu.prototype.parseInit=function(){};nu.prototype.parseMedia=function(a){var b=wb(a).replace(/\r+/g,"");b=b.trim();a=[];if(""==b)return a;b=t(b.split("\n\n"));for(var c=b.next();!c.done;c=b.next()){c=c.value.split("\n");var d=new Fp(c[0]),e=ou(d),f=Hp(d,/,/g);d=ou(d);if(null==e||null==f||null==d)throw new L(2,2,2001,"Could not parse cue time range in SubViewer");a.push(new yc(e,d,c.slice(1).join("\n").trim()))}return a};
function ou(a){a=Hp(a,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);if(null==a)return null;var b=Number(a[2]),c=Number(a[3]);return 59<b||59<c?null:Number(a[4])/1E3+c+60*b+3600*(Number(a[1])||0)}K("shaka.text.SbvTextParser",nu);nu.prototype.parseMedia=nu.prototype.parseMedia;nu.prototype.parseInit=nu.prototype.parseInit;We["text/x-subviewer"]=function(){return new nu};function pu(){this.j=new cu}pu.prototype.parseInit=function(){};pu.prototype.parseMedia=function(a,b){var c=wb(a);c=qu(c);c=pb(Ab(c));return this.j.parseMedia(c,b)};function qu(a){var b="WEBVTT\n\n";if(""==a)return b;a=a.replace(/\r+/g,"");a=a.trim();a=t(a.split("\n\n"));for(var c=a.next();!c.done;c=a.next())c=c.value.split(/\n/),c[0].match(/\d+/)&&c.shift(),c[0]=c[0].replace(/,/g,"."),b+=c.join("\n")+"\n\n";return b}K("shaka.text.SrtTextParser",pu);pu.srt2webvtt=qu;pu.prototype.parseMedia=pu.prototype.parseMedia;
pu.prototype.parseInit=pu.prototype.parseInit;We["text/srt"]=function(){return new pu};function ru(){}ru.prototype.parseInit=function(){};
ru.prototype.parseMedia=function(a){var b="",c="";a=wb(a).split(/\r?\n\s*\r?\n/);a=t(a);for(var d=a.next();!d.done;d=a.next()){var e=su.exec(d.value);e&&(d=e[1],e=e[2],"V4 Styles"==d||"V4+ Styles"==d?b=e:"Events"==d&&(c=e))}a=[];d=null;b=t(b.split(/\r?\n/));for(var f=b.next();!f.done;f=b.next())if(e=f.value,!/^\s*;/.test(e)&&(f=tu.exec(e)))if(e=f[1].trim(),f=f[2].trim(),"Format"==e)d=f.split(uu);else if("Style"==e){e=f.split(uu);f={};for(var g=0;g<d.length&&g<e.length;g++)f[d[g]]=e[g];a.push(f)}d=
[];b=null;e={};c=t(c.split(/\r?\n/));for(f=c.next();!f.done;e={Uc:e.Uc},f=c.next())if(f=f.value,!/^\s*;/.test(f)&&(g=tu.exec(f)))if(f=g[1].trim(),g=g[2].trim(),"Format"==f)b=g.split(uu);else if("Dialogue"==f){g=g.split(uu);f={};for(var h=0;h<b.length&&h<g.length;h++)f[b[h]]=g[h];h=vu(f.Start);var k=vu(f.End);g=new yc(h,k,g.slice(b.length-1).join(",").replace(/\\N/g,"\n").replace(/\{[^}]+\}/g,""));e.Uc=f.Style;(f=a.find(function(l){return function(m){return m.Name==l.Uc}}(e)))&&wu(g,f);d.push(g)}return d};
function wu(a,b){var c=b.Fontname;c&&(a.fontFamily=c);if(c=b.Fontsize)a.fontSize=c+"px";if(c=b.PrimaryColour)if(c=xu(c))a.color=c;if(c=b.BackColour)if(c=xu(c))a.backgroundColor=c;b.Bold&&(a.fontWeight=700);b.Italic&&(a.fontStyle="italic");b.Underline&&a.textDecoration.push("underline");if(c=b.Spacing)a.letterSpacing=c+"px";if(c=b.Alignment)switch(parseInt(c,10)){case 1:a.displayAlign=Hc;a.textAlign="start";break;case 2:a.displayAlign=Hc;a.textAlign=Dc;break;case 3:a.displayAlign=Hc;a.textAlign="end";
break;case 5:a.displayAlign="before";a.textAlign="start";break;case 6:a.displayAlign="before";a.textAlign=Dc;break;case 7:a.displayAlign="before";a.textAlign="end";break;case 9:a.displayAlign="center";a.textAlign="start";break;case 10:a.displayAlign="center";a.textAlign=Dc;break;case 11:a.displayAlign="center",a.textAlign="end"}if(c=b.AlphaLevel)a.opacity=parseFloat(c)}
function xu(a){a=parseInt(a.replace("&H",""),16);return 0<=a?"rgba("+(a&255)+","+(a>>8&255)+","+(a>>16&255)+","+(a>>24&255^255)/255+")":null}function vu(a){a=yu.exec(a);return 3600*(a[1]?parseInt(a[1].replace(":",""),10):0)+60*parseInt(a[2],10)+parseFloat(a[3])}K("shaka.text.SsaTextParser",ru);ru.prototype.parseMedia=ru.prototype.parseMedia;ru.prototype.parseInit=ru.prototype.parseInit;var su=/^\s*\[([^\]]+)\]\r?\n([\s\S]*)/,tu=/^\s*([^:]+):\s*(.*)/,uu=/\s*,\s*/,yu=/^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;
We["text/x-ssa"]=function(){return new ru};/*
 @license
 EME Encryption Scheme Polyfill
 Copyright 2019 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function zu(){}var Au;function Bu(){Au?console.debug("EmeEncryptionSchemePolyfill: Already installed."):navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration?(Au=navigator.requestMediaKeySystemAccess,console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."),navigator.requestMediaKeySystemAccess=Cu):console.debug("EmeEncryptionSchemePolyfill: EME not found")}
function Cu(a,b){var c=this,d;return J(function(e){if(1==e.a)return console.assert(c==navigator,'bad "this" for requestMediaKeySystemAccess'),v(e,Au.call(c,a,b),2);d=e.b;if(Du(d))return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."),navigator.requestMediaKeySystemAccess=Au,e["return"](d);console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");navigator.requestMediaKeySystemAccess=Eu;return e["return"](Eu.call(c,
a,b))})}
function Eu(a,b){var c=this,d,e,f,g,h,k,l,m,n,p;return J(function(r){if(1==r.a){console.assert(c==navigator,'bad "this" for requestMediaKeySystemAccess');d=Fu(a);e=[];f=t(b);for(g=f.next();!g.done;g=f.next())h=g.value,k=Gu(h.videoCapabilities,d),l=Gu(h.audioCapabilities,d),h.videoCapabilities&&h.videoCapabilities.length&&!k.length||h.audioCapabilities&&h.audioCapabilities.length&&!l.length||(m=Object.assign({},h),m.videoCapabilities=k,m.audioCapabilities=l,e.push(m));if(!e.length)throw n=Error("Unsupported keySystem or supportedConfigurations."),
n.name="NotSupportedError",n.code=DOMException.NOT_SUPPORTED_ERR,n;return v(r,Au.call(c,a,e),2)}p=r.b;return r["return"](new Hu(p,d))})}function Gu(a,b){return a?a.filter(function(c){return!c.encryptionScheme||c.encryptionScheme==b}):a}K("EmeEncryptionSchemePolyfill",zu);zu.install=Bu;function Iu(){}var Ju;
function Ku(){Ju?console.debug("McEncryptionSchemePolyfill: Already installed."):navigator.mediaCapabilities?(Ju=navigator.mediaCapabilities.decodingInfo,console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."),navigator.mediaCapabilities.decodingInfo=Lu):console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")}
function Lu(a){var b=this,c,d;return J(function(e){if(1==e.a)return console.assert(b==navigator.mediaCapabilities,'bad "this" for decodingInfo'),v(e,Ju.call(b,a),2);c=e.b;if(!a.keySystemConfiguration)return e["return"](c);if((d=c.keySystemAccess)&&Du(d))return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."),navigator.mediaCapabilities.decodingInfo=Ju,e["return"](c);console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
navigator.mediaCapabilities.decodingInfo=Mu;return e["return"](Mu.call(b,a))})}
function Mu(a){var b=this,c,d,e,f,g,h,k,l,m;return J(function(n){switch(n.a){case 1:return console.assert(b==navigator.mediaCapabilities,'bad "this" for decodingInfo'),c=null,a.keySystemConfiguration&&(d=a.keySystemConfiguration,e=d.keySystem,f=d.audio&&d.audio.encryptionScheme,g=d.video&&d.video.encryptionScheme,c=Fu(e),h={powerEfficient:!1,smooth:!1,supported:!1,keySystemAccess:null,configuration:a},f&&f!=c||g&&g!=c)?n["return"](h):v(n,Ju.call(b,a),2);case 2:k=n.b;if(k.keySystemAccess){k.keySystemAccess=
new Hu(k.keySystemAccess,c);n.m(3);break}if(!a.keySystemConfiguration){n.m(3);break}var p=a.keySystemConfiguration,r=[],u=[];p.audio&&r.push({robustness:p.audio.robustness||"",contentType:a.audio.contentType});p.video&&u.push({robustness:p.video.robustness||"",contentType:a.video.contentType});p={initDataTypes:p.initDataType?[p.initDataType]:[],distinctiveIdentifier:p.distinctiveIdentifier,persistentState:p.persistentState,sessionTypes:p.sessionTypes};r.length&&(p.audioCapabilities=r);u.length&&(p.videoCapabilities=
u);l=p;m=k;return v(n,navigator.requestMediaKeySystemAccess(a.keySystemConfiguration.keySystem,[l]),5);case 5:m.keySystemAccess=n.b;case 3:return n["return"](k)}})}K("McEncryptionSchemePolyfill",Iu);Iu.install=Ku;function Hu(a,b){this.b=a;this.a=b;this.keySystem=a.keySystem}
Hu.prototype.getConfiguration=function(){var a=this.b.getConfiguration();if(a.videoCapabilities)for(var b=t(a.videoCapabilities),c=b.next();!c.done;c=b.next())c.value.encryptionScheme=this.a;if(a.audioCapabilities)for(b=t(a.audioCapabilities),c=b.next();!c.done;c=b.next())c.value.encryptionScheme=this.a;return a};Hu.prototype.createMediaKeys=function(){return this.b.createMediaKeys()};
function Fu(a){if(a.startsWith("com.widevine")||a.startsWith("com.microsoft")||a.startsWith("com.adobe")||a.startsWith("org.w3"))return"cenc";if(a.startsWith("com.apple"))return"cbcs-1-9";console.warn("EmeEncryptionSchemePolyfill: Unknown key system:",a,"Please contribute!");return null}function Du(a){a=a.getConfiguration();var b=a.audioCapabilities&&a.audioCapabilities[0];return(a=a.videoCapabilities&&a.videoCapabilities[0]||b)&&void 0!==a.encryptionScheme?!0:!1}function Nu(){}
function ws(){Bu();Ku()}K("EncryptionSchemePolyfills",Nu);Nu.install=ws;"undefined"!==typeof module&&module.exports&&(module.exports=Nu);}).call(exportTo,innerGlobal,innerGlobal,undefined);if(true)for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];else {}})();

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_player_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_player_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
module.exports = JSON.parse('{"name":"fjplayer","version":"0.2.26","description":"A Javascript video player for dash and mp4 videos,  support multi subs tracks , overlays ads or information, injection mp4 video ads in preroll, modroll or after roll.","main":"dist/fjplayer.js","directories":{"doc":"docs","test":"tests"},"scripts":{"dist":" concurrently \\"npm run build\\" \\"npm run testc\\" \\"npm run doc\\"","live":" concurrently \\"npm run dev\\" \\"npm run http\\"","http":"http-server -c-1 -d -o ./demo/ --no-dotfiles","build":"webpack  --mode=production --color --config webpack-prod.config.js","doc":"jsdoc src -r -R ./README.md -d ./docs/generated --debug","dev":"webpack --mode=development --color --config webpack.config.js","test":"jest  -c jest.config.js --coverage ","test:watch":"jest  -c jest.config.js --watch ","testc":"jest  -c jest.config.js c","lint":"eslint --color"},"repository":{"type":"git","url":"git+https://github.com/medazzo/fjplayer.git"},"keywords":["mpegdash","es6","dashjs","html5","player","cenc","ads"],"author":"Mohamed Azzouni","license":"Apache-2.0","bugs":{"url":"https://github.com/medazzo/fjplayer/issues"},"homepage":"https://github.com/medazzo/fjplayer#readme","devDependencies":{"@babel/cli":"^7.14.3","@babel/core":"^7.14.3","@babel/preset-env":"^7.14.2","babel-jest":"^26.6.3","babel-loader":"^8.2.2","babel-preset-latest":"^6.24.1","chai":"^4.3.4","concurrently":"^6.1.0","css-loader":"^5.2.5","eslint":"^7.27.0","eslint-config-airbnb-base":"^14.2.1","eslint-config-standard":"^16.0.2","eslint-plugin-import":"^2.23.3","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.3.1","extract-text-webpack-plugin":"^3.0.2","file-loader":"^6.2.0","font-awesome":"^4.7.0","http-server":"^0.12.3","jest":"^26.6.3","jest-css-modules-transform":"^4.2.1","jest-puppeteer":"^5.0.3","jsdoc":"^3.6.7","less":"^4.1.1","less-loader":"^9.0.0","mocha":"^8.4.0","nyc":"^15.1.0","puppeteer":"^9.1.1","puppeteer-direct":"github:wix/puppeteer-direct","style-loader":"^2.0.0","url-loader":"^4.1.1","webpack":"^5.37.1","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2"},"dependencies":{"shaka-player":"^3.1.0","superagent":"^6.1.0"}}');

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