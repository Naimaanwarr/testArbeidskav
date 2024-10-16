import React, {useState} from 'react';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function SongForm({ onNewAdd }) {
    const [song, setSong] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Adding song:", song);
        onNewAdd(song);
        setSong("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Song title:
                <input
                    type="text"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}

function MusicApplication() {
     const[songs, setSongs] = useState([])

    function handleNewAdd(song) {
       setSongs((prevSongs) => [song, ...prevSongs]);


        console.log("New song added:", song);
    }

    return <>

            <h1>My Favorite Songs</h1>

        <ul>
            {songs.map((song) => (<div key={song}> <input type={"checkbox"}/>
                {song}
            </div>) )}
        </ul>

            <SongForm onNewAdd={handleNewAdd} />
        </>;

}

root.render(<MusicApplication />);
