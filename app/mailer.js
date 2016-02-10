module.exports = (function() {
  var config = require('../config');
  var nodemailer = require('nodemailer');
  var sesTransport = require('nodemailer-ses-transport');
  var templatesDir = require('path').resolve(__dirname, '..', 'public_html/email');
  var EmailTemplate = require('email-templates').EmailTemplate;

  var defaultTransport = nodemailer.createTransport(sesTransport({
    accessKeyId: config.mailer.auth.accessKeyId,
    secretAccessKey: config.mailer.auth.secretAccessKey,
    region: config.mailer.auth.region,
    rateLimit: 5 
  }));

  var prepareBudget = function(int){
    switch(int){
      case "1000":
        return "less than $1,000";
        break;
      case "1000-3500":
        return "between $1,000 and $3,500";
        break;
      case "3500-7000":
        return "between $3,500 and $7,000";
        break;
      case "7000":
        return "more than $7,000";
        break;
    }
  }

  var prepareProject = function(str){
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, ' ').replace('-', ' ');
  };

  var prepareFields = function(locals, callback){
    locals.project = prepareProject(locals.project);
    locals.budget = prepareBudget(locals.budget);
    return callback();    
  };

  var sendOne = function(locals, callback){
    var transporter = defaultTransport;
    var send = transporter.templateSender(new EmailTemplate(templatesDir));
    var context = {
      name: locals.name,
      project: locals.project,
      budget: locals.budget,
      email: locals.email
    }
    var message = {
      from: config.mailer.defaultFromAddress,
      to: config.mailer.defaultToAddress,
      replyTo: locals.email,
      subject: 'Contact Submission by '+locals.name
    }
    send(message, context, function(err, info){
      if (err) {
        return callback(err);
      }
      return callback(null, info);
    });
  };

  return {
      prepareFields: prepareFields,
      sendOne: sendOne
  };
})();
