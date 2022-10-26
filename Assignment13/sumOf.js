const arr = [5, 200, 0, 3, 4, 50]; 
const sumOf = arr.reduce((accu,curr)=> (accu+=curr),0);
const avg = sumOf/arr.length;
console.log(sumOf);
console.log(avg.toFixed(2));