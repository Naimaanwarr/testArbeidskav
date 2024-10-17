import express from 'express';

const app = express();

app.get("/api/books", (req, res) => {
    res.send([{
        title: "the book from the server",
    }])
})

app.listen(3000);