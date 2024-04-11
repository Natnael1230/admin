const mysql2 = require("mysql2");

// // development
const dbConnection = mysql2.createPool({
	user: "admin",
	database: "admin",
	host: "localhost",
	password: "12345",
	connectionLimit: 10,
});


dbConnection.execute("select 'test'");
// dbConnection

module.exports = dbConnection.promise();
