var circle = {
    radius: 5,
    getDiameter: function () {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

var person = {
    name: 'Lee'
};

console.log(person.name);

console.log(person['name']); // person[name] -> Error

console.log(person.age);