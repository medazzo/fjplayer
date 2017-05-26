'use strict';
import Logger from '../utils/Logger';
var request = require('superagent');
/**
 * @module FjseAuthz
 * @description The FjseAuthz is the class of authe drm
 *
 */
function FjseStats(fjAppId) {
    var logger = new Logger(this),
        appId = fjAppId,
        lastToken = null,
        lastLicense = null;
    AuthorizePlayer();
    /**
     * @description  used to verfiy ajAppId at starting of the player ..
     */
    function AuthorizePlayer() {
        // testing only
        request
            .get('http://127.0.0.1:3000/')
            .set('X-API-Key', appId)
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err || !res.ok) {
                    logger.error('Oh no! error', err);
                } else {
                    logger.info('yay got ' + JSON.stringify(res.body));
                }
            });

    }


    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        GetAuthzToken: GetAuthzToken,
        AuthorizePlayer: AuthorizePlayer,
        GetLicense: GetLicense,
        constructor: FjseAuthz
    };
};
export default FjseAuthz;