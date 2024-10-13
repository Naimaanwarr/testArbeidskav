import React from 'react';
import {createRoot} from "react-dom";

const root = createRoot(document.getElementById('root'));

function MySongs() {
    return <form>
        <label>
        Song title: <input type={"text"}/>
        </label>
        <button type="submit">Add</button>
    </form>;
}

function MusicApplication() {
    return <>
        <h1>My Favorite Songs </h1>

        <MySongs />

        </>;
}

root.render(<MusicApplication />);