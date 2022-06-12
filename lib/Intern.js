/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Import parent Employee class by requiring it into your module
const Employee = require("./Employee")

// Create Intern class inheriting (extends) from Empoyee class
class Intern {
  //  * create constructor with parameters for id, name, email, school and set properties (member variables) respectively
//    - you may want to first initialize the parent's properties
  constructor(id, name, email, school) {
    super(id, name, email);
    this.role = "Intern"
    this.school = school;
  }
  
//  * create get role method which overwrites the parent get role method and returns Intern as role
//  * create get school method which returns school property
  getSchool(){
    return this.school;
  }
// Exports the Intern class
}

module.exports = Intern
