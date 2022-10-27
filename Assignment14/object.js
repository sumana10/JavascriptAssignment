let employees = [
  {
  "id": 1,
  "name":"Abhinav",
  "department":"IT",
  "Salary":75000
  },
  {
  "id": 2,
  "name":"Gaurav",
  "department":"Sales",
  "Salary":52000
  },
  {
  "id": 3,
  "name":"Raj",
  "department":"IT",
  "Salary":64000
  }];

  const obj = employees.filter((employee) => employee.department == "IT");
  const obj2 = employees.filter((employee) => employee.Salary < 65000);


  console.log(obj);
  console.log(obj2);