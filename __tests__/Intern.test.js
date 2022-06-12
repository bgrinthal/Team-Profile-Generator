/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const Intern = require("../lib/Intern");

// test constructor to set school
test("Can set school using constructor", () => {
  const value = "RU";
  const emp = new Intern("Ben", 123, "test@email.com", value);
  expect(emp.school).toBe(value);
});

// test get role method.
test("Test get role method", () => {
  const value = "Intern";
  const emp = new Intern("Ben", 123, "test@email.com", "RU");
  expect(emp.getRole()).toBe(value);
});

// test get school method
test("Test get school method", () => {
  const value = "RU";
  const emp = new Intern("Ben", 123, "test@email.com", value);
  expect(emp.getSchool()).toBe(value);
});
