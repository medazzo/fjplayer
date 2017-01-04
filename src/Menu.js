import Logger from './Logger';

/**
 * @module Menu
 * @description The Menu is the Menu module used to play Menu.
 */
function Menu(subtitlesBtnElement, audiosBtnElement, videoElement, subtitlesMenuElement, audiosMenuElement) {
    let instance,
        video = videoElement,
        subtitlesBtn = subtitlesBtnElement,
        audiosBtn = audiosBtnElement,
        subtitlesMenu = subtitlesMenuElement,
        audiosMenu = audiosMenuElement,
        audInit = false,
        subsInit = false,
        logger = new Logger('Menu');

    function initialize(doSubs, doAud) {
        // Init menus
        if (doSubs) {
            self.SetSubsMenu(self);
            audInit = true;
        }
        if (doAud) {
            self.SetAudioMenu(self);
            subsInit = true;
        }
    }

    function SetAudioMenu(self) {
        var i = 0;
        var item = null;
        var container = document.getElementById(self.audMenuContainerDivId);
        var id = new Date().valueOf() + '_' + Math.random();
        container.style.display = 'none';
        if ((!self.video.audioTracks) || (self.video.audioTracks.length <= 1)) {
            //hide audio button 
            var btn = document.getElementById(self.languagesDivId);
            btn.style.display = 'none';
            return;
        }
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
        console.log(' Audio Menu created !', self.video.audioTracks.length, '! ', self.menuListAud);
    }

    function SetSubsMenu(self) {
        var i = 0;
        var item = null;
        var id = new Date().valueOf() + '_' + Math.random();
        var container = document.getElementById(self.subsdMenuContainerDivId);
        container.className = 'settingMenuDiv';
        container.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + self.subsMenuListId + '\" >' +
            '</ul>	' +
            '</div>';

        // video array
        self.menuListSubs = document.getElementById(self.subsMenuListId);
        for (i = 0; i < self.video.textTracks.length; i++) {
            if ((self.video.textTracks[i].kind === 'captions') ||
                (self.video.textTracks[i].kind === 'subtitles')) {
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
                console.log('Setting Subs List @ ', i, ' item is ', item);
            }
        }
        container.style.display = 'none';
        console.log(' Subs Menu created !! ', self.menuListSubs);
    }

    function activateSubs(self, item) {
        var i = 0;
        var k = 0;
        var litem;
        var index = Array.prototype.indexOf.call(self.menuListSubs.childNodes, item);
        var tindex = item.getAttribute('index');
        console.log('clicked is  selected @ index ', index, ' text index ', tindex);
        if (self.video.textTracks) {
            if (self.video.textTracks[tindex].mode === 'showing') {
                console.log('AlREADY  selected @ index ', tindex);
                return;
            }

            for (i = 0; i < self.menuListSubs.children.length; i++) {
                litem = self.menuListSubs.children[i];
                k = litem.getAttribute('index');
                console.log('cheking item @  ', i);
                if (tindex === k) {
                    self.video.textTracks[i].mode = 'showing';
                    litem.className = 'subtitles-menu-item-actif';
                    console.log('Setting item @  ', i);
                } else {
                    self.video.textTracks[i].mode = 'hidden';
                    litem.className = 'subtitles-menu-item';
                    console.log('Unsetting item @  ', i);
                }
            }
        }
        self.subsMenuDiv.style.display = 'none';
    };

    function activateAudio(self, item) {
        var i = 0;
        var k = 0;
        var litem;
        var index = Array.prototype.indexOf.call(self.menuListAud.childNodes, item);
        var tindex = item.getAttribute('index');
        console.log('clicked is  selected @ index ', index, ' text index ', tindex);
        if (self.video.audioTracks) {
            if (self.video.audioTracks[index].enabled) {
                console.log('AlREADY  selected @ index ', tindex);
                return;
            }

            for (i = 0; i < self.menuListAud.children.length; i++) {
                litem = self.menuListAud.children[i];
                k = litem.getAttribute('index');
                console.log('cheking item @  ', i);
                if (i === index) {
                    self.video.audioTracks[i].enabled = true;
                    litem.className = 'subtitles-menu-item-actif';
                    console.log('Setting item @  ', i);
                } else {
                    self.video.audioTracks[i].enabled = false;
                    litem.className = 'subtitles-menu-item';
                    console.log('Unsetting item @  ', i);
                }
            }
        }
        self.audMenuDiv.style.display = 'none';
    }

    instance = {
        initialize: initialize,
        activateAudio: activateAudio,
        activateSubs: activateSubs,
        SetSubsMenu: SetSubsMenu,
        SetAudioMenu: SetAudioMenu
    };

    return instance;
};

export default Menu;