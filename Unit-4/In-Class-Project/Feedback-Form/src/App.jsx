import React from 'react';
// Import global styles for the app
import './App.css';
// Import the FeedbackForm component from its folder
import FeedbackForm from './components/FeedbackForm.jsx/FeedbackForm';

function App() {
  return (
    // Main container div with app-specific styling
    <div className="app-container">
      {/* Page title */}
      <h1>Feedback Collector</h1>
      {/* Render the FeedbackForm component */}
      <FeedbackForm/>
    </div>
  );
}

// Export the App component as the default export
export default App;
