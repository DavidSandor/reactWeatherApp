import React, { Component } from 'react';

import WeatherAPIInterface from '../../Assets/WeatherAPIInterface'

import Header from '../Header/Header'

import TodaysWeather from '../TodaysWeather/TodaysWeather'
import WeatherForecast from '../WeatherForecast/WeatherForecast'


import './App.css';

class App extends Component {

  weatherInterface = new WeatherAPIInterface();

  render() {
    return (
      <div className="App">
        <Header appName="MyWeather"/>
        <TodaysWeather weatherInfo={this.weatherInterface}/>
        <WeatherForecast weatherInfo={this.weatherInterface}/>
      </div>
    );
  }
}

export default App;
