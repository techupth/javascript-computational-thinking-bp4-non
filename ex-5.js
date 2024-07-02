let studentScores = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10
};
let totalScore = 0;
let numberOfStudents = 0;

for (let student in studentScores) {
  totalScore += studentScores[student];
  numberOfStudents++;
}
let averageScore = totalScore / numberOfStudents;
let avgScore = averageScore.toFixed(2);
console.log(`Average score is ${avgScore}`);


let highestScore = -Infinity;
let studentWithHighestScore = '';
for (let student in studentScores) {
    let score = studentScores[student];
    if (score > highestScore) {
        highestScore = score;
        studentWithHighestScore = student;
    }
}
console.log(`${studentWithHighestScore} has the highest score, which is ${highestScore} points`);


let lowestScore = Infinity;
let studentWithLowestScore = '';

for (let student in studentScores) {
    let score = studentScores[student];
    if (score < lowestScore) {
        lowestScore = score;
        studentWithLowestScore = student;
    }
}
console.log(`${studentWithLowestScore} has the lowest score, which is ${lowestScore} points`);