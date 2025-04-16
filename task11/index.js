//This task makes me learn about DOM and eventlisteners
var count = 0

document.querySelector("button").addEventListener("click",(e)=>{
    count+=1
    document.querySelector("p").innerText = count

    
})