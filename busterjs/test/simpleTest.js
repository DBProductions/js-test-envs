var buster = require("buster");

buster.testCase("module", {
    setUp: function () {
        this.value = 'abc';
    },

    "test supid if true": function () {
        assert(true);
    },
    "simple equals": function () {
        assert.equals('abc', this.value);
    },
    "has own setup": {
        setUp: function () {
            this.value = 'ab';  
        },
        "test": function () {
            assert.equals('ab', this.value);
        }
    }
});

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

