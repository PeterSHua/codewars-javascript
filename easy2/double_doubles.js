/*
input: number
output: input if it's a double, otherwise input * 2

double:
- left side number same as right side number

if input.length is odd
  return input * 2

left = slice string from 0...input.length / 2
right = slice string from input.length / 2 .. (input.length - 1)

if left === right
  return input
else
  return input * 2
*/

let slice = function(input, start, end) {
  result = '';

  for (let idx = start; idx <= end; idx += 1) {
    result += input[idx];
  }

  return result;
}

let twice = function(input) {
  input = String(input);

  if (input.length % 2 != 0)
    return input * 2;

  left = slice(input, 0, input.length / 2 - 1);
  right = slice(input, input.length / 2, input.length - 1)

  if (left === right) {
    return input;
  } else {
    return input * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
