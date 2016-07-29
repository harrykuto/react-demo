var $ = require('jquery');
var TeamStore = {
  getList: function (callback) {
    $.get('http://localhost:8088/team').done(callback).fail(callback);
  }
};

module.exports = TeamStore;
