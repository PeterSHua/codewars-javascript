function fizzbuzz() {
  for (let idx = 1; idx <= 100; idx += 1) {
    let output = '';

    if (idx % 3 == 0) {
      output += 'Fizz';
    }

    if (idx % 5 == 0) {
      output += 'Buzz';
    }

    if (output === '')
    {
      console.log(idx);
    } else {
      console.log(output);
    }
  }
}

fizzbuzz();
