/* Tutorial 4
   Example 3 JavaScript code
*/

console.log("De Paz's Output from Tutorial 4 Following Day");

const dayEntered = prompt("Please enter the 3 letter abbreviation of the day in lower case:")
switch (dayEntered) { 
  case "mon": // I used the case as a validation, first 3 letters
    let followingDay = "tue";
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
    break
  case "tue":
    let followingDay1 = "wed";
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay1}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay1}`);
    break
  case "wed":
    let followingDay2 = "thu"
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay2}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay2}`);
    break
  case "thu":
    let followingDay3 = "fri"
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay3}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay3}`);
    break
  case "fri":
    let followingDay4 = "sat"
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay4}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay4}`);
    break
  case "sat":
    let followingDay5 = "sun"
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay5}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay5}`);
    break
  case "sun":
    let followingDay6 = "mon"
    alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay6}`);
    console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay6}`);
    break
  default: // If input does not pass validation aka doesnt match the case, invalid.
    alert("Not a valid entry")
}