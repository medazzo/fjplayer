/**
 * The entry point for the library FJplayer.JS
 */
const Playlist = require('./js/player/playlist');
const Player = require('./js/player/player');
const Version = require('./Version');
const { PlayerEvents, AdsEvents, OverlayEvents } = require('./js/defs/constants');

// Shove both of these into the global scope
const context = (typeof window !== 'undefined' && window) || global;

let { fjplayer } = context;

if (!fjplayer) {
  fjplayer = {};
  context.fjplayer = {};
}

fjplayer.Playlist = Playlist;
fjplayer.Player = Player;
fjplayer.Version = Version;
fjplayer.PlayerEvents = PlayerEvents;
fjplayer.AdsEvents = AdsEvents;
fjplayer.OverlayEvents = OverlayEvents;

export default fjplayer;
export { Playlist };
export { Player };
export { Version };
export { PlayerEvents };
export { AdsEvents };
export { OverlayEvents };

/*
Next version like this  + playlist must be detached
class fjplayer {
  constructor() {
    this.Playlist = new Playlist();
    this.Player = null;
    this.Version = new Version();
    this.PlayerEvents = PlayerEvents;
    this.AdsEvents = AdsEvents;
    this.OverlayEvents = OverlayEvents;
  }

  get playlist() {
    return this.Playlist;
  }

  get player() {
    return this.Player;
  }

  setPlayer(id, videoContainerId) {
    this.Player = new Player(id, videoContainerId);
  }

  get version() {
    return this.Version.getVersion();
  }

  get playerEvents() {
    return this.PlayerEvents;
  }

  get adsEvents() {
    return this.AdsEvents;
  }

  get overlayEvents() {
    return this.OverlayEvents;
  }
}

module.exports = fjplayer;
s
*/
