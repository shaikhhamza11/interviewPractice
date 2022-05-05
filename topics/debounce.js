// trailing debounce

let count = 0
let clickCounter = 0
const getData = () => {
  console.log("Fetching data ... ", count++)
}

const optimisedGetData = trailingDebounce(getData, 400)

// trailing debounce

function trailingDebounce(func, delay) {
  let timeoutId
  let context = this
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}
const handleClick = () => console.log("Clicked", clickCounter++)

function leadingDebouce(func, delay = 300) {
  let timeoutId = null
  let context = this
  return function (...args) {
    if (timeoutId === null) {
      func.apply(context, args)
    }
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = null
    }, delay)
  }
}

document
  .getElementById("search_input")
  .addEventListener("keyup", optimisedGetData)

document
  .getElementById("btn")
  .addEventListener("click", leadingDebouce(handleClick, 400))

let mouseCounter = 0
// window.addEventListener("resize", () =>
//   console.log("Unthrottled", mouseCounter++)
// )
// window.addEventListener(
//   "resize",
//   throttling(() => console.log("Mouse move", mouseCounter++), 400)
// )
window.addEventListener("resize", () =>
  console.log("Mouse move", mouseCounter++)
)

// throttling

function throttling(func, delay) {
  let shouldWait = false
  let context = this
  return function (...args) {
    if (shouldWait) return
    func.apply(context, args)
    shouldWait = true
    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}
