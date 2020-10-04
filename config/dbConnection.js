var mysql = require("mysql");

var connMySQL = function(){
    console.log('coneão requisitada');
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "portal_noticias",
      });
}

module.exports = function () {
  return connMySQL; 
}
