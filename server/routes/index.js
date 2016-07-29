var _ = require('lodash');
var controllers = require('../controllers');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var reqh = function (controllerFunction){
  return function (req, res){
    var successHandler = function(result){
      if(_.isEmpty(result)){
        code = 204
      }else if(req.method === 'post'){
        code = 201
      }else{
        code = 200
      }

      res.json(code, result);
    }

    var errorHandler = function(err){
      var code = err.code || 500
      if(err.toString){
        var err = err.toString();
      }
      var error = err || 'There was an unknown API error'
      res.json(code, error);
    }
    var options = _.extend(req.body, req.query, req.params) || {}
    console.log(options);
    options.files = req.files
    controllerFunction.call(this, options).then(successHandler).catch(errorHandler)
  }
}


var routes = function (app) {

  var ctrl = controllers;
  //initData
  app.get("/data", reqh(ctrl.data.initUserData));
  //Login
  app.post("/login", reqh(ctrl.global.login));
  
  //Logout
  app.post("/logout", reqh(ctrl.global.logout));

  //team
  app.get('/team', reqh(ctrl.team.getList));
  
  //staff
  app.get('/staff', reqh(ctrl.staff.getList));
  app.get('/staff/:id', reqh(ctrl.staff.get));
  app.post('/staff', reqh(ctrl.staff.create));
  app.put('/staff', reqh(ctrl.staff.update));

  //upload
  app.post('/upload', multipartMiddleware, reqh(ctrl.global.upload));
  
  return app
}

module.exports = routes
