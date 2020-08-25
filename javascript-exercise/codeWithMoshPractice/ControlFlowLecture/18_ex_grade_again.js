const marks = [80, 80, 50];

//average = 70
//0 -59: F
//60-69: D
//70-79:C
//80-89:B
//90-100:A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let result = 0;
  for (let mark of marks) result += mark;
  let average = result / marks.length;

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  if (average < 100) return "A";
}
