'use strict';
import Playlist from '../src/js/player/playlist';
import chai from 'chai';
import DataPlaylist from './data.spec';

const expect = chai.expect;
let P, data = new DataPlaylist();

/** ********************************************************
 *  *  *  *  *  *  *  *  unitary tests  *  *  *  *  *  *  *
 **********************************************************/
describe('FjTestlaylist', function() {
    P = new Playlist();

    describe('when I get the size', function() {
        it('should return the empty size', () => {
            expect(P.getSize()).to.be.equal(0);
        });
    });

    describe('when I get an non existant item @ 0', function() {
        it('should return null', () => {
            expect(P.getItem(0)).to.be.equal(null);
        });
    });

    describe('when I get an non existant item @  1 ', function() {
        it('should return null', () => {
            expect(P.getItem(1)).to.be.equal(null);
        });
    });

    // checks subtitles
    describe('when I check on Subtitle', function() {
        it('should return false on null item', () => {
            expect(P.checkSubtitle(null)).to.be.equal(false);
        });

        it('should return false on undefined item', () => {
            expect(P.checkSubtitle(undefined)).to.be.equal(false);
        });

        it('should return true on correct item', () => {
            expect(P.checkSubtitle(data.subs[0])).to.be.equal(true);
        });

        it('should return false on bad tag label', () => {
            expect(P.checkSubtitle(data.subs[1])).to.be.equal(false);
        });

        it('should return false on no label', () => {
            expect(P.checkSubtitle(data.subs[2])).to.be.equal(false);
        });

        it('should return false on empty label value', () => {
            expect(P.checkSubtitle(data.subs[3])).to.be.equal(false);
        });

        it('should return false on bad tag lang', () => {
            expect(P.checkSubtitle(data.subs[4])).to.be.equal(false);
        });

        it('should return false on empty tag lang', () => {
            expect(P.checkSubtitle(data.subs[5])).to.be.equal(false);
        });

        it('should return false on no tag lang', () => {
            expect(P.checkSubtitle(data.subs[6])).to.be.equal(false);
        });

        it('should return false on no iso code lang', () => {
            expect(P.checkSubtitle(data.subs[7])).to.be.equal(false);
        });

        it('should return false on no src tag', () => {
            expect(P.checkSubtitle(data.subs[8])).to.be.equal(false);
        });

        it('should return false on empty src value', () => {
            expect(P.checkSubtitle(data.subs[9])).to.be.equal(false);
        });

        it('should return false on missing src', () => {
            expect(P.checkSubtitle(data.subs[10])).to.be.equal(false);
        });
    });

    // checks Overlay
    describe('when I check on Overlay', function() {
        it('should return false on null item', () => {
            expect(P.checkOverlay(null)).to.be.equal(false);
        });

        it('should return false on undefined item', () => {
            expect(P.checkOverlay(undefined)).to.be.equal(false);
        });

        it('should return true on correct item', () => {
            expect(P.checkOverlay(data.overs[0])).to.be.equal(true);
        });

        it('should return false on bad tag data', () => {
            expect(P.checkOverlay(data.overs[1])).to.be.equal(false);
        });

        it('should return false on no data', () => {
            expect(P.checkOverlay(data.overs[2])).to.be.equal(false);
        });

        it('should return false on empty data value', () => {
            expect(P.checkOverlay(data.overs[3])).to.be.equal(false);
        });

        it('should return false on bad tag url', () => {
            expect(P.checkOverlay(data.overs[4])).to.be.equal(false);
        });

        it('should return false on empty tag url', () => {
            expect(P.checkOverlay(data.overs[5])).to.be.equal(false);
        });

        it('should return false on no tag url', () => {
            expect(P.checkOverlay(data.overs[6])).to.be.equal(false);
        });

        it('should return false on bad tag duration', () => {
            expect(P.checkOverlay(data.overs[7])).to.be.equal(false);
        });

        it('should return false on null duration value', () => {
            expect(P.checkOverlay(data.overs[8])).to.be.equal(false);
        });

        it('should return false on no duration', () => {
            expect(P.checkOverlay(data.overs[9])).to.be.equal(false);
        });

        it('should return false on bad duration value', () => {
            expect(P.checkOverlay(data.overs[10])).to.be.equal(false);
        });

        it('should return false on bad tag show at', () => {
            expect(P.checkOverlay(data.overs[11])).to.be.equal(false);
        });

        it('should return false on null show at value', () => {
            expect(P.checkOverlay(data.overs[12])).to.be.equal(false);
        });

        it('should return false on no show at', () => {
            expect(P.checkOverlay(data.overs[13])).to.be.equal(false);
        });

        it('should return false on bad show at value ', () => {
            expect(P.checkOverlay(data.overs[14])).to.be.equal(false);
        });
    });

    // checks Drm
    describe('when I check on Drm', function() {
        it('should return false on null item', () => {
            expect(P.checkDrm(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkDrm(undefined)).to.be.equal(false);
        });

        it('should return true on correct item', () => {
            expect(P.checkDrm(data.drms[0])).to.be.equal(true);
        });

        it('should return false on bad tag scheme', () => {
            expect(P.checkDrm(data.drms[1])).to.be.equal(false);
        });

        it('should return false on empty scheme', () => {
            expect(P.checkDrm(data.drms[2])).to.be.equal(false);
        });

        it('should return false on no scheme', () => {
            expect(P.checkDrm(data.drms[3])).to.be.equal(false);
        });

        it('should return false on bad scheme value', () => {
            expect(P.checkDrm(data.drms[4])).to.be.equal(false);
        });

        it('should return false on bad tag laurl', () => {
            expect(P.checkDrm(data.drms[5])).to.be.equal(false);
        });

        it('should return false on  empty laurl', () => {
            expect(P.checkDrm(data.drms[6])).to.be.equal(false);
        });

        it('should return false on no laurl', () => {
            expect(P.checkDrm(data.drms[7])).to.be.equal(false);
        });

        it('should return true on bad headers tag', () => {
            expect(P.checkDrm(data.drms[8])).to.be.equal(true);
        });

        it('should return true on empty headers', () => {
            expect(P.checkDrm(data.drms[9])).to.be.equal(true);
        });

        it('should return true on no headers', () => {
            expect(P.checkDrm(data.drms[10])).to.be.equal(true);
        });

        it('should return true on  bad headers tag', () => {
            expect(P.checkDrm(data.drms[11])).to.be.equal(true);
        });

        it('should return true on  empty headers', () => {
            expect(P.checkDrm(data.drms[12])).to.be.equal(true);
        });

        it('should return true no headers', () => {
            expect(P.checkDrm(data.drms[13])).to.be.equal(true);
        });
    });

    // checks data.ads
    describe('when I check on data.ads', function() {
        it('should return false on null item', () => {
            expect(P.checkAds(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkAds(undefined)).to.be.equal(false);
        });

        it('should return true on correct item', () => {
            expect(P.checkAds(data.ads[0])).to.be.equal(true);
        });

        it('should return false on bad tag src', () => {
            expect(P.checkAds(data.ads[1])).to.be.equal(false);
        });

        it('should return false on empty src', () => {
            expect(P.checkAds(data.ads[2])).to.be.equal(false);
        });

        it('should return false on no src', () => {
            expect(P.checkAds(data.ads[3])).to.be.equal(false);
        });

        it('should return false on bad tag type', () => {
            expect(P.checkAds(data.ads[4])).to.be.equal(false);
        });

        it('should return false on bad value type', () => {
            expect(P.checkAds(data.ads[5])).to.be.equal(false);
        });

        it('should return false on empty value type', () => {
            expect(P.checkAds(data.ads[6])).to.be.equal(false);
        });

        it('should return false on no type', () => {
            expect(P.checkAds(data.ads[7])).to.be.equal(false);
        });

        it('should return false on bad class tag', () => {
            expect(P.checkAds(data.ads[8])).to.be.equal(false);
        });

        it('should return false on bad class value', () => {
            expect(P.checkAds(data.ads[9])).to.be.equal(false);
        });

        it('should return false on empty class value', () => {
            expect(P.checkAds(data.ads[10])).to.be.equal(false);
        });

        it('should return false on no class', () => {
            expect(P.checkAds(data.ads[11])).to.be.equal(false);
        });

        it('should return false on bad tag url', () => {
            expect(P.checkAds(data.ads[12])).to.be.equal(false);
        });

        it('should return false on empty url', () => {
            expect(P.checkAds(data.ads[13])).to.be.equal(false);
        });

        it('should return false on no url', () => {
            expect(P.checkAds(data.ads[14])).to.be.equal(false);
        });

        it('should return true on bad tag escape', () => {
            expect(P.checkAds(data.ads[15])).to.be.equal(true);
        });

        it('should return true on bad value escape', () => {
            expect(P.checkAds(data.ads[16])).to.be.equal(true);
        });

        it('should return true on empty escape', () => {
            expect(P.checkAds(data.ads[17])).to.be.equal(true);
        });

        it('should return true on no escape', () => {
            expect(P.checkAds(data.ads[18])).to.be.equal(true);
        });
    });

    // checks Item : todo
    describe('when I check on Item', function() {
        it('should return false on null item', () => {
            expect(P.checkItem(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkItem(undefined)).to.be.equal(false);
        });
        it('should return true on correct item', () => {
            expect(P.checkItem(data.items[0])).to.be.equal(true);
        });

        it('should return false on bad tag type ', () => {
            expect(P.checkItem(data.items[1])).to.be.equal(false);
        });
        it('should return false on bad type value', () => {
            expect(P.checkItem(data.items[2])).to.be.equal(false);
        });
        it('should return false on empty type', () => {
            expect(P.checkItem(data.items[3])).to.be.equal(false);
        });
        it('should return false on no type', () => {
            expect(P.checkItem(data.items[4])).to.be.equal(false);
        });

        it('should return true on bad tag poster ', () => {
            expect(P.checkItem(data.items[5])).to.be.equal(true);
        });
        it('should return true on empty poster value', () => {
            expect(P.checkItem(data.items[6])).to.be.equal(true);
        });
        it('should return true on no poster', () => {
            expect(P.checkItem(data.items[7])).to.be.equal(true);
        });

        it('should return false on bad tag title ', () => {
            expect(P.checkItem(data.items[8])).to.be.equal(false);
        });
        it('should return false on empty title', () => {
            expect(P.checkItem(data.items[9])).to.be.equal(false);
        });
        it('should return false on no title', () => {
            expect(P.checkItem(data.items[10])).to.be.equal(false);
        });

        it('should return false on bad tag class ', () => {
            expect(P.checkItem(data.items[11])).to.be.equal(false);
        });
        it('should return false on bad class value', () => {
            expect(P.checkItem(data.items[12])).to.be.equal(false);
        });
        it('should return false on empty class', () => {
            expect(P.checkItem(data.items[13])).to.be.equal(false);
        });
        it('should return false on no class', () => {
            expect(P.checkItem(data.items[14])).to.be.equal(false);
        });

        it('should return true on bad tag thumbs ', () => {
            expect(P.checkItem(data.items[15])).to.be.equal(true);
        });
        it('should return true on empty thumbs value', () => {
            expect(P.checkItem(data.items[16])).to.be.equal(true);
        });
        it('should return true on no thumbs', () => {
            expect(P.checkItem(data.items[17])).to.be.equal(true);
        });

        it('should return false on bad tag src ', () => {
            expect(P.checkItem(data.items[18])).to.be.equal(false);
        });
        it('should return false on empty src value', () => {
            expect(P.checkItem(data.items[19])).to.be.equal(false);
        });
        it('should return false on no src', () => {
            expect(P.checkItem(data.items[20])).to.be.equal(false);
        });
        it('inserting a correct full item to playlist', () => {
            expect(P.addItem(data.Fullitem)).to.be.equal(true);
        });
    });
});