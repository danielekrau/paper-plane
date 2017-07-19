var express = require('express');
var router = express.Router();

var ctrl = require('../middleware/countries.js');

/* GET home page. */
router.get('/', ctrl.getHome);

/* POST search. */
router.post('/search', ctrl.searchCountry);

/* GET countries in a continent. */
router.get('/countries/:id', ctrl.searchContinent);

module.exports = router;
