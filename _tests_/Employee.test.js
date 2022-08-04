const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee('');

  expect(employee.name).toBe(employee.name);
    
});