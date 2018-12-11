const db = require("./connection.js");

function printQuestionMarks(num) {
   var qString = "";

   for (var i = 0; i < num; i++) {
      qString += "?";
   }
   
   return  qString;
}

function objToSql(obj) {
   var arr = [];

   for(var key in obj) {
      let value = obj[key];
      if(Object.hasOwnProperty.call(obj,key)) {
         if(typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
         }
         arr.push(key + "=" + value);
      }
   }
   return arr.toString();
}
var orm = {
   all: function(tableName, cb) {
      var queryString = "select * from ??";
      db.query(queryString, [tableName], (err,res) => {
         if(err) throw err;
         cb(res);
      });
   },
   create: function(tableName, column, values, cb) {
      var queryString = "INSERT INTO " + tableName;

      queryString += " (";
      queryString += column.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(values.length);
      queryString += ") ";

      db.query(queryString, values, function(err, result) {
         if (err) throw err;
         cb(result);
       });
   },
   update: function(tableName, objVals, condition, cb) {
      var queryString = "UPDATE " + tableName;

      queryString += " SET ";
      queryString += objToSql(objVals);
      queryString += " WHERE ";
      queryString += condition;

      db.query(queryString, function(err, result) {
         if (err) throw err;
         cb(result);
      });
   },
}

module.exports = orm;