
const Employee = require ('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const employee = new Employee('Dave');

    //test for name, id, email
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
    
    // //test for methods:
    // test('Can set name via constructor arguments', () => {

    // })
})