import React, { Component } from 'react';
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

class WeatherForecast extends Component {

    state= {
        nextDaysForecast: [
            {day: 'Tomorrow', maxTemp: this.props.weatherInfo.getMaxTempByDate(1), minTemp: this.props.weatherInfo.getMinTempByDate(1)},
            {day: 'After tomorrow', maxTemp: this.props.weatherInfo.getMaxTempByDate(2), minTemp: this.props.weatherInfo.getMinTempByDate(2)},
        ]
    }

    render() {

        const forecastList = this.state.nextDaysForecast.map((foreCastDay)=> 
            <WeatherCard 
                title={foreCastDay.day} 
                maxTemp={foreCastDay.maxTemp} 
                minTemp={foreCastDay.minTemp}
                isMinimized={true}>
            </WeatherCard>
        )

        return (
            <div>
                {forecastList}
            </div>
        );
    }
}
  
  export default WeatherForecast;