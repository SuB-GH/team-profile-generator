const Intern = require('../lib/Intern.js');

test('creates a Intern object', () => {
  const intern = new Intern('Aidan');

  expect(intern.name).toBe('Aidan');
  expect(intern.school).toBe('University of Wisconsin');
  
});