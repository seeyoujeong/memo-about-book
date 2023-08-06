var done = true;
var message = '';

if (done) message = '완료';

message = done && '완료';
console.log(message);

done = false;
message = '';

if (!done) message = '미완료';

message = done || '미완료';
console.log(message);

done = true;
message = '';

if (done) message = '완료';
else      message = '미완로';
console.log(message);

message = done ? '완료' : '미완료';
console.log(message);