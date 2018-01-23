"use strict";
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);

let sum = 0;
tasks.forEach((item) => {
    sum += item.duration;
});

console.log(sum);

let hoursDurations = tasks.map((element) => {
    element.duration = element.duration / 60;
    return element;
});

console.log(hoursDurations);

let lessTwo = hoursDurations.filter((element) => {
    return element.duration < 2;
});
console.log(lessTwo);


let sumDuration = 0;
hoursDurations.forEach((item) => {
    item.duration = item.duration * 50;
    sumDuration += item.duration;
});

console.log(sumDuration);

console.log(sumDuration.toFixed(2));


