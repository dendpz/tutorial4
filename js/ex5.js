/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Password");
const correctPassword = "secret";
let i = 1

while (i <=3) {
  const userInput = prompt("Please enter your password, you have 3 attempts:");
  if (userInput != correctPassword) {
    alert("Incorrect password, please try again:");
    console.log("Incorrect password, please try again:");
    i++;
  }
  else if (userInput === correctPassword) {
    i++;
    alert(`You have entered the correct password after ${i} attempt(s)`);
    console.log(`You have entered the correct password after ${i} attempt(s)`);
    break
  }
  else {
    alert("Your account is locked! You have failed to enter the correct password 3 times.");
  }
}