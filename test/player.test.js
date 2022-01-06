const Const = require('../src/js/defs/constants');
const Playlist = require('../src/js/player/playlist');
const TestsData = require('./data.test');

let player; let P;
const data = new TestsData();
/** ********************************************************
 *  *  *  *  *  *  *  *  unitary tests  *  *  *  *  *  *  *
 ********************************************************* */
describe('FjTestPlayer', async () => {
  global.URL.createObjectURL = jest.fn();
  const Player = require('../src/js/player/player');
  // inject the HTML fixture for the tests
  beforeEach(async () => {
    await page.goto();
    P = new Playlist();
    const fixture = '<div id=\"fixture\"><div id=\"playercontainer\"></div></div>';
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture,
    );
  });

  // remove the html fixture from the DOM
  afterEach(() => {
    document.body.removeChild(document.getElementById('fixture'));
  });

  test('Simple Player Loaded Event', (done) => {
    expect(P.addItem(data.itemOnly)).toEqual(true);
    player = new Player('fjserverID1', 'playercontainer');
    expect(player.isReady()).toEqual(false);

    expect(player.loadPlaylist(P)).toEqual(true);

    expect(player.startPlaylist(0, false, false, true)).toEqual(true);

    player.on(Const.PlayerEvents.STREAM_LOADED,
      (e, args) => {
        console.warn(' *********************************** Having event LOADED ', e);
        done();
      });
  });

  test('Simple Player Started Event', (done) => {
    expect(P.addItem(data.itemOnly)).toEqual(true);

    player = new Player('fjserverID1', 'playercontainer');
    expect(player.isReady()).toEqual(false);

    expect(player.loadPlaylist(P)).toEqual(true);

    expect(player.startPlaylist(0, false, false, true)).toEqual(true);

    player.on(Const.PlayerEvents.PLAYBACK_STARTED,
      (e, args) => {
        console.warn(' *********************************** Having event STARTED ', e);
        done();
      });
  });

  test('Simple Player Ended Event', (done) => {
    expect(P.addItem(data.itemOnly)).toEqual(true);

    player = new Player('fjserverID1', 'playercontainer');
    expect(player.isReady()).toEqual(false);

    expect(player.loadPlaylist(P)).toEqual(true);

    expect(player.startPlaylist(0, false, false, true)).toEqual(true);

    setTimeout(done, 70000);

    player.on(Const.PlayerEvents.PLAYBACK_ENDED,
      (e, args) => {
        console.warn(' *********************************** Having event ENDED ', e);
        done();
      });
  });

  test('Simple Player ADS Started Event', (done) => {
    expect(P.addItem(data.itemOnlyAds)).toEqual(true);

    player = new Player('fjserverID1', 'playercontainer');
    expect(player.isReady()).toEqual(false);

    expect(player.loadPlaylist(P)).toEqual(true);

    expect(player.startPlaylist(0, false, false, true)).toEqual(true);

    player.on(Const.AdsEvents.ADS_PLAYBACK_STARTED,
      (e, args) => {
        console.warn(' *********************************** Having event Ads STARTED ', e);
        done();
      });
  });

  test('Simple Player ADS ENDED Event', (done) => {
    expect(P.addItem(data.itemOnlyAds)).toEqual(true);

    player = new Player('fjserverID1', 'playercontainer');
    expect(player.isReady()).toEqual(false);

    expect(player.loadPlaylist(P)).toEqual(true);

    expect(player.startPlaylist(0, false, false, true)).toEqual(true);

    setTimeout(done, 70000);

    player.on(Const.AdsEvents.ADS_PLAYBACK_ENDED,
      (e, args) => {
        console.warn(' *********************************** Having event Ads ENDED ', e);
        done();
      });
  });
});
