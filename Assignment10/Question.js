const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

// Output:
// Hello John
// Hello Tina
// Hello Kale
// Hello Max
//useFunction is a higher order function and argFn is a callback function