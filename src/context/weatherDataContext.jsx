import React, { createContext, useState } from "react";

export const weatherDataContext = createContext();

export default function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <weatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </weatherDataContext.Provider>
  );
}
