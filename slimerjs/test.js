var page = require("webpage").create();
page.open("http://www.dbproductions.de")
.then(function(status){
    if (status == "success") {
        console.log("Page title is "+ page.title);
    } else {
        console.log("Sorry, the page is not loaded");
    }
    /**
     * get an element from the DOM
     */
    var ua = page.evaluate(function () {
        return document.querySelector("#primary").textContent;
    });
    console.log(ua);
    /**
     * make a screenshot
     */
    page.viewportSize = { width:1024, height:768 };
    page.render('dbproductions.png');
    
    page.close();
    phantom.exit();
});