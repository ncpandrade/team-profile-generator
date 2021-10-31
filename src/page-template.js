//create helper function for each type of employee
//Manager
const managerTemplate = (employees) => `
<div class="col-sm-4" style="margin-top: 50px;">
  <div class="card" style="width: 20rem;">
  <div class="card-header bg-primary">
  <h1 class="card-title bg-primary">${employees.name}</h1>
  <h2 class = "card-subtitle"><i class="fas fa-mug-hot"></i>${employees.getRole()}<h2>
  </div>
  <div class="card-body">
    <ul class="list-group text-left">
      <li class="list-group-item">ID:${employees.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${employees.email}">${employees.email}</a></li>
      <li class="list-group-item">Office number:${employees.officeNumber}</li>
    </ul>
    </div>
  </div>
</div>
  `

//Engineer
const engineerTemplate = (employees) => 
  `
    <div class="col-sm-4" style="margin-top: 50px;">
      <div class ="card" style="width: 20rem;">
        <div class="card-header bg-primary">
          <h1 class="card-title bg-primary">${employees.name}</h1>
          <h2 class = "card-subtitle"><i class="fas fa-glasses"></i>${employees.getRole()}<h2>
        </div>
        <div class ="card-body">
          <ul class="list-group text-left">
           <li class="list-group-item">ID:${employees.id}</li>
           <li class="list-group-item">Email:<a href="mailto:${employees.email}">${employees.email}</a></li>
           <li class="list-group-item">GitHub:<a target="_blank" href="https://github.com/${employees.github}">Github</a></li>
          </ul>
        </div>
        </div>
      </div>
`;

//Intern
const internTemplate = (employees) => `
<div class="col-sm-4" style="margin-top: 50px;">
  <div class ="card" style="width: 20rem;">
    <div class="card-header bg-primary">
      <h1 class="card-title bg-primary">${employees.name}</h1>
      <h2 class = "card-subtitle"><i class="fas fa-user-graduate"></i>${employees.getRole()}<h2>
    </div>
  <div class ="card-body">
    <ul class="list-group text-left">
      <li class="list-group-item">ID:${employees.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${employees.email}">${employees.email}</a></li>
      <li class="list-group-item">School:${employees.school}</li>
    </ul>
  </div>
</div>
</div>
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
</head>
<body>
<div class="text-center">
<div class="p-4 mb-2 bg-danger text-white">My Team</div>
  <div class="row container" style="margin: 2em auto 2em;">
    <div class="row justify-content-md-center">
      ${employees.map((person) => {
  console.log(`person.role: ${person.getRole()}`)
  if (person.getRole() === 'Manager') {
      console.log('generating manager');
      return managerTemplate(person)
    }
    else if (person.getRole() === 'Engineer') {
      console.log('generating Engineer');
      return engineerTemplate(person)
    }
    else {
      console.log('person');
        return internTemplate(person)
      }
      }).join("")
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