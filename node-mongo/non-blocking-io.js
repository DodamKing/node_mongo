const fs = require('fs');

console.log('program start');

fs.readFile('hello.js', (err, result) => {
    console.log(result);
});

// fs.readFileSync('hello.js', (err, result) => {
//     console.log(result);
// });

console.log('program ended..');