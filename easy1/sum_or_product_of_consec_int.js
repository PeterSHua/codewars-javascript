let rlSync = require('readline-sync');
let inputNum = parseInt(rlSync.question("Please enter an integer greater than 0: "));
let choice = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. ");

let consecInts = [];

for (let idx = 1; idx <= inputNum; idx += 1 ) {
  consecInts.push(idx);
}

console.log(consecInts);

if (choice == 's') {
  result = consecInts.reduce(
    (sum, currNum) => sum + currNum
  );

  choice = 'sum';
} else if (choice == 'p') {
  result = consecInts.reduce(
    (product, currNum) => product * currNum
  );

  choice = 'product';
}

console.log(`The ${choice} of the integers between 1 and ${inputNum} is ${result}.`);
