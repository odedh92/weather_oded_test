import React from "react";
import { getDayString } from "../utils/utils";
export default function Forecast({ weatherInfo, day }) {
  return (
    <div style={{ margin: '16px', border: '.1px solid white', borderRadius: '8px', background: 'rgb(197, 196, 196)', padding: '4px' }}>
      <h1 className="Forecast__title">{getDayString(day)}</h1>
      <img
        className="Forecast__weather-icon"
        src={
          "https://openweathermap.org/img/wn/" +
          weatherInfo.weather[0].icon +
          ".png"
        }
        alt={weatherInfo.weather[0].main}
      />
      <div className="Forecast__temperature">
        <span className="temperature__max">
          {Math.round(weatherInfo.temp.max)}
          <sup className="temperature__symbol">°</sup>
        </span>
        <span className="temperature__min">
          {Math.round(weatherInfo.temp.min)}
          <sup className="temperature__symbol">°</sup>
        </span>
      </div>
    </div>
  );
};