/*
input: string with non-alphabetic chars
output: cleaned up string with non-alphabetic chars replaced with space
- no repeating spaces
*/

// ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

// let cleanUp = function(input) {
//   result = '';

//   for (let idx = 0; idx < input.length; idx += 1) {
//     if (ALPHABET.includes(input[idx])) {
//       result += input[idx];
//     } else {
//       if (result[result.length - 1] != ' ') {
//         result += ' ';
//       }
//     }
//   }

//   return result;
// }

let cleanUp = function(input) {
  return input.replaceAll(/[^a-z]+/ig, ' ')
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
