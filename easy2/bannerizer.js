/*
'+-' + input length * '-' + '-+'
'| ' + input legnth * ' ' + ' +'
'| ' + input + ' |'
'+-' + input length * '-' + '-+'
*/

let logInBox = function(input) {
  let horzBorder = '';
  let emptyRow = '';

  for (let idx = 0; idx < input.length; idx += 1) {
    horzBorder += '-'
    emptyRow += ' ';
  }

  topBorder = '+-' + horzBorder + '-+';
  rowAboveText = '| ' + emptyRow + ' |';
  rowText = '| ' + input + ' |';
  rowBelowText = rowAboveText
  bottomBorder = topBorder;

  console.log(topBorder);
  console.log(rowAboveText);
  console.log(rowText);
  console.log(rowBelowText);
  console.log(bottomBorder);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
