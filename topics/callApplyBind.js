// const obj = {
//   firstname: "Hamza",
//   lastname: "Shaikh",
// }

// const obj2 = {
//   firstname: "Lionel",
//   lastname: "Messi",
// }
// const printDetails = function (age, state) {
//   console.log(this.firstname)
//   return `
//             Full Name:${this.firstname} ${this.lastname}
//             Age:${age}
//             State:${state}
//     `
// }

// console.log(printDetails.call(obj, 22, "Delhi"))
// console.log(printDetails.call(obj2, 21, "Maharashtra"))
// console.log(printDetails.apply(obj2, [21, "Maharashtra"]))
// const getMyDetails = printDetails.bind(obj, 21)
// console.log(getMyDetails("Gujrat"))

const printDetails = function (age, state) {
  // console.log(this)
  console.log(`
            Full Name:${this.firstname} ${this.lastname}
            Age:${age}
            State:${state}
    `)
}
var firstname = "global",
  lastname = "shaikh"
const obj1 = {
  firstname: "Hamza",
  lastname: "Shaikh",
}
const obj2 = {
  firstname: "Kamran",
  lastname: "Shaikh",
}

// call
printDetails(21, "Maharastra")
printDetails.call(obj1, 21, "Gujrat")
printDetails.apply(obj2, [22, "Delhi"])

// call polyfill

Function.prototype.myCall = function (context, ...args) {
  let currentContext = context || globalThis,
    randomProp = Math.random()
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random()
  }
  currentContext[randomProp] = this
  currentContext[randomProp](...args)
}
printDetails.myCall(obj1, 21, "Personal Call method")

// apply poly
Function.prototype.myApply = function (context, args) {
  let currentContext = context || globalThis,
    randomProp = Math.random()
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random()
  }
  currentContext[randomProp] = this
  currentContext[randomProp](...args)
}
printDetails.myApply(obj1, [21, "Personal Call method"])

Function.prototype.myBind = function (context, ...args) {
  let callback = this
  return function (...args2) {
    callback.myApply(context, [...args, ...args2])
  }
}

printDetails.myBind(obj1, 21)("Peronal Bind method")
