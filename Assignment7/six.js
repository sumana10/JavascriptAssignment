function freqchar(str, c) {

  str = str.split("");
  let count = 0;

  for(let e of str){
    if(e == c)
    count++;
  }
  return count;
  
}

let str = "applaea";
console.log(freqchar(str, 'a'));