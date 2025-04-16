var countOfName = -1
var countOfEmail = -1
function display(e){
    countOfName +=1
    countOfEmail +=1
    username = document.querySelector("#name").value 
    email = document.querySelector("#email").value
    console.log(username,email)

    localStorage.setItem(countOfName,username)
    localStorage.setItem(countOfEmail,email)

    User = localStorage.getItem(countOfName)
    Email = localStorage.getItem(countOfEmail)

    adjacent = ` <p> Name: ${User}</p><p>Email: ${Email}</p>`
    element = document.querySelector("form")
    element.insertAdjacentHTML("beforeend",adjacent)


}

document.querySelector("button").addEventListener("click",display)
