test("Using spies", function () {
    var spy = sinon.spy();
	spy();
	
	ok(spy.called);
	ok(spy.calledOnce); 
});