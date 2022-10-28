//for
//while
//foreach
//map

let array = [ 1, 2, 3, 4, 5, 6 ];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

let index = 0;
 
while (index < array.length) {
    console.log(array[index]);
    index++;
}

// array.forEach(myFunction);
// function myFunction(item, index)
// {
//     console.log(item);
// }

array.forEach((item, index)=>(
  console.log(item)
))

// let square = x => Math.pow(x, 2);
// let squares = array.map(square);
console.log(array);
let squares = array.map((element) => element*element);
console.log(squares);