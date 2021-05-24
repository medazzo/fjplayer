const env = process.env.NODE_ENV || "test";
const expect = require("chai").expect;

const Playlist = require("../src/js/player/playlist");
const Player = require("../src/js/player/player");
const TestsData  = require("./data.test");

var player, P, time = 18305;
var data = new TestsData();
/**********************************************************
 *  *  *  *  *  *  *  *  unitary tests  *  *  *  *  *  *  *
 **********************************************************/
describe('FjTestPlayer', function() {



    // inject the HTML fixture for the tests
    beforeEach(function() {
        console.error(" Before  Test !");
        // length of berber video
        window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 70000;
        P = new Playlist();
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

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

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

        expect(player.startPlaylist(0, false, false, true)).to.be.equal(true);

        player.on(Const.PlayerEvents.PLAYBACK_STARTED,
            function(e, args) {
                console.warn(" *********************************** Having event STARTED ", e);
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
                console.warn(" *********************************** Having event ENDED ", e);
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
                console.warn(" *********************************** Having event Ads STARTED ", e);
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
                console.warn(" *********************************** Having event Ads ENDED ", e);
                done();
            });
    });

});