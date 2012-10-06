UserTest = TestCase("UserTest");

var user = new myapp.User({name:"jsTestDriver"});

UserTest.prototype.setUp = function () {
    //jstestdriver.console.info("setUp UserTest");
}

UserTest.prototype.testUsergetName = function () {
    jstestdriver.console.log("log output");
    assertEquals("Test Output", "jsTestDriver", user.getProp("name"));
}

UserTest.prototype.testUsersetName = function () {
    user.setProp("name", "testing javascript");
    assertEquals("Test Output", "testing javascript", user.getProp("name"));
}

UserTest.prototype.testUsergetEmail = function () {
    assertEquals(null, user.getProp("email"));
}

UserTest.prototype.testUserloadData = function () {
    jstestdriver.console.warn("warn");
    jstestdriver.console.debug("debug");
    jstestdriver.console.error("error");
    user.loadData({name:"jsTestDriver", email:"test@driver.com"})
    assertEquals("jsTestDriver", user.getProp("name"));
    assertEquals("test@driver.com", user.getProp("email"));
}

UserTest.prototype.testTest = function () {
    assertEquals('no test', user.doSomethingUntested());
}

UserTest.prototype.tearDown = function () {
    //jstestdriver.console.info("tearDown UserTest");
}
