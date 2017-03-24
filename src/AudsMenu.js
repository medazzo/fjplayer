import Logger from './Logger';
require('./player.css');
/**
 *  Class player in whinch the player is implemented
 */
function AudsMenu(video, playerId, audMenuContainerDivId) {
    this.logger = new Logger(this);
    this.video = video;
    this.id = playerId;
    this.audsBtnId = 'lb' + this.id;
    this.audsMenuListId = 'amml' + this.id;
    this.audMenuContainerDivId = audMenuContainerDivId;
    this.AudsExist = false;
};
/**
 * Aubs cbx Mgt
 */
AudsMenu.prototype.activateAudio = function(self, item) {
    var i = 0;
    var litem;
    var index = Array.prototype.indexOf.call(self.menuListAud.childNodes, item);
    var tindex = item.getAttribute('index');
    self.logger.log('clicked is  selected @ index ', index, ' text index ', tindex);
    if (self.video.audioTracks) {
        if (self.video.audioTracks[index].enabled) {
            self.logger.log('AlREADY  selected @ index ', tindex);
            return;
        }

        for (i = 0; i < self.menuListAud.children.length; i++) {
            litem = self.menuListAud.children[i];
            self.logger.log('cheking item @  ', i);
            if (i === index) {
                self.video.audioTracks[i].enabled = true;
                litem.className = 'subtitles-menu-item-actif';
                self.logger.log('Setting item @  ', i);
            } else {
                self.video.audioTracks[i].enabled = false;
                litem.className = 'subtitles-menu-item';
                self.logger.log('Unsetting item @  ', i);
            }
        }
    }
    self.audMenuDiv.style.display = 'none';
};
/**
 * Event CALLBACK ; called on menu Click
 */
AudsMenu.prototype.onshowHideMenu = function(self, menuContainer, ev) {
    menuContainer.style.position = 'absolute';
    menuContainer.style.left = (ev.pageX - 20) + 'px';
    menuContainer.style.top = (ev.pageY - 90) + 'px';

    if (menuContainer.style.display === 'none') {
        menuContainer.style.display = 'block';
    } else {
        menuContainer.style.display = 'none';
    }
    self.logger.log(' Showing or Hiding an menu ', menuContainer);
};
/**
 * Setting Auds menu and cbx
 */
AudsMenu.prototype.Setup = function(AudsbuttonDivID) {
    var i = 0;
    var item = null;
    var self = this;
    this.audMenuDiv = document.getElementById(self.audMenuContainerDivId);
    this.AudsExist = false;
    // check if exist
    if ((!self.video.audioTracks) || (self.video.audioTracks.length <= 1)) {
        // hide audio button
        self.logger.log(' Audio Menu not created !');
        return;
    }
    this.AudsExist = true;
    // Setting inner of btn div
    this.AudsbuttonDivID = AudsbuttonDivID;
    this.AudsbuttonDiv = document.getElementById(this.AudsbuttonDivID);
    this.SubsbuttonDiv.innerHTML = '<span id=\"' + this.audsBtnId + '\"  ' +
        '  class=\"fa fa-language\" title=\"audios\" ></span>';

    this.audsBtn = document.getElementById(this.audsBtnId);
    // video array
    self.menuListAud = document.getElementById(self.audsMenuListId);
    // clear old
    if (self.menuListAud !== null) {
        while (self.menuListAud.firstChild) {
            self.menuListAud.removeChild(self.menuListAud.firstChild);
        }
    }

    // Add events for languages button
    self.Audsbutton.addEventListener('click', function(ev) {
        self.onshowHideMenu(self, self.audMenuDiv, ev);
    });

    this.audMenuDiv.className = 'settingMenuDiv';
    this.audMenuDiv.innerHTML =
        '<div class=\"settingMenuSubMenuLeft\" >' +
        '<ul class=\"subtitles-menu\" id=\"' + self.audMenuListId + '\" >' +
        '</ul>	' +
        '</div>';

    for (i = 0; i < self.video.audioTracks.length; i++) {
        item = document.createElement('li');
        if (self.video.audioTracks[i].enabled) {
            item.className = 'subtitles-menu-item-actif';
        } else {
            item.className = 'subtitles-menu-item';
        }
        item.innerHTML = self.video.audioTracks[i].language + '::' + self.video.audioTracks[i].label;
        self.menuListAud.appendChild(item);
        item.addEventListener('click', function(ev) {
            self.activateAudio(self, this);
        });
    }

    self.logger.log(' Audio Menu created !', self.video.audioTracks.length, '! ', self.menuListAud);
};

export default AudsMenu;