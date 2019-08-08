var models = require('../models');
// var models = models.messages;

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get((data)=> {
        console.log(data);
        res.send(data);
      });
      // model.get('data', (req, res) => {
      //   res.send();
      // })
    }, // a  which hand =>les a get request for all messages
    post: (req, res) => {
      // req(data) => {
      // models.post(data) => {
      // }
      var data = req.body;
      console.log(data);
      models.messages.post(data);
      res.send('breath of the wild');
    } // a  which hand =>les posting a message to the database
  },

  users: {
    // Ditto as above
    // models : models.users,

    get: (req, res) => {},
    post: (req, res) => {
      var data = req.body;
      models.users.post(data);
      res.send('breath of the wild');
    }
  }
};

