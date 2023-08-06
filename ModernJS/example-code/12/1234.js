// IIFE
(function () {
    var a = 3;
    var b = 5;
    return a + b;
}());

(function () {

}());

(function () {

})();

!function () {

}();

+function () {

}();

var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);

res = (function (a, b) {
    return a * b;
}(3, 5));

console.log(res);