function numOfPrime(input1, input2) {
  
  let count=0;
 
        for (let num = input1; num <= input2; num++)
        {
            let isPrime = true;

            let p = parseInt(Math.sqrt(num));

            for (let i=2; i <= p; i++)
            {
                if ( num % i == 0)
                {
                    isPrime = false;
                    break;
                }
            }
 
            if ( isPrime == true )
                count++;
        }
        return count;
}

console.log(numOfPrime(1, 1000));