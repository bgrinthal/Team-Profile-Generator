/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// test constructor to set github user
test("Can set github user using constructor", () => {
  const value = "bgrinthal";
  const emp = new Engineer("Ben", 123, "test@email.com", value);
  expect(emp.github).toBe(value);
});

// test get role method. it should return Engineer
test("Can set role using constructor", () => {
  const value = "Engineer";
  const emp = new Engineer("Ben", 123, "test@email.com", "bgrinthal");
  expect(emp.role).toBe(value);
});

// test get github method. it should return github username
test("Test get github method", () => {
  const value = "bgrinthal";
  const emp = new Engineer("Ben", 123, "test@email.com", value);
  expect(emp.getGithub()).toBe(value);
});
