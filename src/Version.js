/* Version.js File */
'use strict';

var pjson = require('../package.json');

function Version() {};

Version.prototype.getVersion = function() {
    return pjson.version;
};


export default Version;