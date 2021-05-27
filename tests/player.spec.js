'use strict';
import Playlist from '../src/js/player/playlist';
import * as Const from '../src/js/defs/constants';
import Player from '../src/js/player/player';
import chai from 'chai';
import DataPlaylist from './data.spec';

const expect = chai.expect;
var player, P;
var data = new DataPlaylist();

/** ********************************************************
 *  *  *  *  *  *  *  *  unitary tests  *  *  *  *  *  *  *
 **********************************************************/
describe('FjTestPlayer', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture"><div id="playercontainer"></div></div>';
        console.error(' Before  Test !');
        P = new Playlist();
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        console.error(' After  Test !');
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('Simple Player Loaded Event', function(done) {
        expect(P.addItem(data.itemOnly)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

        player.on(Const.PlayerEvents.STREAM_LOADED,
            function(e, args) {
                console.warn(' *********************************** Having event LOADED ', e);
                done();
            });
    });

    it('Simple Player Started Event', function(done) {
        expect(P.addItem(data.itemOnly)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

        player.on(Const.PlayerEvents.PLAYBACK_STARTED,
            function(e, args) {
                console.warn(' *********************************** Having event STARTED ', e);
                done();
            });
    });

    it('Simple Player Ended Event', function(done) {
        expect(P.addItem(data.itemOnly)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

        setTimeout(done, 70000);

        player.on(Const.PlayerEvents.PLAYBACK_ENDED,
            function(e, args) {
                console.warn(' *********************************** Having event ENDED ', e);
                done();
            });
    });

    it('Simple Player ADS Started Event', function(done) {
        expect(P.addItem(data.itemOnlyAds)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

        player.on(Const.AdsEvents.ADS_PLAYBACK_STARTED,
            function(e, args) {
                console.warn(' *********************************** Having event Ads STARTED ', e);
                done();
            });
    });

    it('Simple Player ADS ENDED Event', function(done) {
        expect(P.addItem(data.itemOnlyAds)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

        setTimeout(done, 70000);

        player.on(Const.AdsEvents.ADS_PLAYBACK_ENDED,
            function(e, args) {
                console.warn(' *********************************** Having event Ads ENDED ', e);
                done();
            });
    });

});