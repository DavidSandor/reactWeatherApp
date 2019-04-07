import React, { Component } from 'react';
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

class WeatherForecast extends Component {

    getWeatherForecastDays = () => {
        const forecastDays = [];

        for (let index = 0; index < 3; index++) {
            forecastDays.push(this.props.weatherInfo.getWeatherStateByDay(index));           
        }

        return forecastDays;
    }

    render() {

        const style = {
            //backgroundColor: 'Blue',
            float: 'left',
            width: '60%',
            boxSizing: 'border-box',
            padding: '15px',
            textAlign: 'center',
            height: '300px'

        };

        const forecastList = this.getWeatherForecastDays().map((foreCastDay, index) => 
            <WeatherCard
                title={`day ${index}`}
                maxTemp={foreCastDay.maxTemp} 
                minTemp={foreCastDay.minTemp}
                isMinimized={true}>
            </WeatherCard>
        )

        return (
            <div style={style}>
                {forecastList}
            </div>
        );
    }
}
  
export default WeatherForecast;