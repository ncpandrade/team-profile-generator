const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName()  { return this.name }

    getId()  { return this.id }

    getEmail() { return this.email };
  };
 

  //getName() FUNCTION using inquirer
  //CAN THIS BE CHANGED TO SIMPLY GETNAME() {}??? SINCE ITS IN ANOTHER MODULE?
  Employee.prototype.getName = function () {
      inquirer
          .prompt({
              type: 'text',
              name: 'name',
              message: "What is the employee's name?"
          })
          // destructure name from the prompt object
          .then(({ name }) => {
              this.employee = new Employee(name);
  
  
          });
          
  }


//getId() FUNCTION using inquirer
//getEmail() FUNCTION using inquirer
//getRole() FUNCTION using inquirer

module.exports = Employee;
