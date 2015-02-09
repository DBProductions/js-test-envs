casper.test.begin('', 1, function suite(test) {
    casper.start('http://dbproductions.de/', function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('DBProductions | 我的新技术博客', 'startpage title');
        this.clickLabel('JavaScript', 'a');
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('JavaScript | DBProductions', 'page title');
        this.clickLabel('Testing', 'a');
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('Testing | DBProductions', 'page title');
        casper.back();
    });
    casper.then(function() {
        this.echo(this.getCurrentUrl(), 'INFO');
        test.assertTitle('JavaScript | DBProductions', 'page title');
        test.assertExists('form[action="http://www.dbproductions.de/de/"]', "main form is found");
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
