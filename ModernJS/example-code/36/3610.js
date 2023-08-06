// ES5
const user = { firstName: 'Ungmo', lastName: 'Lee' };

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName, lastName);

// ES6
var { lastName, firstName } = user;

console.log(firstName, lastName);

var { lastName, firstName } = { firstName: 'Ungmo', lastName: 'Lee' };

// const { lastName, firstName }; // Error

// const { lastName, firstName } = null; // Error

var { lastName, firstName } = user;
// 위와 아래는 동치
var { lastName: lastName, firstName: firstName } = user;

var { lastName: ln, firstName: fn } = user;

console.log(fn, ln);