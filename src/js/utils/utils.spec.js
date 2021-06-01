'use strict';
import 'babel-polyfill';
import Version from '../../Version';
import * as Utils from './Utils';
import Logger from './Logger';
import chai from 'chai';

chai.expect();

const expect = chai.expect;

describe('FjTestUtils', function() {

    // Version test
    it('when I need the version', () => {
        const V = new Version();
        const pkg = require('../../../package.json');
        const ver = V.getVersion();
        console.log(' Version is ', ver);
        expect(ver).equal(pkg.version);
    });

    // Logger
    it('when I need the Logger ', () => {
        const l = new Logger(this);
        l.log('Hello');
        expect(1 + 2).equal(3);
    });

    // Utils test
    it('when I need the utils Duration', () => {
        const secDuration = 3600 + 60 + 1;
        console.log(' Time is ', Utils.duration(secDuration));
        expect(Utils.duration(secDuration)).equal('01:01:01');
    });

    it('when I need the utils Duration for minutes and seconds only', () => {
        const secDuration = 64;
        console.log(' Time is ', Utils.duration(secDuration));
        expect(Utils.duration(secDuration)).equal('01:04');
    });
});
