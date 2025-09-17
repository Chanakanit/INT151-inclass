const words = ['banana', 'apple', 'orange', 'mango']
// // words.reverse()
// // console.log(words);

// //1. annonymous arrow function
// let startAWords = words.filter(word => word.startsWith('a'))
// console.log(startAWords);
let startAWords = []
words.forEach(word => {
    if (word.startsWith("a")) {
        startAWords.push(word)
    }
})
console.log(startAWords);

// //2. annoymouse function declaration
// const startAWords = words.filter(function (word) {
//     return word.startsWith('a')
// })
// console.log(startAWords);

// //3. named arrow function
// const checkStartA = (word) => word.startsWith('a')
// const startAWords2 = words.filter(checkStartA)
// console.log(startAWords2)

//4. named funcrion declaration
// function checkStartA2(word) {
//     return word.startsWith('a')
// }
// const startAWords3 = words.filter(checkStartA2)
// console.log(startAWords3);
