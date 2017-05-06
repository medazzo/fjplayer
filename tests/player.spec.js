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

    //    describe('Playing  a full item ', function() {
    it('Simple Player Test', () => {
        expect(P.addItem(data.Fullitem)).to.be.equal(true);

        player = new Player('fjserverID1', 'playercontainer');
        expect(player.isReady()).to.be.equal(false);

        expect(player.loadPlaylist(P)).to.be.equal(true);

        expect(player.startPlaylist(0, true, true, true)).to.be.equal(true);
    });


});