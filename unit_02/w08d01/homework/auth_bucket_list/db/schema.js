var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//add ListSchema here
//your code
var ListSchema = new Schema({
  name: String,
  completed: Boolean
});

//add a ListSchema.pre function (just like UserSchema below)
ListSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  list: [ListSchema],
  created_at: Date,
  updated_at: Date
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

//var UserModel model
var UserModel = mongoose.model('User', UserSchema);
//var ListModel model
var ListModel = mongoose.model('List', ListSchema);

//export List below
module.exports = {
  User: UserModel,
  List: ListModel
};
