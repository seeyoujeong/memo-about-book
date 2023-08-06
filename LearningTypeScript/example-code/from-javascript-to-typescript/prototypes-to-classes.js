// function Robot(name, abilities) {
// 	this.name = name;
// 	this.abilities = abilities;
// 	this.power = 100;
// }

// Robot.prototype.announce = function announce() {
// 	console.log("Greetings. I am " + this.name + ".");

// 	for (var i = 0; i < this.abilities.length; i += 1) {
// 		console.log("I am able to " + this.abilities[i] + ".");
// 	}
// };

// Robot.prototype.charge = function charge(amount) {
// 	if (this.power < 100) {
// 		this.power = Math.min(this.power + amount, 100);
// 		console.log("Recharged power supplies to " + this.power + ".");
// 	}

// 	if (this.power === 100) {
// 		console.log("I am at optimal operational capacity.");
// 	}
// };

// Robot.prototype.move = function move(distance) {
// 	if (this.power < distance) {
// 		console.log("I do not have enough power to move " + distance + " units.");
// 	} else {
// 		console.log("Moving " + distance + " units.");
// 		this.power -= distance;
// 	}
// };

class Robot {
  constructor(name, abilities) {
    this.name = name;
    this.abilities = abilities;
    this.power = 100;
  }

  announce() {
    console.log(`Greetings. I am ${this.name}.`);

    this.abilities.forEach(ability => {
      console.log(`I am able to ${ability}.`);
    });
  }

  charge(amount) {
    if (this.power < 100) {
      this.power = Math.min(this.power + amount, 100);
      console.log(`Recharged power supplies to ${this.power}.`);
    }

    if (this.power === 100) {
      console.log("I am at optimal operational capacity.");
    }
  }

  move(distance) {
    if (this.power < distance) {
      console.log(`I do not have enough power to move ${distance} units.`);
    } else {
      console.log(`Moving ${distance} units.`);
      this.power -= distance;
    }
  }
}

// function Humanoid(name, abilities, catchphrase) {
// 	Robot.apply(this, [name, abilities]);
// 	this.catchphrase = catchphrase;
// }

// for (var i in Robot.prototype) {
// 	if ({}.hasOwnProperty.call(Robot.prototype, i)) {
// 		Humanoid.prototype[i] = Robot.prototype[i];
// 	}
// }

// Humanoid.prototype.announce = function announce() {
// 	Robot.prototype.announce.apply(this);
// 	console.log(" > " + this.catchphrase + " <");
// };

class Humanoid extends Robot {
  constructor(name, abilities, catchphrase) {
    super(name, abilities);
    this.catchphrase = catchphrase;
  }

  announce() {
    super.announce();
    console.log(` > ${this.catchphrase} <`);
  }
}
