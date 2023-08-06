console.log('[Start]');

try {
    foo();
} catch (err) {
    console.error(err);
} finally {
    console.log('finally');
}

console.log('[End]');

// 1 @ 1; // SyntaxError
// foo(); // ReferenceError
// null.foo; // TypeError
// new Array(-1) // RangeError
// decodeURIComponent('%'); // URIError