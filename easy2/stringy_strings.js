/*
input: positive integer
output: string of alternating 1 and 0 with input length

toggle = '1'
output = ''

iterate idx from 0...input.length
  output += toggle

  if toggle === '1'
    toggle = '0'
  else
    toggle = '1'

return output
--
*/

let stringy = function(input) {
  let toggle = '1';
  let output = '';

  for (let idx = 0; idx < input; idx += 1) {
    output += toggle;

    if (toggle === '1') {
      toggle = '0';
    } else {
      toggle = '1';
    }
  }

  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
