function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
};

repeat(5, logAll);

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat(5, logOdds);

repeat(5, function (i) {
    if (i % 2) console.log(i);
});