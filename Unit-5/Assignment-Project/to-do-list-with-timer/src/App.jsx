import React, { useState } from 'react';
import './components/TodoStyles.css';           // Import CSS for styling
import TaskForm from './components/TaskForm';   // Import form component to add tasks
import TaskList from './components/TaskList';  // Import component to display list of tasks


function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),          // Generate a unique ID using current timestamp
      text: taskText,          // Task content entered by the user
      startTime: Date.now(),   // Capture the time when task was created
    };
    setTasks([...tasks, newTask]); // Update the task list with the new task
  };

  return (
    <div className="todo-container">
      {/* Title of the app */}
      <h1 className="main-title">📝 To-Do List with Timer</h1>

      {/* Form to input new tasks */}
      <TaskForm onAddTask={addTask} />

      {/* Display the list of tasks */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App; // Export the App component for use in index.js