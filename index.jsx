var React = require('react');
var ReactDOM = require('react-dom');
var LoginController = require('./components/LoginController');
var StaffController = require('./components/StaffController');
var StaffDetailController = require('./components/StaffDetailController');
var BreadcrumbController = require('./components/BreadcrumbController');
var FilterController = require('./components/FilterController');
var UserFormController = require('./components/UserFormController');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;
var browserHistory = require('react-router').browserHistory;
var IndexRedirect = require('react-router').IndexRedirect;

require('./css/libs.css');
require('./css/style.css');

function requireAuth (nextState, replace) {
	if (!parseInt(localStorage.isLoggedIn,10)) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
};

function isLoggedIn (nextState, replace) {
	if (parseInt(localStorage.isLoggedIn,10)) {
		replace({
			pathname: '/staff/list'
		});
	}
};

var App = React.createClass({
	render : function () {
		var menuEle;
		if (this.props.location.pathname !== '/login') {
			menuEle = <Menu/>
		}
		return <div>
		<header id="header">
			<div className="grid-fluid">
				{menuEle}
				<h1 className="main-heading">Sutrix Hrm</h1>
			</div>
		</header>
		<main id="main">
			<div className="inner">{this.props.children}</div>
		</main>
	</div>
	}
});

var Menu = React.createClass({

	getInitialState : function () {
		return {
			isShow: true
		}
	},

	showMenu: function (event) {
		event.stopPropagation();
		var _this = this;
		_this.setState({isShow: !_this.state.isShow});
	},

	logout: function () {
		localStorage.isLoggedIn = 0;
	},

	render : function () {
		return <nav className="navigation"><a href="javascript:;" title="Menu" className="icon-nav" onClick={this.showMenu}>Menu</a>
			<div style={this.state.isShow ? {display:'none'} : {}} className="dropdown">
				<div className="user-area">
					<p>Welcome</p><a href="/login" title="Logout" className="logout" onClick={this.logout}>Logout</a>
				</div>
				<ul className="sub-navigation">
					<li><a href="/staff/dashboard" title="Dashboard">Dashboard</a>
					</li>
					<li><a href="/staff/filter" title="Staff">Staff</a>
					</li>
				</ul>
			</div>
		</nav>
	}
});

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/login" component={LoginController} onEnter={isLoggedIn}/>
			<Route path="/staff" component={BreadcrumbController}>
				<IndexRedirect to="/staff/filter" />
				<Route path="filter" component={FilterController} onEnter={requireAuth}/>
				<Route path="list" component={StaffController} onEnter={requireAuth}/>
				<Route path="add" component={UserFormController} onEnter={requireAuth}/>
				<Route path=":id" component={StaffDetailController} onEnter={requireAuth}/>
			</Route>
		</Route>
	</Router>,
	document.querySelector('#container')
);
