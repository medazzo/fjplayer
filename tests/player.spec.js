"use strict";
import Playlist from '../src/playlist';
import * as Const from '../src/constants';
import Player from '../src/player';
import chai from 'chai';
import DataPlaylist from './data.spec';

const expect = chai.expect;
var player, P, data, time = 18305;


var itemDash = {
    'FJType': 'dash',
    'FJPoster': 'demo/img/sintel.jpg',
    'FJTitle': ' title of movie itemDash 2',
    'FJClass': 'vod',
    'FJThumbs': 'demo/vtt/thumbs.vtt',
    'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
};
var itemDashNoThumbs = {
    'FJType': 'dash',
    'FJPoster': 'demo/img/sintel.jpg',
    'FJTitle': ' title of movie itemDashNoThumbs 3',
    'FJClass': 'vod',
    'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
};
var itemOnly = {
    'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
    'FJTitle': ' title of movie itemOnly 1',
    'FJClass': 'vod',
    'FJType': 'video/mp4'
};

/**********************************************************
 *  *  *  *  *  *  *  *  unitary tests  *  *  *  *  *  *  *
 **********************************************************/
describe('FjTestPlayer', function() {
    P = new Playlist();
    data = new DataPlaylist();

    // inject the HTML fixture for the tests
    beforeEach(function() {
        console.error(" Before  Test !");

        var fixture = '<div id=\"fixture\"><div id=\"playercontainer\"></div></div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        console.error(" After  Test !");
        document.body.removeChild(document.getElementById('fixture'));
    });


    it('Simple Player Loaded Event', function(done) {
        expect(P.addItem(data.itemOnly)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, true, true, true)).to.be.equal(true);

        setTimeout(done, 500);
        player.on(Const.PlayerEvents.STREAM_LOADED,
            function(e, args) {
                console.warn(" *********************************** Having event LOADED ", e);
                done();
            });
    });

    it('Simple Player Started Event', function(done) {
        expect(P.addItem(data.itemOnly)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, true, true, true)).to.be.equal(true);

        setTimeout(done, 500);
        player.on(Const.PlayerEvents.PLAYBACK_STARTED,
            function(e, args) {
                console.warn(" *********************************** Having event STARTED ", e);
                done();
            });
    });


});