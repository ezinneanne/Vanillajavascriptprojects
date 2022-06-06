const governmentForms = [{
  name: "Plutocracy",
  definition: "Rule by the weathly"
},{
  name: "Oligarchy",
  definition: "Rule by a small number of people"
},{
  name: "Kleptocracy",
  definition: "Rule by the thieves"
},{
  name: "Theocracy",
  definition: "Rule by a religious elite"
}, {
  name: "Democracy",
  definition: "Rule by the people"
}, {
  name: "Autocracy",
  definition: "Rule by a single person"
}];

// TODO: compute the formsEndingWithCy array

const formsEndingWithCy = [];
for (let forms of governmentForms) {
  if (forms.name.endsWith('cy')) {
    formsEndingWithCy.push(forms.name);
  }
}
console.log(formsEndingWithCy);