function matchhouse(num){

  if(num < 0)
  return num;

  else{

    let total = 6;
    total+= ((num-1)*5);
    return total;

  }

}

console.log(matchhouse(4));