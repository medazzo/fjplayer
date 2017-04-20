import Logger from './Logger';
/**
 * @module Eventing
 * @description The Eventing is the class eventing mgr
 *
 */
function Eventing() {
    var logger = new Logger(this),
        events = {};
    /**
     *
     */
    function addEventListener(name, handler) {
        logger.debug(' Adding Eventing Listener for event :',
            name, ', the handler is ', handler);
        if (events.hasOwnProperty(name)) {
            events[name].push(handler);
        } else {
            events[name] = [handler];
        }
    };
    /**
     *
     */
    function removeEventListener(name, handler) {
        var index = -1;
        logger.debug(' Removing Eventing Listener for event :',
            name, ', the handler is ', handler);
        /* This is a bit tricky, because how would you identify functions?
           This simple solution should work if you pass THE SAME handler. */
        if (!events.hasOwnProperty(name)) {
            return;
        }
        index = events[name].indexOf(handler);
        if (index !== -1) {
            events[name].splice(index, 1);
        }
    };
    /**
     *
     */
    function fireEvent(name, args) {
        var evs, l, i;
        logger.debug(' Firing Eventing on event :', name);
        if (!events.hasOwnProperty(name)) {
            return;
        }
        if (!args || !args.length) {
            args = [];
        }
        evs = events[name];
        l = evs.length;
        for (i = 0; i < l; i++) {
            evs[i].apply(null, args);
        }
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        fireEvent: fireEvent,
        addEventListener: addEventListener,
        removeEventListener: removeEventListener,
        on: addEventListener,
        off: removeEventListener,
        constructor: Eventing
    };
};
export default Eventing;