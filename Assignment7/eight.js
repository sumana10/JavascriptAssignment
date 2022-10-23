function firstChar(str) {

  str = str.split("");
  if(str[0] == str[0].toLowerCase())
  return true;

  return false;
  
}

let str = "dApp";
console.log(firstChar(str));