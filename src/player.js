import Logger from './Logger';
import Playlist from './playlist';
import Overlays from './Overlays';
import AdsManager from './AdsManager';
import * as Const from './constants';
import * as Emp from './testing';
import PlayerMedia from './PlayerMedia';
import PlayerUi from './PlayerUi';
/**
 *  Class player in whinch the player is implemented
 */
function Player(fjID, videoContainerId) {
    this.logger = new Logger(this);
    this.FJid = fjID;
    this.videoContainerId = videoContainerId;

    this.emp1 = new Emp.Employee('firstName', 'familyName');
    console.log('>>>>>  Full Name ', this.emp1.getFullName());

    this.mgr = new Emp.Manager('MGRfirstName', 'MGRfamilyName');
    this.mgr.addEmployee(this.emp1);
    console.log('>>>>>  Full Name ', this.mgr.getFullName());
    console.log('>>>>>  Employees ', this.mgr.getEmployes());

    this.OverlaysMgr = new Overlays(this.video, document.getElementById(this.overlaysContainerDivId));
    this.AdsMgr = new AdsManager(this, this.video, document.getElementById(this.adsContainerDivId));
    this.PlayerMedia = new PlayerMedia();
    this.PlayerUi = new PlayerUi(this.videoContainerId);
};
Player.prototype.supportsVideo = !!document.createElement('video').canPlayType;
/**
 * Fonction to return a human redeable duration of secondes
 */
Player.prototype.duration = function(secDuration) {
    var secNum = parseInt(secDuration, 10); // don't forget the second param
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
    var seconds = secNum - (hours * 3600) - (minutes * 60);

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (hours === 0) {
        return (minutes + ':' + seconds);
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    return (hours + ':' + minutes + ':' + seconds);
};
/**
 * Function Called from AdsManager to
 *  freeze and hide player to show ads
 */
Player.prototype.freezePlayer = function(pauseIt, stillStarting, isEnding) {
    if (pauseIt === true) {
        // hide the player and pause it
        this.video.pause();
        this.video.style.display = 'none';
        // hide controls of current video
        this.HideControlsCursor(this, true);
        this.SubsMenu.HideMenu();
    } else {
        if (isEnding === true) {
            // still playing pre preroll ads
            if (this.AdsMgr.CheckPostAds() === true) {
                return;
            }
            this.video.style.display = 'block';
            this.playpauseBtn.className = 'fa  fa-play';
        } else {
            if (stillStarting === true) {
                // still playing pre preroll ads
                if (this.AdsMgr.CheckPreAds() === true) {
                    return;
                }
            }
            // resume the play and show it
            this.video.style.display = 'block';
            this.onplaypauseClick(this);
        }
    }
};
/**
 *
 */
Player.prototype.loadPlaylist = function(playlist) {
    this.logger.log(' start  function ');
    if (!this.supportsVideo) {
        this.logger.error(' browser did not support video !');
        return false;
    }
    if (playlist instanceof Playlist) {
        this.Playlist = playlist;
        this.playlistLoaded = true;
        this.PlayerUi.initialize(this.PlayerMedia);
        this.PlayerMedia.initialize(this.PlayerUi);
        return true;
    }
    this.playlistLoaded = false;
    return false;
};
/**
 *
 */
Player.prototype.playAt = function(index) {
    var item;
    if (!this.playlistLoaded) {
        this.logger.error(' No playlist is loaded on player ');
        return false;
    }
    item = this.Playlist.getItem(index);
    if (item === undefined) {
        this.logger.error(' No item to play at index ', index,
            ' playlist is sized ', this.Playlist.getSize());
        return false;
    }

    this.PlayerUi.setTitle(item[Const.FJCONFIG_TITLE]);

    // set thumbs
    if ((item[Const.FJCONFIG_THUMBS] !== undefined) && (item[Const.FJCONFIG_THUMBS] != null)) {
        this.vttThumbs = item[Const.FJCONFIG_THUMBS];
    }
    // Set sub, ads and overlays ..
    if ((item[Const.FJCONFIG_SUBTITLES] !== undefined) && (item[Const.FJCONFIG_SUBTITLES] != null)) {
        this.subsJsObj = item[Const.FJCONFIG_SUBTITLES];
    }
    // Set overlays
    if ((item[Const.FJCONFIG_OVERLAYS] !== undefined) && (item[Const.FJCONFIG_OVERLAYS] != null)) {
        this.overlaysObjs = item[Const.FJCONFIG_OVERLAYS];
        this.OverlaysMgr.Setup(this.overlaysObjs);
    }
    // Set ads
    if ((item[Const.FJCONFIG_ADS] !== undefined) && (item[Const.FJCONFIG_ADS] != null)) {
        this.adsObjs = item[Const.FJCONFIG_ADS];
        this.AdsMgr.Setup(this.adsObjs);
    }

    if (item[Const.FJCONFIG_SRC] != null || item[Const.FJCONFIG_SRC] !== undefined) {
        if (item[Const.FJCONFIG_TYPE] === Const.FJCONFIG_TYPE_DASH) {
            // clear dash
            this.PlayerMedia.loadDash(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_POSTER], false);
        } else {
            this.PlayerMedia.load(item[Const.FJCONFIG_SRC], item[Const.FJCONFIG_TYPE],
                item[Const.FJCONFIG_POSTER], false);
        }
        return true;
    }
    this.logger.error('src of item is not valid , at index ', index);
    return false;
};

export default Player;