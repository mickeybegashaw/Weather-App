import React, { useState, useEffect } from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";
import { useContext } from "react";
import { weatherDataContext } from "./context/weatherDataContext";

export default function WeatherDisplat() {
  const [fullDate, setFullDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    setFullDate(formattedDate);
  }, []);
  const {weatherData}=useContext(weatherDataContext)

  return (
    <div className="weather-dispaly">
      <div className="time-city">
        <h3 id="city-name">{weatherData?.name}</h3>

        <p id="current-date">{fullDate}</p>
      </div>

      <div className="wether-detail">
        <h1 id="tempreture">
        {weatherData?.main?.temp} <sup>°C</sup>
        </h1>
        <div style={{ textAlign: "center" }}>
              {weatherData?.weather?.[0]?.icon && <img 
              style={{width:"7rem",
                margin:"0px"
              }} id="tempicon" src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}.png`} alt="weather icon" />}
          
          <p>{weatherData?.weather?.[0]?.main}</p>
        </div>
        <div className="other-info">
          <div className="humidity">
            <WiHumidity size={70} />
            <p>{weatherData?.main?.humidity}%</p>
            <p>humidity</p>
          </div>
          <div className="wind">
            <PiWindFill size={70} />
            <p>{weatherData?.wind?.speed} km/h</p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
