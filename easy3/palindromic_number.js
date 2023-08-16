/*
input: number;
output: boolean - if input is a palindromic number

convert input to string
isPalindrome(input)

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

let isPalindromicNumber = input => {
  inputString = String(input);
  return isPalindrome(inputString);
};

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
