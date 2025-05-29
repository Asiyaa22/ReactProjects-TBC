import React from "react";

const Note = ({ text }) => {
  return (
    <div className="note-card">
      <p>{text}</p>
    </div>
  );
};

export default Note;
