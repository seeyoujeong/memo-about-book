var count = 0;

while (true) {
    console.log(count);
    count++;

    if (count === 3) break;
}

count = 0;

do { 
    console.log(count);
    count++;
} while (count < 3);