const Employee = require('../lib/Employee.js');

function Engineer(name) {
    this.name = name;
    this.github = 'github link goes here';

    if (this.name === 'Sandy') { }
}

// Engineer.prototype.getgithub = function () {
//     return {
//         github: this.github
//     }
// }

module.exports = Engineer;