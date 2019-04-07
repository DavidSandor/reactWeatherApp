import React, { Component } from 'react';
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

class TodaysWeather extends Component {

  state = {
    currentWeather: this.props.weatherInfo.getCurrentWeatherState()
  }

  render() {

    return (
      <div>
          <WeatherCard 
              title="Currently" 
              currentTemp={this.state.currentWeather.currentTemp} 
              maxTemp={this.state.currentWeather.maxTemp} 
              minTemp={this.state.currentWeather.minTemp}
              isMinimized={false}>
          </WeatherCard>
      </div>
    );
  }
}
  
export default TodaysWeather;