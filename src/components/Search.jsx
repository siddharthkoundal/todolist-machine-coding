const Search = ({ search, setSearch }) => {
  return (
    <div className="input-section">
      <input
        className="input"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Enter search value"
      />
    </div>
  );
};

export default Search;
