var mysql = require("mysql");
var inquirer = require("inquirer");
// create info for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
//username
    user: "root",

// Your Password

    password: "",
    database: ""
});

//questions for the customers.
//Make to the sart for the node contect to sql
// Import the products list into the console and display as an array
//update the prdouct qunaity, sales and product name
//

function displayProducts () {

}


function start() {
    connection.connect(function(err){
        if (err) throw err;
        displayProducts();
    })
}

function customerChoice(itemChoices) {
    inquirer
      .prompt([
        {
        name: "id",
        type: "list",
        choices: "itemChoices",
        message: "What is the ID of the product you would like to buy?"
        },
        {
        name: "units",
        type: "input",
        message: "How many would you like to buy"
        }
      ])
  
  }