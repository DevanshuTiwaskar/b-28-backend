//sort is a method that sorts the array
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.sort((a,b)=>a-b))

//fetch is a method that fetches the data from the server
const fetch = require("fetch")

//async and await is a method that allows you to run the code asynchronously
async function fetchData(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(data)
}
fetchData()

//.then is a method that allows you to run the code asynchronously
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(data=>console.log(data))

//await is a method that allows you to run the code asynchronously
async function fetchData(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(data)
}
fetchData()
