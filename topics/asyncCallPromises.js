// * callback promises async await
// !1
// const names = ["hamza", "shaikh"]

// const addNames = (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       names.push(name)
//       let error = false
//       if (error) {
//         return reject("Not fair")
//       }
//       resolve()
//     })
//   }, 2000)
// }

// const displayNames = () => {
//   setTimeout(() => {
//     let output = ""
//     names.forEach((name) => {
//       output += `<li>${name}</li>`
//     })
//     document.body.innerHTML = output
//   }, 1000)
// }

// addNames("haaniya")
//   .then(() => {
//     displayNames()
//   })
//   .catch((err) => console.log(err))

// const func = async () => {
//   await addNames("cr7")
//   displayNames()
// }

// func()

// ! Promise

// * Promise is an object that represnt eventual completion or failure  of async task
// * A promise has three states
// * 1)Pending :Initial state
// * 2)Fullfiled : fullfilled successfully
// * 3)Rejected : rejected error

//  ! Callback hell

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("Hello")
//     }, 2000)
//   }, 3000)
// }, 2000)
//  ! real example

// function getData() {
//   let request = new XMLHttpRequest()
//   request.open("Get", "https://restcountries.com/v3.1/name/portugal")
//   request.send()
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText)

//     const { borders } = data

//     let request2 = new XMLHttpRequest()
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${borders}`)
//     request2.send()
//     request2.addEventListener("load", function () {
//       const [data] = JSON.parse(this.responseText)
//       console.log(data)
//     })
//   })
// }

// getData()

// using promises

// creation of promises

// let promise = new Promise((resolve, reject) => {
//   //   resolve("Resolved")
//   rejected("Rejected")
// })

// promise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message))

function getDataUsingPromises() {
  fetch("https://restcountries.com/v3.1/name/portugal")
    .then((response) => response.json())
    .then((data) => {
      const border = data[0].borders
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
// getDataUsingPromises()

async function getData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/name/portugal")

    const data = await response.json()
    const border = data[0].borders
    const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    const data2 = await res2.json()
    console.log(data2)
  } catch (e) {
    console.log(e.message)
  }
}

getData()
