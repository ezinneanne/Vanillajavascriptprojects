/* Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.*/

for (let i = 0; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += ("Fizz");
  }
  if (i % 5 === 0) {
    output += ("Buzz");
  }
  console.log(output || i);
}