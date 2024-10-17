import express from 'express';

const app = express();
app.use(express.json());

const books = [{
    title: "the book from the server"
}];

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.post("/api/books", (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(200).json(newBook);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});