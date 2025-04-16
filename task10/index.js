// let fruits = ["apple", "banana",100,3.14]
// fruits.push("Zero")
// console.log(fruits + "\n")

// fruits.pop()
// console.log("after pop() \n[" + fruits + "]\n\n")

// fruits.shift()
// console.log("after shift() \n[" + fruits + "]\n\n")

// fruits.unshift("Watermelon")
// console.log("after unshift() \n[" + fruits + "]\n\n")

// fruits.splice(2,1,"AppleJuice")
// console.log("after splice() \n[" + fruits + "]\n\n")

// fruits.forEach((element)=>{
//     console.log(element + ",")
// })
// console.log("\n")
// let newFruits = fruits.map((x)=>{
//     return x+4;
// })

// console.log(newFruits)

// let other = fruits.filter((element)=>element.length>7)

// console.log("\n")

// console.log(other)
// console.log("\n")


const Animal ={
    type:"Mammal",
    method1:function display(){
        console.log(this.type);
    },
};

let rabbit = Object.create(Animal)
rabbit.method1() // logs Mammal

// let a = rabbit.type
// console.log(a) // logs Mammal

let a = rabbit["type"]
console.log(a="\n\n") // logs Mammal


person = {
    name:"Rahul",
    age:27,
    city:"Gangtok",
    greet: function (){
        console.log("Hello, "+ `I am ${this.name} ` + 
            `I am from ${this.city} `+ 
            `and I am ${this.age} years old`)
    }
}
person.greet()


console.log("\n\n") 