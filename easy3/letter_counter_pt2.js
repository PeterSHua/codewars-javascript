let removeNonLetters = words => {
  return words.map(word => {
    resultWord = "";

    word.split('').forEach(char => {
      if (char.match(/[a-z]/i))
        resultWord += char;
    });

    return resultWord;
  });
};

let wordSizes = input => {
  let wordArray = removeNonLetters(input.split(' '));
  let result = {};

  if (input === '')
    return result;

  wordArray.forEach(word => {
    if (result[word.length]) {
      result[word.length] += 1;
    } else {
      result[word.length] = 1;
    }
  });

  return result;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
