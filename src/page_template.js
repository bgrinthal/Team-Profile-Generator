// import classes
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")

const path = require("path");
const fs = require("fs");

// creates manager html code using input
const generateManager = (mngr) => {
  console.log(mngr);
  console.log(mngr[0].mngrName);
  return `
<div class="card border border-primary m-3" style="width: 18rem;">
  <div class="card-header bg-info">
  <h2 class="card-title">${mngr[0].mngrName}</h2>
  <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Manager</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${mngr[0].mngrID}</li>
      <li class="list-group-item">Email: <a href="mailto:${mngr[0].mngrEmail}">${mngr[0].mngrEmail}</a></li>
      <li class="list-group-item">Office number: ${mngr[0].mngrNumber}</li>
    </ul>
  </div>
</div>
  `
}

// crates engineer html code using inpute.  Loops over input to pull out just "engineer" related answers
const generateEngineer = (eng) => {
  console.log(eng);
  console.log(eng[0].engName);
  for (i = 0; i < eng.length; i++) {
    if (((Object.keys(eng[i]))[0]) === "engName") {
      return `
      <div class="card border border-primary m-3" style="width: 18rem;">
        <div class="card-header bg-info">
        <h2 class="card-title">${eng[i].engName}</h2>
        <h3 class="card-title"><i class="fa fa-solid fa-brain"></i>Engineer</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${eng[i].engID}</li>
            <li class="list-group-item">Email: <a href="mailto:${eng[i].engName}">${eng[i].engName}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${eng[i].engGithub}" target="_blank">${eng[i].engGitHub}</a></li>
          </ul>
        </div>
      </div>
        `
    }
  }
};


// crates engineer html code using inpute.  Loops over input to pull out just "intern" related answers
const generateIntern = (intern) => {
  for (i = 0; i < intern.length; i++) {
    if (((Object.keys(intern[i]))[0]) === "internName") {
      return `
<div class="card border border-primary m-3" style="width: 18rem;">
  <div class="card-header bg-info">
  <h2 class="card-title">${intern[i].internName}</h2>
  <h3 class="card-title"><i class="fa fa-solid fa-graduation-cap"></i>Intern</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern[i].internID}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern[i].internEmail}">${intern[i].internEmail}</a></li>
      <li class="list-group-item">School: ${intern[i].internSchool}</li>
    </ul>
  </div>
</div>
  `
    }
  }
}

// creating team templates.  Loops through input and pushes above html code into a single array
const teamTemplate = (team) => {

  teamMember = [];

  for (let i = 0; i < team.length; i++) {
    console.log(team);
    console.log((Object.keys(team[i]))[0])
    if ((Object.keys(team[i]))[0] === "mngrName") {
      teamMember.push(generateManager(team));
    } else if (((Object.keys(team[i]))[0]) === "engName") {
      teamMember.push(generateEngineer(team));
    } else {
      teamMember.push(generateIntern(team));
    }
  }
  return teamMember.join("");
};


// inital "set up" html with above function combining remaining dynamically generated HTML code
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${teamTemplate(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};