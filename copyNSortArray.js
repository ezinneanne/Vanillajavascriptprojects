/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)*/

let arr = ["HTML","JavaScript","CSS"]

function copySorted(arr) {
  return arr.slice().sort() //because the slice method is used to copy an array
}

let sorted = copySorted(["HTML","JavaScript","CSS"])
alert(sorted)