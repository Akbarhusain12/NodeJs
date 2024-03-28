import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send("This is server Page");
})

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Title 1",
            "content": "Content 1"
        },
        {
            "id": 2,
            "title": "Title 2",
            "content": "Content 2"
        },
        {
            "id": 3,
            "title": "Title 3",
            "content": "Content 3"
        },
        {
            "id": 4,
            "title": "Title 4",
            "content": "Content 4"
        },
        {
            "id": 5,
            "title": "Title 5",
            "content": "Content 5"
        }
    ];
    res.send(jokes);
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})  