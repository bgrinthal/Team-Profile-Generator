/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Create Employee class to be used as parent for all other employees
class Employee {
  //  create constructor with parameters for id, name, email and set member variables (properties) respectively
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";
  }
  //  creat get name method which returns name property
  getName() {
    return this.name;
  }
  //  create get id method which returns id property
  getId() {
    return this.id;
  }
  //  create get email method which returns email property
  getEmail() {
    return this.email;
  }
  //  create get role method which returns role property
  getEmail() {
    return this.role;
  }
  // Exports Employee class
}


module.exports = Employee;

