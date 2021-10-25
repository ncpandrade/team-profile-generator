//create helper function for each type of employee
//Manager
const managerTemplate = (employees) => `
<div>
  <h1>${employees.name}</h1>
  <h2>${employees.role}<h2>
<div>
`

//Engineer
const engineerTemplate = (employees) => `
<div>
  <h1>${employees.name}</h1>
  <h2>${employees.role}<h2>
<div>
`

//Intern
const internTemplate = (employees) => `
<div>
  <h1>${employees.name}</h1>
  <h2>${employees.role}<h2>
<div>
`

//FUNCTION to receive class instances and inserts them to HTML template literal
const generatePage = (employees) => `
<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team-Profile</title>
</head>

<body>
//getting error cannot read property of map
//is this b/c this.employees is not correct, does not include data yet?
  ${employees.map((empObj) => {
  if (employees.role === 'Manager') {
    managerTemplate(empObj)
  }
  else if (employees.role === 'Engineer') {
    engineerTemplate(empObj)
  }
  else {
    internTemplate(empObj)
  }
})
  }


  <h2><a href="https://github.com/">Github</a></h2>
</body>
</html>
`;

module.exports = generatePage;