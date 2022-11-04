// Imports classes for Manager, Engineer, Intern
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Imports external package inquirer, path, fs
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Imports page template source file
const pageTemplate = require("./src/page_template");
// variables for the folder and the html file name (didnt use)
const profileFolder = "profile_repo"
const profileHTML = "profile_html"
// Empty array to store the team member objects
const teamAr = [];

// Call the starter function
createManager();

//  Inquirer function to prompt manager inputs
function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the managers name?',
        name: 'mngrName',
      },
      {
        type: 'input',
        message: 'What is the managers ID?',
        name: 'mngrID',
      },
      {
        type: 'input',
        message: 'What is the managers email?',
        name: 'mngrEmail',
      },
      {
        type: 'input',
        message: 'What is the ofice number?',
        name: 'mngrNumber',
      },
    ])
    .then(answers => {
      const manager = new Manager(answers.mngrName, answers.mngrID, answers.mngrEmail, answers.mngrNumber);
      teamAr.push(manager);
      buildTeam();
    });
}

//  Function to build team called from manager, intern, and engineer function
function buildTeam() {
  // Prompt to choose next employee or to stop adding employees
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employee',
        message: 'Choose an employee',
        choices: [
          "Engineer",
          "Intern",
          "Done",
        ]
      },
    ])
    .then((answer) => {
      console.log(answer.employee);
      if (answer.employee === "Engineer") {
        addEngineer();
      } else if (answer.employee === "Intern") {
        addIntern();
      } else {
        createTeam();
      }
    }
    )
}


//  function to add engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engName',
      },
      {
        type: 'input',
        message: 'What is the engineers ID?',
        name: 'engID',
      },
      {
        type: 'input',
        message: 'What is the engineers email?',
        name: 'engEmail',
      },
      {
        type: 'input',
        message: 'What is the engineers github username?',
        name: 'engGitHub',
      },
    ])

    .then(answers => {
      const engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGitHub);
      teamAr.push(engineer);
      buildTeam();
    });
}


//
//  function to add intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the interns name?',
        name: 'internName',
      },
      {
        type: 'input',
        message: 'What is the interns ID?',
        name: 'internID',
      },
      {
        type: 'input',
        message: 'What is the interns email?',
        name: 'internEmail',
      },
      {
        type: 'input',
        message: 'What is the interns school?',
        name: 'internSchool',
      },
    ])

    .then(answers => {
      const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
      teamAr.push(intern);
      buildTeam();
    });
}

//
//  function build team
function createTeam() {
//   checks if filepath already exists.  If not, creates one
  if (fs.existsSync("./dist/my_team.html")) {
    return prompt("Team already created.  Remove to create another one.")
  } else {
    fs.writeFile('./dist/my_team.html', pageTemplate(teamAr), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!', teamAr))
  }
}

