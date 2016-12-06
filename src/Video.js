 import * as Const from './constants';
 import Logger from './Logger';
 import Overlay from './Overlay';

 /**
  * @module Video
  * @description The Video is the video module used to play item:
  *    it's only concernedabout setting tracks of items and preparing video contextes..
  */
 function Video() {

     let instance,
         logger,
         mediaConf,
         vidElement,
         tracksArray,
         overlaysArray,
         indexThumbsTrack,
         isVideoisAds,
         isContainsSubs,
         isContainsLangs,
         overlaysDivElement,
         /* dashContext,
          dashPlayer,*/
         isContainsThumbs;

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
         overlaysArray = [];
         tracksArray = { 'subs': [], 'audio': [] };
         logger = new Logger('Video');
     }

     function initialize(fjmediaConf, videoElement) {
         var source;
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
             overlaysArray[0] = new Overlay(vidElement, overlaysDivElement, null, 0,
                 mediaConf[Const.FJCONFIG_ADS_ESCAPE_AT], mediaConf[Const.FJCONFIG_ADS_LINK_URL]);
         } else {
             isVideoisAds = false;
             overs = mediaConf[Const.FJCONFIG_OVERLAYS];
             if (overs) {
                 logger.log('setTracks : Setting overlays  class > Movie ', overs.length);
                 for (i = 0; i < overs.length; i++) {
                     item = overs[i];
                     overlaysArray[i] = new Overlay(vidElement, overlaysDivElement,
                         item[Const.FJCONFIG_OVER_DATA],
                         item[Const.FJCONFIG_OVER_SHOW_AT],
                         item[Const.FJCONFIG_OVER_DURATION],
                         item[Const.FJCONFIG_OVER_URL]);
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

 export default Video;