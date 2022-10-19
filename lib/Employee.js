// this is the "parent" object
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}

// function Employee() { }

// //this function is referenced in index.js
// Employee.prototype.assignName = function () {
//     return `${this.name}'s name is now ${this.name}!`;
// }

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
