// var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
var manifestUri = 'http://127.0.0.1:8500/dashedCrypted/stream.mpd';

function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
        // Everything looks good!
        initPlayer();
    } else {
        // This browser does not have the minimum set of APIs we need.
        console.error('Browser not supported!');
    }
}

function initPlayer() {
    // Create a Player instance.
    var video = document.getElementById('video');
    var player = new shaka.Player(video);

    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;

    // Listen for error events.
    player.addEventListener('error', onErrorEvent);
    player.addEventListener('adaptation', onEvent);
    player.addEventListener('buffering', onEvent);
    player.addEventListener('emsg', onEvent);
    player.addEventListener('expirationupdated', onEvent);
    player.addEventListener('largegap', onEvent);
    player.addEventListener('loading', onEvent);
    player.addEventListener('texttrackvisibility', onEvent);
    player.addEventListener('timelineregionadded', onEvent);
    player.addEventListener('timelineregionenter', onEvent);
    player.addEventListener('timelineregionexit', onEvent);
    player.addEventListener('trackschanged', onEvent);
    player.addEventListener('unloading', onEvent);

    video.addEventListener('loadedmetadata', onVideoEvent, false);
    video.addEventListener('play', onVideoEvent, false);
    video.addEventListener('pause', onVideoEvent, false);
    video.addEventListener('ended', onVideoEvent, false);
    video.addEventListener('timeupdate', onVideoEvent, false);
    video.addEventListener('seeked', onVideoEvent, false);
    video.addEventListener('seeking', onVideoEvent, false);
    video.addEventListener('error', onVideoError, false);

    player.configure({
        drm: {
            servers: {
                'org.w3.clearkey': 'http://127.0.0.1:3000'
            }
        }
    });

    player.getNetworkingEngine().registerRequestFilter(function(type, request) {
        // Only add headers to license requests:
        if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
            // This is the specific header name and value the server wants:
            request.headers['X-API-Key'] = 'VGhpc0lzQVRlc3QK';
        }
    });

    player.getNetworkingEngine().registerRequestFilter(function(type, request) {
        // Only add headers to license requests:
        if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
            // This is the specific parameter name and value the server wants:
            // Note that all network requests can have multiple URIs (for fallback),
            // and therefore this is an array. But there should only be one license
            // server URI in this tutorial.
            request.uris[0] += '?CWIP-Auth-Param=VGhpc0lzQVRlc3QK';
        }
    });

    // Try to load a manifest.
    // This is an asynchronous process.
    player.load(manifestUri).then(function() {
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
    }).catch(onError); // onError is executed if the asynchronous load fails.
}

function onEvent(event) {
    // Extract the shaka.util.Error object from the event.
    console.warn('Eventing  [', event.type, ']:', event);
}

function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
}

function onVideoEvent(event) {
    // Extract the shaka.util.Error object from the event.
    console.warn('VIDEO Eventing  [', event.type, ']:', event);
}

function onVideoError(event) {
    // Extract the shaka.util.Error object from the event.
    console.error('Video Error code', error.code, 'object', error);
}

function onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);