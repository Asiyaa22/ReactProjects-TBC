import React, { useState } from 'react'; // Import React and the useState hook
import './components/CharacterCount/CharacterCounter.css' // Import CSS for styling
import CharacterInput from './components/CharacterCount/CharacterInput'; // Import text input component
import CharacterStats from './components/CharacterCount/CharacterStats'; // Import character statistics component

// Main App component
function App() {
  // State to hold the text input from the user
  const [text, setText] = useState('');

  return (
    <div className="container">
      {/* Heading for the app */}
      <h1>Live Character Counter</h1>

      {/* Component for user to input text */}
      <CharacterInput text={text} setText={setText} />

      {/* Component to display character count and warning if needed */}
      <CharacterStats text={text} />
    </div>
  );
}

export default App; // Export the App component