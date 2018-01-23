var orm = require('../config/orm.js');


//burger declaration
var burger = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },
//inserts burgers
  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(res){
      callback(res);
    });
  },
//updates data
  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }

};



module.exports = burger;