var connection = require('../config/connection.js');

function printQuestionMarks(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push('?')
  };

  return arr.toString();
};

function objToSql(ob){
  
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  };

  return arr.toString();
};

var orm = {

};

module.exports=orm;