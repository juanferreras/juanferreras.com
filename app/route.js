var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

router.route('/')
  .get(function (req, res, next) {
    res.render('index', {lang: req.i18n.getLocale()})
  })
  .all(function (req, res, next) { 
    res.status(404).render('404', {})
  });
  
router.route('*')
  .all(function (req, res, next) { 
    res.status(404).render('404', {})
  });

module.exports = router;