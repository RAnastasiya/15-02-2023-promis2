"use strict";

// fetch("./assets/js/data.json")
//   .then((response)=>response.json())
//   .then((data)=>{
//     data.forEach((user)=>{
//       console.log(user.lastName, user.age)
//     })
//   })
//   .catch((error)=>{console.log(error)})
//   .finally(()=>{console.log('finally')})

// const MyPromise1 = new Promise(executor)
// function executor(resolve, reject){
//   Math.random() > 0.5 ?
//   resolve() :
//   reject()
// }
// console.log(MyPromise1)

// function timeout(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
// }
// timeout(1500)
//   .then(() => {
//     console.log("resolve");
//   })
//   .catch(() => {
//     console.log("reject");
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const promise = new Promise((resolve, reject) => {
//   Math.random() > 0.5 ? resolve('data') : reject('error');
// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// NOT WORKING
// function loadImage(path) {
//   const newImage = new Image();
//   newImage.src = path;
//   return new Promise((resolve, reject) => {
//     newImage.addEventListener("load", () => {
//       resolve();
//     });
//     newImage.addEventListener("error", () => {
//       reject(new Error("path is invalid"));
//     });
//   });
// }
// loadImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Ftv%2Fsee%2Fs01&psig=AOvVaw2DqI--FAX3wnkPp4bsE_uE&ust=1676551644449000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCD7tvHl_0CFQAAAAAdAAAAABAE")
//   .then((element) => {
//     document.body.append(element);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*

console.log('start')  // synchronously
setTimeout(
  ()=>{console.log('timeout'), 0} // macro
)
const pr = new Promise((resolve, reject) => {
  console.log('promise start')  // synchronously
  resolve();
  reject()
  console.log('promise end')  // synchronously
})
pr.then(()=>{
  console.log('resolve')  // micro
})
.catch(()=>{
  console.log('reject')  // micro
})
.finally(()=>{
  console.log('finally')  // micro
})
console.log('end')  // synchronously

*/

// function handlerPromise(promise) {
//   return promise.then((data) => {
//     console.log(data);
//   });
// }
// const value = 45;
// // const valuePromise = new Promise((resolve, reject) => {
// //   resolve(value)
// // })
// const valuePromise = Promise.resolve(value)
// handlerPromise(valuePromise);


// делегирование событий
const list = document.getElementById("list");
list.addEventListener("click", handlerList);

function handlerList({ target }) {
  if(target.parentNode === list) target.innerText += '!'
}
