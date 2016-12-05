 import * as Const from './constants';
 import Logger from './Logger';
 import Overlay from './Overlay';
 import Thumbs from './Thumbs';
 import Menu from './Menu';
 import Volume from './Volume';

 /**
  * @module Video
  * @description The Video is the video module used to play items.
  */
 function Video() {

     let instance,
         logger,
         mediaConf,
         vidElement,
         tracksArray,
         overlaysrray,
         indexThumbsTrack,
         isPlaying,
         VolumeMgr,
         isVideoisAds,
         isContainsSubs,
         isContainsLangs,
         dashContext,
         dashPlayer,
         isContainsThumbs;

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
         VolumeMgr = new Volume();;
         overlaysArray = new Array();
         tracksArray = { 'subs': [], 'audio': [] };
         logger = new Logger('Overlay');
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
             overlaysArray[0] = new Overlay(null, 0, -1, true);
             return;
         } else {
             isVideoisAds = false;
             overs = mediaConf[Const.FJCONFIG_OVERLAYS];
             if (overs) {
                 logger.info('setTracks : Setting overlays  class > Movie ', overs.length);
                 for (i = 0; i < overs.length; i++) {
                     var item = overs[i]
                     overlaysArray[i] = new Overlay(item[Const.FJCONFIG_OVER_DATA],
                         item[Const.FJCONFIG_OVER_SHOW_AT],
                         item[Const.FJCONFIG_OVER_DURATION],
                         item[Const.FJCONFIG_OVER_URL]);
                 }
             }
         }
         logger.info(' Video is an ADS >', isVideoisAds);

         //set  thumbs 
         if (mediaConf[Const.FJCONFIG_THUMBS]) {
             logger.info('setTracks : Setting thumbs ');
             thumbMgr = new Thumbs(tiObj, tdObj, pbObj);
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
                     logger.info('unknown type of tracks ', vidElement.textTracks[i].kind)
                 }
             }
             if (isContainsSubs ||  isContainsLangs) {
                 SettingMenuMgr = new Menu(menuObj, settingBtn);
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

 export default Video;