var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fizzBuzz', function(req, res, next) {
  res.render('fizzBuzz', { title: 'fizzBuzz' });
});

router.get('/cadena', function(req, res, next) {
  res.render('cadena', { title: 'cadena' });
});

router.get('/rango', function(req, res, next) {
  res.render('rango', { title: 'rango' });
});
module.exports = router;
