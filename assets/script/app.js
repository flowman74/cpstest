const timer = document.querySelector('#timer').firstElementChild
const cps = document.querySelector('#stats').firstElementChild
const clicks = document.querySelector('#stats').lastElementChild
const test = document.querySelector('#test')

let time = 5 // in seconds
let clicksCount = 0

const clicksHandler = () => (clicksCount += 1)

test.addEventListener('click', clicksHandler)

setTimeout(() => {
  cps.textContent = clicksCount / time
  test.removeEventListener('click', clicksHandler)
  setTimeout(() => {
    test.addEventListener('click', () => location.reload())
  }, 2500)
}, time * 1000)

setInterval(() => {
  clicks.textContent = clicksCount
  timer.textContent = time
}, 50)
