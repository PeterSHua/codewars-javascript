/*
input: two arrays
output: union of input arrays without duplicats
--
result = unique(firstArray + secondArray)
sort result
--
input: array
output: unqiue elements of input

result = []

iterate each ele in input
  if !result.includes(ele)
    result.push(ele)

return result
---
*/
let unique = array => {
  result = [];

  array.forEach(ele => {
    if (!result.includes(ele))
      result.push(ele);
  });

  return result;
};

let union = (firstArray, secondArray) => {
  return unique(firstArray.concat(secondArray)).sort();
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
