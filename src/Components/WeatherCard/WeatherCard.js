import React from 'react';
import WeatherImage from '../../Assets/WeatherImages/weather.png'

const weatherCard = (weatherInfo) => {    

    const style = {
        float: 'left',
        width: weatherInfo.isMinimized ? '30%' : '100%',
        height: '100%',
        backgroundColor: 'yellow',
        marginRight: '10px',
        border: '2px solid gray',
        borderRadius: '20px'
    }

    return (
        <div style={style}>
            <h2>{weatherInfo.title}</h2>
            <img src={WeatherImage} alt="weather"></img>
            {!weatherInfo.isMinimized ? <h3>{weatherInfo.currentTemp}</h3> : null}
            <p>{weatherInfo.maxTemp}</p>
            <p>{weatherInfo.minTemp}</p>
        </div>
    )
}

export default weatherCard;