const callbacks = require('00-scope');

test('llamada a callbacks[2] debería retornar 2', () => {
  expect(callbacks[2]()).toBe(2);
});
