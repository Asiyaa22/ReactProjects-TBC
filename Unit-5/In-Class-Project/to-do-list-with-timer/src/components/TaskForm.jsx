import React, { useState } from 'react';

// TaskForm component: handles user input to add new tasks
function TaskForm({ onAddTask }) {
  // Local state to track input field value
  const [taskText, setTaskText] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (!taskText) return; // Don't submit if input is empty

    onAddTask(taskText);  // Pass the task up to the parent component
    setTaskText('');      // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {/* Input field for entering task text */}
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        className="task-input"
      />

      {/* Button to submit the form */}
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
}

export default TaskForm; // Export the component