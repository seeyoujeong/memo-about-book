Set.prototype.isSuperset = function (subset) {
    for (const value of subset) {
        if (!this.has(value)) return false;
    }

    return true;
};

// Set.prototype.isSuperset = function (subset) {
//     const supersetArr = [...this];
//     return [...subset].every(v => supersetArr.includes(v));
// };

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));