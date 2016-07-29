var React = require('react');
var FilterActions = require('../actions/FilterActions');
var withRouter = require('react-router').withRouter;

var FilterController = React.createClass({

	getInitialState : function () {
		return {
			loading: true,
			error: null,
			departments: []
		}
	},

	componentDidMount: function () {
		var _this = this;
		FilterActions.getTeamList(function (res) {
			if (res) {
				_this.setState({loading: false, departments: res});
			}
		});
	},

	submit: function (event) {
		event.preventDefault();
		var objectFilter = {
			fullname: this.refs.fullName.value, 
			department: this.refs.department.value
		}
		this.props.router.push({pathname:'/staff/list', state:{objectFilter:objectFilter}});
	},

	render: function() {
		var teams = this.state.departments;
		var teamList = teams.map(function (team, index) {
			return <option value={team._id} key={index}>{team.name}</option>
		});
		return <form onSubmit={this.submit} id="filter-form" name="filter-form" className="form filter-form">
		  <div className="grid-fluid">
		    <div className="row">
		      <div className="col-sm-6 col-sm-offset-3">
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <label for="full-name">Full Name:</label>
		          </div>
		          <div className="col-sm-8">
		            <input type="text" name="full-name" ref="fullName"/>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <label for="department">Department:</label>
		          </div>
		          <div className="col-sm-8">
		            <select ref="department">
		              <option value="">-- All departments --</option>
		              {teamList}
		            </select>
		          </div>
		        </div>
		        <div className="text-center">
		          <button type="submit" name="apply" id="apply" title="Apply" className="button orange-btn">Apply</button>
		        </div>
		      </div>
		    </div>
		  </div>
		</form>
	}
});

module.exports = withRouter(FilterController);