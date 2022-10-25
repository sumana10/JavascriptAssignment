const arrU = [ 1, 2, 3, 2, 3, 4, 5 ]; 
const unique = arrU.filter((ele, index) => arrU.indexOf(ele) == index );
const duplicate = arrU.filter((ele, index) => arrU.indexOf(ele) != index );
console.log(unique);
console.log(duplicate);