let hospitals = [
  {
  "id": 1,
  "name":"Hospital A",
  "location":"Delhi",
  "noOfBeds":450,
  "availability":"Yes",
  },
  {
  "id": 2,
  "name":"Hospital B",
  "location":"Pune",
  "noOfBeds":150,
  "availability":"No" 
 },
  {
  "id": 3,
  "name":"Hospital C",
  "location":"Pune",
  "noOfBeds":350,
  "availability":"Yes"
  }]

  const obj = hospitals.filter((hospital)=> hospital.noOfBeds > 200)
  const obj2 = hospitals.filter((hospital)=> hospital.availability == "Yes")
  const obj3 = hospitals.filter((hospital)=> hospital.location == "Pune")

  console.log(obj)
  console.log(obj2)
  console.log(obj3)