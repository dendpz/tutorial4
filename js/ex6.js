/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Multiplication Table");
const userInput = Number(prompt("Please enter a number:"));

if (Number.isInteger(userInput)) {
for (let i = 0; i < 11; i++) {
  alert(`${userInput} * ${i} = ${userInput * i}`);
  console.log(`${userInput} * ${i} = ${userInput * i}`);
}
}
else {
  alert("Invalid input, please enter a number!");
  console.log("Invalid input, please enter a number!");
}