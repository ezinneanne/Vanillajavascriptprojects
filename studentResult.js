/*Student results

Here’s a program that shows female students results (name and average grade). Refactor it using

functional programming. Execution result must stay the same.*/
const students = [{
name: "Anna",
sex: "f",
grades: [4.5, 3.5, 4]
}, {
name: "Dennis",
sex: "m",
country: "Germany",
grades: [5, 1.5, 4]
}, {
name: "Martha",
sex: "f",
grades: [5, 4, 2.5, 3]
}, {
name: "Brock",
sex: "m",
grades: [4, 3, 2]
}];
// Compute female student results
const femaleStudentsResults = [];
for (let student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
for (let grade of student.grades) {
  gradesSum += grade;
}
let averageGrade = gradesSum / student.grades.length;
femaleStudentsResults.push({
    name: student.name,
    avgGrade: averageGrade
  });

  }

}
console.log(femaleStudentsResults);

//functional programming
/*function moviessBefore2000() {
  const moviessBefore2000 = [];
  for (move of movieList) {
    if (move.year <= 2000) {
      moviessBefore2000.push(move.title);
    }
  }
  return moviessBefore2000;
}

console.log(moviessBefore2000());*/

function femmeStudentsResults() {
  const femmeStudentsResults = [];
  for (let student of students) {
    if (student.sex === 'f') {
      let gradeSum = 0;
      for (let grade of student.grades) {
        gradeSum += grade;
      }
      let averageGrade = gradeSum / student.grades.length;
      femmeStudentsResults.push({
        name: student.name,
        avgGrade: averageGrade
      });
    }
  }
  return femmeStudentsResults;
}
console.log(femmeStudentsResults());