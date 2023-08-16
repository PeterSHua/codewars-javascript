/*
input: two arguments
output: xor of inputs

Inputs cannot be the same
firstInput && secondInput - false
!firstInput && !secondInput - false
*/

let isXor = function(firstInput, secondInput) {
  bothTrue = firstInput && secondInput;
  bothFalse = !firstInput && !secondInput;

  console.log(!(bothTrue || bothFalse))
}


isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
