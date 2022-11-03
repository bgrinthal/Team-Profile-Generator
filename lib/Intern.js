// Import parent Employee class
const Employee = require("./Employee")

// Create Intern class inheriting Employee class
class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

// Export
module.exports = Intern;