function removeLeadingTrailing(str){

  str = str.replace(/^0+(\d)|(\d)0+$/gm, '$1$2');

  let num =  parseInt(str);

  num = Math.floor(num);
  
 
  console.log(num);

}


removeLeadingTrailing("230.0000");

function num_of_digits(str) {
  return str.replace(/[^0-9]/g, '').length;
}

console.log(num_of_digits("1000"));

function isPrime(n) {
  var re = /^.?$|^(..+?)\1+$/;
  return !re.test('1'.repeat(n));
}

console.log(isPrime("134"));

function findHappiness(str){

  var reg = /\bhappiness\b/
  if(reg.test(str)) return "Hurray!";
  return "There is no happiness..";

}

console.log(findHappiness("You give me the feeling of happiness"));

function timeFormat(str){

  var reg = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
  if(reg.test(str)) return true;
  return false;
}

console.log(timeFormat("09:00"));