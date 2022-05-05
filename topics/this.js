// var name = "Kamran"
// const a = function () {
//   console.log(this.name, this)
// }
// a()

// let obj1 = {
//   name: "Haaniya",
//   a,
// }
// let obj2 = {
//   name: "Hamza",
//   a,
// }

// console.log(obj1.a())
// console.log(obj2.a())

// let obj = {
//   name: "Hamza",
//   sayHello: function () {
//     console.log("Hello", this.name, this) //hamza
//     var sayBye = () => {
//       console.log("Bye", this.name, this) //sholay
//     }
//     sayBye()
//   },
//   sayBye: () => {
//     console.log("method", this.name, this)
//   },
// }
// obj.sayHello() //
// obj.sayBye()
// !1)Example of this
fullname = "John doe"
const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname
    },
  },
  getMyName: function () {
    return this.fullname
  },
  getFirstName: () => {
    console.log(this, "this")
    return this.fullname.split(" ")[0]
  },
  getLastName: (function () {
    return this.fullname.split(" ")[1]
  })(),
}
console.log(obj.prop.getFullname())
console.log(obj.getFirstName())
console.log(obj.getMyName())
console.log(obj.getLastName)
