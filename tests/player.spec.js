"use strict";
import Playlist from '../src/playlist';
import Player from '../src/player';
import chai from 'chai';
import DataPlaylist from './data.spec';

const expect = chai.expect;
var player, P, data, time = 18305;

/**********************************************************
 *  *  *  *  *  *  *  *  unitary tests  *  *  *  *  *  *  *
 **********************************************************/
describe('Player', function() {

    P = new Playlist();
    data = new DataPlaylist();

    // inject the HTML fixture for the tests
    before(function() {
        var fixture = '<div id=\"playercontainer\"></div>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    after(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    //    describe('Playing  a full item ', function() {
    it('inserting full item to playlist', () => {
        expect(P.addItem(data.Fullitem)).to.be.equal(true);
    });

    it('Creating player', () => {
        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);
    });

    it('Loading playlist to player', () => {
        expect(player.loadPlaylist(P)).to.be.equal(true);
    });

    it('playing item 0', () => {
        expect(player.startPlaylist(0, true)).to.be.equal(true);
    });
    //  });
});