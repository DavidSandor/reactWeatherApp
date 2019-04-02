class WeatherAPIInterface {    

    getCurrentWeatherState = () => {
        return 'sunny';
    }

    getCurrentTemp = () => {
        return 17;
    }

    getTodaysMaxTemp = () => {
        return 20;
    }

    getTodaysMinTemp = () => {
        return 11;
    }   
}
  
export default WeatherAPIInterface;