function Search({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Type a name to search..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Search;