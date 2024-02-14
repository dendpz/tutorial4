/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Simple Calculation");

const value1 = Number(prompt("Please enter the first integer:"));
const value2 = Number(prompt("Please enter the second integer:"));

if ((Number.isInteger(value1) && (Number.isInteger(value2)))) {
  alert(`Addition: ${value1 + value2}`);
  alert(`Subtraction: ${value1 - value2}`);
  alert(`Multiplication: ${value1 * value2}`);
  alert(`Division: ${value1 / value2}`);
  alert(`Modulo: ${value1 % value2}`);
  console.log(value1 + value2, value1 - value2, value1 * value2, value1 / value2, value1 % value2);
}
else {
  alert("That is an incorrect input!")
  console.log("That is an incorrect input!")
}