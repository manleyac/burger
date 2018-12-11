const orm = require("../config/orm.js");

var table = "burgers";

var burger = {
   all: function(cb) {
      orm.all(table, (res) => {
         cb(res);
      });
   },
   create: function(column,values,cb) {
      orm.create(table,column,values,(res) => {
         cb(res);
      });
   },
   update: function(objVals, condition, cb) {
      orm.update(table, objVals, condition, function(res) {
         cb(res);
      }) ;
   }
}

module.exports = burger;
