import React, { useEffect, useState } from 'react'; // Import React and necessary hooks

// Functional component that displays character stats based on input text
function CharacterStats({ text }) {
  const [charCount, setCharCount] = useState(0); // State to hold the number of characters

  // useEffect runs every time the 'text' prop changes
  useEffect(() => {
    setCharCount(text.length); // Update character count when text changes
  }, [text]);

  return (
    <div className="stats-section">
      {/* Display the character count */}
      <p>Character Count: {charCount}</p>

      {/* Show a warning if character count exceeds 100 */}
      {charCount > 100 && (
        <p className="warning">⚠️ Too many characters! Try to keep it under 100.</p>
      )}
    </div>
  );
}

export default CharacterStats; // Export the component for use in other parts of the app