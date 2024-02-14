/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Following Second");

const hours = Number(prompt("Enter the hour(s):"));
const minutes = Number(prompt("Enter the minute(s):"));
const seconds = Number(prompt("Enter the second(s):"));

if ((Number.isInteger(hours)) && (Number.isInteger(minutes)) && (Number.isInteger(seconds))) {
  alert(`Here is what you entered: ${hours+minutes+seconds}`);
  console.log("Here is your number")
}
else {
  alert("You did not enter a number!")
  console.log("You did not enter a number!")
}