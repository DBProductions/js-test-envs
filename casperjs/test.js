casper.test.begin('Homepage test suite', 1, function suite(test) {
    casper.start('http://dbproductions.de/', function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('DBProductions | 我的新技术博客', 'check startpage title');
        this.clickLabel('JavaScript', 'a');
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('JavaScript | DBProductions', 'check page title');
        this.clickLabel('Testing', 'a');
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('Testing | DBProductions', 'check page title');
        test.assertSelectorHasText('h1.entry-title', 'Testing');
        casper.back();
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('JavaScript | DBProductions', 'check page title');
        test.assertExists('form[action="http://www.dbproductions.de/de/"]', "search form is found");
        this.fill('form[action="http://www.dbproductions.de/de/"]', {
            s: "casperjs"
        }, true);
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertEqual(this.getCurrentUrl(), 'http://www.dbproductions.de/de/?s=casperjs');
        test.assertTitle('casperjs | Suchergebnisse | DBProductions', 'title');        
    });
    casper.run(function() {
        test.renderResults(true);
    });
});
