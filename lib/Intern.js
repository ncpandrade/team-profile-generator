const Employee = require('../lib/Employee.js')


class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email); // call the super class constructor and pass in the name parameter
      this.school = school;
    }
    getRole()  { return 'Intern' }
    getSchool() {return this.school}
    
}



module.exports = Intern;