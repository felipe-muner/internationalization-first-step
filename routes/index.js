var express = require('express');
var router = express.Router();
var i18n = require('i18n')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
