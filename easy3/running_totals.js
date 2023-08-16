let runningTotal = inputArray => {
  let total = 0;

  result = inputArray.map(ele => {
    total += ele
    return total
  });

  return result;
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
