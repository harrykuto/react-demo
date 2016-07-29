var React = require('react');
var Link = require('react-router').Link;
String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var BreadcrumbController = React.createClass({

	render: function () {
		var listBreadCrumb =  this.props.location.pathname.split('/');
		var btn = true;
		var breadCrumbEle = listBreadCrumb.map(function (breadcrumb, index) {
			if (breadcrumb && index !== listBreadCrumb.length - 1) {
				var href = breadcrumb;
				if (breadcrumb === 'staff'){
					href = '/staff/filter';
				}
				return <li key={index}><Link to={href}>{breadcrumb.capitalizeFirstLetter()}</Link></li>;
			} else if (breadcrumb.length){
				return <li key={index}><span className="active">{breadcrumb.capitalizeFirstLetter()}</span></li>;
			}
		});
		var link;
		if (btn) {
			link = <a href="/staff/add" title="Add" className="add">Add</a>;
		} else {
			link = <a href="/staff/edit" title="Edit" className="edit">Edit</a>
		}
		return <div><div className="inner">
		  <div className="breadcrumb-block">
		    <div className="grid-fluid">
		      <div className="row">
		        <div className="col-xs-10">
		          <ul className="breadcrumb">
		            {breadCrumbEle}
		          </ul>
		        </div>
		        <div className="col-xs-2 text-right">
		        	{link}
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		{this.props.children}
		</div>
	}
});

module.exports = BreadcrumbController;