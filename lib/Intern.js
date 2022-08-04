const Employee = require('../lib/Employee.js');

function Intern(name) {
    this.name = name;
    this.school = 'University of Wisconsin';

    if (this.name === 'Aidan') { }
}

// Intern.prototype.getSchool = function () {
//     return {
//        school: this.schoolr
//     }
// }

module.exports = Intern;