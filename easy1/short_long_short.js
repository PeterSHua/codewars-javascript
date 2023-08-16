/*
input: two strings, one short, one long
output: concatenate short, long, short

if firstInput length < secondInput length
  shorter = firstInput
  longer = secondInput
else
  shorter = secondInput
  longer = firstInput

return shorter + longer + shorter
*/

let shortLongShort = function(firstInput, secondInput) {
  if (firstInput.length < secondInput.length) {
    shorter = firstInput;
    longer = secondInput;
  } else {
    shorter = secondInput;
    longer = firstInput;
  }

  return shorter + longer + shorter;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
