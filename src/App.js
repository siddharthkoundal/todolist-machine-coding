import { useState } from "react";
import "./App.css";
import EnterInput from "./components/EnterInput.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import data from "./data.json";

function App() {
  const [todos, setTodos] = useState(data);

  const handleAddTask = (newTodo) => {
    const newItem = {
      id: todos.length + 1,
      task: newTodo,
      completed: false,
    };
    setTodos([...todos, newItem]);
  };

  const handleDeleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Header />
      <EnterInput onAdd={handleAddTask} />
      <List todos={todos} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
