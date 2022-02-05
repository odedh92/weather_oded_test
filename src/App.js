import './App.css';
import { useEffect, useState } from 'react'
import Weather from './components/Weather';
import { weather,forecast,coord } from './networking/api.js'

function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)

  useEffect(() => fetchWeather(), [null])
 
  const fetchWeather = () => {
    coord().then(coords => {
      forecast(coords).then(forecastData =>  setWeatherForecast(forecastData))
      weather(coords).then(weatherInfo => setWeatherData(weatherInfo))
    })
  }

  return (
    <div className="App" style={{ flexDirection: 'column', alignItems: 'center' }}>
      <header className="App-header">
        <h1 className="mainTitle" >Weather Assignment</h1>
        {weatherData && weatherForecast && <Weather forecast = {weatherForecast} weatherData={weatherData} />}
      </header>
  
    </div>
  );
}

export default App;

