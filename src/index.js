/**
 * The entry point for the library FJplayer.JS
 */
import Configuration from './Configuration';
import { getVersionString } from './Version';

// Shove both of these into the global scope
var context = (typeof window !== 'undefined' && window) || global;

var fjplayer = context.fjplayer;

if (!fjplayer) {
    fjplayer = context.fjplayer = {};
}

fjplayer.Configuration = Configuration;
fjplayer.Version = getVersionString();

export default fjplayer;
export { Configuration };