const inquirer = require("inquirer");

function Employee() { }

//this function is referenced in index.js
Employee.prototype.assignName = function () {
    return `${this.name}'s name is now ${this.name}!`;
}
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "What is your name?"

        })
//console.log(inquirer);



// need to add: 
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'


module.exports = Employee;

//console.log(new Employee().name);
