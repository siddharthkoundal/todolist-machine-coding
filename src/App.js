import { useState } from "react";
import "./App.css";
import EnterInput from "./components/EnterInput.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import data from "./data.json";
import Search from "./components/Search.jsx";

function App() {
  const [todos, setTodos] = useState(data);
  const [search, setSearch] = useState("");

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

  const handleToggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <EnterInput onAdd={handleAddTask} />
      <List
        todos={filteredTodos}
        onDelete={handleDeleteTask}
        onToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
}

export default App;
