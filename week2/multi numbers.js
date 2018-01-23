"use strict";
let numbers = [1, 2, 3, 4];

let oddNumbers = numbers.filter((element) => {
    return element%2===1;
});
let doubleNumbers = oddNumbers.map((element) => {
    return element * 2;
});
console.log(doubleNumbers);
