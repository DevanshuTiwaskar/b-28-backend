//http is a module that allows you to create a server
const http = require("http")

//https is a module that allows you to create a secure server
const https = require("https")

//http.createServer is a method that creates a server
const server = http.createServer((req,res)=>{
    console.log(req.url)
})  

//server.listen is a method that listens for incoming connections on the server
server.listen(3000,()=>{
    console.log("server started")
})