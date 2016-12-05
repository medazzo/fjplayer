 import * as Const from './constants';
 import Logger from './Logger';
 import Menu from './Menu';
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
         divElement,
         videoElement,
         video,
         menu,
         itemPlaying,
         started;

     function setup() {
         video = null
         conf = null;
         videoElement = null;
         divElement = null;
         started = false;
         initialized = false;
         divid = '';
         itemPlaying = 0;
         logger = new Logger('Player');
         menu = new Menu('menuObj', 'videoElement', 'menuTracksArray', 'settingBtnOb');
         itemPlaying = 0;
     }

     function prepareUI() {
         logger.log(' Preparing UI ..');
         divElement.innerHTML = Const.FJPLAYER_HTML_INNER;
         // creating video
         videoElement = document.createElement('video');
         video = new Video();
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
         return 'divid:' + divid + ', itemPlaying:' + itemPlaying + ', divElement:' + divElement +
             ', initialized:' + initialized + ', started:' + started + ', conf:' + conf.toString();
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

 export default Player;