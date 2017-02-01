var express = require('express');
var requestPromise = require('request-promise');
var keys = require('../fourSquare/config/apiKeys.js');
var router = express.Router();


var baseUrl = 'https://api.foursquare.com/v2/';
var endPoint = 'venues/search/?';
var params = 'near=';
var auth = '&client_id='+keys.client_Id+'&client_secret='+ keys.client_Secret+'&v=20170129';

router.post('/api/menus', function(req, res) {
	console.log('This is the req body', req.body.location);
	var location = req.body.location.split(' ').join('+');

  requestPromise(baseUrl+endPoint+params+location+auth).then(function(data) {
    // data = JSON.parse(data);
    //console.log('----------------', data.response.venues);
    res.send(data);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  })
});

module.exports = router;
