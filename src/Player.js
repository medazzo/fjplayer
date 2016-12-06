 /* import * as Const from './constants'; */
 import Logger from './Logger';
 /* import Menu from './Menu';
 import Thumbs from './Thumbs';
 import Volume from './Volume'; */
 import Video from './Video';

 /**
  * @module Player
  * @description The Player is the player module used to play items.
  */
 function Player() {
     let instance,
         logger,
         initialized,
         divid,
         conf,
         mainDivElement,
         videoDivElement,
         overlaysDivElement,
         video,
         /* menu,
          thumbMgr,
         VolumeMgr,*/
         itemPlaying,
         started;

     function setup() {
         video = null;
         conf = null;
         videoDivElement = null;
         mainDivElement = null;
         started = false;
         initialized = false;
         divid = '';
         itemPlaying = 0;
         overlaysDivElement = null;
         logger = new Logger('Player');
         /* menu = new Menu('menuObj', 'videoElement', 'menuTracksArray', 'settingBtnOb');
         thumbMgr = new Thumbs('tiObj', 'tdObj', 'pbObj');
         VolumeMgr = new Volume(); */
         itemPlaying = 0;
     }

     function prepareUI() {
         logger.log(' Preparing UI ..');
         // change inner html accroding to small cinema or big player
         // divElement.innerHTML = Const.FJPLAYER_HTML_INNER;
         // creating video
         videoDivElement = document.createElement('video');
         mainDivElement.appendChild(videoDivElement);
         // overlay
         overlaysDivElement = document.createElement('div');
         mainDivElement.appendChild(overlaysDivElement);
         // VolumeMgr.setVolume(videoElement.volume * 100);
         video = new Video();
         // menu.setSubs(0);
         return true;
     }

     function initialize(fjconf, fjdivid) {
         mainDivElement = document.getElementById(fjdivid);
         if (mainDivElement === null) {
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
         return 'divid:' + divid + ', itemPlaying:' + itemPlaying + ', divElement:' + mainDivElement +
             ', initialized:' + initialized + ', started:' + started + ', conf:' + conf.toString();
     }

     function playAt(itemnbr) {
         video.initialize(conf.getItemConfAt(itemnbr), videoDivElement);
         video.setTracks(overlaysDivElement);
         video.View();
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

 export default Player;