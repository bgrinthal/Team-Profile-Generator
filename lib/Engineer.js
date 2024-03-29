
// Import parent Employee class 
const Employee = require("./Employee");

// Create Engineer class
class Engineer extends Employee{
  constructor(name, id, email, github) {
    //  instant variables
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.github;
  }
}

// Export
module.exports = Engineer;