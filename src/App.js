import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-2xl font-bold">To-Do List</h1>
      </nav>
      <div className="flex flex-col items-center flex-grow p-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full mb-8">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              className="border border-gray-00 rounded-lg p-3 w-full text-xl"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
          {tasks.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
            >
              <span className="text-gray-700">{t}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center py-3">
        <p>&#169; 2024 Harshit. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
