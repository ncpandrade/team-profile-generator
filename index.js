const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js')
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//array to store Employee objects created from user input below
const employees = [];

function run() {
    getMangerInfo()
    
}

// manager function -> that creates manager instance
function getMangerInfo() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "what is the manager's name"

    },
    {
        type: "input",
        name: "id",
        message: "what is the manager's id"

    },
    {
        type: "input",
        name: "email",
        message: "what is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "what is the manager's office number?"
    },
    // {
    //     type: "list",
    //     message: "Which type of team member would you like to add?",
    //     name: "role",
    //     choices: ["Engineer", "Intern", "no more"]
    // },
    ])
        .then(({ name, id, email, officeNumber }) => { //push manager object to employees array
            
            employees.push(new Manager(name, parseInt(id), email, parseInt(officeNumber)));
            enterEmployee();
        })
}

//get user input for employee type or stop user input if no more employees to add
function enterEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern", "no more team members to add"]
        },            
    ]).then(({ role }) => {
        if (role === 'no more team members to add') {
            // write to file
            fs.writeFile('index.html', generatePage(employees), err => {
                if (err) throw new Error(err);
            
                console.log('Team profile complete! Check out index.html to see the output!');
                console.log(employees);
            });
            return;
        }
        getEmployeeInfo(role).then(() => {
            enterEmployee();
        })
    });
}

//base prompts for every type of employee to be concatenated with employee type specific prompts below
const basePrompts = [{
    type: "input",
    message: "what is the employee's name",
    name: "name"
}, {
    type: "input",
    message: "what is the employee's email",
    name: "email"
}, {
    type: "input",
    message: "what is the employee's id",
    name: "id"
}];

//create prompts based on role (Engineer or Intern) selected
//basePrompts are concatenated
function getPromptByRole(role) {
    if (role === 'Intern') return basePrompts.concat([
      {
        type: "input",
        message: "what is the intern's school",
        name: "school"
      }  
    ]);
    return basePrompts.concat([
        {
            type: "input",
            message: "what is the engineer's github username",
            name: "github"
        }
    ]);
}

//create Employee instance from user input
function getEmployeeInfo(role) {
    return inquirer.prompt(getPromptByRole(role))
        .then(({ name, id, email, school, github }) => {
            let emp;
            if (role === 'intern') {
                emp = new Intern(role, name, id, email, school);
            } else {
                emp = new Engineer(role, name, id, email, github);
            }

            //push new employee instances to employees array
            employees.push(emp);


        })
}

//write html.index file
// need to pass argument to generatePage-> employees array????



run();
