# JavaScript testing environments
Different JavaScript testing environments, ready to use, with very simple examples.

## Buster.JS
[Buster.JS](http://busterjs.org)
 - Version 0.7.18 Beta 5
 - `cd busterjs`
 - `buster-test`

## CasperJS
[CasperJS](http://casperjs.org/)
 - Version 1.1.0-beta3
 - `casperjs casperjs/screenshot.js`
 - `casperjs test casperjs/test.js`

## Jasmine
[Jasmine](http://pivotal.github.com/jasmine/)
 - Version 1.14.3
 - Client-Side testing open jasmine/index.html
 - Server-Side testing `jasmine-node jasmine/specs/jasmineNode.spec.js`

## JSCheck
[JSCheck](http://jscheck.org)
 - Client-Side testing open jscheck/index.html
 - Server-Side testing `node jscheck/test.js`

## js-test-driver
[js-test-driver](http://code.google.com/p/js-test-driver/)
 - Version 1.3.4
 - `cd jstestdriver` 
 - start a server `java -jar JsTestDriver-1.3.4.b.jar --port 9876`
 - capture your browser by going to `http://localhost:9876`
 - run tests `java -jar JsTestDriver-1.3.4.b.jar --config jsTestDriver.conf --tests all`
 - create coverage report `java -jar JsTestDriver-1.3.4.b.jar --config jsTestDriver.conf --tests all --testOutput coverage`
 - js-test-driver creates a dat file to create a html report change to /coverage and use: `genhtml jsTestDriver.conf-coverage.dat`

## Mocha
[Mocha](http://visionmedia.github.com/mocha/)
 - Version 1.3.0
 - Client-Side testing open mocha/index.html
 - Server-Side testing `mocha mocha/test.js`

## Nodeunit
[Nodeunit](https://github.com/caolan/nodeunit)
 - Version 0.9.0
 - `nodeunit nodeunit/test.js`

## PhantomJS
[PhantomJS](http://phantomjs.org/)
 - Version 1.7.0
 - `phantomjs phantomjs/test.js`

## SlimerJS
[SlimerJS](http://slimerjs.org/)
 - Version 0.8.4
 - `slimerjs slimerjs/test.js`

## QUnit 
[QUnit](http://qunitjs.com/)
 - Version 1.11
 
## Sinon
[Sinon](http://sinonjs.org)
 - Version 1.3.2
 
## YUITest
[YUITest](http://developer.yahoo.com/yui/yuitest/)
 - Version 3

## Zombie
[Zombie.js](http://zombie.labnotes.org/)
 - Version 2.5.1
 - `node zombie/test.js`