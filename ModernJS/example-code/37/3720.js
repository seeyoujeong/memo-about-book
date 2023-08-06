Set.prototype.union = function (set) {
    const result = new Set(this);

    for (const value of set) {
        result.add(value);
    }

    return result;
};

// Set.prototype.union = function (set) {
//     return new Set([...this, ...set]);
// };

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.union(setB));
console.log(setB.union(setA));