module("module A");

test("first test", function() {
    ok(1 == "1", "Passed!");
    equal(1, 1, "Passed!");
    notEqual(1, 2, "Passed!");
});

test("second test", function() {
    ok( 1 == "1", "Passed!" );
    equal(1, 1, "Passed");
    notEqual(1, 2, "Passed!");
});

module("module B", {
    uid: null,
    setup: function() {
        // prepare something for all following tests
        this.uid = 5;
    },
    teardown: function() {
        // clean up after each test
    }
});

test("first test", function() {
    ok( 1 == "1", "Passed!" );
    equal(this.uid, 5, "Passed!");
    notEqual(this.uid, 6, "Passed!");
});

test("second test", function() {
    ok( 1 == "1", "Passed!" );
    equal(this.uid, 5, "Passed!");
    notEqual(this.uid, 6, "Passed!");
});