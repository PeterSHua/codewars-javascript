/*
input: string
output: string after rot13 cipher

- change each character in string to the character 13 positions later in the alphabet
- preserve case
- don't change non letters

ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

output = ''

iterate idx from 0..input.length
  letter = input[idx] to lowercase

  if !ALPHABET.includes(letter)
    output += input[idx]
    continue

  swappedLetter = rot13swap(letter)

  if !(input[idx] === letter)
    swappedLetter = swappedLetter to uppercase

  output += swappedLetter

return output
---
*/
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ROTATION = 13;

let isLetter = function(letter) {
  return ALPHABET.includes(letter);
}

let rot13LetterSwap = function(letter) {
  let swappedIdx = ALPHABET.indexOf(letter) + ROTATION;

  while (swappedIdx >= ALPHABET.length) {
    swappedIdx -= ALPHABET.length;
  }

  return ALPHABET[swappedIdx];
}

let rot13 = function(toEncode) {
  let encoded = '';
  let toEncodeLetter;
  let swappedLetter;

  for (let idx = 0; idx < toEncode.length; idx += 1) {
    toEncodeLetter = toEncode[idx].toLowerCase();

    if (!isLetter(toEncodeLetter)) {
      encoded += toEncode[idx];
      continue;
    }

    swappedLetter = rot13LetterSwap(toEncodeLetter);

    if (toEncode[idx] != toEncodeLetter) {
      swappedLetter = swappedLetter.toUpperCase();
    }

    encoded += swappedLetter;
  }

  return encoded;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

