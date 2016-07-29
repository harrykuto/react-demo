var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var TeamSchema = new Schema({
  name: String,
  staffs : [{ type: Schema.Types.ObjectId, ref: 'staffs' }]
});


var teamModel = mongoose.model('teams', TeamSchema);

module.exports = {
  schema: TeamSchema,
  model: teamModel
}