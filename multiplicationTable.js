/* Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint#()*/

num = prompt("Enter a number: ")

if (num >= 2 && num <= 9) {
  for (let i = 1; i <= 12; i++) {
  console.log(i * num);
  }
} else {
  console.log("Choose a number between 2 and 9")
}
