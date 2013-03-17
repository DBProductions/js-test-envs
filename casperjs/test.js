var casper = require('casper').create();

casper.start('http://dbproductions.de/', function() {
    this.echo(this.getCurrentUrl(), 'INFO');    
    this.test.assertTitle('DBProductions | 我的新的技术博克', 'title');
    if (this.exists('#wrapper')) {
        this.test.assertTrue(true);
    } else {
        this.test.assertTrue(false);
    }
    this.clickLabel('JavaScript', 'a');
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.test.assertTitle('JavaScript | DBProductions', 'title');
    this.test.assertEqual(this.fetchText('h1'), 'JavaScript', 'h1');
    this.clickLabel('JS MVC Frameworks', 'a');
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.test.assertTitle('JS MVC Frameworks | DBProductions', 'title');
    casper.back();
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.test.assertTitle('JavaScript | DBProductions', 'title');
    if (this.exists('#s')) {
        this.test.assertTrue(true);
        this.fill('form#searchform', { 's': 'casperjs'}, true);
    } else {
        this.echo('#s not found', 'ERROR');
    }
});

casper.then(function() {
    this.echo(this.getCurrentUrl(), 'INFO');
    this.test.assertTitle('casperjs | Suchergebnisse | DBProductions', 'title');
});

casper.run(function() {
    this.test.renderResults(true);
});
