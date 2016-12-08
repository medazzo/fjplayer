  // import * as Const from './constants';
  import Logger from './Logger';
  var ejsContent = require('ejs!./fjplayer-tmpl.ejs');
  /* import Menu from './Menu';
  import Thumbs from './Thumbs';
  import Volume from './Volume'; */
  import Video from './Video';
  require('./app.css');
  require('bootstrap-webpack');

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
          // divcontrols,
          /* menu,
           thumbMgr,
          VolumeMgr,*/
          itemPlaying,
          started;

      function setup() {
          video = null;
          conf = null;
          // divcontrols = null;
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

          var data = { 'title': 'halllllllllllllllllo' };
          logger.log(' Preparing UI ..');
          // creating video
          videoDivElement = document.createElement('video');
          // generate html from ejs
          mainDivElement.innerHTML = ejsContent(data);

          /* mainDivElement.className += ' fjplayerdiv mainfjplayerdiv';
          mainDivElement.appendChild(videoDivElement);
          if (conf.getPlayerScreenMode() === Const.FJCONFIG_SCREEN_MODE_MINIMAL) {
              videoDivElement.className += ' videofjplayer';
          } else if (conf.getPlayerScreenMode() === Const.FJCONFIG_SCREEN_MODE_CINEMA) {
              videoDivElement.className += ' videofjplayer';
          } else {
              videoDivElement.className += ' videofjplayer';
          }
          // overlay
          overlaysDivElement = document.createElement('div');
          mainDivElement.appendChild(overlaysDivElement);
          // controls
          divcontrols = document.createElement('div');
          divcontrols.className = 'controlsfjplayerdiv';
          img = document.createElement('img');
          img.className = 'imgfullScreenbtn';
          control = document.createElement('div');
          control.className = 'controlfjplayerdiv';
          control.appendChild(img);
          divcontrols.appendChild(control);
          mainDivElement.appendChild(divcontrols); */
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
              logger.error(' item nubmerasked to play do not exist ', itemnbr);
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