module("module User");

test("test user object", function() {
    var user = new User({name:'Peter', surname:'Test', age: 0});
    ok(typeof user == "object", "user object has the right type");
    equal(user.getName(), 'Peter', "user object gives accepted name back");
    equal(user.getFullName(), 'Peter Test', "user object gives accepted fullname back");
    notEqual(user.isAdult(), true, "current user is not adult");
});

module("module Userlist", {
    user: null,
    setup: function() {
        this.user = new User({name:'Peter', surname:'Test', age: 0});
    },
    teardown: function() {
        this.user = null;
    }
});

test("test userlist object", function() {
    var userList = new UserList();
    
    ok(typeof this.user == "object", "user object has the right type");
    ok(typeof userList == "object", "userlist object has the right type");
    
    userList.addUser(this.user);
    equal(userList.getLength(), 1, "user list has right length");
    equal(userList.getUsers().length, 1, "user list has right length");

    userList.addUser(new User({name:'Hans', surname:'Test', age: 18}));
    equal(userList.getLength(), 2, "user list has right length");
    equal(userList.getUsers().length, 2, "user list has right length");

    var userFromList = userList.getFirstUser();
    equal(userFromList.getName(), "Peter", "first user from list has the right name");

    var userFromList = userList.getLastUser();
    equal(userFromList.getName(), "Hans", "last user from list has the right name");

    var userArr = [new User({name:'Petra', surname:'Test', age: 18}),
                   new User({name:'Anja', surname:'Test', age: 18})];
    userList.addUsers(userArr);               
    equal(userList.getUsers().length, 4, "user list has right length");    

    var userFromList = userList.getLastUser();
    equal(userFromList.getName(), "Anja", "last user from list has the right name");
});