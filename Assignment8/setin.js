// #A set is a data structure that can hold a collection of values. The values however must be unique.

// #Set can contain mix of different data types. You can store strings, booleans, numbers, or even objects all is same set.

// #Sets are dynamically sized. You don't have to declare the size of a set before creating it.

//#Sets do not maintian an insertion order.

//#Sets are iterables. They can be used with a for of loop.

//cd.>file.txt

const letters = new Set();


// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

letters.forEach (function(value) {
  
  console.log(value);
});

letters.delete("c");
console.log("After Delete");
for(const e of letters)
console.log(e);

const set = new Set();

function randomNumberGenerator(){
  return Math.floor(Math.random() * 11);
}

set.add(randomNumberGenerator());
set.add(randomNumberGenerator());
set.add(randomNumberGenerator());
set.add(randomNumberGenerator());

for(const e of set){
   if(parseInt(e) === 8)
  console.log(e);
 
}
console.log(set);

