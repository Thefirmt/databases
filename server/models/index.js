var db = require('../db');

module.exports = {
  messages: {
    get: function () {
    	//sql join for all mesages  
    	db.query('SELECT * FROM messages JOIN   ', function(err, data) {
    		if(err) {
    			throw new error('bad');
    		} else {
    			callback(data);
    		}
    	});
    }, // a function which produces all the messages
    post: function () {
    	db.query('', function(err, data) {
    		if(err) {
    			throw error('bad');
    		} else {
    			callback('you posted a message!');
    		}
    	});
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {

    }
  }
};

