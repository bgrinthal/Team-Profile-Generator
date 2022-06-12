/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const Employee = require("../lib/Employee");

// test instantiation of employee instance
test("instantiation of employee instance", () => {
  const emp = new Employee();
  expect(typeof (emp)).toBe("object");
});

// test constructor initialized with a name
test("Can set name using constructor", () => {
  const name = "Ben";
  const emp = new Employee(Name);
  expect(emp.name).toBe(Name);
});

// test constructor initialized wtih an id
test("Can set id using constructor", () => {
  const value = 123;
  const emp = new Employee("Ben", 123);
  expect(emp.id).toBe(value);
});

// test constructor initialized with an email address
test("Can set email address using constrictor", () => {
  const value = "test@email.com";
  const emp = new Employee("Ben", 123, value);
  expect(emp.email).toBe(value);
});

// test get name method
test("Test get name method", () => {
  const value = "Ben"
  const emp = new Employee(value);
  expect(emp.getName()).toBe(value);
});

// test get Id method
test("Test get id method", () => {
  const value = 123;
  const emp = new Employee("Ben", value);
  expect(emp.getId()).toBe(value);
});

// test get email method
test("Test get email method", () => {
  const value = "test@email.com"
  const emp = new Employee("Ben", 123, value);
  expect(emp.getEmail()).toBe(value);
});

// test get role method. it should return "Employee"
test("Test get role method", () => {
  const value = "Employee";
  const emp = new Employee("Ben", 123, "test@email.com");
  expect(emp.getRoll()).toBe(value);
});
