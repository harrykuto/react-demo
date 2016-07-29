var React = require('react');
var ListActions = require('../actions/ListActions');
var withRouter = require('react-router').withRouter;

var StaffController = React.createClass({

	getInitialState : function () {
		return {
			loading: true,
			error: null,
			staffs : []
		}
	},

	componentDidMount : function () {
		var _this = this;
		var objectFilter = {fullname:'', department:''};
		if (this.props.location.state) {
			objectFilter = this.props.location.state.objectFilter;
		}
		ListActions.getList(objectFilter, function (data) {
			if (data && data.length) {
				_this.setState({loading: false, staffs: data});
			} else {
				_this.setState({loading: false, error: 'error'});
			}
		});
	},

	goToDetail : function (key) {
		this.props.router.push({pathname:'/staff/'+key});
	},

	render: function() {
		var _this = this;
		if (_this.state.loading) {
			return <span>Loading...</span>;
		} else if (_this.state.error) {
			return <span>Error: {_this.state.error}</span>;
		} else {
			var staffs = _this.state.staffs;
			var staffList = staffs.map(function (staff, index) {
		    return <tr key={index} onClick={_this.goToDetail.bind(_this, staff._id)}>
		      <td><strong className="thead visible-xs">Full name</strong><span>{staff.firstname} {staff.lastname}</span></td>
		      <td><strong className="thead visible-xs">Join date</strong><span>{staff.dob}</span></td>
		      <td><strong className="thead visible-xs">Skype</strong><span>{staff.skype}</span></td>
		      <td><strong className="thead visible-xs">Email</strong><span>{staff.email}</span></td>
		      <td><strong className="thead visible-xs">Department</strong><span>{staff.team.name}</span></td>
		    </tr>
	  	});
			return <table className="table result-table">
			  <thead className="hidden-xs">
			    <tr>
			      <th>Full name</th>
			      <th>Join date</th>
			      <th>Skype</th>
			      <th>Email</th>
			      <th>Department</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{staffList}
			  </tbody>
			</table>;
		}
	}
});

module.exports = withRouter(StaffController);