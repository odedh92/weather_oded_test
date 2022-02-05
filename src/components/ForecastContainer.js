import React, { useEffect } from 'react';
import Forecast from './Forecast';
import './../App.css'

function ForecastContainer({forecast}) {
  return  (
      <div className='WeatherAndForecast__container'>
          {forecast.daily.slice(0, forecast.daily.length - 1).map((data, index) => 
           {return <Forecast key={data.dt} day={index} weatherInfo={data} />})}</div>)
};

export default ForecastContainer;
