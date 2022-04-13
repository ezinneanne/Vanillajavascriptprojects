class Account {
  constructor(name, balance){
    this.name = name
    this.balance = 0
  }
  //Return the character description
  credit() {
    const currentBalance = 1000
    this.balance += currentBalance
  }
  describe() {
    return `owner: ${this.name}    balance: ${this.balance}`
  }
}
/*
const owner = new Account("Sean")
console.log(owner.describe())
owner.credit()
console.log(owner.describe())
*/

const names = ["Sean","Brad","Georges"]
for (let name of names) {
  name = new Account(name)
  console.log(name.describe())
  name.credit()
  console.log(name.describe())
}


//Account list
/*
Let’s build upon a previous account object exercise. A bank account is still defined by:

• A name property.
• A balance property, initially set to 0.
• A credit method adding the value passed as an argument to the account balance.
• A describe method returning the account description.

Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

*/