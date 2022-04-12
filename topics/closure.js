// example 1

// function a() {
//   let name = "hamza";
//   return function b() {
//     return name;
//   };
// }
// const c = a()();
// console.log(c);

// 2)
function a() {
  let obj = {
    name: "hamza",
    age: 21,
  };

  function b() {
    obj = { ...obj, location: "mumbai" };
    anotherVariable = "love you";
    return function c() {
      console.log(obj, anotherVariable);
    };
  }
  b()();
}
a();

// 3)same example with arrow function and grandparents

// const a = () => {
//   let name = "john";
//   return (b = () => (c = () => name));
// };

// const z = a()()();
// console.log(z);
