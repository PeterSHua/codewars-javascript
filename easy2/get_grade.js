/*
input: 3 positive integers between 0 and 100
output: letter grade

*/

let getGrade = function(firstScore, secondScore, thirdScore) {
  let average = Math.round((firstScore + secondScore + thirdScore) / 3);

  if (average <= 100 && average >= 90) {
    return 'A';
  } else if (average < 90 && average >= 80) {
    return 'B';
  } else if (average < 80 && average >= 70) {
    return 'C';
  } else if (average < 70 && average >= 60) {
    return 'D';
  } else if (average < 60 && average >= 0) {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D")
