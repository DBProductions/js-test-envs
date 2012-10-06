## JavaScript testing enviroments

### QUnit 
 - Version 1.11
[QUnit](http://qunitjs.com/)

### Jasmine
[Jasmine](http://pivotal.github.com/jasmine/)

### Sinon
 - Version 1.3.2
[Sinon](http://sinonjs.org)

### js-test-driver
[js-test-driver](http://code.google.com/p/js-test-driver/)
 - start a server `java -jar JsTestDriver-1.3.4.b.jar --port 9876`
 - capture your browser by going to http://localhost:9876
 - run tests `java -jar JsTestDriver-1.3.4.b.jar --config jsTestDriver.conf --tests all`
 - create coverage report `java -jar JsTestDriver-1.3.4.b.jar --config jsTestDriver.conf --tests all --testOutput coverage`
 - js-test-driver creates a dat file to create a html report change to /coverage and use: `genhtml jsTestDriver.conf-coverage.dat`

