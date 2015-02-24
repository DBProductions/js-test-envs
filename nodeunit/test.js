exports.singleTest = function (test) {
    test.expect(1);
    test.ok(true, 'ever true');
    test.done();    
};
exports.groupTest = {
    setUp: function (callback) {
        this.name = 'nodeunit';
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    'Test 1': function(test) {
        test.expect(1);
        test.ok(true, 'ever true');
        test.done();
    },
    'Test 2': function(test) {
        test.expect(3);
        test.equal(1, 1, 'one equals one');
        test.notEqual(1, 2, 'one not equals two');
        test.equal(this.name, 'nodeunit', 'one equals one');
        test.done();
    }
};
