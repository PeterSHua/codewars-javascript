let isPalindrome = input => {
  input = input.split('');
  let reversedInput = input.slice(0).reverse();

  for (let idx = 0; idx < input.length; idx += 1) {
    if (input[idx] !== reversedInput[idx])
      return false;
  }

  return true;
};

/*
lowercaseInput = input.toLowerCase

filteredLowercaseChars = inputChars.split.filter(
  char => lowerCaseInput match /[a-z]/
)

isPalindrome(filteredLowerCaseChars.join(''));
*/

let isRealPalindrome = input => {
  lowercaseInput = input.toLowerCase();

  filteredLowercaseChars = lowercaseInput.split('').filter(
    char => char.match(/[a-z]/)
  );

  return isPalindrome(filteredLowercaseChars.join(''));
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
