function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle = Circle(5);

console.log(circle);

console.log(radius);
console.log(getDiameter());

// circle.getDiameter(); // Error