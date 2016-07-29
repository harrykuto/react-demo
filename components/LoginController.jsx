var React = require('react');
var FormActions = require('../actions/FormActions');
var withRouter = require('react-router').withRouter;

var LoginController = React.createClass({

	getInitialState: function () {
		return {
			error: false
		}
	},

  submitLoginForm: function (event) {
  	event.preventDefault();
  	var _this = this;
  	var location = _this.props.location;
  	var objAuth = {
  		username : _this.refs.username.value,
  		password : _this.refs.password.value
  	}
  	FormActions.submit(objAuth, function (res) {
  		if (res) {
  			localStorage.isLoggedIn = 1;
  			if (location.state && location.state.nextPathname) {
  				_this.props.router.replace(location.state.nextPathname);
  			} else {
  				_this.props.router.replace('staff');
  			}
  		} else {
  			_this.setState({error: true});
  		}
  	});
  },
  
  render: function() {
    return <form id="login-form" onSubmit={this.submitLoginForm} name="login-form" className="form login-form">
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
		        {this.state.error && (
		        	<p>
		        		Your username and password are not correct!
		        	</p>
		        )}
		      </div>
		    </div>
		  </div>
		</form>;
  }
});

module.exports = withRouter(LoginController);
