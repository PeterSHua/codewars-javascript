/*
input: positive integer
output: triangle

iterate rowIdx from 0...input
  iterate spaceCount from (input - rowIdx - 2)..0
    output space

  iterate starCount from 1..input
    output star
*/

let triangle = function(input) {
  for (let rowIdx = 0; rowIdx < input; rowIdx += 1) {
    let row = '';

    for (let spaceCount = input - rowIdx - 2; spaceCount >= 0; spaceCount -= 1) {
      row += ' ';
    }

    for (let starCount = input - rowIdx - 1; starCount < input; starCount += 1) {
      row += '*';
    }

    console.log(row);
  }
}

triangle(5);
triangle(9);
