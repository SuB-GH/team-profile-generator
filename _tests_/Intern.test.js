const Intern = require('../lib/Intern.js');

test('creates a Intern object', () => {
  const intern = new Intern('Aidan', '400', 'aidan@gmail.com', 'University of Wisconsin');

  expect(intern.name).toBe('Aidan');
  expect(intern.id).toEqual('400');
  expect(intern.email).toEqual('aidan@gmail.com');
  expect(intern.school).toBe('University of Wisconsin');
  
});