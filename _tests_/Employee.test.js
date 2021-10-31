const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can set name", () => {
  const name = "Bob";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});+

test("Can set id", () => {
  const testValue = 100;
  const employee = new Employee("Bob", testValue);
  expect(employee.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Bob", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Bob";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = "100";
  const employee = new Employee("Bob", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Bob", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});