const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
  const engineer = new Engineer('Sandy');


  expect(engineer.name).toBe('Sandy');
  expect(engineer.github).toBe('github link goes here');
  
});