 import Logger from './Logger';
 import * as Const from './constants';
 /**
  *  Class playlist in whixh all the playliost will be checked and saved
  */
 function Playlist() {
     this.logger = new Logger(this);
     this.items = [];
 };
 /**
  * Used to getsize of playlist
  */
 Playlist.prototype.getSize = function() {
     return this.items.size;
 };

 /**
  * Used to get item of playlist at position index
  */
 Playlist.prototype.getItem = function(index) {
     var item = this.items[index];
     this.logger.info(' Getting item at position ', index, '>> ', this.items);
     return item;
 };
 /**
  * Used to add item to list
  */
 Playlist.prototype.addItem = function(item) {
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
 Playlist.prototype.addSubtitle = function(index, subtitle) {
     var item = this.items[index];
     var list = item[Const.FJCONFIG_SUBTITLES];
     if (item === undefined) {
         return false;
     } else if (this.checkSubtitle(subtitle) === false) {
         return false;
     }
     if ((list === undefined) || (list.length === 0)) {
         list = [];
     }
     list.push(subtitle);
     return true;
 };
 /**
  *  used to add an Overlay to item at index in the playlist
  */
 Playlist.prototype.addOverlay = function(index, overlay) {
     var item = this.items[index];
     var list = item[Const.FJCONFIG_OVERLAYS];
     if (item === undefined) {
         return false;
     } else if (this.checkOverlay(overlay) === false) {
         return false;
     }
     if ((list === undefined) || (list.length === 0)) {
         list = [];
     }
     list.push(overlay);
     return true;
 };
 /**
  *  used to add an Drm to item at index in the playlist
  */
 Playlist.prototype.setDrm = function(index, drm) {
     var item = this.items[index];
     var list = item[Const.FJCONFIG_DRM];
     if (item === undefined) {
         return false;
     } else if (this.checkDrm(drm) === false) {
         return false;
     }
     if ((list === undefined) || (list.length === 0)) {
         list = [];
     }
     list.push(drm);
     return true;
 };
 /**
  *  used to add an Audio to item at index in the playlist
  */
 Playlist.prototype.addAudio = function(index, audio) {
     var item = this.items[index];
     var list = item[Const.FJCONFIG_AUDIOS];
     if (item === undefined) {
         return false;
     } else if (this.checkAudio(audio) === false) {
         return false;
     }
     if ((list === undefined) || (list.length === 0)) {
         list = [];
     }
     list.push(audio);
     return true;
 };
 /**
  *  used to add an ads to item at index in the playlist
  */
 Playlist.prototype.addAds = function(index, ads) {
     var item = this.items[index];
     var list = item[Const.FJCONFIG_ADS];
     if (item === undefined) {
         return false;
     } else if (this.checkAds(ads) === false) {
         return false;
     }
     if ((list === undefined) || (list.length === 0)) {
         list = [];
     }
     list.push(ads);
     return true;
 };

 /* ** ** ** ** ** ** ** CHECK'S ** ** ** ** ** ** ** */
 /**
  * used to check if an item of subtitle is correct
  */
 Playlist.prototype.checkSubtitle = function(subItem) {
     if (subItem[Const.FJCONFIG_SUB_LABEL]) {
         this.logger.log(' playlist Subtitle label is',
             subItem[Const.FJCONFIG_SUB_LABEL]);
     } else {
         this.logger.error('Empty Subtitle label ');
         return false;
     }
     if (subItem[Const.FJCONFIG_SUB_LANG]) {
         this.logger.log(' playlist Subtitle lang is',
             subItem[Const.FJCONFIG_SUB_LANG]);
     } else {
         this.logger.error('Empty Subtitle lang  ');
         return false;
     }
     if (subItem[Const.FJCONFIG_SUB_SRC]) {
         this.logger.log(' playlist Subtitle src is',
             subItem[Const.FJCONFIG_SUB_SRC]);
     } else {
         this.logger.error('Empty Subtitle src ');
         return false;
     }
     return true;
 };
 /**
  * used to check if an item of overlay is correct
  */
 Playlist.prototype.checkOverlay = function(subItem) {
     if (subItem[Const.FJCONFIG_OVER_DATA]) {
         this.logger.log(' playlist Overlay data ',
             subItem[Const.FJCONFIG_OVER_DATA]);
     } else {
         this.logger.error('Empty Overlay data');
         return false;
     }
     if (subItem[Const.FJCONFIG_OVER_URL]) {
         this.logger.log(' playlist Overlay url ',
             subItem[Const.FJCONFIG_OVER_URL]);
     } else {
         this.logger.error('Empty Overlay url');
         return false;
     }
     if (subItem[Const.FJCONFIG_OVER_DURATION]) {
         if ((subItem[Const.FJCONFIG_OVER_DURATION] ===
                 parseInt(subItem[Const.FJCONFIG_OVER_DURATION], 10))) {
             this.logger.log(' playlist Overlay duration ',
                 subItem[Const.FJCONFIG_OVER_DURATION]);
         } else {
             this.logger.error('Empty Overlay duration is not integer !');
             return false;
         }
     } else {
         this.logger.error('Empty Overlay duration ');
         return false;
     }
     if (subItem[Const.FJCONFIG_OVER_SHOW_AT]) {
         if ((subItem[Const.FJCONFIG_OVER_SHOW_AT] ===
                 parseInt(subItem[Const.FJCONFIG_OVER_SHOW_AT], 10))) {
             this.logger.log(' playlist Overlay show at ',
                 subItem[Const.FJCONFIG_OVER_SHOW_AT]);
         } else {
             this.logger.error('Empty Overlay show at is not integer !');
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
 Playlist.prototype.checkDrm = function(drm) {
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
     this.logger.log(' playlist Drm Herders on Request License  of item  ',
         drm[Const.FJCONFIG_DRM_HEADER_LICENSE_REQUEST]);
     this.logger.log(' playlist Drm Herders on Request Segments  of item  ',
         drm[Const.FJCONFIG_DRM_HEADER_SEGMENTS_REQUEST]);
     return true;
 };
 /**
  * used to check if an item of ads is correct
  */
 Playlist.prototype.checkAds = function(item) {
     if (Const.FJCONFIG_TYPES.indexOf(item[Const.FJCONFIG_TYPE]) === -1) {
         this.logger.error('BAD type Value ! ');
         return false;
     }
     if (!item[Const.FJCONFIG_TITLE]) {
         this.logger.error('BAD title Value ! ');
         return false;
     }
     if (!item[Const.FJCONFIG_SRC]) {
         this.logger.error('BAD src Value ! ');
         return false;
     }
     if (item[Const.FJCONFIG_ADS_LINK_URL] === null || item[Const.FJCONFIG_ADS_LINK_URL] === undefined) {
         this.logger.error('Ads: BAD  or missing link url Value ! ');
         return false;
     }
     return true;
 };
 /**
  * used to check if an item of audiois correct
  */
 Playlist.prototype.checkAudio = function(item) {
     /* TODO */
     return false;
 };
 /**
  * used to check if an item is correct
  */
 Playlist.prototype.checkItem = function(item) {
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
     if ((list !== undefined) && (list.length > 0)) {
         for (j = 0; j < list.length; j++) {
             subItem = list[j];
             if (this.checkAudio(subItem) === false) {
                 return false;
             }
         }
     }
     // check ads
     list = item[Const.FJCONFIG_ADS];
     if ((list !== undefined) && (list.length > 0)) {
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
     if ((list !== undefined) && (list.length > 0)) {
         for (j = 0; j < list.length; j++) {
             subItem = list[j];
             if (this.checkSubtitle(subItem) === false) {
                 return false;
             }
         }
     }
     // check overlays
     list = item[Const.FJCONFIG_OVERLAYS];
     if ((list !== undefined) && (list.length > 0)) {
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

 export default Playlist;