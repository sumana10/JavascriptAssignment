const array =["John", "Rohn", "Danny", "James"];

const it = array[Symbol.iterator]();

// for (let value of it) {
//  console.log(value)
// }

while (true) {
  const result = it.next();
  if (result.done) break;
  console.log(result.value);
}

const word = "iNeuron".split("");

const itword = word[Symbol.iterator]();

// console.log(JSON.stringify(itword.next()));
// console.log(JSON.stringify(itword.next()));
// console.log(JSON.stringify(itword.next()));
// console.log(JSON.stringify(itword.next()));

while (true) {
  const result = itword.next();
  if (result.done) break;
  console.log(result.value);
}


function myNumbers(){
  let n = 0;
  return{
    next:function(){
      n+=10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
console.log(n.next()); // 10
console.log(n.next()); // 20
console.log(n.next()); // 30

const Array1 = ["a", "b", "c", "d"];
const Array2 = ["e", "f", "g", "h", "a", "i", "j"];


const result = Array1.filter(function(element){
  return Array2.indexOf(element) > -1;
})

console.log(result);