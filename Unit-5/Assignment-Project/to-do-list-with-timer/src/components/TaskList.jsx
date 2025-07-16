import React from 'react';
import TaskItem from './TaskItem';

// TaskList component: responsible for displaying a list of TaskItem components
function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {/* Iterate through the tasks array and render a TaskItem for each task */}
      {tasks.map((task) => (
        // Use the unique task ID as the key and pass the task object as a prop
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList; // Export the component for use in other parts of the app