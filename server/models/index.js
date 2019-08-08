var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.sql_connection.connect();
      db.sql_connection.query('SELECT * FROM messages', function(err, dataRows) {
        if (err) {
          throw error('bad');
          db.sql_connection.end();
        } else {
          callback(dataRows);
          db.sql_connection.end();
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      // const {username, room, msg} = data;
      db.sql_connection.connect();
      var username = data.username;
      var room = data.roomname;
      var msg = data.message;

      db.sql_connection.query(`INSERT INTO messages (id, message, created_on, room_id, user_id) VALUES (null, ${msg}, ${Date.now}, ${room}, ${username})`, function(err, data) {
        if (err) {
          throw error('bad');
          db.sql_connection.end();
        } else {
          console.log('posted a message!');
          db.sql_connection.end();
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (data, callback) {
      db.sql_connection.connect();
      var username = data.username;
      db.query(`INSERT INTO users (id, username) VALUES (null, ${username})`, function(err, data) {
        if (err) {
          throw error('bad');
          db.sql_connection.end();
        } else {
          console.log('posted a message!');
          db.sql_connection.end();
        }
      });
    }
  }
};

