var staff = require('./staff');
var team = require('./team');
var user = require('./user');

module.exports = {
  staff: staff.model,
  team: team.model,
  user: user.model
}
