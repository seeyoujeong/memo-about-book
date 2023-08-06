function foo() {
    console.log('global function foo');
}

function bar() {
    function foo() {
        console.log('local function foo');
    }
    foo();
}

bar();

var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);