/*
input: year
output: century

round up the hundredth number
century ends in
11 - 11th
12 - 12th
13 - 13th
1 - 1st
2 - 2nd
3 - 3rd

centuryNum = Floor(year / 100)

if year % 100 != 0
  centuryNum += 1

centuryNum = String(centuryNum)

switch centuryNum[-2..]
case 11: suffix = th
case 12: suffix = th
case 13: suffix = th

switch century[-1]
case 1: suffix = st
case 2: suffix = nd
case 3: suffix = rd
default: suffix = th

return String(centuryNum) + suffix

---
year = 2001
centuryNum = 21

*/

let century = function (year) {
  centuryNum = Math.floor(year / 100);

  if (year % 100 != 0)
    centuryNum += 1;

  centuryNum = String(centuryNum);

  let suffix = '';

  switch (centuryNum.substring(centuryNum.length - 2)) {
    case '11':
      suffix = 'th';
      break;
    case '12':
      suffix = 'th';
      break;
    case '13':
      suffix = 'th';
      break;
  }

  if (suffix != '') {
    console.log(String(centuryNum) + suffix);
    return
  }

  // console.log(centuryNum.substring(centuryNum.length - 1));

  switch (centuryNum.substring(centuryNum.length - 1)) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }

  console.log(String(centuryNum) + suffix);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
