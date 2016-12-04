import chai from 'chai';
import Fjplayer from '../lib/fjplayer.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library Fjplayer', function () {
  before(function () {
    lib = new Fjplayer();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Library');
    });
  });
});
