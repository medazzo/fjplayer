import Logger from './Logger';
require('./player.css');
/**
 *  Class player in whinch the player is implemented
 */
function Overlays(video, overlayasList, OverlayDivId) {
    this.logger = new Logger(this);
    this.video = video;
    this.overlayasList = overlayasList;
    this.OverlayDivId = OverlayDivId;
    this.OverlayDiv = document.getElementById(this.OverlayDivId);
};
/**
 *
 */
Overlays.prototype.Checks = function() {

};

/**
 * Setting Subs menu and cbx
 */
Overlays.prototype.Start = function() {
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
export default Overlays;