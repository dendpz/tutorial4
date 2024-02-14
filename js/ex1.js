/* Tutorial 4
   Example 1 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Validate Input");
const userNumber = Number(prompt("Enter a number between 1-100:"));
if ((userNumber > 1) && (userNumber < 100)) {
   alert(`Thank you! You entered ${userNumber}, a valid number.`);
   console.log(`Thank you! You entered ${userNumber}, a valid number.`);
}
else if (isNaN(userNumber)) {
   alert("That is not a number!")
   console.log("That is not a number!")
}
else {
   alert(`Sorry, ${userNumber} is not a valid entry.`);
   console.log(`Sorry, ${userNumber} is not a valid entry.`);
}