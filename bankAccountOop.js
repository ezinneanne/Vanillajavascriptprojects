const account = {
  name: "Alex",
  balance: 0,
  //Return the character description
  describe() {
    return `owner: ${this.name} balance: ${this.balance}`
  }
}

account.balance += 250
console.log(account.describe())

account.balance -= 70
console.log(account.describe())
