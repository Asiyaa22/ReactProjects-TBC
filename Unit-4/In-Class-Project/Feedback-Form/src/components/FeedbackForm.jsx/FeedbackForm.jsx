import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  // State variable to store the name input field value
  const [name, setName] = useState('');
  // State variable to store the feedback input field value
  const [feedback, setFeedback] = useState('');
  // State variable to keep track of all feedback entries submitted
  const [entries, setEntries] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Simple validation: check if name or feedback is empty
    if (!name || !feedback) {
      alert('Please fill in both fields.');
      return; // Exit early if validation fails
    }

    // Add new entry to the entries array by creating a new array copy with spread operator
    setEntries([...entries, { name, feedback }]);

    // Reset the input fields to empty after successful submission
    setName('');
    setFeedback('');
  };

  return (
    <div className="feedback-form-container">
      {/* Form element that calls handleSubmit on submission */}
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Name:
          {/* Controlled input for name, updating state on change */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Feedback:
          {/* Controlled textarea for feedback, updating state on change */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
          />
        </label>
        {/* Submit button to trigger form submission */}
        <button type="submit">Submit</button>
      </form>

      {/* Section to display all submitted feedback entries */}
      <div className="feedback-entries">
        <h2>Feedback Entries</h2>
        <ul>
          {/* Loop through entries array and render each feedback */}
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.name}:</strong> {entry.feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FeedbackForm;
