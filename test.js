const assert = require('assert');
const validWebColor = require('./').default;

assert.equal(validWebColor('#fff'), true, 'failing on shorthex');
assert.equal(validWebColor('#ffffff'), true, 'failing on longhex');
assert.equal(validWebColor('white'), true, 'failing on named colors');
assert.equal(validWebColor('rgb(255,255,255)'), true, 'failing on rgb');
assert.equal(validWebColor('rgba(255,255,255, 1)'), true, 'failing on rgba');
assert.equal(validWebColor('hsl(0, 0%,100%)'), true, 'failing on hsl');
assert.equal(validWebColor('hsla(0, 0%, 100%, 1)'), true, 'failing on hsl');

assert.equal(validWebColor('#sagdfhdfjd'), false, 'false positive on random string');
assert.equal(validWebColor({}), false, 'false positive on non-string');

console.log('TESTS PASSED!');
