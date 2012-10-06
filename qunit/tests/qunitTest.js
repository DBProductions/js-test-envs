module("module A");

test("first test", function() {
    ok( 1 == "1", "Passed!" );
});

test("second test", function() {
    ok( 1 == "1", "Passed!" );
});

module("module B", {
    setup: function() {
        // prepare something for all following tests
    },
    teardown: function() {
        // clean up after each test
    }
});

test("first test", function() {
    ok( 1 == "1", "Passed!" );
});

test("second test", function() {
    ok( 1 == "1", "Passed!" );
    ok( 1 == "1", "Passed!" );
});