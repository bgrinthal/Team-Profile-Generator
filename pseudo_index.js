/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Imports classes for Manager, Engineer, Intern
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

// Imports external package inquirer
const inquirer = require('inquirer');
// Imports path
const path = require('path');
// Imports fs
const fs = require('fs');

// Imports page template source file
const pageTemplate = require("./src/page_template");
// Create variables for the folder and the html file name
const profileFolder = "profile_repo"
const profileHTML = "profile_html"
// Create an empty array to store the team member objects
const teamAr = [];
// Create an empty array to store employee IDs to be used to check for the dupliates
const employeeIDAr = [];
// **********************
// Main Pfocess
// **********************

// Call the starter function

// starter function to start the program
//
//  1a. call create manager function
createManager();

//  1b. function to create manager
function createManager() {
  //      - inquire for manager's name, id, email, and office number
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
    //      - in .then callback, create manager object from the Manager class by initializing it with the properties in answer object
    .then((answer) => {
      // console.log(answer);
      const mngr = (({ mngrName, mngrID, mngrEmail, mngrNumber }) => ({ mngrName, mngrID, mngrEmail, mngrNumber }))(answer);
      console.log(mngr);
      //      - push the manager object to the empty team memeber object array
      teamAr.push(mngr);
      //      - push the manager's id to the empty id array
      employeeIDAr.push(mngr.mngrID);

      console.log(teamAr);
      console.log(employeeIDAr);

      //      - call create team function
      createTeam();

    }
    );
}

//  2. function to create team (called from create manager, add engineer, add intern functions)
function createManager() {
  //      - inquire user to pick employee from the list of engineer, intern, or exit (done with adding employees)
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employee',
        message: 'Choose an employee',
        choices: [
          "Engineer",
          "Intern",
          "Exit",
        ]
      },
    ])
    //      - in .then callback, based on user's choice, call add engineer or add intern or, for the choice of exit, call build team function
    .then((answer) => {
      if (answer === "Engineer") {
        addEngineer();
      } else if (answer === "Intern") {
        addIntern();
      } else {
        buildTeam();
      }
    }
    )
}

//
//  3. function to add engineer
function addEngineer() {
  //      - inquire user to enter engineer's name, id, email, and github
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

    .then((answer) => {
      //      - in .then callbackl create engineer object from the Engineer class by initializing it with the properties in answer object
      const eng = (({ engName, engID, engEmail, engGitHub }) => ({ engName, engID, engEmail, engGitHub }))(answer);
      //      - push the engineer object to the empty team member object array
      teamAr.push(eng);
      //      - push the engineer's id to the empty id array
      employeeIDAr.push(eng.engID);
      //      - call create team function
      buildTeam()
    })
}


//
//  4. function to add intern
function addEngineer() {
  //      - inquire user to enter intern's name, id, email, and school
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
    //      - in .then callback, create intern object from the intern class by initializing it with the properties in answer object
    .then((answer) => {
      const intern = (({ internName, internID, internEmail, internGitHub }) => ({ internName, internID, internEmail, internGitHub }))(answer);
      //      - push the intern object to the empty team member object array
      teamAr.push(intern);
      //      - push the intern's id to the empty id array
      employeeIDAr.push(intern.internID);
      //      - call create team function
      buildTeam()
    })
}

//
//  5. function build team
function buildTeam() {
//      - check if the output folder path already exists.
//      -   if not, create it
//      - call page template function passing the team member object array as input argument
//      - write the returned template function to the output
//
//      - Hint: fs.existsSync, fs.mkdirSync, and fs.writeFileSync
}
