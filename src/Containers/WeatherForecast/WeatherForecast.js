import React, { Component } from 'react';
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

class WeatherForecast extends Component {

    state= {
        nextDaysForecast: [
            {day: 'Monday', maxTemp: this.props.weatherInfo.getMaxTempByDate('date'), minTemp: this.props.weatherInfo.getMinTempByDate('date')},
            {day: 'Tuesday', maxTemp: this.props.weatherInfo.getMaxTempByDate('date'), minTemp: this.props.weatherInfo.getMinTempByDate('date')},
            {day: 'Wednesday', maxTemp: this.props.weatherInfo.getMaxTempByDate('date'), minTemp: this.props.weatherInfo.getMinTempByDate('date')},
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