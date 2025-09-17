//1. function declaration
function sum(a, b) {
  return a + b
}
// sum(1, 2)
const x = sum
console.log(x(1, 2))  
//2. function expression (arrow syntax)
const sum2 = () => {
  return a + b
}
//3. function expression (annonymous function declaration )
const sum3 = function () {
  return a + b
}
 
const getFunc = (func) => func * 2
console.log(getFunc(sum(5,6)));
console.log("--------------------");
function Test(x) {
    return x
}
function Test2(x) {
    return x + 50
}
console.log(Test(Test2)(10))

function sumArg(...c) {
    let result = 0
    for (let i in c){
        result += arguments[i]
    }
    console.log(result)
}
sumArg(4,5,6)

function doSomething(greet='Hi', someone='Guest', firstSent){
    return `${greet}, ${someone}, ${firstSent}`
}
console.log(doSomething())
console.log(doSomething('aaa'))
console.log(doSomething('aaa', 'bbb'))
console.log(doSomething('aaa', 'bbb', 'ccc'))
console.log(doSomething('aaa', 'bbb', 'ccc', 'ddd'))

console.log("-----------------------");
//1. store functions in variables
function add(n1, n2) {
return n1 + n2
}
let _sum = add
let addResult1 = add(10, 20)
let addResult2 = _sum(10, 20)
console.log(`add result1: ${addResult1}`)
console.log(`add result2: ${addResult2}`)

//2.Passing a function to another function
function operator(n1, n2, fn) {
return fn(n1, n2)
}
function multiply(n1, n2) {
return n1 * n2
}

let multiplyResult = operator(5, 3, multiply)
console.log(`multiply result: ${multiplyResult}`)

//3. return function as value of another function
function sayGoodBye(){
return 'Good bye'
}
function doSomething(){
return sayGoodBye
}
let doIt=doSomething()
console.log(doIt())

