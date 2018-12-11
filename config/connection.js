const mysql = require("mysql");

var con = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "Steelers1",
   database: "burgers_db"
});

con.connect((err) => {
   if(err) throw err;
   console.log("Connected as " +con.threadId);
});

module.exports = con;
