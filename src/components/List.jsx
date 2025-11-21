const List = ({ todos, onDelete }) => {
  return (
    <>
      <div>List</div>
      <ul style={{ paddingLeft: 0 }}>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{ listStyle: "none", marginBottom: "0.5rem" }}
          >
            {item.task}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
