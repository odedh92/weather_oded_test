import React, { useState } from 'react';
import { wrapChartDays } from '../utils/utils';
import ForecastContainer from './ForecastContainer';
import WeatherChart from './WeatherChart';

function Weather(props) {

  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)

  const Results = () => (
    <div className="extraData">
      <div className="firstEx" style = {{color:'black'}} >
        <span>Wind speed: {props.weatherData.wind.speed} km/h</span>
        <span>Humidity: {props.weatherData.main.humidity}</span>
      </div>

      <div className="secondEx" style = {{color:'black'}}>
        <span>Pressure: {props.weatherData.main.pressure}</span>
        <span>Sunrise Time: {new Date(props.weatherData.sys.sunrise).toLocaleTimeString()}</span>
      </div>
    </div>
  );

  return <div>
    <div className="weatherData">
      <div className="mainData" >
        <h2>{props.weatherData.name},{props.weatherData.sys.country}</h2>
        <h3>{props.weatherData.weather[0].description}</h3>
      </div>
      <div className="temp">
        <span>Current Temp:{props.weatherData.main.temp}</span>
        <span>Min Temp:{props.weatherData.main.temp_min}</span>
        <span>Max Temp:{props.weatherData.main.temp_max}</span>
      </div>
      <div className="icon">
        <img
          className="WeatherIcon"
          src={
            "https://openweathermap.org/img/wn/" +
            props.weatherData.weather[0].icon +
            ".png"
          }
          alt={props.weatherData.weather[0].main}
        />
      </div>
    </div>
    <button className="Toggle" onClick={onClick} >{showResults ? 'Collapse' : 'Expand'}</button>
    {showResults && <div style={{ display: 'flex', flexDirection: 'column',width:'100%', alignItems: 'center' }}>
      <Results />
      <ForecastContainer forecast = {props.forecast}/>
      <WeatherChart wData={wrapChartDays(props.forecast)} />
    </div>}
  </div>;
};

export default Weather;
