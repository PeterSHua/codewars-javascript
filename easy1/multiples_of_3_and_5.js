/*
input: integer > 1
output: sum of numbers multiples of 3 or 5 between 1 and input inclusive

multiples = []

iterate testNum from 1 to inputNum
  if testNum multiple of 3 AND 5
    multiples << testNum

return sum all numbers in multiples
*/

let multisum = function(inputNum) {
  let multiples = [];

  for (let testNum = 1; testNum <= inputNum; testNum += 1) {
    if (testNum % 3 === 0 || testNum % 5 === 0) {
      multiples.push(testNum);
    }
  }

  return multiples.reduce(
    (sum, num) => sum + num
  );
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
