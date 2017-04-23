/**
 * @module Eventing
 * @description The Eventing is the class eventing mgr
 *
 */
function Eventing() {
    var events = {};
    /**
     *
     */
    function addListener(name, handler) {
        if (events.hasOwnProperty(name)) {
            events[name].push(handler);
        } else {
            events[name] = [handler];
        }
    };
    /**
     *
     */
    function removeListener(name, handler) {
        var index = -1;
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
        if (!events.hasOwnProperty(name)) {
            return;
        }
        /* if (!args || !args.length) {
            logger.debug(' Firing Eventing on event :', name, args);
            args = [];
        }*/
        evs = events[name];
        l = evs.length;
        for (i = 0; i < l; i++) {
            evs[i](name, args);
        }
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        fireEvent: fireEvent,
        addEventListener: addListener,
        removeEventListener: removeListener,
        on: addListener,
        off: removeListener,
        constructor: Eventing
    };
};
export default Eventing;