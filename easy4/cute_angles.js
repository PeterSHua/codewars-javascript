/*
input: floating point angle
output: string of degrees, mins, secs

degrees = floor(input)

minutesFloat = (input - degrees) * 60;
minutes = floor(minutesFloat)

seconds = (minutesFloat - minutes) * 60;

--
*/

let dms = angle => {
  if (Math.abs(angle) > 360)
    angle = angle % 360;

  if (angle < 0) {
    angle = 360 + angle;
  }

  let degrees = String(Math.floor(angle));

  let minutesFloat = (angle - degrees) * 60;
  let minutes = String(Math.floor(minutesFloat));

  if (minutes.length === 1)
    minutes = '0' + minutes;

  let seconds = String(Math.floor((minutesFloat - minutes) * 60));

  if (seconds.length === 1)
    seconds = '0' + seconds;

  return degrees + '˚' + minutes + '\'' + seconds + '"';
};

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
