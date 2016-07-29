var mongoose = require( 'mongoose');
var Schema   = mongoose.Schema;

var StaffSchema = new Schema({
  staffId: String,
  firstname: String,
  lastname: String,
  dob: String,
  gender: String,
  address: String,
  phone: String,
  skype: String,
  email: String,
  joinDate: String,
  team: { type: Schema.Types.ObjectId, ref: 'teams' },
  avatar: String,
  history: Array
});

var staffModel = mongoose.model('staffs', StaffSchema);

module.exports = {
  schema: StaffSchema,
  model: staffModel
}