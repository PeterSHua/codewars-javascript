let rlSync = require('readline-sync');
let start = rlSync.question("What's the start? ");
let finish = rlSync.question("What's the finish? ");

for (let idx = start; idx < finish; idx += 1) {
  if (idx % 2 != 0) {
    continue;
  }

  console.log(idx);
}

