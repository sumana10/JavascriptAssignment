const employees = [ 
    {
      id: 67,
      name: "Hitanshu",
      salary: 75000,
    },
    {
      id: 48,
      name: "Ninad",
      salary: 82000,
    },
      {
      id: 29,
      name: "Amandeep",
      salary: 98000,
    },
       
  ];
  
let count = 0;
const employeeId = employees.map((employee) => {

  count++;
  
  return employee.id

});

const employeeName = employees.map((employee) => {

  
  return `${employee.id}: ${employee.name}`

});
let sum = 0;
const employeeSalary = employees.map((employee) => {

 sum+=employee.salary;

  
  return employee.salary

});

console.log(employeeId);
console.log(employeeName);
console.log(employeeSalary);
console.log(sum/count);
console.log(count);