foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');

outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');

var string = 'Hello World.';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
    if (string[i] === search) {
        index = i;
        break;
    }
}

console.log(index);

console.log(string.indexOf(search));