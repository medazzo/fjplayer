const Logger = require('../utils/Logger');
require('../../css/player.less');
/**
 *  Class player in whinch the player is implemented
 */
class Menus {
  constructor(mainVideo, subsBtnId, audiosBtnId, MenusContDivId) {
    this.logger = new Logger(this);
    this.video = mainVideo;
    this.mediaPlayer = null;
    this.subtitlesBtnId = subsBtnId;
    this.audsBtnId = audiosBtnId;
    this.subsMenuListId = `smml${this.subtitlesBtnId}`;
    this.audsMenuListId = `amml${audiosBtnId}`;
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
  HideMenuSubs() {
    if ((this.SubsExist === true)
            && (this.subsMenuDiv.classList.contains('fj-hide') === false)) {
      this.subsMenuDiv.classList.add('fj-hide');
    }
  }

  /**
     * Hide Menu Audios
     */
  HideMenusAuds() {
    if ((this.audsExist === true)
            && (this.audsMenuDiv.classList.contains('fj-hide') === false)) {
      this.audsMenuDiv.classList.add('fj-hide');
    }
  }

  /**
     *
     * @param {*Funtion Callback used to activate item of list
     */
  activate(item, isItSubs) {
    let i; let litem; let k; let
      list;
    if (isItSubs === true) {
      list = this.subsList;
    } else {
      list = this.audsList;
    }
    const index = Array.prototype.indexOf.call(list.childNodes, item);
    const tindex = item.getAttribute('index');
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
  onshowHideMenu(menuContainer, element, ev) {
    const rectV = this.video.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    if (menuContainer.classList.contains('fj-hide')) {
      this.logger.warn('setting left @', (rect.right - ev.pageX));
      this.logger.warn('setting left @', (rect.left - ev.pageX));
      this.menuContainer.style.left = ev.pageX - rectV.left - rect.width;
      this.menuContainer.classList.remove('fj-hide');
    } else {
      menuContainer.classList.add('fj-hide');
    }
  }

  /**
     * Used to Hide menu
     */
  HideMenus() {
    this.HideMenuSubs();
    this.HideMenusAuds();
  }

  /**
     *
     * @param {*} playerMedia
     */
  SetupSubs(playerMedia) {
    this.logger.info('Calling for setup Subs !!!');
    let subtitlesBtn = null;
    let i = 0;
    let activated = false;
    let item = null;
    this.mediaPlayer = playerMedia;
    const textTracks = this.mediaPlayer.getTextTracks();
    this.SubsExist = false;

    this.logger.info(' Trying to setup menu subs , text tracks length : ', textTracks);
    // check if exist
    if ((!textTracks) || (textTracks.length <= 0)) {
      this.SubsExist = false;
      this.logger.log(' Subs Menu not created !');
      return false;
    }
    // check if this.video contains subs  exist
    for (i = 0; i < textTracks.length; i += 1) {
      this.logger.debug(' @ text track number  ', i, ' and it type is ',
        textTracks[i].kind);
      if ((textTracks[i].kind === 'captions')
                || (textTracks[i].kind === 'subtitle')
                || (textTracks[i].kind === 'subtitles')) {
        this.SubsExist = true;
        break;
      }
    }
    if (this.SubsExist === false) {
      this.logger.info(' Subs Menu Not created !! ');
      return this.SubsExist;
    }
    // Setting btn
    subtitlesBtn = document.getElementById(this.subtitlesBtnId);
    this.logger.info('Setting the btn ', subtitlesBtn, ' from id ', this.subtitlesBtnId);
    // this.video array
    this.subsList = document.getElementById(this.subsMenuListId);
    // clear old
    if (this.subsList !== null) {
      while (this.subsList.firstChild) {
        this.subsList.removeChild(this.subsList.firstChild);
      }
    } else {
      this.subsMenuDiv = document.createElement('div');
      this.subsMenuDiv.classList.add('settingMenuDiv');
      this.subsMenuDiv.classList.add('fj-hide');
      this.subsMenuDiv.innerHTML = `${'<div class="fj-list-title"> Soutitres </div> '
                + '<ul class="fj-list"  id="'}${this.subsMenuListId}" >`
                + '</ul>';
      this.menusDiv.appendChild(this.subsMenuDiv);
      // Add events for subtitles button
      subtitlesBtn.addEventListener('click', (ev) => {
        this.onshowHideMenu(this.subsMenuDiv, this, ev);
      });
      //  subs list
      this.subsList = document.getElementById(this.subsMenuListId);
    }
    // loop
    for (i = 0; i < textTracks.length; i += 1) {
      if ((textTracks[i].kind === 'captions')
                || (textTracks[i].kind === 'subtitle')
                || (textTracks[i].kind === 'subtitles')) {
        item = document.createElement('li');
        if (this.mediaPlayer.isTextTrackEnabled(i) === true) {
          item.classList.add('subtitles-menu-item-actif');
          activated = true;
        } else {
          item.classList.add('subtitles-menu-item');
        }
        item.setAttribute('index', i);
        item.innerHTML = this.mediaPlayer.getTextTrackLabel(i);
        this.subsList.appendChild(item);
        item.addEventListener('click', () => {
          this.activate(this, true);
        });
        this.logger.debug('Setting Subs List @ ', i, ' item is ', item);
      }
    }

    // off item
    item = document.createElement('li');
    if (activated === false) {
      item.classList.add('subtitles-menu-item-actif');
    } else {
      item.classList.add('subtitles-menu-item');
    }
    item.setAttribute('index', -1);
    item.innerHTML = 'off';
    this.subsList.appendChild(item);
    item.addEventListener('click', () => {
      this.activate(this);
    });
    this.logger.log('Setting Subs List @ ', -1, ' item is ', item);

    this.logger.log(' Subs Menu  created !! ', this.subsMenuDiv);
    return this.SubsExist;
  }

  /**
     * Setting Auds menu and cbx
     */
  SetupAuds(playerMedia) {
    this.logger.info('Calling for setup Auds !!!');
    let audsBtn = null;
    let i = 0;
    let item = null;
    this.mediaPlayer = playerMedia;
    const audioTracks = this.mediaPlayer.getAudioLanguages();
    this.audsExist = false;
    this.logger.info(' Trying to setup menu Auds , text tracks length : ', audioTracks);

    // check if exist
    if ((!audioTracks) || (audioTracks.length <= 1)) {
      this.audsExist = false;
      this.logger.log(' Audio Menu not created !');
      return false;
    }
    // Setting inner of btn div
    audsBtn = document.getElementById(this.audsBtnId);
    this.logger.info('Setting the btn ', audsBtn, ' from id ', this.audsBtnId);
    // this.video array
    this.audsList = document.getElementById(this.audsMenuListId);
    // clear old
    if (this.audsList !== null) {
      while (this.audsList.firstChild) {
        this.audsList.removeChild(this.audsList.firstChild);
      }
    } else {
      this.audsMenuDiv = document.createElement('div');
      this.audsMenuDiv.classList.add('settingMenuDiv');
      this.audsMenuDiv.classList.add('fj-hide');
      this.audsMenuDiv.innerHTML = `${'<div class="fj-list-title"> Audios </div> '
                + '<ul class="fj-list"  id="'}${this.audsMenuListId}" >`
                + '</ul>';
      this.menusDiv.appendChild(this.audsMenuDiv);
      // Add events for audios button
      audsBtn.addEventListener('click', (ev) => {
        this.onshowHideMenu(this.audsMenuDiv, this, ev);
      });
      //  audios list
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
      item.addEventListener('click', () => {
        this.activate(this, false);
      });
    }

    this.logger.debug(' Audio Menu created !', audioTracks.length, '! ', this.audsList);
    return this.audsExist;
  }
}

module.exports = Menus;
