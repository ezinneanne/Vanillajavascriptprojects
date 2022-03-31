/*Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:*/

function unique(arr) {
  let result = []
  
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str)
    }
  }
  return result
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O