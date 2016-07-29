var React = require('react');

var UserFormController = React.createClass({

	render: function () {
		return <form id="add-form" name="add-form" className="form add-form">
			<div className="grid-fluid">
				<div className="row">
					<div className="col-sm-5 col-sm-push-7">
						<div className="upload-block"><img src="/images/img.png" alt="username" avatar="avatar" />
							<div className="upload"><img className="icon-photo"/>
								<p>Choose images<br/>format available JPG, PNG, GIF</p>
								<input id="upload-img" type="file" name="upload-image" accept="image/*" />
							</div>
						</div>
					</div>
					<div className="col-sm-7 col-sm-pull-5">
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="first-name">First Name:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="first-name" id="first-name" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="last-name">Last Name:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="last-name" id="last-name" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="date-birth">Date of birth:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="date-birth" id="date-birth" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label>Gender:</label>
							</div>
							<div className="col-sm-8">
								<div className="radio-group left">
									<input id="male" type="radio" name="gender" value="male" />
									<label for="male">Male</label>
								</div>
								<div className="radio-group left">
									<input id="female" type="radio" name="gender" value="female" />
									<label for="female">Female</label>
								</div>
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="address">Address:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="address" id="address" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="mobile">Mobile:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="mobile" id="mobile" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="skype">Skype:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="skype" id="skype" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="email">Email:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="email" id="email" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="join-date">Join Date:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="join-date" id="join-date" />
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4">
								<label for="department">Department:</label>
							</div>
							<div className="col-sm-8">
								<select >
									<option value="">-- Choose department --</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<button type="submit" name="add" id="add" title="Add" className="button orange-btn">Add</button>
				</div>
			</div>
		</form>
	}
});

module.exports = UserFormController;