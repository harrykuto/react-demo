var q = require('q');
var models = require('../models');

dataController = {
  //initUserData
  initUserData: function(options){
    var deferred = q.defer();
    new models.user({
      'name': 'user',
      'password': '21232f297a57a5a743894a0e4a801fc3'
    }).save(function(){
      deferred.resolve({success: true});
    });
    return deferred.promise;
  }

}

module.exports = dataController