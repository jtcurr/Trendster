var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenfield');
// CONNECTS TO MONGO DATABASE
var db = mongoose.connection;

// SETS UP USER SCHEMA FOR SIGNING UP NEW USERS
var userSchema = mongoose.Schema({
	username: String,
	password: String,
	recentQueries: Array
});

exports.users = mongoose.model('users', userSchema);
