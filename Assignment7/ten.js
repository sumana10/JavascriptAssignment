function conversion(str){

  return str.toUpperCase();

}

let str = "Sumana";
console.log(conversion(str));

function conversionF(str){

  return str[0].toUpperCase()+str.slice(1);

}

let str1 = "sumana";
console.log(conversionF(str1));

function conversionL(str){

  return str[0].toUpperCase()+str.slice(1);

}

let str2 = "SUMANA";
console.log(conversionL(str2));

function swap(str){

//   str = str.split("");
  let n = str.length;
//   let newStr = "";

//   for(let i = n-1; i>=parseInt(n/2); i--){//5..4..3

//     newStr+=str[i];
//   // console.log(str[i]);
//  }
//  return newStr
 return str.slice(n/2)+str.slice(0,n/2);

}

let str3 = "SUMANA";
console.log(swap(str3));

function conversionR(str){

  return str.split("").reverse().join("");

}

let str4 = "SUMANA";
console.log(conversionR(str4));


const arr = "Sumana".split("");

const duplicate = arr.filter((ele, index) => arr.indexOf(ele) !== index);

console.log(duplicate.length)