import WeatherDisplay from "./weatherDisplay";
import CitySearch from "./SearchCity";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchWeather(city) {
    const API_KEY = "38afade856221bc3550b284dda4aaf5c";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      setLoading(true);
      const response = await fetch(URL);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (error) {
      console.error("Error fetching data", error);
      setWeatherData(null);
      setError("City not found. Please try again.");
      hideErrorAfterDelay();
    } finally {
      setLoading(false);
    }
  }

  const hideErrorAfterDelay = () => {
    setTimeout(() => {
      setError(""); 
    }, 5000);  
  };

  useEffect(() => {
    fetchWeather("Addis Ababa");  
  }, []);

  return (
    <div className="weather-body">
      <CitySearch
        onSubmitChange={(e) => setSearch(e.target.value)}
        searchValue={search}
        onSubmitClick={() => {
          if (search) fetchWeather(search);  
        }}
      />

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="search-prompt">
          <BeatLoader />
        </div>
      ) : weatherData ? (
        <WeatherDisplay
          temp={weatherData?.main?.temp}
          city={weatherData?.name}
          cloudy={weatherData?.weather?.[0]?.description}
          humidity={weatherData?.main?.humidity}
          wind={weatherData?.wind?.speed}
          icon={weatherData?.weather?.[0]?.icon}
          WeatherName={weatherData?.weather?.[0]?.main}
        />
      ) : null}
    </div>
  );
}