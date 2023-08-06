function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);
    }

    inner();
}

outer();