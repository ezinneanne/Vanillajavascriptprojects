//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.


num = prompt("Enter a month number: ")
if (num < 1 && num > 12) {
  alert("Enter a number between 1 and 12")
}

else if (num === NaN) {
  alert("Invalid input")
}

else {
  if (num === 4) {
    console.log("They are 30 days in a month")
  }
  else if (num === 6) {
    console.log("They are 30 days in a month")
  }
  
  else if (num === 9){
    console.log("They are 30 days in a month")
  }
  
  else if (num === 11) {
    console.log("They are 30 days in a month")
  }
  
  else {
    console.log("They are 31 days in a month")
  }
}