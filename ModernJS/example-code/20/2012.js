(function () {
    'use strict';

    function foo() {
        console.log(this);
    }
    foo();

    function Foo() {
        console.log(this);
    }
    new Foo();
}());

(function (a) {
    'use strict';
    a = 2;

    console.log(arguments);
}(1));