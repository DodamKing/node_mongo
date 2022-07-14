const moduleOne = require('./module-one');
const {add} = require('./module-two');

console.log('Hello world');

const myFunc = (a, b) => {
    return a + b;
};

console.log(moduleOne.addNum(2,4));
console.log(addNumb(3, 5));