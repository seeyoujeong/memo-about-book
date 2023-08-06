const o = { x: { y: 1 } };

const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);

const _ = require('lodash');

const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);