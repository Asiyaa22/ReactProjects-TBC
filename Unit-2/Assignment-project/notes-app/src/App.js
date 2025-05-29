import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Note from "./components/Notes";
import "./notesApp.css";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "This is your first note" },
    { id: 2, text: "Welcome to the notes app!" },
  ]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      text: `New Note ${notes.length + 1}`,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <Navbar />
      <div className="note-container">
        {notes.map((note) => (
          <Note key={note.id} text={note.text} />
        ))}
        <button className="add-button" onClick={addNote}>+</button>
      </div>
    </div>
  );
};

export default App;
