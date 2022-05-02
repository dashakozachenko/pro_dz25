'use strict';

const adder = (function (){
    let result = 0;
    return function (x) {
        result += x;
        return result;
    }
});
const sum = adder();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));