var AppDispatcher = require('../dispatcher/AppDispatcher');

var ListActions = {

  getList: function (options, callback) {
    AppDispatcher.dispatch({
      actionType: 'GET_LIST',
      options: options,
      callback : callback
    });
  },

};

module.exports = ListActions;
