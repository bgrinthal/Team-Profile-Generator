/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Import parent Employee class by requiring it into your module
const Employee = require("./Employee")

// Create Manager class inheriting (extends) from Empoyee class
class Manager extends Employee {
  //  * create constructor with parameters for id, name, email, office number and set properties (member variables) respectively

  constructor(id, name, email, number) {
    //    - you may want to first initialize the parent's properties
    super(id, name, email);
    this.role = "Manager";
    this.number = number;
  }
  //  * create get role method which overwrites the parent get role method and returns Manager as role
  //  * create get office number method which returns office number property
  getNumber() {
    return this.number;
  }
  // Exports the Manager class

}

module.exports = Manager;