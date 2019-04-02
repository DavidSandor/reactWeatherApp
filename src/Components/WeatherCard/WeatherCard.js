import React from 'react';
import WeatherImage from '../../Assets/WeatherImages/weather.png'

const weatherCard = (weatherInfo) => {
    return (
        <div>
            <h2>{weatherInfo.title}</h2>
            <img src={WeatherImage} alt="weather"></img>
            <h3>{weatherInfo.currentTemp}</h3>
            <p>{weatherInfo.maxTemp}</p>
            <p>{weatherInfo.minTemp}</p>
        </div>
    )
}

export default weatherCard;