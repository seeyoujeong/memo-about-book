const url = 'https://example.com';

console.log(/^https?:\/\//.test(url));
console.log(/^(http|https):\/\//.test(url));

const fileName = 'index.html';

console.log(/html$/.test(fileName));

let target = '12345';

console.log(/^\d+$/.test(target));

target = ' Hi!';

console.log(/^[\s]+/.test(target)); // [\t\r\n\v\f]

const id = 'abc123';

console.log(/^[A-Za-z0-9]{4,10}$/.test(id));

const email = 'ungmo2@gmail.com';

console.log(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email));

const cellphone = '010-1234-5678';

console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone));

target = 'abc#123';

console.log((/[^A-Za-z0-9]/gi).test(target));
console.log((/[\{\}\[\]\?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi).test(target));
console.log(target.replace(/[^A-Za-z0-9]/gi, ''));