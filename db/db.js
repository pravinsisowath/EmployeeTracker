const mysql = require("mysql")

const connection = mysql.createConnection({
	host: "localhost",
	port: 3000,
	user: "pravinsisowath",
	password: "rootroot",
	database: "employee_trackerDB",
})

connection.connect(function(err) {
	if (err) throw err;
})

module.exports = connection
