var q = require('q');
var models = require('../models');

teamController = {
  //getList
  getList: function(options){
    var deferred = q.defer();
    models.team.find({}, function(err, data){
      if(err){
        deferred.reject(err)
      }else{
        deferred.resolve(data);
      }
    });
    return deferred.promise;
  },
  //get
  get: function(options){
  },
  //create
  create: function(){
  },
  //delete

  //update
  update: function(){
  }

}

module.exports = teamController