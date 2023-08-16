/*
input: integer > 2
output: index of the fib whose length === input

prev = 1
curr = 1
idx = 3

while (curr to string.length != input)
  temp = curr
  curr += prv
  prev = temp

return idx
*/

let findFibonacciIndexByLength = function(input) {
  let prev = 1n;
  let curr = 1n;
  let idx = 3n;
  let temp;

  while (String(curr).length != input) {
    temp = curr;
    curr += prev;
    prev = temp;

    idx += 1n;
  }

  return idx - 1n;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
