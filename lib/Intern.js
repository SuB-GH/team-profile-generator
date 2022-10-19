const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        
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

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
  }

// function Intern(name) {
//     this.name = name;
//     this.school = 'University of Wisconsin';

//     if (this.name === 'Aidan') { }
// }

// Intern.prototype.getSchool = function () {
//     return {
//        school: this.schoolr
//     }
// }

module.exports = Intern;