module("Module A");

test("first test within module", function() {
    ok( true, "all pass" );
});

test("second test within module", function() {
    ok( true, "all pass" );
});

module("Module B");

test("first test within module", function() {
    ok( true, "all pass" );
});

test("second test within module", function() {
    ok( true, "all pass" );
});

test("third test within module", function() {
	jstestdriver.console.warn("qunitTest");
    ok( true, "all pass" );
});