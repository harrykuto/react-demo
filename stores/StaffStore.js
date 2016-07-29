var $ = require('jquery');
var StaffStore = {
  getList: function (options, callback) {
    $.get('http://localhost:8088/staff', options).done(callback).fail(callback);
  },
  getDetail: function (id, callback) {
  	$.get('http://localhost:8088/staff/'+id).done(callback).fail(callback);
  },
  updateDetail: function (staff, callback) {
  	$.ajax({
  		url: 'http://localhost:8088/staff',
  		method: 'PUT',
  		data: staff
  	}).done(callback).fail(callback);
  }
};

module.exports = StaffStore;
