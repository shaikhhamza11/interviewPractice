let count = 0

const getData = () => console.log("Fetching Data....", count++)

function trailingDebounce(func, delay = 300) {
  let timeoutId
  let context = this
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

const optimisedGetData = trailingDebounce(getData, 400)
document
  .querySelector("#search_input")
  .addEventListener("keyup", optimisedGetData)
