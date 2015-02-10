var buster = require("buster");

buster.spec.expose();

var spec = describe("BDD style", function () {
    beforeAll(function() {
        this.result = 5;
    });

    it("simple equal", function () {
        buster.assert.equals(5, this.result);
    });
    it("simple true", function () {
        buster.assert(true);
    });

    describe("Inner style", function () {
        it("simple inner", function () {
            buster.assert(true);
        });
    });
});

