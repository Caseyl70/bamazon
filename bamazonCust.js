//Initializing database and using require.
var inquirer = require("inquirer");
var mysql = require("mysql");
var totalPurchaseAmount = 0;
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
    displayData();
});

function displayData() {
    connection.query("SELECT * FROM products", function(err, results) {
        console.table(results);
        question1(results);
    })
}

//Product Function. Where questions start / starting off the questions
function question1(res) {
    inquirer.prompt([{
            type: "input",
            name: "item_id",
            message: "What product would you like to purchase? (Use Item Id)",
        }])
        .then(function(ans) {
            var userInput = ans.item_id;
            var product = res.filter(function(row) {
                return (row.item_id == userInput);
            })[0];
            // console.log(product);
            question2(product);
        })
}

function question2(res) {
    inquirer.prompt([{
            type: "input",
            name: "stock_quantity",
            message: "How much would you like to purchase?",
        }])
        .then(function(ans) {
            var userInput = ans.stock_quantity;
            var stockTotal = parseInt(res.stock_quantity) - parseInt(userInput);
            if (stockTotal < 0) {
                console.log("Out of Stock.")
                displayData();
            } else {
                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ? ", [stockTotal, res.item_id],
                    function(err, results) {
                        if (err)
                            throw (err);
                        totalPurchaseAmount += parseFloat(results.price);
                        question3();


                    });
            }
        })
}

function question3() {
    inquirer.prompt([{
            type: "list",
            name: "exit",
            message: " Continue Shopping?",
            choices: ["No", "Yes"]
        }])
        .then(function(ans) {
            if (ans.exit === "No") {
                console.log("Thank you For shopping With us! Come Back Soon.");

            } else {
                question1();
            }

        })
}