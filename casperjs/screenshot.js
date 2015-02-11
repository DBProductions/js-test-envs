var casper = require('casper').create({
    verbose: true,
    viewportSize: {
    	width: 800, 
    	height: 600
    },
    pageSettings: {
        loadImages:  false
    },
    logLevel: "debug"
});

casper.start('http://dbproductions.de/', function() {
	this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
    
    this.capture('dbproductions.png');
});

casper.run(function() {
    this.echo('Done.').exit();
});