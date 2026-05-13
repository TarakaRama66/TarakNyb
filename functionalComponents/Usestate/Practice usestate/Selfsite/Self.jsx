import { useState } from "react";

function Selfsite() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  // Add
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
  };

  // Delete
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);

    setTasks(updatedTasks);
  };

  // Complete
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes for my self </h1>

       {/* Input */}
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <hr />
      {/* List */}
      {tasks.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: item.completed
                ? "line-through"
                : "none",
              marginRight: "10px",
            }}
          >
            {item.text}
          </span>

          <button onClick={() => toggleTask(item.id)}>
            {item.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTask(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Selfsite;