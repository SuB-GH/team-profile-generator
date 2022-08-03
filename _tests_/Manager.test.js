const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
  const manager = new Manager('Steve');

  expect(manager.name).toBe('Steve');
  expect(manager.officeNum).toBe('205');
  
});