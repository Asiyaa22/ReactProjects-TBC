import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback) {
      alert('Please fill in both fields.');
      return;
    }
    setEntries([...entries, { name, feedback }]);
    setName('');
    setFeedback('');
  };

  return (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="feedback-entries">
        <h2>Feedback Entries</h2>
        <ul>
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
