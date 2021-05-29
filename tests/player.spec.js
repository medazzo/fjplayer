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
    beforeEach((done) => {
        var fixture = '<div id="fixture"><div id="playercontainer"></div></div>';
        console.error(' Before  Test !');
        P = new Playlist();
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
        done();
    });
    // remove the html fixture from the DOM
    afterEach((done) => {
        console.error(' After  Test !');
        document.body.removeChild(document.getElementById('fixture'));
        done();
    });

    describe('Event player ', function() {
        it('Simple Player Loaded Event', function(done) {
            expect(P.addItem(data.itemOnly)).to.be.equal(true);
            player = new Player('fjserverID1', 'playercontainer');
            expect(player.isReady()).to.be.equal(false);
            expect(player.loadPlaylist(P)).to.be.equal(true);
            expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);
            player.on(Const.PlayerEvents.STREAM_LOADED,
                (e) => {
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
                (e) => {
                    console.warn(' *********************************** Having event STARTED ', e);
                    done();
                });

        });

        it('Simple Player Paused Event', function(done) {
            expect(P.addItem(data.itemOnly)).to.be.equal(true);
            player = new Player('fjserverID1', 'playercontainer');
            expect(player.isReady()).to.be.equal(false);
            expect(player.loadPlaylist(P)).to.be.equal(true);
            expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);
            player.on(Const.PlayerEvents.PLAYBACK_STARTED,
                (e) => {
                    console.warn(' *********************************** Having event STARTED ', e);
                    // trigger pause button
                    document.getElementById('ppbplayercontainer').click();
                    player.on(Const.PlayerEvents.PLAYBACK_PAUSED,
                        (x) => {
                            console.warn(' *********************************** Having event PAUSED ', x);
                            done();
                        });
                    done();
                });
        });

        it('Simple Player Ended Event', function(done) {
            expect(P.addItem(data.itemOnly)).to.be.equal(true);
            player = new Player('fjserverID1', 'playercontainer');
            expect(player.isReady()).to.be.equal(false);
            expect(player.loadPlaylist(P)).to.be.equal(true);
            expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);
            player.on(Const.PlayerEvents.PLAYBACK_ENDED,
                (e) => {
                    console.warn(' *********************************** Having event Ended ', e);
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
                (e) => {
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
            player.on(Const.AdsEvents.ADS_PLAYBACK_ENDED,
                (e) => {
                    console.warn(' *********************************** Having event Ads ENDED ', e);
                    done();
                });
        });

    });
});