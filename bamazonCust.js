//Initializing database and using require.
var inquirer = require("inquirer");
var mysql = require("mysql");

// Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tightjet70",
    database: "bamazon"
});

// Connection Function

connection.connect(function(err) {
    if (err)
        throw err;
});