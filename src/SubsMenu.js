import Logger from './Logger';
import Player from './playlist';
import * as Const from './constants';
require('./player.css');
require('font-awesome/css/font-awesome.css');
/**
 *  Class player in whinch the player is implemented
 */
function SubsMenu(video, player, subsExtraList) {
    this.logger = new Logger(this);
    this.fjplayer = player;
    this.fjvideo = video;
    this.fjsubsExtraLists = subsExtraList;
    // prepare player

};
/**
 * cbx Subs Mgt
 */
SubsMenu.prototype.activateSubs = function(self, item) {
    var i = 0;
    var k = 0;
    var litem;
    var index = Array.prototype.indexOf.call(self.menuListSubs.childNodes, item);
    var tindex = item.getAttribute('index');
    self.logger.log('clicked is  selected @ index ', index, ' text index ', tindex);
    if (self.video.textTracks) {
        if (self.video.textTracks[tindex].mode === 'showing') {
            self.logger.log('AlREADY  selected @ index ', tindex);
            return;
        }

        for (i = 0; i < self.menuListSubs.children.length; i++) {
            litem = self.menuListSubs.children[i];
            k = litem.getAttribute('index');
            self.logger.log('cheking item @  ', i);
            if (tindex === k) {
                self.video.textTracks[i].mode = 'showing';
                litem.className = 'subtitles-menu-item-actif';
                self.logger.log('Setting item @  ', i);
            } else {
                self.video.textTracks[i].mode = 'hidden';
                litem.className = 'subtitles-menu-item';
                self.logger.log('Unsetting item @  ', i);
            }
        }
    }
    self.subsMenuDiv.style.display = 'none';
};
/**
 * Event CALLBACK ; called on menu Click
 */
Player.prototype.onshowHideMenu = function(self, menuContainer, ev) {
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
SubsMenu.prototype.Setup = function(SubsbuttonID, subsdMenuContainerDivId, subsMenuListId) {
    var i = 0;
    var item = null;
    var foundsubs = false;
    var container = document.getElementById(subsdMenuContainerDivId);

    // video array
    self.menuListSubs = document.getElementById(subsMenuListId);
    for (i = 0; i < self.video.textTracks.length; i++) {
        if ((self.video.textTracks[i].kind === 'captions') ||
            (self.video.textTracks[i].kind === 'subtitles')) {
            foundsubs = true;
            item = document.createElement('li');
            if (self.video.textTracks[i].mode === 'showing') {
                item.className = 'subtitles-menu-item-actif';
            } else {
                item.className = 'subtitles-menu-item';
            }
            item.setAttribute('index', i);
            item.innerHTML = self.video.textTracks[i].label;
            self.menuListSubs.appendChild(item);
            item.addEventListener('click', function(ev) {
                self.activateSubs(self, this);
            });
            self.logger.log('Setting Subs List @ ', i, ' item is ', item);
        }
    }
    if (foundsubs === true) {
        // Add events for subtitles button
        self.subtitlesBtn.addEventListener('click', function(ev) {
            self.onshowHideMenu(self, self.subsMenuDiv, ev);
        });

        container.className = 'settingMenuDiv';
        container.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + self.subsMenuListId + '\" >' +
            '</ul>	' +
            '</div>';
        container.style.display = 'none';
        self.logger.log(' Subs Menu  created !! ', self.menuListSubs);
    } else {
        self.logger.log(' Subs Menu Not created !! ');
    }
};
// constantes member of class
SubsMenu.prototype.playlistLoaded = false;