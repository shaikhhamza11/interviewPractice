// *Normal copy

// let obj1 = {
//   age: 21,
//   city: "Mumbai",
// }
// let obj2 = obj1

// obj2.age = 200

// console.log(obj1)
// console.log(obj2)

// ! Problem : it will point to the same memory location

// * Shallow copy
// let obj1 = {
//   age: 21,
//   city: "Mumbai",
//   address: {
//     buildingName: "Dastagir Mansion",
//   },
// }

// let obj2 = Object.assign({}, obj1)

// obj2.pincode = 400009
// obj2.city = "Bandra"

// obj2.address.buildingName = "Rani"
// console.log(obj1, "1")
// console.log(obj2, "2")

// *Deep copy
let obj1 = {
  age: 21,
  city: "Mumbai",
  address: {
    buildingName: "Dastagir Mansion",
  },
  addName: function () {
    console.log("hellop")
  },
}
let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.address.buildingName = "Rani"

console.log(obj1)
console.log(obj2)
