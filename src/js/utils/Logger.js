/**
 * @module Logger
 * @description The Configuration is the primary module used to set configuration and .
 */
class Logger {
  constructor(klass) {
    this.klass = klass;
    this.debug = {};
    Object.keys(console).forEach((m) => {
      if (typeof console[m] === 'function') {
        this.debug[m] = console[m].bind(
          window.console,
          `${klass.constructor.name}: `,
        );
      }
    });
    return this.debug;
  }

  static Get(tag) {
    const debug = {};
    Object.keys(console).forEach((m) => {
      if (typeof console[m] === 'function') {
        debug[m] = console[m].bind(
          window.console,
          `${tag}: `,
        );
      }
    });
    return debug;
  }
}

module.exports = Logger;
