var countriesList = require('countries-list');
var CONTINENTS = countriesList.continents;
var COUNTRIES = countriesList.countries;
var CITIES = require('../data/world-cities.json')

var ex = module.exports;

// Get home data and render the page
ex.getHome = function(req, res, next) {
  res.render('index', { title: 'Express', continents: CONTINENTS, countries: [] });
}

// Search country for cities
ex.searchCountry = function(req, res, next) {
  var country = req.body.country;
  var ar = [];
  for(var i = 0; i < CITIES.length; i++) {
    if(CITIES[i].country == country) {
      ar.push(CITIES[i]);
    }
  }
  console.log(ar);
  res.render('countries', { layout: false, cities: ar, country: country });
}

// Get countries for a continent
ex.searchContinent = function(req, res, next) {
  var continent = req.params.id;
  var ar = [];
  for(var c in COUNTRIES) {
    if(COUNTRIES[c].continent == continent) {
      var t = COUNTRIES[c];
      COUNTRIES[c].id = c;
      ar.push(t);
    }
  }
  res.json(ar);
}
