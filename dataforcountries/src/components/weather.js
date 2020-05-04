import React, { useState, useEffect } from "react";
import axios from "axios";

require("dotenv").config();

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.weatherstack.com/current", {
        params: {
          access_key: process.env.REACT_APP_NOT_SECRET_CODE,
          query: capital,
        },
      })
      .then((response) => {
        setWeather(response.data.current);
        setIcon(response.data.current.weather_icons);
      })
       .catch((error) => {
       });
  }, [capital]);

  if (weather !== undefined)
    return (
      <>
        <div>
          <b>temperature:</b>
          {weather.temperature}
        </div>
        <img src={icon[0]} width="50" height="50" />
        <div>
          <b> wind:</b>
          {weather.wind_speed} mph direction {weather.wind_dir}
        </div>
      </>
    );

  return null;
};

export default Weather;
