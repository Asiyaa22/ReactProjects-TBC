import React, { useEffect, useState } from 'react';

// TaskItem component: displays a single task and how long ago it was added
function TaskItem({ task }) {
  // Local state to store how many seconds have passed since the task was created
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    // Set up a timer that updates every second
    const interval = setInterval(() => {
      const now = Date.now(); // Get current time
      const seconds = Math.floor((now - task.startTime) / 1000); // Calculate elapsed seconds
      setSecondsPassed(seconds); // Update state
    }, 1000);

    // Cleanup function: clear the timer when the component is removed from the DOM
    return () => clearInterval(interval);
  }, [task.startTime]); // Re-run effect only if task.startTime changes

  return (
    <div className="task-card">
      {/* Display task text */}
      <p className="task-text">{task.text}</p>

      {/* Display timer showing how many seconds ago the task was added */}
      <p className="task-timer">⏱️ {secondsPassed} seconds ago</p>
    </div>
  );
}

export default TaskItem; // Export the component