var Browser = require('zombie');
var assert = require('assert');
var browser = new Browser({ debug: true });

browser.visit("http://dbproductions.de/", function() {
    assert.ok(browser.success);
    assert.equal(browser.statusCode, 200);
    assert.equal(browser.text('h1'), 'DBProductions');
});