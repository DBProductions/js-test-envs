var u = require('../../src/user.js'),
    User = u.User, UserList = u.UserList;

describe("User", function() {
    
    var user = new User({name:'Peter', surname:'Test', age: 0});
    
    it("user object has the right type", function() {
        expect(typeof user).toBe('object'); 
    });

    it("user object gives accepted name back", function() {
        expect(user.getName()).toBe('Peter');
    });

    it("user object gives accepted fullname back", function() {
        expect(user.getFullName()).toBe('Peter Test');
    });

    it("current user is not adult", function() {
        expect(user.isAdult()).toBe(false);
    });
});

describe("Userlist", function() {

    var userList = new UserList();
    
    describe("userlist will be tested here", function() {
        
        it("userlist object has the right type", function() {
            expect(typeof userList).toBe('object');  
        });

        describe("userlist methods will be tested here", function() {
            
            var user;

            beforeEach(function() {
                user = new User({name:'Peter', surname:'Test', age: 0});
            });

            it("user list has right length after adding a user", function() {
                userList.addUser(user);
                expect(userList.getLength()).toBe(1);
            });
    
            it("list from user list has right length", function() {
                expect(userList.getUsers().length).toBe(1);
            });
    
            it("first user from list has the right name", function() {
                userList.addUser(new User({name:'Hans', surname:'Test', age: 18}));
                var userFromList = userList.getFirstUser();
                expect(userFromList.getName()).toBe("Peter");
            });

            it("last user from list has the right name", function() {
                userList.addUser(new User({name:'Hans', surname:'Test', age: 18}));
                var userFromList = userList.getLastUser();
                expect(userFromList.getName()).toBe("Hans");
            });

            it("last user from list has the right name", function() {
                var userArr = [new User({name:'Petra', surname:'Test', age: 18}),
                               new User({name:'Anja', surname:'Test', age: 18})];
                userList.addUsers(userArr);               
                var userFromList = userList.getLastUser();
                expect(userFromList.getName()).toBe("Anja");
            });
        });
    });
});