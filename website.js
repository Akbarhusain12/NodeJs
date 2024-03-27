// Without ExpressJS Code

// const fs = require('fs')
// const http = require('http')

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     // console.log(req)
//     res.setHeader('Content-Type', 'text/html')
//     if (req.url == '/') {

//         res.statusCode = 200;
//         const data = fs.readFileSync('index.html');
//         res.end(data.toString());
//     }
//     else if (req.url == '/about') {

//         res.statusCode = 200;
//         res.end('<h1>This is the About Page</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quidem architecto sapiente corrupti eos velit dolores ea veniam, ullam magni neque, quas aliquam vitae! Ipsam cumque id hic officiis, odit doloremque iste pariatur nulla corrupti explicabo. Numquam nulla perferendis fuga exercitationem debitis, quae consectetur ex laborum ipsum expedita, asperiores, quo ea dolorem! Quaerat aut aliquam ipsum eaque, adipisci omnis mollitia. Neque cumque ratione, obcaecati voluptates reprehenderit voluptatibus dolor non numquam corrupti molestias voluptatem nobis dolorem animi rem. Totam dolore modi quasi exercitationem vitae illum ipsam accusantium velit, placeat ut delectus?</p>');
//     }
// })

// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`)
// })  




// With Express Js Code
require ('dotenv').config()
const express = require('express')
const fs = require('fs')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
})

app.get('/about', (req, res) => {
    res.send("This is about Page")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})