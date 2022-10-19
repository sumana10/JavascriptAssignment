function grade(marks) {

 
  let str;
  // let marks = parseInt(mark);
  switch(true){

    case (marks >= 90 && marks <= 100):
      str = "S grade";
      break;
    case (marks >= 80 && marks < 90):
      str = "A grade";break;
    case (marks >= 70 && marks < 80):
      str = "B grade";break;
    case (marks >= 60 && marks < 70):
      str = "C grade";break;
    case (marks >= 50 && marks < 60):
      str = "D grade";break;
    case (marks >= 40 && marks < 50):
      str = "E grade";break;
    case (marks >= 0 && marks < 40):
      str = "Student has failed";break;
     default: str =  "Invalid marks";
  }
  return str;
}

console.log(grade(200));