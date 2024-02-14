/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Multiplication Table");
const userInput = Number(prompt("Please enter a number:"));

for (let i = 0; i < 11; i++) {
  if (Number.isInteger(userInput)) {
    alert(`${userInput} * ${i} = ${userInput * i}`);
    console.log(`${userInput} * ${i} = ${userInput * i}`);
  }
  else {
    alert("This is not a number!")
    console.log("This is not a number!")
  }
}