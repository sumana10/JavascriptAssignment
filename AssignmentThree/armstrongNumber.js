function armstrongNumber(n){

let temp = n;
let rem;
let sum = 0;

  while(temp > 0){

      rem = temp % 10;//remainder 

      sum+=(rem*rem*rem);//cube the remainder and store and add

      temp = parseInt(temp / 10);//reduce to get each digit
  }
  if(sum == n){//sum of all the digit^3

    console.log("Armstrong Number");
  }
  else{
    console.log("Not an Armstrong Number");
  }

}

armstrongNumber(153);