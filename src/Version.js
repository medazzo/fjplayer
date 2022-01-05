const pjson = require('../package.json');
/**
 *
 */
class Version {
  /**
     *
     */
  constructor() {
    this.version = pjson.version;
  }

  /**
     * Get Player Version
     * @returns the current verision of teh package
     */
  getVersion() {
    return this.version;
  }
}

module.exports = Version;
