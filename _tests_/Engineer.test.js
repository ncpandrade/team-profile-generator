const Engineer = require("../lib/Engineer");

test("Can set GitHUb account", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(employee.github).toBe(testValue);
});

test("getRole() should return Engineer", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Bob", 1, "test@test.com", "GitHubUser");
  expect(employee.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "gitHubUser";
  const employee = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(employee.getGithub()).toBe(testValue);
});