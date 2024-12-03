import WeatherDisplay from "./weatherDisplay";
import CitySearch from "./SearchCity";
import { useEffect,useState } from "react";
import { BeatLoader } from "react-spinners";
import { useContext } from "react";
import { weatherDataContext } from "./context/weatherDataContext";

export default function App() {
  const {weatherData,setWeatherData}=useContext(weatherDataContext)
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
        fetchWeatherProp={fetchWeather}
      />

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="search-prompt">
          <BeatLoader />
        </div>
      ) : weatherData ? (
        <WeatherDisplay
        />
      ) : null}
      
    </div>
  );
}
