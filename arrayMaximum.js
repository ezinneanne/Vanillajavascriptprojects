//Write a program that creates the following array, then calculates and shows its maximum value.

const values = [3, 11, 7, 2, 9, 10]

const max = values.reduce((a, b) => { return Math.max(a, b) }); //using the reduce method

console.log(max)