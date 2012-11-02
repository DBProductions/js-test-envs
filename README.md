# JavaScript testing environments
Different JavaScript testing environments, ready to use, with very simple examples.

## QUnit 
[QUnit](http://qunitjs.com/)
 - Version 1.11

## Jasmine
[Jasmine](http://pivotal.github.com/jasmine/)
 - Version 1.2

## Sinon
[Sinon](http://sinonjs.org)
 - Version 1.3.2
 
## YUITest
[YUITest](http://developer.yahoo.com/yui/yuitest/)
 - Version 3

## js-test-driver
[js-test-driver](http://code.google.com/p/js-test-driver/)
 - Version 1.3.4
 - start a server `java -jar JsTestDriver-1.3.4.b.jar --port 9876`
 - capture your browser by going to http://localhost:9876
 - run tests `java -jar JsTestDriver-1.3.4.b.jar --config jsTestDriver.conf --tests all`
 - create coverage report `java -jar JsTestDriver-1.3.4.b.jar --config jsTestDriver.conf --tests all --testOutput coverage`
 - js-test-driver creates a dat file to create a html report change to /coverage and use: `genhtml jsTestDriver.conf-coverage.dat`

