var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  password: String
});

var userModel = mongoose.model('users', UserSchema);


module.exports = {
  schema: UserSchema,
  model: userModel
}
