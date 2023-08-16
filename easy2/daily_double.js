/*
input: string
output: input with consec repeated chars collapsed

return input if input length < 2

output = input[0]


iterate idx from 1 to (input length - 1)
  continue if input[idx] === input[idx - 1]

  output += input[idx]

return output

--
*/

let crunch = function(input) {
  if (input.length < 2)
    console.log(input);

  output = input[0];

  for (let idx = 1; idx < input.length; idx += 1) {

    if (input[idx] === input[idx - 1]) {
      continue;
    }

    output += input[idx];
  }

  console.log(output);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
