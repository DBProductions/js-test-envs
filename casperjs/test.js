var casper = require('casper').create();

casper.start('http://dbproductions.de/', function() {
    this.echo(this.getCurrentUrl(), 'INFO');    
    this.echo(this.getTitle());
    this.clickLabel('JavaScript', 'a');
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
    this.echo(this.fetchText('h1'));
    this.clickLabel('MVC Frameworks', 'a');
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
    casper.back();
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
});

casper.run(function() {
    this.exit();
});