console.log('[Start]');

// foo(); // Error

try {
    foo();
} catch (error) {
    console.error('[에러 발생]', error);
}

console.log('[End]');

// const $button = document.querySelector('button'); // null

// $button.classList.add('disabled'); // Error
// $button?.classList.add('disabled'); 