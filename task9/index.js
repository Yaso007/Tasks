// let length = prompt("Enter the length")
// let breadth = prompt("Enter the breadth")
// console.log("The area of the rectangle is "+ length*breadth)

let age = prompt("Enter your age")
if(age>=0 && age<18){
    console.log("Minor")
}
else if(age>=18 && age<=60){
    console.log("Adult")
}
else if(age>60)
    console.log("Senior")
else 
    console.log("Age cannot be negative")