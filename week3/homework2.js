'use strict';
function addition(x) {
    if (x <= 10) {
        console.log(x + 6);
    } else if (x >= 21) {
        console.log(x + 6);
    }
};
let addSix = addition(6);
addSix(10); // returns 16
addSix(21); // returns 27

console.log("///////////////////////////////////////////////////////////////////////////////////////");

let arr = ["a", "b", "c", "d", "a", "e", "f", "c"];
function change() {
    let newArr = Array.from(new Set(arr));
    return newArr;
};
console.log(change());
