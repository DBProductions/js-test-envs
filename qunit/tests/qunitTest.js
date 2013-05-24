module("module A");

test("test user object", function() {
    var user = new User({name:'Peter', surname:'Test', age: 0});
    ok( typeof user == "object", "user object has the right type" );
    equal(user.getFullName(), 'Peter Test', "user object gives accepted fullname back");
    equal(user.isAdult(), false, "current user is not adult");
    notEqual(user.isAdult(), true, "current user is not adult");
});

module("module B", {
    user: null,
    setup: function() {
        // prepare something for all following tests
        this.user = new User({name:'Peter', surname:'Test', age: 0});
    },
    teardown: function() {
        // clean up after each test
        this.user = null;
    }
});

test("test userlist object", function() {
    var userList = new UserList();
    
    ok( typeof this.user == "object", "user object has the right type" );
    ok( typeof userList == "object", "userlist object has the right type" );
    
    userList.addUser(this.user);
    equal(userList.getLength(), 1, "user list has right length");
    equal(userList.getUsers().length, 1, "user list has right length");

    userList.addUser(new User({name:'Hans', surname:'Test', age: 18}));
    equal(userList.getLength(), 2, "user list has right length");
    equal(userList.getUsers().length, 2, "user list has right length");
});