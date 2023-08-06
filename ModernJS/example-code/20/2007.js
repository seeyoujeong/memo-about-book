(function () {
    // non-strict mode
    var let = 10;

    function foo() {
        'use strict';

        // let = 20; // Error
    }
    foo();
}());

(function () {
    'use strict';

    // x = 1; // Error
    // console.log(x); 
}());

(function () {
    'use strict';

    var x = 1;
    // delete x; // Error

    function foo(a) {
        // delete a; // Error
    }
    // delete foo; // Error
})

(function () {
    'use strict';

    // function foo(x, x) { // Error
    //     return x + x;
    // }
    // console.log(foo(1, 2));
}());