'use strict';
import 'babel-polyfill';
import Version from '../src/Version';
import * as Utils from '../src/js/utils/Utils';
import chai from 'chai';

chai.expect();

const expect = chai.expect;

let V, ver, time = 18305;

describe('FjTestUtils', function() {
    V = new Version();
    ver = V.getVersion();

    before(function() {
        // nothing to do
    });

    // Version test
    describe('when I need the version', function() {
        console.log(' Version is ', ver);
        it('should return the version', () => {
            expect(ver).to.be.equal('0.2.9');
        });
    });

    // Utils test
    describe('when I need the utils Duration', function() {

        console.log(' Time is ', Utils.duration(time));
        it('should return transform duration', () => {
            expect(Utils.duration(time)).to.be.equal('05:05:05');
        });
    });

});