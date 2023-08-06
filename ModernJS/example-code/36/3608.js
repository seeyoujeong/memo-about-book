function parseURL(url = '') {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);

    if (!parsedURL) return {};

    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedURL);

// Rest 요소
const [x, ...y] = [1, 2, 3];
console.log(x, y);