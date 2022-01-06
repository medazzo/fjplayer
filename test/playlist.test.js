const Playlist = require('../src/js/player/playlist');
const TestsData = require('./data.test');
/** ********************************************************
 *  *  *  *  *  * playlist unitary tests *  *  *  *  *  *  *
 ********************************************************* */
let P; // in Browser, the URL in native accessible on window
describe('FjTestlaylist', () => {
  const data = new TestsData();

  beforeAll(async () => {
    P = new Playlist();
    await page.goto(`file://${__dirname}/playerTest.html`);
  });

  describe('when I get the size', () => {
    test('should return the empty size', () => {
      expect(P.getSize()).toEqual(0);
    });
  });

  describe('when I use getinfo', () => {
    test('should return the item added', () => {
      expect(P.addItem(data.items[0])).toEqual(true);
      expect(P.getInfo().size).toEqual(1);
      expect(P.getInfo().items[0]).toEqual(data.items[0]);
      expect(P.getItem(0)).toEqual(data.items[0]);
      expect(P.rmItem(data.items[0])).toEqual(true);
    });
  });

  describe('when I get an non existant item @ 0', () => {
    test('should return null', () => {
      expect(P.getItem(0)).toEqual(null);
    });
  });

  describe('when I get an non existant item @  1 ', () => {
    test('should return null', () => {
      expect(P.getItem(1)).toEqual(null);
    });
  });

  // checks subtitles
  describe('when I check on Subtitle', () => {
    test('should return false on null item', () => {
      expect(P.checkSubtitle(null)).toEqual(false);
    });

    test('should return false on undefined item', () => {
      expect(P.checkSubtitle(undefined)).toEqual(false);
    });

    test('should return true on correct item', () => {
      expect(P.checkSubtitle(data.subs[0])).toEqual(true);
    });

    test('should return false on bad tag label', () => {
      expect(P.checkSubtitle(data.subs[1])).toEqual(false);
    });

    test('should return false on no label', () => {
      expect(P.checkSubtitle(data.subs[2])).toEqual(false);
    });

    test('should return false on empty label value', () => {
      expect(P.checkSubtitle(data.subs[3])).toEqual(false);
    });

    test('should return false on bad tag lang', () => {
      expect(P.checkSubtitle(data.subs[4])).toEqual(false);
    });

    test('should return false on empty tag lang', () => {
      expect(P.checkSubtitle(data.subs[5])).toEqual(false);
    });

    test('should return false on no tag lang', () => {
      expect(P.checkSubtitle(data.subs[6])).toEqual(false);
    });

    test('should return false on no iso code lang', () => {
      expect(P.checkSubtitle(data.subs[7])).toEqual(false);
    });

    test('should return false on no src tag', () => {
      expect(P.checkSubtitle(data.subs[8])).toEqual(false);
    });

    test('should return false on empty src value', () => {
      expect(P.checkSubtitle(data.subs[9])).toEqual(false);
    });

    test('should return false on missing src', () => {
      expect(P.checkSubtitle(data.subs[10])).toEqual(false);
    });
  });

  // checks Overlay
  describe('when I check on Overlay', () => {
    test('should return false on null item', () => {
      expect(P.checkOverlay(null)).toEqual(false);
    });

    test('should return false on undefined item', () => {
      expect(P.checkOverlay(undefined)).toEqual(false);
    });

    test('should return true on correct item', () => {
      expect(P.checkOverlay(data.overs[0])).toEqual(true);
    });

    test('should return false on bad tag data', () => {
      expect(P.checkOverlay(data.overs[1])).toEqual(false);
    });

    test('should return false on no data', () => {
      expect(P.checkOverlay(data.overs[2])).toEqual(false);
    });

    test('should return false on empty data value', () => {
      expect(P.checkOverlay(data.overs[3])).toEqual(false);
    });

    test('should return false on bad tag url', () => {
      expect(P.checkOverlay(data.overs[4])).toEqual(false);
    });

    test('should return false on empty tag url', () => {
      expect(P.checkOverlay(data.overs[5])).toEqual(false);
    });

    test('should return false on no tag url', () => {
      expect(P.checkOverlay(data.overs[6])).toEqual(false);
    });

    test('should return false on bad tag duration', () => {
      expect(P.checkOverlay(data.overs[7])).toEqual(false);
    });

    test('should return false on null duration value', () => {
      expect(P.checkOverlay(data.overs[8])).toEqual(false);
    });

    test('should return false on no duration', () => {
      expect(P.checkOverlay(data.overs[9])).toEqual(false);
    });

    test('should return false on bad duration value', () => {
      expect(P.checkOverlay(data.overs[10])).toEqual(false);
    });

    test('should return false on bad tag show at', () => {
      expect(P.checkOverlay(data.overs[11])).toEqual(false);
    });

    test('should return false on null show at value', () => {
      expect(P.checkOverlay(data.overs[12])).toEqual(false);
    });

    test('should return false on no show at', () => {
      expect(P.checkOverlay(data.overs[13])).toEqual(false);
    });

    test('should return false on bad show at value ', () => {
      expect(P.checkOverlay(data.overs[14])).toEqual(false);
    });
  });

  // checks Drm
  describe('when I check on Drm', () => {
    test('should return false on null item', () => {
      expect(P.checkDrm(null)).toEqual(false);
    });
    test('should return false on undefined item', () => {
      expect(P.checkDrm(undefined)).toEqual(false);
    });

    test('should return true on correct item', () => {
      expect(P.checkDrm(data.drms[0])).toEqual(true);
    });

    test('should return false on bad tag scheme', () => {
      expect(P.checkDrm(data.drms[1])).toEqual(false);
    });

    test('should return false on empty scheme', () => {
      expect(P.checkDrm(data.drms[2])).toEqual(false);
    });

    test('should return false on no scheme', () => {
      expect(P.checkDrm(data.drms[3])).toEqual(false);
    });

    test('should return false on bad scheme value', () => {
      expect(P.checkDrm(data.drms[4])).toEqual(false);
    });

    test('should return false on bad tag laurl', () => {
      expect(P.checkDrm(data.drms[5])).toEqual(false);
    });

    test('should return false on  empty laurl', () => {
      expect(P.checkDrm(data.drms[6])).toEqual(false);
    });

    test('should return false on no laurl', () => {
      expect(P.checkDrm(data.drms[7])).toEqual(false);
    });

    test('should return true on bad headers tag', () => {
      expect(P.checkDrm(data.drms[8])).toEqual(true);
    });

    test('should return true on empty headers', () => {
      expect(P.checkDrm(data.drms[9])).toEqual(true);
    });

    test('should return true on no headers', () => {
      expect(P.checkDrm(data.drms[10])).toEqual(true);
    });

    test('should return true on  bad headers tag', () => {
      expect(P.checkDrm(data.drms[11])).toEqual(true);
    });

    test('should return true on  empty headers', () => {
      expect(P.checkDrm(data.drms[12])).toEqual(true);
    });

    test('should return true no headers', () => {
      expect(P.checkDrm(data.drms[13])).toEqual(true);
    });
  });

  // checks data.ads
  describe('when I check on data.ads', () => {
    test('should return false on null item', () => {
      expect(P.checkAds(null)).toEqual(false);
    });
    test('should return false on undefined item', () => {
      expect(P.checkAds(undefined)).toEqual(false);
    });

    test('should return true on correct item', () => {
      expect(P.checkAds(data.ads[0])).toEqual(true);
    });

    test('should return false on bad tag src', () => {
      expect(P.checkAds(data.ads[1])).toEqual(false);
    });

    test('should return false on empty src', () => {
      expect(P.checkAds(data.ads[2])).toEqual(false);
    });

    test('should return false on no src', () => {
      expect(P.checkAds(data.ads[3])).toEqual(false);
    });

    test('should return false on bad tag type', () => {
      expect(P.checkAds(data.ads[4])).toEqual(false);
    });

    test('should return false on bad value type', () => {
      expect(P.checkAds(data.ads[5])).toEqual(false);
    });

    test('should return false on empty value type', () => {
      expect(P.checkAds(data.ads[6])).toEqual(false);
    });

    test('should return false on no type', () => {
      expect(P.checkAds(data.ads[7])).toEqual(false);
    });

    test('should return false on bad class tag', () => {
      expect(P.checkAds(data.ads[8])).toEqual(false);
    });

    test('should return false on bad class value', () => {
      expect(P.checkAds(data.ads[9])).toEqual(false);
    });

    test('should return false on empty class value', () => {
      expect(P.checkAds(data.ads[10])).toEqual(false);
    });

    test('should return false on no class', () => {
      expect(P.checkAds(data.ads[11])).toEqual(false);
    });

    test('should return false on bad tag url', () => {
      expect(P.checkAds(data.ads[12])).toEqual(false);
    });

    test('should return false on empty url', () => {
      expect(P.checkAds(data.ads[13])).toEqual(false);
    });

    test('should return false on no url', () => {
      expect(P.checkAds(data.ads[14])).toEqual(false);
    });

    test('should return true on bad tag escape', () => {
      expect(P.checkAds(data.ads[15])).toEqual(true);
    });

    test('should return true on bad value escape', () => {
      expect(P.checkAds(data.ads[16])).toEqual(true);
    });

    test('should return true on empty escape', () => {
      expect(P.checkAds(data.ads[17])).toEqual(true);
    });

    test('should return true on no escape', () => {
      expect(P.checkAds(data.ads[18])).toEqual(true);
    });

    test('should return false on no show at in mid-roll', () => {
      expect(P.checkAds(data.ads[19])).toEqual(false);
    });
  });

  // checks Item
  describe('when I check on Item', () => {
    test('should return false on null item', () => {
      expect(P.checkItem(null)).toEqual(false);
    });
    test('should return false on undefined item', () => {
      expect(P.checkItem(undefined)).toEqual(false);
    });
    test('should return true on correct item', () => {
      expect(P.checkItem(data.items[0])).toEqual(true);
    });

    test('should return false on bad tag type ', () => {
      expect(P.checkItem(data.items[1])).toEqual(false);
    });
    test('should return false on bad type value', () => {
      expect(P.checkItem(data.items[2])).toEqual(false);
    });
    test('should return false on empty type', () => {
      expect(P.checkItem(data.items[3])).toEqual(false);
    });
    test('should return false on no type', () => {
      expect(P.checkItem(data.items[4])).toEqual(false);
    });

    test('should return true on bad tag poster ', () => {
      expect(P.checkItem(data.items[5])).toEqual(true);
    });
    test('should return true on empty poster value', () => {
      expect(P.checkItem(data.items[6])).toEqual(true);
    });
    test('should return true on no poster', () => {
      expect(P.checkItem(data.items[7])).toEqual(true);
    });

    test('should return false on bad tag title ', () => {
      expect(P.checkItem(data.items[8])).toEqual(false);
    });
    test('should return false on empty title', () => {
      expect(P.checkItem(data.items[9])).toEqual(false);
    });
    test('should return false on no title', () => {
      expect(P.checkItem(data.items[10])).toEqual(false);
    });

    test('should return false on bad tag class ', () => {
      expect(P.checkItem(data.items[11])).toEqual(false);
    });
    test('should return false on bad class value', () => {
      expect(P.checkItem(data.items[12])).toEqual(false);
    });
    test('should return false on empty class', () => {
      expect(P.checkItem(data.items[13])).toEqual(false);
    });
    test('should return false on no class', () => {
      expect(P.checkItem(data.items[14])).toEqual(false);
    });

    test('should return true on bad tag thumbs ', () => {
      expect(P.checkItem(data.items[15])).toEqual(true);
    });
    test('should return true on empty thumbs value', () => {
      expect(P.checkItem(data.items[16])).toEqual(true);
    });
    test('should return true on no thumbs', () => {
      expect(P.checkItem(data.items[17])).toEqual(true);
    });

    test('should return false on bad tag src ', () => {
      expect(P.checkItem(data.items[18])).toEqual(false);
    });
    test('should return false on empty src value', () => {
      expect(P.checkItem(data.items[19])).toEqual(false);
    });
    test('should return false on no src', () => {
      expect(P.checkItem(data.items[20])).toEqual(false);
    });
    test('checking a full item to playlist with one bad Ads', () => {
      const itema = {
        FJSrc: data.itemOnly.FJSrc,
        FJTitle: data.itemOnly.FJTitle,
        FJClass: data.itemOnly.FJClass,
        FJType: data.itemOnly.FJType,
        FJAds: [data.ads[1]],
      };
      expect(P.checkItem(itema)).toEqual(false);
    });
    test('checking a full item to playlist with one bad Drm', () => {
      const itemd = {
        FJSrc: data.itemOnly.FJSrc,
        FJTitle: data.itemOnly.FJTitle,
        FJClass: data.itemOnly.FJClass,
        FJType: data.itemOnly.FJType,
        FJDrm: data.drms[1],
      };
      expect(P.checkItem(itemd)).toEqual(false);
    });
    test('checking a full item to playlist with one bad Subs', () => {
      const items = {
        FJSrc: data.itemOnly.FJSrc,
        FJTitle: data.itemOnly.FJTitle,
        FJClass: data.itemOnly.FJClass,
        FJType: data.itemOnly.FJType,
        FJSubtitles: [data.subs[1]],
      };
      expect(P.checkItem(items)).toEqual(false);
    });
    test('checking a full item to playlist  with one bad Overlay', () => {
      const itemo = {
        FJSrc: data.itemOnly.FJSrc,
        FJTitle: data.itemOnly.FJTitle,
        FJClass: data.itemOnly.FJClass,
        FJType: data.itemOnly.FJType,
        FJOverlays: [data.overs[1]],
      };
      console.warn('itemo ====>  ', itemo);
      expect(P.checkItem(itemo)).toEqual(false);
    });

    test('inserting a correct full item to playlist', () => {
      expect(P.addItem(data.Fullitem)).toEqual(true);
    });

    test('checking a bad item to playlist', () => {
      const itema = {
        FJSrc: data.itemOnly.FJSrc,
        FJTitle: data.itemOnly.FJTitle,
        FJClass: data.itemOnly.FJClass,
        FJType: data.itemOnly.FJType,
        FJAds: [data.ads[1]],
      };
      expect(P.addItem(itema)).toEqual(false);
    });

    test('checking rm item from playlist', () => {
      expect(P.addItem(data.itemOnly)).toEqual(true);
      expect(P.rmItem(data.itemOnly)).toEqual(true);
      expect(P.rmItem(data.itemOnlys)).toEqual(false);

      expect(P.addItem(data.itemOnly)).toEqual(true);
      expect(P.rmItemIndex(-1)).toEqual(false);
      expect(P.rmItemIndex(0)).toEqual(true);
    });

    test('checking add item and adding ADS later on playlist', () => {
      expect(P.addItem(data.itemOnly)).toEqual(true);
      expect(P.addAds(0, data.ads[0])).toEqual(true);
      expect(P.addAds(-1, data.ads[0])).toEqual(false);
      expect(P.addAds(0, data.ads[1])).toEqual(false);
      expect(P.addAds(5, data.ads[1])).toEqual(false);
      expect(P.rmItemIndex(0)).toEqual(true);
    });

    test('checking add item and adding DRM later on playlist', () => {
      expect(P.addItem(data.itemOnly)).toEqual(true);
      expect(P.setDrm(0, data.drms[0])).toEqual(true);
      expect(P.setDrm(-1, data.drms[0])).toEqual(false);
      expect(P.setDrm(0, data.drms[1])).toEqual(false);
      expect(P.setDrm(5, data.drms[1])).toEqual(false);
      expect(P.rmItemIndex(0)).toEqual(true);
    });

    test('checking add item and adding Subs later on playlist', () => {
      expect(P.addItem(data.itemOnly)).toEqual(true);
      expect(P.addSubtitle(0, data.subs[0])).toEqual(true);
      expect(P.addSubtitle(-1, data.subs[0])).toEqual(false);
      expect(P.addSubtitle(0, data.subs[1])).toEqual(false);
      expect(P.addSubtitle(5, data.subs[1])).toEqual(false);
      expect(P.rmItemIndex(0)).toEqual(true);
    });

    test('checking add item and adding Overlay later on playlist', () => {
      expect(P.addItem(data.itemOnly)).toEqual(true);
      expect(P.addOverlay(0, data.overs[0])).toEqual(true);
      expect(P.addOverlay(-1, data.overs[0])).toEqual(false);
      expect(P.addOverlay(0, data.overs[1])).toEqual(false);
      expect(P.addOverlay(5, data.overs[1])).toEqual(false);
      expect(P.rmItemIndex(0)).toEqual(true);
    });
  });
});
