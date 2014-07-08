var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Boolean Ninja', controller: 'indexCtrl'});
});

module.exports = router;
