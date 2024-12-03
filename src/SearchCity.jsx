import { useState } from "react";
export default function CitySearch({ fetchWeatherProp }) {
  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeatherProp(search);
    }
  };
  return (
    <div className="Search-bar">
      <input
        onKeyDown={handleKeyDown}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        id="search-city"
        placeholder="Search for your prefered city..."
      />
      <button
        onClick={() => {
          if (search) fetchWeatherProp(search);
        }}
        id="search-button"
      >
        Search
      </button>
    </div>
  );
 
}
