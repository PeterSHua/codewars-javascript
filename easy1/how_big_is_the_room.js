const SQ_METER_TO_FEET = 10.7639;

let rlSync = require('readline-sync');
let choice = rlSync.question("Select your input units: meter or feet\n")

let length = Number(rlSync.question("Enter the length of the room in meters:\n"));
let width = Number(rlSync.question("Enter the width of the room in meters:\n"));

let areaMeters;
let areaFeet;

if (choice === 'meter') {
  areaMeters = length * width;
  areaFeet = areaMeters * SQ_METER_TO_FEET;

  console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)
} else if(choice === 'feet') {
  areaFeet = length * width;
  areaMeters = areaFeet / SQ_METER_TO_FEET;

  console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(2)} square meters).`)
}


