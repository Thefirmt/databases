var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.sqlConnection.query('SELECT * FROM messages', function(err, dataRows) {
        if (err) {
          throw error('bad');
        } else {
          callback(dataRows);
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      // const {username, room, msg} = data;
      var username = data.username;
      var room = data.roomname;
      var msg = data.message;
      db.sqlConnection.query(`INSERT INTO messages(id, message, created_on, roomname, username) VALUES(null, "${msg}", null, "${room}", "${username}")`, function(err, data) {
        if (err) {
          throw err;
        } else {
          console.log('posted a message!');
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (data, callback) {
      var username = data.username;
      db.sqlConnection.query(`INSERT INTO users (id, username) VALUES (null, '${username}')`, function(err, data) {
        if (err) {
          throw err;
        } else {
          console.log('posted a message!');
        }
      });
    }
  }
};

