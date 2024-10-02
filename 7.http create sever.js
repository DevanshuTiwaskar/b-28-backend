const http = require("http");


let server = http.createServer(function(req, res){
    if(req.url === "/"){
        res.end("hello")    
        console.log("done")
    }
    else if(req.url === "/home"){
        res.end("home")
        console.log("home")

    }   
    else{
        res.end("404")
        console.log("404")
    }   
})

server.listen(3000,function(){
    console.log("server started")
})