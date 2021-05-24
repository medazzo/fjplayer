const env = process.env.NODE_ENV || "test";
const Version = require("../src/Version");
const Utils = require('../src/js/utils/Utils');
const expect = require("chai").expect;

describe('Utils && Version', function() {

  /*beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));*/

    // Version test
    test('when I need the version', function() {
        var V = new Version();
        var pkg = require('../package.json');
        var ver = V.getVersion();
        console.log(" Version is ", ver);        
            expect(ver).to.be.equal(pkg.version);
    });

    // Utils test
    test('when I need the utils Duration', function() {
        var u = new Utils();
        var secDuration = 3600 + 60 + 1 ;
        console.log(" Time is ", Utils.duration(secDuration));    
        expect(Utils.duration(secDuration)).to.be.equal('01:01:01');        
    });


});