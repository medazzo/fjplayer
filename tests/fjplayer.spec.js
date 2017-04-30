import version from '../src/Version';
import chai from 'chai';

chai.expect();

const expect = chai.expect;

let ver;

describe('Given an instance of my library Fjplayer', function() {
    before(function() {
        ver = version.getVersion();
    });
    describe('when I need the version', function() {
        it('should return the version', () => {
            expect(ver).to.be.equal('0.2.6');
        });
    });
});