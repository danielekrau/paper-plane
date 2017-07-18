var express = require('express');
var router = express.Router();

var countriesList = require('countries-list');
var CONTINENTS = countriesList.continents;
var COUNTRIES = countriesList.countries;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', continents: CONTINENTS, countries: COUNTRIES });
});

/* POSt search. */
router.post('/search', function(req, res, next) {
  var data = req.body;
  res.json({});
});


module.exports = router;
