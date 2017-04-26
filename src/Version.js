/* Version.js File */

function Version() {
};

const GIT_VERSION = '2.0.6';
const GIT_COMMIT_SINCE_TAG = '3';
const GIT_HEAD_SHORT_HASH = 'gfee5469';

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
