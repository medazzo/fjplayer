const Version = require('../src/Version');
const Utils = require('../src/js/utils/Utils');
const Logger = require('../src/js/utils/Logger');

describe('Utils && Version', () => {
  /* beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach')); */

  // Version test
  test('when I need the version', () => {
    const V = new Version();
    const pkg = require('../package.json');
    const ver = V.getVersion();
    console.log(' Version is ', ver);
    expect(ver).toEqual(pkg.version);
  });

  // Logger
  test('when I need the Logger ', () => {
    Logger.Get('Testing').log('hello');
    const l = new Logger(this);
    l.log('Hello');
    expect(1 + 2).toEqual(3);
  });

  // Utils test
  test('when I need the utils Duration', () => {
    const u = new Utils();
    const secDuration = 3600 + 60 + 1;
    console.log(' Time is ', Utils.duration(secDuration));
    expect(Utils.duration(secDuration)).toEqual('01:01:01');
  });

  test('when I need the utils Duration for minutes and seconds only', () => {
    const u = new Utils();
    const secDuration = 64;
    console.log(' Time is ', Utils.duration(secDuration));
    expect(Utils.duration(secDuration)).toEqual('01:04');
  });
});
