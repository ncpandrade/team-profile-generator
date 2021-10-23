const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//array to store Employee objects created from user input below
const employees = [];

function run() {
    getMangerInfo()
    getEmployeeInfo();
}

//create manager function -> that creates manager object
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
        message: "what is the manager's email"

    },
    {
        type: "input",
        name: "officeNumber",
        message: "what is the manager's office number?"


    }
    ])
        .then(({ name, id, email, officeNumber }) => { //push manager object to employees array
            console.log("typeof: " + typeof { name, id, email, officeNumber }); //is this an object??
            employees.push(new Manager(name, parseInt(id), email, parseInt(officeNumber)));
        })
}
//create Employee object from user input
function getEmployeeInfo() {
    inquirer.prompt([{
        type: "list",
        message: "what is the employees role",
        name: "role",
        choices: ["engineer", "intern"]
    }, {
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
    }])
        .then(({ name, id, email }) => {
            //push Employee object to employees array
            employees.push(new Employee(name, email, parseInt(id)));
            // here, create the relevant employee object;

            //CALL getEmployeeInfo again if another employee is entered
            getEmployeeInfo();
        })
}

//write html.index file
//need to pass argument to generatePage-> employees array????
fs.writeFile('index.html', generatePage(employees), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

run();
