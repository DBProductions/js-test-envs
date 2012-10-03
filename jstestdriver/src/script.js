/**
 * namespace
 */
myapp = {};

/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method methodName
 * @param {String} foo Argument 1
 * @param {Object} config A config object
 * @param {String} config.name The name on the config object
 * @param {Function} config.callback A callback function on the config object
 * @param {Boolean} [extra=false] Do extra, optional work
 * @return {Boolean} Returns true on success
 */
myapp.User = function (opts) {
    this.name = opts.name || null;
    this.email = opts.email || null;
    this.gender = opts.gender || null;
};

/**
 * more documentation
 */
myapp.User.prototype.loadData = function (data) {
    this.name = data.name || this.name;
    this.email = data.email || this.email;
    this.gender = data.gender || this.gender;
}

/**
 * more documentation
 */
myapp.User.prototype.getProp = function (key) {
    return this[key];
}

/**
 * more documentation
 */
myapp.User.prototype.setProp = function (key, value) {
    this[key] = value;
}

/**
 * more documentation
 */
myapp.User.prototype.doSomethingUntested = function () {
    return "no test";
}