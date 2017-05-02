"use strict";
import Playlist from '../src/playlist';
import chai from 'chai';

const expect = chai.expect;
let P, time = 18305;
let subs = [{
    'FJLabel': 'English',
    'FJLang': 'en',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabe': 'English',
    'FJLang': 'en',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLang': 'en',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': '',
    'FJLan': 'en',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': 'English',
    'FJLan': 'en',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': 'English',
    'FJLang': '',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': 'English',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': 'English',
    'FJLang': 'francais',
    'FJSrc': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': 'English',
    'FJLang': 'fr',
    'FJSr': '../vtt/sintel-en.vtt'
}, {
    'FJLabel': 'English',
    'FJLang': 'fr',
    'FJSrc': ''
}, {
    'FJLabel': 'English',
    'FJLang': 'fr',
}];

let overs = [{
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJDat': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJData': '',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUr': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': '',
    'FJDuration': 25,
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuratio': 25,
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': null,
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 'dffdsdsf',
    'FJShowAt': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowA': 5
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': null
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25
}, {
    'FJData': 'Hello there Overlay 1',
    'FJUrl': 'http://www.facebook.com',
    'FJDuration': 25,
    'FJShowAt': 'dsfzsfuyg'
}];

describe('Playlist', function() {
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
            expect(P.checkSubtitle(subs[0])).to.be.equal(true);
        });

        it('should return false on bad tag label', () => {
            expect(P.checkSubtitle(subs[1])).to.be.equal(false);
        });

        it('should return false on no label', () => {
            expect(P.checkSubtitle(subs[2])).to.be.equal(false);
        });

        it('should return false on empty label value', () => {
            expect(P.checkSubtitle(subs[3])).to.be.equal(false);
        });

        it('should return false on bad tag lang', () => {
            expect(P.checkSubtitle(subs[4])).to.be.equal(false);
        });

        it('should return false on empty tag lang', () => {
            expect(P.checkSubtitle(subs[5])).to.be.equal(false);
        });

        it('should return false on no tag lang', () => {
            expect(P.checkSubtitle(subs[6])).to.be.equal(false);
        });

        it('should return false on no iso code lang', () => {
            expect(P.checkSubtitle(subs[7])).to.be.equal(false);
        });

        it('should return false on no src tag', () => {
            expect(P.checkSubtitle(subs[8])).to.be.equal(false);
        });

        it('should return false on empty src value', () => {
            expect(P.checkSubtitle(subs[9])).to.be.equal(false);
        });

        it('should return false on missing src', () => {
            expect(P.checkSubtitle(subs[10])).to.be.equal(false);
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
            expect(P.checkOverlay(overs[0])).to.be.equal(true);
        });

        it('should return false on bad tag data', () => {
            expect(P.checkOverlay(overs[1])).to.be.equal(false);
        });

        it('should return false on no data', () => {
            expect(P.checkOverlay(overs[2])).to.be.equal(false);
        });

        it('should return false on empty data value', () => {
            expect(P.checkOverlay(overs[3])).to.be.equal(false);
        });

        it('should return false on bad tag url', () => {
            expect(P.checkOverlay(overs[4])).to.be.equal(false);
        });

        it('should return false on empty tag url', () => {
            expect(P.checkOverlay(overs[5])).to.be.equal(false);
        });

        it('should return false on no tag url', () => {
            expect(P.checkOverlay(overs[6])).to.be.equal(false);
        });

        it('should return false on bad tag duration', () => {
            expect(P.checkOverlay(overs[7])).to.be.equal(false);
        });

        it('should return false on null duration value', () => {
            expect(P.checkOverlay(overs[8])).to.be.equal(false);
        });

        it('should return false on no duration', () => {
            expect(P.checkOverlay(overs[9])).to.be.equal(false);
        });

        it('should return false on bad duration value', () => {
            expect(P.checkOverlay(overs[10])).to.be.equal(false);
        });

        it('should return false on bad tag show at', () => {
            expect(P.checkOverlay(overs[11])).to.be.equal(false);
        });

        it('should return false on null show at value', () => {
            expect(P.checkOverlay(overs[12])).to.be.equal(false);
        });

        it('should return false on no show at', () => {
            expect(P.checkOverlay(overs[13])).to.be.equal(false);
        });

        it('should return false on bad show at value ', () => {
            expect(P.checkOverlay(overs[14])).to.be.equal(false);
        });
    });
    // checks Drm : todo
    describe('when I check on Drm', function() {
        it('should return false on null item', () => {
            expect(P.checkDrm(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkDrm(undefined)).to.be.equal(false);
        });
    });
    // checks Ads : todo
    describe('when I check on Ads', function() {
        it('should return false on null item', () => {
            expect(P.checkAds(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkAds(undefined)).to.be.equal(false);
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
    });



});