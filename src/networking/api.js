import axios from 'axios'

const base = "https://api.openweathermap.org"

const endPoints = {
    coordinates: '/geo/1.0/direct',
    weather: '/data/2.5/weather',
    forecast: '/data/2.5/onecall'
};
 const getCoordinates = async (cityName) => {
    const queries = {
        q: cityName,
        limit: 1,
        appid: process.env.REACT_APP_API_KEY
    };
    const search = new URLSearchParams(queries)
    const url = base + endPoints.coordinates + "?" + search
    return await axios.get(url).then(response => {
        if (response.data && response.data.length > 0) {
            const data = response.data[0]
            return { lon: data.lon, lat: data.lat }
        };
    });
};

const getWeather = async (coordinates) => {
    const queries = {
        lon: coordinates.lon,
        lat: coordinates.lat,
        appid: process.env.REACT_APP_API_KEY
    };

    const search = new URLSearchParams(queries)
    const url = base + endPoints.weather + "?" + search
    return await axios.get(url).then(response => {
        if (response.data) {
            return {
                name: response.data.name,
                weather: response.data.weather,
                sys: response.data.sys,
                main: response.data.main,
                wind: response.data.wind
            };
        };
    });
};


const getWeatherForecast = async (coordinates) => {
    const queries = {
        lon: coordinates.lon,
        lat: coordinates.lat,
        exclude: 'current,alerts,hourly,minutely',
        appid: process.env.REACT_APP_API_KEY
    };
    const search = new URLSearchParams(queries)
    const url = base + endPoints.forecast + "?" + search
    return await axios.get(url).then(response => {
        if (response.data) {
            return response.data
        };
    });
};

export async function coord() {
    return await getCoordinates('New York')
};
export async function forecast(coords) {
    return await getWeatherForecast(coords)
};
export async function weather(coords) {
    return await getWeather(coords)
};
