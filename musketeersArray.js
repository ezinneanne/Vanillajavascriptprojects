
//Write a program that:
/*
• Creates an array named musketeers containing values “Athos”, “Porthos” and “Aramis”.
• Shows each array element using a for loop.
• Adds the “D’Artagnan” value to the array.
• Shows each array element using the forEach() method.
• Remove poor Aramis.
• Shows each array element using a for-of loop.*/

let musketeers = ["Athos","Porthos","Aramis"]//Creating an array

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i])
}//showing each array element using a for loop

musketeers.push("D'Artagnan") //Adding the D'Artagnan value to the array

musketeers.forEach(musk =>{
  console.log(musk)
}) //Showing each array element using the forEach() method

musketeers.splice(2,1) //Remove poor Aramis
for(const must of musketeers) {
  console.log(must)
} //Shows each array element using a for-of loop