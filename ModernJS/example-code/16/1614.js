function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person = {
    name: 'Lee',
    address: { city: 'Seoul' }
};

deepFreeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);