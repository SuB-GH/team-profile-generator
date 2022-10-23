const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }
    
    getOfficeNum() {
        return this.officeNum
    }

    getRole() {
        return "Manager"
    }

  }

module.exports = Manager;