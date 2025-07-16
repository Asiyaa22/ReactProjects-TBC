import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Note from "./components/Notes";
import Input from "./components/Input";
import "./notesApp.css";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "This is your first note" },
    { id: 2, text: "Welcome to the notes app!" },
  ]);

  const addNote = (text) => {
  if (text.trim() === "") return;

    const newNote = {
      id: notes.length + 1,
      text,
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
      </div>
      <Input onAdd={addNote}/>
    </div>
  );
};


export default App;