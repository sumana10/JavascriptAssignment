function nthlargest(array, n){
  
  let arr = array.sort((a,b)=>a-b).reverse();

  return(arr[n-1]);

}
let arr = [3,45,6,7,23,5,7,8];
let n = 3;
console.log(nthlargest(arr, n));