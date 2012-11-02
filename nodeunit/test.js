module.exports.testUser = {
    'user test 1': function(test) {
        test.expect(1);
        test.ok(true, 'ever true');
        test.done();
    },
    'user test 2': function(test) {
        test.expect(2);
        test.equal(1, 1, 'one equals one');
        test.notEqual(1, 2, 'one not equals two');
        test.done();
    }
};
