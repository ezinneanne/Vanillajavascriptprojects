/*Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

; // (25 + 30 + 29) / 3 = 28*/

function getAverageAge(users) {
  return users.reduce((prevUser,nextUser) => prevUser + nextUser.age,0)/users.length
}

let john = { name: "John", age: 15 };
let pete = { name: "Pete", age: 35 };
let mary = { name: "Mary", age: 25 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) )