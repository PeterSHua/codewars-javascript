/*
input: positive integer
output: boolean
- true if input is prime

Return true if input is 2

Prime if there are no numbers between 2 and (input - 1) inclusive that divide evenly into input

Iterate testNum from 2 to (input - 1)
  if input % testNum === 0
    return false

return true

---
*/

let isPrime = function(inputNum) {
  if (inputNum < 2)
    return false;

  if (inputNum === 2)
    return true;

  for (let testNum = 2; testNum < inputNum; testNum += 1) {
    if (inputNum % testNum === 0)
      return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
