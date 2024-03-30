// const fs = require('fs');

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

// const b = fs.writeFileSync('file.txt',"This is the content for new file kmdjjicjdcndc")

// console.log(b)
// console.log("Finished writing file")

import { Console } from 'console';
import fs from 'fs';

// fs.stat('file.txt', (err, stats) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // Print out the statistics
//         console.log('File stats:', stats);
//         // You can access specific properties of the stats object like this:
//         console.log('File size:', stats.size);
//         console.log('Is directory?', stats.isDirectory());
//         console.log('Is file?', stats.isFile());
        
//     }
// });

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    console.log('File content:', data);
});