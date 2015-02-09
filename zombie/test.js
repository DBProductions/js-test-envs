var Browser = require('zombie');
var assert = require('assert');

var browser = new Browser();

browser.visit('http://dbproductions.de/', function(err) {
    assert.ifError(err);
});
