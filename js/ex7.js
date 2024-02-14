/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Following Second");

let hours = Number(prompt("Enter the hour(s):"));
let minutes = Number(prompt("Enter the minute(s):"));
let seconds = Number(prompt("Enter the second(s):"));
let secondsZero = 0
let minutesZero = 0
let hoursZero = 0
let secondAfter = seconds + 1
let minutesAfter = minutes + 1
let hoursAfter = hours + 1

if ((Number.isInteger(hours)) && (Number.isInteger(minutes)) && (Number.isInteger(seconds))) {
  if (((seconds === 59) && (minutes != 59))) {
    alert(`Time input: ${hours}h${minutes}m${seconds}s`);
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    alert(`One second later: ${hours}h${minutesAfter}m${secondsZero}s`);
    console.log(`One second later: ${hours}h${minutesAfter}m${secondsZero}s`);
  }
  else if (((seconds === 59) && (minutes === 59) && (hours != 23))) {
    alert(`Time input: ${hours}h${minutes}m${seconds}s`);
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    alert(`One second later: ${hoursAfter}h${minutesZero}m${secondsZero}s`);
    console.log(`One second later: ${hoursAfter}h${minutesZero}m${secondsZero}s`);
  }
  else if (((seconds === 59) && (minutes === 59) && (hours === 23 ))) {
    alert(`Time input: ${hours}h${minutes}m${seconds}s`);
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    alert(`One second later: ${hoursZero}h${minutesZero}m${secondsZero}s`);
    console.log(`One second later: ${hoursZero}h${minutesZero}m${secondsZero}s`);
  }
  else {
    alert(`Time input: ${hours}h${minutes}m${seconds}s`);
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
  }
}
else {
  alert("You did not enter a number!")
  console.log("You did not enter a number!")
}