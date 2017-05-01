"use strict";
import Playlist from '../src/playlist';
import chai from 'chai';

const expect = chai.expect;

let P, ver, ver2, ver3, ver4, ver5, ver6, ver7, ver8, ver9, ver10, ver11, time = 18305;

describe('Playlist', function() {
    P = new Playlist();

    before(function() {
        // nothing to do
    });

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

        ver = {
            'FJLabel': 'English',
            'FJLang': 'en',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return true on correct item', () => {
            expect(P.checkSubtitle(ver)).to.be.equal(true);
        });


        ver2 = {
            'FJLabe': 'English',
            'FJLang': 'en',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on bad tag label', () => {
            expect(P.checkSubtitle(ver2)).to.be.equal(false);
        });

        ver3 = {
            'FJLang': 'en',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on no label', () => {
            expect(P.checkSubtitle(ver3)).to.be.equal(false);
        });


        ver4 = {
            'FJLabel': '',
            'FJLan': 'en',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on empty label value', () => {
            expect(P.checkSubtitle(ver4)).to.be.equal(false);
        });

        ver5 = {
            'FJLabel': 'English',
            'FJLan': 'en',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on bad tag lang', () => {
            expect(P.checkSubtitle(ver5)).to.be.equal(false);
        });

        ver6 = {
            'FJLabel': 'English',
            'FJLang': '',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on empty tag lang', () => {
            expect(P.checkSubtitle(ver6)).to.be.equal(false);
        });

        ver7 = {
            'FJLabel': 'English',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on no tag lang', () => {
            expect(P.checkSubtitle(ver7)).to.be.equal(false);
        });

        ver8 = {
            'FJLabel': 'English',
            'FJLang': 'francais',
            'FJSrc': '../vtt/sintel-en.vtt'
        };
        it('should return false on no iso code lang', () => {
            expect(P.checkSubtitle(ver8)).to.be.equal(false);
        });

        ver9 = {
            'FJLabel': 'English',
            'FJLang': 'fr',
            'FJSr': '../vtt/sintel-en.vtt'
        };
        it('should return false on no src tag', () => {
            expect(P.checkSubtitle(ver9)).to.be.equal(false);
        });

        ver10 = {
            'FJLabel': 'English',
            'FJLang': 'fr',
            'FJSrc': ''
        };
        it('should return false on empty src value', () => {
            expect(P.checkSubtitle(ver10)).to.be.equal(false);
        });

        ver11 = {
            'FJLabel': 'English',
            'FJLang': 'fr',
        };
        it('should return false on missing src', () => {
            expect(P.checkSubtitle(ver11)).to.be.equal(false);
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
    });
    // checks Drm
    describe('when I check on Drm', function() {
        it('should return false on null item', () => {
            expect(P.checkDrm(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkDrm(undefined)).to.be.equal(false);
        });
    });
    // checks Ads
    describe('when I check on Ads', function() {
        it('should return false on null item', () => {
            expect(P.checkAds(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkAds(undefined)).to.be.equal(false);
        });
    });
    // checks Item
    describe('when I check on Item', function() {
        it('should return false on null item', () => {
            expect(P.checkItem(null)).to.be.equal(false);
        });
        it('should return false on undefined item', () => {
            expect(P.checkItem(undefined)).to.be.equal(false);
        });
    });



});