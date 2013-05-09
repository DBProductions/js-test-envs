var page = require('webpage').create();

console.log('The default user agent is ' + page.settings.userAgent);

var t = Date.now();

page.open('http://www.dbproductions.de', function () {
	t = Date.now() - t;
    console.log('Loading time ' + t + ' msec');
    
    /**
     * get the title of the page
     */
    var title = page.evaluate(function () {
        return document.title;
    });
    console.log('Page title is ' + title);
    /**
     * get an element from the DOM
     */
    var ua = page.evaluate(function () {
        return document.getElementById('primary').innerText;
    });
    console.log(ua);

    page.render('phantomjs/dbproductions.png');
    phantom.exit();
});