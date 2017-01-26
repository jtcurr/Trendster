var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');

mongoose.connect('mongodb://localhost/greenfield');
var db = mongoose.connecttion;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var trySchema = mongoose.Schema({
  name: String,
  age: String
});

var users = mongoose.model('users', trySchema);
var user = new users({name:'Max', age:'24'});
user.save();



app.get('/', function(req, res) {
	res.send('Hiii')
});
app.listen(8000);