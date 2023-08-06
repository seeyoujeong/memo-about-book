function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = { name: 'Lee' };

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);