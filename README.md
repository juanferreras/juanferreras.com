# juanferreras.com #

You can see it live at [juanferreras.com](http://juanferreras.com)

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
