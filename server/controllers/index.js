var models = require('../models');
// var models = models.messages;

module.exports = {
  messages: {
    get: (req, res) => {
      res.send('breath of the wild');
      // model.get('data', (req, res) => {
      //   res.send();
      // })
    }, // a  which hand =>les a get request for all messages
    post: (req, res) => {
      // req(data) => {
      // models.post(data) => {
      // }
      // console.log(req);
      models.messages.post(req);
      res.send('breath of the wild');
    } // a  which hand =>les posting a message to the database
  },

  users: {
    // Ditto as above
    // models : models.users,

    get: (req, res) => {},
    post: (req, res) => {
      // console.log(req);
      var data = req.body;
      models.users.post(data);
      res.send('breath of the wild');
    }
  }
};

