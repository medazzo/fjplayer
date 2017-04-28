import { fjplayer } from '../lib/fjplayer.js';

describe("Fjplayer", function() {

    describe("getSpecialValue", function() {
        var v = new fjplayer.Version();
        it("returns a special value", function() {
            expect(v).to.equal(10);
        });

    });

});