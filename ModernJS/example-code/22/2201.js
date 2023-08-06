const circle = {
    radius: 5,

    getDiameter() {
        return 2 * circle.radius;
        // return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
};

const circle1 = new Circle(5);
console.log(circle1.getDiameter());