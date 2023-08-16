/*
input: string of words seperated by space
output: string of input words with first and last letters of every word swapped

- input has at least 1 word
- each word has at least 1 letter
- input has only words and spaces

wordArray = split input by ' '
swappedArray = []

for each word in wordArray
  firstLetter = word[0];
  lastLetter = word[word.length - 1];
  static = word.slice(1, word.length - 1)

  swappedArray.push(lastLetter + static + firstLetter)

return swappedArray.join(' ')
*/

let swap = input => {
  wordArray = input.split(' ');

  swappedArray = wordArray.map(word => {
    if (word.length === 1) {
      swappedWord = word;
    } else {
      firstLetter = word[0];
      lastLetter = word[word.length - 1];
      static = word.slice(1, word.length - 1);
      swappedWord = lastLetter + static + firstLetter;
    }

    return swappedWord;
  });

  return swappedArray.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
