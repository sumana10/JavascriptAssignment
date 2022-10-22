// Q1)
// function job(){
//   return new Promise(function(resolve, reject){
//     reject();
//   })
// }

// let promise = job();

// promise
// .then(function(){
//   console.log('success 1')
// })
// .then(function(){
//   console.log('success 2')
// })
// .then(function(){
//   console.log('success 3')
// })
// .catch(function(){
//   console.log('Error 1')
// })
// .then(function(){
//   console.log('Success 4')
// })

//Output:
//  Error 1
//  Success 4

//Q3)
// const promise = new Promise(res => res(2));
// promise
// .then(v =>{
//   console.log(v);//2
//   return v * 2;
// })
// .then(v =>{
//   console.log(v);//4
//   return v * 2;
// })
// .finally(v =>{
//   console.log(v);//undefined
//   return v * 2;
// })
// .then(v =>{
//   console.log(v);//8
// })
//Output: 
//2
//4
//undefined
//8
//Q4)
// console.log('start');
// const fn = () =>(new Promise((resolve, reject)=>{
//   console.log(1);
//   resolve('success');
// }))
// console.log('middle');
// fn().then((res)=>{
//   console.log(res);
// })
// console.log('end');
//Output:
//start
//middle
//1
//end
//success
//Q6)
// Promise.resolve('Success!')
// .then(data =>{
//   return data.toUpperCase();
// })
// .then(data=>{
//   console.log(data);
// })
//Output:
//SUCCESS!
//Q7)
// var p = new Promise((resolve, reject)=>{
//   reject(Error('The Fails!'))
// })
// .catch(error => console.log(error))
//  .then(error => console.log(error));

//Cannot use error constructor inside reject...

//Q8)
// console.log('start');
// setTimeout(() => {
//   console.log('setTimeout');
// });
// Promise.resolve().then(()=>{
//   console.log('resolve');
// })
// console.log('end');
//Output:
//start
//end
//resolve
//setTimeout
// console.log('start');
// Promise.resolve(1).then((res)=>{
//   console.log(res);
// })
// Promise.resolve(2).then((res)=>{
//   console.log(res);
// })
// console.log('end');
//Output:
//start
//end
//1
//2
//Q5)
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(1000).then(() => console.log('runs after 1 seconds'));
//Q2)
// function sleep(time) {
//   return new Promise((resolve)=>setTimeout(resolve,time));
// }        
// async function main() {
//   await sleep(4000);
//   console.log('4');
// }
// main();