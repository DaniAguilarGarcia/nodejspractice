//creating a promise method. timer times out after 6 seconds
let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise resolved")
    },6000)})
//console log before calling the promise
console.log("Before calling promise");

//call the promise and wait for it to be resolved
myPromise.then((successMessage)=>{
    console.log("fROM CALLBACK " + successMessage)

})

console.log("adter calling promise");