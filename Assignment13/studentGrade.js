let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95"},
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
  ];

const studentNames2 = students.map((student) => {

const {marks, name} = student;
let str;

switch(true){

  case (marks > 90):
    str = "A";
    break;
  case (marks > 80):
    str = "B";
    break;
  case (marks > 70):
    str = "C";
    break;
  case (marks > 60):
    str = "D";
    break;
  case (marks > 50):
    str = "E";
    break;
    default: str =  "F";
}

const obj = {};
obj.name = name;
obj.grade = str;

return obj;

});
function groupBy(arr, grade) {
  const map = new Map(Array.from(arr, obj => [obj[grade], []]));
  arr.forEach(obj => map.get(obj[grade]).push(obj));
  return Array.from(map);
}
const map = groupBy(studentNames2, "grade");

for(const [key, value] of map){
  
  console.log(`${key}:`)

  value.map(obj =>{
  
    console.log(obj);
  })

}
