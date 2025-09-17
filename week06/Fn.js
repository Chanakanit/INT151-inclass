//เธอฟ้อนเอน ผมฟ้อนรำ - 006

const greet = (name, formatter) => formatter(name)
const shout = text => text.toUpperCase() + '!!!'

const fullname = text => "Mr." + text + " Unkhaow"

console.log(greet('Alice', fullname))

function calculate(nums, compute) {
  return compute(nums)
}
function sum(elements) {
  return elements.reduce((total, current) => total + current)
}
function max(elements) {
  return Math.max(...elements)
}
function min(elements) {
  return Math.min(...elements)
}
function sort(elements) {
  return elements.sort((a, b) => a - b)
}
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))

console.log("----------------");

let a = 1 //global scope
function doSomething(x) {
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    return `hi ${x}`
  }
   return echo
}

let result = doSomething()
console.log(doSomething("guest"))
console.log(doSomething("guest")())

 console.log("----------------");

 // Closures
 function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
console.log(add())
console.log(getCountValue())
// const c = counter()
// console.log(c.increment()) //1
// console.log(c.increment()) //2
// console.log(c.decrement()) //1
// console.log(c.getCount()) //1
 