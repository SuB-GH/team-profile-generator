const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee('Andy', '200', 'andy@gmail.com');

  expect(employee.name).toBe('Andy');
  expect(employee.id).toBe('200');
  expect(employee.email).toBe('andy@gmail.com');

});