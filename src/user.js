/**
 *
 */
function User(params) {
	if (!params) { params = {}; }
    var name = params.name || '';
    var surname = params.surname || '';
    var age = params.age || 0;
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

/**
 *
 */
function UserList(users) {
	var users = users || [];
	/**
     * get user list
     */
    this.getUsers = function getUsers() {
        return users;
    }
    /**
     * get first user
     */
    this.getFirstUser = function getFirstUser() {
        return users[0];
    }
    /**
     * get last user
     */
    this.getLastUser = function getLastUser() {
        return users[users.length-1];
    }
    /**
     * get length of user list
     */
    this.getLength = function getLength() {
        return users.length;
    }
	/**
     * add user to list
     */
    this.addUser = function addUser(user) {
        users.push(user);
    }
}