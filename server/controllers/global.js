var q = require('q');
var models = require('../models');
var fs = require('fs');
var path = require('path');

globalController = {
  login: function(options){
    var deferred = q.defer();
    models.user.findOne({name: options.username, password: options.password}, function(err, data){
      if(err){
        deferred.reject(err)
      }else{
        deferred.resolve(data);
      }
    });
    return deferred.promise;
  },
  logout: function(options){
    var deferred = q.defer();
    deferred.resolve({
      success: true
    });
    return deferred.promise;
  },
  upload: function(options){
    var deferred = q.defer();
    if(options.files.myFile){
      var rmFile = options.rmFile;
      if(rmFile){
        var rmPath = rmFile;
        fs.unlinkSync(rmPath);
      }
      fs.readFile(options.files.myFile.path, function (err, data) {
        if(!err){
          var current = new Date().getTime();
          var imgName = current + path.extname(options.files.myFile.name);
          var imagePath ='images/upload/' + imgName;
          fs.writeFile(imagePath, data, function(err){
            if(err){
              deferred.reject(err)
            }else{
              deferred.resolve({
                success: true,
                imgName: imagePath
              });
            }
          });
        }
      });
    }else{
      deferred.resolve({
        success: true,
        imgName: null
      });
    }
    return deferred.promise;
  }
}

module.exports = globalController