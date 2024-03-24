function gradeGenerator(marks) {
  let grade;

  if (typeof marks === "number") {
    switch (true) {
      case marks >= 0 && marks < 40:
        grade = "E";
        break;
      case marks >= 40 && marks < 49:
        grade = "D";
        break;
      case marks >= 49 && marks < 60:
        grade = "C";
        break;
      case marks >= 60 && marks <= 79:
        grade = "B";
        break;
      case marks > 79 && marks <= 100:
        grade = "A";
        break;
      default:
        return "Please enter number between 0 and 100!";
    }
    return grade;
  } else return "Please enter a number!";
}

//console.log(gradeGenerator(80));
