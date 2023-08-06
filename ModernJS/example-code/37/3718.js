Set.prototype.intersection = function (set) {
    const result = new Set();

    for (const value of set) {
        if (this.has(value)) result.add(value);
    }

    return result;
};

// Set.prototype.intersection = function (set) {
//     return new Set([...this].filter(v => set.has(v)));
// }

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.intersection(setB));
console.log(setB.intersection(setA));