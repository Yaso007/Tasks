function check(){
    $("#all").attr("class","clickedTask")
    console.log("you're inside check")
    $(".tasks").empty()
    if(numberOfTasks!=0){
        Object.keys(localStorage).forEach(key => {
            let task = localStorage.getItem(key);
            //console.log(`Key: ${key}, Value: ${value}`);
            taskObj = JSON.parse(task);
            taskName = taskObj["task"]
            taskStatus = taskObj["stat"]

            if(taskStatus != "pending"){
                $(".tasks").prepend(`
            
                    <div class="task">
                    <h6>${taskObj["taskNo"]}</h6>
                    <h3 class="output">${taskName}</h2>
                    <p class="stat">${taskStatus}</p>
            
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
             </div>`)
            }
            else{
                $(".tasks").prepend(`
            
                    <div class="task">
                    <h6>${taskObj["taskNo"]}</h6>
                    <h3 class="output">${taskName}</h2>
                    <p class="stat">${taskStatus}</p>
                    <input class="complete" type="checkbox">
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
             </div>`)
            }
          

            id = taskObj["taskNo"]
            console.log("For atrribute of button")
            console.log($(".stat").attr("id"))
             if(taskStatus == "completed")
                $("#id").checked = true;
            //     console.log(taskStatus)
            // }
            // else{
            //     $("#id").css("color","green")
            //     console.log(taskStatus)
            // }

            $(".task").addClass("addFlex")

        });
              
              
    }
}

var numberOfTasks = localStorage.length;
var taskId = numberOfTasks;

//adding styles to elements
$("body").addClass("center")
$(".head").addClass("addFlex")
$("#addtask").addClass("addFlex")

//$(".tasks").addClass("addFlex")
$(".filter").addClass("addFlex")
$(".tasks").addClass("addFlex").css("flex-direction","column")
$(".taskinput").addClass("addFlex")

//adding event listeners;
$("#addtask").on("click",()=>{
    $(".taskinput").css("visibility","visible")
})
$("#cancel").on("click",()=>{
    $(".taskinput").css("visibility","hidden")
})

$("#save").on("click",()=>{
    taskName = $("#inputtask").val();
    console.log(taskName)

    if(taskName==""){
        prompt("Task can't be empty");
    }
    else if(taskName !=""){

        numberOfTasks++;
        taskValue = {
            taskNo : taskId,
            task : taskName,
            stat :"pending"
        }

        //Save task to localstorage
        localStorage.setItem(`${taskId}`,JSON.stringify(taskValue))
        taskId++;
        console.log("saved "+ taskValue);

        //add it to DOM
        //if()
        $(".tasks").append(`
            
                <div class="task">
                <h6>${taskValue["taskNo"]}</h6>
                <h3 class="output">${taskName}</h2>
                <p class="stat">${taskValue["stat"]}</p>
                <input class="complete" type="checkbox">
                <button class="delete"><i class="fa-solid fa-trash"></i></button>

            </div>`)

            // $(".stat").css("color","orange")
            $(".task").addClass("addFlex")

            $(".taskinput").css("visibility","hidden")
            $("#inputtask").value = "";

            $(".delete").on("click",(event)=>{

                taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
                localStorage.removeItem(taskID)
                event.target.parentElement.parentElement.remove()
            
                console.log(taskID)
                console.log(localStorage)
            })
            $(".complete").on("change",(event)=>{

                if(event.target.checked){
        
                    taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
                    task = localStorage.getItem(taskID)
                    taskObj = JSON.parse(task)
                    taskObj["stat"] = "completed"
                    localStorage.removeItem(taskID)
                    console.log(localStorage)
                    localStorage.setItem(taskId,JSON.stringify(taskObj))
                    console.log("Changes made to " + taskID)
                    event.target.parentElement.parentElement.querySelector("p").textContent = taskObj["stat"]
                    
                    console.log("change pending to complete")
                }
                else if(!event.target.checked){
                    console.log("unchecked")
                    taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
                    task = localStorage.getItem(taskID)
                    taskObj = JSON.parse(task)
                    taskObj["stat"] = "pending"
                    localStorage.setItem(taskId,JSON.stringify(taskObj))
            
                }
                
        
            })
            //check();
    }
})

//$(document).ready(function() {
    $(".delete").on("click",(event)=>{

        taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
        localStorage.removeItem(taskID)
        event.target.parentElement.parentElement.remove()
    
        console.log(taskID)
        console.log(localStorage)
    })
