'use strict';
var casper = require('casper').create();
var links;

function getLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function (e) {
        return e.getAttribute('href')
    });
}

casper.start('http://dbproductions.de/');

casper.then(function () {
    links = this.evaluate(getLinks);
    for(var i in links) {
        console.log(links[i]);
    }
});

casper.run();
