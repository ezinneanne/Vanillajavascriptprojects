//Complete the following program to compute and show the total sum of the values in each of the arrays.
const arrays = [
  [1, 4],
  [11],
  [3, 5, 7]
];
// TODO: compute the value of the arraysSum variable
const arraysSum = [];
for(let arr of arrays) {
  let arrSum = arr.reduce((a,b) => a + b, 0);
  arraysSum.push(arrSum);
}
console.log(arraysSum);

const arraysSums = arraysSum.reduce((a,b) => a + b,0);
console.log(arraysSums);
