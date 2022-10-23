function acceptdashes(n){

  let str = n.split("");
  let newStr = "";
  for (let i = 0; i<str.length-1; i++){

    if(str[i] % 2 == 0 && str[i+1] % 2 == 0) newStr+=`${str[i]}-`;
    else
    newStr+=str[i];
  }
  if(str[str.length-1] % 2 == 0)
  newStr+=str[str.length-1]
  return newStr;
}

let n = "025468";

console.log(acceptdashes(n));