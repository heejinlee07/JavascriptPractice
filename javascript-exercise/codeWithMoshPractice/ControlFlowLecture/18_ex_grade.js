const marks = [80, 80, 50];

//average = 70

// 0- 59: F
// 60 -69: D
// 70-79: C
// 80-89: B
// 90-100:A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  let sum = 0;
  for (let mark of marks) sum += mark;
  let average = sum / marks.length;

  /* 조건을 이렇게 작성해도 맞지만, 복잡하다.
  if (average >= 0 && average <= 59) return "F";
  if (average >= 60 && average <= 69) return "D";
  if (average >= 70 && average <= 79) return "C";
  if (average >= 80 && average <= 89) return "B";
  if (average >= 90 && average <= 109) return "A";
*/

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

/*let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += (marks[0] + marks[1] + marks[2]) / marks.length;
  }
  if (sum > 1 && sum < 59) {
    return F;
  }*/

// 아래와 같이 작성하면 보다 깔끔하다.
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

//리유저블한 코드
function calculateaverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  let average = sum / array.length; //혹은 그냥 여기서 return sum/array.length해도 됨.
  return average;
}
