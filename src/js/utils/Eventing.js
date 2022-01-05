/**
 * @module Eventing
 * @description The Eventing is the class eventing mgr
 *
 */
class Eventing {
    constructor() {
        this.events = {};
    }

    /**
     *
     */
    on(name, handler) {
        if (Object.prototype.hasOwnProperty.call(this.events, name)) {
            this.events[name].push(handler);
        } else {
            this.events[name] = [handler];
        }
    }

    /**
     *
     */
    off(name, handler) {
        let index = -1;
        /* This is a bit tricky, because how would you identify functions?
           This simple solution should work if you pass THE SAME handler. */
        if (!Object.prototype.hasOwnProperty.call(this.events, name)) {
            return;
        }
        index = this.events[name].indexOf(handler);
        if (index !== -1) {
            this.events[name].splice(index, 1);
        }
    }

    /**
     *
     */
    fireEvent(name, args) {
        let i;
        if (!Object.prototype.hasOwnProperty.call(this.events, name)) {
            return;
        }
        /* if (!args || !args.length) {
            logger.debug(' Firing Eventing on event :', name, args);
            args = [];
        } */
        const evs = this.events[name];
        const l = evs.length;
        for (i = 0; i < l; i += 1) {
            evs[i](name, args);
        }
    }
}
module.exports = Eventing;
