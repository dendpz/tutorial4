/* Tutorial 4
   Example 2 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Class Standing");

const userName = prompt("What is your name?");
const userUnits = Number(prompt("How many units did you complete?"));
if ((Number.isInteger(userUnits)) && userUnits >= 0) {
   if ((userUnits >= 0) && (userUnits <=30)) {
      let gradeStanding = "Freshman";
      alert(`Hello ${userName}\n Your grade standing is ${gradeStanding}`);
      console.log(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
   }
   else if ((userUnits > 30) && (userUnits <= 60)) {
      let gradeStanding = "Sophomore";
      alert(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
      console.log(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
   }
   else if ((userUnits > 60) && (userUnits <=90)) {
      let gradeStanding = "Junior";
      alert(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
      console.log(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
   }
   else {
      let gradeStanding = "Senior"
      alert(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
      console.log(`Hello ${userName}n\ Your grade standing is ${gradeStanding}`);
   }
}
else {
   if (isNaN(userUnits) || (userUnits<0) || (userUnits % 1 != 0)) {
      alert("That is not a correct units input!")
      console.log("That is not a correct units input!")
   }
}