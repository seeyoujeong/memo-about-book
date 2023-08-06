let resolvedPromis = Promise.resolve([1, 2, 3]);
resolvedPromis.then(console.log);
         
// 위와 동일
resolvedPromis = new Promise(resolve => resolve([1, 2, 3]));
resolvedPromis.then(console.log);

let rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log);

// 위와 동일
rejectedPromise = new Promise((_, reject) => reject(new Error('Error!')));
rejectedPromise.catch(console.log);

const requestData1 = () =>
    new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () =>
    new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () =>
    new Promise(resolve => setTimeout(() => resolve(3), 1000));

const res = [];
requestData1()
    .then(data => {
        res.push(data);
        return requestData2();
    })
    .then(data => {
        res.push(data);
        return requestData3();
    })
    .then(data => {
        res.push(data);
        console.log(res);
    })
    .catch(console.error);

Promise.all([requestData1(), requestData2(), requestData3()])
    .then(console.log)
    .catch(console.error);

Promise.all([
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error 1')), 3000)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error 2')), 2000)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Error 3')), 1000))
])
    .then(console.log)
    .catch(console.log);

Promise.all([
    1, // -> Promise.resolve(1)
    2, // -> Promise.resolve(2)
    3, // -> Promise.resolve(3)
])
    .then(console.log)
    .catch(console.log);