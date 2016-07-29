var AppDispatcher = require('../dispatcher/AppDispatcher');

var DetailActions = {

  getDetail: function (id, callback) {
    AppDispatcher.dispatch({
      actionType: 'GET_DETAIL',
      id: id,
      callback : callback
    });
  },

  updateStaff : function (staff, callback) {
  	AppDispatcher.dispatch({
      actionType: 'UPDATE_DETAIL',
      staff: staff,
      callback : callback
    });
  },

  generateDate: function(date) {
  	return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

};

module.exports = DetailActions;
