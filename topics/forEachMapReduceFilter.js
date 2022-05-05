const persons = [
  {
    name: "Hamza",
    age: 21,
    marks: 20,
  },
  {
    name: "Kamran",
    age: 40,
    marks: 56,
  },
  {
    name: "Omair",
    age: 21,
    marks: 90,
  },
  {
    name: "Karim",
    age: 40,
    marks: 90,
  },
]

// forEach
// *forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

// persons.forEach((person, index, array) => {
//     console.log(person, index, "Object")
//     console.log(array, "Array")
// })

// polyfills for forEach

// Array.prototype.myforEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this)
//   }
// }
// persons.myforEach((person) => {
//   console.log(person)
// })

// filter
// * The filter() method creates a new array with all elements that pass the test implemented by the provided function.The function returns an array

// const res = persons.filter((person, index, array) => {
//   console.log(person, index, array)
//   return person.marks > 50
// })
// console.log(res)

// polyfilll for filter
// Array.prototype.myFilter = function (callback) {
//   let context = this
//   console.log(context, "this")
//   let arr = []
//   for (let i = 0; i < this.length; i++) {
//     if (callback.call(context, this[i], i, this)) {
//       arr.push(this[i])
//     }
//   }
//   return arr
// }
// const res = persons.myFilter((person, index, array) => {
//   console.log(person, index, array)
//   return person.marks > 50
// })
// console.log(res)

// map

// const res = persons.map((person, index, array) => {
//   console.log(person, index, array)
//   return person.age * 20
// })
// console.log(res)

// Array.prototype.myMap = function (callback) {
//   let arr = []
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this))
//   }
//   console.log(arr)
//   return arr
// }
// const res = persons.myMap((person, index, array) => {
//   console.log(person, index, array)
//   return { ...person, age: person.age * 20 }
// })
// console.log(res)
