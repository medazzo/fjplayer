const fjplayer = require('../src/index');

describe('FjTestPlayer', () => {
  beforeAll(async () => {
    browser.on('disconnecte'), () => {
      browser.close();
    };
  });

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
    return page.goto('http://localhost:8080/test/playerTest.html');
  });

  it('Simple Player Loaded Event', (done) => {
    const ver = new fjplayer.Version();
    console.info('VERSION', ver.getVersion());
    const playlist = new fjplayer.Playlist();

    const SimpleItem = {
      FJTitle: 'Mercedes Mp4',
      FJType: 'video/mp4',
      FJClass: 'vod',
      FJSrc: '/demo/videos/mercedes.mp4',
    };

    playlist.addItem(SimpleItem);
    const player = new fjplayer.Player('fjserverID1', 'playercontainer');
    // player.on(fjplayer.PlayerEvents.STREAM_LOADED, fjplayerEvent);
    player.loadPlaylist(playlist);
    // player.playAt(0);
    player.startPlaylist(0, true, false, true);

    expect(player.isReady()).toEqual(false);
    // expect(player.loadPlaylist(P)).toEqual(true);
    // expect(player.startPlaylist(0, false, false, true)).toEqual(true);
    /* player.on(Const.PlayerEvents.STREAM_LOADED,
      (e, args) => {
        console.warn(' *********************************** Having event LOADED ', e);
        done();
      });
      */
  });
});
