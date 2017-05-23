/**
 * @module Logger
 * @description The Configuration is the primary module used to set configuration and .
 */
function Logger(klass) {
    var m;
    this.gState = true;
    this.debug = {};

    if (this.gState) {
        for (m in console) {
            if (typeof console[m] === 'function') {
                this.debug[m] = console[m].bind(window.console, klass.constructor.name + ': ');
            }
        }
    } else {
        for (m in console) {
            if (typeof console[m] === 'function') {
                this.debug[m] = function() {};
            }
        }
    }
    return this.debug;
};

export default Logger;