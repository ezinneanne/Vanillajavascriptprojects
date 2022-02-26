/* Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.*/

turns = prompt("Enter your preferred number of turns: ");

for (let i = 0; i < turns; i++) {
  console.log(`The carousel turn number is ${i}`);
}

//Using while loop

userTurns = prompt("Enter your preferred number of turns: ");

let i = 0;
while (i < userTurns) {
  console.log(`The carousel turn number is ${i}`);
  i++;
}
