const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

let enc = encodeURI(uri);
console.log(enc);

let dec = decodeURI(enc);
console.log(dec);

const uriComp = 'name=이웅모&job=programmer&teacher';

enc = encodeURIComponent(uriComp);
console.log(enc);

dec = decodeURIComponent(enc);
console.log(dec);