var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.sqlConnection.connect();
      db.sqlConnection.query('SELECT * FROM messages', function(err, dataRows) {
        if (err) {
          throw error('bad');
          db.sqlConnection.end();
        } else {
          callback(dataRows);
          db.sqlConnection.end();
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      // const {username, room, msg} = data;
      db.sqlConnection.connect();
      var username = data.username;
      var room = data.roomname;
      var msg = data.message;

      db.sqlConnection.query(`INSERT INTO messages (id, message, created_on, room_id, user_id) VALUES (null, ${msg}, ${Date.now}, ${room}, ${username})`, function(err, data) {
        if (err) {
          throw error('bad');
          db.sqlConnection.end();
        } else {
          console.log('posted a message!');
          db.sqlConnection.end();
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (data, callback) {
      db.sqlConnection.connect();
      var username = data.username;
      db.query(`INSERT INTO users (id, username) VALUES (null, ${username})`, function(err, data) {
        if (err) {
          throw error('bad');
          db.sqlConnection.end();
        } else {
          console.log('posted a message!');
          db.sqlConnection.end();
        }
      });
    }
  }
};

