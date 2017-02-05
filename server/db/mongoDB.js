var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenfield');
var db = mongoose.connection;

var userSchema = mongoose.Schema({
	name: String,
	password: String,
	recentQueries: Array
});

exports.users = mongoose.model('users', userSchema);
