"use strict";
import 'babel-polyfill';
import Version from '../src/Version';
import chai from 'chai';

chai.expect();

const expect = chai.expect;

let V, ver;

describe('Given an instance of my library Fjplayer', function() {
    V = new Version();
    ver = V.getVersion();
    console.log(" Version is ", ver);
    before(function() {
        // nothing to do
    });
    describe('when I need the version', function() {
        it('should return the version', () => {
            expect(ver).to.be.equal('0.2.7');
        });
    });
});