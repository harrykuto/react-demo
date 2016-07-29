var React = require('react');

var FormLogin = function(props) {

  return <form id="login-form" onSubmit={props.onSubmit} name="login-form" className="form login-form">
  <div className="grid-fluid">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <div className="row form-group">
          <div className="col-sm-4">
            <label for="user-name">User name:</label>
          </div>
          <div className="col-sm-8">
            <input type="text" ref="username" id="user-name" />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm-4">
            <label for="password">Password:</label>
          </div>
          <div className="col-sm-8">
            <input type="password" ref="password" id="password"/>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" name="login" id="login" title="Login" className="button orange-btn">Login</button>
        </div>
      </div>
    </div>
  </div>
</form>;
};

module.exports = FormLogin;
