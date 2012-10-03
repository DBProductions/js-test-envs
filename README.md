Different JavaScript enviroments for testing source code.

[QUnit](http://qunitjs.com/)

[Jasmine](http://pivotal.github.com/jasmine/)

[Sinon](http://sinonjs.org)

[js-test-driver](http://code.google.com/p/js-test-driver/)
 - start a server JsTestDriver-1.3.4.b.jar --port 9876`
 - capture your browser by going to http://localhost:9876
 - run tests `java -jar JsTestDriver-1.3.4.b.jar --config JsTestDriver.conf --tests all`
 - create coverage report `java -jar JsTestDriver-1.3.4.b.jar --config JsTestDriver.conf --tests all --testOutput coverage`
 - js-test-driver creates a dat file to create a html report change to /coverage and use: `genhtml jsTestDriver.conf-coverage.dat`

