import React, { useState } from 'react';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function BookForm({ onNewAdd }) {
    const [book, setBook] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Adding book:", book);
        onNewAdd(book);
        setBook("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Book title:
                <input
                    type="text"
                    value={book}
                    onChange={(e) => setBook(e.target.value)}
                />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}

function LibraryApplication() {
    const [books, setBooks] = useState([]);

    function handleNewAdd(book) {
        setBooks((prevBooks) => [book, ...prevBooks]);
        console.log("New book added:", book);
    }

    return (
        <>
            <h1>My Favorite Books</h1>
            <ul>
                {books.map((book) => (
                    <div key={book}>
                        <input type="checkbox" />
                        {book}
                    </div>
                ))}
            </ul>
            <BookForm onNewAdd={handleNewAdd} />
        </>
    );
}

root.render(<LibraryApplication />);