//});
$(document).ready(function() {
    $(".complete").on("change",(event)=>{

        if(event.target.checked){

            taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
            task = localStorage.getItem(taskID)
            taskObj = JSON.parse(task)
            taskObj["stat"] = "completed"
            localStorage.removeItem(taskID)
            localStorage.setItem(taskId,JSON.stringify(taskObj))
            console.log("Changes made to " + taskID)
            event.target.parentElement.parentElement.querySelector("p").textContent = taskObj["stat"]
            
            console.log("change pending to complete")
        }
        else if(!event.target.checked){
            console.log("unchecked")
            taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
            task = localStorage.getItem(taskID)
            taskObj = JSON.parse(task)
            taskObj["stat"] = "pending"
            localStorage.setItem(taskId,JSON.stringify(taskObj))
    
        }
        

    })
});
//$(document).ready(function() {
    $("#pending").on("click",()=>{
        $("#all").addClass("notclickedTask")
        $("#completed").addClass("notclickedTask")
        $("#pending").addClass("clickedTask")
        console.log("hii")
        $(".tasks").empty()
        if(numberOfTasks!=0){
          Object.keys(localStorage).forEach(key => {
            let task = localStorage.getItem(key);
            //console.log(`Key: ${key}, Value: ${value}`);
            taskObj = JSON.parse(task);
            taskName = taskObj["task"]
            taskStatus = taskObj["stat"]
            if(taskStatus == "pending"){
                $(".tasks").append(`
            
                    <div class="task">
                    <h6>${taskObj["taskNo"]}</h6>
                    <h3 class="output">${taskName}</h2>
                    <p class="stat">${taskStatus}</p>
                    <input class="complete" type="checkbox">
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
                </div>`)
                // if(taskStatus == "pending")
                //     $(".stat").css("color","orange")
                // else
                //     $(".stat").css("color","green")
    
                $(".task").addClass("addFlex")
            }

        });
    
              
              
    }

    })
//});
//$(document).ready(function() {
    $("#completed").on("click",()=>{
        $("#all").addClass("notclickedTask")
        $("#pending").addClass("notclickedTask")
        $("#completed").addClass("clickedTask")
        console.log("hii")
        $(".tasks").empty()
        if(numberOfTasks!=0){
          Object.keys(localStorage).forEach(key => {
            let task = localStorage.getItem(key);
            //console.log(`Key: ${key}, Value: ${value}`);
            taskObj = JSON.parse(task);
            taskName = taskObj["task"]
            taskStatus = taskObj["stat"]
            if(taskStatus == "completed"){
                $(".tasks").append(`
            
                    <div class="task">
                    <h6>${taskObj["taskNo"]}</h6>
                    <h3 class="output">${taskName}</h2>
                    <p class="stat">${taskStatus}</p>
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
                </div>`)
                // if(taskStatus == "pending")
                //     $(".stat").css("color","orange")
                // else
                //     $(".stat").css("color","green")
    
                $(".task").addClass("addFlex")
            }

        });
              
              
    }

    })
//});
//$(document).ready(function() {
    $("#all").on("click",()=>{
        $("#completed").addClass("notclickedTask")
        $("#pending").addClass("notclickedTask")
        $("#all").addClass("clickedTask")
        console.log("hii")
        $(".tasks").empty()
        if(numberOfTasks!=0){
          Object.keys(localStorage).forEach(key => {
            let task = localStorage.getItem(key);
            //console.log(`Key: ${key}, Value: ${value}`);
            taskObj = JSON.parse(task);
            taskName = taskObj["task"]
            taskStatus = taskObj["stat"]
            if(taskStatus != "pending"){
                $(".tasks").prepend(`
            
                    <div class="task">
                    <h6>${taskObj["taskNo"]}</h6>
                    <h3 class="output">${taskName}</h2>
                    <p class="stat">${taskStatus}</p>
            
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
             </div>`)
            }
            else{
                $(".tasks").prepend(`
            
                    <div class="task">
                    <h6>${taskObj["taskNo"]}</h6>
                    <h3 class="output">${taskName}</h2>
                    <p class="stat">${taskStatus}</p>
                    <input class="complete" type="checkbox">
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
             </div>`)
            }
            $(".delete").on("click",(event)=>{

                taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
                localStorage.removeItem(taskID)
                event.target.parentElement.parentElement.remove()
            
                console.log(taskID)
                console.log(localStorage)
            })
            $(".complete").on("change",(event)=>{

                if(event.target.checked){
        
                    taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
                    task = localStorage.getItem(taskID)
                    taskObj = JSON.parse(task)
                    taskObj["stat"] = "completed"
                    localStorage.removeItem(taskID)
                    localStorage.setItem(taskId,JSON.stringify(taskObj))
                    console.log("Changes made to " + taskID)
                    event.target.parentElement.parentElement.querySelector("p").textContent = taskObj["stat"]
                    
                    console.log("change pending to complete")
                }
                else if(!event.target.checked){
                    console.log("unchecked")
                    taskID = event.target.parentElement.parentElement.querySelector("h6").textContent
                    task = localStorage.getItem(taskID)
                    taskObj = JSON.parse(task)
                    taskObj["stat"] = "pending"
                    localStorage.setItem(taskId,JSON.stringify(taskObj))
            
                }
                
        
            })
          
             
            //         $(".stat").css("color","orange")
            //  else
            //      $(".stat").css("color","green")
    
                $(".task").addClass("addFlex")
            

        });
              
              
    }

    })
//});


//localStorage.clear()

console.log(numberOfTasks)
check();
