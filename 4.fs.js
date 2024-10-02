//fs is a module that allows you to interact with the file system
const fs = require("fs")




// // fs.writeFile(path, data[, options], callback)

// fs.writeFile("file.txt","my name is devanshu", function(err){
//     if(err) console.log(err);
//         else console.log("done");
// })


// // fs.appendFile(path, data[, options], callback) 

// fs.appendFile("file.txt"," to me kay karu", function(err){
//     if(err) console.log(err);
//     else console.log("append")     
// })


// // fs.rename(oldPath, newPath, callback)

// fs.rename("new file.txt","file.txt",function(err){
//     if(err) console.log(err)
//         else console.log("doner")
// })

// fs.copyFile(src, dest[, mode], callback)

// fs.copyFile("file.txt","./copy/copyfile.text", function(err){
//    if(err) console.log(err)
//     else console.log("copy")
   
// })

// fs.unlink(path, callback) ==> delete the file
// fs.unlink("file.txt",function(){
//     if(err) console.log(err)
//         else console.log("deleted") 
// })

//fs.rmdir(path[, options], callback) ===:> delete the empty folder
// fs.rmdir("./copy",function(err){
//     if(err) console.log(err)
//         else console.log("emyt folder deleted")
// })


// ===:> this well delete whole folder
// fs.rmdir("./copy",{recursive: true},function(err){
//     if(err) console.log(err)
//         else console.log("whole folder deleted")
// })

