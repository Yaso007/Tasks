saveTask1 = 0;
taskcounter = localStorage.length;
numberOfTasks = localStorage.length;

function dbChecker(){
    for(i = 0;i<numberOfTasks;i++){
        task = localStorage.getItem(i)
        console.log(task)
    }
}

function addTask(){
    if(saveTask1 == 0){
        saveTask1 = 1
        body = document.querySelector("body")
        body.insertAdjacentHTML("beforeend",inputDiaglogue())

        

        document.querySelector(".save").addEventListener("click",function saveTask(){
            
            task = document.querySelector("#taskip").value

            if(numberOfTasks==0)document.querySelector("h3").remove()

            localStorage.setItem(`${taskcounter}`,task)
            taskcounter++;
            numberOfTasks++
            console.log(task +" is saved")
           

            saveTask1 = 0;
            document.querySelector(".inputDialogue").remove()
            document.querySelector(".out").insertAdjacentHTML("beforeend",`
               <div class="card"> <input type="checkbox" class="checkme"><p>${task}</p></div>
            `)

        })
        //console.log(task.value)

    }
    else 
        prompt("First save the task")
}

function inputDiaglogue(){
    box = `<div class="inputDialogue"><input placeholder="Enter the task" id="taskip"><button class="save" type="submit">Save Task</button></inputDialogue>`
    return box
}

function getTasks(){
    if(numberOfTasks == 0){
        document.querySelector(".head").insertAdjacentHTML("afterend",`<h3>No tasks saved</h3>`)
    }
    else{
        //document.querySelector("h3").remove()
        //document.querySelector(".head").insertAdjacentHTML("afterend",outerDiv)
        for(i = 0;i<numberOfTasks;i++){
            task = localStorage.getItem(i)
            console.log(task)
            document.querySelector(".out").insertAdjacentHTML("beforeend",`
                   <div class="card"> <input type="checkbox" class="checkme"><p>${task}</p></div>
                `)
        }

    }
    
}
a = document.querySelector("button").addEventListener("click",addTask)
dbChecker()
// localStorage.clear()
getTasks()

