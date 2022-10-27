const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
  const manager = new Manager('Ellen', '500', 'ellen@gmail.com', '225');

  expect(manager.name).toBe('Ellen');
  expect(manager.id).toEqual('500');
  expect(manager.email).toEqual('ellen@gmail.com');
  expect(manager.officeNum).toBe('225');
  
});