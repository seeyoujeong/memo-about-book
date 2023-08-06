const x = 1;

function outerFunc() {
    const x = 10;

    function innerFunc() {
        console.log(x);
    }

    innerFunc();
} 

outerFunc();