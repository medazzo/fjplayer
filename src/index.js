/**
 * The entry point for the library FJplayer.JS
 */
import Playlist from './playlist';
import Player from './player';
import { getVersionString } from './Version';

// Shove both of these into the global scope
var context = (typeof window !== 'undefined' && window) || global;

var fjplayer = context.fjplayer;

if (!fjplayer) {
    fjplayer = context.fjplayer = {};
}

fjplayer.Playlist = Playlist;
fjplayer.Player = Player;
fjplayer.Version = getVersionString();

export default fjplayer;
export { Playlist };
export { Player };