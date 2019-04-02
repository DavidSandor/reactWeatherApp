import React, { Component } from 'react';
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

class TodaysWeather extends Component {

    render() {      

      return (
        <div>
            <WeatherCard 
                title="Currently" 
                currentTemp={this.props.weatherInfo.getCurrentTemp()} 
                maxTemp={this.props.weatherInfo.getTodaysMaxTemp()} 
                minTemp={this.props.weatherInfo.getTodaysMinTemp()}
                isMinimized={false}>
            </WeatherCard>
        </div>
      );
    }
  }
  
  export default TodaysWeather;