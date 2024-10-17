import React, {useEffect, useState} from 'react';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function BookForm({ onNewAdd }) {
    const [book, setBook] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
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

    async function loadLibrary() {
        const res = await fetch("/api/books");
        if (res.ok){
           setBooks(await res.json());
        } else {
            console.log("Error occurred while fetching books...");
        }
    }

    useEffect(() => {
        loadLibrary();
    },[])

    async function handleNewAdd(book) {
        setBooks((prevBooks) => [book, ...prevBooks]);
        console.log("New book added:", book);
        await fetch("/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })
    }

    return (
        <>
            <h1>Books i want to read</h1>
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
