
const Employee = require ('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const employee = new Employee('Dave', 1234, 'a@a.com');

    //test for name, id, email
    expect(employee.name).toBe('Dave');
    expect( typeof employee.id).toBe('number');
    expect(employee.email).toBe(expect.any(String));
    
    // //test for methods:
    // test('Can set name via constructor arguments', () => {
        //const emplyee = new Employee('Dave');

        //test for getName()
        //expect(employee.getName()).toHaveProperty('name');
// })
})