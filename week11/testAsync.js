// //sync
// console.log("starting...")
// console.log("working...")
// console.log("endging")

// //async
// console.log("staring...")
// setTimeout(() => console.log("working..."), 500)
// console.log("ending...")

// console.log("-------------------------------------------");
function doSomething (hasProblem){
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            (hasProblem ? reject("Fail Working") : resolve("Fully complete")), 5000)
    }
)
}
console.log('staring...')
//2) async-await
async function runworking() {
    try {
        const workingStatus = await doSomething(true)
        console.log(workingStatus)
        console.log("ending...");
    }
    catch(error){
        console.log(error)
    }

} 
runworking()
//1) using .then().catch()
// console.log('staring...')
// doSomething(true).then((workingStatus) => {

// })
// .catch((errorMessage) => {
//     console.log(errorMessage)
// })

