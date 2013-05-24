/**
 * Create a YUI instance 
 * populate it with the required modules node, console, test
 */
YUI().use('node', 'console', 'test', function (Y) {
    /**
     * create a namespace, Y.example.test
     */
    Y.namespace("example.test");
    /**
     * create a first test case
     */
    Y.example.test.DataTestCase = new Y.Test.Case({
        
        name : "Data Tests",
        /*
         * Sets up data that is needed by each test.
         */
        setUp : function () {
            this.data = {
                name: "test",
                year: 2007,
                beta: true
            };
        },
        /**
         * Cleans up everything that was created by setUp().
         */
        tearDown : function () {
            delete this.data;
        },
        /**
         * testName
         */
        testName : function () {
            var Assert = Y.Assert;

            Assert.isObject(this.data);
            Assert.isString(this.data.name);
            Assert.areEqual("test", this.data.name);
        },
        /**
         * testYear
         */
        testYear : function () {
            var Assert = Y.Assert;

            Assert.isObject(this.data);
            Assert.isNumber(this.data.year);
            Assert.areEqual(2007, this.data.year);
        },
        /**
         * testBeta
         */
        testBeta : function () {
            var Assert = Y.Assert;

            Assert.isObject(this.data);
            Assert.isBoolean(this.data.beta);
            Assert.isTrue(this.data.beta);
        }
    });

    /**
     * create a second test case
     */
    Y.example.test.ArrayTestCase = new Y.Test.Case({
        
        name : "Array Tests",
        /*
         * Sets up data that is needed by each test.
         */
        setUp : function () {
            this.data = [0,1,2,3,4]
        },
        /*
         * Cleans up everything that was created by setUp().
         */
        tearDown : function () {
            delete this.data;
        },
        /**
         * testPop
         */
        testPop : function () {
            var Assert = Y.Assert;
            var value = this.data.pop();
            Assert.areEqual(4, this.data.length);
            Assert.areEqual(4, value);
        },
        /**
         * testPush
         */
        testPush : function () {
            var Assert = Y.Assert;
            this.data.push(5);
            Assert.areEqual(6, this.data.length);
            Assert.areEqual(5, this.data[5]);
        },
        /**
         * testSplice
         */
        testSplice : function () {
            var Assert = Y.Assert;
            this.data.splice(2, 1, 6, 7);
            Assert.areEqual(6, this.data.length);
            Assert.areEqual(6, this.data[2]);
            Assert.areEqual(7, this.data[3]);
        }
    });

    /**
     * create a third test case with mock
     */
    Y.example.test.MockTestCase = new Y.Test.Case({
        name : "Mock Tests",
        testMock : function () {
            var mock = Y.Mock();
            Y.Mock.expect(mock, {
                method: 'doSomething',
                args: [Y.Mock.Value.String] 
            });
            
            mock.doSomething('test');

            Y.Mock.verify(mock);
        }
    });
    
    /**
     * create the test suite
     */
    Y.example.test.ExampleSuite = new Y.Test.Suite("Example Suite");
    /**
     * add test cases
     */
    Y.example.test.ExampleSuite.add(Y.example.test.DataTestCase);
    Y.example.test.ExampleSuite.add(Y.example.test.ArrayTestCase);
    Y.example.test.ExampleSuite.add(Y.example.test.MockTestCase);
    /**
     * add to test runner
     */
    Y.Test.Runner.add(Y.example.test.ExampleSuite);
	/**
     * create the console
     */
    var r = new Y.Console({
        newestOnTop : false,
        style: 'block'
    });
    r.render('#testLogger');
    /**
     * run the tests
     */
    Y.Test.Runner.run();
});