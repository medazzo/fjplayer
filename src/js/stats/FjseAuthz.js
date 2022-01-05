const request = require('superagent');
const Logger = require('../utils/Logger');

/**
 * @module FjseAuthz
 * @description The FjseAuthz is the class of authe drm
 *
 */
class FjseAuthz {
  constructor(fjAppId) {
    this.logger = new Logger(this);
    this.appId = fjAppId;
    this.lastToken = null;
    this.lastLicense = null;
  }

  /**
     * @description  used to verfiy ajAppId at starting of the player ..
     */
  AuthorizePlayer() {
    // testing only
    request
      .get('http://127.0.0.1:3000/')
      .set('X-API-Key', this.appId)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err || !res.ok) {
          this.logger.error('Oh no! error', err);
        } else {
          this.logger.info(`yay got ${JSON.stringify(res.body)}`);
          // TODO extarctt Licence from the response
        }
      });
  }

  GetLicense() {
    // TODO
    this.logger.error('TODO ..');
  }
}
module.exports = FjseAuthz;
