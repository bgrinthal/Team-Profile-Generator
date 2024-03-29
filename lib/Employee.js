
// Employess class used as parent to others
class Employee {
  //  constructor
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  //  get methods returning properties
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee"
  }
}

// Export class
module.exports = Employee;

