 async function inc(x) {
  x = x + await 1
  return x;
  }
  async function increment(x){
  x = x + 1
  return x
  }
  // inc(1).then(function(x){
  // increment(x).then(function(x){
  // console.log(x)
  // })
  // })
  //output: 3
// let p = new Promise(function (resolve, reject) {

//         reject(new Error("some error"));
//         setTimeout(function(){
//         reject(new Error("some error"));
//         },1000)
//         reject(new Error("some error"));
//       });

// p.then(null, function (err) {
//   console.log(1);
//   console.log(err);
// }).catch(function (err) {
//   console.log(2);
//   console.log(err);
// });
//Output: Error:some error

 async function f1() {
  console.log(1);
  }
  async function f1() {
  console.log(2);
  }
  console.log(3);//3
  f1();//2
  console.log(1);//1
  f2();
  async function f2() {
  console.log("Go!");//
  }

  // Output:
  // 3
  // 2
  // 1
  // Go!

  function resolveAfterNSeconds(n,x) {
    return new Promise(resolve => {
    
    setTimeout( () =>{
    resolve(x);
    }, n);
    });
    }
    
    (function(){
    let a = resolveAfterNSeconds(1000,1)//1
    a.then(async function(x){
    let y = await resolveAfterNSeconds(2000,2)//2
    let z = await resolveAfterNSeconds(1000,3)//3
    let p = resolveAfterNSeconds(2000,4)//4
    let q = resolveAfterNSeconds(1000,5)//5
    console.log(x+y+z+await p +await q);
    })
    })()
    // Output:
    // 15