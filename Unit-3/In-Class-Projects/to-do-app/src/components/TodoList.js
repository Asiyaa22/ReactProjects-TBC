import React, { useState } from "react";
import "../../src/todoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, checkListText: "Learn React", checkListStatus: true },
    { id: 2, checkListText: "Build a single page react App", checkListStatus: false },
    { id: 3, checkListText: "Complete the Assignment", checkListStatus: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checkListStatus: !task.checkListStatus } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const newTaskItem = {
      id: Date.now(),
      checkListText: newTask,
      checkListStatus: false,
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask(""); // clear input
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
       {/* Input to add task */}
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.checkListStatus ? "checkListStatus" : ""}
          >
            <input
              type="checkbox"
              checked={task.checkListStatus}
              onChange={() => handleToggle(task.id)}
            />
            {task.checkListText}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
