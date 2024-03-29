import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send("This is server Page");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "Why don't scientists trust atoms?", content: "Because they make up everything!" },
        { id: 2, title: "What did one ocean say to the other ocean?", content: "Nothing, they just waved." },
        { id: 3, title: "I'm reading a book on anti-gravity...", content: "It's impossible to put down!" },
        { id: 4, title: "Parallel lines have so much in common.", content: "It's a shame they'll never meet." },
        { id: 5, title: "Who did the scarecrow win an award?", content: "Because he was outstanding in his field!" }
    ];
    res.send(jokes);
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})  