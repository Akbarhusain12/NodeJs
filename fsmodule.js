const fs = require('fs');

// fs.readFile('example.txt','utf8',(err,data) =>{
//     console.log(err,data)
// })


// console.log("Finished reading file")

// const a = fs.readFileSync('example.txt')

// console.log(a.toString())
// console.log("Finished reading file")



// fs.writeFile('file.txt',"This is the content for new file",()=>{
//     console.log("Content written to file")
// })

// console.log("Finished writing file")

const b = fs.writeFileSync('file.txt',"This is the content for new file kmdjjicjdcndc")

console.log(b)
console.log("Finished writing file")