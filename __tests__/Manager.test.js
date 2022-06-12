/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// test constructor to set office number
test("Can set office number using constructor", () => {
  const value = 312;
  const emp = new Manager("Ben", 123, "test@email.com", value);
  expect(emp.number).toBe(value);
});

// test get role method. it should return "Manager"
test("Test get role method", () => {
  const value = "Manager";
  const emp = new Manager("Ben", 123, "test@email.com", 321);
  expect(emp.getRole()).toBe(value);
});

// test get office number method
test("Test get office number method", () => {
  const value = 321;
  const emp = new Manager("Ben", 123, "test@email.com", value);
  expect(emp.getNumber()).toBe(value);
});
