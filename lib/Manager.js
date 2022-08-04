const Employee = require('../lib/Employee.js');

function Manager(name) {
    this.name = name;
    this.officeNum = '205';

    if (this.name === 'Steve') { }
}

// Manager.prototype.getRole = function () {
//     return {
//         officeNum: this.officeNum
//     }
// }

module.exports = Manager;