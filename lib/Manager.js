const Employee = require('../lib/Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email); // call the super class constructor and pass in the name, id, email parameters
      this.officeNumber = officeNumber;
    }
    getRole()  { return 'Manager' }

    }

    module.exports = Manager;