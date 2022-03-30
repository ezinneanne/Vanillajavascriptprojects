
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
let sorted = (a,b) => {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

let reverseArr = arr.sort(sorted)
reverseArr.reverse()

alert( reverseArr ); // 8, 5, 2, 1, -10