const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
       
    }
    // getName() {
    //     return this.name
    // }

    // getId() {
    //     return this.id
    // }

    // getEmail() {
    //     return this.email
    // }

    getGithub() {
        return "Github"
    }

    getRole() {
        return "Engineer"
    }

  }

module.exports = Engineer;


