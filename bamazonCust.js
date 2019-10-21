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

//Product Function. Where questions start 

//Quantity Function. Where customers pick and choose what product they want.

// For loop for when actions are performed to update the database.

//Ending shopping function (IF ELSE).

//Update Function for the store to update quantity.

//Out of Stock Function (IF ELSE).