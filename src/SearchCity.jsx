export default function CitySearch({onSubmitChange,searchValue,onSubmitClick}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmitClick();
    }
  };
  return (
    <div className="Search-bar">
      <input
       onKeyDown={handleKeyDown}
      value={searchValue}
      onChange={onSubmitChange}
        type="text"
        id="search-city"
        placeholder="Search for your prefered city..."
      />
      <button onClick={() => onSubmitClick(searchValue)} id="search-button">Search</button>
    </div>
  );
}
