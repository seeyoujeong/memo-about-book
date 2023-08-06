const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

const json = JSON.stringify(obj);
console.log(typeof json, json);

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

function filter(key, value) {
    return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);