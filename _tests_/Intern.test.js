const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "GW";
  const employee = new Intern("Bob", 1, "test@test.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("Bob", 1, "test@test.com", "UCLA");
  expect(employee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "GW";
  const employee = new Intern("Bob", 1, "test@test.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});