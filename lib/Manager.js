// Import parent Employee class
const Employee = require("./Employee")

// Create Manager class inheriting Empoyee class
class Manager extends Employee {
  //  * create constructor with parameters for id, name, email, office number and set properties (member variables) respectively

  constructor(name, id, email, number) {
    //    instant variables
    super(name, id, email);
    this.number = number;
  }

  getRole() {
    return "Manager";
  }
  
  getNumber() {
    return this.number;
  }
}

// export
module.exports = Manager;