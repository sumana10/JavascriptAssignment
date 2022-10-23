function change(str){

  str = str.split(" ");
  let temp = str[0];
  str[0] = str[1];
  str[1] = temp;

   return str.join(" ");

}

let str = "Hii Boy";
console.log(change(str));