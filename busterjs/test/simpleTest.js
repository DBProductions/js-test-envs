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
