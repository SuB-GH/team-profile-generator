const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = this.officeNum;
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

    getOfficeNum() {
        return this.officeNum
    }

    getRole() {
        return "Manager"
    }

  }

module.exports = Manager;

// function Manager(name) {
//     this.name = name;
//     this.officeNum = '205';

//     if (this.name === 'Steve') { }
// }

// Manager.prototype.getRole = function () {
//     return {
//         officeNum: this.officeNum
//     }
// }

module.exports = Manager;