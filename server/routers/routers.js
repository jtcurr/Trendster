var express = require('express');
var requestPromise = require('request-promise');
var keys = require('../fourSquare/config/apiKeys.js');
var router = express.Router();


var baseUrl = 'https://api.foursquare.com/v2/';
var endPoint = 'venues/explore/?';
var params = 'near=';
var photos = '&venuePhotos=1';
var auth = '&client_id='+keys.client_Id+'&client_secret='+ keys.client_Secret+'&v=20170129'+'&limit=10'+'&query=';

router.post('/api/menus', function(req, res) {
	//if the location is two words, the foursquare api requires a '+' in between both words
	var location = req.body.location.split(' ').join('+');
	//if the keyword is two words, the foursquare api requires it to be on string with no spaces
	var query = req.body.keyword.split(' ').join('');

  requestPromise(baseUrl+endPoint+params+location+photos+auth+query).then(function(data) {
    res.send(data);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  })
});

module.exports = router;
