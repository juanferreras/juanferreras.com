var express = require('express');
var bodyParser = require('body-parser');
var mailer = require('./mailer');

var router = express.Router();
router.use(bodyParser.json());

router.route('/')
  .get(function (req, res, next) {
    res.render('index', {lang: req.i18n.getLocale()})
  })
  .post(function (req, res, next) {
    var locals = {
      name: req.body.name,
      project: req.body.project,
      budget: req.body.budget,
      email: req.body.email
    };
    mailer.prepareFields(locals, function(){
      mailer.sendOne(locals, function(err, info){
        if (err) {
          res.send({ error: err });
        }
        else {
          res.send({ success: info });
        }
      })
    });
  })
  .all(function (req, res, next) { 
    res.status(404).send({ error: 'Not found.' });
  });

router.route('/resume')
  .get(function (req, res, next) {
    res.render('resume', {})
  })
  .all(function (req, res, next) { 
    res.status(404).send({ error: 'Not found.' });
  });

module.exports = router;