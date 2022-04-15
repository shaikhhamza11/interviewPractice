// name = "Kamran";
// const a = function () {
//   console.log(this.name, this);
// };
// a();

// let obj1 = {
//   name: "Haaniya",
//   a,
// };
// let obj2 = {
//   name: "Hamza",
//   a,
// };

// obj1.a();
// obj2.a();

// let obj = {
//   name: "Hamza",
//   sayHello: function () {
//     console.log("Hello", this);
//     var sayBye = () => {
//       console.log("Bye", this);
//     };
//     sayBye();
//   },
// };
// obj.sayHello();

// !1)Example of this
// fullname = "John doe";
// const obj = {
//   fullname: "Colin Ihrig",
//   prop: {
//     fullname: "Aurelio De Rosa",
//     getFullname: function () {
//       return this.fullname;
//     },
//   },
//   getMyName: function () {
//     return this.fullname;
//   },
//   getFirstName: () => {
//     console.log(this, "this");
//     return this.fullname.split(" ")[0];
//   },
//   getLastName: (function () {
//     console.log(this);
//     return this.fullname.split(" ")[1];
//   })(),
// };
// console.log(obj.prop.getFullname()); //*Aurelio De Rosa
// console.log(obj.getFirstName()); //*john
// console.log(obj.getMyName()); //*Colin Ihrig
// console.log(obj.getLastName); //*doe

// ! call apply bind

var firstname = "Cristiano";
var lastname = "Ronaldo";
const obj1 = {
  firstname: "Hamza",
  lastname: "Shaikh",
};
let printFullName = function (city, state) {
  console.log(this);
  return `${this.firstname} ${this.lastname}. I live in ${state} in ${city}`;
};
const obj2 = {
  firstname: "Kamran",
  lastname: "Shaikh",
};
// console.log(printFullName("Madeiera", "Portugal"));
// console.log(printFullName.apply(obj1, ["Goa", "Maharashtra"]));
const getName = printFullName.bind(obj1);
console.log(getName());
// console.log(printFullName.apply(obj2, "Mumbai", "Maharastra"));
