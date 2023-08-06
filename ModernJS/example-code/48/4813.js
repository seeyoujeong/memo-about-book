import { pi, square, Person } from './4811.mjs';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));

import * as lib from './4811.mjs';

console.log(lib.pi);
console.log(lib.square(10));
console.log(new lib.Person('Lee'));

import { pi as PI, square as sq, Person as P } from './4811.mjs';

console.log(PI);
console.log(sq(2));
console.log(new P('Kim'));