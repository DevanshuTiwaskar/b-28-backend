//what is http?
//http is a protocol that allows you to communicate with a server

//what is a protocol?
//a protocol is a set of rules that allows you to communicate with a server

//what is a server?
//a server is a computer that stores data and sends it to a client


//what is a request?
//a request is a message that a client sends to a server

//what is a response?
//a response is a message that a server sends to a client
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