var casper = require('casper').create();

casper.start('http://dbproductions.de/', function() {
    this.echo(this.getCurrentUrl(), 'INFO');    
    this.echo(this.getTitle());
    if (this.exists('#wrapper')) {
        this.echo('found #wrapper element', 'INFO');
    } else {
        this.echo('#wrapper element not found', 'ERROR');
    }
    this.clickLabel('JavaScript', 'a');
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
    this.echo('h1: ' + this.fetchText('h1'));
    this.clickLabel('MVC Frameworks', 'a');
});

casper.then(function() {
    var url = this.getCurrentUrl();
    this.echo(url, 'INFO');
    this.echo(this.getTitle());
    this.download(url, 'saved.html');
    casper.back();
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
    if (this.exists('#s')) {
        this.echo('found #s', 'INFO');
        this.fill('form#searchform', { 's': 'casperjs'}, true);
    } else {
        this.echo('#s not found', 'ERROR');
    }
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.echo(this.getTitle());
});

casper.run(function() {
    this.echo('Done.').exit();
});
