module("Module A");
jstestdriver.console.log('module A');

test("first test within module", function() {
    ok( true, "all pass" );
});

test("second test within module", function() {
    ok( true, "all pass" );
});

module("Module B");
jstestdriver.console.log('module B');

test("first test within module", function() {
    ok( true, "all pass" );
});

test("second test within module", function() {
    ok( true, "all pass" );
});

test("third test within module", function() {
    ok( true, "all pass" );
});
