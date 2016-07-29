var AppDispatcher = require('../dispatcher/AppDispatcher');

var FormActions = {

  submit: function (authObject, callback) {
    AppDispatcher.dispatch({
      actionType: 'LOGIN',
      authObject: authObject,
      callback : callback
    });
  },

};

module.exports = FormActions;
