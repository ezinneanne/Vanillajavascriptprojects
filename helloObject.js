/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/


let user = {
  name: "John",
  surname: "Smith",
}

user.name = "Pete"
alert(user.name) //Pete

delete user.name

alert(user.name) //undefined