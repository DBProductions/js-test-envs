/**
 * user object
 */
function User(params) {
    if (!params) { params = {}; }
    var name = params.name || '';
    var surname = params.surname || '';
    var age = params.age || 0;
    /**
     * get name of the user
     */
    this.getName = function getName() {
        return name;
    }
    /**
     * get full name of the user
     */
    this.getFullName = function getFullName() {
        return name + ' ' + surname;
    }
    /**
     * get boolean if user is adult
     */
    this.isAdult = function isAdult() {
        return age >= 18;
    }
}
(typeof window !== 'undefined' ? window : exports).User = User;

/**
 * userlist object
 */
function UserList(users) {
	var _users = users || [];
	/**
     * get user list
     */
    this.getUsers = function getUsers() {
        return _users;
    }
    /**
     * get user
     */
    this.getUser = function getUser(index) {
        return _users[index];
    }
    /**
     * get first user
     */
    this.getFirstUser = function getFirstUser() {
        return _users[0];
    }
    /**
     * get last user
     */
    this.getLastUser = function getLastUser() {
        return _users[_users.length-1];
    }
    /**
     * get length of user list
     */
    this.getLength = function getLength() {
        return _users.length;
    }
	/**
     * add user to list
     */
    this.addUser = function addUser(user) {
        _users.push(user);
    }
    /**
     * add users to list
     */
    this.addUsers = function addUsers(users) {
        var i, userLen = users.length;
        for(i = 0; i < userLen; i++) {
            _users.push(users[i]);
        }
    }
}
(typeof window !== 'undefined' ? window : exports).UserList = UserList;