function specialNumber(number){

  let temp = number;
  let special = 0;

  while (number > 0)  
  {  
    
    let rem = number % 10;  
    
    let fact = 1;  
  
    for(let i = 1; i<=rem; i++)  
    {  
          
      fact = fact*i;  
    }  
 
    special = special + fact;  

    number = parseInt(number / 10);  
  }  
  if(temp == special)  
  {  
    console.log(`${temp} is a Special Number`); 
  }  
  else{
    console.log(`${temp} is not a Special Number`); 
  }
}

specialNumber(145);