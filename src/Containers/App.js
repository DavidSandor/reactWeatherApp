import React, { Component } from 'react';

import Header from './Header'

import './App.css';
import './Header.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName="MyWeather"/>
      </div>
    );
  }
}

export default App;
