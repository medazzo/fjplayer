import Logger from './Logger';
require('./player.css');
/**
 *  Class player in whinch the player is implemented
 */
// TODO 
function Overlays(video, AudsbuttonID, audMenuContainerDivId, menuListAud) {
    this.logger = new Logger(this);
    this.video = video;
    this.AudsbuttonID = AudsbuttonID;
    this.audMenuContainerDivId = audMenuContainerDivId;
    this.menuListAud = menuListAud;
    this.Audsbutton = document.getElementById(this.AudsbuttonID);
    this.SubsExist = false;
    this.Setup();
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
 * Setting Subs menu and cbx
 */
AudsMenu.prototype.Setup = function() {
    var i = 0;
    var item = null;
    var btn = null;
    var self = this;
    var container = document.getElementById(self.audMenuContainerDivId);
    container.style.display = 'none';
    if ((!self.video.audioTracks) || (self.video.audioTracks.length <= 1)) {
        // hide audio button
        btn = document.getElementById(self.languagesDivId);
        btn.style.display = 'none';
        self.logger.log(' Audio Menu not created !');
        return;
    }
    // Add events for languages button
    self.Audsbutton.addEventListener('click', function(ev) {
        self.onshowHideMenu(self, self.audMenuDiv, ev);
    });

    container.className = 'settingMenuDiv';
    container.innerHTML =
        '<div class=\"settingMenuSubMenuLeft\" >' +
        '<ul class=\"subtitles-menu\" id=\"' + self.audMenuListId + '\" >' +
        '</ul>	' +
        '</div>';

    // video array
    self.menuListAud = document.getElementById(self.audMenuListId);
    if (self.video.audioTracks) {
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
    }
    self.logger.log(' Audio Menu created !', self.video.audioTracks.length, '! ', self.menuListAud);
};