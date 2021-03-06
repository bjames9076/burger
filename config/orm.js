

var connection = require('./connection.js');

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    };
    console.log('connected as id ' + connection.threadId);
  });
  



// Methods for MySQL commands
var orm = {

  // selectAll()
  selectAll: function(callback) {

    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) console.log(err);
      callback(result);
    });

  },
    // insertOne()
    insertOne: function(burger_name, callback){    
            
            connection.query('INSERT INTO burgers SET ?', {
              burger_name: burger_name,
              devoured: false,
            }, function (err, result) {
              if (err) console.log(err);
              callback(result);
            });
        
          },



  // updateOne()
  updateOne: function(burgerID, callback){

  
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) console.log(err);
        callback(result);
      });

  }

};



// Export the ORM object in module.exports.
module.exports = orm;