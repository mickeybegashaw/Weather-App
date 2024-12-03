import React, { useState, useEffect } from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";

export default function WeatherDisplat({
  temp ,
  city ,
  humidity ,
  wind ,
  icon,
  WeatherName ,
}) {
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

  return (
    <div className="weather-dispaly">
      <div className="time-city">
        <h3 id="city-name">{city}</h3>

        <p id="current-date">{fullDate}</p>
      </div>

      <div className="wether-detail">
        <h1 id="tempreture">
          {temp} <sup>°C</sup>
        </h1>
        <div style={{ textAlign: "center" }}>
              {icon && <img 
              style={{width:"7rem",
                margin:"0px"
              }} id="tempicon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" />}
          
          <p>{WeatherName}</p>
        </div>
        <div className="other-info">
          <div className="humidity">
            <WiHumidity size={70} />
            <p>{humidity}%</p>
            <p>humidity</p>
          </div>
          <div className="wind">
            <PiWindFill size={70} />
            <p>{wind} km/h</p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
