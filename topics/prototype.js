const c = console.log.bind(console)

const obj1 = {
  firstName: "Hamza",
  lastName: "Shaikh",
  getName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  getRoll: function () {
    return `${this.rollno} ${this.className}`
  },
}
c(obj1)
const obj2 = {
  firstName: "Krishna",
  lastName: "Kaul",
  rollno: 21,
  __proto__: obj1,
}
c(obj2, "obj2")

const obj3 = {
  className: "Chem",
  __proto__: obj2,
}
c(obj3, "obj3")
