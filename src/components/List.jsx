const List = ({ todos, onDelete, onToggleCompleted }) => {
  return (
    <div className="list-section">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.task}
            </span>
            <div className="buttons">
              <button
                className={`checkbox-button ${item.completed ? "checked" : ""}`}
                onClick={() => onToggleCompleted(item.id)}
                aria-label="Mark as done"
              ></button>
              <button
                className="delete-button"
                onClick={() => onDelete(item.id)}
                aria-label="Delete todo"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
