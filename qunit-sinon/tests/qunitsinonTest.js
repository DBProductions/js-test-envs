module("module Spies");

test("Using spies", function () {
    var spy = sinon.spy();
    spy();
	
	ok(spy.called, 'spy called');
	ok(spy.calledOnce, 'spy called once');
	equal(spy.callCount, 1, 'spy callCount is 1');

	spy();
	equal(spy.callCount, 2, 'spy callCount is 2');

	spy();
	notEqual(spy.callCount, 4, 'spy callCount is not 4');
});

module("module Stubs");

test("Using stubs", function () {
    var callback = sinon.stub();
    callback.returns(42);
    callback.withArgs(1).returns(1);

    equal(callback(), 42, 'stub called without argument');
    equal(callback(1), 1, 'stub called with argument');
    equal(callback(10), 42, 'stub called with argument');
});