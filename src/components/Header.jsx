import "../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <h1
        style={{
          margin: 0,
          fontSize: "48px",
          color: "#4f8cff",
          letterSpacing: "2px",
        }}
      >
        TODO List
      </h1>
      <p style={{ marginTop: 8, fontSize: "20px", color: "#555" }}>
        Organize your tasks efficiently
      </p>
    </header>
  );
};

export default Header;
