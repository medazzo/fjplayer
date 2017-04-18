import Logger from './Logger';
/**
 * @module Eventing
 * @description The Eventing is the class eventing mgr
 *
 */
function Eventing() {
    this.logger = new Logger(this);
    this.events = {};
};
/**
 *
 */
Eventing.prototype.addEventListener = function(name, handler) {
    this.logger.debug(' Adding Eventing Listener for event :',
        name, ', the handler is ', handler);
    if (this.events.hasOwnProperty(name)) {
        this.events[name].push(handler);
    } else {
        this.events[name] = [handler];
    }
};
/**
 *
 */
Eventing.prototype.removeEventListener = function(name, handler) {
    var index = -1;
    this.logger.debug(' Removing Eventing Listener for event :',
        name, ', the handler is ', handler);
    /* This is a bit tricky, because how would you identify functions?
       This simple solution should work if you pass THE SAME handler. */
    if (!this.events.hasOwnProperty(name)) {
        return;
    }
    index = this.events[name].indexOf(handler);
    if (index !== -1) {
        this.events[name].splice(index, 1);
    }
};
/**
 *
 */
Eventing.prototype.fireEvent = function(name, args) {
    var evs, l, i;
    this.logger.debug(' Firing Eventing on event :', name);
    if (!this.events.hasOwnProperty(name)) {
        return;
    }
    if (!args || !args.length) {
        args = [];
    }
    evs = this.events[name];
    l = evs.length;
    for (i = 0; i < l; i++) {
        evs[i].apply(null, args);
    }
};