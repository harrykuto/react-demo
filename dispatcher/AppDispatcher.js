var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var UserStore = require('../stores/UserStore');
var StaffStore = require('../stores/StaffStore');
var TeamStore = require('../stores/TeamStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'LOGIN':
      UserStore.login(action.authObject, action.callback);
      break;
    case 'GET_LIST':
    	StaffStore.getList(action.options, action.callback);
    	break;
    case 'GET_DETAIL':
      StaffStore.getDetail(action.id, action.callback);
      break;
    case 'UPDATE_DETAIL':
      StaffStore.updateDetail(action.staff, action.callback);
      break;
    case 'GET_TEAM':
      TeamStore.getList(action.callback);
      break;
    default:
      // no op
  }
})

module.exports = AppDispatcher;
