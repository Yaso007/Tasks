const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("Welcome to my server");
        
    }
    else {
        res.write("Page not found!")
    }
    res.end()
})

server.listen(3000,()=>{
    console.log("Listening")
})