/*
const dog = {
  name: "Bingo",
  species: "NigShepherd",
  size: 30,
  //Return the character description
  bark() {
    return "Woah,Woah"
  }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size} kilograms`);

console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
*/

class Dog {
  constructor(name, species, size) {
    
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.name == "Fang") {
     return "Grr Grr!"
    } else if (this.name == "Snowy") {
      return "Woof Woof"
    }
    else {
      return "Does not exist!"
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);

console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);

console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


