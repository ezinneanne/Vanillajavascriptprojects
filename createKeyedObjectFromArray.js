/*Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.*/

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  return arr.reduce((object, value) => {
    object[value.id] = value
    return object
  }, {})
}

let usersById = groupById(users);
console.log(usersById)
