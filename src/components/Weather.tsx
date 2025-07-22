interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: string;
}

interface WeatherProps {
    weather: WeatherInfo;
    message: string;
}

const Weather = ({weather, message}: WeatherProps) => {
    if (message) {
        return (
            <div>{message}</div>
        )
    } else {
        return (
            <div className="info-weather">
                <p>Location: {weather.country},{weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {weather.sunset}</p>
            </div>
        );
    }
};

export default Weather;