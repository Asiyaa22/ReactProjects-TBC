import React from 'react'; // Import React

// Functional component to handle text input
function CharacterInput({ text, setText }) {
  return (
    <div className="input-section">
      {/* Label for the text area */}
      <label>Type something:</label>

      {/* Textarea for user input, bound to the 'text' state */}
      <textarea
        value={text} // Controlled input value from parent state
        onChange={(e) => setText(e.target.value)} // Update parent state on user input
        placeholder="Start typing..." // Placeholder text inside the textarea
      />
    </div>
  );
}

export default CharacterInput; // Export the component to be used in other files