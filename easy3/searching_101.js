/*
input: 6 numbers
output: whether last number appears in first 5

userInput = []

iterate 6 times
  userInput = get user input
  userInput.push(userInput)

searchArray = userInput.slice(0, 6)
result = searchArray.includes(userInput[5])
*/

const ORDINALS = "1st 2nd 3rd 4th 5th last".split(' ');

function isIncluded(arr, val) {
  return arr.some(ele => ele > val);
}

let rlSync = require('readline-sync');

let userInput = [];

for (let idx = 0; idx < 6; idx += 1) {
  let inputNumber = rlSync.question(`Enter the ${ORDINALS[idx]} number: `);
  userInput.push(inputNumber);
}

lastNumber = userInput[5];
searchArray = userInput.slice(0, 5);
resultBool = isIncluded(searchArray, 25);

formattedSearchArray = "[" + searchArray.join(', ') + "]";

if (resultBool)
  appears = 'appears';
else
  appears = 'does not appear';

console.log(`The number ${lastNumber} ${appears} in ${formattedSearchArray}.`);


