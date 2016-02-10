var express = require('express');
var bodyParser = require('body-parser');
var mailer = require('./mailer');

var router = express.Router();
router.use(bodyParser.json());

router.route('/')
  .post(function (req, res, next) {

    var locals = {
      name: req.body.name,
      project: req.body.project,
      budget: req.body.budget,
      email: req.body.email
    };

    mailer.prepareFields(locals, function(){
      mailer.sendOne(locals, function(err, info){
        if (err) console.log(err);
      })
    });

  })
  .all(function (req, res, next) { 
    res.status(404).send({ error: 'Not found.' });
  });

module.exports = router;