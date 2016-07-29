var $ = require('jquery');
var md5 = require('md5');
var UserStore = {
  login: function (authObject, callback) {
    authObject.password = md5(authObject.password);
    $.post('http://localhost:8088/login', authObject).done(callback);
  }
};

module.exports = UserStore;
