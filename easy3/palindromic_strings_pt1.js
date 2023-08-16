/*
input: string
output: boolean - if input is a palindrome

- case sensitive
- all chars matter

reversedInput = input.reverse

iterate idx from 0...input.length
  if input[idx] !== reversedInput[idx]
    return false

return true
*/
let isPalindrome = input => {
  input = input.split('');
  let reversedInput = input.slice(0).reverse();

  for (let idx = 0; idx < input.length; idx += 1) {
    if (input[idx] !== reversedInput[idx])
      return false;
  }

  return true;
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
