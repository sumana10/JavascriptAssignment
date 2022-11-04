// function removeLeadingTrailing(str){

//   str = str.replace(/^0+(\d)|(\d)0+$/gm, '$1$2');

//   let num =  parseInt(str);

//   num = Math.floor(num);
  
 
//   console.log(num);

// }


// removeLeadingTrailing("230.0000");

// function num_of_digits(str) {
//   return str.replace(/[^0-9]/g, '').length;
// }

// console.log(num_of_digits("1000"));

// function isPrime(n) {
//   var re = /^.?$|^(..+?)\1+$/;
//   return !re.test('1'.repeat(n));
// }

// console.log(isPrime("134"));

function findHappiness(str){

  var reg = /\bhappiness\b/
  if(reg.test(str)) return "Hurray!";
  return "There is no happiness..";

}

console.log(findHappiness("You give me the feeling of happiness"));

// function timeFormat(str){

//   var reg = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
//   if(reg.test(str)) return true;
//   return false;
// }

// console.log(timeFormat("09:00"));

function validatePIN(str){

  var reg = /^([0-9]{4}|[0-9]{6})$/
  if(reg.test(str)) return true;
  return false;

}

console.log(validatePIN("2400"));

// function doubleLetters(word){

//   const rx = /^[a-zA-Z]([a-zA-Z])\1[a-zA-Z]+$/;

//   console.log(word, '->', rx.test(word))

// }

function hasConsecutiveIdenticalLetters(word){
  for (let i = 1; i < word.length; i++) {
      if (word[i-1] === word[i]) {
          return true;
      }
  }
  return false;
}

console.log(hasConsecutiveIdenticalLetters("loop"));
console.log(hasConsecutiveIdenticalLetters("yummy"));

function isValidHexCode(word){

  let rx = /^#([A-Fa-f0-9]{6})$/;

  console.log(word, '->', rx.test(word))
}


isValidHexCode("#CD5C5C");

function sevenBoom(words){

  var reg = /\b7\b/
 
  for (let word of words) {
    if(reg.test(word)) return "Boom!";
  }

  return "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); 
console.log(sevenBoom([8, 6, 33, 100])); 

let s = "ttt"; 
console.log(s.replaceAll("x","").length===s.replaceAll("o","").length)  