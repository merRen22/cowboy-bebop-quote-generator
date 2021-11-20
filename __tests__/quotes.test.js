const cowboy = require('./../src/index.js');

it('random quote', () => {
  expect(cowboy.quote()).toBeDefined();
});
