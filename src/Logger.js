/**
 * @module Logger
 * @description The Configuration is the primary module used to set configuration and .
 */

function Logger(moduleName) {

    let instance,
        userServer,
        serverLogger,
        method,
        request,
        modName = '[' + moduleName + ']',
        useConsole;

    function setup(debug) {
        useConsole = debug;
        userServer = false;
    }

    function initialize(serverUrl, serverMethod) {
        serverLogger = serverUrl;
        method = serverMethod;
        request = new XMLHttpRequest();
        userServer = true;
    }

    function error() {
        var msg;
        var i;
        var args;
        var params;
        args = Array.prototype.slice.call(arguments);
        args.splice(0, 0, modName);
        if (useConsole) {
            console.error.apply(console, args);
        }
        if (userServer) {
            for (i = 0; i < arguments.length; i++) {
                msg = msg + arguments[i];
            }
            params = 'msg=' + modName + ' ERROR: ' + encodeURIComponent(msg);
            request.open(method, serverLogger);
            request.send(params);
        }
    }

    function warn() {
        var msg;
        var i;
        var args;
        var params;
        args = Array.prototype.slice.call(arguments);
        args.splice(0, 0, modName);
        if (useConsole) {
            console.warn.apply(console, args);
        }
        if (userServer) {
            for (i = 0; i < arguments.length; i++) {
                msg = msg + arguments[i];
            }
            params = 'msg=' + modName + ' WARN: ' + encodeURIComponent(msg);
            request.open(method, serverLogger);
            request.send(params);
        }
    }

    function log() {
        var msg;
        var i;
        var args;
        var params;
        args = Array.prototype.slice.call(arguments);
        args.splice(0, 0, modName);
        if (useConsole) {
            console.log.apply(console, args);
        }
        if (userServer) {
            for (i = 0; i < arguments.length; i++) {
                msg = msg + arguments[i];
            }
            params = 'msg=' + modName + ' LOG: ' + encodeURIComponent(msg);
            request.open(method, serverLogger);
            request.send(params);
        }
    }
    instance = {
        initialize: initialize,
        error: error,
        warn: warn,
        log: log
    };

    setup(true);

    return instance;
};

export default Logger;