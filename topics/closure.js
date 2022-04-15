//! example 1

// function a() {
//   let name = "hamza";
//   return function b() {
//     return name;
//   };
// }
// const c = a()();
// console.log(c);

// !2)
// function a() {
//   let obj = {
//     name: "hamza",
//     age: 21,
//   };

//   function b() {
//     obj = { ...obj, location: "mumbai" };
//     anotherVariable = "love you";
//     return function c() {
//       console.log(obj, anotherVariable);
//     };
//   }
//   b()();
// }
// a();

// !3)same example with arrow function and grandparents

// const a = () => {
//   let name = "john";
//   return (b = () => (c = () => name));
// };

// const z = a()()();
// console.log(z);

// !example 4
// predict output
// 1)
// function a() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// !2) solution with only var
// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function onlyVar(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     onlyVar(i);
//   }
// }
// a();

// !3)
// let counter = (function () {
//   var k = 0;
//   return () => k++;
// })();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// !4)
// gguess output
// function createClosure() {
//   var badArr = [];
//   for (var index = 0; index < 5; index++) {
//     badArr[index] = function () {
//       return "n:" + index;
//     };
//   }
//   return badArr;
// }

// const arr = createClosure();
// for (let element in arr) {
//   console.log(arr[element]());
// }
// fix

// function createClosure() {
//   var badArr = [];
//   function fixCLosure(index) {
//     badArr[index] = function () {
//       return "n:" + index;
//     };
//   }
//   for (var index = 0; index < 5; index++) {
//     fixCLosure(index);
//   }

//   return badArr;
// }

// const arr = createClosure();
// for (let element in arr) {
//   console.log(arr[element]());
// }

// ! example 6

// function a() {
//   const numArr = [];
//   const numbers = [1, 2, 3];
//   for (var i = 0; i < numbers.length; i++) {
//     function fixCLosure(index) {
//       numArr.push(function () {
//         return "number:" + numbers[index];
//       });
//     }
//     fixCLosure(i);
//   }
//   return numArr;
// }
// const res = a();
// console.log(res[0]());
// console.log(res);
// for (let elem in res) {
//   console.log(res[elem]());
// }

// !example 7
// function outest(b) {
//   return function outer() {
//     // const myName = "hamza";
//     return function inner() {
//       let myName = " batmnan  ";
//       return `${myName} + '' + ${b}  `;
//     };
//   };
// }
// const res = outest("Hamza Shaikh")()();
// console.log(res);

// ! data hiding example

// function counter() {
//   let a = 0;
//   return function increment() {
//     return a++;
//   };
// }
// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// !scalable code

// function Counter() {
//   let count = 0;
//   this.increment = function () {
//     return (count += 1);
//   };
//   this.decrement = function () {
//     return (count -= 1);
//   };
// }

// const counter1 = new Counter();
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.decrement());

// counter2 = new Counter();
// console.log(counter2.increment());
