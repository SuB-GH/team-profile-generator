const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
  const engineer = new Engineer('Steven', '300', 'steven@gmail.com', 'steve_github');


  expect(engineer.name).toEqual('Steven');
  expect(engineer.id).toEqual('300');
  expect(engineer.email).toEqual('steven@gmail.com');
  expect(engineer.github).toEqual('steve_github');

});