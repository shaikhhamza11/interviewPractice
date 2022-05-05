// const add = (x) => (y) => (z) => x + y + z

// const res = add(1)(2)(2)
// console.log(res)

// const userObj = {
//   firstname: "Hamza",
//   age: 21,
// }

// const getObj = (obj) => {
//   return (anotherObj) => {
//     return obj[anotherObj]
//   }
// }
// const res1 = getObj(userObj)("firstname")

// console.log(res1)

// // infinite currying add function

// const add = (a) => {
//   return function (b) {
//     if (b) return add(a + b)
//     return a
//   }
// }

// console.log(add(2)(5)(10)())

// const num = 4

// optimised
// const sum = (x) => (y) => y ? sum(x + y) : x
// const res = sum(10)(20)(60)()

// console.log(res)

// function a(x) {
//   return function (y) {
//     if (y) return a(x + y)
//     return x
//   }
// }

// console.log(a(1)(2)(5)(100)())
