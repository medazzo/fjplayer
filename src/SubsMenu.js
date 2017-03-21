import Logger from './Logger';
require('./player.css');
/**
 *  Class player in whinch the player is implemented
 */
function SubsMenu(video, SubsbuttonID, subsdMenuContainerDivId, subsMenuListId) {
    this.logger = new Logger(this);
    this.video = video;
    this.SubsbuttonID = SubsbuttonID;
    this.subsdMenuContainerDivId = subsdMenuContainerDivId;
    this.subsMenuListId = subsMenuListId;
    this.SubsExist = false;
    this.subtitlesBtn = document.getElementById(this.SubsbuttonID);
    this.Setup();
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
SubsMenu.prototype.onshowHideMenu = function(self, menuContainer, ev) {
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
SubsMenu.prototype.Setup = function() {
    var i = 0;
    var item = null;
    var container = document.getElementById(this.subsdMenuContainerDivId);
    var self = this;
    // video array
    this.menuListSubs = document.getElementById(this.subsMenuListId);
    for (i = 0; i < this.video.textTracks.length; i++) {
        if ((this.video.textTracks[i].kind === 'captions') ||
            (this.video.textTracks[i].kind === 'subtitles')) {
            this.SubsExist = true;
            item = document.createElement('li');
            if (this.video.textTracks[i].mode === 'showing') {
                item.className = 'subtitles-menu-item-actif';
            } else {
                item.className = 'subtitles-menu-item';
            }
            item.setAttribute('index', i);
            item.innerHTML = this.video.textTracks[i].label;
            this.menuListSubs.appendChild(item);
            item.addEventListener('click', function(ev) {
                self.activateSubs(self, this);
            });
            this.logger.log('Setting Subs List @ ', i, ' item is ', item);
        }
    }
    if (this.SubsExist === true) {
        // Add events for subtitles button
        this.subtitlesBtn.addEventListener('click', function(ev) {
            self.onshowHideMenu(self, self.subsMenuDiv, ev);
        });

        container.className = 'settingMenuDiv';
        container.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + this.subsMenuListId + '\" >' +
            '</ul>	' +
            '</div>';
        container.style.display = 'none';
        this.logger.log(' Subs Menu  created !! ', this.menuListSubs);
    } else {
        this.logger.log(' Subs Menu Not created !! ');
    }
};