var React = require('react');
var DetailActions = require('../actions/DetailActions');
var withRouter = require('react-router').withRouter;

var StaffDetailController = React.createClass({

	getInitialState : function () {
		return {
			loading: true,
			error: null,
			staff: {}
		}
	},

	componentDidMount: function () {console.log(this.props.location);
		var _this = this;
		DetailActions.getDetail(_this.props.params.id, function (data) {
			if (data) {
				_this.setState({loading: false, staff: data});
			}
		});
	},

	addNote: function (event) {
		event.preventDefault();
		var _this = this;
	 	var noteValue = _this.refs.note.value;
	 	_this.refs.note.value = null;
	 	if (noteValue) {
	 		var staff = _this.state.staff;
	 		staff.history.push({
	 			date: DetailActions.generateDate(new Date()),
	 			comment: noteValue
	 		});
	 		DetailActions.updateStaff(staff, function (data) {
	 			if (data) {
	 				_this.setState({staff:staff});
	 			}
	 		});
	 	}
	},

	render: function() {
		if (this.state.loading) {
			return <span>Loading...</span>
		} else if (this.state.error) {
			return <span>Error: {this.state.error}</span>
		} else {
		var staffDetail = this.state.staff;
		var staffAvatar = staffDetail.avatar ?  '../' + staffDetail.avatar : null || '../images/img.png';
		var historyItems = staffDetail.history;
		var historyList = historyItems.map(function (item, index) {
			return <div key={index} className="history-item">
        <div className="title"><span className="date">{item.date}</span><a href="javascript:;" title="Close" className="close">&times;</a>
        </div>
        <div className="desc">
          <p>{item.comment}</p>
        </div>
      </div>
		});
		return <div><form id="edit-form" name="edit-form" className="form edit-form">
		  <div className="grid-fluid">
		    <div className="row">
		      <div className="col-sm-5 col-sm-push-7">
		        <div className="upload-block"><img avatar="avatar" src={staffAvatar} alt="avatar"/></div>
		      </div>
		      <div className="col-sm-7 col-sm-pull-5 info-block">
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>First name</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.firstname}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Last name</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.lastname}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Date of birth</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.dob}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Gender</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.gender}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Address</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.address}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>ID</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail._id}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Mobile</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.phone}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Skype</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.skype}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Email</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.email}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Join date</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.joinDate}</p>
		          </div>
		        </div>
		        <div className="row form-group">
		          <div className="col-sm-4">
		            <p>Department</p>
		          </div>
		          <div className="col-sm-8">
		            <p>{staffDetail.team.name}</p>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</form>
		<div className="history-block">
		  <h2 className="sub-heading">History:</h2>
		  <form id="history-form" name="historyform" onSubmit={this.addNote} novalidate="novalidate" className="form history-form">
		    <div className="grid-fluid">
		      <div className="history">
		        {historyList}
		      </div>
		      <div className="note-box text-center">
		        <textarea name="note" ref="note" id="note" placeholder="Write a note"></textarea>
		        <button type="submit" name="add-note" id="add-note" title="Add" className="button orange-btn">Add</button>
		      </div>
		    </div>
		  </form>
		</div></div>
		}
	}
});

module.exports = withRouter(StaffDetailController);