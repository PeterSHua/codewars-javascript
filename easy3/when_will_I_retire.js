let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question(`What is your age? `), 10);
let retireAge = Number(rlSync.question(`At what age would you like to retire? `), 10);

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let remainingYears = retireAge - currentAge;
let retireYear = currentYear + remainingYears;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${remainingYears} of work to go!`);
