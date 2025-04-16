// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// async function sendPromise(passed){
//     let value = !passed
//     return new Promise((resolve, reject)=>{
//         if(value){
//         setTimeout(()=>{
//             resolve("The promise was sent after 4s")
//         },0)
//          }
//          else 
//             reject("Error you passed a true value")
//     })
// }

// async function recieve(passed) {
//     try{
//         const result = await sendPromise(passed)
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// recieve(false)



// console.log("Hello warld")
// const myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success) resolve("Hey sup?")
//     else 
//         reject("Get out")
// })


// myPromise
//     .then((value)=>{
//         console.log(value)
//         return value + " howdy!"
//     })
//     .then((x)=>{
//         console.log(x)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })


// console.log(myPromise)
// myPromise.then((value)=>{
//     console.log(value)

// 
// async function getPromise(){
//     try{
//         let result = await myPromise
//         let result2 = result + "howdy"
//         console.log(result2)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getPromise()
async function fetchAJoke(){
    try{
        result = await fetch("https://official-joke-api.appspot.com/random_joke")
        if(!result.ok){
            throw new Error("Failed to fetch")
        }
        const joke= await result.json()
        document.querySelector("p").innerHTML = `<h3>${joke.setup}</h3><h3>${joke.punchline}</h3>`
        console.log(joke)
    }
    catch(error){
        console.log(error)
    }
}
document.querySelector("button").addEventListener("click",fetchAJoke)