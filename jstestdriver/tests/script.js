UserTest = TestCase("UserTest");

var user;

UserTest.prototype.setUp = function () {
    user = new myapp.User({name:"jsTestDriver"});
}

UserTest.prototype.testUsergetName = function () {
    jstestdriver.console.log("run testUsergetName");
    assertEquals("Test Output", "jsTestDriver", user.getProp("name"));
}

UserTest.prototype.testUsersetName = function () {
    jstestdriver.console.log("run testUsersetName");
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
    delete user;    
}
