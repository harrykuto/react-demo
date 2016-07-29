var q = require('q');
var models = require('../models');

staffController = {
  //getList
  getList: function(options){
    var deferred = q.defer();
    var fullname = options.fullname;
    var query = {
      $and: [{
        $or : [{
          firstname: new RegExp(fullname,'i')
        },{
          lastname:  new RegExp(fullname,'i')
        }]
      }]
    };
    if(options.department){
      query.$and.push({team: options.department});
    }
    models.staff.find(query).populate('team', 'name')
    .exec(function(err, staffs){
      if(err){
        deferred.reject(err)
      }else{
        deferred.resolve(staffs);
      }
    });
    return deferred.promise;
  },
  //get
  get: function(options){
    var deferred = q.defer();
    models.staff.findOne({_id: options.id})
      .populate('team', 'name')
      .exec(function(err, data){
        if(err){
          deferred.reject(err)
        }else{
          deferred.resolve(data);
        }
    });
    return deferred.promise;
  },
  //create
  create: function(options){
    var deferred = q.defer();
    var result = {};
    var newStaff = new models.staff({
      address: options.address,
      dob: options.dob,
      email: options.email,
      firstname: options.firstname,
      gender: options.gender,
      history: options.history,
      joinDate: options.joinDate,
      lastname: options.lastname,
      phone: options.phone,
      skype: options.skype,
      staffId: options.staffId,
      team: options.team,
      avatar: options.avatar
    });
    newStaff.save(function(error, staff){
      models.team.findOne({_id: options.team}, function(err, team){
        team.staffs.push(staff._id);
        team.save(function(err, data){
          if(err){
            deferred.reject(err)
          }else{
            deferred.resolve({
              success: true
            });
          }
        });
      });
    });
    return deferred.promise;
  },
  //delete

  //update
  update: function(options){
    var deferred = q.defer();
    var editedStaff ={
      address: options.address,
      dob: options.dob,
      email: options.email,
      firstname: options.firstname,
      gender: options.gender,
      history: options.history,
      joinDate: options.joinDate,
      lastname: options.lastname,
      phone: options.phone,
      skype: options.skype,
      staffId: options.staffId,
      team: options.team,
      avatar: options.avatar
    };
    models.staff.update({_id: options._id}, {$set: editedStaff}, function(err, data){
      if(err){
        deferred.reject(err)
      }else{
        deferred.resolve(data);
      }
    });
    return deferred.promise;
  }

}

module.exports = staffController