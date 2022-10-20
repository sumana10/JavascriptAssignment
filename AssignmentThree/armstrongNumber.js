function armstrongNumber(n){

let temp = n;
let rem;
let sum = 0;

  while(temp > 0){

      rem = temp % 10;

      sum+=(rem*rem*rem);

      temp = parseInt(temp / 10);
  }
  if(sum == n){

    console.log("Armstrong Number");
  }
  else{
    console.log("Not an Armstrong Number");
  }

}

armstrongNumber(153);