/* Version.js File */

function Version() {
};

const GIT_VERSION = '0.2.2';
const GIT_COMMIT_SINCE_TAG = '10';
const GIT_HEAD_SHORT_HASH = 'g4f69b4b';

Version.prototype.getVersion = function() {
    return GIT_VERSION;
};

Version.prototype.getCommits = function() {
    return GIT_COMMIT_SINCE_TAG;
};

Version.prototype.getShortHash = function() {
    return GIT_HEAD_SHORT_HASH;
};

export default Version;
