import React, { Component } from 'react';
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

class TodaysWeather extends Component {

  state = {
    currentWeather: this.props.weatherInfo.getCurrentWeatherState()
  }

  render() {

    const style = {
      //backgroundColor: 'Green',
      float: 'left',
      width: '40%',
      boxSizing: 'border-box',
      padding: '15px',
      textAlign: 'center',
      height: '300px'
    }

    return (
      <div style={style}>
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