# juanferreras.com #

![Screenshot](https://www.juanferreras.com/img/email-header.jpg)

You can see it live at [juanferreras.com](http://juanferreras.com). It uses Express/Node.js with [nodemailer](https://github.com/nodemailer/nodemailer) to process the form and send the e-mails through Amazon's SES.

### Building ###

* `brew install npm` on OSX to install it (or any other way of obtaining npm)
* `npm install` to grab all the required dependencies.

You'd need a `config.js` file on `/` containing something like the following.
```javascript
module.exports = {
  mailer: {
    auth: {
      accessKeyId: 'Access Key Here',
      secretAccessKey: 'Secret Access Key Here',
      region: 'your region'
    },
    defaultFromAddress: 'from@email.com',
    defaultToAddress: 'to@email.com'
  }
};
```