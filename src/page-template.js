//create helper function for each type of employee
//Manager
const managerTemplate = (employees) => `
<div class ="card-body">
  <h1 class="card-title bg-primary">${employees.name}</h1>
  <h2 class = "card-subtitle">${employees.getRole()}<h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${employees.id}</li>
    <li class="list-group-item"><a href="${employees.email}">${employees.email}</a></li>
    <li class="list-group-item">${employees.officeNumber}</li>
  </ul>
<div>
`

//Engineer
const engineerTemplate = (employees) => `
<div class ="card-body">
  <h1 class="card-title bg-primary">${employees.name}</h1>
  <h2 class = "card-subtitle">${employees.getRole()}<h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${employees.id}</li>
    <li class="list-group-item"><a href="${employees.email}">${employees.email}</a></li>
    <li class="list-group-item"><a href="https://github.com/${employees.github}">Github</a></li>
  </ul>
  
<div>
`

//Intern
const internTemplate = (employees) => `
<div class ="card-body">
  <h1 class="card-title bg-primary">${employees.name}</h1>
  <h2 class = "card-subtitle">${employees.getRole()}<h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${employees.id}</li>
    <li class="list-group-item"><a href="${employees.email}">${employees.email}</a></li>
    <li class="list-group-item">${employees.school}</li>
  </ul>
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
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body>
<div class="row">
  <div class="col-sm-6">
    <div class = card>
      ${employees.map((empObj) => {
      if (employees.role === 'Manager') {
        return managerTemplate(empObj)
      }
       else if (employees.role === 'Engineer') {
         return engineerTemplate(empObj)
       }
       else {
         return internTemplate(empObj)
       }
      })
      }
      </div>
    </div>
  </div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
`;

module.exports = generatePage;