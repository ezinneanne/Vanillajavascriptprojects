const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
  pi: 3.14,
  //Return the character description
  circumference() {
    return `${this.pi * (r*r)}`
  },
  area() {
    return `${this.pi * r}`
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);