/**
 * @module FjseAuthz
 * @description The FjseAuthz is the class of authe drm
 *
 */
function FjseAuthz(fjAppId) {
    var appId = fjAppId,
        lastToken = null,
        lastLicense = null;

    /**
     * @description get  license token from Authorization server based on appid  and astream ID on authZ server
     * @param {*} authzServer 
     * @param {*} streamId 
     */
    function GetAuthzToken(authzServer, streamId) {
        lastToken = {};
        // ...
        return lastToken;
    }

    function GetLicense(authzToken, licenseServer) {
        lastLicense = {};
        // ...
        return lastLicense;
    }


    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        GetAuthzToken: GetAuthzToken,
        GetLicense: GetLicense,
        constructor: FjseAuthz
    };
};
export default FjseAuthz;