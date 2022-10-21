function pattern(){

let string = "";
let count = 1;

  for(let i = 1; i<=4; i++){//number of row
    for(let j = 1; j<=i; j++){//number of element in each row
      string += count;//concat what to show
      count++;
    }
    if(i<4)
    string += "\n";//next line after each row
  }
  console.log(string);//final pattern 
}

pattern();