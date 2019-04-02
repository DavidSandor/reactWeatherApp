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

    getMaxTempByDate = (date) => {
        return 22;
    }

    getMinTempByDate = (date) => {
        return 7;
    }
}
  
export default WeatherAPIInterface;