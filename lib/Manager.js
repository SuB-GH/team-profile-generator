// add: "const xxxx = require('../lib/xxxx');

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