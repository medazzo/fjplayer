  import * as Const from './constants';
  import Logger from './Logger';
  /* import Menu from './Menu';
  import Thumbs from './Thumbs';
  import Volume from './Volume'; */
  import Video from './Video';
  require('./app.css');

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
          // creating video
          videoDivElement = document.createElement('video');
          mainDivElement.appendChild(videoDivElement);
          if (conf.getPlayerScreenMode() === Const.FJCONFIG_SCREEN_MODE_MINIMAL) {
              videoDivElement.className += ' mainVideoSmall';
          } else if (conf.getPlayerScreenMode() === Const.FJCONFIG_SCREEN_MODE_CINEMA) {
              videoDivElement.className += ' mainVideoCinema';
          } else {
              videoDivElement.className += ' mainVideoBig';
          }
          // overlay
          overlaysDivElement = document.createElement('div');
          mainDivElement.appendChild(overlaysDivElement);
          // VolumeMgr.setVolume(videoElement.volume * 100);
          video = new Video();
          // menu.setSubs(0);
          return true;
      }

      function goNext() {
          // go next cbx
          logger.log(' We are asked to go next !!!');
          itemPlaying++;
          if (itemPlaying < conf.getItemsNbr()) {
              video.initialize(conf.getItemConfAt(itemPlaying), videoDivElement, goNext);
              video.setTracks(overlaysDivElement);
              video.View();
          } else {
              logger.log(' no next to play , so we loop again ');
              // todo
          }

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
          var ok = true;
          if (itemnbr < conf.getItemsNbr()) {
              video.initialize(conf.getItemConfAt(itemnbr), videoDivElement, goNext);
              video.setTracks(overlaysDivElement);
              video.View();
              itemPlaying = itemnbr;
          } else {
              logger.error(' item nubmerasked to play do not exist ', itemnbr)
              ok = false;
          }
          return ok;
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