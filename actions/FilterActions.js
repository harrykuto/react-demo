var AppDispatcher = require('../dispatcher/AppDispatcher');

var FilterActions = {

  getTeamList: function (callback) {
    AppDispatcher.dispatch({
      actionType: 'GET_TEAM',
      callback : callback
    });
  },

};

module.exports = FilterActions;
