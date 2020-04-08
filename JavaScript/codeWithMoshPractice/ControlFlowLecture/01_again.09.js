const marks = [90, 90, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let average = 0;
  for (let mark of marks) {
    average += mark;
  } //for문 여기서 끝난다는 것을 몰랐네?
  let all = average / marks.length;
  if (all < 60) {
    return "F";
  }
  if (all < 70) {
    return "D";
  }
  if (all < 80) {
    return "C";
  }
  if (all < 90) {
    return "B";
  }
  if (all < 100) {
    return "A";
  }
}
