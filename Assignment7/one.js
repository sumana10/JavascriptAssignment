function checkLength(s){

  if(s.length>4)
  return s.slice(0,4);

  return s;
}
let s = "Icecream";
console.log(checkLength(s));