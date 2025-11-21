import { useState } from "react";
import "../App.css";

const EnterInput = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div className="input-section">
      <input
        className="input"
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Enter todo"
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        className="add-todo-button"
        onClick={handleAdd}
        aria-label="Add todo"
      >
        + Add
      </button>
    </div>
  );
};

export default EnterInput;
